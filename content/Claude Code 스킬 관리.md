---
type: concept
status: draft
core: false
tags:
  - llm
  - claude-code
  - agent
aliases:
  - Claude Code 스킬
  - 클로드 코드 스킬 관리
sources:
  - raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md
  - raw/보리스_클로드코드_실무_사용법.md
  - raw/노트북을 망가뜨리지 않으려고 라즈베리 파이에서 AI 에이전트 하네스를 구동한 후기.md
  - raw/지난번 이런 일이 있었을 때, 수많은 평범한 사람들이 백만장자가 되었다.md
  - raw/지식 그래프, 진정한 게임 체인저... 그러나 구축과 유지가 극도로 어려운 이유.md
  - 'raw/밑바닥부터 만드는 LLM 메모리 #3. 벡터 메모리.md'
  - 'raw/밑바닥부터 만드는 LLM 메모리 #5. 계층형 자체 관리 메모리.md'
  - 'raw/밑바닥부터 만드는 LLM 메모리 #4. 지식 그래프 메모리.md'
  - raw/Claude Code 프로젝트 효율을 극대화하는 MEMORY.md 가이드.md
  - raw/AI와 오픈소스로 300개 이상의 팟캐스트를 RPG 게임으로 만든 이야기 - LennyRPG 8시간 개발기.md
  - raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md
  - raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md
  - raw/AI 개발자가 반드시 알아야 할 9가지 RAG 아키텍처 - 실무 예제로 배우는 완전 가이드.md
  - raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 TurboQuant, 애플 실리콘 상륙.md
  - raw/1인 개발자와 소규모 팀을 위한 주말 완성 디자인 시스템 구축법.md
  - 'raw/애플 실리콘을 위한 로컬 AI 스택: 한 차원 진화한 성능과 최적의 구축 가이드.md'
  - raw/How to write a DESIGN.md file Claude can actually use-ko.md
  - raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
  - 'raw/밑바닥부터 만드는 LLM 메모리 #1. 슬라이딩 윈도우 버퍼.md'
  - raw/우리가 피그마 없이 제품을 배포하는 방법.md
  - raw/2026년에 실제로 효과가 있는 나의 AI 디자인 워크플로우.md
  - raw/DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko.md
  - raw/Cursor에서 Superpowers 플러그인 쓰는 법 — 상세 정리-ko.md
  - raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md
  - raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
  - 'raw/밑바닥부터 만드는 LLM 메모리 #2. 자동 요약 버퍼.md'
  - raw/100개 이상의 Claude Code 스킬 중 가장 유용한 베스트 추천 목록.md
created: 2026-06-14
updated: 2026-06-22
---

# Claude Code 스킬 관리

## 한 줄 정의
Claude Code 스킬 관리는 에이전트의 컨텍스트 윈도우 오버헤드와 비용(Context Tax)을 최소화하기 위해 사용하지 않는 로컬 스킬을 정리하고, 핵심 도구 중심으로 최적의 스택을 유지하는 프레임워크다.

## 핵심 요지
1. **컨텍스트 세금(Context Tax)**: Claude Code는 실행 시 로컬 `.claude/skills/` 디렉터리에 설치된 모든 스킬의 설명(description)을 읽어와 시스템 프롬프트에 병합한다. 스킬이 너무 많아지면 입력 전송 전에 무관한 텍스트로 컨텍스트 윈도우가 가득 차게 되며, 이는 비용 증가와 정확도 및 반응 속도 저하를 야기한다.
2. **컨텍스트 예산 1% 원칙**: Anthropic 공식 가이드에 따르면 스킬 설명에 할당되는 최대 예산은 전체 컨텍스트의 1% 수준(각 설명 최대 1,536자)으로 제한되며, 권장되는 유지 스킬 개수는 8~12개 사이다.
3. **스킬 감사(Audit) 프레임워크**: 30일 주기로 4가지 기준(최근 30일 내 트리거 여부, 스킬 설명 간 경쟁 및 중복, `CLAUDE.md`로 대체 가능한 단순 지침 여부, 토큰 소모량 대비 시간 절약 가치)에 따라 불필요한 스킬을 정리(Prune)해야 한다.
4. **시니어 엔지니어 패턴**: 무조건적인 스택 추가를 피하고, 로컬 스킬 중심(Skills-First) 설계로 MCP 의존성을 낮추며, 필요한 시점과 프로젝트 성격에 맞춰 `skill-creator`로 커스텀 스킬을 제작한 후 정리한다.

