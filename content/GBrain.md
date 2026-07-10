---
aliases: []
core: true
created: 2026-06-07
sources:
  - raw/Give Your AI Agent 36 Superpowers. Long‑Term Memory in Minutes with GBrain (Open
  - raw/I Sat in Engineering Meetings for Two Years Without Understanding What a Branch
  - raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md
  - raw/im-not-ai.md
  - raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max
  - raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
  - raw/Why senior UX designers are struggling in 2026-ko.md
  - raw/Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko.md
  - raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
  - raw/The Best Way to Make AI Write Like You-ko.md
  - raw/Building an MCP Ecosystem at Pinterest-ko.md
  - raw/GBrain - 에이전트를 위한 오픈소스 장기 기억 및 지식 그래프 인프라.md
  - raw/Give Your AI Agent 36 Superpowers. Long‑Term Memory in Minutes with GBrain (Open Source)-ko.md
status: evergreen
tags:
  - memory
  - agent
  - rag
type: tool
updated: 2026-07-10
---

# GBrain

## 한 줄 정의
GBrain은 와이콤비네이터(Y Combinator)의 개리 탄(Garry Tan) 대표가 공개한 오픈소스 에이전트 장기 기억(Long-term Memory) 시스템으로, 마크다운 파일을 기반으로 지식 그래프를 자동 구축하고 이를 MCP를 통해 에이전트에 영구 메모리로 공급하는 실행 인프라다.

## 핵심 요지
- **자동 구성 지식 그래프**: LLM을 과도하게 호출하지 않고 문서에서 인물, 조직, 이벤트, 관계(`works_at`, `invested_in` 등)를 스캔해 지식 그물망을 빌드한다.
- **하이브리드 검색 (pgvector + BM25)**: 벡터 유사도와 전통적 키워드 검색을 결합하여, 메모리 역량 평가용 LongMemEval 벤치마크에서 높은 검색 정확도를 노린다. (출처: raw/Give Your AI Agent 36 Superpowers. Long‑Term Memory in Minutes with GBrain (Open Source)-ko.md)
- **드림 사이클 (Dreaming Cycle)**: 야간 백그라운드 작업을 통해 깨진 참조 링크 복구, 엔티티 관계 업데이트 및 문서 재임베딩 작업을 자율적으로 최적화한다.
- **MCP(Model Context Protocol) 기본 지원**: `localhost:3000/mcp` 엔드포인트를 제공하여 Claude Code, Cursor, Windsurf 등의 에이전트 도구와 기본 연동된다.
- 개리 탄 대표의 M2/M4 Mac mini 16GB 로컬 서버 등 24시간 가동 스케일: 146,646개 페이지, 24,585명 인물, 5,339개 기업 데이터 및 66개 크론 자동화 스케줄 운영.
- 240페이지 분량 고품질 데이터셋 벤치마크 결과, 그래프 탑재 시 단순 RAG 대비 정밀도 P@5가 31.4포인트(최종 P@5 49.1%, R@5 97.9%) 상회하여 BrainBench 입증.

## 상세

GBrain은 크게 4가지 계층으로 아키텍처가 설계되어 작동한다:
1. **브레인 저장소 (Brain Repository)**: `~/gbrain` 디렉터리에 위치한 순수 마크다운 파일들의 집합으로, Git 버전 관리 및 기기 간 투명한 동기화가 가능하다.
2. **스킬 레이어 (Skills Layer)**: 34가지 이상의 워크플로가 제공되며, 회의 프로세서(Meeting processor), 이메일 요약기(Email summarizer), 링크 관계 분석기(Link relations) 등이 자동 트리거된다.
3. **GBrain 코어 (GBrain Core)**: LLM 사용량을 최소화한 빠른 엔티티 추출, 그래프 어셈블리, MCP 서버 통신을 담당한다.
4. **검색/추출 레이어 (Retrieval Layer)**: PostgreSQL, pgvector 및 BM25/ripgrep을 엮어 최적의 속도와 정확도를 제공하는 검색 엔진이다.

### 두 가지 지식 탐색 질의 경로
1. **`gbrain search`**: 벡터 유사도, RRF 랭킹, Reranker 필터를 이용해 관련 원시 문서 조각을 빠르게 검색하여 컨텍스트에 공급 (LLM API 비용 0원).
2. **`gbrain think`**: 검색된 문서를 LLM이 읽어 역참조 링크가 포함된 보고서를 작성하며, 브레인이 기록하지 못한 정보 공백(Gaps) 및 신선도(Recency)를 날카롭게 짚어내 제보하는 인지 복리 레이어.

### 표준 스키마 팩 버전 규격 (Schema Packs)
- **`gbrain-base-v2`**: v0.41.22 이후 디폴트. 중복 없는 15개 상호배타적 표준 텍소노미 분류 (`person`, `company`, `media`, `tweet`, `social-digest`, `analysis`, `atom`, `concept`, `source`, `deal`, `email`, `slack`, `writing`, `project`, `note`).
- **`gbrain-base`**: v0.41 이전 레거시 24개 세부 폴더 구조.
- **`gbrain-recommended`**: 기본 base 팩에 프로젝트 및 civic 등 13가지 실무 추천 폴더를 덧댄 확장 스키마.

## 예시

사용자가 `~/gbrain` 폴더에 다음과 같은 노트를 추가했을 때:
```markdown
- Garry Tan met with John Doe on 2026-06-05.
- John Doe is the CEO of Acme Corp.
```
GBrain은 `Garry Tan` - `met_with` -> `John Doe` -> `works_at` (CEO) -> `Acme Corp` 관계를 추출하여 저장한다. 이후 "개리 탄이 최근 만난 Acme Corp 관련 인물은 누구인가?"라고 물으면, 단순 텍스트 덩어리를 임베딩하여 반환하는 것이 아니라 구조화된 "John Doe"를 즉각 반환한다.

### 설치 및 관리 CLI 명령어
```bash
# PGLite 포터블 DB를 통한 2초 로컬 초기화 및 의존성 헬스 체크
gbrain init --pglite
gbrain doctor

# 기존 마크다운 폴더 일괄 인덱싱 및 capture
gbrain import ~/notes/
gbrain capture "새로운 아이디어 수집"

# Claude Code에 MCP 도구 즉시 연동
claude mcp add gbrain -- gbrain serve

# 원격 서버 브레인과 보안 토큰 연동
gbrain connect https://your-host/mcp --token gbrain_xxx --install

# v2 스키마 팩으로 데이터 마이그레이션 실행
gbrain onboard --check --explain
gbrain jobs submit unify-types --allow-protected --params '{"target_pack":"gbrain-base-v2"}'
```

## 충돌

## 관련 노트
- [[Agent Harness]]
- [[Context Engineering]]
- [[Model Context Protocol]]
- [[Hermes Agent]]
- [[AI 세컨드 브레인]]
- [[LLM Wiki 운영 패턴]]

