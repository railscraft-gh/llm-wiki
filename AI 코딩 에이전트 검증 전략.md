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
  - https://github.com/google-labs-code/design.md
created: 2026-05-06
updated: 2026-05-07
---

# AI 코딩 에이전트 검증 전략

## 한 줄 정의

AI 코딩 에이전트 검증 전략은 에이전트에게 구현뿐 아니라 테스트, 린트, UI 확인, 실패 시 수정까지 맡겨 결과물을 스스로 확인하게 만드는 workflow다.

## 핵심 요지

- 좋은 지시는 "기능을 만들어라"에서 끝나지 않고 "검증할 테스트를 만들고 실행한 뒤 실패하면 원인을 고쳐라"까지 포함한다.
- 검증 루프는 [[Jagged Intelligence]] 때문에 필요하다. LLM은 코드처럼 채점 가능한 영역에서는 강하지만, 상식이나 제품 판단에서는 들쭉날쭉할 수 있다.
- 자동화의 목표는 AI에게 권한을 더 많이 주는 것이 아니라 사람이 신뢰할 수 있는 확인 구조를 만드는 것이다.

## 상세

보리스 관점의 핵심은 Claude Code, Codex, Gemini CLI 같은 도구를 코드 생성기가 아니라 "자기 작업을 확인하고 실패하면 다시 고치는 에이전트"로 쓰는 것이다. 이때 검증 수단은 프로젝트에 이미 있는 `npm test`, `ruff check`, `pytest`, 빌드 명령, CI, 브라우저 자동화 같은 실행 가능한 기준이어야 한다. 출처: `raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md`, `raw/Claude-Code-실무활용법-보리스-관점-정리.md`

카파시의 [[Jagged Intelligence]] 관점에서도 같은 결론이 나온다. LLM은 검증 가능한 영역에서는 빠르게 강해지지만, 검증 기준이 없으면 사람 눈에는 그럴듯한 결과를 내고도 시스템 결정을 틀릴 수 있다. 따라서 [[Vibe Coding과 Agentic Engineering]]을 구분하는 핵심은 속도가 아니라 검증 책임을 유지하는가다.

UI 작업의 검증 기준에는 screenshot 확인뿐 아니라 design token 위반 확인도 포함된다. Google Labs의 `design.md` repository는 `DESIGN.md` lint가 broken token reference, WCAG contrast ratio, 구조적 문제를 점검할 수 있다고 설명한다. 따라서 [[DESIGN.md 운영 원칙]]은 UI 생성 작업의 검증 루프에 들어갈 수 있다. 출처: https://github.com/google-labs-code/design.md, `raw/AI로_만든_제품이_안_팔리는_이유.md`

## 예시

- 기능 구현: "사용자 편집 기능을 구현하고, 권한 없는 사용자 케이스를 포함한 테스트를 작성한 뒤 테스트를 실행해서 결과를 보고해."
- UI 변경: "장바구니 화면을 수정하고 Playwright로 수량 변경, 총액 계산, 모바일 레이아웃을 확인해."
- 디자인 변경: "DESIGN.md를 읽고 token 밖 색상, 임의 font size, contrast warning이 없는지 확인해."
- 장시간 작업: stop hook에 `npm run build`, `npm test`, `npm run lint`를 연결해 에이전트가 멈출 때마다 확인한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Claude.md 운영 원칙]]
- [[Plan Mode 기반 AI 작업]]
- [[Jagged Intelligence]]
- [[Vibe Coding과 Agentic Engineering]]
- [[DESIGN.md 운영 원칙]]
- [[AI 시대 디자인 시스템]]

## 출처

- `raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md`
- `raw/보리스_클로드코드_실무_사용법.md`
- `raw/Claude-Code-실무활용법-보리스-관점-정리.md`
- `raw/안드레_카파시_인터뷰_정리.md`
- `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md`
- `raw/AI로_만든_제품이_안_팔리는_이유.md`
- https://github.com/google-labs-code/design.md
