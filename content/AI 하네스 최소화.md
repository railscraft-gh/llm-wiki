---
aliases:
- 4 스킬 하네스
- 4 agents 4 skills
- Bloated AI Slop Labs
- AI-하네스-최소화
core: false
created: 2026-05-28
sources:
- Bloated AI Slop Labs on X 2059651388901335196 한국어 번역
- raw/Bloated AI Slop Labs on X 2059651388901335196 한국어 번역.md
status: evergreen
tags:
- llm
- agent
- harness-engineering
- workflow
type: workflow
updated: 2026-07-10
---
# AI 하네스 최소화

## 한 줄 정의
AI 하네스 최소화는 비대한 agent harness를 줄이고, 의도 명확화 → pre-mortem 계획 → 병렬 구현 → 검증 반복의 몇 개 핵심 workflow만 남기는 설계/운영 원칙이다.

## 핵심 요지
- 하네스가 커질수록 agent, skill, hook, detector, orchestrator가 늘어나고 실제로는 일부만 쓰게 된다.
- 원문은 결국 중요한 건 “토큰 maxing”이 아니라 deep interview, pre-mortem, 병렬 실행, verification loop라고 본다.
- 이 관점에서는 스킬 수를 늘리는 것보다, 적은 수의 재사용 가능한 workflow를 battle-tested하게 만드는 게 더 중요하다.
- Oh-my-Codex(3만 stars), Oh-my-Claudecode(3.5만 stars), Claw-code(19만 stars) 등 비대화된 하네스는 플러그인 크기가 20만 LOC를 초과하며 유지보수 불능([[AI Slop]])으로 흐르는 경향이 있다.
- Bloated [[AI Slop]] Labs는 복잡함을 걷어내고 4개의 스킬과 4개의 에이전트로 압축하여 오작동을 차단하는 'GAJAE' PoC를 공유했다.

## 상세

원문은 자신이 만든 여러 AI harness를 반성적으로 돌아보며, 시간이 지날수록 에이전트와 스킬이 많아질수록 오히려 운영자가 무엇을 ship했는지조차 놓치기 쉽다고 말한다. 그래서 문제를 더 많은 기능으로 덮기보다, 실제로 반복 사용되는 핵심 절차만 남기는 방향으로 수렴한다.

이 note에서 중요한 건 숫자 자체가 아니라 패턴이다. 저자는 결국 다음 네 가지 흐름만 남겼다고 말한다.

1. **deep-interview** — ambiguity가 사라질 때까지 의도를 명확히 한다.
2. **pre-mortem planning** — 구현 전에 실패 가능성을 먼저 줄인다.
3. **parallel persistent implementation** — 필요한 작업을 병렬로 분해하고 지속적으로 진행한다.
4. **verification & iteration** — 통과할 때까지 검증과 수정을 반복한다.

이 구조는 [[Harness Engineering]]의 실행 구조와 잘 맞물린다. 하네스가 커질수록 중요한 것은 기능 수가 아니라, 반복 실수를 줄이고 검증 가능한 루프를 만드는 능력이다. 또한 이 패턴은 [[Ralph Loop]]처럼 계획-분할-실행-검증을 분리하는 workflow와도 닿아 있다.

### 4대 스킬 및 에이전트 상세 명세
- **deep-interview (소크라틱 인터뷰)**: `OmX` 유래. ambiguity가 사라질 때까지 사용자 의도를 역심문하여 요구사항을 고정.
- **ralplan (Pre-mortem 계획)**: `OmC` 유래. 구현에 착수하기 전 발생 가능한 실패 시나리오를 예측 및 차단하기 위해 planner / architect / critic 에이전트가 삼각 조율.
- **team (병렬 실행)**: `OmX` 유래. 여러 작업을 격리된 corktree 환경에 teammate 세션으로 스폰하여 상호 간섭 차단.
- **ultragoal (지속성 구현 및 검증)**: `OmX` 유래. architect / executor 에이전트 조합으로 목표가 통과될 때까지 post-mortem 디버깅 루프 자율 실행.

## 예시

- 에이전트가 40개 스킬을 전부 참조하는 대신, 실제로는 인터뷰/계획/실행/검증 4개 루프만 자주 쓴다.
- 새 프로젝트를 시작할 때 기능 목록을 먼저 늘리기보다, ambiguity를 없애는 질문 세트와 failure mode 체크리스트부터 만든다.
- 병렬 세션을 여러 개 띄우더라도, 각 세션이 맡는 검증 기준과 종료 조건은 작고 명확하게 유지한다.

### 하네스의 인코더-디코더 철학
- 복잡한 가드 코드를 늘리기보다, 하네스를 사용자의 의도(Intent)를 인코딩하고, 이를 검증 가능한 소프트웨어(Software)로 디코딩하는 핵심 변환기로 규정한다. `gajae-code` PoC는 이러한 압축적 아키텍처의 대표적 선례다.

## 충돌
- 2026-05-28 확인: 이 note의 숫자(4 skills, 4 agents)와 구체 조합은 단일 X thread 기반 주장이다. 따라서 하네스 설계 원칙으로는 유효하지만, 모든 팀/모델/프로젝트에 일반화하려면 실제 repo의 실패율, 리뷰 비용, 유지보수 비용으로 재검증해야 한다.

## 관련 노트
- [[Harness Engineering]]
- [[AI Slop]]
- [[Agent Harness]]
- [[Ralph Loop]]
- [[병렬 에이전트 세션 운영]]
- [[Meta-Harness]]

## 출처
- Bloated [[AI Slop]] Labs on X 2059651388901335196 한국어 번역
