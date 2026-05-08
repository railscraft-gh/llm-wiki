---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - workflow
aliases:
  - AI-native user
  - AI 네이티브 개발자
sources:
  - raw/안드레_카파시_인터뷰_정리.md
  - raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
  - raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
  - raw/보리스_클로드코드_실무_사용법.md
  - raw/Claude-Code-실무활용법-보리스-관점-정리.md
created: 2026-05-06
updated: 2026-05-06
---

# AI 네이티브 사용자

## 한 줄 정의

AI 네이티브 사용자는 같은 LLM 도구를 쓰더라도 context, command, hook, MCP, 검증 루프를 조합해 도구의 최대치를 끌어내는 사람이다.

## 핵심 요지

- 격차는 도구 접근성보다 도구를 workflow에 통합하는 능력에서 생긴다.
- AI 네이티브 사용자는 긴 프롬프트를 반복하지 않고 slash command, skill, MCP, hook으로 흐름을 고정한다.
- 채용과 평가도 손코딩보다 에이전트와 협업해 큰 시스템을 안전하게 만드는 능력을 봐야 한다.

## 상세

카파시 자료는 같은 ChatGPT나 Claude Code를 써도 사용법에 따라 결과가 크게 갈린다고 설명한다. 예전의 Vim 고수와 메모장 사용자, VS Code 확장과 단축키를 쓰는 사람의 차이가 이제 agent 도구에서도 반복된다는 관점이다. 출처: `raw/안드레_카파시_인터뷰_정리.md`, `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md`

보리스 자료의 실무 세팅은 AI 네이티브 사용자의 구체 예다. [[Claude.md 운영 원칙]]으로 프로젝트 규칙을 고정하고, [[AI 코딩 에이전트 검증 전략]]으로 결과를 확인하며, 반복 업무는 slash command로 줄이고, 외부 도구는 [[Claude Code 오케스트레이션]]으로 연결한다.

## 예시

- `/test` command로 테스트 실행과 실패 원인 요약을 반복한다.
- MCP로 GitHub, Sentry, Obsidian을 연결한다.
- hook으로 build/test/lint를 자동 실행한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Vibe Coding과 Agentic Engineering]]
- [[Claude Code 오케스트레이션]]
- [[병렬 에이전트 세션 운영]]
- [[Claude.md 운영 원칙]]

