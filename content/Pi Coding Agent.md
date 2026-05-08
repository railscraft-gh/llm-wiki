---
type: tool
status: needs-review
core: false
tags:
  - llm
  - agent
  - ai-coding
aliases:
  - Pi
  - pi coding agent
sources:
  - raw/pi-coding-agent-overview.md
  - https://pi.dev/
  - https://pi.dev/docs/latest
  - https://pi.dev/docs/latest/quickstart
  - https://pi.dev/docs/latest/usage
  - https://pi.dev/docs/latest/providers
  - https://pi.dev/docs/latest/packages
created: 2026-05-08
updated: 2026-05-08
---

# Pi Coding Agent

## 한 줄 정의

Pi Coding Agent는 작은 core를 유지하고 extension, skill, prompt template, theme, package로 workflow를 조립하게 하는 terminal coding harness다.

## 핵심 요지

- Pi는 "기능이 많은 완제품"보다 사용자가 workflow에 맞게 바꾸는 하네스(harness)를 지향한다.
- interactive, print/JSON, RPC, SDK 흐름을 제공해 터미널 사용과 외부 시스템 통합을 함께 겨냥한다.
- Plan mode, subagent, MCP, permission popup을 기본 내장하지 않고 extension, package, tmux, container 같은 외부/확장 레이어로 넘긴다.
- 설치 패키지명, provider 목록, subscription login 범위는 빠르게 바뀌므로 실사용 전 공식 docs를 확인한다.

## 상세

Pi 공식 문서는 Pi를 TypeScript extension, skill, prompt template, theme, Pi package로 확장하는 minimal terminal coding harness로 설명한다. 기본 사용은 프로젝트 디렉터리에서 `pi`를 실행하고, `/login`으로 subscription provider를 인증하거나 `ANTHROPIC_API_KEY` 같은 환경 변수를 넣는 방식이다. 2026-05-08 확인 기준 공식 quickstart의 npm 설치 패키지는 `@mariozechner/pi-coding-agent`다. 출처: https://pi.dev/docs/latest, https://pi.dev/docs/latest/quickstart

[[Claude.md 운영 원칙]]과 연결되는 부분은 context file이다. Pi는 시작 시 전역 `~/.pi/agent/AGENTS.md`, 현재 디렉터리와 상위 디렉터리의 `AGENTS.md` 또는 `CLAUDE.md`를 읽어 프로젝트 규칙을 주입한다. clean run이 필요하면 `--no-context-files` 또는 `-nc`로 끌 수 있다. 출처: `raw/pi-coding-agent-overview.md`, https://pi.dev/docs/latest/usage

[[Plan Mode 기반 AI 작업]]과 [[병렬 에이전트 세션 운영]]에서는 OpenCode와 반대 설계가 드러난다. Pi는 built-in plan mode, subagent, background bash를 넣지 않고, 파일에 계획을 쓰거나 extension/package로 구현하거나 tmux를 쓰라고 권한다. 이 선택은 workflow를 덜 제공한다는 단점이 있지만, 팀이 원하는 권한 모델과 UI를 직접 만들 수 있다는 장점이 있다. 출처: https://pi.dev/docs/latest/usage

## 예시

- read-only 리뷰: `pi --tools read,grep,find,ls -p "Review this code"`처럼 쓰기 도구 없이 검토만 시킨다.
- 자동화 통합: `pi --mode json` 또는 `pi --mode rpc`로 이벤트 스트림이나 stdin/stdout JSONL 프로토콜에 붙인다.
- 확장 배포: `pi install npm:...` 또는 git URL로 extension, skill, prompt, theme bundle을 설치한다. 단, Pi package는 시스템 접근 권한으로 실행될 수 있으므로 서드파티 패키지는 소스 검토 후 설치한다.

## 충돌

- 2026-05-08 확인: raw 문서는 npm 설치 패키지와 내부 패키지를 `@earendil-works/*` 네임스페이스로 적지만, 공식 quickstart는 `@mariozechner/pi-coding-agent` 설치를 안내한다. 현재 노트의 설치 관련 문장은 공식 문서 기준으로 기록한다. 출처: `raw/pi-coding-agent-overview.md`, https://pi.dev/docs/latest/quickstart
- 2026-05-08 확인: raw 문서는 "20개 이상의 provider"를 언급하지만, 공식 홈은 "15+ providers"처럼 더 보수적으로 표현한다. provider 수는 release마다 변하므로 숫자 자체보다 subscription/API key 지원 방식과 실사용 전 공식 providers 문서 확인을 우선한다. 출처: `raw/pi-coding-agent-overview.md`, https://pi.dev/, https://pi.dev/docs/latest/providers

## 관련 노트

- [[OpenCode]]
- [[Claude.md 운영 원칙]]
- [[Plan Mode 기반 AI 작업]]
- [[병렬 에이전트 세션 운영]]
- [[Claude Code 권한 설계]]
- [[Agent Native Infrastructure]]

