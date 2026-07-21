---
aliases:
  - LLM Wiki app vs skill
  - purpose.md 운영
core: false
created: 2026-05-26
sources:
  - Karpathy의 LLM Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다
  - Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번
  - 완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다
  - How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)
  - raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md
  - raw/노트북을 망가뜨리지 않으려고 라즈베리 파이에서 AI 에이전트 하네스를 구동한 후기.md
  - raw/지난번 이런 일이 있었을 때, 수많은 평범한 사람들이 백만장자가 되었다.md
  - raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md
  - raw/AI Agent Best Practices. Production-Ready Harness Engineering (2026 Guide)-ko.md
  - raw/You’re Using AI to Write Code. You’re Not Using It to Review Code.-ko.md
  - raw/지식 그래프, 진정한 게임 체인저... 그러나 구축과 유지가 극도로 어려운 이유.md
  - 'raw/밑바닥부터 만드는 LLM 메모리 #3. 벡터 메모리.md'
  - 'raw/밑바닥부터 만드는 LLM 메모리 #5. 계층형 자체 관리 메모리.md'
  - 'raw/밑바닥부터 만드는 LLM 메모리 #4. 지식 그래프 메모리.md'
  - raw/Claude Code 프로젝트 효율을 극대화하는 MEMORY.md 가이드.md
  - raw/AI와 오픈소스로 300개 이상의 팟캐스트를 RPG 게임으로 만든 이야기 - LennyRPG 8시간 개발기.md
  - raw/After Claude Code. 6 Open-Source Tools You Should Know-ko.md
  - raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md
  - raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually
  - raw/AI 개발자가 반드시 알아야 할 9가지 RAG 아키텍처 - 실무 예제로 배우는 완전 가이드.md
  - raw/완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다.md
  - raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 TurboQuant, 애플 실리콘 상륙.md
  - raw/Agentic AI, design systems & Figma. a practical guide-ko.md
  - raw/1인 개발자와 소규모 팀을 위한 주말 완성 디자인 시스템 구축법.md
  - 'raw/애플 실리콘을 위한 로컬 AI 스택: 한 차원 진화한 성능과 최적의 구축 가이드.md'
  - raw/How to write a DESIGN.md file Claude can actually use-ko.md
  - raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
  - raw/Karpathy의 LLM Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다.md
  - 'raw/밑바닥부터 만드는 LLM 메모리 #1. 슬라이딩 윈도우 버퍼.md'
  - raw/우리가 피그마 없이 제품을 배포하는 방법.md
  - raw/The Open-Source Agent Toolkit in 2026-ko.md
  - raw/How to Get Into the Top 1% in the Next 12 Months-ko.md
  - raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md
  - raw/2026년에 실제로 효과가 있는 나의 AI 디자인 워크플로우.md
  - raw/DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko.md
  - raw/Why senior designers are doing four jobs for one salary in 2026-ko.md
  - raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md
  - raw/Hermes Agent Is Cool. Running It Safely 24_7 Is the Real Trick.-ko.md
  - raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
  - 'raw/밑바닥부터 만드는 LLM 메모리 #2. 자동 요약 버퍼.md'
  - raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md
  - raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md
  - raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md
  - raw/LLM에게 옵시디언 볼트 열쇠를 주면 일어나는 일.md
  - raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md
status: evergreen
tags:
  - llm
  - wiki
  - workflow
  - agent
  - productivity
type: concept
updated: 2026-07-18
---

# LLM Wiki 구현 선택지

## 한 줄 정의
LLM Wiki 구현 선택지는 수집된 원시 데이터(Corpus)를 지식 위키로 변환하는 루프를 Programmatic 코드 패키지로 굳힐 것인지, 아니면 단일 `AGENTS.md` 지침을 통해 에이전트의 런타임 자율 협상에 맡길 것인지 결정하는 아키텍처 의사결정 기준이다.

