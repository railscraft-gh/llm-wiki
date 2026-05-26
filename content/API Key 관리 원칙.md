---
type: workflow
status: evergreen
core: true
tags:
 - security
 - api-key
 - secret-management
aliases:
 - API Key 보안
 - Secret 관리 원칙
sources:
 - raw/API_Key_관리_및_Infisical_도입_가이드.md
 - https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
 - https://www.12factor.net/config
created: 2026-05-07
updated: 2026-05-07
---

# API Key 관리 원칙

## 한 줄 정의

API Key 관리 원칙은 비밀값을 코드에서 분리하고, 최소 권한, 중앙 관리, 로테이션, 감사, 사고 대응까지 생명주기로 다루는 보안 workflow다.

## 핵심 요지

- API Key는 코드, Git history, 클라이언트 번들, 로그에 남기지 않는다.
- 로컬 `.env`는 개발 편의 장치일 뿐이며, 프로덕션에서는 Secret Manager, Vault, [[Infisical 도입 전략]] 같은 중앙 관리 도구를 사용한다.
- Key는 서비스, 환경, 권한 범위별로 나누고, 생성, 로테이션, 폐기, 만료, 감사 기록을 남긴다.
- 유출이 의심되면 먼저 revoke하고, 사용 로그와 영향 범위를 확인한 뒤 새 Key를 배포한다.
- 이 노트는 특정 비밀관리 도구보다 secret lifecycle 전체를 묶는 상위 보안 체크리스트로 읽는 편이 맞다.

## 상세

raw 문서는 API Key를 코드에 하드코딩하지 말고 환경 변수나 Secret Manager로 분리하라고 정리한다. 12-Factor App도 배포마다 달라지는 credentials를 코드 상수로 두는 것은 config와 code 분리 원칙에 어긋난다고 본다.

OWASP Secrets Management Cheat Sheet는 secret을 중앙화하고 표준화하되, 세밀한 접근 제어와 최소 권한을 적용해야 한다고 설명한다. 또한 secret은 생성, 로테이션, 폐기, 만료의 생명주기를 가지며, 사고 대응에는 revoke, rotation, 삭제, logging 절차가 필요하다.

## 예시

- 로컬 개발: `.env`는 `.gitignore`에 넣고, `.env.example`에는 이름과 형식만 둔다.
- CI/CD: GitHub Actions의 `secrets.OPENAI_API_KEY`처럼 CI의 Secret 저장소에서 런타임에 주입한다.
- 프로덕션: `OPENAI_API_KEY`, `STRIPE_SECRET_KEY`, `SENDGRID_API_KEY`를 한 Key로 묶지 않고 서비스별, 환경별로 분리한다.
- 사고 대응: 유출된 Key를 revoke하고, 호출 로그를 확인한 뒤, 새 Key를 배포하고 pre-commit secret scanning을 추가한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Infisical 도입 전략]]
- [[클라이언트 Secret 노출 방지]]
- [[Claude Code 권한 설계]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Lethal Trifecta]]
- [[Agent Native Infrastructure]]

