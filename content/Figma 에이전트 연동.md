---
aliases:
- Figma 에이전트 스킬
- figma-mcp
- Figma-에이전트-연동
core: false
created: 2026-06-12
sources:
- raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md
- raw/테일윈드의 고군분투는 무너지는 사상누각의 징조다.md
- raw/AI가 내 글쓰기 커리어를 죽였다. AI 만세.md
- raw/AI 네이티브 세컨드 브레인을 구축하는 방법 (2026년 방식).md
- raw/AI는 개발자를 대체하는 것이 아니라 더 심각한 일을 하고 있다.md
- raw/모든 AI 엔지니어가 알아야 할 10가지 LangChain 및 LangGraph 개념.md
- raw/옵시디언 마스터하기 - 노트를 세컨드 브레인으로 만드는 완벽 가이드.md
- raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md
- raw/디지털 제품 제작은 잊으세요. 대신 이것에 집중하세요.md
- raw/AI Agents. Complete Course.md
- raw/How to Do Hard Things When You Have Zero Motivation.md
- raw/Anthropic이 Opus 4.8에 대해 말하지 않은 것 - 하네스를 흡수하는 Anthropic.md
- raw/좋은 삶을 만드는 것에 대한 지루한 진실.md
- raw/2026년 AI 보조 코딩은 하나의 기술이다. 실제로 이 기술을 마스터하는 방법.md
- raw/10 Things Every Investor Should Know (but most learn too late).md
- raw/내가 Obsidian을 정리하는 방법 - 다니엘 프린디.md
- raw/Claude Code를 밑바닥부터 직접 구현해 보았다.md
- raw/Claude Code 프로젝트를 위한 MEMORY.md.md
- raw/마이크로서비스 대신 모듈러 모놀리스 — AI 에이전트가 코드를 읽기 시작했을 때 바뀐 것들.md
- raw/40억 달러 대기업이 깨뜨린 오픈소스와 개발자 협박의 역풍.md
- raw/The S&P 500 Illusion. Why Your “Diversified” Index Is Really a Bet on 10 Stocks.md
- raw/Your Wandering Mind Is Not the Enemy of Focus.md
- raw/BofA’s May Survey Says Investors Are Back in Stocks. The 30-Year Is the Risk..md
- raw/내 주의 집중 시간을 되돌려준 11가지 사소한 생활 습관의 변화.md
- raw/LLM에게 옵시디언 볼트 열쇠를 주면 일어나는 일.md
- raw/2026년을 위한 웹 디자인 및 빌드 워크플로우.md
- raw/These 3 ETFs Created More Millionaires Than Any Stock.md
- raw/60일간 11번의 기술 인터뷰를 치르며 깨달은 아무도 말해주지 않는 패턴.md
- raw/Run a Useful Local LLM in 30 Minutes (Coding, RAG, Voice).md
- raw/만약 단 5편의 AI 논문만 읽어야 한다면 바로 이것입니다.md
- raw/AI 코딩 에이전트와 함께하는 명세 기반 개발 결정판 가이드.md
- raw/Skills Alone Won’t Save You in the AI Economy.md
- raw/RAG 시스템 초보자부터 전문가까지의 완전 가이드 (2026년 에디션).md
status: evergreen
tags:
- tool
- design-system
- mcp
- figma
type: workflow
updated: 2026-07-10
---
# Figma 에이전트 연동 (Figma Agent Integration)

## 한 줄 정의
[[Model Context Protocol]] (MCP) 표준 프로토콜을 통해 Claude Code 등의 개발 에이전트를 Figma 디자인 툴 및 컴포넌트 라이브러리와 연동하여, 디자인 생성, 다이어그램 시각화, 슬라이드 덱 작성 및 디자인 시스템 정합성 감사(audit)를 자동화하는 워크플로우다.

## 핵심 요지
1. **MCP 프로토콜 기반 연동**: `claude mcp add figma` 및 `/plugin` 연동 절차를 통해 에이전트와 Figma 계정 간의 인증 및 보안 채널을 확보한다.
2. **다중 에셋 내보내기**: 에이전트는 단일 세션 내에서 생성한 지식 결과물을 FigJam 다이어그램, Figma 디자인 시안, Figma Slides 덱 등 다양한 피드백 양식으로 상호 전환해 내보낼 수 있다.
3. **디자인 시스템 정합성(Drift) 통제**: 커뮤니티 스킬을 결합해 Figma 내의 컴포넌트 오버라이드, 연결 해제된 토큰, 코드 구현 컴포넌트 간의 물리적 괴리를 정적으로 분석하고 동기화한다.
- Claude Code에서 Figma로 실제 레이아웃을 생성할 때 `figma-generate-design` 스킬을 사용하여 디자인을 추출하며, `[빌드할 내용 설명] figma.com/design/new?node-id-%` 프롬프트 양식을 활용한다. (출처: raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md)
- `figma-generate-diagram` 스킬을 사용하면 `show a pipeline diagram for food retailer`와 같이 코드베이스와 명세를 입력받아 FigJam 내에 편집 가능한 다이어그램으로 즉각 변환하여 협업 비용을 최소화한다. (출처: raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md)

