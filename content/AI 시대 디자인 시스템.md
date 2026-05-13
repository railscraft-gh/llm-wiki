---
type: concept
status: evergreen
core: true
tags:
 - llm
 - design-system
 - product
aliases:
 - AI-native design system
 - AI 디자인 시스템
 - 에이전트용 디자인 시스템
sources:
 - raw/AI로_만든_제품이_안_팔리는_이유.md
 - https://github.com/google-labs-code/design.md
 - https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/
created: 2026-05-07
updated: 2026-05-07
---

# AI 시대 디자인 시스템

## 한 줄 정의

AI 시대 디자인 시스템은 사람이 화면을 일일이 그리는 규칙집을 넘어, AI가 반복 생성해도 제품의 시각 언어와 사용감을 유지하게 하는 실행 가능한 맥락이다.

## 핵심 요지

- AI가 코드를 빠르게 만들수록 제품 차별점은 구현 속도보다 시각 언어, 사용자 흐름, 판단 기준으로 이동한다.
- 디자인 시스템은 색상, 타이포그래피, spacing, icon style, component state를 정해 [[AI Slop]]을 줄인다.
- [[DESIGN.md 운영 원칙]]처럼 agent-readable 형식으로 저장하면 AI가 디자인 의도를 매번 새로 추측하지 않아도 된다.
- 디자이너의 역할은 픽셀 생산자에서 시스템 설계자와 품질 판단자로 이동한다.

## 상세

raw 문서는 AI가 평균적인 UI를 빠르게 만들수록 디자인 시스템이 더 중요해진다고 주장한다. "코드는 흔해졌지만 시스템은 흔해지지 않았다"는 관점이다. 초기에 필요한 값은 거대하지 않다. raw의 권장 출발점은 색상 5-6개, font size 6단계, spacing 8단계, 일관된 icon set, 그리고 이 규칙을 DESIGN.md로 옮기는 것이다.

Google Stitch는 2026-03-18 공식 글에서 DESIGN.md를 design rules를 export/import하는 agent-friendly markdown file로 소개했다. Google Labs의 `design.md` repository도 YAML token과 Markdown rationale을 결합해 coding agent에게 visual identity를 제공하는 형식으로 설명한다.

## 예시

- SaaS dashboard: 표, 필터, toast, modal의 spacing과 density를 먼저 정하고, AI에게 새 화면을 만들 때 같은 token을 쓰게 한다.
- 한국어 서비스: Pretendard 같은 한글 본문 font, line-height, 긴 버튼 label의 줄바꿈 규칙을 DESIGN.md에 적어 버튼 깨짐을 줄인다.
- AI 작업 검증: 결과물에서 token 밖 색상, 임의 radius, 다른 icon style이 생기면 디자인 시스템 위반으로 수정한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI Slop]]
- [[DESIGN.md 운영 원칙]]
- [[Vibe Coding과 Agentic Engineering]]
- [[AI 코딩 에이전트 검증 전략]]
- [[AI 네이티브 사용자]]

