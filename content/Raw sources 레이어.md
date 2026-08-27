`Raw sources 레이어` 위키 노트 생성을 완수하였습니다.

### 작성된 위키 노트 정보
- **위키 파일 경로**: [`Raw sources 레이어.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Raw%20sources%20%EB%A0%88%EC%9D%B4%EC%96%B4.md)
- **Frontmatter 메타데이터**:
  - `type`: `workflow`
  - `status`: `draft`
  - `core`: `false`
  - `tags`: `['llm', 'agent', 'wiki', 'knowledge-base']`
  - `sources`: `['raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md']`
  - `created`: `2026-08-28`
  - `updated`: `2026-08-28`

### 주요 포함 내용 요약
1. **한 줄 정의 및 핵심 요지**:
   - `raw/` 디렉터리는 사용자가 원본 자료(PDF, 스크랩, 회의 전사본 등)를 입력하는 공간이며, AI Agent는 이를 오직 읽기만(Read-Only) 하고 절대 수정하지 않는다는 원칙을 정립.
   - 사용자 입력 영역(`raw/`)과 AI 관리 영역(`wiki/`)의 명확한 가공 분리(Separation of Concerns) 체계 기술.
2. **기술적 상세**:
   - 단일 소스 파일 추가 후 `Ingest` 실행 시 10~15개의 위키 페이지(엔티티, 용어집, 개요, 색인 등)에 갱신 및 보강이 이루어지는 구조 명시 (`raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md`).
3. **구체적 예시**:
   - 디렉터리 레이아웃 구조 트리 제공.
   - Cursor / Claude Code 등 AI 에디터 환경에서의 `Ingest raw/2026-08-28_PRD_v2.pdf` 처리 파이프라인 시나리오 제시.
4. **관련 노트 및 출처**:
   - [[Karpathy의 llm-wiki 아이디어 문서]], [[The wiki 레이어]], [[The schema 레이어]], [[Ingest 워크플로우]], [[LLM Wiki 아키텍처]] 등과 상호 연동되도록 obsidian 링크 배치.