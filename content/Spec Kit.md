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
created: 2026-06-09
updated: 2026-06-09
---

# Spec Kit

## 한 줄 정의

GitHub이 사양 기반 개발(Spec Driven Development) 워크플로우를 AI 코딩 에이전트에 이식하기 위해 개발한 오픈소스 부트스트랩 CLI 도구이자 프롬프트 템플릿 패키지이다. (출처: 바이브 코딩의 종말)

## 핵심 요지

- **90k+ 스타 저장소**: 최근 AI 에이전트 코딩 생태계에서 가장 빠르게 성장하는 오픈소스 툴킷 중 하나이다. (스타 9만 개, 포크 8천 개 이상)
- **`specify` CLI와 부트스트랩**: 파이썬 3.11 이상 환경에서 작동하며, Astral의 `uv` 패키지 관리자를 통해 설치하여 프로젝트에 `.specify/` 환경을 구축한다.
- **아키텍처 헌장(Constitution)**: 에이전트가 개발 도중 절대 위반하지 말아야 할 아키텍처 규칙과 디자인 표준을 명시한 헌장 파일을 에이전트에 강제하여 설계적 탈선을 완벽히 제어한다.
- **6+3 명령 체계**: 6단계의 순차적 핵심 구현 명령어와 품질을 보증하는 3가지 선택적 분석/명확화 명령어 체계를 갖춘다.

## 상세

### 1. 설치 및 프로젝트 부트스트랩
`specify` CLI는 파이썬 기반이며 `uv` 매니저를 통한 설치가 강력히 권장된다.
- **영구 설치**: `uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.8.4`
- **일회성 초기화**: `uvx --from git+https://github.com/github/spec-kit.git@v0.8.4 specify init my-project`
- **프로젝트 구성**: 초기화 완료 시 생성되는 `.specify/` 디렉토리 하위의 구조는 다음과 같다.
  - `memory/`: 전역 아키텍처 헌장(`constitution.md`)이 위치한다.
  - `scripts/`: 자동화에 쓰이는 bash/PowerShell 스크립트가 들어간다.
  - `specs/`: 기능 명세 단위의 사양이 보관된다.
  - `templates/`: 에이전트 프롬프트 템플릿이 정의된다.

### 2. 6가지 핵심 구현 명령
Spec Kit의 실행 명령들은 앞 단계의 결과물이 다음 단계의 입력이 되는 인과적 선형 관계를 갖는다.
1. `/speckit.constitution`: 테스트 규칙 및 컴포넌트 표준 등 프로젝트 불변 원칙을 정의한다.
2. `/speckit.specify`: 기술 스택 설명을 배제하고 오직 기능의 목적과 대상만을 기술한 사양서를 생성한다.
3. `/speckit.plan`: 사양을 충족하기 위한 구체적인 스택 계획(`plan.md`), 데이터 모델(`data-model.md`), 기술적 리서치 이력(`research.md`), 퀵스타트 가이드를 도출한다.
4. `/speckit.tasks`: 선후 의존성을 정렬하고 병렬 마커(`[P]`)와 품질 체크포인트를 포함한 작업 로드맵(`tasks.md`)을 생성한다.
5. `/speckit.taskstoissues`: 작업 목록을 GitHub Issue로 자동 변환해 협업 보드로 보낸다.
6. `/speckit.implement`: 정렬된 의존성 순서에 따라 에이전트가 로컬 컴파일러/패키지(npm 등)를 동작시켜 실제 코드를 생성한다.

### 3. 품질 향상을 위한 3가지 선택적 명령
품질 게이트(Quality Gate) 역할을 하는 세 가지 추가 명령어다.
- `/speckit.clarify`: 계획 단계 전, 에이전트가 요구사항의 빈틈에 대해 질문(예: 모바일 지원 여부, 데이터 제한 등)을 던져 사양의 모호성을 제거한다.
- `/speckit.analyze`: 코드 수정 없이 사양, 계획, 데이터 모델, 작업 목록을 비교 분석하여 빠진 요구사항이나 설계 어긋남을 잡아내는 정적 설계 분석기다.
- `/speckit.checklist`: 사양이 완성도 높게 기술되었는지 사전에 검증하기 위한 자연어 테스트 체크리스트를 도출한다.

### 4. 에이전트 연동 및 스킬 모드
Claude Code, GitHub Copilot 등 29개 이상의 도구 연동을 지원한다. 일부 에이전트는 일반 프롬프팅이 아니라 에이전트의 스킬 라이브러리 형태로 결합을 수행하기 때문에 초기화 시 옵션을 부여해야 한다.
- **예시**: `specify init . --integration claude --integration-options="--skills"`

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

