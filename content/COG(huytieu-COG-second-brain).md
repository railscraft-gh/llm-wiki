---
type: tool
status: draft
core: false
tags:
  - tool
  - obsidian
  - agent
  - llm
aliases:
  - COG
  - COG 세컨드 브레인
sources:
  - "raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md"
created: 2026-07-29
updated: 2026-07-29
---

# [[COG]](huytieu-[[COG]]-second-brain)

## 한 줄 정의

Git, Obsidian, 그리고 AI 에이전트(Agent) 환경을 기반으로 동작하며, 데이터베이스와 서버 없이 마크다운 문서와 Git 버전 관리로 구축되는 오프라인 친화적 세컨드 브레인(Second Brain, 제2의 두뇌) 자동 관리 프레임워크다.

## 핵심 요지

- **3대 핵심 기둥**: 인지(Cognition, AI 인지), 옵시디언(Obsidian, 마크다운 시각화), 깃(Git, 버전 제어 및 롤백)을 결합하여 영구적인 로컬 지식 기반을 제공한다.
- **저장 계층 분리**: 시스템 구동 프레임워크(스킬, 코어 스크립트)와 사용자 데이터(노트, 프로필)의 저장 영역을 철저히 격리하여 안전한 업데이트가 가능하다.
- **고난도 추론과 I/O 작업 분리**: 의사결정은 고성능 헤드 에이전트(Opus)가 조율하고, 파일 입출력 및 세부 수작업은 6개의 경량 워커 에이전트(Worker Agent, 작업자 에이전트)에 위임해 API 비용을 최소화한다.
- **[[성찰 루프(Reflection Loop)]]**: [[브레인덤프(Braindump)]] 수집, 주간 분석(Weekly review), 월간 데이터 통합(Consolidate)으로 이어지는 순환 피드백 구조를 지원한다.
- **확장성**: `SKILL.md` 마크다운 파일 정의만으로 코어 수정 없이 새로운 에이전트 협업 스킬을 추가할 수 있다.

## 설치/실행

### 1. 저장소 복제 (Clone)
터미널을 열고 다음 명령어를 실행하여 저장소를 복제한다:
```bash
git clone https://github.com/huytieu/COG-second-brain.git
cd COG-second-brain
```
또는 Node 및 npx 환경이 설치된 상태에서 단축 명령어로 즉시 추가할 수 있다:
```bash
npx skills add huytieu/COG-second-brain
```

### 2. 온보딩(Onboarding) 프로세스
AI 에이전트와 대화를 시작하면 온보딩 설문이 시작된다. 사용자의 구체적 역할(엔지니어, PM, 디자이너, 창업자 등)을 파악하여 적합한 스킬과 연동 기능의 우선순위를 2분 이내에 자동으로 구성한다.
- **PM**: PRD(제품 요구사항 정의서)나 릴리스 노트 스킬 우선 활성화
- **엔지니어**: 팀 협업 및 리서치 스킬 우선 활성화

### 3. 디렉터리 구성
보관소(Vault)가 생성되면 다음과 같은 평범한 텍스트 파일과 디렉터리 구조가 잡힌다:
- `00-inbox` ~ `06-templates`: 도메인별 노트를 분류하는 콘텐츠 폴더
- `.claude/skills/`, `.claude/agents/`: 에이전트가 직접 읽고 수행할 구체적인 행동 지침(스킬)을 보관하는 중추 폴더

### 4. iCloud 및 Git 연동 (권장)
- **iCloud**: 애플 기기(iPhone, iPad, Mac) 간의 보관소 실시간 동기화
- **Git**: 변경 이력 추적 및 롤백(Rollback)을 위한 형상 관리 보장

## 핵심 명령

