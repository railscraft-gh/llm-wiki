---
type: workflow
status: evergreen
core: true
tags:
 - llm
 - agent
 - ai-coding
 - verification
aliases:
 - Verification Loop
 - 검증 루프
sources:
 - raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
 - raw/보리스_클로드코드_실무_사용법.md
 - raw/Claude-Code-실무활용법-보리스-관점-정리.md
 - raw/안드레_카파시_인터뷰_정리.md
 - raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
 - raw/AI로_만든_제품이_안_팔리는_이유.md
 - raw/opencode-masterclass-summary.md
 - raw/cc101_axwith_ko.md
 - raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md
 - https://github.com/google-labs-code/design.md
 - https://opencode.ai/docs/config/
created: 2026-05-06
updated: 2026-05-14
---

# AI 코딩 에이전트 검증 전략

## 한 줄 정의

AI 코딩 에이전트 검증 전략은 에이전트에게 구현뿐 아니라 테스트, 린트, UI 확인, 실패 시 수정까지 맡겨 결과물을 스스로 확인하게 만드는 workflow다.

## 핵심 요지

- 좋은 지시는 "기능을 만들어라"에서 끝나지 않고 "검증할 테스트를 만들고 실행한 뒤 실패하면 원인을 고쳐라"까지 포함한다.
- 검증 루프는 [[Jagged Intelligence]] 때문에 필요하다. LLM은 코드처럼 채점 가능한 영역에서는 강하지만, 상식이나 제품 판단에서는 들쭉날쭉할 수 있다.
- 자동화의 목표는 AI에게 권한을 더 많이 주는 것이 아니라 사람이 신뢰할 수 있는 확인 구조를 만드는 것이다.

## 상세

보리스 관점의 핵심은 Claude Code, Codex, Gemini CLI 같은 도구를 코드 생성기가 아니라 "자기 작업을 확인하고 실패하면 다시 고치는 에이전트"로 쓰는 것이다. 이때 검증 수단은 프로젝트에 이미 있는 `npm test`, `ruff check`, `pytest`, 빌드 명령, CI, 브라우저 자동화 같은 실행 가능한 기준이어야 한다.

카파시의 [[Jagged Intelligence]] 관점에서도 같은 결론이 나온다. LLM은 검증 가능한 영역에서는 빠르게 강해지지만, 검증 기준이 없으면 사람 눈에는 그럴듯한 결과를 내고도 시스템 결정을 틀릴 수 있다. 따라서 [[Vibe Coding과 Agentic Engineering]]을 구분하는 핵심은 속도가 아니라 검증 책임을 유지하는가다.

UI 작업의 검증 기준에는 screenshot 확인뿐 아니라 design token 위반 확인도 포함된다. Google Labs의 `design.md` repository는 `DESIGN.md` lint가 broken token reference, WCAG contrast ratio, 구조적 문제를 점검할 수 있다고 설명한다. 따라서 [[DESIGN.md 운영 원칙]]은 UI 생성 작업의 검증 루프에 들어갈 수 있다.

[[OpenCode]] 자료는 Playwright MCP를 붙여 agent가 브라우저에서 직접 입력, 클릭, 화면 확인을 수행하게 하는 예를 든다. 공식 config 문서는 `opencode.json`의 `mcp` 항목으로 MCP server를 설정할 수 있다고 설명한다. UI 검증에서는 "구현 후 테스트"가 아니라 "브라우저 조작으로 실패를 발견하고 수정한 뒤 다시 확인"까지가 완료 조건이다.

## 예시

- 기능 구현: "사용자 편집 기능을 구현하고, 권한 없는 사용자 케이스를 포함한 테스트를 작성한 뒤 테스트를 실행해서 결과를 보고해."
- UI 변경: "장바구니 화면을 수정하고 Playwright로 수량 변경, 총액 계산, 모바일 레이아웃을 확인해."
- 디자인 변경: "DESIGN.md를 읽고 token 밖 색상, 임의 font size, contrast warning이 없는지 확인해."
- 장시간 작업: stop hook에 `npm run build`, `npm test`, `npm run lint`를 연결해 에이전트가 멈출 때마다 확인한다.

## CC101 보강: 디버깅과 실수 방지

### 디버깅 3단계 워크플로우

에러가 났을 때 당황하지 않고 해결하는 체계적인 접근법이다.

