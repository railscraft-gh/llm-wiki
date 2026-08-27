지정하신 작성 원칙, 지정 템플릿 구조, Obsidian 위키링크(`[[개념명]]`) 규칙 및 검증 가능한 수치 출처 표기 기준을 엄격히 준수하여 **`tree-sitter 기반 구문 파싱 워크플로우`** 위키 노트를 성공적으로 작성을 완료했습니다.

생성된 노트는 다음 경로에 보존되었습니다:
- [`tree-sitter 기반 구문 파싱 워크플로우.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/tree-sitter%20%EA%B8%B0%EB%B0%98%20%EA%B5%AC%EB%AC%B8%20%ED%8C%8C%EC%8B%B1%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.md)

---

### 주요 작성 내용 요약

1. **frontmatter & 스키마 준수**:
   - `type: workflow`, `status: draft`, `core: false`, `created: 2026-08-28`, `updated: 2026-08-28` 스키마 적용 및 관련 소스 파일 지정.
2. **핵심 분석 및 상세 워크플로우 (Mermaid 파이프라인 수록)**:
   - [[안드레이 카파시의 지식 컴파일]] 패러다임을 코드 영역으로 확장한 지식 파이프라인으로 정의.
   - 소스 파싱 → 노드/에지 추출 → SQLite 저장 → MCP 연동 → 에이전트 쿼리(`callers`, `impact`)로 이어지는 4단계 구문 파싱 워크플로우 수록.
3. **구체적 수치 및 출처 명시**:
   - 키워드 매칭(`grep`) 대비 컨텍스트 비효율성을 **98.7%** 절감하고 344바이트 수준의 정제된 결괏값만 반환하는 성과 표기 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).
   - 8,000개 이상 파일 프로젝트(OmniRoute) 대상 [[codegraph]](34초, 325MB)와 [[code-review-graph]](2분 25초, 1.4GB) 간의 파싱 정밀도 및 트레이드오프 비교 표 구성 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).
4. **구체적인 코드 및 실무 활용 시나리오 수록**:
   - Python 바인딩 기반 `tree-sitter` 파싱 및 SQLite 노드/에지 지식 그래프 컴파일 예시 코드 작성.
   - `Claude 3.5 Sonnet` 기반 에이전트가 인증 라우팅 함수(`classifyRoute`) 수정 시 2단계 간접 연관 파일(`proxy.ts`)을 정확히 추적하는 시나리오 포함.
5. **충돌 및 한계점 정리**:
   - C 언어 전처리기 매크로 분석 정확도 저하 문제 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).
   - 자동 동기화(Incremental Sync) 오류 및 596KB 이상 광범위 쿼리 시 출력 조절/노드 누락 현상 명시 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).
6. **유관 개념 위키 연동**:
   - [[tree-sitter]], [[코드 위키]], [[안드레이 카파시의 지식 컴파일]], [[codegraph]], [[code-review-graph]], [[코딩 에이전트]], [[인지적 비용]], [[RAG]] 링크 연결.