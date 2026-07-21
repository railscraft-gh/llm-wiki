---
type: concept
status: draft
core: false
tags:
  - rag
  - ai
  - system-design
  - architecture
aliases: [RAG 시스템 난이도, RAG 파이프라인]
sources:
  - raw/5단계 난이도로 알아보는 RAG 시스템 구축 및 구현 가이드.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
RAG(Retrieval-Augmented Generation) 시스템의 성숙도를 5단계로 분류하여, 데모 수준을 넘어 프로덕션 환경에서 신뢰성 있는 답변을 생성하기 위한 핵심 엔지니어링 전략입니다.

## 핵심 요지
1. **Naive RAG:** 기본 임베딩 및 유사도 검색 단계로, 지식의 개념적 유사성과 실제 문맥적 관련성 차이를 극복하지 못함 [raw/5단계 난이도로 알아보는 RAG 시스템 구축 및 구현 가이드.md#L38](file:///Users/railscraft/Obsidian/raw/5%EB%8B%A8%EA%B3%84%20%EB%82%9C%EC%9D%B4%EB%8F%84%EB%A1%9C%20%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94%20RAG%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%20%EB%B0%8F%20%EA%B5%AC%ED%98%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L38).
2. **Smart Chunking:** 중첩(Overlap)을 포함한 최적의 청크 크기 설정이 검색 품질을 결정함 [raw/5단계 난이도로 알아보는 RAG 시스템 구축 및 구현 가이드.md#L91](file:///Users/railscraft/Obsidian/raw/5%EB%8B%A8%EA%B3%84%20%EB%82%9C%EC%9D%B4%EB%8F%84%EB%A1%9C%20%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94%20RAG%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%20%EB%B0%8F%20%EA%B5%AC%ED%98%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L91).
3. **Hybrid Search:** 시맨틱 검색과 키워드 검색(BM25)을 결합하여 정보 검색 정확도 향상 [raw/5단계 난이도로 알아보는 RAG 시스템 구축 및 구현 가이드.md#L138](file:///Users/railscraft/Obsidian/raw/5%EB%8B%A8%EA%B3%84%20%EB%82%9C%EC%9D%B4%EB%8F%84%EB%A1%9C%20%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94%20RAG%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%20%EB%B0%8F%20%EA%B5%AC%ED%98%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L138).
4. **Reranking:** 크로스 인코더를 사용하여 검색된 후보군 중 질문에 대한 실제 정답 여부를 재평가 [raw/5단계 난이도로 알아보는 RAG 시스템 구축 및 구현 가이드.md#L197](file:///Users/railscraft/Obsidian/raw/5%EB%8B%A8%EA%B3%84%20%EB%82%9C%EC%9D%B4%EB%8F%84%EB%A1%9C%20%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94%20RAG%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%20%EB%B0%8F%20%EA%B5%AC%ED%98%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L197).
5. **Production RAG:** 가이드라인 및 예외 처리(I don't know response)를 도입하여 환각 최소화 [raw/5단계 난이도로 알아보는 RAG 시스템 구축 및 구현 가이드.md#L229](file:///Users/railscraft/Obsidian/raw/5%EB%8B%A8%EA%B3%84%20%EB%82%9C%EC%9D%B4%EB%8F%84%EB%A1%9C%20%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94%20RAG%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%20%EB%B0%8F%20%EA%B5%AC%ED%98%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L229).

## 상세
RAG 시스템 구축은 '작동하는 것'에서 '프로덕션에서 올바르게 작동하는 것'으로 전환하는 과정입니다. 데이터 보존 정책처럼 정확도가 중요한 시스템에서는 단순 검색 이상의 가드레일이 필요합니다. 각 단계는 이전 단계의 한계를 보완하며, 측정 가능한 평가셋 구축을 통해 반복적으로 성능을 개선해야 합니다.

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[LLM Wiki 운영 패턴]]

