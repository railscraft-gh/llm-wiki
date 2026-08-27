요청하신 **'오픈소스 LLM 플랫폼'** (type: concept) 위키 노트 작성을 성공적으로 완료했습니다.

### 📝 생성된 문서 위치
- [`오픈소스 LLM 플랫폼.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%20LLM%20%ED%94%8C%EB%9E%AB%ED%8F%BC.md)

---

### 🔑 주요 작성 및 보강 내용
1. **Frontmatter 및 메타데이터**:
   - `type`: concept, `status`: draft, `sources`, `created`/`updated` 날짜 등 요청 스키마 준수.
2. **구조화된 템플릿**:
   - **한 줄 정의**: 오픈소스 LLM 실행/추론/게이트웨이 생태계 개념 정립.
   - **핵심 요지**: 4가지 분류 체계(자체 호스팅, 클라우드 API, AI 게이트웨이, 특화 하드웨어), 무료 멀티 인프라 스택 레버리지(하루 300만~400만 토큰 활용법), OpenAI API 규격 표준화 효과 요약.
   - **상세**:
     - 4가지 플랫폼 유형별 비교표 및 특징 정리.
     - Ollama, OpenRouter, Groq, NVIDIA NIM, Cerebras, SambaNova, Cloudflare Workers AI, Together AI, Hugging Face 등 주요 플랫폼별 구체적인 수치/지표 포함 (출처 파일 표기 완료).
   - **예시**:
     - 환경 변수 기반 단일 추상화 서비스 클래스 (`UnifiedLlmService`) 구현 예시.
     - Groq ➔ Cerebras ➔ SambaNova 자동 로테이션 및 무장애 폴백 (`LlmProviderRotator`) 구현 예시.
   - **충돌**: 게이트웨이 라우팅 투명성/비용 변동 이슈 및 무료 티어 응답 타임아웃/신뢰성 이슈 정리.
   - **관련 노트**: `[[공개 가중치 모델]]`, `[[AI 보조 코딩]]`, `[[코딩 에이전트]]`, `[[GraphRAG 지식 그래프 파이프라인]]`, `[[셀프 호스팅 PaaS]]` 연동.
   - **출처**: `raw/2026년 오픈소스 LLM 플랫폼 비교 가이드 - Ollama, OpenRouter, Groq, NVIDIA NIM.md` 명시.