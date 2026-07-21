---
aliases: []
core: false
created: 2026-05-09
sources:
- graphify_정리
- raw/graphify_정리.md
status: evergreen
tags:
- ai-coding
- knowledge-graph
- context-management
- vibe-coding
type: tool
updated: 2026-07-10
---
# Graphify

## 한 줄 정의
Graphify는 프로젝트 코드와 문서를 지식 그래프로 변환하는 Claude Code 스킬로, `/graphify` 명령어 한 번으로 전체 프로젝트 구조를 AI가 이해하기 쉬운 형태로 압축한다.

## 핵심 요지
- **컨텍스트 절감**: Karpathy 저장소 + 5편 논문 + 4개 이미지 기준 **71.5배 토큰 절감**
- **멀티모달 통합**: 코드, PDF 논문, 이미지, 영상을 하나의 그래프로 연결
- **신뢰도 투명화**: 모든 관계가 `EXTRACTED`/`INFERRED`/`AMBIGUOUS` 태그로 구분됨
- **지속적 메모리**: `graph.json`과 `GRAPH_REPORT.md`가 세션 간 맥락을 유지
- AST(tree-sitter) 및 호출 그래프 분석을 활용하여 28개 언어의 코드를 API 비용 없이 로컬에서 파싱함 [raw/graphify_정리.md]
- Karpathy 저장소 + 5개 논문 + 4개 이미지의 52개 파일 코퍼스 기준, 71.5배 적은 토큰으로 동일 정보를 검색 가능함 [raw/graphify_정리.md]

## 상세

Graphify는 프로젝트 평더를 입력받아 지식 그래프를 생성한다. 코드는 tree-sitter AST를 이용해 로컬에서만 처리하므로 API 비용이 들지 않는다. 문서와 이미지만 Claude API를 통해 개념을 추출한다.

**주요 출력물** (`graphify-out/` 평더):
- `graph.html`: 인터랙티브 시각화
- `GRAPH_REPORT.md`: God nodes, Surprising connections, Suggested questions
- `graph.json`: 영속적 그래프 데이터
- `wiki/`: 마크다운 위키 (--wiki 옵션)

**핵심 명령어**:
- `/graphify .`: 현재 평더 전체 그래프화
- `/graphify query "..."`: 자연어 그래프 쿼리
- `/graphify ./docs --watch`: 파일 변경 감시 및 자동 재빌드
- `/graphify add <url>`: 외부 자원(YouTube, arXiv 등) 추가

15개 이상 플랫폼 지원: Claude Code, Codex, [[OpenCode]], Cursor, GitHub Copilot, Aider 등.

### 지원 파일 형식 및 플랫폼 설정
- **코드 파싱 (28개 언어)**: `.py .ts .js .jsx .tsx .go .rs .java .c .cpp .rb .cs .kt .scala .php .swift .lua .zig .ps1 .ex .m .jl .vue .svelte .sql` 등. tree-sitter AST 및 호출 그래프를 로컬에서만 분석하므로 API 토큰 비용이 발생하지 않는다.
- **오피스 및 워크스페이스**: `.docx .xlsx` (pip install graphifyy[office] 필요), `.gdoc .gsheet .gslides` (gws CLI 인증 후 `--google-workspace` 적용).
- **미디어**: PDF 논문 (인용 마이닝), 이미지 (`.png .jpg .webp .gif`, Claude Vision OCR 활용), 영상/음성 (`.mp4 .mov .mp3 .wav`, pip install graphifyy[video] 필요).
- **플랫폼별 설정**:
  - *Codex*: `graphify install --platform codex` (~/.codex/config.toml에 `multi_agent = true` 추가 권장).
  - *Cursor*: `graphify cursor install`.
  - *VS Code Copilot*: `graphify vscode install`.

## 예시

```bash
# 1단계: 프로젝트 그래프화
/graphify .

# 2단계: 특정 관계 질의
/graphify query "what connects auth to the database?"

# 3단계: 자동 동기화 설정
graphify hook install
```

## 바이브 코딩 활용

Graphify는 [[Vibe Coding과 Agentic Engineering|바이브 코딩]]을 체계화한다. AI가 매 턴 전체 코드베이스를 읽는 대신 그래프를 쿼리하면 비용이 급감하고, `--wiki` 모드로 생성된 마크다운을 통해 에이전트가 직접 파일을 탐색할 수 있다. 다중 에이전트가 병렬 작업할 때 중앙 그래프를 공유 컨텍스트로 활용하면 중복 파일 읽기를 방지한다.

```bash
# 변경된 파일만 재추출하여 기존 그래프와 병합
/graphify ./docs --update

# 클러스터링만 재실행 (추출 재수행 없음)
/graphify . --cluster-only

# HTML 시각화 생략 — 리포트 + JSON만 생성
/graphify . --no-viz

# 두 노드 간 경로 탐색
/graphify path "UserService" "DatabasePool"

# 특정 개념 설명
/graphify explain "RateLimiter"

# SVG / GraphML / Neo4j Cypher 내보내기
/graphify . --svg
/graphify . --graphml
/graphify . --neo4j

# MCP(stdio) 서버 모드 작동
/graphify . --mcp

# 여러 그래프 파일 병합
graphify merge-graphs a.json b.json
```

## 충돌
없음

## 관련 노트
- [[Vibe Coding과 Agentic Engineering]]: 바이브 코딩 개념 및 실무 적용
- [[Claude Code 오케스트레이션]]: Claude Code 도구 체인 관리
- [[AI 코딩 에이전트 검증 전략]]: AI 코딩 도구 검증 및 도입 결정 기준
- [[Context Mode]]: 컨텍스트 윈도우 절감 도구와 연계
- [[OpenCode]]: Graphify가 지원하는 플랫폼 중 하나

## 출처
- graphify_정리

- 원본 저장소: https://github.com/safishamsi/graphify
- PyPI: https://pypi.org/project/graphifyy/
- 핵심 수치 출처: 저장소 내 `worked/karpathy-repos/` 실측 데이터 (Karpathy repos + 5 papers + 4 images 기준 71.5배 토큰 절감)
