---
type: concept
status: draft
core: false
tags:
- quantization
- kv-cache
- apple-silicon
aliases:
- Google TurboQuant KV Cache Compression
- Google-TurboQuant-KV-캐시-2단계-압축-기법
sources:
- raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 TurboQuant, 애플 실리콘 상륙.md
created: 2026-07-21
updated: 2026-07-21
---
# Google [[TurboQuant]] KV 캐시 2단계 압축 기법

## 한 줄 정의
구글 리서치(Google Research)가 개발한 ICLR 2026 채택 KV 캐시 압축 알고리즘으로, PolarQuant와 QJL(Quantised Johnson-Lindenstrauss) 2단계 파이프라인을 통해 어텐션 품질 손실 없이 KV 캐시 크기를 4~6배 압축하여 소비자용 애플 실리콘 맥에서 32B 모델의 대용량 컨텍스트 추론을 가능하게 한 기술이다.

## 핵심 요지
- **KV 캐시 메모리 병목 해소**: 모델 가중치(Weights)와 달리 컨텍스트 길이에 비례해 늘어나는 KV 캐시(32B 모델 128K 컨텍스트 시 30~40GB 소모)를 원소당 2.5~3.5비트 수준으로 압축.
- **1단계 PolarQuant**: 월시-하마다드 무작위 회전을 적용해 튀는 아웃라이어(Outlier)를 가우시안 분포로 평탄화한 후, 극좌표계(방향 3비트 + 크기 8비트)로 양자화하여 채널 스케일 저장 없는 오버헤드 제로 달성.
- **2단계 QJL (Quantised Johnson-Lindenstrauss)**: 차원당 단 1비트의 부호 비트(+1/-1)를 할당하여 무작위 행렬 투영 기반 내적 오차 및 체계적 편향을 소프트맥스 직전에 완전 보정.
- **애플 실리콘(MLX) 및 Fused Metal 커널**: `arozanov/turboquant-mlx` 구현체는 퓨즈드 메탈 커널 최적화를 통해 FP16 속도의 91~98%를 유지하며 4.6배 압축 달성.

## 상세
로컬 [[LLM]] 추론 시 128K~256K 컨텍스트를 돌릴 때 메모리 고갈의 원인은 가중치가 아니라 KV 캐시다.

[[TurboQuant]] 알고리즘 구조:
1. **PolarQuant (AISTATS 2026)**:
   - Walsh-Hadamard Transform을 적용해 아웃라이어를 전 차원에 골고루 분산시킴.
   - 직교 좌표계를 극좌표계(방향각 + 반지름 크기)로 변환.
   - 재귀적 극 분해(Recursive Polar Decomposition)로 방향 3비트, 크기 8비트 양자화.
   - 벡터 양자화 왜곡률 하한값과의 인자 차이가 2.7배에 불과함을 수학적으로 증명.
2. **QJL (Quantised Johnson-Lindenstrauss)**:
   - 원본 벡터와 PolarQuant 재구성 벡터의 오차를 구하고, JL 무작위 행렬 투영 후 부호 비트만 1비트 저장.
   - 어텐션 내적 계산 시 소프트맥스 직전에 보정값 더함.

MLX 애플 실리콘 3대 오픈소스 구현체:
- `sharpner/turboquant-mlx`: V2 (속도 최적화, mx.quantized_matmul) & V3 (Lloyd-Max 코드북, 최고 품질).
- `flovflo/turboquant-mlx-qwen35-kv`: [[Qwen 3.5]] 특화 backend (프롬프트 679 tok/s, 생성 44.8 tok/s).
- `arozanov/turboquant-mlx`: 커스텀 Fused Metal 커널 적용. M4 Pro 48GB에서 Qwen2.5-32B 16K 컨텍스트 KV 캐시를 4.2GB -> 897MB로 감소시킴 (4.6배 압축, FP16 속도 98% 유지).

## 예시
- **Gemma 4 31B 128K 컨텍스트 수치**: Prince Canuma의 실측 결과, KV 캐시 메모리 소모량이 13.3GB에서 4.9GB로 63% 급감했으며, 피크 메모리도 75.2GB에서 65.8GB로 하락.
- **256K 컨텍스트 초고속 TTFT 수치**: John T Davies 사례에서 75페이지 PDF(30K 토큰) 문서를 256K KV 캐시 상에 Pre-fill하고 [[TurboQuant]] 압축 적용 시, 첫 토큰 생성 시간(TTFT) 150ms 미만 달성.
- **Llama 3.2 3B / Gemma 3 4B 펄플렉시티 개선**: Llama 3.2 3B V2 4비트 회전 적용 시 정규화 효과로 FP16 원본 대비 펄플렉시티 -0.8% 개선 (오히려 우수). Gemma 3 4B(D=256) 역시 3비트 rot+QJL 시 -1.1% 개선.

## 충돌
- **V3 Lloyd-Max vs V2 mx.quantized_matmul**: V3 모드는 극저비트(3비트 이하)에서 품질이 우수하지만 퓨즈드 메탈 커널이 없으면 파이썬 연산 지연으로 5~6배 느려진다. 실시간 대화형 챗봇에는 Fused 커널 기반 V2 4비트 회전이나 `arozanov` 백엔드를 써야 한다.

## 관련 노트
- [[Apple Foundation Models CLI (fm)]]
- [[AI 에이전트 런타임 역할 맵]]

## 출처
- KV 캐시 병목 및 [[TurboQuant]] 논문/ICLR 2026 개요: [raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 [[TurboQuant]], 애플 실리콘 상륙.md#L11-L30](file:///Users/railscraft/Obsidian/raw/5%EB%B0%B0%20%EC%A0%81%EC%9D%80%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A1%9C%20%EB%A7%A5%EC%97%90%EC%84%9C%2032B%20%EB%AA%A8%EB%8D%B8%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20%EA%B5%AC%EA%B8%80%20[[TurboQuant]],%20%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%83%81%EB%A5%99.md#L11-L30)
- 1단계 PolarQuant & 2단계 QJL 원리: [raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 [[TurboQuant]], 애플 실리콘 상륙.md#L31-L51](file:///Users/railscraft/Obsidian/raw/5%EB%B0%B0%20%EC%A0%81%EC%9D%80%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A1%9C%20%EB%A7%A5%EC%97%90%EC%84%9C%2032B%20%EB%AA%A8%EB%8D%B8%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20%EA%B5%AC%EA%B8%80%20[[TurboQuant]],%20%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%83%81%EB%A5%99.md#L31-L51)
- MLX 구현체 3종 및 Fused Metal 성능: [raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 [[TurboQuant]], 애플 실리콘 상륙.md#L55-L86](file:///Users/railscraft/Obsidian/raw/5%EB%B0%B0%20%EC%A0%81%EC%9D%80%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A1%9C%20%EB%A7%A5%EC%97%90%EC%84%9C%2032B%20%EB%AA%A8%EB%8D%B8%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20%EA%B5%AC%EA%B8%80%20[[TurboQuant]],%20%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%83%81%EB%A5%99.md#L55-L86)
- 실측 수치 (128K 13.3G->4.9G, TTFT 150ms): [raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 [[TurboQuant]], 애플 실리콘 상륙.md#L118-L126](file:///Users/railscraft/Obsidian/raw/5%EB%B0%B0%20%EC%A0%81%EC%9D%80%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A1%9C%20%EB%A7%A5%EC%97%90%EC%84%9C%2032B%20%EB%AA%A8%EB%8D%B8%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20%EA%B5%AC%EA%B8%80%20[[TurboQuant]],%20%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%83%81%EB%A5%99.md#L118-L126)
