---
aliases:
  - Spectrum Development
  - Spectrum Workflow
  - build-loop
core: false
created: 2026-05-14
sources:
  - Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합
  - GStack - Claude Code 가상 엔지니어링 팀 도구
  - raw/AI 네이티브 엔지니어링 조직 운영하기 - Code w Claude 발표.md
  - raw/GStack - Claude Code 가상 엔지니어링 팀 도구.md
  - raw/Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md
status: evergreen
tags:
  - llm
  - agent
  - ai-coding
  - orchestration
type: workflow
updated: 2026-07-10
---

# Ralph Loop

## 한 줄 정의
Ralph Loop는 Spectrum Development의 브레인스토밍, 단계 분할, TDD 실행, 검증 흐름을 headless coding agent 세션으로 반복 실행하는 오케스트레이션 workflow다.

## 핵심 요지
- Spectrum Development는 "Plan before Doing" 원칙으로 브레인스토밍 → 계획 → 실행 → 리뷰와 검증을 분리한다.
- GStack은 의도 명확화와 의사결정, GSD는 phase 분할과 context 관리, SuperPower는 TDD 실행 백본, Ralph Loop는 phase 실행 큐를 맡는다.
- 오케스트레이터는 모든 작업 내용을 품지 않고 phase 상태와 결과만 추적해 context 소모를 줄인다.
- greenfield 대형 프로젝트에는 전체 통합이 유용할 수 있지만, brownfield 기능 추가에는 부분 적용이 더 현실적이다.
- LLM 컨텍스트 윈도우 사용률이 50%를 초과할 경우 정보 손실 및 누락(Context rot)으로 인한 에이전트 정확도 급락 현상이 유발되므로, 대형 작업을 GSD 기반의 개별 Phase로 분할한 뒤 각 Phase별로 독립적인 무상태(stateless) headless 세션을 새롭게 구동하여 오케스트레이터의 윈도우 사용률을 10% 이하로 제어한다. (출처: Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md)
- 실무 라이브 데모에서 16개 Phase 단위로 구성된 복잡한 프로젝트를 Ralph Loop build-loop 스크립트를 통해 밤새(overnight) 백그라운드에서 100개 이상의 headless 세션으로 분할 실행하여, 빌드 대기열 전체를 사람 개입 없이 성공적으로 코드화(Codified) 완료했다. (출처: Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md)

## 상세

raw 자료는 Ralph Loop를 `[GStack] → [GSD] → [SuperPower × Ralph Loop]` 구조로 설명한다. 먼저 [[GStack]]으로 만들려는 제품의 의도와 스펙을 다듬고, GSD로 큰 스펙을 여러 phase로 쪼갠다. 이후 Ralph Loop가 완료되지 않은 phase를 찾아 `claude -p "프롬프트"` 같은 headless 세션에 위임하고, 각 세션은 SuperPower의 테스트 우선 실행 방식으로 구현한다.

이 workflow의 핵심 가정은 긴 대화가 누적될수록 agent 정확도가 떨어질 수 있으므로, 각 실행 세션을 신선한 context에서 시작해야 한다는 것이다. raw는 context window의 50%를 넘으면 context rot이 커진다고 설명하지만, 이는 범용 법칙이라기보다 해당 영상에서 제시한 운영 기준으로 다룬다. 따라서 실제 적용 시에는 프로젝트 크기, 모델, 테스트 비용, 병렬 충돌 가능성을 함께 봐야 한다.

Ralph Loop는 [[병렬 에이전트 세션 운영]]의 자동화된 변형으로 볼 수 있다. 다만 병렬성을 늘리는 것 자체가 목적은 아니다. 각 phase가 독립적인 파일 범위, 입력 스펙, 검증 명령, 완료 산출물을 가져야 하고, 실패한 phase를 사람이 추적할 수 있어야 한다.

### 4-2. 컨텍스트 로트(Context Rot) 예방을 위한 50% 분리 규칙
- **50% 한계선**: 코딩 에이전트와의 장기 대화에서 컨텍스트 소모율이 50%가 넘어가면, 에이전트의 이전 기억 왜곡이나 툴 호출 정합성 붕괴(Context rot)가 지수함수적으로 증가한다.
- **Headless 세션 교체**: Ralph Loop는 이 문제를 해결하기 위해 오케스트레이터 세션을 극도로 가볍게 유지(대화 사용량 10% 내외)하고, 구현에 투입되는 `claude -p` headless 세션을 매 Phase마다 새롭게 리스폰(respawn)한다. 각 Phase는 TDD 테스트 파일, 파일 범위, 실행 명령어를 명확히 제한받는다. (출처: Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md)

