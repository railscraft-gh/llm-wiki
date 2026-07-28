---
type: concept
status: draft
core: false
tags:
  - llm
aliases: []
sources: ["raw/20 Things NotebookLM Can Do That Most People Never Try.md"]
created: 2026-07-29
updated: 2026-07-29
---

# 연구 파트너 (Research Partner)

## 한 줄 정의
[[연구 파트너(Research Partner)]]란 사용자가 제공한 모든 소스 문서 자료를 정확하게 맥락적으로 이해하고, 단순 요약을 넘어 입체적이고 다각적인 심층 상호작용을 통해 사용자의 인지 능력을 확장하고 더 깊은 통찰을 이끌어내도록 돕는 AI 협업 모델이다.

## 핵심 요지
- **도구 중심에서 협업 파트너로의 패러다임 전환**: [[NotebookLM]]과 같은 최신 AI 도구는 단순 요약기가 아니라, 사용자의 예리한 역질문과 다각적 탐색에 즉각적으로 반응하는 능동적 연구 파트너로 기능한다.
- **다각도 검증 및 입체적 상호작용**: AI를 활용할 때 우호적 요약에만 머물지 않고, 오해 유도 검증, 회의주의자 시선(피어 리뷰어), load-bearing assumption(핵심 전제) 포착, 모순점 추적, 생략된 맹점(what's missing) 확인 등 다차원적 프롬프트를 사용하여 텍스트의 본질과 약점을 스스로 깨닫게 만든다.
- **실무 지향적 액션 도출**: 자료의 주요 정보에 대한 중요도를 판단하는 "so what" 필터, 바쁜 임원/12세 어린이 등 특정 청중 맞춤형 변환, 토론 대비 요약표 구축, 실행 가능한 대안(actionable options) 도출 등을 통해 지식을 실질적인 의사결정으로 전환한다.
- **교차 문서 분석 및 구체적 스키마 제안**: 단일 문서 분석보다는 다수의 문서를 묶어 유기적인 교차 분석(cross-reference)을 수행하고, 표 형식 등 구체적인 아웃풋 포맷(output schema)을 지정하며, 피드백을 주고받는 반복적 핑퐁식 상호작용(back-and-forth)을 수행해야 AI의 잠재력을 극대화할 수 있다.

## 상세
- **20가지 실무 지향적 심층 탐색 프롬프트**:
  1. **[[역발상 오해 검증]]**: 개념의 의도적인 오해 버전을 분석함으로써 올바른 본질을 더 깊게 이해하도록 유도.
  2. **회의주의자의 시선(The skeptic's pass)**: 피어 리뷰어의 관점에서 논증의 약점과 허점을 비판적으로 지적.
  3. **[[그래서 어쩌라고 필터 (The so what filter)]]**: 중요도가 떨어지는 정보를 과감히 배제하고 실무에서의 실질적 중요성 우선순위를 산정.
  4. **특정 청중 맞춤형 변환(Translate for a specific audience)**: 12세 어린이, 바쁜 임원, 비모국어 화자 등 청중에 맞춘 설명 뉘앙스 최적화.
  5. **핵심 전제 파악(Find the load-bearing assumption)**: 사실이 아닐 경우 논증 전체를 무너뜨릴 수 있는 유일한 숨겨진 전제를 발굴.
  6. **토론 대비 요약표 구축(Build a debate prep sheet)**: 예상 반론และ 이에 맞설 논리적 대응책 매핑.
  7. **시의성 검증(Spot the outdated parts)**: 변화 속도가 빠른 기술 분야 등에서 현재 기준으로 유효성을 잃었을 법한 내용을 필터링.
  8. **행동 중심적 의사결정 도출(Turn it into a decision)**: 묘사나 진단을 넘어 실무적 대안(options)과 구체적 실행 방안으로 전환.
  9. **통념과의 비교 분석(Make a before-vs-after comparison)**: 해당 정보가 시장의 통념(conventional wisdom) 대비 지니는 독창성과 과장 여부를 검증.
  10. **역질문 리스트 생성(Generate the questions you should be asking)**: 미처 인지하지 못한 실무적 맹점을 파악하는 심층 역질문 확보.
  11. **미래 복기용 메모(The "explain to future me" note)**: 6개월 뒤의 자신이 핵심 맥락과 유용성을 단번에 인지할 수 있도록 정보 압축.
  12. **이해관계자/주체 관계망 지도(Map the cast of characters)**: 다수의 인물과 단체 간의 얽힌 관계를 일목요연하게 맵핑.
  13. **확증 편향 탈피(The "what would change my mind" prompt)**: 본인의 신념과 가정을 완벽히 뒤엎을 수 있는 반증과 팩트를 발굴.
  14. **전문 용어 정의 및 빈도수 정렬(Build a glossary on the fly)**: 중심 어휘 분석을 통한 신속한 문맥 파악.
  15. **내부 모순점 추적(Find the contradiction)**: 집필 주체가 여럿이거나 분량이 방대한 자료의 전후 논리적 상호 불일치 탐지.
  16. **대화형 변환 학습(Turn it into a conversation)**: 논쟁이 오가는 대화체 시나리오로 변형하여 입체적 이해와 지루함 탈피 도모.
  17. **단 한 장의 슬라이드 제한(The one-slide challenge)**: 극단적 수준으로 우선순위를 좁혀 지식의 핵심 정수(essence)만 추출.
  18. **비유 및 은유 활용(Find the analogy that's already there)**: 복잡한 이론이나 수식을 직관적인 일상 비유로 대체 및 시각화.
  19. **누락 및 생략 맹점 분석(Build a "what's missing" list)**: 문서가 고의나 실수로 다루지 않고 회피한 쟁점이나 팩트 규명.
  20. **후속 학습 리스트 확보(Create your own follow-up reading list)**: 탐구의 지평을 넓히기 위해 이어갈 지적 호기심 분야 제안.

- **파트너십 극대화를 위한 실무 원칙**:
  - **교차 분석(Cross-Reference)**: [[NotebookLM]] 등의 도구에 둘 이상의 상이한 자료들을 병합 업로드하여 문서 간의 시너지와 숨겨진 맥락을 도출한다.
  - **구체적 스키마 지정**: 출력 아웃풋의 스키마(표 형식, 특정 개수의 불릿 포인트 등)를 좁혀 실무에 바로 쓸 수 있는 텍스트를 요구한다.
  - **핑퐁식 반복 수정(Back-and-forth Interaction)**: AI의 첫 결과물에 안주하지 않고 지속해서 피드백(push back)을 주며 논리와 표현을 가듬는다.

## 예시
- **[[NotebookLM]]을 이용한 논문 분석 시나리오**:
  1. 새로운 LLM 아키텍처 논문을 읽을 때 단순히 요약을 지시하는 대신, *"이 아키텍처가 제안하는 가설 중 사실이 아닐 경우 전체 주장이 무너지는 단 하나의 핵심 전제(load-bearing assumption)를 찾아줘"* 라고 질문한다.
  2. 이를 통해 논문의 한계점과 실험 환경의 특수성(예: 특정 하드웨어에서만 동작하는 가정)을 즉시 파악하여 연구의 실제 유효 영역을 빠르게 규명할 수 있다.

## 관련 노트
- [[NotebookLM]]
- [[역발상 오해 검증]]
- [[그래서 어쩌라고 필터 (The so what filter)]]
- [[AI 세컨드 브레인]]
- [[의도 설계]]
- [[RAG]]
- [[선 요약 강제 원칙(Summary-first rule)]]

## 출처
- `raw/20 Things NotebookLM Can Do That Most People Never Try.md`
