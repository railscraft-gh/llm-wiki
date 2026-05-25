---
type: concept
status: evergreen
core: false
tags:
  - llm
  - agent
  - harness-engineering
  - orchestration
aliases:
  - 에이전트 하네스
sources:
  - raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md
created: 2026-05-26
updated: 2026-05-26
---

# Agent Harness

## 한 줄 정의

Agent Harness는 stateless LLM을 multi-step task를 수행하는 agent로 바꾸기 위해 모델 바깥에서 상태, 도구, 검증, 복구, 안전을 관리하는 실행 인프라다.

## 핵심 요지

- 좋은 agent와 데모형 agent의 차이는 종종 모델보다 harness에서 난다.
- harness는 orchestration loop, tool layer, memory, context management, prompt construction, output parsing 같은 바깥 구조를 포함한다.
- 모델이 강해질수록 제품 경쟁력은 가중치보다 harness 설계와 verification loop 쪽으로 이동한다.

## 상세

이 노트의 핵심 구분은 단순하다. framework가 사람이 agent를 조립하는 도구 상자라면, harness는 이미 조립된 agent가 task를 끝낼 수 있게 하는 실행 환경이다. 따라서 agent harness는 단순한 prompt 모음이 아니라, 종료 조건을 강제하는 loop, tool registry, memory persistence, compaction, safety hook, parse retry 같은 운영 코드를 함께 가리킨다.

원문은 production harness의 앞 여섯 부품을 먼저 정리한다. **orchestration loop**는 Thought-Action-Observation cycle과 종료 조건을 관리한다. **tool layer**는 tool 등록, schema 검증, 실행, 결과 포맷팅을 맡는다. **memory system**은 short-term, long-term, episodic memory를 분리해 persistence를 준다. **context management**는 compaction, observation masking, JIT retrieval, sub-agent delegation으로 context rot를 늦춘다. **prompt construction**은 글로벌 규칙, 프로젝트 문서, task 지시를 우선순위에 따라 조립한다. **output parsing**은 tool call, final answer, handoff를 구분하고 validation-aware retry를 돌린다.

이 구조는 [[Harness Engineering]]의 구현 표면이다. [[Context Engineering]]이 "무엇을 보여줄 것인가"에 초점을 맞춘다면, Agent Harness는 그 결정을 실제 loop와 memory, tool, parser 수준에서 집행하는 런타임에 가깝다. 또한 [[AI 코딩 에이전트 검증 전략]]과 연결되는 이유도 분명하다. 검증은 prompt의 부록이 아니라 harness의 한 부품이기 때문이다.

## 예시

- coding agent: `AGENTS.md`를 읽고, 필요한 파일만 찾고, 테스트를 돌리고, 실패 시 다시 수정하는 loop 전체가 harness다.
- research agent: 검색 결과를 전부 context에 넣지 않고 memory index와 JIT retrieval로 필요한 근거만 불러온다.
- enterprise agent: pre-tool hook으로 승인 흐름을 넣고 post-tool hook으로 audit log를 남긴다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Harness Engineering]]
- [[Context Engineering]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Meta-Harness]]
- [[Claude.md 운영 원칙]]

