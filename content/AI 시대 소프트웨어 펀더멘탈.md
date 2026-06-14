---
type: concept
status: evergreen
core: false
tags:
  - ai-coding
  - software-engineering
  - fundamentals
  - tdd
  - ddd
aliases: []
sources:
  - Code Is Not Cheap. How to Multiply Your AI’s Output With Software Fundamentals
  - 아무도 AI를 배우고 싶어 하지 않는다
  - 오늘날 AI를 배우는 대부분의 사람들이 존재하지 않는 직업을 준비하고 있다
created: 2026-05-09
updated: 2026-06-14
---

# AI 시대 소프트웨어 펀더멘탈 (Software Fundamentals in the AI Era)

## 한 줄 정의

AI 시대일수록 좋은 설계와 공통 이해를 바탕으로 한 소프트웨어 펀더멘탈이 더 중요해지며, AI 엔지니어링의 본질은 모델의 발명이 아닌 사전 학습된 모델을 안전하고 안정적으로 결합하여 유용하게 작동시키는 시스템 엔지니어링에 있다는 주장.

## 핵심 요지

- **Vibe Coding에서 Agentic Engineering으로**: Andrej Karpathy는 2025년 2월 "원하는 것을 말하면 AI가 코딩하고 그 코드가 존재한다는 사실조차 잊어버리는" `vibe coding` 개념을 만들었으나, 1년 뒤인 2026년에는 예술과 과학, 그리고 전문성을 강조하는 `agentic engineering`으로 입장을 선회했다. 수작업 코딩 80%에서 에이전트 코딩 80%로 전환하면서, 모델이 어려운 문제는 잘 풀지만 당연한 것에서 넘어지는 jagged(들쭉날쭉한) 특성을 지님을 발견했다.
- **코드는 싸지 않다**: Matt Pocock은 자신의 2026년 4월 AI Engineer Conference 강연에서 "Code is not cheap. Bad code is the most expensive it's ever been"이라고 강조했다. 코드베이스를 수정하기 어렵다면 AI가 제안하는 코드를 온전히 흡수할 수 없다. AI는 아키텍처 결함을 해결하기는커녕 엔트로피를 더 빠르게 증폭한다.
- **버그의 폭발적 증가**: GitClear의 *2025 code quality study*에 따르면, AI가 공동 작성한 PR은 사람만 작성한 PR보다 이슈(버그)가 1.7배 더 많이 발생한다. 복사·붙여넣기된 코드의 비중은 2021년 8.3%에서 2024년 12.3%로 상승했다. 한편 AI는 현재 GitHub 전체 코드의 41%를 작성하고 있으며, 유료 Copilot 구독자는 470만 명에 이른다.
- **durable skill vs perishable skill**: 프레임워크나 API 구현 세부사항처럼 유통기한이 2~3년인 perishable skill(React hooks, 특정 에이전트 API 등)에 매몰되지 않고, 시스템 디버깅 능력, 아키텍처 판단력, 코드베이스 분석력 등 반감기가 수십 년에 달하는 durable skill을 훈련해야 [[Competence Debt]]을 피할 수 있다.

## 상세

### 1. 만들기 전에 먼저 정렬하라 (Design Concept)
- **원인**: Karpathy가 지적한 첫 번째 에이전트 실패 모드는 "모델이 당신 대신 잘못된 가정을 하고도 확인하지 않은 채 그냥 밀고 나가는 것"이다. 이는 Frederick Brooks가 *The Design of Design*에서 다룬 **design concept**(협업자들 사이의 보이지 않는 공유 설계 이론)의 결핍에서 발생한다. AI 프롬프팅에서는 이 정신 모델의 동기화가 기본적으로 누락된다.
- **처방**: Grill Me 스킬
  Matt Pocock은 다음 두 줄의 지시어로 구성된 `grill-me` 스킬을 고안했다 (GitHub 스타 97,000개 이상 기록).
  > *"이 계획의 모든 측면을 우리가 공유된 이해에 도달할 때까지 집요하게 인터뷰하라. 설계 트리의 각 가지를 따라 내려가며, 하나씩 의존성을 풀어라."*
  이 지시를 받으면 AI는 40개에서 100개까지의 질문을 집요하게 던져 계획의 구멍과 잘못된 가정을 검증한다.

