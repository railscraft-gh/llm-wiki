`Reciprocal Rank Fusion` (RRF) 개념에 대한 위키 노트를 성공적으로 생성하여 작성했습니다.

### 작업 요약
1. **소스 문서 분석 및 정제**: `raw/Building a RAG Pipeline for 10M+ Documents With Near-Zero Hallucination.md` 문서를 분석하여 RRF의 핵심 수식, 평활화 상수($k=60$), 밀집 벡터(Dense LanceDB) 및 희소 어휘(Sparse BM25) 인덱스와의 하이브리드 결합 방식, 그리고 2단계 Reranker로 넘기기 전 1차 후보 융합(150개 추출) 메커니즘 수치 지표를 도출했습니다.
2. **지식 베이스 연동**: 기존 위키 지식 베이스의 [[하이브리드 검색]], [[리랭킹]], [[Corrective RAG]], [[검색 증강 생성]], [[컨텍스트 보강 청크 분할]] 등 관련 개념 노트와 자연스럽게 연결되도록 위키링크를 구성했습니다.
3. **구체적 코드 구현 및 수식 포함**: RRF 산출 수식을 명시하고, Python 기반 수동 RRF 구현 및 실행 결과 출력을 포함하여 실무에 적용 가능한 코드 예시를 추가했습니다.
4. **No-Ask Policy 준수**: 지시사항 및 프론트매터 스키마 규칙을 충실히 준수하여 신규 생성 노트를 작성했습니다.

생성된 위키 노트 파일: [Reciprocal Rank Fusion.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Reciprocal%20Rank%20Fusion.md)