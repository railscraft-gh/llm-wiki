---
aliases:
- 루프-디자인-(Loop-Design)
core: false
created: 2026-07-10
sources:
- raw/0xMorty_Loop_Design.md
status: evergreen
tags:
- llm
- agent
- workflow
type: workflow
updated: 2026-07-10
---
# 루프 디자인 (Loop Design)

## 한 줄 정의

에이전트가 단발성 프롬프트를 넘어 자율적으로 도구를 사용하고, 피드백을 반복하며 최종 목표를 달성하는 실행 루프(Loop)를 엔지니어링적으로 설계하는 기법이다.

## 핵심 요지
- 루프 디자인의 5단계: AI의 자율성과 [[워크플로]] 제어 수준에 따라 규칙 기반 자동화(1단계), 가이드형 실행(2단계), 인간 협업형 에이전트(3단계), 자율 [[워크플로]] 에이전트(4단계), 다중 [[에이전트 스웜]](5단계)으로 발전한다.
- 격리와 병렬성 (9단계 스웜 루프): 다중 에이전트 협업 시 소스코드 충돌과 컨텍스트 오염을 방지하기 위해 git worktree 기반의 작업 공간 격리(Isolation)와 3~5개 규모의 병렬 실행(Fan out)을 강제한다.
- 게이트웨이 검증과 평가: 서브 에이전트의 작업 완료 시점에 SubagentStop 훅(Hook)과 독립적인 평가 에이전트(Grader)를 배치하여, 빌드/테스트/보안 통과 여부를 검증하고 기준 미달 시 반려하는 자동화 품질 게이트를 구축한다.
- 통합 제어: 개별 에이전트가 메인 브랜치에 직접 머지하는 것을 금지하고, 리드 에이전트(Lead Agent) 단일 지휘소에서 의존성 순서대로 코드를 통합하고 전체 테스트를 재수행한다.

## 상세

### 1. 루프 디자인의 5단계 (The 5 Levels of Loop Design)
AI를 단순 챗봇으로 활용하는 단계에서 목적 지향적 자율 시스템으로 고도화하는 기준이다.
1. **1단계: 규칙 기반 자동화 (Scripted/Rule-Based Automation)**: 예외 처리 능력이 없는 단순 If-This-Then-That 기반의 고정 조건식 자동화.
2. **2단계: 가이드형 실행 (Guided Execution / Precision Prompting)**: 인간이 역할과 맥락, 출력 템플릿을 구체적으로 제공하는 구조화 프롬프팅 단계.
3. **3단계: 인간 협업형 에이전트 (Assisted/Human-in-the-Loop Agents)**: 단계를 밟아가며 자율 수행하되, 권한 승인이나 품질 검토 등 주요 체크포인트에서 인간의 피드백을 수용하는 형태.
4. **4단계: 자율 [[워크플로]] 에이전트 (Autonomous Workflow Agents)**: 버그 리포트 분석, 보고서 작성 등 특정 프로세스 전체를 종단간(End-to-End) 자율적으로 판단해 완결 짓는 단계.
5. **5단계: 다중 에이전트 시스템 (Multi-Agent Swarm / Goal-Directed Autonomy)**: 전략적 목표를 주면 다수의 에이전트가 자율적으로 역할을 분배하고, 상호 협업/[[검증 루프]]를 돌며 솔루션을 도출하는 단계.

### 2. 시니어 수준의 개발 협업을 위한 9단계 스웜 루프 (The 9-Step Swarm Loop)
스웜(Swarm) 시스템의 머지 충돌, 컨텍스트 오염 및 신뢰도 파탄을 방지하기 위한 통제형 아키텍처다.
- **1단계: 병렬 처리가 가능한 작업 식별 (Pick a Task That Actually Fans Out)**: 모듈화된 문서화, API 마이그레이션 등 상호 독립적인 원자적 태스크를 스웜의 타깃으로 정의한다. 단일 기능 개발에 스웜을 남용하면 충돌이 필연적으로 발생하므로 쪼갤 수 없다면 단일 에이전트를 사용한다.
- **2단계: 리드 에이전트의 작업 분할 (Let the Lead Decompose the Work)**: 리드 에이전트가 전체 구조를 파악하고 각 서브태스크의 입력, 출력, 완료 기준(DoD)을 설정한다.
- **3단계: 작업 계획 검토 및 승인 (Approve the Plan Before Anyone Spawns)**: 리드가 분할한 계획에 파일 충돌 가능성이나 아키텍처 이탈이 없는지 인간이 검토/승인하는 핵심 게이트웨이다.
- **4단계: 개별 작업자에게 전용 워크트리 제공 (Give Each Worker Its Own Worktree)**: `git worktree`를 생성하여 개별 브랜치와 독립된 작업 디렉토리를 배정함으로써 코드 덮어쓰기와 오염을 차단한다.
- **5단계: 스웜 배포 및 병렬 실행 (Fan Out the Swarm)**: 3~5개의 병렬 에이전트가 독립된 컨텍스트 내에서 실행된 후 최종 요약본만 리드에게 보고하게 하여, 리드의 컨텍스트 오염을 최소화한다.
- **6단계: 라이프사이클 훅을 통한 결과 게이트웨이 구축 (Gate Every Result With a Hook)**: 서브 에이전트 종료 시 `SubagentStop` 훅을 구동해 린트, 빌드, 보안 검사 등을 자동으로 게이트웨이 검수한다.
- **7단계: 결과 평가 및 실패작 재수정 (Grade the Results and Send Back the Weak Ones)**: 작업자와 분리된 평가 에이전트(Grader)가 사전에 설정한 평가 기준에 따라 채점하며, 기준 미달 시 반려 및 재수정 루프를 태운다.
- **8단계: 리드 중심의 머지 조율 (Let the Lead Merge, Not the Workers)**: 서브 에이전트의 직접 머지를 배제하고, 리드 에이전트가 검증 완료된 브랜치를 수집해 의존성 순서대로 머지하며 통합 테스트를 매번 구동한다.
- **9단계: 전체 루프를 단일 명령어로 패키징 (Save the Whole Swarm as One Command)**: 안정화된 스웜 [[워크플로]]우를 슬래시 커맨드(예: `/ship`, `/swarm`)나 재사용 가능한 스킬 템플릿으로 패키징하여 자동화한다.

## 예시

- **[[Claude Code]] 스웜 구동**: 개발자가 `/swarm "migrate all 10 controllers"`를 입력하면 리드가 10개의 독립 컨트롤러 마이그레이션 태스크를 생성한다. 3개의 git worktree가 동적으로 생성되어 병렬로 변환 작업을 완수한 후, `SubagentStop` 훅에서 린트/컴파일 검사를 통과한 브랜치만 리드 에이전트가 순차적으로 메인에 머지하고 통합 테스트를 완수한다.

## 충돌

## 관련 노트
- [[AI 에이전트 아키텍처 완전 가이드]]
- [[병렬 에이전트 세션 운영]]
- [[Harness Engineering]]
- [[Plan Mode 기반 AI 작업]]

## 출처
- [0xMorty_Loop_Design](file:///Users/railscraft/[[Obsidian]]/raw/0xMorty_[[Loop_Design]].md)

