---
type: concept
status: draft
core: false
tags:
  - openagent
  - multi-agent
  - team-mode
  - agentic-engineering
aliases:
  - OpenAgent-Team-Mode
  - OpenAgent Team Mode
  - OMO Team Mode
  - Team Mode (v4.0)
sources:
  - raw/oh-my-openagent-team-mode.md
created: 2026-07-21
updated: 2026-07-21
---

# OpenAgent [[Team Mode]]

## 한 줄 정의
Oh My OpenAgent(OMO v4.0)에서 리드 에이전트가 최대 8명의 전문화된 에이전트 멤버를 동시 통제하며 메일박스 및 공유 태스크 구조로 병렬 협업을 수행하는 멀티 에이전트 오케스트레이션 패러다임.

## 핵심 요지
- **옵트인 멀티 에이전트 전환**: 기본값 OFF 상태에서 `oh-my-openagent.jsonc` 설정을 통해 활성화되며, 12개의 전용 `team_*` 도구를 해제하여 기존 "단일 + 서브에이전트" 관계를 독립형 P2P 팀 구조로 전환합니다.
- **엄격한 바운더리 규격**: 팀당 전체 멤버 상한 [8명(max_members)](file:///Users/railscraft/Obsidian/raw/oh-my-openagent-team-mode.md#L49), 동시 실행 [4명(max_parallel_members)](file:///Users/railscraft/Obsidian/raw/oh-my-openagent-team-mode.md#L48), 메시지당 본문 최대 [32KB](file:///Users/railscraft/Obsidian/raw/oh-my-openagent-team-mode.md#L54), 수신자 미읽음 상한 [256KB](file:///Users/railscraft/Obsidian/raw/oh-my-openagent-team-mode.md#L55), 1회 실행당 최대 [10,000 메시지 / 120분 / 턴당 500회](file:///Users/railscraft/Obsidian/raw/oh-my-openagent-team-mode.md#L50-L52) 한도를 강제합니다.
- **에이전트 라우팅과 하드 리젝트(Hard-Reject)**: `sisyphus`, `atlas`, `sisyphus-junior` 등 호환 가능한 에이전트만 팀 멤버로 위임할 수 있으며, 메일박스 상태 기록이 불가능한 일부 도구(oracle, librarian 등)는 TeamSpec 파싱 시 Hard-reject 처리됩니다.
- **협상형 라이브러리 및 고급 스킬**: `hyperplan`(5인 적대적 비판), `security-research`(3인 헌터 + 2인 PoC) 등 내장 스킬을 지원하며, 종료 요청(`team_shutdown_request`)과 승인/거부 라이프사이클을 통해 수순을 통제합니다.

## 상세
기존 에이전트 시스템이 상재적 단일 세션에 지시를 몰아넣던 한계를 타파하기 위해, OMO [[Team Mode]]는 JSON 기반 Team Spec 구성(`~/.omo/teams/{팀이름}/config.json`)을 읽어들여 런타임 세션을 구성합니다.

12개 `team_*` API(`team_create`, `team_send_message`, `team_task_create`, `team_status` 등)를 기반으로 리드가 동시성을 제어하며, tmux 연동 시(`tmux_visualization: true`) 터미널 내 멀티 패인 그리드로 에이전트들의 실시간 추론 상태를 가시화합니다.

멤버 유형은 직접 지정하는 `kind: "subagent_type"`과 목적별 모델로 자동 라우팅되는 `kind: "category"`로 나뉘며, 태스크 상태 변화(claimed -> completed)를 P2P 메일박스 폴링([간격 3000ms](file:///Users/railscraft/Obsidian/raw/oh-my-openagent-team-mode.md#L56))으로 수신하여 병목을 차단합니다.

## 예시
- **보안 감사 팀(security-research) 운용**: 리드 에이전트 지휘 하에 3명의 취약점 탐색 스카우트와 2명의 PoC 실증 엔지니어를 동시 구동해 32KB 제한 메시지로 익스플로잇 가능성을 종합 검증.
- **적대적 크리틱(hyperplan) 파이프라인**: 설계 직후 코드를 작성하기 전 5명의 에이전트 멤버가 직교적 각도에서 계획의 결함을 공격해 아키텍처 수정을 유도.

## 충돌
- **Hard-reject 에이전트의 팀 투입 오류**: `oracle`, `librarian` 등 메일박스 기록 저장이 지원되지 않는 에이전트를 TeamSpec에 지정하면 파싱 단계에서 즉시 에러(Hard-reject)가 발생하므로 전통적 `delegate-task`를 써야 합니다.
- **미읽음 메일박스 오버플로우**: 멤버 간 메시지 전달 시 미읽음 용량이 256KB를 초과하면 통신 마찰이 생기므로 리드의 주기적 수신확인 및 정리 절차가 요구됩니다.

## 관련 노트
- [[Team Mode]]
- [[병렬 에이전트 세션 운영]]
- [[Claude Code 오케스트레이션]]
- [[AI 에이전트 아키텍처 완전 가이드]]