## 상세

### 1. Keystroke 및 CLI 명령어

#### 플러그인/스킬 설치 및 관리 명령어
Claude Code 세션 환경 내에서 사용할 수 있는 대표적인 플러그인 명령어들은 다음과 같다.
- **마켓플레이스 연동 및 설치**:
  ```bash
  /plugin marketplace add anthropics/claude-code
  /plugin install frontend-design@anthropics/claude-code
  /plugin install document-skills@anthropic-agent-skills
  /plugin install webapp-testing@anthropic-agent-skills
  /plugin install theme-factory@anthropic-agent-skills
  /plugin install mcp-builder@anthropic-agent-skills
  /plugin install static-analysis@trailofbits
  ```
- **수동 로컬 설치 (Git 복사 활용)**:
  `/plugin` 명령을 사용하지 않고, 수동으로 로컬 경로 `~/.claude/skills/`에 직접 복사하여 에이전트 구동 환경을 동적 빌드할 수 있다. Claude Code는 이 디렉터리를 실시간으로 감시하므로 재부팅이 필요 없다.
  ```bash
  mkdir -p ~/.claude/skills
  cp -r /tmp/anthropic-skills/skills/skill-creator ~/.claude/skills/
  ```

#### 빌트인 슬래시 커맨드 활용
대용량 코드 변경(diff) 발생 시나 디버깅 및 요약 작업 시, 아래의 빌트인 단축 명령어를 CLI에 입력하여 구동한다.
- **`/simplify`**: 변경이 많은 diff 발생 시, 중복 로직이나 불필요한 추상화를 단순하게 리팩토링하는 스킬. 이전 대화 기록을 25K 토큰 압축 허용량(Compaction Budget) 범위 내에서 자동 요약해 작업 메모리를 확보한 후 실행된다.
- **`/debug`**: 에러 발생 시 백트레이스 분석을 트리거한다.
- **`/batch`**: 여러 파일에 걸쳐 복합적인 수정 작업을 일괄 실행한다.
- **`/loop`**: 조건이 충족될 때까지 연속 실행(Loop) 모드를 구동한다.
- **`/claude-api`**: Anthropic API에 하위 작업 쿼리를 직접 수행한다.

### 2. Custom Prompt 및 CLAUDE.md 제어

#### CLAUDE.md를 통한 행동 규칙 주입
반복적인 행동 스타일이나 프롬프트 지침은 매번 스킬을 로드하여 컨텍스트 세금을 지불하는 대신, 프로젝트 루트에 `CLAUDE.md` 업무 매뉴얼 파일을 작성하여 보관하는 방식을 취한다.
- **크기 제어**: `CLAUDE.md`는 약 **2,500 토큰** 이내로 슬림하게 유지하여 에이전트의 주의 분산을 막는다.
- **금지 조건 설정**: 프롬프트 규칙 내에 에이전트가 "하지 말아야 할 것"을 명시하는 것이 중요하며, 다음과 같은 파괴적 작업 방지 규칙을 명기한다.
  - `"마이그레이션 파일은 사용자의 명시적 승인 없이 수정하지 않는다."`
  - `"프로덕션 DB와 관련된 명령이나 파괴적인 삭제 명령은 절대 자동 실행하지 않는다."`
  - `"새 기능을 구현하기 전에는 반드시 테스트 전략을 먼저 설명한다."`

