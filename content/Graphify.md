요청하신 **Graphify** 개념에 대한 고품질 한국어 위키 노트를 작성하여 프로젝트 지식 베이스(`scratch/llm-wiki/wiki/Graphify.md`)에 성공적으로 반영하였습니다.

---

### [작성 내역 요약]

- **문서 위치**: [Graphify.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Graphify.md)
- **frontmatter 메타데이터**:
  - 기존 최초 생성일(`created: 2026-05-09`) 및 상태(`status: evergreen`) 보존, 최근 수정일(`updated: 2026-08-28`) 갱신
  - 지정된 `type: tool`, `core: false`, 유관 태그(`ai-coding`, `vibe-coding`, `knowledge-graph`, `context-management`, `claude-code`, `llm`, `agent`) 및 소스 목록 명시
- **핵심 통합 내용**:
  1. **한 줄 정의 & 핵심 요지**: Karpathy의 "컴파일된 지식 베이스" 패러다임 반영, 52개 코퍼스 기준 **71.5배 토큰 절감 효과**, 28개 언어 AST 파싱과 zero API 비용, 신뢰도 태그(`EXTRACTED`/`INFERRED`/`AMBIGUOUS`), 15개 이상 플랫폼 지원 요약.
  2. **상세 파이프라인**: 3단계 파이프라인(로컬 tree-sitter AST → 로컬 faster-whisper 미디어 전사 → Claude Vision/LLM 의미 추출) 및 `graphify-out/` 아티팩트 상세 구성 분석.
  3. **구체적 예시**: 패키지 설치(`pip install graphifyy`), 다양한 CLI 커맨드 옵션, 27개 파일 규모의 실무 프로젝트(QR 코드 생성기) 실제 파싱 및 인사이트 발견 수치 사례 포함.
  4. **충돌 및 대조**: 초기 지원 언어 수(19개 → 28개) 및 플랫폼 확장 분석, 유사 지식 그래프 생성 도구인 `lat.md`(Agent Lattice)와의 지향점(토폴로지 압축 vs 참조 무결성 검증) 차이 명시.
  5. **관련 노트 및 수치 출처**: `[[바이브 코딩]]`, `[[영속적 컨텍스트]]`, `[[적시 컨텍스트 로딩]]`, `[[컨텍스트 윈도우 한계 극복 요령]]`, `[[lat.md]]` 등 연동 위키 링크 포함 및 문단/문장 단위 소스 표기 완료.