---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - harness
  - architecture
aliases:
  - Context Compaction Strategies
  - 반응형 대 선제형 Compaction
sources:
  - raw/하네스를 내 것으로 만들기 - 출판형 다듬기.md
created: 2026-07-21
updated: 2026-07-21
---
# Compaction 전략

## 한 줄 정의
에이전트가 대규모 멀티턴 대화를 이어갈 때 컨텍스트 윈도우(Context Window) 한계 및 비용 증가를 막기 위해 토큰을 반응형 또는 선제적으로 압축·요약·제거하는 하네스 설계 기술.

## 핵심 요지
- **반응형(Reactive) Compaction**:
  - Claude Code 방식: 윈도우 한계 직전까지 컨텍스트를 뜨겁게 유지하다가 [잔여 13,000 토큰 이내로 좁혀질 때 단일 스트리밍 LLM 요약 발동](file:///Users/railscraft/Obsidian/raw/%ED%95%98%EB%84%A4%EC%8A%A4%EB%A5%BC%20%EB%82%B4%20%EA%B2%83%EC%9C%BC%EB%A1%9C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L55).
  - 정상 경로에서 고속 실행 및 프롬프트 캐시 재사용 이점 극대화.
- **선제형(Predictive) Compaction**:
  - [[OpenClaw]] 방식: 매 LLM 호출 전에 요청 토큰을 예측하고 [1.2배 안전 마진을 적용](file:///Users/railscraft/Obsidian/raw/%ED%95%98%EB%84%A4%EC%8A%A4%EB%A5%BC%20%EB%82%B4%20%EA%B2%83%EC%9C%BC%EB%A1%9C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L57)하여 단계별(도구 결과 자르기 $\rightarrow$ 요약 $\rightarrow$ 병합) 방어막 가동.
  - API 제공자에 상관없이 토큰 폭발 오버플로우 방지.

## 상세
- **요약 품질 검증 차이**:
  - [[OpenClaw]]는 `auditSummaryQuality` 로직을 통해 5개 필수 헤딩 및 UUID, IP, 파일명 등 식별자 잔존 여부를 사후 검증하고 미달 시 피드백과 함께 재시도.
  - Claude Code는 verbatim(직접 인용) 및 9개 섹션 서술형 프롬프트 주입으로 태스크 이탈 방지.

## 예시
- Claude Code의 경우 `cache_edits` API 기능을 활용해 200K 캐시 프림픽스를 파괴하지 않고 오래된 도구 결과만 외과적으로 제거하여 [하루 380억 토큰(fleet cache_creation의 0.76%) 절감](file:///Users/railscraft/Obsidian/raw/%ED%95%98%EB%84%A4%EC%8A%A4%EB%A5%BC%20%EB%82%B4%20%EA%B2%83%EC%9C%BC%EB%A1%9C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L79).

## 충돌
- **비용 vs 무결성**: 잦은 microcompact는 API 연산 비용을 아끼지만, 과도한 요약은 에이전트가 이전에 수행하던 작업 상태(Batch Progress 등)의 문맥적 손실을 부를 수 있음.

## 관련 노트
- [[Agent Harness]]
- [[Harness Engineering]]

