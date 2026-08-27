---
type: concept
status: draft
core: false
tags:
- programming
- design-patterns
- software-engineering
aliases:
- 디자인 패턴 의사결정 트리
sources:
- raw/Stop Memorizing Design Patterns. Use This Decision Tree Instead.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
디자인 패턴을 무작정 암기하는 대신, 코드의 병목 지점(생성, 구조, 행동)을 파악하여 알맞은 해결책을 선택하는 의사결정 트리 기반의 실무 설계 가이드입니다.

## 핵심 요지
- **패턴은 수단:** 패턴 적용 자체가 목적이 아니라, 코드의 특정 비용(중복, 의존성, 복잡성)을 낮추는 것이 목적입니다.
- **의사결정 트리 활용:** "고통이 어디서 비롯되는가?"라는 질문으로 시작하여 패턴을 선택합니다.
- **3대 경로:** 
    1. **객체 생성(Creational):** 인스턴스 생성 과정의 복잡성 해결 (Builder, Factory 등).
    2. **객체 구조화(Structural):** 인터페이스 호환성 및 클래스 관계 정돈 (Adapter, Decorator, Facade 등).
    3. **행동 및 흐름(Behavioral):** 비즈니스 로직 및 [[워크플로]]우의 유연한 제어 (Strategy, Chain of Responsibility 등).

## 상세
디자인 패턴의 실패는 대개 패턴을 들이대지 말아야 할 시점에 적용하거나, 직면한 문제를 구체적으로 정의하지 않고 패턴을 남용할 때 발생합니다. 실무에서는 문제의 성격에 따라 질문을 던져야 합니다. 
- **생성 문제:** 객체 생성 로직이 복잡하거나 초기화가 반복되는가?
- **구조 문제:** 인터페이스가 맞지 않거나 로직의 경계가 모호한가?
- **행동 문제:** 조건문이 너무 늘어나고 알고리즘이 자주 변하는가?
이 트리 구조를 활용하면 막연한 추측 없이 시스템 설계의 타당성을 확보할 수 있습니다.

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[LLM Wiki 운영 패턴]]

## 출처
- [raw/Stop Memorizing Design Patterns. Use This Decision Tree Instead.md](file:///Users/railscraft/[[Obsidian]]/raw/Stop%20Memorizing%20Design%20Patterns.%20Use%20This%20Decision%20Tree%20Instead.md)
