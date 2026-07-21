---
type: concept
status: draft
core: true
tags:
  - ai
  - tools
  - coding
aliases:
  - Claude Code 가이드
sources:
  - raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
Claude Code를 단순한 '코드 생성 도구'가 아닌, 스스로 검증하고 계획하는 '업무 조율 오케스트레이터'로 활용하기 위한 실전 방법론입니다.

## 핵심 요지
- **검증 루프(Verification Loop)**: 결과를 요구하는 것보다, 결과를 스스로 검증할 수 있는 테스트 환경(테스트 코드, 린터)을 함께 요구해야 합니다.
- **업무 조율**: Claude Code는 단일 도구가 아니라 오케스트레이터로서 외부 서비스(GitHub, Notion, Slack 등)와 연동하여 업무 자동화를 실현합니다.
- **계획 중심 실행**: 코드 작성을 지시하기 전, 반드시 계획(Plan)을 세우고 위험 요소를 사전에 확인하는 단계를 거칩니다.

## 상세
[raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md](file:///Users/railscraft/Obsidian/raw/Claude%20Code%20%EC%B0%BD%EC%8B%9C%EC%9E%90%20Boris%EC%9D%98%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EC%85%8B%EC%97%85.%20%EC%A0%84%EB%B6%80%20%EB%8B%A4%20%EA%B9%8C%EB%B3%B4%EC%9E%90%21.md)는 Claude Code 활용의 핵심을 **"AI에게 일을 시키는 사람이 아니라, AI가 일을 확인할 수 있는 환경을 설계하는 사람"**으로 정의합니다.

## 실전 적용 전략
- **안전장치 설계**: 포맷터(Formatter), 린터(Linter), 테스트 루프를 사용하여 AI가 놓치는 10%의 실수를 자동 차단합니다.
- **권한 관리**: `Always-yes` 모드 지양, 신니어 개발자와 협업하듯 단계적 권한 부여(읽기/쓰기/실행 구분).
- **효율적 모델 사용**: 비용 효율성보다 결과의 신뢰성을 위해 복잡한 작업에는 최상위 모델(Opus)을 사용하여 재작업(Rework) 비용을 절감합니다.

## 관련 노트
- [[CLAUDE.md 가이드]]
- [[Claude_Code_MEMORY.md_가이드]]

