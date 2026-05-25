---
type: concept
status: evergreen
core: false
tags:
  - llm
  - agent
  - context-window
  - harness-engineering
aliases:
  - 컨텍스트 엔지니어링
sources:
  - raw/AI 에이전트에게 Prompt Engineering은 죽었다. 이제 진짜 중요한 것은 Context Engineering이다.md
created: 2026-05-26
updated: 2026-05-26
---

# Context Engineering

## 한 줄 정의

Context Engineering은 에이전트가 다음 단계를 제대로 수행하도록 필요한 정보만, 필요한 형식으로, 필요한 시점에 전달하는 handoff 설계다.

## 핵심 요지

- 문제는 prompt 한 문장이 아니라 단계 사이에서 어떤 정보가 전달되고 사라지는가에 있다.
- 좋은 agent는 모든 문맥을 다 주지 않고, 역할별로 필요한 context만 라우팅한다.
- persistent, time-sensitive, transient context를 구분하면 환각, stale state, 토큰 낭비를 줄이기 쉽다.

## 상세

이 관점은 "질문을 잘 쓰는 법"보다 "답이 가능해지도록 입력 조건을 설계하는 법"에 가깝다. raw 글의 핵심 사례는 LangGraph 파이프라인의 `AgentState`를 메모장이 아니라 계약(contract)으로 다루는 순간이다. 각 노드가 무엇을 읽고 무엇을 쓰는지 명시하면, 다음 노드가 빠진 문맥을 추측하며 환각할 필요가 줄어든다.

실무에서는 보통 세 층으로 나눈다. **persistent context**는 사용자 목표, 제약, 세션 결정처럼 계속 유지해야 하는 정보다. **time-sensitive context**는 검색 결과, 최근 tool output, 현재 schema처럼 곧 낡을 수 있는 정보다. **transient context**는 raw payload, 긴 중간 추론처럼 현재 단계가 끝나면 버려야 하는 정보다. 이 셋을 섞어 쌓아 두면 stale context와 attention 경쟁이 동시에 발생한다.

그래서 context engineering의 질문은 단순하다. "무엇을 더 넣을까"가 아니라 "누가 무엇을 알아야 하며, 무엇은 지금 버려야 하는가"다. 이 점에서 [[Harness Engineering]]이 전체 환경 설계라면, Context Engineering은 그중에서도 **context handoff와 routing**을 다루는 하위 규율이다.

## 예시

- 리서치 agent: 검색 담당은 원문 chunk를 보지만, 요약 담당은 압축된 findings와 출처만 받는다.
- NL-to-SQL agent: SQL 생성기에는 전체 대화 기록보다 최신 schema와 제약만 전달한다.
- 코딩 agent: 구현 담당은 raw log 전체보다 실패 테스트, 관련 파일, 성공 기준만 받는다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Harness Engineering]]
- [[Agent Native Infrastructure]]
- [[Context Mode]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Claude.md 운영 원칙]]

