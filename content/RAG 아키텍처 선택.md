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
  - "raw/GraphRAG 대 Vectorless RAG 대 Vector RAG - 2026 고급 Context Engineering 가이드 - 출판형 다듬기.md"
  - "raw/RAG 시스템 초보자부터 전문가까지의 완전 가이드 (2026년 에디션).md"
created: 2026-05-29
updated: 2026-06-12
---

# RAG 아키텍처 선택

## 한 줄 정의
RAG 아키텍처 선택은 데이터의 구조적 특성(사실 검색, 관계 추론, 계층형 문서)과 시스템 요구사항에 부합하도록 Vector RAG(밀집+희소), GraphRAG, Vectorless RAG 중 최적의 검색 및 컨텍스트 엔지니어링 설계를 채택하는 의사결정 프레임이다.

## 핵심 요지
- **Vector RAG (Hybrid + Rerank)**: 단순 사실 검색에 적합하며, Dense Vector와 BM25 희소 검색을 결합(Hybrid)하고 Reranker(Cross-Encoder)로 재정렬하여 1차 검색 품질을 극대화한다.
- **GraphRAG**: 엔티티(Entity) 간의 의미 관계 지도를 그래프 형태로 구축하여, 단편적 키워드를 넘어 복잡한 관계형 의문과 맥락적 요약을 다룬다.
- **Vectorless RAG**: 벡터 임베딩 자체를 배제하고, 문서의 구조(Markdown headings, JSON)와 LLM의 추론에만 기반해 정밀한 로컬 검색을 수행한다.
- **결함 방어 평가**: RAGAS 등을 도입해 Faithfulness(충실도)와 Answer Relevance(답변 정합성)를 정량적으로 평가하고 잘못된 확신(Hallucination)을 탐지한다.

## 상세

### 1. Vector RAG의 현대적 3대 튜닝 기법
단순 코사인 유사도 검색만으로는 프로덕션 환경의 검색 정확도를 보장할 수 없다. 2026년 에디션 RAG는 다음의 3대 핵심 튜닝을 거친다.
1. **하이브리드 검색 (Hybrid Search)**: 의미론적 맥락을 잡는 밀집(Dense) 임베딩 벡터 검색과, 제품 코드나 이메일 주소 같은 고유 키워드를 정확하게 잡는 BM25 기반 희소(Sparse) 검색을 융합(RRF 등의 랭킹 결합 알고리즘 활용)한다.
2. **리랭커 (Reranker, Cross-Encoder)**: 속도가 빠른 Bi-Encoder로 수백 개의 후보 문서를 1차 탐색한 뒤, Cross-Encoder 기반의 리랭커 모델을 기동하여 쿼리와 문서 본문을 동시에 입력해 정밀 상호작용 점수를 매겨 상위 5~10개로 2차 압축한다. RAG 정확도 향상의 가장 강력한 레버이다.
3. **메타데이터 프리필터링 (Metadata Pre-filtering)**: 질문 프롬프트에서 LLM을 사용해 날짜, 카테고리, 유저 권한 등의 필터를 미리 추출한 뒤 Vector DB 쿼리에 AND 조건으로 사전 필터링을 걸어 엉뚱한 정보 영역이 검색되는 현상을 차단한다.

### 2. GraphRAG와 Vectorless RAG
- **GraphRAG**: 문서의 산발적인 지식 파편을 '노드(엔티티)'와 '엣지(관계)'로 그래프화하여, "A 정책을 위반한 경우 B 부서와 C 시스템에 미치는 영향은?"과 같이 여러 챕터를 넘나드는 관계형 질문을 해결한다.
- **Vectorless RAG**: 벡터 데이터베이스 인프라를 사용하지 않고, 기계 가독성이 완벽한 마크다운 문서의 트리(Tree) 구조를 직접 순회하며 LLM이 필요한 컨텍스트를 즉석 컴파일하여 추론한다.

### 3. RAG 성능의 정량적 평가 (Evaluation)
구현된 RAG 시스템은 RAGAS 등의 프레임워크를 연동하여 다음 3대 메트릭을 추적한다.
- **Faithfulness (충실도)**: 생성된 답변이 검색된 문서에만 완벽히 기반하고 있는가 (환각 차단).
- **Answer Relevance (답변 유사도)**: 답변이 사용자의 본래 질문 목적에 정확히 대답하고 있는가.
- **Context Recall (맥락 재현율)**: 검색된 문서가 사용자의 정답을 도출하기 위한 모든 정보를 포함하고 있는가.

## 예시
- **보안 지원 센터**: 사실 위주의 규정 검색은 하이브리드 Vector RAG로 구축하고, 규정 간의 예외 조항 상호 연관성 해석은 GraphRAG를 적용한다.
- **개발 환경 핸드북**: 폴더와 마크다운 목차 구조가 명확한 wiki/ 문서는 Vectorless RAG로 설계해 DB 인프라 오버헤드를 해소한다.

## 충돌
- 아키텍처 명칭의 트랜드보다 중요한 것은 모델이 '잘못된 자신감(High confidence in wrong answer)'으로 정답을 유추해 내지 않도록, 검색 정보 부재 시 "정보를 찾을 수 없습니다"라고 답하게 하는 에러 예외 처리(Fallback Gate)를 하네스에 명시하는 일이다.

## 관련 노트
- [[Context Engineering]]
- [[생성형 AI 면접 평가 축]]
- [[Agent Harness]]
- [[모듈러 모놀리스]]
- [[MEMORY.md 운영 원칙]]

