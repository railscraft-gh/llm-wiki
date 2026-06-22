---
aliases:
- Infisical
- 인피지컬
- Infisical Secret Manager
core: false
created: 2026-05-07
sources:
- API_Key_관리_및_Infisical_도입_가이드
- Infisical_SSH_헤드리스_인증_가이드
- https://infisical.com/docs/documentation/platform/secrets-mgmt/overview
- https://infisical.com/docs/documentation/platform/identities/machine-identities
- https://infisical.com/docs/documentation/platform/identities/universal-auth
- https://github.com/Infisical/infisical
- https://infisical.com/pricing
- raw/opencode-masterclass-summary.md
- raw/Infisical_SSH_헤드리스_인증_가이드.md
- raw/AI로_만든_제품이_안_팔리는_이유.md
- raw/Quartz-Deploy-Guide.md
- raw/API_Key_관리_및_Infisical_도입_가이드.md
status: needs-review
tags:
- security
- secret-management
- tool
type: tool
updated: '2026-06-22'
---

# Infisical 도입 전략

## 한 줄 정의

Infisical 도입 전략은 `.env`와 분산된 CI Secret을 프로젝트, 환경, 경로 단위의 중앙 Secret 관리 체계로 옮기는 workflow다.

## 핵심 요지

- Infisical은 API Key, DB credential, 환경 변수, 인증서 같은 secret을 저장, 전달, 동기화, 로테이션하는 도구다.
- 로컬 개발은 `infisical run --env=dev -- ...`, CI/CD는 machine identity, Kubernetes는 Operator로 연결하는 흐름이 자연스럽다.
- 운영 도입 전에는 RBAC, audit logs, secret rotation, 유출 탐지, 백업과 장애 대응을 같이 설계해야 한다.
- 가격과 라이선스 범위는 변동성이 있어 2026-05-07 기준 공식 페이지와 GitHub를 확인해야 한다.

## 상세

Infisical 공식 문서는 Secret Stores, 접근 제어, CLI/SDK/API/Kubernetes Operator를 통한 secret delivery, secret rotation과 dynamic secrets, GitHub/Vercel/AWS 같은 외부 서비스 sync를 핵심 기능으로 설명한다.

Universal Auth는 machine identity가 Client ID와 Client Secret으로 로그인해 짧은 수명의 access token을 받는 방식이다. workload가 개인 계정으로 secret을 읽지 않게 하고, token TTL과 trusted IP를 관리할 수 있다는 점에서 CI/CD와 서버 런타임에 적합하다. SSH 서버나 systemd처럼 브라우저 OAuth를 쓸 수 없는 환경은 [[Infisical 헤드리스 인증]]으로 분리해 관리한다.

raw 문서의 실무 로드맵은 1주차 POC, 2주차 로컬 개발 전환, 3주차 staging/production 연동, 4주차 RBAC와 audit/rotation 강화로 잡는다. 이 순서는 [[API Key 관리 원칙]]을 팀 workflow로 옮기는 실행 계획으로 쓸 수 있다.

## 예시

1. 기존 `.env` 항목을 `dev`, `staging`, `prod` 환경으로 나눠 Infisical에 등록한다.
2. 개발자는 `infisical run --env=dev -- npm run dev`로 앱을 실행한다.
3. GitHub Actions는 개인 계정 대신 machine identity로 prod secret에 접근한다.
4. Kubernetes 사용 팀은 Infisical Operator가 생성한 `app-secrets`를 Deployment에서 참조한다.

## 충돌

- 2026-05-07 확인: raw 문서는 Infisical을 "MIT, 완전 오픈소스"라고 설명하지만, 공식 GitHub README는 repository가 MIT expat license를 쓰되 `ee` directory의 premium enterprise 기능은 Infisical license가 필요하다고 설명한다. 현재 노트는 공식 GitHub 기준으로 기록한다.
- 2026-05-07 확인: raw 문서는 Cloud Pro를 팀당 `$5/인/월`로 적지만, 공식 pricing page는 Secrets Manager Pro를 `1 identity` 기준 `$18/mo`로 표시한다. 가격 정보는 변동 정보라 배포 판단 전에 공식 pricing page를 다시 확인해야 한다.

## 관련 노트

- [[API Key 관리 원칙]]
- [[Infisical 헤드리스 인증]]
- [[클라이언트 Secret 노출 방지]]
- [[Agent Native Infrastructure]]
- [[Claude Code 오케스트레이션]]

