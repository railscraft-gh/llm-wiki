요청하신 개념 **'Ingest 워크플로우'**(유형: `workflow`)에 대한 전문 위키 노트를 모든 작성 원칙, frontmatter 스키마, 출처 표기 및 관련 노트 연동 지침에 맞추어 생성하였습니다.

작성된 위키 노트는 기존 지식 베이스 볼트 내 경로인 [`/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Ingest 워크플로우.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Ingest%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.md)에 저장되었습니다.

---

### 📝 생성된 위키 노트 전문

```markdown
---
type: workflow
status: draft
core: false
tags:
  - llm
  - agent
  - workflow
  - knowledge-management
  - obsidian
aliases:
  - Ingest Workflow
  - 수집 워크플로우
  - 9단계 Ingest 워크플로우
sources:
  - raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md
  - raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md
created: '2026-08-28'
updated: '2026-08-28'
---

# Ingest 워크플로우

## 한 줄 정의

Ingest 워크플로우는 사용자가 입력한 불변의 원본 파일(`raw/`)을 [[AI 에이전트]]가 1회 탐독·분석하여, 요약 페이지, 개념/엔티티 노트, [[Glossary|용어집]], 마스터 인덱스([[Index]]) 및 작업 로그([[Log]])를 유기적인 [[Obsidian]] 위키링크(`[[노트명]]`) 구조로 자동 생성하고 지속 갱신하는 9단계 핵심 지식 수집·반영 파이프라인이다.

## 핵심 요지

- **아키텍처 레이어 상의 위치**: [[LLM Wiki]]의 3대 핵심 실행 작업([[수집 쿼리 린트 워크플로우|Ingest, Query, Lint]]) 중 첫 번째 단계로서, 원본 문서(`raw/`)를 컴파일하여 지식 베이스(`wiki/`)로 전환하는 업스트림 정제 연산이다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **단일 소스의 파급력**: `raw/` 폴더에 단 1개의 소스 문서를 넣고 Ingest를 실행하더라도, AI 에이전트가 지식망을 탐색하여 소스 요약 생성부터 엔티티 갱신, 용어 추가, 인덱스 및 로그 업데이트에 이르기까지 10~15개의 위키 페이지를 동시에 갱신하거나 창출한다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **불변 원본과 AI 관리 영역의 엄격한 분리**: 원본 파일 저장소(`raw/`)는 사용자의 영역으로 AI가 절대 수정하거나 삭제하지 않으며, 컴파일된 지식저장소(`wiki/`)는 AI가 독점적으로 작성하고 상호 참조를 유지 관리한다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **축적 및 연결(Compounding)**: 소스를 일괄 수집(Batch-ingest)하기보다 대화형으로 한 번에 하나씩 Ingest할 때 유저의 의도가 반영되어 고품질 지식이 구축되며, 10~15개의 소스가 쌓이면 이전에 발견하지 못했던 새로운 개념 간의 연결이 자율 형성된다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

## 상세

### 1. Ingest 워크플로우의 9단계 실행 절차

`CLAUDE.md` 또는 `AGENTS.md` 스키마 규정에 따라 AI 에이전트(예: [[Cursor]], [[Claude Code]])가 실행하는 세부 절차는 다음과 같다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md):

1. **소스 문서 탐독 (Read Source)**: `raw/` 디렉터리 내 수집 대상 문서(PDF, markdown, 웹 스크랩, 회의 녹취록, 이메일 스레드 등)의 내용 전체를 파악한다.
2. **핵심 내용 논의 (User Discussion)**: 소스의 주요 통찰과 핵심 이슈를 사용자와 짧게 주고받거나 요약 방향을 정립한다.
3. **소스 요약 노트 작성 (Create Source Summary)**: `wiki/sources/` 하위에 소스 원본별 독립된 요약 및 컨텍스트 정리 노트를 작성한다.
4. **엔티티 및 개념 노트 생성·보강 (Create/Update Entity Pages)**: 소스에서 추출된 제품, 기능, 페르소나, 학술/기술 개념 등에 맞춰 `wiki/` 하위에 새로운 페이지를 생성하거나 기존 페이지에 신규 내용을 보강한다.
5. **용어집 반영 (Update Glossary)**: 문서 내 언급된 신규 전문 용어, 표기법, deprecated된 명칭을 `wiki/glossary.md`에 추가·갱신한다.
6. **마스터 인덱스 반영 (Update Index)**: 생성되거나 수정된 모든 신규 위키 페이지를 탐색 지도인 `wiki/index.md`에 등재한다.
7. **오버뷰 종합 페이지 업데이트 (Update Overview)**: 소스로 인해 전체 지식의 큰 그림이나 방향성에 변화가 생긴 경우 `wiki/overview.md`를 갱신한다.
8. **작업 타임라인 기록 (Record Activity Log)**: Ingest 처리 시각, 대상 소스, 변경/생성된 위키 페이지 목록을 `wiki/log.md`에 타임스탬프와 함께 기록한다.
9. **실시간 시각화 동기화 (Obsidian Live Sync)**: 작성된 모든 노드가 위키링크(`[[노트명]]`)로 엮여 Obsidian의 Graph View 및 Vault 사이드바에 실시간 반영된다.

### 2. 수동 관리 방식 및 전통 RAG와의 대조

