---
type: workflow
status: draft
core: false
tags:
  - llm
  - agent
  - translationese
aliases: []
sources:
  - raw/im-not-ai.md
created: 2026-06-07
updated: 2026-06-07
---

# 한글 AI 번역투 탐지 및 윤문 워크플로

## 한 줄 정의
AI 모델이 작성한 한글 텍스트 특유의 부자연스러움(번역투, 관용구, 단조로운 리듬 등)을 탐지하고, 문장의 사실적 의미는 보존하면서 자연스러운 한국어로 교정하는 에이전트 오케스트레이션 워크플로이다.

## 핵심 요지
- **10대 대분류 × 40+ 서브 패턴**: 번역투(A), 영어식 용어 과다(B), 기계적 구조(C), 관용구(D), 리듬 균일성(E) 등을 기반으로 AI 티를 탐지한다.
- **Fast/Strict 이원화 모드**: 5,000자 이하는 단일 `humanize-monolith`로 고속 처리하며, 8,000자 이상이거나 정밀 검증 시에는 5인 에이전트 파이프라인(Strict)을 돌린다.
- **Antigravity 이식**: Claude Code의 빌트인 `Agent` 및 `TeamCreate` 도구 의존적인 원본 워크플로를 Antigravity의 `define_subagent` 및 `invoke_subagent` 도구 체계로 매핑하여 동작하도록 이식했다.

## 상세
### 1. 탐지 및 처방 메커니즘
- **정량적 메트릭**: regex와 명사화 접미사 사전 등을 사용해 표준 라이브러리(Python)만으로 명사화 밀도, 쉼표 빈도, 이중 피동 빈도 등의 정량 지표(`interference_index` 등)를 계산한다. [metrics_v2.py](file:///Users/railscraft/.gemini/config/plugins/im-not-ai/skills/humanize-korean/references/metrics_v2.py)
- **수술적 수정**: 전체를 임의로 재작성하지 않고, 탐지된 span 단위로만 수정하는 근거 기반 처방 방식을 사용한다. 변경률이 30%를 초과하면 경고하고 50%를 초과하면 강제 중단한다.

### 2. Antigravity 환경으로의 포팅
이 스킬 세트는 원래 Claude Code 플러그인 형태로 구성되어 있었으나, Antigravity 에이전트 환경에 맞게 변환하여 `/Users/railscraft/.gemini/config/plugins/im-not-ai` 경로에 설치했다.
- **서브에이전트 동적 정의**: 스킬 실행 과정에서 `define_subagent` 도구를 사용해 `agents/` 디렉토리에 정의된 에이전트 사양들을 동적으로 생성하고, `invoke_subagent`로 순차 및 병렬 실행을 수행한다.
- **최신 run_id 조회**: `Glob` 도구 대신 `list_dir`을 사용해 workspace의 `_workspace` 폴더 하위를 조회하여 작업 히스토리를 식별한다.

## 예시
- **번역투 교정**: 
  - "AI 기술을 **통해** 효율을 높**일 수 있다**" $\rightarrow$ "AI로 효율을 높인다"
  - "이에 **있어서** 중요한 **점은**" $\rightarrow$ "여기서 중요한 건"
- **오케스트레이션 실행 (Fast 모드)**:
  1. `humanize-monolith` 서브에이전트 정의 및 호출.
  2. `_workspace/YYYY-MM-DD-NNN/final.md`에 윤문본 작성.
  3. 사용자에게 최종 등급(A~D) 및 비교 표 출력.

## 충돌
- *현재 기록된 충돌 사항 없음*

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Harness]]

