---
type: concept
status: draft
core: false
tags:
- llm
aliases: []
sources:
- raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
GLM-5는 Zhipu AI가 개발한 거대 MoE(Mixture of Experts) 언어 모델로, 리눅스 커널 수준의 복잡한 추론 및 다단계 에이전트 명령 실행을 고성능 로컬 사양에서 수행하도록 최적화되었다.

## 핵심 요지
- GLM-5는 총 744B 매개변수 중 40B 매개변수를 활성화하여 작동하며, SWE-bench Verified에서 77.8%를 기록하여 Claude Sonnet 4.6급 성능을 낸다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L115](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L115).
- NVIDIA 가속기를 쓰지 않고 화웨이 어센드(Huawei Ascend) 국산 AI 가속 칩을 사용해 학습한 역사적인 플래그십 오픈소스 가중치 모델이다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L121](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L121).

## 상세
- **아키텍처 및 요구 제약**: 활성 매개변수 자체가 40B에 달하는 초거대 모델이기 때문에, 원활한 추론을 위해서는 최소 128GB 이상의 VRAM/RAM 결합 사양이 권장된다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L123](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L123).
- **GLM-4.7**: 상대적으로 요구 성능이 낮은 대안으로, 총 355B 중 32B 매개변수를 활성화한다. SWE-bench Verified에서 73.8%, Terminal-Bench 2.0에서 41%를 달성하여 64GB Mac 등 듀얼 GPU 사양에서 널리 활용된다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L141](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L141).

## 예시
GLM-5 및 GLM-4.7 로컬 활용 환경 구성 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L373-L377](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L373-L377):
- **하이/울트라 등급 워크스테이션**: Mac Studio M3 Ultra (64GB~192GB 메모리 구성) 혹은 듀얼 RTX 4090 구성을 빌드하여 llama.cpp 프레임워크를 기반으로 LLM을 메모리에 상주시켜 활용.

## 충돌
- 커뮤니티의 검증 결과에 따르면, Zhipu AI가 기업공개(IPO)를 고려하여 서버 연산 비용을 조정하기 위해 GLM-5 모델의 실제 API 성능을 미세하게 제약(다운그레이드)했다는 추측과 논란이 존재한다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L161-L165](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L161-L165). 실제 일부 에이전트 코딩 벤치마크에서는 양자화된 GLM-4.7이 GLM-5를 상회하는 기현상이 관찰되기도 했다.

## 관련 노트
- [[2026년 오픈소스 LLM 플랫폼 비교]]
- [[오픈소스 LLM 경제성과 벤더 종속성 해지]]

