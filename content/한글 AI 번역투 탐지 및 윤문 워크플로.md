---
aliases:
- 한글-AI-번역투-탐지-및-윤문-워크플로
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
- raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max
  Quietly Replaced All Three-ko.md
- raw/Give Your AI Agent 36 Superpowers. Long‑Term Memory in Minutes with GBrain (Open
  Source)-ko.md
- raw/I Sat in Engineering Meetings for Two Years Without Understanding What a Branch
  Was-ko.md
status: evergreen
tags:
- llm
- agent
- translationese
type: workflow
updated: 2026-07-10
---
# 한글 AI 번역투 탐지 및 윤문 [[워크플로]]

## 한 줄 정의
AI 모델이 작성한 한글 텍스트 특유의 부자연스러움(번역투, 관용구, 단조로운 리듬 등)을 탐지하고, 문장의 사실적 의미는 보존하면서 자연스러운 한국어로 교정하는 [[에이전트 오케스트레이션]] [[워크플로]]이다.

## 핵심 요지
- **10대 대분류 × 40+ 서브 패턴**: 번역투(A), 영어식 용어 과다(B), 기계적 구조(C), 관용구(D), 리듬 균일성(E) 등을 기반으로 AI 티를 탐지한다.
- **AI 식별 표식(Shibboleths)의 선제 탐색**: '추가적으로', '요약하자면', '중요한 점은' 등의 단조롭고 상투적인 전환어/부사 사용 및 인위적인 동의어 남발 등 기계적으로 학습된 7대 Shibboleths 패턴을 가려낸다.
- **개인 문체 프로필 (Voice Profile) 통합**: 단순 긍정적 지침보다 거부(Reject)하는 구체적 규칙(예: 특정 문장 부호 기피, 절대 쓰지 않는 단어 명시 등)을 `.md` 파일 하나로 구조화하여 AI 윤문 엔진에 제약 조건으로 주입한다 (출처: The Best Way to Make AI Write Like You-ko).
- **Fast/Strict 이원화 모드**: 5,000자 이하는 단일 `humanize-monolith`로 고속 처리하며, 8,000자 이상이거나 정밀 검증 시에는 5인 에이전트 파이프라인(Strict)을 돌린다.
- 문장의 자잘한 구두점이나 미사여구(은유, 직유)를 파고드는 기존 AI 탐지기(Detector)들은 수 세기 동안 작가들이 다듬어 온 보편적 글쓰기 기법과 챗봇의 학습 패턴을 구분하지 못해 1936년에 쓰인 Fitzgerald의 수필마저 'ChatGPT 말투'로 오독하는 기형적 한계를 가진다. (출처: raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md)
- AI 사용 여부를 가려내는 가장 명백한 징후는 하루 2,500단어 5개 뉴스레터 발행, 일주일 10만~20만 단어 폭증과 같은 '물리적으로 불가능한 생산량'과, 텍스트 너머 실시간 질의 시 자신이 쓴 글의 핵심 논리나 특정 장의 세부 사례조차 설명하지 못해 겉도는 '이해도 부족'에 있다. (출처: raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md)
- 최종 릴리즈 버전 v2.0.0 (2026-05-07) 기준으로 Fast 모드와 Strict 모드로 이원화되어 동작한다.
- Fast 모드는 5,000자 이하의 텍스트에 적용되며, 단일 humanize-monolith 에이전트가 도구 호출 4~5회 캡, wall-clock 2~3분 내에 탐지, 윤문, 자체 검증을 일괄 처리하여 01_input.txt, final.md, summary.md를 생성한다.
- Strict 모드는 8,000자 이상 시 자동 승격되며, ai-tell-detector(02_detection.json), korean-style-rewriter(03_rewrite.md, 03_rewrite_diff.json) 및 content-fidelity-auditor(13항 의미 동등성 감사), naturalness-reviewer의 병렬 검증을 수행한다.

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

### 3. [[Antigravity]] 환경으로의 포팅
이 스킬 세트는 원래 [[Claude Code]] 플러그인 형태로 구성되어 있었으나, [[Antigravity]] 에이전트 환경에 맞게 변환하여 `/Users/railscraft/.gemini/config/plugins/im-not-ai` 경로에 설치했다.
- **서브에이전트 동적 정의**: 스킬 실행 과정에서 `define_subagent` 도구를 사용해 `agents/` 디렉토리에 정의된 에이전트 사양들을 동적으로 생성하고, `invoke_subagent`로 순차 및 병렬 실행을 수행한다.
- **최신 run_id 조회**: `Glob` 도구 대신 `list_dir`을 사용해 workspace의 `_workspace` 폴더 하위를 조회하여 작업 히스토리를 식별한다.

