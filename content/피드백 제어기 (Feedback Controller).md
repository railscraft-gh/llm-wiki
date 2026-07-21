---
type: concept
status: draft
core: false
tags:
  - agent
  - feedback-loop
sources:
  - "raw/Loop Engineering Is NOT What Everybody Thinks It Is.md"
created: 2026-07-20
updated: 2026-07-20
---

# [[피드백 제어기]] (Feedback Controller)

## 한 줄 정의
확률적으로 동작하는 AI 에이전트(플랜트)의 동작을 제어하기 위해, 현재 상태(센서)와 목표값(설정값)의 격차(에러 신호)를 계산하여 도구(액추에이터)를 실행하는 제어 시스템 구조이다.

## 핵심 요지
- **제어공학 관점의 재정의**: 에이전트 자동화 루프 설계는 완전히 새로운 개념이 아니라, 기존 제어공학의 피드백 제어 시스템을 구축하는 것과 동일하다 [raw/Loop Engineering Is NOT What Everybody Thinks It Is.md].
- **확률성과 비결정성 제어**: 코딩 에이전트(Plant)는 매번 동일한 입력을 받아도 다른 결과물을 내놓기 때문에, 완벽하게 통제된 제어 메커니즘을 얹어야만 비용 낭비와 무한 폭주를 막을 수 있다.

## 상세
[[피드백 제어기]]는 다음의 5가지 핵심 요소로 구성된다:

1. **설정값 (Setpoint)**: 시스템이 도달하고 유지해야 하는 목표치. 루프 관점에서는 정량 측정이 가능한 명확한 목표를 뜻한다 (예: 테스트 슈트 에러 코드 0 및 타입 체크 통과 조건) [raw/Loop Engineering Is NOT What Everybody Thinks It Is.md].
2. **플랜트 (Plant)**: 제어 대상. 입력에 반응하지만 확률적으로 작동하여 결과를 예측하기 힘든 코딩 에이전트.
3. **액추에이터 (Actuator)**: 제어기가 플랜트에 물리적 작용을 가하는 수단. 에이전트 시스템에서는 파일 수정, 쉘 명령 실행, PR 생성 등이 해당한다.
4. **센서 (Sensor)**: 플랜트의 현재 상태를 관측하는 검증기. 테스트 슈트, 빌더, 린터 등이 센서 역할을 맡으며, 설정값과의 격차인 '에러 신호(Error Signal)'를 계산한다.
5. **제어기 (Controller)**: 에러 신호가 제로가 되도록 액추에이터를 통해 다음 명령을 발행하는 지능형 로직.

## 예시
- **TDD 기반 루프 연동**:
  1. Setpoint: `pytest tests/auth` 통과.
  2. Plant: `Qwen 3.5 Coder` 에이전트.
  3. Sensor: `pytest` 런타임 결과값.
  4. Controller: 에러 스택을 프롬프트로 가공하여 에이전트(Plant)에게 재시도 지시.

## 관련 노트
- [[루프 엔지니어링]]
- [[Agent Harness]]

