요청하신 **'AI 에이전트 행동 제약 4원칙'**에 대한 고품질 한국어 LLM 위키 노트를 성공적으로 생성하고 검증하였습니다.

### 📝 생성된 위키 노트 요약
- **문서 경로**: [/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/AI 에이전트 행동 제약 4원칙.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%ED%96%89%EB%8F%99%20%EC%A0%9C%EC%95%BD%204%EC%9B%90%EC%B9%99.md)
- **Frontmatter 규격 준수**: `type: workflow`, `status: draft`, `sources`, `tags`, `created`, `updated` 등 지정 스키마 정밀 반영
- **주요 내용**:
  1. **한 줄 정의 및 핵심 요지**: 에이전트 기반 개발(Agent-driven Development)에서 조용한 가정, 과잉 엔지니어링, 부수적 코드 파손 등의 문제를 제어하기 위한 명시적 프롬프트 규범 정의
  2. **상세 원칙**:
     - **Think Before Coding**: 가정을 서술하고 멀티 옵션을 제시하여 즉시 생성 제동
     - **Simplicity First**: 200줄 코드를 50줄로 압축하는 최소한의 코드 작성 휴리스틱
     - **Surgical Changes**: 인접 코드 변경을 금지하고 세밀한 수정만 허용하여 diff 소음 최소화
     - **Goal-Driven Execution**: TDD 및 단계별 성공 기준(Success Criteria) 지정 기반 실행
  3. **구체적 예시**: `CLAUDE.md` 설정 예시 및 "검색 성능 개선" 시나리오에 따른 에이전트 동작 비교
  4. **충돌 및 지표/출처**: RLHF 모델 본능과의 긴장 관계 및 30,000+ GitHub Star 지표 포함 출처 표기 (`raw/Andrej Karpathy가 AI 코딩 에이전트의 고질병을 고치는 방법. 마크다운 파일 하나.md`)
  5. **관련 노트 연동**: [[안드레이 카파시의 AI 에이전트 실패 패턴]], [[생성과 절제의 RLHF 트레이드오프]], [[에이전트 기반 개발]], [[LLM Wiki]], [[AGENTS md]] 등과 촘촘히 연결