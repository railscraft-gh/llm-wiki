지정하신 작성 원칙, YAML frontmatter 스키마, 기존 노도의 보존 및 신규 정보의 스마트한 결합 지침을 준수하여 **RAG(유형: concept)**에 대한 위키 노트를 성공적으로 작성·업데이트 하였습니다.

해당 위키 노트 파일은 [/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/RAG.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/RAG.md) 에 보관 및 저장되었습니다.

---

### 작성 결과 요약

1. **Frontmatter 및 메타데이터 준수**
   - 기존 `created: 2026-07-29` 및 기존 `aliases`를 완전 보존.
   - `updated: 2026-08-27`, 신규 출처 `sources: ['raw/2026년의 AI 에이전트 실전 가이드-ko.md']` 반영.
   - 관련 태그 (`llm`, `rag`, `search`, `agent`) 정리.

2. **기존 내용과 신규 소스 지식 결합**
   - 기존 RAG 정의 및 핵심 요지를 보존하고, 소스 문서(`2026년의 AI 에이전트 실전 가이드-ko.md`)에 명시된 핵심 차별점(**상태 미유지(Statelessness), 단일 턴 실행, 지식 접근 문제 해결 아키텍처**) 및 Agent/Workflow와의 구분을 상세 명시.
   - 소스 인용 표기 `(raw/2026년의 AI 에이전트 실전 가이드-ko.md)` 준수.

3. **구체적 예시 및 코드 수록**
   - Python(`Pydantic AI` & Gemini 2.5 Pro)을 사용하여 RAG 시스템을 에이전트 루프 내에서 상태 변환 없이 호출되는 검색 도구(Tool)로 구현한 코드 예시 및 활용 시나리오 수록.

4. **개념적 관점 충돌 정리 (`## 충돌`)**
   - 기존 RAG를 그 자체로 독립적인 AI 앱/시스템으로 보던 관점과, 2026년 가이드 기준 에이전트의 제어 루프(Control Loop) 하위 지식 조회 도구(Action tool)로 보는 관점의 차이를 영리하게 정리.

5. **연동 지식 개념 링크 확장 (`## 관련 노트`)**
   - `[[LLM]]`, `[[AI 환각 현상]]`, `[[에이전트형 AI]]`, `[[에이전틱 워크플로우]]`, `[[GraphRAG 지식 그래프 파이프라인]]`, `[[하이브리드 검색]]`, `[[출처 기반 검색증강생성]]`, `[[PageIndex (구조형 RAG 탐색)]]` 등 8개 이상의 관련 개념 위키링크 상호 연결.