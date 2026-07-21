---type: concept
status: needs-review
core: false
tags:
  - llm
  - agent
  - cursor
  - skill
  - harness-engineering
aliases:
  - Superpowers
  - Cursor Superpowers
  - Cursor 스킬 플러그인
  - Cursor-Superpowers-플러그인
sources:
  - raw/Cursor에서 Superpowers 플러그인 쓰는 법 — 상세 정리-ko.md
  - raw/superpowers-brainstorming.md
created: 2026-06-19
updated: 2026-06-30
---
# Cursor Superpowers 플러그인

## 한 줄 정의

Cursor Superpowers 플러그인은 AI 에이전트에게 스킬(skill)을 붙여 계획 수립, 디버깅, 테스트, 검증 같은 절차를 자동으로 따르게 만드는 행동 제어 레이어다.

## 핵심 요지

- Superpowers의 핵심은 “에이전트를 더 똑똑하게” 만드는 게 아니라, 에이전트가 자주 저지르는 실수를 줄이도록 절차를 강제하는 데 있다.
- Cursor에서는 `/add-plugin superpowers`로 설치하여 구동한다.
- 에이전트가 대화 맥락을 보고 상황을 분류한 뒤, 맞는 스킬을 읽고 그 절차를 따른다.
- 사용자가 직접 지시한 내용이 최우선이고, 그다음이 Superpowers 스킬, 마지막이 시스템 프롬프트다.
- 스킬은 크게 Rigid와 Flexible로 나뉘며, 전자는 절차 준수가 핵심이고 후자는 원칙 적용이 핵심이다.

## 상세

### 1. Superpowers가 해결하려는 문제

AI 에이전트는 편하지만, 가만두면 쉽게 다음처럼 흘러간다.

- 일단 코드부터 쓰기
- 원인 분석 없이 추측으로 수정하기
- 완료 검증 없이 “다 됐다”고 선언하기

Superpowers는 이런 흐름을 막기 위해 에이전트에 스킬을 붙여서 행동 규칙을 주입한다. 즉, 단순한 프롬프트 팁이 아니라 하네스(harness) 성격의 제어층이다.

이 관점은 [[Harness Engineering]]과 맞닿아 있다. 모델의 출력을 직접 믿는 대신, 모델 바깥의 규칙과 검증 루프로 에이전트를 묶어두는 방식이기 때문이다.

### 2. Cursor에서 설치 및 실행 방법

#### 설치 및 로드
Cursor 에이전트 환경에서 플러그인을 설치하려면 아래 명령어를 입력한다.
```bash
/add-plugin superpowers
```

#### 키스트로크 및 실행
설치 후에는 에이전트가 대화 내용을 보고 적절한 스킬을 스스로 읽어온다. 특정 상황에서 수동으로 스킬을 지정하여 강제 실행하고 싶을 때는 다음 방식을 사용한다.
- **`@` 멘션 기능 활용**: Cursor Chat(`Cmd+L` / `Ctrl+L`) 또는 Composer(`Cmd+I` / `Ctrl+I`) 입력창에서 `@` 키를 누르고, 불러오고자 하는 특정 스킬의 `SKILL.md` 파일(예: `@test-driven-development` 또는 `@systematic-debugging`)을 선택해 컨텍스트에 직접 주입한다.
- **경로 지정**: 스킬이 위치한 로컬 디렉터리 경로(예: `.gemini/config/plugins/superpowers/skills/brainstorming/SKILL.md`)를 파일 참조 형태로 직접 Composer 창이나 Chat 창에 드래그 앤 드롭하거나 주입한다.

### 3. 스킬 우선순위 및 Custom Prompt 설정

#### 우선순위
1. 사용자의 직접 지시
2. Superpowers 스킬
3. 기본 시스템 프롬프트

예를 들어 사용자가 “TDD 쓰지 마”라고 명시하면, 스킬이 TDD를 권장하더라도 사용자의 지시가 우선한다. 이 구조는 스킬이 절대 규칙이 아니라, 사용자 지시가 비어 있을 때 기본값으로 작동하는 레이어라는 뜻이다.

