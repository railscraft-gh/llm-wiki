---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - vector-database
  - rag
aliases:
  - 큐드란트
sources:
  - 'raw/After Claude Code. 6 Open-Source Tools You Should Know-ko.md'
created: 2026-08-28
updated: 2026-08-28
---

# Qdrant

## 한 줄 정의
[[LLM]] 및 [[AI Agent]] 시스템에 장기 기억(Agent Memory)과 고성능 검색 기능을 제공하는 대표적인 오픈소스 벡터 데이터베이스(Vector Database).

## 핵심 요지
- **인기 오픈소스 벡터 저장소**: GitHub Stars 31.2k(raw/After [[Claude Code]]. 6 Open-Source Tools You Should Know-ko.md)를 보유한 검증된 벡터 데이터베이스.
- **[[LLM]] Context 한계 극복**: AI 모델이 단기 대화 맥락(Context Window)에만 의존하지 않고 장기 지식 검색(Semantic Search) 및 [[RAG]]를 수행하도록 지원.
- **완전한 통제권 및 Self-Hosting**: SaaS형 플랫폼 대비 데이터 구조, 인덱싱 방식, 검색 로직을 개발자가 완전히 제어할 수 있어 엔터프라이즈 사내망 설치 및 보안에 최적화.
- **프레임워크 생태계 연동**: [[LangChain]], [[LlamaIndex]] 등 주요 AI 오케스트레이션 라이브러리와 유기적으로 결합.

## 상세
[[Claude Code]]와 같은 AI 코딩 도구나 [[AI Agent]]를 활용할 때, 컨텍스트 용량 제한으로 인해 프로젝트 전체 지식이나 장기 대화이력을 지속적으로 기억하기 어렵다. Qdrant는 이러한 한계를 해소하는 장기 기억 저장소 및 검색 계층 역할을 담당한다.

개발자는 Embedding 및 Retrieval 로직을 구현하고 Qdrant에 벡터 데이터를 저장함으로써, AI가 단기 대화 맥락을 넘어 시스템 전체 지식을 실시간으로 참조할 수 있도록 구성한다.

### 주요 활용 시나리오
- **AI Knowledge Base & 문서 검색**: 사내 문서, PRD, 기술 사양서 대상 시맨틱 검색
- **Agent Memory**: [[AI Agent]]의 대화 이력 및 장기 상태(State) 영속화
- **AI 고객 지원**: 고도화된 FAQ 및 컨텍스트 기반 고객 응답 자동화
- **AI Search**: 의미 기반의 비구조화 데이터 탐색 시스템 구축

## 예시

### 1. Docker 환경에서 Qdrant 실행 ([[Claude Code]] 활용 예시)
```bash
# Qdrant Docker 컨테이너 실행 명령 (포트 6333: HTTP API, 6334: gRPC)
docker run -p 6333:6333 -p 6334:6334 \
    -v $(pwd)/qdrant_storage:/qdrant/storage \
    qdrant/qdrant
```

### 2. Python SDK 및 `qdrant-client` 활용 예시
```python
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct

# Local Qdrant 인스턴스 연결
client = QdrantClient(url="http://localhost:6333")

# 1. AI Knowledge Base용 컬렉션 생성 (예: OpenAI text-embedding-3-small 1536 차원)
collection_name = "knowledge_base"
client.recreate_collection(
    collection_name=collection_name,
    vectors_config=VectorParams(size=1536, distance=Distance.COSINE),
)

# 2. 벡터 및 페이로드 데이터 삽입 예시
client.upsert(
    collection_name=collection_name,
    points=[
        PointStruct(
            id=1,
            vector=[0.05] * 1536,  # 실제 임베딩 벡터값
            payload={"title": "Qdrant 문서", "content": "Qdrant는 오픈소스 벡터 데이터베이스입니다."}
        )
    ]
)

# 3. 시맨틱 검색 수행
search_result = client.search(
    collection_name=collection_name,
    query_vector=[0.05] * 1536,
    limit=3
)
```

## 충돌
- 현재 소스 문서상 명시된 다른 주장이나 결론 충돌 요소는 없음.

## 관련 노트
- [[RAG]] (Retrieval-Augmented Generation): Qdrant가 정보 검색 계층(Retrieval Layer)으로 핵심 작동하는 장기 지식 확장 기법.
- [[AI Agent]]: Qdrant를 장기 기억(Agent Memory) 저장소로 활용하여 영속적인 컨텍스트를 유지하는 자율형 에이전트.
- [[Claude Code]]: Qdrant 인프라 구성 및 [[임베딩]]/검색 코드 작성을 빠르게 조율하는 AI 프로그래밍 도구.
- [[LangChain]]: Qdrant VectorStore 파이프라인 연동을 용이하게 지원하는 오케스트레이션 프레임워크.
- [[LlamaIndex]]: 데이터 인덱싱 및 [[RAG]] 구조화 시 Qdrant를 백엔드 저장소로 활용할 수 있는 프레임워크.

## 출처
- `raw/After Claude Code. 6 Open-Source Tools You Should Know-ko.md`