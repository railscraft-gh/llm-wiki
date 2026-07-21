---
aliases:
  - Context-Engineering
  - 컨텍스트 엔지니어링
core: true
created: 2026-05-26
sources:
  - AI 에이전트에게 Prompt Engineering은 죽었다. 이제 진짜 중요한 것은 Context Engineering이다
  - raw/cc101_axwith_ko.html
  - raw/하네스를 내 것으로 만들기 - 출판형 다듬기.md
  - raw/AI 에이전트에게 Prompt Engineering은 죽었다. 이제 진짜 중요한 것은 Context Engineering이다.md
  - raw/Skills, MCP, Tool Calling. 에이전트 확장의 세 층.md
  - raw/AI와 디자인 시스템 - 출판형 다듬기.md
  - raw/Structuring Agents, Skills, and MCPs 🤖🧩.md
  - raw/지금 개발자들이 주목하는 오픈소스 GitHub 프로젝트 15선 - 출판형 다듬기.md
  - raw/아이디어에서 현실 시스템까지 AI 에이전트 구축하기 - 출판형 다듬기.md
status: evergreen
tags:
  - llm
  - agent
  - context-window
  - harness-engineering
type: concept
updated: 2026-07-10
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
- 어텐션은 공짜가 아니다 (Attention is not free): 입력 길이가 늘어날수록, 유한한 컨텍스트 창 내에서 중요한 토큰과 불필요한 토큰이 어텐션 경쟁을 일으켜 신뢰도가 무너진다.
- Big Tech의 하네스 인프라 경쟁: OpenAI(Workspace agents, Agents SDK, Frontier), Anthropic(Claude Code, Cowork, Design), MS(Copilot 시스템화, Agent 365), Google(Gemini Enterprise Agent Platform) 등이 일급 객체로서 하네스 레이어를 소유하기 위해 경쟁 중임.
- Claude Code Compaction (반응형): 효과적인 컨텍스트 크기 한계에서 13,000 토큰(수동은 3,000 토큰) 이내로 토큰이 차오르면 비로소 자동 압축 작동. 413 에러(prompt_too_long) 발생 시 reactive fallback 구동.
- [[OpenClaw]] Compaction (선제형): 매 호출 전 비용 추정 후 1.2배 안전 마진을 적용해 선제적 압축(Eviction/Pruning) 전략 수행. 창의 90% 도달 시 overflow 가드로 자동 에러 차단.
- cached microcompact: Claude Code는 API 독점 권한인 cache_edits 기능을 이용해, 로컬 메시지는 유지하되 서버 캐시 내 오래된 tool result만 외과적으로 eviction 처리하여 cache hit율을 보존함. 사용자 Idle 60분 초과 시 시간 기반 eviction 단행.

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
- **[[Model Context Protocol]] (MCP)**: 모든 정보를 미리 로드하는 대신 필요한 컨텍스트 소스를 구조적으로 조회하여 당겨 쓴다. (2025년 말 기준 공개 MCP 서버가 10,000개 이상 배포됨)

### 컨텍스트 Handoff의 바통 터치 비유
- 멀티 에이전트 시스템에서 에이전트의 실패는 추론 지능의 부족이 아니라, 이전 에이전트가 내린 결정과 맥락을 다음 주자에게 올바르게 전달하지 못하는 'Handoff의 붕괴'에 기인한다. 이는 계주에서 바통만 던져 주고 어느 레인인지, 앞 주자가 어디까지 왔는지 설명하지 않는 것과 같다.

### Claude Code 대 [[OpenClaw]] 컨텍스트 압축 아키텍처 상세

| 비교 항목 | Claude Code (반응형 / Reactive) | [[OpenClaw]] (선제형 / Predictive) |
| :--- | :--- | :--- |
| **트리거 시점** | 창 한계 직전 (남은 용량 13,000 토큰) | 매 turn 실행 전 토큰 비용 예측 및 안전 마진 1.2배 검증 |
| **초저비용 Pruning** | `cache_edits`로 캐시 무효화 없이 특정 tool result만 지우는 `cached microcompact` 수행 | 개별 툴 결과가 창의 50% 초과 시 잘라내고, 고아 결과를 복구하는 `tool-pair repair` 수행 |
| **요약 실행 기법** | `runForkedAgent`를 띄워 부모의 캐시 프리픽스 상속 공유 (하루 38B 토큰 분량의 cache miss 방어) | 청크를 tool-call boundary 기준으로 쪼개어 개별 요약 후 최종 merge call 수행 |
| **품질 검증 (Evals)** | 별도의 가드레일 검사 없이 모델의 출력 신뢰성에 의존 | `auditSummaryQuality`가 5대 heading 및 ID 누락, 토큰 겹침을 실시간 확인하여 자동 재시도 |
| **요약 프롬프트** | 9개 섹션 narrative형. 작업 drift를 차단하기 위해 next step에 최근 멈춤 시점의 verbatim(직접 인용)을 강제함 | Decisions, Open TODOs, Constraints, Pendingasks, Exact identifiers of 5대 구조화 계약 형태 |

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

- **Specialist Context Routing**: 코드 작성 노드에는 원시 API 페이로드나 장황한 비즈니스 문서 대신, 실패 테스트 케이스와 성공 기준만을 축약해 전달하여 환각과 토큰 소모를 방지한다.

- **[[OpenClaw]] Merge Summary Prompt 보존 규격**:
```text
MUST PRESERVE:
- Active tasks and their current status
- Batch operation progress (e.g., '5/17 items completed')
- Decisions made and their rationale
- TODOs, open questions, and constraints
- Exact identifiers (UUID, Hostname, IPs)
```

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

