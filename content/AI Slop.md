---
type: concept
status: draft
core: false
tags:
- llm
- design
- ai-slop
aliases:
- AI-Slop
sources:
- raw/2026년에 가장 많이 설치된 디자인 문서. 단 30줄짜리였다. Anthropic 엔지니어 두 명이 썼다. 디자이너들은 아직 읽지 않았다-ko.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의

AI가 생성한 프런트엔드 UI/UX 디자인에서 흔히 나타나는, 훈련 데이터의 평균값으로 수렴하여 만들어지는 창의성 없고 평범한 시각적 결과물.

## 핵심 요지

- Anthropic 스스로 자사 모델의 기본 UI 출력을 지칭하기 위해 차용한 용어이다.
- 예측 가능한 레이아웃, Inter 폰트, 보라색 그라데이션, 둥근 모서리 등 '분포상 평균에 가까운' 결과물로 수렴하는 현상을 의미한다.
- 이 현상을 타파하기 위해 극단적인 미학적 다양성과 구체적인 금지 목록을 명시한 `frontend-design` 스킬이 탄생하였다.

## 상세

LLM은 본질적으로 학습 데이터의 확률적 평균을 추구하는 특성이 있기 때문에, AI 코딩 에이전트(예: Claude Code)에게 프런트엔드 UI를 요청하면 디자인의 엣지(edge)나 고유한 아이덴티티가 거세된 가장 무난하고 흔한 디자인을 내놓게 된다. Anthropic의 엔지니어들은 이를 "AI slop" 미학이라고 명명했으며, [문서](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%EC%97%90%20%EA%B0%80%EC%9E%A5%20%EB%A7%8E%EC%9D%B4%20%EC%84%A4%EC%B9%98%EB%90%9C%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%AC%B8%EC%84%9C.%20%EB%8B%A8%2030%EC%A4%84%EC%A7%9C%EB%A6%AC%EC%98%80%EB%8B%A4.%20Anthropic%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%20%EB%91%90%20%EB%AA%85%EC%9D%B4%20%EC%8D%BC%EB%8B%A4.%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EB%93%A4%EC%9D%80%20%EC%95%84%EC%A7%81%20%EC%9D%BD%EC%A7%80%20%EC%95%8A%EC%95%98%EB%8B%A4-ko.md#L65)에서 문제 자체를 공식적으로 인정했다. 이를 극복하기 위해 만든 30줄짜리 `SKILL.md`는 "절대 평범한 선택으로 수렴하지 말라(NEVER converge on common choices)"고 지시하며 AI 디자인의 다양성을 강제한다.

## 예시

- **금지 대상 패턴**: Inter, Roboto, Arial 폰트, 시스템 폰트, 흰 배경 위 보라색 그라데이션, 예측 가능한 3단 카드 레이아웃 등.
- **권장 패턴**: Brutally minimal, Maximalist chaos, Brutalist/raw 등 명확한 미학적 입장을 취한 디자인.

## 충돌

- **다양성의 역설**: AI Slop을 피하기 위해 `frontend-design` 스킬이 도입되었으나, 27만 명이 넘는 개발자가 [동일한 30줄의 프롬프트](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%EC%97%90%20%EA%B0%80%EC%9E%A5%20%EB%A7%8E%EC%9D%B4%20%EC%84%A4%EC%B9%98%EB%90%9C%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%AC%B8%EC%84%9C.%20%EB%8B%A8%2030%EC%A4%84%EC%A7%9C%EB%A6%AC%EC%98%80%EB%8B%A4.%20Anthropic%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%20%EB%91%90%20%EB%AA%85%EC%9D%B4%20%EC%8D%BC%EB%8B%A4.%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EB%93%A4%EC%9D%80%20%EC%95%84%EC%A7%81%20%EC%9D%BD%EC%A7%80%20%EC%95%8A%EC%95%98%EB%8B%A4-ko.md#L81)를 사용함으로써 결국 또 다른 형태의 줄기 수렴(root convergence)이 일어날 수 있다.
- **엔터프라이즈 환경과의 충돌**: 'Maximalist chaos' 등은 특색 있는 랜딩 페이지에는 적합할지 모르나, 대다수의 소프트웨어가 속하는 엔터프라이즈나 내부 대시보드 환경("production-grade")에는 배포하기 어렵다는 모순이 있다.

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[LLM Wiki 운영 패턴]]

## 출처

- [raw/2026년에 가장 많이 설치된 디자인 문서. 단 30줄짜리였다. Anthropic 엔지니어 두 명이 썼다. 디자이너들은 아직 읽지 않았다-ko.md](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%EC%97%90%20%EA%B0%80%EC%9E%A5%20%EB%A7%8E%EC%9D%B4%20%EC%84%A4%EC%B9%98%EB%90%9C%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%AC%B8%EC%84%9C.%20%EB%8B%A8%2030%EC%A4%84%EC%A7%9C%EB%A6%AC%EC%98%80%EB%8B%A4.%20Anthropic%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%20%EB%91%90%20%EB%AA%85%EC%9D%B4%20%EC%8D%BC%EB%8B%A4.%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EB%93%A4%EC%9D%80%20%EC%95%84%EC%A7%81%20%EC%9D%BD%EC%A7%80%20%EC%95%8A%EC%95%98%EB%8B%A4-ko.md)
