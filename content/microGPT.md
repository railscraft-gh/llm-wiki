---
type: tool
status: draft
core: false
tags:
  - llm
  - tool
aliases: []
sources:
  - raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md
created: 2026-07-29
updated: 2026-07-29
---

# microGPT

## 한 줄 정의
외부 의존성 없이 단 243줄의 순수 파이썬(Python)과 기초 수학만으로 GPT 모델의 학습과 추론을 구현한 [[안드레 카파시(Andrej Karpathy)]]의 교육용 미니멀리즘 AI 프로젝트.

## 핵심 요지
- **극단적 단순화와 무의존성**: PyTorch나 TensorFlow 등의 외부 프레임워크를 전혀 배제하고, 오직 Python 표준 라이브러리(`os`, `math`, `random`, `argparse`)만 사용하여 GPT-4와 수학적으로 동일한 메커니즘을 243줄의 단일 파일로 구현했습니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L9](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L9), [L13](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L13)].
- **밑바닥에서 구현한 Autograd 엔진**: 약 40줄의 `Value` 클래스를 통해 인공신경망 역전파(Backpropagation)의 핵심인 자동 미분 및 위상 정렬(Topological Sort)을 직접 구현했습니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L49](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L49), [L87](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L87)].
- **GPT 핵심 아키텍처의 온전한 매핑**: 토크나이저(Tokenizer), 단어 및 위치 임베딩(Word & Position Embedding), RMSNorm, 스케일드 멀티헤드 어텐션(Scaled Multi-head Attention), [[잔차 연결]](Residual Connection), MLP(Squared ReLU 기반 Feed-forward), Adam 옵티마이저, 자기회귀적(Autoregressive) 생성 등 최신 [[LLM]] 작동 원리를 마이크로 스케일(매개변수 약 4,000개)로 담아냈습니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md#L114](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L114)].
- **카파시의 압축 여정 완결판**: 2020년 micrograd/minGPT를 시작으로 nanoGPT(2023), llm.c(2024)를 거쳐 핵심 알고리즘만 남긴 최종 미니멀리즘 교육 프로젝트입니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L250](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L250)].

## 상세
microGPT는 아기 이름 목록 데이터셋을 기반으로 문자 수준의 패턴을 학습하여 그럴듯한 가상의 이름을 생성하는 형태로 작동합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L17](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L17)]. 규모는 매우 작지만 ChatGPT가 인터넷 전체의 텍스트를 학습하는 방식과 근본적인 수학적 알고리즘이 완전히 동일합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L19](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L19)].

### 1. 토크나이저 (Tokenizer)
입력 텍스트 문자를 숫자로 인코딩하기 위해 문자 레벨 토큰 사전을 사용합니다. 데이터셋의 모든 문자를 정렬한 뒤 인덱스를 매핑하고, 새로운 시퀀스의 시작을 알리는 `<BOS>`(Beginning Of Sequence)와 끝을 알리는 `<EOS>`(End Of Sequence) 특별 토큰을 추가합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L32](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L32)]. 문자열과 정수를 상호 변환하는 `stoi`와 `itos` 매핑 테이블이 토크나이저의 전부입니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L34](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L34)].

### 2. 오토그라드 엔진 (Autograd Engine)
자동 미분 및 연산 그래프 역전파는 `Value` 클래스를 통해 순수 파이썬으로 빌드됩니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L42](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L42)].
- **덧셈 (`__add__`)**: 출력 그래디언트를 부모 노드들에게 그대로 복사하여 전달합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L63](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L63)].
- **곱셈 (`__mul__`)**: 연쇄 법칙(Chain Rule)에 따라 상대방의 값(data)에 출력 그래디언트를 곱한 결과를 각 노드에 전달합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L75](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L75)].
- **역방향 패스 (`backward`)**: 순방향 그래프 생성 과정에서 누적된 관계 노드들을 위상 정렬(Topological Sort)한 뒤, 출력에서 입력 방향으로 역순 순회하며 `_backward()` 메서드를 호출합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L87](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L87)].

### 3. 모델 아키텍처 및 파라미터 (Model Architecture & Parameters)
기본 설정은 임베딩 차원 16, 어텐션 헤드 4개, 트랜스포머 레이어 1개, 컨텍스트 길이(블록 크기) 8로 구성되어 약 4,000개의 가중치 파라미터를 가집니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L114](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L114)].
- **임베딩 (Embedding)**: 단어 임베딩 `wte`와 위치 임베딩 `wpe`를 각 인덱스에서 조회한 뒤 더하여 토큰 정보와 위치 정보를 동시 매핑합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L122](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L122)].
- **RMSNorm**: 그래디언트 폭발/소실 방지를 위한 정규화 기법으로, 오리지널 LayerNorm 대신 각 토큰 벡터의 루트 평균 제곱(Root Mean Square)을 활용한 RMSNorm을 채택했습니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L130](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L130)].
- **스케일드 멀티헤드 어텐션 (Scaled Multi-head Attention)**: 각 헤드별로 Query, Key, Value 벡터를 계산하고, Query와 Key의 내적값을 $\sqrt{head\_dim}$으로 나누어 스케일링을 수행한 뒤 softmax를 거쳐 Value 값들을 혼합합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L151](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L151)].
- **[[잔차 연결]] (Residual Connection)**: 그래디언트의 흐름을 보장하기 위해 어텐션 출력값에 원래 입력값을 더해줍니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L167](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L167)].
- **MLP**: 비선형성 강화를 위해 GELU 대신 단순화한 Squared ReLU(음수는 0, 양수는 제곱)를 활성화 함수로 쓰고 중간 차원을 64차원(4배)으로 확장한 뒤 다시 16차원으로 압축합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L175](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L175), [L185](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L185)].
- **가중치 공유 (Weight Tying)**: 학습 효율성을 위해 어휘 사전 프로젝션 행렬로 입력단 `wte` 가중치를 재사용합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L189](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L189)].

### 4. 학습 및 추론 (Training & Inference)
- **학습 루프**: 음의 로그 가능도(Negative Log Likelihood) 손실 함수와 물리적 모멘텀 및 크기 정규화를 적용한 Adam 옵티마이저를 사용하여 파라미터를 업데이트합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L207](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L207), [L213](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L213)].
- **자기회귀 생성**: 추론 시 BOS로 시작하여 모델이 예측한 다음 글자의 확률 분포에서 무작위 샘플링(random.choices)을 수행하고, 이를 다시 입력값으로 반영하는 자기회귀(Autoregressive) 생성을 반복합니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L225](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L225)].

## 예시
microGPT 코드는 추가적인 프레임워크나 패키지 설치 과정이 필요 없이, 카파시의 Gist 저장소에서 파이썬 코드 하나만 다운로드하여 다음과 같이 직접 실행 및 학습할 수 있습니다 [[Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md:L258](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L258)].

```bash
# microGPT 실행 및 로컬 학습 시작 (추가 라이브러리 설치 필요 없음)
python microgpt.py
```

## 관련 노트
- [[트랜스포머 아키텍처]]
- [[멀티헤드 어텐션(Multi-Head Attention)]]
- [[잔차 연결은 그래디언트 흐름을 유지하고 학습 선택권을 부여한다]]
- [[레이어 정규화는 배치 전체가 아닌 토큰 단위로 작동한다]]
- [[Thinking과 Understanding 분리]]
- [[Karpathy 지식 시스템]]

## 출처
- [raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md)
- [Karpathy의 GitHub Gist - microGPT](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95)