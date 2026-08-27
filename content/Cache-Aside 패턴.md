지정해 주신 원칙, 스키마 및 템플릿 구조를 엄격히 준수하여 **[Cache-Aside 패턴](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Cache-Aside%20%ED%8C%A8%ED%84%B4.md)** 위키 노트를 성공적으로 생성 완료하였습니다.

### 작성 결과 요약

- **저장 경로**: `/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Cache-Aside 패턴.md`
- **Frontmatter 규격 준수**:
  - `type: workflow`, `status: draft`, `core: false`, `sources: ['raw/28 Core System Design Concepts, Explained Through the Failures They Prevent.md']`, `created: 2026-08-27`, `updated: 2026-08-27` 적용.
- **내용 및 세부 작성 사항**:
  - **한 줄 정의**: 캐시와 DB 사이에서 애플리케이션이 직접 데이터를 조회/적재하는 지연 로딩(Lazy Loading) 워크플로우 명시.
  - **핵심 요지 & 상세**: 애플리케이션 주도 제어, 지연 적재, TTL/캐시 무효화 전략, 캐시 스탬피드(Cache Stampede) 및 썬더링 허드 방어 조치 포함. 소스 문서 표기 적용.
  - **LLM/에이전트 연계 설명**: LLM 프롬프트 세만틱 캐싱(Semantic Caching) 및 에이전트 메모리 관리 구조 적용 사례 제시.
  - **코드 예시**: Ruby/Rails 기반 일반 프로필 조회 워크플로우 코드 및 Python Async/Redis/OpenAI 기반 LLM 프롬프트 캐싱 예시 2종 수록.
  - **충돌 및 템플릿 세션**: REST vs GraphQL 캐싱 트레이드오프 비교 분석 기재.
  - **관련 노트 위키링크**: `[[리버스 프록시]]`, `[[N+1 쿼리 문제]]`, `[[CAP 정리]]`, `[[멱등성]]`, `[[Redis]]`, `[[에이전트 워크플로우 패턴]]`, `[[LangGraph 오케스트레이션]]` 연동.