### 2. 같은 언어를 사용하라 (Ubiquitous Language)
- **원인**: 두 번째 실패 모드는 "10줄짜리 함수를 요청했더니 200줄짜리 장황한 엔터프라이즈 프레임워크가 나오는" 과적합 문제다. AI가 사용자의 도메인 용어를 오해하여 추측에 의존하기 때문이다.
- **처방**: Ubiquitous Language (유비쿼터스 언어)
  Eric Evans의 *Domain-Driven Design* (2003) 핵심 개념인 Ubiquitous Language를 적용해야 한다. Evans는 2024년 InfoQ에서 "bounded context의 ubiquitous language로 LLM을 학습시키면 범용 모델보다 특정 필요에 훨씬 더 유용해진다"고 언급했다. 코드베이스를 스캔하여 도메인 용어집을 마크다운 사전으로 작성하고 프롬프트 자산으로 삼으면, 용어의 혼선에 따른 context bleed와 토큰 낭비를 차단할 수 있다.

### 3. 먼저 테스트하고, 작게 배포하라 (TDD)
- **원인**: 그럴듯하지만 작동하지 않는 코드가 쏟아진다. *The Pragmatic Programmer*의 경고처럼 "자신의 헤드라이트보다 빠르게 달리기(Outrunning headlights)" 때문이다. 검증 없이 수백 줄을 한 번에 작성하는 에이전트는 엔트로피 소용돌이를 유도한다. (2025년 5월 arXiv 연구에 따르면 에이전트가 단일 스크립트에서 다중 모듈 시스템으로 이동할수록 코드 스멜 밀도가 급증한다.)
- **처방**: TDD (테스트 주도 개발)
  TDD는 AI가 작은 단계를 밟도록 규제하는 기계적 제약 장치다.
  - **Anthropic best practices**: 한 Claude가 테스트를 쓰고, 두 번째 Claude가 테스트를 통과하는 코드를 작성하는 "writer/reviewer" 패턴 권장.
  - **OpenAI Codex**: 테스트가 외부의 진실 원천(source of truth)이며, 이것이 없으면 Codex는 자기 판단으로 검증하는 실수를 저지른다.

### 4. 넓게 말고 깊게 만들어라 (Deep Modules)
- **원인**: AI는 기능은 적고 인터페이스가 복잡한 얕은 모듈(shallow modules)을 잘 만든다. 이는 의존성을 복잡하게 얽히게 해 다음 AI 세션이 내비게이션 미로 속에서 길을 잃게 만든다. LLM은 추론 시점에 전체 아키텍처의 복잡성을 추적하지 못한다.
- **처방**: Deep Modules (깊은 모듈)
  John Ousterhout의 *A Philosophy of Software Design* (2018) 개념이다. 단순한 인터페이스 뒤에 많은 기능을 숨겨 컨텍스트 윈도우 낭비를 막고, AI가 내부 구현 세부사항을 알지 못해도 입구만 보고 협업할 수 있도록 설계해야 한다. TypeScript가 2025년 8월 GitHub의 1위 언어로 복귀한 배경도 타입 구조화가 AI 보조 개발의 신뢰도를 복리로 키우기 때문이다.

### 5. 인터페이스를 설계하고 구현은 위임하라 (Grey-box)
- **처방**: Grey-box(회색 상자) 전략
  사용자는 아키텍처, 인터페이스, 계약(contract) 설계 등 전략 레이어를 담당하고, 모듈 내부의 구체적인 구현은 전술 레이어인 AI에게 위임한다. 줄 단위 코드 리뷰 대신 테스트 통과 여부로 에이전트의 완성도를 검증함으로써 인간 두뇌가 겪는 검토 피로를 극복한다. Anthropic 데이터에 따르면, 이와 같이 위임 기반의 신뢰 아키텍처를 적용한 대규모 리팩터링 작업에서 2~3배의 생산성 향상이 나타났다.

### 6. AI 엔지니어의 핵심 역량: 모델 발명이 아닌 시스템 엔지니어링
- AI 엔지니어는 새로운 모델을 설계하는 리서치 사이언티스트가 아니다. 이미 사전 학습된 파운데이션 모델을 시스템에 안정적으로 배치하고 조율하는 사람이며, 이 일은 수학보다 전통적인 소프트웨어 엔지니어링에 가깝다.
- **오해와 진실**:
  - 고급 수학이나 미적분, 역전파 수식을 직접 유도할 줄 몰라도 상용 AI 시스템을 구축할 수 있다 (작동 기저의 개념적 이해만으로 충분).
  - Kaggle 등 정제된 데이터 기반 평가지표 경쟁은 실제 프로덕션 환경의 지저분한 데이터, 불안정한 인프라, 비결정론적인 모델 동작을 다루는 엔지니어링 실무와 거리가 먼 편이다.