- **`I need to braindump`**: 머릿속의 가공되지 않은 생각을 쏟아내는 입력 기능. 에이전트가 주제에 따라 분류하여 최적의 위치에 노트를 생성하고, 할 일은 Obsidian Tasks 플러그인과 호환되는 이모지 포맷(`📅 YYYY-MM-DD`)으로 저장한다.
- **`Give me my daily brief`**: 사용자의 관심사에 맞는 소식을 수집해 일일 보고서를 생성한다. 출처 명시, 최근 7일 이내 최신성 유지, 신뢰도 등급(Confidence level) 표기 원칙을 준수한다.
- **`Weekly review`**: 1주일간 기록된 노트를 상호 참조하여 유기적인 패턴과 연결 고리를 찾아내는 분석 명령이다.
- **`Consolidate my knowledge`**: 매달 한 번씩 파편화된 메모들을 하나의 실용적인 지식 프레임워크로 통합한다.
- **`Team brief`**: GitHub, Linear, Slack, PostHog 등 협업 도구에서 발생하는 현황을 종합하는 스킬이다. GitHub CLI(`gh`)와 MCP 연동을 요구한다.

## 시스템 아키텍처 및 비용 최적화

[[COG]]는 범용 [[인공지능 에이전트]] 시스템에서 매우 영리한 비용 절감 및 토큰 최적화 방식을 사용한다.
- **역할 분담**: 고난도 의사결정과 종합 추론은 고가 모델(헤드 에이전트)이 담당하고, 기계적인 I/O(자료 수집, 파일 업데이트)는 저렴한 모델(워커 에이전트)에 위임한다.
- **임시 경로 반환**: 하위 워커는 임무의 결과물을 로컬의 임시 경로(`/tmp/`)에 기록하고, 부모 에이전트에게 파일 주소만 보고한다. 대용량 로우(raw) 데이터가 메인 대화창 컨텍스트 윈도우(Context Window, 컨텍스트 창)를 차지해 비용이 낭비되는 비효율을 방지한다.

## 커스텀 스킬 확장

시스템 코드를 변경하지 않고 `skills/` 폴더 내에 마크다운 파일(`SKILL.md`, Kiro 사용자는 `POWER.md`, 범용은 `AGENTS.md`) 하나를 추가하여 새로운 행동을 정의할 수 있다:
- **포맷**: 스킬 설명(Description), 트리거(Trigger), 실행 단계(Step) 등을 작성하여 에이전트에게 제공한다.
- 이를 통해 깃 커밋 로그를 기반으로 독창적인 어조의 보고서를 자동 생성하는 등의 스킬을 손쉽게 붙일 수 있다.

## 노트 손실 없는 업데이트

프레임워크 스크립트와 사용자 기록(노트, 프로필)의 저장 레이어를 차단하여 업데이트로 인한 유실을 방지한다.
- **업데이트 스크립트**: `./cog-update.sh`
  - `--check`: 달라지는 내용 미리 조회
  - `--dry-run`: 가상 시뮬레이션
- 커스텀 스킬이 존재할 경우 사용자 승인을 거쳐 영속화, 덮어쓰기, 백업 여부를 조율한다.
- `cat COG-VERSION`으로 현재 버전을 확인할 수 있다.

## 한계

- **가중치 학습의 부재**: 자체 가중치(Weight) 튜닝이나 인공지능 학습을 수행하는 것은 아니며, 본질적으로 마크다운 스킬에 정의된 주입식 성찰 루프에 의존하므로 사용자의 적극적인 활용 습관이 유지되어야 가치가 발휘된다.
- **환경 의존성**: `Team brief` 등 고급 협업 기능을 온전히 사용하려면 GitHub CLI(`gh`), MCP 등 인프라 설정이 필수적이다. 다만 인프라가 미비할 경우 점진적 기능 저하(Degrade Gracefully, 기능의 자동 축소 제공) 모델을 지원한다.

## 관련 노트

- [[옵시디언 폴더 구조와 제텔카스텐 정리 규칙]]
- [[옵시디언_세컨드_브레인]]
- [[Claude Code(클로드 코드)]]
- [[Model Context Protocol]]
- [[Claude Code 오케스트레이션]]

## 출처

- `raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md`
