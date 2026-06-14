---
type: workflow
status: evergreen
core: false
tags:
 - llm
 - design-system
 - ai-coding
aliases:
 - Design.md
 - DESIGN.md
 - 디자인용 AGENTS.md
sources:
 - AI로_만든_제품이_안_팔리는_이유
 - Agentic Product Design. 오늘 바로 자동화할 수 있는 5가지 디자인 작업
 - "raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md"
 - "raw/How to write a DESIGN.md file Claude can actually use-ko.md"
 - "raw/DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko.md"
 - https://github.com/google-labs-code/design.md
 - https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/
created: 2026-05-07
updated: 2026-06-14
---

# DESIGN.md 운영 원칙

## 한 줄 정의

DESIGN.md 운영 원칙은 AI 코딩 에이전트가 visual drift 없이 일관된 UI를 유지하도록 디자인 시스템의 값, 의도, 경계 규칙을 인코딩하고 제어하는 마크다운 기반의 영구 컨텍스트(Persistent context) 관리 기법이다.

## 핵심 요지

- **디자인 기억(Design Memory) 보장**: 에이전트가 시각적 일관성을 유지하지 못하는 이유는 성능의 한계보다 디자인 전용 인프라와 기억 장치의 부재에 있다. `DESIGN.md`는 에이전트 세션 간에 "우리 앱의 디자인 문법"을 전달하는 역할을 한다.
- **값-의도-경계(Value-Intent-Boundary) 공식**: 단순한 토큰 덤프(예: hex 코드 목록)를 지양하고, 해당 토큰값의 역할(Intent)과 금지 구역(Boundary)을 명세한다. 에이전트는 구조화된 산문적 제약(prose constraints)을 가장 잘 준수하기 때문이다.
- **하지 말아야 할 것(Do's and Don'ts)의 강조**: "시스템이 절대 하지 않는 선택(예: 그라데이션 금지, heavy headline 금지 등)"을 명문화하는 것이 토큰 종류를 두 배로 늘리는 것보다 에이전트의 오작동과 generic default 회귀를 예방하는 데 효과적이다.
- **진단 루프(Diagnostic Loop)**: 기획 단계에서 화면 3개를 생성해 보고, 시각 스타일이 엇나가는 지점을 진단하여 빠진 제약을 `DESIGN.md`에 추가하는 보정 루프를 반복 실행한다.
- **제품 요약 중심 설계**: 파일 상단에 hex 코드나 수치 대신 제품 요약(무엇을 하는지, 누가 쓰는지, UI가 사용자를 어떻게 돕는지)을 먼저 두어 모델이 디자인 의도를 사전 방향짓게 만든다.

## 상세

### 1. 디자인 에이전트 오작동 방지 (세 가지 실패 모드 예방)
- **Bootstrap Default**: 디자인 문맥이 제공되지 않으면 에이전트는 generic modern style(흰 배경, 파란 primary 버튼, Tailwind 기본값)로 수렴하여 브랜드 정체성을 잃어버린다.
- **Color Roulette**: 색상 개별 선택은 그럴듯하나 역할(예: Accent와 Error 상태 색상의 혼용)이 엮이지 않아 visual noise가 발생한다.
- **Style Drift**: 세션마다 둥근 모서리나 여백 단위(8px와 16px 등)가 불일치하는 현상이다. `DESIGN.md`를 영구 기준으로 삼아야 이 이탈을 방지할 수 있다.

### 2. DESIGN.md에 포함되어야 할 3층 9개 섹션
1. **Foundation (브랜드를 세팅하는 층)**
   - **Visual Theme & Atmosphere**: 숫자가 아닌 느낌(예: technical and luxurious 등) 정의.
   - **Color Palette & Roles**: 색상 값에 따른 엄격한 역할(Primary, Neutral scale 등) 지정.
   - **Typography Rules**: 폰트 패밀리, 계층, 금지 굵기 및 크기 규정.
