---
type: workflow
status: draft
core: false
tags:
  - security
  - frontend
  - api-key
aliases:
  - 브라우저 Secret 노출 방지
  - Client-side API Key
sources:
  - raw/API_Key_관리_및_Infisical_도입_가이드.md
created: 2026-05-07
updated: 2026-05-07
---

# 클라이언트 Secret 노출 방지

## 한 줄 정의

클라이언트 Secret 노출 방지는 브라우저나 모바일 앱에 서버용 API Key를 넣지 않고, 서버 경계에서 인증, 권한, 쿼터를 통제하는 workflow다.

## 핵심 요지

- 브라우저 번들, 모바일 앱, 프론트엔드 환경 변수에 들어간 서버 Key는 공개된 것으로 간주한다.
- OpenAI, Stripe secret key, SendGrid token처럼 비용과 권한이 큰 Key는 백엔드나 edge function에서만 사용한다.
- 클라이언트가 꼭 들고 있어야 하는 공개 Key는 domain, referrer, IP, quota, alert로 피해 범위를 줄인다.
- 이 원칙은 [[API Key 관리 원칙]]의 최소 권한을 프론트엔드 경계에 적용한 것이다.

## 상세

raw 문서는 서버 사이드 API Key를 React, Vue 같은 클라이언트 코드에 직접 넣지 말라고 경고한다. 해결책은 클라이언트가 자체 Key로 외부 API를 호출하는 구조가 아니라, `client -> backend proxy -> external API` 구조로 바꾸는 것이다. 이때 클라이언트는 사용자별 JWT나 세션만 들고 있고, 서버는 rate limiting, 권한 확인, 사용량 기록을 붙인다. 출처: `raw/API_Key_관리_및_Infisical_도입_가이드.md`

지도 API처럼 노출이 불가피한 Key는 secret이 아니라 제한된 공개 credential로 취급한다. 도메인 제한, 사용량 알림, 쿼타, 정기 교체를 붙여야 하며, 비용이 큰 권한을 같은 Key에 섞지 않는다.

## 예시

- 나쁜 패턴: 브라우저에서 `new OpenAI({ apiKey: "sk-..." })`를 초기화한다.
- 좋은 패턴: 프론트엔드는 `/api/generate`를 호출하고, 서버가 사용자 권한과 사용량을 확인한 뒤 OpenAI API를 호출한다.
- 공개 Key 예외: 지도 SDK Key는 referrer 제한과 quota를 걸고, 결제나 AI 호출 권한과 분리한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[API Key 관리 원칙]]
- [[Infisical 도입 전략]]
- [[Claude Code 권한 설계]]
- [[Agent Native Infrastructure]]

