---
aliases:
- Design.md
- DESIGN.md
- 디자인용 AGENTS.md
core: false
created: 2026-05-07
sources:
- raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md
- raw/How to write a DESIGN.md file Claude can actually use-ko.md
- raw/DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko.md
- raw/노트북을 망가뜨리지 않으려고 라즈베리 파이에서 AI 에이전트 하네스를 구동한 후기.md
- raw/지난번 이런 일이 있었을 때, 수많은 평범한 사람들이 백만장자가 되었다.md
- raw/완전히 기계 읽기 가능한 디자인 시스템-ko.md
- raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md
- raw/AI Agent Best Practices. Production-Ready Harness Engineering (2026 Guide)-ko.md
- raw/You’re Using AI to Write Code. You’re Not Using It to Review Code.-ko.md
- raw/지식 그래프, 진정한 게임 체인저... 그러나 구축과 유지가 극도로 어려운 이유.md
- 'raw/밑바닥부터 만드는 LLM 메모리 #3. 벡터 메모리.md'
- 'raw/밑바닥부터 만드는 LLM 메모리 #5. 계층형 자체 관리 메모리.md'
- 'raw/밑바닥부터 만드는 LLM 메모리 #4. 지식 그래프 메모리.md'
- raw/Claude Code 프로젝트 효율을 극대화하는 MEMORY.md 가이드.md
- raw/AI와 오픈소스로 300개 이상의 팟캐스트를 RPG 게임으로 만든 이야기 - LennyRPG 8시간 개발기.md
- raw/우리가 수백 개의 Claude 협업 프롬프트를 테스트해 봤다. 지루한 작업을 자동화하는 7가지 프롬프트-ko.md
- raw/After Claude Code. 6 Open-Source Tools You Should Know-ko.md
- raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md
- raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md
- raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually
  For)-ko.md
- raw/AI로_만든_제품이_안_팔리는_이유.md
- raw/AI 개발자가 반드시 알아야 할 9가지 RAG 아키텍처 - 실무 예제로 배우는 완전 가이드.md
- raw/Agentic Product Design. 오늘 바로 자동화할 수 있는 5가지 디자인 작업.md
- raw/UI 디자인을 위한 최고의 AI 도구 10선. 내 UI_UX 워크플로우를 10배 개선한 방법-ko.md
- raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 TurboQuant, 애플 실리콘 상륙.md
- raw/Claude Design이 디자이너를 대체할 것인가-ko.md
- raw/Agentic AI, design systems & Figma. a practical guide-ko.md
- raw/1인 개발자와 소규모 팀을 위한 주말 완성 디자인 시스템 구축법.md
- 'raw/애플 실리콘을 위한 로컬 AI 스택: 한 차원 진화한 성능과 최적의 구축 가이드.md'
- raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
- 'raw/밑바닥부터 만드는 LLM 메모리 #1. 슬라이딩 윈도우 버퍼.md'
- raw/우리가 피그마 없이 제품을 배포하는 방법.md
- raw/The Open-Source Agent Toolkit in 2026-ko.md
- raw/How to Get Into the Top 1% in the Next 12 Months-ko.md
- raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md
- raw/2026년에 실제로 효과가 있는 나의 AI 디자인 워크플로우.md
- raw/API_Key_관리_및_Infisical_도입_가이드.md
- raw/Why senior designers are doing four jobs for one salary in 2026-ko.md
- raw/Hermes Agent Is Cool. Running It Safely 24_7 Is the Real Trick.-ko.md
- raw/ChatGPT보다 세상을 더 잘 이해하는 당신의 고양이, 그리고 이것 때문에 메타를 그만둔 AI 대부 중 한 명-ko.md
- raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
- 'raw/밑바닥부터 만드는 LLM 메모리 #2. 자동 요약 버퍼.md'
status: evergreen
tags:
- llm
- design-system
- ai-coding
type: workflow
updated: '2026-06-22'
---# DESIGN.md 운영 원칙

## 한 줄 정의

DESIGN.md 운영 원칙은 AI 코딩 에이전트가 visual drift 없이 일관된 UI를 유지하도록 디자인 시스템의 값, 의도, 경계 규칙을 인코딩하고 제어하는 마크다운 기반의 영구 컨텍스트(Persistent context) 관리 기법이다.

## 핵심 요지

