---
type: concept
status: draft
core: true
tags:
  - ai-engineering
  - claudecode
aliases:
  - CLAUDE.md vs DESIGN.md
sources:
  - raw/CLAUDE.md vs DESIGN.md. What to Put in Each for Claude Code.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
Claude Code 활용 시 프로젝트 운영 지침을 관리하는 `CLAUDE.md`와 디자인/사용자 경험의 단일 진실 공급원(Source of Truth)을 관리하는 `DESIGN.md`의 역할 분담 및 작성 가이드.

## 핵심 요지
`CLAUDE.md`는 에이전트의 동작 방식과 워크플로우를 제어하는 '운영 매뉴얼'이고, `DESIGN.md`는 디자인 토큰, 패턴, 원칙 등을 포함하는 '디자인 설계도'로 분리하여 관리해야 컨텍스트 낭비를 줄이고 AI 코딩의 일관성을 극대화할 수 있다.

## 상세
- **CLAUDE.md**: 프로젝트 개요, 실행 명령어, 아키텍처 경로, 코딩 구현 규칙, 검증 루프 등 에이전트 운영 지침 중심 [raw/CLAUDE.md vs DESIGN.md. What to Put in Each for Claude Code.md#L13](file:///Users/railscraft/Obsidian/raw/CLAUDE.md%20vs%20DESIGN.md.%20What%20to%20Put%20in%20Each%20for%20Claude%20Code.md#L13).
- **DESIGN.md**: 디자인 방향성, 비주얼 원칙, 디자인 토큰, 레이아웃/컴포넌트 패턴, 인터랙션 및 웹 접근성 지침 등 디자인 의사결정 중심 [raw/CLAUDE.md vs DESIGN.md. What to Put in Each for Claude Code.md#L90](file:///Users/railscraft/Obsidian/raw/CLAUDE.md%20vs%20DESIGN.md.%20What%20to%20Put%20in%20Each%20for%20Claude%20Code.md#L90).
- **파일 연동**: `CLAUDE.md`에서 `DESIGN.md`를 직접 임포트하기보다는, UI 관련 작업 시에만 참조하도록 '조건부 지침'을 설정하여 컨텍스트 효율 유지 [raw/CLAUDE.md vs DESIGN.md. What to Put in Each for Claude Code.md#L260](file:///Users/railscraft/Obsidian/raw/CLAUDE.md%20vs%20DESIGN.md.%20What%20to%20Put%20in%20Each%20for%20Claude%20Code.md#L260).

## 예시
`CLAUDE.md` 내 지침: "UI를 수정하는 모든 작업의 경우 구현에 앞서 `DESIGN.md`를 먼저 읽고 이를 단일 진실 공급원으로 삼아라."

## 충돌
`DESIGN.md`에 너무 긴 디자인 토큰 파일 전체를 붙여 넣으면 코드와 싱크가 어긋날 위험이 있으므로, 토큰 파일 경로를 참조하고 핵심 원칙 위주로 작성할 것 [raw/CLAUDE.md vs DESIGN.md. What to Put in Each for Claude Code.md#L155](file:///Users/railscraft/Obsidian/raw/CLAUDE.md%20vs%20DESIGN.md.%20What%20to%20Put%20in%20Each%20for%20Claude%20Code.md#L155).

## 관련 노트
- [[CLAUDE.md 가이드]]
- [[대시보드_디자인_가이드]]

