---
aliases:
- LLM Memory System Architecture
- 에이전트 메모리 계층
- LLM-메모리-시스템-아키텍처
core: true
created: 2026-06-14
sources:
- 'raw/밑바닥부터 만드는 LLM 메모리 #1. 슬라이딩 윈도우 버퍼.md'
- 'raw/밑바닥부터 만드는 LLM 메모리 #2. 자동 요약 버퍼.md'
- 'raw/밑바닥부터 만드는 LLM 메모리 #3. 벡터 메모리.md'
- 'raw/밑바닥부터 만드는 LLM 메모리 #4. 지식 그래프 메모리.md'
- 'raw/밑바닥부터 만드는 LLM 메모리 #5. 계층형 자체 관리 메모리.md'
- raw/지식 그래프, 진정한 게임 체인저... 그러나 구축과 유지가 극도로 어려운 이유.md
- raw/노트북을 망가뜨리지 않으려고 라즈베리 파이에서 AI 에이전트 하네스를 구동한 후기.md
- raw/지난번 이런 일이 있었을 때, 수많은 평범한 사람들이 백만장자가 되었다.md
- raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md
- raw/Claude Code 프로젝트 효율을 극대화하는 MEMORY.md 가이드.md
- raw/AI와 오픈소스로 300개 이상의 팟캐스트를 RPG 게임으로 만든 이야기 - LennyRPG 8시간 개발기.md
- raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md
- raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md
- raw/AI 개발자가 반드시 알아야 할 9가지 RAG 아키텍처 - 실무 예제로 배우는 완전 가이드.md
- raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 TurboQuant, 애플 실리콘 상륙.md
- raw/1인 개발자와 소규모 팀을 위한 주말 완성 디자인 시스템 구축법.md
- 'raw/애플 실리콘을 위한 로컬 AI 스택: 한 차원 진화한 성능과 최적의 구축 가이드.md'
- raw/How to write a DESIGN.md file Claude can actually use-ko.md
- raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
- raw/우리가 피그마 없이 제품을 배포하는 방법.md
- raw/2026년에 실제로 효과가 있는 나의 AI 디자인 워크플로우.md
- raw/DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko.md
- raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md
- raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
status: evergreen
tags:
- llm
- memory
- agent-workflow
- architecture
- knowledge-graph
type: concept
updated: 2026-07-10
---
# [[LLM]] 메모리 시스템 아키텍처

## 한 줄 정의
[[LLM]] 메모리 시스템 아키텍처는 [[LLM]] 에이전트가 단기 대화 맥락과 장기 지식을 효율적으로 보존하고 인출할 수 있도록 슬라이딩 윈도우, 자동 요약, 벡터 검색, 지식 그래프, 계층형 자체 관리 루프 등 서로 다른 저장 계층과 관리 도구를 설계 및 결합하는 기술적 뼈대다.

