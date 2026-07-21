---
aliases:
- Plan Mode
- 플랜 모드
- OpenCode Plan agent
- Plan-Mode-기반-AI-작업
core: true
created: 2026-05-06
sources:
- Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!
- 보리스_클로드코드_실무_사용법
- Claude-Code-실무활용법-보리스-관점-정리
- 안드레_카파시_인터뷰_정리
- 꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!
- opencode-masterclass-summary
- pi-coding-agent-overview
- cc101_axwith_ko
- Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합
- https://opencode.ai/docs/agents/
- https://pi.dev/docs/latest/usage
- raw/pi-coding-agent-overview.md
- raw/opencode-masterclass-summary.md
- raw/Quartz-GitHub-Pages-Complete-Guide.md
- raw/GStack - Claude Code 가상 엔지니어링 팀 도구.md
- raw/Infisical_SSH_헤드리스_인증_가이드.md
- raw/cc101_axwith_ko.md
- raw/Quartz-Deploy-Guide.md
- raw/Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md
- raw/AI 네이티브 엔지니어링 조직 운영하기 - Code w Claude 발표.md
- raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
- raw/안드레_카파시_인터뷰_정리.md
- raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
- raw/Claude-Code-실무활용법-보리스-관점-정리.md
- raw/보리스_클로드코드_실무_사용법.md
status: evergreen
tags:
- llm
- agent
- ai-coding
type: workflow
updated: '2026-06-22'
---
# Plan Mode 기반 AI 작업

## 한 줄 정의

Plan Mode 기반 AI 작업은 에이전트가 코드를 쓰기 전에 범위, 파일, 테스트, 위험 요소를 먼저 계획하게 하고 사람이 계획을 조정한 뒤 실행하는 workflow다.

## 핵심 요지

- 바로 구현시키면 에이전트는 숨은 요구사항과 위험을 놓치기 쉽다.
- 계획은 구현 파일 목록, 테스트 전략, 권한/보안 위험, 롤백 가능성을 포함해야 한다.
- 카파시가 말한 인간의 역할인 스펙 설계와 감독은 Plan Mode에서 가장 잘 드러난다.

## 상세

보리스는 Claude Code를 바로 실행시키기보다 먼저 계획을 세우게 한다고 설명한다. 예를 들어 "사용자 편집 기능을 추가하려고 한다. 어떤 파일을 수정해야 하고 어떤 테스트가 필요한지, 위험 요소는 무엇인지 정리해 달라"고 요청한 뒤 사람이 API 변경 최소화, 기존 컴포넌트 재사용, 권한 없는 사용자 테스트 추가 같은 제약을 보탠다.

카파시 자료의 [[Thinking과 Understanding 분리]]와도 맞닿아 있다. 에이전트는 thinking, 즉 처리와 세부 구현을 잘할 수 있지만 무엇을 만들지, 어떤 품질 기준으로 검증할지, 어떤 시스템 모델을 유지할지는 사람이 이해 위에서 정해야 한다.

[[OpenCode]]도 같은 분리를 도구 모델로 제공한다. 공식 문서의 Plan agent는 분석과 제안에 적합하도록 기본 file edit와 bash 권한이 `ask`로 제한되고, Build agent는 실제 개발 작업에 쓰인다. 따라서 "먼저 Plan으로 질문과 구현 계획을 만들고, 합의된 계획만 Build/subagent에 넘긴다"는 절차를 권한 설계로 고정할 수 있다.

반대로 [[Pi Coding Agent]]는 built-in plan mode를 제공하지 않는다고 설명한다. Pi에서는 계획을 별도 파일에 쓰게 하거나 prompt template, skill, extension으로 팀의 계획 절차를 만드는 방식이 더 자연스럽다. 즉 Plan Mode는 특정 버튼이 아니라 "구현 전 질문, 파일 범위, 검증 기준을 먼저 고정하는 절차"로 이해하는 편이 도구 간 이식성이 높다.

[[Ralph Loop]]의 Spectrum Development도 같은 원칙을 더 강하게 밀어붙인다. 브레인스토밍, phase 분할, 실행, 검증을 분리하고 각 phase를 별도 headless 세션에 넘기기 전에 입력 스펙과 완료 기준을 고정한다. 이때 계획은 자동화를 위한 대기열이므로, 각 phase가 독립적인 검증 명령과 산출물을 가져야 한다.

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

다음 상황에서 Plan Mode를 사용한다.

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
Shift+Tab # Plan Mode → 일반 모드 전환
```

### 계획 후 일반 모드 전환 흐름

Plan Mode에서 "이렇게 하려고 하는데 맞나요?" 확인을 받은 후, 승인하면 그때 실행한다. 일반 모드로 전환하는 방법은 `Shift+Tab`을 두 번 누르거나 `/plan`을 다시 입력하는 것이다.

Plan Mode는 [[Claude Code 권한 설계]]의 3가지 권한 모드 중 하나이며, 파일 수정 없이 계획만 세우는 "안전 장치" 역할을 한다.

### `opusplan` 하이브리드 계획 모드
*   **작동 방식**: 계획 수립 단계에서는 정교하고 추론 성능이 극대화된 **Opus** 모델을 호출하고, 승인 후 코드를 실제 작성/실행하는 단계에서는 처리 속도가 빠르고 저렴한 **Sonnet** 모델로 자동 전환하는 하이브리드 세션 제어 모드다.
*   **활성화 명령어**: `/model opusplan`을 입력하여 구동하며, 속도, 비용, 정교함의 3대 요소를 최적으로 조화시키는 오케스트레이션 기법이다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI 코딩 에이전트 검증 전략]]
- [[Thinking과 Understanding 분리]]
- [[Vibe Coding과 Agentic Engineering]]
- [[OpenCode]]
- [[Pi Coding Agent]]
- [[매퍼코 3스킬 워크플로우]]
- [[GStack]]
- [[Ralph Loop]]
- [[강한 모델로 덜 헤매기]]
- [[Andrew Ng 4 에이전틱 디자인 패턴]]

## 출처

- Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!
- 보리스_클로드코드_실무_사용법
- Claude-Code-실무활용법-보리스-관점-정리
- 안드레_카파시_인터뷰_정리
- 꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!
- opencode-masterclass-summary
- pi-coding-agent-overview
- cc101_axwith_ko
- [[Ralph Loop]] - AI 코딩 자율 워크플로우 Spectrum Development 통합
- https://opencode.ai/docs/agents/
- https://pi.dev/docs/latest/usage
