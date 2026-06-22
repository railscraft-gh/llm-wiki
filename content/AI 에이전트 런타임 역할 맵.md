---
aliases:
- 에이전트 런타임 계층 맵
- agent runtime role map
core: true
created: 2026-05-26
sources:
- Skills, MCP, Tool Calling. 에이전트 확장의 세 층
- Structuring Agents, Skills, and MCPs 🤖🧩
- 프로덕션 AI 에이전트를 위한 Agent Harness 구축
- 2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가
- The Complete (Honest) Guide to OpenClaw
- opencode-masterclass-summary
- raw/cc101_axwith_ko.html
- raw/하네스를 내 것으로 만들기 - 출판형 다듬기.md
- raw/Code Is Not Cheap. How to Multiply Your AI’s Output With Software Fundamentals.md
- raw/AI 에이전트에게 Prompt Engineering은 죽었다. 이제 진짜 중요한 것은 Context Engineering이다.md
- raw/Skills, MCP, Tool Calling. 에이전트 확장의 세 층.md
- raw/AI와 디자인 시스템 - 출판형 다듬기.md
- raw/The most important Design System in 2026 that designers missed was built by
  a developer..md
- raw/Good Design Doesn’t Happen By Default.md
- raw/Structuring Agents, Skills, and MCPs 🤖🧩.md
- raw/From faster pencil to AI Experience Architect. a designer’s path.md
- raw/The Complete (Honest) Guide to OpenClaw.md
- raw/지금 개발자들이 주목하는 오픈소스 GitHub 프로젝트 15선 - 출판형 다듬기.md
- raw/아이디어에서 현실 시스템까지 AI 에이전트 구축하기 - 출판형 다듬기.md
status: evergreen
tags:
- agent
- runtime
- infrastructure
- workflow
type: workflow
updated: '2026-06-22'
---# AI 에이전트 런타임 역할 맵

## 한 줄 정의

AI 에이전트 런타임 역할 맵은 agent 시스템을 확장 층, 실행 하네스, agent-native 인프라, 도구 생태계, 제품 구현체의 다섯 층으로 나눠 각각 어디서 무엇을 설계해야 하는지 정리한 운영 프레임이다.

## 핵심 요지

- agent 시스템은 모델 하나로 설명되지 않고, 서로 다른 층의 책임 분리로 설명하는 편이 더 정확하다.
- 확장 층은 [[에이전트 확장 3계층]]처럼 Skill·MCP·Tool Calling의 역할을 구분한다.
- 실행 층은 [[Agent Harness]]처럼 loop, memory, parsing, verification을 강제한다.
- 인프라 층은 [[Agent Native Infrastructure]]처럼 CLI·API·문서·권한 구조를 agent가 바로 실행 가능한 형태로 만든다.
- 생태계 층은 [[AI 오픈소스 작업대]]처럼 어떤 작업 표면이 공개 구현체로 굳는지 본다.
- 제품 층은 [[OpenClaw]]나 [[Claude Code 오케스트레이션]]처럼 실제 도구가 이 구조를 어떤 방식으로 구현하는지 보여 준다.

## 상세

이 맵은 여러 runtime 관련 노트를 다섯 층으로 재배치한다.

### 1. 확장 층

가장 아래의 질문은 "에이전트에 무엇을 더 붙여야 하는가"다. [[에이전트 확장 3계층]]은 절차적 지식은 Skill, 외부 시스템 접근은 MCP, 작고 결정적인 기능은 Tool Calling으로 나눈다. 이 층은 기능을 어느 인터페이스로 노출할지 정하는 분류 체계다.

### 2. 실행 층

그다음은 [[Agent Harness]]다. 좋은 prompt가 있어도 loop, tool execution, retry, memory, verification이 없으면 task completion이 불안정하다. 이 층의 질문은 "이 agent가 끝까지 완주하도록 무엇을 강제할 것인가"다.

### 3. 인프라 층

세 번째는 [[Agent Native Infrastructure]]다. 사람이 클릭하면서 따라가는 절차를 agent가 바로 실행 가능한 문서, CLI, API, schema, permission 구조로 바꾸는 층이다. 이 층은 "실행 표면 자체가 agent-friendly한가"를 묻는다.

### 4. 생태계 층

네 번째는 [[AI 오픈소스 작업대]]다. local model runtime, RAG platform, workflow builder, terminal assistant처럼 어떤 작업 표면이 오픈소스로 표준화되고 있는지 읽는다. 이 층은 "요즘 agent들은 어떤 공개 작업대 위에서 조립되는가"를 본다.

### 5. 제품 층

맨 위에는 제품 구현체가 있다. [[OpenClaw]]는 multi-channel personal runtime 사례이고, [[Claude Code 오케스트레이션]]은 코딩/업무 조율 surface 사례다. 이 층은 앞의 네 층이 실제 제품에서 어떻게 묶여 나타나는지 보여 준다.

이 다섯 층을 섞어 보면 흔한 오해가 생긴다. 예를 들어 MCP를 많이 붙이는 것을 곧 agent maturity라고 생각하면 실행 하네스와 검증이 비어 있는 시스템을 만들 수 있다. 반대로 harness를 정교하게 만들었더라도 인프라 층이 클릭 기반 SaaS에 갇혀 있으면 agent가 충분히 leverage를 얻지 못한다.

## 예시

- coding agent 설계: 확장 층에서 MCP와 local tool을 고르고, 실행 층에서 test/retry loop를 붙이고, 인프라 층에서 `AGENTS.md`와 CLI를 정리한다.
- self-hosted personal assistant 평가: 생태계 층에서 오픈소스 runtime 흐름을 보고, 제품 층에서 [[OpenClaw]]를 구조/보안 사례로 읽는다.
- 팀용 automation: [[Claude Code 오케스트레이션]] 같은 surface를 쓰더라도, 실제 차별점은 harness와 agent-native infra가 얼마나 정리됐는지에서 난다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[에이전트 확장 3계층]]
- [[Agent Harness]]
- [[Agent Native Infrastructure]]
- [[AI 오픈소스 작업대]]
- [[OpenClaw]]
- [[Claude Code 오케스트레이션]]
- [[AI 코딩 에이전트 검증 전략]]
- [[AI 네이티브 작업 시스템]]