#### Custom Prompt Settings
Superpowers 각 스킬은 에이전트에게 강제할 행동 지침을 담고 있다.
- **`brainstorming` 스킬**: `"Do not start implementation until the user explicitly approves the design document"` 프롬프트 규칙이 설정되어 있어 에이전트가 무작정 코드 작성으로 뛰어드는 것을 제어한다.
- **`systematic-debugging` 스킬**: `"Never attempt a fix before reproducing and isolating the root cause under a failing test"` 규칙을 강제하여 성급하게 코드를 수정하는 실수를 막는다.
- **`verification-before-completion` 스킬**: `"Before claiming the task is complete, you must run verification commands and prove correctness using output logs"` 규칙을 강제하여 확인 없이 완료 선언을 하지 못하게 통제한다.

이 부분은 [[Claude Code 스킬 관리]]와도 연결된다. 둘 다 스킬이 늘어날수록 컨텍스트 비용이 생기지만, 잘 쓰면 작업 루틴을 안정화한다는 공통점이 있다.

### 4. Rigid 스킬과 Flexible 스킬

#### Rigid 스킬

엄격한 절차를 그대로 따라야 하는 유형이다.

예:

- `test-driven-development`
- `systematic-debugging`
- `verification-before-completion`

특징:

- 순서를 생략하면 안 된다.
- 프로토타입 같은 합의된 예외를 빼면 절차 준수가 필요하다.
- 버그 수정, 테스트, 완료 검증에 특히 맞는다.

#### Flexible 스킬

원칙은 지키되 맥락에 따라 유연하게 적용하는 유형이다.

예:

- `brainstorming`
- `writing-plans`
- `finishing-a-development-branch`

특징:

- 절대 규칙보다 방향성과 기준이 중요하다.
- 상황에 맞게 해석할 수 있다.
- 계획 수립, 정리, 전환 작업에 적합하다.

### 5. 주요 스킬과 사용 시점

#### brainstorming

- 구현 시작 전 아이디어를 구체적인 설계 명세서(Spec)로 구체화하는 스킬. (상세 내용은 [[Brainstorming 스킬 운영 원칙]] 참조)
- **디자인 승인 하드게이트**: 사용자의 명시적 설계 승인을 받기 전까지는 구현 및 코딩 작업을 시작하지 않는 절대 규칙을 강제한다.
- **적시 비주얼 컴패니언 (Just-in-Time [[Visual Companion]])**: 레이아웃이나 다이어그램 등 시각적 검토가 진짜로 유용한 경우에만 단독 메시지로 비주얼 툴을 제안한다.
- 에이전트가 생각 없이 바로 코딩으로 뛰어드는 것을 막는 대표적인 Flexible 스킬이다.

#### writing-plans

- 스펙이 있을 때 구현 계획서를 작성하는 스킬
- 계획 문서는 `docs/superpowers/plans/날짜-기능명.md`에 저장된다고 설명한다.
- 구현 전에 계획을 문서화하는 단계다.

#### subagent-driven-development

- 같은 세션에서 계획을 실행할 때 쓴다.
- 작업마다 새 서브에이전트를 띄우고 스펙 검토 → 품질 검토 2단계 리뷰를 한다.
- 서브에이전트를 쓸 수 있으면 `executing-plans`보다 더 권장된다고 본다.

#### executing-plans

- 이미 작성된 계획을 별도 세션에서 실행할 때 쓰는 방식이다.
- 체크포인트 중심으로 진행한다.

#### test-driven-development

- 구현 전에 실패하는 테스트부터 작성하는 스킬이다.
- Rigid 스킬이라 예외 없이 절차를 따라야 한다.
- 프로토타입, 설정 파일 등 일부 합의된 예외는 가능하다.

#### systematic-debugging

- 버그나 테스트 실패 상황에서 사용하는 스킬이다.
- 추측으로 고치지 말고 원인 조사 후 수정하라는 원칙이 핵심이다.
- “일단 이거 바꿔볼까요?” 식의 성급한 수정 방식을 막는다.