**1단계: 에러가 났을 때 — 바로 보여주기**
- 에러 메시지를 그대로 Claude에게 보여준다 (복사-붙여넣기)
- 스크린샷을 `Ctrl+V`로 바로 붙여넣기
- "언제부터", "뭘 하면", "어떤 증상이" — 이 세 가지가 들어가면 정확하게 원인을 찾는다

**2단계: "안 되는데 뭐가 문제인지 모르겠어요"**
- `/rewind`로 동작하던 시점으로 되돌아간다
- `Esc` 키 두 번으로 직전 상태 복구 (체크포인트)
- "방금 뭐 바꿨는지 보여줘"로 변경 내역 확인
- "하나씩 되돌려볼 수 있어요"로 문제 지점 좁히기

**3단계: "고쳐줬는데 또 같은 문제야"**
- CLAUDE.md에 주의사항 기록: "이 프로젝트에서 날짜는 항상 dayjs를 사용할 것"
- 새 세션으로 다시 시작: `/quit` 후 `claude`로 새 세션, 핵심 컨텍스트만 다시 전달

### 실수 방지 체크리스트

Claude Code 시작 전, 작업 중, 작업 후에 확인해야 할 항목들이다.

**시작 전:**
- 프로젝트 폴터로 이동했나? (`cd ~/Documents/my-project`)
- 중요한 작업이면 git commit 했나?
- CLAUDE.md에 프로젝트 규칙이 있나?

**작업 중:**
- 지시가 충분히 구체적인가?
- 한 번에 너무 많이 요청하지 않았나?
- 대화가 길어지면 `/compact` 사용했나?
- 뭔가 이상하면 `Ctrl+C`로 바로 멈췄나?

**작업 후:**
- 변경 내용을 확인했나? (`git diff`)
- 테스트가 통과하는가?
- 중요한 세션이면 이름을 저장했나? (`/rename`)

### Slopsquatting 경고

AI 모델이 실제로 존재하지 않는 패키지를 자신 있게 추천(hallucination)할 때, 공격자가 그 이름으로 악성 코드가 담긴 패키지를 npm/PyPI에 미리 올려두는 공격 기법이다.

**설치 전 반드시 확인:**
- `npm info 패키지이름`으로 다운로드 수, 최근 업데이트 확인
- 배포된 지 며칠 안 됐거나 다운로드가 극소수면 주의
- Claude에게 "이 패키지가 정말 존재하는지 npmjs.com 링크와 GitHub 저장소 주소도 함께 알려줘" 요청
- Anthropic, Microsoft, Vercel, Meta 같은 검증된 조직의 패키지 우선

### `git add -p`로 변경 사항 검토

Claude가 변경한 모든 것을 한꺼번에 스테이징하는 대신, 변경 덩어리(hunk)마다 포함 여부를 선택할 수 있다.

```bash
git add -p

# 각 변경 덩어리에서:
# y → 이 변경 포함
# n → 이 변경 제외
# s → 더 작게 분리해서 보기
# d → 이 파일 나머지 전부 제외
# q → 종료
```

### 의심해야 할 AI 작업 패턴

- 요청하지 않은 파일도 수정됨 → 의도치 않은 사이드 이펙트 가능
- 주석 없이 기존 코드를 통째로 대체 → 무엇이 바뀌었는지 파악 어려움
- 설정 파일(`.env`, `package.json`) 갑자기 수정 → 환경변수·의존성 변화 체크 필요
- 테스트 파일만 삭제 또는 비활성화 → 기존 검증 우회 가능성
- 처음 보는 패키지 추가 → 슬롭스쿼팅 위험
- 에러 처리를 빈 catch 블록으로 감쌈 → 예외가 조용히 사라짐

**원칙**: Claude가 생성한 코드도 외부에서 받은 코드처럼 검토하세요. AI가 작성했다고 안전이 보장되지 않는다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Claude.md 운영 원칙]]
- [[Plan Mode 기반 AI 작업]]
- [[Jagged Intelligence]]
- [[Vibe Coding과 Agentic Engineering]]
- [[DESIGN.md 운영 원칙]]
- [[AI 시대 디자인 시스템]]
- [[OpenCode]]
- [[매퍼코 3스킬 워크플로우]]
- [[RuboCop]]

