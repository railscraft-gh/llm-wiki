---
type: workflow
status: evergreen
core: true
tags:
  - design
  - ai
  - workflow
  - product-design
aliases:
  - AI 디자인 계층 맵
  - AI 디자인 운영 계층
sources:
  - From faster pencil to AI Experience Architect. a designer’s path
  - Good Design Doesn’t Happen By Default
  - Agentic Product Design. 오늘 바로 자동화할 수 있는 5가지 디자인 작업
  - 모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션
  - Agentic AI, design systems & Figma. a practical guide
  - Why senior designers are doing four jobs for one salary in 2026
created: 2026-05-26
updated: 2026-06-03
---

# AI 디자인 역할 맵

## 한 줄 정의

AI 디자인 역할 맵은 AI 시대 디자인 작업을 기본값, 지속 규칙, task agent, 조직 아키텍처의 네 층으로 나눠 각각 무엇을 설계해야 하는지 정리한 운영 프레임이다.

## 핵심 요지

- 디자인 품질은 한 번의 좋은 화면보다, 어떤 층의 결정을 누가 맡는지에서 갈린다.
- 기본값 층은 spacing, typography, token, component behavior를 고정한다.
- 지속 규칙 층은 DESIGN.md처럼 agent가 반복 참조할 디자인 맥락 파일을 관리한다.
- task layer는 [[디자인 에이전트 5종]]처럼 리서치, 문제 정의, 아이디어 발산, flow 설계를 자동화한다.
- 아키텍처 층은 [[AI Experience Architect]]처럼 위임 경계, review gate, 권한, 조직 책임을 설계한다.

## 상세

이 프레임은 여러 raw에서 반복된 내용을 네 층으로 재구성한다.

### 1. 기본값 층

가장 아래에는 [[디자인 시스템 기본값]]이 있다. 어떤 회색, 어떤 padding, 어떤 radius, 어떤 dialog 패턴을 기본으로 삼을지 정하지 않으면 결과물은 우연히 결정된다. 이 층의 질문은 "예쁘냐"보다 "반복될 때 흔들리지 않느냐"다.

### 2. 지속 규칙 층

그 다음은 [[DESIGN.md 운영 원칙]]이다. 기본값을 사람 머릿속 규칙으로 두지 않고, agent가 읽을 수 있는 token·rationale 파일로 남긴다. 이 층은 "기본값을 어떻게 지속적으로 전달할 것인가"를 다룬다.

### 3. Task Agent 층

세 번째 층은 [[디자인 에이전트 5종]]이다. 여기서는 시각 언어를 만드는 것이 아니라, 리서치 요약, 경쟁 정보 정리, 문제 정의, 아이디어 발산, UX flow 설계를 분리된 agent workflow로 다룬다. 이 층의 산출물은 화면이라기보다 brief, digest, flow spec에 가깝다.

### 4. 아키텍처 층

맨 위에는 [[AI Experience Architect]]가 있다. 여기서는 누가 무엇을 승인하는지, AI가 어디까지 결정하는지, 규제·감사·fallback을 어떻게 설계할지, 조직 안에서 어떤 사회적 계약을 둘지를 다룬다. 이 층은 디자인이 아니라 운영처럼 보일 수 있지만, 실제로는 제품 경험의 경계를 정하는 디자인이다.

이 네 층을 한 번에 보지 않으면 흔한 오해가 생긴다. 예를 들어 task agent만 만들고 기본값 층을 비워 두면 산출 속도는 빨라져도 시각 drift가 심해진다. 반대로 DESIGN.md만 잘 써두고 문제 정의 workflow를 설계하지 않으면 보기 좋은 평균 UI만 반복 생성할 수 있다.

`raw/Agentic AI, design systems & Figma. a practical guide-ko.md`는 이 프레임의 가장 아래층을 더 구체화한다. Variables, component property, state, slots, auto layout, Code Connect는 모두 파일 단위에서 맞물려야 한다. 이건 Figma를 "그림 그리는 앱"이 아니라 machine-readable design contract로 쓰는 방법이다.

`raw/Why senior designers are doing four jobs for one salary in 2026-ko.md`는 반대로 상위층의 압력을 보여 준다. 시니어 디자이너가 research, production, system upkeep, communication을 하나의 역할로 떠안는 Four-for-One 압축이 진행될수록, 기본값과 task agent와 architecture를 분리하지 않으면 결국 한 사람이 네 가지 일을 다 떠안게 된다. 이 노트의 목적은 그 압축을 개인의 초과근무가 아니라 운영 계층 설계 문제로 바꾸는 데 있다.

## 예시

- onboarding 개편: 기본값 층에서 form spacing과 validation tone을 고정하고, task layer에서 UX flow agent로 happy path와 edge case를 설계한다.
- B2B SaaS 재설계: DESIGN.md로 density와 table rule을 고정하고, architect layer에서 어떤 화면까지 AI가 초안 생성하고 어디서 사람이 승인할지 정한다.
- 디자인 조직 운영: 디자이너 주니어는 기본값과 DESIGN.md를 관리하고, 시니어는 task agent prompt를 다듬고, 리드는 AI Experience Architect 관점에서 권한과 review gate를 조정한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI 시대 디자인 시스템]]
- [[디자인 시스템 기본값]]
- [[DESIGN.md 운영 원칙]]
- [[디자인 에이전트 5종]]
- [[AI Experience Architect]]
- [[AI 코딩 에이전트 검증 전략]]
- [[AI 네이티브 작업 시스템]]

