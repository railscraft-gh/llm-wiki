---
type: concept
status: draft
core: false
tags:
  - superpowers
  - brainstorming
  - ai-workflow
  - prompt-engineering
aliases:
  - Brainstorming-스킬-운영-원칙
  - Brainstorming 스킬 운영 원칙
  - superpowers-brainstorming
sources:
  - raw/superpowers-brainstorming.md
created: 2026-07-21
updated: 2026-07-21
---

# Brainstorming 스킬 운영 원칙

## 한 줄 정의
AI 코딩 에이전트가 무분별한 코드 생성을 시작하기 전, 자연어 대화를 통해 요구사항 탐색, 2~3가지 접근법 제안, 시스템 격리 설계를 확립하고 승인받도록 강제하는 Superpowers 프로세스 헌장.

## 핵심 요지
- **하드 게이트(Hard Gate) 원칙**: 사용자의 디자인 승인이 완료되기 전에는 어떠한 코드 작성, 스캐폴딩, 구현 스킬 호출도 절대 금지됩니다. 아무리 단순해 보이는 토이 프로젝트(Todo List 등)라 할지라도 이 하드 게이트가 무조건 적용됩니다.
- **9단계 체크리스트**: 1. 프로젝트 맥락 탐색, 2. 적시(Just-in-Time) 비주얼 컴패니언 제안, 3. 1회 1질문 대화, 4. [2-3가지 대안](file:///Users/railscraft/Obsidian/raw/superpowers-brainstorming.md#L27) 제시, 5. 복잡도 비례 섹션별 디자인 승인, 6. 디자인 문서 저장(`docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`), 7. 4대 스펙 셀프 리뷰, 8. 사용자 스펙 검수, 9. `writing-plans` 스킬 이관.
- **격리(Isolation)와 경계 설계**: 시스템을 명확한 인터페이스를 갖춘 단원 단위로 쪼개어, 파일 비대화 및 암묵적 의존성을 사전에 예방합니다.
- **터미널 종결 상태**: 브레인스토밍의 종결은 오직 `writing-plans` 스킬 호출로만 이어지며, 구현 도구의 조기 호출을 엄격히 금합니다.

## 상세
"너무 단순해서 디자인이 필요 없다"는 반패턴(Anti-Pattern)이야말로 예기치 못한 가정의 오류로 작업 시간을 낭비시키는 주범입니다. 브레인스토밍 스킬은 대화 과정에서 한 번에 단 한 질문만 던지는 것을 원칙으로 삼아 사용자의 인지 부하를 줄이고, 선택형 질문을 적극 활용합니다.

설계 제시 시에는 [2~3가지 접근법](file:///Users/railscraft/Obsidian/raw/superpowers-brainstorming.md#L27)과 함께 장단점, 권장안을 제시합니다. 구체적 디자인은 섹션별 복잡도에 따라 간단한 것은 몇 문장, 까다로운 요소는 [200~300 단어](file:///Users/railscraft/Obsidian/raw/superpowers-brainstorming.md#L84) 수준으로 비례 조절합니다. 스펙 문서 작성 후 진행하는 Self-Review 단계에서는 (1) TODO/TBD 완성도, (2) 내부 모순, (3) 스코프 분할 필요성, (4) 요구사항 모호성의 4대 항목을 수식 검사하여 교정합니다.

또한 visual companion은 사전에 일괄 제공하는 것이 아니라 레이아웃·와이어프레임 등 시각적 대화가 꼭 필요한 순간에만 적시(Just-in-Time) 단독 메시지로 수용 여부를 타판하도록 제약합니다.

## 예시
- **하드 게이트 준수**: "단순 유틸리티 함수 하나 작성해 줘"라는 요청에도 즉시 코드를 출력하지 않고, 2가지 알고리즘 구조와 입출력 인터페이스안을 먼저 제시하고 승인 후 `writing-plans`로 이관.
- **시스템 스코프 분할**: "채팅, 파일 저장, 결제, 분석이 포함된 플랫폼" 요청 수신 시 한 번에 스펙을 쓰지 않고 4개 서브 프로젝트로 분해하여 1차 서브 프로젝트부터 순차 브레인스토밍 진행.

## 충돌
- **직관적 구상과 조기 구현 열정의 충돌**: 엔지니어가 즉시 코드를 짜고 싶어 하더라도 하드 게이트 규칙에 의해 디자인 승인 전에는 구현 스킬(frontend-design 등) 호출이 엄격히 차단됩니다.
- **[[Visual Companion]]의 오용**: 단순 요구사항이나 개념 질문에도 브라우저 컴패니언을 띄우는 행위를 차단하고 텍스트 인터페이스를 기본 유지합니다.

## 관련 노트
- [[사양 기반 개발 (Spec Driven Development)]]
- [[AI 네이티브 프로토타이핑]]
- [[Plan Mode 기반 AI 작업]]
- [[Claude Code 오케스트레이션]]