## 상세

### 1. 연동 및 셋업 절차
- **MCP 설치**: 터미널에서 다음 명령어를 실행하여 Figma MCP 서버를 연동한다.
  ```bash
  claude mcp add figma
  ```
- **인증 및 연동**: 에이전트 세션 내에서 `/plugin` 명령어를 실행해 Figma 계정 연결을 허용하고, Figma Plugin 상태(Enabled)와 Figma MCP 연결 및 인증(Connected & Authenticated)을 확인한다.

### 2. Figma 네이티브 스킬 6종
1. **`figma-use`**: Figma 파일의 읽기/쓰기를 지원하는 가장 기본적인 스킬이다. 파일 내 디자인 구성 정보 획득, 컴포넌트 속성 참조에 호출된다.
2. **`figma-generate-design`**: 빈 Figma 파일 링크와 구현 사양 프롬프트를 토대로, 에이전트가 Figma 내에 실제 UI 디자인 프레임을 배치하고 구현한다.
3. **`figma-use-figjam`**: 브레인스토밍, SWOT 분석 등을 위해 FigJam 보드 내에 스티커 메모, 섹션, 커넥터, 표 등을 배치하고 구조화한다.
4. **`figma-generate-diagram`**: 코드베이스, 명세서, 사용자 요구사항을 FigJam 내에 플로우차트, 시퀀스, ERD, Gantt 차트 등의 편집 가능한 다이어그램으로 자동 시각화한다.
5. **`figma-use-slides`**: Figma Slides 덱 내의 섹션 구성, 테마 스타일링, 발표자 노트 추가 및 프레젠테이션 자동화를 수행한다.
6. **`figma-code-connect`**: Figma 컴포넌트와 실제 개발 소스코드의 구현 경로를 1대1 매핑하여 개발자 모드(Dev Mode)에서 코드로 바로 이동할 수 있게 연결한다 (Enterprise/Organization 플랜 필요).

### 3. 디자인 시스템 연계 커뮤니티 스킬 3종
- **`apply-design-system`**: 신규 UI 디자인 시안을 검토하고 기존에 구축된 사내 디자인 시스템 컴포넌트 및 토큰에 연결해 일관성을 부여한다.
- **`audit-design-system`**: 피그마 디자인과 실제 디자인 시스템 간의 괴리(Drift)를 감사한다. 누락된 공유 컴포넌트나 로컬 덮어쓰기(local overrides), 스타일/토큰에 연결되지 않은 상태를 점검한다.
- **`create-voice`**: AI 에이전트가 작성한 UI 컴포넌트용 마크다운 명세(.md)를 입력받아, Figma 디자인 파일에 주석 프레임(annotation frames)으로 시각적인 가이드를 자동 생성한다.

### Figma 스킬셋 명령어 및 파라미터 구성
- **figma-use-slides**: `[슬라이드 덱 생성 및 내보내기 지시] https://www.figma.com/slides/%link%` 형식으로 Figma Slides 덱을 빌드합니다.
- **figma-use-figjam**: `/figma-use-figjam [FigJam 생성 내용] [FigJam 링크]` 형식으로 SWOT 분석 및 브레인스토밍 다이어그램을 신속하게 렌더링합니다.

## 예시

- **FigJam 다이어그램 자동 생성 워크플로우**:
  ```bash
  /figma-use-figjam create a SWOT for OpenAI https://www.figma.com/board/new?node-id=%
  ```
  이 명령어 실행 시 에이전트가 FigJam 보드 템플릿을 식별하고 SWOT의 4대 영역(Strengths, Weaknesses, Opportunities, Threats) 스티커를 색상별로 자동 배치한다.

- **Figma 슬라이드 변환**:
  ```bash
  /figma-use-slides turn this information into slides and post it here https://www.figma.com/slides/MY_SLIDE_ID
  ```
  이전 단계에서 요약한 텍스트 분석 내용을 바탕으로 슬라이드 덱에 카드와 목차, 강조 도형을 생성한다.

- **실제 FigJam SWOT 분석 생성 예시**:
  ```bash
  /figma-use-figjam create a SWOT for OpenAI https://www.figma.com/board/new?node-id=%
  ```
- **실제 Figma Slides 변환 예시**:
  ```bash
  /figma-use-slides turn this information into slides and post it here https://www.figma.com/slides/%link%
  ```

## 충돌

## 관련 노트
- [[DESIGN.md 워크플로우]]
  - Stitch 및 Claude Code를 사용해 DESIGN.md 명세를 Figma에 적용하는 핸드오프 워크플로우.
- [[AI 시대 디자인 시스템]]
  - 에이전트가 생성하는 디자인 결과물이 일치하도록 토큰과 가이드라인을 규정하는 설계 방식.
- [[Model Context Protocol]]
  - Figma MCP와 같은 외부 도구 연결 인터페이스의 기초 통신 프로토콜 표준.

