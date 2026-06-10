---
type: concept
status: evergreen
core: false
tags:
  - llm
  - rag
  - retrieval
  - context-engineering
aliases:
  - 고급 RAG 아키텍처
  - GraphRAG
  - Vectorless RAG
sources:
  - GraphRAG 대 Vectorless RAG 대 Vector RAG - 2026 고급 Context Engineering 가이드 - 출판형 다듬기
created: 2026-05-29
updated: 2026-05-29
---

# RAG 아키텍처 선택

## 한 줄 정의

RAG 아키텍처 선택은 vector RAG, GraphRAG, vectorless RAG 중 어떤 retrieval 구조가 현재 문제에 맞는지 고르는 기준이다.

## 핵심 요지

- vector RAG는 단순 사실 검색에는 빠르고 싸지만, 의미상 비슷한 chunk를 틀린 자신감으로 답하는 실패가 생긴다.
- GraphRAG는 entity와 관계를 graph로 다뤄 관계 중심 질문에 강해진다.
- Vectorless RAG는 vector database 자체를 버리고 문서 구조와 LLM 추론에 더 많은 책임을 맡긴다.
- 중요한 질문은 "무엇이 최신이냐"보다 "어떤 실패 모드를 피하려는가"다.

## 상세

전통적인 vector RAG는 chunking, embedding, similarity search라는 단순한 경로 덕분에 널리 쓰였다. 하지만 질문이 어려워지면 비슷한 문서를 가져와도 정답이 아닐 수 있고, 시스템은 아무 경고 없이 그럴듯한 답을 내놓는다. 이 실패는 파라미터 튜닝만으로는 잘 고쳐지지 않는 구조적 문제다.

이때 선택지가 둘로 갈라진다. **GraphRAG**는 문서 내부의 entity와 관계를 그래프로 묶어 관계 중심 질의를 더 잘 다룬다. 반면 **Vectorless RAG**는 vector DB를 중심 도구로 쓰지 않고, 문서 구조 자체와 LLM의 추론을 더 적극적으로 활용한다. 둘 다 drop-in replacement가 아니며, 데이터의 구조와 운영 요구를 다시 봐야 한다.

이 노트의 실무 질문은 단순하다. 검색 품질이 문제인지, 관계 추론이 문제인지, 아니면 retrieval 계층 자체가 너무 복잡해 운영 비용만 늘리는지다. 답이 사실 검색이라면 vector RAG가 충분할 수 있고, 관계가 핵심이면 GraphRAG가 맞을 수 있다. 반대로 문서 구조가 강하고 retrieval보다 reasoning이 더 중요하면 vectorless RAG가 더 낫다.

이 관점은 [[Context Engineering]]과도 이어진다. retrieval은 단지 문서를 찾는 문제가 아니라, 다음 단계가 어떤 정보를 받아야 하는지 설계하는 문제이기 때문이다.

## 예시

- 지원 문서: 사실 검색은 vector RAG로 충분하지만, 서로 얽힌 정책과 예외가 많으면 GraphRAG가 유리하다.
- 엔지니어링 handbook: 섹션 구조가 선명하면 vectorless RAG가 간단하고 유지비가 낮을 수 있다.
- 복합 질의 평가: 정답률만 보지 말고 잘못된 자신감으로 틀리는 비율을 따로 본다.

## 충돌

- 아키텍처 이름은 유행을 탈 수 있지만, retrieval 실패 모드는 쉽게 사라지지 않는다. 따라서 구체 제품보다 실패 모드 기준으로 판단하는 편이 안전하다.

## 관련 노트

- [[Context Engineering]]
- [[생성형 AI 면접 평가 축]]
- [[AI 오픈소스 작업대]]
- [[AI 에이전트 런타임 역할 맵]]

