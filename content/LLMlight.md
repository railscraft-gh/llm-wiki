---
type: tool
status: draft
core: false
tags:
- llm
- python
- framework
- local-llm
aliases: []
sources:
- raw/나만의 개인용 에이전트 시스템 개발하기: 단계별 가이드.md
created: 2026-06-22
updated: 2026-06-22
---
# [[LLM]]light

## 한 줄 정의
의존성을 최소화하고 순수 파이썬 코드를 기반으로 로컬 언어 모델의 API 호출과 텍스트 분할, 시맨틱 검색, 컨텍스트 압축, 다단계 에이전트 토론 파이프라인을 매개변수화하여 통제하도록 돕는 초경량 프레임워크다.

## 핵심 요지
- 로컬 개발 환경(예: LM Studio 호스트 API)에서 콤팩트하게 다단계 에이전트 파이프라인을 구축하고 매개변수를 최적화한다.
- SQLite 상에서 HNSW(Hierarchical Navigable Small World) 고속 그래프 최근접 이웃 인덱스를 자체 구현하여 경량 임베디드 시맨틱 데이터베이스를 운영한다.
- 질문(Query), 지침(Instructions), 시스템 역할(System), 컨텍스트(Context), 출력 양식(Response format)을 코드 인자로 명확히 분리 설계하는 매개변수화 프롬프팅 구조를 제공한다.

## 상세
### 1. 주요 튜닝 파이프라인 및 전략
- **Chunking (텍스트 분할)**: 기본 글자수 1,000자 단위, Overlap 200자 중첩 구간을 지정해 맥락 손실을 최소화하고 환각을 예방한다. 200자 미만으로 자르면 정보 파편화 리스크가 커진다.
- **SQLite DB (검색)**: SQLite 임베디드 백엔드 상에서 별도의 벡터 DB 서버 기동 없이 고속 근사 최근접 이웃(ANN) 그래프 검색을 실행한다.
- **[[임베딩]] 및 채점**: 단어 의미 유사도를 위해 BERT 또는 BGE-small을 사용하고, 유사도 평가 척도로는 코사인 유사도(Cosine Similarity)를 채택한다.
- **Context Strategies**: `None` (로컬 청크 단순 취합), `chunk-wise` (개별 청크 필터링 검증), `global-reasoning` (청크 간 인과관계 계층 병합 요약) 옵션을 제공해 에이전트의 인지 과부하를 분산한다.

### 2. MemVid 아키텍처 연동
[[LLM]]light는 오프라인 기기 간 휴대성을 극대화하기 위해 수백만 개의 고차원 [[임베딩]] 벡터 정보를 **단 한 편의 MP4 비디오 파일**로 고밀도 압축하여 보관 및 복사할 수 있는 독특한 벡터 스토어 포맷인 **MemVid** 백엔드를 연동하여 활용할 수 있다.

## 예시
### 로컬 클라이언트 구동 코드
```python
from LLMlight import LLMlight  
  
# Initialize client linked to LM Studio server
client = LLMlight(
    model="google/gemma-4-26b-a4b-qat", 
    endpoint="http://localhost:1234/v1/chat/completions",
    retrieval_method="naive_rag",
    context_strategy="global-reasoning"
)  

# Persist SQLite KB
client.memory_init(store_path="kb.db")
client.memory_add(text="...")
client.memory_save()

# Parametrizing prompt parameters
response = client.prompt(
    query="Explain self-attention.",
    instructions="Explain for beginners in 2 paragraphs.",
    system="You are an AI professor.",
    response_format="markdown"
)
print(response)
```

## 관련 노트
- [[로컬 LLM 30분 실전 가이드]]
- [[AI 오픈소스 작업대]]
- [[RAG 아키텍처 선택]]

## 出처
- raw/나만의 개인용 에이전트 시스템 개발하기: 단계별 가이드.md ([[LLM]]light GitHub repository, MemVid software documentation)
