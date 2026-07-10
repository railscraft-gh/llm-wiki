---
aliases:
  - GJC
core: false
created: 2026-06-04
sources:
  - gajae-code_AI_코딩_하네스_분석
  - raw/frontend-design-skill.md
  - raw/Claude 900달러 컨설턴트를 대체하는 10가지 프롬프트-ko.md
  - raw/거의 모든 나쁜 결정을 멈추는 단 하나의 질문-ko.md
  - raw/AI가 당신처럼 글을 쓰게 만드는 가장 좋은 방법-ko.md
  - raw/2026년에 가장 많이 설치된 디자인 문서. 단 30줄짜리였다. Anthropic 엔지니어 두 명이 썼다. 디자이너들은 아직 읽지 않았다-ko.md
  - raw/2026년의 AI 에이전트 실전 가이드-ko.md
  - raw/gajae-code_AI_코딩_하네스_분석.md
  - raw/한 문장을 500달러짜리 온라인 코스로 바꾸는 멀티 에이전트 시스템 구축하기-ko.md
  - raw/UX는 죽지 않았다. 그저 화면에 대한 이야기를 멈췄을 뿐이다-ko.md
  - raw/AI 겨울이 시작됐다-ko.md
status: needs-review
tags:
  - llm
  - agent
  - ai-coding
  - harness-engineering
type: tool
updated: 2026-07-10
---

# Gajae-Code

## 한 줄 정의
Gajae-Code는 `deep-interview`, `ralplan`, `team`, `ultragoal` 같은 작은 공개 workflow surface와 파일 기반 state를 묶어 AI 코딩 하네스를 운영하는 터미널 에이전트다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)

## 핵심 요지
- 공개 workflow를 작게 유지하고, 실행 전에 명확화와 승인을 먼저 거치도록 설계했다. 현재 스냅샷 기준 기본 workflow는 4개, role agent도 4개로 고정되어 있다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- `.gjc/specs`, `.gjc/plans`, `.gjc/ultragoal`, `.gjc/state/team`처럼 상태를 파일로 남겨 중단 후 재개와 감사 가능성을 높인다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- model/provider abstraction, TUI, native layer, workflow definition을 분리해 "채팅 UI"가 아니라 운영 가능한 런타임으로 다룬다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- 이 저장소의 유용한 메시지는 기능 수가 아니라 질문-계획-실행-검증 루프를 강제하는 하네스 설계에 있다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- Gajae-Code는 Yeachan-Heo/gajae-code 저장소(클론 스냅샷 af8750e)에 기반한 Bun 런타임 최적화 에이전트임 [raw/gajae-code_AI_코딩_하네스_분석.md]

## 상세

원문은 Gajae-Code를 단순한 CLI가 아니라, 모델 호출·툴 실행·상태 관리·검증·TUI·tmux 오케스트레이션을 묶은 하네스로 읽는다. 이 관점에서 핵심은 프롬프트를 잘 쓰는 것이 아니라, 에이전트가 실수했을 때 다시 같은 실수를 반복하지 않게 하는 바깥 구조를 만드는 일이다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)

레이어를 나누면 구조가 더 선명해진다.

- CLI 진입점: 명령 등록, smoke test, Bun 버전 체크를 담당한다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- 세션/부트스트랩: settings, model, auth, tools, system prompt를 조립한다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- agent loop: tool call, context append, retry, telemetry를 처리한다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- 모델/프로바이더: OpenAI, Anthropic, Google, Bedrock 같은 provider를 abstraction으로 감싼다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- TUI/native layer: 터미널 경험과 고성능 텍스트 처리를 책임진다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- workflow/role 정의: `deep-interview`, `ralplan`, `team`, `ultragoal`과 `executor`, `architect`, `planner`, `critic`를 분리한다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)

사용법도 같은 방향으로 수렴한다.

