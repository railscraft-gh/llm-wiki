---
type: concept
status: draft
core: true
tags:
- ai-engineering
- second-brain
- para
aliases:
- AI 세컨드 브레인
- PARA 워크스페이스
sources:
- raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
PARA(Projects, Areas, Resources, Archives) 방법론을 적용하여 AI 에이전트가 개인의 업무 맥락을 지속적으로 이해하고 구조화하도록 구축한 지식 시스템.

## 핵심 요지
지식 노동자가 파편화된 업무 맥락을 AI와 공유하지 못해 발생하는 낭비(매번 새로 설명해야 함)를 해결하기 위해, AI 에이전트가 이해하기 쉬운 계층적 폴더 구조(PARA)와 루트 컨텍스트 파일(`CLAUDE.md`)을 결합하여 업무 파트너로서의 세컨드 브레인을 구축함.

## 상세
- **PARA 방법론**: 정보의 활성화 상태와 중요도를 기준으로 분류하여 에이전트의 작업 가이드를 제공 [raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md#L23](file:///Users/railscraft/Obsidian/raw/How%20We%20Built%20an%20AI%20Second%20Brain%20for%2060K%20Knowledge%20Workers-ko.md#L23).
- **점진적 공개(Progressive Disclosure)**: 모든 정보를 컨텍스트에 넣지 않고, 루트 `CLAUDE.md`에서 시작해 필요한 프로젝트 맥락만 로드하여 컨텍스트 윈도우 한계와 성능 저하 방지 [raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md#L31](file:///Users/railscraft/Obsidian/raw/How%20We%20Built%20an%20AI%20Second%20Brain%20for%2060K%20Knowledge%20Workers-ko.md#L31).
- **스킬(Skills)**: 마크다운 파일로 정의된 재사용 가능 매뉴얼. 에이전트의 특정 업무(회의록 요약, 보고서 생성 등) 처리 절차를 정의하며 사내 공유 가능 [raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md#L53](file:///Users/railscraft/Obsidian/raw/How%20We%20Built%20an%20AI%20Second%20Brain%20for%2060K%20Knowledge%20Workers-ko.md#L53).

## 예시
`/para-init` 스킬을 통해 자동으로 워크스페이스 구조를 생성하고 분석하는 프로세스 [raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md#L57](file:///Users/railscraft/Obsidian/raw/How%20We%20Built%20an%20AI%20Second%20Brain%20for%2060K%20Knowledge%20Workers-ko.md#L57).

## 충돌
단순 지식 저장소가 아니라 시스템(인프라 레이어)과의 연동이 없다면 단순 챗봇에 머물게 됨 [raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md#L38](file:///Users/railscraft/Obsidian/raw/How%20We%20Built%20an%20AI%20Second%20Brain%20for%2060K%20Knowledge%20Workers-ko.md#L38).

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[LLM Wiki 운영 패턴]]

## 출처
- [6만 명의 지식 노동자를 위한 [[AI 세컨드 브레인]] 구축기](file:///Users/railscraft/Obsidian/raw/How%20We%20Built%20an%20AI%20Second%20Brain%20for%2060K%20Knowledge%20Workers-ko.md)
