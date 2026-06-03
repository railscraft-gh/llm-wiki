---
type: workflow
status: evergreen
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
 - raw/Agentic Product Design. 오늘 바로 자동화할 수 있는 5가지 디자인 작업.md
 - raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md
 - raw/How to write a DESIGN.md file Claude can actually use-ko.md
 - https://github.com/google-labs-code/design.md
 - https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/
created: 2026-05-07
updated: 2026-06-03
---

# DESIGN.md 운영 원칙

## 한 줄 정의

DESIGN.md 운영 원칙은 AI coding agent가 UI를 만들 때 따를 색상, 타이포그래피, 간격, 컴포넌트 규칙과 설계 이유를 저장하는 디자인 시스템 workflow다.

## 핵심 요지

- DESIGN.md는 디자인 맥락을 repo에 남기는 파일이며, [[Claude.md 운영 원칙]]이 코드 관습을 주는 것과 비슷한 역할을 한다.
- 상단 YAML front matter에는 machine-readable design token을, 본문 Markdown에는 human-readable design rationale을 둔다.
- 파일의 시작점은 색상이 아니라 제품 요약이어야 한다. 이 제품이 무엇인지, 누가 쓰는지, UI가 무엇을 돕는지부터 적어야 모델이 토큰 값을 맥락 없이 추측하지 않는다.
- UI 작업마다 에이전트에게 먼저 읽히고, 결과물에는 token 밖의 색, font size, spacing이 들어갔는지 확인한다.
- 개별 spec과 CLI는 바뀔 수 있지만, design token과 rationale를 agent-readable 파일로 분리해 유지한다는 운영 원칙 자체는 안정적이다.

## 상세

Google Labs의 `design.md` GitHub repository는 DESIGN.md를 coding agents에게 visual identity를 설명하는 format specification으로 정의한다. 공식 README는 YAML front matter가 token의 normative value이고, Markdown prose가 적용 맥락을 제공한다고 설명한다. 또한 `npx @google/design.md lint DESIGN.md`로 broken token reference, WCAG contrast ratio, 구조적 문제를 점검할 수 있다.

Google Stitch 공식 글은 DESIGN.md를 agent-friendly markdown file로 설명하며, 디자인 규칙을 다른 design/coding tool로 export/import하는 용도로 소개한다.

raw 문서는 Design.md를 AI에게 반복해서 던지는 매뉴얼로 다룬다. 핵심은 "예쁘게 해줘"가 아니라 `primary`, `body`, `space-4`, `button-primary`처럼 에이전트가 그대로 참조할 수 있는 이름과 값을 주는 것이다.

후속 raw는 좋은 DESIGN.md가 단순한 token export가 아니라는 점을 더 분명히 했다. 파일이 잘 작동하려면 제품 요약, 토큰, 타이포그래피, 컴포넌트 로직, 하지 말아야 할 것들을 이 순서로 적어야 한다. 특히 "primary 색상은 CTA와 활성 상태에만 쓴다"처럼 값과 의도, 경계를 함께 써야 모델이 배경용 색이나 장식 패턴을 임의로 늘리지 않는다.

또한 좋은 DESIGN.md를 만드는 과정 자체를 skill로 고정하는 접근이 중요하다. 먼저 제품 맥락, 기존 토큰, UI의 핵심 역할, 제약을 묻는 인터뷰를 하고, 그다음 올바른 순서로 파일을 생성한 뒤, 화면 세 개 정도를 만들어 drift와 누락된 제약을 찾는 진단 루프까지 포함해야 한다. 이 방식은 파일 하나보다 운영 절차가 더 중요하다는 점을 보여 준다.


후속 raw는 DESIGN.md에 특히 중요한 9개 섹션을 더 구체화한다. Visual Theme & Atmosphere, Color Palette & Roles, Typography Rules, Component Stylings, Layout Principles, Depth & Elevation, Do's and Don'ts, Responsive Behavior, Agent Prompt Guide가 그것이다. 이 목록은 token과 rationale을 함께 남겨 style drift를 줄이는 실무 체크리스트로 쓸 수 있다. 또한 [[디자인 에이전트 5종]]처럼 research·problem definition·flow design을 맡는 task agent와 달리, DESIGN.md는 시각 언어를 지속적으로 고정하는 기준 파일이라는 점을 구분해야 한다.


## 안정적인 운영 규칙

DESIGN.md를 어떤 spec으로 구현하든, 아래 원칙은 비교적 안정적이다.

1. **token과 rationale를 분리한다**
   - 색, 타이포그래피, spacing 같은 값은 machine-readable하게 두고, 왜 그렇게 정했는지는 prose로 남긴다.
2. **agent가 작업 전에 먼저 읽게 한다**
   - 화면을 만든 뒤 맞추는 것이 아니라, 생성 전에 기본값을 주입한다.
3. **검증 규칙을 같이 둔다**
   - token 밖 색상, 임의 radius, 잘못된 density 같은 위반 항목을 확인한다.
4. **시각 언어와 task workflow를 구분한다**
   - DESIGN.md는 visual consistency 파일이고, [[디자인 에이전트 5종]]은 research/flow task workflow다.
5. **브랜드 차별점은 기본값으로 못 박는다**
   - AI가 평균적인 UI로 수렴하지 않게 하려면, 제품 tone과 interaction rule을 문서로 고정해야 한다.

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

- 2026-05-26 확인: Google Labs `design.md`의 정확한 문법, lint CLI, export/import 흐름은 변할 수 있다. 하지만 디자인 기본값을 agent-readable 파일로 외부화한다는 운영 원칙은 특정 spec 변화와 별개로 유지된다.

## 관련 노트

- [[AI 시대 디자인 시스템]]
- [[AI Slop]]
- [[Claude.md 운영 원칙]]
- [[AI 코딩 에이전트 검증 전략]]
- [[디자인 에이전트 5종]]
- [[디자인 시스템 기본값]]
- [[AI 디자인 역할 맵]]