2. **Components (실제 UI를 구성하는 층)**
   - **Component Stylings**: 버튼, 카드 등 컴포넌트의 다채로운 상태(Hover, Active, Loading, Disabled) 규정.
   - **Layout Principles**: 베이스 간격 단위(Base spacing unit), 최대 폭, 반경 스케일 지정.
   - **Depth & Elevation**: 높이에 따른 그림자(Shadow) 시스템과 레이어 구분.
3. **Guardrails (일관성을 지키는 층)**
   - **Do's and Don'ts**: 에이전트의 Hallucination과 무난한 default를 차단할 강력한 금지 조건 설정.
   - **Responsive Behavior**: 화면 해상도 변화에 따른 Breakpoint, Collapse 방식, Touch target 설정.
   - **Agent Prompt Guide**: 세션 전환 시 복구를 위한 퀵 레퍼런스(다주 참조 컬러코드, 체크리스트).

### 3. 디자인 인프라(Design Infrastructure)의 격차 해소
코드 일관성을 위해 `.cursorrules`, lint, formatters, CI 등이 촘촘히 보장되던 것에 반해, 디자인 레이어는 persistent context file이 전무했다. 2026년 4월 21일 Google의 `DESIGN.md` 사양 공개와 VoltAgent의 `awesome-design-md` 저장소(423개 브랜드 디자인 명세 취합) 활성화는 이러한 격차를 메우는 조용한 표준으로 자리 잡았다.

## 안정적인 운영 규칙

1. **인터뷰 기반 맥락 보강**: 에이전트에게 Figma에서 토큰만 파싱하여 자동으로 파일을 채우게 하지 말고, 제품 맥락과 제약을 도출하는 인간 디자이너의 "왜(Why)"에 해당하는 사고를 인터뷰를 통해 텍스트로 보강해야 한다.
2. **상향식/하향식 양방향 동기화**: Google Stitch 등과 연동 시, 전역 규칙은 캔버스가 아닌 `DESIGN.md` 파일 자체를 고쳐서 반영(하향식)하고, 캔버스 편집 내용이 문서에 올바르게 동기화되는지 확인(상향식)한다.
3. **자동화 검증(Linting)**: `npx @google/design.md lint DESIGN.md` CLI 도구를 가동하여 깨진 토큰 참조, WCAG 대비 부족, 구조적 에러를 체크하고, 어긋난 코드는 롤백하거나 문서를 갱신하여 정합성을 일치시킨다.

## 예시

### 값-의도-경계 인코딩 예시
```markdown
### Primary Accent Color
- Value: `#1B4DFF`
- Intent: 콜투액션(CTA) 버튼 및 현재 활성화된 네비게이션 상태에만 적용.
- Boundary: 장식용이나 일반 배경으로 절대 사용 금지. 화면당 primary action은 오직 하나로 제한하며, 추가 행동이 필요할 경우 보조 버튼 스타일 적용.
```

### 금지 규칙(Do's and Don'ts) 예시
- **Don't**: 상태 색상(Green/Red)을 의미 없이 장식용 그리드 라인에 사용 금지.
- **Don't**: 카드 모서리 반경(`--radius-md: 6px`)에 임의의 둥글기 오버라이드 금지.
- **Don't**: 로딩 전환 애니메이션이 200ms를 초과하게 설계 금지.

## 충돌

- **화면 스크린샷 vs 구조화된 텍스트 제약**: 스크린샷은 픽셀 정보를 직관적으로 보여주나 설계 원리를 주지 못하므로 에이전트의 재현성이 떨어진다. 반면 `DESIGN.md`는 원리와 의도를 prose로 주기 때문에 재현성과 일관성 면에서 압도적으로 우수하다. 스크린샷 단독 전달보다 `DESIGN.md`를 함께 참조하게 해야 한다.

## 관련 노트

- [[AI 시대 디자인 시스템]]
- [[AI Slop]]
- [[Claude.md 운영 원칙]]
- [[AI 코딩 에이전트 검증 전략]]
- [[디자인 에이전트 5종]]
- [[디자인 시스템 기본값]]
- [[DESIGN.md 워크플로우]]
- [[AI 네이티브 프로토타이핑]]

