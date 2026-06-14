---
type: concept
status: evergreen
core: false
tags:
  - llm
  - agent
  - automation
  - prompting
aliases:
  - 클로드 코워크
  - Cowork
sources:
  - raw/지루한 업무를 자동화하는 클로드 코워크 프롬프트 7가지.md
  - raw/Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요.md
  - raw/내가 매주 쓰는 클로드와 챗GPT 프롬프트 10선 (즉시 복사하여 사용 가능).md
created: 2026-06-09
updated: 2026-06-14
---

# Claude Cowork

## 한 줄 정의

Claude Cowork은 사용자의 이메일 수신함(Gmail)과 로컬 파일 디렉터리에 직접 연동되어, 정보를 스캔, 추출, 가공하여 실제 실행(Action)을 완수하는 Claude 에이전트 작업 환경 및 이에 특화된 실무 협업(Cowork) 프롬프팅 체계이다.

## 핵심 요지

- **실행형 에이전트**: 단순한 텍스트 대화형 챗봇에서 벗어나, 파일 시스템이나 이메일 클라이언트 등에 직접 명령을 내려 데이터를 조회하고 물리적으로 결과물을 저장 및 업데이트하는 업무 완수 능력을 제공한다.
- **모델별 프롬프팅 최적화**: Claude는 페르소나와 논리적 제약 조건(예: '절대 과장하지 말 것')을 엄격하게 준수하는 반면, ChatGPT는 추론 자극("단계별로 생각해봐")과 명확한 차단 단어 목록을 명시할 때 효과적이다.
- **상황 맥락 파일의 자동 로딩**: 일반 채팅 환경에서는 사용자가 매번 프로젝트 상황이나 고유 문체, 제약 사항을 수동으로 복사·붙여넣기 해야 하지만, Cowork 기능을 쓰면 지정된 로컬 폴더에 상황 맥락 마크다운(`.md`) 파일(예: `business_context.md`, `voice_profile.md` 등)을 넣어두는 것만으로 에이전트가 폴더 내 모든 맥락을 자동 파악하여 작동한다.
- **실전 템플릿과 공통 패턴**: AI 고유의 기계적 결과물(AI Slop)을 방지하기 위해 구체적 역할(Role), 금지 규칙(Negative Constraint), 구조적 출력 형식(Output Format)을 지정하고 피드백 루프를 반복(Iterate)한다.

## 상세