1. 애매한 요청은 바로 실행하지 않고 `deep-interview`로 범위를 고정한다.
2. 계획이 필요하면 `ralplan`으로 합의를 만든다.
3. 병렬 작업이 정말 필요할 때만 `team`을 쓴다.
4. 여러 목표가 이어지면 `ultragoal`로 durable ledger를 남긴다.
5. 끝나면 테스트, 로그, 스크린샷, trace 같은 증거를 남긴다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)

### Gajae-Code 아키텍처 레이어 및 모듈

| 아키텍처 레이어 | 상세 모듈/파일 | 역할 및 기능 스펙 |
| --- | --- | --- |
| **CLI 진입점** | `packages/coding-agent/src/cli.ts` | `Bun` 버전 검증, HTTP/2 패치(`installH2Fetch()`), malloc-stack-logging 환경 변수 관리, stats worker 기반 smoke test |
| **세션/부트스트랩** | `packages/coding-agent/src/main.ts`, `src/sdk.ts` | settings, model, auth, tools, system prompt 조립 |
| **에이전트 런타임** | `packages/agent/src/agent-loop.ts`, `src/agent.ts` | turn loop, `coerceToolResult()`를 통한 malformed tool output 강제 복구 |
| **모델/프로바이더** | `packages/ai/src/stream.ts`, `src/model-manager.ts` | Google Vertex, Bedrock, Ollama, Tavily, Jina 등 다중 클라이언트 연동 및 env/OAuth/ADC 처리 |
| **TUI** | `packages/tui/src/tui.ts`, `src/terminal.ts` | differential rendering, overlay, ANSI/하이퍼링크/이미지 렌더링 |
| **네이티브 레이어** | `crates/pi-natives`, `crates/pi-shell` | PTY, AST 파싱, 토큰 카운팅 등 Rust 네이티브 모듈 연동 |
| **상태 관리** | `.gjc/specs/`, `.gjc/plans/`, `.gjc/ultragoal/` | specs, plans, goal ledger를 로컬 파일시스템에 append-only 영속화 |

- **이원화된 Retry 정책**: transient network/provider failure와 session logic failure를 구분한다.
  ```yaml
  retry:
    requestMaxRetries: 4
    streamMaxRetries: 100
    maxRetries: 3
    maxDelayMs: 300000
  ```
- **4대 역할 격리**: 에이전트의 읽기/수행 권한을 `executor` (구현), `architect` (읽기 전용 아키텍처 리뷰), `planner` (계획 수립), `critic` (계획 비판/검토)의 4개 역할로 제한적으로 쪼개어 context bleed와 침범을 통제한다.
- **Ultragoal 6대 완료 게이트**: complete checkpoint 전에 implementation verification, cleanup/refactor review, rerun verification, architect review, executor QA/red-team, artifact refs를 의무화한다.

## 예시
- `gjc deep-interview --quick "사용자 로그인 개선"`처럼 요구사항이 흐린 작업을 먼저 명확화한다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- `gjc ralplan --interactive "로그인 개선 작업"`처럼 승인 전 계획 합의를 먼저 만든다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- `gjc --tmux` 뒤에 `gjc team 3:executor "승인된 계획을 구현하고 검증해줘"`처럼 tmux worker를 붙인다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- `gjc --tmux --worktree <path>`처럼 worktree를 분리해 실험 비용을 줄인다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)

## 충돌
- 2026-06-04 확인: 기본 workflow 4개와 role agent 4개는 현재 저장소 스냅샷의 구현 선택이다. 다른 버전에서 그대로 유지된다고 가정하면 안 된다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)
- 2026-06-04 확인: 패키지 메타데이터 일부가 여전히 upstream `gajae-ai`를 참조한다. fork/rename 흔적이 남아 있으므로 실제 checkout 기준으로 확인해야 한다. (출처: `raw/gajae-code_AI_코딩_하네스_분석.md`)

## 관련 노트
- [[Agent Harness]]
- [[Harness Engineering]]
- [[Claude.md 운영 원칙]]
- [[병렬 에이전트 세션 운영]]
- [[OpenCode]]
- [[OpenAgent Team Mode]]