### 4. 사후 책임을 묻는 신뢰 검증 시스템으로의 패러다임 시프트
- **텍스트 분석의 허구성**: 텍스트 형태만 분석하는 감지기 점수에 의존하여 폭로와 반박의 진흙탕 싸움을 벌이는 대신, 저자와 독자가 직접 면대면/양방향으로 연결되는 소통 채널로 신뢰 검증 방식을 이동해야 한다.
- **실시간 소통의 의무화**: 팟캐스트, 라이브 방송, 혹은 Substack 독자 채팅방 등 텍스트 밖으로 대화가 실시간 확장되는 상호작용 환경을 구축하면 AI 과의존 창작자들의 밑천(이해 부족, 사실 모순)이 즉시 탄로나므로 자연스럽게 [[AI 슬롭]] 유입을 차단하는 심리적 가드레일 역할을 완수하게 된다.

### 1. AI 티 감지를 위한 10대 카테고리 분류 체계 (A~J)
- **A. 번역투**: "~를 통해", "~에 대해", 이중 피동, 그/그녀 대명사 직역, 관계절 좌향 수식, 이중 조사
- **B. 영어 인용·용어 과다**: 한글 표기 없는 괄호 병기 남용
- **C. 구조적 AI 패턴**: 기계적 "첫째/둘째/셋째" 서수 배치, 과도한 불릿 및 이모지
- **D. AI 특유 관용구**: "결론적으로", "시사하는 바가 크다", "주목할 만하다" 등 상투구
- **E. 리듬 균일성**: 문장 길이 표준편차 낮음, 동일 종결어미 반복, 청자 경어법 일관성 파손
- **F. 수식·중복**: "매우", "정말" 등 부사 및 명사화 접미사(-성·-적·-화) 남발
- **G. Hedging 남용**: 완곡어법 다중 중첩 ("~할 수 있을 것으로 보인다")
- **H. 접속사 남발**: 문두 "또한/따라서/즉" 연속 배치
- **I. 형식명사 과다**: "것이다", "점", "수", "바", "~할 필요가 있다" 등 남용
- **J. 시각 장식 남용**: 과도한 볼드체 표기 및 대시(—) 남발

## 예시

- **번역투 및 Shibboleths 교정**: 
  - "궁극적으로, AI 기술을 **통해** 효율을 높**일 수 있다**" $\rightarrow$ "결과적으로 AI로 효율을 높인다"
  - "이에 **있어서** 중요한 **점은**...해 보는 것을 추천한다" $\rightarrow$ "여기서 중요한 건...해야 한다"

#### 일일 집필 단어량 한계 벤치마크
- 전업 작가가 머리 과부하 없이 장기적으로 유지할 수 있는 건강한 하루 최대 생산 단어량은 **대략 2,000단어 내외**이다. 만약 본업을 유지하면서 주 10만 단어 이상의 장문 포스팅을 정기 발행하는 창작자가 있다면 기계적 [[AI 슬롭]]의 힘을 빌렸을 확률이 대단히 높다.

### 2. 한글 윤문 및 복구 가이드의 4대 철칙
1. **의미 불변**: 사실·주장·수치·고유명사·직접 인용은 100% 보존한다.
2. **근거 기반**: 전체 재작성이 아닌, 탐지된 span 단위로만 수술적 수정을 가한다.
3. **장르 유지**: 칼럼을 에세이/소설로 바꾸는 식의 장르 이탈을 금지한다.
4. **과윤문 금지**: 변경률이 30%를 초과하면 경고를 출력하며, 50% 초과 시 처리를 강제 중단한다.

## 충돌
## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Harness]]
- [[AI 세컨드 브레인]]
- [[MEMORY.md 운영 원칙]]
- [[프론트엔드 스타일링 패러다임]]

