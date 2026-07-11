---
type: concept
status: draft
core: false
tags:
  - llm
  - agentic
aliases:
  - 영구 의미 기억 시스템
  - Semantic Memory System
  - 의미 기억 시스템
sources:
  - "raw/Your Vault as a Shared Brain — Obsidian. Multi-Agent with Claude Octopus, Codex, and Gemini.md"
created: 2026-07-11
updated: 2026-07-11
---

# 영구 의미 기억 시스템 (Semantic Memory System)

## 한 줄 정의
단발성 대화 세션의 종료로 인해 이전 정보가 유실되는 LLM의 한계를 해결하기 위해, 로컬 마크다운 파일 시스템(Obsidian Vault)을 외장 기억 저장소로 채택하고, 규칙 파일 계약(CLAUDE.md)을 매개로 맥락을 지속해서 복원하는 메모리 아키텍처이다.

## 핵심 요지
1. **의미 기억(Semantic Memory) 체계로의 전환**: 세션의 라이프사이클에 묶여 사라지는 일시적 에피소드 기억(Episodic Memory) 대신, 로컬 디렉터리의 일반 텍스트 파일(`.md`) 구조를 공유 브레인으로 활용해 영구적인 지식 연속성을 유지한다.
2. **선언적 맥락 바인딩**: 세션을 새로 기동할 때마다 `CLAUDE.md` 규칙에 규정된 수순(최근 리서치 노트 및 토론 초안 적재)을 에이전트가 자동 수행하게 하여, 과거의 연구 히스토리를 현재 맥락에 자연스럽게 동기화한다.
3. **영역 격리를 통한 거버넌스**: 에이전트가 직접 쓰기 작업을 수행할 수 있는 리서치/토론/리뷰 영역과, 인간만이 개입할 수 있는 최종 발행(Published) 및 입력 대기(Inbox) 영역을 물리적으로 나누어 검증되지 않은 정보 배포를 막는다.

## 상세
영구 의미 기억 시스템의 기술적 구성 요소와 작동 원리:
- **Obsidian Vault**: 특정 데이터베이스 엔진에 의존하지 않는 순수 로컬 마크다운 디렉터리이다. 형상 관리(Git) 및 텍스트 파싱이 극도로 용이하다.
- **Local REST API 플러그인**: 로컬 HTTP 서버(포트: `27123`)를 통해 에이전트 CLI(예: Claude Code)가 실시간으로 문서를 생성, 수정, 덧붙이기할 수 있게 돕는다. 파일 변경이 Obsidian 에디터에 지연(Reload) 없이 핫 리로드(Hot-reload)된다.
- **다중 에이전트 합의 게이트**: 병렬로 가동되는 각 에이전트(Claude, Codex, Gemini 등)의 아웃풋을 비교 채점하여 75점 이상의 합의 점수에 도달할 때만 최종 합의 종합(Consensus Synthesis) 보고서를 자동 조립하며, 미수렴 시에는 이견이 갈린 논점을 상세 기록하여 draft 상태로 유지한다.

## 예시
- **CLAUDE.md 규칙을 통한 세션 시작 프로토콜 예시**:
  ```markdown
  ## Session Start Protocol
  Upon starting any new CLI session, you MUST:
  1. Inspect the '00-Inbox/' folder to identify pending requests.
  2. Load the 3 most recently modified notes in '01-Research/' to regain contextual continuity.
  3. Scan '02-Debates/' for unresolved drafts (status: draft).
  ```
- **Local REST API 호출 예시**:
  ```bash
  curl -X PUT http://localhost:27123/vault/01-Research/semantic-caching.md \
    -H "Content-Type: text/markdown" \
    --data-binary @caching-note.md
  ```

## 충돌
- **벡터 데이터베이스(RAG) 메모리 지향론**: 의미론적 정보의 유사도 검색과 영속적 컨텍스트 제공은 임베딩 모델과 벡터 DB(Vector DB)를 연동한 RAG 아키텍처를 도입하는 것이 대규모 질의에 자동화하기 훨씬 효율적이라는 주장.
- **로컬 Vault 기반 의미 기억 지향론**: 단순 RAG 파이프라인은 단편적인 청크(Chunk) 검색에 국한되어 시스템의 종합적인 맥락이나 논리적 백링크(Backlink) 관계를 유지하지 못한다. 로컬 마크다운 노트와 양방향 링크, 그리고 계약 규칙을 결합한 Vault 형태가 인간과 복수의 인공지능이 동일한 형태로 지식을 공유하며 가독성을 유지하는 가장 확실한 '공유 뇌(Shared Brain)'를 구성한다는 반론.

## 관련 노트
- [[AI 세컨드 브레인]]
- [[유기적 개인 지식 시스템]]
- [[학습용 노트 외부화 원칙]]