#### 스킬 정의 최적화 (`skill-creator`)
커스텀 스킬을 제작할 때, YAML frontmatter의 `description` 필드가 모호하지 않도록 설계하여 에이전트가 불필요하게 스킬을 트리거해 API 예산을 소모하는 것을 사전에 차단한다.
```yaml
---
name: review-pr
description: Review the current PR diff and flag risks. Use before commit.
allowed-tools: Bash(git diff *) Bash(gh pr *)
---
```

### 3. MCP 및 격리 실행 환경 (Sandbox) 설정

#### 초경량 MCP 자동화 (`mcp-builder`)
기성 무거운 MCP(Slack, Jira, Postgres 등) 서버는 로드 시 약 5만 토큰의 JSON 스키마 정보가 컨텍스트 윈도우를 가득 채운다.
- 이를 우회하기 위해 **`mcp-builder`** 스킬을 통해 필요한 로직(예: `list_invoices`, `refund_charge`)에 맞춤화된 초경량 전용 MCP 서버를 자동으로 생성 및 빌드한다.
- 이를 통해 실시간 외부 데이터 연동이 불필요한 시나리오에서는 로컬 스크립트를 호출하는 '로컬 스킬' 방식으로 MCP를 감싸 컨텍스트 세금을 획기적으로 아낀다.

#### 클라우드 샌드박스 격리 (`agent-sandbox`)
자율 에이전트가 로컬 파일 시스템을 훼손하거나 중요 환경 변수 파일을 커밋하는 일을 방지하기 위해 **E2B 샌드박스 환경**을 설정하고 격리 상태에서 실행한다.
- **E2B 환경 구성**: E2B 등의 클라우드 샌드박스 프로바이더를 설치한 후 스킬 내부에서 아래의 흐름을 트리거한다.
  ```bash
  # 샌드박스 생성 (30분 타임아웃, sandbox_id 반환)
  uv run sbx init --timeout 1800
  # 샌드박스 내에서 안전하게 테스트 및 검증 실행
  uv run sbx exec <sandbox_id> "npm test"
  # 작업 종료 후 격리 환경 제거
  uv run sbx sandbox kill <sandbox_id>
  ```

---

감사 후에 살아남은 8가지 핵심 스킬(6개 공식 스킬, 2개 커뮤니티 개발)은 다음과 같다.

### Anthropic 공식 스킬
*   **`skill-creator`**: 새로운 스킬을 위한 YAML 프론트매터 및 실행 로직을 정의하며, 스킬에서 가장 중요한 '설명(description) 필드'의 트리거 범위가 겹치지 않게 조율하는 전제 조건 메타 스킬이다.
*   **`document-skills`**: PDF, XLSX, DOCX, PPTX 생성을 단일 명령어로 처리하는 플러그인 세트(Plugin Set)다. 로컬 Python 스크립트 및 바이너리를 사용해 변환을 처리하므로, 파일 파싱을 위해 개별적으로 구동하던 비대한 JSON 스키마 기반 MCP 서버 4개를 대체해 컨텍스트 세금을 대폭 아낀다.
*   **`webapp-testing`**: CLI에서 Playwright 헤드리스 브라우저 세션을 오케스트레이션하여 폼 전송, 버튼 클릭 등의 스모크 테스트를 실행한다. 단순 스크린샷 캡처에 그치지 않고 DOM 접근성 트리(Accessibility Tree)를 추출하여 컨텍스트에 공급하므로, z-index 이슈로 UI 요소가 가려져 클릭이 실패하는 등의 접근성 레이아웃 버그를 에이전트가 탐지하고 수정하게 돕는다.
*   **`mcp-builder`**: 자연어 요건 설명에 맞춘 전용 초경량 MCP([[Model Context Protocol]]) 서버와 API 인증 보일러플레이트를 자동 생성한다. 이를 통해 에이전트 실행 즉시 5만 토큰 가량의 JSON 스키마를 올리는 비대한 기성 MCP 서버 의존을 탈피한다.
*   **`theme-factory`**: 미적 방향성을 입력받아 Tailwind CSS 구성이나 CSS 변수를 세부 생성한다.

