요청하신 **'RAG 대비 지식 컴파일의 토큰 효율성'**에 대한 위키 노트를 모든 작성 원칙과 프론트매터 스키마 규칙을 엄격히 준수하여 생성 완료하였습니다.

### 작업 요약

1. **파일 경로**: `llm-wiki/wiki/RAG 대비 지식 컴파일의 토큰 효율성.md`
2. **속성 (Frontmatter)**:
   - `type`: `claim`
   - `status`: `draft`
   - `core`: `false`
   - `tags`: `['llm', 'agent', 'rag', 'memory', 'graphify']`
   - `sources`: `['raw/Andrej Karpathy Asked for a Tool. 48 Hours Later, Graphify Went Viral..md']`
   - `created`: `2026-08-28`, `updated`: `2026-08-28`
3. **핵심 내용 및 특징**:
   - **토큰 효율성 및 수치 검증**: 질의당 토큰 사용량을 최대 **71.5배** 절감하는 메커니즘과, 6개 소규모 파일 프로젝트 대비 52개 이상 대규모 프로젝트에서의 압축률 차이를 상세히 기술하고 출처를 명기했습니다.
   - **구체적 실사례 및 구동 방식**: Graphify (v0.3.1) 오픈소스 사례, 로컬 tree-sitter AST 파싱(19개 언어 지원, 0 토큰 소모), Claude Vision / GPT-4 / Claude Code / Codex 연동, 27개 파일 기준 약 193,000 토큰의 일회성 초기 컴파일과 `graphify query` 활용법을 포함했습니다.
   - **위키 연동 및 제약사항**: `[[안드레이 카파시의 지식 컴파일]]`, `[[지식 컴파일]]`, `[[RAG]]`, `[[컨텍스트 창]]`, `[[코딩 에이전트]]` 등 기존 위키 노트들과 상호 링크 구조를 형성했으며, 초기 지불 비용과 역사적 맥락 상실 한계 등을 `## 충돌` 섹션에 반영했습니다.