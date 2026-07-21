---
type: concept
status: draft
core: false
tags:
  - spec-kit
  - sdd
  - ai-tools
  - github
aliases:
  - Spec-Kit
  - Spec Kit
  - specify-cli
sources:
  - raw/바이브 코딩의 종말-ko.md
created: 2026-07-21
updated: 2026-07-21
---

# Spec Kit

## 한 줄 정의
GitHub이 오픈소스로 출시한 사양 기반 개발(Spec Driven Development) 전용 CLI 툴킷 및 에이전트 프롬프트 템플릿 번들.

## 핵심 요지
- **GitHub 기반 오픈소스 프로젝트**: [9만 개 이상의 스타와 8천 개 이상의 포크](file:///Users/railscraft/Obsidian/raw/%EB%B0%94%EC%9D%B4%EB%B8%8C%20%EC%BD%94%EB%94%A9%EC%9D%98%20%EC%A2%85%EB%A7%90-ko.md#L7)를 기록하며 에이전트 표준 툴킷으로 자리잡았습니다.
- **`specify` CLI**: Python 3.11+ 기반 `uv` 패키지 관리자를 통해 설치([v0.8.4](file:///Users/railscraft/Obsidian/raw/%EB%B0%94%EC%9D%B4%EB%B8%8C%20%EC%BD%94%EB%94%A9%EC%9D%98%20%EC%A2%85%EB%A7%90-ko.md#L36))할 수 있으며 프로젝트 구조에 `.specify/` 디렉토리(memory, scripts, specs, templates)를 생성합니다.
- **광범위한 에이전트 지원**: Claude Code, Copilot, Gemini CLI, Cursor, Codex CLI 등 [29개 이상](file:///Users/railscraft/Obsidian/raw/%EB%B0%94%EC%9D%B4%EB%B8%8C%20%EC%BD%94%EB%94%A9%EC%9D%98%20%EC%A2%85%EB%A7%90-ko.md#L134) 상용 에이전트 지원 및 [70개 이상](file:///Users/railscraft/Obsidian/raw/%EB%B0%94%EC%9D%B4%EB%B8%8C%20%EC%BD%94%EB%94%A9%EC%9D%98%20%EC%A2%85%EB%A7%90-ko.md#L147) 확장 플러그인 생태계를 갖추고 있습니다.

## 상세
Spec Kit은 에이전트의 섣부른 추측을 차단하기 위해 6대 기본 명령어(`/speckit.constitution`, `/speckit.specify`, `/speckit.plan`, `/speckit.tasks`, `/speckit.taskstoissues`, `/speckit.implement`)와 3대 품질 검증 명령어(`/speckit.clarify`, `/speckit.analyze`, `/speckit.checklist`)를 제공합니다.

## 관련 노트
- [[사양 기반 개발 (Spec Driven Development)]]
- [[Vibe Coding과 Agentic Engineering]]

