---
type: claim
status: evergreen
core: false
tags:
 - llm
 - learning
 - cognition
aliases:
 - Thinking is outsourceable, understanding is not
 - 싱킹과 언더스탠딩
sources:
 - 안드레_카파시_인터뷰_정리
 - 꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!
 - sequoia-ascent-2026-karpathy
 - 아무도 AI를 배우고 싶어 하지 않는다
created: 2026-05-06
updated: 2026-05-24
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

Sequoia Ascent 2026에서 카파시는 교육 관점에서 이 주장을 다시 강조했다. 정보를 이해로 변환하는 도구로서 LLM Wiki는 단순한 답변 기계가 아니라 이해를 증진하는 도구다. 이해하지 못하면 좋은 디렉터가 될 수 없기 때문이다. 그는 microGPT 프로젝트를 예로 들며, LLM에게 계속 더 단순화하라고 프롬프트핬지만 코드를 복잡하게 만드는 경우를 설명했다. 이는 해당 작업이 RL 회로 밖에 있어서 개선되지 않는 영역이라는 뜻이다. [[LLM Wiki 운영 패턴]]은 이 주장의 실무형 예시다. raw를 그대로 묻는 대신, 개념 노트와 충돌 기록을 누적해 사람이 장기적으로 이해를 축적하게 만든다.

`raw/아무도 AI를 배우고 싶어 하지 않는다.md`는 이 구분을 커리어 관점으로 확장한다. 최신 AI 도구나 framework를 배웠다는 신호는 빠르게 감가상각되지만, 시스템을 읽고 깨지는 이유를 설명하는 understanding은 오래 남는다. 그래서 단기 최신성을 좇느라 understanding을 쌓을 시간을 잃는 상태를 [[Competence Debt]]로 볼 수 있다.

## 예시

PyTorch와 NumPy의 세부 API 이름은 에이전트에게 물어볼 수 있다. 하지만 tensor storage, view 공유, 복사 비용 같은 시스템 모델을 이해하지 못하면 에이전트가 낸 코드의 성능과 의미를 판단하기 어렵다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Plan Mode 기반 AI 작업]]
- [[Vibe Coding과 Agentic Engineering]]
- [[Software 3.0]]
- [[AI 코딩 에이전트 검증 전략]]
- [[LLM Wiki 운영 패턴]]
- [[Competence Debt]]

