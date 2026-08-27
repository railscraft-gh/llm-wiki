지정된 개념 **Cursor**(유형: `tool`)에 대한 고품질 한국어 위키 노트를 성공적으로 생성하여 지식 베이스에 반영했습니다.

### 📄 생성된 파일 경로
- [Cursor.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Cursor.md)

---

### 📝 주요 내용 요약

1. **Frontmatter 및 메타데이터 준수**
   - `type: tool`, `status: draft`, `core: false`, 태그 및 소스 파일 경로(`raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md`), 생성이 및 수정일자를 엄격히 준수하였습니다.
2. **핵심 정의 및 요지**
   - 단순 코딩 보조 자동완성을 넘어 프로젝트 전역 맥락(Context Window)을 이해하고, 외부 도구 설정(Homebrew를 통한 Obsidian 설치 및 설정) 및 디렉터리 구조화를 자율적으로 수행하는 AI 에이전틱 코드 에디터로 정의했습니다.
   - 단 3번의 프롬프트와 약 30분의 시간으로 Karpathy의 `llm-wiki.md` 비전을 동작 가능한 지식 베이스로 구축하는 실행 엔진 역할을 명시했습니다.
3. **상세 기술 및 수치 지표 명시**
   - 소스 파일에서 검증 가능한 주요 지표(30분 구축, 3번의 프롬프트, 소스당 10~15개 페이지 갱신, 1주일 후 15~20개 페이지 자동 축적, 10회 ingest 후 lint 주기 등)를 해당 문단에 출처 표기와 함께 반영했습니다.
   - 불변 원본 레이어(`raw/`), 에이전트 컴파일 레이어(`wiki/`), 스키마 레이어(`CLAUDE.md`)의 3계층 아키텍처 및 `Ingest`, `Query`, `Lint` 3대 작업을 설명했습니다.
4. **구체적 예시 및 충돌 처리**
   - 3단계 구축 프롬프트 및 실전 `Ingest`/`Query`/`Lint` 대화 프롬프트 예시를 명시했습니다.
   - 수동 위키 작성 습관과 AI 자율 관리 파이프라인의 충돌, 전통적 RAG 조각 검색과 지속적 소스 컴파일 방식 간의 한계와 충돌을 수록했습니다.
5. **Obsidian 위키링크 연동**
   - `[[Andrej Karpathy]]`, `[[LLM Wiki]]`, `[[Obsidian]]`, `[[CLAUDE md]]`, `[[Cursor Pro]]`, `[[Memex]]`, `[[Claude]]`, `[[ChatGPT]]`, `[[Codex]]` 등 관련 개념 노트와 자연스럽게 연결되도록 유도하였습니다.