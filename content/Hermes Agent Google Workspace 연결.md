---
type: workflow
status: evergreen
core: false
tags:
  - llm
  - agent
  - google-workspace
  - oauth
  - integration
aliases:
  - Hermes Google 연결
  - Google Workspace 연결 절차
sources:
  - Hermes Agent에 구글 연결하는 초보자 매뉴얼
created: 2026-05-28
updated: 2026-05-28
---

# Hermes Agent Google Workspace 연결

## 한 줄 정의

Hermes Agent Google Workspace 연결은 OAuth client를 등록하고 토큰을 발급받아 Gmail, Calendar, Drive, Sheets, Docs를 에이전트가 읽고 쓰게 만드는 절차다.

## 핵심 요지

- 이 연결은 단순 로그인보다 **scope 기반 권한 부여**에 가깝다.
- `AUTHENTICATED (partial)`은 연결 실패가 아니라 **일부 scope 누락** 상태일 수 있다.
- Calendar 조회는 primary만 보지 말고, 선택한 모든 캘린더를 함께 봐야 한다.

## 상세

이 매뉴얼은 Hermes가 Google 계정에 직접 로그인하는 대신 OAuth 토큰으로 Google API에 접근하는 흐름을 정리한다. 처음 설정에서는 Google Cloud에서 Desktop OAuth client를 만들고, Hermes의 setup script로 client secret을 등록한 뒤, auth URL을 열어 승인하고, 돌려받은 code나 redirect URL로 토큰을 교환한다.

핵심 운영 포인트는 두 가지다. 첫째, `setup.py --check`로 현재 인증 상태를 먼저 확인해야 한다. 둘째, `AUTHENTICATED (partial)`이 나오면 끝난 게 아니라 scope가 빠졌을 가능성을 의심해야 한다. 특히 Calendar는 primary 캘린더만 보면 안 되고, 회사 캘린더·개인 캘린더·휴일 캘린더까지 같이 확인해야 하루 일정을 제대로 볼 수 있다.

이 절차는 에이전트가 사람이 클릭하는 UI가 아니라 **명령과 파일**로 외부 서비스를 연결하는 전형적인 agent-native workflow다. 그래서 문서 자체도 "어디를 눌러라"보다 "어떤 파일을 준비하고 어떤 명령을 실행해야 하는가"로 써 두는 편이 에이전트 친화적이다.

## 예시

- `setup.py --check`로 인증 상태를 확인한다.
- `setup.py --client-secret /path/to/client_secret.json`으로 Google OAuth client를 등록한다.
- `setup.py --auth-url --services calendar,drive,sheets,docs --format json`으로 승인 링크를 만든다.
- `setup.py --auth-code "..." --format json`으로 토큰을 교환한다.
- `google_api.py calendar list --start ... --end ...`로 일정 조회를 실행한다.

## 충돌

- 2026-05-28 확인: 이 note는 Hermes Agent의 Google Workspace skill 경로와 setup script에 강하게 의존한다. 경로나 지원 scope가 바뀌면 절차를 다시 확인해야 한다.

## 관련 노트

- [[Agent Native Infrastructure]]
- [[Claude Code 오케스트레이션]]
- [[API Key 관리 원칙]]
- [[AI 네이티브 작업 시스템]]
- [[Context Engineering]]

