---
type: concept
status: needs-review
core: false
tags:
  - design
  - ai
  - workflow
  - ux
aliases:
  - AI 경험 아키텍트
  - AI Designer to Architect
sources:
  - raw/From faster pencil to AI Experience Architect. a designer’s path.md
created: 2026-05-26
updated: 2026-05-26
---

# AI Experience Architect

## 한 줄 정의

AI Experience Architect는 화면을 더 빨리 만드는 사람이 아니라, AI가 들어간 업무 흐름·권한·검토 지점·조직적 책임까지 설계하는 역할이다.

## 핵심 요지

- AI 도구를 써서 Figma 작업을 30% 빠르게 하는 단계는 시작일 뿐이다.
- 다음 단계는 AI를 기존 workflow 안의 도구로 쓰는 것이 아니라, AI가 참여자로 들어가는 workflow 자체를 설계하는 일이다.
- 더 나아가 데이터 계약, 권한, audit trail, fallback, 규제 제약까지 다루는 시스템 설계로 역할이 이동한다.
- 최종적으로는 제품 화면보다 조직이 어떤 결정을 AI에 위임하고 무엇을 사람에게 남길지를 정하는 아키텍처 역할이 된다.

## 상세

원문은 디자이너의 역할 변화를 네 단계로 설명한다. 첫 단계는 "더 빠른 연필"이다. 기존 프로세스를 유지한 채 산출 속도만 높이는 단계다. 둘째는 workflow designer로, 누가 어떤 입력을 넘기고 어디서 사람이 검토하는지 설계한다. 셋째는 systems thinker로, source of truth, authentication, latency, legal constraint까지 설계 표면이 넓어진다. 넷째가 AI Experience Architect다. 여기서는 화면보다 운영, 법무, IT, 경영진과 함께 위임 경계와 사회적 계약을 정하는 일이 중요해진다.

이 관점은 [[AI 시대 디자인 시스템]]과도 이어진다. 디자인 시스템이 더 이상 시각 token 모음이 아니라 AI가 반복 생성해도 제품의 판단 기준을 유지하게 하는 실행 맥락이기 때문이다. 또한 [[디자인 에이전트 5종]]처럼 upstream design task를 agent화하더라도, 누가 승인하고 어디서 멈출지 정하는 역할은 여전히 사람 아키텍트에게 남는다.

## 예시

- 프로토타이핑 자동화에서 끝나지 않고, 리서치 요약 → 문제 정의 → flow 초안 → human review 순서를 설계한다.
- 고객지원 workflow에서 AI가 답변 초안을 만들고, 사람이 승인하며, 민감 요청은 escalation하도록 경계를 정한다.
- GDPR, 감사 로그, 권한 정책을 반영해 "AI가 할 수 있는 일"과 "사람이 반드시 확인할 일"을 분리한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI 시대 디자인 시스템]]
- [[디자인 에이전트 5종]]
- [[DESIGN.md 운영 원칙]]
- [[AI 코딩 에이전트 검증 전략]]

