---
type: concept
status: draft
core: true
tags:
  - ai
  - roadmap
  - engineering
aliases:
  - 에이전틱 AI 엔지니어링
sources:
  - raw/2026년 에이전틱 AI 엔지니어 로드맵. 기술, 스택, 그리고 순서.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
AI 모델을 훈련시키는 것에서 벗어나, 에이전트가 자율적으로 도구를 사용하고 상태를 관리하며 작업을 수행하는 시스템을 설계하는 엔지니어링 영역입니다.

## 핵심 요지
- **엔지니어의 역할 변화**: 코드 작성에서 '코드 작성 환경(하네스)' 설계로 패러다임이 전환되었습니다.
- **필수 10대 기술**: 비동기 Python, API 인터페이스 설계, 분산 시스템, 구조화된 출력 처리, 오케스트레이션(LangGraph), 메모리 관리, 샌드박스 실행, MCP 연결 등이 핵심입니다.
- **지양할 학습**: 레거시 프롬프트 엔지니어링, 불필요한 수학적 파인튜닝, 벡터 DB 비교 쇼핑은 지양하고 프로덕션 인프라 구축에 집중합니다.

## 상세
[raw/2026년 에이전틱 AI 엔지니어 로드맵. 기술, 스택, 그리고 순서.md](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8B%B1%20AI%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%20%EB%A1%9C%EB%93%9C%EB%A7%B5.%20%EA%B8%B0%EC%88%A0,%20%EC%8A%A4%ED%83%9D,%20%EA%B7%B8%EB%A6%AC%EA%B3%A0%20%EC%88%9C%EC%84%9C.md)는 학습 순서를 '일정'이 아닌 '의존성 그래프'로 파악할 것을 권장합니다. 기초 단계인 비동기 Python과 시스템 기초 없이 오케스트레이션을 시도하는 것은 실패 확률을 높입니다.

## 학습 의존성 그래프
1. **Foundation**: 비동기 Python, Pydantic, 분산 시스템(Retry, Backoff).
2. **Single-Agent Fluency**: 구조화된 출력, 도구 호출, 프롬프트 디자인.
3. **Production Single-Agent**: LangGraph, 관찰 가능성(Tracing), 평가(Evaluation).
4. **Multi-Agent & Integration**: 메모리 공유, 샌드박스 실행, MCP 프로토콜.
5. **Production Agent Ops**: 보안, 인젝션 방어, 온콜 모니터링.

## 관련 노트
- [[에이전트_워크플로우_패턴]]
- [[에이전트_엔지니어링_30대_개념]]

