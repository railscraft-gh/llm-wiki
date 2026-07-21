---
type: concept
status: draft
core: false
tags:
  - productivity
  - ai-agent
  - knowledge-management
  - para
aliases: [AI 세컨드 브레인]
sources:
  - raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
PARA(Projects, Areas, Resources, Archives) 방법론과 MCP([[Model Context Protocol]])를 결합하여 지식 노동자의 파편화된 업무 맥락을 구조화하고 에이전트와 공유하는 시스템입니다.

## 핵심 요지
- **PARA 워크스페이스:** 에이전트에게 업무 지도를 제공하여 폴더 구조와 중요도를 인지시킴.
- **점진적 컨텍스트 로드:** 매번 전체 문서를 로드하지 않고, `CLAUDE.md`로 루트 맥락을 관리하며 필요 시 세부 폴더로 진입하여 정보를 노출.
- **인프라 연결(MCP):** 사내 협업 툴(메신저, 위키, 코드 리뷰 등)과 에이전트를 MCP/CLI로 안전하게 연동.
- **커뮤니티 중심 확장:** 별도의 컴파일 없이 마크다운 기반의 '스킬(Skills)'을 구성하여 누구나 업무 자동화 도구를 제작/공유.

## 상세
메타에서 구축한 [[AI 세컨드 브레인]]은 6만 명 이상의 구성원들이 직면한 업무 파편화 문제를 해결합니다. 에이전트가 PARA 분류법을 이해하여 지식을 구조화하고, 사내 도구(MCP)를 통해 맥락에 맞는 실시간 데이터에 접근합니다. 사용자는 직접 만든 마크다운 기반 스킬로 반복 업무를 자동화하며, 이는 하향식 지시가 아닌 사내 구성원들의 자발적 기여로 확산되었습니다.

## 관련 노트
- [[Harness_Engineering]]
- [[Top_1_Percent_Growth_Strategy]]

