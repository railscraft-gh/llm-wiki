---
type: concept
status: draft
core: false
tags:
  - llm
  - reasoning
  - rl
  - test-time-compute
aliases:
  - 추론 모델
  - Reasoning LLM
  - o1
  - DeepSeek-R1
sources:
  - raw/강화학습-RL-초보자-가이드.md
  - raw/sequoia-ascent-2026-karpathy-ko.md
created: 2026-05-16
updated: 2026-05-16
---

# Reasoning Models

## 한 줄 정의

Reasoning Models는 RL로 Chain-of-Thought 능력을 학습시키고 추론 시 더 긴 사고 시간(test-time compute)을 허용해 어려운 문제를 풀어내는 LLM 계열이다.

## 핵심 요지

- OpenAI o1과 DeepSeek-R1이 대표 모델이며, 모두 RL로 사고 과정을 스스로 발전시켰다.
- DeepSeek-R1은 [[LLM 정렬 기법]]의 GRPO를 사용해 Reward Model과 Critic을 모두 제거하고 학습했다.
- 추론 시 더 많은 계산을 허용하면 성능이 올라간다(test-time compute scaling). 비용도 토큰 수에 비례해 늘어난다.

## 상세

기존 LLM은 한 번에 답을 출력하도록 학습됐다. Reasoning Models는 답하기 전에 자유롭게 사고 과정을 길게 쓰고, 그 사고가 최종 정답에 도달하면 보상을 받는 방식으로 학습된다. 사고 토큰이 길어질수록 어려운 reasoning 문제를 더 잘 풀지만 응답 시간과 비용이 늘어난다.

**학습 방식:** [[LLM 정렬 기법]]에서 다루는 GRPO는 reasoning model 학습의 핵심 도구다. 동일 프롬프트에 여러 답변을 생성해 그룹 평균 보상으로 Advantage를 계산한다(Aᵢ = rᵢ - mean(r)). 정답이 채점 가능한 [[검증 가능한 도메인]](수학, 코딩)에서 특히 효과적이다. DeepSeek-R1은 이 방법으로 OpenAI o1과 경쟁할 수준의 추론 능력을 RL만으로 얻었다.

**Test-Time Compute Scaling:** 추론 시 더 많은 사고 토큰을 허용하면 성능이 향상된다. o1은 응답 전에 비공개 reasoning trace를 생성하고, DeepSeek-R1은 `<think>` 토큰 사이에 사고를 노출한다. 이 방식은 사전훈련 컴퓨트 외에 추론 컴퓨트라는 새 비용 축을 만든다.

**한계와 충돌 영역:**
- 사고 토큰이 폭증하면 비용이 빠르게 늘어난다. 단순 작업에는 일반 모델이 더 효율적이다.
- 채점이 명확하지 않은 영역에서는 사고가 길어져도 정답률이 비례해 오르지 않는다. [[Jagged Intelligence]]가 지적한 들쭉날쭉한 능력 분포는 reasoning model에서도 유지된다.
- 사고 토큰은 KV-cache 관점에서 안정 접두어가 아니라 매번 새로 생성되는 영역이므로 [[Agentic 패턴 진화]]에서 다룬 KV-cache 최적화와 잘 맞지 않는다. 컨텍스트 엔지니어링 측면의 트레이드오프가 있다.

**실무 함의:**
- [[강한 모델로 덜 헤매기]] 원칙과 결합된다. 복잡한 아키텍처 변경, 디버깅, 보안 분석에는 reasoning model을 배치하고 포맷팅·repetitive 작업에는 일반 모델을 쓰는 식이다.
- [[Plan Mode 기반 AI 작업]]의 plan 단계는 reasoning model이 유리한 구간이다.

## 예시

- OpenAI o1, o3: 폐쇄 reasoning trace, 어려운 수학·코딩 벤치마크 SOTA.
- DeepSeek-R1: 공개 reasoning trace, GRPO 학습, 비용 효율적.
- 수학 올림피아드 문제 풀이, 보안 취약점 분석, 복잡한 시스템 설계 검토.

## 충돌

현재 확인된 충돌 없음. 단, 모델별 성능 비교 수치(o1 vs DeepSeek-R1)는 벤치마크와 시기에 따라 변동성이 높다.

## 관련 노트

- [[강화학습 기초]]
- [[LLM 정렬 기법]]
- [[Jagged Intelligence]]
- [[검증 가능한 도메인]]
- [[강한 모델로 덜 헤매기]]
- [[Agentic 패턴 진화]]

