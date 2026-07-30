---
type: concept
status: draft
core: false
tags:
- llm
- memory
- context-window
aliases:
- Sliding Window Buffer
- LLM-슬라이딩-윈도우-메모리-버퍼
sources:
- raw/밑바닥부터 만드는 LLM 메모리
created: 2026-07-21
updated: 2026-07-21
---
# [[LLM]] 슬라이딩 윈도우 메모리 버퍼

## 한 줄 정의
추론 시 가중치가 고정된 [[LLM]](매개변수 메모리)의 한계를 극복하기 위해, 최근 K개의 대화 턴(Turn)을 선입선출(FIFO) 버퍼 구조로 관리하여 프롬프트 예산(Prompt Budget) 내에 입력하는 가장 기본적인 외부 비매개변수(Non-parametric) 메모리 패턴이다.

## 핵심 요지
- **비매개변수 메모리의 필요성**: [[LLM]] 추론 시 가중치가 고정되므로 외부 입력 프롬프트 없이 이전 대화 내용(예: 사용자 이름, 이전 질문 주제)을 기억할 수 없다.
- **슬라이딩 윈도우 알고리즘**: FIFO `deque(maxlen=K*2)` 구조를 사용하여 가장 최근 N개 메시지만 프롬프트에 포함하고, 한도를 초과하는 가장 오래된 턴부터 자동 삭제한다.
- **정밀한 프롬프트 예산 산출**: `Prompt Budget = Context Window - Max Generation Tokens - Safety Margin` 공식을 엄격히 준수해야 한다.
- **한계점 (유효기간 제약)**: 모든 메시지의 중요도를 동일하게 다루므로 K번째 턴이 지나면 최초의 결정적 개인화 지식도 영구 유실된다.

## 상세
[[LLM]]의 매개변수 메모리(Parametric Memory)는 학습 완료 후 고정되므로 외부 비매개변수 메모리(Non-parametric Memory) 조작이 필수적이다. 슬라이딩 윈도우 버퍼는 순수 파이썬과 `llama-cpp-python` 기반으로 다음과 같이 구현된다:

1. **예산 계산 (8GB VRAM / Qwen 2.5 7B Q5_K_M 환경 기준)**:
   - `n_ctx` = 4096 토큰
   - `reserved_generation` = 1024 토큰
   - `safety_margin` = 32 토큰
   - `prompt_budget` = $4096 - 1024 - 32 = 3040$ 토큰
2. **토큰 재인코딩 방지 캐싱**:
   - 메시지 생성 시 `n_tokens = len(llm.tokenize(msg.encode(), special=True))`를 미리 캐싱하여 정수 연산만으로 윈도우를 슬라이딩한다.
3. **대화 턴 관리**:
   - 1턴 = User 1개 + Assistant 1개 메시지이므로 `deque(maxlen = K_TURNS * 2)`로 지정한다.

## 예시
- **단기 대화 맥락 보존**:
  - User: "My name is Alice."
  - User: "What is my name?" -> Answer: "Your name is Alice." (성공)
- **K턴 지과 후 유실 사례**:
  - `K_TURNS = 10` 설정 상태에서 1턴에 "My name is Bob"을 말한 후, 숫자 관련 무작위 대화를 10턴 더 나눈 뒤 "What is my name?"을 질문하면 첫 발언이 deque에서 완전히 삭제되어 "성함을 알지 못합니다"라고 답변함.

## 충돌
- **단기 보존 vs 우선순위 압축**: 슬라이딩 윈도우는 "내 이름은 Alice"와 "커피에 대한 임의의 질문"의 중요도 차이를 구분하지 못한다. 장기적 맥락 보존을 위해서는 자동 요약 버퍼(Auto-Summarization Buffer)나 [[RAG]](Vector Search)로 전환해야 한다.

## 관련 노트
- [[Agent Harness]]
- [[AI 에이전트 런타임 역할 맵]]

## 출처
- 매개변수 vs 비매개변수 메모리 정의: [raw/밑바닥부터 만드는 [[LLM]] 메모리 #1. 슬라이딩 윈도우 버퍼.md#L20-L32](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%231.%20%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%94%A9%20%EC%9C%88%EB%8F%84%EC%9A%B0%20%EB%B2%84%ED%8D%BC.md#L20-L32)
- 프롬프트 예산 수식 및 수치: [raw/밑바닥부터 만드는 [[LLM]] 메모리 #1. 슬라이딩 윈도우 버퍼.md#L147-L165](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%231.%20%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%94%A9%20%EC%9C%88%EB%8F%84%EC%9A%B0%20%EB%B2%84%ED%8D%BC.md#L147-L165)
- Python 알고리즘 및 deque 구현: [raw/밑바닥부터 만드는 [[LLM]] 메모리 #1. 슬라이딩 윈도우 버퍼.md#L187-L290](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%231.%20%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%94%A9%20%EC%9C%88%EB%8F%84%EC%9A%B0%20%EB%B2%84%ED%8D%BC.md#L187-L290)
- 한계 테스트 수치 (Bob 사례): [raw/밑바닥부터 만드는 [[LLM]] 메모리 #1. 슬라이딩 윈도우 버퍼.md#L330-L350](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%231.%20%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%94%A9%20%EC%9C%88%EB%8F%84%EC%9A%B0%20%EB%B2%84%ED%8D%BC.md#L330-L350)
