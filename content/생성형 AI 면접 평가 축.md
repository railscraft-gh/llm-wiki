---
aliases:
  - GenAI 면접 평가 축
  - LLM 엔지니어 면접 질문 축
core: false
created: 2026-05-26
sources:
  - raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md
  - raw/60일간 11번의 기술 인터뷰를 치르며 깨달은 아무도 말해주지 않는 패턴.md
  - raw/테일윈드의 고군분투는 무너지는 사상누각의 징조다.md
  - raw/AI가 내 글쓰기 커리어를 죽였다. AI 만세.md
  - raw/AI 네이티브 세컨드 브레인을 구축하는 방법 (2026년 방식).md
  - raw/AI는 개발자를 대체하는 것이 아니라 더 심각한 일을 하고 있다.md
  - raw/모든 AI 엔지니어가 알아야 할 10가지 LangChain 및 LangGraph 개념.md
  - raw/옵시디언 마스터하기 - 노트를 세컨드 브레인으로 만드는 완벽 가이드.md
  - raw/더 빨리 배우고 싶다면 이 노트 정리 방식을 써라.md
  - raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md
  - raw/디지털 제품 제작은 잊으세요. 대신 이것에 집중하세요.md
  - raw/AI Agents. Complete Course.md
  - raw/How to Do Hard Things When You Have Zero Motivation.md
  - raw/Anthropic이 Opus 4.8에 대해 말하지 않은 것 - 하네스를 흡수하는 Anthropic.md
  - raw/2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가.md
  - raw/좋은 삶을 만드는 것에 대한 지루한 진실.md
  - raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md
  - raw/2026년 AI 보조 코딩은 하나의 기술이다. 실제로 이 기술을 마스터하는 방법.md
  - raw/10 Things Every Investor Should Know (but most learn too late).md
  - raw/내가 Obsidian을 정리하는 방법 - 다니엘 프린디.md
  - raw/Claude Code를 밑바닥부터 직접 구현해 보았다.md
  - raw/Claude Code 프로젝트를 위한 MEMORY.md.md
  - raw/마이크로서비스 대신 모듈러 모놀리스 — AI 에이전트가 코드를 읽기 시작했을 때 바뀐 것들.md
  - raw/40억 달러 대기업이 깨뜨린 오픈소스와 개발자 협박의 역풍.md
  - raw/The S&P 500 Illusion. Why Your “Diversified” Index Is Really a Bet on 10 Stocks.md
  - raw/Your Wandering Mind Is Not the Enemy of Focus.md
  - raw/BofA’s May Survey Says Investors Are Back in Stocks. The 30-Year Is the Risk..md
  - raw/내 주의 집중 시간을 되돌려준 11가지 사소한 생활 습관의 변화.md
  - raw/LLM에게 옵시디언 볼트 열쇠를 주면 일어나는 일.md
  - raw/2026년을 위한 웹 디자인 및 빌드 워크플로우.md
  - raw/These 3 ETFs Created More Millionaires Than Any Stock.md
  - raw/Run a Useful Local LLM in 30 Minutes (Coding, RAG, Voice).md
  - raw/만약 단 5편의 AI 논문만 읽어야 한다면 바로 이것입니다.md
  - raw/AI 코딩 에이전트와 함께하는 명세 기반 개발 결정판 가이드.md
  - raw/Skills Alone Won’t Save You in the AI Economy.md
  - raw/RAG 시스템 초보자부터 전문가까지의 완전 가이드 (2026년 에디션).md
status: evergreen
tags:
  - llm
  - hiring
  - interview
  - ai-coding
type: workflow
updated: 2026-07-10
---

# 생성형 AI 면접 평가 축

## 한 줄 정의
생성형 AI 면접 평가 축은 GenAI·LLM 엔지니어 및 범용 소프트웨어 엔지니어 채용 시, AI 에이전트의 보급으로 인해 암기식 코딩 테스트에서 탈피하여 시스템 아키텍처 설계, AI 페어 프로그래밍 실무, 슬롭(Slop) 탐지 및 코드 비평(Critique) 능력을 검증하는 다차원 평가 프레임이다.

## 핵심 요지
- **AI 페어 프로그래밍 실무 검증**: LeetCode식 손코딩의 변별력 상실로 인해, 면접관이 실제 에이전트 환경(Cursor, Claude Code 등)을 제공하고 제한된 시간(예: 30분) 내에 마이크로서비스를 구현·테스트하게 하는 실무 중심 과제가 주류를 이룬다.
- **슬롭(Slop) 탐지와 코드 비평**: 에이전트가 자동 생성한 코드의 결함(보안 취약점, 쿼리 비효율, 예외 처리 누락, 슬롭스쿼팅 등)을 날카롭게 포착하고 리팩토링 방향을 지휘하는 시니어 리뷰어로서의 역량을 평가한다.
- **시스템 trade-off 및 실패 복구 검증**: 단순 프레임워크 사용법보다 RAG 튜닝, 에이전트 교착 상태(Deadlock) 해결, observability 추적, 비용 가버너 설계 등 운영 중 겪은 실패와 트레이드오프 판단을 깊게 묻는다.
- RAGAS 평가지표 검증: 단순 데이터 검색을 넘어 RAGAS 프레임워크의 4대 핵심 평가지표(Faithfulness, Answer Relevance, Context Precision, Context Recall)를 정량적으로 분석하고, lost in the middle 병목을 우회하는 아키텍처 능력을 평가한다.
- 오케스트레이션 및 ReAct 한계 제어: ReAct 루프의 무한 루프 차단(Max steps), LoRA/QLoRA 기반의 자원 효율적 파인튜닝 분기점, 그리고 PPO/DPO를 결합한 alignment 전략에 대한 엔지니어링 trade-off 지식을 확인한다.