### 7. 프로덕션 AI의 배관 작업(Plumbing)과 관찰 가능성
- 실제 상용화된 AI 제품에서 발생하는 오류의 80%는 AI 모델 자체의 지능 문제가 아니라, 모델의 비결정론적 특성을 제어하지 못한 **시스템 배관(Plumbing) 오류**에서 기인한다.
- **RAG/에이전트 제어**: 문서 청킹 방식 최적화, 정지 조건(Stop condition)을 통한 무한 루프 차단, Pydantic을 이용한 구조화된 출력(JSON Schema) 유효성 검사 등 견고한 로직 처리가 필수적이다.
- **관찰 가능성(Observability) 및 evals(평가)**:
  - LangSmith 또는 Langfuse와 같은 추적(Tracing) 도구를 적용하여 모델 호출과 도구 실행의 흐름을 시각화해야 오류 디버깅이 가능하다.
  - 시스템 개선을 입증하기 위해, 이진 지표(예/아니오) 기반의 자동 테스트 케이스인 `evals`를 셋업하여 아키텍처를 관리한다.

### 8. 실행(Ship) 중심의 학습 복리 효과
- AI 지식을 눈으로만 담아두는 소비(Consume) 상태에 머물면 성장하지 못한다. 직접 RAG, Agent, Pydantic 스키마 등을 API로 연결하고, FastAPI로 백엔드를 구축한 뒤 Docker 컨테이너에 올려 Railway/Render 등에 직접 배포(Ship)해 깨뜨려 보는 실전 루프를 반복해야 역량 부채를 피할 수 있다.
  > *"강의는 개념을 알려주고, 프로젝트는 부족한 구멍을 드러낸다. 배포(Ship)는 그 구멍을 메운다."*

### 9. 주요 플랫폼별 원칙 매핑
- **Anthropic (Claude Code)**: `CLAUDE.md`를 프로젝트의 정렬 계약 문서로 삼고, 독립적인 서브에이전트 아키텍처와 writer/reviewer 패턴을 활용.
- **OpenAI (Codex)**: `AGENTS.md`를 협업 계약서로 사용하고, 에이전트의 작업 완료를 보증하는 "done when" 테스트 기준 제공.
- **GitHub Copilot**: 저장소의 의미론적 색인을 구성하는 `agent mode`(2025 대비 검색 정확도 37.6% 향상), custom agents 및 prompt files 제공.

## 예시

- **Grill Me**: Matt Pocock이 공개한 `skills` 저장소를 참고하여 프롬프트 작성 단계 이전에 설계 구멍을 40~100개의 질문으로 교정.
- **Ubiquitous Language**: 도메인 사전 markdown을 프로젝트 최상위에 배치하여 AI가 비정상적으로 긴 코드를 뱉지 않고 낭비되는 토큰을 아끼도록 함.
- **Grey-box 모델**: FastAPI API endpoint와 스키마 명세를 먼저 타입으로 선언(인터페이스)하고, 엔드포인트 내의 DB 조회 및 전처리 로직 구현은 AI에게 위임한 채 테스트만으로 통과시킴.

## 충돌

- **specs-to-code vs 아키텍처**: 단순히 자연어 사양서만 주면 코드가 튀어나올 것이라는 환상은 시스템의 엔트로피 부패를 부추겨 장기적으로 디스인베스트먼트(disinvestment)로 이어진다.
- **자격 증명 경제 vs 실물 포트폴리오**: 자격증 취득(MOOC의 수료율은 평균 3~10% 수준)보다, 80%의 완성도라도 완성해 GitHub에 커밋하고 Railway/Render 등에 배포해 둔 3개의 작동 프로젝트가 취업 시장에서 훨씬 가치 있다.

## 관련 노트

- [[AI 코딩 에이전트 검증 전략]]
- [[Vibe Coding과 Agentic Engineering]]
- [[Claude.md 운영 원칙]]
- [[AI Slop]]
- [[Competence Debt]]
- [[에이전트 코딩 4원칙]]

