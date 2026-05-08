---
type: workflow
status: needs-review
core: false
tags:
  - llm
  - design-system
  - ai-coding
aliases:
  - Design.md
  - DESIGN.md
  - 디자인용 AGENTS.md
sources:
  - raw/AI로_만든_제품이_안_팔리는_이유.md
  - https://github.com/google-labs-code/design.md
  - https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/
created: 2026-05-07
updated: 2026-05-07
---

# DESIGN.md 운영 원칙

## 한 줄 정의

DESIGN.md 운영 원칙은 AI coding agent가 UI를 만들 때 따를 색상, 타이포그래피, 간격, 컴포넌트 규칙과 설계 이유를 저장하는 디자인 시스템 workflow다.

## 핵심 요지

- DESIGN.md는 디자인 맥락을 repo에 남기는 파일이며, [[Claude.md 운영 원칙]]이 코드 관습을 주는 것과 비슷한 역할을 한다.
- 상단 YAML front matter에는 machine-readable design token을, 본문 Markdown에는 human-readable design rationale을 둔다.
- UI 작업마다 에이전트에게 먼저 읽히고, 결과물에는 token 밖의 색, font size, spacing이 들어갔는지 확인한다.
- Google Labs의 `design.md` specification은 alpha 상태라, 문법과 tooling 변화 가능성을 두고 `needs-review`로 관리한다.

## 상세

Google Labs의 `design.md` GitHub repository는 DESIGN.md를 coding agents에게 visual identity를 설명하는 format specification으로 정의한다. 공식 README는 YAML front matter가 token의 normative value이고, Markdown prose가 적용 맥락을 제공한다고 설명한다. 또한 `npx @google/design.md lint DESIGN.md`로 broken token reference, WCAG contrast ratio, 구조적 문제를 점검할 수 있다. 출처: https://github.com/google-labs-code/design.md

Google Stitch 공식 글은 DESIGN.md를 agent-friendly markdown file로 설명하며, 디자인 규칙을 다른 design/coding tool로 export/import하는 용도로 소개한다. 출처: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/

raw 문서는 Design.md를 AI에게 반복해서 던지는 매뉴얼로 다룬다. 핵심은 "예쁘게 해줘"가 아니라 `primary`, `body`, `space-4`, `button-primary`처럼 에이전트가 그대로 참조할 수 있는 이름과 값을 주는 것이다. 출처: `raw/AI로_만든_제품이_안_팔리는_이유.md`

## 예시

```markdown
---
colors:
  primary: "#2563EB"
typography:
  body:
    fontFamily: "Pretendard"
    fontSize: "16px"
    lineHeight: 1.5
spacing:
  md: "16px"
---

## Colors
Primary는 주요 action에만 사용한다.
```

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI 시대 디자인 시스템]]
- [[AI Slop]]
- [[Claude.md 운영 원칙]]
- [[AI 코딩 에이전트 검증 전략]]

