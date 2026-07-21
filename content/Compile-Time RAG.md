---
type: concept
status: draft
core: false
tags:
- llm
- rag
- architecture
aliases:
- 컴파일 타임 RAG
- Compile-Time RAG
- Compile-Time-RAG
sources:
- raw/RAG is a knowledge interpreter. Time for a compiler — Compile-Time RAG.md
created: 2026-07-21
updated: 2026-07-21
---
# Compile-Time RAG

## 한 줄 정의
런타임에 날것의 텍스트 청크를 매번 검색·해석하는 대신, 질문 수신 전 사전 컴파일 단계에서 태스크 최적화 아티팩트(Artifact)를 단 한 번 빌드하여 서빙 경로의 오버헤드를 최소화하는 RAG 아키텍처 패러다임.

## 핵심 요지
- **런타임 검색의 인터프리터적 비효율성 극복**: 기존 RAG는 요청 경로 내에서 문서를 청크로 분할하고 매 쿼리마다 임베딩·검색·해석을 반복하여 차가운 재시작(cold start)과 연산 오버헤드를 발생시킵니다.
- **에이전트 루프세(Loop Tax) 제거**: 다단계 추론 에이전트는 누적 입력 토큰 폭증으로 연산 비용의 [80~90%](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L50)를 추론 비용으로 소비하는데, 사전 가공 아티팩트를 제공해 추론 단계와 토큰 소모를 대폭 줄입니다.
- **Compile-Index-Serve 3단계 분리**: 사전 컴파일(Compile), 검증 아티팩트의 인덱싱(Index), 정형 객체 단기 제공(Serve)으로 역할을 분리하여 처리합니다.
- **상쇄 비용과 데이터 최신성 수용**: 사전 빌드 단계로 비용이 이동하므로, 동적·권한 중심 데이터는 실시간 RAG를 유지하고 정적 문서(정책, 서식, 재무 보고서 등) 위주로 사전 컴파일하는 하이브리드 전략이 필수적입니다.

## 상세
기존 런타임 RAG는 쿼리 도달 시 매번 유사 청크를 끌어오는 인터프리터 방식을 취합니다. 단발성 대화에서는 이 오버헤드가 단 1회 발생하여 큰 부담이 없으나, 다단계 내부 추론을 반복하는 루프형 에이전트 환경에서는 과거 대화 히스토리 및 컨텍스트 누적으로 인해 입력 토큰이 비선형적으로 증폭됩니다. 자기 반성(reflection) 루프를 10회 진행할 경우 토큰 소모가 [5배~30배](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L50) 폭증하는 문제가 일어납니다. 동시 사용자가 [50명에서 500명, 700명](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L6)으로 늘어날 때 프로젝트가 좌초되는 까닭은 모델의 성능 부족이 아닌 매 단계 밑바닥부터 해석을 재실행한 아키텍처적 결함 때문입니다.

컴파일 타임 RAG는 '청크(Chunk)' 대신 문서 간 관계와 맥락을 특정 태스크용으로 사전 조립한 '아티팩트(Artifact)'를 생성합니다. 파인콘 KRAFTBench 실험에 따르면, 10-K 기업 보고서 검증 시 기존 RAG 평균 소비 토큰은 약 [49,000 토큰](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L119)에 달했으나 컴파일 타임 RAG는 약 [6,700 토큰](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L119)으로 [약 7배(90% 가까운)](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L10) 비용 절감을 보였습니다. 처리 시간 역시 37.9초에서 [22.7초로 약 1.7배](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L125) 개선되었습니다.

다만 검증 없는 사전 빌드는 위험합니다. 학술 연구(WiCER)에 의하면 검증 없는 기계적 아티팩트 생성은 데이터 유실율이 [53~60%](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L72)에 이르고, 검증·보정 피드백 루프를 적용해야 [80% 수준](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L72)의 품질이 확보됩니다.

## 예시
- **기업 내규 및 연례 보고서 최적화**: 매 분기 갱신되는 10-K 보고서나 사내 표준 정책 문서를 '수익성 대조표 아티팩트', '규정 맵 아티팩트' 형태로 사전 컴파일하여 에이전트 질문 시 즉시 결합 서빙.
- **LLM Wiki 패턴**: 안드레 카파시의 LLM 위키처럼 주기적 컴파일러가 마크다운 파일들로부터 정리된 구조화 지식 노트를 생성·저장하여 런타임 쿼리 비용을 제거하는 아키텍처.

## 충돌
- **모든 지식의 컴파일 시도 시 배보다 배꼽이 더 커짐**: 1분 단위로 변하는 동적 데이터(실시간 재고, 상담 티켓)나 유저별 보안 권한 통제가 필요한 정보는 컴파일 시 빌드 비용 폭증과 환각/노후화 리스크(stale data)를 유발합니다.
- **복잡한 다중 관계 비교 질문**: 시맨틱 검색 단독 적용 시 다중 연결 질문 정확도가 [0.41](file:///Users/railscraft/Obsidian/raw/RAG%20is%20a%20knowledge%20interpreter.%20Time%20for%20a%20compiler%20%E2%80%94%20Compile-Time%20RAG.md#L32)에 불과하던 한계를 컴파일 타임 아티팩트의 사전 조인(Materialized View 개념)으로 보완해야 합니다.

## 관련 노트
- [[RAG 아키텍처 선택]]
- [[GraphRAG]]
- [[Context Engineering]]
- [[LLM 메모리 시스템 아키텍처]]

