---
type: concept
status: draft
core: false
tags:
  - rag
  - ai-architecture
  - llm
  - optimization
sources:
  - "raw/RAG is a knowledge interpreter. Time for a compiler — Compile-Time RAG.md"
created: 2026-07-20
updated: 2026-07-20
---

# Compile-Time RAG

## 한 줄 정의

Compile-Time RAG는 요청 경로(request path) 밖에서 지식 텍스트를 미리 해석·구조화해 태스크 최적화 아티팩트(artifact)로 구워두고 서빙하는 사전 컴파일 아키텍처 패턴이다.

## 핵심 요지

- 기존 런타임 RAG는 요청이 올 때마다 날것의 텍스트 청크를 임베딩·검색·주입하는 지식 인터프리터 방식으로 구동된다.
- 자율 에이전트 루프가 지속되면 매 단계 대화 맥락이 불어나 입력 토큰 소비가 기하급수적으로 폭증하는 '에이전트 루프세(loop tax)'가 발생한다.
- Compile-Time RAG는 질의 도달 전 지식 결합 및 구조화를 단 한 번 수행해 정형화된 아티팩트를 만들고 런타임에는 가볍게 서빙만 수행한다.
- 벤치마크상 약 90% 수준의 토큰 소비 절감 효과를 기대할 수 있지만, 아티팩트 사전 빌드(컴파일) 비용과 데이터 최신성(freshness) 동기화 리스크를 수반한다.

## 상세

### 인터프리터 방식(런타임 RAG)의 한계와 에이전트 루프세

클래식 RAG는 매 요청마다 5단계(청킹 → 임베딩 → 벡터 DB 로드 → 쿼리 임베딩 → 탑-K 프롬프트 주입)를 반복한다. 단발성 챗봇에서는 일회성 오버헤드에 그치지만, 스스로 추론과 도구 호출을 반복하는 루프형 에이전트 환경에서는 오버헤드가 누적된다.

추론 루프가 진행될수록 이전 추론 궤적과 검색 파편이 프롬프트에 불어나며, 에이전트 운영 예산의 [80~90%가 입력 토큰 추론 비용](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L50)으로 소비된다. 10-K 기업 보고서 대상 비교 검색 벤치마크에서 기존 에이전트 RAG의 정확도는 [약 0.41](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L32) 수준에 그치는데, 원거리 텍스트 조각 간의 유기적 관계(join)를 런타임 시맨틱 검색만으로 연결하지 못하기 때문이다.

### 청크 대 아티팩트(Artifact)

- **단순 청크**: 바이트나 글자 수 단위로 기계 분할한 가공되지 않은 텍스트 덩어리다.
- **아티팩트**: 재무 수익성 대조표나 규정 디펜던시 맵처럼 수많은 연관 문서를 분석하여 특정 태스크 수행에 최적화되도록 맥락과 엔티티 관계를 미리 해결(resolve in advance)한 정형 데이터 구조다.

검증 루프 없이 기계적으로 구워낸 아티팩트는 [최대 53~60%의 데이터 유실율](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L72)을 보인다. 원본 대조 및 피드백 보정 루프를 거쳐야 데이터 품질이 약 80% 수준으로 안정화된다.

### Compile-Index-Serve 파이프라인

1. **Compile**: 컨텍스트 컴파일러 에이전트가 평가지표(eval set) 질문과 소스 문서를 바탕으로 아티팩트를 생성하고 반복 검증한다.
2. **Index**: 검증된 아티팩트 객체를 시맨틱·키워드 하이브리드 인덱스 저장소에 구워둔다.
3. **Serve**: 질문 수신 시 에이전트에게 팩트와 출처가 명시된 정형 객체를 즉시 서빙한다. (예: KnowQL 선언형 쿼리, LLM Wiki 마크다운 노트 빌드).

### 경제성 실체와 기회 비용

파인콘의 KRAFTBench 실험에 따르면 10-K 보고서 검증 시 기존 RAG는 평균 [약 49,000 토큰](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L119)을 소비한 반면, Compile-Time RAG는 [약 6,700 토큰](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L119)만 소모해 대략 7배(약 86~90%)의 토큰 절감을 기록했다. 응답 지연 시간의 경우 기존 RAG 37.9초 대비 [22.7초로 약 1.7배 향상](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L125)되었다.

실시간 토큰 비용 절감은 사전에 아티팩트를 생성하는 컴파일 단계로 연산 비용이 수평 이동한 결과다. 원본 정보가 빈번하게 변경되어 아티팩트 재빌드가 끊임없이 일어난다면 컴파일 빌드 예산이 런타임 절약분을 초과할 위험이 있다.

## 예시

- **사전 컴파일 적합**: 변경 주기가 긴 사규, 표준 계약서 서식, 릴리스된 기술 사양서, 연말 재무 보고서.
- **실시간 런타임 검색 적합**: 실시간 상담 티켓, 재고 및 가변 단가표, 유저별 조회 권한 통제가 필요한 보안 문서.

## 충돌

사전 컴파일 방식을 극단적으로 적용해 모든 문서 아티팩트화를 추진할 경우, 원본 문서 변경 시 재빌드 스케줄러 오작동으로 인해 시스템이 오래된 아티팩트 스냅샷을 기반으로 매끄럽고 설득력 있는 환각(hallucination)을 생성할 위험이 커진다.

## 관련 노트

- [[RAG 아키텍처 선택]]
- [[PageIndex (구조형 RAG 탐색)]]
- [[RAG 퓨전]]
- [[하이브리드 검색 인덱스]]
- [[LLM Wiki 구현 선택지]]

