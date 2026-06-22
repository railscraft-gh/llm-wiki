---
aliases:
- Infisical SSH 인증
- Infisical Universal Auth
- Machine Identity 인증
core: false
created: 2026-05-08
sources:
- Infisical_SSH_헤드리스_인증_가이드
- API_Key_관리_및_Infisical_도입_가이드
- https://infisical.com/docs/documentation/platform/identities/machine-identities
- https://infisical.com/docs/documentation/platform/identities/universal-auth
- https://infisical.com/docs/cli/commands
- https://infisical.com/docs/cli/commands/service-token
- raw/opencode-masterclass-summary.md
- raw/Infisical_SSH_헤드리스_인증_가이드.md
- raw/Quartz-Deploy-Guide.md
status: needs-review
tags:
- security
- secret-management
- infrastructure
type: workflow
updated: '2026-06-22'
---

# Infisical 헤드리스 인증

## 한 줄 정의

Infisical 헤드리스 인증은 브라우저 OAuth가 어려운 SSH 서버, CI/CD, systemd 환경에서 개인 계정 대신 machine identity로 secret을 읽는 workflow다.

## 핵심 요지

- 운영 서버에서는 `infisical login`의 브라우저 흐름보다 Machine Identity와 Universal Auth를 우선 검토한다.
- Client Secret은 코드, `.infisical.json`, Git repo에 넣지 않고 환경 변수, systemd `EnvironmentFile`, CI secret store로 주입한다.
- Service Token은 빠른 임시 연결에는 편하지만, Infisical CLI 문서는 service-token command를 deprecated로 표시하므로 장기 운영 기본값으로 두지 않는다.
- 인증 방식은 RBAC, 감사 로그, secret rotation, 서버 파일 권한과 함께 설계해야 한다.

## 상세

Machine Identity는 workload나 application을 대표하는 Infisical identity다. 공식 문서는 Universal Auth, Kubernetes Auth, AWS Auth, Azure Auth, GCP Auth 등 여러 authentication method를 설명하며, Universal Auth는 Client ID와 Client Secret을 access token으로 교환하는 방식이다.

CLI에서는 `infisical login --method=universal-auth --client-id=<client-id> --client-secret=<client-secret>`처럼 login할 수 있고, `INFISICAL_UNIVERSAL_AUTH_CLIENT_ID`, `INFISICAL_UNIVERSAL_AUTH_CLIENT_SECRET` 환경 변수로 flag를 대체할 수 있다. raw 문서는 SSH 서버에서 이 값을 `/etc/infisical/auth.env` 같은 root 소유 파일에 저장하고 `chmod 600`으로 제한한 뒤 systemd `EnvironmentFile`로 주입하는 예시를 든다.

Service Token은 environment/path scope와 만료를 지정할 수 있지만, 2026-05-08 확인 기준 Infisical CLI의 `service-token` command 문서는 deprecated이며 machine identity로 전환하라고 안내한다. 따라서 staging 임시 작업에는 쓸 수 있어도, production server와 CI/CD의 기본 패턴은 Universal Auth로 두는 편이 낫다.

## 예시

1. Organization에서 `prod-api-server` Machine Identity를 만든다.
2. Project에 identity를 추가하고 `prod:/backend` read 권한만 부여한다.
3. 서버에 `/etc/infisical/auth.env`를 만들고 root 소유, `600` 권한으로 제한한다.
4. systemd service의 `EnvironmentFile`에서 값을 읽어 `infisical run --env=prod -- node dist/main.js`를 실행한다.
5. Client Secret 교체 주기와 폐기 절차를 `[[API Key 관리 원칙]]`의 사고 대응 절차와 연결한다.

## 충돌

- 2026-05-08 확인: raw 문서는 Service Token을 "레거시지만 여전히 유효"라고 표현하지만, Infisical CLI의 `service-token` command 문서는 deprecated 및 향후 제거 예정으로 표시한다. 현재 노트는 운영 기본값을 Universal Auth로 둔다.

## 관련 노트

- [[Infisical 도입 전략]]
- [[API Key 관리 원칙]]
- [[클라이언트 Secret 노출 방지]]
- [[Agent Native Infrastructure]]

