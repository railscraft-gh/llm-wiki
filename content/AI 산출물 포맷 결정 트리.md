---
type: workflow
status: evergreen
core: false
tags:
  - llm
  - agent
  - markdown
  - html
aliases:
  - HTML vs Markdown 결정 트리
  - Markdown source HTML artifact
sources:
  - raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md
created: 2026-05-26
updated: 2026-05-26
---

# AI 산출물 포맷 결정 트리

## 한 줄 정의

AI 산출물 포맷 결정 트리는 Markdown과 HTML을 취향 문제가 아니라 "누가 읽고 무엇을 할 것인가"라는 독자 기준으로 고르는 실무 규칙이다.

## 핵심 요지

- 사람이 브라우저에서 읽고 탐색하고 공유해야 하면 HTML이 유리하다.
- 다른 agent가 읽고 다음 단계로 넘겨야 하면 Markdown이 더 가볍고 parse-friendly하다.
- 사람과 agent가 둘 다 읽는 문서는 Markdown source와 HTML artifact를 분리하는 것이 가장 안정적이다.

## 상세

이 프레임의 핵심은 포맷 자체를 숭배하지 않는 것이다. Markdown은 사람이 직접 편집하고 읽고 닫는 문서에 강했고, AI 초기에도 학습 데이터 관성 덕분에 기본 산출물로 굳어졌다. 하지만 agent output이 길어지고, 표·비교·내비게이션·접기·시각화가 필요해지면 Markdown은 텍스트 벽이 되기 쉽다.

반대로 HTML은 인터랙션과 시각적 탐색에 강하지만 토큰 비용, 보안, diff 소음이 커질 수 있다. 그래서 실무 기준은 세 갈래다. **사람만 읽는가?** 그렇다면 HTML이 유리하다. **다른 agent만 읽는가?** 그렇다면 Markdown이 낫다. **둘 다 읽는가?** 그렇다면 Git에 남는 source of truth는 Markdown으로 두고, 사람이 소비하는 companion artifact만 HTML로 생성하는 분리가 안전하다.

이 원칙은 [[LLM Wiki 운영 패턴]]과도 연결된다. wiki 본문은 diff와 재편집이 쉬운 Markdown source가 적합하지만, 최종 리포트나 시각화된 브리프는 HTML artifact가 더 맞을 수 있다. 또한 [[Claude.md 운영 원칙]]이나 [[Agent Harness]] 관점에서 보면, 포맷 선택 역시 agent output contract의 일부다. 어떤 독자를 상정하는지 미리 정하면 산출물 구조와 검증 기준도 함께 선명해진다.

## 예시

- stakeholder report: 브라우저에서 열고 공유하므로 HTML
- agent 간 중간 산출물: 다음 단계 parsing이 중요하므로 Markdown
- 팀 문서 + 브라우저 소비: 저장은 Markdown, 배포본은 HTML
- 개인 메모, wiki 노트: 수정과 링크가 쉬운 Markdown

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[LLM Wiki 운영 패턴]]
- [[Claude.md 운영 원칙]]
- [[Agent Harness]]
- [[Agent Native Infrastructure]]
- [[Context Engineering]]

