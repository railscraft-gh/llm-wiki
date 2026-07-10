---
aliases: []
core: false
created: 2026-06-07
sources:
  - im-not-ai
  - raw/The Best Way to Make AI Write Like You-ko.md
  - raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md
  - raw/테일윈드의 고군분투는 무너지는 사상누각의 징조다.md
  - raw/AI가 내 글쓰기 커리어를 죽였다. AI 만세.md
  - raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max
  - raw/AI 네이티브 세컨드 브레인을 구축하는 방법 (2026년 방식).md
  - raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
  - raw/AI는 개발자를 대체하는 것이 아니라 더 심각한 일을 하고 있다.md
  - raw/모든 AI 엔지니어가 알아야 할 10가지 LangChain 및 LangGraph 개념.md
  - raw/옵시디언 마스터하기 - 노트를 세컨드 브레인으로 만드는 완벽 가이드.md
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
  - raw/내가 Obsidian을 정리하는 방법 - 다니엘 프린디.md
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
  - raw/내 주의 집중 시간을 되돌려준 11가지 사소한 생활 습관의 변화.md
  - raw/LLM에게 옵시디언 볼트 열쇠를 주면 일어나는 일.md
  - raw/2026년을 위한 웹 디자인 및 빌드 워크플로우.md
  - raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md
  - raw/These 3 ETFs Created More Millionaires Than Any Stock.md
  - raw/60일간 11번의 기술 인터뷰를 치르며 깨달은 아무도 말해주지 않는 패턴.md
  - raw/Run a Useful Local LLM in 30 Minutes (Coding, RAG, Voice).md
  - raw/만약 단 5편의 AI 논문만 읽어야 한다면 바로 이것입니다.md
  - raw/Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko.md
  - raw/AI 코딩 에이전트와 함께하는 명세 기반 개발 결정판 가이드.md
  - raw/Building an MCP Ecosystem at Pinterest-ko.md
  - raw/Skills Alone Won’t Save You in the AI Economy.md
  - raw/RAG 시스템 초보자부터 전문가까지의 완전 가이드 (2026년 에디션).md
  - raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max Quietly Replaced All Three-ko.md
  - raw/Give Your AI Agent 36 Superpowers. Long‑Term Memory in Minutes with GBrain (Open Source)-ko.md
  - raw/I Sat in Engineering Meetings for Two Years Without Understanding What a Branch Was-ko.md
status: evergreen
tags:
  - llm
  - agent
  - translationese
type: workflow
updated: 2026-07-10
---

# 한글 AI 번역투 탐지 및 윤문 워크플로

## 한 줄 정의
AI 모델이 작성한 한글 텍스트 특유의 부자연스러움(번역투, 관용구, 단조로운 리듬 등)을 탐지하고, 문장의 사실적 의미는 보존하면서 자연스러운 한국어로 교정하는 에이전트 오케스트레이션 워크플로이다.

## 핵심 요지
- **10대 대분류 × 40+ 서브 패턴**: 번역투(A), 영어식 용어 과다(B), 기계적 구조(C), 관용구(D), 리듬 균일성(E) 등을 기반으로 AI 티를 탐지한다.
- **AI 식별 표식(Shibboleths)의 선제 탐색**: '추가적으로', '요약하자면', '중요한 점은' 등의 단조롭고 상투적인 전환어/부사 사용 및 인위적인 동의어 남발 등 기계적으로 학습된 7대 Shibboleths 패턴을 가려낸다.
- **개인 문체 프로필 (Voice Profile) 통합**: 단순 긍정적 지침보다 거부(Reject)하는 구체적 규칙(예: 특정 문장 부호 기피, 절대 쓰지 않는 단어 명시 등)을 `.md` 파일 하나로 구조화하여 AI 윤문 엔진에 제약 조건으로 주입한다 (출처: The Best Way to Make AI Write Like You-ko).
- **Fast/Strict 이원화 모드**: 5,000자 이하는 단일 `humanize-monolith`로 고속 처리하며, 8,000자 이상이거나 정밀 검증 시에는 5인 에이전트 파이프라인(Strict)을 돌린다.
- 문장의 자잘한 구두점이나 미사여구(은유, 직유)를 파고드는 기존 AI 탐지기(Detector)들은 수 세기 동안 작가들이 다듬어 온 보편적 글쓰기 기법과 챗봇의 학습 패턴을 구분하지 못해 1936년에 쓰인 Fitzgerald의 수필마저 'ChatGPT 말투'로 오독하는 기형적 한계를 가진다. (출처: raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md)
- AI 사용 여부를 가려내는 가장 명백한 징후는 하루 2,500단어 5개 뉴스레터 발행, 일주일 10만~20만 단어 폭증과 같은 '물리적으로 불가능한 생산량'과, 텍스트 너머 실시간 질의 시 자신이 쓴 글의 핵심 논리나 특정 장의 세부 사례조차 설명하지 못해 겉도는 '이해도 부족'에 있다. (출처: raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md)

## 상세

