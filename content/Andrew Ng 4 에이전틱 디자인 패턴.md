---
type: pattern
status: evergreen
core: false
tags:
  - llm
  - agent
  - design-pattern
aliases:
  - 4 Agentic Design Patterns
  - Andrew Ng 4가지 패턴
sources:
  - raw/evolution-of-ai-agentic-patterns.md
  - https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance/
created: 2026-05-16
updated: 2026-05-16
---

# Andrew Ng 4 에이전틱 디자인 패턴

## 한 줄 정의

Andrew Ng의 4가지 에이전틱 디자인 패턴은 2024년 3월 Sequoia AI Ascent에서 발표된 Reflection, Tool Use, Planning, Multi-Agent Collaboration 네 가지를 묶은 프롬프트 엔지니어링 시대 정점의 실무 프레임워크다.

## 핵심 요지

- 모델을 업그레이드하지 않고 모델을 감싸는 패턴만 바꿔도 성능이 크게 도약한다는 것이 핵심 발견이다.
- Ng는 "GPT-3.5에 에이전틱 워크플로우를 씌우면 특정 벤치마크에서 GPT-4 제로샷보다 낫다"고 발표했다.
- 이 결과는 "모델 바깥 시스템이 중요하다"는 [[Harness Engineering]] 시대의 직접 전조였다.

## 상세

**Reflection (반성)** — 모델이 자기 출력을 비판하고 수정한다. 같은 모델에 "이 코드에 버그가 있는지 검토하라"를 다시 요청한다. 핵심은 같은 모델이 다른 페르소나(예: "시니어 코드 리뷰어 관점에서 검토")로 검토할 때 품질이 올라간다는 점이다. Ng는 네 패턴 중 가장 안정적이고 예측 가능한 패턴으로 위치시켰다.

**Tool Use (도구 사용)** — 모델이 웹 검색, 코드 실행, DB 쿼리, 계산기 등 외부 도구를 호출한다. 모델이 도구를 **언제** 쓸지를 스스로 판단하는 것이 챗봇과 에이전트를 구분하는 결정적 차이다. ReAct(Reason + Act) 흐름의 실전 버전이다.

**Planning (계획)** — 복잡한 과제를 하위 단계로 분해한다. "웹사이트 만들어라"를 요구사항 분석/디자인/프론트엔드/백엔드/테스트/배포로 쪼갠다. 강력하지만 네 패턴 중 가장 불안정하다. Ng의 표현으로 "디테일에 악마가 있다(the devil is in the details)" — 계획은 멋지게 세우지만 실행에서 무너지는 경우가 많았다. 이는 이후 [[Plan Mode 기반 AI 작업]]에서 사람이 계획을 검토하고 실행만 자동화하는 방식으로 보완된다.

**Multi-Agent Collaboration (다중 에이전트 협업)** — 전문화된 에이전트들이 서로 다른 역할을 맡는다. 코더 + 리뷰어 + 테스터 에이전트가 각자 작업하고 결과를 교환한다. 2024년 시점 가장 초기 단계 패턴이었고, 이후 [[병렬 에이전트 세션 운영]], [[Claude Code 오케스트레이션]], [[OpenAgent Team Mode]]로 확장된다.

이 발표는 [[Agentic 패턴 진화]]에서 프롬프트 엔지니어링 시대의 정점으로 위치한다. 동시에 컨텍스트 엔지니어링과 하네스 엔지니어링 시대로 넘어가는 다리 역할을 했다.

## 예시

- Reflection: PR을 만든 뒤 같은 모델에 "이 PR을 시니어 보안 리뷰어로서 검토해줘"를 별도 세션에서 호출한다.
- Tool Use: 모델이 환율 계산 요청을 받으면 환율 API를 자동 호출한 뒤 결과를 계산에 사용한다.
- Planning: 큰 리팩터링을 plan mode에서 단계별 PR로 쪼갠 뒤 각 단계마다 검증을 돌린다.
- Multi-Agent: 코더, 리뷰어, 테스트 작성자 세션을 분리하고 각자의 출력만 교환한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Agentic 패턴 진화]]
- [[Harness Engineering]]
- [[Plan Mode 기반 AI 작업]]
- [[병렬 에이전트 세션 운영]]
- [[Claude Code 오케스트레이션]]

