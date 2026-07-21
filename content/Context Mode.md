---aliases:
  - Context-Mode
core: false
created: 2026-05-09
sources:
  - context-mode-README-정리
  - raw/context-mode-README-정리.md
status: needs-review
tags:
  - ai-coding
  - context-window
  - mcp
  - sandbox
type: tool
updated: 2026-07-10
---
# Context Mode

## 한 줄 정의
AI 코딩 에이전트의 컨텍스트 윈도우를 최적화하는 MCP 서버. 도구 출력을 샌드박싱하여 컨텍스트 소비를 극적으로 줄인다.

## 핵심 요지
- 컨텍스트 절약: 315KB → 5.4KB(98% 감소) [GitHub](https://github.com/mksglu/context-mode)
- HN #1(570+ points), Microsoft/Google/Meta/Amazon/NVIDIA 등 다양한 기업에서 사용
- 4가지 문제 해결: Context Saving, Session Continuity, [[Think in Code]], Output Compression
- 14개 플랫폼 지원: Claude Code, Gemini CLI, VS Code Copilot, Cursor, [[OpenCode]] 등
- SQLite와 FTS5를 통해 대화 히스토리 및 파일 변경 이력을 관리하며, BM25 검색 알고리즘으로 필요한 정보만 압축/복원함 [raw/context-mode-README-정리.md]
- ctx_insight 도구를 통해 90개 메트릭, 37개 인사이트 패턴, 4대 종합 점수(productivity, quality, delegation, context health)를 분석하여 로컬 웹 UI로 시각화함 [raw/context-mode-README-정리.md]

## 상세

### Context Saving

MCP 도구 호출 시 raw 데이터가 컨텍스트 윈도우를 채우는 문제를 해결한다. Playwright snapshot 56KB, GitHub issues 20개 59KB처럼 큰 출력을 샌드박스 도구가 컨텍스트 밖으로 격리한다. 결과만 컨텍스트로 반환한다. 이 점에서 Context Mode는 [[Context Engineering]]의 실행 도구로 읽을 수 있다. 어떤 정보를 오래 남기고 어떤 출력을 요약해 다음 단계로 넘길지 설계하는 데 직접 쓰이기 때문이다.

### Session Continuity

컨텍스트 압축(compaction) 시 에이전트가 작업을 잊어버리는 문제를 SQLite + FTS5로 추적한다. 파일 편집, git 작업, 태스크, 에러, 사용자 결정을 모두 기록한다. BM25 검색으로 필요한 것만 조회해 compaction 후에도 정확히 이어서 작업한다. `--continue` 없으면 이전 세션 데이터를 즉시 삭제해 깨끗한 슬레이트를 유지한다.

### [[Think in Code]]

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

**대체 메커니즘 필요**: Cursor(SessionStart 훅 없음 → `.cursor/rules/context-mode.mdc` 파일로 대체), [[OpenCode]]/KiloCode(SessionStart 없음 → `system.transform`으로 대체)

**네이티브 게이트웨이 플러그인**: [[OpenClaw]]/Pi Agent - 별도 MCP 서버 없이 게이트웨이 런타임에 직접 등록, 라우팅 완전 자동

**기타**: Codex CLI, Windsurf, [[Cline]], Roo Code, Augment Code, Amazon Q Developer CLI, Antigravity

### [[OpenClaw]] 어댑터 특징

[[OpenClaw]]에서는 `api.on()`(lifecycle/tool 훅)과 `api.registerHook()`(command 훅)을 구분해야 한다. 잘못 사용하면 조용히 실패한다. 예를 들어 `api.registerHook("before_tool_call", ...)`는 등록되지만 절대 실행되지 않는다. async register도 작동하지 않으므로 [[initPromise 패턴]]을 사용해야 한다. 최소 버전은 >2026.1.29(PR #9761 필요)다.

### Cursor 제한

Cursor는 `additional_context`가 모델에 표시되지 않는 제한이 있다. 이로 인해 일부 라우팅 지시사항이 모델에게 전달되지 않을 수 있다.

### [[OpenClaw]] 어댑터 및 환경 스펙
- **설치 및 빌드**:
  ```bash
  git clone https://github.com/mksglu/context-mode.git
  cd context-mode
  npm run install:openclaw
  # 커스텀 경로 지정 시: npm run install:openclaw -- /path/to/openclaw-state
  ```
  인스톨러는 `npm install` -> `npm run build` -> `better-sqlite3` 네이티브 모듈 재빌드 -> `runtime.json`에 확장 등록 -> SIGUSR1으로 게이트웨이를 재시작하는 절차를 거친다.
- **[[OpenClaw]] 상태 디렉토리 (`OPENCLAW_STATE_DIR`)**: Docker는 `/openclaw`, 로컬은 `~/.openclaw`를 기본값으로 삼는다.
- **동작 요건**: Node.js 18+가 필수적이며, [[OpenClaw]] 런타임의 경우 Node.js 22+ 및 최소 버전 >2026.1.29 (PR #9761 반영)을 요한다.

## 예시

**파일 분석 스크립트 실행**: `ctx_execute("javascript", "const fs = require('fs'); const files = fs.readdirSync('.'); console.log(files.length);")`

**URL fetch 후 검색**: `ctx_fetch_and_index`로 문서를 가져오고 `ctx_search`로 BM25 검색

**Claude Code 설치**: `/plugin marketplace add mksglu/context-mode` → `/plugin install context-mode@context-mode`

**진단 실행**: `ctx doctor`로 런타임, 훅, FTS5, 플러그인 등록, 버전 확인

**통계 확인**: `ctx stats`로 도구별 컨텍스트 절약량과 토큰 소비량 확인

```typescript
// initPromise 패턴 코드 스펙 예시
register(api): void {
  const initPromise = (async () => { /* 비동기 설정 */ })();
  api.on("after_tool_call", async (e) => {
    await initPromise;  // 설정 완료 대기 후 이벤트 처리
    // ...
  });
}
```

### 플랫폼별 설정 파일 매핑
- **Claude Code**: `~/.claude/settings.json` (status line)
- **Gemini CLI**: `~/.gemini/settings.json`
- **VS Code Copilot**: `.vscode/mcp.json` + `.github/hooks/context-mode.json`
- **JetBrains Copilot**: Settings UI + `.github/hooks/context-mode.json`
- **Cursor**: `.cursor/mcp.json` + `.cursor/hooks.json` + `.cursor/rules/context-mode.mdc`
- **[[OpenCode]]**: `opencode.json` (+ `AGENTS.md`)
- **KiloCode**: `kilo.json` (+ `~/.config/kilo/`)
- **[[OpenClaw]]**: `runtime.json` (자동 등록)
- **Codex CLI**: `~/.codex/config.toml` + `~/.codex/hooks.json`

### [[OpenClaw]] 트러블슈팅 가이드
- `openclaw.json` 없음: [[OpenClaw]] 최초 실행 (`openclaw gateway start`)이 누락되었는지 확인.
- 플러그인이 설치되었으나 로드 안 됨: jiti 캐시를 삭제한다 (`rm -f /tmp/jiti/context-mode-*.cjs`).
- `ctx_*` 도구 누락: `openclaw mcp list` 확인 후 다음으로 수동 등록:
  ```bash
  openclaw mcp set context-mode "{\"command\":\"node\",\"args\":[\"/절대경로/context-mode/server.bundle.mjs\"]}"
  ```

## 충돌
- **[[OpenClaw]]**: `api.on()`과 `api.registerHook()` 구분 실수 시 조용히 실패
- **Cursor**: `additional_context`가 모델에 표시되지 않는 제한 존재
- **[[OpenCode]]/KiloCode**: SessionStart 훅 없음 → `system.transform`으로 대체

## 관련 노트
- [[Claude.md 운영 원칙]]
- [[병렬 에이전트 세션 운영]]
- [[OpenCode]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Graphify]]
- [[Agentic 패턴 진화]]
- [[Context Engineering]]
- [[에이전트 확장 3계층]]

