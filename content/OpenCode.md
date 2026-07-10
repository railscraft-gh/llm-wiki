---
aliases:
  - OpenCode CLI
core: false
created: 2026-05-08
sources:
  - opencode-masterclass-summary
  - 'https://opencode.ai/docs/agents/'
  - 'https://opencode.ai/docs/rules/'
  - 'https://opencode.ai/docs/skills/'
  - 'https://opencode.ai/docs/models/'
  - 'https://opencode.ai/docs/config/'
  - raw/pi-coding-agent-overview.md
  - raw/opencode-masterclass-summary.md
  - raw/Quartz-GitHub-Pages-Complete-Guide.md
  - raw/Infisical_SSH_헤드리스_인증_가이드.md
  - raw/Quartz-Deploy-Guide.md
status: needs-review
tags:
  - llm
  - agent
  - ai-coding
type: tool
updated: 2026-07-10
---

# OpenCode

## 한 줄 정의
OpenCode는 터미널에서 provider, model, agent, skill, MCP 설정을 조합해 코딩 작업을 수행하는 오픈소스 AI coding agent다.

## 핵심 요지
- OpenCode는 Claude Code류 터미널 agent workflow를 여러 LLM provider와 모델 선택 위에서 구현한다.
- Plan agent와 Build agent를 분리하면 [[Plan Mode 기반 AI 작업]]과 구현 권한을 도구 설정으로 나눌 수 있다.
- `AGENTS.md`, skill, subagent, MCP는 반복 지시와 외부 도구 연결을 repo 안에 고정하는 장치다.
- 모델, 무료 gateway, provider, keybinding, config schema는 빠르게 바뀌므로 실무 적용 전 공식 문서를 확인한다.
- OpenCode Zen 대시보드를 통해 BigPikko, HY3, Minimax 2.5, NemoTron3Super 등의 무료 모델 게이트웨이를 연결할 수 있으나 보안 주의가 필요하다.
- 세션 제어 및 모드 전환을 위해 Escape 키(중단/더블 클릭 시 완전 종료)와 Shift+Tab(Plan 모드와 Bold 모드 간 전환)을 지원한다.
- 에디터 내 `@` 입력을 통한 파일 검색 및 `!`/`!!`를 통한 터미널 명령어 연동 기능을 제공하여 실시간 개발 서버 제어가 가능하다.

## 상세

OpenCode 공식 문서는 built-in primary agent로 Build와 Plan을 설명한다. Build는 개발 작업을 위한 기본 agent이고, Plan은 기본적으로 file edit와 bash 실행이 `ask`로 제한되어 분석과 계획에 적합하다. Subagent는 특정 작업을 위임받는 보조 agent이며 `@` mention이나 primary agent의 자동 호출로 사용할 수 있다.

프로젝트 지시는 `AGENTS.md`에 둔다. OpenCode의 `/init`은 repo를 스캔해 build, lint, test command, 구조, convention, 운영상 주의점을 담은 `AGENTS.md`를 만들거나 갱신한다. Claude Code에서 넘어온 팀을 위해 프로젝트 `CLAUDE.md`도 fallback으로 읽을 수 있다.

Skill은 반복 가능한 지시 묶음이다. 공식 문서는 `.opencode/skills/<name>/SKILL.md`, `~/.config/opencode/skills/<name>/SKILL.md`뿐 아니라 `.agents/skills/<name>/SKILL.md`, `.claude/skills/<name>/SKILL.md`도 탐색 위치로 설명한다. 따라서 raw 영상의 `.agents/skills/` 방식은 호환 경로로 볼 수 있지만, 새 프로젝트에서는 `.opencode/` 구조와 함께 검토하는 편이 안전하다.
이 구조는 [[에이전트 확장 3계층]]으로 요약할 수 있다. OpenCode는 Skill로 절차를, MCP로 외부 접근을, built-in tool로 로컬 실행을 조합하는 쪽에 가깝다.

### 1. 세션 제어 및 CLI 명령어 활용
- **`/new`**: 대화 컨텍스트를 초기화하여 이전 대화의 토큰 소음을 완벽히 제거한 새 세션을 기동한다.
- **`/sessions`**: 이전 작업 이력 목록을 호출하고 특정 세션을 선택해 복구한다.
- **`/models`**: 현재 활성화된 LLM 모델을 전환한다.
- **`/variants`**: 추론 노력(reasoning effort)의 수준을 조절하여 난이도에 맞는 연산을 선택한다.
- **스킬 로드**: `skills.sh` 웹사이트에서 복사한 스킬을 `.agents/skills/` 폴더에 로드하여 에이전트 지시를 확장한다.
- **서브에이전트 모니터링**: 메인 에이전트가 작업을 백그라운드 서브에이전트에게 분할 위임한 상태에서 **Ctrl+X -> 아래 방향키** 단축키로 병렬 작업 현황을 실시간 파악한다.

## 예시

- 계획: Plan agent로 구현 파일, 질문, 테스트 전략을 먼저 뽑고 `.agents/plans/`나 문서 파일에 저장한다.
- 구현: Build agent나 subagent에 disjoint file scope를 주고 병렬로 작업하게 한다.
- 검증: Playwright MCP, `npm run lint`, `npm test`, `next build` 같은 실행 가능한 기준을 agent에게 맡긴다.
- 보안: 무료 모델이나 gateway를 쓸 때 민감한 repo, API key, 고객 데이터를 넣지 않는다.

### 2. Playwright MCP 서버 통합 및 자동 테스트
프로젝트 루트에 `opencode.json` 설정을 작성하여 Playwright MCP 서버를 연동하면, 에이전트가 직접 브라우저를 띄워 UI 기능을 검증하고 수정을 연쇄하는 자동화가 완성된다.
- **`/mcps`**: 연결된 MCP 서버의 상태 및 명세를 점검한다.
- **Space 바**: 특정 MCP 서버의 활성화/비활성화 상태를 실시간 토글한다.

## 충돌
- 2026-05-08 확인: raw 문서는 OpenCode skill 탐색 위치를 `.agents/skills/` 중심으로 설명하지만, 공식 문서는 `.opencode/skills/`, `~/.config/opencode/skills/`, `.claude/skills/`, `.agents/skills/`를 함께 지원한다고 설명한다. 현재 노트는 공식 문서 기준으로 기록한다.

## 관련 노트
- [[Plan Mode 기반 AI 작업]]
- [[병렬 에이전트 세션 운영]]
- [[Claude.md 운영 원칙]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Pi Coding Agent]]
- [[에이전트 확장 3계층]]
- [[Gajae-Code]]

