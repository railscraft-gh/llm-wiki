---
type: workflow
status: needs-review
core: false
tags:
  - llm
  - hiring
  - interview
  - ai-coding
aliases:
  - GenAI 면접 평가 축
  - LLM 엔지니어 면접 질문 축
sources:
  - raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md
created: 2026-05-26
updated: 2026-05-26
---

# 생성형 AI 면접 평가 축

## 한 줄 정의

생성형 AI 면접 평가 축은 GenAI·LLM 엔지니어 면접에서 정의 암기보다 시스템 trade-off와 운영 경험을 어떤 축으로 검증하는지 정리한 실무 프레임이다.

## 핵심 요지

- 면접은 모델 기초보다 RAG, multi-agent, 평가, observability, guardrail, NL-to-SQL 같은 시스템 단위 설계를 더 많이 본다.
- 좋은 답변은 용어 설명보다 왜 특정 선택이 필요한지, 어떤 실패 모드를 어떻게 줄였는지까지 포함한다.
- 채용 신호는 "써봤다"보다 trade-off를 설명하고 운영 실패를 복구한 경험에 가깝다.

## 상세

원문 40문항은 결국 몇 개의 평가 축으로 압축된다. 첫째는 **모델·추론 기초**다. attention, context window, decoding, instruction tuning 같은 기초를 이해해야 한다. 둘째는 **grounding과 retrieval 설계**다. chunking, hybrid search, reranker, RAG 평가, lost-in-the-middle 대응을 설명할 수 있어야 한다. 셋째는 **agent orchestration과 memory**다. ReAct, Plan-and-Execute, state 공유, loop 종료, memory 분리, deadlock 방지가 여기에 들어간다. 넷째는 **fine-tuning과 alignment**다. RAG와 fine-tuning을 언제 나누는지, LoRA/QLoRA, RLHF/DPO를 어떤 문제에서 쓰는지 본다. 다섯째는 **평가와 observability**다. offline/online eval, LLM-as-judge 편향, trace, latency, token, retrieval score를 어떻게 추적하는지 묻는다. 여섯째는 **시스템 설계와 safety**다. 멀티테넌트 RAG, guardrail, latency, NL-to-SQL 실패 모드, GraphRAG 같은 주제가 포함된다.

이 프레임은 [[AI 네이티브 사용자]]와 직접 연결된다. 실제 채용은 더 이상 "손코딩을 얼마나 빨리 하느냐"보다 agent와 retrieval, 검증 루프를 붙여 큰 시스템을 안전하게 다룰 수 있는지를 본다. 동시에 [[AI 코딩 에이전트 검증 전략]]이나 [[Context Engineering]] 같은 노트가 바로 면접 대답의 실무형 근거가 된다.

## 예시

- RAG 질문에선 "vector search를 썼다"보다 hybrid search, reranker, citation, faithfulness 검증까지 말해야 강하다.
- multi-agent 질문에선 역할 분리보다 loop 종료 조건, state pollution 방지, supervisor 구조를 설명할 수 있어야 한다.
- 시스템 설계 질문에선 tenant 격리, guardrail, observability, fallback까지 포함해야 한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI 네이티브 사용자]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Context Engineering]]
- [[Agent Harness]]
- [[Competence Debt]]