## 핵심 요지
- **메모리 자율성 (Agentic Memory)**: 에이전트 외부에서 개발자가 수동적으로 컨텍스트를 주입하는 설계(Passive Memory)에서, 에이전트 스스로 도구(update, insert, search)를 호출하여 자신의 기억을 관리하고 인출하는 하트비트 루프(Heartbeat Loop) 기반의 자율 메모리 시스템으로 진화한다.
- **메모리 계층 구조 (Memory Hierarchy)**: 하드웨어의 RAM과 하드디스크의 이원화 구조처럼, 매 대화 턴마다 즉각 상주하며 갱신되는 **핵심 메모리(Core Memory)**와 방대한 지식을 저장하고 필요할 때 시맨틱 검색으로 퍼 올리는 **보관용 장기 메모리(Archival Memory)**로 계층을 설계하여 컨텍스트 예산(Context Tax)을 관리한다.
- **구축 기법의 트레이드오프**: 단순 순환 버퍼(FIFO)부터 지식 그래프(관계 추론) 및 MemGPT식 계층 메모리에 이르기까지, 각 메커니즘은 컴퓨팅 비용, 설명 가능성, 추론 복잡도 측면에서 명확한 트레이드오프를 가진다.
- **지식 그래프의 시맨틱 닻(Semantic Reference Data)**: 지식 그래프는 모호한 데이터 조회 프레임을 비즈니스 의미 분석과 충돌 감지로 전환해 주지만, 인적 변동에 따른 의사결정 증발과 높은 시맨틱 세금(Semantic Tax)으로 인해 스타트업의 규율과 대기업의 현실주의적 절충안이 엄격히 요구된다.
- 벡터 메모리는 [[RAG]] 조회 시 유저 질문과 AI 답변을 개별 임베딩하면 문맥 정보가 유실되므로 반드시 상호작용 쌍(Interaction Pair - `User: {q}\nAssistant: {a}`) 구조로 묶어 저장해야 의미론적 정확성이 보장된다. (출처: 밑바닥부터 만드는 [[LLM]] 메모리 #3. 벡터 메모리.md)
- 벡터 메모리의 의미론적 유사도 거리가 메우지 못하는 관계 기반 다단계 추론(Multi-Hop Reasoning) 한계는 트리플렛 노드 기반의 지식 그래프 탐색(Graph Traversal)을 통해 해결한다. (출처: 밑바닥부터 만드는 [[LLM]] 메모리 #4. 지식 그래프 메모리.md)
- 계층형 자체 관리 메모리(MemGPT 아키텍처)는 에이전트에게 3대 메모리 관리 도구를 부여하여, 최종 답변 전 하트비트 루프(Heartbeat Loop)를 작동시키는 자율적 주도권을 모델에 이양한다. (출처: 밑바닥부터 만드는 [[LLM]] 메모리 #5. 계층형 자체 관리 메모리.md)

## 상세

### 1. 에이전트 메모리 구축의 5대 메커니즘 및 튜닝 기법

#### ① 슬라이딩 윈도우 버퍼 (Sliding-Window Buffer)
- **개념**: 가장 단순한 선입선출(FIFO) 방식의 순환 버퍼다. 고정된 토큰 크기나 대화 턴 수 한도를 정해두고, 이를 초과한 과거 대화 기록은 자동으로 잘라내어 버린다.
- **스펙 및 수식**: `prompt_budget = n_ctx - reserved_generation - safety_margin`
  - VRAM 8GB 환경에서 최대 성능으로 오프라인 구동 시, Qwen 2.5 Instruct 7B 모델 튜닝 예시: `n_ctx=4096`, `reserved_generation=1024`, `safety_margin=32` 이면 `prompt_budget`은 3040 토큰으로 제한된다.
  - 파이썬의 `deque(maxlen=K_TURNS * 2)`를 사용하여 대화 1턴(User-Assistant 쌍) 단위로 슬라이딩 윈도우를 유지하며, `all-MiniLM-L6-v2` 토크나이저로 정확한 토큰을 캐싱하여 재인코딩 오버헤드를 막는다.
- **한계**: 윈도우 바깥으로 밀려난 과거 정보(예: 사용자의 이름이 Bob이라는 첫 턴 정보)는 영구 유실된다.

#### ② 자동 요약 버퍼 (Auto-Summarization Buffer)
- **개념**: 대화가 특정 임계치에 도달할 때마다 이전 대화 내용을 [[LLM]]을 사용하여 요약본으로 점진적 압축 및 갱신해 나가는 기법이다.
- **비유와 한계 (JPEG 손실 압축)**: 
  - 대화 이력이 압축될 때 이름이나 선호도 등 큰 틀은 유지되지만, 구체적인 세부 정보(예: S3 버킷 `s3://proj-847-staging-west`, 포트 `9473`, 빌드 플래그 `--env=qa-cluster-3`, SSH 별칭 `devbox-7b`, 팀 태그 `@chen-review-squad` 등)는 요약 과정(lost in distillation)에서 유실된다.
  - 용량이 꽉 차면 쓰는 도중 잘리는 **조용한 잘림(Silent Truncation)**이 발생하며, 누락된 정보에 대해 질문받으면 그럴듯하게 오답을 꾸며내는 **자신감 넘치는 작화(Confident Confabulation/Hallucination)** 현상을 유발한다.
- **튜닝**: 일관된 서식 출력을 위해 온도를 매우 낮게(`temperature=0.1`) 제어하고, `USER PROFILE`, `CONVERSATION TOPICS` 등의 명확한 구조화 프롬프트를 사용하여 이름 보존 규칙 등을 강제한다.

#### ③ 벡터 메모리 (Vector Memory)
- **개념**: 대화 내용이나 단편 정보를 일정 청크 단위로 쪼개어 임베딩한 후, 벡터 데이터베이스에 저장하고 의미론적 유사도 검색(Semantic Search)을 통해 관련 맥락을 인출한다.
- **구조 (도서관 비유)**: 필요할 때 인덱스를 보고 책의 한 문단만 읽는 구조다. 의미론적 검색을 담당하는 Dense Vector(밀집) 검색(예: ChromaDB + `all-MiniLM-L6-v2`)과 특정 식별자나 고유 키워드를 정확히 잡는 Sparse Vector(희소) 검색(BM25)을 결합하고, 크로스 인코더(Cross-Encoder, 예: `ms-marco-MiniLM-L-6-v2`) 리랭커를 배치하여 연관도 점수를 측정하는 [[하이브리드 RAG]] 파이프라인으로 튜닝한다.
- **인덱싱 전략**: 사용자의 질문과 AI의 답변을 따로 저장하면 의미 맥락이 손실되므로, 반드시 **상호작용 쌍(Interaction Pair - `User: {q}\nAssistant: {a}`)** 단위로 묶어서 저장한다.
- **한계**: 두 정보가 다리로 연결되어 추론되어야 하는 멀티홉(Multi-Hop) 관계 추론(예: 'Alice -> sister_of -> Bob', 'Bob -> works_at -> Google' 상황에서 'Alice의 가족 중 IT 분야에 일하는 사람이 있는가?'의 탐색)은 벡터의 단순 거리 측정만으로는 해결할 수 없다.

#### ④ 지식 그래프 메모리 (Knowledge-Graph Memory)
- **개념**: 정보를 개체(Node)와 개체 간의 의미론적 관계(Edge)로 추출하여 트리플렛(Triplet, 예: `Subject --[Relation]--> Object`) 형태로 데이터베이스(in-memory의 경우 `networkx`, 프로덕션은 Neo4j)에 적재하고 그래프 쿼리로 인출한다.
- **특징 (도시 지도 비유)**: 특정 노드에서 출발하여 연결선(edge)을 타고 다른 노드로 나아가는 구조화된 탐색(graph traversal)을 지원한다. BFS(너비 우선 탐색)를 활용해 최대 N홉(`max_depth=2`)까지의 경로를 수집하여 결정론적이고 설명 가능한 멀티홉 추론을 수행한다.
- **튜닝**: 질문 쿼리에서 추출한 관계 힌트(`relation_hints`) 매칭을 기준으로 트리플렛에 우선순위 가중치를 주어 정렬하고, 추출 시 `TRIPLET_EXTRACTION_PROMPT` 규칙을 강제하여 일반 상식이나 단순 질문은 그래프에 적재되지 않도록 필터링한다.

#### ⑤ 계층형 자체 관리 메모리 (Hierarchical Self-Managed Memory)
- **개념**: 모델에게 자신의 메모리 상태를 조작할 수 있는 도구(Tools)를 부여하여, 모델이 자율적 판단 하에 메모리를 관리하고 인출하도록 설계하는 에이전틱 메모리 아키텍처다.
- **메모리 계층 구조 (OS 비유)**:
  - **핵심 메모리(Core Memory)**: 매 프롬프트에 직접 주입되는 항상 노출된 블록(RAM 역할). `user_profile` (이름, 나이, 취향 등)과 `assistant_persona` (스타일, 역할 등) 딕셔너리로 구성된다.
  - **보관용 메모리(Archival Memory)**: 과거의 대화 및 모든 사건이 임베딩되어 저장되는 데이터베이스(디스크 역할).
- **3대 자율 제어 도구**:
  1. `core_memory_update(section, key, value)`: 핵심 메모리의 특정 키값을 덮어쓰거나 갱신.
  2. `archival_memory_insert(content)`: 영구 보관이 필요한 사실을 아카이브에 적재.
  3. `archival_memory_search(query)`: 아카이브에서 유사한 과거 데이터를 의미론적 검색으로 인출.
- **하트비트 루프(Heartbeat Loop)**: 사용자의 입력이 들어오면 모델이 도구 호출 결과를 받아 다음 단계를 스스로 결정하는 루프가 가동된다. 가변적 호출 비용(단순 질문 1회, 프로필 업데이트 2회, 보관 요약 3회 등)이 발생하므로 무한 루프 차단선(Safety Valve, 예: `max_llm_calls = 10`)이 필수적이다.
- **동작 가이드**: "SAVE BEFORE RESPONDING(답변 전 저장)" 규칙을 시스템 템플릿에 엄격히 정의하여 정보가 저장되지 않고 답변으로 유실되는 것을 방지하고, 독립된 호출의 경우 JSON Array로 일괄 전송(Batch), 의존성이 있을 때는 순차 처리(Sequential)하도록 프로그래밍한다.

---

### 2. 메모리 아키텍처 성능 및 특성 비교표

| 메커니즘 | 컴퓨터 하드웨어 비유 | 장점 | 단점 | 적합한 사용 사례 |
| :--- | :--- | :--- | :--- | :--- |
| **슬라이딩 윈도우** | L1/L2 캐시 | 구현이 간단함, 예측 가능한 비용 | 장기 기억 소실 | 단발성 세션, 단순 Q&A |
| **자동 요약** | 가상 메모리 압축 | 적은 토큰으로 전체 흐름 유지 | 세부 지표 및 팩트 유실, Confident Confabulation | 장기 잡담, 비정형 회고록 |
| **벡터 메모리** | 하드디스크 (색인 검색) | 대규모 데이터 연상 검색 우수, 팩트의 100% 정밀도 보존 | 멀티홉 관계 추론 취약 | 매뉴얼 검색, 장기 성향 기억 |
| **지식 그래프** | 구조화된 SQL DB | 높은 정밀도, 투명한 추론 경로, 멀티홉 추론 성공 | 비정형 지식의 적재 비용, 시맨틱 부채 | 복잡한 관계망 추적, 엔터프라이즈 도메인 합의 |
| **계층형 자체 관리** | 운영체제(OS)의 가상 기억장치 관리 | 고도의 자율성, 능동적/동적 정보 업데이트, 중요도 구분 | 가변적 호출 비용(비싼 [[LLM]] API Tax), 구현 복잡도 | 복잡한 자율 에이전트, 개인화 비서 |

---

### 3. 지식 그래프 엔터프라이즈 도입의 실무와 극복 과제

지식 그래프는 의미론적 데이터 조회와 관계망 인출의 최전선에 서 있지만, 구축과 유지에는 고도의 운영적 성찰과 규율이 필요하다.

1. **시맨틱 부채(Semantic Debt)와 의사결정 증발**:
   - 데이터 모델(노드와 엣지의 정의)을 구축한 담당자가 퇴사하면 설계 논거(Rationale)가 증발하고, 점차 시스템 간 시맨틱이 불일치(Drift into inconsistency)하게 된다.
   - **대책**: 모델 설계 시 어떤 이유로 특정 단어를 엔터티로 두었는지 기록하는 **경량 의사 결정 기록(Lightweight Decision Records)** 문서화를 의무화한다.
2. **조직 규모별 차별화 전략**:
   - **스타트업 (규율 중심)**: 레거시가 없는 조기에 시맨틱 일관성(Consistency)과 도메인 모델에 투자하여, 복리로 이익을 주는 강력한 구조적 이점을 선점한다.
   - **대기업 (현실주의 중심)**: 원대한 "전사 통합 온톨로지"를 강요하는 만능 모델(One-size-fits-all)은 조직적 저항을 부른다. 성과가 확실한 **코어 영역에서의 시맨틱 합의**를 먼저 세우고, 나머지 영역은 명시적인 매핑(Mapping)으로 설계하는 현실주의적 전략을 취해야 한다.
3. **기회비용 및 타당성 평가**:
   - "이 지식 그래프를 구축하지 않는다면 어떻게 되는가?"라는 질문을 먼저 던져야 한다. 비즈니스 흐름 상에서 불필요하게 낭비되는 시간과 시맨틱 세금(Semantic Tax)이 실제 임계치를 넘었을 때에만 도입을 결정해야 한다.
4. **휴먼 인 더 루프(Human-in-the-loop) 가이드라인**:
   - [[LLM]]은 트리플렛을 추출하고 쿼리를 생성하는 훌륭한 가속기(Assistant)일 뿐, 최종 신뢰도를 책임지는 주체가 아니다. 생성된 데이터는 필터링을 거치고 사람이 최종 검증 및 정제(Sanitize)하여 그래프를 보존해야 한다.

### 5대 메모리 모델별 구체적 아키텍처 및 스펙

1. **슬라이딩 윈도우 버퍼 (Sliding Window Buffer)**:
   - **특징**: 컨베이어 벨트 방식. 토큰 제한 범위(`n_ctx=4096`) 내에서 가장 최신의 대화 기록만 보존. (출처: 밑바닥부터 만드는 [[LLM]] 메모리 #1. 슬라이딩 윈도우 버퍼.md)
   - **VRAM/모델 튜닝 파라미터**: Qwen 2.5 7B Instruct 모델 구동 시 `n_gpu_layers=-1` 옵션으로 8GB VRAM 하드웨어 예산 한도 내에서 동작 최적화.

2. **자동 요약 버퍼 (Auto-Summarization Buffer)**:
   - **특징**: 전체 이력을 압축하여 요약본 문자열로 프롬프트 주입. JPEG 손실 압축과 같아 미세한 팩트(예: 포트 번호) 유실 가능. (출처: 밑바닥부터 만드는 [[LLM]] 메모리 #2. 자동 요약 버퍼.md)
   - **설정**: 요약의 일관성 및 무한 루프 예방을 위해 모델의 온도(`temperature`) 파라미터를 0.1로 고정하여 튜닝.

3. **벡터 메모리 (Vector Memory)**:
   - **특징**: DB 도서관 방식. 의미론적 유사도를 기준으로 한 청크 [[RAG]] 조회. (출처: 밑바닥부터 만드는 [[LLM]] 메모리 #3. 벡터 메모리.md)
   - **구조**: Dense 벡터 인덱스(ChromaDB)와 Sparse 키워드 인덱스(rank_bm25)를 결합한 [[하이브리드 RAG]]에 교차 인코더(Cross-Encoder) 기반 리랭커(ms-marco-MiniLM-L-6-v2)를 얹어 최종 상위 K개 문서를 리랭킹 수집하는 파이프라인.

4. **지식 그래프 메모리 (Knowledge Graph Memory)**:
   - **특징**: 도시 지도 방식. 정보를 `(Subject) --[Relation]--> (Object)`의 트리플렛으로 구조화하여 그래프를 탐색. (출처: 밑바닥부터 만드는 [[LLM]] 메모리 #4. 지식 그래프 메모리.md)
   - **탐색**: 시작점 노드를 기준으로 BFS(너비 우선 탐색)를 실행하여 최대 `max_depth` 범위 내의 관련 엣지를 모두 수집한 뒤, 관계 힌트(Relation hints) 매칭 점수를 기준으로 정렬하여 [[LLM]]에 최종 텍스트 컨텍스트로 제공.

5. **계층형 자체 관리 메모리 (Hierarchical Self-Managed Memory)**:
   - **특징**: 운영체제(OS) 방식. 항상 노출되는 고속 소용량 RAM '핵심 메모리(Core Memory)'와 영구 대용량 디스크 '보관용 메모리(Archival Memory)'로 계층을 이원화. (출처: 밑바닥부터 만드는 [[LLM]] 메모리 #5. 계층형 자체 관리 메모리.md)
   - **루프 제어**: 1턴에 1회 실행하는 단순 파이프라인 대신, 모델이 자율적으로 도구 호출을 중단하고 응답을 출력할 때까지 동작을 이어가는 하트비트 루프 구동. 무한 루프 방지를 위해 `max_llm_calls = 10` 안전 차단 장치 설치.

## 예시

- **엔터프라이즈 통합 고객 관리**: 사용자의 현재 신체 정보와 즉각적 운동 스펙은 **핵심 메모리**에 상주시킨다. 반면, 과거의 진료 데이터나 금융 거래 이력은 **보관용 벡터 DB**에 두고 검색한다. 이때 각 고객의 거래 형태 정의("Active User"의 조건 등)는 회사 지식 그래프의 **시맨틱 기준 데이터(Semantic Reference Data)**에 닻을 내리게 하여, 여러 부서의 AI 비서들이 "고객"에 대해 일관되게 해석하고 답할 수 있게 설계한다.

### 각 메모리 핵심 파이썬 코드 구현 스키마

#### ① 슬라이딩 윈도우 토큰 카운터
```python
from collections import deque

def build_window(history: deque, max_tokens: int, tokenizer) -> list:
    # FIFO 큐에서 토큰 한도를 초과하지 않을 때까지 역순으로 대화를 꺼내어 윈도우 조립
    current_tokens = 0
    window = []
    for msg in reversed(history):
        msg_tokens = len(tokenizer.encode(msg['content']))
        if current_tokens + msg_tokens > max_tokens:
            break
        window.insert(0, msg)
        current_tokens += msg_tokens
    return window
```

#### ② 자동 요약 및 팩트 추출
```python
SUMMARIZATION_SYSTEM_PROMPT = """
Analyze the conversation. Update the current summary to preserve:
1. USER PROFILE: Critical identity data.
2. CONVERSATION TOPICS: Key points discussed.
3. PREFERENCES/REQUESTS: Specific directives from the user.
Keep the output compact. Do not invent facts.
"""
```

#### ③ 벡터 메모리의 Interaction Pair 저장 구조
```python
def save_interaction(vector_db, user_query: str, bot_response: str):
    # 쿼리와 답변을 단일 Interaction Pair 텍스트 블록으로 패키징하여 적재
    interaction_block = f"User: {user_query}\nAssistant: {bot_response}"
    vector_db.add(document=interaction_block)
```

#### ④ 지식 그래프 NetworkX 탐색 및 우선순위 정렬
```python
import networkx as nx

def get_related_triplets(graph: nx.DiGraph, entities: list, relation_hints: list = None, max_depth: int = 2) -> list:
    triplets = []
    frontier = [e.lower() for e in entities if graph.has_node(e.lower())]
    visited = set()
    
    for _ in range(max_depth):
        next_frontier = []
        for node in frontier:
            # outgoing & incoming edges
            for u, v, data in graph.out_edges(node, data=True):
                edge = (u, data['relation'], v)
                if edge not in visited:
                    visited.add(edge)
                    triplets.append(edge)
                    next_frontier.append(v)
        frontier = next_frontier
        
    # 관계 힌트를 활용한 Relevance 정렬
    if relation_hints and triplets:
        triplets.sort(key=lambda t: 2 if t[1] in relation_hints else (1 if any(h in t[1] for h in relation_hints) else 0), reverse=True)
    return triplets
```

#### ⑤ 계층형 자체 관리 메모리 제어 루프
```python
def answer_heartbeat(user_text: str, model, core_memory: dict, archival_store) -> str:
    history = [{"role": "user", "content": user_text}]
    for call_count in range(10): # max_llm_calls = 10 안전 장치
        prompt = build_system_prompt(core_memory)
        response = model.generate(prompt + history)
        tool_calls = parse_tool_calls(response)
        
        if not tool_calls:
            return response # 최종 텍스트 출력 반환
            
        for tool in tool_calls:
            result = execute_tool(tool, core_memory, archival_store)
            history.append({"role": "assistant", "content": json.dumps(tool)})
            history.append({"role": "tool", "content": f"Tool Output: {result}"})
    return "Error: Maximum LLM calls exceeded."
```

## 충돌
- **에이전트 자율성 vs 인간의 검증 책무**:
  - [[LLM]]은 지식 그래프 쿼리를 작성하고 모순 관계를 추천해 주는 훌륭한 가속기(어시스턴트)일 뿐 책임을 지는 주체가 아니다.
  - *해결책*: 생성된 트리플렛과 매핑 결과를 필터링 없이 메모리에 흘려보내면 팩트가 무너지므로, 인간이 최종 결과를 검토, 정제(Sanitize), 개선하는 휴먼 인 더 루프(Human-in-the-loop) 가이드라인을 강제한다.

## 관련 노트
- [[Context Engineering]]
- [[Agent Harness]]
- [[GBrain]]
- [[MEMORY.md 운영 원칙]]
- [[Model Context Protocol]]
- [[Claude Code 스킬 관리]]
- [[AI 에이전트 아키텍처 완전 가이드]]
- [[RAG 아키텍처 선택]]

## 출처
- raw/밑바닥부터 만드는 [[LLM]] 메모리 #1. 슬라이딩 윈도우 버퍼.md
- raw/밑바닥부터 만드는 [[LLM]] 메모리 #2. 자동 요약 버퍼.md
- raw/밑바닥부터 만드는 [[LLM]] 메모리 #3. 벡터 메모리.md
- raw/밑바닥부터 만드는 [[LLM]] 메모리 #4. 지식 그래프 메모리.md
- raw/밑바닥부터 만드는 [[LLM]] 메모리 #5. 계층형 자체 관리 메모리.md
- raw/지식 그래프, 진정한 게임 체인저... 그러나 구축과 유지가 극도로 어려운 이유.md
- [노트북을 망가뜨리지 않으려고 라즈베리 파이에서 AI 에이전트 하네스를 구동한 후기](file:///Users/railscraft/Obsidian/raw/%EB%85%B8%ED%8A%B8%EB%B6%81%EC%9D%84%20%EB%A7%9D%EA%B0%80%EB%9C%A8%EB%A6%AC%EC%A7%80%20%EC%95%8A%EC%9C%BC%EB%A0%A4%EA%B3%A0%20%EB%9D%BC%EC%A6%88%EB%B2%A0%EB%A6%AC%20%ED%8C%8C%EC%9D%B4%EC%97%90%EC%84%9C%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%ED%95%98%EB%84%A4%EC%8A%A4%EB%A5%BC%20%EA%B5%AC%EB%8F%99%ED%95%9C%20%ED%9B%84%EA%B8%B0.md)
- [지난번 이런 일이 있었을 때, 수많은 평범한 사람들이 백만장자가 되었다](file:///Users/railscraft/Obsidian/raw/%EC%A7%80%EB%82%9C%EB%B2%88%20%EC%9D%B4%EB%9F%B0%20%EC%9D%BC%EC%9D%B4%20%EC%9E%88%EC%97%88%EC%9D%84%20%EB%95%8C%2C%20%EC%88%98%EB%A7%8E%EC%9D%80%20%ED%8F%89%EB%B2%94%ED%95%9C%20%EC%82%AC%EB%9E%8C%EB%93%A4%EC%9D%B4%20%EB%B0%B1%EB%A7%8C%EC%9E%A5%EC%9E%90%EA%B0%80%20%EB%90%98%EC%97%88%EB%8B%A4.md)
- [2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%20Claude%20Code%20%EC%84%A4%EC%A0%95%EC%97%90%20%EA%BC%AD%20%ED%95%84%EC%9A%94%ED%95%9C%208%EA%B0%80%EC%A7%80%20%ED%95%B5%EC%8B%AC%20%EC%8A%A4%ED%82%AC.md)
- [Claude Code 프로젝트 효율을 극대화하는 MEMORY.md 가이드](file:///Users/railscraft/Obsidian/raw/Claude%20Code%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%9A%A8%EC%9C%A8%EC%9D%84%20%EA%B7%B9%EB%8C%80%ED%99%94%ED%95%98%EB%8A%94%20MEMORY.md%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [AI와 오픈소스로 300개 이상의 팟캐스트를 RPG 게임으로 만든 이야기 - LennyRPG 8시간 개발기](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%EB%A1%9C%20300%EA%B0%9C%20%EC%9D%B4%EC%83%81%EC%9D%98%20%ED%8C%9F%EC%BA%90%EC%8A%A4%ED%8A%B8%EB%A5%BC%20RPG%20%EA%B2%8C%EC%9E%84%EC%9C%BC%EB%A1%9C%20%EB%A7%8C%EB%93%A0%20%EC%9D%B4%EC%95%BC%EA%B8%B0%20-%20LennyRPG%208%EC%8B%9C%EA%B0%84%20%EA%B0%9C%EB%B0%9C%EA%B8%B0.md)
- [CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다](file:///Users/railscraft/Obsidian/raw/CLAUDE.md%20%ED%8C%8C%EC%9D%BC%20%ED%95%98%EB%82%98%EA%B0%80%20%EB%B0%94%EC%9D%B4%EB%9F%B4%EC%9D%84%20%ED%83%94%EB%8B%A4.%20%EC%9D%B4%EC%9C%A0%EB%8A%94%20%EB%AF%BC%EB%A7%9D%ED%95%A0%20%EC%A0%95%EB%8F%84%EB%A1%9C%20%EB%8B%A8%EC%88%9C%ED%95%98%EB%8B%A4.md)
- [Karpathy의 [[LLM]] Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번](file:///Users/railscraft/Obsidian/raw/Karpathy%EC%9D%98%20[[LLM]]%20Wiki%EB%A5%BC%20%EB%91%90%20%EB%B2%88%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.%20%EC%BD%94%EB%93%9C%EB%A1%9C%20%ED%95%9C%20%EB%B2%88%2C%20%EB%8B%A8%EC%9D%BC%20.md%EB%A1%9C%20%ED%95%9C%20%EB%B2%88.md)
- [AI 개발자가 반드시 알아야 할 9가지 [[RAG]] 아키텍처 - 실무 예제로 배우는 완전 가이드](file:///Users/railscraft/Obsidian/raw/AI%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80%20%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20[[RAG]]%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20-%20%EC%8B%A4%EB%AC%B4%20%EC%98%88%EC%A0%9C%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 [[TurboQuant]], 애플 실리콘 상륙](file:///Users/railscraft/Obsidian/raw/5%EB%B0%B0%20%EC%A0%81%EC%9D%80%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A1%9C%20%EB%A7%A5%EC%97%90%EC%84%9C%2032B%20%EB%AA%A8%EB%8D%B8%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20%EA%B5%AC%EA%B8%80%20[[TurboQuant]]%2C%20%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%83%81%EB%A5%99.md)
- [1인 개발자와 소규모 팀을 위한 주말 완성 디자인 시스템 구축법](file:///Users/railscraft/Obsidian/raw/1%EC%9D%B8%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%99%80%20%EC%86%8C%EA%B7%9C%EB%AA%A8%20%ED%8C%80%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%A3%BC%EB%A7%90%20%EC%99%84%EC%84%B1%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%EB%B2%95.md)
- [애플 실리콘을 위한 로컬 AI 스택: 한 차원 진화한 성능과 최적의 구축 가이드](file:///Users/railscraft/Obsidian/raw/%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EB%A1%9C%EC%BB%AC%20AI%20%EC%8A%A4%ED%83%9D%3A%20%ED%95%9C%20%EC%B0%A8%EC%9B%90%20%EC%A7%84%ED%99%94%ED%95%9C%20%EC%84%B1%EB%8A%A5%EA%B3%BC%20%EC%B5%9C%EC%A0%81%EC%9D%98%20%EA%B5%AC%EC%B6%95%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [How to write a DESIGN.md file Claude can actually use-ko](file:///Users/railscraft/Obsidian/raw/How%20to%20write%20a%20DESIGN.md%20file%20Claude%20can%20actually%20use-ko.md)
- [하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유](file:///Users/railscraft/Obsidian/raw/%ED%95%98%EB%84%A4%EC%8A%A4%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20-%2065%EC%A4%84%20CLAUDE.md%EA%B0%80%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20%EC%8A%A4%ED%82%AC%EC%9D%B8%20%EC%9D%B4%EC%9C%A0.md)
- [우리가 피그마 없이 제품을 배포하는 방법](file:///Users/railscraft/Obsidian/raw/%EC%9A%B0%EB%A6%AC%EA%B0%80%20%ED%94%BC%EA%B7%B8%EB%A7%88%20%EC%97%86%EC%9D%B4%20%EC%A0%9C%ED%92%88%EC%9D%84%20%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95.md)
- [2026년에 실제로 효과가 있는 나의 AI 디자인 워크플로우](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%EC%97%90%20%EC%8B%A4%EC%A0%9C%EB%A1%9C%20%ED%9A%A8%EA%B3%BC%EA%B0%80%20%EC%9E%88%EB%8A%94%20%EB%82%98%EC%9D%98%20AI%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.md)
- [DESIGN.md 워크플로우. [[Google Stitch]]와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko](file:///Users/railscraft/Obsidian/raw/DESIGN.md%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.%20Google%20Stitch%EC%99%80%20Claude%20Code%EA%B0%80%20%EB%94%94%EC%9E%90%EC%9D%B8-%EC%BD%94%EB%93%9C%20%ED%95%B8%EB%93%9C%EC%98%A4%ED%94%84%EB%A5%BC%20%EC%A1%B0%EC%9A%A9%ED%9E%88%20%EB%B0%94%EA%BE%BC%20%EB%B0%A9%EB%B2%95-ko.md)
- [모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션](file:///Users/railscraft/Obsidian/raw/%EB%AA%A8%EB%93%A0%20DESIGN.md%EC%97%90%20%EA%BC%AD%20%EB%93%A4%EC%96%B4%EA%B0%80%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20%EC%84%B9%EC%85%98.md)
- [DESIGN.md 워크플로 - [[Google Stitch]]와 Claude Code가 바꾼 디자인 개발 협업](file:///Users/railscraft/Obsidian/raw/DESIGN.md%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%20-%20Google%20Stitch%EC%99%80%20Claude%20Code%EA%B0%80%20%EB%B0%94%EA%BE%BC%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EA%B0%9C%EB%B0%9C%20%ED%98%91%EC%97%85.md)

