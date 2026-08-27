---
type: concept
status: draft
core: false
tags:
- design
- automation
- system
aliases:
- Figma Automation
sources:
- raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
Figma [[디자인 시스템]]과 [[Claude Code]]를 연동하여 코드 컴포넌트와 디자인 컴포넌트 간의 일관성을 유지하고, 시각적 검토 및 구현 자동화를 구현하는 기술입니다.

## 핵심 요지
- **기계 가독성(Machine-Readable) 디자인**: [[디자인 시스템]]을 단순 시각 자료가 아닌, AI 에이전트가 해석 가능한 데이터 구조로 관리해야 합니다.
- **자동 감사(Audit)**: `audit-design-system` 스킬을 통해 [[디자인 시스템]]과 실제 구현 사이의 괴리(Drift)를 지속적으로 감지합니다.
- **연속적 동기화**: `figma-code-connect`를 통해 디자인 변경이 코드의 구현부로 즉각 반영될 수 있도록 설계합니다.

## 상세
[raw/[[Claude Code]]를 위한 Figma 스킬 완벽 가이드.md](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20Code%EB%A5%BC%20%EC%9C%84%ED%95%9C%20Figma%20%EC%8A%A4%ED%82%AC%20%EC%99%84%EB%B2%BD%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)는 Figma와 [[Claude Code]] 연동의 핵심이 '단순 이미지 추출'이 아니라 '시스템 동기화'에 있음을 강조합니다. 특히 `create-voice` 스킬처럼 AI가 마크다운 명세를 기반으로 Figma 주석 프레임을 역렌더링하는 방식은 2026년 에이전틱 디자인 조직의 표준 [[워크플로]]우로 자리 잡고 있습니다.

## 실천 로드맵
1. **기반 구축**: Figma 플러그인 설치 및 MCP 연동.
2. **동기화**: `apply-design-system`을 사용하여 [[디자인 시스템]] 컴포넌트와 코드 명세 매핑.
3. **지속적 감시**: `audit-design-system`으로 정기적인 디자인 정렬 상태 점검.

## 관련 노트
- [[Claude_Code_Figma_활용_가이드]]
- [[하네스_엔지니어링_실전_가이드]]

## 출처
- [raw/[[Claude Code]]를 위한 Figma 스킬 완벽 가이드.md](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20Code%EB%A5%BC%20%EC%9C%84%ED%95%9C%20Figma%20%EC%8A%A4%ED%82%AC%20%EC%99%84%EB%B2%BD%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
