---
aliases:
- Claude Code Orchestration
- 에이전트 오케스트레이션
- Claude-Code-오케스트레이션
core: false
created: 2026-05-06
sources:
- Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!
- 보리스_클로드코드_실무_사용법
- Claude-Code-실무활용법-보리스-관점-정리
- cc101_axwith_ko
- Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합
- Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법
- Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어
- 메시징 서버의 스트레스 테스트 노하우와 AI가 덜어 준 부분
- raw/GStack - Claude Code 가상 엔지니어링 팀 도구.md
- raw/메시징 서버의 스트레스 테스트 노하우와 AI가 덜어 준 부분.md
- raw/cc101_axwith_ko.md
- raw/Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md
- raw/Hermes Agent에 구글 연결하는 초보자 매뉴얼.md
- raw/AI 네이티브 엔지니어링 조직 운영하기 - Code w Claude 발표.md
- raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
- raw/안드레_카파시_인터뷰_정리.md
- raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
- raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어.md
- raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md
- raw/Claude-Code-실무활용법-보리스-관점-정리.md
- raw/보리스_클로드코드_실무_사용법.md
- raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!
- raw/보리스_클로드코드_실무_사용법
- raw/Claude Code를 밑바닥부터 직접 구현해 보았다.md
status: evergreen
tags:
- llm
- agent
- claude-code
- orchestration
type: workflow
updated: 2026-07-10
---
# Claude Code 오케스트레이션

## 한 줄 정의
Claude Code 오케스트레이션은 Claude Code를 단순 코딩 도구가 아니라 GitHub, Sentry, Slack, Figma, CLI, MCP 서버를 연결하는 업무 조율 도구로 쓰는 관점이다.

## 핵심 요지
- Claude Code의 가치는 코드 생성만이 아니라 여러 도구 사이의 작업 흐름을 연결할 때 커진다.
- 오케스트레이션에는 반드시 [[Claude Code 권한 설계]]가 따라야 한다.
- 반복되는 흐름은 slash command, hook, MCP 같은 작은 자동화로 고정한다.
- Anthropic의 npm 배포 소스 맵 유출 분석에 따르면, 전체 코드베이스의 단 1.6%만이 모델과 통신하여 다음 행동을 결정하며, 나머지 98.4%는 명령어 검증, 컨텍스트 압축, 도구 호출 라우팅 및 복구, 세션 유지 등 오케스트레이션 시스템의 몫이다. (출처: raw/Claude Code를 밑바닥부터 직접 구현해 보았다.md)
- 컨텍스트 임계치 도달 시 대화 맥락 유지와 토큰 절약을 위해 오래된 실행 결과 정리, 중간 대화 요약, 긴 터미널 출력 끝단 자르기 등을 수행하는 8가지 컨텍스트 압축 모드가 내장되어 작동한다. (출처: raw/Claude Code를 밑바닥부터 직접 구현해 보았다.md)

## 상세

보리스 자료는 Claude Code를 다양한 workflow를 통제하는 오케스트레이터로 설명한다. 예를 들어 Sentry에서 최근 에러를 확인하고, 관련 로그로 원인을 추정하고, GitHub 이슈를 만들고, 수정 PR을 준비하는 흐름은 여러 도구를 넘나드는 업무다.

이 관점은 [[Agent Native Infrastructure]]와 이어진다. 사람이 클릭해서 서비스 연결, 설정, 배포를 처리하는 대신 에이전트가 텍스트 지시와 CLI/API를 통해 실행할 수 있는 환경일수록 오케스트레이션이 쉬워진다. 실무에서는 [[에이전트 확장 3계층]]처럼 Skill·MCP·tool의 역할을 분리할수록 오케스트레이션 경계도 선명해진다.

