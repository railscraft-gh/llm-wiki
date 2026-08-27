---
type: concept
status: evergreen
core: true
tags:
- llm
- design
aliases:
- 인간-AI 상호작용 설계 원칙
- AI 디자인 원칙
- 인간-AI-상호작용-설계-원칙-(Human-AI-Interaction-Design-Principles)
sources:
- raw/39 principles for designing human-AI interaction.md
- raw/How designers need to change for an AI-powered world.md
created: 2026-07-15
updated: 2026-07-15
---
# 인간-AI 상호작용 설계 원칙 (Human-AI Interaction Design Principles)

## 한 줄 정의

동일한 입력에서도 서로 다른 출력을 만들어낼 수 있는 확률적이고 비결정론적인 AI 시스템의 본질을 보완하여, 사용자가 AI를 적절하게 신뢰하고 오류를 통제하며 협업할 수 있도록 돕는 실무 디자인 프레임워크.

## 핵심 요지

1. **확률적 기반 수용**: AI의 본질은 결정론적 고정 함수가 아니라 확률적 서비스이므로, 결과물의 다양성과 가변성을 에러가 아닌 선택권(예: 여러 초안 제공, 버전 히스토리)으로 디자인에 수용해야 한다.
2. **[[조율된 신뢰 (Calibrated Trust)]]**: 사용자가 시스템을 신뢰하는 수준이 실제 시스템의 정확도와 일치해야 한다. 과도한 맹신(overreliance)과 지나친 불신(underuse)을 모두 방지하는 것이 UI의 핵심 목표다.
3. **통제권 및 주도권 보존**: AI의 출력을 확정안이 아닌 '초안(Draft)'으로 포지셔닝하고, 승인/거부/수정/실행 취소를 쉽게 만들어 최종 의사결정의 책임이 사용자에게 있음을 명확히 해야 한다.

## 상세

학계의 HCI 이론(Horvitz의 혼합 주도형 시스템, MS의 18가지 가이드라인, Google PAIR 등) 및 OpenAI/Anthropic의 프런티어 모델 명세(Model Spec)를 통합하여 도출한 9대 설계 범주는 다음과 같다.

### 1. Probabilistic Foundation (확률적 기반)
- **비교 우위 영역 활용**: 모호하고 비정형적인 텍스트 요약, 중복 분류, 맥락 검색 등에는 AI를 도입하되, 정확도가 생명인 비즈니스 데이터 관리 영역은 결정론적 UI를 고수한다.
- **상호작용 매칭**: 위험도가 낮은 작업은 인라인 제안(inline suggestion), 복잡한 다단계 작업은 명확한 검증 체크포인트를 제공한다.

### 2. Expectation Setting (기대치 설정)
- **한계점 명시**: 시스템이 해결할 수 있는 영역뿐 아니라 데이터 누락이나 신뢰성이 떨어지는 한계점을 명확히 밝힌다.
- **빈 도화지 극복 (Blank-canvas)**: 텅 빈 프롬프트 창 대신 추천 질문, 시작 템플릿, 최근 작업 히스토리를 웨이파인더(wayfinder)로 제공한다.
- **인격화 지양**: AI를 과도하게 의인화하면 비현실적인 기대감을 유발하므로 정교한 통계적 도구로서의 본질을 정직하게 밝힌다.

### 3. Calibrated Trust ([[조율된 신뢰]])
- **출처 추적 (Provenance)**: 출력물이 도출된 참조 문서, 연동 도구 등의 메타데이터를 인라인 인용(citation)으로 제공하여 "검증해 보라"의 구조를 만든다.
- **직관적 증거 제시**: 숫자로 된 백분율 신뢰도 점수(%)보다 참조한 원본 텍스트 문단이나 실제 변경된 코드 라인 등을 노출하는 것이 신뢰 조율에 훨씬 효과적이다.
- **검증 비용 최소화**: 차이 대비표(diff) 제공, 툴팁을 통한 원문 조각 노출 등을 통해 교차 검증에 드는 인지 비용을 줄인다.
- **상업적 투명성**: 시스템이 플랫폼의 이익(예: 광고 유도, 불필요한 결제)을 목적으로 사용자에게 답변을 제안해서는 안 된다.

### 4. Control & Agency (통제 및 주도권)
- 사용자가 언제든 수동 개입할 수 있고 AI의 오작동을 즉시 롤백할 수 있는 권한을 제공해야 한다.
- **WebMCP 자율성 경계 설정**: 브라우저 레벨에서 AI에게 도구를 노출할 때 자동 전송 옵션(`toolautosubmit`)의 적용 기준을 정밀하게 통제한다. 검색이나 장바구니 담기 등 위험도가 낮은 읽기/가역 작업은 자동화를 허용하되, 결제/계정 변경/삭제와 같은 고위험 파괴 연산은 승인 단계를 반드시 우회(omit autosubmit) 설계하여 주도권을 사용자에게 둔다.
- **시각적 투명성 제공**: AI 에이전트가 브라우저 DOM 영역의 폼을 제어할 때 `:tool-form-active` 및 `:tool-submit-active` 같은 의사 클래스(CSS) 스타일을 반영하여, 백그라운드 연산 진행 과정을 투명하게 사용자에게 노출해야 한다.

## 예시

- **Midjourney**: 프롬프트 입력 시 4장의 이미지 그리드를 항상 반환하여 확률적 가변성을 선택권으로 활용.
- **[[NotebookLM]]**: 인용 번호 클릭 시 소스 문서의 정확한 해당 페이지 문단으로 이동시켜 교차 검증 비용 최소화.
- **Gmail Gemini (초안 기능)**: 완성된 답변 대신 '초안(Draft)'으로 명명함으로써 사용자가 이메일을 발송하기 전 최종 책임감을 갖게 유도.

## 관련 노트

- [[UI UX 디자인 AI 워크플로우]]
- [[디자이너 생존 전략 (2026-2030)]]
- [[디자인의 크래프트 위기]]

## 출처

- OpenAI Model Spec (2025-12-18) [OpenAI Model Spec](https://model-spec.openai.com/2025-12-18.html)
- Horvitz, E. (1999). Mixed-Initiative Interaction. [Horvitz Research](https://erichorvitz.com/chi99horvitz.pdf)
- Microsoft Research (2019). Guidelines for Human-AI Interaction. [MS Research](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)
