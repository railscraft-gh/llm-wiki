---
type: workflow
status: draft
core: false
tags:
- llm
- design
- workflow
- claude-code
aliases:
- Claude Code 대시보드 워크플로우
- Claude-Code-기반-대시보드-디자인-워크플로우-(Dashboard-Design-Workflow-with-Claude-Code)
sources:
- raw/How to Design a Production-Ready Dashboard with Claude Code.md
created: 2026-07-18
updated: 2026-07-18
---
# [[Claude Code]] 기반 대시보드 디자인 [[워크플로]]우 (Dashboard Design Workflow with [[Claude Code]])

## 한 줄 정의
[[Claude Code]]와 사내 [[디자인 시스템]](GitHub) 및 지식 베이스(MCP)를 연동하여, 기획(Planning)에서 구현(Implementation) 및 다각적 자기 검열(Critique)에 이르기까지 프로덕션 수준의 대시보드를 설계·개발하는 4단계 디자인 [[워크플로]]우다[raw/How to Design a Production-Ready Dashboard with [[Claude Code]].md#L11](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20Design%20a%20Production-Ready%20Dashboard%20with%20Claude%20Code.md#L11).

## 핵심 요지
- **페르소나 중심의 맥락 설계**: 단순 지시("대시보드 설계해 줘")를 지양하고, 사용자의 핵심 의사결정 질문(SLA 달성률, 대기열 지연 등)을 맥락으로 명시해 Claude에 주입한다.
- **기획과 구현의 분리**: 곧바로 코딩하지 않고 Plan 모드로 전환하여 텍스트 기획안을 명세서(Specification) 수준으로 다듬은 후 코드를 작성한다.
- **[[디자인 시스템]] 저장소 직접 연동**: 범용적인 기본 디자인 스타일을 탈피하기 위해 사내 [[디자인 시스템]]의 GitHub 저장소를 직접 입력해 일치도를 확보한다.
- **다각적 역할의 자가 검열(Critique)**: 선임 제품 디자이너, 웹 접근성 전문가 등 다각적인 가상 페르소나 역할을 부여해 완성된 대시보드를 스스로 평가하고 리팩토링하게 유도한다.

## 상세

### 1단계: 사용자 맥락과 핵심 의사결정 정의[raw/How to Design a Production-Ready Dashboard with [[Claude Code]].md#L15](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20Design%20a%20Production-Ready%20Dashboard%20with%20Claude%20Code.md#L15)
사용자가 상황을 직관적으로 조감하기 위해, 대시보드 설계 시작 단계에서 아래 항목을 구체적인 맥락 정보로 정의한다.
- **페르소나 규격**: 예컨대 "10명에서 50명의 상담원을 관리하는 고객 지원 매니저"[raw/How to Design a Production-Ready Dashboard with [[Claude Code]].md#L25](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20Design%20a%20Production-Ready%20Dashboard%20with%20Claude%20Code.md#L25).
- **의사결정을 위한 질문 리스트**:
  - 어느 큐(queue)에 즉각적인 조치가 필요한가?
  - SLA(서비스 수준 계약) 위반이 임박한 티켓 건수는 얼마인가?
  - 전반적인 서비스 효율이 향상되고 있는가?

### 2단계: Plan 모드를 활용한 상세 기획 및 Revise 피드백[raw/How to Design a Production-Ready Dashboard with [[Claude Code]].md#L45](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20Design%20a%20Production-Ready%20Dashboard%20with%20Claude%20Code.md#L45)
- **Plan 모드 작동**: Claude가 디렉토리 구조를 분석해 텍스트 기획안을 초안으로 제안하게 만든다.
- **Revise 고도화**: 지표 정의, 필터 조건, 페이지 분할, 데이터 테이블 구조, 에러/빈 화면 상태(Empty states) 대응 등 12가지 상세 사양을 추가 피드백으로 전달하며 명세서를 조율한다[raw/How to Design a Production-Ready Dashboard with [[Claude Code]].md#L71](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20Design%20a%20Production-Ready%20Dashboard%20with%20Claude%20Code.md#L71).
- **사내 지식 베이스 통합**: `CLAUDE.md` 규칙을 참조하거나, Notion MCP 서버 등을 연동해 사내 맥락 데이터 소스를 공급한다.

### 3단계: GitHub [[디자인 시스템]] 저장소 연동[raw/How to Design a Production-Ready Dashboard with [[Claude Code]].md#L112](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20Design%20a%20Production-Ready%20Dashboard%20with%20Claude%20Code.md#L112)
범용적인 비주얼 스타일로 인해 어우러지지 못하는 개별 컴포넌트 양산을 막기 위한 핵심 조치다.
- **GitHub 저장소 참조**: IBM Carbon 등 기존에 검증된 사내 [[디자인 시스템]] 저장소 링크를 기입하고 컴포넌트 코드 및 스타일 토큰을 적용하도록 지시한다[raw/How to Design a Production-Ready Dashboard with [[Claude Code]].md#L124](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20Design%20a%20Production-Ready%20Dashboard%20with%20Claude%20Code.md#L124).
- **기술적 권장 사항**: [[Figma MCP]]를 통한 디자인 명세 컴파일은 변환 과정에서 시각적 일관성이 손상될 위험이 있으므로, 코드 저장소 직접 연동을 더 권장한다.

### 4단계: 다각적 가상 페르소나 자가 감수 (Critique)[raw/How to Design a Production-Ready Dashboard with [[Claude Code]].md#L153](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20Design%20a%20Production-Ready%20Dashboard%20with%20Claude%20Code.md#L153)
대시보드 완성 후 다음 가상 페르소나들을 대입해 스스로 개선 우선순위를 찾도록 프롬프트를 실행한다.
- **선임 제품 디자이너**: 정보 위계의 모호함 및 중복 지표 여부 검수.
- **웹 접근성 전문가**: 색상 대비, 포커스 이동 순서, 스크린 리더 요건 점검.
- **프론트엔드 시스템 아키텍트**: 컴포넌트 중복성 제거 및 반응형 레이아웃 최적화.

## 예시
- **Critique 프롬프트 예시**:
  ```markdown
  선임 제품 디자이너 및 접근성 전문가의 관점에서 이 대시보드를 리뷰해 줘.
  다음 항목들을 바탕으로 가장 개선이 시급한 5가지 핵심 문제를 찾아라[raw/How to Design a Production-Ready Dashboard with Claude Code.md#L175](file:///Users/railscraft/Obsidian/raw/How%20to%20Design%20a%20Production-Ready%20Dashboard%20with%20Claude%20Code.md#L175):
  - 정보 위계 및 배치 구조
  - 빠른 의사결정 지원 여부
  - 웹 접근성 요건 준수
  
  실제 코드를 수정하기 전에 각 문제의 원인부터 설명하고, 승인된 문제들만 고쳐라.
  ```

## 충돌
- **[[Figma MCP]] 연동 vs Git 저장소 연동**: Figma의 스타일 가이드를 직접 파싱하여 코드로 번역하는 방식([[Figma MCP]])은 컴파일 오차가 빈번하므로 시각적 일치도가 떨어지기 쉽다. 반면 스타일 토큰과 UI 컴포넌트 코드가 이미 구현되어 있는 Git 저장소를 직접 공급하는 방식이 완성도 높은 코드를 빠르게 구현하는 데 훨씬 적합하다.

## 관련 노트
- [[DESIGN.md 워크플로우]]
- [[Claude.md 운영 원칙]]
- [[Model Context Protocol]]
- [[MEMORY.md 운영 원칙]]

## 출처
- raw/How to Design a Production-Ready Dashboard with [[Claude Code]].md
