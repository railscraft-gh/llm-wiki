---
aliases:
- AI GitHub 생태계 신호
- AI OSS 작업대
- AI-오픈소스-작업대
core: false
created: 2026-05-26
sources:
- 2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가
- Supertonic 3. 99M 파라미터로 31개 언어를 말하는 초경량 TTS 모델
- The Complete (Honest) Guide to OpenClaw
- 지금 개발자들이 주목하는 오픈소스 GitHub 프로젝트 15선 - 출판형 다듬기
- After Claude Code. 6 Open-Source Tools You Should Know
- The Open-Source Agent Toolkit in 2026
- raw/Hermes 에이전트와 함께 사용하기 좋은 오픈소스 내부 도구 5가지.md
- raw/클로드 디자인은 과연 디자이너를 대체할까.md
- raw/2026년 AI 에이전트 워크플로우 핵심 패턴 분석.md
- raw/AI와 디자인 시스템 - 출판형 다듬기.md
- raw/AI Agent Best Practices. Production-Ready Harness Engineering (2026 Guide)-ko.md
- raw/You’re Using AI to Write Code. You’re Not Using It to Review Code.-ko.md
- raw/완벽하게 기계 가독성을 갖춘 디자인 시스템.md
- raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
- raw/2026년 오픈소스 LLM 플랫폼 비교 가이드 - Ollama, OpenRouter, Groq, NVIDIA NIM.md
- raw/파이썬 AI 에이전트 프레임워크 6종 비교 분석.md
- raw/From faster pencil to AI Experience Architect. a designer’s path.md
- raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md
- raw/더 빨리 배우고 싶다면 이 노트 정리 방식을 써라.md
- raw/Supertonic 3. 99M 파라미터로 31개 언어를 말하는 초경량 TTS 모델.md
- raw/After Claude Code. 6 Open-Source Tools You Should Know-ko.md
- raw/AI가 생성한 UI 디자인은 이제 인간 디자이너의 80퍼센트보다 우수하다.md
- raw/cc101_axwith_ko.html
- raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually
- raw/UI 디자인을 위한 최고의 AI 도구 10가지와 워크플로우.md
- raw/2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가.md
- raw/AI 에이전트에게 Prompt Engineering은 죽었다. 이제 진짜 중요한 것은 Context Engineering이다.md
- raw/Hermes Agent와 Ollama 로컬 설치 초고속 가이드.md
- raw/원시인 모드로 토큰 아끼려다 6만 스타 오픈소스에 PR 보낸 이야기.md
- raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
- raw/Structuring Agents, Skills, and MCPs 🤖🧩.md
- raw/The Complete (Honest) Guide to OpenClaw.md
- raw/지금 개발자들이 주목하는 오픈소스 GitHub 프로젝트 15선 - 출판형 다듬기.md
- raw/하네스를 내 것으로 만들기 - 출판형 다듬기.md
- raw/Agentic AI, design systems & Figma. a practical guide-ko.md
- raw/느낌 코딩의 시대는 끝났다 - GitHub Spec Kit과 명세 기반 개발.md
- raw/SpaceX의 파격적인 AI 인프라 전략 - 순수 C 언어로 22만 대 GPU를 제어하다.md
- raw/The most important Design System in 2026 that designers missed was built by
- raw/Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요.md
- raw/Good Design Doesn’t Happen By Default.md
- raw/How to write a DESIGN.md file Claude can actually use-ko.md
- raw/지루한 업무를 자동화하는 클로드 코워크 프롬프트 7가지.md
- raw/당신의 고양이가 챗GPT보다 세상을 더 잘 이해하는 이유.md
- raw/옵시디언 AI 제2의 뇌는 기억이 아니다.md
- raw/The Open-Source Agent Toolkit in 2026-ko.md
- raw/How to Get Into the Top 1% in the Next 12 Months-ko.md
- raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md
- raw/Code Is Not Cheap. How to Multiply Your AI’s Output With Software Fundamentals.md
- raw/Skills, MCP, Tool Calling. 에이전트 확장의 세 층.md
- raw/인생의 성공을 결정하는 5가지 핵심 자질.md
- raw/Why senior designers are doing four jobs for one salary in 2026-ko.md
- raw/Hermes Agent Is Cool. Running It Safely 24_7 Is the Real Trick.-ko.md
- raw/Claude Code와 Obsidian으로 AI 세컨드 브레인 구축하기.md
- raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
- raw/아이디어에서 현실 시스템까지 AI 에이전트 구축하기 - 출판형 다듬기.md
status: evergreen
tags:
- llm
- open-source
- agent
- tooling
type: concept
updated: 2026-07-10
---
# AI 오픈소스 작업대

## 한 줄 정의
AI 오픈소스 작업대는 2026년 AI GitHub 생태계가 local execution, workflow automation, self-hosted interface, grounded retrieval, terminal-native assistant 쪽으로 수렴한다는 관찰을 묶은 허브다.