[[Ralph Loop]]는 Claude Code 오케스트레이션을 phase queue와 headless 세션 실행으로 확장한 패턴이다. 메인 세션은 전체 구현 context를 모두 품지 않고 phase 상태를 추적하며, 각 phase는 별도 `claude -p` 실행처럼 신선한 context에서 구현과 검증을 수행한다.

개인 지식 관리에서도 같은 원리가 적용된다. [[Obsidian vault용 Slash Command 운영]]처럼 vault 루트에 `CLAUDE.md`와 `.claude/commands/`를 두면, `/sync`, `/connect`, `/inbox` 같은 명령어가 반복적인 지식 정리 루프를 오케스트레이션한다.

`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어.md`는 이 층위의 기본기를 보여 준다. [[Claude Code 세션 운영 명령어]]처럼 `/init`, `/compact`, `!`, `/review`, `/doctor`를 세션 상태 관리 명령으로 이해하면, Claude Code는 단순 채팅창이 아니라 작업 환경 전체를 조율하는 인터페이스가 된다.

메시징 서버 스트레스 테스트 노하우도 같은 패턴이다. `/deploy-target`, `/deploy-stress`, `/run-stress`, `/render-dashboard`, `/make-report`처럼 반복 작업을 명령 단위로 묶고, subagent와 background task로 분리하면 Claude Code가 배포·측정·리포트 흐름을 오케스트레이션하는 역할을 할 수 있다.

### 5대 보리스 실무 오케스트레이션 핵심 규칙
1. **느려도 덜 헤매는 모델이 결과적으로 더 빠르다**: 보리스는 세션 운영 시 거의 모든 복잡한 설계/작업에 Opus 모델을 선호한다. 빠르게 틀려 리셋하는 것보다, 느리더라도 실수가 없어 롤백과 설명 시간을 아끼는 모델이 경제성(Total Cost) 측면에서 압도적이기 때문이다.
2. **현실적인 단계별 도입 순서**: 처음부터 모든 복잡한 자동화를 붙이려 하지 말고 아래 순서로 단계를 밟아야 한다.
   - *1단계*: `CLAUDE.md` 생성 ➡️ *2단계*: Plan Mode로 계획 수립 ➡️ *3단계*: 테스트/린트 자동 실행 ➡️ *4단계*: 위험 명령어 권한 제한 ➡️ *5단계*: 자주 쓰는 작업 슬래시 커맨드화 ➡️ *6단계*: 필요한 경우에만 서브 에이전트/MCP 추가.
3. **서브 에이전트는 최소화하고 역할만 분리**: 여러 비즈니스 검토용 에이전트(시장조사, 카피라이팅 등)를 과하게 늘리면 관리 비용만 늘어난다. 완전히 다른 관점의 검토가 요구될 때만 서브 에이전트(코드 아키텍처 검토, 리팩토링 검토, 테스트 검증, 빌드 확인 에이전트 등)를 제한적으로 도입해야 한다.
4. **장시간/오래 걸리는 작업의 3대 관리 장치**:
   - *스스로 검증할 테스트 코드*를 구현과 동시에 작성하게 강제한다.
   - *스톱훅(Stop Hook)*을 활성화하여 출력이 정지되는 순간 자동으로 빌드/테스트/린팅(`npm run build && npm test && npm run lint`)을 실행하게 한다.
   - *UI/브라우저 검증* 장치(Playwright, 스크린샷 캡처 등)를 두어 디자인 준수 여부를 에이전트가 검증하게 한다.
5. **린터와 포매터는 최종 안전장치**: AI가 작성한 코드의 스타일이나 포맷 결함이 CI/CD 파이프라인에서 터져 흐름을 끊는 것을 막기 위해, 매 세션 종료 전 린터와 포매터(`prettier`, `eslint`, `black`, `ruff`)를 사용해 마지막 10%의 코드를 정돈하게 만든다.

