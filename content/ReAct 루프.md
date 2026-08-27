지정해 주신 두 소스 문서(`raw/AI Agents. Complete Course.md`, `raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md`)를 깊이 있게 분석하여 개념 노트 **[[ReAct 루프]]**를 성공적으로 생성하고 [ReAct 루프.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/ReAct%20%ED%8C%A8%ED%84%B4.md) 경로에 작성 완료했습니다.

---

### 📝 생성된 위키 노트 요약 (`ReAct 루프.md`)

```markdown
---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - react-loop
  - agentic-ai
  - harness
aliases:
  - ReAct loop
  - Thought-Action-Observation
  - TAO 사이클
sources:
  - raw/AI Agents. Complete Course.md
  - raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md
created: '2026-08-27'
updated: '2026-08-27'
---

# ReAct 루프

## 한 줄 정의
**ReAct 루프(Reasoning and Acting Loop)**는 [[LLM]]이 목표 달성을 위해 **추론(Thought)**, **행동(Action/도구 호출)**, **관찰(Observation/환경 피드백)**의 3단계를 반복 순환(TAO 사이클)하며 실시간 피드백을 기반으로 능동적·단계적으로 과제를 수행하도록 만드는 [[에이전트 워크플로우 패턴]]의 핵심 실행 메커니즘이다.

## 핵심 요지
- **TAO(Thought-Action-Observation) 오케스트레이션**: 단발성 텍스트 생성을 넘어 모델이 스스로 다음 행동을 추론하고(Thought), 외부 도구를 호출하며(Action), 그 실행 결과나 에러 로그를 관찰(Observation)하여 다음 단계에 반영하는 피드백 순환 구조.
- **Agent = Model + Harness 공식**: 지능 자체는 모델에 있으나, ReAct 루프의 상태(State) 관리, 턴 제한(Turn Limit), 토큰 예산 산정, 오류 복구 및 루프 강제 종료 등 오케스트레이션 전체는 [[Agent Harness]]가 제어.
- **하네스 엔지니어링의 성과 검증**: 모델 가중치 수정 없이 하네스 인프라만 개선했을 때 Terminal Bench 2.0 점수가 `52.8%`에서 `66.5%`로 13.7포인트 상승했으며, Meta-harness 적용 시 `claude-opus-4-6` 기준 `76.4%` 달성 (`raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md`).
- **다단계 연쇄 실패(Compounding Failure) 예방**: 1 step 신뢰도 `99%`라도 50단계 수행 시 성공률이 `60.5%`로 수직 하강하므로 Verification Loop 및 하네스 차원의 루프 제어가 필수적 (`raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md`).
- **엄격한 종료 조건 강제**: 계속 진행하려는 모델의 관성을 억제하기 위해 툴 콜 부재, 턴 제한, 토큰 예산 소진 등의 종료 조건을 하네스 레이어에서 강제 수립.

## 상세
1. **ReAct 루프 3단계 메커니즘**: Thought → Action (JSON 도구 호출 요청) → Observation (`tool_result` 컨텍스트 주입).
2. **하네스(Harness)와 모델(Model)의 역할 분담**: LLM은 "자연어 컴퓨터(100 토큰 ≈ 1 NLOP)"로 추론을 담당하고, Harness는 OS로서 루프 관리 및 안전 검증을 수행. `Claude Code` 유출 소스(513,000줄 TypeScript)가 이를 입증 (`raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md`).
3. **디자인 패턴 및 고도화**: 성찰(Reflection), 동적 계획 수립(Planning), 검증 루프(Verification Loop, 품질 2~3배 향상) 결합.

## 예시
- **활용 시나리오**: 자동화 코딩 및 pytest 실패 건 재검증 에이전트.
- **Python 구현 예시**: Anthropic API (`claude-opus-4-7`) 기반의 `run_agent_react_loop` 메인 오케스트레이션 코드 포함.

## 충돌
- **도구(Tool) 수량과 추론 성능 간의 충돌**: 세분화된 도구를 다양하게 쥐여줄 때 자율성이 최대화된다는 주장 vs 특화 도구를 단순 bash 실행 도구 1개로 줄였을 때 Vercel text-to-SQL 성공률이 `80%`에서 `100%`로 상승하고 실행 시간이 3.5배 단축되었다는 실증적 충돌 (`raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md`).
- **루프 종료 주도권 충돌**: 모델이 결과 관찰 후 스스로 자율 종료 판단을 내리게 하는 관점 vs 다단계 연쇄 실패 방지를 위해 하네스 오케스트레이터가 종료를 강제(Enforce)해야 한다는 관점.

## 관련 노트
- [[ReAct 패턴]]
- [[Agent Harness]]
- [[에이전트 워크플로우 패턴]]
- [[컨텍스트 엔지니어링]]
- [[에이전트형 AI]]
- [[도구 사용 패턴]]

## 출처
- `raw/AI Agents. Complete Course.md`
- `raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md`
```