## 핵심 요지
- 중요한 변화는 단일 저장소의 스타 수보다, 어떤 작업 표면이 오픈소스로 표준화되는가에 있다.
- 핵심 축은 local model 실행, self-hosted UI, visual workflow builder, [[RAG]] 플랫폼, terminal assistant, automation orchestration이다.
- 저장소 이름과 세부 스펙은 빨리 바뀌므로, 이 노트는 특정 도구 추천보다 생태계 방향과 작업 표면의 이동을 읽는 데 더 적합하다.
- 오픈소스 도구들의 실무 묶음: [[n8n]](custom JS & self-hosting API), [[Ollama]] & Open WebUI(self-hosted ChatGPT 대시보드 구축), Dify(prompt/provider 인프라 묶음), [[RAG]]Flow(citation traceability 특화) 등으로 지형이 안정되었다.
- 터미널 네이티브와 오픈 가중치: `npx @google/gemini-cli` 명령어어로 작동하는 terminal assistant 및 671B 파라미터(37B 활성화)와 128K context를 갖춘 DeepSeek-V3가 오픈소스 생태계 핵심 축을 담당한다.
- [[NocoBase]]는 22.3k GitHub Stars를 기록하며 비즈니스 구조와 규칙 경계를 갖춘 시스템 위에서 AI가 작업하도록 이끄는 대표적 로우코드 플랫폼이다.
- [[n8n]]은 187k GitHub Stars의 자동화 플랫폼으로 AI 에이전트의 실제 업무 프로세스 연결에 사용된다.
- [[Qdrant]](31.2k Stars)와 [[Outline]](38.5k Stars)은 각각 장기 기억 저장소와 지식 베이스를 담당하여 AI 컨텍스트 유실 문제를 해결한다.
- [[Coolify]](55k Stars)와 [[OpenHands]](73.2k+ Stars)는 각각 self-hosting 배포 관리와 엔지니어링 에이전트 런타임으로 기능한다.
- Mem0와 같은 장기 기억 프레임워크는 LoCoMo 벤치마크 테스트에서 기존 전체 컨텍스트 로딩 대비 레이턴시 92% 감소, 토큰 사용량 93% 절감을 이뤄내며 14배의 비용 효율화를 달성했다.
- Stagehand v3는 Chrome DevTools Protocol(CDP) 기반으로 런타임 엔진을 전면 리팩터링하여 Playwright 대비 44% 빠른 브라우징 속도를 보고했다.
- 엔지니어링 [[코딩 에이전트]] 영역에서는 [[OpenHands]](SWE-bench Verified 53~72%), Aider(git 내장형, Architect/Editor 모드로 30~40% 비용 절감), [[Cline]](VS Code 네이티브 분리 실행) 등 3대 오픈소스 도구들이 주도적인 스택을 점유했다.
- 현대 개발자들은 단순히 챗봇 데모나 라이브러리를 찾는 단계를 넘어, GitHub을 통해 통째로 작동하는 AI 운영 체계와 엔지니어링 레이어를 찾아 나서고 있다. [출처: raw/지금 개발자들이 주목하는 오픈소스 GitHub 프로젝트 15선 - 출판형 다듬기.md]
- AI 인프라는 점차 범용 어시스턴트에서 벗어나 금융, 리서치, 코딩, 개인 브라우징 격리 등 전문화된 로컬/셀프호스팅 시스템으로 세분화되고 있다. [출처: raw/지금 개발자들이 주목하는 오픈소스 GitHub 프로젝트 15선 - 출판형 다듬기.md]

## 상세

원문에 등장하는 저장소들은 결국 몇 가지 묶음으로 정리된다. **local AI stack**에는 [[Ollama]], Open WebUI, open-weight model이 있다. 이는 private code와 문서를 cloud 밖에서 다루려는 수요와 연결된다. 각 로컬 호스팅 플랫폼 및 클라우드/하드웨어 추론 환경별 비교는 [[2026년 오픈소스 LLM 플랫폼 비교]]에서 상세히 다룬다. **workflow automation**에는 [[n8n]]이 있고, 이는 business workflow와 AI reasoning을 연결하는 층을 보여 준다. **agent/runtime tooling**에는 [[OpenClaw]], Gemini CLI, LangChain ecosystem이 있다. 이는 AI가 채팅창에서 terminal·shell·앱 workflow로 이동하는 흐름을 상징한다. 특히 [[OpenClaw]]는 multi-channel personal agent, markdown memory, SKILL.md, self-hosted runtime을 한 덩어리로 보여 주는 사례다. **visual AI pipeline tooling**에는 [[Langflow]]가 있고, 이는 [[RAG]]와 multi-agent flow를 block 단위로 실험하는 표면이다. **grounded enterprise AI**에는 Dify와 [[RAG]]Flow가 있다. 이는 retrieval, citation, self-hosting, provider switching을 제품화하는 방향을 보여 준다.
후속 TTS raw를 보면 이 작업 표면이 텍스트를 넘어 speech layer로도 확장된다. 즉 local runtime과 open-weight 흐름은 코딩·검색·문서 요약뿐 아니라 음성 출력까지 온디바이스화하는 쪽으로 확장되고 있다.

`raw/지금 개발자들이 주목하는 오픈소스 GitHub 프로젝트 15선 - 출판형 다듬기.md`는 같은 지형을 한 번 더 스냅샷처럼 보여 준다. 단일 저장소 소개보다 중요한 것은, local stack, workflow automation, [[RAG]] platform, terminal assistant가 여전히 반복되는 작업 표면이라는 점이다.

`raw/After Claude Code. 6 Open-Source Tools You Should Know-ko.md`는 이 지형을 도구 묶음으로 다시 보여 준다. [[NocoBase]], [[n8n]], [[Qdrant]], [[Outline]], [[Coolify]], [[OpenHands]]는 각각 app builder, automation, vector store, knowledge base, deployment, agent runtime이라는 서로 다른 표면을 대표한다. 즉 "오픈소스 작업대"는 하나의 앱이 아니라, 서로 다른 문제를 해결하는 작업 표면들의 묶음이다. 특히 `raw/Hermes 에이전트와 함께 사용하기 좋은 오픈소스 내부 도구 5가지.md`에서 나타나듯, [[NocoBase]] 외에도 Appsmith, Budibase, Directus, Baserow와 같은 5대 로우코드/노코드 도구들은 셀프 호스팅 에이전트인 [[Hermes Agent]]와 연동되어 데이터 스키마 설계, 승인 [[워크플로]]우 구성, 데이터 가공 등의 작업 표면을 구축한다. 구체적인 연동 가이드는 [[Hermes Agent와 오픈소스 내부 도구 연동]]에서 다룬다.

`raw/The Open-Source Agent Toolkit in 2026-ko.md`는 같은 흐름을 stack layer로 재배치한다. orchestration/runtime control, memory/state, protocols/tools, browsers/computer use, coding agents/sandboxes, evals/observability, models/inference라는 7개 레이어는 어떤 저장소를 먼저 보아야 하는지 결정하는 체크리스트가 된다. 이 노트의 생태계 관찰은 결국 이 레이어 선택 문제로 수렴한다.

이 묶음은 [[Agent Native Infrastructure]]와 이어진다. 클릭 기반 SaaS가 아니라, self-hosted runtime·CLI·workflow builder·[[RAG]] platform이 에이전트용 작업 표면을 만든다는 뜻이기 때문이다. 또한 [[에이전트 확장 3계층]] 관점에서 보면 이들 저장소는 Skill/MCP/tool의 구분을 구현체 수준에서 다르게 조합한 사례로 볼 수 있다.


## 읽는 법

이 노트는 "지금 어떤 저장소를 깔아야 하는가"보다 "오픈소스가 어떤 작업 표면을 표준화하고 있는가"를 읽는 허브로 쓰는 편이 맞다.

