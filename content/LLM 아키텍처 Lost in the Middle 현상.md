요청하신 개념 **'LLM 아키텍처 Lost in the Middle 현상'**에 대해 자율적으로 원칙 및 규칙을 준수하여 작성된 고품질 한국어 위키 노트 생성을 완료하였습니다.

생성된 위키 노트 경로: `scratch/llm-wiki/wiki/LLM 아키텍처 Lost in the Middle 현상.md`

### 노트 주요 포함 내용
1. **Frontmatter**: 스키마 요구사항 (`type: concept`, `status: draft`, `sources`, `tags`, `created`, `updated` 등) 반영.
2. **한 줄 정의 및 핵심 요지**: 긴 Context Window 사용 시 문맥의 양 끝(시작/끝)에 비해 중간 부분에 위치한 핵심 정보를 비대칭적으로 놓치는 아키텍처 특성을 명확히 정의.
3. **상세 및 수치/지표 인용**: 트랜스포머 Self-Attention의 \(O(N^2)\) 연산 비용과 Positional Encoding/Instruction Tuning 편향, RAG 파이프라인에서의 성능 병목 현상 및 Liu et al. (2023) 연구 인용.
4. **실무 코드 예시**: RAG 검색 결과를 프롬프트 양 끝(시작과 끝)에 주요 고순위 청크가 배치되도록 정렬하는 `reorder_chunks_u_shaped` 파이프라인 Python 코드 구현.
5. **관련 노트 및 출처 연동**: [[AI 환각 현상]], [[주의력 배터리]], [[Retrieval-Augmented Generation]], [[Reranker]], [[In-Context Learning]] 등의 Obsidian 위키링크와 출처 표기 포함.