---
type: workflow
status: draft
core: false
tags:
  - llm
  - agent
  - claude-code
  - safety
aliases:
  - AI 에이전트 권한 설계
  - Permission Design
sources:
  - raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
  - raw/보리스_클로드코드_실무_사용법.md
  - raw/Claude-Code-실무활용법-보리스-관점-정리.md
  - raw/API_Key_관리_및_Infisical_도입_가이드.md
  - raw/pi-coding-agent-overview.md
  - https://pi.dev/docs/latest/usage
created: 2026-05-06
updated: 2026-05-08
---

# Claude Code 권한 설계

## 한 줄 정의

Claude Code 권한 설계는 에이전트가 실행해도 되는 명령, 물어봐야 하는 명령, 금지해야 하는 명령을 나눠 자동화의 피해 범위를 제한하는 방식이다.

## 핵심 요지

- 위험한 자동 실행 모드는 편하지만 실수 하나가 프로젝트 전체 피해로 이어질 수 있다.
- 권한은 "허용", "확인 요청", "금지"로 나누는 편이 실무적이다.
- 권한 설계는 [[Claude.md 운영 원칙]]과 함께 저장해야 세션이 바뀌어도 같은 규칙을 유지할 수 있다.

## 상세

보리스 자료는 Claude Code의 위험한 권한 우회 모드를 조심하라고 설명한다. 테스트 실행처럼 되돌리기 쉽고 반복적인 명령은 허용하고, 패키지 설치나 커밋처럼 상태를 바꾸는 명령은 사용자 확인을 요구하며, 삭제나 프로덕션 DB 작업처럼 피해가 큰 명령은 금지하는 식이다.

이 원칙은 에이전트를 덜 쓰자는 뜻이 아니다. 오히려 [[AI 코딩 에이전트 검증 전략]]을 안정적으로 돌리기 위해 필요한 가드레일이다. 에이전트가 똑똑할수록 더 넓은 범위를 만질 수 있으므로, 허용 범위도 명시적으로 좁혀야 한다.

비밀값은 별도 권한 범위로 다룬다. [[API Key 관리 원칙]]에 따르면 Key는 코드, 로그, 클라이언트 번들에 남기지 않아야 하므로, 에이전트에게도 secret 조회, 출력, 커밋, production Key 사용을 금지하거나 확인 요청으로 묶어야 한다. 출처: `raw/API_Key_관리_및_Infisical_도입_가이드.md`

[[Pi Coding Agent]]는 built-in permission popup을 제공하지 않는 대신 도구 허용 목록과 실행 환경으로 권한을 나누는 방향을 제시한다. 예를 들어 `--tools read,grep,find,ls`는 읽기 전용 리뷰에 적합하고, `--no-tools`는 도구 호출 자체를 막는다. 쓰기나 shell 권한이 필요한 작업은 container, extension, project rule로 별도 가드레일을 둔다. 출처: `raw/pi-coding-agent-overview.md`, https://pi.dev/docs/latest/usage

## 예시

| 구분 | 예시 |
| --- | --- |
| 허용 | 테스트 실행, 린트 실행, 타입 체크 |
| 확인 요청 | 패키지 설치, 커밋, 마이그레이션 생성 |
| 금지 | 프로덕션 DB 변경, 위험한 삭제 명령, 비밀값 출력 |
| 읽기 전용 | `read`, `grep`, `find`, `ls` 같은 조사 도구만 허용 |

## CC101 보강: 권한 모드 3가지

Claude Code는 `Shift+Tab`으로 전환하는 3가지 권한 모드를 제공한다. (출처: CC101)

| 모드 | 동작 방식 | 사용 시점 |
| --- | --- | --- |
| **Default (기본 모드)** | 파일 수정과 셸 명령어 실행 전에 확인 요청 | 처음 사용하거나 중요한 작업을 할 때 |
| **Auto-Accept (자동 수락)** | 파일 수정은 자동으로 허용, 셸 명령어는 여전히 확인 요청 | 빠르게 코딩 작업을 진행할 때 |
| **Plan Mode (계획 모드)** | 파일을 읽고 분석만 하고, 아무것도 수정하지 않음 | 먼저 계획을 검토하고 싶을 때 |

### 체크포인트로 실수 복구

Claude Code는 파일을 수정하기 전에 **자동으로 스냅샷**을 저장한다. 실수로 잘못 수정됐다면 `Esc` 키를 두 번 연속으로 눌러서 이전 상태로 되돌리거나, `/rewind` 명령으로 원하는 시점까지 되돌릴 수 있다. (출처: CC101)

### `--dangerously-skip-permissions` 경고

이 옵션은 모든 권한 확인을 건neen 뛴다. 격리된 테스트 환경(컨테이너 등)이 아니면 사용하지 마세요. 실수로 시스템 파일을 수정하거나 삭제할 위험이 있다. (출처: CC101)

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Claude.md 운영 원칙]]
- [[AI 코딩 에이전트 검증 전략]]
- [[LLM을 동물 지능처럼 다루지 않기]]
- [[API Key 관리 원칙]]
- [[클라이언트 Secret 노출 방지]]
- [[Pi Coding Agent]]

