---
type: workflow
status: draft
core: false
tags:
  - llm
  - agent
  - ai-coding
aliases:
  - Plan Mode
  - 플랜 모드
  - OpenCode Plan agent
sources:
  - raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
  - raw/보리스_클로드코드_실무_사용법.md
  - raw/Claude-Code-실무활용법-보리스-관점-정리.md
  - raw/안드레_카파시_인터뷰_정리.md
  - raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
  - raw/opencode-masterclass-summary.md
  - raw/pi-coding-agent-overview.md
  - raw/cc101_axwith_ko.md
  - https://opencode.ai/docs/agents/
  - https://pi.dev/docs/latest/usage
created: 2026-05-06
updated: 2026-05-09
---

# Plan Mode 기반 AI 작업

## 한 줄 정의

Plan Mode 기반 AI 작업은 에이전트가 코드를 쓰기 전에 범위, 파일, 테스트, 위험 요소를 먼저 계획하게 하고 사람이 계획을 조정한 뒤 실행하는 workflow다.

## 핵심 요지

- 바로 구현시키면 에이전트는 숨은 요구사항과 위험을 놓치기 쉽다.
- 계획은 구현 파일 목록, 테스트 전략, 권한/보안 위험, 롤백 가능성을 포함해야 한다.
- 카파시가 말한 인간의 역할인 스펙 설계와 감독은 Plan Mode에서 가장 잘 드러난다.

## 상세

보리스는 Claude Code를 바로 실행시키기보다 먼저 계획을 세우게 한다고 설명한다. 예를 들어 "사용자 편집 기능을 추가하려고 한다. 어떤 파일을 수정해야 하고 어떤 테스트가 필요한지, 위험 요소는 무엇인지 정리해 달라"고 요청한 뒤 사람이 API 변경 최소화, 기존 컴포넌트 재사용, 권한 없는 사용자 테스트 추가 같은 제약을 보탠다. 출처: `raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md`, `raw/Claude-Code-실무활용법-보리스-관점-정리.md`

카파시 자료의 [[Thinking과 Understanding 분리]]와도 맞닿아 있다. 에이전트는 thinking, 즉 처리와 세부 구현을 잘할 수 있지만 무엇을 만들지, 어떤 품질 기준으로 검증할지, 어떤 시스템 모델을 유지할지는 사람이 이해 위에서 정해야 한다.

[[OpenCode]]도 같은 분리를 도구 모델로 제공한다. 공식 문서의 Plan agent는 분석과 제안에 적합하도록 기본 file edit와 bash 권한이 `ask`로 제한되고, Build agent는 실제 개발 작업에 쓰인다. 따라서 "먼저 Plan으로 질문과 구현 계획을 만들고, 합의된 계획만 Build/subagent에 넘긴다"는 절차를 권한 설계로 고정할 수 있다. 출처: `raw/opencode-masterclass-summary.md`, https://opencode.ai/docs/agents/

반대로 [[Pi Coding Agent]]는 built-in plan mode를 제공하지 않는다고 설명한다. Pi에서는 계획을 별도 파일에 쓰게 하거나 prompt template, skill, extension으로 팀의 계획 절차를 만드는 방식이 더 자연스럽다. 즉 Plan Mode는 특정 버튼이 아니라 "구현 전 질문, 파일 범위, 검증 기준을 먼저 고정하는 절차"로 이해하는 편이 도구 간 이식성이 높다. 출처: `raw/pi-coding-agent-overview.md`, https://pi.dev/docs/latest/usage

## 예시

1. 요구사항을 한 문단으로 설명한다.
2. 에이전트에게 수정 파일, 테스트, 위험, 확인 명령을 계획하게 한다.
3. 사람이 범위 축소, 금지 작업, 추가 검증 기준을 붙인다.
4. 계획이 합의되면 구현과 [[AI 코딩 에이전트 검증 전략]]을 실행한다.

## CC101 보강: Plan Mode 실전 가이드

### Plan Mode 켜는 방법

```bash
# 방법 1: 대화 중 전환
Shift+Tab (두 번 누르기)

# 방법 2: 명령어로 진입
/plan

# 방법 3: 시작할 때부터 Plan Mode로
claude --permission-mode plan
```

### 언제 Plan Mode를 쓰나?

다음 상황에서 Plan Mode를 사용한다. (출처: CC101)

- 여러 파일을 동시에 수정해야 할 때
- 데이터베이스 마이그레이션처럼 되돌리기 어려운 작업
- 처음 보는 코드베이스를 수정하기 전
- 아키텍처 변경처럼 큰 작업

### Plan Mode 사용 예시

```bash
# Plan Mode로 시작
claude --permission-mode plan

# 계획 수립 요청
> 인증 시스템을 JWT에서 OAuth2로 마이그레이션하는 계획을 세워줘

# Claude가 계획을 보여주면 검토
# 괜찮으면 일반 모드로 전환 후 실행
Shift+Tab  # Plan Mode → 일반 모드 전환
```

### 계획 후 일반 모드 전환 흐름

Plan Mode에서 "이렇게 하려고 하는데 맞나요?" 확인을 받은 후, 승인하면 그때 실행한다. 일반 모드로 전환하는 방법은 `Shift+Tab`을 두 번 누르거나 `/plan`을 다시 입력하는 것이다. (출처: CC101)

Plan Mode는 [[Claude Code 권한 설계]]의 3가지 권한 모드 중 하나이며, 파일 수정 없이 계획만 세우는 "안전 장치" 역할을 한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI 코딩 에이전트 검증 전략]]
- [[Thinking과 Understanding 분리]]
- [[Vibe Coding과 Agentic Engineering]]
- [[OpenCode]]
- [[Pi Coding Agent]]