- 저장소 이름은 바뀔 수 있어도 **local execution**, **workflow automation**, **grounded retrieval**, **terminal-native agent** 같은 축은 비교적 안정적으로 반복된다.
- 따라서 실제 도입 판단은 개별 도구 노트나 공식 README에서 하고, 이 노트는 상위 분류와 방향성 판단에 사용한다.
- [[OpenClaw]]처럼 개별 제품 구조를 보고 싶을 때는 하위 tool note로 내려가고, [[Agent Native Infrastructure]]처럼 더 상위 개념을 보고 싶을 때는 허브 노트로 올라간다.

### 3. 주요 오픈소스 도구별 핵심 스펙 및 역할
- **[[n8n]]**: visual builder와 custom JavaScript 코드를 자유롭게 결합하고, self-hosting이 가능하여 민감한 기업 비즈니스 데이터를 외부 유출 없이 로컬 네트워크 내에서 안전하게 자동화(webhook, data transform)한다.
- **[[Ollama]] & Open WebUI**: 로컬 환경 모델 서빙([[Ollama]]) 위에서 Open WebUI를 대시보드로 올려 대화 관리, user role, access control, audit log, [[RAG]] 및 voice feature를 탑재한 엔터프라이즈 사내 전용 AI 플랫폼을 무료 구축한다.
- **Dify**: 단순 챗봇 데모를 넘어 prompt/model/file provider 관리 및 monitoring, deployment 인프라를 일괄 바인딩하여 벤더 종속 없이 self-hosting 프로덕션 배포를 가능케 한다.
- **DeepSeek-V3**: Mixture-of-Experts 구조의 총 671B 파라미터(활성화 37B), 128K context window를 지원하는 오픈 가중치 모델로 상용 폐쇄형 모델 수준의 코딩 및 추론 능력을 local stack에 제공한다.
- **Google Gemini CLI**: `npx @google/gemini-cli` 명령어 기반으로 작동하며 개발자가 상주하는 터미널 환경에 밀착해 디버깅, 파일 생성, 코드 해석 등의 shell task를 terminal-native하게 지원한다.
- **[[RAG]]Flow**: 그럴듯한 답변이 아닌 검증 가능한 답변(citation traceability, 출처 추적성)이 필수적인 법무, 의료, 금융 도메인을 위해 document ingestion부터 citation tracking까지의 [[RAG]] 파이프라인을 통제한다.

### 6대 주요 오픈소스 도구 분석
- **[[NocoBase]]**: CRM, 티켓팅, ERP 등 엔터프라이즈 시스템 구축용 AI + no-code 플랫폼. AI가 데이터 모델, 페이지, [[워크플로]]우를 생성하면 사람은 GUI로 조정하여 시스템 경계를 고정한다.
- **[[n8n]]**: node 로직, API 호출, 커스텀 코드를 조율하여 AI 에이전트를 실무 비즈니스 프로세스에 연동하는 시각적 자동화 계층.
- **[[Qdrant]]**: [[RAG]], semantic search, agent memory 구축용 고성능 벡터 DB. self-hosting 시 내부 데이터 보안 통제가 가능.
- **[[Outline]]**: Notion/Confluence의 오픈소스 대안. PRD, 스키마, 프롬프트를 팀 위키로 관리하여 AI가 프로젝트를 이해하도록 만드는 명확한 지식 인프라.
- **[[Coolify]]**: Vercel/Railway를 대체하는 self-hosting 배포 관리 도구. Docker, DB, 앱 런타임을 중앙 관리하여 AI 스택 운영을 간소화.
- **[[OpenHands]]**: 코드베이스 분석, 버그 수정, DevOps를 자율 수행하는 장시간 실행 엔지니어링 에이전트.

### 2026년 오픈소스 에이전트 툴킷의 7대 레이어 구성

프로덕션 레벨 에이전트를 안정적으로 구축하고 운영하기 위한 오픈소스 스택은 7가지 책임 계층으로 표준화된다. 도구 선정 시 Latency, Audit Trail, Model Portability, Language Stack의 4대 제약 조건을 대조해야 한다.

1. **Orchestration & Runtime Control**: 흐름을 제어하고 checkpointing을 관리한다. Python 생태계의 PostgresSaver 기반 **[[LangGraph]]**, 간편한 프로토타이핑 특화 **CrewAI**, Pydantic 규격을 강조하는 **[[Pydantic AI]]**, TypeScript 네이티브 환경의 **Mastra**가 핵심이다.
2. **Memory & State**: **Mem0** (48k+ stars, 하이브리드 벡터+그래프 검색, user/session/agent 다층 구조), **Zep/Graphiti** (시계열 텍스트 및 개체 해석 특화), **Letta** (운영체제의 virtual memory 구조처럼 RAM/Disk 분할 처리)를 결합한다.
3. **Protocols & Tools**: **FastMCP** (async-first 파이선 MCP 서버 데코레이터 빌더) 및 **mcp-agent**를 통한 [[Model Context Protocol]] 표준 도구 작성이 주류를 이룬다.
4. **Browsers & Computer Use**: DOM 파싱 계열의 **Browser Use**(50k+ stars), Playwright 기반 **Stagehand v3**(CDP 적용으로 44% 가속), 비주얼 좌표 픽셀 클릭 계열의 **Skyvern**(WebVoyager 2.0 성공률 85.85%, 단 일반 작업은 DOM-driven 대비 비용 4~8배 상승)이 포진한다.
5. **Coding Agents & Sandboxes**: Docker 격리 및 이벤트 스트림 구조인 **[[OpenHands]]**(72k+ stars), git 형상관리 자동 커밋을 융합해 편집-기획 모드를 분리한 **Aider**(35k+ stars), VS Code 내에서 계획(Plan)-수행(Act) 단계를 수동 격리 통제하는 **[[Cline]]**(38k+ stars)이 경쟁한다.
6. **Evals & Observability**: 오픈소스 로깅 표준인 **Langfuse**, 오픈텔레메트리 연동이 강력한 **Arize Phoenix**, 영국 AI Security Institute의 평가 스위트인 **Inspect AI**로 디버깅 신뢰성을 보완한다.
7. **Models & Inference**: PagedAttention을 창안한 **vllm**, local quantization의 기본값인 **[[Ollama]]**, GGUF 파일 포맷을 주도한 C++ 기반 **llama.cpp**, 컨텍스트 접두사 캐싱 및 스키마 강제 출력을 지원하는 **SGLang**이 인프라 하단을 지탱한다.

