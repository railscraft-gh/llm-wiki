---
type: concept
status: draft
core: false
tags:
- llm
- memory
- summarization
aliases:
- Auto-Summarization Buffer
- LLM-자동-요약-메모리-버퍼
sources:
- raw/밑바닥부터 만드는 LLM 메모리
created: 2026-07-21
updated: 2026-07-21
---
# [[LLM]] 자동 요약 메모리 버퍼

## 한 줄 정의
슬라이딩 윈도우 버퍼의 턴 한계 및 정보 단순 삭제 문제를 극복하기 위해, [[LLM]]이 기록 보관자(Archivist)로서 기존 누적 요약본(Running Summary)과 신규 턴을 실시간 합쳐 손실 압축(Lossy Compression) 형태로 정제·보존하는 외부 메모리 패턴이다.

## 핵심 요지
- **2단계 아키텍처 (2-Stage Architecture)**:
  - **1단계 (답변 생성)**: `[System Prompt] + [Running Summary (Second System Message)] + [User Input]` 프롬프트로 사용자 답변 생성.
  - **2단계 (메모리 업데이트)**: 직후 별도 [[LLM]] 호출을 돌려 `[Summarization System Prompt] + [Old Summary] + [New Exchange]`를 통합 요약본으로 업데이트.
- **의미론적 세부 분류 및 압축**: 인적 사항(Name/Role), 기호/선호도는 보존하고, 일시적 세세한 잡담이나 지나간 대화는 자연스럽게 휘발(Evaporate)시킴.
- **한계점 (압축의 절벽 및 조용한 실패)**: 토큰 예산 한계에 부딪히거나 정보 밀도가 높아지면 모델이 수치/포트/설정값을 조용히 잘라내어(Silent Truncation) 환각(Hallucination)으로 채워 넣는다.

## 상세
자동 요약 버퍼는 대화 턴이 누적되더라도 고정된 토큰 예산 내에서 핵심 사실(사용자 이름, 직업, 파이썬 선호 등)을 무기한으로 유지하게 해준다.

1. **시스템 프롬프트 프레이밍**:
   - 요약본을 대화 기록이 아니라 **두 번째 시스템 메시지**로 주입하여, 모델이 외부 참고 문헌이 아닌 자신의 직접적인 '기억'으로 착각하게 만들어 "요약본에 따르면..." 같은 어색한 표현을 방지한다.
2. **요약 전용 호출 설정 (2단계)**:
   - `temperature = 0.1`: 낮은 온도로 일관된 서식을 유도.
   - `USER PROFILE`, `CONVERSATION TOPICS`, `PREFERENCES/REQUESTS` 형태의 구조화된 서식 강제.
   - "사용자의 이름은 항상 유지할 것", "유사 정보는 통합할 것" 규칙 지정.

## 예시
- **장기 기억 유지 테스트 (Alice 사례)**:
  - 1턴: "My name is Alice."
  - 2~11턴: 무작위 숫자 상식 대화 10턴 진행.
  - 12턴: "What is my name?" -> Answer: "Your name is Alice." (슬라이딩 윈도우와 달리 10턴 이후에도 요약본 상에 `USER PROFILE: - Name: Alice`가 남아 완벽 대답 성공).
- **압축의 절벽 및 조용한 절단 (Silent Truncation) 실패 사례**:
  - `SUMMARY_TOKEN_BUDGET = 100`으로 좁히고 S3 버킷, 빌드 플래그, SSH 아키텍처, 포트 `9473`, 리뷰 태그 등 5개 정보를 주입했을 때, 모델은 포트 번호 일부를 작상 중 잘라먹고 태그를 완전 삭제함. 이후 포트 질문 시 "80이나 443을 쓰라"며 환각 조언 생성.

## 충돌
- **손실 압축의 한계 vs 원시 데이터 보존**: 자동 요약 버퍼는 JPEG 압축처럼 큰 형태(이름/선호도)는 살리지만 포트 번호·SSH 값 같은 미세 세부 지식을 뭉갠다. 이러한 정밀 세부 정보까지 1000턴 이상 완벽 보존하려면 원시 대화를 보존하고 임베딩 검색을 돌리는 Vector Memory ([[RAG]])로 이행해야 한다.

## 관련 노트
- [[LLM 슬라이딩 윈도우 메모리 버퍼]]
- [[Agent Harness]]

## 출처
- 2단계 아키텍처 및 시스템 프롬프트 주입: [raw/밑바닥부터 만드는 [[LLM]] 메모리 #2. 자동 요약 버퍼.md#L73-L100](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%232.%20%EC%9E%90%EB%8F%99%20%EC%9A%94%EC%95%BD%20%EB%B2%84%ED%8D%BC.md#L73-L100)
- 알고리즘 파이썬 구현 및 요약 지침 (0.1 Temperature): [raw/밑바닥부터 만드는 [[LLM]] 메모리 #2. 자동 요약 버퍼.md#L213-L270](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%232.%20%EC%9E%90%EB%8F%99%20%EC%9A%94%EC%95%BD%20%EB%B2%84%ED%8D%BC.md#L213-L270)
- Acid Test (Alice 10턴 보존 성공 결과): [raw/밑바닥부터 만드는 [[LLM]] 메모리 #2. 자동 요약 버퍼.md#L368-L440](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%232.%20%EC%9E%90%EB%8F%99%20%EC%9A%94%EC%95%BD%20%EB%B2%84%ED%8D%BC.md#L368-L440)
- 압축의 절벽 및 조용한 절단 (Silent Truncation) 실패 수치: [raw/밑바닥부터 만드는 [[LLM]] 메모리 #2. 자동 요약 버퍼.md#L545-L620](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%232.%20%EC%9E%90%EB%8F%99%20%EC%9A%94%EC%95%BD%20%EB%B2%84%ED%8D%BC.md#L545-L620)