## 핵심 요지
- **기본 설계 패러다임**: Andrej Karpathy의 `llm-wiki.md` 구상(2026년 4월[raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md#L12](file:///Users/railscraft/Obsidian/raw/Karpathy%EC%9D%98%20LLM%20Wiki%EB%A5%BC%20%EB%91%90%20%EB%B2%88%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.%20%EC%BD%94%EB%93%9C%EB%A1%9C%20%ED%95%9C%20%EB%B2%88,%20%EB%8B%A8%EC%9D%BC%20.md%EB%A1%9C%20%ED%95%9C%20%EB%B2%88.md#L12))에 기반하여, 매 질문마다 원문(Raw source)을 매번 다시 읽는 RAG의 토큰 낭비를 줄이고 원문을 상호 연결된(Interlinked) 정형 위키로 사전 컴파일한 뒤 위키를 쿼리한다.
- **코드로 굳히는 구현 (Programmatic Package)**: 대규모 corpus(수백~수천 개 문서) 환경에서 토큰 비용과 환각 누적을 억제하며, 입력의 재현성과 다운스트림 자동화 연동을 최적화한다.
- **에이전트 협상 구현 (Agentic Markdown)**: 200개 이하[raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md#L124](file:///Users/railscraft/Obsidian/raw/Karpathy%EC%9D%98%20LLM%20Wiki%EB%A5%BC%20%EB%91%90%20%EB%B2%88%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.%20%EC%BD%94%EB%93%9C%EB%A1%9C%20%ED%95%9C%20%EB%B2%88,%20%EB%8B%A8%EC%9D%BC%20.md%EB%A1%9C%20%ED%95%9C%20%EB%B2%88.md#L124) 소규모 개인 위키 환경에 적합하며, Python 코드나 Docker 인프라 없이 `AGENTS.md`와 `CLAUDE.md` 설정을 통해 에이전트를 '위키 유지관리자(Wiki Maintainer)'로 작동시킨다.
- **마크다운 구조적 파싱 한계**: 에이전트의 자율 컴파일만으로는 헤더 중첩 에러, YAML 구문 파손, 깨진 링크 등 구조적 마크다운 오류를 제어하기 어렵다. 위키가 다른 자동화 시스템의 입력으로 연동된다면 전용 처리 레이어(`markdown-hero`)가 필수적이다.
- Andrej Karpathy의 마크다운 지식 베이스 구상(`llm-wiki.md`)은 Cursor와 Obsidian, 그리고 단일 `CLAUDE.md` 명세의 조합으로 별도 코딩이나 서버 인프라 없이 단 30분 만에 완전 구동되는 로컬 지식 위키를 실현할 수 있다. (출처: [raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md#L7](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EC%8A%A4%EC%8A%A4%EB%A1%9C%20%EC%9C%A0%EC%A7%80%EB%90%98%EB%8A%94%20%EC%A7%80%EC%8B%9D%20%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A5%BC%20Karpathy%EC%9D%98%20LLM%20Wiki%EB%A1%9C%20%EB%A7%8C%EB%93%A0%20%EB%B0%A9%EB%B2%95.md#L7))
- 옵시디언 CEO Steph Ango가 공개한 `kepano/obsidian-skills`는 에이전트가 위키링크, 콜아웃, 프런트매터 등의 옵시디언 고유 마크다운 형식을 깨뜨리지 않고 작성할 수 있게 돕는 스킬 세트다. (출처: [raw/LLM에게 옵시디언 볼트 열쇠를 주면 일어나는 일.md#L49](file:///Users/railscraft/Obsidian/raw/LLM%EC%97%90%EA%B2%8C%20%EC%98%B5%EC%8B%9C%EB%94%94%EC%96%B8%20%EB%B3%BC%ED%8A%B8%20%EC%97%B4%EC%87%A0%EB%A5%BC%20%EC%A3%BC%EB%A9%B4%20%EC%9D%BC%EC%96%B4%EB%82%98%EB%8A%94%20%EC%9D%BC.md#L49))
- 4.9k 스타의 오픈소스 완성형 지식 베이스(nashsu/llm_wiki)[raw/완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다.md#L22](file:///Users/railscraft/Obsidian/raw/%EC%99%84%EC%84%B1%ED%98%95%20LLM%20Wiki%20%EC%95%B1%EC%9D%84%20%EC%B0%BE%EA%B3%A0%20%EB%82%98%EC%84%9C%20%EB%82%B4%EA%B0%80%20%EC%8B%A4%EC%A0%9C%EB%A1%9C%20%ED%95%84%EC%9A%94%ED%96%88%EB%8D%98%20%EB%8D%94%20%EC%9E%91%EC%9D%80%20%EA%B2%83%EC%9D%84%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.md#L22) 대비, 개인의 구체적인 마찰 지점을 해결하기 위한 경량화 아키텍처의 실용성을 대조한다.
- 수동 제어와 자동 에이전틱 갱신을 분리하는 2단계[raw/완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다.md#L100](file:///Users/railscraft/Obsidian/raw/%EC%99%84%EC%84%B1%ED%98%95%20LLM%20Wiki%20%EC%95%B1%EC%9D%84%20%EC%B0%BE%EA%B3%A0%20%EB%82%98%EC%84%9C%20%EB%82%B4%EA%B0%80%20%EC%8B%A4%EC%A0%9C%EB%A1%9C%20%ED%95%84%EC%9A%94%ED%96%88%EB%8D%98%20%EB%8D%94%20%EC%9E%91%EC%9D%80%20%EA%B2%83%EC%9D%84%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.md#L100) 인제스트(2-stage Ingestion) 프로세스가 도입된다.

## 상세

### 1. Programmatic Package 아키텍처 (예: Python `wiki-llm`)
대규모 데이터나 엄밀한 데이터 무결성이 보장되어야 하는 기업형 인프라에 적합하다. 8단계 파이프라인을 기계적 코드로 고정한다.

#### Karpathy의 8단계[raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md#L30](file:///Users/railscraft/Obsidian/raw/Karpathy%EC%9D%98%20LLM%20Wiki%EB%A5%BC%20%EB%91%90%20%EB%B2%88%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.%20%EC%BD%94%EB%93%9C%EB%A1%9C%20%ED%95%9C%20%EB%B2%88,%20%EB%8B%A8%EC%9D%BC%20.md%EB%A1%9C%20%ED%95%9C%20%EB%B2%88.md#L30) 파이프라인 (8-Stage Pipeline)
Karpathy가 스케치한 raw 자료의 wiki 컴파일 프로세스는 다음과 같은 8단계로 구성된다:
1. **Source Scan & Ingest (수집)**: 신규 또는 변경된 raw 소스 파일을 감지하고 읽어들임.
2. **Concept & Entity Extraction (추출)**: 소스 텍스트에서 핵심 개념, 인물, 도구, 주장, 용어 등의 엔티티를 추출.
3. **Draft Generation (Writer)**: 추출된 개념별로 위키 노트 초안(Draft)을 작성.
4. **Draft Evaluation (Evaluator)**: 작성된 초안의 완성도, 정확성, 누락 항목을 평가 및 검증.
5. **Editing & Consolidation (Editor)**: 평가 피드백을 반영하여 초안을 다듬고 기존 위키 노트와 병합 및 업데이트.
6. **Integrity Checking (Lint)**: 마크다운 문법, frontmatter 규칙, 깨진 위키링크 등을 정밀 검사.
7. **Error Repair (Repair)**: 린트 과정에서 발견된 오류를 수정하여 무결성 확보.
8. **Index & Log Rebuild (기록)**: `index.md` 및 `log.md`를 갱신하여 전체 위키 상태를 최신화.

- **Pydantic v2 계약**: 각 단계별로 타입 스키마(Typed Contract)를 엄격히 정의해 LLM 간 데이터 송수신 무결성을 보장한다.
- **콘텐츠 주소 지정 ID (Content-addressable ID)**: 페이지 바디(stripped body)의 SHA-256 해시값을 기반으로 UUID를 생성한다. 파일 이름이나 frontmatter 메타가 바뀌어도 본문 내용이 같다면 동일 ID를 유지하므로, 다운스트림 링크 파손을 방지한다.
- **`instructor` 기반 Multi-backend**: OpenRouter, OpenAI, Bedrock, Ollama 등을 호환하며 API 호출 실패 시 자동 재시도(Retry) 규칙을 탑재한다.
- **LangGraph 국소 활용**: 전체를 에이전트 자율에 맡기지 않고, Lint 결과를 병렬(Fan-out) 복구하는 에러 수리 에이전트 역할에만 제한적으로 그래프 자율성을 부여한다.
- **BM25 렉시컬 검색**: 무거운 벡터 인프라 대신 투명하고 고속 처리가 가능한 어휘 검색(Lexical Retrieval)을 기본 탑재한다.

### 2. Agentic Markdown 아키텍처 (단일 `AGENTS.md`)
Claude Code, Cursor 등 에이전트 모드가 작동하는 개발 환경 자체를 주 작업장으로 사용하는 개인 및 소규모 팀에 최적화된 셋업이다.
- **제거된 인프라**: Python 패키지 의존성, Pydantic 모델, Dockerfile, CI 워크플로, 별도의 Chat UI 등이 제거되어 즉각 시작할 수 있다.
- **유지된 가드레일**: `Writer -> Evaluator -> Editor` 트리플 패스 검증 룰, `\[\[wikilink\]\]` 분석 규약, 린팅 규칙 및 복구 동작 정의, 초기 런타임 환경설정용 config 블록은 파일 내 자연어로 고스란히 유지된다.

### 3. 마크다운 처리 레이어 (`markdown-hero`)의 중요성
에이전트는 겉보기에 그럴듯하지만(plausible) 엄밀한 마크다운 문법 기준을 자주 어긴다. heading nesting의 단계를 건너뛰거나, YAML frontmatter 콜론(:) 문법 오류, 중복 H1 헤더 생성, 재생성 시 섹션 순서 드리프트 등이 대표적이다.
- 위키가 청커(Chunker), 중복제거기(Deduplicator), 린터(Linter) 등 다운스트림 파이프라인의 **입력 데이터**로 투입되는 환경에서는 이러한 오류가 파싱 장애를 일으킨다.
- 따라서 코드 기반 패키지에는 `markdown-hero` 같은 별도의 마크다운 전처리 레이어를 두어 `markdown_merge(dedupe_headings=True)` 등 구조적 강제를 병행해야 한다.

### 4. 런타임 선택 기준 및 요약
| 의사결정 요인 | Agentic Markdown (`AGENTS.md`) | Programmatic Package (`wiki-llm`) |
| --- | --- | --- |
| **권장 문서 규모** | 200개 이하[raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md#L124](file:///Users/railscraft/Obsidian/raw/Karpathy%EC%9D%98%20LLM%20Wiki%EB%A5%BC%20%EB%91%90%20%EB%B2%88%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.%20%EC%BD%94%EB%93%9C%EB%A1%9C%20%ED%95%9C%20%EB%B2%88,%20%EB%8B%A8%EC%9D%BC%20.md%EB%A1%9C%20%ED%95%9C%20%EB%B2%88.md#L124)의 소형 개인 위키 | 수백~수천 개 이상의 대규모 데이터셋 |
| **주요 장점** | 빠른 설정 변경, 유연한 규칙 수정 | deterministic UUID 보장, 토큰 비용 최소화 |
| **자동화 결합** | 없음 (에이전트 대화 창 내 수동 유지) | 배치(Batch) 스케줄링, Scheduled Run 지원 |
| **감사(Audit)** | 불가능 | 모든 API Call의 Audit Trail 추적 및 로깅 |

### 5. Cursor와 Obsidian을 활용한 30분[raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md#L7](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EC%8A%A4%EC%8A%A4%EB%A1%9C%20%EC%9C%A0%EC%A7%80%EB%90%98%EB%8A%94%20%EC%A7%80%EC%8B%9D%20%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A5%BC%20Karpathy%EC%9D%98%20LLM%20Wiki%EB%A1%9C%20%EB%A7%8C%EB%93%A0%20%EB%B0%A9%EB%B2%95.md#L7) 초고속 구축 워크플로우
balukosuri의 오픈소스 레포(`https://github.com/balukosuri/llm-wiki-karpathy`)를 기반으로 단 3번의 AI 대화(Prompt)를 통해 지식 베이스 아키텍처를 로컬에 완성한다.
- **대화 1단계 - 명세 정의**: Cursor 에디터에 Karpathy의 `llm-wiki.md` 원본을 제공하고 사용자의 직무(예: 기술 문서 작성자 등) 도메인에 알맞은 매뉴얼 스키마 매핑 논의.
- **대화 2단계 - 아키텍처 자동 빌드**: 단일 명령으로 `raw/`, `wiki/` 폴더 구조화, `CLAUDE.md` 스키마 작성, 스타터 마스터 노트 4개(`index.md`, `log.md`, `overview.md`, `glossary.md`) 자동 생성.
- **대화 3단계 - 옵시디언 샌드박스 연동**: Homebrew를 통해 Obsidian을 자동 호출 설치하고, `.obsidian/` 디렉토리 내 설정들(`app.json`, `appearance.json`, `graph.json`, `hotkeys.json` 등)을 사전에 세팅해 graph view 색상 태그 매핑, 단축키 바인딩, overview 자동 오픈 레이아웃을 완성하여 즉시 구동 가능한 Zero-config 상태 of Vault를 공급한다.

### 6. 노코드 기반 대안: Constella
Karpathy식 LLM Wiki의 구축 오버헤드(터미널 제어, 스크립트 작성, 마크다운 린트 규칙 정립 등)를 해소하기 위한 노코드 클라우드 대안으로 **Constella** 서비스가 존재한다.
- **동작 방식**: 사용자가 소스(웹 문서, 기사 등)를 드롭하여 입력하면 AI가 지식 간의 연결망을 자동으로 형성하고, 사용자는 축적된 전용 지식 베이스를 상대로 자연어 질의응답을 할 수 있어 코드 한 줄 없이 카파시 지식 시스템을 구현하게 돕는다.

### Steph Ango의 `kepano/obsidian-skills` 에이전트 스킬 통합
- **배경**: AI 에이전트가 범용 마크다운 형식으로 작성 시 프런트매터 파괴, 잘못된 위키링크 대괄호 등의 오류를 유도해 볼트 구조가 손상되는 현상을 완화함.
- **핵심 컴포넌트**:
  - `obsidian-markdown` — 위키링크, 콜아웃, 프런트매터, 양방향 링크의 엄격한 문법 검증.
  - `obsidian-bases` — 필터, 뷰, 타입을 제공하는 구조화 데이터 레이어.
  - `json-canvas` — 시각적 노션 캔버스 구성요소 편집.
  - `obsidian-cli` — 셸 커맨드 기반의 볼트 관리 파이프라인.
  - `defuddle` — 외부 웹페이지를 수집해 광고/내비게이션 바를 제거하고 토큰 최적화 마크다운으로 변환.

### 3. 경량화 LLM Wiki 구축 스펙
- **대조군 오픈소스**: `nashsu/llm_wiki` (4.9k Stars) 프로젝트는 훌륭한 인터페이스를 가졌으나, 로컬 에이전트의 단순 참조와 리팩토링에는 무겁고 불필요한 레이어가 많음.
- **2단계 인제스트 파이프라인**:
  1. *분석 단계 (Analyze Phase)*: 문서를 읽고 기존 지식과 대조하여 보강점(Patches)이나 충돌 여부를 먼저 도출.
  2. *생성 단계 (Generate Phase)*: 분석된 패치 목록을 토대로 실제 위키 노트를 갱신 또는 신규 빌드.
- **Codex 스킬 통합**: 로컬 CLI 에이전트 환경에서 `llm-wiki-maintainer` 와 같은 커스텀 Codex 스킬을 작성해 인제스트 및 린트 검증 과정을 자동화함.

## 예시

- **개인 연구 위키**: `AGENTS.md` + `purpose.md` + `index/log` + 소스 요약
- **팀 협업 위키**: Project Skill 등록 + 리뷰 전용 페이지 + 정기 Scheduled Lint 스크립트
- **대형 기업 Corpus**: typed pipeline 패키지 빌드 + SHA-256 ID 부여 + `markdown-hero` 파서 연동

#### 로컬 위키 유지관리 명령어
- **Ingest**: `raw/`에 raw 문서를 던진 뒤 `Ingest raw/my-document.pdf`라고 Cursor에 지시하면, AI가 읽기 ➡️ 소스요약 작성 ➡️ 관련 노터 자동 파생 ➡️ glossary 갱신 ➡️ index/log 마스터 기록의 전 과정을 자동 수행한다.
- **Lint**: 주기적(`10회 ingest당 1회` 권장)으로 `Lint the wiki`를 지시하여 모순 지점, 대체된 구식 정보, 백링크 누락 고아 페이지를 탐지 및 복구한다.

### 에이전트 볼트 연동 및 설치
- **스킬 디렉토리 통합**: `kepano/obsidian-skills` 저장소를 클론하여 에이전트의 로컬 스킬 디렉토리에 통합하면, Claude Code가 볼트 내에서 임의 규격으로 작업해 구조를 망가뜨리는 문제를 방지할 수 있음.

### llm-wiki-maintainer 스킬 설정 예시
- `purpose.md` 의 전역 선언과 결합하여, `/ingest` 및 `/lint` 등의 전용 셸 래퍼(Wrapper) 명령어로 위키 린터를 즉시 가동하고 세션을 정제함.

### 7. 5대 LLM Wiki 구현체 비교 평가 (2026년 7월 실전 테스트[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L9](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L9))
안드레이 카파시의 LLM Wiki 발표 직후 일주일 만에 GitHub에 50개 이상의 관련 저장소가 생성되었으며, 대표적인 5개 구현체의 일주일간의 실전 테스트 결과는 다음과 같다: [raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L9](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L9)

1. **engram (TypeScript CLI + Claude Code)**
   - **특징**: CLI가 검증/색인/링크 빌드를 맡고, 에이전트가 추론을 담당하는 이분법적 아키텍처.
   - **장점**: 독보적인 데이터 정합성. 10개의 소스를 수집하는 동안 깨진 링크나 고아 페이지 0건 기록[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L39](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L39).
   - **단점**: CLI 환경 설정의 진입 장벽.
   - **평가**: 개발자용 9/10점, 일반인용 4/10점[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L43](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L43).

2. **Tome (Claude Code + Quartz)**
   - **특징**: Quartz 렌더링 레이어를 적용해 브라우저로 훑어볼 수 있는 웹 위키(디지털 가든) 생성.
   - **장점**: 백링크와 시각적 그래프 뷰 제공으로 반복 조회 습관 형성에 유리함.
   - **단점**: engram 대비 수집(Ingest)의 정밀성이 낮아 핵심 사항 누락 가능성 존재.
   - **평가**: 7.5/10점[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L55](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L55).

3. **obsidian-llm-wiki (Obsidian Native + Cursor)**
   - **특징**: 카파시 아키텍처를 Obsidian 및 Cursor 에이전트 스킬로 통합.
   - **장점**: 유튜브 영상 링크를 던지면 즉시 요약 1개와 개념 노트 4개를 상호 연결해 생성해 주는 `video2wiki` 스킬 제공[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L61](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L61).
   - **단점**: Cursor 에이전트 스킬 의존성으로 Claude Code 사용 시 직접 포팅 필요.
   - **평가**: 8/10점[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L67](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L67).

4. **pm-llm-wiki (도메인 특화 PM Wiki)**
   - **특징**: 제품 관리자(PM) 직군의 업무 루틴과 의사결정/리스크/이해관계자 스키마 템플릿 최적화.
   - **장점**: 명확하게 설계된 스키마 덕분에 범용 구현체 대비 실용적이고 예리한 답변 제공.
   - **평가**: PM 직군 기준 8.5/10점[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L79](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L79).

5. **jarvis-vault (자가 조직화 도구)**
   - **특징**: 완전 자동 분류 및 링크 구성을 내세운 옵시디언 [[AI 세컨드 브레인]].
   - **단점**: 에이전트에 가드레일이 없어 4일 차에 원치 않는 분류 체계 강제 및 1개 X 스레드가 3개 폴더에 중복 분산되는 등의 '자신감 넘치는 혼란' 발생[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L95](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L95). 사용 5일 차에 20분 만에 삭제됨[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L97](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L97).
   - **평가**: 5/10점[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L99](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L99).

### 8. 핵심 실전 교훈
- **스키마의 가치**: 엄격한 규칙을 강제하는 도구(engram, pm-llm-wiki)가 신뢰성이 높으며, 스키마 파일이 제품 가치의 80%를 결정한다[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L105](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L105).
- **수집(Ingest)의 엄격함**: 화려한 검색 기교보다 요약본 1개 생성 같은 철저한 문서화 규칙을 준수한 도구만이 복합 추론 질문에 올바르게 답변한다.
- **API 비용 리스크**: 대량 수집 시 하루 2~4달러의 API 비용이 발생할 수 있다[raw/I Tested 5 ‘LLM Wiki’ Implementations So You Don’t Have To.md#L115](file:///Users/railscraft/Obsidian/raw/I%20Tested%205%20%E2%80%98LLM%20Wiki%E2%80%99%20Implementations%20So%20You%20Don%E2%80%99t%20Have%20To.md#L115).

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

