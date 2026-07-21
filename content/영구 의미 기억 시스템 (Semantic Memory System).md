---type: concept
status: draft
core: false
tags:
  - memory-system
  - agent-architecture
  - obsidian
aliases:
  - Semantic Memory System
  - 의미 기억 시스템
  - 영구 의미 기억
  - 영구-의미-기억-시스템-(Semantic-Memory-System)
sources:
  - raw/Your Vault as a Shared Brain — Obsidian. Multi-Agent with Claude Octopus, Codex, and Gemini.md
created: 2026-07-12
updated: 2026-07-12
---
# 영구 의미 기억 시스템 (Semantic Memory System)

## 한 줄 정의
영구 의미 기억 시스템(Semantic Memory System)은 로컬 마크다운 파일 시스템(예: Obsidian Vault)을 기반으로, API(Local REST API 등)를 연결하여 에이전트 세션의 한계를 넘어서 장기적인 지식과 이력을 영구 보존하고 상호 참조시키는 장기 기억 아키텍처이다.

## 핵심 요지
- **세션 종속성 극복 (State Preservation)**: stateless하게 동작하는 언어 모델(LLM)과 에이전트 루프의 특성상 세션이 종료되면 기억이 소실되는데, 이를 독립된 로컬 텍스트 파일에 기록하여 지속성(Persistence)을 확보한다.
- **로컬 소유권 및 포맷 범용성**: 특정 독점 데이터베이스 포맷에 종속되지 않는 일반 마크다운(`.md`) 파일 구조를 활용하므로, 에이전트의 Bash 툴이나 텍스트 에디터 등 다양한 CLI 도구와 자유롭게 호환된다.
- **실시간 지식 동기화**: Local REST API 플러그인을 사용하여 HTTP 서버 형태로 연결함으로써, 에이전트가 처리한 결과물을 Obsidian UI에 새로고침 없이 즉각 핫리로드하여 시각적으로 모니터링할 수 있다.

## 상세
영구 의미 기억 시스템은 다중 에이전트(Multi-agent) 협업 및 공유 지식 축적을 위한 '제2의 뇌(Shared Brain)' 역할을 수행한다.

### 1. 시스템 가교 (REST API 브리지)
단순한 리다이렉트 파일 쓰기(`echo "..." > file.md`) 대신, Obsidian 커뮤니티 플러그인인 `Local REST API`를 통해 HTTP 엔드포인트(포트 27123 등)로 통신한다. 이 방식은 다음과 같은 무결성을 보장한다.
- 텍스트 파일 인코딩 충돌 방지 및 파일 락 제어.
- 파일 추가/변경 사항을 Obsidian 렌더러에 즉시 반영하는 실시간 핫리로드 기능.
- 로컬 호스트(localhost) 접속만 허용하여 외부 노출 위험을 원천 차단하는 오프라인 보안성.

### 2. 다중 에이전트 협업 및 합의 검증
각기 다른 특징(Claude의 아키텍처 역량, Codex의 코드 예외 탐지, Gemini의 광범위한 리서치 역량 등)을 가진 이기종 에이전트들이 이 영구 기억 공간을 공유 보드로 삼아 의견을 교류하고, 75% 기준의 합의 검증 게이트(Consensus Gate)를 거쳐 취합된 정제 지식만을 evergreen 위키 노트로 확정해나가는 협업 구조를 갖춘다.

## 예시
- **Claude Octopus의 옵션 검증**: 공유 보관소(`OctopusVault/`) 내의 `00-Inbox/` 폴더에서 에이전트들이 분석 및 리서치 자료를 작성하여 `/octo:*` 명령어를 통해 상호 토론하고, 3개 모델이 동의한 정밀 요약 결과를 의미 기억 폴더(`01-Research/`)로 승격하는 워크플로우.

## 충돌
- **메모리 단편화 및 컨텍스트 부패**: 기억 공간이 무분별하게 확장되면 에이전트가 한 번에 로드해야 할 탐색 대상 파일이 너무 많아져 탐색 오버헤드가 발생한다. 이 때문에 대화 내역의 3단계 압축 및 주기적인 위키 노트 병합/승격(Consolidation) 작업이 함께 보완되어야 한다.

## 관련 노트
- [[고차원 표현 공간]]
- [[에이전트 디자인 패턴]]
- [[양자 지원 벡터 머신]]

