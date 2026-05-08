---
type: workflow
status: draft
core: false
tags:
  - llm
  - agent
  - claude-code
  - orchestration
aliases:
  - Claude Code Orchestration
  - 에이전트 오케스트레이션
sources:
  - raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
  - raw/보리스_클로드코드_실무_사용법.md
  - raw/Claude-Code-실무활용법-보리스-관점-정리.md
created: 2026-05-06
updated: 2026-05-06
---

# Claude Code 오케스트레이션

## 한 줄 정의

Claude Code 오케스트레이션은 Claude Code를 단순 코딩 도구가 아니라 GitHub, Sentry, Slack, Figma, CLI, MCP 서버를 연결하는 업무 조율 도구로 쓰는 관점이다.

## 핵심 요지

- Claude Code의 가치는 코드 생성만이 아니라 여러 도구 사이의 작업 흐름을 연결할 때 커진다.
- 오케스트레이션에는 반드시 [[Claude Code 권한 설계]]가 따라야 한다.
- 반복되는 흐름은 slash command, hook, MCP 같은 작은 자동화로 고정한다.

## 상세

보리스 자료는 Claude Code를 다양한 workflow를 통제하는 오케스트레이터로 설명한다. 예를 들어 Sentry에서 최근 에러를 확인하고, 관련 로그로 원인을 추정하고, GitHub 이슈를 만들고, 수정 PR을 준비하는 흐름은 여러 도구를 넘나드는 업무다. 출처: `raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md`, `raw/Claude-Code-실무활용법-보리스-관점-정리.md`

이 관점은 [[Agent Native Infrastructure]]와 이어진다. 사람이 클릭해서 서비스 연결, 설정, 배포를 처리하는 대신 에이전트가 텍스트 지시와 CLI/API를 통해 실행할 수 있는 환경일수록 오케스트레이션이 쉬워진다.

## 예시

- 장애 대응: Sentry 에러 확인 -> 로그 분석 -> GitHub 이슈 생성 -> 수정 브랜치 작성 -> 테스트 실행
- 콘텐츠 운영: Obsidian 아이디어 DB 조회 -> 후보 주제 선정 -> 제목/훅/구성안 생성
- 개발 반복: `/test`, `/review`, `/deploy-check` 같은 slash command로 반복 프롬프트를 줄인다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Claude Code 권한 설계]]
- [[병렬 에이전트 세션 운영]]
- [[Agent Native Infrastructure]]

## 출처

- `raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md`
- `raw/보리스_클로드코드_실무_사용법.md`
- `raw/Claude-Code-실무활용법-보리스-관점-정리.md`
