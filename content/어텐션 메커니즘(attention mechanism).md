---
type: concept
status: draft
core: false
tags:
  - llm
  - neural-network
  - algorithm
aliases:
  - 어텐션 메커니즘
  - 어텐션
  - attention mechanism
sources:
  - raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md
created: 2026-07-29
updated: 2026-07-29
---

# 어텐션 메커니즘(attention mechanism)

## 한 줄 정의

인공신경망이 입력 시퀀스 전체를 균등하게 처리하는 대신, 특정 시점에서 가장 관련성이 높은 부분에 초점을 맞춰 정보를 동적으로 가중 결합하는 계산 메커니즘.

## 핵심 요지

- **동적 가중치 배분**: 입력 데이터의 모든 고정 벡터를 균등하게 처리하지 않고, 현재 처리 중인 맥락과 가장 밀접한 연관성을 가진 특정 토큰들에 선택적으로 주의(Attention)를 집중한다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L157](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L157).
- **Q, K, V의 수학적 정렬**: 질의 주체인 **쿼리(Query, Q)**, 검색 키인 **키(Key, K)**, 실제 정보를 지닌 **밸류(Value, V)** 간의 행렬곱 및 내적(Dot product) 연산을 통해 정보의 상호 유사도를 정밀하게 산출한다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L147](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L147).
- **스케일드 어텐션(Scaled Attention)**: 내적 유사도가 너무 비대해져 [[토크나이저(tokenizer)]]나 소프트맥스(Softmax) 활성화 함수의 기울기가 극단적으로 쏠리거나 소실되는 문제를 방지하기 위해 차원 크기의 제곱근($\sqrt{head\_dim}$)으로 보정한다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L161](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L161).
- **자기회귀적 생성의 기반**: 추론 과정에서 이전까지 생성된 모든 맥락을 "뒤돌아보며" 다음 글자를 예측하는 데 가장 중요한 정보가 무엇인지 실시간으로 판단한다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L159](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L159), [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L238](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L238).
- **알고리즘의 본질**: 안드레 카파시([[안드레 카파시(Andrej Karpathy)]])의 [[microGPT]] 구현이 보여주듯, 복잡한 프레임워크나 최적화 계층을 걷어낸 어텐션의 본질적 수학은 순수 파이썬의 단순한 행렬곱과 소프트맥스 연산 수십 줄로 환원 가능하다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L248](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L248).

## 상세

### 1. Q, K, V의 역할과 상호작용
어텐션 메커니즘은 입력 시퀀스의 각 토큰에 대해 세 가지 역할을 부여하여 정보를 대조합니다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L147](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L147).
- **Query (Q, 질의)**: "내가 지금 무엇을 찾고 있는가?"를 나타냅니다. 현재 상태를 대변하여 연관된 정보를 찾기 위해 다른 토큰들에게 질문을 던집니다.
- **Key (K, 키)**: "내가 어떤 정보를 담고 있는가?"를 나타냅니다. 데이터의 분류 태그 역할을 하며, 쿼리의 질문과 일치하는 정도를 대조하기 위해 사용됩니다.
- **Value (V, 값)**: "내가 실제로 전달할 구체적인 정보는 무엇인가?"를 의미합니다. 유사도 대조 결과에 따라 실제 모델의 출력으로 혼합되어 전달될 가치 정보입니다.

### 2. 수학적 연산 프로세스
어텐션 메커니즘은 쿼리와 키의 점곱(Dot product)을 통해 호환성 점수(compatibility score)를 구하고, 이를 정규화한 뒤 밸류를 가중 합산하는 방식으로 동작합니다.

1. **유사도 스코어 계산**: 쿼리 $q$와 이전 토큰들의 키 $k$에 대한 내적을 구합니다.
2. **보정(Scaling)**: 내적 결과의 분산이 커지는 것을 막기 위해 헤드 차원의 제곱근 $\sqrt{head\_dim}$으로 나누어 줍니다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L161](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L161). 이 보정이 없으면 소프트맥스 결과가 극단적인 확률(특정 토큰 하나만 1이고 나머지는 0)로 치달아 역전파([[역전파(backpropagation)]]) 시 그래디언트 소실을 유발하게 됩니다.
3. **소프트맥스(Softmax)**: 스코어 분포를 합이 1이 되는 확률 분포(어텐션 가중치)로 변환합니다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L157](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L157).
4. **밸류 혼합**: 획득한 어텐션 가중치를 각 토큰의 밸류 벡터 $v$에 곱해 최종 출력 벡터를 구합니다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L157](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L157).

