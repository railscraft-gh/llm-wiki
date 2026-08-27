---
type: concept
status: draft
core: false
tags:
  - llm
aliases: []
sources: ["raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md"]
created: 2026-07-29
updated: 2026-07-29
---

# 토크나이저(tokenizer)

## 한 줄 정의

컴퓨터가 직접 이해하지 못하는 텍스트 데이터를 모델이 처리할 수 있는 숫자(정수) 형식으로 변환(인코딩)하고, 모델의 숫자 출력을 다시 인간이 읽을 수 있는 텍스트로 복원(디코딩)하는 데이터 전처리(preprocessing) 구성 요소이다.

## 핵심 요지

- **인코딩과 디코딩**: 컴퓨터는 텍스트를 숫자로 다루기 때문에, 문자를 정수 ID로 바꾸는 인코딩(encoding)과 이를 다시 문자로 복원하는 디코딩(decoding)이 필수적이다.
- **문자-정수 쌍 딕셔너리**: 가장 단순한 토크나이저는 중복을 제거한 전체 문자 집합에서 문자를 키로, 정수를 값으로 매핑하는 [stoi](file:///Users/railscraft/[[Obsidian]]/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L27) (string to integer) 및 그 반대 방향의 [itos](file:///Users/railscraft/[[Obsidian]]/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L28) (integer to string)의 딕셔너리 쌍으로 구현된다.
- **특별 토큰(special token) 정의**: 시퀀스의 시작을 나타내는 `<BOS>` (Beginning Of Sequence)와 끝을 알려주는 `<EOS>` (End Of Sequence) 등의 토큰을 어휘 사전(vocabulary)에 인위적으로 추가하여 모델에게 시퀀스의 경계를 학습시킨다.
- **BPE(Byte Pair Encoding) 기반 최적화**: ChatGPT 등의 고도화된 [[LLM]]은 단순 문자 단위 대신 자주 쓰이는 문자 조합을 단일 토큰으로 통합하는 BPE(바이트 쌍 인코딩) 방식을 사용하여 처리 효율성을 높이고 컨텍스트 윈도우(context window)를 절약한다.

## 상세

### 문자 레벨 토크나이저(Character-level Tokenizer)의 매커니즘
[[안드레 카파시(Andrej Karpathy)]]의 `microGPT` 프로젝트에서 제시된 토크나이저 구현체는 가장 단순한 형태인 문자 레벨로 작동한다. 데이터셋 내 모든 문서의 고유 문자를 추출하여 정렬한 다음, `<BOS>`와 `<EOS>` 토큰을 추가하여 어휘 사전(vocabulary)을 만든다.
이 방식은 어휘 사전 크기(`vocab_size`)가 매우 작아져서 [[임베딩]] 행렬 등의 파라미터 메모리 소모가 최소화되지만, 단어 하나를 이루는 모든 글자마다 개별적인 예측 단계를 거쳐야 하므로 생성 시 시퀀스의 길이가 길어진다는 단점이 있다.

### 특별 토큰(Special Tokens)의 기능
- **`<BOS>`**: 시퀀스의 맨 앞에 수동으로 추가되어, 모델에게 "여기서부터 새로운 문맥이 시작된다"는 초기 상태 신호를 준다.
- **`<EOS>`**: 텍스트 생성의 종료 조건이 되며, 모델이 이 토큰을 뱉으면 추론(inference) 루프를 종료하도록 제어하여 무한 생성을 예방한다.

### Subword 토크나이저와의 비교
현대 상용 [[LLM]]은 보통 BPE(Byte Pair Encoding)나 WordPiece 등 하위 단어(subword) 단위 토크나이저를 사용한다. 이는 자주 붙어서 나타나는 문자들의 묶음(예: `ing`, `the` 등)을 단일 토큰으로 정의함으로써, 시퀀스 길이를 대폭 줄이고 데이터 인코딩의 압축률을 극대화하여 연산 효율을 높이는 방식이다. 그러나 핵심적인 변환 원리인 "텍스트 ↔ 숫자 매핑"은 동일하게 [stoi](file:///Users/railscraft/[[Obsidian]]/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L27) 및 [itos](file:///Users/railscraft/[[Obsidian]]/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md#L28) 기반 딕셔너리로 이루어진다.

## 예시

다음은 `microGPT`에 구현된 순수 파이썬(Python) 기반의 문자 레벨 토크나이저 예시 코드이다.

```python
# 문서(docs) 내 고유 문자를 추출하여 정렬하고 특별 토큰을 추가
chars = ['<BOS>', '<EOS>'] + sorted(list(set(''.join(docs))))  
vocab_size = len(chars)  

# 문자열-정수 맵 구성 (stoi: string-to-integer, itos: integer-to-string)
stoi = { ch:i for i, ch in enumerate(chars) }  
itos = { i:ch for i, ch in enumerate(chars) }
```

예를 들어, "a"가 정수 2, "b"가 정수 3으로 정의되고, `<BOS>`가 0, `<EOS>`가 1일 때, 단어 "ab"의 토큰 시퀀스는 `[0, 2, 3, 1]`이 된다.

## 관련 노트

- [[LLM]]
- [[microGPT]]
- [[안드레 카파시(Andrej Karpathy)]]

## 출처

- [Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md](file:///Users/railscraft/[[Obsidian]]/raw/Andrej%20Karpathy%20Just%20Built%20an%20Entire%20GPT%20in%20243%20Lines%20of%20Python.md)
- [안드레 카파시의 [[microGPT]] GitHub Gist](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95)