---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - harness
  - automation
aliases:
  - Ralph Loop
  - Headless Claude Loop
sources:
  - raw/Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md
created: 2026-07-21
updated: 2026-07-21
---
# Ralph Loop

## 한 줄 정의
메인 오케스트레이터 세션이 컨텍스트 윈도우 소비를 최소화하면서 쪼개진 미션 단계(Phase)들을 독립된 Headless AI 코딩 세션에 위임하여 완결까지 밤새 자율 실행하는 반복 제어 패턴.

## 핵심 요지
- **오케스트레이터의 컨텍스트 보존**: 메인 세션은 오직 위임 및 완료 상태 트래킹만 수행하여 [컨텍스트 윈도우의 10% 이하만 소비](file:///Users/railscraft/Obsidian/raw/Ralph%20Loop%20-%20AI%20%EC%BD%94%EB%94%A9%20%EC%9E%90%EC%9C%A8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20Spectrum%20Development%20%ED%86%B5%ED%95%A9.md#L98-L101).
- **Headless 신선한 컨텍스트(Fresh Context)**: 각 작업 Phase는 `claude -p "프롬프트"` 명령어 기반 독립 백그라운드 세션으로 실행되어 컨텍스트 오염 및 [50% 초과 시 발생하는 Context Rot(정확도 저하) 전면 방지](file:///Users/railscraft/Obsidian/raw/Ralph%20Loop%20-%20AI%20%EC%BD%94%EB%94%A9%20%EC%9E%90%EC%9C%A8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20Spectrum%20Development%20%ED%86%B5%ED%95%A9.md#L49-L52).
- **의사결정 자동화 연동**: 디자인/구조 선택 등 판단 필요 시 [[GStack]] 다중 역할(CEO, 디자이너, 엔지니어) 투표 시스템에 위임해 인간 개입 0% 자율화 달성.

## 상세
- **Spectrum Development 3대 통합 흐름**:
  1. [[GStack]]: 브레인스토밍 및 역할 기반 스펙 명확화
  2. GSD (Get Stuff Done): 스펙을 50% 미만 토큰 분량의 Phase들로 분할
  3. SuperPower + Ralph Loop: TDD 백본과 Headless Loop를 통한 밤샘 자율 구축

## 예시
- 16개 Phase로 나뉜 대형 프로젝트 스펙을 [100개 이상의 백그라운드 headless 세션으로 자동 분회 실행하여 오케스트레이터 메모리 10%만 쓰고 밤새 전체 완료](file:///Users/railscraft/Obsidian/raw/Ralph%20Loop%20-%20AI%20%EC%BD%94%EB%94%A9%20%EC%9E%90%EC%9C%A8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20Spectrum%20Development%20%ED%86%B5%ED%95%A9.md#L117-L123).

## 충돌
- **Brown Field 프로젝트 오버킬**: 신규 구축(Green Field)이 아닌 기존 코드베이스의 소규모 수정에서는 3대 프레임워크 풀 통합 및 Ralph Loop 적용 시 관리 오버헤드가 과도할 수 있음.

## 관련 노트
- [[Agent Harness]]
- [[subagent-driven-development]]

