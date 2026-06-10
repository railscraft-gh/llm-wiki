---
type: concept
status: evergreen
core: false
tags:
 - llm
 - rlhf
 - dpo
 - grpo
 - alignment
aliases: []
sources:
 - 강화학습-RL-초보자-가이드
created: 2026-05-11
updated: 2026-05-11
---

# LLM 정렬 기법

## 한 줄 정의

LLM 정렬 기법은 사전학습된 LLM을 인간의 취향과 의도에 맞게 조정하는 RL 기반 방법들로, RLHF에서 DPO, GRPO로 진화하고 있다.

## 핵심 요지

- 기본 파이프라인: Pretrained LLM → SFT → RLHF → Aligned LLM
- RLHF는 Reward Model 학습 + PPO로 정책 최적화하지만 복잡하고 불안정하다.
- DPO는 Reward Model 없이 선호도 데이터로 직접 학습해 단순화했다.
- GRPO는 Critic 네트워크까지 제거하고 그룹 내 상대적 보상으로 DeepSeek-R1 수준의 추론 능력을 달성했다.

## 상세

**RLHF**는 두 단계로 구성된다. 먼저 인간 라벨러가 여러 답변을 선호도 순으로 정렬한 데이터로 Reward Model(RM)을 학습한다. 그 다음 PPO로 LLM을 업데이트하는데, RM이 준 보상을 최대화하면서 원래 모델과의 KL 발산 패널티로 언어 능력 저하를 방지한다. 하지만 RM 자체가 불완전할 수 있고(Reward Hacking), 인간 라벨링 비용이 크다.

**DPO**(Direct Preference Optimization, 2023, Stanford)는 Reward Model을 명시적으로 학습하지 않는다. Reward Model과 정책 사이의 관계를 수학적으로 유도해 PPO 없이 Closed-form 솔루션을 증명했다. 메모리 절약과 학습 단순화라는 장점이 있지만, 정책과 참조 모델이 너무 달라지면 성능이 저하될 수 있다.

**GRPO**(Group Relative Policy Optimization, 2024, DeepSeek)는 PPO의 Critic 네트워크를 제거했다. 동일 프롬프트에 여러 답변을 생성한 뒤 그룹 평균 보상을 기준으로 Advantage를 계산한다(Aᵢ = rᵢ - mean(r)). 특히 수학/코딩 같이 정답 여부가 명확한 Reasoning 작업에서 효과적이며, DeepSeek-R1이 GRPO로 학습되어 OpenAI o1과 경쟁할 수준의 추론 능력을 달성했다.

## 예시

ChatGPT, Claude는 RLHF로 정렬되었다. Zephyr, Neural Chat 등 오픈소스 모델은 DPO로 정렬했다. DeepSeek-R1은 GRPO로 사고(Chain-of-Thought) 능력을 RL만으로 스스로 발전시켰다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[강화학습 기초]]
- [[PPO와 정책 최적화]]
- [[Software 3.0]]
- [[Jagged Intelligence]]
- [[검증 가능한 도메인]]
- [[Reasoning Models]]