### 98.4% 오케스트레이션 엔진의 역할
- **컨텍스트 압축 (Context compaction)**: 파일 내용과 테스트 로그가 대화 기록에 무한히 누적되는 것을 방지하기 위해 8개 압축 모드를 가동하여 컨텍스트 윈도우 소모를 최소화합니다.
- **회생 루프 및 예외 처리**: 도구 실행 실패 시 에이전트가 종료되지 않고 에러 결과를 루프에 태워 모델이 반응하고 복구하도록 디스패처 레이어가 제어합니다.

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

- **1.6% 에이전트 루프 복제본의 한계**:
  500여 줄의 Python 코드만으로 ReAct 루프를 만드는 것은 쉽지만, 오케스트레이션 엔진(컨텍스트 압축 및 에러 회생 로직)이 결여되면 60턴 이상의 대형 프로젝트 수행 시 컨텍스트 윈도우 폭주와 세션 단절이 발생합니다.

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
- [[AI 에이전트 런타임 역할 맵]]
- [[Agent Harness]]
- [[Claude.md 운영 원칙]]

## 출처
- Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!
- 보리스_클로드코드_실무_사용법
- Claude-Code-실무활용법-보리스-관점-정리
- cc101_axwith_ko
- [[Ralph Loop]] - AI 코딩 자율 워크플로우 Spectrum Development 통합
- Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법
- 메시징 서버의 스트레스 테스트 노하우와 AI가 덜어 준 부분
- Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어
- [GStack - Claude Code 가상 엔지니어링 팀 도구](file:///Users/railscraft/Obsidian/raw/[[GStack]]%20-%20Claude%20Code%20%EA%B0%80%EC%83%81%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20%ED%8C%80%20%EB%8F%84%EA%B5%AC.md)
- [Hermes Agent에 구글 연결하는 초보자 매뉴얼](file:///Users/railscraft/Obsidian/raw/Hermes%20Agent%EC%97%90%20%EA%B5%AC%EA%B8%80%20%EC%97%B0%EA%B2%B0%ED%95%98%EB%8A%94%20%EC%B4%88%EB%B3%B4%EC%9E%90%20%EB%A7%A4%EB%89%B4%EC%96%BC.md)
- [AI 네이티브 엔지니어링 조직 운영하기 - Code w Claude 발표](file:///Users/railscraft/Obsidian/raw/AI%20%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20%EC%A1%B0%EC%A7%81%20%EC%9A%B4%EC%98%81%ED%95%98%EA%B8%B0%20-%20Code%20w%20Claude%20%EB%B0%9C%ED%91%9C.md)
- [꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!](file:///Users/railscraft/Obsidian/raw/%EA%BC%AD%20%EC%95%8C%EC%95%84%EC%95%BC%ED%95%A0%20%EC%95%88%EB%93%9C%EB%A0%88%20%EC%B9%B4%ED%8C%8C%EC%8B%9C%2030%EB%B6%84%20%EC%9D%B8%ED%84%B0%EB%B7%B0%20%EC%99%84%EC%A0%84%EC%A0%95%EB%A6%AC%20-%20AI%EC%8B%9C%EB%8C%80%EC%9D%98%20%ED%95%84%EC%88%98%20%EC%9D%B8%EC%82%AC%EC%9D%B4%ED%8A%B8%21.md)
- [안드레_카파시_인터뷰_정리](file:///Users/railscraft/Obsidian/raw/%EC%95%88%EB%93%9C%EB%A0%88_%EC%B9%B4%ED%8C%8C%EC%8B%9C_%EC%9D%B8%ED%84%B0%EB%B7%B0_%EC%A0%95%EB%A6%AC.md)
- [Claude Code를 밑바닥부터 직접 구현해 보았다](file:///Users/railscraft/Obsidian/raw/Claude%20Code%EB%A5%BC%20%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EC%A7%81%EC%A0%91%20%EA%B5%AC%ED%98%84%ED%95%B4%20%EB%B3%B4%EC%95%98%EB%8B%A4.md)

