---
type: workflow
status: draft
core: false
tags:
  - llm
  - workflow
  - agent
aliases:
  - Daily Brief
  - 일일 브리핑 워크플로우
sources:
  - raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md
created: 2026-07-29
updated: 2026-07-29
---

# 일일 브리핑 (Daily Brief)

## 한 줄 정의

사용자가 수집한 로컬 생각과 연동된 외부 협업 도구의 최신 소식을 AI 에이전트가 분석·요약하여 매일 아침 제공하는 신뢰성 높은 맞춤형 요약 워크플로우입니다.

## 핵심 요지

- **맞춤형 정보 수집**: 온보딩 단계에서 설정한 사용자의 구체적 역할(엔지니어, PM, 디자이너, 창업자 등)과 관심사에 맞추어 소식을 분석하고 리포트를 구성한다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L78](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L78).
- **철저한 출처 명시**: 제공되는 모든 개별 정보에는 사용자가 직접 교차 검증할 수 있도록 명확한 출처 링크를 첨부한다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L78](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L78).
- **최신성 보장**: 데이터의 유효성을 보장하기 위해 리포트에 담기는 모든 정보는 최근 7일 이내의 정보로 엄격히 한정한다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L78](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L78).
- **신뢰도 등급 명시**: 개별 정보에 대한 에이전트 자체 평가 신뢰도 등급(Confidence Level)을 표기하여 왜곡 없는 정보 판단을 돕는다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L78](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L78).
- **점진적 성능 저하(Degrade Gracefully) 지원**: GitHub, Linear, Slack, PostHog 등 외부 협업 MCP 및 API 연동 인프라가 미비할 경우, 점진적 성능 저하(Degrade Gracefully) 정책에 따라 로컬 단일 채널(예: GitHub CLI)만 활용하여 최선의 리포트를 발행한다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L112](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L112).
- **워커 에이전트(Worker Agent) 위임**: 리포트 작성을 위한 대용량 I/O 및 데이터 가공 작업은 하위 경량 워커 에이전트(Worker Agent)들에게 위임하여 메인 대화 컨텍스트 비용 낭비를 절감한다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L120](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L120).

## 절차

COG 프레임워크 내에서 일일 브리핑이 수립되는 단계별 워크플로우는 다음과 같다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L78](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L78):

1. **브리핑 요청 입력**: 사용자가 에이전트에게 `Give me my daily brief` 명령어를 입력하여 브리핑 절차를 트리거한다.
2. **역할군 및 프로필 조회**: 에이전트가 온보딩 시 생성된 사용자 프로필 문서를 열고, 현재 사용자의 역할(PM, 엔지니어, 디자이너 등)에 할당된 관심 키워드 및 우선순위를 파악한다.
3. **데이터 수집 및 가공 위임**: 
   - 의사결정을 담당하는 고성능 헤드 에이전트가 6개의 경량 워커 에이전트에게 세부 데이터 취합 지시를 전달한다.
   - 워커 에이전트는 로컬 보관소의 `00-inbox`와 GitHub, Linear, Slack 등의 외부 연동 데이터를 수집하고 그 결과물을 로컬의 임시 경로(`/tmp/`)에 기록한 후 주소만 헤드 에이전트에 보고한다.
4. **리포트 발행**: 취합된 임시 데이터를 헤드 에이전트가 가독성 높게 정제하여 사용자에게 리포트 형식으로 최종 응답한다.

## 체크리스트

- [ ] 온보딩 설문을 통해 생성된 프로필이 정상적으로 유지되고 있는가?
- [ ] 브리핑 리포트에 포함된 정보가 최근 7일 이내의 데이터를 다루고 있는가?
- [ ] 각 요약 정보마다 교차 검증을 위한 출처 링크(Source Link)가 포함되었는가?
- [ ] 각 정보의 신뢰도 등급(Confidence Level)이 알맞게 부여되었는가?
- [ ] 외부 도구(GitHub CLI 등) 연동을 사용하는 경우 관련 API 인증 세션이 만료되지 않았는가?

## 예시 시나리오

### 1. 사용자 역할군별 커스텀 브리핑
- **PM(제품 매니저)**: PRD(제품 요구사항 정의서)나 릴리스 노트 스킬이 우선적으로 활성화되어, Linear 이슈 상태 및 PostHog의 신규 기능 유저 유입량 지표 요약이 리포트 최상단에 배치된다.
- **엔지니어**: 팀 협업 리서치, GitHub Pull Request 및 커밋 이력, 그리고 개발 인프라 세부 정보 수집이 중점적으로 반영된다.

### 2. 출력 리포트 구성 예시
```markdown
# 2026-07-29 Daily Brief Report
> **역할**: 백엔드 엔지니어 | **최신성**: 최근 7일 이내 기준

### 1. [High] 신규 API 디자인 가이드라인 업데이트
- **내용**: RESTful API 설계 규칙에 따른 보안 및 캐싱 가이드라인이 수정되었습니다.
- **신뢰도**: A (공식 문서 반영 완료)
- **출처**: [REST API Security Guidelines](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L110)

### 2. [Medium] GitHub 이슈 #45 병합 지연 안내
- **내용**: 데이터베이스 마이그레이션 이슈와 관련하여 테스트가 실패하여 PR 병합이 보류되었습니다.
- **신뢰도**: B (워커 에이전트 GitHub CLI 로그 취합)
- **출처**: [GitHub Issue #45 - DB Migration Fail](https://github.com/example/repo/issues/45)
```

## 관련 노트

- [[COG]]
- [[브레인덤프]]
- [[AI 세컨드 브레인]]
- [[Claude.md 운영 원칙]]
- [[Model Context Protocol]]

## 출처

- [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md)
