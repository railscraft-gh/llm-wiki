---
aliases:
- AI 디자인 팀 빌드 방식
- 디자인 팀 운영 방식
- AI-디자인-팀-운영
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
updated: 2026-07-10
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
- 화면 픽셀과 레이아웃 배치 중심의 전통적 기획을 포기하고, 목적과 기획 의도를 담아 의무와 결과를 기술하는 처방형 디자인(descriptive design) 체제로 전향. [출처: 디자인 팀이 만드는 방식을 다시 짜기]
- 디자인 시스템의 계층을 Tokens -> Components -> Blocks -> Artifacts -> Threads 구조로 설계하여 AI가 거버넌스 룰에 맞춰 자동 조립하게 제어. [출처: 디자인 팀이 만드는 방식을 다시 짜기]

## 상세

원문은 디자인 팀을 세 단계로 다시 본다. 먼저 프로세스 단계에서는 사람을 거치며 흘러가던 작업이 AI와 도구로 자동화된다. 그다음 제품 단계에서는 사용자의 역할과 시스템이 제공해야 할 결과가 다시 정의된다. 마지막으로 시스템 단계에서는 tokens, components, blocks, artifacts, threads 같은 계층을 사용해 의도와 결과를 조합한다.

이 workflow의 핵심은 descriptive design이다. "어떻게 보여 줄지"가 아니라 "무엇을 하게 해야 하는지"를 먼저 정의하고, 시스템이 적절한 구성 요소를 고르게 한다. 그 결과 design primitive는 디자이너가 보는 문서가 아니라 AI가 캔버스에 손대기 전에 읽는 governance가 된다.

또한, AI를 실무 팀에 도입할 때 초기부터 **가이드라인과 플레이북(예: Meta의 Llama 기반 플레이북)**을 제작하고 지침(instruction) 문서화 체계를 다지는 것이 중요하다. 디자이너가 AI에 단순히 코딩 요청을 하는 것에 그치지 않고, 시스템 컴포넌트와 변수, 오버라이드(override) 지시어를 명문화하여 AI의 폭주를 방지하는 거버넌스 규칙을 구축한다.

이러한 도구 체인과 가이드라인 정착은 직무의 경계 융합을 가속한다. PM이 기본적인 UI 디자인을 구성하고 개념 검증(Proof of Concept) 코드를 직접 작성해 개발자에게 넘겨주면서 진정한 제품 소유자(Product Owner)로 변모하게 되며, 디자이너는 단순 화면 픽셀 배치에 시간을 쓰는 대신 타 부서와 **공유 문서(running doc)를 운영하는 마이크로 얼라이언스(Micro-alliances)**를 맺어 전략적 의사결정을 주도한다.

### 의도 기반 디자인 시스템 계층 구조 (Composition Hierarchy)
1. **Tokens & Design Primitives** (최하위): principles, taste, density rules, iconography, copy voice 등을 AI가 해석할 기계 가독 규칙 문서로 정의. 명시적인 오미션(Intentional Omission, never rules)을 포함하여 AI의 캔버스 폭주 차단.
2. **Components**: 고정된 개별 요소.
3. **Blocks**: 목적을 품은 구조 단위. 블록 내부의 컨테이너, 레이아웃, 인터랙션은 불변(Invariant)으로 보존하며, 라벨/아이콘/데이터 필드는 가변 슬롯(Slots) 형태로 맥락에 맞게 동적 할당.
4. **Artifacts**: 사용자가 실제로 이동하고 탐색하는 면(Surface).
5. **Threads**: 사용자가 달성하려는 하나의 완전한 비즈니스 목표 단위.

### 의도 기반 디자인 컴포넌트 충돌 우선순위 규격
- 기존에 생성되어 실존하는 블록(Existing block)의 우선순위가 컴포넌트 레벨 결정(Component-level decision)보다 우위에 있고, 컴포넌트 결정이 토큰 레벨 결정(Token-level decision)을 오버라이드하며, 전역 디자인 프리미티브(Design primitive)가 시스템 전체를 최상위 거버넌스로 제약함.

### 상호 연결된 3대 툴체인 파이프라인
- **도구 1 (Problem Space Map)**: 도메인 내 모든 Job-to-be-done, 규제 요건, AI 구현 가능성, 실패 모드를 정의하고 자율성 수준(Autonomy level) 분류.
- **도구 2 (Specification Tool)**: 타겟 작업과 사용자를 지정하여 에이전트 빌드 경로(완전 자율 vs HITL vs 협업 모드)를 자동 판정하고 What & Why 명세서 조립.
- **도구 3 (Surface Builder)**: 명세를 컴포넌트/디자인 프리미티브와 결합해 wireframe이 아닌 데이터가 흐르는 동작 prototype으로 자동 컴파일.

