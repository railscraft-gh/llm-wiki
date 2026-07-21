---
type: concept
status: draft
core: false
tags:
  - design
  - llm
  - standards
aliases:
  - AI 웹 표준
  - 웹 표준 플레이북
sources:
  - "raw/Designing with web standards. The playbook for this AI moment.md"
created: 2026-07-18
updated: 2026-07-18
---

# AI 시대를 위한 웹 표준 플레이북 (Web Standards Playbook for the AI Moment)

## 한 줄 정의
1990년대 브라우저 전쟁 시기 제프리 젤드만이 주도한 웹 표준 운동의 역사적 교훈을 바탕으로, 오늘날 AI 인터페이스의 파편화와 사용자 락인(lock-in) 문제를 해결하기 위해 제시되는 공동 UI 표준 구축 전략이다.

## 핵심 요지
- **1999년의 데자뷔**: 현재 AI 벤더사들이 각자의 제스처, 기능, 규칙을 설계하여 파편화를 유도하는 상황은 과거 넷플스케이프와 마이크로소프트의 비표준 브라우저 전쟁과 흡사하다 [raw/Designing with web standards. The playbook for this AI moment.md#L141](file:///Users/railscraft/Obsidian/raw/Designing%20with%20web%20standards.%20The%20playbook%20for%20this%20AI%20moment.md#L141).
- **의미론적 분리(Semantic Separation)**: AI 모델의 추론 과정, 출력 결과, 실행 동작을 명확히 구분하여 레이어별로 제어하고 검증할 수 있어야 한다.
- **실리적 비즈니스 케이스**: 표준의 대중화는 도덕적 의무가 아니라 비용 절감 및 도달 범위 확장과 같은 경제적 실리에서 비롯되어야 한다.
- **새로운 시맨틱 마크업**: 에이전트의 지침서가 된 마크다운 파일(`AGENTS.md`, `design.md`, `accessibility.md` 등)이 기계와 인간이 소통하는 새로운 시맨틱 계약(contract) 역할을 한다.
- **개방형 프로토콜의 활용**: 이미 업계 표준으로 떠오른 [[Model Context Protocol]](MCP)을 포함하여 A2UI, Agent2Agent 등과 같은 개방형 규격을 도입해야 한다.

## 상세
과거 브라우저 전쟁 시절, 넷플스케이프의 Lou Montulli가 blink 태그를, 마이크로소프트가 marquee 태그를 독자적으로 도입하는 등 비표준 경쟁이 극에 달했다. 제프리 젤드만(Jeffrey Zeldman)이 설립한 웹 표준 프로젝트(Web Standards Project)는 업계 전체에 "동일한 페이지가 어떤 브라우저에서든 호환되어야 한다"는 공동의 신념을 전파했다. 

오늘날 ChatGPT, Claude, Gemini, Copilot 등 다양한 LLM 도구들 역시 각자의 파편화된 방식으로 출처 표기, 추론 공개, 권한 요청을 처리하고 있으며, 이는 사용자에게 불필요한 전환 비용과 학습 곡선을 유발한다.

### 1. 관심사와 레이어의 분리
웹 표준이 구조(HTML), 표현(CSS), 동작(JS)을 구분했듯, AI UI에서는 다음 요소들을 분리해야 한다.
- **추론 과정**: 모델이 생각을 정리하는 과정(CoT)
- **출력 결과**: 사용자에게 제공되는 결과 데이터
- **실행 동작**: 도구(tool) 호출 및 외부 API 실행

### 2. 마크다운 기반의 시맨틱 계약
현대 AI 에이전트는 자연어 기반 지침서에서 규칙을 읽는다. 2004년에 존 그루버와 아론 슈워츠가 개발한 마크다운 [raw/Designing with web standards. The playbook for this AI moment.md#L215](file:///Users/railscraft/Obsidian/raw/Designing%20with%20web%20standards.%20The%20playbook%20for%20this%20AI%20moment.md#L215)은 에이전틱 워크플로우의 새로운 인터페이스가 되었다.
- `design.md`: 모델이 따를 디자인 시스템 토큰과 규칙을 기술
- `accessibility.md`: 모델이 준수해야 할 필수 접근성 표준을 포함
- `content.md`: 브랜드 톤앤매너 및 가독성 수준을 정의

### 3. 활성화되고 있는 개방형 프로토콜
W3C 및 Linux Foundation 등에서 AI 인터페이스 표준화가 빠르게 논의되고 있다 [raw/Designing with web standards. The playbook for this AI moment.md#L241](file:///Users/railscraft/Obsidian/raw/Designing%20with%20web%20standards.%20The%20playbook%20for%20this%20AI%20moment.md#L241).
- **[[Model Context Protocol]] (MCP)**: 출시 1년 만에 업계 표준으로 자리 잡은 컨텍스트 전달 프로토콜 [raw/Designing with web standards. The playbook for this AI moment.md#L161](file:///Users/railscraft/Obsidian/raw/Designing%20with%20web%20standards.%20The%20playbook%20for%20this%20AI%20moment.md#L161)
- **A2UI**: 에이전트가 그릴 UI를 명세하는 선언형 프로토콜
- **Agent2Agent (A2A)**: 서로 다른 벤더사의 에이전트 간의 상호 검색 및 협업 프로토콜

## 예시
- **신뢰 수준의 시각화**: 불확실한 추론 결과를 확정적 사실처럼 시각화하지 않고, 출처(Citation)와 신뢰도(Confidence)를 사용자에게 명확히 보장하여 합의된 UI 패턴으로 보여주는 구조.
- **ChatGPT의 확산과 기업 채택**: ChatGPT는 2025년에 주간 활성 사용자 수 8억 명을 돌파했으며, 기업 설문 결과 직원의 75%가 AI 툴 덕분에 업무 효율이 향상되었다고 보고했다 [raw/Designing with web standards. The playbook for this AI moment.md#L145](file:///Users/railscraft/Obsidian/raw/Designing%20with%20web%20standards.%20The%20playbook%20for%20this%20AI%20moment.md#L145). 이러한 광범위한 침투 속에서 파편화된 인터페이스를 방치할 경우 대가가 복리로 가중된다.

## 충돌
- **벤더사 락인(Lock-in) vs 상호운용성(Interoperability)**: 벤더사들은 자사 플랫폼에 사용자를 가두기 위해 독자적인 UI 제스처와 프로토콜을 선호하지만, 이는 장기적으로 사용자 전환 비용을 증가시키고 웹의 개방성을 해친다. 1999년의 영토 전쟁처럼 단기적 해자(Moat)가 결국에는 장기적인 부채(Liability)로 전락하게 된다 [raw/Designing with web standards. The playbook for this AI moment.md#L173](file:///Users/railscraft/Obsidian/raw/Designing%20with%20web%20standards.%20The%20playbook%20for%20this%20AI%20moment.md#L173).

## 관련 노트
- [[AI 시대 디자인 시스템]]
- [[Model Context Protocol]]
- [[인간-AI 상호작용 설계 원칙 (Human-AI Interaction Design Principles)]]
- [[완전히 기계 읽기 가능한 디자인 시스템]]

