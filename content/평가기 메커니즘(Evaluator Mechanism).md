---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - workflow
  - verification
  - evaluation
aliases:
  - Evaluator Mechanism
  - 평가기 메커니즘
  - 평가기
  - Goal Mode
sources:
  - raw/You don’t need thinking levels in Claude Code. You need Planning and Goal modes..md
created: 2026-07-24
updated: 2026-07-24
---

# 평가기 메커니즘(Evaluator Mechanism)

## 한 줄 정의

AI 에이전트가 목표를 달성할 때까지 인간의 수동 피드백 없이, 매 작업 단계의 실행 결과를 관찰하고 완료 조건(Exit Criteria)의 충족 여부를 정량적으로 검증 및 통제하여 자율적인 디버깅 루프를 가동하는 독립 검증 장치.

## 핵심 요지

- **백그라운드 자동화 루프**: 사용자가 결과를 일일이 실행하고 에러 메시지를 복사-붙여넣기 하던 수동 중개 흐름을, `수행 -> 자체 평가기 검증 -> 실패 시 자동 수정` 구조의 완전 자율화 루프로 바꾼다 (근거).
- **이원화된 모델 구조**: 코드를 직접 수정하는 헤비한 메인 모델(예: Claude Opus/Sonnet)과 별도로, 작업 완료 여부만을 빠르게 판정하는 가벼운 별도의 경량 AI 모델(Evaluator)을 활용하여 전체 연산 시간과 토큰 비용을 최적화한다 (동작 구조).
- **명확한 검증 표면(Verification Surface)**: 평가기가 성공/실패 여부를 객관적이고 기계적으로 채점할 수 있는 구체적인 정량적 수단(예: 단위 테스트 파일 실행, Exit Code 0 획득 등)을 필수로 요구한다 (근거).
- **종료 및 중단 수칙의 필수성**: 외부 크레덴셜 누락이나 복잡한 충돌로 인해 에이전트가 무의미하게 회전하는 폭주(Scope creep / Infinite loop)를 막기 위해, 명확한 범위(Boundaries)와 중단 수칙(Stop conditions)을 평가 규칙에 주입해야 한다 (반례).

## 상세

### 작동 프로세스
1. **목표 수립**: 개발자가 최종 Outcome, 검증 방법(Evidence), 제약 사항(Constraints), 영역 범위(Boundaries), 중단 조건(Stop condition)을 기술하여 에이전트를 목표 모드(`/goal`)로 구동한다.
2. **코드 수정**: 메인 에이전트 모델이 1차 코드 수정을 수행한다.
3. **자체 평가(Observe & Verify)**: 수정이 완료되는 즉시 평가기 모델이 트리거되어 지정된 검증 스크립트(예: `pytest`, `npm test`)를 백그라운드에서 작동시킨다.
4. **분기 처리**:
   - **성공 시**: 검증이 완수되면 루프를 안전하게 멈추고 대화창의 통제권을 사용자에게 반환한다.
   - **실패 시**: 평가기는 발생한 에러 로그와 실패 원인을 수집하여 에이전트에게 전달하고, 에이전트는 사용자의 개입 없이 즉시 2차 수정 연산에 돌입한다.

### 성공적인 목표 설정을 위한 5대 요소 (Codex/[[Claude Code]] 템플릿)
평가기가 올바르게 작동하려면 다음의 5가지 축이 갖춰져야 한다.

```
/goal <desired end state> verified by <specific evidence>   
while preserving <constraints>. Only modify <boundaries>.   
If blocked by <condition>, stop and report evidence.
```

1. **최종 결과(Outcome)**: 도달하고자 하는 완벽한 상태 정보.
2. **검증 방식(Verification surface)**: 평가기가 실행하고 판독할 정량적 수단 (예: `pytest tests/auth/test_login.py`).
3. **제한 사항(Constraints)**: 작업 도중 망가뜨려서는 안 되는 기존 시스템 제약.
4. **범위 설정(Boundaries)**: 접근을 허용하거나 수정해도 되는 디렉터리 경로.
5. **중단 수칙(Stop condition)**: 인간의 현장 개입이 필요할 때 쓸데없는 토큰 소모를 멈추게 하는 가드레일.

## 예시

- **[[Claude Code]] v2.1.139+ 목표 모드 연동**
  개발자가 터미널 창에 다음과 같이 입력한다.
  ```bash
  /goal Make tests/auth/test_login.py pass on the current branch, verified by running pytest tests/auth/test_login.py with exit code 0. Preserve the existing public API. Only modify files under src/auth. If locally unavailable credentials block it, stop and report.
  ```
  이 지시를 받으면 평가기 메커니즘은 백그라운드에서 `pytest`를 반복 실행하며 테스트 결과가 성공할 때까지 클로드에게 자율 디버깅을 시킨다. 만약 로컬에 없는 데이터베이스 패스워드가 막힌다면 무한 루프 돌지 않고 즉각 정지한다.

## 충돌

- **주관적 가독성 개선 vs 기계 판정 불가능성**
  - *충돌*: 사용자가 "가독성이 높게 코드를 정리해 줘"라고 목표를 내렸을 때, 평가기는 이를 기계적으로 검증할 테스트 코드나 수단이 없다.
  - *결과*: 평가기가 성공 기준을 모호하게 감지하므로, 제한 시간이 다할 때까지 코드의 겉만 무의미하게 깎는 "의미 없는 에러 회전 루프"에 빠져 막대한 예산 낭비를 야기한다. 따라서 주관적 성격의 리팩터링은 목표 모드 대신 대화형 순차 모드를 적용해야 한다.

## 관련 노트

- [[추론 시점 계산 곡선(Test-time Compute Curve)]]
- [[검증_루프]]
- [[에이전틱 자동화 루프 패턴]]

## 출처

- `raw/You don’t need thinking levels in Claude Code. You need Planning and Goal modes..md`
