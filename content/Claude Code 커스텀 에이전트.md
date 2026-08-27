요청하신 **Claude Code 커스텀 에이전트** 위키 노트를 지정된 작성 원칙 및 템플릿 표준에 맞춰 생성을 완료하였습니다.

### 작업 요약

1. **노트 생성 위치**: `llm-wiki/wiki/Claude Code 커스텀 에이전트.md`
2. **Frontmatter 스키마 준수**:
   - `type: tool`
   - `status: draft`
   - `core: false`
   - `tags: ['llm', 'agent', 'claude-code', 'product-design']`
   - `sources: ['raw/Agentic Product Design. 오늘 바로 자동화할 수 있는 5가지 디자인 작업.md']`
   - `created: '2026-08-28'`, `updated: '2026-08-28'`
3. **주요 작성 내용**:
   - **한 줄 정의 및 핵심 요지**: 조직 맞춤형 워크플로우를 마크다운 사양으로 고정하여 표준화된 다단계 작업을 자동화하는 실행 프로그램 및 확장 구조 정리.
   - **상세 내용**:
     1. 잘 만든 에이전트의 4가지 핵심 속성(Intent Alignment, Context Awareness, Tool Orchestration, Explainability) 분석.
     2. CLI 슬래시 명령어 (`/agents`) 및 스코프 관리(`~/.claude/agents/`, `.claude/agents/`) 체계 정리.
     3. 5대 범용 디자인 파이프라인 에이전트(Research Synthesizer, Competitor Intelligence, Problem Definition, Idea Generation, UX Flow Designer)의 입력, 동작 방식, 산출물 상세화.
   - **구체적 예시**:
     - 디렉터리 기반 에이전트 설치 및 CLI 명령어 실행 스크립트.
     - `ux-flow-designer.md` 에이전트 마크다운 스펙 예시 (Mermaid 다이어그램 포함).
     - 12건의 리서치 트랜스크립트 자동 분석 실무 시나리오.
   - **출처 표기 및 검증 지표**: 소스 파일 내 명시된 프로세스 및 구체적 기준 표기 (`raw/Agentic Product Design. 오늘 바로 자동화할 수 있는 5가지 디자인 작업.md`).
   - **충돌 및 한계점**: 커스텀 에이전트 다수 등록 시 컨텍스트 윈도우 소비 증가 및 [[Claude Code 스킬]]과의 역할 중복/우선순위 이슈 서술.
   - **관련 노트 연동**: [[Claude Code]], [[Claude Code 스킬]], [[AI 기반 UX 디스커버리 워크플로우]], [[AI 사용자 리서치 데이터 종합]] 등 연동 링크 추가.