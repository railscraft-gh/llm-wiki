---
type: workflow
status: evergreen
core: true
tags:
- llm
- prompt-engineering
- in-context-learning
aliases:
- 프롬프트-엔지니어링-핵심-기법-(Prompt-Engineering-Core-Techniques)
sources:
- raw/Prompt Engineering.md
created: 2026-07-21
updated: 2026-07-21
---
# 프롬프트 엔지니어링 핵심 기법 (Prompt Engineering Core Techniques)

## 한 줄 정의
모델 가중치 업데이트 없이 [[LLM]]의 생성 과정과 동작을 제어하고 원하는 결과를 도출하기 위한 다양한 입력 구성 기법.

## 핵심 요지
프롬프트 엔지니어링은 제로샷/퓨샷 학습부터 지시(Instruction) 프롬프팅, CoT(Chain-of-Thought)를 거쳐 외부 도구 연동(Augmented Language Models)까지 다양하게 확장된다. 각 기법은 작업의 복잡도와 모델의 특성에 맞춰 실험적으로 적용해야 한다.

## 상세
1. **기본 프롬프팅 (Zero-Shot & Few-Shot)**
   - **Zero-Shot**: 예시 없이 지시문만으로 결과를 도출.
   - **Few-Shot**: 의도와 출력 형식을 모델이 이해할 수 있도록 예제 세트를 제공. 예제의 다양성과 무작위 순서 배치가 모델의 편향(최신성 편향, 다수 레이블 편향 등)을 줄이는 데 중요하다.
2. **지시 프롬프팅 (Instruction Prompting)**
   - RLHF 등으로 파인튜닝된 지시 모델(Instructed LM)에 구체적이고 명확한 지시(예: "~하지 마라"보다 "~해라")를 내린다. 대상 독자를 명시하는 것도 효과적이다.
3. **추론 능력 향상 기법**
   - **자기 일관성 샘플링 (Self-Consistency Sampling)**: 여러 출력을 샘플링하고 다수결(majority vote)로 가장 일관된 정답을 선택.
   - **생각의 사슬 (Chain-of-Thought, CoT)**: 복잡한 추론 작업을 위해 단계별 논거를 제공하거나 모델이 스스로 생성하도록 유도(`Let's think step by step`). 대형 모델에서 특히 효과적이다.
   - **Self-Ask & Tree of Thoughts**: 점진적 후속 질문을 던지거나, 각 단계에서 다양한 사고를 분기시켜 탐색 공간을 넓힌다.
4. **증강 언어 모델 (Augmented LM)**
   - 외부 지식 검색(Retrieval), 프로그래밍 언어 실행(PAL, PoT), 외부 API 호출(TALM, Toolformer)을 통해 모델 내재 지식의 한계를 극복한다.

## 예시
- **Few-shot 예제 구성 최적화**: SBERT로 테스트 샘플과 유사한 훈련 예제를 찾거나 능동적 학습(Active Learning)을 통해 엔트로피가 높은 예제를 선택하여 퓨샷의 효과를 극대화한다.
- **PoT (Program of Thoughts)**: 언어 추론 문제를 풀 때 [[LLM]]이 파이썬 코드를 생성하게 하고, 그 코드를 인터프리터로 실행시켜 계산 과정을 외부에 위임한다.

## 충돌
- 프롬프트에 제공되는 퓨샷 예제의 순서에 따라 [[LLM]]의 성능이 극적으로 변할 수 있으며(분산이 매우 큼), 모델의 크기를 키워도 이 분산 문제는 완전히 해결되지 않는다는 연구 결과가 있다.

## 관련 노트
- [[LLM 기반 자율 에이전트 (LLM Powered Autonomous Agents)]]
- [[딥러닝 스케일링 법칙 (Scaling Laws Carefully)]]

## 출처
- [Weng, Lilian. (Mar 2023). Prompt Engineering. Lil’Log.](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/)
