지정된 개념 노트 `llm-wiki.md` (유형: claim) 작성을 성공적으로 완료했습니다.

### 📄 생성된 문서 경로
- [`/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/llm-wiki.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/llm-wiki.md)

---

### 📝 작성된 위키 노트 내용

```markdown
---
type: claim
status: draft
core: false
tags:
  - llm
  - agent
  - pkm
  - wiki
  - obsidian
aliases:
  - Karpathy LLM Wiki
  - LLM 위키 아키텍처
sources:
  - 'raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md'
created: '2026-08-28'
updated: '2026-08-28'
---

# llm-wiki.md

## 한 줄 정의
LLM Wiki는 지식 베이스의 지루한 운영 잡무(정리, 상호 연결, 용어집 및 인덱스 유지 관리)를 AI [[agent]]에게 전담시켜 유지 관리 비용을 0에 가깝게 낮추고, 흩어진 정보를 지속적으로 컴파일·누적하는 AI 네이티브 [[개인 지식 관리|지식 베이스]] 구축 체계이다.

## 핵심 요지
- **운영 잡무 자동화**: 기존 위키가 버려지는 본질적 원인은 지식 감소가 아닌 링크 업데이트, 요약, 모순 검증 등 과도한 수동 유지 관리 부담 때문이며, AI [[agent]]가 지치지 않는 사서 역할을 수행하여 이를 해결한다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **Andrej Karpathy의 원본 구상**: OpenAI 창립 멤버이자 Tesla AI/Autopilot 팀을 이끌었던 안드레이 카파시(Andrej Karpathy)가 공개한 단 한 장의 마크다운 문서(`llm-wiki.md`)에서 시작된 아이디어이다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **3계층 명확한 분리**: 불변의 원본 파일(`raw/`), AI가 독점 관리하는 컴파일된 지식(`wiki/`), AI 행동을 규율하는 운영 매뉴얼(`CLAUDE.md`)로 구별된다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **3대 주기적 워크플로우**: 소스 수집 및 위키 반영(`Ingest`), 위키 기반 답변 및 노하우 저장(`Query`), 모순 및 고아 페이지 점검(`Lint`)으로 운용된다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **Vannevar Bush의 Memex 비전 실현**: 1945년 바네바 부시가 제시한 연상 경로(associative trails) 중심의 개인 지식 기계 Memex에서 해결하지 못했던 '수동 유지 관리 주체' 문제를 AI가 해결한 현대적 구현체이다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

## 상세

### 1. 3개 레이어(Three Layers) 아키텍처
LLM Wiki는 사용자의 영역과 AI [[agent]]의 영역, 그리고 운영 규칙을 엄격히 분리하여 데이터 파괴 없이 안정적인 지식 갱신을 보장한다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

1. **Raw sources (`raw/`)**: 사용자 소유의 영역. PDF, 마크다운, 스크랩 기사, 회의 녹취록 등을 보관하며 AI는 이 폴더를 절대 직접 수정하거나 삭제하지 않고 오직 읽기(Read-only)로만 접근한다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
2. **The wiki (`wiki/`)**: AI [[agent]]가 독점적으로 생성하고 유지 관리하는 컴파일된 지식 영역. `sources/` (소스 요약), `index.md` (마스터 카탈로그), `log.md` (타임라인), `overview.md` (전체 구조), `glossary.md` (용어집) 및 개념/엔티티/페르소나 노트가 [[Obsidian]] [[위키링크]](`[[노트명]]`)로 상호 연동된다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
3. **The schema (`CLAUDE.md`)**: AI [[agent]]의 운영 매뉴얼 및 행동 규범집. 페이지 엔티티 규칙, 프론트매터 양식, Ingest/Query/Lint 3단계 워크플로우를 정의하여 범용 LLM을 규율 있는 위키 유지 관리자(Wiki Maintainer)로 변환한다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

### 2. 3개 핵심 워크플로우 (Three Operations)
- **Ingest (수집 및 반영)**: `raw/` 폴더에 새 문서를 넣고 AI에게 처리하라고 지시한다. AI는 소스를 분석한 후 소스 요약 작성, 개념/페르소나/기능 페이지 생성 및 업데이트, [[glossary]] 및 [[index]] 반영, `wiki/log.md` 타임스탬프 기록을 수행한다. 단 1개의 소스 입력이 10~15개의 위키 페이지를 동시에 업데이트할 수 있다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **Query (탐색 및 재저장)**: 질문이 입력되면 매번 `raw/` 파편을 다시 뒤지는 대신 이미 정돈된 `wiki/` 레이어를 읽어 답변을 구성한다. 질문 결과 중 유용한 분석은 [[analysis]] 페이지로 위키에 영구 저장하여 탐색 경험을 지식화한다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **Lint (검증 및 정돈)**: 약 10회 정도 수집을 진행한 후 진행하는 위키 지식 검사 프로세스이다. 소스 간 주장 모순, 시효 만료된 오래된 정보, 연결이 없는 고아 페이지(orphan page), 식별되지 않은 개념, 용어 불일치를 스캔하여 수정을 제안하고 정돈한다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

### 3. 구축 및 운영 성능 지표
- **초기 구축 시간**: Cursor 에이전트를 활용해 프롬프트 3번으로 약 30분 만에 완전한 지식 베이스 저장소 및 [[Obsidian]] 사전 설정 환경 구축이 가능하다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **1주일 운영 결과**: 소스를 매일 1~3개씩 추가하며 1주일을 운용할 경우, 사용자가 직접 한 줄도 작성하지 않고도 15~20개의 위키 페이지, 살아있는 [[glossary]], 진화하는 [[overview]], 타임라인 [[log]], 시각적 그래프 뷰(`Cmd+G`)가 완성된다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

## 예시

### 1. 프로젝트 파일 구조 및 `CLAUDE.md` 스키마 코드 예시
Cursor, [[Claude Code]], Codex 등의 AI [[agent]] 환경에서 지식 베이스 루트 디렉터리에 구축하는 표준 파일 구조와 `CLAUDE.md` 정의 예시이다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

```text
project-root/
├── llm-wiki.md              # Karpathy의 원본 아이디어 문서
├── CLAUDE.md                # 스키마 — AI 위키 관리 지침
├── raw/                     # 읽기 전용 사용자 원본 소스
└── wiki/                    # AI 작성 지식 베이스
    ├── index.md             # 마스터 카탈로그
    ├── log.md               # 타임스탬프 내역 기록
    ├── overview.md          # 전체 현황 종합 페이지
    ├── glossary.md          # 용어집 및 표기 규칙
    └── sources/             # 소스 문서별 요약 노트
```

`CLAUDE.md` 예시:
```markdown
# LLM Wiki Maintainer Rules

## Basic Principles
- Never modify or delete files inside `raw/`.
- All output markdown files must be written into `wiki/`.
- Always update `wiki/index.md` and `wiki/log.md` with timestamps after processing any source.

## Workflows
1. **Ingest**: Read target file in `raw/`, create `wiki/sources/<source-name>.md`, update/create entity notes in `wiki/`, and append new terms to `wiki/glossary.md`.
2. **Query**: Read files in `wiki/` to answer questions. Offer to save insightful responses as `wiki/analysis/<topic>.md`.
3. **Lint**: Scan `wiki/` for orphan pages, outdated facts, inconsistent terms, and broken `[[wikilinks]]`.
```

### 2. 기술 문서 작성자의 1주일 활용 시나리오
- **Day 1**: PRD, 내부 FAQ, 릴리스 노트를 `raw/`에 배치 후 Ingest 실행 → 8~10개 위키 페이지 자동 생성 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **Day 2**: 엔지니어 인터뷰 녹취록 전사본 Ingest → PRD와 인터뷰 내용 간 충돌 지점 2곳 자동 발견 및 명시 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **Day 3**: Obsidian Web Clipper 브라우저 확장으로 경쟁사 문서 3개 스크랩 후 Ingest → 비교 분석 노트 생성 및 문서화 아웃라인 초안 분석 페이지 저장 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **Day 4**: 글쓰기 전 `wiki/glossary.md`와 persona 페이지를 참조하여 원본 파견 뒤짐 없이 일관된 어조와 정확한 명칭으로 본문 작성 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **Day 5**: 릴리스 변경 피드백 마크다운 Ingest → 기능 명칭 전역 업데이트 및 구 명칭 deprecated 목록 자동 이동 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

## 충돌

### 수동 작성 유혹 대 AI 전담 지식 컴파일 간의 역할 충돌
- **수동 작성의 위험성**: 전통적인 위키 사용자는 마크다운 노트를 직접 수정하려는 유혹에 직면하지만, 인간이 수동으로 링크를 이으려고 시도할수록 업데이트 누락과 지식 파편화가 재발한다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).
- **AI 컴파일 우선 원칙**: 인간의 역할은 고품질 원본 소스를 발굴하여 `raw/`에 기입하고 날카로운 질문을 던지는 큐레이터로 제약되어야 한다. 정리, 요약, 분류, 상호 참조 등의 운영 잡무는 AI가 전담할 때 위키의 지속 가능성이 보장된다 (raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md).

## 관련 노트
- [[LLM Wiki]]: LLM Wiki의 상위 다중 소스 통합 개념 및 컴파일 타임 RAG 패러다임 노트.
- [[두 번째 뇌]]: 수동 관리 한계를 극복하고 AI 네이티브로 재정의된 개인 지식 관리 시스템.
- [[Obsidian]]: 마크다운 볼트, Graph View(`Cmd+G`), 키보드 단축키를 통해 LLM Wiki 지식망을 시각화하는 인터페이스.
- [[Claude Code]]: CLI 환경에서 `CLAUDE.md` 스키마를 바탕으로 위키 수집 및 관리를 자동 실행하는 에이전트 도구.
- [[RAG]]: 매 쿼리마다 raw 파편을 실시간 조회하는 런타임 검색 방식으로, 1회 컴파일을 지속 축적하는 LLM Wiki와 대조되는 개념.

## 출처
- raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md
```