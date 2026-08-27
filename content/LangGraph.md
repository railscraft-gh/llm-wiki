---
type: tool
status: evergreen
core: true
tags:
  - agent
  - framework
aliases:
  - 랭그래프
sources:
  - raw/FORGET Loop Engineering. Graph Engineering is about THIS.md
created: 2026-07-30
updated: 2026-07-30
---

# LangGraph

## 한 줄 정의
LangGraph는 에이전틱(Agentic) AI 애플리케이션 개발을 위해 순환성(Cyclical) 제어 흐름과 강력한 전역 상태(State) 관리를 지원하는 업계 표준의 그래프 기반 조율 프레임워크다.

## 핵심 요지
* **그래프 기반 아키텍처**: 에이전트의 작동 흐름을 노드(Node, 실행 단위)와 에지(Edge, 제어 라우팅)로 규격화하여 상태 추적과 분기가 매우 유연하다.
* **복잡한 순환 제어**: 기존의 일방향 체인이나 단순 루프를 넘어, 에이전트가 검증과 피드백을 거치며 무한히 재시도하고 이터레이션할 수 있는 순환 구조를 안정적으로 보장한다.
* **인터랙티브 중단 및 지속성**: 인간 승인(Human-in-the-loop)을 위한 연산 일시 중단 및 체크포인트 영속성 저장 기능을 내장하여 대규모 상용 에이전트 배포에 적합하다.

## 상세
LangGraph가 등장하기 전 개발자들은 단순한 `while` 루프나 조건문 코드로 자율 에이전트를 빌드했다. 하지만 에이전트가 호출해야 할 도구가 늘어나고 오류 복구 시나리오가 얽히면서 상태 관리 코드가 걷잡을 수 없이 꼬여 시스템이 무너지는 병목을 겪었다.

LangGraph는 모든 에이전트 실행 상태를 전역 상태 딕셔너리로 추적하고, 노드가 리턴하는 값에 따라 상태가 자동 머지되며, 조건부 에지(`conditional_edge`)를 통해 확률적 분기를 코딩 수준에서 제어하도록 설계되었다. 이로써 에이전트의 런타임 제어권이 난해한 자연어 프롬프트가 아닌 엄격한 아키텍처적 위상(Topology) 안에서 작동한다.

## 예시
* **메이커-체커 [[워크플로]]우**:
  1. `Maker` 노드가 글 초안을 작성하여 상태의 `draft` 필드를 채운다.
  2. `Checker` 노드로 에지가 이동하여 품질을 평가하고 검증 점수를 `score`로 남긴다.
  3. 조건부 에지가 `score`를 확인하여 80점 미만이면 `Maker` 노드로 순환(Re-entry)시키고, 80점 이상이면 종료 노드로 방출한다.

## 관련 노트
* [[그래프 엔지니어링]]
* [[의도 기반 디자인]]
* [[검증 레이어]]

## 출처
- [FORGET Loop Engineering. Graph Engineering is about THIS.md](file:///Users/railscraft/[[Obsidian]]/raw/FORGET%20Loop%20Engineering.%20Graph%20Engineering%20is%20about%20THIS.md)
