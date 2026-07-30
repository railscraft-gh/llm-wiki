---
type: concept
status: draft
core: false
tags:
- rag
- architecture
- llm
- vector-db
- graphrag
aliases:
- RAG 아키텍처 선택
- 9가지 RAG 아키텍처
- RAG-아키텍처-선택
sources:
- raw/AI 개발자가 반드시 알아야 할 9가지 RAG 아키텍처 - 실무 예제로 배우는 완전 가이드.md
created: 2026-07-21
updated: 2026-07-21
---
# [[RAG]] 아키텍처 선택

## 한 줄 정의
프로덕션 AI 개발 시 환각 방지 및 비즈니스 요구사항(지연시간, 정확성, 예산)에 맞춰 표준 [[RAG]]부터 에이전틱·그래프 [[RAG]]까지 9가지 주요 패턴을 비교 및 조합하는 의사결정 프레임워크.

## 핵심 요지
- **단일 [[RAG]]의 환각 문제 한계**: 데모 수준의 Naive [[RAG]]를 넘어, 프로덕션 환경의 사실성(Groundedness) 확보를 위해 도메인 문제별로 아키텍처 패턴을 맞춤 선택해야 합니다.
- **실무 검증 9대 [[RAG]] 아키텍처**:
  1. **Standard [[RAG]]**: 일회성 조회의 기초 형태 (지연시간 [1초 미만](file:///Users/railscraft/Obsidian/raw/AI%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80%20%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20[[RAG]]%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20-%20%EC%8B%A4%EB%AC%B4%20%EC%98%88%EC%A0%9C%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L65))
  2. **Conversational [[RAG]]**: [5~10턴 메모리 레이어](file:///Users/railscraft/Obsidian/raw/AI%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80%20%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20[[RAG]]%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20-%20%EC%8B%A4%EB%AC%B4%20%EC%98%88%EC%A0%9C%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L86)로 문맥 표류 방지 및 질의 재작성
  3. **Corrective [[RAG]] (C[[RAG]])**: 의사결정 관문에서 품질 미달 시 외부 웹 검색 Fallback ([2~4초 지연](file:///Users/railscraft/Obsidian/raw/AI%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80%20%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20[[RAG]]%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20-%20%EC%8B%A4%EB%AC%B4%20%EC%98%88%EC%A0%9C%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L127))
  4. **Adaptive [[RAG]]**: 질문 난이도를 라우팅하여 불필요한 검색 연산 차단
  5. **Self-[[RAG]]**: 성찰 토큰(`[IsRel]`, `[IsSup]`)으로 생성 도중 자율 실시간 수정
  6. **Fusion [[RAG]]**: [3~5가지 유사 질문 확장](file:///Users/railscraft/Obsidian/raw/AI%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80%20%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20[[RAG]]%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20-%20%EC%8B%A4%EB%AC%B4%20%EC%98%88%EC%A0%9C%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L193) 및 상호 순위 융합(RRF)
  7. **HyDE**: 가상 답변 초안을 먼저 생성 후 실제 문서 백터 검색
  8. **Agentic [[RAG]]**: 자율 에이전트가 리서치 시나리오를 세워 도구를 다단계 호출
  9. **[[GraphRAG]]**: 엔티티와 연관 관계망을 지식 그래프로 구축하여 인과 추론 ([99% 정확도](file:///Users/railscraft/Obsidian/raw/AI%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80%20%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20[[RAG]]%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20-%20%EC%8B%A4%EB%AC%B4%20%EC%98%88%EC%A0%9C%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L323) 달성)
- **하이브리드 결합과 5단계 가이드**: 표준 [[RAG]]로 출발하여 필요성이 검증될 때 복잡도를 점진 추가(95% 표준 + 5% C[[RAG]] Fallback 등).

## 상세
[[RAG]] 선택의 핵심은 단순 학술 논문 수치([2024년 1,200편 이상 발표](file:///Users/railscraft/Obsidian/raw/AI%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80%20%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20[[RAG]]%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20-%20%EC%8B%A4%EB%AC%B4%20%EC%98%88%EC%A0%9C%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L422))가 아니라, 비즈니스 오버헤드와 지연시간(Latency)의 타협에 있습니다.

의미론적 유사도 기반의 시맨틱 벡터 검색과 키워드 매칭(BM25)을 결합한 하이브리드 검색이 기본 골격을 이루며, 엔티티 간 관계망 분석이 필수적인 도메인(법률, 의학, 금융 연쇄 구조)에서는 [[GraphRAG]]를 채택하여 설명 가능성(Explainability)을 확보합니다.

복잡한 질의가 요구되더라도 단순 FAQ 서비스에 Agentic [[RAG]]를 대입하는 오버 엔지니어링을 피하고, 1단계 표준 [[RAG]] 튜닝부터 출발하는 적진호(Red Flags) 경계 원칙이 강조됩니다.

## 예시
- **하이브리드 패턴 (Standard + C[[RAG]])**: 대부분의 일상 질의는 1초 미만의 Standard [[RAG]]로 즉각 반환하고, 신뢰도 스코어가 낮을 때만 Corrective [[RAG]] 관문을 거쳐 외부 API 검색을 수행.
- **[[GraphRAG]] 인과관계 탐색**: "미연준 금리 결정 -> VC 자금 감소 -> 스타트업 밸류에이션 하락"으로 연결되는 지식 그래프 Multi-hop 경로를 따라 추론 답변을 구동.

## 충돌
- **오버 엔지니어링과 비용 폭증**: 단순 챗봇에 무작정 Self-[[RAG]]나 에이전틱 [[RAG]]를 적용하면 불필요한 성찰 토큰 연산과 API 연동으로 3~5배 이상의 토큰 비용 및 지연이 발생합니다.
- **HyDE의 가상 답변 편향 위험**: 질문 파싱 단계에서 생성한 가설적 초안 답변이 엉뚱한 거짓 사실일 경우, 벡터 검색 결과 전체가 오답 방향으로 왜곡(Bias)될 수 있습니다.

## 관련 노트
- [[Compile-Time RAG]]
- [[GraphRAG]]
- [[RAG 퓨전]]
- [[PageIndex (구조형 RAG 탐색)]]

## 출처
- [raw/AI 개발자가 반드시 알아야 할 9가지 [[RAG]] 아키텍처 - 실무 예제로 배우는 완전 가이드.md](file:///Users/railscraft/Obsidian/raw/AI%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80%20%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20[[RAG]]%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20-%20%EC%8B%A4%EB%AC%B4%20%EC%98%88%EC%A0%9C%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
