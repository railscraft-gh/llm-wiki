---
type: workflow
status: evergreen
core: false
tags:
 - llm
 - agent
 - claude-code
 - orchestration
aliases:
 - Claude Code Orchestration
 - 에이전트 오케스트레이션
sources:
 - raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
 - raw/보리스_클로드코드_실무_사용법.md
 - raw/Claude-Code-실무활용법-보리스-관점-정리.md
 - raw/cc101_axwith_ko.md
 - raw/Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md
 - raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md
 - raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어.md
created: 2026-05-06
updated: 2026-05-26
---

# Claude Code 오케스트레이션

## 한 줄 정의

Claude Code 오케스트레이션은 Claude Code를 단순 코딩 도구가 아니라 GitHub, Sentry, Slack, Figma, CLI, MCP 서버를 연결하는 업무 조율 도구로 쓰는 관점이다.

## 핵심 요지

- Claude Code의 가치는 코드 생성만이 아니라 여러 도구 사이의 작업 흐름을 연결할 때 커진다.
- 오케스트레이션에는 반드시 [[Claude Code 권한 설계]]가 따라야 한다.
- 반복되는 흐름은 slash command, hook, MCP 같은 작은 자동화로 고정한다.

## 상세

보리스 자료는 Claude Code를 다양한 workflow를 통제하는 오케스트레이터로 설명한다. 예를 들어 Sentry에서 최근 에러를 확인하고, 관련 로그로 원인을 추정하고, GitHub 이슈를 만들고, 수정 PR을 준비하는 흐름은 여러 도구를 넘나드는 업무다.

이 관점은 [[Agent Native Infrastructure]]와 이어진다. 사람이 클릭해서 서비스 연결, 설정, 배포를 처리하는 대신 에이전트가 텍스트 지시와 CLI/API를 통해 실행할 수 있는 환경일수록 오케스트레이션이 쉬워진다. 실무에서는 [[에이전트 확장 3계층]]처럼 Skill·MCP·tool의 역할을 분리할수록 오케스트레이션 경계도 선명해진다.

[[Ralph Loop]]는 Claude Code 오케스트레이션을 phase queue와 headless 세션 실행으로 확장한 패턴이다. 메인 세션은 전체 구현 context를 모두 품지 않고 phase 상태를 추적하며, 각 phase는 별도 `claude -p` 실행처럼 신선한 context에서 구현과 검증을 수행한다.

개인 지식 관리에서도 같은 원리가 적용된다. [[Obsidian vault용 Slash Command 운영]]처럼 vault 루트에 `CLAUDE.md`와 `.claude/commands/`를 두면, `/sync`, `/connect`, `/inbox` 같은 명령어가 반복적인 지식 정리 루프를 오케스트레이션한다.

`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어.md`는 이 층위의 기본기를 보여 준다. [[Claude Code 세션 운영 명령어]]처럼 `/init`, `/compact`, `!`, `/review`, `/doctor`를 세션 상태 관리 명령으로 이해하면, Claude Code는 단순 채팅창이 아니라 작업 환경 전체를 조율하는 인터페이스가 된다.

## 예시

- 장애 대응: Sentry 에러 확인 -> 로그 분석 -> GitHub 이슈 생성 -> 수정 브랜치 작성 -> 테스트 실행
- 콘텐츠 운영: Obsidian 아이디어 DB 조회 -> 후보 주제 선정 -> 제목/훅/구성안 생성
- 개발 반복: `/test`, `/review`, `/deploy-check` 같은 slash command로 반복 프롬프트를 줄인다.

## CC101 보강: Headless 모드와 CI/CD 연동

### Headless 모드 (`-p` 옵션)

터미널에서 Claude Code를 대화형이 아닌 명령형으로 실행한다. 자동화와 파이프라인에 필수적이다.

```bash
# 답변만 출력하고 종료
claude -p "이 함수 설명해줘"

# 파일 분석 후 보고서 생성
claude -p "src/ 폴터 코드 품질 분석하고 보고서 작성"

# 예산 한도 설정
claude -p --max-budget-usd 1.00 "질문"
```

### GitHub Actions 연동

PR이 올라올 때마다 자동으로 코드 리뷰를 수행한다:

```yaml
# .github/workflows/claude-review.yml
name: Claude Code Review
on: [pull_request]
jobs:
 review:
 runs-on: ubuntu-latest
 steps:
 - uses: actions/checkout@v3
 - name: Run Claude Code Review
 run: |
 claude -p "이 PR의 변경사항을 리뷰해줘. 보안 취약점과 코드 품질 문제를 중점적으로 확인해줘."
```

### GitLab CI/CD 연동

GitLab에서도 유사하게 파이프라인에 Claude Code를 통합할 수 있다:

```yaml
# .gitlab-ci.yml
claude_review:
 stage: test
 script:
 - claude -p "변경된 파일들을 분석하고 잠재적 버그를 찾아줘"
 only:
 - merge_requests
```

이러한 연동은 [[Claude Code 권한 설계]]를 통해 `--dangerously-skip-permissions` 사용을 제한하고 안전하게 실행해야 한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Claude Code 권한 설계]]
- [[병렬 에이전트 세션 운영]]
- [[Agent Native Infrastructure]]
- [[Ralph Loop]]
- [[Obsidian vault용 Slash Command 운영]]
- [[Claude Code 세션 운영 명령어]]
- [[에이전트 확장 3계층]]

