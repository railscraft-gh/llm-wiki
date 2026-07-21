---
type: concept
status: draft
core: false
tags:
  - llm
  - rag
  - memory
  - architecture
aliases:
  - Hybrid RAG Pipeline
  - 하이브리드 검색 증강 생성
sources:
  - raw/밑바닥부터 만드는 LLM 메모리 #3. 벡터 메모리.md
created: 2026-07-21
updated: 2026-07-21
---
# 하이브리드 RAG

## 한 줄 정의
의미론적 뉘앙스를 파악하는 밀집 벡터(Dense) 검색과 고유명사·코드의 정밀 매칭을 담당하는 희소 키워드(Sparse) 검색을 결합하고 크로스 인코더 리랭킹으로 최종 후보를 선별하는 RAG 파이프라인.

## 핵심 요지
- **단일 검색 한계 극복**: 벡터 검색만 적용 시 에러 코드나 특정 식별자 매칭 정밀도가 떨어지는 퍼지(Fuzzy) 현상이 발생하고, 키워드 검색만 적용 시 문맥 및 의미적 동의어를 놓치는 문제를 상호 보완.
- **3단계 아키텍처**:
  1. 1차 병열 검색: Dense(ChromaDB + 임베딩) 및 Sparse(BM25) 후보 상위 N개 각각 추출.
  2. 병합 및 중복 제거 (Fusion).
  3. 2차 리랭킹: 크로스 인코더(Cross-Encoder)가 질의와 문서 조각의 관련성 점수를 정밀 채점하여 상위 K개만 수용.
- **손실 압축 대체**: 요약 버퍼 방식의 정보 유실 문제를 원본 대화 색인으로 해결.

## 상세
- **구현 스택 예시**:
  - Dense Vector Store: ChromaDB + `all-MiniLM-L6-v2`
  - Sparse Index: `rank_bm25` (BM25Okapi)
  - Reranker: `ms-marco-MiniLM-L-6-v2` Cross-Encoder

## 예시
- 1,000턴 전 나눈 대화 속 10자리 해시코드나 특정 포트 번호(`9473`)를 손실 없이 [100% 정확하게 찾아내어 답변에 주입](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20LLM%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%233.%20%EB%B2%A1%ED%84%B0%20%EB%A9%94%EB%AA%A8%EB%A6%AC.md#L473-L520).

## 충돌
- **멀티홉 추론(Multi-Hop Reasoning) 한계**: 유사도 기반 검색 특성상 "앨리스의 남동생이 일하는 회사"처럼 복잡한 관계망을 여러 단계 징검다리로 엮어야 하는 암시적 정보 추적에는 실패함 ([[GraphRAG]] 필요).

## 관련 노트
- [[대화 쌍 저장 전략]]
- [[GraphRAG 대 Vectorless RAG 대 Vector RAG - 2026 고급 Context Engineering 가이드 - 출판형 다듬기]]

