---
type: person
status: draft
core: false
tags:
  - llm
  - neural-network
  - programming
  - learning
aliases:
  - Andrej Karpathy
  - 안드레 카파시
  - 카파시
sources:
  - raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md
created: 2026-07-29
updated: 2026-07-29
---

# 안드레 카파시(Andrej Karpathy)

## 역할
- **OpenAI 공동 창립자 및 연구원**: 초기 생성형 인공지능 모델 연구에 참여하고 OpenAI 출범에 핵심적인 기여를 함.
- **테슬라(Tesla) AI 디렉터**: Autopilot 및 FSD(Full Self-Driving) 개발 부서의 총괄 책임자 역할을 역임함.
- **AI 교육자 및 오픈소스 개발자**: 복잡하게 구현된 딥러닝 모델의 뼈대를 밑바닥부터 파악할 수 있도록 돕는 교육용 초경량 오픈소스 프로젝트를 다수 제작하고 개인 지식 관리(PKM) 패러다임을 제안함.

## 대표 주장
- **알고리즘의 본질적 극단화**: 복잡한 PyTorch, TensorFlow 프레임워크나 외부 의존 패키지에 묻히기 전에, 인공신경망의 자동 미분(autograd), 트랜스포머 아키텍처의 수학적 본질을 맨땅에서 온전히 이해해야 한다고 주장함. 대규모 연산 인프라나 최적화 코드는 성능 향상과 스케일링을 위한 것일 뿐, 인공지능 알고리즘의 개념적 코어는 한 장의 소스 파일에 모두 담길 만큼 단순하다는 입장을 고수함.
- **AI 중심 세컨드 브레인(Second Brain) 구축**: 사람이 직접 노트를 작성하고 엮는 전통적 방식에서 벗어나, 사람이 원천 자료(Raw)의 수집과 질문만을 담당하고 지식의 요약·연결·위키 빌드·무결성 점검은 LLM 에이전트가 자동 수행하는 [[Karpathy 지식 시스템]]을 전파함.

