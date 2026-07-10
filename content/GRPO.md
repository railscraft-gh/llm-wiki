---
aliases: []
core: false
created: 2026-07-10
sources:
  - raw/강화학습-RL-초보자-가이드.md
status: evergreen
tags:
  - llm
  - rl
  - alignment
type: concept
updated: 2026-07-10
---
# GRPO

## 한 줄 정의

GRPO(Group Relative Policy Optimization)는 PPO의 Critic(가치 네트워크)을 제거하고, 동일한 프롬프트에서 생성된 그룹 내 답변들의 상대적 보상 평균을 기반으로 Advantage를 계산하여 학습 효율을 극대화하는 강화학습 알고리즘이다.

## 핵심 요지
- DeepSeek-R1의 추론(Reasoning) 능력 학습에 적용되어 OpenAI o1 수준의 성능을 입증하며 널리 알려졌다.
- Critic 네트워크가 불필요하므로 기존 PPO 대비 학습 메모리와 계산 비용을 크게 절감할 수 있다.
- 정답과 오답의 경계가 뚜렷하여 룰 기반으로 보상을 매기기 쉬운 수학, 코딩 등 추론 작업에 특히 강점을 보인다.

## 상세

## 상세

### 1. 작동 알고리즘 흐름
1. 단일 프롬프트 $x$에 대해 모델이 $G$개의 답변 $\{y_1, y_2, \dots, y_G\}$를 독립 생성한다.
2. 각 답변에 대한 보상 $\{r_1, r_2, \dots, r_G\}$을 평가한다.
3. 그룹의 평균 보상과 표준편차를 기준으로 개별 답변의 Advantage를 상대 계산한다: 
   $$A_i = \frac{r_i - \text{mean}(R)}{\text{std}(R)}$$
4. 계산된 Advantage를 PPO 클리핑 목적함수에 대입하여 정책(Policy) 모델의 파라미터를 업데이트한다.

## 예시

## 예시

### 1. DeepSeek-R1의 추론 모델 훈련
DeepSeek-R1 학습에서 GRPO는 Chain-of-Thought(CoT)의 사고 길이를 제어하고, 정답률 및 가독성(언어 혼합 방지) 등의 룰 기반 보상을 결합하여 추론 행동을 강화하는 데 핵심적으로 사용되었다. 별도의 Critic 모델을 로드할 필요가 없어 GPU 자원이 제한된 환경에서도 효과적인 학습이 가능함을 증명하였다.

## 충돌

## 관련 노트
- [[강화학습 기초]]
- [[PPO와 정책 최적화]]
- [[LLM 정렬 기법]]
- [[Reasoning Models]]

