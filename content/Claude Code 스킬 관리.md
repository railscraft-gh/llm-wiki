---
type: concept
status: draft
core: false
tags:
  - llm
  - claude-code
  - agent
aliases: []
sources:
  - raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md
created: 2026-06-14
updated: 2026-06-14
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
한 달간의 감사 과정에서 31개 중 살아남은 8가지 핵심 스킬(6개 공식 스킬, 2개 커뮤니티 개발)은 다음과 같다.

### 1. Anthropic 공식 스킬
*   **`skill-creator`**: 새로운 스킬을 위한 YAML 프론트매터 및 실행 로직을 정의하며, 스킬에서 가장 중요한 '설명(description) 필드'의 트리거 범위가 겹치지 않게 조율하는 전제 조건 메타 스킬이다.
*   **`document-skills`**: PDF, XLSX, DOCX, PPTX 생성을 단일 명령어로 처리하는 플러그인 세트(Plugin Set)다. 로컬 Python 스크립트 및 바이너리를 사용해 변환을 처리하므로, 파일 파싱을 위해 개별적으로 구동하던 비대한 JSON 스키마 기반 MCP 서버 4개를 대체해 컨텍스트 세금을 대폭 아낀다.
*   **`webapp-testing`**: CLI에서 Playwright 헤드리스 브라우저 세션을 오케스트레이션하여 폼 전송, 버튼 클릭 등의 스모크 테스트를 실행한다. 단순 스크린샷 캡처에 그치지 않고 DOM 접근성 트리(Accessibility Tree)를 추출하여 컨텍스트에 공급하므로, z-index 이슈로 UI 요소가 가려져 클릭이 실패하는 등의 접근성 레이아웃 버그를 에이전트가 탐지하고 수정하게 돕는다.
*   **`mcp-builder`**: 자연어 요건 설명에 맞춘 전용 초경량 MCP(Model Context Protocol) 서버와 API 인증 보일러플레이트를 자동 생성한다. 이를 통해 에이전트 실행 즉시 5만 토큰 가량의 JSON 스키마를 올리는 비대한 기성 MCP 서버 의존을 탈피한다.
*   **`theme-factory`**: 미적 방향성을 입력받아 Tailwind CSS 구성이나 CSS 변수를 세부 생성한다.

### 2. 커뮤니티 및 외부 개발 스킬
*   **`frontend-design`**: Claude의 기본 미학(회색 그라데이션, Inter 폰트 중심 등)을 오버라이드하여, 브루탈리스트나 레트로 퓨처리즘 등 다양한 UI 레이아웃 컨셉을 강제 설계하게 돕는다.
*   **`static-analysis`** (by Trail of Bits): 백그라운드에서 Semgrep 및 CodeQL을 구동해 SQL 인젝션, CSRF 누락, 비밀 키 하드코딩 등 정규식(Grep) 수준에서 잡아낼 수 있는 보안 취약점을 80% 가량 사전에 탐지해 컨텍스트로 전달한다.
*   **`agent-sandbox`**: E2B 등의 임시 클라우드 격리 환경을 활용해 코드를 실행함으로써, 자율 에이전트가 로컬 파일 시스템을 훼손하거나 `.env` 파일을 우발적으로 커밋하는 등의 파괴적 행위를 예방한다.

### 3. 이미 번들된 내부 핵심 스킬
*   **`/simplify`**: 변경이 많은 diff 발생 시, 중복 로직이나 불필요한 추상화를 단순하게 리팩토링하는 스킬이다. 25K 토큰 압축 허용량(Compaction Budget) 범위 내에서 이전 대화 기록을 자동 요약해 작업 메모리를 확보한 후 실행된다. (유사 핵심 스킬로 `/debug`, `/batch`, `/loop`, `/claude-api`가 제공된다.)

## 예시
### 스킬 일괄 설치 및 빌드 쉘 스크립트
`/plugin` 명령 없이도 Desktop, Web, Cursor 등의 환경에서 로컬 경로(`~/.claude/skills/`)를 참조해 빌드할 수 있는 스크립트 예시다.
```bash
git clone https://github.com/anthropics/skills.git /tmp/anthropic-skills  
git clone https://github.com/anthropics/claude-code.git /tmp/claude-code  
git clone https://github.com/trailofbits/skills.git /tmp/tob-skills  
git clone https://github.com/disler/agent-sandbox-skill.git /tmp/agent-sandbox  
  
mkdir -p ~/.claude/skills  
  
cp -r /tmp/anthropic-skills/skills/skill-creator    ~/.claude/skills/  
cp -r /tmp/anthropic-skills/skills/pdf              ~/.claude/skills/  
cp -r /tmp/anthropic-skills/skills/docx             ~/.claude/skills/  
cp -r /tmp/anthropic-skills/skills/xlsx             ~/.claude/skills/  
cp -r /tmp/anthropic-skills/skills/pptx             ~/.claude/skills/  
cp -r /tmp/anthropic-skills/skills/theme-factory    ~/.claude/skills/  
cp -r /tmp/anthropic-skills/skills/webapp-testing   ~/.claude/skills/  
cp -r /tmp/anthropic-skills/skills/mcp-builder      ~/.claude/skills/  
cp -r /tmp/claude-code/plugins/frontend-design/skills/frontend-design ~/.claude/skills/  
cp -r /tmp/tob-skills/plugins/static-analysis       ~/.claude/skills/  
cp -r /tmp/agent-sandbox/.claude/skills/agent-sandboxes ~/.claude/skills/agent-sandbox  
  
rm -rf /tmp/anthropic-skills /tmp/claude-code /tmp/tob-skills /tmp/agent-sandbox  
  
ls ~/.claude/skills/
```

## 충돌
*   **스킬 우선(Skills-First) vs 대용량 MCP 서버 로드**: 
    기성 Jira, Slack, Postgres MCP 서버를 무작정 연동하면 프롬프트 처리 시작 전부터 50,000 토큰에 가까운 JSON 스키마 정보가 컨텍스트를 독차지하여 지능 저하가 일어난다. 따라서 외부 상태나 실시간 외부 API 호출이 필수적인 상황이 아니라면, 로컬 스크립트를 즉각 호출하는 '로컬 스킬' 형태의 구현이 지연 시간 및 토큰 비용 관리 관점에서 압도적인 대안으로 평가받는다.

## 관련 노트
*   [[Claude Code 오케스트레이션]]
*   [[Harness Engineering]]
*   [[Model Context Protocol]]
*   [[Claude Code 세션 운영 명령어]]

