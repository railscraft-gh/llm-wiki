---aliases:
  - Infisical SSH 인증
  - Infisical Universal Auth
  - Machine Identity 인증
  - Infisical-헤드리스-인증
core: false
created: 2026-05-08
sources:
  - Infisical_SSH_헤드리스_인증_가이드
  - API_Key_관리_및_Infisical_도입_가이드
  - 'https://infisical.com/docs/documentation/platform/identities/machine-identities'
  - 'https://infisical.com/docs/documentation/platform/identities/universal-auth'
  - 'https://infisical.com/docs/cli/commands'
  - 'https://infisical.com/docs/cli/commands/service-token'
  - raw/opencode-masterclass-summary.md
  - raw/Infisical_SSH_헤드리스_인증_가이드.md
  - raw/Quartz-Deploy-Guide.md
status: evergreen
tags:
  - security
  - secret-management
  - infrastructure
type: workflow
updated: 2026-07-10
---
# Infisical 헤드리스 인증

## 한 줄 정의
Infisical 헤드리스 인증은 브라우저 OAuth가 어려운 SSH 서버, CI/CD, systemd 환경에서 개인 계정 대신 machine identity로 secret을 읽는 workflow다.

## 핵심 요지
- 운영 서버에서는 `infisical login`의 브라우저 흐름보다 Machine Identity와 Universal Auth를 우선 검토한다.
- Client Secret은 코드, `.infisical.json`, Git repo에 넣지 않고 환경 변수, systemd `EnvironmentFile`, CI secret store로 주입한다.
- Service Token은 빠른 임시 연결에는 편하지만, Infisical CLI 문서는 service-token command를 deprecated로 표시하므로 장기 운영 기본값으로 두지 않는다.
- 인증 방식은 RBAC, 감사 로그, secret rotation, 서버 파일 권한과 함께 설계해야 한다.
- SSH 서버 환경에서는 `infisical login`을 대신하여 Machine Identity + Universal Auth 방식으로 환경 변수를 주입하는 것이 보안상 가장 안전하다. (출처: raw/Infisical_SSH_헤드리스_인증_가이드.md)
- 서버의 인증 파일은 root 소유로 두고 chmod 600 권한 제한을 강제하여 외부 접근을 차단한다. (출처: raw/Infisical_SSH_헤드리스_인증_가이드.md)

## 상세

Machine Identity는 workload나 application을 대표하는 Infisical identity다. 공식 문서는 Universal Auth, Kubernetes Auth, AWS Auth, Azure Auth, GCP Auth 등 여러 authentication method를 설명하며, Universal Auth는 Client ID와 Client Secret을 access token으로 교환하는 방식이다.

CLI에서는 `infisical login --method=universal-auth --client-id=<client-id> --client-secret=<client-secret>`처럼 login할 수 있고, `INFISICAL_UNIVERSAL_AUTH_CLIENT_ID`, `INFISICAL_UNIVERSAL_AUTH_CLIENT_SECRET` 환경 변수로 flag를 대체할 수 있다. raw 문서는 SSH 서버에서 이 값을 `/etc/infisical/auth.env` 같은 root 소유 파일에 저장하고 `chmod 600`으로 제한한 뒤 systemd `EnvironmentFile`로 주입하는 예시를 든다.

Service Token은 environment/path scope와 만료를 지정할 수 있지만, 2026-05-08 확인 기준 Infisical CLI의 `service-token` command 문서는 deprecated이며 machine identity로 전환하라고 안내한다. 따라서 staging 임시 작업에는 쓸 수 있어도, production server와 CI/CD의 기본 패턴은 Universal Auth로 두는 편이 낫다.

### SSH 서버 자격증명 파일 권한 제한
- **보안 격리**: `/etc/infisical/auth.env` 파일을 생성하고 root 권한 소유자와 소유 그룹으로만 제한(chmod 600)하여 다른 유저가 인증 토큰 및 Client Secret을 탈취하지 못하게 차단함.

### SSH 서버 자격증명 파일 권한 제한
- **보안 격리**: `/etc/infisical/auth.env` 파일을 생성하고 root 권한 소유자와 소유 그룹으로만 제한(chmod 600)하여 다른 유저가 인증 토큰 및 Client Secret을 탈취하지 못하게 차단함.

### SSH 서버 자격증명 파일 권한 제한
- **보안 격리**: `/etc/infisical/auth.env` 파일을 생성하고 root 권한 소유자와 소유 그룹으로만 제한(chmod 600)하여 다른 유저가 인증 토큰 및 Client Secret을 탈취하지 못하게 차단함.