## 출처
- https://github.com/epoko77-ai/im-not-ai
- Simon Willison, "The Obvious Shibboleths of AI Generated Content" (2025)
- (출처: The Best Way to Make AI Write Like You-ko.md)
- [AI로 몰래 쓴 글을 가려내는 명백한 방법들](file:///Users/railscraft/[[Obsidian]]/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md)
- [테일윈드의 고군분투는 무너지는 사상누각의 징조다](file:///Users/railscraft/[[Obsidian]]/raw/%ED%85%8C%EC%9D%BC%EC%9C%88%EB%93%9C%EC%9D%98%20%EA%B3%A0%EA%B5%B0%EB%B6%84%ED%88%AC%EB%8A%94%20%EB%AC%B4%EB%84%88%EC%A7%80%EB%8A%94%20%EC%82%AC%EC%83%81%EB%88%84%EA%B0%81%EC%9D%98%20%EC%A7%95%EC%A1%B0%EB%8B%A4.md)
- [AI가 내 글쓰기 커리어를 죽였다. AI 만세](file:///Users/railscraft/[[Obsidian]]/raw/AI%EA%B0%80%20%EB%82%B4%20%EA%B8%80%EC%93%B0%EA%B8%B0%20%EC%BB%A4%EB%A6%AC%EC%96%B4%EB%A5%BC%20%EC%A3%BD%EC%98%80%EB%8B%A4.%20AI%20%EB%A7%8C%EC%84%B8.md)
- [I Cancelled ChatGPT, [[Cursor]], and Midjourney This Week — My MacBook Pro M5 Max](file:///Users/railscraft/[[Obsidian]]/raw/I%20Cancelled%20ChatGPT%2C%20[[Cursor]]%2C%20and%20Midjourney%20This%20Week%20%E2%80%94%20My%20MacBook%20Pro%20M5%20Max)
- [AI 네이티브 세컨드 브레인을 구축하는 방법 (2026년 방식)](file:///Users/railscraft/[[Obsidian]]/raw/AI%20%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C%20%EC%84%B8%EC%BB%A8%EB%93%9C%20%EB%B8%8C%EB%A0%88%EC%9D%B8%EC%9D%84%20%EA%B5%AC%EC%B6%95%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95%20%282026%EB%85%84%20%EB%B0%A9%EC%8B%9D%29.md)
- [What Is MCP? Build a Custom MCP Server in Python-ko](file:///Users/railscraft/[[Obsidian]]/raw/What%20Is%20MCP%3F%20Build%20a%20Custom%20MCP%20Server%20in%20Python-ko.md)
- [AI는 개발자를 대체하는 것이 아니라 더 심각한 일을 하고 있다](file:///Users/railscraft/[[Obsidian]]/raw/AI%EB%8A%94%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A5%BC%20%EB%8C%80%EC%B2%B4%ED%95%98%EB%8A%94%20%EA%B2%83%EC%9D%B4%20%EC%95%84%EB%8B%88%EB%9D%BC%20%EB%8D%94%20%EC%8B%AC%EA%B0%81%ED%95%9C%20%EC%9D%BC%EC%9D%84%20%ED%95%98%EA%B3%A0%20%EC%9E%88%EB%8B%A4.md)
- [모든 AI 엔지니어가 알아야 할 10가지 LangChain 및 [[LangGraph]] 개념](file:///Users/railscraft/[[Obsidian]]/raw/%EB%AA%A8%EB%93%A0%20AI%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EA%B0%80%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%2010%EA%B0%80%EC%A7%80%20LangChain%20%EB%B0%8F%20[[LangGraph]]%20%EA%B0%9C%EB%85%90.md)
- [옵시디언 마스터하기 - 노트를 세컨드 브레인으로 만드는 완벽 가이드](file:///Users/railscraft/[[Obsidian]]/raw/%EC%98%B5%EC%8B%9C%EB%94%94%EC%96%B8%20%EB%A7%88%EC%8A%A4%ED%84%B0%ED%95%98%EA%B8%B0%20-%20%EB%85%B8%ED%8A%B8%EB%A5%BC%20%EC%84%B8%EC%BB%A8%EB%93%9C%20%EB%B8%8C%EB%A0%88%EC%9D%B8%EC%9C%BC%EB%A1%9C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EC%99%84%EB%B2%BD%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [디지털 제품 제작은 잊으세요. 대신 이것에 집중하세요](file:///Users/railscraft/[[Obsidian]]/raw/%EB%94%94%EC%A7%80%ED%84%B8%20%EC%A0%9C%ED%92%88%20%EC%A0%9C%EC%9E%91%EC%9D%80%20%EC%9E%8A%EC%9C%BC%EC%84%B8%EC%9A%94.%20%EB%8C%80%EC%8B%A0%20%EC%9D%B4%EA%B2%83%EC%97%90%20%EC%A7%91%EC%A4%91%ED%95%98%EC%84%B8%EC%9A%94.md)
- [AI Agents. Complete Course](file:///Users/railscraft/[[Obsidian]]/raw/AI%20Agents.%20Complete%20Course.md)
- [How to Do Hard Things When You Have Zero Motivation](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20Do%20Hard%20Things%20When%20You%20Have%20Zero%20Motivation.md)
- [Anthropic이 Opus 4.8에 대해 말하지 않은 것 - 하네스를 흡수하는 Anthropic](file:///Users/railscraft/[[Obsidian]]/raw/Anthropic%EC%9D%B4%20Opus%204.8%EC%97%90%20%EB%8C%80%ED%95%B4%20%EB%A7%90%ED%95%98%EC%A7%80%20%EC%95%8A%EC%9D%80%20%EA%B2%83%20-%20%ED%95%98%EB%84%A4%EC%8A%A4%EB%A5%BC%20%ED%9D%A1%EC%88%98%ED%95%98%EB%8A%94%20Anthropic.md)
- [좋은 삶을 만드는 것에 대한 지루한 진실](file:///Users/railscraft/[[Obsidian]]/raw/%EC%A2%8B%EC%9D%80%20%EC%82%B6%EC%9D%84%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EA%B2%83%EC%97%90%20%EB%8C%80%ED%95%9C%20%EC%A7%80%EB%A3%A8%ED%95%9C%20%EC%A7%84%EC%8B%A4.md)
- [Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko](file:///Users/railscraft/[[Obsidian]]/raw/Building%20a%20Multi-Agent%20System%20That%20Turns%20One%20Sentence%20Into%20a%20%24500%20Online%20Course-ko.md)
- [Why senior UX designers are struggling in 2026-ko](file:///Users/railscraft/[[Obsidian]]/raw/Why%20senior%20UX%20designers%20are%20struggling%20in%202026-ko.md)
- [Claude Code를 위한 Figma 스킬 완벽 가이드](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20Code%EB%A5%BC%20%EC%9C%84%ED%95%9C%20Figma%20%EC%8A%A4%ED%82%AC%20%EC%99%84%EB%B2%BD%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [2026년 [[AI 보조 코딩]]은 하나의 기술이다. 실제로 이 기술을 마스터하는 방법](file:///Users/railscraft/[[Obsidian]]/raw/2026%EB%85%84%20AI%20%EB%B3%B4%EC%A1%B0%20%EC%BD%94%EB%94%A9%EC%9D%80%20%ED%95%98%EB%82%98%EC%9D%98%20%EA%B8%B0%EC%88%A0%EC%9D%B4%EB%8B%A4.%20%EC%8B%A4%EC%A0%9C%EB%A1%9C%20%EC%9D%B4%20%EA%B8%B0%EC%88%A0%EC%9D%84%20%EB%A7%88%EC%8A%A4%ED%84%B0%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95.md)
- [10 Things Every Investor Should Know (but most learn too late)](file:///Users/railscraft/[[Obsidian]]/raw/10%20Things%20Every%20Investor%20Should%20Know%20%28but%20most%20learn%20too%20late%29.md)
- [내가 [[Obsidian]]을 정리하는 방법 - 다니엘 프린디](file:///Users/railscraft/[[Obsidian]]/raw/%EB%82%B4%EA%B0%80%20[[Obsidian]]%EC%9D%84%20%EC%A0%95%EB%A6%AC%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95%20-%20%EB%8B%A4%EB%8B%88%EC%97%98%20%ED%94%84%EB%A6%B0%EB%94%94.md)
- [Claude Code를 밑바닥부터 직접 구현해 보았다](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20Code%EB%A5%BC%20%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EC%A7%81%EC%A0%91%20%EA%B5%AC%ED%98%84%ED%95%B4%20%EB%B3%B4%EC%95%98%EB%8B%A4.md)
- [Give Your AI Agent 36 Superpowers](file:///Users/railscraft/[[Obsidian]]/raw/Give%20Your%20AI%20Agent%2036%20Superpowers.%20Long%E2%80%91Term%20Memory%20in%20Minutes%20with%20[[GBrain]]%20%28Open)
- [I Sat in Engineering Meetings for Two Years Without Understanding What a Branch](file:///Users/railscraft/[[Obsidian]]/raw/I%20Sat%20in%20Engineering%20Meetings%20for%20Two%20Years%20Without%20Understanding%20What%20a%20Branch)
- [Claude Code 프로젝트를 위한 MEMORY.md](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20Code%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC%20%EC%9C%84%ED%95%9C%20MEMORY.md.md)
- [마이크로서비스 대신 [[모듈러 모놀리스]] — AI 에이전트가 코드를 읽기 시작했을 때 바뀐 것들](file:///Users/railscraft/[[Obsidian]]/raw/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EC%84%9C%EB%B9%84%EC%8A%A4%20%EB%8C%80%EC%8B%A0%20%EB%AA%A8%EB%93%88%EB%9F%AC%20%EB%AA%A8%EB%86%80%EB%A6%AC%EC%8A%A4%20%E2%80%94%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EA%B0%80%20%EC%BD%94%EB%93%9C%EB%A5%BC%20%EC%9D%BD%EA%B8%B0%20%EC%8B%9C%EC%9E%91%ED%96%88%EC%9D%84%20%EB%95%8C%20%EB%B0%94%EB%80%90%20%EA%B2%83%EB%93%A4.md)
- [40억 달러 대기업이 깨뜨린 오픈소스와 개발자 협박의 역풍](file:///Users/railscraft/[[Obsidian]]/raw/40%EC%96%B5%20%EB%8B%AC%EB%9F%AC%20%EB%8C%80%EA%B8%B0%EC%97%85%EC%9D%B4%20%EA%B9%A8%EB%9C%A8%EB%A6%B0%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%EC%99%80%20%EA%B0%9C%EB%B0%9C%EC%9E%90%20%ED%98%91%EB%B0%95%EC%9D%98%20%EC%97%AD%ED%92%8D.md)
- [The S&P 500 Illusion. Why Your “Diversified” Index Is Really a Bet on 10 Stocks](file:///Users/railscraft/[[Obsidian]]/raw/The%20S%26P%20500%20Illusion.%20Why%20Your%20%E2%80%9CDiversified%E2%80%9D%20Index%20Is%20Really%20a%20Bet%20on%2010%20Stocks.md)
- [Your Wandering Mind Is Not the Enemy of Focus](file:///Users/railscraft/[[Obsidian]]/raw/Your%20Wandering%20Mind%20Is%20Not%20the%20Enemy%20of%20Focus.md)
- [BofA’s May Survey Says Investors Are Back in Stocks. The 30-Year Is the Risk.](file:///Users/railscraft/[[Obsidian]]/raw/BofA%E2%80%99s%20May%20Survey%20Says%20Investors%20Are%20Back%20in%20Stocks.%20The%2030-Year%20Is%20the%20Risk..md)
- [내 주의 집중 시간을 되돌려준 11가지 사소한 생활 습관의 변화](file:///Users/railscraft/[[Obsidian]]/raw/%EB%82%B4%20%EC%A3%BC%EC%9D%98%20%EC%A7%91%EC%A4%91%20%EC%8B%9C%EA%B0%84%EC%9D%84%20%EB%90%98%EB%8F%8C%EB%A0%A4%EC%A4%80%2011%EA%B0%80%EC%A7%80%20%EC%82%AC%EC%86%8C%ED%95%9C%20%EC%83%9D%ED%99%9C%20%EC%8A%B5%EA%B4%80%EC%9D%98%20%EB%B3%80%ED%99%94.md)
- [LLM에게 [[옵시디언]] 볼트 열쇠를 주면 일어나는 일](file:///Users/railscraft/[[Obsidian]]/raw/[[LLM]]%EC%97%90%EA%B2%8C%20%EC%98%B5%EC%8B%9C%EB%94%94%EC%96%B8%20%EB%B3%BC%ED%8A%B8%20%EC%97%B4%EC%87%A0%EB%A5%BC%20%EC%A3%BC%EB%A9%B4%20%EC%9D%BC%EC%96%B4%EB%82%98%EB%8A%94%20%EC%9D%BC.md)
- [2026년을 위한 웹 디자인 및 빌드 [[워크플로]]우](file:///Users/railscraft/[[Obsidian]]/raw/2026%EB%85%84%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%9B%B9%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%B0%8F%20%EB%B9%8C%EB%93%9C%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.md)
- [How We Built an AI Second Brain for 60K Knowledge Workers-ko](file:///Users/railscraft/[[Obsidian]]/raw/How%20We%20Built%20an%20AI%20Second%20Brain%20for%2060K%20Knowledge%20Workers-ko.md)
- [These 3 ETFs Created More Millionaires Than Any Stock](file:///Users/railscraft/[[Obsidian]]/raw/These%203%20ETFs%20Created%20More%20Millionaires%20Than%20Any%20Stock.md)
- [60일간 11번의 기술 인터뷰를 치르며 깨달은 아무도 말해주지 않는 패턴](file:///Users/railscraft/[[Obsidian]]/raw/60%EC%9D%BC%EA%B0%84%2011%EB%B2%88%EC%9D%98%20%EA%B8%B0%EC%88%A0%20%EC%9D%B8%ED%84%B0%EB%B7%B0%EB%A5%BC%20%EC%B9%98%EB%A5%B4%EB%A9%B0%20%EA%B9%A8%EB%8B%AC%EC%9D%80%20%EC%95%84%EB%AC%B4%EB%8F%84%20%EB%A7%90%ED%95%B4%EC%A3%BC%EC%A7%80%20%EC%95%8A%EB%8A%94%20%ED%8C%A8%ED%84%B4.md)
- [Run a Useful Local [[LLM]] in 30 Minutes (Coding, [[RAG]], Voice)](file:///Users/railscraft/[[Obsidian]]/raw/Run%20a%20Useful%20Local%20[[LLM]]%20in%2030%20Minutes%20%28Coding%2C%20[[RAG]]%2C%20Voice%29.md)
- [만약 단 5편의 AI 논문만 읽어야 한다면 바로 이것입니다](file:///Users/railscraft/[[Obsidian]]/raw/%EB%A7%8C%EC%95%BD%20%EB%8B%A8%205%ED%8E%B8%EC%9D%98%20AI%20%EB%85%BC%EB%AC%B8%EB%A7%8C%20%EC%9D%BD%EC%96%B4%EC%95%BC%20%ED%95%9C%EB%8B%A4%EB%A9%B4%20%EB%B0%94%EB%A1%9C%20%EC%9D%B4%EA%B2%83%EC%9E%85%EB%8B%88%EB%8B%A4.md)
- [Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko](file:///Users/railscraft/[[Obsidian]]/raw/Build%20a%20Real-Time%20Voice%20Agent%20in%2030%20Minutes%20%28With%20Interruption%20Handling%29-ko.md)
- [AI [[코딩 에이전트]]와 함께하는 [[명세 기반 개발]] 결정판 가이드](file:///Users/railscraft/[[Obsidian]]/raw/AI%20%EC%BD%94%EB%94%A9%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EC%99%80%20%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94%20%EB%AA%85%EC%84%B8%20%EA%B8%B0%EB%B0%98%20%EA%B0%9C%EB%B0%9C%20%EA%B2%B0%EC%A0%95%ED%8C%90%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [Building an MCP Ecosystem at Pinterest-ko](file:///Users/railscraft/[[Obsidian]]/raw/Building%20an%20MCP%20Ecosystem%20at%20Pinterest-ko.md)
- [Skills Alone Won’t Save You in the AI Economy](file:///Users/railscraft/[[Obsidian]]/raw/Skills%20Alone%20Won%E2%80%99t%20Save%20You%20in%20the%20AI%20Economy.md)
- [RAG 시스템 초보자부터 전문가까지의 완전 가이드 (2026년 에디션)](file:///Users/railscraft/[[Obsidian]]/raw/[[RAG]]%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EC%B4%88%EB%B3%B4%EC%9E%90%EB%B6%80%ED%84%B0%20%EC%A0%84%EB%AC%B8%EA%B0%80%EA%B9%8C%EC%A7%80%EC%9D%98%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C%20%282026%EB%85%84%20%EC%97%90%EB%94%94%EC%85%98%29.md)
- [I Cancelled ChatGPT, [[Cursor]], and Midjourney This Week — My MacBook Pro M5 Max Quietly Replaced All Three-ko](file:///Users/railscraft/[[Obsidian]]/raw/I%20Cancelled%20ChatGPT%2C%20[[Cursor]]%2C%20and%20Midjourney%20This%20Week%20%E2%80%94%20My%20MacBook%20Pro%20M5%20Max%20Quietly%20Replaced%20All%20Three-ko.md)
- [Give Your AI Agent 36 Superpowers. Long‑Term Memory in Minutes with [[GBrain]] (Open Source)-ko](file:///Users/railscraft/[[Obsidian]]/raw/Give%20Your%20AI%20Agent%2036%20Superpowers.%20Long%E2%80%91Term%20Memory%20in%20Minutes%20with%20[[GBrain]]%20%28Open%20Source%29-ko.md)
- [I Sat in Engineering Meetings for Two Years Without Understanding What a Branch Was-ko](file:///Users/railscraft/[[Obsidian]]/raw/I%20Sat%20in%20Engineering%20Meetings%20for%20Two%20Years%20Without%20Understanding%20What%20a%20Branch%20Was-ko.md)

