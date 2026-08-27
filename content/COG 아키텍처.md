지정하신 소스 문서(`raw/Build a Second Brain in 15 Minutes Just Markdown, Git, and an AI Agent.md`, `raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md`)를 분석하고, [COG 아키텍처](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/COG%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98.md)에 대한 고품질 한국어 위키 노트를 작성 완료했습니다.

---

### 주요 반영 사항

1. **Frontmatter 규격 준수**:
   - `type: concept`, `status: draft`, `sources`, `created/updated: 2026-08-28` 등의 필수 필드와 태그(`llm`, `agent`, `second-brain`, `obsidian`, `git`) 적용.

2. **구조화된 템플릿 구현**:
   - `## 한 줄 정의`: Cognition + Obsidian + Git 기반의 DB/서버 없는 AI 에이전트 지식 관리 시스템으로 명확 정의.
   - `## 핵심 요지`: Head-Worker 오케스트레이션, 컨텍스트 토큰 절감(`/tmp/` 저장 방식), 성찰 루프(Reflection Loop), 데이터-프레임워크 계층 격리 수록.
   - `## 상세`: 3대 구성 요소, Head(Claude Opus) / Worker(Claude Sonnet 6개) 오케스트레이션 구조, 브레인덤프/일일 브리핑/주간 리뷰/월간 통합 4단계 생애주기 명시.
   - `## 예시`: 브레인덤프 태스크 변환 시나리오, 워커 에이전트 다중 실행 및 토큰 절감 워크플로우, 커스텀 스킬 마크다운(`SKILL.md`) 작성 예시 포함.
   - `## 충돌`: '자가 진화(Self-evolving)' 마케팅 용어와 실제 에이전트 성찰 루프(Reflection loop) 워크플로우 간의 기술적 차이에 대한 객관적 비교 명시.
   - `## 관련 노트`: `[[AI 세컨드 브레인 아키텍처]]`, `[[리드 에이전트 오케스트레이션]]`, `[[에이전트 스킬]]`, `[[로컬 LLM 연동 에이전트 CLI 설정]]`, `[[AGENTS md]]` 등과 상호 연결.

3. **검증 가능한 지표 및 출처 표기**:
   - 온보딩 2분, 수동 유지보수 없는 120회 이상의 브레인덤프, 7일 이내 최신성 브리핑, `/tmp/` 경로 인출 메커니즘 등 구체 수치 및 지표마다 소스 파일 표기 적용.