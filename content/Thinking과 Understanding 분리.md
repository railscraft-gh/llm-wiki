---
type: claim
status: draft
core: false
tags:
  - llm
  - learning
  - cognition
aliases:
  - Thinking is outsourceable, understanding is not
  - 싱킹과 언더스탠딩
sources:
  - raw/안드레_카파시_인터뷰_정리.md
  - raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
  - raw/sequoia-ascent-2026-karpathy-ko.md
created: 2026-05-06
updated: 2026-05-11
---

# Thinking과 Understanding 분리

## 한 줄 정의

Thinking과 Understanding 분리는 LLM에게 분석과 처리 작업은 위임할 수 있지만, 무엇을 만들고 왜 만들며 어떻게 검증할지에 대한 이해는 사람이 직접 가져야 한다는 주장이다.

## 핵심 요지

- Thinking은 정보를 받아 단계적으로 처리하고 결론을 내는 작업이다.
- Understanding은 정보가 자기 mental model 안에 자리 잡아 판단과 지휘의 기준이 되는 상태다.
- AI 위임이 늘어날수록 사람이 이해하지 못한 채 결과물만 받는 위험도 커진다.

## 상세

카파시 자료는 "Thinking is outsourceable. Understanding is not."이라는 문장을 중심 메시지로 소개한다. 이 문장은 LLM 시대의 학습과 위임 기준으로 쓸 수 있다. 코드를 직접 치는 능력보다 어떤 시스템을 만들고 있는지, 어떤 위험을 막아야 하는지, 무엇을 검증해야 하는지 이해하는 능력이 병목이 된다.

이 노트는 [[Plan Mode 기반 AI 작업]]의 철학적 근거다. 에이전트는 API 세부사항, 반복 구현, 문서 초안 같은 thinking 작업을 잘 처리할 수 있다. 그러나 사용자 식별자를 이메일로 묶으면 안 된다는 시스템 모델, 결제 흐름의 보안 경계, 제품의 미학적 판단은 사람이 이해 위에서 지휘해야 한다.

## 예시

PyTorch와 NumPy의 세부 API 이름은 에이전트에게 물어볼 수 있다. 하지만 tensor storage, view 공유, 복사 비용 같은 시스템 모델을 이해하지 못하면 에이전트가 낸 코드의 성능과 의미를 판단하기 어렵다. 출처: `raw/안드레_카파시_인터뷰_정리.md`, `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md`

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Plan Mode 기반 AI 작업]]
- [[Vibe Coding과 Agentic Engineering]]
- [[Software 3.0]]
- [[AI 코딩 에이전트 검증 전략]]

