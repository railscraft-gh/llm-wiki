요청하신 **Vault Index 자동 갱신** (유형: `workflow`) 위키 노트 작성을 성공적으로 완료했습니다.

생성된 노트는 지정된 위키 폴더 경로(`scratch/llm-wiki/wiki/Vault Index 자동 갱신.md`)에 작성되었으며, 프론트매터 스키마 및 옵시디언 위키링크 연동 규칙, 출처 표기 규칙, 구체적 예시 및 충돌 분석 요구 사항을 칼같이 준수하였습니다.

---

### 📝 생성된 위키 노트 요약 (`Vault Index 자동 갱신.md`)

- **파일 위치**: `scratch/llm-wiki/wiki/Vault Index 자동 갱신.md`
- **Frontmatter**:
  - `type`: `workflow`
  - `status`: `draft`
  - `core`: `false`
  - `tags`: `['llm', 'agent', 'obsidian', 'second-brain', 'index']`
  - `sources`: `['raw/AI 세컨드 브레인을 구축하기 전에 알았더라면 좋았을 것들.md']`
  - `created`: `2026-08-27`
  - `updated`: `2026-08-27`

- **주요 섹션 구성**:
  1. **한 줄 정의**: AI 에이전트가 옵시디언 보관소의 전체 폴더 트리를 탐색하여 핵심 지식 문서의 분포와 절대 경로를 파악하고, 에이전트 메모리(`CLAUDE.md`)에 저장·업데이트하는 자동화 워크플로우로 정의.
  2. **핵심 요지**: 보관소 인지력 확보, 정기적 갱신 필요성, 중요 자산 영구 선언, 유연한 자연어 검색 지원 등 핵심 아이템 정리 및 출처 명시.
  3. **상세**: Vault Index의 역할, 자동 갱신 4단계 프로세스(Traversing -> Evaluation -> Indexing -> Execution), Obsidian-CLI 및 폴더 Scoping과의 결합 이점 기술.
  4. **예시**: `CLAUDE.md` 내 Vault Index 메인 선언 구조 예시 및 Claude Code CLI에서의 자동 갱신 프롬프트 명령어 포함.
  5. **충돌**: 매 세션 전체 매번 검색 방식 vs 정적 메모리 선언 및 정기 갱신 방식 간의 안정성·속도 측면의 견해 차이 분석.
  6. **관련 노트**: `[[AI 세컨드 브레인 아키텍처]]`, `[[Obsidian과 LLM 기반 지식 관리]]`, `[[Obsidian-CLI 스킬]]`, `[[Claude Code]]`, `[[Obsidian]]`, `[[LLM 위키]]` 연결.