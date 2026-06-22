---
aliases:
- Claude Code 명령어 운영
- Claude Code power user commands
core: false
created: 2026-05-24
sources:
- Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어
- raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어.md
status: evergreen
tags:
- llm
- claude-code
- workflow
- commands
type: workflow
updated: '2026-06-22'
---

# Claude Code 세션 운영 명령어

## 한 줄 정의

Claude Code 세션 운영 명령어는 세션 설정, context 유지, 셸 실행, 모델 전환, 장애 복구를 slash command로 표준화해 Claude Code를 자동완성 도구가 아니라 작업 파트너로 쓰게 만드는 workflow다.

## 핵심 요지

- 명령어는 단축키가 아니라 세션 상태를 관리하는 운영 인터페이스다.
- `/init`, `/memory`, `/pr_comments`는 시작 컨텍스트를 고정하고, `/compact`, `/cost`, `/clear`는 세션 수명을 관리한다.
- `!`, `/review`, `/model`, `/fast`는 실행 속도와 검증 강도를 조절하는 레버다.
- `/doctor`, `/terminal-setup`, `/help`는 도구가 꼬였을 때 재설치보다 먼저 보는 복구 계층이다.

## 상세

많은 사용자가 Claude Code를 "자연어 프롬프트를 입력하고 결과를 기다리는 일반 채팅창"으로 오해한다. 그러나 실제 생산성의 도약은 세션 상태, 컨텍스트 용량, 런타임 환경을 능동적으로 다루는 **14대 핵심 명령어**를 자유자재로 조율할 때 일어난다.

### 14대 핵심 세션 운영 명령어 체계

#### ① 초기 설정 및 컨텍스트 정합성 구축 (Setup & Alignment)
*   **`/init`**: 프로젝트 루트 디렉터리의 전체 구조와 코드베이스 의존성을 스스로 훑고, AI 행동 양식을 고정하는 `CLAUDE.md`를 30초 내로 자동 생성한다.
*   **`/memory`**: 여러 프로젝트와 세션을 아우르는 개인 코딩 취향, 금기 규칙(예: "strict type 강제", "any 금지")을 적어두는 전역 메모리 파일을 열어 로드한다.
*   **`/pr_comments`**: GitHub PR(Pull Request) 상의 리뷰 코멘트를 세션 내부로 즉시 로드한다. 탭을 왕복하며 확인하는 인지 피로를 차단하고, 수정에서 반영까지 온전한 flow state를 보존한다.

#### ② 세션 인지 용량 보존 및 상태 유지 (Compaction & Diagnostics)
*   **`/btw`**: 진행 중이던 주요 구현 흐름(Context)을 파손하거나 기억을 유실하지 않으면서, 갑작스러운 개념 질문(예: "/btw JWT와 Session의 장단점")에만 짧게 대답하고 제자리로 복귀하는 병렬 질문 창을 제공한다.
*   **`/compact`**: 대화가 100회 이상 이어져 컨텍스트 윈도우가 가득 차고 응답 속도가 느려질 때, 핵심 의사결정 사항과 구현 내용만 요약 응축하고 지저분한 세션 로그를 삭제하여 작업 기억(Working Memory)을 확보하는 **손실 압축**을 수행한다.
*   **`/cost`**: 누적 토큰 요금(USD)과 잔여 컨텍스트 비율(%)을 가시적으로 모니터링하여, 예기치 않은 요금 폭주를 예방하고 적정 타이밍에 `/compact`를 유도하는 게이지 역할을 한다.

#### ③ 실행 제어 및 품질 통제 (Execution & Quality)
*   **`!` (Shell Command)**: CLI를 떠나지 않고 에이전트 내부에서 `! git status`, `! npm test`, `! ruff check` 등 셸 명령을 즉시 실행하여 실행 결과를 대화 맥락 안에 입력으로 직결한다.
*   **`/review`**: 구현이 끝난 뒤 버그, edge case, 구조적 모순, 보안 리스크(SQL 인젝션, 키 노출 등)를 꼼꼼하게 훑어내는 고급 코드 리뷰 패스를 작동한다.
*   **`/model`**: 작업의 성격에 맞춰 Opus, Sonnet, Haiku 등 세션 내 뇌의 종류를 바꾼다. (예: Opus로 아키텍처 아웃라인 설계 ➡️ Haiku로 빠른 보일러플레이트 작성 ➡️ Sonnet/Opus로 리뷰 및 디버깅).
*   **`/fast`**: 추론 깊이를 얕게 조정하여 빠른 브레인스토밍 및 단순 리팩토링 단계에서 응답 속도를 극대화한다.

#### ④ 장애 대응 및 시스템 복구 (Recovery & Help)
*   **`/clear`**: 도구 권한, 토큰 정보 등 로컬 셋업은 유지하고 지저분하게 꼬인 대화 기록만 지우는 **소프트 리셋**을 실행한다.
*   **`/doctor`**: API 키 유효성, Node.js 버전, 디렉터리 권한, 설정 파일 무결성 등을 점검하여 재설치 없이 환경적 고장을 10초 만에 복구한다.
*   **`/terminal-setup`**: 에이전트가 터미널의 출력을 읽어내지 못해 복사-붙여넣기 수작업이 강제될 때 터미널과의 통합 쉘(Shell Integration)을 핫픽스한다.
*   **`/help`**: 현재 세션에서 사용 가능한 전체 명령어와 파라미터 맵을 일목요연하게 출력한다.

## 예시

- 새 저장소 시작: `/init`으로 `CLAUDE.md`를 만들고 `/memory`로 전역 규칙을 정리한다.
- 긴 디버깅 세션: `/btw`로 옆 질문을 해결하고, context 잔량이 줄면 `/cost` 확인 후 `/compact`를 실행한다.
- 구현 후 점검: `! npm test`로 테스트를 돌리고 `/review`로 버그, edge case, 보안 위험을 본다.
- 도구가 이상할 때: 재설치 전에 `/doctor`, 터미널 출력이 끊기면 `/terminal-setup`, 대화가 꼬이면 `/clear`를 먼저 쓴다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Claude.md 운영 원칙]]
- [[Claude Code 오케스트레이션]]
- [[AI 코딩 에이전트 검증 전략]]
- [[AI 네이티브 사용자]]
- [[강한 모델로 덜 헤매기]]
- [[병렬 에이전트 세션 운영]]

