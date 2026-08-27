---
type: concept
status: evergreen
core: false
tags:
- llm
- design
- interaction
aliases:
- 혼합 주도형 상호작용
- Mixed-Initiative Interaction
- 혼합 주도형 시스템
- 혼합-주도형-상호작용-(Mixed-Initiative-Interaction)
sources:
- raw/39 principles for designing human-AI interaction.md
created: 2026-07-15
updated: 2026-07-15
---
# [[혼합 주도형 상호작용]] (Mixed-Initiative Interaction)

## 한 줄 정의

인간과 지능형 에이전트(AI)가 상호 보완적인 목표를 향해 서로 주도권(initiative)을 넘겨받거나 공유하며 협업하여 공동의 문제를 해결해 나가는 의사결정 공유 아키텍처.

## 핵심 요지

1. **상호작용적 자율성 분담**: AI가 모든 것을 자동 실행하거나 반대로 단순 수동 명령 대기 상태에 머무르지 않는다. 작업의 기회 비용과 모델의 확실성을 계산하여 개입 수준을 유연하게 제어한다.
2. **에릭 호비츠(Eric Horvitz)의 1999년 프레임워크**: AI가 사용자 지시 없이 선제적 개입(action)을 취할 때 얻을 수 있는 가치(benefit)와 오작동 시의 복구 비용(cost)을 분석하여 의사결정을 내린다.
3. **자율성 분기 설계**: 작업의 영향력이 크고 비가역적일수록(예: 데이터베이스 삭제, 결제 실행 등) 승인 절차를 강제하고, 영향력이 낮고 가역적일수록(예: 인라인 오탈자 자동 수정) 자동화를 극대화한다.

## 상세

### 혼합 주도형 개입의 4대 분류 스펙트럼
- **수동 지시 대기**: AI가 절대 선제 개입하지 않고 사용자의 명시적 프롬프트 입력과 실행 명령 후에만 반응한다.
- **제안 및 추천 (Suggesting)**: AI가 특정 흐름에서 '이러한 대안이 있는데 적용하시겠습니까?'라고 사용자에게 확인 버튼이 포함된 UI 창을 제공한다.
- **체크포인트 승인 후 자동화 (Checkpoint/Handoff)**: 시스템이 여러 단계를 자율적으로 수행하되, 중대한 분기점(checkpoint)에서만 사람의 검토 승인을 받고 다음 단계의 에이전트로 넘겨준다.
- **완전 자율 실행 (Autonomous)**: 사용자 동의 없이 백그라운드 데몬으로 작업을 완전 자동 처리하며, 사후 롤백(rollback)이나 실행 취소(undo) 수단만 피드백 루프로 노출한다.

## 예시

- **GitHub Copilot (인라인 제안)**: 사용자가 타이핑하는 동안 고스트 텍스트(Ghost text)로 회색 코드 제안을 띄운다. 사용자는 단지 `Tab` 키를 누름으로써 주도권을 가볍게 수용하거나 묵살할 수 있어 상호작용적 비용이 매우 낮다.
- **자동 결제 매칭 시스템**: 매달 반복되는 소액 자동이체는 완전 자율 실행하되, 특정 한도액을 초과하거나 비정형 청구서가 감지되면 사용자에게 푸시 알림으로 수동 승인을 요구하도록 경계를 설계함.

## 관련 노트

- [[인간-AI 상호작용 설계 원칙 (Human-AI Interaction Design Principles)]]
- [[에이전트 기반 AI 워크플로우 (Agentic AI Workflow)]]
- [[에이전트 디자인 패턴]]

## 출처

- Horvitz, E. (1999). Principles of Mixed-Initiative User Interfaces. [Horvitz Research Paper](https://erichorvitz.com/chi99horvitz.pdf)
- "39 principles for designing human-AI interaction.md" (2026-07-15)