### 2026년 오픈소스 에이전트 툴킷의 7대 레이어 구성

프로덕션 레벨 에이전트를 안정적으로 구축하고 운영하기 위한 오픈소스 스택은 7가지 책임 계층으로 표준화된다. 도구 선정 시 Latency, Audit Trail, Model Portability, Language Stack의 4대 제약 조건을 대조해야 한다.

1. **Orchestration & Runtime Control**: 흐름을 제어하고 checkpointing을 관리한다. Python 생태계의 PostgresSaver 기반 **[[LangGraph]]**, 간편한 프로토타이핑 특화 **CrewAI**, Pydantic 규격을 강조하는 **[[Pydantic AI]]**, TypeScript 네이티브 환경의 **Mastra**가 핵심이다.
2. **Memory & State**: **Mem0** (48k+ stars, 하이브리드 벡터+그래프 검색, user/session/agent 다층 구조), **Zep/Graphiti** (시계열 텍스트 및 개체 해석 특화), **Letta** (운영체제의 virtual memory 구조처럼 RAM/Disk 분할 처리)를 결합한다.
3. **Protocols & Tools**: **FastMCP** (async-first 파이선 MCP 서버 데코레이터 빌더) 및 **mcp-agent**를 통한 [[Model Context Protocol]] 표준 도구 작성이 주류를 이룬다.
4. **Browsers & Computer Use**: DOM 파싱 계열의 **Browser Use**(50k+ stars), Playwright 기반 **Stagehand v3**(CDP 적용으로 44% 가속), 비주얼 좌표 픽셀 클릭 계열의 **Skyvern**(WebVoyager 2.0 성공률 85.85%, 단 일반 작업은 DOM-driven 대비 비용 4~8배 상승)이 포진한다.
5. **Coding Agents & Sandboxes**: Docker 격리 및 이벤트 스트림 구조인 **[[OpenHands]]**(72k+ stars), git 형상관리 자동 커밋을 융합해 편집-기획 모드를 분리한 **Aider**(35k+ stars), VS Code 내에서 계획(Plan)-수행(Act) 단계를 수동 격리 통제하는 **[[Cline]]**(38k+ stars)이 경쟁한다.
6. **Evals & Observability**: 오픈소스 로깅 표준인 **Langfuse**, 오픈텔레메트리 연동이 강력한 **Arize Phoenix**, 영국 AI Security Institute의 평가 스위트인 **Inspect AI**로 디버깅 신뢰성을 보완한다.
7. **Models & Inference**: PagedAttention을 창안한 **vllm**, local quantization의 기본값인 **[[Ollama]]**, GGUF 파일 포맷을 주도한 C++ 기반 **llama.cpp**, 컨텍스트 접두사 캐싱 및 스키마 강제 출력을 지원하는 **SGLang**이 인프라 하단을 지탱한다.

### 2026년 오픈소스 에이전트 툴킷의 7대 레이어 구성

프로덕션 레벨 에이전트를 안정적으로 구축하고 운영하기 위한 오픈소스 스택은 7가지 책임 계층으로 표준화된다. 도구 선정 시 Latency, Audit Trail, Model Portability, Language Stack의 4대 제약 조건을 대조해야 한다.

1. **Orchestration & Runtime Control**: 흐름을 제어하고 checkpointing을 관리한다. Python 생태계의 PostgresSaver 기반 **[[LangGraph]]**, 간편한 프로토타이핑 특화 **CrewAI**, Pydantic 규격을 강조하는 **[[Pydantic AI]]**, TypeScript 네이티브 환경의 **Mastra**가 핵심이다.
2. **Memory & State**: **Mem0** (48k+ stars, 하이브리드 벡터+그래프 검색, user/session/agent 다층 구조), **Zep/Graphiti** (시계열 텍스트 및 개체 해석 특화), **Letta** (운영체제의 virtual memory 구조처럼 RAM/Disk 분할 처리)를 결합한다.
3. **Protocols & Tools**: **FastMCP** (async-first 파이선 MCP 서버 데코레이터 빌더) 및 **mcp-agent**를 통한 [[Model Context Protocol]] 표준 도구 작성이 주류를 이룬다.
4. **Browsers & Computer Use**: DOM 파싱 계열의 **Browser Use**(50k+ stars), Playwright 기반 **Stagehand v3**(CDP 적용으로 44% 가속), 비주얼 좌표 픽셀 클릭 계열의 **Skyvern**(WebVoyager 2.0 성공률 85.85%, 단 일반 작업은 DOM-driven 대비 비용 4~8배 상승)이 포진한다.
5. **Coding Agents & Sandboxes**: Docker 격리 및 이벤트 스트림 구조인 **[[OpenHands]]**(72k+ stars), git 형상관리 자동 커밋을 융합해 편집-기획 모드를 분리한 **Aider**(35k+ stars), VS Code 내에서 계획(Plan)-수행(Act) 단계를 수동 격리 통제하는 **[[Cline]]**(38k+ stars)이 경쟁한다.
6. **Evals & Observability**: 오픈소스 로깅 표준인 **Langfuse**, 오픈텔레메트리 연동이 강력한 **Arize Phoenix**, 영국 AI Security Institute의 평가 스위트인 **Inspect AI**로 디버깅 신뢰성을 보완한다.
7. **Models & Inference**: PagedAttention을 창안한 **vllm**, local quantization의 기본값인 **[[Ollama]]**, GGUF 파일 포맷을 주도한 C++ 기반 **llama.cpp**, 컨텍스트 접두사 캐싱 및 스키마 강제 출력을 지원하는 **SGLang**이 인프라 하단을 지탱한다.

