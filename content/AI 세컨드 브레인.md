---
aliases:
- AI 세컨드 브레인 구축법
- 개인 지식 관리 시스템
- PKM
- AI-세컨드-브레인
core: true
created: 2026-06-07
sources:
- raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md
- raw/내가 Obsidian을 정리하는 방법 - 다니엘 프린디.md
- raw/AI 네이티브 세컨드 브레인을 구축하는 방법 (2026년 방식).md
- raw/옵시디언 마스터하기 - 노트를 세컨드 브레인으로 만드는 완벽 가이드.md
- raw/LLM에게 옵시디언 볼트 열쇠를 주면 일어나는 일.md
- raw/테일윈드의 고군분투는 무너지는 사상누각의 징조다.md
- raw/AI가 내 글쓰기 커리어를 죽였다. AI 만세.md
- raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max
- raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
- raw/AI는 개발자를 대체하는 것이 아니라 더 심각한 일을 하고 있다.md
- raw/모든 AI 엔지니어가 알아야 할 10가지 LangChain 및 LangGraph 개념.md
- raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md
- raw/디지털 제품 제작은 잊으세요. 대신 이것에 집중하세요.md
- raw/AI Agents. Complete Course.md
- raw/How to Do Hard Things When You Have Zero Motivation.md
- raw/Anthropic이 Opus 4.8에 대해 말하지 않은 것 - 하네스를 흡수하는 Anthropic.md
- raw/좋은 삶을 만드는 것에 대한 지루한 진실.md
- raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
- raw/Why senior UX designers are struggling in 2026-ko.md
- raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md
- raw/2026년 AI 보조 코딩은 하나의 기술이다. 실제로 이 기술을 마스터하는 방법.md
- raw/10 Things Every Investor Should Know (but most learn too late).md
- raw/Claude Code를 밑바닥부터 직접 구현해 보았다.md
- raw/Give Your AI Agent 36 Superpowers. Long‑Term Memory in Minutes with GBrain (Open
- raw/I Sat in Engineering Meetings for Two Years Without Understanding What a Branch
- raw/Claude Code 프로젝트를 위한 MEMORY.md.md
- raw/im-not-ai.md
- raw/마이크로서비스 대신 모듈러 모놀리스 — AI 에이전트가 코드를 읽기 시작했을 때 바뀐 것들.md
- raw/40억 달러 대기업이 깨뜨린 오픈소스와 개발자 협박의 역풍.md
- raw/The S&P 500 Illusion. Why Your “Diversified” Index Is Really a Bet on 10 Stocks.md
- raw/Your Wandering Mind Is Not the Enemy of Focus.md
- raw/BofA’s May Survey Says Investors Are Back in Stocks. The 30-Year Is the Risk..md
- raw/The Best Way to Make AI Write Like You-ko.md
- raw/내 주의 집중 시간을 되돌려준 11가지 사소한 생활 습관의 변화.md
- raw/2026년을 위한 웹 디자인 및 빌드 워크플로우.md
- raw/These 3 ETFs Created More Millionaires Than Any Stock.md
- raw/60일간 11번의 기술 인터뷰를 치르며 깨달은 아무도 말해주지 않는 패턴.md
- raw/Run a Useful Local LLM in 30 Minutes (Coding, RAG, Voice).md
- raw/만약 단 5편의 AI 논문만 읽어야 한다면 바로 이것입니다.md
- raw/Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko.md
- raw/AI 코딩 에이전트와 함께하는 명세 기반 개발 결정판 가이드.md
- raw/Building an MCP Ecosystem at Pinterest-ko.md
- raw/Skills Alone Won’t Save You in the AI Economy.md
- raw/RAG 시스템 초보자부터 전문가까지의 완전 가이드 (2026년 에디션).md
- raw/AI 세컨드 브레인을 구축하기 전에 알았더라면 좋았을 것들.md
- raw/Claude Code와 Obsidian으로 AI 세컨드 브레인 구축하기.md
status: evergreen
tags:
- knowledge
- agent
- workspace
- second-brain
type: concept
updated: 2026-07-10
---
# AI 세컨드 브레인

## 한 줄 정의
AI 세컨드 브레인은 대규모 지식 노동자 및 개인이 정보의 정적인 저장(Storage)을 넘어, 옵시디언 등의 마크다운 노트 앱과 AI 에이전트를 결합하여 지식을 실시간 대화 상대이자 의사결정을 돕는 동반자로 활용하는 상위 개인 지식 관리(PKM) 체계다.

## 핵심 요지
- **지식 구조의 이원화 (Johnny Decimal & PARA)**: 폴더 깊이를 최대 3단계로 제한하고 [[조니 데시멀]] 번호 체계를 PARA(Projects, Areas, Resources, Archives) 구조와 결합하여 AI가 맥락을 빠르게 스캔할 수 있도록 유연한 인바운드 링크 구조를 제공한다.
- **검색 증강 작성(Retrieval-Augmented Writing)으로의 전환**: Andrej Karpathy가 제시한 "[[LLM]] Wiki" 패턴에 따라 노트를 읽기 전용 도서관으로 삼는 단순 검색 증강 채팅에서 탈피하여, 에이전트가 백그라운드에서 노트를 편집하고 모순을 해결하는 "잠들지 않는 편집장" 구조로 전환한다.
- **점진적 컨텍스트 공개 (Progressive Disclosure)**: 루트 `CLAUDE.md`로 기본 대화를 가볍게 열고, 하위 프로젝트 진입 시 해당 폴더의 세부 지침을 동적으로 로딩하여 모델의 인지 한계와 토큰 예산 낭비를 막는다.
- **에이전트 자율 인제스천 (AI-native Ingestion)**: 사용자가 가공되지 않은 러프한 생각이나 일기, 회의록을 입력하면, 백그라운드 에이전트가 `/ingest` 및 `/compile` 파이프라인을 구동하여 지식을 정밀 요약하고 핵심 위키 노트와 상호 위키링크(`\[\[노트 제목\]\]`)로 자동 결합한다.
- **볼트 접근 권한(Vault Access)과 가드레일**: 에이전트에게 디렉터리 읽기/쓰기 권한을 주면 생각의 복리 효과를 유도하는 강력한 강제 기제(Forcing Function)가 작동하지만, 외부 입력 차단과 샌드박싱 등의 가드레일이 수반되어야 한다.
- Obsidian은 IDE다. [[LLM]]은 프로그래머다. 위키는 코드베이스다. (Obsidian is the IDE. [[LLM]] is the developer. The wiki is the codebase.)
- [[RAG]]의 한계(매번 새로 시작하여 지식이 누적되지 않는 구조)를 Ingest(수집) 단계에서 문서를 선처리해 지식을 결합하는 업스트림 컴파일 방식으로 해결한다.
- 인간-AI 협업 모델의 3단계 발전: 바이브 코딩(2025년 초) -> 에이전틱 엔지니어링(2026년 초) -> [[LLM]] 지식 베이스(2026년 4월).
- 수집을 담당하며 절대 수정이 허용되지 않는 읽기 전용의 `raw/` 영역(기억의 저장고)과, AI 가공 및 결합이 허용되나 절대 원본 데이터를 침범하지 않는 `wiki/` 영역(이해의 발현)의 엄격한 이원화 분리를 통해 원천 맥락을 보존한다. (출처: raw/Claude Code와 Obsidian으로 AI 세컨드 브레인 구축하기.md)
- 지식의 신뢰도 증명을 위해 `/query` 명령어는 단순히 내용을 요약하는 데 그치지 않고, 참조한 원천 `raw/` 파일의 정확한 경로명과 구체적인 텍스트 시작 줄(Line) 번호, 최초 소스 근거를 동반하여 답변을 입증한다. (출처: raw/Claude Code와 Obsidian으로 AI 세컨드 브레인 구축하기.md)
- 지식 구조의 이원화 (Johnny Decimal & PARA): 폴더 깊이를 최대 3단계로 제한하고 [[조니 데시멀]] 번호 체계를 PARA 구조와 결합하여 AI가 맥락을 빠르게 스캔할 수 있도록 유연한 인바운드 링크 구조를 제공한다.
- 검색 증강 작성(Retrieval-Augmented Writing)으로의 전환: 원문을 상호 연결된 정형 위키로 사전 컴파일한 뒤 위키를 쿼리한다.
- 점진적 컨텍스트 공개 (Progressive Disclosure): 루트 CLAUDE.md로 기본 대화를 가볍게 열고, 하위 프로젝트 진입 시 해당 폴더의 세부 지침을 동적으로 로딩하여 모델의 인지 한계와 토큰 예산 낭비를 막는다.

## 상세

### 1. 지식 연결과 [[조니 데시멀]] & PARA 볼트 구조
- **다니엘 프린디의 볼트 구조 규칙**: 폴더 분류는 최대 3단계 깊이로 제한하고, [[조니 데시멀]] 번호 체계와 PARA 구조를 융합하여 9대 폴더로 지식 베이스를 조직화한다.
  - `0. Inbox` (또는 `Capture`): 정리되지 않은 임시 메모 보관소.
  - `Clippings`: 웹 클리퍼로 수집된 모든 원시 노트.
  - `Attachments`: 이미지나 PDF 파일을 프로젝트별 폴더에 보관.
  - `Admin`: 일일 노트, Bases 데이터, 템플릿, 개인 서류 보관소.
  - `Archive`: 완료되었거나 거의 사용하지 않는 지식 백업 폴더.
  - `References`: 독서 기록, 인물 프로필, 장소 정보 등의 참고 자료 모음.
  - `Zettelkasten`: 제텔 ID별 원자적 개념 노트(하위 폴더 없음).
  - `Projects`: 마감이 명확한 현재의 활성 프로젝트.
  - `Sources`: 창작자나 주제별 스크랩 자료.
- **태깅 및 속성 정형화**: 태그와 카테고리는 복수형 및 `PascalCase` 형식을 취하며, 나만의 태그(예: `LogIdeas-`, `LogJournal-`)를 활용한다. 속성 이름은 소문자(`tags`, `aliases`), 속성값은 대문자로 통일하여 에이전트의 구문 파싱 일관성을 보장한다.

### 2. Steph Ango의 에이전트 스킬셋 (kepano/obsidian-skills)
에이전트가 옵시디언 마크다운 구문을 훼손하지 않도록, 옵시디언 CEO Steph Ango는 2026년 초 `kepano/obsidian-skills` 오픈소스를 공개하여 에이전트에게 옵시디언의 구체적 활용법을 학습시켰다.
- `obsidian-markdown`: 위키링크(`\[\[노트\]\]`), 콜아웃, 프런트매터, 임베드의 올바른 구현 규칙 정의.
- `obsidian-bases`: 필터, 뷰, 타입을 갖춘 구조화된 데이터 포맷팅 규칙.
- `json-canvas`: 노트 내 시각적 캔버스 파일 생성 및 편집 제어.
- `obsidian-cli`: 명령줄을 통한 볼트 제어.
- `defuddle`: 스크랩된 웹 페이지를 깨끗한 마크다운으로 전처리하여 네비게이션 광고로 인한 토큰 낭비 방지.

### 3. Claude Code 기반 8가지 커스텀 슬래시 명령어 세트
Claude Code를 볼트 디렉터리에서 구동하고 `.claude/commands/` 디렉터리에 슬래시 명령을 마크다운 파일로 등록하여 비개발 지식 노동용 자동화 워크플로우를 완성한다.
1. `/sync`: 최근 7일간의 주간 노트, 활성 프로젝트, 마스터 태스크 리스트, Inbox를 스캔하여 현재 컨텍스트를 요약 동기화한다.
2. `/trace`: vault 전체에서 특정 주제의 타임라인(첫 등장 시점, 진화 과정, 현재 연결 링크)을 스캔하여 출력한다.
3. `/connect`: 양방향 wikilinks를 따라 direct, one-hop, two-hop 연결 경로를 찾고, 브리지 노트를 식별해 놓치거나 고립된 노트를 찾아 연결을 제안한다.
4. `/inbox`: Inbox 내 노트를 분석해 PARA 원칙에 기초한 추천 목적지와 대안을 제시하고, 사용자의 확인 절차(HITL)를 거쳐 자동 분류한다.
5. `/graduate`: 최근 주간 노트(1~4주분)를 스캔하여 미완성 아이디어, 답 없는 질문, 회고, 끝맺지 못한 생각을 분리하여 `0. Inbox/Graduates/` 하위에 독립 노트로 승격시킨다.
6. `/ghost`: 사용자가 작성한 기존 노트의 톤, 어휘, 신념을 학습하여 사용자의 실제 목소리와 말투로 답변 초안을 합성한다.
7. `/challenge`: 특정 신념이나 의사결정에 대해 모순점, 숨겨진 암묵적 가정, 추론 약점을 Stress Test하여 사각지대를 폭로한다.
8. `/ideas`: 최근 30일간의 관심사 패턴을 채굴하여 내가 이미 연구 중이거나 고민하는 내용에 기반한 차기 빌드 도구, 네트워킹 인물, 글감 아이디어를 제안한다.
- **주간 리뷰 워크플로우 루프**: `/sync` -> `/graduate` -> `/inbox` -> `/connect` -> `/challenge` -> `/ideas` 순서로 매주 볼트를 순환 정돈한다.

### 4. 메타(Meta)의 6만 명 지식 노동자 AI 세컨드 브레인 구축 성과
메타 애널리틱스 팀에서 시작한 이 실험은 엔지니어, PM, 디자이너, 법무, 재무 등 전사 63,000명의 임직원에게 확산되었다.
- **도입 규모 및 장애 극복**: 석 달 만에 0에서 63,000건의 설치를 돌파하였으며 일일 활성 사용자 수(DAU)는 10,000명에 달했다. 한 PM의 자발적 후기 공유로 급속하게 확장되는 과정에서 플러그인의 클라우드 API 호출 제한 초과 장애를 겪었으며, 인프라 대역폭을 10배로 증설하여 대응했다.
- **조직적 가치**: 수동 회의록 요약, 임원 보고 다이제스트(10명 기준의 팀원 보고서 취합이 몇 분 이내에 병렬 처리 완료), PARA 자동 구성(`/para-init`) 등 아래로부터의 자발적인 확장 플랫폼 생태계가 정착되었다.

### 5. 하드웨어 세팅 및 모델의 한계
- **구동 모델 선택**: 
  - **순수 로컬**: 개인정보 보호에 최적화되어 있으나 속도가 느림. Llama 4 Scout, Mistral NeMo 12B, 혹은 코딩용 Qwen3 모델을 사용하며, VRAM이 탑재된 2,500달러 이상의 고성능 노트북이 필수적이다.
  - **하이브리드**: 로컬 디스크에 볼트를 둔 채 MCP 서버를 통해 Claude Code 등 클라우드 [[LLM]] 추론을 연동한다.
- **관계성 환각(Hallucination)**: 소형 로컬 모델의 경우 아무런 맥락이 없는 두 엔티티를 자신 있게 엮어 가짜 관계를 설명하므로 사용자의 비판적 교차 검토가 요구된다.

### AI 에이전트 통합 세컨드 브레인의 6대 구성 요소
1. **AI 에이전트**: 터미널 CLI 제어가 가능하고 업무 루틴을 스크립트로 학습시킬 수 있는 도구 (예: Claude Code).
2. **구조화된 옵시디언 볼트**: 에이전트 스캔 범위 지정 및 안전 가드레일을 씌우는 최상위 7대 폴더 아키텍처.
3. **일관된 노트 연결 규칙**: Templater 등을 활용해 4대 프론트매터 필드를 엄격하게 관리하는 규칙.
4. **에이전트 액세스 프로토콜**: CLI 환경에서 옵시디언과 통신하는 전용 드라이버 (예: obsidian-cli-skill).
5. **에이전트 전용 볼트 색인(Vault Index)**: 전체 볼트를 스캔하여 뼈대 파일과 디바이스 환경을 에이전트 메모리에 선언해 둔 인덱스.
6. **주기적인 유지보수 루틴**: `/sync`, `/graduate` 등 슬래시 명령어를 활용해 매주 지식을 정돈하는 주기적 작업 흐름.

### 4대 프론트매터 필드와 토픽 계층 구조 관리
- `type`(문서 분류), `topics`(주제 분류), `tags`(임시 상태), `sources`(출처 매핑)의 4대 필드를 필수적으로 관리한다.
- 특히 `topics`는 부모 토픽 페이지에 `Up` 링크를 걸어 계층망을 형성하고, 토픽이 포화되면 에이전트에게 지시하여 1) 관련 노트를 수집하고, 2) 하위 서브 토픽을 정의하고, 3) 부모와 상향 연결한 뒤 재배치하는 워크플로우를 자동화한다.
- JDH Wilkins의 오픈소스 [옵시디언-CLI 연동 스킬 소스코드](https://github.com/jdhwilkins/obsidian-cli-skill)를 통해 볼트의 코어 인덱스를 연동하여 검색 및 수정 효율을 극대화한다.

### 4대 슬래시 명령어 기반 지식 제어 파이프라인
- **/ingest**: `raw/` 폴더의 신규 원천 데이터를 스캔하여 고유명사와 수치를 보존한 채 `wiki/` 개념 노트를 승격하고 양방향 위키링크(`링크`)로 자동 매핑합니다.
- **/query**: 자연어로 볼트 내 지식을 탐색하며 신뢰도 높은 근거 출처(라인 번호 포함)를 동반해 보고합니다.
- **/lint**: 끊어지거나 고립된 링크, frontmatter 누락 등을 정기 감사(Audit)합니다.
- **/log**: 분류되지 않는 아이디어를 타임스탬프와 함께 일일 일지에 즉시 기록합니다.

### 7. 메타(Meta)의 4대 기본 탑재 에이전트 스킬
메타 전사 63,000명 이상이 사용하는 AI 세컨드 브레인은 PARA 워크스페이스 구조 위에 아래 4대 기본 슬래시 명령어를 결합하여 온보딩 마찰을 해소하고 지식 노동의 복리 효과를 창출한다.
- **`/para-init`**: 최근 사내 활동(게시글, 메신저, 할 일 목록 등)을 스캔하여 최적의 PARA 폴더 구조를 제안하고, 프로젝트별 `CLAUDE.md` 컨텍스트 파일 및 자료 구성을 자동 빌드한다.
- **`/start-project`**: 아이디어 발의 시 목표, 담당자, 관련 질문을 입력받아 새 폴더를 개설하고 유사 사내 자료를 전수 탐색하여 요약 brief 및 시작 태스크 카드를 자동 생성한다.
- **`/read-meeting-notes`**: 녹취록 저장소를 모니터링해 미처리 회의록의 후속 작업(Action Items)을 추출하고, 키워드/참여자 가중치 매칭을 통해 최적의 프로젝트 폴더로 자동 이동한다.
- **`/debrief:team`**: 조직도 기반으로 팀원 전체의 코드 리뷰, 공유 문서, 할 일 상태를 병합하여 포트폴리오 스타일의 팀 종합 성과 보고서를 몇 분 이내에 취합해 HTML로 출력한다.
- **서드 브레인(Third Brain)**: 개인 워크스페이스 데이터를 공동 지식 공유 레이어로 통합하여 팀 단위 공동 컨텍스트를 동기화하는 시스템이다.

## 예시
- **커스텀 슬래시 명령어 설정**: `.claude/commands/ingest.md`를 생성하여 새로운 수집 패턴을 자동화.
- **할 일 관리 통합**: [옵시디언과 클로드 코드로 AI 기반 할 일 관리 시스템 구축하기](https://www.jdhwilkins.com/how-i-built-an-ai-powered-task-system-with-obsidian-and-claude-code)의 데일리 크론 요약 사례.

- **수집과 이해의 분리(PARA 변환 예시)**:
  웹 스크랩이나 챗 JSON 백업을 변환하여 `raw/`에 보관한 뒤, 이를 수정하지 않고 `/ingest 2` 명령어와 같이 소량씩 흡수시켜 `wiki/` 내의 개념 그래프를 점진적으로 강화해 나갑니다.

## 충돌
## 관련 노트
- [[Claude.md 운영 원칙]]
- [[Context Engineering]]
- [[Agent Harness]]
- [[Agent Native Infrastructure]]
- [[GBrain]]
- [[Claude Cowork]]
- [[모듈러 모놀리스]]
- [[MEMORY.md 운영 원칙]]
- [[Lethal Trifecta]]
- [[유기적 개인 지식 시스템]]
- [[사양 기반 개발 (Spec Driven Development)]]
- [[LLM Wiki 운영 패턴]]

## 출처
- Meta Analytics Team, "How We Built an AI Second Brain for 60K Knowledge Workers" (2026)
- Daniel Prindii, "My Obsidian Setup and Map of Content (MOC) Workflow" (2025)
- Steph Ango (Obsidian CEO), "What Happens When You Give an [[LLM]] the Keys to Your Vault" (2026)
- Tiago Forte, *Building a Second Brain* (2022)
- Andrej Karpathy, *[[LLM]] Wiki Pattern gist* (2026-04-02)캔한다.
2. **원자적 분할 및 요약**: 단일 노트 내에 다중 주제가 혼재된 경우, 800~1500자 단위의 원자적 개념 노트로 자동 분할하고 고유명사와 수치를 보존한 한국어 요약본을 작성한다.
3. **상호 위키링크 연결**: 지식 베이스의 전체 단어 임베딩 유사도를 계산하여 관련된 기존 위키 노트 최소 2개 이상을 링크(`\[\[관련 노트\]\]`)로 자동 매핑한다.
4. **품질 검증 (Linter)**: 깨진 위키링크, 출처 누락, 중복 제목 여부를 검사해 정합성을 고정한다.

### 3. 볼트 제어권 이양과 보안 위험
- **강제 기제 (Forcing Function)**: 디스크에 직접 쓸 수 있는 자율 에이전트에게 볼트 열쇠를 주는 행위는, 세션과 세션 사이에 알아서 일하게 만드는 강력한 기제다. 사용자가 작성한 글의 모순을 지적하거나 잊었던 생각을 상기시켜 주어 '대화 가능한 세컨드 브레인'으로 진화한다.
- **보안 위험 관리**: 에이전트가 외부 웹 검색 도구와 볼트 쓰기 도구를 동시에 획득할 때, 신뢰할 수 없는 외부 악성 정보가 유입되어 볼트 내 핵심 데이터를 삭제하는 치명적 3대 보안 위험([[Lethal Trifecta]])이 발생할 수 있다. 따라서 에이전트의 로컬 실행 환경을 샌드박스로 격리하고, 상태 변경이 큰 동작은 사용자의 승인(HITL)을 거치도록 설계해야 한다.

### 6. 폴더 아키텍처 및 메타데이터 연결 실무 스키마
AI 에이전트(예: Claude Code)와의 안전하고 일관된 통합을 실현하기 위한 핵심 설계 규칙과 구조는 다음과 같습니다.
- **7대 최상위 물리 폴더 설계**:
  - `00 Daily Notes` (일일 일지), `10 Raw` (원천 스크랩, 수정 불가 읽기 전용), `20 Notes` (요약 지식 노트), `30 Projects` (활성 프로젝트 문서), `97 Topics` (주제별 인덱스), `98 Assets` (미디어 리소스), `99-Templates` (새 노트 생성용 템플릿).
- **4대 범용 프론트매터(Frontmatter) 규칙**:
  - `type`: 노트 유형 규정 (예: Raw/Article, Notes, Topic 등).
  - `topics`: Up 필드를 이용해 부모 토픽을 링크하여 상향 연결 계층 관계 수립.
  - `tags`: 임시 또는 상태 제어 용도(`status/draft`, `status/published`)로만 한정하여 활용.
  - `sources`: 지식 지도의 상하 관계(Notes -> Raw)를 정립하기 위한 위키링크.
- **Obsidian-CLI 스킬 연동**:
  - 일반 파일 연산 대신 옵시디언의 내장 검색 엔진 API 및 인덱스를 활용하도록 `obsidian-cli-skill` 드라이버를 로컬 환경에 적용합니다. `CLAUDE.md` 등에 관련 영구 파일 자산과 색인을 수립하여 자율적인 리팩토링 및 누락 링크 복원을 실행합니다.

## 예시 스킬 흐름
- **`/para-init`**: 사용자의 최근 사내 활동(게시물, 할 일 목록, 코드 리뷰 등)을 스캔해 에이전트가 맞춤형 PARA 폴더 구조를 생성하고 관련 컨텍스트 파일을 자동 빌드해 진입 장벽을 제거한다.
- **`/read-meeting-notes`**: 신규 회의록의 키워드 매칭 가중치 및 참여자 목록을 대조해 가장 어울리는 프로젝트 폴더로 회의록을 자동 이동시키고 후속 작업(Action Items)을 추출한다.
- **`/vault-audit`**: 볼트 내에 연결이 끊어진 고아 노트를 찾아내고, MOC 인덱스 노정리에 업데이트 링크를 제안하여 지식 그래프를 촘촘하게 유지한다.

## 관련 노트
- [[Claude.md 운영 원칙]]
- [[Context Engineering]]
- [[Agent Harness]]
- [[Agent Native Infrastructure]]
- [[GBrain]]
- [[Claude Cowork]]
- [[모듈러 모놀리스]]
- [[MEMORY.md 운영 원칙]]
- [[Lethal Trifecta]]
- [[유기적 개인 지식 시스템]]

## 출처
- Meta Enterprise Engineering Team, "How We Built an AI Second Brain for 60K Knowledge Workers" (2026)
- Daniel Prindii, "My Obsidian Setup and Map of Content (MOC) Workflow" (2025)
- Steph Ango (Obsidian CEO), "What Happens When You Give an [[LLM]] the Keys to Your Vault" (2026)
- Tiago Forte, *Building a Second Brain* (2022)
- [AI 세컨드 브레인을 구축하기 전에 알았더라면 좋았을 것들](file:///Users/railscraft/Obsidian/raw/AI%20%EC%84%B8%EC%BB%A8%EB%93%9C%20%EB%B8%8C%EB%A0%88%EC%9D%B8%EC%9D%84%20%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0%20%EC%A0%84%EC%97%90%20%EC%95%8C%EC%95%98%EB%8D%94%EB%9D%BC%EB%A9%B4%20%EC%A2%8B%EC%95%98%EC%9D%84%20%EA%B2%83%EB%93%A4.md)
- [How We Built an AI Second Brain for 60K Knowledge Workers-ko](file:///Users/railscraft/Obsidian/raw/How%20We%20Built%20an%20AI%20Second%20Brain%20for%2060K%20Knowledge%20Workers-ko.md)
- [내가 Obsidian을 정리하는 방법 - 다니엘 프린디](file:///Users/railscraft/Obsidian/raw/%EB%82%B4%EA%B0%80%20Obsidian%EC%9D%84%20%EC%A0%95%EB%A6%AC%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95%20-%20%EB%8B%A4%EB%8B%88%EC%97%98%20%ED%94%84%EB%A6%B0%EB%94%94.md)
- [AI 네이티브 세컨드 브레인을 구축하는 방법 (2026년 방식)](file:///Users/railscraft/Obsidian/raw/AI%20%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C%20%EC%84%B8%EC%BB%A8%EB%93%9C%20%EB%B8%8C%EB%A0%88%EC%9D%B8%EC%9D%84%20%EA%B5%AC%EC%B6%95%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95%20%282026%EB%85%84%20%EB%B0%A9%EC%8B%9D%29.md)
- [옵시디언 마스터하기 - 노트를 세컨드 브레인으로 만드는 완벽 가이드](file:///Users/railscraft/Obsidian/raw/%EC%98%B5%EC%8B%9C%EB%94%94%EC%96%B8%20%EB%A7%88%EC%8A%A4%ED%84%B0%ED%95%98%EA%B8%B0%20-%20%EB%85%B8%ED%8A%B8%EB%A5%BC%20%EC%84%B8%EC%BB%A8%EB%93%9C%20%EB%B8%8C%EB%A0%88%EC%9D%B8%EC%9C%BC%EB%A1%9C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EC%99%84%EB%B2%BD%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [LLM에게 옵시디언 볼트 열쇠를 주면 일어나는 일](file:///Users/railscraft/Obsidian/raw/[[LLM]]%EC%97%90%EA%B2%8C%20%EC%98%B5%EC%8B%9C%EB%94%94%EC%96%B8%20%EB%B3%BC%ED%8A%B8%20%EC%97%B4%EC%87%A0%EB%A5%BC%20%EC%A3%BC%EB%A9%B4%20%EC%9D%BC%EC%96%B4%EB%82%98%EB%8A%94%20%EC%9D%BC.md)
- [테일윈드의 고군분투는 무너지는 사상누각의 징조다](file:///Users/railscraft/Obsidian/raw/%ED%85%8C%EC%9D%BC%EC%9C%88%EB%93%9C%EC%9D%98%20%EA%B3%A0%EA%B5%B0%EB%B6%84%ED%88%AC%EB%8A%94%20%EB%AC%B4%EB%84%88%EC%A7%80%EB%8A%94%20%EC%82%AC%EC%83%81%EB%88%84%EA%B0%81%EC%9D%98%20%EC%A7%95%EC%A1%B0%EB%8B%A4.md)
- [AI가 내 글쓰기 커리어를 죽였다. AI 만세](file:///Users/railscraft/Obsidian/raw/AI%EA%B0%80%20%EB%82%B4%20%EA%B8%80%EC%93%B0%EA%B8%B0%20%EC%BB%A4%EB%A6%AC%EC%96%B4%EB%A5%BC%20%EC%A3%BD%EC%98%80%EB%8B%A4.%20AI%20%EB%A7%8C%EC%84%B8.md)
- [I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max](file:///Users/railscraft/Obsidian/raw/I%20Cancelled%20ChatGPT%2C%20Cursor%2C%20and%20Midjourney%20This%20Week%20%E2%80%94%20My%20MacBook%20Pro%20M5%20Max)
- [What Is MCP? Build a Custom MCP Server in Python-ko](file:///Users/railscraft/Obsidian/raw/What%20Is%20MCP%3F%20Build%20a%20Custom%20MCP%20Server%20in%20Python-ko.md)
- [AI는 개발자를 대체하는 것이 아니라 더 심각한 일을 하고 있다](file:///Users/railscraft/Obsidian/raw/AI%EB%8A%94%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A5%BC%20%EB%8C%80%EC%B2%B4%ED%95%98%EB%8A%94%20%EA%B2%83%EC%9D%B4%20%EC%95%84%EB%8B%88%EB%9D%BC%20%EB%8D%94%20%EC%8B%AC%EA%B0%81%ED%95%9C%20%EC%9D%BC%EC%9D%84%20%ED%95%98%EA%B3%A0%20%EC%9E%88%EB%8B%A4.md)
- [모든 AI 엔지니어가 알아야 할 10가지 LangChain 및 LangGraph 개념](file:///Users/railscraft/Obsidian/raw/%EB%AA%A8%EB%93%A0%20AI%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EA%B0%80%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%2010%EA%B0%80%EC%A7%80%20LangChain%20%EB%B0%8F%20LangGraph%20%EA%B0%9C%EB%85%90.md)
- [AI로 몰래 쓴 글을 가려내는 명백한 방법들](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md)
- [디지털 제품 제작은 잊으세요. 대신 이것에 집중하세요](file:///Users/railscraft/Obsidian/raw/%EB%94%94%EC%A7%80%ED%84%B8%20%EC%A0%9C%ED%92%88%20%EC%A0%9C%EC%9E%91%EC%9D%80%20%EC%9E%8A%EC%9C%BC%EC%84%B8%EC%9A%94.%20%EB%8C%80%EC%8B%A0%20%EC%9D%B4%EA%B2%83%EC%97%90%20%EC%A7%91%EC%A4%91%ED%95%98%EC%84%B8%EC%9A%94.md)
- [AI Agents. Complete Course](file:///Users/railscraft/Obsidian/raw/AI%20Agents.%20Complete%20Course.md)
- [How to Do Hard Things When You Have Zero Motivation](file:///Users/railscraft/Obsidian/raw/How%20to%20Do%20Hard%20Things%20When%20You%20Have%20Zero%20Motivation.md)
- [Anthropic이 Opus 4.8에 대해 말하지 않은 것 - 하네스를 흡수하는 Anthropic](file:///Users/railscraft/Obsidian/raw/Anthropic%EC%9D%B4%20Opus%204.8%EC%97%90%20%EB%8C%80%ED%95%B4%20%EB%A7%90%ED%95%98%EC%A7%80%20%EC%95%8A%EC%9D%80%20%EA%B2%83%20-%20%ED%95%98%EB%84%A4%EC%8A%A4%EB%A5%BC%20%ED%9D%A1%EC%88%98%ED%95%98%EB%8A%94%20Anthropic.md)
- [좋은 삶을 만드는 것에 대한 지루한 진실](file:///Users/railscraft/Obsidian/raw/%EC%A2%8B%EC%9D%80%20%EC%82%B6%EC%9D%84%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EA%B2%83%EC%97%90%20%EB%8C%80%ED%95%9C%20%EC%A7%80%EB%A3%A8%ED%95%9C%20%EC%A7%84%EC%8B%A4.md)
- [Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko](file:///Users/railscraft/Obsidian/raw/Building%20a%20Multi-Agent%20System%20That%20Turns%20One%20Sentence%20Into%20a%20%24500%20Online%20Course-ko.md)
- [Why senior UX designers are struggling in 2026-ko](file:///Users/railscraft/Obsidian/raw/Why%20senior%20UX%20designers%20are%20struggling%20in%202026-ko.md)
- [Claude Code를 위한 Figma 스킬 완벽 가이드](file:///Users/railscraft/Obsidian/raw/Claude%20Code%EB%A5%BC%20%EC%9C%84%ED%95%9C%20Figma%20%EC%8A%A4%ED%82%AC%20%EC%99%84%EB%B2%BD%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [2026년 AI 보조 코딩은 하나의 기술이다. 실제로 이 기술을 마스터하는 방법](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%20AI%20%EB%B3%B4%EC%A1%B0%20%EC%BD%94%EB%94%A9%EC%9D%80%20%ED%95%98%EB%82%98%EC%9D%98%20%EA%B8%B0%EC%88%A0%EC%9D%B4%EB%8B%A4.%20%EC%8B%A4%EC%A0%9C%EB%A1%9C%20%EC%9D%B4%20%EA%B8%B0%EC%88%A0%EC%9D%84%20%EB%A7%88%EC%8A%A4%ED%84%B0%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95.md)
- [10 Things Every Investor Should Know (but most learn too late)](file:///Users/railscraft/Obsidian/raw/10%20Things%20Every%20Investor%20Should%20Know%20%28but%20most%20learn%20too%20late%29.md)
- [Claude Code를 밑바닥부터 직접 구현해 보았다](file:///Users/railscraft/Obsidian/raw/Claude%20Code%EB%A5%BC%20%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EC%A7%81%EC%A0%91%20%EA%B5%AC%ED%98%84%ED%95%B4%20%EB%B3%B4%EC%95%98%EB%8B%A4.md)
- [Give Your AI Agent 36 Superpowers](file:///Users/railscraft/Obsidian/raw/Give%20Your%20AI%20Agent%2036%20Superpowers.%20Long%E2%80%91Term%20Memory%20in%20Minutes%20with%20[[GBrain]]%20%28Open)
- [I Sat in Engineering Meetings for Two Years Without Understanding What a Branch](file:///Users/railscraft/Obsidian/raw/I%20Sat%20in%20Engineering%20Meetings%20for%20Two%20Years%20Without%20Understanding%20What%20a%20Branch)
- [Claude Code 프로젝트를 위한 MEMORY.md](file:///Users/railscraft/Obsidian/raw/Claude%20Code%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC%20%EC%9C%84%ED%95%9C%20MEMORY.md.md)
- [im-not-ai](file:///Users/railscraft/Obsidian/raw/im-not-ai.md)
- [마이크로서비스 대신 [[모듈러 모놀리스]] — AI 에이전트가 코드를 읽기 시작했을 때 바뀐 것들](file:///Users/railscraft/Obsidian/raw/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EC%84%9C%EB%B9%84%EC%8A%A4%20%EB%8C%80%EC%8B%A0%20%EB%AA%A8%EB%93%88%EB%9F%AC%20%EB%AA%A8%EB%86%80%EB%A6%AC%EC%8A%A4%20%E2%80%94%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EA%B0%80%20%EC%BD%94%EB%93%9C%EB%A5%BC%20%EC%9D%BD%EA%B8%B0%20%EC%8B%9C%EC%9E%91%ED%96%88%EC%9D%84%20%EB%95%8C%20%EB%B0%94%EB%80%90%20%EA%B2%83%EB%93%A4.md)
- [40억 달러 대기업이 깨뜨린 오픈소스와 개발자 협박의 역풍](file:///Users/railscraft/Obsidian/raw/40%EC%96%B5%20%EB%8B%AC%EB%9F%AC%20%EB%8C%80%EA%B8%B0%EC%97%85%EC%9D%B4%20%EA%B9%A8%EB%9C%A8%EB%A6%B0%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%EC%99%80%20%EA%B0%9C%EB%B0%9C%EC%9E%90%20%ED%98%91%EB%B0%95%EC%9D%98%20%EC%97%AD%ED%92%8D.md)
- [The S&P 500 Illusion. Why Your “Diversified” Index Is Really a Bet on 10 Stocks](file:///Users/railscraft/Obsidian/raw/The%20S%26P%20500%20Illusion.%20Why%20Your%20%E2%80%9CDiversified%E2%80%9D%20Index%20Is%20Really%20a%20Bet%20on%2010%20Stocks.md)
- [Your Wandering Mind Is Not the Enemy of Focus](file:///Users/railscraft/Obsidian/raw/Your%20Wandering%20Mind%20Is%20Not%20the%20Enemy%20of%20Focus.md)
- [BofA’s May Survey Says Investors Are Back in Stocks. The 30-Year Is the Risk.](file:///Users/railscraft/Obsidian/raw/BofA%E2%80%99s%20May%20Survey%20Says%20Investors%20Are%20Back%20in%20Stocks.%20The%2030-Year%20Is%20the%20Risk..md)
- [The Best Way to Make AI Write Like You-ko](file:///Users/railscraft/Obsidian/raw/The%20Best%20Way%20to%20Make%20AI%20Write%20Like%20You-ko.md)
- [내 주의 집중 시간을 되돌려준 11가지 사소한 생활 습관의 변화](file:///Users/railscraft/Obsidian/raw/%EB%82%B4%20%EC%A3%BC%EC%9D%98%20%EC%A7%91%EC%A4%91%20%EC%8B%9C%EA%B0%84%EC%9D%84%20%EB%90%98%EB%8F%8C%EB%A0%A4%EC%A4%80%2011%EA%B0%80%EC%A7%80%20%EC%82%AC%EC%86%8C%ED%95%9C%20%EC%83%9D%ED%99%9C%20%EC%8A%B5%EA%B4%80%EC%9D%98%20%EB%B3%80%ED%99%94.md)
- [2026년을 위한 웹 디자인 및 빌드 워크플로우](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%9B%B9%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%B0%8F%20%EB%B9%8C%EB%93%9C%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.md)
- [These 3 ETFs Created More Millionaires Than Any Stock](file:///Users/railscraft/Obsidian/raw/These%203%20ETFs%20Created%20More%20Millionaires%20Than%20Any%20Stock.md)
- [60일간 11번의 기술 인터뷰를 치르며 깨달은 아무도 말해주지 않는 패턴](file:///Users/railscraft/Obsidian/raw/60%EC%9D%BC%EA%B0%84%2011%EB%B2%88%EC%9D%98%20%EA%B8%B0%EC%88%A0%20%EC%9D%B8%ED%84%B0%EB%B7%B0%EB%A5%BC%20%EC%B9%98%EB%A5%B4%EB%A9%B0%20%EA%B9%A8%EB%8B%AC%EC%9D%80%20%EC%95%84%EB%AC%B4%EB%8F%84%20%EB%A7%90%ED%95%B4%EC%A3%BC%EC%A7%80%20%EC%95%8A%EB%8A%94%20%ED%8C%A8%ED%84%B4.md)
- [Run a Useful Local [[LLM]] in 30 Minutes (Coding, [[RAG]], Voice)](file:///Users/railscraft/Obsidian/raw/Run%20a%20Useful%20Local%20[[LLM]]%20in%2030%20Minutes%20%28Coding%2C%20[[RAG]]%2C%20Voice%29.md)
- [만약 단 5편의 AI 논문만 읽어야 한다면 바로 이것입니다](file:///Users/railscraft/Obsidian/raw/%EB%A7%8C%EC%95%BD%20%EB%8B%A8%205%ED%8E%B8%EC%9D%98%20AI%20%EB%85%BC%EB%AC%B8%EB%A7%8C%20%EC%9D%BD%EC%96%B4%EC%95%BC%20%ED%95%9C%EB%8B%A4%EB%A9%B4%20%EB%B0%94%EB%A1%9C%20%EC%9D%B4%EA%B2%83%EC%9E%85%EB%8B%88%EB%8B%A4.md)
- [Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko](file:///Users/railscraft/Obsidian/raw/Build%20a%20Real-Time%20Voice%20Agent%20in%2030%20Minutes%20%28With%20Interruption%20Handling%29-ko.md)
- [AI 코딩 에이전트와 함께하는 명세 기반 개발 결정판 가이드](file:///Users/railscraft/Obsidian/raw/AI%20%EC%BD%94%EB%94%A9%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EC%99%80%20%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94%20%EB%AA%85%EC%84%B8%20%EA%B8%B0%EB%B0%98%20%EA%B0%9C%EB%B0%9C%20%EA%B2%B0%EC%A0%95%ED%8C%90%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [Building an MCP Ecosystem at Pinterest-ko](file:///Users/railscraft/Obsidian/raw/Building%20an%20MCP%20Ecosystem%20at%20Pinterest-ko.md)
- [Skills Alone Won’t Save You in the AI Economy](file:///Users/railscraft/Obsidian/raw/Skills%20Alone%20Won%E2%80%99t%20Save%20You%20in%20the%20AI%20Economy.md)
- [RAG 시스템 초보자부터 전문가까지의 완전 가이드 (2026년 에디션)](file:///Users/railscraft/Obsidian/raw/[[RAG]]%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EC%B4%88%EB%B3%B4%EC%9E%90%EB%B6%80%ED%84%B0%20%EC%A0%84%EB%AC%B8%EA%B0%80%EA%B9%8C%EC%A7%80%EC%9D%98%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C%20%282026%EB%85%84%20%EC%97%90%EB%94%94%EC%85%98%29.md)
- [Claude Code와 Obsidian으로 AI 세컨드 브레인 구축하기](file:///Users/railscraft/Obsidian/raw/Claude%20Code%EC%99%80%20Obsidian%EC%9C%BC%EB%A1%9C%20AI%20%EC%84%B8%EC%BB%A8%EB%93%9C%20%EB%B8%8C%EB%A0%88%EC%9D%B8%20%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0.md)

