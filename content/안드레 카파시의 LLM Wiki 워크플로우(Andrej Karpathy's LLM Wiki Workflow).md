---
type: workflow
status: draft
core: false
tags:
  - llm
  - workflow
  - obsidian
  - wiki
aliases:
  - Andrej Karpathy's LLM Wiki Workflow
  - 카파시 LLM 위키 워크플로우
  - Karpathy LLM Wiki
sources:
  - raw/Andrej Karpathy Stopped Using AI to Write Code. He’s Using It to Build a Second Brain Instead.md
created: 2026-07-24
updated: 2026-07-24
---

# 안드레 카파시의 [[LLM]] Wiki 워크플로우(Andrej Karpathy's [[LLM]] Wiki Workflow)

## 한 줄 정의

원본 자료 저장소(`raw/`)를 읽기 전용으로 보존한 채, [[LLM]] 에이전트가 정해진 행동 지침 스키마에 따라 지식 노트를 분석하고 상호 연결 백링크를 자동으로 설정하여 구조화 위키(`wiki/`)를 구축 및 정비해 나가는 자생적인 지식 관리 워크플로우이다.

## 절차

카파시의 [[LLM]] Wiki는 다음과 같은 정형화된 순환 루프를 통해 작동한다.

### 1. 원본 소스 수집 (Raw Capture)
- 연구 기사, 논문, 비디오 스크립트 발췌본, 프레임워크 명세서 등을 수집하여 읽기 전용 폴더인 `raw/`에 넣는다.
- 웹 페이지의 유실 및 링크 깨짐에 대비하여 브라우저 확장 프로그램(예: Obsidian Web Clipper)을 사용하여 마크다운 텍스트 및 로컬 이미지 데이터를 확보한다.

### 2. 가이드라인 제공 (Schema Initialization)
- [[LLM]] 에이전트가 임의로 분류 기준을 바꾸지 못하도록 `AGENTS.md` 또는 `CLAUDE.md` 규칙 파일을 컨텍스트로 제공한다.
- 이 규칙 파일에는 frontmatter 규칙, 마크다운 템플릿, 허용 태그, 명명 규칙 등이 상세히 규정되어 있다.

### 3. 점진적 컴파일 (Incremental Ingestion)
- 새 자료가 `raw/` 폴더에 추가되면, 전체 위키를 새로 짓지 않고 신규 텍스트만 "컴파일"한다.
- [[LLM]]은 새 데이터를 분석해 요약 노트를 만들고, 기존에 존재하던 10~15개의 관련 지식 노트를 찾아서 내용을 보강한 뒤 `[[백링크]]`를 자동 삽입해 연결망을 확장한다.
- 이 과정에서 전체 위키를 매번 리빌드하지 않으므로 API 토큰 비용과 연산 시간이 대폭 절감된다.

### 4. 자생적 지식 정비 (Linting/Self-Healing)
- 정기적으로 [[LLM]] 에이전트에게 오류 검사를 의무화한다.
- 위키 문서 간 내용 모순점, 인바운드 링크가 0개여서 찾아갈 수 없는 고립된 페이지(Orphan page), 본문에서 인용되었으나 실물 파일이 없는 미작성 개념어 등을 스캔하여 자동으로 교정한다.

### 5. 질의 및 지식 누적 (Query & Refeed Loop)
- 지식의 종합적 이해가 필요한 수준 높은 질문(예: "개념 A와 B의 관계성 분석")을 던지면, [[LLM]]이 위키의 `index.md`와 요약 카드를 참조해 정확한 조언을 도출한다.
- **핵심 가치**: 질문을 통해 얻은 심층 답변을 다시 `wiki/` 내의 독립된 마크다운 페이지로 저장하여 지식 베이스의 영구적인 벽돌로 환류시킨다.

## 예시 시나리오

1. **로컬 볼트 세팅**: 로컬 PC에 Obsidian을 설치하고 `raw/`와 `wiki/` 폴더를 생성한다.
2. **지침 파일 로드**: 카파시의 공개용 아이디어 설정 파일([gist.github.com/karpathy](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f))을 복사하여 `schema/` 혹은 `AGENTS.md`에 배치한다.
3. **Ingest 실행**:
   `raw/new-paper.md`를 추가하고 CLI 또는 에이전트 대화창에 아래 명령을 내린다.
   ```text
   [System] AGENTS.md에 지정된 스키마에 따라 raw/new-paper.md를 컴파일하고, 관련 개념 노트를 wiki/ 하위에 새로 작성하거나 기존 노트를 업데이트하시오. index.md와 log.md에도 이력을 반영하십시오.
   ```
4. **결과 확인**: [[LLM]]이 `wiki/개념.md` 파일에 새로운 백링크 `[[신규 개념]]`을 엮어 생성하고 `log.md`에 수정 이력을 자동 기재한다.

## 핵심 요지

- **[[RAG]]의 블랙박스 극복**: 매번 유사도 매칭으로 정보 조각만 긁어와 새로 조합하는 고전 [[RAG]]의 한계를 뛰어넘어, 인간이 읽을 수 있는 평범한 마크다운 위키 형태로 지식을 가시화하여 투명하게 유지한다.
- **단일 진실 공급원 분리**: 1차 원본(`raw/`)과 가공 지식(`wiki/`)이 격리되어 있으므로 위키 재생성이나 재컴파일 시 데이터 훼손 우려가 없다.
- **플랫폼 종속 탈피 (No Vendor Lock-in)**: 로컬 드라이브의 순수 마크다운 기반으로 지식이 관리되므로 상용 서비스의 중단이나 서버 장애 시에도 정보가 영구 보존된다.
- **합성 데이터 및 파인튜닝으로 확장**: 깨끗하게 정제된 위키 텍스트와 백링크는 추후 소형 [[LLM]](s[[LLM]]) 학습을 위한 양질의 합성 학습 데이터(Synthetic training data)로 재활용되어 전용 모델 구축의 밑거름이 된다.

## 관련 노트

- [[AI 세컨드 브레인]]
- [[바이브 코딩(Vibe coding)]]

## 출처

- `raw/Andrej Karpathy Stopped Using AI to Write Code. He’s Using It to Build a Second Brain Instead.md`
- 안드레 카파시 Github Gist: [https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
