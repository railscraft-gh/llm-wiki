지정하신 **'CLAUDE.md 스키마'** 개념에 대한 전문 위키 노트를 작성하고 위키 디렉토리에 정상적으로 배치 완료하였습니다.

### 📄 작성된 파일 정보
- **파일명**: [`CLAUDE.md 스키마.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/CLAUDE.md%20%EC%8A%A4%ED%82%A4%EB%A7%88.md)
- **경로**: `/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/CLAUDE.md 스키마.md`

---

### 💡 주요 반영 및 정리 내역

1. **규격 및 스키마 완수**:
   - `type: tool`, `status: draft`, `sources`, `tags`, `created`/`updated` 등 요구된 frontmatter 스키마를 정밀하게 준수하였습니다.
   - 템플릿 표준에 맞춰 `## 한 줄 정의`, `## 핵심 요지`, `## 상세`, `## 예시`, `## 충돌`, `## 관련 노트`, `## 출처` 구성을 차례로 완성하였습니다.

2. **출처 인용 및 지표 명시**:
   - 2026년 4월 안드레 카파시(Andrej Karpathy)의 GitHub Gist 공개, X 1,600만 회 이상 조회수 및 5,000개 스타 달성 수치 등 검증 가능한 지표에 소스 파일 경로 `(raw/...)`를 정확히 괄호 표기하였습니다.

3. **구체적 실전 예시 및 시나리오**:
   - 지식 베이스의 아키텍처 범위, 엔티티 타입, Ingest 9단계 워크플로, 금지 사항(Hard constraints)이 명시된 실제 `CLAUDE.md` 스키마 마크다운 코드 블록을 포함시켰습니다.
   - Claude Code CLI 명령어, Cursor 3단계 프롬프트 시나리오, `/ingest` 커스텀 슬래시 명령어 등을 실전 시나리오로 체계화하였습니다.

4. **지식 연동 및 충돌 지점 분석**:
   - `[[Andrej Karpathy]]`, `[[LLM Wiki]]`, `[[Claude Code]]`, `[[CLAUDE md 영구 규칙서 워크플로]]`, `[[Obsidian]]`, `[[Cursor]]`, `[[RAG]]`, `[[Memex]]` 등 교차 링크를 연결하였습니다.
   - 지침 희석(Instruction Dilution)으로 인한 대처 방안 및 전통 RAG 시스템과의 처리 시점(Upstream vs Downstream) 비교를 `## 충돌` 섹션에 수록하였습니다.