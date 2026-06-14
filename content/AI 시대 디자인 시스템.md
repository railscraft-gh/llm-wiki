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
 - "raw/AI로_만든_제품이_안_팔리는_이유.md"
 - "raw/Agentic Product Design. 오늘 바로 자동화할 수 있는 5가지 디자인 작업.md"
 - "raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md"
 - "raw/Good Design Doesn’t Happen By Default.md"
 - "raw/Agentic AI, design systems & Figma. a practical guide-ko.md"
 - "raw/From faster pencil to AI Experience Architect. a designer’s path.md"
 - "raw/The most important Design System in 2026 that designers missed was built by a developer..md"
 - "raw/AI와 디자인 시스템 - 출판형 다듬기.md"
 - "raw/완전히 기계 읽기 가능한 디자인 시스템-ko.md"
 - "raw/AI 디자인 시스템에 윤리, 접근성, 그리고 기억을 부여한 방법.md"
created: 2026-05-07
updated: 2026-06-14
---

# AI 시대 디자인 시스템

## 한 줄 정의

AI 시대 디자인 시스템은 사람이 화면을 일일이 그리는 규칙집을 넘어, AI가 반복 생성해도 제품의 시각 언어와 사용감을 유지하게 하는 실행 가능한 맥락이자 에이전트 전용 행동 강령이다.

## 핵심 요지

- AI가 코드를 빠르게 만들수록 제품 차별점은 구현 속도보다 시각 언어, 사용자 흐름, 판단 기준으로 이동한다.
- 디자인 시스템은 색상, 타이포그래피, spacing, icon style, component state를 정해 [[AI Slop]]을 줄인다.
- [[DESIGN.md 운영 원칙]]처럼 agent-readable 형식으로 저장하면 AI가 디자인 의도를 매번 새로 추측하지 않아도 된다.
- 디자이너의 역할은 픽셀 생산자에서 시스템 설계자, workflow 설계자, 품질 판단자로 이동한다.
- AI가 많이 쓰는 기본 컴포넌트 층(shadcn/ui 같은 code-first foundation)을 이해하지 못하면, 디자인 시스템 논의가 Figma 안에만 갇히기 쉽다.
- **행동주의적 에이전틱 디자인 시스템(BADS)**: 단순 스타일 가이드를 넘어 윤리(Ethics), 접근성(Accessibility), 기억(Memory)을 지닌 다단 레이어 아키텍처를 통해 AI 생성 UI의 일관성을 100%에 가깝게 강제한다.

## 상세

### 1. BADS (Behavioral Agentic Design System) 10단계 아키텍처
기존 피그마 파일이나 `tokens.json` 단선 구조를 넘어, 에이전트가 상황에 따라 '디자인 의사결정'을 내릴 수 있도록 아래와 같은 10대 레이어 스택을 제공한다.
1. **Brand & Voice**: 브랜드 정체성, 마이크로카피 은행, 실시간 튜닝 가능한 톤앤매너 프레임워크.
2. **Ethics**: 투명성, 형평성, 프라이버시 우선, 명시적 동의 유도, 다크 패턴 방지의 5대 강령 및 기계 독해용 의사결정 트리.
3. **Foundation Tokens**: 8px 기본 단위를 바탕으로 한 간격, 서체 스케일 등 기초 물리 값.
4. **Semantic Tokens**: 다크모드 등 유연한 테마 변환을 돕는 의미론적 토큰명 매핑.
5. **Components**: 36개의 핵심 UI 프라이머리 컴포넌트(Primitives) 레지스트리.
6. **Patterns**: 모달 vs 드로어, 스피너 vs 스켈레톤 등 매번 반복되는 UI 쟁점용 의사결정 나무 구조.
7. **Agent Interface**: 에이전트가 디자인 콘텍스트에 쉽게 접근하고 API 명세를 조회하는 MCP 인터페이스.
8. **Documentation**: plain-text 마크다운 기반으로 AI와 디자이너가 동시 가독할 수 있는 문서 체계.
9. **Enforcement (검증 엔진)**: 스토리북 테스트 커버리지, axe-core 연동 CI/CD 웹 접근성 전수 검사 등 실시간 가드레일.
10. **Automation (가동 자동화)**: 24시간 타임라인 스케일에 기반한 서캐디안 자동 운영 파이프라인.

### 2. 디자인 윤리 (Ethics) 및 9대 다크 패턴 금지
- **5대 강령**: 투명성(Transparency), 형평성(Equity), 프라이버시 우선(Privacy-First), 명시적 동의 유도(Consent-Driven), 다크 패턴 방지(Anti-Dark-Patterns)를 시스템 뼈대에 심어 에이전트가 윤리적 UI를 자율 판별하게 한다.
- **9대 다크 패턴 금지**: 사용자를 부끄럽게 만들어 행동을 강제하는 confirmshame, 허위 정보로 조바심을 조장하는 manufactured urgency, 마케팅 수신동의 체크박스의 디폴트 선택, 구독 해지 버튼 은폐 마찰 등 사용자를 기만하는 9가지 패턴을 정의하고 감사 단계에서 원천 차단한다.