### 1. Claude 데스크톱 앱에서의 Cowork 활성화 방법
1. [데스크톱용 Claude 앱](https://claude.com/download)을 내려받아 실행한다.
2. 앱 좌측 메뉴에서 **Cowork** 탭을 선택한다.
3. 상황 맥락 `.md` 파일이 저장된 로컬 폴더를 지정하고, 해당 디렉터리에 대한 접근 권한을 앱에 승인한다.
4. 작업 요청 시 프롬프트 꼬리표에 아래 문장을 명시하여 연동 파일을 강제 적용한다:
   `(이 작업을 수행하기 전에 먼저 동일 폴더 안의 [내파일명].md 파일을 꼼꼼히 정독하고 지침을 엄격하게 적용해 줘.)`

### 2. 전문 영역별 5대 프로필 유형
맨땅에서 작성을 시작하는 대신 에이전트에게 40~50개의 질문을 하나씩 던지게 하는 인터뷰 방식을 통해 사용자의 구체적 사례가 반영된 맞춤형 .md 프로필을 자동으로 도출한다.
- **비즈니스 맥락 프로필 (Business Context)**: 비즈니스 가치, 실제 제품 어조, 팀 구조, 주기적 난제, 선호하는 이메일 스타일, 재무/정산 지표, 타협할 수 없는 비즈니스 금기 사항을 정의한다.
- **고유한 글쓰기 문체 프로필 (Writer's Voice)**: 작문 장르, 가장 만족스러운 대표 문단 예시, 시그니처 단어, AI 번역투 등 혐오 단어 목록, 동경하는 작가의 필살기, 줄글/불릿 레이아웃 선호도를 포함한다.
- **클라이언트 업무 및 프로젝트 관리 (Client & Project Work)**: 온보딩 필수 자료, 인도물 완료(Done) 판정 기준, 고객 소통 톤앤매너, 프로젝트 범위 초과(Scope Creep) 시 대처 공식, 최우선 의사결정 지침을 명시한다.
- **크리에이터 아이덴티티 프로필 (Content Creator)**: 채널 정보, 실 활성 타겟 오디언스 프로필, 핵심 콘텐츠 기둥(Content Fillers), 킬러 콘텐츠 및 실패한 콘텐츠 원인 분석, 모방 금지 트렌드를 규정한다.
- **데이터 분석 및 연구원 프로필 (Analyst & Researcher)**: 최종 독자층 및 핵심 의문점, 목소리 대신 숫자를 신뢰하는 통계적 유의성, 신뢰도 및 출처 명시 기준, 가독성 높은 표 서식, 피해야 할 모호한 해석(자의적 주장)을 포함한다.

### 3. Claude vs. ChatGPT 프롬프팅 스타일 차이
- **Claude (제약과 역할 극대화)**: Claude는 문맥과 제약 사항을 깊이 흡수하여 일관성 있게 행동한다. "절대 과장된 광고 톤을 쓰지 마라(never hypey)", "친절할 필요 없이 팩트만 말하라(Don't be nice. Be right)" 같은 정성적인 제약을 훌륭하게 수행하며, 복잡한 비즈니스 룰을 지키는 데 적합하다.
- **ChatGPT (추론과 명확한 차단 목록)**: ChatGPT는 "단계별로 생각하라(Think step-by-step)"는 지시를 주었을 때 비평과 연산 성능이 획기적으로 개선된다. 또한 "game-changer", "revolutionary" 등 기계적인 단어를 명시적으로 금지하고, 아웃풋의 불릿 구조를 꼼꼼하게 명시할 때 좋은 성과를 낸다.

### 4. 실전 Co-work 프롬프트 10선

#### Claude 특화 프롬프트
1. **과장 없는 세일즈 카피**:
   > *Rewrite this [product/description] into high-converting sales copy using AIDA. Make it emotional and benefit-focused but never hypey. Target [audience]. Include a strong headline, bullet points of benefits, and a clear CTA.*
2. **어조 복제 말투 학습 (Few-shot)**:
   > *Analyze these 3–5 writing samples: [paste]. Identify my patterns in tone, structure, vocabulary, and rhythm. Then rewrite this [paste text] to match my style exactly. Flag any parts that still feel off.*
3. **독창적 콘텐츠 전략 (역발상 제안 포함)**:
   > *Act as a Head of Content who scaled a brand to 500K+ organic followers. For my brand [describe], audience [describe], and goal [e.g., grow on LinkedIn], create content pillars, a 30-day schedule with 10 post ideas (with hooks), a repurposing system, and one contrarian bet.*
4. **냉혹한 VC 피드백 (팩폭 평가)**:
   > *Act as a partner-level VC who has reviewed 10,000 pitches and is allergic to buzzwords. Evaluate this [idea]: [details]. Return: thesis, market reality check, moat analysis, 5 brutal objections, what’s missing, verdict. Don’t be nice. Be right.*
5. **콜드 이메일 진단**:
   > *Act as a growth advisor who audited 500+ outbound campaigns. For this cold email sequence to [ICP]: line-by-line diagnosis, subject lines, tone fixes, rewritten sequence, A/B ideas, follow-up cadence.*

#### ChatGPT 특화 프롬프트
1. **클리셰 배제 다이렉트 카피**:
   > *Act as a direct-response copywriter with 15+ years experience writing for [audience]. Write [number] variations of [type] for [offer]. Use AIDA. Focus on emotional benefits. Tone: confident, conversational, never hypey. Avoid clichés like “game-changer,” “revolutionary,” “leverage.”*
2. **안티 AI 라이팅 (AI 티 제거)**:
   > *Write like a human, not an AI. Analyze these samples: [paste 2–4]. Match my tone, rhythm, and quirks. Rewrite this: [paste text]. Rules: contractions, varied sentence length, no em-dash overuse, no generic transitions (“at the end of the day”), no “in the realm of” or “it’s important to note.” Flag anything still AI-like.*
3. **30일 로드맵 설계**:
   > *Act as a content strategist who grew multiple accounts to 100K+ followers. For my [niche], audience [describe], goal [drive leads on LinkedIn]: 3–5 pillars, 10 post ideas with hooks, formats, and cadence for 30 days, repurposing strategy, metrics. Make ideas practical yet unexpected.*
4. **추론 중심 비평**:
   > *Act as a blunt, no-BS advisor who has evaluated hundreds of [startups/campaigns]. Evaluate: [paste details]. Structure: thesis, weaknesses, 5 objections, what’s missing, revised version, verdict (strong / needs work / kill it). Think step-by-step before the final output.*
5. **비즈니스 이메일 A/B 테스트 초안**:
   > *Act as a communication strategist who crafts high-response emails. Goal: [book meeting / negotiate]. Context: [details]. Include: subject line options, opening hook, value prop, credibility, CTA, follow-up plan. Tone: warm, concise, human. Provide A/B variations.*

### 5. Co-work 프롬프트 설계의 4대 공통 패턴
- **구체적인 역할 지정(Role)**: '전문가' 대신 '투자사 파트너', '성장 감사관'처럼 매우 협소하고 날카로운 지적 책임을 갖는 페르소나를 준다.
- **명확한 기피 규칙(Negative Constraints)**: 해야 할 일만큼 하지 말아야 할 일(사용 금지어, 피해야 할 톤)을 엄격하게 제한한다.
- **원하는 최종 결과의 구조화(Structure)**: 불릿 포인트, A/B 초안, 점수 비교표 등 구체적인 형태를 구조적으로 요구한다.
- **피드백과 반복 수행(Iteration)**: 단일 턴 답변에 만족하지 않고, 도출된 초안을 바탕으로 추가 피드백(삭제 요청, 강조 등)을 통해 품질을 고도화한다.

## 예시

Claude Cowork을 활용하여 일상 및 반복 업무를 자동화하는 7가지 대표 워크플로는 다음과 같다.

1. **프리랜서 인보이스 추적기**: `~/Documents/Invoices` 등 로컬 폴더와 Gmail 내 결제 관련 메일을 스캔하여 상단에 총 미결제액, 청구액, 만기일순 정렬 및 상태(OVERDUE/DUE SOON/PAID)를 정리하는 마크다운 파일 생성.
2. **공급업체 비교 표**: 비교할 공급업체(최대 3개), 목적, 예산 범위, 팀 규모를 입력하면 G2/Reddit/Capterra 반응 및 요금, 한계점을 수집하여 1-10 점수 비교 표와 추천안 제안.
3. **여행 일정 제작기**: 호텔, 항공, 렌터카 등의 Gmail 예약 확인 이메일을 시간 순으로 정렬하고, 탑승 시간, 예약 번호, 주소 등을 추출하여 일정 누락 공백을 지적하는 일정표 구축.
4. **회의 녹취록 실행 과제 정리**: `meeting`, `call` 등이 포함된 폴더 내 녹취 파일(.txt, .pdf, .md, .vtt)을 읽어 결정 사항, 담당자별 실행 항목(UNASSIGNED, NO DATE 표시), 미결 질문 및 즉시 발송 가능한 팔로우업 메일 초안 작성.
5. **구독 추적기**: 특정 폴더에 모인 은행 명세서(CSV, PDF 등)를 읽어 2개월 이상 반복 청구된 멤버십 및 정기 요금을 활성/취소 섹션으로 시각화한 대시보드 제공 및 `.xlsx` 파일로 월별 절약액 계산 추출.
6. **구직 지원 추적기**: 이메일 수신함에서 지원 메일을 추적하여 Applied/Interview/Rejected 등의 상태를 Days Since Last Update 순으로 정렬하고, 14일 이상 응답이 없는 건에 강조 표시하는 실시간 라이브 대시보드 구축.
7. **다운로드 폴더 정리**: 다운로드 루트 디렉터리의 단일 파일들을 Audio, Docs, PDFs, Images, Videos, Datasets의 6가지 하위 폴더로 이동 정돈하며, 기존 폴더 훼손 및 파일 삭제는 절대 하지 않도록 제약 조건을 주는 정리 자동화.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI 네이티브 작업 시스템]] : 단순 챗봇을 넘어선 에이전틱 작업 시스템과 인프라의 필요성을 설명한다.
- [[Plan Mode 기반 AI 작업]] : 계획 수립과 실행을 분리하여 작업 성공률을 높이는 방식을 조명한다.
- [[DESIGN.md 운영 원칙]] : 설계와 코드 구현을 정합성 있게 이어주는 문서 기반 협업 방식이다.
- [[Claude.md 운영 원칙]] : 로컬 환경에서의 Claude 에이전트 명령 체계 및 세션 운영 지침이다.
- [[AI Slop]] : 기계적으로 생산된 영혼 없는 결과물의 폐해와, 이를 극복하기 위해 휴먼 라이팅 스타일을 학습시켜야 하는 당위성을 연결한다.

