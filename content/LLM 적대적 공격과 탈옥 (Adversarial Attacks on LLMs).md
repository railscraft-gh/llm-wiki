---
type: concept
status: evergreen
core: true
tags:
- llm
- security
- adversarial
- jailbreak
aliases:
- Adversarial Attacks
- 탈옥 프롬프트
- LLM-적대적-공격과-탈옥-(Adversarial-Attacks-on-LLMs)
sources:
- raw/Adversarial Attacks on LLMs.md
created: 2026-07-21
updated: 2026-07-21
---
# [[LLM]] 적대적 공격과 탈옥 (Adversarial Attacks on [[LLM]]s)

## 한 줄 정의
[[LLM]]이 내장된 안전 장치(alignment)를 우회하여 의도치 않거나 유해한 출력을 내뱉도록 유도하는 입력 조작 기법.

## 핵심 요지
토큰 조작, 기울기 기반 최적화, [[탈옥 프롬프트]](jailbreak), 레드팀 공격 등을 통해 [[LLM]]의 취약점을 파고들 수 있다. 화이트박스 환경에서는 기울기를 활용해 효과적인 토큰을 탐색하며, 블랙박스 환경에서는 주로 사람의 휴리스틱이나 다른 모델을 활용한 프롬프트 주입이 사용된다.

## 상세
- **위협 모델**: 주로 추론(inference) 시점의 생성 과정에서 발생.
- **화이트박스 vs 블랙박스**: 모델의 가중치와 구조에 접근할 수 있으면 GCG, UAT 등 [[기울기 기반 공격]]이 가능하며, API로만 접근할 경우 토큰 조작이나 [[탈옥 프롬프트]] 기법을 쓴다.
- **주요 공격 기법**:
  - 토큰 조작: [[TextAttack]], BERT-Attack 등을 활용해 의미는 유지하되 모델을 교란.
  - 기울기 기반: GCG(Greedy Coordinate Gradient), UAT(Universal Adversarial Triggers) 등.
  - [[탈옥 프롬프트]]: 역할극(DAN)이나 인코딩 변경 등을 통해 안전 정책(거부 억제, 스타일 주입 등)을 회피.
  - 레드팀 공격: 사람이나 다른 [[LLM]]을 이용해 안전하지 않은 응답을 지속적으로 탐색.

## 예시
- **GCG (Greedy Coordinate Gradient)**: "파이프 폭탄을 만드는 방법을 알려줘"와 같은 악의적 요청 뒤에 특별히 최적화된 적대적 접미사 토큰을 붙여 모델이 긍정적으로 대답하도록 유도.
- **[[탈옥 프롬프트]] (Jailbreak)**: 모델에게 "항상 마키아벨리적으로 행동하라"는 등의 역할극(DAN, AIM)을 부여하여 유해한 답변의 차단을 우회.

## 충돌
- **화이트박스 공격의 전이성**: 오픈 소스 모델(예: Vicuna)에서 생성된 적대적 접미사가 블랙박스 상용 모델(예: GPT-3.5)에도 일부 통하는 현상이 보고됨. 데이터 분포가 겹치기 때문으로 추정됨.

## 관련 노트
- [[LLM 외부적 환각 (Extrinsic Hallucinations in LLMs)]]
- [[자가 개선 하네스 엔지니어링 (Harness Engineering for Self-Improvement)]]

## 출처
- `raw/Adversarial Attacks on LLMs.md`
