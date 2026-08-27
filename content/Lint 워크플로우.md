지정해주신 소스 문서들을 철저히 분석하고 프론트매터 스키마 및 작성 규칙에 맞춰 **Lint 워크플로우** 위키 노트를 작성·저장하였습니다.

새로 작성된 위키 노트는 `/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Lint 워크플로우.md`에 위치해 있습니다.

---

### [작성된 위키 노트 내용 요약]

- **문서 제목**: `Lint 워크플로우`
- **유형**: `workflow` (상태: `draft`)
- **주요 구성 요소**:
  1. **한 줄 정의**: LLM Wiki 지식 베이스의 건강성을 유지하기 위해 AI 에이전트가 문서 간 정보 모순, 시효 만료 정보, 고아 페이지, 누락된 상호 참조 및 용어 불일치를 스캔하고 자동 정정하는 워크플로우.
  2. **핵심 요지**: 지식 베이스용 맞춤법 검사기(Spell-check) 역할, 지식 유지 잡무 비용 ~0 감소, 10회 Ingest 누적 후 주기적 실행 권장, 안전성 제약 규정 표기.
  3. **상세 분석**: 5대 주요 점검 항목(Contradiction Check, Stale Claims Check, Orphan & Broken Links Check, Missing Cross-References, Inconsistent Terminology) 분석 및 LLM Wiki 3대 워크플로우 비교 표 제공.
  4. **실전 예시**: `Lint the wiki` 프롬프트 명령어 흐름 및 제품 기능명 변경에 따른 5일차 기술 문서 작성자의 실전 사용 시나리오 작성.
  5. **충돌 섹션**: 에이전트의 완전 자율 수정/삭제와 사용자 승인 절차 간의 충돌 및 해결 방안(스키마 제약 및 확인 보고 방식) 기술.
  6. **관련 노트 연결**: [[LLM Wiki]], [[Ingest 워크플로우]], [[수집 쿼리 린트 워크플로우]], [[CLAUDE.md 스키마]], [[Obsidian Linter]] 연동.