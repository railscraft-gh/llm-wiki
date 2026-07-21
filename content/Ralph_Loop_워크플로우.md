---
type: concept
status: draft
core: true
tags:
  - ai-agent
  - workflow
  - spectrum-development
aliases:
  - Ralph Loop
  - Spectrum Development
sources:
  - raw/Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
AI 코딩 에이전트의 컨텍스트 관리를 위해 프로젝트를 다단계(Phase)로 분할하고, 이를 자율적으로 오케스트레이션하여 실행하는 워크플로우 프레임워크.

## 핵심 요지
AI 코딩의 정확도를 유지하기 위해 '컨텍스트 로트(Context Rot, 50% 이상 컨텍스트 소비 시 정확도 저하)'를 방지하는 GSD(분할), 역할 기반 의사결정([[GStack]]), 테스트 주도 개발(SuperPower)을 [[Ralph Loop]] 오케스트레이터로 통합하여 자율적 구축이 가능하도록 설계함.

## 상세
- **[[Ralph Loop]]**: 오케스트레이터 세션이 각 페이즈를 개별적인 headless 세션에 위임하여 컨텍스트를 분리하고 신선한 상태로 작업하게 함 [raw/[[Ralph Loop]] - AI 코딩 자율 워크플로우 Spectrum Development 통합.md#L83](file:///Users/railscraft/Obsidian/raw/Ralph%20Loop%20-%20AI%20%EC%BD%94%EB%93%A9%20%EC%9E%90%EC%9C%A8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20Spectrum%20Development%20%ED%86%B5%ED%95%A9.md#L83).
- **[[GStack]]**: CEO, 디자이너, 엔지니어 등 다중 페르소나 투표를 통한 설계 결정 자동화 [raw/[[Ralph Loop]] - AI 코딩 자율 워크플로우 Spectrum Development 통합.md#L43](file:///Users/railscraft/Obsidian/raw/Ralph%20Loop%20-%20AI%20%EC%BD%94%EB%93%A9%20%EC%9E%90%EC%9C%A8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20Spectrum%20Development%20%ED%86%B5%ED%95%A9.md#L43).
- **GSD (Goal-based Segmentation of Deliverables)**: 거대 프로젝트를 독립적인 Phase로 나누어 컨텍스트 윈도우 사용률을 50% 미만으로 유지 [raw/[[Ralph Loop]] - AI 코딩 자율 워크플로우 Spectrum Development 통합.md#L49](file:///Users/railscraft/Obsidian/raw/Ralph%20Loop%20-%20AI%20%EC%BD%94%EB%93%A9%20%EC%9E%90%EC%9C%A8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20Spectrum%20Development%20%ED%86%B5%ED%95%A9.md#L49).

## 예시
[[Ralph Loop]]를 통한 야간 자율 빌드: 16개 Phase를 100개 이상의 headless 세션으로 분할 실행하여 성공 [raw/[[Ralph Loop]] - AI 코딩 자율 워크플로우 Spectrum Development 통합.md#L119](file:///Users/railscraft/Obsidian/raw/Ralph%20Loop%20-%20AI%20%EC%BD%94%EB%93%A9%20%EC%9E%90%EC%9C%A8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20Spectrum%20Development%20%ED%86%B5%ED%95%A9.md#L119).

## 충돌
단순한 기능 수정이나 소규모 변경에 전체 통합 워크플로우를 적용하는 것은 오버엔지니어링이 될 수 있음 [raw/[[Ralph Loop]] - AI 코딩 자율 워크플로우 Spectrum Development 통합.md#L137](file:///Users/railscraft/Obsidian/raw/Ralph%20Loop%20-%20AI%20%EC%BD%94%EB%93%A9%20%EC%9E%90%EC%9C%A8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20Spectrum%20Development%20%ED%86%B5%ED%95%A9.md#L137).

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[LLM Wiki 운영 패턴]]

