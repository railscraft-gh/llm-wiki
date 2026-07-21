---
type: concept
status: draft
core: false
tags:
  - ai
  - agent-harness
  - production-ready
  - best-practices
  - agentic-loop
aliases: [에이전트 하네스 베스트 프랙티스]
sources:
  - raw/AI Agent Best Practices. Production-Ready Harness Engineering (2026 Guide)-ko.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
AI 에이전트의 안정적인 프로덕션 운영을 위해, 예측 불가능한 LLM을 감싸고 도구 호출 및 실행을 안전하게 통제하는 독립적 런타임 환경(Harness) 설계 가이드입니다.

## 핵심 요지
1. **역할 분리 원칙:** LLM은 동작을 '제안'만 하고, 실제 실행과 검증은 결정론적인 Harness 계층이 담당하여 안전성 확보 [raw/AI Agent Best Practices. Production-Ready [[Harness Engineering]] (2026 Guide)-ko.md#L21](file:///Users/railscraft/Obsidian/raw/AI%20Agent%20Best%20Practices.%20Production-Ready%20Harness%20Engineering%20%282026%20Guide%29-ko.md#L21).
2. **위험 기반 프로세스:** 권한 수준을 Read-only, Draft(시뮬레이션), External Write(승인 필요)로 나누어 설계 [raw/AI Agent Best Practices. Production-Ready [[Harness Engineering]] (2026 Guide)-ko.md#L64](file:///Users/railscraft/Obsidian/raw/AI%20Agent%20Best%20Practices.%20Production-Ready%20Harness%20Engineering%20%282026%20Guide%29-ko.md#L64).
3. **컨텍스트 최적화:** 대화 기록을 단순히 덤프하지 않고, 안정성(System) - 작업(Scoped) - 정보(Runtime) 계층으로 구조화 [raw/AI Agent Best Practices. Production-Ready [[Harness Engineering]] (2026 Guide)-ko.md#L74](file:///Users/railscraft/Obsidian/raw/AI%20Agent%20Best%20Practices.%20Production-Ready%20Harness%20Engineering%20%282026%20Guide%29-ko.md#L74).
4. **예산과 제약:** 스텝, 시간, 토큰, 비용 예산을 강제하여 무한 루프 방지 및 우아한 종료 처리 [raw/AI Agent Best Practices. Production-Ready [[Harness Engineering]] (2026 Guide)-ko.md#L84](file:///Users/railscraft/Obsidian/raw/AI%20Agent%20Best%20Practices.%20Production-Ready%20Harness%20Engineering%20%282026%20Guide%29-ko.md#L84).
5. **검증 중심 설계:** 반복 실패 시 프롬프트 수정보다 하네스 내 검증기(Validator)나 자동화 도구로 문제 해결 [raw/AI Agent Best Practices. Production-Ready [[Harness Engineering]] (2026 Guide)-ko.md#L95](file:///Users/railscraft/Obsidian/raw/AI%20Agent%20Best%20Practices.%20Production-Ready%20Harness%20Engineering%20%282026%20Guide%29-ko.md#L95).

## 상세
프로덕션 레벨의 AI 에이전트는 모델의 지능보다 실행 환경(Harness)의 견고함에서 결정됩니다. LLM을 제어하는 결정론적 런타임 래퍼를 설계하여, 에이전트가 통제 범위를 벗어나지 않고 신뢰할 수 있게 운영되도록 만드는 공급자 중립적 아키텍처가 필수적입니다.

## 관련 노트
- [[Harness_Engineering]]
- Agentic_Loop_Reliability

