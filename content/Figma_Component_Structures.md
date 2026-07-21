---
type: concept
status: draft
core: true
tags:
  - figma
  - design-system
  - workflow
  - ux-ui
aliases: [피그마 컴포넌트 구조]
sources:
  - raw/10 Figma Component Structures Used by the World’s Best Design Teams.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
Stripe, Linear, Notion 등 세계적인 디자인 팀들이 사용하는 [[Figma 컴포넌트 아키텍처]] 원칙으로, 디자인 시스템의 일관성, 확장성, 개발자 협업 효율을 극대화하는 10가지 설계 표준입니다.

## 핵심 요지
- **디자인 토큰(Tokens):** 컴포넌트 이전에 원시 값(색상, 간격 등)을 의미론적 변수로 분리하여 테마 변경을 용이하게 관리.
- **슬래시 명명 규칙(Slash Naming):** `Component/Type/Variant` 계층 구조를 사용하여 에셋 패널의 검색성과 가독성 강화.
- **중첩 구조(Nested Components):** 아토믹 디자인을 기반으로 작은 컴포넌트가 큰 컴포넌트를 구성하게 하여 유지보수 효율 증대.
- **Auto Layout & 속성(Properties):** 모든 요소를 반응형으로 빌드하고 Boolean, Text 속성 등을 활용하여 배리언트의 비대화를 방지.
- **거버넌스(Governance):** 디자인 시스템을 제품처럼 관리하며, 기여 절차와 버전 정책을 수립하여 시스템의 퇴화를 방지.

## 상세
최고의 디자인 팀은 디자인 시스템을 단순한 라이브러리가 아닌 '제품'으로 관리합니다. 토큰 기반의 계층 설계, 슬래시를 이용한 직관적 명명, 그리고 Auto Layout을 통한 실제 코드와 동기화된 구조를 갖추는 것이 핵심입니다. 특히 개발자와 명명법을 통일하여 핸드오프 단계에서 발생하는 번역 오류를 최소화하고, 모든 문서를 Figma 파일 내부에 작성하여 버전 관리와 가독성을 보장합니다.

## 관련 노트
- [[DESIGN_md_Workflow]]
- [[Harness Engineering]]