### 1. AI 텍스트의 7대 Shibboleths (식별 표식)
AI 탐지 필터 및 윤문 에이전트는 기계가 습관적으로 뱉는 아래의 7가지 상투적 어조를 1순위로 교정한다.
1. **문두 전환어 남발 (Overused Transitions)**: '추가적으로(Additionally)', '게다가(Furthermore)', '요약하자면(In summary)', '실제적으로(In practice)' 등의 부사를 기계적으로 문장에 배치한다.
2. **템플릿화된 서론/결론**: "현대 사회에서... (In today's fast-paced world...)", "...은(는) 중요한 변수다"처럼 공허하고 정중한 격식체의 문단을 자동 조립한다.
3. **내용 없는 공허함 (Vapid redundancy)**: 겉보기에는 매끄러운 줄글 형태를 취하지만, 실제 새로운 지식이나 사실적 근거가 부재한 채 같은 의미의 어휘를 길게 반복 나열하여 분량을 늘린다.
4. **인위적인 동의어 치환**: 모델 내부의 디코딩 과정에서 무작위성을 부여하기 위해, 자연스러운 표현을 억지로 낯선 유의어로 치환하여 문장 결을 망가뜨린다.
5. **도입부 Hype와 느낌표**: "놀랍게도!", "아시나요?"처럼 인위적으로 주의를 끌려는 감정 과잉 조치를 취한다.

### 2. 탐지 및 처방 메커니즘
- **정량적 메트릭**: regex와 명사화 접미사 사전 등을 사용해 표준 라이브러리(Python)만으로 명사화 밀도, 쉼표 빈도, 이중 피동 빈도 등의 정량 지표(`interference_index` 등)를 계산한다. [metrics_v2.py](file:///Users/railscraft/.gemini/config/plugins/im-not-ai/skills/humanize-korean/references/metrics_v2.py)
- **수술적 수정**: 전체를 임의로 재작성하지 않고, 탐지된 span 단위로만 수정하는 근거 기반 처방 방식을 사용한다. 변경률이 30%를 초과하면 경고하고 50%를 초과하면 강제 중단한다.
- **음색 프로파일 인터뷰 (Voice Profiling)**: 맨땅에서 글쓰기 지침을 적는 대신, AI에게 작가 본인의 글쓰기 습관, 어조, 존경하는 작가, 선호/기피하는 표현에 대해 스스로 인터뷰하도록 유도하여 나답게 글을 쓰는 `.md` 지침 파일을 생성하고 이를 하네스 프롬프트 맥락에 주입한다.

### 3. Antigravity 환경으로의 포팅
이 스킬 세트는 원래 Claude Code 플러그인 형태로 구성되어 있었으나, Antigravity 에이전트 환경에 맞게 변환하여 `/Users/railscraft/.gemini/config/plugins/im-not-ai` 경로에 설치했다.
- **서브에이전트 동적 정의**: 스킬 실행 과정에서 `define_subagent` 도구를 사용해 `agents/` 디렉토리에 정의된 에이전트 사양들을 동적으로 생성하고, `invoke_subagent`로 순차 및 병렬 실행을 수행한다.
- **최신 run_id 조회**: `Glob` 도구 대신 `list_dir`을 사용해 workspace의 `_workspace` 폴더 하위를 조회하여 작업 히스토리를 식별한다.

### 4. 사후 책임을 묻는 신뢰 검증 시스템으로의 패러다임 시프트
- **텍스트 분석의 허구성**: 텍스트 형태만 분석하는 감지기 점수에 의존하여 폭로와 반박의 진흙탕 싸움을 벌이는 대신, 저자와 독자가 직접 면대면/양방향으로 연결되는 소통 채널로 신뢰 검증 방식을 이동해야 한다.
- **실시간 소통의 의무화**: 팟캐스트, 라이브 방송, 혹은 Substack 독자 채팅방 등 텍스트 밖으로 대화가 실시간 확장되는 상호작용 환경을 구축하면 AI 과의존 창작자들의 밑천(이해 부족, 사실 모순)이 즉시 탄로나므로 자연스럽게 AI 슬롭 유입을 차단하는 심리적 가드레일 역할을 완수하게 된다.

## 예시

- **번역투 및 Shibboleths 교정**: 
  - "궁극적으로, AI 기술을 **통해** 효율을 높**일 수 있다**" $\rightarrow$ "결과적으로 AI로 효율을 높인다"
  - "이에 **있어서** 중요한 **점은**...해 보는 것을 추천한다" $\rightarrow$ "여기서 중요한 건...해야 한다"

#### 일일 집필 단어량 한계 벤치마크
- 전업 작가가 머리 과부하 없이 장기적으로 유지할 수 있는 건강한 하루 최대 생산 단어량은 **대략 2,000단어 내외**이다. 만약 본업을 유지하면서 주 10만 단어 이상의 장문 포스팅을 정기 발행하는 창작자가 있다면 기계적 AI 슬롭의 힘을 빌렸을 확률이 대단히 높다.

## 충돌

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Harness]]
- [[AI 세컨드 브레인]]
- [[MEMORY.md 운영 원칙]]
- [[프론트엔드 스타일링 패러다임]]

