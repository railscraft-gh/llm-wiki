---
aliases:
- AI 디자인 팀 빌드 방식
- 디자인 팀 운영 방식
core: false
created: 2026-05-29
sources:
- 디자인 팀이 만드는 방식을 다시 짜기 - 출판형 다듬기
- raw/How top companies are using AI in their design workflows.md
- raw/The Next 5 Years. How To Stay Relevant Between 2026–2030 As A Designer.md
- raw/I will never walk into a backend interview without solving these 20 questions..md
- raw/Most Developers Are Solving the Wrong Problem.md
- raw/The Signs of a Pseudo-Smart Person Are Easy To Spot.md
- raw/디자인 팀이 만드는 방식을 다시 짜기 - 출판형 다듬기.md
- raw/My Complete Productivity Stack in 2026. Every Tool I Actually Use, What I Pay,
  and What I Rejected.md
- raw/산만하고 과자극에 시달리던 내 뇌를 고친 7가지 - 출판형 다듬기.md
- raw/The 10 Engineering Papers Behind Netflix, Uber, Amazon & Google.md
- raw/Design’s craft crisis. senior designers built it.md
- raw/The Agentic AI Engineer Roadmap for 2026. Skills, Stack, and Order.md
- raw/7 Coding Patterns I Stole From Senior Engineers.md
- raw/1 Aviation Rule That Will Instantly Improve Your Focus.md
status: evergreen
tags:
- design
- workflow
- ai
- product
type: workflow
updated: '2026-06-22'
---

# AI 디자인 팀 운영

## 한 줄 정의

AI 디자인 팀 운영은 사람 중심의 순차적 handoff를 줄이고, intent-based design과 도구 체계를 통해 디자인 팀 전체의 빌드 방식을 다시 설계하는 workflow다.

## 핵심 요지

- AI가 들어오면 디자인 팀의 질문은 "누가 그리느냐"에서 "누가 무엇을 결정하느냐"로 바뀐다.
- 좋은 프로세스는 화면을 먼저 그리는 것이 아니라 사용자의 의도와 결과를 먼저 명시한다.
- 디자인 시스템은 component catalog보다 intent, block, primitive, review gate를 관리하는 쪽으로 이동한다.
- 핵심 변화는 사람을 빼는 것이 아니라, 사람이 정말 중요한 판단에 집중하게 만드는 것이다.
- **플레이북 및 지침 문서화**: AI를 팀 프로세스에 정착시키기 위해 AI 가이드라인, 오버라이드 지시어가 포함된 지침(instruction) 파일 및 플레이북을 초기부터 구축하고 공유하여 내부 표준을 확립한다.
- **직무 경계의 융합**: AI로 인해 직무 경계가 희석된다. PM이 UI 기획과 개념 검증(바이브 코딩)을 직접 처리하고, 디자이너는 전략적 전제 조건 설정(upstream)에 개입하는 Product Owner/Problem Solver 중심의 협업 체제로 전환된다.

## 상세

원문은 디자인 팀을 세 단계로 다시 본다. 먼저 프로세스 단계에서는 사람을 거치며 흘러가던 작업이 AI와 도구로 자동화된다. 그다음 제품 단계에서는 사용자의 역할과 시스템이 제공해야 할 결과가 다시 정의된다. 마지막으로 시스템 단계에서는 tokens, components, blocks, artifacts, threads 같은 계층을 사용해 의도와 결과를 조합한다.

이 workflow의 핵심은 descriptive design이다. "어떻게 보여 줄지"가 아니라 "무엇을 하게 해야 하는지"를 먼저 정의하고, 시스템이 적절한 구성 요소를 고르게 한다. 그 결과 design primitive는 디자이너가 보는 문서가 아니라 AI가 캔버스에 손대기 전에 읽는 governance가 된다.

또한, AI를 실무 팀에 도입할 때 초기부터 **가이드라인과 플레이북(예: Meta의 Llama 기반 플레이북)**을 제작하고 지침(instruction) 문서화 체계를 다지는 것이 중요하다. 디자이너가 AI에 단순히 코딩 요청을 하는 것에 그치지 않고, 시스템 컴포넌트와 변수, 오버라이드(override) 지시어를 명문화하여 AI의 폭주를 방지하는 거버넌스 규칙을 구축한다.

이러한 도구 체인과 가이드라인 정착은 직무의 경계 융합을 가속한다. PM이 기본적인 UI 디자인을 구성하고 개념 검증(Proof of Concept) 코드를 직접 작성해 개발자에게 넘겨주면서 진정한 제품 소유자(Product Owner)로 변모하게 되며, 디자이너는 단순 화면 픽셀 배치에 시간을 쓰는 대신 타 부서와 **공유 문서(running doc)를 운영하는 마이크로 얼라이언스(Micro-alliances)**를 맺어 전략적 의사결정을 주도한다.

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
- [[디자인의 크래프트 위기]]
- [[디자이너 생존 전략 (2026-2030)]]
- [[UI UX 디자인 AI 워크플로우]]