### 3. [[멀티헤드 어텐션(Multi-Head Attention)]]으로의 확장
어텐션을 단일 채널로 수행하지 않고, 독립적인 여러 개의 헤드(Head)로 나누어 병렬 처리합니다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L163](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L163).
- 예컨대 [[microGPT]]에서는 16차원 임베딩을 4개의 헤드가 각자 4차원씩 담당하여 연산합니다.
- 각 어텐션 헤드는 모음에 집중하는 법, 최근 등장한 글자에 집중하는 법 등 각기 다른 문맥적 특징이나 관계성을 독립적으로 수집하며, 최종적으로 이 결과를 접합(Concatenate)하여 풍부한 고차원 문맥을 완성합니다.

### 4. [[잔차 연결]](Residual Connection)과의 시너지
어텐션 메커니즘을 통과한 출력 벡터는 그대로 다음 레이어로 넘어가지 않고, 원래 입력 벡터와 더해지는 [[잔차 연결]] 과정을 거칩니다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L167](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L167). 이는 어텐션이 새로 학습한 정보를 기존 지식에 더하는 고속도로 역할을 하며, 모델 깊이가 깊어져도 그래디언트 소실 없이 안정적으로 학습할 수 있는 기반을 제공합니다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L171](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L171).

## 예시

### [[microGPT]]에서의 순수 파이썬 어텐션 구현
[[안드레 카파시(Andrej Karpathy)]]의 [[microGPT]]에서는 외부 프레임워크의 추상화를 모두 걷어내고 순수 파이썬 루프와 리스트 컴프리헨션만으로 다음과 같이 어텐션을 계산합니다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L141-155](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L141-155).

```python
# 1단계. Q, K, V 계산 (선형 변환)
q = linear(x, state_dict[f'layer{li}.attn_wq'])  
k = linear(x, state_dict[f'layer{li}.attn_wk'])  
val = linear(x, state_dict[f'layer{li}.attn_wv'])

# 2단계. 스케일드 닷 프로덕트 어텐션 계산 (각 헤드별 병렬 계산 루프)
# q_h, k_h, v_h는 각 헤드의 차원에 맞게 슬라이싱된 값
attn_logits = [sum(q_h[j] * k_h[t][j] for j in range(head_dim)) / head_dim**0.5   
               for t in range(len(k_h))]  
attn_weights = softmax(attn_logits)  
head_out = [sum(attn_weights[t] * v_h[t][j] for t in range(len(v_h)))   
            for j in range(head_dim)]
```

### 문맥 생성 예시
모델이 `"Micha"`라는 인명 데이터를 학습하여 다음 문자를 생성할 때, 마지막 문자 `"a"`가 쿼리(Q)가 되어 이전의 `"M"`, `"i"`, `"c"`, `"h"`, `"a"`의 키(K) 벡터들과 어텐션 스코어를 계산합니다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L159](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L159)]. 이를 통해 이전에 등장했던 문자들의 정보(V) 중 다음 올 문자(예: 이름의 끝을 의미하는 `<EOS>`)를 결정하는 데 가장 유의미한 알파벳에 높은 가중치를 배분하여 최종 예측에 반영합니다 [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L159](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L159)].

## 충돌

- **인코더-디코더 정렬 vs 자가 어텐션**: 최초의 어텐션 메커니즘(Bahdanau attention 등)은 인코더와 디코더 사이의 소스 토큰과 타깃 토큰 간의 정렬(Alignment)을 위해 제안되었습니다. 그러나 [[트랜스포머 아키텍처]]에 이르러서는 동일한 시퀀스 내부 토큰 간의 관계를 분석하는 [[자가 어텐션(Self-Attention)]]으로 패러다임이 시프트하였습니다.
- **알고리즘의 본질 vs 대규모 최적화**: 1조 개의 매개변수 스케일을 학습하기 위해 PyTorch, CUDA, 분산 프레임워크 등의 복잡한 인프라가 필수적이지만, 어텐션 메커니즘을 구동하는 핵심 알고리즘의 본질 자체는 추가적인 외부 의존성 없이 순수 파이썬 수십 줄 내외로 축약될 만큼 단순한 수학적 원리입니다.

## 관련 노트

- [[자가 어텐션(Self-Attention)]]
- [[멀티헤드 어텐션(Multi-Head Attention)]]
- [[인코더-디코더 어텐션(Encoder-Decoder Attention)]]
- [[트랜스포머 아키텍처]]
- [[microGPT]]
- [[안드레 카파시(Andrej Karpathy)]]

## 출처

- `raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md`
- [Andrej Karpathy - [[microGPT]] Gist](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95)
