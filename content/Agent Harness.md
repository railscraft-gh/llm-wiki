---
type: concept
status: evergreen
core: true
tags:
  - llm
  - agent
  - harness-engineering
  - orchestration
aliases:
  - 에이전트 하네스
sources:
  - raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md
  - raw/99%의 사람보다 더 나은 Harness Engineer를 만드는 법.md
  - raw/하네스 엔지니어링. 다음 모델보다 더 중요한 조용한 코딩 스킬.md
  - raw/아이디어에서 현실 시스템까지 AI 에이전트 구축하기 - 출판형 다듬기.md
  - raw/2026년의 AI 에이전트 실전 가이드-ko.md
  - raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
created: 2026-05-26
updated: 2026-06-07
---

# Agent Harness

## 한 줄 정의

Agent Harness는 stateless LLM을 multi-step task를 수행하는 agent로 바꾸기 위해 모델 바깥에서 상태, 도구, 검증, 복구, 안전을 관리하는 실행 인프라다.

## 핵심 요지

- **실행 환경의 주권**: 좋은 에이전트와 데모형 챗봇의 차이는 모델 자체보다 에이전트의 제어 루프를 통제하고 보호하는 외부 하네스 설계에서 결정된다.
- **제어 문제 해결**: RAG(지식 접근 문제)나 결정론적 워크플로(프로세스 문제)와 달리, 에이전트는 목표와 도구를 쥐고 최적의 경로를 탐색하는 **제어 문제**를 풀며, 하네스는 이 탐색 루프(`Thought -> Action -> Observation -> State Update`)를 중재한다.
- **에이전트 자격 4대 요건**: 명시적/구조화된 **상태(State)** 유지, 상태 기반 **행동 선택(Action Selection)**, 한정된 **예산(Budget)** 통제, 그리고 **장애 복구 및 멱등성(Durable Checkpoints & Idempotency)** 보장이 하네스의 4대 필수 요건이다.

## 상세

### 1. 에이전트 하네스의 4대 아키텍처 필러

신뢰성 있는 프로덕션급 에이전트를 빌드하기 위해 하네스는 다음 네 가지 요구사항을 충족해야 한다:
1. **구조화된 상태 관리**: 단순 대화 기록을 넘어서, 목표 지향적인 상태 스키마(State Object)를 유지해야 한다. 여기에는 전체 목표, 최종 도구 실행 결과, 생각 스크래치패드(Scratchpad), 중간 누적 데이터 등이 포함된다.
2. **상태 기반 행동 선택**: 모델이 자유 텍스트 생성기가 아닌 '정책 엔진(Policy Engine)'으로 작동하도록 통제한다. 스키마에 따라 사용자 소명 요청, 도구 호출, 상태 변경, 종료 결정 등의 행동을 정확히 분기한다.
3. **엄격한 예산(Budgeting) 통제**: 비용 폭주와 무한 루프를 방지하기 위해 최대 스텝 수(`Max Steps`), 전체 실행 타임아웃(`Timeouts`), 비용 상한선(`Cost Limits`), 도구 재시도 제한(`Retries`) 등의 제약 조건을 하네스 엔진 수준에서 관리한다.
4. **멱등성 및 지속성 (Durable Execution)**: 서버가 다운되어도 영속성 저장소(Postgres, Redis 등)에 각 단계 완료 시점의 체크포인트(Durable Checkpoints)를 저장해 중단 지점에서 정확히 재개할 수 있어야 한다. 또한, 도구가 중복 실행되어 부수적 피해를 내지 않도록 모든 외부 호출은 멱등성(Idempotent)을 보장해야 한다.

### 2. 에이전트의 5대 실패(Crash) 모드와 하네스 방어선
- **무한 루프(Infinite loops)**: 동일 상태에서 무의미한 도구 호출을 반복하는 모드. `max_steps` 하드 가이드로 해결한다.
- **도구 오용(Tool misuse)**: 모델이 헛소리로 도구 인자값을 입력하는 모드. Pydantic이나 JSON Schema를 통한 강제 스키마 검증(Validation Loop)을 두고, 오류 발생 시 모델에 피드백을 전달해 스스로 교정하도록 설계한다.
- **비용 폭주(Runaway costs)**: 유료 API의 재시도가 제어되지 않고 소모되는 모드. Exponential backoff 및 retry limit을 지정하고, 임계치가 넘을 시 도구를 정지하는 서킷 브레이커(Circuit Breaker)를 도입한다.
- **비영속성 실행(Non-durable execution)**: 런타임 크래시 시 모든 진행 상황이 유실되는 모드. 각 도구 호출 완료 단계마다 상태를 직렬화해 Checkpoint DB에 백업한다.
- **프롬프트 주입(Prompt injection)**: 악성 외부 입력을 실행해 시스템을 파괴하는 모드. 도구 허용 목록(Allowlist), 실행 전 입력 검사 필터링, 그리고 파괴적 명령어 실행 시 사람의 직접 승인을 강제하는 human-in-the-loop 게이트웨이를 둔다.

### 3. 멀티 에이전트 분할 (Multi-Agent Decomposition) 설계
복잡하거나 대규모 결과물(예: 여러 챕터의 교육 과정, 대형 소프트웨어 빌드)을 단일 프롬프트(One-shot)로 생성하면, 모델의 일관성 상실 및 자기모순에 봉착하기 쉽다. 하네스는 다음을 조율하는 상위 분할 아키텍처를 제공한다:
- **역할 분할 및 상태 연동**: 실라버스 설계, 본문 작성, 퀴즈 설계 등 단계를 쪼개어 각각 독립된 에이전트가 이를 담당하게 하고, 중앙의 상태 스키마(State Object)를 거쳐 데이터를 연속적으로 이행(LangGraph 등 활용)한다.
- **최적 모델 및 도구 매칭**: 무거운 논리 구조를 짤 때는 Reasoning 모델을, 본문 작성에는 저렴하고 신속한 모델을, 최종 문서/슬라이드 렌더링 단계에는 확정적 규칙 코드를 배치하여 효율성을 극대화한다.
- **안티 슬롭(Anti-slop) 검토기 및 휴먼 인 더 루프**: 각 에이전트의 중간 출력물 전환 시점에 AI Slop(기계적인 반복 어구, 상투적 서사)을 걸러내는 자동 검토 필터를 배치하고, 핵심 기획안 수립 직후 사람의 수정과 승인을 거치는 휴먼 승인 게이트(Human Approval Gate)를 하네스 수준에서 제어한다.

## 예시

- coding agent: `AGENTS.md`를 읽고, 필요한 파일만 찾고, 테스트를 돌리고, 실패 시 다시 수정하는 loop 전체가 harness다.
- research agent: 검색 결과를 전부 context에 넣지 않고 memory index와 JIT retrieval로 필요한 근거만 불러온다.
- enterprise agent: pre-tool hook으로 승인 흐름을 넣고 post-tool hook으로 audit log를 남긴다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Harness Engineering]]
- [[Context Engineering]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Meta-Harness]]
- [[Claude.md 운영 원칙]]
- [[AI 산출물 포맷 결정 트리]]
- [[AI 에이전트 런타임 역할 맵]]
- [[Gajae-Code]]
- [[한글 AI 번역투 탐지 및 윤문 워크플로]]
- [[AI 세컨드 브레인]]

