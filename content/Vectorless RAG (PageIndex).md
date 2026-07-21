---
type: concept
status: draft
core: false
tags:
- llm
- rag
- architecture
- context
aliases:
- Vectorless RAG
- PageIndex
- 구조형 RAG 탐색
- Vectorless-RAG-(PageIndex)
sources:
- raw/GraphRAG 대 Vectorless RAG 대 Vector RAG - 2026 고급 Context Engineering 가이드 - 출판형
  다듬기.md
created: 2026-07-21
updated: 2026-07-21
---
# Vectorless RAG (PageIndex)

## 한 줄 정의
청킹(Chunking)과 임베딩(Embedding) 및 벡터 DB를 완전히 배제하고, 문서 고유의 목차 및 트리 구조를 LLM 추론으로 연속 탐색하여 특정 구역으로 직접 이동해 정밀 답을 추출하는 RAG 아키텍처.

## 핵심 요지
- **청킹 구조 파괴 방지**: 512 토큰 창으로 문서를 자를 때 발생하는 금융 표의 열 헤더 분리, 각주-수치 분리, 조항 cross-reference 유실을 근본 차단.
- **인간 전문가 탐색 모방**: 보고서를 열고 목차(Table of Contents Tree)를 훑은 뒤 관련 Chapter $\rightarrow$ Section $\rightarrow$ Table cells 순서로 LLM 추론 이동.
- **초고정밀 성능**: FinanceBench 벤치마크에서 [Vectorless RAG(PageIndex)기반 Mafin 2.5가 98.7% 정확도 달성](file:///Users/railscraft/Obsidian/raw/[[GraphRAG]]%20%EB%8C%80%20Vectorless%20RAG%20%EB%8C%80%20Vector%20RAG%20-%202026%20%EA%B3%A0%EA%B8%89%20Context%20Engineering%20%EA%B0%80%EC%9D%B4%EB%93%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L170) (전통 Vector RAG 50%, Perplexity 45%).

## 상세
- **RAG 3대 철학 비교**:
  - Vector RAG: 낙관적 매칭 (유사도 근접 검색)
  - [[GraphRAG]]: 구조적 매핑 (엔티티-관계 Knowledge Graph 사전에 색인)
  - Vectorless RAG: 의도적 탐색 (LLM 맹목적 근사 대신 구조 추론 탐색)

## 예시
- SEC 제출 서류, 법률 계약서, 금융 보고서처럼 [단 1%의 정밀도 오차도 허용되지 않는 영역에서 98.7%의 비즈니스 오차 없는 숫자 추출](file:///Users/railscraft/Obsidian/raw/[[GraphRAG]]%20%EB%8C%80%20Vectorless%20RAG%20%EB%8C%80%20Vector%20RAG%20-%202026%20%EA%B3%A0%EA%B8%89%20Context%20Engineering%20%EA%B0%80%EC%9D%B4%EB%93%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L170-L177).

## 충돌
- **LLM 추론 비용 및 지연 오버헤드**: 단순 검색 질의에도 LLM의 트리 구조 재귀 호출이 수반되어 고빈도 저복잡도 처리 시 비용 및 속도 불이익 발생.

## 관련 노트
- [[PageIndex (구조형 RAG 탐색)]]
- [[하이브리드 RAG]]

