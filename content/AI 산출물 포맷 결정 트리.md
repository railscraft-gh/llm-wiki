---
aliases:
- HTML vs Markdown 결정 트리
- Markdown source HTML artifact
- AI-산출물-포맷-결정-트리
core: false
created: 2026-05-26
sources:
- Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻
- raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md
- raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md
- raw/99%의 사람보다 더 나은 Harness Engineer를 만드는 법.md
status: evergreen
tags:
- llm
- agent
- markdown
- html
type: workflow
updated: 2026-07-10
---
# AI 산출물 포맷 결정 트리

## 한 줄 정의
AI 산출물 포맷 결정 트리는 Markdown과 HTML을 취향 문제가 아니라 "누가 읽고 무엇을 할 것인가"라는 독자 기준으로 고르는 실무 규칙이다.

## 핵심 요지
- 사람이 브라우저에서 읽고 탐색하고 공유해야 하면 HTML이 유리하다.
- 다른 agent가 읽고 다음 단계로 넘겨야 하면 Markdown이 더 가볍고 parse-friendly하다.
- 사람과 agent가 둘 다 읽는 문서는 Markdown source와 HTML artifact를 분리하는 것이 가장 안정적이다.
- Thariq Shihipar([[Claude Code]] 엔지니어링 리드)는 '[[The Unreasonable Effectiveness of HTML]]'을 기고하고 HTML 출력을 적극 옹호했다.
- 2,000단어 보고서 기준 Markdown(3,000 토큰) 대비 Lean HTML은 7,200 토큰(2.4배), Full HTML(CSS 포함)은 14,400 토큰(4.8배)의 오버헤드를 갖는다.
- 보안(JS XSS), 접근성(WCAG 미준수), HTML diff의 극심한 소음이 Team HTML 진영이 마주하는 실무 장벽이다.

## 상세

이 프레임의 핵심은 포맷 자체를 숭배하지 않는 것이다. Markdown은 사람이 직접 편집하고 읽고 닫는 문서에 강했고, AI 초기에도 학습 데이터 관성 덕분에 기본 산출물로 굳어졌다. 하지만 agent output이 길어지고, 표·비교·내비게이션·접기·시각화가 필요해지면 Markdown은 텍스트 벽이 되기 쉽다.

반대로 HTML은 인터랙션과 시각적 탐색에 강하지만 토큰 비용, 보안, diff 소음이 커질 수 있다. 그래서 실무 기준은 세 갈래다. **사람만 읽는가?** 그렇다면 HTML이 유리하다. **다른 agent만 읽는가?** 그렇다면 Markdown이 낫다. **둘 다 읽는가?** 그렇다면 Git에 남는 source of truth는 Markdown으로 두고, 사람이 소비하는 companion artifact만 HTML로 생성하는 분리가 안전하다.

이 원칙은 [[LLM Wiki 운영 패턴]]과도 연결된다. wiki 본문은 diff와 재편집이 쉬운 Markdown source가 적합하지만, 최종 리포트나 시각화된 브리프는 HTML artifact가 더 맞을 수 있다. 또한 [[Claude.md 운영 원칙]]이나 [[Agent Harness]] 관점에서 보면, 포맷 선택 역시 agent output contract의 일부다. 어떤 독자를 상정하는지 미리 정하면 산출물 구조와 검증 기준도 함께 선명해진다.

### 독자별 포맷 결정 트리
- **사람이 읽는 경우 (PR 리뷰, 의사결정 보고서 등)**: 인터랙티브 섹션 접기, severity 색상, 공유 가능한 링크를 제공하는 **HTML**이 유리.
- **기계(에이전트)가 읽는 경우 (파이프라인 데이터 전달 등)**: 파싱이 쉽고 가벼운 **Markdown** 사용.
- **양쪽 다 읽는 경우 (PR 본문이자 기록용)**: Git diff 추적을 위한 source of truth는 **Markdown**으로 두고, 사람을 위한 companion **HTML** 아티팩트를 별도 생성.
- **HTML diff 소음 제어**: template-plus-data 패턴을 도입해 HTML 템플릿은 고정하고 변경 값만 JSON payload로 교환함으로써 diff 가독성을 확보한다.

## 예시

- stakeholder report: 브라우저에서 열고 공유하므로 HTML
- agent 간 중간 산출물: 다음 단계 parsing이 중요하므로 Markdown
- 팀 문서 + 브라우저 소비: 저장은 Markdown, 배포본은 HTML
- 개인 메모, wiki 노트: 수정과 링크가 쉬운 Markdown

### 실무 가동 규칙 요약
- 팀원 배포용 PR 리뷰 -> HTML
- 에이전트 간 중간 산출물 -> Markdown
- stakeholder 보고서 -> HTML
- Git으로 추적하는 소스 -> Markdown
- [[디자인 시스템]] 비교 및 인터랙티브 아티팩트 -> HTML
- 개인 메모, wiki 노트 -> Markdown

## 충돌
현재 확인된 충돌 없음.

## 관련 노트
- [[LLM Wiki 운영 패턴]]
- [[Claude.md 운영 원칙]]
- [[Agent Harness]]
- [[Agent Native Infrastructure]]
- [[Context Engineering]]

## 출처
- Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻
- [CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다](file:///Users/railscraft/[[Obsidian]]/raw/[[CLAUDE.md]]%20%ED%8C%8C%EC%9D%BC%20%ED%95%98%EB%82%98%EA%B0%80%20%EB%B0%94%EC%9D%B4%EB%9F%B4%EC%9D%84%20%ED%83%94%EB%8B%A4.%20%EC%9D%B4%EC%9C%A0%EB%8A%94%20%EB%AF%BC%EB%A7%9D%ED%95%A0%20%EC%A0%95%EB%8F%84%EB%A1%9C%20%EB%8B%A8%EC%88%9C%ED%95%98%EB%8B%A4.md)
- [99%의 사람보다 더 나은 Harness Engineer를 만드는 법](file:///Users/railscraft/[[Obsidian]]/raw/99%25%EC%9D%98%20%EC%82%AC%EB%9E%8C%EB%B3%B4%EB%8B%A4%20%EB%8D%94%20%EB%82%98%EC%9D%80%20Harness%20Engineer%EB%A5%BC%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%B2%95.md)

