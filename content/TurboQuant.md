---
aliases: []
core: false
created: 2026-07-10
sources:
- raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 TurboQuant, 애플 실리콘 상륙.md
status: evergreen
tags:
- llm
- quantization
- kv-cache
- apple-silicon
type: concept
updated: 2026-07-10
---
# TurboQuant

## 한 줄 정의

TurboQuant는 구글 리서치가 개발한 ICLR 2026 채택 KV 캐시 압축 알고리즘으로, 재학습 없이 정확도 손실을 거의 제로에 가깝게 유지하면서 메모리 사용량을 4~6배 절감하고 로컬 추론 속도를 향상시키는 기술이다.

## 핵심 요지
- 2단계 압축 파이프라인: 1단계 폴라퀀트(PolarQuant)와 2단계 QJL(Quantised Johnson-Lindenstrauss) 기법을 결합하여 KV 캐시 개별 요소를 2.5~3.5비트 수준까지 극적으로 압축한다.
- 이상치(Outlier) 분산 및 극좌표계 변환: 폴라퀀트 기법을 사용하여 데이터의 이상치를 가우시안 분포로 분산(무작위 회전)한 후 극좌표계(방향 3비트, 크기 8비트)로 바꾸어 정보 손실을 최소화한다.
- 1비트 오차 보정: QJL 기법을 통해 원본 벡터와 압축 벡터 간의 오차를 1비트 부호 비트(+1/-1)로 저장해 어텐션 연산 시 보정함으로써 FP16 수준의 정확도를 회복한다.
- 애플 실리콘(MLX) 생태계 통합: sharpner/turboquant-mlx, arozanov/turboquant-mlx 등의 오픈소스 구현체를 통해 로컬 Mac 환경에서 4.6배 압축을 유지하며 FP16 디코드 속도의 91~98%를 달성한다.

## 상세

## 상세

### KV 캐시의 메모리 병목 현상
로컬 LLM 구동 시 메모리는 모델 가중치(weights)와 KV 캐시(KV cache)로 나뉜다. 4비트 양자화된 32B 모델은 약 16~20GB가 소모되나, 128K 컨텍스트를 처리할 경우 어텐션 레이어의 키-값 벡터 축적으로 인해 KV 캐시만으로 30~40GB의 메모리가 추가로 소모된다. TurboQuant는 수학적인 극 좌표계 변환과 오차 보정을 활용해 이 병목을 제거한다.

### 폴라퀀트와 QJL 작동 방식
1. **폴라퀀트 (PolarQuant - AISTATS 2026 채택)**: 월시-하마다드 변환(Walsh-Hadamard transform)을 거치는 무작위 회전을 통해 아웃라이어를 전체 차원에 골고루 가우시안 분포 형태로 분산시킨다. 그 후 데카르트 좌표계를 극좌표계로 변환하여 벡터를 방향(각도)과 크기(반지름)로 나누고, 방향에 3비트, 크기에 8비트만 할당해 무오버헤드로 양자화한다.
2. **QJL (Quantised Johnson-Lindenstrauss)**: 폴라퀀트로 재구성한 벡터 간의 잔차 오차를 구한 뒤 무작위 행렬을 거쳐 투영(JL 변환)한다. 결과의 1비트 부호 비트(+1 또는 -1)만 차원별로 저장해 두고, 어텐션 내적 연산 시 소프트맥스(Softmax) 직전에 이 오차를 보정한다.

### 애플 실리콘(MLX) 구현체 성능 및 특징
- `sharpner/turboquant-mlx`: V2(속도 최적화: MLX `mx.quantized_matmul` 활용, FP16 디코드 속도의 70~105% 속도로 3.6~4.7배 압축), V3(품질 최적화: Lloyd-Max 코드북 활용, 극저비트 품질 보장하나 5~6배 느림).
- `arozanov/turboquant-mlx`: V3의 치명적인 속도 저하를 해결하고자 커스텀 퓨즈드 메탈(Fused Metal) 커널을 구현. 4.6배 압축 상태에서 FP16 디코드 속도의 91~98% 성능 달성. M4 Pro 48GB에서 Qwen2.5-32B 16K 컨텍스트 테스트 시 KV 캐시가 4.2GB에서 897MB로 감소.
- `flovflo/turboquant-mlx-qwen35-kv`: Qwen3.5 특화 백엔드. Qwen3.5-35B-4bit 기준 토큰 소요 시간 26% 감소, 초당 프롬프트 처리량 679토큰, 문장 생성 속도 초당 44.8토큰 기록.

## 예시

## 예시

### MLX 몽키 패치 및 셋업 코드 예시
```python
import mlx_lm
from turboquant.cache_v2 import TurboQuantKVCacheV2
import turboquant.patch as tq_patch

# SDPA 디스패치 모듈에 몽키 패치 적용
tq_patch.apply() 

model, tokenizer = mlx_lm.load("mlx-community/Llama-3.2-3B-Instruct-4bit")  
head_dim = model.layers[0].self_attn.head_dim  
n_layers = len(model.layers)  

# V2 4비트 회전(rotated) 설정: 손실 최소화 및 속도 최적화
cache = [  
    TurboQuantKVCacheV2(  
        head_dim=head_dim,  
        bits=4,  
        group_size=64,  
        use_rotation=True,  
        use_normalization=True,  
    )  
    for _ in range(n_layers)
]
```

### M4 Max 64GB 벤치마크 결과
- **Perplexity 개선**: Llama 3.2 3B V2 4비트 회전 모드에서 Perplexity가 FP16 원본보다 -0.8% 개선(무작위 회전의 정규화 효과). Gemma 3 4B V2 3비트 rot+QJL 옵션도 원본보다 1.1% 성능 향상(Gemma의 헤드 차원이 256이라 압축 효율이 더 큼).
- **디코드 속도**: 8,192토큰 시점에서 `V2 4비트 LEAN` 설정은 초당 156토큰을 기록하여 오리지널 FP16 모델(초당 148토큰)보다 빠르게 작동(압축된 캐시가 메모리 계층에 더 효율적으로 적재되기 때문).

## 충돌

## 관련 노트
- [[oMLX]]
- [[로컬 LLM 30분 실전 가이드]]

