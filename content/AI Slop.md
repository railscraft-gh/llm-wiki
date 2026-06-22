---
aliases:
- AI 슬롭
- 평균적 AI 결과물
- generic AI output
core: false
created: 2026-05-07
sources:
- AI로_만든_제품이_안_팔리는_이유
- Bloated AI Slop Labs on X 2059651388901335196 한국어 번역
- raw/frontend-design-skill.md
- raw/Claude 900달러 컨설턴트를 대체하는 10가지 프롬프트-ko.md
- raw/거의 모든 나쁜 결정을 멈추는 단 하나의 질문-ko.md
- raw/AI로_만든_제품이_안_팔리는_이유.md
- raw/AI가 당신처럼 글을 쓰게 만드는 가장 좋은 방법-ko.md
- raw/API_Key_관리_및_Infisical_도입_가이드.md
- raw/2026년에 가장 많이 설치된 디자인 문서. 단 30줄짜리였다. Anthropic 엔지니어 두 명이 썼다. 디자이너들은 아직 읽지 않았다-ko.md
- raw/2026년의 AI 에이전트 실전 가이드-ko.md
- raw/Bloated AI Slop Labs on X 2059651388901335196 한국어 번역.md
- raw/gajae-code_AI_코딩_하네스_분석.md
- raw/한 문장을 500달러짜리 온라인 코스로 바꾸는 멀티 에이전트 시스템 구축하기-ko.md
- raw/UX는 죽지 않았다. 그저 화면에 대한 이야기를 멈췄을 뿐이다-ko.md
- raw/AI 겨울이 시작됐다-ko.md
status: evergreen
tags:
- llm
- design
- product
type: concept
updated: '2026-06-22'
---

# AI Slop

## 한 줄 정의

AI Slop은 AI가 빠르게 만들었지만 제품 고유의 판단, 시각 언어, 사용감이 약해 평균적인 템플릿처럼 보이는 결과물이다.

## 핵심 요지

- 코드 생성 속도가 빨라질수록 코드 자체는 차별점이 되기 어렵다.
- AI는 그럴듯한 평균값으로 수렴하기 쉬워, 아무 지침이 없으면 비슷한 UI와 문구를 반복한다.
- 사용자는 코드보다 화면의 밀도, 간격, 색, 타이포그래피, 상호작용의 매끄러움을 먼저 느낀다.
- [[AI 시대 디자인 시스템]]은 AI Slop을 줄이기 위한 구조적 대응이다.

## 상세

raw 문서는 Claude Code나 Codex 같은 도구로 앱을 빠르게 만들 수 있어도, 결과물이 "어디서 본 듯한" 평균적 화면으로 끝나면 제품은 팔리기 어렵다고 주장한다. 여기서 차이를 만드는 요소는 추상적인 감각이 아니라 색상, 폰트, 간격, 아이콘, 컴포넌트 상태를 일관되게 정한 디자인 시스템이다.

AI Slop은 [[Vibe Coding과 Agentic Engineering]]의 제품 디자인 버전으로 볼 수 있다. Vibe Coding은 빠른 데모를 만들 수 있지만, Agentic Engineering은 품질 기준과 검증 루프를 요구한다. UI에서도 빠른 생성만으로는 충분하지 않고, [[DESIGN.md 운영 원칙]]처럼 에이전트가 따를 수 있는 제약과 검증 기준이 필요하다. 같은 맥락에서 harness 자체가 비대해져도 실제로는 일부 workflow만 쓰게 되면 그 운영층도 또 다른 AI Slop이 될 수 있다. [[AI 하네스 최소화]]는 이런 하네스 비대화의 반대편에 있는 운영 원칙이다.

## 예시

- 같은 서비스 안에서 버튼 radius, padding, 아이콘 굵기, heading 크기가 화면마다 다르다.
- 로그인 화면은 SaaS 템플릿처럼 보이고, 결제 화면은 다른 디자인 시스템처럼 보인다.
- 색상 token이 없어서 AI가 매번 비슷한 파란색과 회색 조합을 만든다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI 시대 디자인 시스템]]
- [[DESIGN.md 운영 원칙]]
- [[Vibe Coding과 Agentic Engineering]]
- [[AI 하네스 최소화]]
- [[AI 네이티브 사용자]]
- [[AI 시대 소프트웨어 펀더멘탈]]
- [[프론트엔드 디자인 스킬]]

