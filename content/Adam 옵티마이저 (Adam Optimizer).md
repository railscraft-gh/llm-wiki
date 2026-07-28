---
type: concept
status: draft
core: false
tags:
  - llm
  - algorithm
aliases:
  - Adam
  - Adam optimizer
  - 아담 옵티마이저
sources:
  - raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md
created: 2026-07-29
updated: 2026-07-29
---

# Adam 옵티마이저 (Adam Optimizer)

## 한 줄 정의

딥러닝 모델 학습 과정에서 경사하강법(gradient descent)에 모멘텀(momentum)과 개별 매개변수별 적응형 학습률(adaptive learning rate)을 결합하여 가중치를 효율적으로 업데이트하는 최적화 알고리즘(optimizer)이다.

## 핵심 요지

- **기억력 기반 업데이트**: 이전 그래디언트들의 움직임 정보(모멘텀)를 반영하여 매개변수를 업데이트함으로써 지역 최솟값(local minima) 탈출을 돕는다.
- **적응형 학습률(Adaptive Learning Rate)**: 매개변수마다 그래디언트 크기의 제곱 평균을 추적하여, 업데이트 빈도에 따라 학습률을 다르게 조정(정규화)한다.
- **편향 수정(Bias Correction)**: 학습 초기 단계(step)에서 모멘텀과 제곱 평균이 0으로 편향되는 현상을 방지하는 보정 단계(`m_hat`, `v_hat` 계산)를 거친다.
- **현대 딥러닝의 글로벌 표준**: GPT-4, DALL-E 등 현대 주요 대규모 언어 모델(LLM)과 생성형 AI 시스템 학습에 범용적으로 사용된다.

## 상세

Adam(Adaptive Moment Estimation)은 모멘텀(Momentum) 방식과 RMSProp의 장점을 결합한 최적화 알고리즘이다. 가중치를 업데이트할 때 단순 그래디언트의 방향만 따르지 않고, 모멘텀과 그래디언트 제곱 평균의 이동 평균을 함께 사용한다.

작동 메커니즘은 매 학습 단계(step)마다 다음과 같다:

1. **1차 모멘트(Momentum, $m$) 추적**:
   최근 그래디언트들의 지수 이동 평균(exponential moving average)을 구한다. 이는 언덕에서 공이 굴러 내려갈 때 가속도가 붙는 물리 법칙과 유사하여, 학습 과정에서의 진동(oscillation)을 줄이고 최적값으로 빠르게 수렴하도록 돕는다.
   $$m_t = \beta_1 m_{t-1} + (1 - \beta_1) g_t$$
2. **2차 모멘트(Variance, $v$) 추적**:
   최근 그래디언트의 제곱 값들의 지수 이동 평균을 구한다. 매개변수마다 업데이트 빈도나 강도에 맞춰 학습률의 크기를 정규화하는 역할을 수행한다. 즉, 그래디언트가 너무 커서 값이 급격히 변하는 가중치는 학습 속도를 줄이고, 완만하게 변하는 가중치는 학습 속도를 유지한다.
   $$v_t = \beta_2 v_{t-1} + (1 - \beta_2) g_t^2$$
3. **편향 수정(Bias Correction)**:
   $m_0$와 $v_0$는 처음에 0으로 초기화되기 때문에, 학습 초기에는 이동 평균이 0에 가깝게 편향되는 문제가 발생한다. 이를 해결하기 위해 아래 식과 같이 단계(t)의 거듭제곱을 활용해 보정한다.
   $$\hat{m}_t = \frac{m_t}{1 - \beta_1^t}, \quad \hat{v}_t = \frac{v_t}{1 - \beta_2^t}$$
4. **가중치 업데이트**:
   보정된 모멘텀과 학습률을 바탕으로 가중치를 업데이트하되, 2차 모멘트의 제곱근으로 나누어 줌으로써 개별 적응형 학습률을 적용한다. 분모가 0이 되어 발생하는 수치적 불안정성을 피하기 위해 아주 작은 값인 $\epsilon$(eps)을 더해준다.
   $$\theta_t = \theta_{t-1} - \frac{\eta}{\sqrt{\hat{v}_t} + \epsilon} \hat{m}_t$$

## 예시

안드레 카파시(Andrej Karpathy)가 구현한 [[microGPT]](243줄의 순수 파이썬 GPT) 내부에 포함된 Adam 옵티마이저의 업데이트 코드이다. 별도의 딥러닝 라이브러리 없이 순수 파이썬 코드로 구현되어 작동 원리가 직접적으로 드러난다.

```python
# p.grad: 역전파(backpropagation)를 통해 계산된 매개변수 p의 그래디언트
# m: 1차 모멘텀 리스트, v: 2차 모멘텀 리스트, step: 현재 학습 단계
# beta1, beta2: 지수 감쇠 비율 (일반적으로 beta1=0.9, beta2=0.999 사용)
# lr_t: 학습률(learning rate), eps_adam: 수치적 안정성을 위한 epsilon (보통 1e-8)

m[i] = beta1 * m[i] + (1 - beta1) * p.grad  
v[i] = beta2 * v[i] + (1 - beta2) * p.grad ** 2  
m_hat = m[i] / (1 - beta1 ** (step + 1))  
v_hat = v[i] / (1 - beta2 ** (step + 1))  
p.data -= lr_t * m_hat / (v_hat ** 0.5 + eps_adam)
```

## 충돌

- 기존 결론과의 충돌 사항 없음.

## 관련 노트

- [[microGPT]]
- [[역전파(backpropagation)]]
- [[자동 미분(autograd)]]

## 출처

- `raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md`
