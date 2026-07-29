---
type: workflow
status: draft
core: false
tags:
  - llm
aliases: []
sources: ["raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md"]
created: 2026-07-29
updated: 2026-07-29
---

# 자기회귀적 생성 (Autoregressive Generation)

## 한 줄 정의
이전 단계에서 출력된 토큰을 다음 단계의 입력으로 다시 사용하는 과정을 반복하여, 한 번에 하나의 토큰을 순차적으로 생성해 나가는 추론 기법이다.

## 핵심 요지
- **순차적 토큰 생성**: 첫 시작 토큰(BOS)으로 출발해 모델이 출력한 확률 분포에서 토큰을 하나씩 샘플링하고, 이를 다시 컨텍스트에 추가하여 다음 토큰을 예측한다.
- **맥락 의존성**: 생성되는 각 토큰은 이전에 생성된 모든 토큰들의 맥락(Context)을 조건부 확률로 삼아 결정된다.
- **종료 조건**: 모델이 시퀀스 끝을 알리는 특별 토큰(EOS)을 생성하거나, 사전에 지정된 최대 컨텍스트 길이(block_size)에 도달할 때까지 루프가 지속된다.
- **추론 병목**: 매 토큰 생성 시마다 모델의 포워드 패스(Forward Pass) 연산을 처음부터 반복해야 하므로 계산 비용이 크며, 이는 LLM 추론 속도 저하의 주요 원인이 된다.

## 절차
자기회귀적 생성의 전체적인 추론 파이프라인 단계는 다음과 같다.

1. **시작 토큰 입력 및 컨텍스트 초기화**:
   - 시퀀스의 시작을 가리키는 특별 토큰인 `BOS`(Beginning Of Sequence, 시퀀스 시작) 토큰으로 입력 시퀀스를 초기화한다.
   - 위치 인덱스(`pos_id`)를 0으로 설정하여 생성을 시작한다.

2. **모델 순방향 연산 (Forward Pass)**:
   - 현재 입력 토큰과 위치 정보를 [[임베딩(Embedding)]] 및 [[위치 인코딩(Positional Encoding)]] 레이어를 거치게 한다.
   - [[어텐션 메커니즘(attention mechanism)]]과 [[피드포워드 신경망(Feed-Forward Networks)]]을 통과시켜, 마지막 레이어에서 다음에 올 모든 가능한 토큰들에 대한 원시 점수인 `로짓`(Logits)을 출력한다.

3. **확률 분포 변환**:
   - 출력된 `로짓`(Logits) 값을 `소프트맥스`(Softmax, 각 클래스의 로짓을 확률 분포로 변환하는 함수) 함수에 입력하여, 전체 어휘 사전(Vocabulary)에 대응되는 합이 1인 확률 분포(`probs`)로 변환한다.

4. **다음 토큰 샘플링 (Sampling)**:
   - 계산된 확률 분포를 가중치로 삼아 다음 토큰 ID를 무작위 또는 확률적(`random.choices` 등)으로 선택(Sampling)한다.
   - 탑-k(Top-k), 탑-p(Top-p), 또는 온도를 조절하는 온도 매개변수(Temperature) 옵션을 적용하여 생성의 다양성을 조절할 수 있다.

5. **종료 조건 검사**:
   - 선택된 토큰이 시퀀스의 종결을 의미하는 `EOS`(End Of Sequence, 시퀀스 끝) 토큰이거나, 생성된 시퀀스의 길이가 모델이 지원하는 최대 길이인 `block_size`에 도달하면 생성을 중단한다.

6. **피드백 루프 작동**:
   - 생성된 토큰을 입력 시퀀스의 마지막에 덧붙여 새로운 입력(Context)으로 갱신한다.
   - `pos_id`를 1만큼 증가시키고 단계 2로 돌아가 루프를 반복한다.

## 체크리스트
- [ ] 입력 시퀀스의 첫머리에 `BOS` 토큰이 올바르게 삽입되었는가?
- [ ] 생성 중인 현재 토큰의 위치 인덱스(`pos_id`)가 임베딩 연산에 정확히 전달되는가?
- [ ] 출력된 `로짓`(Logits)이 소프트맥스를 거쳐 타당한 확률 분포로 변환되었는가?
- [ ] 무한 루프 방지를 위해 최대 시퀀스 길이(`block_size`) 제한 및 `EOS` 감지 조건이 코드에 포함되었는가?
- [ ] 매 단계마다 새로 생성된 토큰이 입력 컨텍스트에 누적되어 물리적 메모리나 버퍼에 적절히 업데이트되는가?

## 예시 시나리오
안드레 카파시의 [[microGPT]] 구현체를 바탕으로 한 아기 이름 생성 추론 시나리오:

```python
# 5개의 샘플 이름을 생성하는 루프
for sample_idx in range(5):  
    token_id = BOS  # 시작 토큰(BOS)으로 시작
    generated = []  
    for pos_id in range(block_size):  
        # 현재까지 생성된 token_id와 위치 정보를 바탕으로 GPT 모델 호출
        logits = gpt(token_id, pos_id, keys, values)  
        probs = softmax(logits)  
        
        # 확률 분포에 따라 다음 문자 토큰 무작위 샘플링
        token_id = random.choices(range(vocab_size), weights=[p.data for p in probs])[0]  
        
        # 끝 토큰(EOS)을 만나면 이름 생성 종료
        if token_id == EOS:  
            break  
        # 문자 복원(itos) 후 결과 리스트에 추가
        generated.append(itos[token_id])
    print("".join(generated))
```

## 관련 노트
- [[microGPT]]
- [[트랜스포머 아키텍처]]
- [[어텐션 메커니즘(attention mechanism)]]
- [[안드레 카파시(Andrej Karpathy)]]
- [[토크나이저(tokenizer)]]

## 출처
- `raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md`
- [Andrej Karpathy's microGPT Gist](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95) (원문 제공 외부 URL)

---

### 작업 완료 보고 및 요약
- **새 노트 생성**: `wiki/자기회귀적 생성(autoregressive generation).md` 노트를 `workflow` 유형 템플릿에 맞추어 새로 생성하고, 관련 용어(BOS, EOS, 소프트맥스, 샘플링 등)에 대한 한글 설명과 함께 풍부한 세부 정보(절차, 체크리스트, 예시 시나리오)를 기술하였습니다.
- **인덱스 및 로그 업데이트**: `wiki/index.md` 및 `wiki/log.md` 파일에 신규 추가된 `[[자기회귀적 생성(autoregressive generation)]]` 노트를 2026-07-29 날짜 엔트리로 정상 기재하여 동기화했습니다.
- **배포 실행**: Quartz 동기화 및 v5 브랜치 자동 배포 스크립트(`./scripts/sync_quartz.sh`) 실행을 마쳐 빌드가 완료되도록 조치했습니다.