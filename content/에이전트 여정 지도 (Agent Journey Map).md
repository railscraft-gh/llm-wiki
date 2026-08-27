---
type: workflow
status: draft
core: false
tags:
  - agent
  - product
  - ax
aliases:
  - Agent Journey Map
sources:
  - raw/Agent Journey Map. Designing Software for AI Agents.md
created: 2026-08-01
updated: 2026-08-01
---
# [[에이전트 여정 지도]] (Agent Journey Map)

## 한 줄 정의
AI 에이전트가 특정 소프트웨어 플랫폼을 처음 발견하는 순간부터 성공적인 작업 완수에 이르기까지 거치는 5단계의 채택 퍼널(Adoption Funnel).

## 핵심 요지
- 전통적인 사용자 여정 지도(User Journey Map)나 개발자 여정 지도의 개념을 AI 에이전트에 맞게 치환한 프레임워크.
- 5단계: **발견(Discover) $\rightarrow$ 평가(Evaluate) $\rightarrow$ 온보딩(Onboard) $\rightarrow$ 통합(Integrate) $\rightarrow$ 옹호(Advocate)**.
- 이 과정은 단방향 퍼널이 아니라 끊임없이 순환하는 사이클(Cycle)이다.

## 상세
1. **발견 (Discover)**: 에이전트가 제품의 존재를 인지할 수 있는가. [[LLM]]의 훈련 데이터 인용 빈도와 에이전트의 검색 가시성이 핵심이다 (예: [[GEO]], [[LLM]]O 활용 여부).
2. **평가 (Evaluate)**: 에이전트가 문서를 읽고 제품의 적합성을 판단할 수 있는가. `llms.txt` 표준보다는 순수 마크다운 포맷이 봇들에게 더 효과적인 것으로 나타난다.
3. **온보딩 (Onboard)**: 인간 개입 없이 자율적으로 설정 및 인증(API Key 등)을 완료할 수 있는가. OAuth 같은 인간 중심 인증 방식이 주된 병목이 되며, [[에이전트 스킬]](Agent Skill)과 샌드박스 환경 제공이 돌파구가 된다.
4. **통합 (Integrate)**: 에이전트가 플랫폼을 에러 없이 안정적으로 조작할 수 있는가. CLI, 검증 가능한 API(Verifiable APIs), [[MCP]], 특화된 [[에이전트 스킬]] 등이 통합 수단으로 활용되며, 모호한 에러 없이 컨텍스트를 충분히 제공하는 기계 가독형 스펙이 요구된다.
5. **옹호 (Advocate)**: 에이전트가 특정 도구를 자신의 '주력 테크 스택'으로 선택하고 추천하게 만드는 단계. 퍼블릭 프로젝트 내 채택 빈도와 [[LLM]] 내부의 긍정적 편향(Sentiment)이 맞물려 다시 '발견' 단계로 선순환 구조를 형성한다.

## 관련 노트
- [[에이전트 경험 (Agent Experience, AX)]]
- [[LLMO]]

## 출처
- raw/Agent Journey Map. Designing Software for AI Agents.md
