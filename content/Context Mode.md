---
type: tool
status: draft
core: false
tags:
  - ai-coding
  - context-window
  - mcp
  - sandbox
aliases: []
sources:
  - raw/context-mode-README-정리.md
created: 2026-05-09
updated: 2026-05-14
---

# Context Mode

## 한 줄 정의

AI 코딩 에이전트의 컨텍스트 윈도우를 최적화하는 MCP 서버. 도구 출력을 샌드박싱하여 컨텍스트 소비를 극적으로 줄인다.

## 핵심 요지

- 컨텍스트 절약: 315KB → 5.4KB(98% 감소) [GitHub](https://github.com/mksglu/context-mode)
- HN #1(570+ points), Microsoft/Google/Meta/Amazon/NVIDIA 등 다양한 기업에서 사용
- 4가지 문제 해결: Context Saving, Session Continuity, Think in Code, Output Compression
- 14개 플랫폼 지원: Claude Code, Gemini CLI, VS Code Copilot, Cursor, OpenCode 등

## 상세

### Context Saving

MCP 도구 호출 시 raw 데이터가 컨텍스트 윈도우를 채우는 문제를 해결한다. Playwright snapshot 56KB, GitHub issues 20개 59KB처럼 큰 출력을 샌드박스 도구가 컨텍스트 밖으로 격리한다. 결과만 컨텍스트로 반환한다.

### Session Continuity

컨텍스트 압축(compaction) 시 에이전트가 작업을 잊어버리는 문제를 SQLite + FTS5로 추적한다. 파일 편집, git 작업, 태스크, 에러, 사용자 결정을 모두 기록한다. BM25 검색으로 필요한 것만 조회해 compaction 후에도 정확히 이어서 작업한다. `--continue` 없으면 이전 세션 데이터를 즉시 삭제해 깨끗한 슬레이트를 유지한다.

### Think in Code

LLM을 데이터 프로세서가 아닌 코드 생성기로 취급한다. 50개 파일을 읽어 함수 수를 세는 대신 스크립트를 작성하고 `console.log()` 결과만 반환한다. `ctx_execute` 한 번으로 47회 `Read()` 대체 가능(700KB → 3.6KB). 14개 모든 플랫폼에서 필수 패러다임이다.

### Output Compression

필러 단어와 헤징을 제거한다. 패턴은 `[thing] [action] [reason]. [next step].` 형태다. 보안 경고나 되돌릴 수 없는 작업, 사용자 혼란 시에는 자동으로 확장한다. 65-75% 출력 토큰을 줄이면서 기술적 정확도는 유지한다.

### 주요 도구

**Sandbox 도구(6개)**: `ctx_execute`(단일 실행), `ctx_batch_execute`(배치 실행), `ctx_execute_file`(파일 실행), `ctx_index`(지식 베이스 인덱싱), `ctx_search`(BM25 검색), `ctx_fetch_and_index`(URL fetch 및 인덱싱)

**메타 도구(5개)**: `ctx_stats`(절약 통계), `ctx_doctor`(진단), `ctx_upgrade`(업그레이드), `ctx_purge`(지식 베이스 삭제), `ctx_insight`(90개 메트릭 분석 대시보드)

### 지원 플랫폼

14개 플랫폼을 지원하며 설치 복잡도에 따라 그룹화된다. Hook 가능 플랫폼은 자동 라우팅이 적용된다.

**완전 자동(플러그인 마켓플레이스)**: Claude Code - `/plugin marketplace add mksglu/context-mode`로 설치

**단일 설정 파일**: Gemini CLI, VS Code Copilot, JetBrains Copilot

**대체 메커니즘 필요**: Cursor(SessionStart 훅 없음 → `.cursor/rules/context-mode.mdc` 파일로 대체), OpenCode/KiloCode(SessionStart 없음 → `system.transform`으로 대체)

**네이티브 게이트웨이 플러그인**: OpenClaw/Pi Agent - 별도 MCP 서버 없이 게이트웨이 런타임에 직접 등록, 라우팅 완전 자동

**기타**: Codex CLI, Windsurf, Cline, Roo Code, Augment Code, Amazon Q Developer CLI, Antigravity

### OpenClaw 어댑터 특징

OpenClaw에서는 `api.on()`(lifecycle/tool 훅)과 `api.registerHook()`(command 훅)을 구분해야 한다. 잘못 사용하면 조용히 실패한다. 예를 들어 `api.registerHook("before_tool_call", ...)`는 등록되지만 절대 실행되지 않는다. async register도 작동하지 않으므로 initPromise 패턴을 사용해야 한다. 최소 버전은 >2026.1.29(PR #9761 필요)다.

### Cursor 제한

Cursor는 `additional_context`가 모델에 표시되지 않는 제한이 있다. 이로 인해 일부 라우팅 지시사항이 모델에게 전달되지 않을 수 있다.

## 예시

**파일 분석 스크립트 실행**: `ctx_execute("javascript", "const fs = require('fs'); const files = fs.readdirSync('.'); console.log(files.length);")`

**URL fetch 후 검색**: `ctx_fetch_and_index`로 문서를 가져오고 `ctx_search`로 BM25 검색

**Claude Code 설치**: `/plugin marketplace add mksglu/context-mode` → `/plugin install context-mode@context-mode`

**진단 실행**: `ctx doctor`로 런타임, 훅, FTS5, 플러그인 등록, 버전 확인

**통계 확인**: `ctx stats`로 도구별 컨텍스트 절약량과 토큰 소비량 확인

## 충돌

- **OpenClaw**: `api.on()`과 `api.registerHook()` 구분 실수 시 조용히 실패
- **Cursor**: `additional_context`가 모델에 표시되지 않는 제한 존재
- **OpenCode/KiloCode**: SessionStart 훅 없음 → `system.transform`으로 대체

## 관련 노트

- [[Claude.md 운영 원칙]]
- [[병렬 에이전트 세션 운영]]
- [[OpenCode]]
- [[AI 코딩 에이전트 검증 전략]]

