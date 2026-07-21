---
type: concept
status: draft
core: false
tags:
  - web-standards
  - ai-ui
  - design-systems
  - mcp
  - w3c
aliases:
  - AI 시대를 위한 웹 표준 플레이북
  - Web Standards Playbook for the AI Moment
sources:
  - raw/Designing with web standards. The playbook for this AI moment.md
created: 2026-07-21
updated: 2026-07-21
---

# AI 시대를 위한 웹 표준 플레이북 (Web Standards Playbook for the AI Moment)

## 한 줄 정의
1990년대 브라우저 전쟁 시기 제프리 젤드만(Jeffrey Zeldman)이 이끈 웹 표준 운동의 교훈을 거울삼아, 파편화된 현대 AI 에이전트 및 생성형 UI 생태계에 공통 디자인 패턴, 비즈니스 설득, 마크다운 시맨틱 마크업 표준을 도입하자는 설계 프레임워크.

## 핵심 요지
- **1999년 데자뷔와 브라우저 전쟁의 재현**: Netscape와 IE의 비표준 전용 태그 파편화처럼, 현대 AI 인터페이스(ChatGPT, Claude, Gemini) 역시 추론 과정, 출처, 권한 이양(Handoff) 방식을 제각각 파편화하여 유저에게 파괴적 학습 비용을 강가하고 있습니다.
- **웹 표준 운동의 3대 유산**: (1) 관심사의 의미론적 분리(구조·표현·동작 분리 -> AI 추론·출력·동작 분리), (2) 도덕이 아닌 비즈니스 가치(개발비 절감·소송 리스크 방지) 설득, (3) 톱다운 강제가 아닌 실무자 풀뿌리 연대.
- **새로운 시맨틱 마크업(Markdown) 레이어**: AI 에이전트가 읽는 텍스트 가이드(`AGENTS.md`, `SKILL.md`, `design.md`, `accessibility.md`)가 새로운 시맨틱 마크업 역할을 수행하므로, 여기에 접근성(Accessibility)과 보이스·용어 기준을 사전에 주입해야 합니다.
- **신흥 프로토콜 표준 수용**: 1년 만에 정착한 [Model Context Protocol(MCP)](file:///Users/railscraft/Obsidian/raw/Designing%20with%20web%20standards.%20The%20playbook%20for%20this%20AI%20moment.md#L161)을 비롯해 A2UI, Agent2Agent(A2A), W3C AI Agent Protocol 등 기존 국제 표준 기구와 연대하는 플레이북 적용.

## 상세
1998년 Zeldman의 A List Apart와 웹 표준 프로젝트(Web Standards Project)는 브라우저 독점 장벽을 허물었습니다. 2025년 기준 ChatGPT [WAU가 8억 명](file:///Users/railscraft/Obsidian/raw/Designing%20with%20web%20standards.%20The%20playbook%20for%20this%20AI%20moment.md#L144)을 돌파하고 기업 직원 [75%가 AI를 활용](file:///Users/railscraft/Obsidian/raw/Designing%20with%20web%20standards.%20The%20playbook%20for%20this%20AI%20moment.md#L145)함에 따라, 닐슨이 언급한 "60년 만의 3세대 UI 패러다임"이 열렸으나 인터페이스 표준의 부재로 심각한 비효율이 누적되고 있습니다.

2004년 Gruber와 Swartz가 고안한 [마크다운](file:///Users/railscraft/Obsidian/raw/Designing%20with%20web%20standards.%20The%20playbook%20for%20this%20AI%20moment.md#L215)은 에이전트 시대의 데파크토 표준 언어가 되었습니다. 사내 마크다운 콘트랙트(`design.md`, `accessibility.md`)에 색상 대비, 키보드 접근성, 대체 텍스트를 주입하지 않으면 에이전트는 무가공 텍스트 파편만 출력합니다.

따라서 [2025년 W3C의 Web and AI Interest Group](file:///Users/railscraft/Obsidian/raw/Designing%20with%20web%20standards.%20The%20playbook%20for%20this%20AI%20moment.md#L241)발족 흐름과 발맞추어, 개별 기업은 락인(lock-in)용 꼼수 대신 MCP 및 A2UI 표준을 수용하여 상호운용성(Interoperability)을 확보하는 것이 장기적 부채를 방지하는 지름길입니다.

## 예시
- **시맨틱 AI 마크다운 파일 구동**: 사내 저장소에 `AGENTS.md`와 `accessibility.md`를 비치해 AI 에이전트가 코드를 생성할 때 키보드 포커스 태그와 ARIA 라벨을 강제 삽입하도록 제약.
- **A2UI 및 MCP 적용**: 선언형 UI 프로토콜 A2UI와 MCP 도구 서버를 도입하여 AI 비서가 특정 렌더링 프레임워크에 묶이지 않고 교체 가능하도록 설계.

## 충돌
- **벤더 독점 장벽과 락인 시도**: 각 AI 플랫폼이 비표준 렌더링 제스처나 독점 플러그인 생태계로 고객을 고립시키려 하지만, 웹 역사에서 증명되었듯 표준 상호운용성 확립 시 부채로 전락합니다.
- **접근성(Accessibility)의 사후 덧대기(Bolt-on) 시도**: 생성형 UI를 렌더링한 후 접근성을 검사하려 하면 코드가 파탄 나므로 에이전트에 마크다운 규약 형태로 사전에 주입(feeding up front)해야 합니다.

## 관련 노트
- [[Model Context Protocol]]
- [[AI 시대의 피그마 재정의]]
- [[완전히 기계 읽기 가능한 디자인 시스템]]
- [[2026년 경험 디자인 트렌드]]

