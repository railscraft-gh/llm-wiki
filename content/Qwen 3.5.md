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
Qwen 3.5는 알리바바 Qwen 팀이 개발한 대형 언어 모델 패밀리로, MoE(Mixture of Experts)와 Dense 변형 아키텍처를 제공하며 특히 로컬 고성능 코딩 및 일반 추론에서 뛰어난 효율을 보여준다.

## 핵심 요지
- Qwen 3.5는 소비자용 하드웨어 환경에 최적화된 MoE 아키텍처 모델(Qwen3.5-35B-A3B)을 제공하여, 단 3B의 활성 매개변수만으로 플래그십급 성능을 낸다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L59](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L59).
- SWE-bench Verified 등의 소프트웨어 엔지니어링 벤치마크에서 기존 유료 상용 프론티어 모델들과 대등한 성과를 증명하였다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L59](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L59).

## 상세
Qwen 3.5 시리즈의 주요 변형은 다음과 같다:
- **Qwen3.5-35B-A3B**: 하이브리드 어텐션과 MoE 설계를 통해 총 35B 매개변수 중 3B 활성 매개변수만 동작한다. SWE-bench Verified에서 69.2%를 기록했으며 Q4 양자화 시 8GB VRAM에서도 구동 가능하다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L59](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L59).
- **Qwen3.5-27B (Dense)**: 16~24GB VRAM을 요구하는 Dense 아키텍처 모델로, SWE-bench Verified에서 72.4%를 달성하여 GPT-5 mini급 성능을 갖춘다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L79](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L79).
- **Qwen3.5-122B-A10B**: 10B 활성 매개변수로 작동하는 MoE 모델로, 72.0%의 SWE-bench 스코어를 지닌다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L81](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L81).

## 예시
Ollama를 이용해 로컬에서 Qwen 3.5 27B 모델을 다운로드하고 대화형 테스트를 실행하는 Bash 구성 예시 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L331-L335](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L331-L335):
```bash
ollama pull qwen3.5:27b
ollama run qwen3.5:27b "Write a Python function to parse nested JSON with error handling"
```

## 충돌
- Qwen3.5-35B-A3B 모델을 에이전트 도구(예: Claude Code) 환경에서 실행 시, 특정 조건하에 동작이 멈추거나 무한 루프에 빠지는 오동작 오류가 보고된 바 있다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L298](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L298). 이에 대응하기 위해 확장 생각 모드(extended thinking mode)를 비활성화하거나 LiteLLM 프록시 연동이 필요할 수 있다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L303-L304](file:///Users/railscraft/Obsidian/raw/7%20Local%20LLM%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L303-L304).

## 관련 노트
- [[2026년 오픈소스 LLM 플랫폼 비교]]
- [[로컬 LLM 30분 실전 가이드]]

