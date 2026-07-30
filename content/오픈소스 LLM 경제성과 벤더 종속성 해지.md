---
aliases:
- 오픈소스 LLM 경제성
- 벤더 종속성 해지
- si vis pacem, para bellum
- 오픈소스-LLM-경제성과-벤더-종속성-해지
core: true
created: 2026-06-11
sources:
- raw/오픈소스 모델로도 충분하다. 필요하지 않은 지능에 비용을 과다하게 지출하지 마라.md
- raw/마이크로소프트는 엔지니어들에게 AI 사용 중단을 지시했고, 우버는 4개월 만에 연간 AI 예산을 모두 탕진했다. 아무도 말하지 않는 진실.md
- raw/우리가 초대받지 못한 새로운 AI 시대의 개막.md
- raw/AI 에이전트는 죽었다. 88퍼센트가 프로덕션 도달 전에 실패하는 이유.md
- raw/5개의 새로운 플러그인으로 옵시디언 워크플로우 재구축하기 (2026년 설정).md
- raw/단돈 100달러로 주식 투자 시작하기.md
- raw/일주일 동안 지속 실행되는 에이전틱 시스템 구축하기.md
- raw/4개월 만에 사라진 15만 개의 테크 일자리 — 데이터 리더들이 차마 말하지 못하는 진실.md
- raw/경제 붕괴 직전, 부자들이 미리 사두는 4가지 자산.md
- raw/GBrain - 에이전트를 위한 오픈소스 장기 기억 및 지식 그래프 인프라.md
- raw/미룰 때마다 결제되는 알람 앱을 만들었다. 그리고 애플의 이메일 한 통에 무산되었다.md
- raw/초보 투자자가 저지르는 가장 큰 투자 실수 15가지.md
- raw/내가 매주 쓰는 클로드와 챗GPT 프롬프트 10선 (즉시 복사하여 사용 가능).md
- raw/Hermes, OpenClaw, ChatGPT 에이전트 및 미래 AI 시스템의 실제 작동 원리.md
- raw/오늘날 AI를 배우는 대부분의 사람들이 존재하지 않는 직업을 준비하고 있다.md
- raw/남다르게 생각하도록 뇌를 훈련하는 법.md
- raw/AI 디자인 시스템에 윤리, 접근성, 그리고 기억을 부여한 방법.md
- raw/Hermes 에이전트의 내부 구조 - 자가 개선 에이전트의 작동 원리.md
- raw/월급을 대체하고 조기 은퇴를 실현해 줄 5가지 ETF.md
- raw/16GB Mac mini에서 Qwen 3.5 122B LLM 실행하기 - TurboQuant-MLX를 활용한 MoE 전문가 스트리밍.md
- raw/단 하루 오후 만에 디지털 상품을 출시하고 월 3,000달러 부업으로 키운 실전 프로세스.md
- raw/NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md
status: evergreen
tags:
- llm
- infra
- economics
- open-source
- vendor-lockin
type: concept
updated: 2026-07-10
---
# 오픈소스 [[LLM]] 경제성과 벤더 종속성 해지

## 한 줄 정의
기업이 AI 시스템을 구축할 때 특정 상용 프론티어 [[LLM]] API에 독점 종속되는 리스크를 해지(Hedge)하기 위해, 추론 요구도에 따라 워크로드를 격리하고 가성비가 높은 가중치 공개(Open-weight) 모델로 라우팅하는 아키텍처 다원화 전략이다.

