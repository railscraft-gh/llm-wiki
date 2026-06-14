---
type: concept
status: evergreen
core: true
tags:
  - llm
  - agent
  - context-window
  - harness-engineering
aliases:
  - 컨텍스트 엔지니어링
sources:
  - AI 에이전트에게 Prompt Engineering은 죽었다. 이제 진짜 중요한 것은 Context Engineering이다
created: 2026-05-26
updated: 2026-06-14
---

# Context Engineering

## 한 줄 정의

Context Engineering은 에이전트가 다음 단계를 제대로 수행하도록 필요한 정보만, 필요한 형식으로, 필요한 시점에 전달하는 handoff 설계다.

## 핵심 요지

- Andrej Karpathy는 이를 "다음 단계를 위해 컨텍스트 윈도우를 딱 적절한 정보로만 채우는 섬세한 기술이자 과학"으로 정의했다.
- 에이전트 시스템은 개별 단계가 아니라 단계 간의 정보 전달(**context handoff**)에서 주로 무너진다.
- Chroma의 2025년 7월 연구(Claude 4, GPT-4.1, Gemini 2.5 등 18개 LLM 대상)에 따르면, 단순 정보 검색 과제도 컨텍스트가 길어질수록 성능이 비선형적으로 붕괴한다.
- 2026년 설문조사에 따르면 IT 및 데이터 리더의 82%가 프롬프트 엔지니어링만으로는 프로덕션 AI에 불충분하다고 답했으며, 95%가 컨텍스트 엔지니어링 역량에 투자할 계획이다.
- context를 **Persistent, Time-sensitive, Transient**의 세 계층으로 분류하고, 역할 기반 라우팅과 **최소 권한 컨텍스트 설계(Least-privilege context design)**를 적용해 환각과 보안 취약점(Context leak)을 예방해야 한다.

## 상세

### 1. 프롬프트 엔지니어링과 컨텍스트 엔지니어링의 차이
- **Prompt Engineering**: 모델에게 "무엇을 할지" 지시하는 언어적 최적화 작업.
- **Context Engineering**: 모델이 "지금 이 순간 잘 하기 위해 무엇을 알아야 하는지" 조건을 설계하는 인프라 작업.

### 2. 컨텍스트의 3대 계층 구조
1. **Persistent Context (영속적 컨텍스트)**
   - 에이전트가 세션 내내 유지해야 하는 고정 정보 (예: 사용자 최종 목표, 도메인 제약 조건, 세션 규칙, 규제 임계값).
2. **Time-sensitive Context (시간 민감성 컨텍스트)**
   - 현재 시점에는 유효하나 쉽게 변하는 정보 (예: 최신 RAG 검색 문서, 도구 실행 결과, API 응답, 최신 DB 스키마). 스키마 변화(Schema drift)를 주기적으로 갱신하지 않으면 오작동의 주원인이 된다.
3. **Transient Context (휘발성 컨텍스트)**
   - 현재 노드 연산에는 필요하나 다음 노드로 넘어갈 때 불필요한 정보 (예: 원시 API 페이로드, 디버그용 로그, 중간 추론 단계의 텍스트). 이를 제거하지 않으면 유한한 컨텍스트 윈도우 내에서 중요한 토큰과의 어텐션(attention) 경쟁이 발생해 성능이 저하된다.

### 3. 컨텍스트 라우팅 (Context Routing)과 MCP
모든 에이전트에게 전체 컨텍스트를 주입하는 방식은 비효율적이다. 각 역할에 맞는 서브셋(Subset)만 라우팅해야 한다.
- **Model Context Protocol (MCP)**: 모든 정보를 미리 로드하는 대신 필요한 컨텍스트 소스를 구조적으로 조회하여 당겨 쓴다. (2025년 말 기준 공개 MCP 서버가 10,000개 이상 배포됨)

## 예시

### LangGraph State 정의 예시 (Python)
각 노드가 읽고 쓰는 데이터를 계약(contract)처럼 명시하여 하위 노드의 추론 오염과 환각을 예방한다.

```python
from typing import TypedDict, Optional, List

class ResearchAgentState(TypedDict):
    # Persistent context (영속적 컨텍스트)
    user_goal: str
    domain_constraints: List[str]
    session_id: str

    # Time-sensitive context (시간 민감성 컨텍스트)
    retrieved_docs: List[str]
    current_findings: str
    last_tool_result: Optional[str]

    # Transient context (휘발성 컨텍스트)
    raw_api_payload: Optional[str]
    intermediate_reasoning: Optional[str]
```

### 실패 사례와 대응
- **의료 요약 에이전트**: 데이터 패처가 가져온 원시 API 페이로드를 요약 노드에 그대로 넘기면 토큰 낭비와 환각이 유발된다. 구현 담당은 원천 로그 대신 실패 테스트와 성공 기준만 전달받는 방식으로 라우팅을 제한한다.
- **NL-to-SQL 에이전트**: SQL 생성 노드에는 전체 대화 기록 대신 최신 데이터베이스 스키마와 최소 제약조건만 전달하여 스키마 드리프트(Schema drift)로 인한 실패를 줄인다.

## 판단 기준

- 이 노드가 `AgentState` 안에 이미 들어 있다고 가정하는 정보는 무엇인가?
- 실제로 전달받는 정보와 컨텍스트 윈도우 점유율은 적절한가?
- 하위 노드(downstream)가 원시 페이로드 전체를 읽어야 하는가, 압축된 결과물만 필요한가?
- 보안적인 맥락에서 최소 권한(Least-privilege) 원칙을 준수했는가? (프롬프트 주입을 통한 컨텍스트 유출 차단)

## 충돌

- **초장기/대규모 추론의 한계**: 컨텍스트 엔지니어링을 철저히 설계해도 컨텍스트 윈도우 자체가 거대해지면 어텐션 성능 저하를 완전히 막을 수 없다. 이 경우 계층적 검색(Hierarchical Retrieval), 적극적 요약(Summarization), 명시적 메모리 관리 아키텍처(Memory Architecture)를 병행해야 한다.
- **평가 분리의 필요성**: 문맥 구조가 논리적이더라도, RAG의 검색(retrieval) 품질이 낮거나 라우팅이 잘못되면 실패한다. 따라서 검색, 메모리, 라우팅을 각각 독립적으로 검증해야 한다.

## 관련 노트

- [[Harness Engineering]]
- [[Agent Native Infrastructure]]
- [[Context Mode]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Claude.md 운영 원칙]]
- [[Agent Harness]]
- [[AI 에이전트 런타임 역할 맵]]

