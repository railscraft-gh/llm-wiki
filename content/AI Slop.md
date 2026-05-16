---
type: concept
status: evergreen
core: false
tags:
 - llm
 - design
 - product
aliases:
 - AI 슬롭
 - 평균적 AI 결과물
 - generic AI output
sources:
 - raw/AI로_만든_제품이_안_팔리는_이유.md
created: 2026-05-07
updated: 2026-05-07
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

AI Slop은 [[Vibe Coding과 Agentic Engineering]]의 제품 디자인 버전으로 볼 수 있다. Vibe Coding은 빠른 데모를 만들 수 있지만, Agentic Engineering은 품질 기준과 검증 루프를 요구한다. UI에서도 빠른 생성만으로는 충분하지 않고, [[DESIGN.md 운영 원칙]]처럼 에이전트가 따를 수 있는 제약과 검증 기준이 필요하다.

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
- [[AI 네이티브 사용자]]
- [[AI 시대 소프트웨어 펀더멘탈]]