### 3. 웹 접근성 (Accessibility) WCAG 2.2 AAA 하한선 강제
- **AAA 등급 요건**: 텍스트 대비 명도 최소 7:1 보장, 마우스/터치 타겟 최소 44x44px 공간 확보, 최소 폰트 14px 제한, 포커스 링 강제 부착, 미디어 모션 축소 반응형 제어.
- **5대 인지/신체적 페르소나 설정**: 시각(Vision), 청각(Hearing), 운동성(Motor), 인지 능력(Cognitive), 상황적 일시 제약(Situational) 차원을 명세하여 기획 첫 단계부터 접근성을 고려하는 'Accessible by construction' 체력을 확보한다.

### 4. 자가 피드백 루프 (Learning Loops)를 통한 노후화 방지
디자인 시스템이 Rotting(부패)되는 것을 방지하기 위해 에이전트의 작업 이력을 반영하는 3개 원장 시스템을 가동한다.
- **비평 기록 원장 (Critique ledger)**: 제3의 외부 검증 에이전트가 뱉어낸 모든 비주얼 비평 지적 사항들을 모아 취약성을 진단한다.
- **배포 이력 원장 (Recipe ledger)**: 최종 승인(Ship)과 반려(Bounce) 이력을 분석해 검증 코드를 보완한다.
- **교정 일지 (Corrections log)**: 인간 리뷰어에 의해 반려당했던 모든 비주얼 디자인 이력을 축적하여, 동일 오류가 2회 반복 누적 시 자동 린트(Lint) 규칙으로 승격하여 가동 정지 명령을 내린다.
- **기타 루프**: 월간 자가 진단(Monthly loops), 분기별 리셋(Quarterly loops), 복수 저장소에서 공통 발생하는 결함을 패치하는 크로스 포크 집계(Cross-fork aggregator).

### 5. 서캐디안 디자인 시스템 (Circadian Design Systems) 24시간 운영
인간의 시간별 에너지 변화에 맞춰 에이전트의 권한과 스케일을 유연히 제어하는 5대 타임라인을 갖춘다.
- **야간 당직 (Night Shift)**: 새벽 4시 백그라운드 타이머 기상. 접근성 진단, 픽셀 디프 검사, 5대 테마 리서치를 실행하고 기계적 오류 수정용 Draft PR을 생성한 뒤 슬랙 아침 종합 보고서를 전송한다.
- **모닝 싱크 (Morning Sync)**: 출근한 디자이너가 슬랙 요약을 보고 자동 패치 draft PR을 일괄 머지(Merge)하거나 반려한다.
- **주간 협업 (Collaborative Build)**: 주간 업무 시간대. BADS의 모든 안전벨트와 10대 레이어 가드레일 작동 속에 디자이너와 페어 바이브 코딩 협업을 진행한다.
- **오후 비평 (Async Review)**: 해가 질 무렵, 스토리북 테스트 케이스와 기술 트레이드오프 리포트를 생성하여 커밋한다.
- **저녁 복원 (Recovery)**: 대화 콘텍스트 데이터를 깔끔하게 아카이빙해 둔다.

## 예시

- **Oooff 웹앱 POC 사례**: 여행 계획 웹앱 Oooff를 설계할 때, 디자인 의도(Reasoning Layer)를 주입한 DESIGN.md를 활용해 에이전트가 hex 코드나 padding 규칙을 임의로 날조하지 않고 100% 일치도로 컴포넌트를 빌드하게 만들었다.
- **컴포넌트 트리아지 파이프라인**: 신규 UI 생성이 요청되면 에이전트가 자율적으로 4가지 버킷 중 하나로 분류(Triage)한다.
  - Bucket A (재사용): 기존 것 호출 후 종료.
  - Bucket B (스타일 변주): Size props 등 variants 추가.
  - Bucket C (조합 컴포넌트): 기본 Primitives 조립 후 독립 폴더에 안착.
  - Bucket D (완전 신규): 디자이너 사수의 수동 승인 후 코드 생성 작동.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Claude Design]]
- [[AI Slop]]
- [[DESIGN.md 운영 원칙]]
- [[Vibe Coding과 Agentic Engineering]]
- [[AI 코딩 에이전트 검증 전략]]
- [[AI 네이티브 사용자]]
- [[디자인 에이전트 5종]]
- [[디자인 시스템 기본값]]
- [[shadcn-ui]]
- [[AI Experience Architect]]
- [[AI 디자인 역할 맵]]
- [[AI 디자인 팀 운영]]
- [[AI 기본값 구현체]]
- [[완전히 기계 읽기 가능한 디자인 시스템]]
- [[DESIGN.md 워크플로우]]
- [[Harness Engineering]]
- [[Agent Harness]]

