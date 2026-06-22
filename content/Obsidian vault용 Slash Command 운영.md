---
aliases:
- Obsidian slash command 운영
- AI 세컨드 브레인 명령어 운영
core: false
created: 2026-05-24
sources:
- Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법
- raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md
status: evergreen
tags:
- llm
- obsidian
- claude-code
- workflow
type: workflow
updated: '2026-06-22'
---# Obsidian vault용 Slash Command 운영

## 한 줄 정의

Obsidian vault용 Slash Command 운영은 Claude Code를 vault 루트에서 실행하고 `.claude/commands/`에 반복 작업을 명령어로 고정해 개인 지식 베이스를 능동적으로 관리하는 workflow다.

## 핵심 요지

- 핵심은 긴 프롬프트를 매번 다시 쓰지 않고, 자주 반복되는 지식 작업을 slash command 파일로 캡슐화하는 것이다.
- `CLAUDE.md`는 vault 구조와 문법을 설명하고, slash command는 그 위에서 특정 업무를 수행하는 실행 단위가 된다.
- 이 방식은 inbox 정리, 아이디어 승격, 연결 탐색, 신념 검증처럼 "코딩이 아닌 텍스트 작업"에도 Claude Code를 적용하게 만든다.
- command 설계에서 중요한 요소는 이름, 입력 범위, 출력 형식, 제약 조건 네 가지다.

## 상세

이 raw의 핵심 주장은 Claude Code가 코드 저장소 전용 도구가 아니라, markdown 파일이 모여 있는 임의의 디렉터리에서도 작동하는 범용 agent라는 점이다. Obsidian vault를 루트에서 열고 `CLAUDE.md`에 폴더 구조, Tasks query 문법, Obsidian식 내부 링크 문법 같은 규칙을 설명하면, 그다음부터는 `.claude/commands/*.md`가 반복 작업을 담당한다.

글에서 제시한 명령어 묶음은 `/sync`, `/trace`, `/connect`, `/inbox`, `/graduate`, `/ghost`, `/challenge`, `/ideas`다. 이 조합은 크게 세 범주로 나뉜다. 첫째, `/sync`와 `/inbox`는 현재 상태 파악과 유입 처리다. 둘째, `/trace`, `/connect`, `/graduate`는 노트 간 관계를 발굴하고 아이디어를 독립 노트로 승격하는 지식 구조화다. 셋째, `/ghost`, `/challenge`, `/ideas`는 축적된 노트를 바탕으로 응답 스타일 모사, 반대 논증, 새 아이디어 생성까지 수행하는 사고 보조다.

이 workflow는 [[Claude Code 오케스트레이션]]의 개인 지식 버전으로 볼 수 있다. 개발 저장소에서는 `/test`, `/review`, `/deploy-check` 같은 명령어가 반복 업무를 줄였다면, vault에서는 `/connect`가 orphan note와 브리지 노트를 찾고 `/graduate`가 주간 노트의 미완성 생각을 seed 노트로 분리한다. 즉 slash command는 "프롬프트 단축"이 아니라 자주 쓰는 사고 절차를 이름 붙인 운영 인터페이스다.

또한 이 패턴은 [[LLM Wiki 운영 패턴]]과도 상보적이다. LLM Wiki가 raw를 evergreen wiki로 바꾸는 지식 베이스 운영이라면, Obsidian slash command 운영은 이미 쌓인 vault 안에서 검색, 연결, 분류, 반박, 아이디어 발굴을 자동화하는 상호작용 계층이다.

## 예시

- `/sync`: 최근 7일 주간 노트, 활성 프로젝트, master task list, 최근 inbox를 읽고 현재 컨텍스트 요약을 만든다.
- `/connect`: vault 전체 wikilink 그래프를 따라가며 direct, one-hop, two-hop 연결을 찾고 orphan note나 브리지 후보를 제안한다.
- `/graduate 4`: 최근 4주 주간 노트에서 "I think", "Maybe", "What if" 같은 미완성 생각을 골라 독립 노트로 승격한다.
- `/challenge my approach to time management`: 기존 노트들 사이의 직접 모순, 숨은 가정, 빠진 관점을 찾아 belief stress test를 만든다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Claude Code 오케스트레이션]]
- [[Claude.md 운영 원칙]]
- [[AI 네이티브 사용자]]
- [[LLM Wiki 운영 패턴]]
- [[병렬 에이전트 세션 운영]]