## 주요 자료
- **microGPT (2026년 2월 11일 공개)**: 외부 의존성 없이 단 243줄의 순수 파이썬(Python)과 기초 수학만으로 구현된 GPT 학습 및 추론 단일 파일 오픈소스 프로젝트. [raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md](file:///Users/railscraft/Obsidian/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md)
- **llm.c (2024년)**: PyTorch 등 별도 프레임워크 없이 순수 C/CUDA만을 사용하여 대규모 언어 모델을 학습시키는 초경량 고성능 레포지토리.
- **nanoGPT (2023년)**: 상용 수준의 대규모 언어 모델 학습이 가능한 극도로 깔끔하고 단순화된 GPT 구현체.
- **minGPT 및 micrograd (2020년)**: PyTorch 기반의 미니멀한 GPT 구현체 및 40줄 남짓의 초소형 자동 미분(autograd) 엔진.
- **Towards Deep Learning 블로그**: 최신 AI 연구 및 딥러닝 원리를 대중적인 언어로 전달하는 개인 미디어 채널.

## 상세

### microGPT: 243줄로 구현한 GPT의 아키텍처와 본질
2026년 2월 11일, 안드레 카파시가 공개한 **microGPT**는 PyTorch나 TensorFlow와 같은 거대 프레임워크와 외부 패키지(requirements.txt) 종속성 없이, 오직 파이썬 기본 라이브러리(`os`, `math`, `random`, `argparse`)만을 사용하여 GPT 모델을 바닥부터 학습 및 실행할 수 있는 파일이다. 이는 아기 이름 목록 텍스트 파일 하나를 보고 패턴을 학습한 뒤, 세상에 존재한 적 없는 가짜 이름을 스스로 생성하는 형태로 동작한다. 비록 크기는 마이크로 스케일이지만, 작동 원리는 GPT-4와 동일한 수학적 기반을 따른다.

1. **토크나이저(Tokenizer)**:
   - 컴퓨터가 문자를 이해할 수 있도록 문자와 숫자를 일대일 대응하는 단순 인덱스 매핑 구조(`stoi`, `itos`)이다.
   - 문장의 시작을 알리는 `<BOS>`(Beginning Of Sequence)와 끝을 알리는 `<EOS>`(End Of Sequence) 특수 토큰을 도입하였다.
   - 대규모 언어 모델(LLM)이 사용하는 정교한 BPE(Byte Pair Encoding) 토크나이저의 개념적 원형을 단순화하여 수록했다.
2. **오토그라드 엔진(Autograd Engine)**:
   - PyTorch의 자동 미분 엔진을 단 40줄짜리 `Value` 클래스로 직접 구현했다.
   - 인공신경망의 가중치(weights)를 세밀하게 조정하여 오차를 줄여나가는 역전파(backpropagation) 메커니즘을 내포한다.
   - `Value` 객체는 실물 값(`data`), 손실의 기울기(`grad`), 그래디언트를 계산할 연산 함수(`_backward`), 피연산자 자식 노드(`_prev`)를 관리한다.
   - 수학 연산(덧셈, 곱셈, 거듭제곱)을 거칠 때마다 백그라운드에서 연산 그래프가 자동으로 빌드된다. 마지막에 `.backward()`를 호출하면 위상 정렬(topological sort)에 의해 출력부터 입력까지의 역방향으로 흐르며 미적분의 연쇄 법칙(chain rule)에 맞추어 `grad`가 자동 누적된다.
3. **가중치(Weight) 파라미터**:
   - `wte` (Word Token Embedding): 각 토큰 ID를 다차원 벡터(기본 16차원)로 변환해, 다차원 공간 상에 비슷한 문자들끼리 가까이 위치하도록 성향을 부여한다.
   - `wpe` (Word Position Embedding): 문자들의 문맥상 상대적 위치를 인코딩하여 모델에 전달한다.
   - 각 트랜스포머 레이어에는 어텐션을 위한 Query 행렬 `attn_wq`, Key 행렬 `attn_wk`, Value 행렬 `attn_wv`와 출력 프로젝션 행렬 `attn_wo`, 그리고 다층 신경망 연산용 `mlp_fc1` 및 `mlp_fc2` 파라미터가 포함된다.
   - 기본 임베딩 차원 16, 어텐션 헤드 4개, 1개 레이어, 시퀀스 길이 8 기준으로 전체 파라미터는 약 4,000개 수준이다.
4. **트랜스포머 아키텍처**:
   - **RMSNorm**: 본격적인 연산을 하기 전에 루트 평균 제곱(root-mean-square) 값으로 입력을 나누어주어 값이 폭발(exploding)하거나 소멸(vanishing)하는 것을 방지하는 정규화 단계이다.
   - **어텐션(Attention) 메커니즘**: Query(질의), Key(키), Value(값)의 개념을 바탕으로 한다. 현재 분석 중인 토큰(Query)이 이전의 문맥 토큰들(Key)과 얼마나 수학적 유사성(내적 점수)을 갖는지 계산한 뒤, 소프트맥스(softmax) 확률 분포로 만들어 Value 정보들을 적절한 가중치로 융합한다. 멀티헤드 어텐션을 채택해 16차원 공간을 4개로 쪼개어 병렬 계산함으로써 모음 수집, 단어 형태 파악 등 다양한 관점에서 정보를 처리하게 한다.
   - **잔차 연결(Residual Connection)**: 어텐션 연산 결과물에 원래 입력 데이터를 다시 더해줌으로써, 신경망이 깊어져도 그래디언트가 소실되지 않고 원활히 흐를 수 있는 바이패스를 마련한다.
   - **MLP (다층 퍼셉트론)**: 어텐션에서 압축된 정보를 처리하기 위해 16차원 벡터를 64차원(`4 * n_embd`)으로 확장하고 비선형 활성화 함수인 제곱 ReLU(squared ReLU)를 통과시켜 의미 있는 데이터만을 거른 뒤, 다시 16차원으로 복원한다.
5. **학습 루프 및 옵티마이저**:
   - 음의 로그 가능도(negative log likelihood) 손실 함수를 바탕으로 다음 토큰의 예측 성능을 측정한다.
   - Adam 옵티마이저를 사용하여 가중치를 점진적으로 업데이트한다. 단순 경사하강법이 아닌, 이전 방향성(모멘텀 `m`)과 기울기 크기의 변동성(`v`)을 종합하여 가중치가 독점되는 것을 정규화한다.
6. **자기회귀적(Autoregressive) 추론**:
   - 시퀀스의 시작인 BOS 토큰을 먼저 주입한 뒤 다음 토큰의 예측 확률 분포를 구하고, 이를 무작위 샘플링(sampling)하여 다시 입력에 집어넣는 방식을 반복한다. 이 순차 루프는 EOS 토큰이 발견되거나 시퀀스 블록 길이에 도달할 때까지 진행된다.

## 충돌
- **인프라 규모화 대 알고리즘 에센스**: 전 세계 AI 업계가 연간 4,000억 달러 이상을 인프라(GPU, 분산 처리 프레임워크) 확장에 집중시키며 극단적인 자본 경쟁을 치르는 반면, 카파시는 지능을 학습시키는 핵심 알고리즘의 정수가 243줄의 순수 파이썬 스크립트만으로 표현될 수 있음을 지적한다. 즉, 최신 기술 환경의 모든 복잡성은 오직 "연산의 최적화와 효율성"을 위한 하드웨어 도구일 뿐이며, AI 개념의 핵심 원리는 변하지 않는 수학과 기초 알고리즘에 수렴한다는 대립적 통찰을 제시한다.

## 관련 노트
- [[안드레 카파시의 LLM Wiki 워크플로우(Andrej Karpathy's LLM Wiki Workflow)]]
- [[Karpathy 지식 시스템]]
- [[AI 세컨드 브레인]]
- [[제텔카스텐]]

## 출처
- `raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md`
- 안드레 카파시 microGPT GitHub Gist: [https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95)
- 안드레 카파시 Towards Deep Learning: [https://towardsdeeplearning.com/](https://towardsdeeplearning.com/)
