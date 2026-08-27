지정해주신 두 소스 문서(`5단계 난이도로 알아보는 RAG 시스템 구축 및 구현 가이드.md`, `How to Design a Production-Ready RAG System (Architecture + Tradeoffs).md`)를 바탕으로 **Naive RAG**에 대한 위키 노트를 새로 작성하였습니다.

작성된 위키 노트 파일 경로:
[Naive RAG.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Naive%20RAG.md)

---

### 작성 요약

1. **Frontmatter 및 메타데이터 준수**
   - `type: workflow`, `status: draft`, `core: false` 스키마 적용.
   - 소스 문서 경로 표기 및 `created`/`updated` 날짜(`2026-08-27`) 명시.
2. **핵심 내용 수록**
   - **한 줄 정의 & 핵심 요지**: 오프라인 수집 및 온라인 인출/생성의 기본 구조, 최소 응답 지연 시간 및 저렴한 연산 비용, 자율 검증 및 재정렬(Reranking) 부재로 인한 환각 현상 유발 가능성 명시.
   - **상세 (파이프라인 및 실패 모드)**: 오프라인/온라인 2단계 파이프라인 흐름 정리, 단어 중복에 따른 의미적 유사성과 답변 관련성의 불일치("data retention policy" vs "employee retention programs"), 청크 경계 단절 및 시점 차이(2019년 vs 2024년 정책) 혼재 등의 구체적 사례 수록.
   - **구체적 코드 예시 & 활용 시나리오**: OpenAI `text-embedding-3-small`과 ChromaDB, `gpt-4` 기반 Python 구현 코드 포함, 로컬 텍스트/PoC/사내 FAQ 챗봇 등 유용 시나리오 및 레벨업 필요 시점 정리.
   - **충돌 섹션**: 두 문서 간 전용 벡터 DB(Chroma 등)의 필수 도입 여부에 대한 관점 차이(Zero-DB RAG / RDB 키워드 매칭 대안 제시) 정리.
   - **관련 노트 및 출처**: `[[RAG]]`, `[[GraphRAG 지식 그래프 파이프라인]]`, `[[AI 환각 현상]]` 위키링크 연동 완료.