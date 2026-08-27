---
type: concept
status: draft
core: false
tags:
  - agent
  - context-engineering
aliases:
  - Just-in-Time Context Loading
  - 적시 로딩
sources:
  - raw/AI Agents Don’t Need Vector Search Anymore. Inside the Agentic Search Stack Replacing RAG in 2026.md
created: 2026-08-01
updated: 2026-08-01
---
# [[적시 컨텍스트 로딩]] (Just-in-Time Context Loading)

## 한 줄 정의
모든 데이터를 사전에 색인(Index)하여 미리 컨텍스트에 밀어넣는 기존 [[RAG]]와 달리, 에이전트가 런타임에 도구를 사용하여 필요한 시점에 동적으로 관련 정보만 컨텍스트 윈도우로 불러오는 기법.

## 핵심 요지
- Anthropic이 2025년 제안한 [[컨텍스트 엔지니어링]] 패러다임.
- 에이전트는 파일 경로, 웹 링크 등 가벼운 식별자만 가지고 있다가 직접 정보를 탐색해 가져온다.
- 신호 밀도(Signal density)가 낮은 텍스트 덩어리가 윈도우를 차지하는 것을 막아, 오히려 토큰 사용량을 줄이고 정확도를 높일 수 있다.
- [[검색자로서의 에이전트 (Agent-as-retriever)]] 아키텍처의 논리적 기반이 된다.

## 상세
전통적인 [[RAG]](추론 전 검색, Pre-inference retrieval)는 쿼리 발생 시점에 모델이 필요할 만한 정보를 추측해 몽땅 가져오는 방식이다. 그러나 이 방식은 코딩과 같이 엄밀하고 시시각각 변하는 대상에 대해선 오탐이 잦고 토큰을 낭비한다.

[[적시 컨텍스트 로딩]]에서는 에이전트가 `grep`, `glob` 같은 도구를 활용해 스스로 환경을 탐색한다. 이 방식은 에이전트가 직접 쿼리를 정제하고 인접 파일을 확인하면서 단발성 검색의 실패를 극복하게 만든다. 메모리가 가득 차려 할 때는 5단계 압축(Compaction) 파이프라인(예산 삭감, 중복 잘라내기, 미세 압축, 컨텍스트 축소, 자동 전체 요약)을 통해 안 쓰는 정보를 버리는 전략과 결합된다.

## 관련 노트
- [[검색자로서의 에이전트 (Agent-as-retriever)]]
- [[Claude Code]]

## 출처
- raw/AI Agents Don’t Need Vector Search Anymore. Inside the Agentic Search Stack Replacing [[RAG]] in 2026.md
