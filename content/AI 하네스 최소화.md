---
type: workflow
status: needs-review
core: false
tags:
  - llm
  - agent
  - harness-engineering
  - workflow
aliases:
  - 4 스킬 하네스
  - 4 agents 4 skills
  - Bloated AI Slop Labs
sources:
  - raw/Bloated AI Slop Labs on X 2059651388901335196 한국어 번역.md
created: 2026-05-28
updated: 2026-05-28
---

# AI 하네스 최소화

## 한 줄 정의

AI 하네스 최소화는 비대한 agent harness를 줄이고, 의도 명확화 → pre-mortem 계획 → 병렬 구현 → 검증 반복의 몇 개 핵심 workflow만 남기는 설계/운영 원칙이다.

## 핵심 요지

- 하네스가 커질수록 agent, skill, hook, detector, orchestrator가 늘어나고 실제로는 일부만 쓰게 된다.
- 원문은 결국 중요한 건 “토큰 maxing”이 아니라 deep interview, pre-mortem, 병렬 실행, verification loop라고 본다.
- 이 관점에서는 스킬 수를 늘리는 것보다, 적은 수의 재사용 가능한 workflow를 battle-tested하게 만드는 게 더 중요하다.

## 상세

원문은 자신이 만든 여러 AI harness를 반성적으로 돌아보며, 시간이 지날수록 에이전트와 스킬이 많아질수록 오히려 운영자가 무엇을 ship했는지조차 놓치기 쉽다고 말한다. 그래서 문제를 더 많은 기능으로 덮기보다, 실제로 반복 사용되는 핵심 절차만 남기는 방향으로 수렴한다.

이 note에서 중요한 건 숫자 자체가 아니라 패턴이다. 저자는 결국 다음 네 가지 흐름만 남겼다고 말한다.

1. **deep-interview** — ambiguity가 사라질 때까지 의도를 명확히 한다.
2. **pre-mortem planning** — 구현 전에 실패 가능성을 먼저 줄인다.
3. **parallel persistent implementation** — 필요한 작업을 병렬로 분해하고 지속적으로 진행한다.
4. **verification & iteration** — 통과할 때까지 검증과 수정을 반복한다.

이 구조는 [[Harness Engineering]]의 실행 구조와 잘 맞물린다. 하네스가 커질수록 중요한 것은 기능 수가 아니라, 반복 실수를 줄이고 검증 가능한 루프를 만드는 능력이다. 또한 이 패턴은 [[Ralph Loop]]처럼 계획-분할-실행-검증을 분리하는 workflow와도 닿아 있다.

## 예시

- 에이전트가 40개 스킬을 전부 참조하는 대신, 실제로는 인터뷰/계획/실행/검증 4개 루프만 자주 쓴다.
- 새 프로젝트를 시작할 때 기능 목록을 먼저 늘리기보다, ambiguity를 없애는 질문 세트와 failure mode 체크리스트부터 만든다.
- 병렬 세션을 여러 개 띄우더라도, 각 세션이 맡는 검증 기준과 종료 조건은 작고 명확하게 유지한다.

## 충돌

- 2026-05-28 확인: 이 note의 숫자(4 skills, 4 agents)와 구체 조합은 단일 X thread 기반 주장이다. 따라서 하네스 설계 원칙으로는 유효하지만, 모든 팀/모델/프로젝트에 일반화하려면 실제 repo의 실패율, 리뷰 비용, 유지보수 비용으로 재검증해야 한다.

## 관련 노트

- [[Harness Engineering]]
- [[AI Slop]]
- [[Agent Harness]]
- [[Ralph Loop]]
- [[병렬 에이전트 세션 운영]]
- [[Meta-Harness]]

