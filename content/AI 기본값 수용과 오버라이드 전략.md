---
type: concept
status: evergreen
core: false
tags:
  - ai
  - tooling
  - workflow
  - design-system
  - agent
aliases:
  - AI 기본값 채택 전략
  - default adoption strategy in AI era
sources:
  - raw/The most important Design System in 2026 that designers missed was built by a developer..md
  - raw/The Complete (Honest) Guide to OpenClaw.md
  - raw/2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가.md
created: 2026-05-26
updated: 2026-05-26
---

# AI 기본값 수용과 오버라이드 전략

## 한 줄 정의

AI 기본값 수용과 오버라이드 전략은 AI가 먼저 밀어 넣는 foundation을 무조건 따르지 않고, 받아들일 부분과 팀이 직접 다시 설계할 부분을 나누는 실무 프레임이다.

## 핵심 요지

- AI 시대에는 blank slate보다 이미 널리 퍼진 기본 구현체 위에서 시작하는 일이 많다.
- 문제는 채택 자체보다, 어디를 기본값으로 받고 어디를 override할지 명시하지 않는 데서 생긴다.
- `shadcn-ui`는 UI foundation 쪽 사례이고, `OpenClaw`는 personal agent runtime 쪽 사례다.
- 두 사례 모두 속도를 주지만, 그대로 쓰면 각각 시각 언어 drift와 권한·보안 리스크를 함께 끌고 들어온다.

## 상세

[[AI 기본값 구현체]]가 "무엇이 먼저 표준처럼 도착하는가"를 설명한다면, 이 노트는 그 다음 질문인 "무엇을 그대로 받고 무엇을 다시 설계할까"를 다룬다. [[shadcn-ui]] 같은 code-first foundation은 빠른 시작점이지만, brand tone, density, interaction rule은 팀이 다시 고정해야 한다. 반대로 [[OpenClaw]] 같은 runtime은 강한 자동화를 주지만, 권한 범위, 공개 바인딩, review gate는 기본 설정에 맡기면 안 된다.

즉 수용 기준은 비슷하다. 반복 생성에서 이득이 큰 부분은 기본값을 활용하고, 제품 차별점·보안 경계·법무 책임이 걸린 부분은 override한다. 디자인 쪽에서는 [[디자인 시스템 기본값]]과 [[DESIGN.md 운영 원칙]]이 override 지점을 적어 두는 장치가 되고, runtime 쪽에서는 [[AI 코딩 에이전트 검증 전략]]과 [[Agent Native Infrastructure]]가 그 역할을 한다.

## 예시

- admin UI 초안은 shadcn-style foundation으로 시작하되, spacing, copy tone, table density는 팀 규칙으로 override한다.
- 개인 agent runtime은 OpenClaw 구조를 참고하되, shell 권한, 네트워크 바인딩, 승인 경계는 별도로 잠근다.
- 팀은 새 도구를 평가할 때 "속도를 주는 기본값인가"와 "직접 통제해야 하는 경계인가"를 분리해 본다.

## 충돌

- 2026-05-26 확인: 어떤 구현체가 기본값인지 자체는 시점에 따라 바뀔 수 있다. 하지만 수용/override를 분리하는 판단 구조는 개별 제품 교체와 무관하게 유지된다.

## 관련 노트

- [[AI 기본값 구현체]]
- [[shadcn-ui]]
- [[OpenClaw]]
- [[디자인 시스템 기본값]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Native Infrastructure]]

