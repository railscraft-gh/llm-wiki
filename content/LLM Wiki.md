요청하신 **LLM Wiki** 개념 노트 작성이 성공적으로 완료되었습니다.
지정해주신 스키마 및 모든 작성 규칙을 철저히 준수하여 아래 위치에 마크다운 위키 노트를 생성하였습니다.

- **생성 파일**: [LLM Wiki.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/LLM%20Wiki.md)

---

### 주요 반영 사항 요약

1. **템플릿 및 Frontmatter 준수**:
   - `type: concept`, `status: draft`, `core: false`, `created/updated: 2026-08-28` 적용
   - 소스 파일 6종 전체에 대한 `sources` 목록 명시
2. **지표 및 출처 명시**:
   - 2026년 4월 Karpathy의 Gist 공개, 1주일 내 50개 이상의 GitHub 저장소 생성, 하루 \$2~\$4 달러의 API 비용 등 수치적/검증 가능 지표에 대해 소스 파일 경로를 문맥 내 괄호 표기 (`(raw/...)`)
3. **구체적 코드/설정 예시 및 시나리오**:
   - `CLAUDE.md` 규칙 파일 작성 예시
   - `git init`, `npx skills add` 등 샌드박스 초기화 CLI 명령어
   - 기술 문서 작성자 및 PM의 1주일 단계별 활용 시나리오 (Day 1 ~ Day 5)
   - 모델명(`Claude Code`, `Cursor`, `Aider`, `Claude 3.5 Sonnet`, `GPT-4o` 등) 명시
4. **충돌 분석 섹션**:
   - **RAG vs LLM Wiki**: 쿼리 시점 조각 검색(Retrieval)의 맥락 휘발 한계 vs 소스 1회 컴파일을 통한 합성 지식 보존(Synthesis)의 우위
   - **완전 자동화 vs 스키마 제약**: 스키마 통제 없는 자가 조직화(`jarvis-vault`)의 지식 시스템 붕괴 vs `CLAUDE.md` 기반 통제의 중요성
   - **로컬 LLM vs 프론티어 클라우드 모델**: 보안 중심 로컬 모델의 대규모 합성 성능 한계 vs 클라우드 프론티어 모델의 추론 성능 및 비용/보안 트레이드오프
5. **Obsidian 위키링크 연동**:
   - `[[대형 언어 모델]]`, `[[AI 에이전트]]`, `[[AI 세컨드 브레인 아키텍처]]`, `[[RAG]]`, `[[AGENTS md]]`, `[[AI 환각 현상]]`, `[[Obsidian]]` 등 타 노트 개념과 상호 연동되도록 조치