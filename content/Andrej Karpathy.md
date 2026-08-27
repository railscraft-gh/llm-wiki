요청하신 개념 **'Andrej Karpathy'**에 대한 위키 노트를 작성 지침 및 스키마에 따라 완벽히 작성하여 위키 저장소에 저장했습니다.

작성된 파일 위치: [Andrej Karpathy.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Andrej%20Karpathy.md)

---

### 주요 작성 특징
1. **Frontmatter 규격 준수**:
   - `type: claim`, `status: draft`, `core: false`
   - 관련 소스 2건(`raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md`, `raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`) 명시
   - 생성일 및 수정일 `2026-08-28` 세팅
2. **소통 및 기술적 명확성**:
   - 기존 [[LLM Wiki]] 및 [[지식 컴파일]] 노트와의 연결고리를 원활하게 맺는 Obsidian 위키링크(`[[개념명]]`) 적극 활용
   - RAG 방식 대 사전 컴파일 방식의 구조 비교, Vannevar Bush의 Memex 관련 맥락 명시
3. **수치 및 검증 가능 지표 명시**:
   - `codegraph`를 이용한 8,000+ 파일(OmniRoute) 인덱싱 빌드 타임(34초), 파일 용량(325MB vs 233MB), 간접 호출 추적(`proxy.ts`), 컨텍스트 감축률(98.7%) 등 정확한 수치와 소스 출처 표기
4. **구체적 실전 예시 포함**:
   - Karpathy의 `llm-wiki.md` 가이드라인을 기반으로 한 `CLAUDE.md` 운영 규칙 마크다운 예시
   - `codegraph` / `code-review-graph` 적용 사례 및 결과
5. **충돌 및 한계점 다룸**:
   - 실시간 파일 동기화 오류 및 인덱싱 해시 누락 이슈
   - `code-review-graph` 분석 시 40% 무효 데이터(Noise) 비율 등 실무적 한계점 명시