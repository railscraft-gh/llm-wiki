---
type: tool
status: needs-review
core: false
tags:
  - agent
  - omo
  - team-mode
aliases:
  - OMO Team Mode
  - Oh My OpenAgent Team Mode
sources:
  - oh-my-openagent-team-mode
created: 2026-05-11
updated: 2026-05-11
---

# OpenAgent Team Mode

## 한 줄 정의

OpenAgent Team Mode는 리드 에이전트가 최대 8명(동시 4명)의 멤버를 병렬 조율하는 멀티 에이전트 시스템으로, 12개의 `team_*` 도구로 통신한다.

## 핵심 요지

- 기본값 OFF, JSONC 설정 후 opencode 재시작으로 활성화
- 리드(Lead)가 멤버에게 `team_send_message`(P2P 메일박스) 또는 `team_task_create`(공유 태스크)로 작업 위임
- 내장 스킬: `hyperplan`(5명 크리틱), `security-research`(3명 헌터 + 2명 PoC 엔지니어)
- tmux 실시간 분할 화면 시각화 지원 (선택)

## 상세

OMO Team Mode(v4.0)는 기존 "단일 에이전트 + 서브에이전트" 구조에서 진정한 멀티 에이전트 시스템으로 전환한다. 리드 에이전트가 팀 스펙(JSON)을 읽고 조율한다.

**활성화:**
```jsonc
// ~/.config/opencode/oh-my-openagent.jsonc 또는 프로젝트 내 .opencode/oh-my-openagent.jsonc
{
  "team_mode": {
    "enabled": true,
    "max_parallel_members": 4,
    "max_members": 8,
    "tmux_visualization": false
  }
}
```

**팀 스펙 작성:**
- 경로: `~/.omo/teams/{팀이름}/config.json` 또는 프로젝트 내 `.omo/teams/{팀이름}/config.json`
- 리드 지정: `lead: { "kind": "subagent_type", "subagent_type": "sisyphus" }` 또는 멤버에 `"isLead": true`
- 멤버 종류: `subagent_type`(직접 지정: atlas, sisyphus, sisyphus-junior) / `category`(카테고리 모델 라우팅)

**사용 가능 에이전트:** sisyphus, atlas, sisyphus-junior / hephaestus는 teammate 권한 필요 / oracle, librarian, explore 등은 hard-reject

**12개 team_* 도구:**
`team_create`, `team_delete`, `team_shutdown_request`, `team_approve_shutdown`, `team_reject_shutdown`, `team_send_message`, `team_task_create`, `team_task_list`, `team_task_update`, `team_task_get`, `team_status`, `team_list`

**제한:** 메시지당 최대 32KB, 수신자 미읽음 256KB, 실행 시간 120분, 멤버당 최대 500턴

## 예시

```json
{
  "name": "ccapi-explorers",
  "lead": { "kind": "subagent_type", "subagent_type": "sisyphus" },
  "members": [
    { "kind": "category", "name": "scout-1", "category": "deep", "prompt": "Scout src/ for auth patterns." },
    { "kind": "category", "name": "scout-2", "category": "quick", "prompt": "Scout tests for auth coverage." }
  ]
}
```

**라이프사이클:** `team_create` → 리드 위임(`team_send_message`/`team_task_create`) → 멤버 작업 → 종료 협상(`team_shutdown_request`/`team_approve_shutdown`) → `team_delete`

## 내장 스킬

- **hyperplan**: 5명 적대적 크리틱이 계획 직교적 각도에서 파괴
- **security-research**: 3명 취약점 헌터 + 2명 PoC 엔지니어, 실제 익스플로잇 가능성 기준 심각도 보정

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[병렬 에이전트 세션 운영]]
- [[Claude Code 오케스트레이션]]
- [[AI 코딩 에이전트 검증 전략]]

