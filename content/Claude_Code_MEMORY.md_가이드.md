---
type: concept
status: draft
core: true
tags:
  - ai
  - memory
  - system-design
aliases:
  - MEMORY.md
sources:
  - raw/Claude Code 프로젝트 효율을 극대화하는 MEMORY.md 가이드.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
프로젝트의 역사적 맥락, 의사결정 기록, 시행착오(Dead Ends)를 누적하여 관리함으로써 Claude Code의 장기 컨텍스트 추론 능력을 극대화하는 지식 보존 시스템입니다.

## 핵심 요지
- **CLAUDE.md vs MEMORY.md**: `CLAUDE.md`는 AI의 '운영 지침(HOW)'인 반면, `MEMORY.md`는 프로젝트의 '축적된 지식(WHAT)'입니다.
- **자동 저장**: `autoMemoryEnabled` 설정을 통해 에이전트가 학습한 내용을 자동으로 메모리에 반영할 수 있습니다.
- **의사결정 보존**: 현상(What)뿐만 아니라 추론 과정(Why)을 기록하여, 에이전트가 동일한 실패 패턴을 반복하지 않도록 방지합니다.

## 상세
[raw/Claude Code 프로젝트 효율을 극대화하는 MEMORY.md 가이드.md](file:///Users/railscraft/Obsidian/raw/Claude%20Code%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%9A%A8%EC%9C%A8%EC%9D%84%20%EA%B7%B9%EB%8C%80%ED%99%94%ED%95%98%EB%8A%94%20MEMORY.md%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)에서 강조하는 가장 중요한 전략은 **"한 달 뒤에도 가치가 있을 정보인가?"**를 기준으로 내용을 필터링하는 것입니다. 불필요한 로그나 일회성 TODO는 지양하고, 아키텍처 변경의 이유, 보안 제약 조건, 검증된 UX 패턴 위주로 관리합니다.

## 핵심 원칙
- **이유(Why) 기록**: 결과뿐만 아니라 대안을 기각한 이유(Dead Ends)를 기록하여 재시도를 방지합니다.
- **가독성 유지**: 구조화된 마크다운을 사용하여 에이전트가 정보 추출을 최적화할 수 있도록 합니다.
- **주기적 정리**: 매달 노이즈가 쌓인 레거시 지식을 정리하여 메모리의 고밀도를 유지합니다.

## 관련 노트
- [[CLAUDE.md_가이드]]
- [[Claude_Code_기초_가이드]]

