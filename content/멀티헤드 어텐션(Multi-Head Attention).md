---
type: concept
status: draft
core: false
tags:
  - deep-learning
  - transformer
aliases:
  - Multi-Head Attention
  - 멀티헤드 어텐션
sources:
  - raw/Understanding Transformers (Part 4). Attention is just a few matrices.md
created: 2026-07-24
updated: 2026-07-24
---

# 멀티헤드 어텐션(Multi-Head Attention)

## 한 줄 정의
자가 어텐션(Self-Attention) 연산을 여러 개(여러 헤드) 동시에 실행하여 단어 간의 다양한 문맥적 관계를 병렬로 포착하고, 이를 접합(Concatenate)하여 종합적인 표현을 도출하는 트랜스포머의 핵심 아키텍처.

## 핵심 요지
- **다각도 문맥 이해**: 단일 어텐션 구조와 달리, 여러 개의 독립적인 어텐션 헤드를 둠으로써 문장 내 단어들 간의 다양한 의미적/구조적 관계(예: 대명사 지시, 동사-목적어 호응, 수식 관계 등)를 입체적으로 동시에 학습한다.
- **병렬 연산 최적화**: 각 헤드의 어텐션 연산은 독립적인 행렬 연산이므로 GPU를 통한 동시 병렬 연산에 극도로 적합하며, 이는 시퀀스 처리에 한계가 있던 기존 RNN/LSTM 계열 모델의 병목을 해결한 핵심 요인이다.
- **차원 분할 및 재합성**: 입력 벡터를 여러 헤드의 차원으로 나누어 독립 연산한 뒤, 가로 방향으로 길게 접합(Concatenate)하고 출력 가중치 행렬을 통과시켜 최적의 표현력을 복원한다.

## 상세
### 연산 메커니즘
멀티헤드 어텐션의 상세 단계는 다음과 같이 행렬 연산으로 정밀하게 진행된다.

1. **선형 투영 (Linear Projection)**:
   입력 행렬 $X$에 각 헤드 $i$마다 독립적인 가중치 행렬 $W_i^Q, W_i^K, W_i^V$를 곱해 각각의 쿼리($Q_i$), 키($K_i$), 밸류($V_i$) 벡터를 얻는다.
   $$ Q_i = XW_i^Q, \quad K_i = XW_i^K, \quad V_i = XW_i^V $$
   
2. **개별 어텐션 수행 (Scaled Dot-Product Attention)**:
   각 헤드는 생성된 $Q_i, K_i, V_i$를 바탕으로 독자적인 소프트맥스 유사도 연산을 병렬로 처리한다.
   $$ \text{head}_i = \text{Attention}(Q_i, K_i, V_i) = \text{softmax}\left(\frac{Q_i K_i^T}{\sqrt{d_k}}\right)V_i $$
   *(여기서 $d_k$는 키 벡터의 차원 수이며, 값이 비대해져서 소프트맥스가 오작동하는 것을 방지하는 보정 분모이다.)*

3. **접합 (Concatenation)**:
   모든 헤드의 계산 결과 벡터들($\text{head}_1, \text{head}_2, \dots, \text{head}_h$)을 가로로 이어 붙여 차원을 다시 넓힌다.
   $$ \text{Concat}(\text{head}_1, \dots, \text{head}_h) $$

4. **최종 출력 선형 변환 (Final Linear Layer)**:
   접합된 행렬에 최종 학습 파라미터 행렬 $W^O$를 곱해 원래 모델 차원 크기로 통일하고 다음 레이어로 전달할 종합 정보를 도출한다.
   $$ \text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \dots, \text{head}_h)W^O $$

### 헤드별 역할 분담 예시
멀티헤드 어텐션은 문장을 처리할 때 인간이 의미를 다각도로 분석하는 것처럼 작동하도록 설계된다.
- **1번 헤드**: 지시 관계 및 대명사 일치 관계 추적 (예: `"it"` $\rightarrow$ `"cake"`)
- **2번 헤드**: 주어-동사 호응 및 동사-목적어 관계 추적 (예: `"ate"` $\rightarrow$ `"cake"`)
- **3번 헤드**: 형용사의 수식 대상 매칭 (예: `"delicious"` $\rightarrow$ `"cake"`)

이러한 관계들이 모여 단일 어텐션에만 의존할 때 발생할 수 있는 표현력의 단순화를 극복한다.

## 예시
어텐션 헤드의 개수가 $h = 8$이고 개별 헤드가 산출하는 밸류 벡터의 차원이 $d_v = 4$일 때:

1. 입력 문장 임베딩 벡터가 선형 투영을 거쳐 각각의 독립적인 8개의 헤드로 나뉜다.
2. 각 헤드는 4차원 공간 안에서 어텐션 가중 합산을 수행해 4차원 출력 벡터를 도출한다.
3. 연산이 완료된 8개 헤드의 4차원 벡터를 가로로 길게 접합(Concatenate)한다.
4. 최종 벡터의 차원은 **`4 (차원폭) × 8 (헤드 개수) = 32차원`**이 되며, 이 넓은 특징 차원이 최종 출력 행렬 $W^O$를 통과해 다음 피드포워드 신경망 등으로 부드럽게 전파된다.

## 충돌
- **어텐션 헤드 수의 잉여성 논쟁**: 일부 연구(예: *Are Sixteen Heads Really Better Than One?*)에서는 훈련 완료 후 다수의 어텐션 헤드를 제거(Pruning)해도 번역 성능이나 테스트 점수가 거의 손상되지 않음을 증명하였다. 이는 일부 헤드가 중복되거나 무의미한 정보를 학습하고 있을 수 있음을 시사하며, 최근 경량화 모델 및 어텐션 효율성 튜닝 연구의 출발점이 되었다.

## 관련 노트
- [[자가 어텐션(Self-Attention)]]
- [[트랜스포머 아키텍처]]
- [[고정된 메모리 뱅크(Frozen Memory Bank)]]

## 출처
- `raw/Understanding Transformers (Part 4). Attention is just a few matrices.md`
