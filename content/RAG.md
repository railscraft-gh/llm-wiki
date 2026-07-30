---
type: concept
status: draft
core: false
tags:
  - llm
aliases:
  - 검색 증강 생성
  - Retrieval-Augmented Generation
sources: []
created: 2026-07-29
updated: 2026-07-29
---

# RAG(Retrieval-Augmented Generation)

## 한 줄 정의
외부 지식 저장소에서 입력 쿼리와 관련된 문서를 검색하여, [[LLM]]의 프롬프트에 추가 컨텍스트로 제공함으로써 모델의 환각 현상을 줄이고 정보의 정확성을 높이는 기술.

## 핵심 요지
- **환각 완화**: 모델 내부의 가중치 학습에만 의존하지 않고, 신뢰할 수 있는 외부 출처를 참조하여 답변의 사실적 신뢰도를 확보한다.
- **아키텍처**: 텍스트를 벡터로 바꾸어 저장하는 벡터 데이터베이스 또는 구조화 위키(구조화 위키와 점진적 수집)와의 연동이 필수적이다.

## 관련 노트
- [[LLM]]
- 구조화 위키와 점진적 수집
- [[PageIndex (구조형 RAG 탐색)]]

## 출처
- Lewis et al. (2020) "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks".
