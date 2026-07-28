---
type: workflow
status: draft
core: false
tags:
  - neural-network
  - algorithm
  - workflow
aliases:
  - 역전파
  - Backpropagation
sources:
  - raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md
created: 2026-07-29
updated: 2026-07-29
---

# 역전파(backpropagation)

## 한 줄 정의

인공신경망 학습 과정에서 최종 손실(loss, 오차)을 줄이기 위해 미적분학의 연쇄 법칙(chain rule)과 연산 그래프(computation graph)의 위상 정렬(topological sort)을 사용하여, 출력 레이어에서 입력 레이어 방향으로 파라미터별 그래디언트(gradient, 기울기)를 누적하고 가중치를 조정하는 역방향 제어 워크플로입니다.

## 핵심 요지

- **오차 역방향 전파**: 순방향 패스(forward pass)로 계산된 예측 손실을 기점으로 시작하여, 출력단에서 입력단으로 각 연산 노드를 역으로 거치며 최종 손실에 대한 파라미터의 민감도(기울기)를 계산합니다.
- **연쇄 법칙(Chain Rule)의 연속 적용**: 신경망 내부의 수많은 합성함수 연산에서 최종 출력 손실에 대한 각 가중치(weights)의 편미분 값을 구하기 위해, 이전 노드로부터 전달된 그래디언트에 해당 연산 노드의 국소 미분(local gradient) 값을 곱하여 누적합니다.
- **위상 정렬 기반 역행 순서 보장**: 연산 그래프에서 임의의 노드 그래디언트를 구하기 전에 해당 노드를 참조하는 모든 후속 노드의 그래디언트 계산이 완료되어 있어야 하므로, 위상 정렬을 통해 계산의 역행 순서를 엄격히 제어합니다.
- **최적화 연계**: 역전파를 통해 계산이 완료된 파라미터별 누적 그래디언트를 옵티마이저(optimizer, 최적화기)가 수집하여 가중치 값을 업데이트합니다.

## 절차

인공신경망의 한 단계 학습 루프(training loop) 내에서 역전파가 실행되는 흐름은 다음과 같은 순서로 진행됩니다.

1. **순방향 패스 (Forward Pass) 및 그래프 구축**:
   - 입력 데이터(예: 텍스트 토큰 ID)가 모델의 각 레이어(임베딩, [[자가 어텐션(Self-Attention)|자가 어텐션]], [[피드포워드 신경망(Feed-Forward Networks)|MLP]] 등)를 거쳐 최종 예측값(logits)과 손실(loss)로 변환됩니다.
   - 각 연산이 실행될 때마다 [[자동 미분(autograd)]] 엔진은 연산의 입력값(children)과 종류(operator)를 추적하여 동적으로 연산 그래프(computation graph)를 메모리에 빌드합니다.

2. **위상 정렬 (Topological Sort)**:
   - 계산된 최종 손실 노드를 시작점으로 설정하여 전체 연산 그래프를 깊이 우선 탐색(DFS, Depth-First Search) 방식으로 순회합니다.
   - 노드 간의 의존성을 고려하여, 부모 노드의 그래디언트가 자식 노드보다 반드시 먼저 계산되도록 정렬된 노드 리스트를 구성합니다.

3. **시작 그래디언트(Base Gradient) 초기화**:
   - 역전파의 시작점이 되는 최종 손실 노드의 그래디언트(`loss.grad`)를 `1.0`으로 설정합니다. 자기 자신에 대한 변화율은 $1$이기 때문입니다.

4. **역방향 전파 (Backward Pass) 연산**:
   - 위상 정렬된 노드 리스트의 역순(출력부 $\rightarrow$ 입력부)으로 탐색하며 각 노드의 역방향 연산(`_backward()`)을 차례로 실행합니다.
   - 각 연산 노드는 다음의 미적분 규칙에 맞춰 입력 노드들의 그래디언트에 오차를 누적합니다.
     - **덧셈 노드 ($c = a + b$)**: 흘러 들어온 그래디언트를 자식 노드들에 그대로 동일하게 복사하여 전파합니다. ($\text{grad}_a \gets \text{grad}_a + \text{grad}_c$)
     - **곱셈 노드 ($c = a \times b$)**: 연산 시점의 상대방 노드 데이터 값을 곱해 전파합니다. 스왑(swap) 규칙이 적용되어 $a$의 자식 그래디언트는 $\text{grad}_c \times b.\text{data}$가 됩니다.
     - **활성화 함수 노드 (예: ReLU)**: 입력이 0보다 큰 경우에만 그래디언트를 통과시키고, 0 이하인 경우는 그래디언트 흐름을 차단(0으로 설정)합니다.

5. **가중치 업데이트**:
   - 연산 그래프의 최하단 입력단(가중치 파라미터)까지 역방향 전파가 완료되면, 각 가중치 `Value` 객체에는 최종 오차에 대한 고유한 그래디언트 값(`grad`)이 누적됩니다.
   - 이 그래디언트를 옵티마이저가 수집하고, 모멘텀(momentum)과 정규화 스케일을 반영하여 가중치 값을 업데이트합니다.

## 예시 시나리오

[[안드레 카파시(Andrej Karpathy)]]가 빌드한 `microGPT`의 수치 연산 및 오토그라드 엔진을 기반으로 수동 역전파가 흐르는 과정의 예시입니다.

```python
# 1. 가중치 매개변수 및 입력 데이터 정의 (초기화)
w = Value(0.5)   # 가중치
x = Value(2.0)   # 입력 데이터
b = Value(-1.0)  # 편향(bias)

# 2. 순방향 패스 (Forward Pass)
# 연산 그래프가 백그라운드에서 빌드됨
u = w * x  # u.data = 1.0 (w와 x를 자식으로 가짐, op='*')
v = u + b  # v.data = 0.0 (u와 b를 자식으로 가짐, op='+')
loss = v   # 최종 손실 노드로 설정

# 3. 역전파 (Backpropagation) 실행
# loss.backward() 호출 시 위상 정렬 역순 정렬: [loss, v, u, w] 순으로 전파
loss.grad = 1.0  # 시작값 1.0 설정

# 1) v = u + b의 _backward() 호출
u.grad += loss.grad  # 1.0 누적
b.grad += loss.grad  # 1.0 누적

# 2) u = w * x의 _backward() 호출 (스왑 미분 규칙 적용)
w.grad += x.data * u.grad  # 2.0 * 1.0 = 2.0 누적
x.grad += w.data * u.grad  # 0.5 * 1.0 = 0.5 누적

# 역전파 완료 후 가중치 w에 누적된 그래디언트(w.grad)는 2.0이 됨
```

만약 이 신경망의 단계를 깊게 쌓는다면 그래디언트가 소실(vanishing)되거나 폭발(exploding)할 수 있으며, 이를 방지하기 위해 [[잔차 연결은 그래디언트 흐름을 유지하고 학습 선택권을 부여한다|잔차 연결(residual connection)]]을 활용해 그래디언트가 막힘없이 직접 전파될 수 있는 경로를 확보하는 방식으로 인프라를 보강합니다.

## 충돌

*(기존 위키 파일 및 외부 충돌 내용 없음)*

## 관련 노트

- [[자동 미분(autograd)]]
- [[잔차 연결은 그래디언트 흐름을 유지하고 학습 선택권을 부여한다]]
- [[순환 신경망(RNN, Recurrent Neural Networks)]]
- [[자가 어텐션(Self-Attention)]]
- [[피드포워드 신경망(Feed-Forward Networks)]]

## 출처

- `raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md`
- [microGPT Gist by Andrej Karpathy](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95)
