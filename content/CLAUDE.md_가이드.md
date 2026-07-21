---
type: concept
status: draft
core: true
tags:
  - ai
  - workflow
  - guide
aliases:
  - CLAUDE.md
  - 시스템지침
sources:
  - raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
프로젝트 루트에 위치하여 에이전트의 행동 규범, 기술 스택, 출력 스타일을 정의하는 65줄 내외의 마크다운 지침 파일입니다.

## 핵심 요지
- **AI의 운영 매뉴얼**: 에이전트가 코딩 전에 '어떻게' 판단해야 하는지를 명시합니다.
- **4대 행동 원칙**: `Think Before Coding`, `Simplicity First`, `Surgical Changes`, `Goal-Driven Execution`을 준수하여 에이전트의 품질을 극대화합니다.
- **하네스의 핵심**: 에이전트의 실패 패턴을 억제하는 울타리 엔지니어링의 기본 단위입니다.

## 상세
[raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md](file:///Users/railscraft/Obsidian/raw/%ED%95%98%EB%84%A4%EC%8A%A4%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20-%2065%EC%A4%84%20CLAUDE.md%EA%B0%80%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20%EC%8A%A4%ED%82%AC%EC%9D%B8%20%EC%9D%B4%EC%9C%A0.md)에 따르면, 65줄 규모의 `CLAUDE.md`는 AI 코딩 에이전트가 범하는 3대 실패 패턴(묵시적 가정, 과도한 엔지니어링, 부수적 피해)을 차단하는 가장 효과적인 방법입니다.

## 핵심 적용 규칙
- **길이 준수**: 60-200줄 내외 유지. (과도한 규칙은 준수율 저하)
- **명시성**: 가정은 숨기지 말고 질문하며, 트레이드오프를 반드시 드러낼 것.
- **최소주의**: 요청받지 않은 리팩터링이나 복잡한 추상화 금지.
- **수술적 변경**: 인접 코드 오염 금지 및 변경 라인에 대한 추적 가능성 보장.

## 관련 노트
- [[하네스_엔지니어링_실전_가이드]]
- [[Claude_Code_MEMORY.md_가이드]]

