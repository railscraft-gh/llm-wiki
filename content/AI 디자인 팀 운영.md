---
type: workflow
status: evergreen
core: false
tags:
  - design
  - workflow
  - ai
  - product
aliases:
  - AI 디자인 팀 빌드 방식
  - 디자인 팀 운영 방식
sources:
  - 디자인 팀이 만드는 방식을 다시 짜기 - 출판형 다듬기
created: 2026-05-29
updated: 2026-05-29
---

# AI 디자인 팀 운영

## 한 줄 정의

AI 디자인 팀 운영은 사람 중심의 순차적 handoff를 줄이고, intent-based design과 도구 체계를 통해 디자인 팀 전체의 빌드 방식을 다시 설계하는 workflow다.

## 핵심 요지

- AI가 들어오면 디자인 팀의 질문은 "누가 그리느냐"에서 "누가 무엇을 결정하느냐"로 바뀐다.
- 좋은 프로세스는 화면을 먼저 그리는 것이 아니라 사용자의 의도와 결과를 먼저 명시한다.
- 디자인 시스템은 component catalog보다 intent, block, primitive, review gate를 관리하는 쪽으로 이동한다.
- 핵심 변화는 사람을 빼는 것이 아니라, 사람이 정말 중요한 판단에 집중하게 만드는 것이다.

## 상세

원문은 디자인 팀을 세 단계로 다시 본다. 먼저 프로세스 단계에서는 사람을 거치며 흘러가던 작업이 AI와 도구로 자동화된다. 그다음 제품 단계에서는 사용자의 역할과 시스템이 제공해야 할 결과가 다시 정의된다. 마지막으로 시스템 단계에서는 tokens, components, blocks, artifacts, threads 같은 계층을 사용해 의도와 결과를 조합한다.

이 workflow의 핵심은 descriptive design이다. "어떻게 보여 줄지"가 아니라 "무엇을 하게 해야 하는지"를 먼저 정의하고, 시스템이 적절한 구성 요소를 고르게 한다. 그 결과 design primitive는 디자이너가 보는 문서가 아니라 AI가 캔버스에 손대기 전에 읽는 governance가 된다.

또 다른 축은 툴체인이다. 문제 공간을 정의하는 도구, 기능 명세를 만드는 도구, 실제 surface를 만드는 도구를 연결해 연구→명세→프로토타입을 한 흐름으로 만든다. 이렇게 되면 디자이너는 픽셀과 레이아웃보다 intent, judgment, exception handling에 더 많은 시간을 쓸 수 있다.

## 예시

- 도메인 분석: 역할, 규제, 실패 모드를 먼저 매핑하고 그 결과를 설계 입력으로 쓴다.
- 명세 생성: 어떤 사용자 행동을 허용하고 어떤 자율성 수준을 줄지 먼저 정한다.
- 프로토타입: mockup이 아니라 실제 동작 가능한 surface를 빠르게 만들고, 리뷰는 그 위에서 진행한다.

## 충돌

- 전통적 디자인 시스템의 픽셀 단위 일관성과는 일부 충돌할 수 있다. 대신 intent와 review gate를 통해 진화하는 일관성을 얻는다.

## 관련 노트

- [[AI 시대 디자인 시스템]]
- [[AI 디자인 역할 맵]]
- [[AI Experience Architect]]
- [[디자인 에이전트 5종]]
- [[AI 기본값 수용과 오버라이드 전략]]

