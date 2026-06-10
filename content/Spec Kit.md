---
type: tool
status: draft
core: false
tags:
  - ai-coding
  - open-source
  - tool
  - github
aliases:
  - Spec Kit
  - 스펙 킷
sources:
  - 바이브 코딩의 종말
  - raw/느낌 코딩의 시대는 끝났다 - GitHub Spec Kit과 명세 기반 개발.md
created: 2026-06-09
updated: 2026-06-10
---

# Spec Kit

## 한 줄 정의

GitHub이 사양 기반 개발(Spec Driven Development) 워크플로우를 AI 코딩 에이전트에 이식하기 위해 개발한 오픈소스 부트스트랩 CLI 도구이자 프롬프트 템플릿 패키지이다. (출처: 바이브 코딩의 종말)

## 핵심 요지

- **90k+ 스타 저장소**: 최근 AI 에이전트 코딩 생태계에서 가장 빠르게 성장하는 오픈소스 툴킷 중 하나로, 스타 9만 개와 포크 8천 개 이상을 돌파했다.
- **`specify` CLI와 부트스트랩**: Python 3.11 이상 요구하며, Astral의 `uv` 패키지 관리자를 통해 설치하여 프로젝트에 `.specify/` 환경을 구축한다.
- **아키텍처 헌장(Constitution)**: `.specify/memory/constitution.md`에 정의되는 최상위 핵심 원칙으로, 에이전트가 신규 구현 시 준수해야 할 디자인 시스템, 모듈 패키지화 원칙 등을 강제해 탈선을 방지한다.
- **6+3 명령 체계**: 6단계의 인과적 선형 구현 명령어와 3가지 품질 보증 검증 명령어 체계를 지원하여 '느낌 코딩(Vibe Coding)'의 주먹구구식 한계를 보완한다.

## 상세

### 1. 설치 및 프로젝트 부트스트랩
`specify` CLI는 파이썬 기반이며 `uv` 매니저를 통한 설치가 강력히 권장된다.
- **영구 설치**: `uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.8.4`
- **일회성 초기화**: `uvx --from git+https://github.com/github/spec-kit.git@v0.8.4 specify init my-project`
- **프로젝트 구성**: 초기화 완료 시 생성되는 `.specify/` 디렉토리 하위의 구조는 다음과 같다.
  - `memory/`: 전역 아키텍처 헌장(`constitution.md`)이 위치하며 모든 단계에서 최상위 철칙으로 지켜진다.
  - `scripts/`: 자동화용 셸 스크립트 및 PowerShell 스크립트가 포함된다.
  - `specs/`: 개별 기능 단위 명세(예: `.specify/specs/001-photo-app/spec.md`)가 저장되며 Git 브랜치 단위로 관리된다.
  - `templates/`: 에이전트 소통을 위해 미리 정의된 프롬프트 양식이 위치한다.

### 2. 6가지 핵심 구현 명령
Spec Kit의 실행 명령들은 앞 단계의 결과물이 다음 단계의 입력이 되는 철저한 인과적 선형 관계를 갖는다.
1. `/speckit.constitution`: 테스트 규칙, 컴포넌트 표준, 아키텍처 규칙 등 타협 불가능한 최상위 핵심 원칙을 제정한다.
2. `/speckit.specify`: 구체적인 기술 스택을 배제하고 구현하려는 목표와 기획 의도(What & Why)에만 충실하여 자연어 사양서를 작성한다.
3. `/speckit.plan`: 기획 명세를 바탕으로 채택할 기술 스택을 제시하면 개발 계획서(`plan.md`), 데이터 모델(`data-model.md`), 미지 영역 조사 리포트(`research.md`), 로컬 빌드 가이드(`quickstart.md`) 4대 문서를 자동으로 빌드한다.
4. `/speckit.tasks`: 선후 의존성을 정렬하고 병렬 마크(`[P]`) 및 검증 체크포인트를 결합하여 구체적인 작업 로드맵(`tasks.md`)을 작성한다.
5. `/speckit.taskstoissues`: 작업 로드맵을 GitHub 이슈(Issues)로 자동 변환하여 진행 사항을 추적하게 한다.
6. `/speckit.implement`: 헌법, 사양서, 계획서, 작업 리스트가 구비되었는지 검증하고, 로컬 컴파일러와 패키지 매니저를 구동시켜 순차적으로 코드를 직접 빌드한다.

