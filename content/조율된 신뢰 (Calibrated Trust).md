---
type: concept
status: evergreen
core: true
tags:
- llm
- design
aliases:
- 조율된 신뢰
- Calibrated Trust
- 신뢰 조율
- 조율된-신뢰-(Calibrated-Trust)
sources:
- raw/39 principles for designing human-AI interaction.md
created: 2026-07-15
updated: 2026-07-15
---
# [[조율된 신뢰]] (Calibrated Trust)

## 한 줄 정의

사용자가 AI 시스템을 신뢰하는 수준(trust)과 실제 그 시스템이 지닌 신뢰성(reliability)을 정밀하게 일치시켜, 시스템 결함을 맹신하는 오남용과 유용한 기능마저 배척하는 과소사용을 예방하는 상호작용 설계 방법론.

## 핵심 요지

1. **오남용(Overreliance)과 과소사용(Underuse) 방지**: AI가 그럴듯하게 내뱉은 거짓말(환각)을 확인 없이 맹신하여 중대한 오류로 이어지는 일(오남용)을 막고, 동시에 가끔 있는 결함 탓에 생산성을 높여주는 도구 사용을 전면 포기하는 일(과소사용) 사이의 균형을 맞춘다.
2. **백분율 수치화 피하기**: AI의 답변 옆에 "신뢰도 95%"와 같은 정량적 점수 카운터를 띄우는 상호작용은 오히려 결함이 있는 답변에 대한 인간의 맹신을 인위적으로 자극한다. 단순 수치 대신 실제 정보가 가공된 원본 흔적(diff, 원문 등)을 노출하는 것이 신뢰 조율에 훨씬 유리하다.
3. **원천 근거(Provenance)의 인라인 인용**: AI의 문장 단락마다 출처 링크를 결합해, 사용자가 마우스를 올리거나 클릭해 원본 데이터 조각을 1초 만에 대조(검증 비용 최소화)하게 만들어 신뢰의 패러다임을 "믿으라"에서 "검증해 보라"로 바꾼다.

## 상세

### [[조율된 신뢰]]의 4대 작동 조건
- **검증 비용의 최소화**: 사용자가 원래 소스 문서를 뒤져보는 교차 검증 행위에 인지적 부하(Friction)가 크면 검증을 포기한다. 툴팁 제공이나 파일 특정 행(line) 하이라이팅을 통해 시선 이동만으로 오류를 확인하게 설계해야 한다.
- **정당한 반박과 견제 (Honest Pushback)**: 사용자의 부적절하거나 무리한 지시에 AI가 무조건 동조("네, 맞습니다")하지 않고, 모델 고유의 한계와 데이터 누락을 솔직하게 밝혀 반박하도록 시스템 프롬프트 및 UI 경계를 조율한다.
- **상업적 투명성**: 시스템이 플랫폼 스스로의 숨겨진 이익(예: 광고 클릭 유도, 부가 결제 유인)을 의도로 품는 순간 적절한 신뢰 관계는 즉각 붕괴된다. 오직 사용자의 작업 달성만을 지원해야 한다.
- **초안(Draft)으로서의 포지셔닝**: 결과물에 '완료', '정답' 대신 '초안', '제안' 등의 단어를 사용하여 사용자가 발송/배포 전에 스스로 마지막 책임을 느끼도록 환기한다.

## 예시

- **[[NotebookLM]]**: 인용 번호에 마우스를 올리면 가져온 원문 구절을 팝업으로 노출하고, 클릭 시 해당 소스 PDF 문서의 구체적인 위치로 스크롤 이동시켜 대조 인지 비용을 최소화함.
- **Perplexity**: 답변 문단 곳곳에 출처 사이트 명칭과 번호를 붙여 원문 데이터를 바로 교차 검토할 수 있도록 레이아웃을 체인화함.

## 관련 노트

- [[인간-AI 상호작용 설계 원칙 (Human-AI Interaction Design Principles)]]
- [[AI Experience Architect]]
- [[AI 기본값 수용과 오버라이드 전략]]

## 출처

- Microsoft Research (2019). Guidelines for Human-AI Interaction. [MS Research](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)
- "39 principles for designing human-AI interaction.md" (2026-07-15)
