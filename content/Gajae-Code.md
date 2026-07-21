---
type: concept
status: draft
core: true
tags:
- ai-agent
- harness-engineering
aliases:
- Gajae-Code
sources:
- raw/gajae-code_AI_코딩_하네스_분석.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
AI 코딩 에이전트를 위한 운영체제 수준의 하네스 프레임워크로, 모델 호출, 도구 실행, 상태 관리 및 워크플로 자동화 기능을 제공.

## 핵심 요지
Gajae-Code는 단순한 챗봇이 아니라, '질문-계획-승인-실행-검증'의 워크플로우를 강제하고 상태를 파일 기반으로 영속화(persistence)하여 에이전트의 작업 신뢰성과 재현성을 보장하는 하네스 중심 시스템이다.

## 상세
- **워크플로 중심 설계**: `deep-interview`(요구사항 명확화), `ralplan`(계획 및 합의), `team`/`ultragoal`(실행 및 검증) 등 정형화된 루프 강제 [raw/gajae-code_AI_코딩_하네스_분석.md#L14](file:///Users/railscraft/Obsidian/raw/gajae-code_AI_%EC%BD%94%EB%93%9C_AI_%EC%BD%94%EB%93%9C_%ED%95%98%EB%84%A4%EC%8A%A4_%EB%B6%84%EC%84%9D.md#L14).
- **상태 영속화**: `.gjc/` 디렉터리에 계획, 스펙, 팀 상태를 영구적으로 저장하여 중단된 작업의 재개 및 감사(Audit) 용이성 확보 [raw/gajae-code_AI_코딩_하네스_분석.md#L68](file:///Users/railscraft/Obsidian/raw/gajae-code_AI_%EC%BD%94%EB%93%9C_AI_%EC%BD%94%EB%93%9C_%ED%95%98%EB%84%A4%EC%8A%A4_%EB%B6%84%EC%84%9D.md#L68).
- **역할 기반 시스템**: `executor`, `architect`, `planner`, `critic` 등 역할별 에이전트를 분리하여 협업의 품질 보장 [raw/gajae-code_AI_코딩_하네스_분석.md#L191](file:///Users/railscraft/Obsidian/raw/gajae-code_AI_%EC%BD%94%EB%93%9C_AI_%EC%BD%94%EB%93%9C_%ED%95%98%EB%84%A4%EC%8A%A4_%EB%B6%84%EC%84%9D.md#L191).

## 예시
애매한 작업 요청 시 `gjc deep-interview`를 우선 실행하여 요구사항을 먼저 확정 짓는 방식 [raw/gajae-code_AI_코딩_하네스_분석.md#L236](file:///Users/railscraft/Obsidian/raw/gajae-code_AI_%EC%BD%94%EB%93%9C_AI_%EC%BD%94%EB%93%9C_%ED%95%98%EB%84%A4%EC%8A%A4_%EB%B6%84%EC%84%9D.md#L236).

## 충돌
상태 관리가 파일 기반으로 이루어지므로, 시스템의 파일 권한 및 저장 공간 관리가 필수적임 [raw/gajae-code_AI_코딩_하네스_분석.md#L68](file:///Users/railscraft/Obsidian/raw/gajae-code_AI_%EC%BD%94%EB%93%9C_AI_%EC%BD%94%EB%93%9C_%ED%95%98%EB%84%A4%EC%8A%A4_%EB%B6%84%EC%84%9D.md#L68).

## 관련 노트
- [[하네스_엔지니어링]]
- [[Ralph_Loop_워크플로우]]

## 출처
- [Gajae-Code 소스 코드 분석](file:///Users/railscraft/Obsidian/raw/gajae-code_AI_%EC%BD%94%EB%93%9C_AI_%EC%BD%94%EB%93%9C_%ED%95%98%EB%84%A4%EC%8A%A4_%EB%B6%84%EC%84%9D.md)
