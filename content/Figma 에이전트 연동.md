---
type: workflow
status: evergreen
core: false
tags:
  - tool
  - design-system
  - mcp
  - figma
aliases:
  - Figma 에이전트 스킬
  - figma-mcp
sources:
  - "raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md"
created: 2026-06-12
updated: 2026-06-12
---

# Figma 에이전트 연동 (Figma Agent Integration)

## 한 줄 정의
Model Context Protocol (MCP) 표준 프로토콜을 통해 Claude Code 등의 개발 에이전트를 Figma 디자인 툴 및 컴포넌트 라이브러리와 연동하여, 디자인 생성, 다이어그램 시각화, 슬라이드 덱 작성 및 디자인 시스템 정합성 감사(audit)를 자동화하는 워크플로우다.

## 핵심 요지
1. **MCP 프로토콜 기반 연동**: `claude mcp add figma` 및 `/plugin` 연동 절차를 통해 에이전트와 Figma 계정 간의 인증 및 보안 채널을 확보한다.
2. **다중 에셋 내보내기**: 에이전트는 단일 세션 내에서 생성한 지식 결과물을 FigJam 다이어그램, Figma 디자인 시안, Figma Slides 덱 등 다양한 피드백 양식으로 상호 전환해 내보낼 수 있다.
3. **디자인 시스템 정합성(Drift) 통제**: 커뮤니티 스킬을 결합해 Figma 내의 컴포넌트 오버라이드, 연결 해제된 토큰, 코드 구현 컴포넌트 간의 물리적 괴리를 정적으로 분석하고 동기화한다.

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

## 관련 노트
- `[[DESIGN.md 워크플로우]]`
  - Stitch 및 Claude Code를 사용해 DESIGN.md 명세를 Figma에 적용하는 핸드오프 워크플로우.
- `[[AI 시대 디자인 시스템]]`
  - 에이전트가 생성하는 디자인 결과물이 일치하도록 토큰과 가이드라인을 규정하는 설계 방식.
- `[[Model Context Protocol]]`
  - Figma MCP와 같은 외부 도구 연결 인터페이스의 기초 통신 프로토콜 표준.

