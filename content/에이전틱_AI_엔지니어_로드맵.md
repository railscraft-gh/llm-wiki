---
type: concept
status: draft
core: true
tags:
  - ai
  - roadmap
  - engineering
aliases:
  - 에이전틱 AI 엔지니어
sources:
  - raw/2026년 에이전틱 AI 엔지니어 로드맵. 기술, 스택, 그리고 순서.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
AI 모델을 단순히 학습시키는 것을 넘어, 도구 호출, 상태 유지, 실패 복구 및 다중 에이전트 오케스트레이션을 통해 자율적인 시스템을 설계하고 프로덕션 수준으로 빌드하는 엔지니어링 로드맵입니다.

## 핵심 요지
- 에이전트 시스템은 단순한 모델 호출이 아닌 **비동기 분산 시스템**으로 접근해야 합니다.
- 프롬프트 엔지니어링의 시대는 지나고 **구조화된 출력(Structured Output)**과 **상태 관리(State Management)**가 핵심 역량입니다.
- 학습 순서는 의존성 그래프(Foundation → Single-Agent → Multi-Agent → Ops)를 따라야 효율적입니다.

## 상세
[raw/2026년 에이전틱 AI 엔지니어 로드맵. 기술, 스택, 그리고 순서.md](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8B%B1%20AI%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%20%EB%A1%9C%EB%93%9C%EB%A7%B5.%20%EA%B8%B0%EC%88%A0,%20%EC%8A%A4%ED%83%9D,%20%EA%B7%B8%EB%A6%AC%EA%B3%A0%20%EC%88%9C%EC%84%9C.md)에서 제시하는 4계층 기술 스택:
1. **기초 계층**: Async Python, 타입 힌트, 스트리밍, JSON Schema.
2. **LLM 계층**: 도구 호출, 비용 최적화(모델 티어링), 시스템 프롬프트 디자인.
3. **에이전트 계층**: LangGraph 오케스트레이션, 다단계 상태 유지.
4. **프로덕션 계층**: 샌드박스 실행(E2B), MCP 통합, 평가 하네스(evals).

## 건너뛰어야 할 것
- 단순 프롬프트 엔지니어링 코스
- 로우(raw) 트랜스포머 수학 (파인튜닝 목적 제외)
- 벡터 데이터베이스의 과도한 비교 및 쇼핑

## 관련 노트
- [[하네스_엔지니어링]]
- [[Claude_Code_명령어_치트시트]]

