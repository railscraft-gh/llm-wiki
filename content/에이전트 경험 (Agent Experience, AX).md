---
type: concept
status: draft
core: false
tags:
  - design
  - agent
  - product
aliases:
  - Agent Experience
  - AX
sources:
  - raw/Agent Journey Map. Designing Software for AI Agents.md
created: 2026-08-01
updated: 2026-08-01
---
# [[에이전트 경험]] (Agent Experience, AX)

## 한 줄 정의
일반 사용자나 인간 개발자 대신 AI 에이전트가 특정 소프트웨어 제품이나 플랫폼의 사용자로서 겪게 되는 총체적인 상호작용 및 사용 경험.

## 핵심 요지
- Netlify의 CEO Mathias Biilmann이 2025년 처음 정의한 용어.
- 기존의 사용자 경험(UX), 개발자 경험(DX)과 달리 "사용자"가 감정이 없는 AI 에이전트다. 
- 감정 곡선(Sentiment curve) 대신 에이전트의 실패 유형과 신뢰성 곡선(Reliability curves)을 측정하여 제품 사용성을 개선해야 한다.
- 소프트웨어 제품 기획 시 에이전트를 위한 문서 가독성, 기계 친화적 API 구축 등이 필수 과제가 되면서, 제품 주도 성장(PLG)을 넘어 [[에이전트 주도 성장]](Agent-led growth)으로 패러다임이 이동 중이다.

## 상세
에이전트는 독자적으로 소프트웨어 플랫폼을 검색하고, 평가하고, 활용한다. 따라서 [[에이전트 경험]]을 최적화한다는 것은 에이전트가 우리 제품을 쉽게 발견하고 도입할 수 있도록 설계함을 뜻한다.

에이전트를 위한 기계 친화적 정보 구조로는 `llms.txt` 표준 등이 제안되었으나 실제로는 마크다운(.md) 포맷이 더 선호되는 편이다.
또한, 에이전트가 소프트웨어와 통신하는 인터페이스 설계 시 "낮은 바닥, 높은 천장(Low floor, high ceiling)" 접근법이 중요하다. 즉, 반복적인 작업은 특화된 전용 도구로 쉽게 처리하고(낮은 바닥), 예측 불가능한 모호한 작업은 자유도가 높은 범용 도구(exec 등)로 돌파할 수 있게(높은 천장) 열어두어야 한다.

## 관련 노트
- [[에이전트 여정 지도 (Agent Journey Map)]]
- [[Claude Code]]

## 출처
- raw/Agent Journey Map. Designing Software for AI Agents.md