- **CLAUDE.md vs DESIGN.md 역할 분할**: `CLAUDE.md`가 에이전트에게 **코드 작성 방식(Code Behavior)**을 가르친다면, `DESIGN.md`는 에이전트가 엉성하고 파편화된 UI를 만들지 않게 **비주얼 가이드(Visual Behavior)**를 고정한다 [출처](file:///Users/railscraft/Obsidian/raw/%EB%AA%A8%EB%93%A0%20DESIGN.md%EC%97%90%20%EA%BC%AD%20%EB%93%A4%EC%96%B4%EA%B0%80%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20%EC%84%B9%EC%85%98.md).
- **값-의도-경계(Value-Intent-Boundary) 매핑**: 단순한 토큰 덤프(hex 코드의 단순 나열)가 아니라, 토큰값의 구체적인 역할(Intent)과 금지/경계 구역(Boundary)을 명세한다. 모델은 산문적 제약(Prose constraints)을 가장 효과적으로 준수하기 때문이다.
- **Do's and Don'ts(금지 규칙)의 효용성**: 시스템이 절대 취하지 않는 선택(예: 그라데이션 금지, 8px 초과 반경 금지 등)을 명문화하는 것이 토큰 종류를 늘리는 것보다 plausible default(그럴듯하지만 브랜드와 어긋나는 기본값)로의 회귀를 차단하는 데 훨씬 우수하다.
- **디자인 인프라 격차 해소**: TypeScript generics나 아키텍처 리팩터링은 도구들의 보완책(`.cursorrules`, type check, formatter, CI) 덕분에 고정되나 디자인 일관성은 장치가 없었다. `DESIGN.md`는 이 디자인 레이어의 컨텍스트 기억 부재 문제를 해결하는 단순한 뼈대다.
- **디자이너의 의도적 판단(Reasoning Layer) 주입**: AI는 Figma 디자인 등에서 색상이나 치수 같은 "무엇(What)"은 잘 추출하지만, 제품의 목적이나 비협상적 가이드라인 같은 "왜(Why)"는 추론하거나 날조하기 때문에 인간이 직접 인터뷰 형식을 통해 "왜"에 대한 의사결정 맥락을 입력해 주어야 한다.

## 상세

### 1. 세 가지 실패 모드 예방
- **Bootstrap Default**: 디자인 가이드가 부재할 때 에이전트가 Tailwind 기본값 등 보편적인 미학(하얀 배경, 파란 primary 버튼, 회색 텍스트)으로 회귀하는 현상.
- **Color Roulette**: 요소마다 개별적으로 적합한 색을 골라 세션마다 accent, error indicator, border 테마가 엇나가고 비주얼 노이즈를 형성하는 현상.
- **Style Drift**: 영구적인 디자인 참고 문서가 없어서 대화 세션마다 모서리 반경(Rounded vs Square)이나 spacing scale(8px vs 16px)을 일관성 없게 구현하는 현상.

### 2. 4가지 핵심 질문 인터뷰 프레임워크 (Figma 추출의 한계 극복)
에이전트가 Figma에서 토큰만 파싱하게 방치하면 "무엇"은 정확해도 "왜" 즉, 제품의 본질적 의도와 비협상 항목을 임의로 날조하여 그럴듯한 추론(Plausible default)으로 채우게 된다. 따라서 문서를 구성하기 전 디자이너/개발자는 반드시 다음 4가지 핵심 질문으로 구성된 인터뷰를 통해 "왜"에 해당하는 생각을 주입해야 한다 [출처](file:///Users/railscraft/Obsidian/raw/How%20to%20write%20a%20DESIGN.md%20file%20Claude%20can%20actually%20use-ko.md).
1. *이 제품은 무엇을 하는가?*
2. *누가 쓰는가?*
3. *UI가 사용자를 무엇으로 도와야 하는가?* (제품 요약을 상단에 배치)
4. *이 디자인 환경에서 절대 허용하지 않는 규칙은 무엇인가?* (제약 조건 설정)

---

### 3. DESIGN.md Spec과 9개 섹션 레이아웃
2026년 4월 21일 Google은 `DESIGN.md` Spec을 공개하였고, 이후 VoltAgent의 `awesome-design-md` 아카이브는 이 형식을 따르는 **423개 브랜드의 디자인 시스템 파일**을 모아 배포했다. 이 표준 파일 레이아웃은 다음과 같이 3대 레이어, 9개 섹션으로 구성된다.
1. **Foundation (브랜드를 세팅하는 층)**
   *   **Visual Theme & Atmosphere**: 숫자가 아닌 제품 미학적 톤앤매너(예: technical and luxurious 등) 규정.
   *   **Color Palette & Roles**: hex 나열 대신 색상의 역할 지정으로 Color Roulette 방지.
   *   **Typography Rules**: font family, size hierarchy, 굵기 금지 규칙 명세.
2. **Components (실제 UI를 구성하는 층)**
   *   **Component Stylings**: 버튼, 카드 등 컴포넌트의 Hover, Active, Disabled, Loading 상태 정의.
   *   **Layout Principles**: 감으로 정하지 않는 base spacing unit scale, max width, whitespace 철학.
   *   **Depth & Elevation**: blue-tinted shadow 등 브랜드 전용 그림자 및 레이어 구분.
3. **Guardrails (일관성을 지키는 층)**
   *   **Do's and Don'ts**: "8px 초과 반경 금지", "상태 색상 장식 금지" 등 에이전트의 독자적 hallucination을 방지할 금지 조건.
   *   **Responsive Behavior**: 모바일을 단순 데스크톱 축소판이 아닌 별도 맥락으로 분할하여 Breakpoint와 Touch target 규정.
   *   **Agent Prompt Guide**: 세션 전환 시 에이전트의 기억을 단숨에 복구할 자주 쓰는 토큰과 iteration checklist 퀵 레퍼런스.

## 예시

### 1. 여행 계획 웹앱 'Oooff' 프로토타입 설계 사례
Oooff 웹앱의 디자인 시스템 구축 시, 단순히 Figma에서 토큰을 내보내는 것에 그치지 않고 디자이너가 직접 작성한 4단계 의사결정 순서(순서 설정 $\rightarrow$ 요약 및 본질 서술 $\rightarrow$ 제약 스케일 $\rightarrow$ 비협상 Do's and Don'ts)를 DESIGN.md 파일 상단에 주입했다. 이를 통해 세션이 끊기더라도 Claude가 매번 동일한 모서리 둥글기(`--radius-md: 6px`) 및 여백 규칙을 100% 일치하여 재현해 냈다.

### 2. 값-의도-경계 인코딩 예시
*   **AS-IS**: `primary: #1B4DFF`
*   **TO-BE**:
    ```markdown
    ### Primary Accent Color
    - Value: `#1B4DFF`
    - Intent: 콜투액션(CTA) 버튼 및 현재 활성화된 네비게이션 탭 상태에만 제한적으로 적용.
    - Boundary: 일반 배경이나 장식용 데코 레이어에 사용을 전면 금지. 화면당 primary action은 반드시 오직 하나로 제한하며, 추가 액션이 필요할 경우 보조 버튼 스타일(Outline/Muted)로 조율할 것.
    ```

### 3. 구체적 금지 규칙(Do's and Don'ts) 예시
*   **Don't**: 상태 색상(Green/Red/Amber)을 오류/성공 정보 전달이 아닌 일반 데코레이션에 사용 금지.
*   **Don't**: 카드 모서리 반경(`--radius-md: 6px`)에 임의의 인라인 둥글기 오버라이드 금지.
*   **Don't**: 에러 상태를 색상(#EF4444)으로만 표현 금지. 반드시 에러 설명 텍스트를 함께 제공할 것.
*   **Don't**: 모든 모션 애니메이션 및 페이지 로딩 트랜지션이 200ms를 초과하게 설계 금지.

## 충돌

- **Figma vs Markdown (Two Source of Truth)**: Figma 파일과 마크다운 명세 사이에 싱크가 어긋나는 순간 에이전트의 신뢰도 체계가 붕괴한다. 둘 중 하나가 갱신되면 `npx @google/design.md lint DESIGN.md` CLI 도구를 가동해 즉시 정합성(WCAG 명암비, 깨진 토큰 참조 등)을 동기화해야 한다.

## 관련 노트

- [[AI 시대 디자인 시스템]]
- [[AI Slop]]
- [[Claude.md 운영 원칙]]
- [[AI 코딩 에이전트 검증 전략]]
- [[디자인 에이전트 5종]]
- [[디자인 시스템 기본값]]
- [[DESIGN.md 워크플로우]]
- [[AI 네이티브 프로토타이핑]]