### 커뮤니티 및 외부 개발 스킬
*   **`frontend-design`**: Claude의 기본 미학(회색 그라데이션, Inter 폰트 중심 등)을 오버라이드하여, 브루탈리스트나 레트로 퓨처리즘 등 다양한 UI 레이아웃 컨셉을 강제 설계하게 돕는다.
*   **`static-analysis`** (by Trail of Bits): 백그라운드에서 Semgrep 및 CodeQL을 구동해 SQL 인젝션, CSRF 누락, 비밀 키 하드코딩 등 정규식(Grep) 수준에서 잡아낼 수 있는 보안 취약점을 80% 가량 사전에 탐지해 컨텍스트로 전달한다.
*   **`agent-sandbox`**: E2B 등의 임시 클라우드 격리 환경을 활용해 코드를 실행함으로써, 자율 에이전트가 로컬 파일 시스템을 훼손하거나 `.env` 파일을 우발적으로 커밋하는 등의 파괴적 행위를 예방한다.

### 실무 유용한 추천 스킬 6선
Claude Code 세션의 컨텍스트 예산 내에서 실무 활용성과 생산성 향상 가치가 검증된 6가지 유용한 추천 스킬 목록은 다음과 같다.
- **`Frontend Slides`** (`/frontend-slides:frontend-slides`): HTML 기반 전문가급 프레젠테이션 피치 덱을 생성하며, PPT 변환 기능도 지원한다.
- **`XLS`** (`xlsx`): `.xlsx`, `.csv` 등 스프레드시트 파일을 로컬에서 열고, 정제하며, 차트 작성 및 서식/수식 편집 작업을 자동 수행한다. (공식 스킬: `anthropics/skills/blob/main/skills/xlsx/SKILL.md` 참조)
- **`figma-generate-design`**: Figma API와 연동해 아트보드 구조를 양방향으로 동기화하고 즉시 코드로 구현하거나 코드를 바탕으로 Figma에 디자인을 자동 렌더링한다.
- **`Remotion`** (`npx skills add remotion/agent-skills`): 기능 설명용 프로덕션 비디오 에셋을 세션 내에서 코드로 빌드해 내보낸다.
- **`Codex`**: OpenAI Codex 플러그인을 git 커밋 검토 및 리서치 검증에 배치하여 Claude의 일일 토큰 예산을 세이브한다.
- **`pm-skills`**: Atlassian MCP 연동 기능이 포함된 6가지 PM 모듈(senior-pm, scrum-master 등)로, 스프린트 예측 및 리스크 분석, Confluence 템플릿 레이아웃 등을 오케스트레이션한다.

---

## 충돌
*   **스킬 우선(Skills-First) vs 대용량 MCP 서버 로드**: 
    기성 Jira, Slack, Postgres MCP 서버를 무작정 연동하면 프롬프트 처리 시작 전부터 50,000 토큰에 가까운 JSON 스키마 정보가 컨텍스트를 독차지하여 지능 저하가 일어난다. 따라서 외부 상태나 실시간 외부 API 호출이 필수적인 상황이 아니라면, 로컬 스크립트를 즉각 호출하는 '로컬 스킬' 형태의 구현이 지연 시간 및 토큰 비용 관리 관점에서 압도적인 대안으로 평가받는다.

## 관련 노트
*   [[Claude Code 오케스트레이션]]
*   [[Harness Engineering]]
*   [[Model Context Protocol]]
*   [[Claude Code 세션 운영 명령어]]
*   [[Cursor Superpowers 플러그인]]

