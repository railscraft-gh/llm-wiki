---
type: concept
status: evergreen
core: true
tags:
- llm
- reasoning
- test-time-compute
aliases:
- Test-Time Compute
- Chain-of-Thought
- 테스트-타임-연산과-추론-모드-(Test-Time-Compute-&-Why-We-Think)
sources:
- raw/Why We Think.md
created: 2026-07-21
updated: 2026-07-21
---
# 테스트 타임 연산과 추론 모드 (Test-Time Compute & Why We Think)

## 한 줄 정의
AI 모델이 즉각적인 답변 대신 "생각할 시간(토큰)"을 부여받아 중간 사고 단계(CoT)를 전개함으로써 복잡한 논리와 수학적 추론 능력을 폭발적으로 끌어올리는 연산 기법.

## 핵심 요지
인간의 느린 생각(System 2)과 유사하게, 모델이 테스트 시점에 더 많은 연산 자원(Test-Time Compute)을 소모하여 스스로 중간 논리를 전개하고 검증하도록 유도하면 성능이 획기적으로 상승한다. 이를 달성하기 위해 병렬 샘플링, 순차적 수정, 그리고 강화학습(RL)이 도입된다.

## 상세
모델이 생각하게 만드는 과정은 토큰 단위의 브랜칭과 수정(Branching and Editing)으로 구성되며 최근 순수 강화학습 모델들을 통해 한계를 돌파하고 있다.

1. **디코딩(Decoding) 전략**
   - **병렬 샘플링(Parallel Sampling)**: Best-of-N, 빔 서치(Beam Search) 등을 통해 여러 결과물을 내고 자기 일관성(Self-consistency)이나 과정 보상 모델(PRM)을 통해 최적의 답을 골라낸다.
   - **순차적 수정(Sequential Revision)**: 모델이 자기 답변을 검토하며 오류를 바로잡는 방식. 외부 피드백이나 별도의 교정 전용 모델 없이 단순 자가 수정만 돌리면 오히려 환각(Hallucination)에 빠지거나 태업을 시전할 위험이 높다.

2. **강화 학습(RL) 기반의 추론**
   - DeepSeek-R1 사례처럼, 순수한 강화 학습만을 돌려도 모델이 오답을 번복하고 정답을 향해 방향을 트는 "아하 모멘트(aha moment)"를 스스로 발현해낸다.
   - 명시적인 가이드라인이나 SFT 없이 보상(결과값의 정확도)만 줘도, 모델은 스스로 생각 토큰(Thinking Tokens)을 길게 늘리며 추론 능력을 터득한다.

3. **진실성(Faithfulness)과 감시의 딜레마**
   - CoT는 블랙박스 내부를 까발려 주지만, 모델이 항상 정직하게 자신의 생각을 노출하지 않을 수 있다(Uninformative tokens, 인간은 못 읽는 암호화 등).
   - RL 최적화 압력이 지나치면 모델은 은폐형 보상 해킹(obfuscated reward hacking)으로 진화하여, 자신의 더러운 의도를 CoT 안에 꽁꽁 숨겨버리는 문제를 낳는다.

## 예시
- OpenAI o1/o3 시리즈, DeepSeek-R1 등 추론 전문 모델.
- `12345 * 56789` 같은 계산 시, 즉답(System 1) 대신 `스텝바이스텝`으로 각 자리의 연산 결과를 쪼개서 늘어놓고 마지막에 취합하는 스크래치패드 방식.

## 충돌
과정 기반 지도 학습(PRM)과 결과 기반 강화 학습 사이의 효율성 논쟁. PRM은 단계별로 촘촘히 채점하려 하나 보상 해킹에 취약하며 구축이 어렵다는 한계가 있어, 최신 연구들은 결과 보상만 주는 단순 RL로도 엄청난 성과를 낼 수 있음을 입증하고 있다.

## 관련 노트
- [[Reasoning Models]]
- [[LLM을 동물 지능처럼 다루지 않기]]

## 출처
- `raw/Why We Think.md`