### 패턴 자동 중복 제거 및 인간 승인 게이트
- 여러 프로젝트에서 분리 생성되는 신규 UI 구조 패턴에 기계적으로 빈도 수(Frequency count)를 측정해 자동 중복 제거를 지원함. 검증된 패턴은 도구 라이브러리로 승격(promote)되기 전, 반드시 인간 디자이너의 최종 승인 게이트(Human-only gate)를 강제하여 거버넌스를 엄수함.

## 예시

- 도메인 분석: 역할, 규제, 실패 모드를 먼저 매핑하고 그 결과를 설계 입력으로 쓴다.
- 명세 생성: 어떤 사용자 행동을 허용하고 어떤 자율성 수준을 줄지 먼저 정한다.
- 프로토타입: mockup이 아니라 실제 동작 가능한 surface를 빠르게 만들고, 리뷰는 그 위에서 진행한다.

### Block Slotting 실무 적용
- care gap card, task row, protocol item을 위해 각기 개별 디자인 블록을 파편화해 만들지 않고, 뼈대가 되는 하나의 구조적 'Container Block'을 불변으로 유지한 상태에서 내부 slot content 영역만 도메인 맥락(labels, icons)에 맞게 주입해 시스템 복잡도를 혁신적으로 감축시킴.

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

## 출처
- 디자인 팀이 만드는 방식을 다시 짜기 - 출판형 다듬기
- How top companies are using AI in their design workflows.md
- The Next 5 Years. How To Stay Relevant Between 2026–2030 As A Designer.md
- [I will never walk into a backend interview without solving these 20 questions.](file:///Users/railscraft/Obsidian/raw/I%20will%20never%20walk%20into%20a%20backend%20interview%20without%20solving%20these%2020%20questions..md)
- [Most Developers Are Solving the Wrong Problem](file:///Users/railscraft/Obsidian/raw/Most%20Developers%20Are%20Solving%20the%20Wrong%20Problem.md)
- [The Signs of a Pseudo-Smart Person Are Easy To Spot](file:///Users/railscraft/Obsidian/raw/The%20Signs%20of%20a%20Pseudo-Smart%20Person%20Are%20Easy%20To%20Spot.md)
- [My Complete Productivity Stack in 2026](file:///Users/railscraft/Obsidian/raw/My%20Complete%20Productivity%20Stack%20in%202026.%20Every%20Tool%20I%20Actually%20Use%2C%20What%20I%20Pay%2C)
- [산만하고 과자극에 시달리던 내 뇌를 고친 7가지 - 출판형 다듬기](file:///Users/railscraft/Obsidian/raw/%EC%82%B0%EB%A7%8C%ED%95%98%EA%B3%A0%20%EA%B3%BC%EC%9E%90%EA%B7%B9%EC%97%90%20%EC%8B%9C%EB%8B%AC%EB%A6%AC%EB%8D%98%20%EB%82%B4%20%EB%87%8C%EB%A5%BC%20%EA%B3%A0%EC%B9%9C%207%EA%B0%80%EC%A7%80%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md)
- [The 10 Engineering Papers Behind Netflix, Uber, Amazon & Google](file:///Users/railscraft/Obsidian/raw/The%2010%20Engineering%20Papers%20Behind%20Netflix%2C%20Uber%2C%20Amazon%20%26%20Google.md)
- [Design’s craft crisis. senior designers built it](file:///Users/railscraft/Obsidian/raw/Design%E2%80%99s%20craft%20crisis.%20senior%20designers%20built%20it.md)
- [The Agentic AI Engineer Roadmap for 2026. Skills, Stack, and Order](file:///Users/railscraft/Obsidian/raw/The%20Agentic%20AI%20Engineer%20Roadmap%20for%202026.%20Skills%2C%20Stack%2C%20and%20Order.md)
- [7 Coding Patterns I Stole From Senior Engineers](file:///Users/railscraft/Obsidian/raw/7%20Coding%20Patterns%20I%20Stole%20From%20Senior%20Engineers.md)
- [1 Aviation Rule That Will Instantly Improve Your Focus](file:///Users/railscraft/Obsidian/raw/1%20Aviation%20Rule%20That%20Will%20Instantly%20Improve%20Your%20Focus.md)

