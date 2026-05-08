---
type: workflow
status: draft
core: false
tags:
  - llm
  - agent
  - claude-code
aliases:
  - CLAUDE.md
  - Claude.md
  - AGENTS.md
sources:
  - raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
  - raw/보리스_클로드코드_실무_사용법.md
  - raw/Claude-Code-실무활용법-보리스-관점-정리.md
  - raw/AI로_만든_제품이_안_팔리는_이유.md
  - raw/opencode-masterclass-summary.md
  - raw/pi-coding-agent-overview.md
  - https://opencode.ai/docs/rules/
  - https://pi.dev/docs/latest/usage
created: 2026-05-06
updated: 2026-05-08
---

# Claude.md 운영 원칙

## 한 줄 정의

Claude.md는 Claude Code나 OpenCode 같은 coding agent에게 프로젝트의 구조, 금지 사항, 검증 기준을 알려 주는 AI용 온보딩 문서다.

## 핵심 요지

- Claude.md는 설정 파일이라기보다 새 팀원에게 주는 업무 매뉴얼에 가깝다.
- 가장 중요한 항목은 잘해야 할 일보다 "절대 하면 안 되는 일"이다.
- 너무 길면 context window를 낭비하고 실제 작업 중 참조성이 떨어진다.
- OpenCode에서는 같은 역할을 `AGENTS.md`가 맡으며, Claude Code 호환을 위해 `CLAUDE.md` fallback도 지원한다.

## 상세

보리스 자료에서는 Claude.md에 프로젝트 구조, 기술 스택, 코드 스타일, 자주 발생하는 실수, 금지 작업, 작업 전후 검증 방법을 담으라고 설명한다. 예를 들어 "마이그레이션 파일은 사용자 승인 없이 수정하지 않는다", "프로덕션 DB 관련 명령은 자동 실행하지 않는다", "새 기능 구현 전에는 테스트 전략을 먼저 설명한다" 같은 문장은 [[Claude Code 권한 설계]]와 직접 연결된다.

보리스가 자신의 Claude.md를 약 2,500 tokens 수준으로 유지한다고 언급한 점은 길이 기준으로 쓸 수 있다. 단, 이 숫자는 보편 규칙이 아니라 "핵심만 담는 편이 좋다"는 운영 감각으로 해석하는 편이 안전하다. 긴 참고 문서는 Claude.md에 모두 붙이지 말고 별도 문서, skill, command로 분리한다. 출처: `raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md`, `raw/보리스_클로드코드_실무_사용법.md`

UI 작업에서는 Claude.md에 모든 색상과 spacing을 넣기보다 [[DESIGN.md 운영 원칙]]처럼 디자인 전용 파일로 분리하는 편이 낫다. Claude.md는 "UI 변경 전 DESIGN.md를 읽는다", "임의 색상 token을 만들지 않는다" 같은 연결 규칙을 담고, 상세 token과 rationale은 DESIGN.md가 맡는다. 출처: `raw/AI로_만든_제품이_안_팔리는_이유.md`

[[OpenCode]] 공식 문서는 project root의 `AGENTS.md`를 custom instructions 파일로 설명한다. `/init`은 repo의 build, lint, test command, architecture, convention, operational gotcha를 요약해 `AGENTS.md`를 만들거나 갱신한다. 따라서 도구 이름은 달라도 원칙은 같다. agent memory file에는 "계속 참조해야 하는 운영 제약"만 넣고, 긴 배경 자료는 skill, docs, command로 분리한다. 출처: `raw/opencode-masterclass-summary.md`, https://opencode.ai/docs/rules/

[[Pi Coding Agent]]도 시작 시 `AGENTS.md` 또는 `CLAUDE.md`를 읽는다. 공식 문서 기준으로 전역 `~/.pi/agent/AGENTS.md`, 현재 작업 디렉터리와 상위 디렉터리의 context file을 로드하며, 깨끗한 실행이 필요할 때는 `--no-context-files` 또는 `-nc`로 끈다. 이는 agent memory file이 편의 기능이 아니라 실행 환경의 일부라는 점을 보여준다. 출처: `raw/pi-coding-agent-overview.md`, https://pi.dev/docs/latest/usage

## 예시

```markdown
## 금지 사항
- 사용자의 승인 없이 마이그레이션 파일을 수정하지 않는다.
- 프로덕션 DB 명령은 실행하지 않는다.

## 검증
- 변경 후 관련 테스트를 실행한다.
- UI 변경은 스크린샷으로 모바일/데스크톱을 확인한다.
```

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI 코딩 에이전트 검증 전략]]
- [[Claude Code 권한 설계]]
- [[Plan Mode 기반 AI 작업]]
- [[DESIGN.md 운영 원칙]]
- [[OpenCode]]
- [[Pi Coding Agent]]

