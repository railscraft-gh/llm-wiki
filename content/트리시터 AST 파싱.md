요청해주신 **'트리시터 AST 파싱'** (유형: `workflow`) 위키 노트를 지정된 템플릿과 작성 원칙에 맞춰 작성 완료했습니다.

### 생성된 노트 파일
- [트리시터 AST 파싱.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/%ED%8A%B8%EB%A6%AC%EC%8B%9C%ED%84%B0%20AST%20%ED%8C%8C%EC%8B%B1.md)

---

### 주요 작성 및 반영 사항 요약

1. **Frontmatter 및 메타데이터 준수**
   - `type: workflow`, `status: draft`, `core: false`로 설정하였습니다.
   - 출처 경로(`raw/Andrej Karpathy Asked for a Tool. 48 Hours Later, Graphify Went Viral..md`), 태그, 생성일/수정일(`2026-08-28`) 규격을 완벽하게 반영했습니다.

2. **개념 연동 (Obsidian 위키링크)**
   - 지식 베이스 내 기존 노트인 `[[tree-sitter]]`, `[[Graphify]]`, `[[지식 컴파일]]`, `[[LLM 지식 베이스]]`, `[[레이던 알고리즘]]`, `[[안드레이 카파시의 지식 컴파일]]` 등과의 자연스러운 상호 연결을 유도했습니다.

3. **수치 지표 및 소스 표기 (Verifiable Metrics & Citations)**
   - 19개 언어 지원, 71.5배 토큰 감축율, 27개 파일 리포지토리 기준 18개 코드 파일 대상 162개 노드 및 240개 에지 추출 수치, `EXTRACTED`/`INFERRED` 태깅 시스템 및 Graphify 0.3.1 버전 정보 등 소스 문서의 검증 가능한 수치를 문단별 출처 괄호 표기(`raw/...`)와 함께 본문에 명시했습니다.

4. **구체적 예시 및 코드 스크립트**
   - Python `tree-sitter` 파싱 라이브러리를 활용해 AST 노드를 재귀 탐색하며 함수와 호출 관계를 `EXTRACTED` 에지로 로컬에서 0초만에 추출하는 파이썬 코드 예시와 실무 적용 시나리오를 포함시켰습니다.

5. **충돌 및 한계점 정리**
   - 소스 분석에 기초하여, 비정형 문서(`AGENTS.md` 등)나 UI 이미지 노드와 연동되지 못하고 발생한 **19개의 단절된 에지(Dangling Edges)** 문제와, 정적 파싱만으로는 아키텍처 배경 및 도메인 설계 맥락(Trade-off)을 파악할 수 없다는 한계 및 충돌 지점을 상세히 정리했습니다.