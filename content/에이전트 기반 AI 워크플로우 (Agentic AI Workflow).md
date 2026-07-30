---
type: concept
status: draft
core: false
tags:
- llm
- agentic
aliases:
- 에이전트 기반 AI 워크플로우
- Agentic AI Workflow
- 에이전틱 워크플로우
- 에이전트-기반-AI-워크플로우-(Agentic-AI-Workflow)
sources:
- raw/The 5-Minute Guide to Agentic AI Workflow.md
created: 2026-07-11
updated: 2026-07-11
---
# 에이전트 기반 AI 워크플로우 (Agentic AI Workflow)

## 한 줄 정의
사용자의 단발성 질문에 수동적으로 답변하는 단순 챗봇 수준을 넘어, 주어진 상위 목표에 대해 추론 엔진([[LLM]])이 상태 정보와 제공된 도구들을 활용해 직접 계획을 수립하고 수행 단계를 순환 제어하는 자율형 인공지능 동작 흐름이다.

## 핵심 요지
1. **행동하는 주체(Doer)**: 일종의 지식 검색 창구에 그치던 챗봇과 달리, 에이전트는 목표 달성을 위한 구체적인 절차를 스스로 판단하고 필요한 도구를 선택해 실행에 옮긴다.
2. **에이전트의 3대 구성 요소**:
   - **[[LLM]] Engine (뇌)**: 최종 답안을 즉시 만드는 것이 아닌, 문제 해결을 위해 스스로 소리 내어 생각하도록 유도받는 추론 엔진(Reasoning Engine)이다.
   - **State & Memory (컨텍스트)**: 에이전트가 이전에 취한 행동, 시스템의 반응, 에러 내역을 보관하여 무한 루프나 동일한 실패의 반복을 방지하는 상태 추적기(State Tracker)다.
   - **Tools (손)**: API 호출, 데이터베이스 연결, 웹 스크래퍼 등 모델이 물리적으로 시스템에 개입할 수 있게 정의된 인터페이스 함수다.
3. **ReAct 패턴**: 추론(Reasoning)과 행동(Acting)을 Thought-Action-Observation의 루프로 반복하며, 비선형적인 다중 작업 제어를 위해 상태 머신 기반의 그래프 아키텍처(LangGraph 등)로 정교화된다.

## 상세
에이전트 기반 워크플로우를 실무에 도입할 때는 시스템 폭주 및 비용 예방을 위한 강력한 가드레일이 수반되어야 한다.
- **반복 횟수 강제 제한 (Hard Limits)**: 에이전트의 자율적 탐색 과정에서 무한 루프가 돌거나 API 비용이 급증하지 않도록 최대 반복 횟수(예: 5~6회)를 코드로 엄격히 강제한다.
- **엄격한 임계값 설정**: 검색 및 의미 비교 등의 영역에서 유사도 임계값을 촘촘하게 설정하여, 에이전트가 엉뚱한 데이터를 가지고 잘못된 추론 및 환각(Hallucination)에 빠지는 것을 차단한다.
- **인간 참여형 루프 (Human-in-the-Loop)**: 프로덕션 배포나 데이터베이스 스키마 마이그레이션 등 리스크가 큰 중요 체크포인트에서는 인간 관리자의 명시적 승인이 있을 때까지 동작 그래프를 일시 정지하도록 설계한다.

## 예시
LangChain 또는 LangGraph를 사용해 시스템의 반응 속도를 예측 및 점검하는 자율 에이전트 구현 예시:

```python
import os
from langchain_core.tools import tool
from langchain.agents import create_agent
from langchain_openai import ChatOpenAI

# 1. 에이전트가 사용할 도구 정의
@tool
def calculate_system_latency(requests_per_second: int) -> str:
    """Calculates projected server latency based on active traffic load."""
    if requests_per_second > 5000:
        return "Critical Alert: Projected latency exceeds 800ms. Optimization required."
    return "System stable: Projected latency is under 45ms."

# 2. 추론 엔진 및 에이전트 구성
model = ChatOpenAI(model="gpt-4o", temperature=0)
tools = [calculate_system_latency]
agent_executor = create_agent(model, tools)

# 3. 비정형 텍스트 목표 요청 및 ReAct 실행
response = agent_executor.invoke({
    "messages": [("user", "Our traffic just spiked to 6,200 requests/sec. Check our latency and tell me if we need to panic.")]
})
print(response["messages"][-1].content)
```

## 충돌
- **결정론적 고정 파이프라인 지향론**: 추론 및 도구 선택 과정 전체를 [[LLM]]에 전적으로 위임하면 동작의 예측 불가능성과 디버깅의 어려움이 따르므로, 기존처럼 `if/else`로 고정 설계된 선형 파이프라인을 구축해야 통제하기 쉽다는 주장.
- **자율 에이전틱 아키텍처 지향론**: 모든 에러 상황과 예외 시나리오에 대처하는 복잡한 하드코딩은 유지보수가 거의 불가능하므로, 에이전트에게 동적 복구와 자율 도구 호출을 맡기고 인간이 상태 그래프의 상위 엣지(Edge) 제약이나 제한선(Decision Boundary)만 안전하게 규정해 주는 편이 장기적으로 훨씬 유연하다는 주장.

## 관련 노트
- [[Agentic 패턴 진화]]
- [[Andrew Ng 4 에이전틱 디자인 패턴]]
- [[Loop와 Routines]]

## 출처
- `raw/The 5-Minute Guide to Agentic AI Workflow.md`
