---
type: concept
status: draft
core: true
tags:
  - ai-engineering
  - sdlc
  - github
aliases:
  - Spec Kit
  - SDD
  - 명세 기반 개발
sources:
  - raw/느낌 코딩의 시대는 끝났다 - GitHub Spec Kit과 명세 기반 개발.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
AI 코딩 에이전트와 페어 프로그래밍할 때, 구현 전 정밀한 요구 명세(Specification)를 먼저 작성하고 이를 소스 코드와 함께 관리하여 에이전트의 환각과 부적절한 코딩을 방지하는 개발 프레임워크.

## 핵심 요지
'느낌 코딩(Vibe Coding)'의 한계를 극복하기 위해, 기획 의도(What & Why)를 명세서로 먼저 정의하고 이를 '단일 진실원천(Source of truth)'으로 활용하여 에이전트가 코드를 생성하도록 강제하는 명세 주도 개발(SDD) 방법론.

## 상세
- **SDD(Spec Driven Development)**: 설계 문서(Spec)가 구현의 최상위 설계도가 되며, 구현이 바뀌면 명세를 수정하고 에이전트가 코드를 다시 갱신하는 구조 [raw/느낌 코딩의 시대는 끝났다 - GitHub [[Spec Kit]]과 명세 기반 개발.md#L18](file:///Users/railscraft/Obsidian/raw/%EB%8A%90%EB%82%8C%20%EC%BD%94%EB%93%9C%EC%9D%98%20%EC%8B%9C%EB%8C%80%EB%8A%94%20%EB%81%9D%EB%82%AC%EB%8B%A4%20-%20GitHub%20Spec%20Kit%EA%B3%BC%20%EB%AA%85%EC%84%B8%20%EA%B8%B0%EB%B0%98%20%EA%B0%9C%EB%B0%9C.md#L18).
- **Constitution (헌법)**: 에이전트가 반드시 준수해야 하는 아키텍처 원칙, 스타일 가이드 등을 명문화한 최상위 규칙 문서 [raw/느낌 코딩의 시대는 끝났다 - GitHub [[Spec Kit]]과 명세 기반 개발.md#L73](file:///Users/railscraft/Obsidian/raw/%EB%8A%90%EB%82%8C%20%EC%BD%94%EB%93%9C%EC%9D%98%20%EC%8B%9C%EB%8C%80%EB%8A%94%20%EB%81%9D%EB%82%AC%EB%8B%A4%20-%20GitHub%20Spec%20Kit%EA%B3%BC%20%EB%AA%85%EC%84%B8%20%EA%B8%B0%EB%B0%98%20%EA%B0%9C%EB%B0%9C.md#L73).
- **명령 체계**: 6가지 핵심 명령어를 통해 명세서 정의, 계획 수립, 작업 분할, 구현 순으로 절차적 개발 강제 [raw/느낌 코딩의 시대는 끝났다 - GitHub [[Spec Kit]]과 명세 기반 개발.md#L56](file:///Users/railscraft/Obsidian/raw/%EB%8A%90%EB%82%8C%20%EC%BD%94%EB%93%9C%EC%9D%98%20%EC%8B%9C%EB%8C%80%EB%8A%94%20%EB%81%9D%EB%82%AC%EB%8B%A4%20-%20GitHub%20Spec%20Kit%EA%B3%BC%20%EB%AA%85%EC%84%B8%20%EA%B8%B0%EB%B0%98%20%EA%B0%9C%EB%B0%9C.md#L56).

## 예시
`specify init`을 통해 `.specify/` 디렉터리와 필요한 템플릿(Constitution, Specs 등) 구조를 즉시 세팅 [raw/느낌 코딩의 시대는 끝났다 - GitHub [[Spec Kit]]과 명세 기반 개발.md#L45](file:///Users/railscraft/Obsidian/raw/%EB%8A%90%EB%82%8C%20%EC%BD%94%EB%93%9C%EC%9D%98%20%EC%8B%9C%EB%8C%80%EB%8A%94%20%EB%81%9D%EB%82%AC%EB%8B%A4%20-%20GitHub%20Spec%20Kit%EA%B3%BC%20%EB%AA%85%EC%84%B8%20%EA%B8%B0%EB%B0%98%20%EA%B0%9C%EB%B0%9C.md#L45).

## 충돌
단순 오류 수정이나 핫픽스 등 소규모 작업에는 설정 과정이 과도한 오버헤드가 될 수 있음 [raw/느낌 코딩의 시대는 끝났다 - GitHub [[Spec Kit]]과 명세 기반 개발.md#L185](file:///Users/railscraft/Obsidian/raw/%EB%8A%90%EB%82%8C%20%EC%BD%94%EB%93%9C%EC%9D%98%20%EC%8B%9C%EB%8C%80%EB%8A%94%20%EB%81%9D%EB%82%AC%EB%8B%A4%20-%20GitHub%20Spec%20Kit%EA%B3%BC%20%EB%AA%85%EC%84%B8%20%EA%B8%B0%EB%B0%98%20%EA%B0%9C%EB%B0%9C.md#L185).

## 관련 노트
- [[CLAUDE.md 가이드]]
- [[Ralph_Loop_워크플로우]]