#### verification-before-completion

- “다 됐다”라고 말하기 전에 실제 명령을 실행하고 출력으로 증명하는 스킬이다.
- 확인도 안 하고 완료 선언하는 것을 방지한다.

#### using-git-worktrees

- 기능 브랜치를 격리할 때 쓰는 스킬이다.
- worktree 생성과 `.gitignore` 안전 확인까지 포함한다.

#### finishing-a-development-branch

- 구현 완료 + 테스트 통과 후 사용하는 스킬이다.
- 머지 / PR / 보관 / 폐기 중 선택지를 제시하는 성격이다.

#### requesting-code-review / receiving-code-review

- 코드 리뷰 요청과 리뷰 수용에 쓰는 스킬이다.
- code-reviewer 서브에이전트가 변경사항만 집중적으로 본다.
- 리뷰 의견을 맹목적으로 따르지 말고 코드베이스 기준으로 검증 후 반영해야 한다.

#### dispatching-parallel-agents

- 서로 독립인 문제가 2개 이상일 때 쓰는 스킬이다.
- 도메인별로 에이전트를 분리해 병렬 처리한다.

#### writing-skills

- 새 스킬을 만들 때 사용하는 스킬이다.
- 스킬 자체를 “문서화된 TDD”처럼 다룬다고 설명한다.

### 6. 같이 쓰면 좋은 방법론 및 MCP 환경 설정 연계

#### RTK
- CLI 출력이 길어질 때 컨텍스트에 넣기 전에 압축해주는 도구로 소개한다.
- 토큰을 60~90% 절감한다고 설명한다.
- 설치 예시: `rtk init -g --agent cursor`

#### Compound Engineering
- Plan → Work → Review → Compound 루프를 강조한다.
- 작업을 끝내고 끝내는 게 아니라, 다음 작업에 학습을 축적하는 방식이다.
- Cursor에서는 `.cursorrules`에 수동으로 넣어야 한다고 적는다.

#### MCP Environment Configs
- Cursor에서 MCP 환경 설정은 `Cursor Settings` -> `Features` -> `MCP` 메뉴를 통해 수행한다.
- 여러 MCP 서버를 등록하면 에이전트 구동 시 비대한 JSON 스키마 로딩으로 인해 `Context Tax`가 발생하므로, 핵심 로컬 도구 위주로만 연동 설정을 유지할 것을 권장한다.

## 실전 해석

이 글을 위키 관점에서 보면 Superpowers는 단순한 Cursor 플러그인이 아니라, 에이전트에게 “언제 설계하고, 언제 멈추고, 언제 검증할지”를 주입하는 workflow layer다.

즉, 핵심은 스킬의 개수 자체가 아니라 다음 세 가지다.

- 어떤 상황에서 어떤 스킬을 켜지
- 사용자 지시와 스킬 충돌 시 무엇을 우선할지
- 완료 전 검증과 디버깅을 어떻게 강제할지

이 점에서 이 노트는 [[AI 하네스 최소화]]와도 연결된다. 스킬을 많이 쌓는 것보다, 반복적으로 쓰는 절차를 명확하게 고정하는 편이 더 중요할 수 있다.

## 충돌

- **단일 출처 기반**: 이 노트는 블로그 글 하나를 바탕으로 정리한 것이다. Cursor의 플러그인 동작, 스킬 목록, 설치 명령, RTK/Compound Engineering 연계는 버전이나 생태계 변화에 따라 달라질 수 있어 재검증이 필요하다.
- **스킬 우선순위 해석**: “사용자 지시 > Superpowers > 시스템 프롬프트”는 작성자의 설명을 요약한 것이므로, 실제 Cursor 환경의 세부 우선순위와 완전히 동일한지 확인이 필요하다.

## 관련 노트

- [[Harness Engineering]]
- [[Claude Code 스킬 관리]]
- [[AI 하네스 최소화]]
- [[Agent Harness]]
- [[Context Engineering]]

