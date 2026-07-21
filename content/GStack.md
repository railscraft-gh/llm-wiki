---
type: concept
status: draft
core: false
tags:
- gstack
- claude-code
- multi-agent
- dev-tools
- garry-tan
aliases:
- GStack
- garrytan/gstack
sources:
- raw/GStack - Claude Code 가상 엔지니어링 팀 도구.md
created: 2026-07-21
updated: 2026-07-21
---
# GStack

## 한 줄 정의
Y Combinator CEO Garry Tan이 공개한 오픈소스(MIT) 슬래시 커맨드 툴킷으로, Claude Code 등 10개 AI 코딩 에이전트를 23명의 가상 전문가 및 8개 파워 도구로 이루어진 완전한 엔지니어링 조직으로 변환하는 소프트웨어 팩토리 프레임워크.

## 핵심 요지
- **엔지니어링 팀 프레임워크 구축**: 단순 코딩 보조(Copilot)를 넘어 `Think -> Plan -> Build -> Review -> Test -> Ship -> Reflect` 7단계 수명주기를 슬래시 커맨드로 오케스트레이션합니다.
- **23인 전문 가상 스펙 지휘**: `/office-hours`(제품 재정의), `/plan-ceo-review`(범위 조율), `/plan-eng-review`(아키텍처 확정), `/cso`(보안 취약점 감사), `/qa`(브라우저 회귀 테스트), `/ship`(CI/배포 자동화) 등 명확한 마이그레이션 책임을 수행합니다.
- **파격적 생산성 증대**: 제작자 Garry Tan은 YC 풀타임 근무 중 60일간 3개 프로덕션 서비스와 [40개 이상의 기능](file:///Users/railscraft/Obsidian/raw/GStack%20-%20Claude%20Code%20%EA%B0%80%EC%83%81%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20%ED%8C%80%20%EB%8F%84%EA%B5%AC.md#L14)을 출시했으며, 논리적 코드 변경량 기준 2013년 대비 [810배 생산성(하루 14줄 -> 11,417줄)](file:///Users/railscraft/Obsidian/raw/GStack%20-%20Claude%20Code%20%EA%B0%80%EC%83%81%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20%ED%8C%80%20%EB%8F%84%EA%B5%AC.md#L16)을 달성했습니다.
- **에이전트 중립성 및 취향 학습**: Claude Code 외에도 Codex, [[OpenCode]], Cursor, Hermes 등 [10개 주요 코딩 에이전트](file:///Users/railscraft/Obsidian/raw/GStack%20-%20Claude%20Code%20%EA%B0%80%EC%83%81%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20%ED%8C%80%20%EB%8F%84%EA%B5%AC.md#L143)를 지원하며, 주간 [5% 감쇠(decay)](file:///Users/railscraft/Obsidian/raw/GStack%20-%20Claude%20Code%20%EA%B0%80%EC%83%81%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20%ED%8C%80%20%EB%8F%84%EA%B5%AC.md#L129) 알고리즘이 포함된 시각 디자인 취향 메모리를 갖추고 있습니다.

## 상세
GStack은 개별 지침(prompt)의 무분별한 입력을 지양하고, 사고-기획-빌드-리뷰-출시로 이루어지는 엔지니어링 프로세스를 규격화합니다.

주요 파워 도구로는 2차 검증을 담당하는 `/codex`, 파괴적 명령 실행을 방지하는 안전 가드레일 `/careful` 및 `/freeze`, 실시간 Chromium 헤드리스 브라우저 오퍼레이터 `/open-gstack-browser` 등을 제공합니다. 또한 `/pair-agent` 기능을 통해 ngrok 터널링 기반으로 [[OpenClaw]], Hermes 등 이기종 에이전트와의 멀티 에이전트 브라우저 공유를 실현합니다.

`checkpoint_mode continuous` 설정을 켜면 `WIP:` 커밋에 결정사항과 예외 시도를 자동 각인하여 세션 중단 시에도 `/context-restore`로 수월하게 복원합니다.

## 예시
- **`/autoplan` 파이프라인 구동**: CEO 리뷰 -> 디자인 리뷰 -> 엔지니어링 리뷰를 단일 명령으로 연속 실행하여 ASCII 아키텍처 다이어그램 및 테스트 매트릭스를 자동 생성.
- **`/qa` 기반 회귀 테스트**: Headless Chromium 브라우저를 기동하여 Staging URL의 UI 흐름을 자동 점검하고 발견된 버그 수정에 대한 회귀(Regression) 테스트 코드 작성.

## 충돌
- **맹목적 코드 라인 수(LOC) 인플레이션 비판**: 원시 코드 라인 수가 AI 생명주기에 따라 늘어나는 현상이 있지만, GStack은 회고(`/retro`) 및 커버리지 감사를 병행하여 스쿼시 커밋으로 정제하므로 코드 품질 저하를 방지합니다.
- **독립 검증 없는 주니어 에이전트의 섣부른 코드 수용**: `/review`와 `/codex` 등 2차 검증 스킬을 배치하지 않고 곧바로 배포할 경우 파멸적 버그가 유입될 수 있어 CSO 보안 필터(8/10 신뢰도 게이트) 적용이 필수적입니다.

## 관련 노트
- [[Claude Code 오케스트레이션]]
- [[AI 네이티브 엔지니어링 조직]]
- [[사양 기반 개발 (Spec Driven Development)]]
- [[Team Mode]]

## 출처
- [raw/GStack - Claude Code 가상 엔지니어링 팀 도구.md](file:///Users/railscraft/Obsidian/raw/GStack%20-%20Claude%20Code%20%EA%B0%80%EC%83%81%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20%ED%8C%80%20%EB%8F%84%EA%B5%AC.md)
