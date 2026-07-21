---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - multi-agent
  - oh-my-openagent
aliases: []
sources:
  - "raw/oh-my-openagent-team-mode.md"
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의

Oh My OpenAgent(OMO) 프레임워크에서 리드(Lead) 에이전트 1명과 최대 8명의 서브 에이전트가 병렬로 작업을 분담하고 협업할 수 있도록 지원하는 멀티 에이전트 오케스트레이션 기능.

## 핵심 요지

- 단순히 에이전트 한 명이 코드를 짜는 것을 넘어, 보안 검사, 코드 리뷰, 설계 검증 등을 각 분야 전문가 에이전트가 병렬(Parallel)로 수행하게 한다.
- `team_*` 접두사를 가진 12개의 전용 도구(Tool)를 통해 에이전트 간 P2P 메시징 및 공유 태스크 위임 라이프사이클(팀 생성 → 위임 → 수행 → 종료)을 구현한다.
- tmux와 연동하여 병렬로 돌아가는 에이전트들의 실시간 화면을 그리드 창 분할로 시각화해 주는 것이 특징이다.

## 상세

[Team Mode](file:///Users/railscraft/Obsidian/raw/oh-my-openagent-team-mode.md#L10)는 단일 에이전트의 속도 한계와 컨텍스트 누락 문제를 극복하기 위해 설계되었다. 사용자가 `oh-my-openagent.jsonc`에서 명시적으로 기능을 켜야 작동하는 옵트인(Opt-in) 기능이다.
팀 구성을 정의하는 JSON 스펙(Team Spec)에 따라 리드 에이전트(`sisyphus` 등)가 생성되고, 리드는 `team_send_message`와 `team_task_create` 도구를 이용해 서브 에이전트(멤버)들에게 작업을 뿌린다.
예를 들어 `security-research` 스킬을 실행하면 3명의 취약점 탐색 에이전트와 2명의 검증 에이전트가 동시에 투입되어 마치 진짜 레드팀(Red Team)처럼 코드베이스를 샅샅이 감사할 수 있다.

## 예시

```json
{
  "name": "ccapi-explorers",
  "lead": { "kind": "subagent_type", "subagent_type": "sisyphus" },
  "members": [
    { "name": "scout-1", "category": "deep", "prompt": "Scout src/ for auth" },
    { "name": "scout-2", "category": "quick", "prompt": "Scout tests" }
  ]
}
```
리드(`sisyphus`)가 위 스펙을 읽어 `scout-1`과 `scout-2`를 병렬로 스폰하고 작업을 지시한 뒤, 결과를 취합해 사용자에게 보고한다.

## 충돌

- **통신 및 메시지 오버헤드**: 에이전트끼리 대화하는 모든 내용이 컨텍스트 길이에 합산되므로(메일박스 상한 256KB 등 제한이 있더라도) 토큰 낭비가 기하급수적으로 커질 위험이 있다.
- **비호환 에이전트 존재**: 메일박스 상태 기록을 지원하지 않는 일부 에이전트(`oracle`, `librarian` 등)는 Team Spec 파싱 단계에서 Hard-reject되며, 이들에게는 구형 `delegate-task`를 사용해야 하는 구조적 파편화가 존재한다.

## 관련 노트

- [[GStack]]
- [[Claude Code]]

