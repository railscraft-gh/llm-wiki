---
type: concept
status: draft
core: false
tags:
- ai
- figma
- design
aliases:
- Claude Code Figma
sources:
- raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md
- raw/Claude Code + Figma = 💛.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
Claude Code와 Figma를 연동하여 디자인 생성, FigJam 브레인스토밍, 슬라이드 덱 구성 등을 자동화하는 에이전트 스킬 활용 가이드입니다.

## 핵심 요지
- **플러그인 기반 연동**: `claude mcp add figma`를 통해 Claude Code와 Figma를 MCP([[Model Context Protocol]])로 연동하여 디자인 파일을 직접 제어합니다.
- **주요 자동화 스킬**:
  - `figma-generate-design`: 디자인 요구사항을 바탕으로 프레임 생성.
  - `figma-use-figjam`: SWOT 분석, 플로우차트 등 브레인스토밍 보드 생성.
  - `figma-use-slides`: 분석 결과를 토대로 발표용 슬라이드 덱 자동 구성.
- **프로덕션 연결**: `figma-code-connect`를 통해 디자인 시스템 컴포넌트와 실제 코드 구현체를 동기화합니다.
- **양방향 통신 워크플로우**: Claude Code에서 코딩한 디자인을 비어있는 Figma 파일로 내보내고(Export), Figma에서 텍스트 색상, 여백 등을 수정한 뒤 변경 사항을 다시 Claude Code가 감지하여 실제 코드에 반영(Import)하는 양방향 수정이 가능합니다.

## 상세
[raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md](file:///Users/railscraft/Obsidian/raw/Claude%20Code%EB%A5%BC%20%EC%9C%84%ED%95%9C%20Figma%20%EC%8A%A4%ED%82%AC%20%EC%99%84%EB%B2%BD%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)에서는 디자인 시스템의 일관성을 위해 `apply-design-system` 및 `audit-design-system`과 같은 커뮤니티 제작 스킬 활용을 권장합니다. 이는 단순 이미지 생성을 넘어 기계 판독 가능한 디자인 시스템을 구축하는 기반이 됩니다.

추가적으로, MCP(`claude mcp add --transport http figma https://mcp.figma.com/mcp`)와 전용 플러그인(`/plugin install figma@claude-plugins-official`)을 설치하면, Figma 화면 상에서 직접 UI 요소를 수정한 내역이 브라우저 렌더링 코드에 실시간으로 반영되는 '양방향(Bi-directional) 워크플로우'가 활성화됩니다. 이를 통해 코드 수정과 시각적 디자인 미세조정 간의 컨텍스트 스위칭을 크게 줄일 수 있습니다.

## 관련 노트
- [[CLAUDE.md 가이드]]
- [[에이전틱_AI_엔지니어_로드맵]]

## 출처
- [raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md](file:///Users/railscraft/Obsidian/raw/Claude%20Code%EB%A5%BC%20%EC%9C%84%ED%95%9C%20Figma%20%EC%8A%A4%ED%82%AC%20%EC%99%84%EB%B2%BD%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [raw/Claude Code + Figma = 💛.md](file:///Users/railscraft/Obsidian/raw/Claude%20Code%20+%20Figma%20=%20%F0%9F%92%9B.md)
