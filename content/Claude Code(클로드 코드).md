---
type: tool
status: needs-review
core: false
tags:
  - tool
  - claude-code
  - ai-coding
aliases:
  - Claude Code
  - 클로드 코드
sources:
  - raw/You don’t need thinking levels in Claude Code. You need Planning and Goal modes..md
created: 2026-07-24
updated: 2026-07-24
---

# [[Claude Code]](클로드 코드)

## 한 줄 정의

터미널 CLI 및 에디터 플러그인 형태로 제공되어, 사고 수준 조절 및 계획(Planning)·목표(Goal) 모드를 통해 개발 환경을 자율적으로 통제하는 Anthropic의 공식 AI [[코딩 에이전트]] 플랫폼이다.

## 핵심 요지

- **사고 노력(Thinking Effort)**: 추론 시점 계산 곡선(Test-time compute curve) 조절 장치를 통해 `low`, `medium`, `high`, `xhigh`, `max` 수준으로 에이전트의 사고 깊이를 동적으로 제어한다.
- **[[계획 모드(Planning Mode)]]**: 성급한 소스 코드 수정(Edit)을 차단하고 "탐색 → 계획 → 승인 → 구현" 단계를 분리하여 리스크를 예방한다.
- **목표 모드(Goal Mode)**: 평가기(Evaluator) 메커니즘을 사용하여 정량적 완료 조건을 클리어할 때까지 백그라운드에서 자율 반복 작업을 수행한다 (v2.1.139+ 도입).
- **비용 최적화 파이프라인**: 계획(Planning) 단계는 사고력이 우수한 Opus 모델을 활용하고, 실제 작성(Execution) 단계는 가성비가 높은 Sonnet 모델로 전환하는 `opusplan` 등의 파이프라인을 지원한다.

## 설치/실행

### 1. 사고 노력 레벨 조정
- **터미널 CLI**: `/effort` 입력 후 방향키(`←/→`)로 레벨을 선택하고 `Enter`를 누른다. (Haiku 모델은 제어 미지원)
- **VS Code 확장 UI**: 하단 `[/]` 모양 아이콘 클릭 후 레벨 팝업 선택.

### 2. 계획 모드 활성화
- **터미널 CLI**: `/plan` 명령 실행 또는 단축키 `Alt` + `Shift`를 사용하여 모드 순환.
- **단축키**: `Ctrl` + `G`를 통해 코드 반영 전 `/temp` 스테이징에 생성된 임시 계획 문서를 에디터에서 사전에 검증할 수 있다.

### 3. 목표 모드 실행
- **터미널 CLI**: `/goal <목표문>` 명령을 실행하여 자율 루프 구동. (최대 4,000자 제약)

## 핵심 명령

- `/effort`: 에이전트의 추론 깊이 수준 동적 조절.
- `/plan`: 소스 코드를 건드리지 않고 계획 수립만 요구하는 계획 모드 진입.
- `/goal`: 정량적 검증 조건 기반의 지속 자동화 작업(Persistent-work) 시작.
- `/loop`: 정지 훅(Stop hooks) 없이 일정한 반복 주기를 유지하는 단순 루프 실행.

## 한계

- **비용 곡선의 비선형성**: `max` 사고 레벨을 지정할 시 지능이 선형적으로 상승하는 것이 아니라 토큰 소모량(Opus 4.7 기준 `medium` 대비 약 4배)만 기하급수적으로 증가하는 포화 곡선(Saturation curve)을 보이므로 무조건적인 `high`/`max` 설정은 지양해야 한다.
- **목표 모드 실패 요인**: 채점 가능한 구체적인 테스트 명령어 등 정량적인 검증 조건이 없을 때, 목표 모드는 무의미한 에러 루프에 빠져 비용만 낭비할 우려가 크다.

## 관련 노트

- [[계획 모드(Planning Mode)]]
- [[Codex(코덱스)]]
- [[10-80-10 법칙(10-80-10 Rule)]]
- [[Claude Code 스킬 관리]]
- [[Claude Code 세션 운영 명령어]]
- [[Claude Code 오케스트레이션]]

## 출처

- `raw/You don’t need thinking levels in Claude Code. You need Planning and Goal modes..md`
