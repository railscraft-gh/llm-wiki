요청하신 개념 **'LLM 트레이스'**에 대한 위키 노트를 작성하고 저장 완료했습니다.

- **생성 파일 위치**: [`/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/LLM 트레이스.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/LLM%20%ED%8A%B8%EB%A0%88%EC%9D%B4%EC%8A%A4.md)

---

### 작성된 위키 노트 개요

```markdown
---
type: glossary
status: draft
core: false
tags:
  - llm
  - agent
  - observability
  - evaluation
aliases:
  - trace
  - 실행 기록
  - 트레이스 Log
sources:
  - raw/AI Agents. Complete Course.md
created: 2026-08-27
updated: 2026-08-27
---

# LLM 트레이스

## 한 줄 정의
LLM 트레이스(LLM Trace)는 AI 에이전트 시스템이 사용자의 요청을 처리하는 과정에서 수립한 계획, 주입된 프롬프트, 도구(Tool) 호출 및 파라미터, 원시 데이터, 성찰(Reflection) 및 추론(Reasoning) 판단 근거 등 전체 실행 아티팩트를 빈틈없이 기록한 블랙박스 비행 기록 장치 성격의 데이터 로그입니다.

## 주요 포함 내용
- **핵심 요지**: 디버깅/문제 패턴 포착 토대, 비결정론적 특성 제어, 의사결정 이유(Reasoning) 아카이빙, 관찰 가능성(Observability) 및 평가 체계 구축 연계 (`raw/AI Agents. Complete Course.md` 근거 수치/출처 표기 완료).
- **상세 분석**: 트레이스에 포함되는 핵심 구성 요소 및 관찰 가능성 내 미시적(Zoom-In)/거시적(Zoom-Out) 지표로서의 역할 분석.
- **구체적 예시**: 
  1. 웹 검색 기반 리서치 에이전트의 실제 JSON 트레이스 데이터 구조 스키마 예시
  2. 디버깅 및 자가 성찰(Self-correction)/서킷 브레이커 활용 시나리오
- **Obsidian 위키링크**: `[[AI 에이전트 제어 루프]]`, `[[ReAct 패턴]]`, `[[LLM 에이전트 관찰 가능성]]`, `[[가드레일]]` 연결 포함.
```