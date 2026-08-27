지정해주신 2개 소스 문서(`raw/Building a RAG Pipeline for 10M+ Documents With Near-Zero Hallucination.md`, `raw/How to Design a Production-Ready RAG System (Architecture + Tradeoffs).md`)를 정밀하게 분석하여 **`Corrective RAG`** 개념 위키 노트를 작성 완료했습니다.

생성된 위키 노트 파일: [`Corrective RAG.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Corrective%20RAG.md)

---

### 주요 작성 내용 요약

1. **Frontmatter 스키마 준수**:
   - `type: concept`, `status: draft`, `core: false`, `created: 2026-08-28`, `updated: 2026-08-28` 적용
   - 지정된 소스 파일 경로 2건 정확히 연결

2. **핵심 내용 및 상세 아키텍처 정리**:
   - **자가 치료 및 평가 게이트(Evaluator/Grader)**: 1차 인출된 문서 조각의 관련성과 신뢰도를 자율적으로 평가하여 무조건적인 생성 LLM 입력을 차단.
   - **프로덕션 4대 통제 레이어 (Retrieve, Constrain, Verify, Abstain)**: 
     - 10M+ 문서 규모의 하이브리드 인덱싱(Dense LanceDB + Sparse BM25) 및 Reranking (`Qwen3-Reranker-4B`).
     - 문맥 보강 청킹(Contextualized Prefix, $\le 25$ words).
     - 원자적 사실 단위(Atomic Claims) 분해 후 대형 판별기(`Qwen3-32B`) 기반 검증.
     - 임계치 미달 시 기권(Abstain) 선언으로 근-제로 환각(Near-Zero Hallucination) 달성.

3. **구체적 수치 및 지표 (소스 파일 경로 명시)**:
   - NVIDIA H100 80GB VRAM 54.3GB 환경, HotpotQA 20,007개 문서 및 21,259개 청크 적용 (`raw/Building a RAG Pipeline for 10M+ Documents With Near-Zero Hallucination.md`).
   - 10M+ 벡터 인덱스 기준 **18ms** 지연 시간 달성 (`raw/Building a RAG Pipeline for 10M+ Documents With Near-Zero Hallucination.md`).
   - 의료, 제약, 컴플라이언스, 법률 등 고신뢰성 도메인 적용 시나리오 제시 (`raw/How to Design a Production-Ready RAG System (Architecture + Tradeoffs).md`).

4. **구체적 코드 예시 포함**:
   - `CorrectiveRAGAgent` 클래스 파이썬 예시 코드 (인출 연관성 정량 평가, 출처 표기 생성, 원자적 사실 검증, 백업 서치 우회 및 기권 루프 구현).

5. **소스 간 주장 충돌 정리 (`## 충돌`)**:
   - **외부 웹 서치 보충 vs. 엄격한 기권(Abstain) 선언**: 오픈 도메인에서의 웹 서치 우회 전략과 보안/사내망 환경에서의 기권 선언 처리 방식 간 관점 차이 명시.
   - **평가기(Evaluator/Judge) 모델 경량화 vs. 대형화 전략**: 지연 시간 단축을 위한 경량 필터링과 복합 추론 오류 방지를 위한 32B급 대형 모델 직접 투입 방식 대조.

6. **Obsidian 위키링크 연동**:
   - [[RAG]], [[Naive RAG]], [[Advanced RAG]], [[에이전틱 RAG]], [[자가 검증형 RAG]], [[프로덕션 RAG 가드레일]], [[AI 환각 현상]] 연결.