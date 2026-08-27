# GraphRAG 지식 그래프 파이프라인 위키 노트 작성 완료

지정된 소스 문서(`raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`)의 내용을 철저히 반영하여, 지정된 스키마와 규칙을 준수한 위키 노트를 작성했습니다.

작성된 위키 노트 파일: [GraphRAG 지식 그래프 파이프라인.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/GraphRAG%20%EC%A7%80%EC%8B%9D%20%EA%B7%B8%EB%9E%98%ED%94%84%20%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8.md)

---

### 위키 노트 본문 요약

```markdown
---
type: concept
status: draft
core: false
tags:
  - llm
  - rag
  - graphrag
  - knowledge-graph
aliases:
  - GraphRAG
  - 그래프기반 RAG
sources:
  - 'raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md'
created: 2026-08-27
updated: 2026-08-27
---

# GraphRAG 지식 그래프 파이프라인

## 한 줄 정의
문서 코퍼스로부터 엔터티(Entity) 및 관계(Relationship) 그래프를 구축하고, 질문 시 벡터 청크 대신 관련 개체군(Community) 요약을 지식 맥락으로 결합하여 비구조화 텍스트의 글로벌 종합 분석을 가능케 하는 검색 증강 생성(RAG) 파이프라인.

## 핵심 요지
- **글로벌 종합(Global Synthesis) 강점**: 기존 표준 Vector RAG(Bi-encoder/Hybrid search)가 특정 키워드나 국소적 패시지 검색에는 유용하지만, 코퍼스 전체의 거시적 주제·패턴·트렌드를 묻는 질의에는 한계를 지닌다. GraphRAG는 전체 데이터의 지식 그래프 구조를 기반으로 이를 극복한다 (`raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`).
- **커뮤니티 요약(Community Summarization)**: 문서 내 개체(Entity)와 관계(Relationship)를 추출해 지식 그래프를 형성한 후, 그래프 알고리즘(예: Leiden 알고리즘)으로 노드들을 계층적 커뮤니티로 묶고 각 커뮤니티 단위의 요약을 사전에 생성해 둔다.
- **정밀 추적성(Provenance)**: 지식의 연결 고리와 출처가 관계 그래프로 명시적으로 남아, 멀티홉 추론(Multi-hop reasoning) 과정에서 환각([[AI 환각 현상]])을 줄이고 정밀한 출처 추적을 제공한다 (`raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`).

## 상세
### 1. Standard Vector RAG vs GraphRAG
- **Standard RAG**: 텍스트를 고정/가변 길이 청크로 나누고 임베딩을 통해 유사도(Dense/Hybrid search) 기반의 top-k 청크를 가져온다. 국소적 사실 답변에는 뛰어나나, "이 문서 모음 전체의 주요 테마는 무엇인가?"와 같은 글로벌 질문에서는 지식이 파편화된다 (`raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`).
- **GraphRAG**: LLM을 이용해 비구조화 문서에서 엔터티/관계/주장을 추출하여 Graph Database나 계층적 커뮤니티 요약본을 구축한다. 검색 시 질문과 연관된 커뮤니티 요약들을 탐색·합성하여 고차원적 질문에 대한 정확한 답변을 생성한다 (`raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`).

### 2. 주요 단계 (Pipeline Architecture)
1. **Source Documents Ingestion**: 문서 인제스천 및 텍스트 청킹.
2. **Entity & Relationship Extraction**: LLM을 통해 텍스트 내 주요 엔터티(사람, 조직, 개념 등)와 이들 간의 관계 삼항조(Subject-Predicate-Object) 추출.
3. **Graph Construction & Clustering**: 추출된 엔터티/관계를 지식 그래프 형태로 결합하고, 계층적 커뮤니티 감지 알고리즘(Leiden Algorithm 등)을 적용해 노드 그룹화.
4. **Community Summarization**: 각 계층별 커뮤니티에 대한 보고서 형태의 요약문(Community Report)을 LLM으로 미리 작성.
5. **Query Processing & Synthesis (Global Search)**: 질의가 들어오면 관련 커뮤니티 요약들을 컨텍스트로 제공하여 종합적인 답변 생성 (`raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`).

## 예시
### Python 기반 GraphRAG 구현 파이프라인 (NetworkX & LLM 예시)

아래는 비구조화 텍스트에서 엔터티-관계를 추출하여 그래프를 생성하고, 개체 관계망 기반으로 검색을 수행하는 구체적인 코드 예시이다.

```python
import networkx as nx
from langchain_openai import ChatOpenAI
from pydantic import BaseModel, Field

# 1. 스키마 정의 (엔터티 및 관계)
class Relationship(BaseModel):
    source: str = Field(description="출발 엔터티 노드")
    target: str = Field(description="도착 엔터티 노드")
    relation: str = Field(description="엔터티 간 관계 설명")

class KnowledgeGraphExtraction(BaseModel):
    relationships: list[Relationship]

# 2. LLM 구조화 출력 세팅 (GPT-4o 등 활용)
llm = ChatOpenAI(model="gpt-4o", temperature=0.0)
structured_llm = llm.with_structured_output(KnowledgeGraphExtraction)

# 3. 텍스트 추출 및 지식 그래프 구축
sample_text = """
GraphRAG는 문서 코퍼스에서 엔터티와 관계를 추출하여 커뮤니티를 형성한다.
Microsoft가 개발한 GraphRAG 파이프라인은 전체 지식을 요약하는 글로벌 질의에 강점을 지닌다.
"""

result = structured_llm.invoke(f"다음 텍스트에서 주요 엔터티와 관계를 추출하세요:\n{sample_text}")

# NetworkX 그래프 생성
G = nx.Graph()
for rel in result.relationships:
    G.add_edge(rel.source, rel.target, relationship=rel.relation)

print(f"추출된 노드 수: {len(G.nodes)}")
print(f"추출된 간선 수: {len(G.edges)}")
```

### 실제 활용 시나리오
- **엔터프라이즈 지식 관리(Enterprise Knowledge Base)**: 복잡한 기업 조직도, 프로젝트 이력, 연관 시스템 등의 관계를 정밀하게 파악해야 할 때 (`raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`).
- **전사적 종합 분석(Global Synthesis)**: 수천 건의 고객 피드백이나 시장 보고서 데이터셋 전체를 관통하는 핵심 문제점 및 동향 추출 (`raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`).

## 충돌
*(현재 소스 문서 간의 주장이 충돌하는 부분은 발견되지 않음)*

## 관련 노트
- [[하이브리드 검색]]
- [[AI 환각 현상]]
- [[LLM 아키텍처 Lost in the Middle 현상]]
- [[LangGraph 상태 기반 멀티 에이전트 시스템]]

## 출처
- `raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`
```