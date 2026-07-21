---aliases:
  - AI-네이티브-작업-시스템
- AI-native work system
- 에이전트 시대 작업 시스템
core: true
created: 2026-05-26
sources:
- sequoia-ascent-2026-karpathy
- From faster pencil to AI Experience Architect. a designer’s path
- Skills, MCP, Tool Calling. 에이전트 확장의 세 층
- 프로덕션 AI 에이전트를 위한 Agent Harness 구축
- 2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가
- Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!
- raw/Code Is Not Cheap. How to Multiply Your AI’s Output With Software Fundamentals.md
- raw/The most important Design System in 2026 that designers missed was built by
  a developer..md
- raw/Good Design Doesn’t Happen By Default.md
- raw/The Complete (Honest) Guide to OpenClaw.md
- raw/From faster pencil to AI Experience Architect. a designer’s path.md
status: evergreen
tags:
- ai
- agent
- workflow
- infrastructure
- design
type: concept
updated: '2026-06-22'
---
# AI 네이티브 작업 시스템

## 한 줄 정의

AI 네이티브 작업 시스템은 사용자 숙련, 디자인 기본값, 에이전트 런타임, agent-native 인프라, 검증 루프를 하나의 연결된 작업 체계로 보는 상위 프레임이다.

## 핵심 요지

- AI 시대의 생산성 차이는 모델 하나보다, 어떤 작업 시스템을 설계했는지에서 더 크게 난다.
- 사람 쪽 핵심은 [[AI 네이티브 사용자]]이고, 디자인 쪽 구조 허브는 [[AI 디자인 역할 맵]]이다.
- 런타임 쪽 구조 허브는 [[AI 에이전트 런타임 역할 맵]]이며, 이를 실제로 굴리게 하는 핵심 실행 규율은 [[AI 코딩 에이전트 검증 전략]]이다.
- 결국 좋은 시스템은 "누가 무엇을 판단하고, 어떤 기본값을 따르며, 어떤 런타임에서, 어떤 검증으로 마감하는가"를 명시한다.

## 상세

이 노트는 현재 wiki에 흩어진 상위 허브들을 한 장으로 묶는다.

### 1. 사용자 층

[[AI 네이티브 사용자]]는 같은 도구를 써도 context, command, hook, 검증 루프로 leverage를 키우는 사람이 누구인지를 설명한다. 즉 시스템의 시작점은 도구보다 사용자 숙련이다.

### 2. 디자인 작업 층

[[AI 디자인 역할 맵]]은 디자인 쪽 시스템을 기본값, DESIGN.md, task agent, 아키텍처 역할의 네 층으로 나눈다. 이 층은 "무슨 화면을 만들까"가 아니라 "디자인 판단을 어디에 고정할까"를 다룬다.

### 3. 런타임 작업 층

[[AI 에이전트 런타임 역할 맵]]은 Skill·MCP·Tool Calling, harness, infra, 오픈소스 작업대, 제품 구현체를 다섯 층으로 나눈다. 이 층은 "에이전트를 어떻게 끝까지 실행시킬까"를 다룬다.

### 4. 검증 층

위의 모든 층을 실제 업무 시스템으로 묶어주는 마지막 조건은 [[AI 코딩 에이전트 검증 전략]]이다. 빠르게 만드는 것과 안전하게 끝내는 것을 구분하지 않으면, 디자인 시스템도 런타임도 결국 신뢰를 잃는다.

이 관점에서 보면 AI 네이티브 전환은 특정 제품 도입이 아니라 작업 운영체제를 다시 짜는 일에 가깝다. 디자인 기본값, 문서 형식, CLI/API 인프라, runtime 선택, hook, review gate, approval boundary가 서로 연결된 상태가 되어야 한다.

## 예시

- 제품 팀: [[AI 디자인 역할 맵]]으로 디자인 판단을 정리하고, [[AI 에이전트 런타임 역할 맵]]으로 coding/runtime 구조를 정리한 뒤, [[AI 코딩 에이전트 검증 전략]]으로 품질 마감 절차를 고정한다.
- 개인 power user: [[AI 네이티브 사용자]]처럼 slash command와 MCP를 써서 흐름을 줄이고, [[Agent Native Infrastructure]]처럼 CLI/API 중심 환경을 선호하며, 반복 작업은 harness와 검증으로 묶는다.
- 조직 운영: 디자이너는 [[AI Experience Architect]] 방향으로 올라가고, 엔지니어는 [[Agent Harness]]와 [[에이전트 확장 3계층]]을 다루며, 팀은 공통 검증 루프를 공유한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[디지털 제품 생산 및 출시 워크플로우]]
- [[AI 네이티브 사용자]]
- [[AI 디자인 역할 맵]]
- [[AI 에이전트 런타임 역할 맵]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Native Infrastructure]]
- [[AI 시대 디자인 시스템]]

