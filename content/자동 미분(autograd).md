---
type: concept
status: draft
core: false
tags:
  - neural-network
  - algorithm
aliases: []
sources: ["raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md"]
created: 2026-07-29
updated: 2026-07-29
---

# 자동 미분(autograd)

## 한 줄 정의

인공신경망 학습에서 수치적 연산 그래프(computation graph)를 구축하고 미적분학의 연쇄 법칙(chain rule)을 활용해 [[역전파(backpropagation)]] 과정에서 가중치들의 기울기(gradient)를 역방향으로 자동 계산해 주는 알고리즘입니다.

## 핵심 요지

- **수치 추적 및 그래프 구축**: 연산 단위마다 입력과 출력을 노드로 묶어 백그라운드에서 동적으로 연산 그래프를 형성합니다.
- **연쇄 법칙(Chain Rule) 구현**: 각 연산별 국소 미분(local gradient) 규칙에 따라 출력 오차에 대한 입력값의 미세 변화 비율을 역방향으로 전파합니다.
- **위상 정렬(Topological Sort) 활용**: 역방향 연산(.backward()) 시 노드들을 출력부에서 입력부 방향의 올바른 의존성 순서로 정렬하여 오차를 흐르게 합니다.

## 상세

자동 미분(autograd) 엔진은 인공신경망(neural network) 학습에 필수적인 [[역전파 알고리즘]]의 핵심 요소입니다.

[[안드레 카파시(Andrej Karpathy)]]는 `microGPT`의 핵심으로 PyTorch의 autograd 동작 원리를 약 40줄의 순수 파이썬(Python) 코드로 압축해 `Value` 클래스로 직접 구현했습니다.

### 1. Value 클래스의 기본 구조
[[자동 미분 엔진]]에서 모든 가중치와 수치 데이터는 `Value` 객체로 감싸집니다. 이 클래스는 다음과 같은 주요 인자들을 추적합니다.
- `data`: 실제 데이터의 수치값.
- `grad`: 이 값이 미세하게 변할 때 최종 손실(loss)이 얼마나 변하는지 나타내는 기울기(gradient) 값. 초기화 시 0으로 시작합니다.
- `_backward`: 각 연산 노드에서 국소 그래디언트(local gradient)를 연쇄 법칙에 따라 입력 노드로 전달하는 람다 함수(연산 지침).
- `_prev`: 연산 그래프에서 현재 노드를 생성하는 데 사용된 이전 노드들의 집합 (`_children`으로 추적).

### 2. 연산별 연쇄 법칙의 구현
연산이 수행될 때마다 `Value` 클래스는 다음과 같은 미적분 규칙에 따라 새로운 노드를 반환하고, 이 노드의 `_backward`에 기울기 흐름 지침을 정의합니다.

#### 덧셈 연산 ($c = a + b$)
덧셈의 미분 규칙은 그래디언트를 그대로 입력 노드들에 분배(distribute)하는 것입니다. $a$가 1만큼 늘어나면 $c$도 정확히 1만큼 늘어나기 때문입니다.
- $\frac{\partial Loss}{\partial a} = 1 \times \frac{\partial Loss}{\partial c}$
- $\frac{\partial Loss}{\partial b} = 1 \times \frac{\partial Loss}{\partial c}$

#### 곱셈 연산 ($c = a \times b$)
곱셈의 미분 규칙은 기울기 스왑(swap) 규칙을 적용해 상대방의 데이터 값을 현재 누적된 그래디언트에 곱하여 전달합니다.
- $\frac{\partial Loss}{\partial a} = b \times \frac{\partial Loss}{\partial c}$
- $\frac{\partial Loss}{\partial b} = a \times \frac{\partial Loss}{\partial c}$

이러한 연산들이 반복되며 전체 네트워크에 적용되고, 최종적으로 [[잔차 연결은 그래디언트 흐름을 유지하고 학습 선택권을 부여한다|잔차 연결(residual connection)]]과 같은 메커니즘을 거치면서도 안정적으로 그래디언트가 소실되지 않고 흐를 수 있도록 인바운드와 아웃바운드의 그래디언트 연결을 보장합니다.

### 3. 역방향 패스(Backward Pass)와 위상 정렬
전체 연산 그래프에서 그래디언트가 올바른 역순으로 흐르도록 하기 위해서는 출력부 노드부터 시작하여 입력부 노드 순으로 연산이 이루어져야 합니다. 
이를 위해 **위상 정렬(Topological Sort)**을 사용해 그래프의 DFS(깊이 우선 탐색)를 수행하고 노드를 역순 정렬한 뒤, 가장 끝 노드의 기울기(`grad = 1`)에서부터 거꾸로 `_backward()` 연산을 하나씩 수행해 나갑니다.

## 예시

다음은 안드레 카파시의 `microGPT`에 구현된 `Value` 클래스의 핵심 덧셈/곱셈 연산 및 위상 정렬 기반의 역방향 전파 구현체 예시입니다.

```python
class Value:  
    def __init__(self, data, _children=(), _op=''):  
        self.data = data  
        self.grad = 0  
        self._backward = lambda: None  
        self._prev = set(_children)

    def __add__(self, other):  
        other = other if isinstance(other, Value) else Value(other)
        out = Value(self.data + other.data, (self, other), '+')  
        def _backward():  
            self.grad += out.grad  
            other.grad += out.grad  
        out._backward = _backward  
        return out

    def __mul__(self, other):  
        other = other if isinstance(other, Value) else Value(other)
        out = Value(self.data * other.data, (self, other), '*')  
        def _backward():  
            self.grad += other.data * out.grad  
            other.grad += self.data * out.grad  
        out._backward = _backward  
        return out

    def backward(self):  
        topo = []  
        visited = set()  
        def build_topo(v):  
            if v not in visited:  
                visited.add(v)  
                for child in v._prev:  
                    build_topo(child)  
                topo.append(v)  
        build_topo(self)  
        self.grad = 1  
        for v in reversed(topo):  
            v._backward()
```

위의 40줄의 엔진을 이용하면, 복잡한 인공신경망의 미분 연산도 `loss.backward()` 호출 한 번으로 가중치들의 그래디언트(`w.grad`)를 자동으로 구해낼 수 있습니다.

## 충돌

*(기존 위키 파일 및 외부 충돌 내용 없음)*

## 관련 노트

- [[잔차 연결은 그래디언트 흐름을 유지하고 학습 선택권을 부여한다]]
- [[Karpathy 지식 시스템]]
- [[쓰라린 교훈]]

## 출처

- `raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md`
- [microGPT Gist by Andrej Karpathy](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95)