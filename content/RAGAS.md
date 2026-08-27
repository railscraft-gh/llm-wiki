지정해주신 소스 문서(`raw/Building the Entire RAG Ecosystem and Optimizing Every Component.md`) 분석을 바탕으로 개념 노트 **`RAGAS`**를 작성 및 생성 완료하였습니다.

---

### 📌 작업 요약

1. **위키 노트 생성 경로**: [`scratch/llm-wiki/wiki/RAGAS.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/RAGAS.md)
2. **템플릿 및 규칙 준수 사항**:
   - **Frontmatter**: `type: tool`, `status: draft`, `core: false`, `tags: ['llm', 'rag', 'evaluation']`, `sources`, `created`, `updated` 준수
   - **구조**: `한 줄 정의`, `핵심 요지`, `상세`, `예시`, `충돌`, `관련 노트`, `출처` 구성 완료
   - **연동성**: `[[RAG]]`, `[[프로덕션 RAG 가드레일]]`, `[[에이전틱 RAG]]`, `[[자가 검증형 RAG]]`, `[[Corrective RAG]]`, `[[에이전트 평가 시스템]]` 등 상위 및 유관 지식 개념 노드가 백링크 되도록 설계
   - **검증 출처 괄호 명시**: 기술적 특성 및 분석 데이터마다 `(raw/Building the Entire RAG Ecosystem and Optimizing Every Component.md)` 출처 표기 포함
   - **구체성 확보**: `gpt-4o`, `gpt-3.5-turbo` 모델명, Hugging Face `datasets` 연동 및 4대 계측 지표(`faithfulness`, `answer_relevancy`, `context_recall`, `answer_correctness`) 실행 코드 포함
   - **충돌 분석**: 범용 평가 프레임워크(`deepeval`, `grouse`)와의 프롬프트 커스터마이징 차이점 및 LLM-as-a-Judge API 비용/변동성 이슈 명시