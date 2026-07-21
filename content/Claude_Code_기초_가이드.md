---
type: concept
status: draft
core: true
tags:
  - ai
  - tools
  - tutorial
aliases:
  - Claude Code
sources:
  - raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
Claude Code를 사용하여 AI 기반 에이전트 워크플로우를 구축하고, 효율적인 명령어 제어를 통해 생산성을 극대화하는 기초 가이드입니다.

## 핵심 요지
- 에이전트 활용의 핵심은 **컨텍스트 오염 방지**와 **작업 흐름 유지**입니다.
- 단순 프롬프트 입력에서 벗어나, 명령어 인터페이스(`!`, `/compact`, `/btw`)를 통해 터미널과 에이전트 간의 통합 환경을 구축해야 합니다.

## 상세
[raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어.md](file:///Users/railscraft/Obsidian/raw/Claude%20Code%EB%A5%BC%206%EA%B0%9C%EC%9B%94%20%EB%8F%99%EC%95%88%20%EC%9E%98%EB%AA%BB%20%EC%8D%BC%EB%8B%A4.%20%EB%AA%A8%EB%93%A0%20%EA%B1%B8%20%EB%B0%94%EA%BE%BC%2014%EA%B0%80%EC%A7%80%20%EB%AA%85%EB%A0%B9%EC%96%B4.md)에서는 에이전트를 자동완성 도구가 아닌 개발 파트너로 격상시키기 위해 다음 전략을 권장합니다.

1. **환경 초기화**: `/init`으로 프로젝트 메타데이터(`CLAUDE.md`)를 생성하고 `/memory`로 개발자의 코딩 취향을 표준화합니다.
2. **연속성 유지**: `/compact`로 토큰 포화 상태를 방지하고, `/btw`로 메인 작업을 방해받지 않으며 추가 질문을 처리합니다.
3. **통합 환경**: `!` 명령어를 사용하여 터미널을 나가지 않고 명령을 실행하여 문맥 유지 비용을 제로화합니다.

## 관련 노트
- [[Claude_Code_명령어_치트시트]]
- [[하네스_엔지니어링]]

