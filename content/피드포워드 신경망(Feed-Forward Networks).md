---
type: concept
status: evergreen
core: false
tags:
  - llm
  - neural-network
sources:
  - raw/Understanding Transformers (Part 5). The final layers doing some heavy lifting.md
created: 2026-07-24
updated: 2026-07-24
---

# 피드포워드 신경망(Feed-Forward Networks)

## 한 줄 정의

[[트랜스포머 아키텍처]]에서 어텐션 레이어의 출력을 받아 각 토큰별로 독립적으로 선형 변환과 비선형 활성화 함수를 적용하는 완전 연결 신경망(Fully-Connected Network) 레이어입니다.

## 핵심 요지

- **토큰별 독립 처리**: 피드포워드 신경망은 시퀀스 내의 다른 토큰들을 참조하지 않고, 각 토큰의 표현 벡터에 대해 개별적으로 동일한 가중치를 사용하여 적용됩니다.
- **차원 확장 및 축소**: 입력 벡터의 차원(예: $d_{model} = 512$)을 더 높은 차원(예: $d_{ff} = 2048$)으로 확장하여 비선형 활성화 함수(ReLU, GeLU 등)를 거친 후 다시 원래 차원으로 축소합니다.
- **비선형성 도입**: 단순한 선형 결합인 [[어텐션 메커니즘]]만으로는 포착하기 어려운 복잡한 특징과 패턴을 학습하기 위해 네트워크에 필수적인 비선형성을 제공합니다.

## 상세

[[트랜스포머]]의 각 인코더 및 디코더 블록은 [[멀티헤드 어텐션(Multi-Head Attention)]] 레이어와 피드포워드 신경망(Feed-Forward Network, FFN) 레이어로 구성됩니다. 

멀티헤드 어텐션이 토큰 간의 맥락적 관계(정보의 혼합)를 계산하는 역할을 한다면, FFN은 혼합된 정보를 바탕으로 각 토큰 자체의 표현력을 깊게 만드는 역할을 담당합니다.

FFN의 연산 공식은 수학적으로 다음과 같이 표현됩니다:
$$FFN(x) = \max(0, xW_1 + b_1)W_2 + b_2$$

여기서 첫 번째 선형 변환 $W_1$은 일반적으로 입력 차원($d_{model}$)의 4배 크기로 차원을 확장하며, ReLU 등의 활성화 함수를 거쳐 두 번째 선형 변환 $W_2$를 통해 원래 차원으로 되돌려집니다. 

이러한 두 차례의 선형 변환 사이에 비선형 활성화 함수를 삽입함으로써 모델은 복잡한 다차원 특징 공간을 학습할 수 있게 됩니다.

## 예시

[[트랜스포머]] 모델 설계 시 하이퍼파라미터 구성 시나리오:
- 입력 [[임베딩]] 차원 ($d_{model}$): 512
- 피드포워드 확장 차원 ($d_{ff}$): 2048
- 활성화 함수: GeLU (Gaussian Error Linear Unit)
- 연산 단계:
  1. 입력 벡터 ($512$ 차원) $\rightarrow$ Linear Layer 1 $\rightarrow$ ($2048$ 차원)
  2. GeLU 활성화 함수 적용
  3. $2048$ 차원 벡터 $\rightarrow$ Linear Layer 2 $\rightarrow$ 원래 차원 ($512$ 차원)
  4. [[잔차 연결]] 및 레이어 정규화 적용

## 관련 노트

- [[자가 어텐션(Self-Attention)]]
- [[레이어 정규화(Layer Normalization)]]
- [[잔차 연결]]

## 출처

- `raw/Understanding Transformers (Part 5). The final layers doing some heavy lifting.md`