### 4-2. 컨텍스트 로트(Context Rot) 예방을 위한 50% 분리 규칙
- **50% 한계선**: 코딩 에이전트와의 장기 대화에서 컨텍스트 소모율이 50%가 넘어가면, 에이전트의 이전 기억 왜곡이나 툴 호출 정합성 붕괴(Context rot)가 지수함수적으로 증가한다.
- **Headless 세션 교체**: Ralph Loop는 이 문제를 해결하기 위해 오케스트레이터 세션을 극도로 가볍게 유지(대화 사용량 10% 내외)하고, 구현에 투입되는 `claude -p` headless 세션을 매 Phase마다 새롭게 리스폰(respawn)한다. 각 Phase는 TDD 테스트 파일, 파일 범위, 실행 명령어를 명확히 제한받는다. (출처: Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md)

## 예시

- greenfield 앱: GStack으로 제품 스펙을 좁힘 → GSD로 10개 이상의 phase로 분할 → Ralph Loop가 phase별 headless Claude Code 세션을 실행 → 각 세션이 테스트 작성, 구현, 검증 결과를 남김.
- brownfield 기능 추가: 전체 loop 대신 GStack으로 범위만 좁히고, SuperPower나 기존 [[Plan Mode 기반 AI 작업]]으로 한두 phase만 실행한다.

### 16개 Phase 프로젝트에 대한 Ralph Loop 실행 로그 요약
```text
[INFO] Starting Spectrum Development flow...
[GStack] Speccing complete. Created 16 Phase blocks.
[GSD] Initializing Phase queue. Context buffer clear (0%).
[Ralph Loop] Dispatching Phase 1: setup_tdd_harness
   └──► Spawned headless Claude Code. Context: 5% (Fresh)
   └──► Result: PASS. Codified specs created.
[Ralph Loop] Dispatching Phase 2: modular_auth_module
   └──► Spawned headless Claude Code. Context: 8% (Fresh)
   └──► Result: PASS. Auth logic implemented under TDD.
...
[Ralph Loop] Dispatching Phase 16: final_e2e_verification
   └──► Spawned headless Claude Code. Context: 12% (Fresh)
   └──► Result: PASS.
[SUCCESS] Overnight run completed. 100+ headless sessions created. 16/16 queues done. p99 Context: 10%.
```
(출처: Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md)

### 16개 Phase 프로젝트에 대한 Ralph Loop 실행 로그 요약
```text
[INFO] Starting Spectrum Development flow...
[GStack] Speccing complete. Created 16 Phase blocks.
[GSD] Initializing Phase queue. Context buffer clear (0%).
[Ralph Loop] Dispatching Phase 1: setup_tdd_harness
   └──► Spawned headless Claude Code. Context: 5% (Fresh)
   └──► Result: PASS. Codified specs created.
[Ralph Loop] Dispatching Phase 2: modular_auth_module
   └──► Spawned headless Claude Code. Context: 8% (Fresh)
   └──► Result: PASS. Auth logic implemented under TDD.
...
[Ralph Loop] Dispatching Phase 16: final_e2e_verification
   └──► Spawned headless Claude Code. Context: 12% (Fresh)
   └──► Result: PASS.
[SUCCESS] Overnight run completed. 100+ headless sessions created. 16/16 queues done. p99 Context: 10%.
```
(출처: Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md)

## 충돌
- 2026-05-14 확인: raw의 "context 50% 초과 시 정확도 급락", "사람 개입 0%" 같은 표현은 강의와 데모 기준의 주장이다. 반복 적용 전 실제 repo의 테스트 실패율, 충돌률, review 비용으로 검증해야 한다.

## 관련 노트
- [[GStack]]
- [[Plan Mode 기반 AI 작업]]
- [[병렬 에이전트 세션 운영]]
- [[Claude Code 오케스트레이션]]
- [[AI 코딩 에이전트 검증 전략]]
- [[매퍼코 3스킬 워크플로우]]

