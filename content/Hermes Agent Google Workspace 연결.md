---
aliases:
- Hermes Google 연결
- Google Workspace 연결 절차
- Hermes-Agent-Google-Workspace-연결
core: false
created: 2026-05-28
sources:
- Hermes Agent에 구글 연결하는 초보자 매뉴얼
- raw/Hermes Agent에 구글 연결하는 초보자 매뉴얼.md
- raw/메시징 서버의 스트레스 테스트 노하우와 AI가 덜어 준 부분.md
status: evergreen
tags:
- llm
- agent
- google-workspace
- oauth
- integration
type: workflow
updated: 2026-07-10
---
# [[Hermes Agent]] Google Workspace 연결

## 한 줄 정의
[[Hermes Agent]] Google Workspace 연결은 OAuth client를 등록하고 토큰을 발급받아 Gmail, Calendar, Drive, Sheets, Docs를 에이전트가 읽고 쓰게 만드는 절차다.

## 핵심 요지
- 이 연결은 단순 로그인보다 **scope 기반 권한 부여**에 가깝다.
- `AUTHENTICATED (partial)`은 연결 실패가 아니라 **일부 scope 누락** 상태일 수 있다.
- Calendar 조회는 primary만 보지 말고, 선택한 모든 캘린더를 함께 봐야 한다.
- 이 연결은 단순 로그인보다 scope 기반 권한 부여에 가깝다.
- AUTHENTICATED (partial)은 연결 실패가 아니라 일부 scope 누락 상태일 수 있다.

## 상세

이 매뉴얼은 Hermes가 Google 계정에 직접 로그인하는 대신 OAuth 토큰으로 Google API에 접근하는 흐름을 정리한다. 처음 설정에서는 Google Cloud에서 Desktop OAuth client를 만들고, Hermes의 setup script로 client secret을 등록한 뒤, auth URL을 열어 승인하고, 돌려받은 code나 redirect URL로 토큰을 교환한다.

핵심 운영 포인트는 두 가지다. 첫째, `setup.py --check`로 현재 인증 상태를 먼저 확인해야 한다. 둘째, `AUTHENTICATED (partial)`이 나오면 끝난 게 아니라 scope가 빠졌을 가능성을 의심해야 한다. 특히 Calendar는 primary 캘린더만 보면 안 되고, 회사 캘린더·개인 캘린더·휴일 캘린더까지 같이 확인해야 하루 일정을 제대로 볼 수 있다.

이 절차는 에이전트가 사람이 클릭하는 UI가 아니라 **명령과 파일**로 외부 서비스를 연결하는 전형적인 agent-native workflow다. 그래서 문서 자체도 "어디를 눌러라"보다 "어떤 파일을 준비하고 어떤 명령을 실행해야 하는가"로 써 두는 편이 에이전트 친화적이다.

### 3. 필수 설정 파일 및 런타임 경로
연결을 활성화하기 위해 Hermes는 다음 로컬 경로에 인증 설정과 토큰을 저장하여 관리한다.
- **토큰 저장소**: `~/.hermes/google_token.json`
- **클라이언트 비밀 파일**: `~/.hermes/google_client_secret.json`
- **설정 및 런타임 스크립트**:
  - 상태 확인: `python ~/.hermes/skills/productivity/google-workspace/scripts/setup.py --check`
  - 클라이언트 등록: `python ~/.hermes/skills/productivity/google-workspace/scripts/setup.py --client-secret /path/to/client_secret.json`
  - 인증 링크 생성: `python ~/.hermes/skills/productivity/google-workspace/scripts/setup.py --auth-url --services calendar,drive,sheets,docs --format json`
  - 토큰 교환: `python ~/.hermes/skills/productivity/google-workspace/scripts/setup.py --auth-code "URL_OR_CODE" --format json`
  - 캘린더 조회: `python ~/.hermes/skills/productivity/google-workspace/scripts/google_api.py calendar list`

### 4. 자주 발생하는 에러 및 대처법
- **`AUTHENTICATED (partial)`**: scope 권한이 부족한 경우이다. 필요한 서비스 범위(Drive/Docs/Sheets 쓰기 등)를 지정하여 재인증을 수행한다.
- **`HttpError 403: Access Not Configured`**: Google Cloud Console에서 해당 API(Gmail, Calendar, Drive 등)가 활성화되지 않았을 때 발생하므로, 콘솔에서 API를 활성화한다.
- **`Error 403: access_denied`**: Google Cloud OAuth 동의 화면의 테스트 사용자(Test users)에 본인 계정이 누락된 경우이므로 계정을 추가한다.
- **`ModuleNotFoundError`**: Python 가상환경 의존성이 잡히지 않은 경우이므로 Hermes 가상환경 런타임 내에서 실행해야 한다.

## 예시

- `setup.py --check`로 인증 상태를 확인한다.
- `setup.py --client-secret /path/to/client_secret.json`으로 Google OAuth client를 등록한다.
- `setup.py --auth-url --services calendar,drive,sheets,docs --format json`으로 승인 링크를 만든다.
- `setup.py --auth-code "..." --format json`으로 토큰을 교환한다.
- `google_api.py calendar list --start ... --end ...`로 일정 조회를 실행한다.

- `setup.py`를 활용한 캘린더 조회 예시:
  `python ~/.hermes/skills/productivity/google-workspace/scripts/google_api.py calendar list --start 2026-06-06T00:00:00+09:00 --end 2026-06-06T23:59:59+09:00`

## 충돌
- 2026-05-28 확인: 이 note는 [[Hermes Agent]]의 Google Workspace skill 경로와 setup script에 강하게 의존한다. 경로나 지원 scope가 바뀌면 절차를 다시 확인해야 한다.

## 관련 노트
- [[Agent Native Infrastructure]]
- [[Claude Code 오케스트레이션]]
- [[API Key 관리 원칙]]
- [[AI 네이티브 작업 시스템]]
- [[Context Engineering]]

## 출처
- [[Hermes Agent]]에 구글 연결하는 초보자 매뉴얼
- [메시징 서버의 스트레스 테스트 노하우와 AI가 덜어 준 부분](file:///Users/railscraft/[[Obsidian]]/raw/%EB%A9%94%EC%8B%9C%EC%A7%95%20%EC%84%9C%EB%B2%84%EC%9D%98%20%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%8A%A4%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EB%85%B8%ED%95%98%EC%9A%B0%EC%99%80%20AI%EA%B0%80%20%EB%8D%9C%EC%96%B4%20%EC%A4%80%20%EB%B6%80%EB%B6%84.md)