| 구분 | 수동 위키 작성 (Traditional Wiki) | 전통 RAG (Naive RAG) | Ingest 워크플로우 (LLM Wiki) |
| :--- | :--- | :--- | :--- |
| **작성 주체** | 인간 사용자가 전적으로 수작업 작성 | 없음 (원문 벡터 청킹만 수행) | [[AI 에이전트]]가 스키마에 따라 자율 컴파일 |
| **연산 시점** | 문서 작성 시점 (높은 수공 비용) | 쿼리 실행 시점 (매 쿼리마다 무거운 재검색) | **수집(Ingest) 시점** (사전 컴파일 연산) |
| **유지 관리 부담** | 소스 증가 시 상호참조·충돌 정리에 지쳐 포기 | 관리 부담은 없으나 지식 맥락이 휘발됨 | 에이전트가 10~15개 페이지 일괄 갱신으로 유지비용 ~0 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md) |
| **지식 누적 효과** | 정체되거나 낡아짐 | 누적되지 않음 | 소스가 쌓일수록 Graph View 연결성 복리 증대 |

## 예시

### 1. 프롬프트 기반 Ingest 실행 명령어 예시

AI 코드 에디터인 [[Cursor]] 환경에서 프로젝트 폴더를 열고 `CLAUDE.md` 스키마가 로드된 상태에서 아래와 같이 실행한다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md):

```text
Ingest raw/my-document.pdf
```

에이전트는 즉시 해당 파일을 읽고 9단계 절차를 수행하여 `wiki/sources/my-document.md` 생성, 관련 개념 노트 신규 생성 및 `wiki/log.md` 업데이트를 실시간 진행한다.

### 2. 실전 타임라인 활용 시나리오 (기술 문서 작성자의 1주일)

- **Day 1**: PRD, 내부 FAQ, 릴리즈 노트를 `raw/`에 넣고 대화형으로 Ingest 실행 $\rightarrow$ 한 줄도 직접 쓰지 않고 8~10개의 위키 페이지(제품, 페르소나, 용어집) 자동 생성 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **Day 2**: 엔지니어 인터뷰 녹취록 전사본 Ingest $\rightarrow$ 기술적 결정 사항 추출 및 기존 PRD 문서와 충돌하는 지점 2곳을 감지하여 명확히 확인해야 할 목록 제시 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **Day 3**: `Obsidian Web Clipper`로 스크랩한 경쟁사 문서 3개 Ingest $\rightarrow$ 기존 제품 페이지와 엮어 구체적인 비교 분석 작성 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **Day 5**: 리뷰 피드백 마크다운 소스 Ingest $\rightarrow$ 에이전트가 기능 명칭(feature name)을 위키 전체에서 일괄 변경하고 예전 명칭은 `wiki/glossary.md`의 deprecated 목록으로 자동 이동시킴 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

## 충돌

### 1. 배치 수집(Batch Ingest) vs 단일 문서 대화형 수집(Sequential Interactive Ingest)
- **배치 수집의 문제점**: 여러 문서를 일괄로 `raw/`에 넣고 한꺼번에 Ingest를 처리하면 연산 속도는 빠를 수 있으나, 에이전트가 소스의 주요 맥락에서 어떤 요소를 강조할지 사용자에게 개입·가이드받을 기회를 잃어 위키 품질이 저하될 수 있다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **권장 방향**: 소스는 한 번에 하나씩 대화형으로 Ingest하며, 에이전트가 제시하는 요약을 읽고 후속 질문을 던지며 적극 개입할수록 지식 베이스의 완성도가 대폭 향상된다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

### 2. 사용자의 위키 직접 작성 시도와 에이전트의 워크플로우 간 충돌
- **직접 작성의 유혹**: 사용자가 `wiki/` 폴더 내 마크다운 문서를 수작업으로 직접 수정하려는 유혹이 생기기 쉽다.
- **원칙적 분리**: 사용자의 역할은 양질의 소스를 수집하고 올바른 질문을 던지는 정제 판단자(Curator)이며, 요약·상호참조·분류·인덱싱 등 지루한 운영 잡무(Maintainer Work)는 AI 에이전트에 전적으로 맡겨야 아키텍처의 지속 가능성이 보장된다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

## 관련 노트

- [[LLM Wiki]]: Ingest 워크플로우가 구동되는 대상 시스템이자 카파시(Karpathy)의 개인 지식 베이스 아키텍처이다.
- [[수집 쿼리 린트 워크플로우]]: Ingest, Query, Lint로 구성된 3단계 에이전틱 워크플로우 종합 노트이다.
- [[CLAUDE.md 스키마]]: Ingest 워크플로우의 실행 규범과 엔티티 포맷을 강제하는 운영 매뉴얼 파일이다.
- [[Obsidian Vault 구조화 및 규칙]]: Ingest 결과물인 `wiki/` 노드가 Graph View 및 사이드바에 시각적으로 연동되는 볼트 구조이다.
- [[Andrej Karpathy]]: `llm-wiki.md` 아이디어를 창시하고 지식 보존 잡무의 AI 전담화 개념을 제안한 연구자이다.
- [[Cursor]]: Ingest 워크플로우 프롬프트를 수용하여 프로젝트 구조와 볼트 컴파일을 수행하는 AI 코드 에디터이다.
- [[바네바 부시의 메멕스 연상 경로]]: Ingest를 통한 자동 상호참조 형성의 역사적 사상적 뿌리가 되는 1945년 Memex 비전이다.

## 출처

- `raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md`
- `raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md`
```