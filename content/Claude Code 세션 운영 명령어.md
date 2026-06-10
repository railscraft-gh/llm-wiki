---
type: workflow
status: evergreen
core: false
tags:
 - llm
 - claude-code
 - workflow
 - commands
aliases:
 - Claude Code 명령어 운영
 - Claude Code power user commands
sources:
 - Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어
created: 2026-05-24
updated: 2026-05-24
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

이 raw의 요지는 많은 사용자가 Claude Code를 "프롬프트를 계속 입력하는 채팅창" 정도로만 쓰고, 실제 생산성 차이를 만드는 명령어 계층은 거의 활용하지 않는다는 것이다. 여기서 중요한 구분은 기능 자체보다 **언제 어떤 상태 문제를 푸는가**다.

첫 번째 계층은 **초기 설정 명령어**다. `/init`은 저장소를 읽어 `CLAUDE.md`를 자동 생성하고, `/memory`는 프로젝트를 넘어서 반복되는 개인 규칙을 저장한다. `/pr_comments`는 GitHub PR의 리뷰 맥락을 세션 안으로 불러와 탭 왕복 없이 수정 작업을 이어가게 만든다. 이 셋은 [[Claude.md 운영 원칙]]과 직접 연결된다.

두 번째 계층은 **세션 유지 명령어**다. `/btw`는 메인 흐름을 유지한 채 옆 질문을 처리하고, `/compact`는 긴 대화를 요약해 context window를 비우며, `/cost`는 토큰과 비용을 확인해 언제 압축하거나 세션을 나눌지 판단하게 한다. 이 부분은 [[병렬 에이전트 세션 운영]]과 [[AI 코딩 에이전트 검증 전략]]의 실무 보조장치로 볼 수 있다.

세 번째 계층은 **실행과 품질 제어 명령어**다. `!`는 셸 명령 실행을 대화 맥락 안으로 가져오고, `/review`는 구현 뒤 결함 탐색을 구조화하며, `/model`과 `/fast`는 추론 강도와 응답 속도를 작업 단계에 맞게 조절한다. 같은 세션 안에서 Opus로 설계하고, Haiku나 빠른 모드로 반복 구현하고, 다시 Sonnet이나 리뷰 패스로 검토하는 식의 리듬이 가능해진다. 이는 [[강한 모델로 덜 헤매기]]와도 맞닿아 있다.

마지막 계층은 **복구 명령어**다. `/clear`는 설정과 권한은 남기고 대화만 초기화하는 소프트 리셋이고, `/doctor`는 설치/권한/API key 문제를 점검하며, `/terminal-setup`은 터미널 연동을 복구하고, `/help`는 전체 명령어 지도를 제공한다. 즉 명령어 사용 능력은 단순 편의가 아니라 agent 환경을 스스로 운영하는 능력이다.

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

