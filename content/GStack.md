---
aliases:
  - G스택
  - garrytan/gstack
core: false
created: 2026-05-14
sources:
  - GStack - Claude Code 가상 엔지니어링 팀 도구
  - Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합
  - 매퍼코-3스킬-조합-워크플로우-해강
  - 'https://github.com/garrytan/gstack'
  - raw/AI 네이티브 엔지니어링 조직 운영하기 - Code w Claude 발표.md
  - raw/GStack - Claude Code 가상 엔지니어링 팀 도구.md
  - raw/Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md
status: evergreen
tags:
  - llm
  - agent
  - ai-coding
  - tool
type: tool
updated: 2026-07-10
---

# GStack

## 한 줄 정의
GStack은 Claude Code와 호환 에이전트에 제품, 설계, 리뷰, QA, 보안, 릴리스 역할을 slash command로 얹어 "한 명의 Copilot"보다 "가상 엔지니어링 팀"처럼 쓰게 하는 오픈소스 skill 모음이다.

## 핵심 요지
- GStack의 기본 흐름은 Think → Plan → Build → Review → Test → Ship → Reflect다.
- `/office-hours`, `/plan-ceo-review`, `/plan-eng-review`, `/plan-design-review`는 무엇을 만들지와 무엇을 빼야 하는지를 압박하는 계획 계층이다.
- `/review`, `/qa`, `/cso`, `/ship`, `/land-and-deploy`, `/canary`는 구현 이후의 검증과 출시 흐름을 맡는다.
- 도구 수, host 지원, 설치 방식은 빠르게 바뀌므로 실사용 전 공식 저장소를 확인해야 한다.
- 60일간 3개 프로덕션 서비스, 40+ 기능 출시를 가능케 하며 2013년 대비 코드 변경량을 810배(하루 14줄 -> 11,417줄)로 폭발시킨 Garry Tan의 가상 팀 아키텍처.
- 단순 Copilot을 넘어 스프린트 개발 프로세스(Think -> Plan -> Build -> Review -> Test -> Ship -> Reflect)를 구조화.

## 상세

공식 GitHub README는 2026-05-14 확인 기준 GStack을 23개 specialist와 8개 power tool로 구성된 Markdown slash command 묶음이라고 설명한다. raw 정리는 이를 Garry Tan이 YC를 운영하면서도 파트타임으로 여러 서비스를 배포하는 데 사용한 개인 workflow로 소개한다. 핵심은 "AI에게 더 많이 코딩시키기"가 아니라 역할별 검토와 실행 기준을 명령어로 고정하는 것이다.

제품 단계에서는 `/office-hours`가 사용자의 문제 정의를 흔들고, CEO·디자인·엔지니어링 리뷰가 범위, 취향, 아키텍처, 테스트 경로를 나눠 본다. 구현 이후에는 `/review`가 production bug 가능성을 찾고, `/qa`가 실제 브라우저로 조작하며, `/cso`가 OWASP Top 10과 STRIDE 위협 모델링 관점에서 보안 위험을 본다. `/careful`, `/freeze`, `/guard`처럼 파괴적 명령이나 편집 범위를 제한하는 safety command도 포함된다.

[[매퍼코 3스킬 워크플로우]]와 [[Ralph Loop]]에서 GStack은 주로 브레인스토밍과 의사결정 계층으로 쓰인다. 구현 엔진은 Superpowers나 다른 coding agent가 맡고, GStack은 "이 기능이 진짜 핵심인가", "어떤 설계가 제품 의도에 맞는가" 같은 판단을 구조화한다.

### 가상 전문가 23인 중 핵심 역할
- `/plan-ceo-review`: 문제 범위를 4가지 모드(확장, 선택적 확장, 범위 유지, 축소)로 검토.
- `/plan-devex-review`: TTHW(Time to Hello World) 벤치마크 기반 개발자 경험 20-45개 질문 검토.
- `/autoplan`: CEO, 디자인, 엔지니어링 3대 리뷰를 파이프라인으로 일괄 자동 실행.
- `/cso`: OWASP Top 10 + STRIDE 위협 모델링 기반 17개 오탐 제외 필터 및 8/10 신뢰도 게이트 보안 통제.
- `/design-shotgun`: 4-6개 AI 목업 변형 생성 및 브라우저 비교 분석. 주간 5% 감쇠(decay) 피드백 루프로 취향 기억 반영.
- `/design-html`: 목업을 30KB 이하 zero-dependency Svelte/React/Vue 코드로 변환.

### 8대 파워 툴 및 체크포인트 메커니즘
- `/codex`: OpenAI Codex CLI를 통한 독립적 코드 리뷰 (review, adversarial challenge, open consultation 모드).
- `/guard`: `/careful` (파괴적 명령 가드) + `/freeze` (파일 편집 한정 격리) 조합.
- **`continuous` 체크포인트 모드**: `gstack-config set checkpoint_mode continuous` 적용 시 자동으로 `[gstack-context]`가 포함된 `WIP:` 커밋을 수시로 생성해 컨텍스트 셧다운 복구력 확보. `/ship` 시 스쿼시 처리.
- **에이전트 호환성**: Cursor, [[OpenCode]], Factory Droid, Slate, Kiro, Hermes, [[GBrain]] 등 10개 에이전트와 `--host <agent>` 플래그로 즉각 호환.

## 예시

- 새 제품 아이디어를 `/office-hours`로 좁힌 뒤 `/plan-ceo-review`와 `/plan-eng-review`로 범위와 아키텍처를 검토한다.
- 브랜치 작업 후 `/review`로 결함을 찾고, staging URL에 `/qa`를 실행해 실제 클릭과 스크린샷 기반 검증을 한다.
- production 관련 작업에서는 `/guard`로 안전 가드레일과 편집 범위를 함께 적용한다.

### 설치 및 가동 명령어
```bash
# 개인용 로컬 설치
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
cd ~/.claude/skills/gstack && ./setup

# 팀 모드 (버전 드리프트 없는 글로벌 공유 설정)
(cd ~/.claude/skills/gstack && ./setup --team) && \
  ~/.claude/skills/gstack/bin/gstack-team-init required && \
  git add .claude/ CLAUDE.md && \
  git commit -m "require gstack for AI-assisted work"
```

## 충돌
- 2026-05-14 확인: raw 자료와 공식 README 모두 23개 specialist, 8개 power tool을 언급하지만, 저장소의 command 폴더와 host 지원 범위는 계속 변할 수 있다. 현재 노트는 개념과 workflow 역할을 우선 기록하고, 정확한 command 목록은 공식 저장소를 기준으로 재확인한다.

## 관련 노트
- [[매퍼코 3스킬 워크플로우]]
- [[Ralph Loop]]
- [[Plan Mode 기반 AI 작업]]
- [[AI 코딩 에이전트 검증 전략]]
- [[AI 시대 디자인 시스템]]
- [[OpenCode]]

