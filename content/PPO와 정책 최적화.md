---
aliases: []
core: false
created: 2026-05-11
sources:
- 강화학습-RL-초보자-가이드
- raw/강화학습-RL-초보자-가이드.md
status: evergreen
tags:
- rl
- ppo
- algorithm
type: concept
updated: '2026-06-22'
---

# PPO와 정책 최적화

## 한 줄 정의

PPO(Proximal Policy Optimization)는 정책 업데이트 폭을 클리핑으로 제한해 학습 안정성을 확보하는 RL 알고리즘으로, LLM 학습에서도 표준으로 사용된다.

## 핵심 요지

- Q-Learning → DQN → REINFORCE → Actor-Critic(A3C/A2C) → PPO로 발전했다.
- PPO는 TRPO의 안정성을 유지하면서 2차 미분 없이 1차 미분만으로 구현 가능하다.
- 클리핑 범위 ε=0.2가 대부분의 문제에서 잘 작동해 하이퍼파라미터 튜닝이 거의 필요 없다.
- OpenAI의 기본 RL 알고리즘으로 Dota 2(OpenAI Five)와 로봇 제어에 적용되었다.

## 상세

Policy Gradient 계열은 정책 π(a|s)를 신경망으로 직접 모델링하고 보상에 따라 확률을 업데이트한다. REINFORCE는 기본적이지만 분산이 높아 불안정하다. Actor-Critic은 Actor(행동 선택)와 Critic(가치 평가)을 분리해 분산을 줄인다. A3C는 병렬 학습, A2C는 동기식 버전이다.

PPO의 핵심은 Clipped Surrogate Objective다:

```
L(θ) = E[ min( rₜ(θ)·Aₜ, clip(rₜ(θ), 1-ε, 1+ε)·Aₜ ) ]
```

rₜ(θ)는 새 정책/이전 정책의 확률 비율이고, Aₜ는 Advantage(이 행동이 평균보다 얼마나 좋은가)다. clip(..., 0.8, 1.2)로 rₜ가 너무 커지지 않게 제한한다. 좋은 행동이라도 확률을 급격히 높이지 않고, 나쁜 행동이라도 급격히 낮추지 않는 "안전한" 업데이트만 허용한다.

이 안정성 덕분에 LLM의 RLHF 단계에서도 PPO가 표준으로 채택되었다. 원래 모델과 너무 멀어지지 않도록 KL 발산 패널티를 추가한다.

## 예시

LLM 학습에서 PPO는 생성된 답변의 보상 모델 점수를 최대화하면서도 원래 언어 능력을 잃지 않도록 제약을 준다. 하지만 PPO 자체가 불안정하고 구현이 복잡하다는 한계가 있어 DPO와 [[GRPO]] 같은 대안이 등장했다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[강화학습 기초]]
- [[LLM 정렬 기법]]
- [[Jagged Intelligence]]
- [[Software 3.0]]

