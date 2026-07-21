---
type: concept
status: draft
core: false
tags:
  - sdd
  - ai-coding
  - software-engineering
  - spec-kit
aliases:
  - 사양-기반-개발-(Spec-Driven-Development)
  - 사양 기반 개발
  - Spec Driven Development
  - SDD
sources:
  - raw/바이브 코딩의 종말-ko.md
created: 2026-07-21
updated: 2026-07-21
---

# 사양 기반 개발 (Spec Driven Development)

## 한 줄 정의
직관이나 임시 프롬프트에 기댄 바이브 코딩(Vibe Coding)을 탈피하여, 살아있는 기술 사양(Spec)과 아키텍처 헌장을 단일 진실 공급원(Source of Truth)으로 삼아 AI 코딩 에이전트의 개발을 정밀 통제하는 개발 패러다임.

## 핵심 요지
- **사양과 코드의 관계 역전**: 기존 방식과 달리 코드가 사양을 따르도록 설계하며, 사양서(Spec)가 프로젝트의 하위 구현을 자동으로 생성·재생성하는 소스코드가 됩니다.
- **[[Spec Kit]] 워크플로우**: GitHub이 오픈소스로 공개한 [[Spec Kit]]은 별도 [9만 개 이상, 포크 8천 개 이상](file:///Users/railscraft/Obsidian/raw/%EB%B0%94%EC%9D%B4%EB%B8%8C%20%EC%BD%94%EB%94%A9%EC%9D%98%20%EC%A2%85%EB%A7%90-ko.md#L7)의 관심과 함께 SDD 표준 도구로 부상했으며, Python 3.11+ 기반 `specify` CLI 및 [29개 이상 상용 에이전트](file:///Users/railscraft/Obsidian/raw/%EB%B0%94%EC%9D%B4%EB%B8%8C%20%EC%BD%94%EB%94%A9%EC%9D%98%20%EC%A2%85%EB%A7%90-ko.md#L134) 연동을 지원합니다.
- **파이프라인 단계**: 헌장(constitution) -> 사양(specify) -> 명확화/체크리스트(clarify/checklist) -> 계획(plan) -> 작업/분석(tasks/analyze) -> 구현(implement)으로 이어지는 선형적 인과 흐름.
- **벤더 종속 해제**: 사양이 리포지토리 내 마크다운으로 영속 관리되므로, 특정 LLM이나 IDE 벤더에 종속되지 않고 언제든 에이전트 도구(Claude Code, Copilot, Cursor 등)를 교체할 수 있습니다.

## 상세
바이브 코딩은 AI 에이전트를 검색엔진처럼 다루어 정상 경로(happy path) 위주의 불안정한 코드 생성을 야기합니다. SDD는 에이전트를 융통성 없는 주니어 페어 프로그래머로 정의하고 기술 스택을 배제한 고차원 사양서와 양보 불가능한 지배 원칙인 '헌장(constitution)'을 주입합니다.

[[Spec Kit]]의 `specify` CLI는 [v0.8.4 버전](file:///Users/railscraft/Obsidian/raw/%EB%B0%94%EC%9D%B4%EB%B8%8C%20%EC%BD%94%EB%94%A9%EC%9D%98%20%EC%A2%85%EB%A7%90-ko.md#L36) 표준 체계에서 [6가지 핵심 명령과 3가지 품질 검증 명령](file:///Users/railscraft/Obsidian/raw/%EB%B0%94%EC%9D%B4%EB%B8%8C%20%EC%BD%94%EB%94%A9%EC%9D%98%20%EC%A2%85%EB%A7%90-ko.md#L47-L58)을 제공하며, 레거시 정적 분석 기능을 대용하는 `/speckit.analyze`와 명확성 질문을 던지는 `/speckit.clarify`를 통해 섣부른 구현 실수를 예방합니다. 커뮤니티 카탈로그는 Jira 연동 등 [70종 이상의 플러그인 생태계](file:///Users/railscraft/Obsidian/raw/%EB%B0%94%EC%9D%B4%EB%B8%8C%20%EC%BD%94%EB%94%A9%EC%9D%98%20%EC%A2%85%EB%A7%90-ko.md#L147)를 갖추고 있습니다.

신규(greenfield) 프로젝트뿐만 아니라 기존(brownfield) 서비스 확장 및 낡은 소스 분석이 필요한 레거시(modernization) 영역에서도 소스 코드 분석 결과를 살아있는 사양서로 치환하여 안전한 전환을 가능케 합니다.

## 예시
- **독립 라이브러리 우선 추상화 헌장**: `.specify/memory/constitution.md`에 "모든 신규 기능은 독립형 라이브러리로 추상화하여 시작한다"는 규칙을 명시해 에이전트가 하드코딩하는 현상 원천 차단.
- **기술 스택이 분리된 Spec 프롬프트**: `/speckit.specify`를 사용해 "사진 앨범 날짜별 드래그앤드롭 정리 App" 요구사항을 기술(Vite, SQLite 등) 언급 없이 기록한 뒤, `/speckit.plan` 단계에서 스택을 선택·결합.

## 충돌
- **단순 버그 패치에서의 오버헤드**: 한 줄 코드 수정이나 긴급 패치 상황에 6단계 파이프라인 전체를 밟는 것은 불필요한 비효율을 유발합니다.
- **고정된 폭포수(Waterfall) 모델로의 퇴보 위험**: 사양서를 한번 작성 후 수정 불가능한 유물로 묵혀둘 경우 past waterfall 관료주의가 재생산되므로 git으로 지속 관리되는 '살아있는 문서'로 다뤄야 합니다.

## 관련 노트
- [[Spec Kit]]
- [[Vibe Coding과 Agentic Engineering]]
- [[AI 코딩 에이전트 검증 전략]]
- [[AI 네이티브 프로토타이핑]]

