---
type: concept
status: draft
core: false
tags:
  - ai
  - harness-engineering
  - agentic-engineering
  - software-development
aliases: [하네스 엔지니어링, CLAUDE.md]
sources:
  - raw/99%의 사람보다 더 나은 Harness Engineer를 만드는 법.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
AI 에이전트의 불확실성을 통제하고 지속 가능한 운영 환경을 설계하기 위해, 에이전트의 실행, 검증, 메모리 루프를 구조적으로 결합하는 엔지니어링 패러다임입니다.

## 핵심 요지
1. **하네스 엔지니어링 개념:** AI 모델을 '말'로, 이를 제어하는 환경, 제약, 도구 세트를 '하네스'로 비유하며, 실패를 최소화하도록 환경 자체를 설계함 [raw/99%의 사람보다 더 나은 Harness Engineer를 만드는 법.md#L31](file:///Users/railscraft/Obsidian/raw/99%25%EC%9D%98%20%EC%82%AC%EB%9E%8C%EB%B3%B4%EB%8B%A4%20%EB%8D%94%20%EB%82%98%EC%9D%B4%EC%A7%80%20Harness%20Engineer%EB%A5%BC%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%B2%95.md#L31).
2. **진화 단계:**
    - **1단계 (CLAUDE.md):** 기술 스택 및 규칙 정의 (지시 수준) [raw/99%의 사람보다 더 나은 Harness Engineer를 만드는 법.md#L47](file:///Users/railscraft/Obsidian/raw/99%25%EC%9D%98%20%EC%82%AC%EB%9E%8C%EB%B3%B4%EB%8B%A4%20%EB%8D%94%20%EB%82%98%EC%9D%B4%EC%A7%80%20Harness%20Engineer%EB%A5%BC%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%B2%95.md#L47).
    - **2단계 (AGENTS.md):** 규칙의 모듈화 및 관심사 분리 [raw/99%의 사람보다 더 나은 Harness Engineer를 만드는 법.md#L73](file:///Users/railscraft/Obsidian/raw/99%25%EC%9D%98%20%EC%82%AC%EB%9E%8C%EB%B3%B4%EB%8B%A4%20%EB%8D%94%20%EB%82%98%EC%9D%B4%EC%A7%80%20Harness%20Engineer%EB%A5%BC%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%B2%95.md#L73).
    - **3단계 (Harness):** 실행 루프, 상태 저장(Memory), 검증(Verification), 훅(Hook)을 결합하여 나쁜 결과를 방지하는 구조 [raw/99%의 사람보다 더 나은 Harness Engineer를 만드는 법.md#L102](file:///Users/railscraft/Obsidian/raw/99%25%EC%9D%98%20%EC%82%AC%EB%9E%8C%EB%B3%B4%EB%8B%A4%20%EB%8D%94%20%EB%82%98%EC%9D%B4%EC%A7%80%20Harness%20Engineer%EB%A5%BC%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%B2%95.md#L102).
3. **핵심 차이:** 프롬프트 엔지니어링이 '어떻게 요청할 것인가'의 문제라면, 하네스 엔지니어링은 '어떻게 작동하게 만들 것인가'의 문제임.

## 상세
단순히 프롬프트를 정교하게 작성하는 것으로는 대규모 AI 코딩 작업의 품질을 유지할 수 없습니다. 하네스 엔지니어링은 에이전트의 실패를 상수로 받아들이고, 이를 다시 복구하거나 실행 전후에 검증 장치를 배치하여 자동화 시스템의 신뢰성을 확보하는 구조적 접근법입니다.

## 관련 노트
- [[Vibe Coding과 Agentic Engineering]]
- Claude_Code_Best_Practices