### 3. 품질 향상을 위한 3가지 보조 검증 명령
개발 시작 전과 구현 파이프라인 진행 시 가동하는 품질 게이트(Quality Gate) 명령어다.
- `/speckit.clarify`: 본격적인 계획 단계 수립 전, 에이전트가 명세에서 누락되거나 모호한 점에 대해 질문(예: 한도 초과 예외 처리, 다중 선택 지원 등)을 던지도록 유도해 사양의 구멍을 메운다.
- `/speckit.analyze`: 파일을 고치지 않는 읽기 전용(Read-only) 분석 명령어로, 작성된 사양, 계획, 데이터 모델, 작업 목록을 교차 대조하여 설계 버그(기획엔 존재하나 구현 작업 미할당 등)를 발견한다.
- `/speckit.checklist`: 자연어로 이루어진 설명문을 단위 테스트 수준으로 검증하기 위한 테스트용 체크리스트를 자동 생성한다.

### 4. 에이전트 연동 및 스킬 모드 (Skills Mode)
Claude Code, GitHub Copilot, Gemini CLI, Cursor, Windsurf, Codex CLI, Qwen Code, Kiro CLI, Goose, Mistral Vibe, Devin for Terminal, Roo Code, IBM Bob 등 **29종의 대표적 코딩 에이전트**와 맞춤형 연동을 지원한다.
- **스킬 모드 설정**: Claude Code 및 Codex CLI 등 일부 에이전트는 일반 명령어 호출 대신 에이전트의 능력치(Skills) 파일 설치 형태로 동작한다. (예: `.claude/skills/` 디렉토리에 전용 스크립트 이식) 이 경우 초기화 시 다음과 같이 플래그를 추가한다.
  - `specify init . --integration claude --integration-options="--skills"`

### 5. 확장 기능 및 사전 설정
Spec Kit은 오픈소스 커뮤니티를 통해 70개 이상의 확장 모듈이 보급되어 있다.
- **확장 도구(Extensions)**: Jira/Azure DevOps 연동, 사후 코드 리뷰 자동화, OWASP 기반 LLM 위협 분석 모델링, V-모델 테스트 추적성 등 특화 명령어와 템플릿을 이식한다.
- **사전 설정(Presets)**: 기업 고유의 사내 보안 규격이나 코딩 지침에 맞게 기본 템플릿 구조를 강제로 재조정하는 옵션을 제공한다.

## 예시

- `phot-app` 구현을 설계하기 전 `.specify/memory/constitution.md` 파일에 "모든 기능은 독립형 라이브러리로 추상화하여 시작해야 한다"는 헌장을 규정해 둔다. 이후 에이전트는 코드 구현 도중 이 헌장을 수시로 점검하며 어플리케이션에 하드코딩하는 실수를 피한다.

## 충돌

- **소형 패치 작업에서의 오버헤드**: 단순 에러 수정이나 코드 한 줄 변경과 같은 마이너 패치 작업에 Spec Kit 파이프라인(6단계 설계)을 그대로 대입하는 것은 오버헤드(Overkill)가 되므로 상황에 맞춰 우회하는 하이브리드 운영이 필요하다. (출처: 바이브 코딩의 종말)

## 관련 노트

- [[사양 기반 개발 (Spec Driven Development)]]
- [[Vibe Coding과 Agentic Engineering]]
- [[Claude.md 운영 원칙]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Harness Engineering]]

