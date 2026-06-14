---
type: workflow
status: evergreen
core: false
tags:
  - llm
  - wiki
  - workflow
  - agent
aliases:
  - LLM Wiki app vs skill
  - purpose.md 운영
sources:
  - Karpathy의 LLM Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다
  - Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번
  - 완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다
  - How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)
  - raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md
created: 2026-05-26
updated: 2026-06-14
---

# LLM Wiki 구현 선택지

## 한 줄 정의
LLM Wiki 구현 선택지는 수집된 원시 데이터(Corpus)를 지식 위키로 변환하는 루프를 Programmatic 코드 패키지로 굳힐 것인지, 아니면 단일 `AGENTS.md` 지침을 통해 에이전트의 런타임 자율 협상에 맡길 것인지 결정하는 아키텍처 의사결정 기준이다.

## 핵심 요지
- **기본 설계 패러다임**: Andrej Karpathy의 `llm-wiki.md` 구상(2026년 4월)에 기반하여, 매 질문마다 원문(Raw source)을 매번 다시 읽는 RAG의 토큰 낭비를 줄이고 원문을 상호 연결된(Interlinked) 정형 위키로 사전 컴파일한 뒤 위키를 쿼리한다.
- **코드로 굳히는 구현 (Programmatic Package)**: 대규모 corpus(수백~수천 개 문서) 환경에서 토큰 비용과 환각 누적을 억제하며, 입력의 재현성과 다운스트림 자동화 연동을 최적화한다.
- **에이전트 협상 구현 (Agentic Markdown)**: 200개 이하 소규모 개인 위키 환경에 적합하며, Python 코드나 Docker 인프라 없이 `AGENTS.md`와 `CLAUDE.md` 설정을 통해 에이전트를 '위키 유지관리자(Wiki Maintainer)'로 작동시킨다.
- **마크다운 구조적 파싱 한계**: 에이전트의 자율 컴파일만으로는 헤더 중첩 에러, YAML 구문 파손, 깨진 링크 등 구조적 마크다운 오류를 제어하기 어렵다. 위키가 다른 자동화 시스템의 입력으로 연동된다면 전용 처리 레이어(`markdown-hero`)가 필수적이다.

## 상세

### 1. Programmatic Package 아키텍처 (예: Python `wiki-llm`)
대규모 데이터나 엄밀한 데이터 무결성이 보장되어야 하는 기업형 인프라에 적합하다. 8단계 파이프라인(`Writer -> Evaluator -> Editor -> Lint -> Repair` 등)을 기계적 코드로 고정한다.
- **Pydantic v2 계약**: 각 단계별로 타입 스키마(Typed Contract)를 엄격히 정의해 LLM 간 데이터 송수신 무결성을 보장한다.
- **콘텐츠 주소 지정 ID (Content-addressable ID)**: 페이지 바디(stripped body)의 SHA-256 해시값을 기반으로 UUID를 생성한다. 파일 이름이나 frontmatter 메타가 바뀌어도 본문 내용이 같다면 동일 ID를 유지하므로, 다운스트림 링크 파손을 방지한다.
- **`instructor` 기반 Multi-backend**: OpenRouter, OpenAI, Bedrock, Ollama 등을 호환하며 API 호출 실패 시 자동 재시도(Retry) 규칙을 탑재한다.
- **LangGraph 국소 활용**: 전체를 에이전트 자율에 맡기지 않고, Lint 결과를 병렬(Fan-out) 복구하는 에러 수리 에이전트 역할에만 제한적으로 그래프 자율성을 부여한다.
- **BM25 렉시컬 검색**: 무거운 벡터 인프라 대신 투명하고 고속 처리가 가능한 어휘 검색(Lexical Retrieval)을 기본 탑재한다.

### 2. Agentic Markdown 아키텍처 (단일 `AGENTS.md`)
Claude Code, Cursor 등 에이전트 모드가 작동하는 개발 환경 자체를 주 작업장으로 사용하는 개인 및 소규모 팀에 최적화된 셋업이다.
- **제거된 인프라**: Python 패키지 의존성, Pydantic 모델, Dockerfile, CI 워크플로, 별도의 Chat UI 등이 제거되어 즉각 시작할 수 있다.
- **유지된 가드레일**: `Writer -> Evaluator -> Editor` 트리플 패스 검증 룰, `[[wikilink]]` 분석 규약, 린팅 규칙 및 복구 동작 정의, 초기 런타임 환경설정용 config 블록은 파일 내 자연어로 고스란히 유지된다.

### 3. 마크다운 처리 레이어 (`markdown-hero`)의 중요성
에이전트는 겉보기에 그럴듯하지만(plausible) 엄밀한 마크다운 문법 기준을 자주 어긴다. heading nesting의 단계를 건너뛰거나, YAML frontmatter 콜론(:) 문법 오류, 중복 H1 헤더 생성, 재생성 시 섹션 순서 드리프트 등이 대표적이다.
- 위키가 청커(Chunker), 중복제거기(Deduplicator), 린터(Linter) 등 다운스트림 파이프라인의 **입력 데이터**로 투입되는 환경에서는 이러한 오류가 파싱 장애를 일으킨다.
- 따라서 코드 기반 패키지에는 `markdown-hero` 같은 별도의 마크다운 전처리 레이어를 두어 `markdown_merge(dedupe_headings=True)` 등 구조적 강제를 병행해야 한다.

### 4. 런타임 선택 기준 및 요약
| 의사결정 요인 | Agentic Markdown (`AGENTS.md`) | Programmatic Package (`wiki-llm`) |
| --- | --- | --- |
| **권장 문서 규모** | 200개 이하의 소형 개인 위키 | 수백~수천 개 이상의 대규모 데이터셋 |
| **주요 장점** | 빠른 설정 변경, 유연한 규칙 수정 | deterministic UUID 보장, 토큰 비용 최소화 |
| **자동화 결합** | 없음 (에이전트 대화 창 내 수동 유지) | 배치(Batch) 스케줄링, Scheduled Run 지원 |
| **감사(Audit)** | 불가능 | 모든 API Call의 Audit Trail 추적 및 로깅 |

## 예시
- **개인 연구 위키**: `AGENTS.md` + `purpose.md` + `index/log` + 소스 요약
- **팀 협업 위키**: Project Skill 등록 + 리뷰 전용 페이지 + 정기 Scheduled Lint 스크립트
- **대형 기업 Corpus**: typed pipeline 패키지 빌드 + SHA-256 ID 부여 + `markdown-hero` 파서 연동

## 충돌
- **에이전트의 마크다운 준수 신뢰 vs 기계적 문법 오류**:
  에이전트 전용 `AGENTS.md` 환경에서는 마크다운을 올바르게 작성하라고 프롬프트로 지시할 뿐 실제 파일 쓰기 시 문법 오류를 강제 차단하지 못한다. 다운스트림 자동화에 에러가 잦다면 신속히 파이썬 등 코드 기반 마크다운 헬퍼(`markdown-hero`)를 도입해 제약해야 한다.

## 관련 노트
- [[LLM Wiki 운영 패턴]]
- [[Claude.md 운영 원칙]]
- [[Agent Native Infrastructure]]
- [[AI 산출물 포맷 결정 트리]]
- [[학습용 노트 외부화 원칙]]
- [[Claude Code 스킬 관리]]

