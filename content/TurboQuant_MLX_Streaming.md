---
type: concept
status: draft
core: false
tags:
- llm
- machine-learning
- apple-silicon
- quantization
aliases:
- TurboQuant-MLX
- MoE 전문가 스트리밍
sources:
- raw/16GB Mac mini에서 Qwen 3.5 122B LLM 실행하기 - TurboQuant-MLX를 활용한 MoE 전문가 스트리밍.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
애플 실리콘 환경에서 RAM 용량 제한을 극복하기 위해, Mixture-of-Experts(MoE) 모델의 활성 전문가 가중치만 SSD로부터 실시간 페이징(스트리밍)하여 거대 모델을 구동하는 최적화 기술입니다.

## 핵심 요지
- **전문가 스트리밍(Expert Streaming):** 전체 모델 가중치를 RAM에 상주시키지 않고, 추론 시점에 필요한 소수의 전문가(Expert) 가중치만 디스크에서 즉시 읽어 들여 연산합니다.
- **메모리 제한 격리:** 16GB RAM의 애플 실리콘 맥에서도 122B 규모의 거대 모델을 물리적으로 구동할 수 있게 해줍니다.
- **기술적 핵심:** macOS 운영체제의 페이지 캐시를 방지하는 `F_NOCACHE` 플래그 사용과 LRU 캐시 시스템을 통해 메모리 점유율을 최소화합니다.
- **성능:** 초당 1토큰(122B 기준) 수준의 추론 속도를 보이며, 이는 실시간 채팅보다는 정밀 추론 엔진으로 활용하기에 적합합니다.

## 상세
MoE 모델은 모든 파라미터가 동시에 일하지 않는 '희소성(Sparsity)'을 가집니다. [[TurboQuant]]-MLX는 이 특성을 활용하여 메모리에 전체 모델을 올리는 대신, 필요한 부분만 선택적으로 스트리밍하는 방식으로 하드웨어 제약을 우회합니다. 이 방식은 시스템 병목을 메모리 용량에서 디스크 대역폭(Disk I/O)으로 이동시키며, 고비용 RAM 증설 없이도 거대 모델 실행을 가능하게 하는 혁신적인 대안을 제시합니다.

## 관련 노트
- [[Apple_Silicon_Local_AI_Stack]]
- [[Open_Source_LLM_Platforms]]

## 출처
- [raw/16GB Mac mini에서 [[Qwen 3.5]] 122B LLM 실행하기 - [[TurboQuant]]-MLX를 활용한 MoE 전문가 스트리밍.md](file:///Users/railscraft/Obsidian/raw/16GB%20Mac%20mini%EC%97%90%EC%84%9C%20Qwen%203.5%20122B%20LLM%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20[[TurboQuant]]-MLX%EB%A5%BC%20%ED%99%9C%EC%9A%A9%ED%95%9C%20MoE%20%EC%A0%84%EB%AC%B8%EA%B0%80%20%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8D.md)