### 개발자들이 주목하는 15대 GitHub 오픈소스 프로젝트 상세 스펙
1. **Anthropic Financial Services (`anthropics/financial-services`)**: 금융 보고, 컴플라이언스 검토, 문서 분석 등 실제 금융 비즈니스 [[워크플로]]우를 타깃으로 승인 루프 내에 사람을 두는(HITL) 에이전틱 컬렉션.
2. **Agent Skills (`addyosmani/agent-skills`)**: AI 에이전트를 위한 구조화된 [[워크플로]]우, 프롬프트, 테스트 패턴을 표준 소프트웨어 아키텍처 레이어로 정의한 저장소.
3. **D-Flash (`dflash-dev/dflash`)**: [[임베딩]], 벡터 인출, 분산 추론 등 대규모 모델에 최적화된 고속 데이터 접근용 분산 flash 기반 저장소 인프라.
4. **Cloak Browser (`cloakware/cloak-browser`)**: AI의 무분별한 행동 데이터 수집에 대응하여 브라우저 격리, 추적 방지, 미세 세부 설정을 지원하는 보안 연구자용 브라우저.
5. **AI Trader (`codas-ai/ai-trader`)**: 멀티 에이전트 간의 협업적 추론과 분석 토론을 결합하여 시장 맥락을 정밀 판단하는 금융 거래 연구 프레임워크.
6. **Local Deep Research (`dzhng/deep-research`)**: 클라우드 API를 쓰지 않고 로컬 [[LLM]], 추론 파이프라인, 출처 분석 검색기를 결합해 기밀 정보를 보호하며 동작하는 자율 연구 [[워크플로]]우.
7. **Lobe Hub (`lobehub/lobe-chat`)**: 다중 모델 제공사, 플러그인, 에이전트 및 지식 통합 오케스트레이션을 개인화된 AI 워크스페이스 형태로 서빙하는 플랫폼.
8. **Hello Agents (`hello-agent/hello-agents`)**: 현대 에이전트의 핵심 구성 요소인 메모리, 계획, 도구 사용, 오케스트레이션의 실제 아키텍처 구현을 가르쳐주는 교육용 저장소.
9. **Flutter Agent Skills (`flutter/agentic_ai`)**: 범용 조수가 아닌 Flutter 프레임워크에 특화된 재사용 가능 프롬프트와 코딩 패턴을 제공하는 [[에이전트 스킬]] 세트.
10. **May Gray (`maygray/maygray`)**: 사이버보안 및 디지털 조사를 위해 여러 공개 플랫폼에서 username 및 공개 프로필을 자동으로 스캔하는 OSINT 도구.
11. **Chigode (`chigode/chigode`)**: IDE를 켤 필요 없이 가벼운 코딩 스니펫과 [[워크플로]]우를 신속하게 설정하고 테스트할 수 있는 초경량 실행 환경.
12. **Skills for Real Engineers (`mattpocock/skills-for-real-engineers`)**: Matt Pocock이 만든 저장소로, 채팅 인터페이스에서 탈피해 구조화된 프롬프트와 재사용 가능 액션으로 엔지니어링 개발 자동화 패턴을 표준화한 프로젝트.
13. **OpenBB (`OpenBB-finance/OpenBB`)**: 과거 값비싼 기업 전용 터미널 뒤에 숨겨진 다양한 금융 시장 데이터 제공자를 단일 오픈소스 [[워크플로]]우로 끌어내린 데이터 플랫폼.
14. **[[Temporal]] TypeScript SDK (`temporalio/sdk-typescript`)**: 분산 마이크로서비스 및 AI 오케스트레이션 파이프라인에서 재시도, 일시 실패, 장기 실행 프로세스를 durable하게 제어하는 개발자용 SDK.
15. **[[Obsidian]] Copilot (`logancyang/obsidian-copilot`)**: 지식 베이스와 AI 레이어를 하나로 융합하여 노트 필기 내에서 요약, 브레인스토밍, 검색을 돕는 Copilot 플러그인.

## 예시

- local assistant 실험: [[Ollama]] + Open WebUI
- business automation: [[n8n]] + AI step
- terminal-native coding: Gemini CLI 또는 유사 도구
- grounded Q&A: [[RAG]]Flow 또는 Dify 계열

## 예시
- **터미널 네이티브 어시스턴트 실행**: `npx @google/gemini-cli`를 로컬 쉘에서 구동하여 브라우저 전환 오버헤드 없이 terminal-native하게 빌드 로그 오류를 전송하고, 로컬 디버깅 및 소스 보정을 자율 수행하는 [[워크플로]]우.

### [[Claude Code]] 연동 설치 명령어
- **[[NocoBase]]**: `NocoBase CLI 설치와 초기화까지 도와줘: https://docs.nocobase.com/cn/ai/ai-quick-start.md` 프롬프트 사용.
- **[[n8n]]**: `n8n을 Docker로 설치하고, PostgreSQL 영속 스토리지와 기본 인증까지 설정해 줘`
- **[[Qdrant]]**: `Qdrant를 Docker로 설치하고, AI Knowledge Base용 기본 collection까지 만들어 줘`
- **[[Outline]]**: `Outline을 Docker로 설치하고, PostgreSQL과 object storage를 설정해 줘`
- **[[Coolify]]**: `Ubuntu 서버에 Coolify를 설치하고 기본 초기 설정까지 마무리해 줘`
- **[[OpenHands]]**: `OpenHands를 Docker로 설치하고 기본 런타임 환경 설정까지 마무리해 줘`

- **오픈소스 장기 기억 모듈 설치 및 기동**:
  ```bash
  pip install mem0ai
  ```
  Mem0를 이용해 사용자의 이전 선호 데이터나 세션 정보를 로컬 또는 클라우드 DB에 분리 저장하여, Context Window 폭주로 인한 토큰 소모를 Naive full-context 방식 대비 93% 이상 기계적으로 차단하는 실무 구현.

- **오픈소스 장기 기억 모듈 설치 및 기동**:
  ```bash
  pip install mem0ai
  ```
  Mem0를 이용해 사용자의 이전 선호 데이터나 세션 정보를 로컬 또는 클라우드 DB에 분리 저장하여, Context Window 폭주로 인한 토큰 소모를 Naive full-context 방식 대비 93% 이상 기계적으로 차단하는 실무 구현.

- **오픈소스 장기 기억 모듈 설치 및 기동**:
  ```bash
  pip install mem0ai
  ```
  Mem0를 이용해 사용자의 이전 선호 데이터나 세션 정보를 로컬 또는 클라우드 DB에 분리 저장하여, Context Window 폭주로 인한 토큰 소모를 Naive full-context 방식 대비 93% 이상 기계적으로 차단하는 실무 구현.

### 주요 툴킷 기동 및 설치 지침
- **Local Deep Research 클론 및 빌드**:
  ```bash
  git clone https://github.com/dzhng/deep-research.git
  cd deep-research
  npm install
  # 로컬 AI 모델 설정 및 실행
  ```
- **Agent Skills를 활용한 프롬프트 등록 패턴 예시**:
  AI 에이전트가 `ADD_SKILL` 툴 콜을 호출하여 `~/skills` 디렉터리에 재사용 가능한 프롬프트 스키마를 저장하는 [[워크플로]]우.