## 상세

### 1. 2026년 기술 인터뷰의 3대 메가 트렌드
AI 에이전트가 코딩의 장벽을 낮춤에 따라 채용 평가의 초점이 "코드를 기계적으로 짜는 사람"에서 "시스템 전체를 감독하고 조율하는 설계자"로 전환되었다.
1. **자율 에이전트와 함께하는 라이브 챌린지**: 단순 알고리즘 작성이 아닌, 에이전트와 페어 프로그래밍을 하여 라이브로 작동하는 실무급 백엔드 API와 DB 스키마를 30분 내로 조립하고 테스트 팩까지 기계적으로 통과시켜 동작 여부를 증명하는 라이브 검증이다.
2. **코드 비평(Code Critique) 및 슬롭 스캔**: AI가 생성한 복잡하지만 어설픈 코드를 제공하고, "이 코드에서 에러 핸들링 부재, 가짜 라이브러리 참조(슬롭스쿼팅), N+1 쿼리 등의 시스템 결함을 최소 5개 이상 지적하고 리팩토링을 제안하라"는 비판적 검토 능력을 확인한다.
3. **아키텍처 스케칭 및 트러블슈팅**: 구체적인 프로그래밍 언어의 신택스(syntax) 암기 테스트를 전면 배제하고, 화이트보드 상에서 분산 시스템(IDP, API Handoff, 멱등성 보장) 아키텍처 지도를 그릴 수 있는지와 복잡한 분산 에러 로그를 읽고 장애 지점을 찾아내는 트러블슈팅 역량을 집중 평가한다.

### 2. GenAI 시스템 엔지니어링 6대 평가 축
- **모델·추론 기초**: 어텐션(Attention) 제곱 비용 한계, 컨텍스트 윈도우 한계 및 Lost in the middle 극복 원리.
- **RAG 및 컨텍스트 엔지니어링**: RAG 튜닝(청킹, 하이브리드 검색, 리랭커), 벡터 데이터베이스 튜닝, 평가 지표(Faithfulness, Answer Relevance).
- **에이전트 오케스트레이션**: ReAct 루프 제어, 멱등성(Idempotency), Durable Execution(지속성 실행) 및 루프 탈출 조건 설계.
- **파인튜닝 및 정렬**: LoRA/QLoRA 매커니즘, RLHF/DPO의 실무 도입 분기점 및 모델 한계 극복 판단.
- **평가 및 Observability**: Offline/Online Eval, LLM-as-judge 편향 제거, Latency 및 Token 가버닝.
- **보안 및 가드레일**: 멀티테넌트 RAG 테넌트 격리, [[Lethal Trifecta]] 위험 통제, 슬롭스쿼팅 방어 방침.

### 3. 실무 GenAI 시스템 심층 검증 영역
- **RAG 및 컨텍스트 엔지니어링**: RAG 튜닝 시 단순 벡터 검색(Vector-only)의 한계를 극복하기 위해 Dense retrieval과 BM25/TF-IDF 기반 Sparse retrieval을 결합하는 하이브리드 검색(Hybrid Search) 설계 여부, bi-encoder 기반 대형 검색 후 cross-encoder reranker를 사용한 top-k 재정렬, 그리고 Lost in the middle을 우회하기 위한 청킹(chunking) 및 context compaction 제어를 정밀 확인한다.
- **에이전트 루프 제어**: ReAct 루프 가동 시 동일 상태가 기계적으로 반복되어 무한 루프에 빠지는 현상이나 비용 폭주(Runaway costs)를 제어하기 위한 가버너(Governor), Allowlist 도구 지정, Egress default-deny 정책 기반 가드레일 설계 능력을 점검한다.
- **파인튜닝 및 alignment**: LoRA/QLoRA의 저차원 적응 행렬 메커니즘 차이점, reward hacking 및 collapse 한계를 지닌 PPO 기반 RLHF의 대안으로 DPO(Direct Preference Optimization)를 도입하는 실제적 기준을 묻는다.
- **추론 지연(Latency) 최적화**: 프로덕션 챗봇의 지연 시간을 최소화하기 위한 speculative decoding(작은 draft model로 다량 생성 후 큰 target model로 검증) 도입 검토 유무와 prompt caching 활용법을 다룬다.

## 예시

- **RAG 설계 질문**: "단순 Vector Search보다 검색 정확도를 30% 높인 하이브리드 검색과 리랭커 튜닝, 그리고 Lost in the Middle 현상을 예방하기 위한 컨텍스트 엔지니어링 설계를 설명해 보십시오."
- **코드 비평 질문**: "AI가 임의로 구현한 결제 연동 코드에서 슬롭 API 호출과 트랜잭션 롤백 누락 결함을 지적해 보십시오."
- **에이전트 조율 질문**: "장기 실행 에이전트의 무한 재시도로 인한 비용 폭주와 API Rate Limit 도달 문제를 방지하기 위해 가버너(Governor)와 루프 탐지기를 설계한 경험을 말씀해 보십시오."

## 예시
- **RAG 설계 면접 질문 예시**: "RAGAS의 4가지 평가 축을 기준으로 삼아 RAG 파이프라인의 faithfulness를 보장하고, 롱 컨텍스트 하에서 lost in the middle 문제를 해결하기 위해 hybrid search와 cross-encoder reranker를 조립해 성능을 최적화한 실무 경험을 설명하십시오."

## 충돌

## 관련 노트
- [[AI 네이티브 사용자]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Context Engineering]]
- [[RAG 아키텍처 선택]]
- [[Agent Harness]]
- [[Competence Debt]]

