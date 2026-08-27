요청하신 **'AI 에이전트 제어 루프'** 개념에 관한 고품질 위키 노트를 작성 완료하였습니다.

작성된 노트는 `/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/AI 에이전트 제어 루프.md` 경로에 저장되었습니다.

---

### 작성 결과 요약

- **Frontmatter 및 메타데이터 준수**: 지정된 YAML 스키마 (`type: workflow`, `status: draft`, `sources`, 생성/수정일 등)를 완벽히 준수하였습니다.
- **개념 명확화**: RAG(지식 접근 문제), Workflow(결정론적 프로세스 문제)와 대비되는 Agent Loop(동적 제어 문제)의 핵심 차이를 정교하게 구분하고 비교 표를 포함시켰습니다.
- **생산급(Production-ready) 4대 요소 및 가드레일**:
  1. 명시적 구조화 상태(State Schema)
  2. 상태 기반 행동 선택(LLM Policy Router)
  3. 예산 제약(Max steps, Timeout, Cost budget, Retry cap)
  4. 복구 가능성 및 등전성(Durable Checkpoints & Idempotency)
- **구체적인 코드 예시**: `pydantic-ai` 및 `GoogleModel(gemini-2.5-pro)` 기반의 구조화 상태, 타입 검증 출력을 포함한 가드레일 제어 루프 구현체 예시를 포함하였습니다.
- **출처 표기 및 연결**: 수치 및 핵심 제어 루프 공식 문장에 소스 파일 경로(`raw/2026년의 AI 에이전트 실전 가이드-ko.md`)를 표기하였으며, 기존 지식 베이스 내 위키 노트들([[에이전트형 AI]], [[LangGraph 오케스트레이션]], [[ReAct 패턴]], [[오케스트레이터 에이전트]], [[아웃풋 스키마 제약 기법]], [[프롬프트 인젝션 보안 방어]])과 상호 연동되도록 바인딩하였습니다.