## 충돌
- 2026-05-26 확인: 저장소별 스타 수, 버전, 모델 스펙, 기능 범위는 변동성이 높다. 다만 local stack, workflow builder, grounded AI, terminal assistant로 작업 표면이 이동한다는 구조적 관찰은 개별 저장소 교체와 무관하게 유지된다.

## 관련 노트
- [[Agent Native Infrastructure]]
- [[OpenCode]]
- [[에이전트 확장 3계층]]
- [[AI 산출물 포맷 결정 트리]]
- [[AI 네이티브 사용자]]
- [[온디바이스 TTS]]
- [[OpenClaw]]
- [[AI 기본값 구현체]]
- [[AI 에이전트 런타임 역할 맵]]
- [[AI 기본값 수용과 오버라이드 전략]]
- [[Hermes Agent와 오픈소스 내부 도구 연동]]
- [[2026년 오픈소스 LLM 플랫폼 비교]]
- [[Hermes Agent]]
- [[Agent Harness]]

## 출처
- 2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가
- 지금 개발자들이 주목하는 오픈소스 GitHub 프로젝트 15선 - 출판형 다듬기
- raw/Hermes 에이전트와 함께 사용하기 좋은 오픈소스 내부 도구 5가지.md
- [Supertonic 3](file:///Users/railscraft/[[Obsidian]]/raw/Supertonic%203.%2099M%20%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%EB%A1%9C%2031%EA%B0%9C%20%EC%96%B8%EC%96%B4%EB%A5%BC%20%EB%A7%90%ED%95%98%EB%8A%94%20%EC%B4%88%EA%B2%BD%EB%9F%89%20TTS%20%EB%AA%A8%EB%8D%B8)
- [The Complete (Honest) Guide to OpenClaw](file:///Users/railscraft/[[Obsidian]]/raw/The%20Complete%20%28Honest%29%20Guide%20to%20[[OpenClaw]])
- [After Claude Code](file:///Users/railscraft/[[Obsidian]]/raw/After%20Claude%20Code.%206%20Open-Source%20Tools%20You%20Should%20Know)
- [The Open-Source Agent Toolkit in 2026](file:///Users/railscraft/[[Obsidian]]/raw/The%20Open-Source%20Agent%20Toolkit%20in%202026)
- [클로드 디자인은 과연 디자이너를 대체할까](file:///Users/railscraft/[[Obsidian]]/raw/%ED%81%B4%EB%A1%9C%EB%93%9C%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%80%20%EA%B3%BC%EC%97%B0%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EB%A5%BC%20%EB%8C%80%EC%B2%B4%ED%95%A0%EA%B9%8C.md)
- [2026년 AI 에이전트 [[워크플로]]우 핵심 패턴 분석](file:///Users/railscraft/[[Obsidian]]/raw/2026%EB%85%84%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20%ED%95%B5%EC%8B%AC%20%ED%8C%A8%ED%84%B4%20%EB%B6%84%EC%84%9D.md)
- [AI와 [[디자인 시스템]] - 출판형 다듬기](file:///Users/railscraft/[[Obsidian]]/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md)
- [AI Agent Best Practices. Production-Ready [[Harness Engineering]] (2026 Guide)-ko](file:///Users/railscraft/[[Obsidian]]/raw/AI%20Agent%20Best%20Practices.%20Production-Ready%20Harness%20Engineering%20%282026%20Guide%29-ko.md)
- [You’re Using AI to Write Code. You’re Not Using It to Review Code.-ko](file:///Users/railscraft/[[Obsidian]]/raw/You%E2%80%99re%20Using%20AI%20to%20Write%20Code.%20You%E2%80%99re%20Not%20Using%20It%20to%20Review%20Code.-ko.md)
- [완벽하게 기계 가독성을 갖춘 디자인 시스템](file:///Users/railscraft/[[Obsidian]]/raw/%EC%99%84%EB%B2%BD%ED%95%98%EA%B2%8C%20%EA%B8%B0%EA%B3%84%20%EA%B0%80%EB%8F%85%EC%84%B1%EC%9D%84%20%EA%B0%96%EC%B6%98%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C.md)
- [What Is MCP? Build a Custom MCP Server in Python-ko](file:///Users/railscraft/[[Obsidian]]/raw/What%20Is%20MCP%3F%20Build%20a%20Custom%20MCP%20Server%20in%20Python-ko.md)
- [2026년 오픈소스 [[LLM]] 플랫폼 비교 가이드 - [[Ollama]], [[OpenRouter]], Groq, NVIDIA NIM](file:///Users/railscraft/[[Obsidian]]/raw/2026%EB%85%84%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%20[[LLM]]%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EB%B9%84%EA%B5%90%20%EA%B0%80%EC%9D%B4%EB%93%9C%20-%20[[Ollama]]%2C%20[[OpenRouter]]%2C%20Groq%2C%20NVIDIA%20NIM.md)
- [파이썬 AI 에이전트 프레임워크 6종 비교 분석](file:///Users/railscraft/[[Obsidian]]/raw/%ED%8C%8C%EC%9D%B4%EC%8D%AC%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC%206%EC%A2%85%20%EB%B9%84%EA%B5%90%20%EB%B6%84%EC%84%9D.md)
- [From faster pencil to [[AI Experience Architect]]. a designer’s path](file:///Users/railscraft/[[Obsidian]]/raw/From%20faster%20pencil%20to%20AI%20Experience%20Architect.%20a%20designer%E2%80%99s%20path.md)
- [2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변](file:///Users/railscraft/[[Obsidian]]/raw/2026%EB%85%84%20%EC%8B%A4%EC%A0%9C%EB%A1%9C%20%EB%82%98%EC%98%A4%EB%8A%94%20%EC%83%9D%EC%84%B1%ED%98%95%20AI%20%EB%A9%B4%EC%A0%91%20%EC%A7%88%EB%AC%B8%2040%EC%84%A0%EA%B3%BC%20%EB%8B%B5%EB%B3%80.md)
- [더 빨리 배우고 싶다면 이 노트 정리 방식을 써라](file:///Users/railscraft/[[Obsidian]]/raw/%EB%8D%94%20%EB%B9%A8%EB%A6%AC%20%EB%B0%B0%EC%9A%B0%EA%B3%A0%20%EC%8B%B6%EB%8B%A4%EB%A9%B4%20%EC%9D%B4%20%EB%85%B8%ED%8A%B8%20%EC%A0%95%EB%A6%AC%20%EB%B0%A9%EC%8B%9D%EC%9D%84%20%EC%8D%A8%EB%9D%BC.md)
- [Supertonic 3. 99M 파라미터로 31개 언어를 말하는 초경량 TTS 모델](file:///Users/railscraft/[[Obsidian]]/raw/Supertonic%203.%2099M%20%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%EB%A1%9C%2031%EA%B0%9C%20%EC%96%B8%EC%96%B4%EB%A5%BC%20%EB%A7%90%ED%95%98%EB%8A%94%20%EC%B4%88%EA%B2%BD%EB%9F%89%20TTS%20%EB%AA%A8%EB%8D%B8.md)
- [After [[Claude Code]]. 6 Open-Source Tools You Should Know-ko](file:///Users/railscraft/[[Obsidian]]/raw/After%20Claude%20Code.%206%20Open-Source%20Tools%20You%20Should%20Know-ko.md)
- [AI가 생성한 UI 디자인은 이제 인간 디자이너의 80퍼센트보다 우수하다](file:///Users/railscraft/[[Obsidian]]/raw/AI%EA%B0%80%20%EC%83%9D%EC%84%B1%ED%95%9C%20UI%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%80%20%EC%9D%B4%EC%A0%9C%20%EC%9D%B8%EA%B0%84%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EC%9D%98%2080%ED%8D%BC%EC%84%BC%ED%8A%B8%EB%B3%B4%EB%8B%A4%20%EC%9A%B0%EC%88%98%ED%95%98%EB%8B%A4.md)
- [cc101_axwith_ko](file:///Users/railscraft/[[Obsidian]]/raw/cc101_axwith_ko.html)
- [How to Build the Knowledge System [[Andrej Karpathy]] Uses (And What It’s Actually](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20Build%20the%20Knowledge%20System%20Andrej%20Karpathy%20Uses%20%28And%20What%20It%E2%80%99s%20Actually)
- [UI 디자인을 위한 최고의 AI 도구 10가지와 [[워크플로]]우](file:///Users/railscraft/[[Obsidian]]/raw/UI%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20AI%20%EB%8F%84%EA%B5%AC%2010%EA%B0%80%EC%A7%80%EC%99%80%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.md)
- [AI 에이전트에게 Prompt Engineering은 죽었다. 이제 진짜 중요한 것은 [[Context Engineering]]이다](file:///Users/railscraft/[[Obsidian]]/raw/AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EC%97%90%EA%B2%8C%20Prompt%20Engineering%EC%9D%80%20%EC%A3%BD%EC%97%88%EB%8B%A4.%20%EC%9D%B4%EC%A0%9C%20%EC%A7%84%EC%A7%9C%20%EC%A4%91%EC%9A%94%ED%95%9C%20%EA%B2%83%EC%9D%80%20Context%20Engineering%EC%9D%B4%EB%8B%A4.md)
- [Hermes Agent와 [[Ollama]] 로컬 설치 초고속 가이드](file:///Users/railscraft/[[Obsidian]]/raw/Hermes%20Agent%EC%99%80%20[[Ollama]]%20%EB%A1%9C%EC%BB%AC%20%EC%84%A4%EC%B9%98%20%EC%B4%88%EA%B3%A0%EC%86%8D%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [원시인 모드로 토큰 아끼려다 6만 스타 오픈소스에 PR 보낸 이야기](file:///Users/railscraft/[[Obsidian]]/raw/%EC%9B%90%EC%8B%9C%EC%9D%B8%20%EB%AA%A8%EB%93%9C%EB%A1%9C%20%ED%86%A0%ED%81%B0%20%EC%95%84%EB%81%BC%EB%A0%A4%EB%8B%A4%206%EB%A7%8C%20%EC%8A%A4%ED%83%80%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%EC%97%90%20PR%20%EB%B3%B4%EB%82%B8%20%EC%9D%B4%EC%95%BC%EA%B8%B0.md)
- [Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko](file:///Users/railscraft/[[Obsidian]]/raw/Building%20a%20Multi-Agent%20System%20That%20Turns%20One%20Sentence%20Into%20a%20%24500%20Online%20Course-ko.md)
- [Structuring Agents, Skills, and MCPs 🤖🧩](file:///Users/railscraft/[[Obsidian]]/raw/Structuring%20Agents%2C%20Skills%2C%20and%20MCPs%20%F0%9F%A4%96%F0%9F%A7%A9.md)
- [The Complete (Honest) Guide to OpenClaw](file:///Users/railscraft/[[Obsidian]]/raw/The%20Complete%20%28Honest%29%20Guide%20to%20[[OpenClaw]].md)
- [하네스를 내 것으로 만들기 - 출판형 다듬기](file:///Users/railscraft/[[Obsidian]]/raw/%ED%95%98%EB%84%A4%EC%8A%A4%EB%A5%BC%20%EB%82%B4%20%EA%B2%83%EC%9C%BC%EB%A1%9C%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md)
- [Agentic AI, design systems & Figma. a practical guide-ko](file:///Users/railscraft/[[Obsidian]]/raw/Agentic%20AI%2C%20design%20systems%20%26%20Figma.%20a%20practical%20guide-ko.md)
- [느낌 코딩의 시대는 끝났다 - GitHub [[Spec Kit]]과 명세 기반 개발](file:///Users/railscraft/[[Obsidian]]/raw/%EB%8A%90%EB%82%8C%20%EC%BD%94%EB%94%A9%EC%9D%98%20%EC%8B%9C%EB%8C%80%EB%8A%94%20%EB%81%9D%EB%82%AC%EB%8B%A4%20-%20GitHub%20Spec%20Kit%EA%B3%BC%20%EB%AA%85%EC%84%B8%20%EA%B8%B0%EB%B0%98%20%EA%B0%9C%EB%B0%9C.md)
- [SpaceX의 파격적인 AI 인프라 전략 - 순수 C 언어로 22만 대 GPU를 제어하다](file:///Users/railscraft/[[Obsidian]]/raw/SpaceX%EC%9D%98%20%ED%8C%8C%EA%B2%A9%EC%A0%81%EC%9D%B8%20AI%20%EC%9D%B8%ED%94%84%EB%9D%BC%20%EC%A0%84%EB%9E%B5%20-%20%EC%88%9C%EC%88%98%20C%20%EC%96%B8%EC%96%B4%EB%A1%9C%2022%EB%A7%8C%20%EB%8C%80%20GPU%EB%A5%BC%20%EC%A0%9C%EC%96%B4%ED%95%98%EB%8B%A4.md)
- [The most important Design System in 2026 that designers missed was built by](file:///Users/railscraft/[[Obsidian]]/raw/The%20most%20important%20Design%20System%20in%202026%20that%20designers%20missed%20was%20built%20by)
- [Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요](file:///Users/railscraft/[[Obsidian]]/raw/Claude%EB%A5%BC%20%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0%20%EC%A0%84%EC%97%90%20%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%9D%B4%20%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4%20%ED%8C%8C%EC%9D%BC%EC%9D%84%20%EB%A7%8C%EB%93%9C%EC%84%B8%EC%9A%94.md)
- [Good Design Doesn’t Happen By Default](file:///Users/railscraft/[[Obsidian]]/raw/Good%20Design%20Doesn%E2%80%99t%20Happen%20By%20Default.md)
- [How to write a [[DESIGN.md]] file Claude can actually use-ko](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20write%20a%20[[DESIGN.md]]%20file%20Claude%20can%20actually%20use-ko.md)
- [지루한 업무를 자동화하는 [[클로드 코워크]] 프롬프트 7가지](file:///Users/railscraft/[[Obsidian]]/raw/%EC%A7%80%EB%A3%A8%ED%95%9C%20%EC%97%85%EB%AC%B4%EB%A5%BC%20%EC%9E%90%EB%8F%99%ED%99%94%ED%95%98%EB%8A%94%20%ED%81%B4%EB%A1%9C%EB%93%9C%20%EC%BD%94%EC%9B%8C%ED%81%AC%20%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%207%EA%B0%80%EC%A7%80.md)
- [당신의 고양이가 챗GPT보다 세상을 더 잘 이해하는 이유](file:///Users/railscraft/[[Obsidian]]/raw/%EB%8B%B9%EC%8B%A0%EC%9D%98%20%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EC%B1%97GPT%EB%B3%B4%EB%8B%A4%20%EC%84%B8%EC%83%81%EC%9D%84%20%EB%8D%94%20%EC%9E%98%20%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94%20%EC%9D%B4%EC%9C%A0.md)
- [옵시디언 AI 제2의 뇌는 기억이 아니다](file:///Users/railscraft/[[Obsidian]]/raw/%EC%98%B5%EC%8B%9C%EB%94%94%EC%96%B8%20AI%20%EC%A0%9C2%EC%9D%98%20%EB%87%8C%EB%8A%94%20%EA%B8%B0%EC%96%B5%EC%9D%B4%20%EC%95%84%EB%8B%88%EB%8B%A4.md)
- [The Open-Source Agent Toolkit in 2026-ko](file:///Users/railscraft/[[Obsidian]]/raw/The%20Open-Source%20Agent%20Toolkit%20in%202026-ko.md)
- [How to Get Into the Top 1% in the Next 12 Months-ko](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20Get%20Into%20the%20Top%201%25%20in%20the%20Next%2012%20Months-ko.md)
- [I Ran [[OpenClaw]] and Hermes on the Same Server. Today I Deleted One of Them.-ko](file:///Users/railscraft/[[Obsidian]]/raw/I%20Ran%20[[OpenClaw]]%20and%20Hermes%20on%20the%20Same%20Server.%20Today%20I%20Deleted%20One%20of%20Them.-ko.md)
- [Code Is Not Cheap. How to Multiply Your AI’s Output With Software Fundamentals](file:///Users/railscraft/[[Obsidian]]/raw/Code%20Is%20Not%20Cheap.%20How%20to%20Multiply%20Your%20AI%E2%80%99s%20Output%20With%20Software%20Fundamentals.md)
- [Skills, MCP, Tool Calling. 에이전트 확장의 세 층](file:///Users/railscraft/[[Obsidian]]/raw/Skills%2C%20MCP%2C%20Tool%20Calling.%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%ED%99%95%EC%9E%A5%EC%9D%98%20%EC%84%B8%20%EC%B8%B5.md)
- [인생의 성공을 결정하는 5가지 핵심 자질](file:///Users/railscraft/[[Obsidian]]/raw/%EC%9D%B8%EC%83%9D%EC%9D%98%20%EC%84%B1%EA%B3%B5%EC%9D%84%20%EA%B2%B0%EC%A0%95%ED%95%98%EB%8A%94%205%EA%B0%80%EC%A7%80%20%ED%95%B5%EC%8B%AC%20%EC%9E%90%EC%A7%88.md)
- [Why senior designers are doing four jobs for one salary in 2026-ko](file:///Users/railscraft/[[Obsidian]]/raw/Why%20senior%20designers%20are%20doing%20four%20jobs%20for%20one%20salary%20in%202026-ko.md)
- [Hermes Agent Is Cool. Running It Safely 24_7 Is the Real Trick.-ko](file:///Users/railscraft/[[Obsidian]]/raw/Hermes%20Agent%20Is%20Cool.%20Running%20It%20Safely%2024_7%20Is%20the%20Real%20Trick.-ko.md)
- [Claude Code와 [[Obsidian]]으로 [[AI 세컨드 브레인]] 구축하기](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20Code%EC%99%80%20[[Obsidian]]%EC%9C%BC%EB%A1%9C%20AI%20%EC%84%B8%EC%BB%A8%EB%93%9C%20%EB%B8%8C%EB%A0%88%EC%9D%B8%20%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0.md)
- [DESIGN.md [[워크플로]] - [[Google Stitch]]와 [[Claude Code]]가 바꾼 디자인 개발 협업](file:///Users/railscraft/[[Obsidian]]/raw/[[DESIGN.md]]%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%20-%20Google%20Stitch%EC%99%80%20Claude%20Code%EA%B0%80%20%EB%B0%94%EA%BE%BC%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EA%B0%9C%EB%B0%9C%20%ED%98%91%EC%97%85.md)
- [아이디어에서 현실 시스템까지 AI 에이전트 구축하기 - 출판형 다듬기](file:///Users/railscraft/[[Obsidian]]/raw/%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4%EC%97%90%EC%84%9C%20%ED%98%84%EC%8B%A4%20%EC%8B%9C%EC%8A%A4%ED%85%9C%EA%B9%8C%EC%A7%80%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md)

