---
type: concept
status: draft
core: true
tags:
  - ai-engineering
  - harness-engineering
  - claudecode
aliases:
  - CLAUDE.md
  - 하네스 엔지니어링
sources:
  - raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
AI 코딩 에이전트의 반복적인 실패 패턴을 시스템적으로 방지하기 위해 저장소 루트에 배포하는 65줄 내외의 마크다운 행동 지침 파일.

## 핵심 요지
하네스 엔지니어링의 핵심 구성 요소로, Andrej Karpathy가 지적한 LLM의 3대 실패 패턴(묵시적 가정, 과도한 엔지니어링, 부수적 피해)을 4가지 행동 원칙(Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution)으로 해결하는 실무적 인프라이다.

## 상세
- **Think Before Coding**: 코딩 전 가정을 명시하고 애매한 것은 질문할 것.
- **Simplicity First**: 불필요한 추상화 없이 문제를 해결하는 최소한의 코드 작성.
- **Surgical Changes**: 기존 코드의 부수적인 스타일 수정 대신 요청된 변경사항만 정확히 반영.
- **Goal-Driven Execution**: '작동하게 해줘' 대신 검증 가능한 성공 기준(테스트 통과 등)을 제시 [raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md#L125](file:///Users/railscraft/Obsidian/raw/%ED%95%98%EB%84%A4%EC%8A%A4%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20-%2065%EC%A4%84%20CLAUDE.md%EA%B0%80%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20%EC%8A%A4%ED%82%AC%EC%9D%B8%20%EC%9D%B4%EC%9C%A0.md#L125).

## 예시
프로젝트 루트에 `CLAUDE.md` 파일을 생성하여 에이전트가 매 세션 시작 시 지침을 준수하도록 환경 설계 [raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md#L280](file:///Users/railscraft/Obsidian/raw/%ED%95%98%EB%84%A4%EC%8A%A4%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20-%2065%EC%A4%84%20CLAUDE.md%EA%B0%80%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20%EC%8A%A4%ED%82%AC%EC%9D%B8%20%EC%9D%B4%EC%9C%A0.md#L280).

## 충돌
너무 긴 가이드라인은 에이전트의 준수율을 떨어뜨리므로 200줄 이하(권장 60줄 내외)로 유지해야 함 [raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md#L290](file:///Users/railscraft/Obsidian/raw/%ED%95%98%EB%84%A4%EC%8A%A4%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20-%2065%EC%A4%84%20CLAUDE.md%EA%B0%80%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20%EC%8A%A4%ED%82%AC%EC%9D%B8%20%EC%9D%B4%EC%9C%A0.md#L290).

## 관련 노트
- [[하네스_엔지니어링]]
- LLM 인프라 설계 패턴

