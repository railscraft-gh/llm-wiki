---
type: tool
status: needs-review
core: false
tags:
  - agent
  - open-source
  - tool
  - self-hosted
aliases:
  - openclaw
sources:
  - raw/The Complete (Honest) Guide to OpenClaw.md
  - raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md
created: 2026-05-26
updated: 2026-06-03
---

# OpenClaw

## 한 줄 정의

OpenClaw는 여러 메시징 채널과 LLM을 연결해 shell, 파일, 브라우저, API 작업을 실제로 수행하게 하는 self-hosted personal agent runtime이다.

## 핵심 요지

- 핵심은 reasoning demo가 아니라 "내 환경에서 실제 행동을 수행하는 agent"라는 점이다.
- 구조는 surprisingly 단순하다. 단일 Gateway process가 channel 연결, 세션 라우팅, tool 실행, markdown memory를 관리한다.
- 확장 구조는 tool, SKILL.md, plugin 세 층으로 나뉘며, 모델 제공자는 25개+로 바꿔 끼울 수 있다.
- 동시에 보안 표면도 크다. 원문은 skill marketplace, WebSocket 노출, 원격 코드 실행 경로 가능성을 강하게 경고한다.

## 상세

원문 기준 OpenClaw는 WhatsApp, Telegram, Slack, Discord 등 50개+ 채널에서 들어온 요청을 하나의 Gateway가 받아 chosen LLM으로 보내고, 다시 tool 실행으로 연결한다. memory는 vector DB보다 markdown file 중심이며, `SOUL.md`가 행동 규칙을, `MEMORY.md`가 장기 맥락을 담당한다. 이 조합은 [[에이전트 확장 3계층]]에서 말하는 tool·skill·외부 연결을 제품 수준에서 묶은 사례다.

중요한 점은 capability만이 아니다. 보안이 같이 따라온다. 원문은 악성 skill, 과도한 권한, localhost가 아닌 공개 바인딩, prompt injection 내성 부족을 핵심 리스크로 본다. 따라서 OpenClaw는 강력한 runtime이지만, "항상 켜져 있고 실제 권한을 가진 agent"를 어떻게 격리할지 함께 설계해야 한다는 교훈을 준다.

비교 raw를 보면 이 판단은 더 선명해진다. OpenClaw와 Hermes를 같은 서버에 올려 두고도 결국 하나를 지운 이유는 기능 수보다 24/7 운영의 안전성과 부담이 더 중요했기 때문이다. 재미있는 데모보다 오래 켜 둘 수 있는 runtime이 먼저라는 결론이다.

## 예시

- 아침 7시에 unread email, calendar conflict, GitHub PR, 날씨를 확인해 Telegram으로 요약을 보낸다.
- WhatsApp으로 보낸 요청이 내 Mac Mini의 shell command 실행이나 브라우저 작업으로 이어진다.
- `SOUL.md`에 "~/projects/ 밖 system file 수정 금지" 같은 행동 경계를 넣어 실행 범위를 제한한다.


## 이 노트를 읽어야 하는 상황

- terminal/CLI agent보다 더 넓게, 메시징 채널과 background automation까지 붙은 personal agent runtime을 찾을 때
- [[에이전트 확장 3계층]]을 실제 제품 수준 구현체로 보고 싶을 때
- self-hosted agent의 capability와 security trade-off를 함께 이해해야 할 때

## 비슷한 노트와의 차이

- [[AI 오픈소스 작업대]]가 생태계 지도라면, 이 노트는 OpenClaw 하나의 구조와 위험 표면에 집중한다.
- [[에이전트 확장 3계층]]이 개념 프레임이라면, 이 노트는 tool·skill·runtime이 한 제품에서 어떻게 결합되는지 보여주는 사례다.


## 채택 전에 볼 질문

- 이 runtime이 실제로 가져가는 권한 범위는 어디까지인가.
- 메시징 채널, shell, 브라우저, 파일 접근 중 무엇을 항상 켜 둘 것인가.
- `SOUL.md` 같은 행동 규칙만으로 막기 어려운 보안 경계는 무엇인가.
- 개인 assistant 실험인지, 팀/조직 운영용 runtime인지에 따라 review gate를 어떻게 둘 것인가.

이 질문에 답하지 못한 상태라면, OpenClaw는 "재미있는 데모"를 넘어 "과한 권한을 가진 자동화"가 될 수 있다.

## 충돌

- 2026-05-26 확인: 스타 수, 활성 사용자 수, 보안 advisories, 배포 비율은 변동성이 큰 시점 정보다. 실제 도입 전 공식 docs와 최신 보안 공지를 다시 확인해야 한다.

## 관련 노트

- [[AI 오픈소스 작업대]]
- [[에이전트 확장 3계층]]
- [[Agent Native Infrastructure]]
- [[AI 코딩 에이전트 검증 전략]]
- [[AI 기본값 구현체]]
- [[AI 기본값 수용과 오버라이드 전략]]
- [[AI 에이전트 런타임 역할 맵]]
- [[Hermes Agent 24-7 운영]]