## 예시

1. Organization에서 `prod-api-server` Machine Identity를 만든다.
2. Project에 identity를 추가하고 `prod:/backend` read 권한만 부여한다.
3. 서버에 `/etc/infisical/auth.env`를 만들고 root 소유, `600` 권한으로 제한한다.
4. systemd service의 `EnvironmentFile`에서 값을 읽어 `infisical run --env=prod -- node dist/main.js`를 실행한다.
5. Client Secret 교체 주기와 폐기 절차를 `[[API Key 관리 원칙]]`의 사고 대응 절차와 연결한다.

### 실무 설정 스크립트 및 systemd 구성
- **인증 파일 및 권한 설정**:
  ```bash
  sudo mkdir -p /etc/infisical
  sudo tee /etc/infisical/auth.env > /dev/null <<EOF
  INFISICAL_UNIVERSAL_AUTH_CLIENT_ID=your-client-id
  INFISICAL_UNIVERSAL_AUTH_CLIENT_SECRET=your-client-secret
  EOF
  
  sudo chmod 600 /etc/infisical/auth.env
  sudo chown root:root /etc/infisical/auth.env
  ```
- **systemd 서비스 연동 (`/etc/systemd/system/my-app.service`)**:
  ```ini
  [Unit]
  Description=My App with Infisical
  After=network.target
  
  [Service]
  Type=simple
  User=app
  WorkingDirectory=/var/www/my-app
  EnvironmentFile=/etc/infisical/auth.env
  ExecStart=/usr/local/bin/infisical run --env=prod -- node dist/main.js
  Restart=always
  
  [Install]
  WantedBy=multi-user.target
  ```

### 실무 설정 스크립트 및 systemd 구성
- **인증 파일 및 권한 설정**:
  ```bash
  sudo mkdir -p /etc/infisical
  sudo tee /etc/infisical/auth.env > /dev/null <<EOF
  INFISICAL_UNIVERSAL_AUTH_CLIENT_ID=your-client-id
  INFISICAL_UNIVERSAL_AUTH_CLIENT_SECRET=your-client-secret
  EOF
  
  sudo chmod 600 /etc/infisical/auth.env
  sudo chown root:root /etc/infisical/auth.env
  ```
- **systemd 서비스 연동 (`/etc/systemd/system/my-app.service`)**:
  ```ini
  [Unit]
  Description=My App with Infisical
  After=network.target
  
  [Service]
  Type=simple
  User=app
  WorkingDirectory=/var/www/my-app
  EnvironmentFile=/etc/infisical/auth.env
  ExecStart=/usr/local/bin/infisical run --env=prod -- node dist/main.js
  Restart=always
  
  [Install]
  WantedBy=multi-user.target
  ```

### 실무 설정 스크립트 및 systemd 구성
- **인증 파일 및 권한 설정**:
  ```bash
  sudo mkdir -p /etc/infisical
  sudo tee /etc/infisical/auth.env > /dev/null <<EOF
  INFISICAL_UNIVERSAL_AUTH_CLIENT_ID=your-client-id
  INFISICAL_UNIVERSAL_AUTH_CLIENT_SECRET=your-client-secret
  EOF
  
  sudo chmod 600 /etc/infisical/auth.env
  sudo chown root:root /etc/infisical/auth.env
  ```
- **systemd 서비스 연동 (`/etc/systemd/system/my-app.service`)**:
  ```ini
  [Unit]
  Description=My App with Infisical
  After=network.target
  
  [Service]
  Type=simple
  User=app
  WorkingDirectory=/var/www/my-app
  EnvironmentFile=/etc/infisical/auth.env
  ExecStart=/usr/local/bin/infisical run --env=prod -- node dist/main.js
  Restart=always
  
  [Install]
  WantedBy=multi-user.target
  ```

## 충돌
- 2026-05-08 확인: raw 문서는 Service Token을 "레거시지만 여전히 유효"라고 표현하지만, Infisical CLI의 `service-token` command 문서는 deprecated 및 향후 제거 예정으로 표시한다. 현재 노트는 운영 기본값을 Universal Auth로 둔다.

## 관련 노트
- [[Infisical 도입 전략]]
- [[API Key 관리 원칙]]
- [[클라이언트 Secret 노출 방지]]
- [[Agent Native Infrastructure]]