## 핵심 요지
- 중국의 가중치 공개 모델들은 미국의 최첨단 상용 모델들에 비해 지능 격차가 평균 7개월 정도로 좁혀졌다. (출처: [오픈소스 모델로도 충분하다](file:///Users/railscraft/Obsidian/raw/%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%20%EB%AA%A8%EB%8D%B8%EB%A1%9C%EB%8F%84%20%EC%B6%A9%EB%B6%84%ED%95%98%EB%8B%A4.%20%ED%95%84%EC%9A%94%ED%95%98%EC%A7%80%20%EC%95%8A%EC%9D%80%20%EC%A7%80%EB%8A%A5%EC%97%90%20%EB%B9%84%EC%9A%A9%EC%9D%84%20%EA%B3%BC%EB%8B%A4%ED%95%98%EA%B2%8C%20%EC%A7%80%EC%B6%9C%ED%95%98%EC%A7%80%20%EB%A7%88%EB%9D%BC.md))
- 텍스트 요약, 개체명 추출, 번역 등 일상적이고 기계적인 대다수 비즈니스 작업은 굳이 값비싼 프론티어 지능을 필요로 하지 않으며 오픈소스 모델로도 '충분히 쓸 만하다(Good enough)'.
- 단일 상용 API에 모든 비즈니스 인프라를 연동하면 **(1) 일방적 요금 인상 및 크레딧 결제 강제, (2) 서비스 장애, (3) 계정 오인 정지(Ban), (4) 가드레일 오동작으로 인한 의도적 다운그레이드 및 30일 데이터 보관 강제** 등 극단적인 벤더 종속 위험에 노출된다.
- 이에 평화로운 시기에 트래픽의 일부(10~20%)를 오픈소스 모델로 흘려보내 인프라 회복 탄력성과 코드 전환력을 길러두는 해지(Hedge) 전략이 필수적이다.
- [[NVIDIA NIM]] 카탈로그에서 MiniMax, Kimi, DeepSeek, GLM, GPT-OSS 등 100여 개의 다양한 무료 가중치 공개 AI 모델을 제공하며, 신입 계정 가입 시 1,000점(최대 5,000점) 무료 크레딧과 카드 등록 없이 분당 40회 호출(RPM) 제한으로 실시간 테스트가 가능하다. (출처: NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md)
- OpenAI 호환 API를 제공하므로 기존 API 페이로드 규격(model, messages, max_tokens, temperature, top_p, stream 등)을 그대로 유지한 채 간단히 엔드포인트 문자열만 바꾸는 것으로 에이전트 및 스크립트를 즉시 무료 추론 서버로 전환할 수 있다. (출처: NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md)
- 기습적인 가격 변동(예: 1M 토큰당 $10/$50 API 가격 책정)과 무단 데이터 활용(30일 보관 정책 등) 리스크에 대처한다.
- 오픈소스 [[LLM]] 및 파인튜닝을 통해 벤더의 보이지 않는 성능 덤다잉(LoRA, 어댑터, 프롬프트 강제 변환 등)에 가드레일을 구축한다.

## 상세

### 1. 3단계 추론 난이도 평가 프레임워크
모델을 결합하기 전, 작업(Task)의 성격을 도메인이 아닌 '추론 요구도(Reasoning demand)' 기준으로 재분류하여 비용 효율을 극대화한다 (출처: 오픈소스 모델로도 충분하다).

1. **1단계: 단순 추론 영역 (Low demand)**:
   - *작업*: 문서 요약, 단순 메일 분류, 구조화 데이터 추출, 단순 번역 등 패턴 매칭.
   - *대응*: 최첨단 프론티어를 전면 배제하고 경량/오픈소스 모델을 적용해 비용을 극단적으로 절감.
2. **2단계: 중간 추론 영역 (Medium demand)**:
   - *작업*: 코드 정적 검사 및 기능 리뷰, 여러 데이터를 종합한 분석 리포트 작성, 이전 맥락을 길게 유지하는 대화형 챗봇.
   - *대응*: 오픈소스 모델(예: DeepSeek V4-Pro, Qwen3-235B)이 훌륭한 대체재가 되며, 예외 사례(Edge case)에 대해서만 상용 모델로 라우팅.
3. **3단계: 고난도 추론 영역 (High demand)**:
   - *작업*: 거대 레거시 코드베이스를 자율 분석해 패치하는 코딩 에이전트, 다중 에러 복구 루프, 적대적 보안 침투 테스트.
   - *대응*: 프론티어 상용 모델(예: GPT-5.5, Claude Fable/Mythos)이 단가를 확실히 정당화하는 독점 영역.

### 2. 상용 독점 API의 4대 종속 리스크 분석
1. **일방적인 단가 변경 및 비용 앵커링**:
   - 앤트로픽은 페이블 5(Claude Fable 5) API 단가를 백만 토큰당 입력 $10, 출력 $50로 책정하고, 서비스 개시 직후 특정 시점(6월 23일)부터 구독 요금제 외 사용량 크레딧 추가 구매를 강제하는 등 일방적으로 비용 부담을 이전하고 있다.
2. **서비스 장애 (Outage) 및 단일 실패점(SPOF)**:
   - 생명줄과 같은 서버가 단 한 가닥의 외부 API에 의존하고 있어 장애 시 서비스 전체가 마비된다. (실제로 앤트로픽 API는 2026년 5월에만 90분 에러율 폭증 등 5번의 크고 작은 인시던트가 기록됨).
3. **계정 오인 정지 (Ban) 리스크**:
   - 공급사의 유해물 감지 필터링 봇 오동작으로 정상 트래픽이 정책 위반으로 차단되는 사고 (2026년 4월 [[OpenClaw]] 제작자 피터 스태인버거의 앤트로픽 계정 오인 정지 사고가 대표적).
4. **의도적 다운그레이드(Dumbifying) 및 감시 가드레일**:
   - **폴백(Fallback) 처리**: 사이버 보안, 생물학, 화학, [[지식 증류]]와 관련된 키워드를 감지하면 강제로 이전 세대 저성능 모델(Claude Opus 4.8)로 다운그레이드한다.
   - **소리 없는 오작동 유도(Lobotomy)**: 사용자가 [[LLM]] 개발이나 시스템 최적화 등의 최첨단 태스크를 수행하고 있다고 탐지하면, 프롬프트 강제 수정(Prompt modification), 벡터 스티어링(Vector steering), LoRA 어댑터 주입 등을 동원해 사용자에게 알리지 않고 **의도적으로 모델 지능 수준을 다운타이밍**하여 멍청한 결과물을 뱉게 만든다 (출처: 우리가 초대받지 못한 새로운 AI 시대의 개막).
   - **보안/규정 미준수 (데이터 주권 소실)**: 0일 데이터 보관(Zero-day retention) 옵션을 일방적으로 폐지하고 **30일간의 강제 데이터 보관 정책**을 강제함으로써, 민감한 비즈니스 기밀 및 소스 코드를 다루는 대기업 고객사들에 치명적인 규제 리스크를 유발한다.

### 3. 사다리 걷어차기 대응을 위한 오픈소스 동맹
상용 벤더들은 구글의 트랜스포머(Transformer) 논문이나 MoE 신경망 등 오픈소스 자산과 공공 인터넷 데이터를 무단 활용하여 성장한 후, 규제를 부추기며 사다리를 걷어차는 폐쇄성을 드러낸다.
이에 대응하여 데이터 주권과 지속 가능성을 확보하기 위해 NVIDIA, AI2, Arcee, Prime Intellect, Meta 등 최신 모델과 가중치(Open-weights)를 전면 공개하는 생태계와의 인프라 결합을 공고히 해야 한다.

### 4. [[NVIDIA NIM]] 및 오픈소스 에이전트를 활용한 벤더 종속성 극복
상용 프론티어 독점 API의 일방적인 크레딧 강제 및 가드레일 오작동 종속성을 해지하기 위해, build.nvidia.com에서 제공하는 OpenAI 호환 API 규격의 **[[NVIDIA NIM]](엔비디아 추론 마이크로서비스)**을 대안으로 기용하는 전략이 유용하다.
이는 코드 단 한 줄만으로 `gemma-3n-e4b-it`, `mistral-nemotron`, `gpt-oss-20b` 등 다양한 가중치 공개 모델을 IDE 에이전트에 연동할 수 있게 한다. 신입 계정 생성 시 즉시 1,000점(최대 5,000점)의 무료 추론 크레딧을 부여하며, 분당 40회 호출(RPM) 제한으로 신용카드 등록 없이 프로토타입을 제작할 수 있어 토큰 비용을 완전히 절감한다.
다만 Cursor IDE의 경우 무료/Pro 요금제에 무관하게 커스텀 모델 지정 시 핵심 에이전트 기능(Composer, 인라인 편집 등)을 자사 백엔드로 감금/제한하는 종속 정책을 취하므로, [[Cline]]과 같은 모델 독립적(Model-agnostic) 오픈소스 에이전트 도구로 전격 우회하여 인프라 독립성을 실현하는 것이 적극 권장된다.

### 4-1. [[NVIDIA NIM]]의 OpenAI 호환 규격 및 무료 크레딧 구조
- **[[NVIDIA NIM]] 모델 카탈로그**: build.nvidia.com에서 제공되는 100여 개 모델(Kimi-k2.6, MiniMax-abab6.5, GLM-4-9B, DeepSeek-V3 등)은 OpenAI와 호환되는 REST API 규격을 지원한다. 기존 OpenAI API용 스크립트나 에이전트 도구 설정의 API 베이스 주소와 API 키, 모델 이름만 변경하면 추가적인 어댑터 개발 없이 동작을 유지할 수 있다.
- **무료 테스트 혜택 및 한계**: 계정 최초 생성 시 1,000점의 API 크레딧을 부여받으며, 간단한 미션을 수행하면 최대 5,000점까지 연장 사용이 가능하다. 결제 카드를 등록하지 않아도 분당 최대 40회 호출(RPM)이 지원되어, 개인용 백그라운드 코딩 어시스턴트나 [[RAG]] 실험에 충분히 사용 가능하다. (출처: NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md)

### 4-1. [[NVIDIA NIM]]의 OpenAI 호환 규격 및 무료 크레딧 구조
- **[[NVIDIA NIM]] 모델 카탈로그**: build.nvidia.com에서 제공되는 100여 개 모델(Kimi-k2.6, MiniMax-abab6.5, GLM-4-9B, DeepSeek-V3 등)은 OpenAI와 호환되는 REST API 규격을 지원한다. 기존 OpenAI API용 스크립트나 에이전트 도구 설정의 API 베이스 주소와 API 키, 모델 이름만 변경하면 추가적인 어댑터 개발 없이 동작을 유지할 수 있다.
- **무료 테스트 혜택 및 한계**: 계정 최초 생성 시 1,000점의 API 크레딧을 부여받으며, 간단한 미션을 수행하면 최대 5,000점까지 연장 사용이 가능하다. 결제 카드를 등록하지 않아도 분당 최대 40회 호출(RPM)이 지원되어, 개인용 백그라운드 코딩 어시스턴트나 [[RAG]] 실험에 충분히 사용 가능하다. (출처: NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md)

### 4-1. [[NVIDIA NIM]]의 OpenAI 호환 규격 및 무료 크레딧 구조
- **[[NVIDIA NIM]] 모델 카탈로그**: build.nvidia.com에서 제공되는 100여 개 모델(Kimi-k2.6, MiniMax-abab6.5, GLM-4-9B, DeepSeek-V3 등)은 OpenAI와 호환되는 REST API 규격을 지원한다. 기존 OpenAI API용 스크립트나 에이전트 도구 설정의 API 베이스 주소와 API 키, 모델 이름만 변경하면 추가적인 어댑터 개발 없이 동작을 유지할 수 있다.
- **무료 테스트 혜택 및 한계**: 계정 최초 생성 시 1,000점의 API 크레딧을 부여받으며, 간단한 미션을 수행하면 최대 5,000점까지 연장 사용이 가능하다. 결제 카드를 등록하지 않아도 분당 최대 40회 호출(RPM)이 지원되어, 개인용 백그라운드 코딩 어시스턴트나 [[RAG]] 실험에 충분히 사용 가능하다. (출처: NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md)

### 3. 독점 API 벤더의 리스크와 덤다잉 요인
- **기습 요금 변경**: 100만 토큰당 가격 정책이 실시간 통보 없이 임의 조정되거나, 고등급 추론 모델(Opus 등)의 비용이 폭등하는 인프라 비용 리스크 존재.
- **보이지 않는 성능 저하 (Silent Dumbifying)**:
  - *벡터 스티어링 (Vector Steering)*: 모델 내부 가중치의 동적 변경.
  - *LoRA Adapters*: API 서버 단의 임의 아답터 탈착에 따른 지능 하락.
  - *System Prompt Modification*: 벤더가 자체 필터링을 위해 프롬프트를 변환해 응답 퀄리티가 하락하는 현상.
- **데이터 보안 위협**: 30일 간의 데이터 보관 정책 등으로 인한 사내 기밀 정보 유출 위기.
- **Stripe의 50M 라인 루비 이관 예시**: Stripe가 5,000만 라인 규모의 Ruby 레거시 코드를 최신화할 때, 독점 API의 성능 저하로 인한 위험을 방지하기 위해 Opus 4.8에 Fallback 안전장치를 얹거나 오픈소스 독자 추론 모델로 이중화 구성을 구현함.

## 예시

### AI 예산 탕진 사례 (Uber)
- **현상**: 우버는 2025년 12월 5,000명의 엔지니어에게 클로드 코드(Claude Code)를 도입했다. 엔지니어 95%가 매달 AI 도구를 사용하고 커밋의 70%가 AI를 거치며 활동량은 폭발했다.
- **참사**: 단 4개월 만에 2026년 한 해 AI 코딩 예산을 통째로 탕진했다. 엔지니어 개인당 API 청구서가 월 500~2,000달러에 달했으며, 이 경이로운 사용률 지표가 실제 고객 가치로 치환되었는지는 불분명했다 (출처: 마이크로소프트는 엔지니어들에게 AI 사용 중단을 지시했고, 우버는 4개월 만에 연간 AI 예산을 모두 탕진했다. 아무도 말하지 않는 진실).
- **대안**: 추론 난이도가 낮은 중간/단순 단계의 개발 작업을 DeepSeek V4-Pro 등 가중치 공개 모델로 라우팅했다면, 동일 예산으로 1년 이상의 장기 파이프라인을 유지할 수 있었을 것이다.

### 2026년 상반기 [[LLM]] API 비용 격차 (백만 토큰당 달러)
- **프론티어 독점 모델**:
  - Claude Opus 4.7: 입력 $5.00 / 출력 $25.00
  - GPT-5.5: 입력 $5.00 / 출력 $30.00
- **가중치 공개 / 오픈소스 모델**:
  - DeepSeek V4-Pro: 입력 $0.435 / 출력 $0.87 (프로모션 할인가 기준, 약 7배 이상 저렴)
  - Together AI (DeepSeek V4-Pro 호스팅): 입력 $2.10 / 출력 $4.40

### Kimi-k2.6 모델에 대한 OpenAI 규격 API 페이로드 예시
```javascript
// moonshotai/kimi-k2.6 호출용 payload 예시
const payload = {
  "model": "moonshotai/kimi-k2.6",
  "messages": [
    {
      "role": "user",
      "content": "오픈소스 LLM 경제성 확보 전략에 대해 설명해줘."
    }
  ],
  "max_tokens": 16384,
  "temperature": 1.00,
  "top_p": 1.00,
  "stream": true
};
```
OpenAI SDK를 사용하는 클라이언트 객체에서 `baseURL`을 `https://integrate.api.nvidia.com/v1`으로 수정하여 활용할 수 있다. (출처: NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md)

### Kimi-k2.6 모델에 대한 OpenAI 규격 API 페이로드 예시
```javascript
// moonshotai/kimi-k2.6 호출용 payload 예시
const payload = {
  "model": "moonshotai/kimi-k2.6",
  "messages": [
    {
      "role": "user",
      "content": "오픈소스 LLM 경제성 확보 전략에 대해 설명해줘."
    }
  ],
  "max_tokens": 16384,
  "temperature": 1.00,
  "top_p": 1.00,
  "stream": true
};
```
OpenAI SDK를 사용하는 클라이언트 객체에서 `baseURL`을 `https://integrate.api.nvidia.com/v1`으로 수정하여 활용할 수 있다. (출처: NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md)

### Kimi-k2.6 모델에 대한 OpenAI 규격 API 페이로드 예시
```javascript
// moonshotai/kimi-k2.6 호출용 payload 예시
const payload = {
  "model": "moonshotai/kimi-k2.6",
  "messages": [
    {
      "role": "user",
      "content": "오픈소스 LLM 경제성 확보 전략에 대해 설명해줘."
    }
  ],
  "max_tokens": 16384,
  "temperature": 1.00,
  "top_p": 1.00,
  "stream": true
};
```
OpenAI SDK를 사용하는 클라이언트 객체에서 `baseURL`을 `https://integrate.api.nvidia.com/v1`으로 수정하여 활용할 수 있다. (출처: NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md)

### 벤더 이탈 가드레일 설계 예시
- **Fallback Mechanism**: API 요청 실패나 급격한 레이턴시 증가 감지 시, 로컬 또는 private 클라우드에 띄워둔 오픈소스 [[LLM]](Qwen 72B, Llama 3 70B 등)으로 즉각 라우팅 전환.
- **데이터 retention 정책 대응**: 모든 외부 API 발송 데이터는 사전에 민감성 필터링을 거치며, 벤더의 30일 보존 로그를 강제 파기하는 엔터프라이즈 특권을 확인하거나 VPN 터널링 구성.

## 충돌
## 관련 노트
- [[AI 겨울과 경제적 조정]] : 빅테크의 과도한 CAPEX 투자 거품과 일자리 조정, 그리고 모델 다운그레이드가 맞물리는 거시 환경을 다룬다.
- [[Vibe Coding과 Agentic Engineering]]
- [[Agent Harness]]
- [[오픈소스 라이선스 갈등과 커뮤니티 역풍]]
- [[AI 시대 소프트웨어 펀더멘탈]]
- [[플랫폼 규제와 제품 출시 리스크]]

## 출처
- (출처: 오픈소스 모델로도 충분하다. 필요하지 않은 지능에 비용을 과다하게 지출하지 마라)
- (출처: 마이크로소프트는 엔지니어들에게 AI 사용 중단을 지시했고, 우버는 4개월 만에 연간 AI 예산을 모두 탕진했다. 아무도 말하지 않는 진실)
- (출처: 우리가 초대받지 못한 새로운 AI 시대의 개막)
- [How far behind are open models? — Epoch AI](https://epoch.ai/blog/open-models-report)
- [CAISI Evaluation of DeepSeek V4-Pro — NIST](https://www.nist.gov/news-events/news/2026/05/caisi-evaluation-deepseek-v4-pro)
- Anthropic Paper: Model Internal Steering and Activation Safety (https://arxiv.org/pdf/2601.04603)
- [NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드](file:///Users/railscraft/Obsidian/raw/NVIDIA%20Build%EB%A1%9C%20%EC%9B%94%2020%EB%8B%AC%EB%9F%AC%20%EC%95%84%EB%81%BC%EB%8A%94%20%EB%AC%B4%EB%A3%8C%20AI%20%EB%AA%A8%EB%8D%B8%20%ED%99%9C%EC%9A%A9%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [AI 에이전트는 죽었다. 88퍼센트가 프로덕션 도달 전에 실패하는 이유](file:///Users/railscraft/Obsidian/raw/AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EB%8A%94%20%EC%A3%BD%EC%97%88%EB%8B%A4.%2088%ED%8D%BC%EC%84%BC%ED%8A%B8%EA%B0%80%20%ED%94%84%EB%A1%9C%EB%8D%95%EC%85%98%20%EB%8F%84%EB%8B%AC%20%EC%A0%84%EC%97%90%20%EC%8B%A4%ED%8C%A8%ED%95%98%EB%8A%94%20%EC%9D%B4%EC%9C%A0.md)
- [5개의 새로운 플러그인으로 옵시디언 워크플로우 재구축하기 (2026년 설정)](file:///Users/railscraft/Obsidian/raw/5%EA%B0%9C%EC%9D%98%20%EC%83%88%EB%A1%9C%EC%9A%B4%20%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%EC%9C%BC%EB%A1%9C%20%EC%98%B5%EC%8B%9C%EB%94%94%EC%96%B8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20%EC%9E%AC%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0%20%282026%EB%85%84%20%EC%84%A4%EC%A0%95%29.md)
- [단돈 100달러로 주식 투자 시작하기](file:///Users/railscraft/Obsidian/raw/%EB%8B%A8%EB%8F%88%20100%EB%8B%AC%EB%9F%AC%EB%A1%9C%20%EC%A3%BC%EC%8B%9D%20%ED%88%AC%EC%9E%90%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0.md)
- [일주일 동안 지속 실행되는 에이전틱 시스템 구축하기](file:///Users/railscraft/Obsidian/raw/%EC%9D%BC%EC%A3%BC%EC%9D%BC%20%EB%8F%99%EC%95%88%20%EC%A7%80%EC%86%8D%20%EC%8B%A4%ED%96%89%EB%90%98%EB%8A%94%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8B%B1%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0.md)
- [4개월 만에 사라진 15만 개의 테크 일자리 — 데이터 리더들이 차마 말하지 못하는 진실](file:///Users/railscraft/Obsidian/raw/4%EA%B0%9C%EC%9B%94%20%EB%A7%8C%EC%97%90%20%EC%82%AC%EB%9D%BC%EC%A7%84%2015%EB%A7%8C%20%EA%B0%9C%EC%9D%98%20%ED%85%8C%ED%81%AC%20%EC%9D%BC%EC%9E%90%EB%A6%AC%20%E2%80%94%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%A6%AC%EB%8D%94%EB%93%A4%EC%9D%B4%20%EC%B0%A8%EB%A7%88%20%EB%A7%90%ED%95%98%EC%A7%80%20%EB%AA%BB%ED%95%98%EB%8A%94%20%EC%A7%84%EC%8B%A4.md)
- [경제 붕괴 직전, 부자들이 미리 사두는 4가지 자산](file:///Users/railscraft/Obsidian/raw/%EA%B2%BD%EC%A0%9C%20%EB%B6%95%EA%B4%B4%20%EC%A7%81%EC%A0%84%2C%20%EB%B6%80%EC%9E%90%EB%93%A4%EC%9D%B4%20%EB%AF%B8%EB%A6%AC%20%EC%82%AC%EB%91%90%EB%8A%94%204%EA%B0%80%EC%A7%80%20%EC%9E%90%EC%82%B0.md)
- [GBrain - 에이전트를 위한 오픈소스 장기 기억 및 지식 그래프 인프라](file:///Users/railscraft/Obsidian/raw/[[GBrain]]%20-%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EB%A5%BC%20%EC%9C%84%ED%95%9C%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%20%EC%9E%A5%EA%B8%B0%20%EA%B8%B0%EC%96%B5%20%EB%B0%8F%20%EC%A7%80%EC%8B%9D%20%EA%B7%B8%EB%9E%98%ED%94%84%20%EC%9D%B8%ED%94%84%EB%9D%BC.md)
- [미룰 때마다 결제되는 알람 앱을 만들었다. 그리고 애플의 이메일 한 통에 무산되었다](file:///Users/railscraft/Obsidian/raw/%EB%AF%B8%EB%A3%B0%20%EB%95%8C%EB%A7%88%EB%8B%A4%20%EA%B2%B0%EC%A0%9C%EB%90%98%EB%8A%94%20%EC%95%8C%EB%9E%8C%20%EC%95%B1%EC%9D%84%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.%20%EA%B7%B8%EB%A6%AC%EA%B3%A0%20%EC%95%A0%ED%94%8C%EC%9D%98%20%EC%9D%B4%EB%A9%94%EC%9D%BC%20%ED%95%9C%20%ED%86%B5%EC%97%90%20%EB%AC%B4%EC%82%B0%EB%90%98%EC%97%88%EB%8B%A4.md)
- [초보 투자자가 저지르는 가장 큰 투자 실수 15가지](file:///Users/railscraft/Obsidian/raw/%EC%B4%88%EB%B3%B4%20%ED%88%AC%EC%9E%90%EC%9E%90%EA%B0%80%20%EC%A0%80%EC%A7%80%EB%A5%B4%EB%8A%94%20%EA%B0%80%EC%9E%A5%20%ED%81%B0%20%ED%88%AC%EC%9E%90%20%EC%8B%A4%EC%88%98%2015%EA%B0%80%EC%A7%80.md)
- [내가 매주 쓰는 클로드와 챗GPT 프롬프트 10선 (즉시 복사하여 사용 가능)](file:///Users/railscraft/Obsidian/raw/%EB%82%B4%EA%B0%80%20%EB%A7%A4%EC%A3%BC%20%EC%93%B0%EB%8A%94%20%ED%81%B4%EB%A1%9C%EB%93%9C%EC%99%80%20%EC%B1%97GPT%20%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%2010%EC%84%A0%20%28%EC%A6%89%EC%8B%9C%20%EB%B3%B5%EC%82%AC%ED%95%98%EC%97%AC%20%EC%82%AC%EC%9A%A9%20%EA%B0%80%EB%8A%A5%29.md)
- [Hermes, [[OpenClaw]], ChatGPT 에이전트 및 미래 AI 시스템의 실제 작동 원리](file:///Users/railscraft/Obsidian/raw/Hermes%2C%20[[OpenClaw]]%2C%20ChatGPT%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EB%B0%8F%20%EB%AF%B8%EB%9E%98%20AI%20%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%98%20%EC%8B%A4%EC%A0%9C%20%EC%9E%91%EB%8F%99%20%EC%9B%90%EB%A6%AC.md)
- [오늘날 AI를 배우는 대부분의 사람들이 존재하지 않는 직업을 준비하고 있다](file:///Users/railscraft/Obsidian/raw/%EC%98%A4%EB%8A%98%EB%82%A0%20AI%EB%A5%BC%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EB%8C%80%EB%B6%80%EB%B6%84%EC%9D%98%20%EC%82%AC%EB%9E%8C%EB%93%A4%EC%9D%B4%20%EC%A1%B4%EC%9E%AC%ED%95%98%EC%A7%80%20%EC%95%8A%EB%8A%94%20%EC%A7%81%EC%97%85%EC%9D%84%20%EC%A4%80%EB%B9%84%ED%95%98%EA%B3%A0%20%EC%9E%88%EB%8B%A4.md)
- [남다르게 생각하도록 뇌를 훈련하는 법](file:///Users/railscraft/Obsidian/raw/%EB%82%A8%EB%8B%A4%EB%A5%B4%EA%B2%8C%20%EC%83%9D%EA%B0%81%ED%95%98%EB%8F%84%EB%A1%9D%20%EB%87%8C%EB%A5%BC%20%ED%9B%88%EB%A0%A8%ED%95%98%EB%8A%94%20%EB%B2%95.md)
- [AI 디자인 시스템에 윤리, 접근성, 그리고 기억을 부여한 방법](file:///Users/railscraft/Obsidian/raw/AI%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%97%90%20%EC%9C%A4%EB%A6%AC%2C%20%EC%A0%91%EA%B7%BC%EC%84%B1%2C%20%EA%B7%B8%EB%A6%AC%EA%B3%A0%20%EA%B8%B0%EC%96%B5%EC%9D%84%20%EB%B6%80%EC%97%AC%ED%95%9C%20%EB%B0%A9%EB%B2%95.md)
- [Hermes 에이전트의 내부 구조 - 자가 개선 에이전트의 작동 원리](file:///Users/railscraft/Obsidian/raw/Hermes%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EC%9D%98%20%EB%82%B4%EB%B6%80%20%EA%B5%AC%EC%A1%B0%20-%20%EC%9E%90%EA%B0%80%20%EA%B0%9C%EC%84%A0%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EC%9D%98%20%EC%9E%91%EB%8F%99%20%EC%9B%90%EB%A6%AC.md)
- [월급을 대체하고 조기 은퇴를 실현해 줄 5가지 ETF](file:///Users/railscraft/Obsidian/raw/%EC%9B%94%EA%B8%89%EC%9D%84%20%EB%8C%80%EC%B2%B4%ED%95%98%EA%B3%A0%20%EC%A1%B0%EA%B8%B0%20%EC%9D%80%ED%87%B4%EB%A5%BC%20%EC%8B%A4%ED%98%84%ED%95%B4%20%EC%A4%84%205%EA%B0%80%EC%A7%80%20ETF.md)
- [16GB Mac mini에서 [[Qwen 3.5]] 122B [[LLM]] 실행하기 - [[TurboQuant]]-MLX를 활용한 MoE 전문가 스트리밍](file:///Users/railscraft/Obsidian/raw/16GB%20Mac%20mini%EC%97%90%EC%84%9C%20Qwen%203.5%20122B%20[[LLM]]%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20[[TurboQuant]]-MLX%EB%A5%BC%20%ED%99%9C%EC%9A%A9%ED%95%9C%20MoE%20%EC%A0%84%EB%AC%B8%EA%B0%80%20%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8D.md)
- [단 하루 오후 만에 디지털 상품을 출시하고 월 3,000달러 부업으로 키운 실전 프로세스](file:///Users/railscraft/Obsidian/raw/%EB%8B%A8%20%ED%95%98%EB%A3%A8%20%EC%98%A4%ED%9B%84%20%EB%A7%8C%EC%97%90%20%EB%94%94%EC%A7%80%ED%84%B8%20%EC%83%81%ED%92%88%EC%9D%84%20%EC%B6%9C%EC%8B%9C%ED%95%98%EA%B3%A0%20%EC%9B%94%203%2C000%EB%8B%AC%EB%9F%AC%20%EB%B6%80%EC%97%85%EC%9C%BC%EB%A1%9C%20%ED%82%A4%EC%9A%B4%20%EC%8B%A4%EC%A0%84%20%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4.md)

