요청하신 **ReAct 패턴** (`workflow` 유형)에 대한 고품질의 한국어 위키 노트를 작성하여 `llm-wiki/wiki/ReAct 패턴.md`에 성공적으로 반영했습니다.

---

### 📝 생성된 노트 개요 (`wiki/ReAct 패턴.md`)

- **Frontmatter**:
  - `type`: `workflow`
  - `status`: `draft`
  - `core`: `false`
  - `tags`: `['llm', 'agent', 'react-pattern', 'workflow']`
  - `aliases`: `['ReAct', 'Reasoning and Acting', '추론 및 실행 패턴']`
  - `sources`: 지정된 소스 파일 3종 포함
  - `created`: `2026-08-27` / `updated`: `2026-08-27`
- **한 줄 정의**: LLM이 추론(Thought), 행동(Action), 관찰(Observation)을 교차 실행(Interleaving)하며 자율적으로 문제를 해결하는 핵심 에이전트 워크플로우 패턴으로 정의.
- **핵심 요지**: 
  - Yao 등(2023 ICLR) 메커니즘 설명.
  - 순수 계획(Pure Planning)과 순수 실행(Pure Execution) 사이에서의 절묘한 궤도 수정 및 적응성.
  - 상용 코딩 에이전트(`Claude Code`)에서의 **1.6% ReAct 루프 vs 98.4% 오케스트레이션 하네스** 비중 분석.
  - 무한 루프 예산 소진 방지를 위한 가드레일 제어.
- **상세 분석**:
  - ReAct 3단계 메커니즘 (Thought → Action → Observation).
  - 순수 계획/순수 실행 대비 우위성.
  - 1.6% 루프와 98.4% 하네스 시스템(컨텍스트 압축, `Sonnet 4.6` 분류기 기반 24가지 safety 검증 권한 시스템, 메모리 계층, MCP/스킬 동적 연동).
- **구체적 코드 예시 & 실무 시나리오**:
  - **예시 1**: LangChain & OpenAI(`gpt-4o`) 기반 서버 지연 시간 측정 및 알림 ReAct 에이전트 Python 코드.
  - **예시 2**: `claude-sonnet-4-6` 기반 경량 `little_claude.py` ReAct 루프 및 `parse_amount.py` 버그 수정 6턴 실무 트레이스(토큰 변화, $0.0555 소모, pytest 검증 연동).
- **충돌 분석**:
  - 단순 에이전트의 턴 수 엄격 제한(5~6회) 주장과 상용 장기 에이전트의 60턴 이상 수행을 위한 오케스트레이션 하네스(컨텍스트 압축/메모리 계층) 필요성 간의 강조점 차이 명시.
- **관련 위키 링크**: `[[에이전트 워크플로우 패턴]]`, `[[Claude Code]]`, `[[코딩 에이전트]]`, `[[에이전트형 AI]]`, `[[다중 에이전트 스웜 시스템]]`, `[[AI 환각 현상]]` 연동 완료.

파일 경로: [`scratch/llm-wiki/wiki/ReAct 패턴.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/ReAct%20%ED%8C%A8%ED%84%B4.md)