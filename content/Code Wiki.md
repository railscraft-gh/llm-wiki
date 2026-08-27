요청하신 소스 문서(`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`)를 바탕으로 **`Code Wiki`** 개념 노트를 성공적으로 생성하여 지식 베이스에 반영했습니다.

### 📄 생성된 파일
- **경로**: [`llm-wiki/wiki/Code Wiki.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Code%20Wiki.md)

---

### 📝 작성 및 보강 내용 요약

1. **규격 준수 Frontmatter 설정**
   - `type: concept`, `status: draft`, `core: false`, `tags: ['llm', 'agent', 'code', 'codegraph', 'mcp']`, `sources`, `created: '2026-08-28'`, `updated: '2026-08-28'` 등 지정된 스키마를 완벽히 준수했습니다.

2. **한 줄 정의 및 핵심 요지**
   - 안드레이 카파시([[안드레이 카파시]])의 지식 컴파일 철학을 코드베이스 분석 영역으로 확장하여, [[tree-sitter]] 구문 분석기 + 로컬 [[SQLite]] 데이터베이스 + [[MCP]] 프로토콜 결합 구조로 심볼 관계망을 컴파일해 조회하는 코드 도메인 전용 [[LLM Wiki]] 아키텍처로 정의했습니다.

3. **상세 기술 분석 및 실증 지표 반영**
   - **`grep` 및 키워드 기반 RAG 대비 우위**: 키워드 매칭이 놓치기 쉬운 간접 호출 및 멀티스텝 의존성 추적의 강점을 명시했습니다.
   - **대표 도구 벤치마크 및 비교**: 
     - **[[codegraph]]**: GitHub Star 60,000+개, 8,000개 파일 기준 인덱싱 34초, 디스크 용량 325MB (`OmniRoute` 테스트)
     - **[[code-review-graph]]**: GitHub Star 25,000+개, 인덱싱 2분 25초, 디스크 용량 1.4GB, PR 위험도 점수(Risk Score) 제공
   - **OmniRoute 실증 사례**: `classifyRoute` 함수 테스트 시 `grep`이 놓친 `proxy.ts` 간접 연결을 감지하였으며, 컨텍스트 용량을 **98.7% 절감**한 수치(344 bytes)를 검증 지표로 명시했습니다 (`(raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md)` 표기 적용).

4. **구체적 예시 및 명령어**
   - `codegraph` 및 `code-review-graph` CLI 명령 세트 예시, 게이트 위험도 점수의 6개 산정 요소, 개발/리뷰 단계별 실무 워크플로우를 기재했습니다.

5. **충돌 및 한계점 정리**
   - 지식 그래프 허위 탐지율(False Positive 40%), 파일 저장/이름 변경 시 실시간 동기화 오작동 이슈, C 언어 및 전처리기 매크로 분석 한계 등을 '## 충돌' 섹션에 작성했습니다.

6. **연관 노트 및 출처 정리**
   - [[LLM Wiki]], [[RAG 대비 지식 컴파일의 토큰 효율성]], [[tree-sitter]], [[MCP]], [[GraphRAG 지식 그래프 파이프라인]] 등 5개 이상의 위키 노트를 연동했습니다.