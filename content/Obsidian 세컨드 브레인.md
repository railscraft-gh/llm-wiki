---
type: concept
status: draft
core: false
tags:
  - llm
  - obsidian
  - second-brain
  - para
  - claude-code
  - pkm
aliases:
  - AI 기반 세컨드 브레인
  - Obsidian AI Vault
sources:
  - raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법 - 출판형 다듬기.md
  - raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md
created: 2026-08-28
updated: 2026-08-28
---

# Obsidian 세컨드 브레인

## 한 줄 정의
**Obsidian 세컨드 브레인**은 로컬 마크다운(Markdown) 기반의 개인 지식 관리 시스템(PKM)에 [[PARA 방법론]] 및 [[LLM Agent]] 기반 CLI 도구(예: [[Claude Code]])를 결합하여, 단순 지식 저장을 넘어 자율적 분석·연결·창작이 가능한 프로그래머블(Programmable) 지식 생태계를 의미한다.

## 핵심 요지
- **로컬 텍스트 기반 저장소**: 모든 노트가 플레인 마크다운 파일로 저장되며, `[[wikilinks]]`를 통한 메타데이터 연결성을 확보한다.
- **프로그래머블 지식 관리**: 단순 동기화나 백업을 넘어 LLM CLI 도구가 vault 디렉터리 전체를 스캔·분석하고 커스텀 slash command를 실행할 수 있다 (`raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법 - 출판형 다듬기.md`).
- **운영 매뉴얼(CLAUDE.md)**: 디렉터리 루트에 디렉터리 구조(`0. Inbox`, `1. Projects`, `2. Areas`, `3. Resources`, `4. Archive`), 플레인 텍스트 태스크 쿼리, 문법 패턴을 명시하여 AI가 vault의 컨텍스트를 완벽하게 이해하도록 가이드를 제공한다 (`raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md`).
- **아이디어 파이프라인 수립**: 주간 노트(`_Weekly/`)의 씨앗 아이디어를 수집하고 승격(/graduate)시킨 뒤 적절한 PARA 폴더로 자동 분류(/inbox)하는 순환 체계를 형성한다.

## 상세

### 1. 시스템 구조 및 CLAUDE.md 템플릿
Obsidian vault 디렉터리 루트에 `CLAUDE.md`를 구성하여 LLM에게 프롬프트 컨텍스트 및 운영 가이드를 제공한다.
- `0. Inbox/`: 정리되지 않은 메모 및 승격 노트 수집
- `0.1 Tasks_List/`: Obsidian Tasks 플러그인 기반 마스터 태스크 관리
- `1. Projects/`: 마감이 존재하는 활성 프로젝트
- `2. Areas/`: 지속적인 책임을 지는 관리 영역
- `3. Resources/`: 참고 자료 및 지식 자산
- `4. Archive/`: 비활성/완료 항목

### 2. 주요 Slash Commands 워크플로 (`.claude/commands/`)
Obsidian vault 내부 `.claude/commands/` 디렉터리에 각 마크다운 지시문 파일을 배치함으로써 커스텀 slash command 파이프라인을 구축한다 (`raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법 - 출판형 다듬기.md`).

1. **`/sync`**: 지난 7일간의 수정 노트, 활성 프로젝트, 마스터 태스크 리스트를 스캔하여 세션 시작 시 컨텍스트를 로드.
2. **`/trace <topic>`**: 특정 주제의 최초 작성일, `[[wikilinks]]` 그래프 연결 진화 과정, 현재 언급 횟수를 타임라인으로 추출.
3. **`/connect`**: Vault 전체의 direct/one-hop/two-hop 연결 경로를 분석하고, orphan note 및 고립된 클러스터 지식 그래프 연결을 제안.
4. **`/inbox`**: PARA 분류 가이드에 따라 추천 목적지 및 대안 위치를 제시하며, 사용자 확인(Human-in-the-loop) 승인 후 노트 이동 처리.
5. **`/graduate`**: 주간 노트(`_Weekly/`) 내 비구조화된 관찰, 답 없는 질문, "I think..." 문장을 스캔하여 `0. Inbox/Graduates/` 하위 독립 Seedling 노트로 승격.
6. **`/ghost <question>`**: 저장된 작성자의 톤, 논증 방식, 명시적 신념 문서를 스캔하여 작성자의 목소리와 스타일을 모사해 답변을 합성.
7. **`/challenge <topic>`**: 문서 간 신념 모순(Contradiction), 숨겨진 전제(Hidden Assumptions), 추론 약점을 검증하는 스트레스 테스트 수행.
8. **`/ideas`**: 지난 30일간의 활동 패턴, 미해결 질문, 반복 테마를 스캔하여 도구 제작/연락/글쓰기 아이디어를 도출.

## 예시

### `CLAUDE.md` 설정 예시
```markdown
# CLAUDE.md

## Overview
This is an Obsidian vault organized using the PARA method. All notes are in Markdown format with Obsidian-specific syntax.

## Folder Structure
- `0. Inbox/` - Unprocessed notes
- `1. Projects/` - Active projects with deadlines
- `2. Areas/` - Ongoing responsibilities
- `3. Resources/` - Reference materials
- `4. Archive/` - Inactive items
- `_Weekly/` - YYYY-WXX weekly notes

## Syntax Rules
- Use `[[wikilinks]]` for internal note connections.
```

### `/graduate` 승격 노트 생성 예시
```markdown
# [핵심 주장 한 줄을 제목으로]

**Graduated from**: [[2026-W11]]  
**Date**: 2026-03-19  
**Status**: Seedling

## Core Claim  
[아이디어를 한 문장으로 명확하게 정리]

## Context  
[이 생각이 왜 나왔는지]

## Original Excerpt  
> [주간 노트의 원문 인용]

## Connections  
- [[Related Note]] - [어떻게 연결되는지]

## Questions to Explore  
- [이 아이디어가 던지는 질문]
```

### 주간 리뷰(Weekly Review) 실행 시나리오
1. `/sync` 명령으로 최근 7일간 수정된 작업과 활성 프로젝트 우선순위를 불러온다 (`raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md`).
2. `/graduate` 명령을 돌려 `2026-W11` 주간 노트의 파편화된 아이디어를 `0. Inbox/Graduates/` 파일로 추출한다.
3. `/inbox` 명령으로 추출된 노트를 확인(Action 1~4) 후 `3. Resources/` 및 `1. Projects/` 디렉터리로 분배한다.
4. `/connect`를 통해 고립된 orphan note 간의 `[[wikilinks]]`를 형성하고 지식 그래프를 갱신한다.

## 충돌
본 문서 집합 내의 직간접적 주장이나 기술적 충돌 사항은 발견되지 않았다.

## 관련 노트
- [[PARA 방법론]]: 프로젝트, 영역, 자원, 보관소 구조로 지식을 분류하는 개인 지식 관리 체계.
- [[Claude Code]]: CLI 기반 LLM 인터페이스로, 코드베이스뿐 아니라 마크다운 기반 텍스트 디렉터리 제어에 활용.
- [[LLM Agent]]: 자율적 도구 호출 및 프롬프트 기반 워크플로 실행 주체.
- [[지식 그래프]]: `[[wikilinks]]`로 연결된 비구조화 노트 간의 상호 연결 구조.

## 출처
- `raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법 - 출판형 다듬기.md`
- `raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md`