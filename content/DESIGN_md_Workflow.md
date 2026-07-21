---
type: concept
status: draft
core: false
tags:
- design-system
- ai-agent
- workflow
- ux-ui
aliases:
- DESIGN.md
sources:
- raw/DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
`DESIGN.md`는 디자인 시스템 명세(색상, 서체, 컴포넌트 등)를 마크다운 파일로 관리하여, AI 에이전트(Stitch, Claude Code 등)가 일관된 UI를 구현하도록 돕는 차세대 디자인-코드 핸드오프 워크플로우입니다.

## 핵심 요지
- **단일 진실 공급원(Single Source of Truth):** 디자인 규격이 마크다운 파일에 기록되어 디자이너, 개발자, AI 모두가 동일한 기준을 공유합니다.
- **AI 최적화:** 복잡한 피그마 토큰이나 JSON 대신 기계가 읽기 쉬운 구조화된 마크다운을 사용하여, AI 도구가 브랜드를 명확히 인지하고 작업합니다.
- **자동화된 일관성:** 디자인 시스템 변경 시 `DESIGN.md`만 수정하면 연결된 AI 도구들이 이를 참조해 화면을 갱신하므로 반복적인 스타일 수정 시간을 절감합니다.
- **이식성:** 특정 도구에 종속되지 않는 오픈 규격으로, 향후 등장할 모든 AI 디자인 도구와 호환됩니다.

## 상세
`DESIGN.md` 기반 워크플로우는 기존의 번거로운 핸드오프 절차를 제거합니다. 디자이너는 Stitch 같은 도구로 시안을 만들고 기록된 마크다운을 코드 프로젝트 루트에 배치합니다. Claude Code와 같은 개발 에이전트는 이를 읽어 브랜드 일관성을 지키며 화면을 구현합니다. 이는 '디자인 시스템'이 복잡한 툴 없이 마크다운 한 장으로 관리되는 '경량화된 체계'로 발전했음을 보여줍니다.

## 관련 노트
- [[Harness Engineering]]
- [[AI_Second_Brain]]

