---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - claude-code
  - workflow
aliases: []
sources:
  - "raw/GStack - Claude Code 가상 엔지니어링 팀 도구.md"
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의

Claude Code를 비롯한 AI 코딩 에이전트를 23명의 가상 전문가와 8개의 파워 도구로 구성된 완전한 엔지니어링 조직으로 탈바꿈시켜 주는 슬래시 커맨드 기반의 오픈소스 도구 모음.

## 핵심 요지

- 단순한 코파일럿(Copilot)이 아닌 "가상 팀(Team)"으로 접근하여 소프트웨어 개발의 전체 생명주기(Think → Plan → Build → Review → Test → Ship → Reflect)를 자동화한다.
- Y Combinator CEO인 Garry Tan이 직접 파트타임으로 개발하여 엄청난 생산성 향상을 실증한 프로젝트이다.
- Claude Code 외에도 OpenAI Codex CLI, Cursor 등 10개의 각기 다른 AI 코딩 에이전트와 완벽히 호환된다.

## 상세

GStack은 AI가 그저 사용자가 시키는 코드만 짜는 도구에 머무는 것을 방지한다. `/office-hours` (CEO 리뷰), `/plan-eng-review` (엔지니어링 매니저 설계), `/review` (스태프 엔지니어 코드 점검), `/qa` (QA 리드 브라우저 테스트) 등 세분화된 슬래시 커맨드를 통해, 에이전트에게 **명확한 역할(Persona)과 책임**을 부여한다. [문서](file:///Users/railscraft/Obsidian/raw/GStack%20-%20Claude%20Code%20%EA%B0%80%EC%83%81%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20%ED%8C%80%20%EB%8F%84%EA%B5%AC.md#L35)에 따르면 각 스킬이 다음 스킬로 유기적으로 연결되어, 계획 단계부터 배포 후 모니터링까지 전체 루프를 완성한다. 지속적 체크포인트 기능과 취향 학습 모델(Taste memory)을 통해 중단 없는 세션 유지와 개인화된 디자인 탐색도 지원한다.

## 예시

```
사용자: /office-hours 캘린더 브리핑 앱을 만들고 싶어
Claude (YC 오피스 아워 모드): 문제를 재정의하여 질문하고 제품의 본질을 짚음
사용자: /plan-ceo-review
Claude: 기능 범위와 전략을 결정함
사용자: /autoplan
Claude: 설계도를 자동 생성
사용자: /ship
Claude: 테스트 실행, 리뷰 후 PR 자동 생성
```

## 충돌

- **명령어 과부하**: 23명의 가상 팀원과 파워 도구를 모두 슬래시 커맨드로 기억하고 호출해야 하므로, 초기 학습 곡선이 존재하며 모든 파이프라인을 완전히 익숙하게 사용하기 전에는 오히려 단순 프롬프팅보다 느리게 느껴질 수 있다.
- **너무 엄격한 프로세스**: 간단한 스크립트 수정이나 토이 프로젝트의 경우, 이 무거운 엔터프라이즈 수준의 7단계 프로세스(Think → Ship)가 오버 엔지니어링으로 작동할 우려가 있다.

## 관련 노트

- [[Claude Code]]
- [[오픈소스 장기 기억 인프라 (GBrain)]]
- [[에이전틱 RAG]]

