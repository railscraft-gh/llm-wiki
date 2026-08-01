---
type: concept
status: draft
core: false
tags:
  - agent
  - rag
aliases:
  - Agent-as-retriever
  - Agentic Search
  - 에이전트 주도 검색
  - Vectorless RAG
sources:
  - raw/AI Agents Don’t Need Vector Search Anymore. Inside the Agentic Search Stack Replacing RAG in 2026.md
created: 2026-08-01
updated: 2026-08-01
---
# 검색자로서의 에이전트 (Agent-as-retriever)

## 한 줄 정의
벡터 데이터베이스와 임베딩 파이프라인에 의존하던 기존 RAG를 버리고, LLM 기반 에이전트가 `grep`, `find` 등의 검색 도구를 직접 쉴 새 없이 호출하여 정보를 찾아내는 검색 패러다임.

## 핵심 요지
- **정확성 및 안정성**: 벡터 임베딩 기반의 어설픈 의미 매칭보다 정확한 키워드(Identifier) 매칭과 에이전트의 반복적인 쿼리 정제가 훨씬 더 높은 성능을 발휘한다 (Amazon AAAI 2026 논문 등에서 증명됨).
- **데이터 최신성 및 보안**: 파일을 직접 읽어오므로 인덱스 갱신 지연이 없고, 타사 인프라에 독점 데이터를 임베딩 복사본으로 저장할 필요가 없어 보안/프라이버시 위험이 사라진다.
- **다양한 구현 방식**: 순수 쉘(grep/glob) 기반 검색(Claude Code), 의미론과 어휘론을 혼합한 하이브리드(Cursor), AST 기반 구문 검색(Cline), 그리고 검색 정책을 강화학습으로 학습한 모델(Search-R1) 등으로 세분화되었다.

## 상세
2025~2026년에 걸쳐 코딩 에이전트 시장(Claude Code, Cursor, Devin 등)에서 두드러진 아키텍처적 전환점이다. 
벡터 RAG는 코드를 검색할 때 문맥이나 식별자를 자주 놓치고 사소한 오탐을 발생시키는 취약점이 있었다. "에이전트 주도 검색"은 미리 인덱스를 만들지 않는다(Vectorless RAG). 대신 [[적시 컨텍스트 로딩 (Just-in-Time Context Loading)]] 전략을 통해 필요한 순간에 `grep`을 날려 원하는 바이트만 정확하게 긁어온다.

[[MCP]] (Model Context Protocol)의 확산은 에이전트가 파일 시스템뿐만 아니라 DB, 서드파티 SaaS까지 동일한 도구 호출 인터페이스로 탐색할 수 있게 만들어 이 패러다임의 완성을 앞당겼다.
단, 쿼리 1회당 에이전트 루프가 꼬리를 물고 도구를 호출하기 때문에 토큰 소모량이 막대하며(수십 배에 달하기도 함) 지연 시간(Latency)이 길다는 단점이 있다. 

## 충돌
- **토큰 비용 문제**: 단순 채팅 봇 대비 쿼리당 토큰 비용이 5배에서 30배까지 치솟을 수 있다. 이에 대해 Anthropic은 다중 에이전트 시스템을 통해 RAG 대비 90% 높은 성능을 확보하는 대가로 막대한 토큰을 지불할 가치가 있다고 주장한다.

## 관련 노트
- [[적시 컨텍스트 로딩 (Just-in-Time Context Loading)]]
- [[Claude Code]]
- [[MCP]]

## 출처
- raw/AI Agents Don’t Need Vector Search Anymore. Inside the Agentic Search Stack Replacing RAG in 2026.md
