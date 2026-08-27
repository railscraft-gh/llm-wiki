지정하신 소스 문서(`raw/A YouTuber Just Did More for Self-Hosted AI Than a Decade of Open Source.md`) 분석을 바탕으로 개념 위키 노트 **`로컬 AI 패키징`** 작성을 완료하였습니다.

### 작성된 위키 노트 요약 및 정보

- **파일 위치**: [`wiki/로컬 AI 패키징.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/%EB%A1%9C%EC%BB%AC%20AI%20%ED%8C%A8%ED%82%A4%EC%A7%95.md)
- **Frontmatter**:
  - `type`: `concept`
  - `status`: `draft`
  - `core`: `false`
  - `tags`: `['llm', 'agent', 'self-hosting', 'packaging']`
  - `sources`: `['raw/A YouTuber Just Did More for Self-Hosted AI Than a Decade of Open Source.md']`
  - `created` / `updated`: `2026-08-27`

### 주요 포함 내용
1. **한 줄 정의 및 핵심 요지**:
   - 기존에 파편화되어 존재하던 서빙 런타임([[Ollama]]), MCP 프로토콜, RAG 검색, 심층 연구 에이전트 등을 단일 컨테이너 및 기본값(Defaults)으로 통합 결합하는 '제품화(Packaging)' 개념 수립.
   - PewDiePie의 'Odysseus' 프로젝트 사례(공개 48시간 만에 Star 3만 개, 최종 7만 8천 개 달성 등)와 기술 패키징 및 로컬 퍼스트(Telemetry 0%) 접근의 영향력 정리.
2. **기술적 상세 및 물리적 제약 분석**:
   - **메모리 용량(Capacity)** vs **메모리 대역폭(Bandwidth)**의 구분을 다루어, 36GB Mac 노드에서 70B 밀집 모델 구동 시 발생하는 초당 4토큰 미만의 대역폭 병목 현상과 27B 모델(`Qwen 3.6-27B`) 등의 실용적 선택 배경 명시.
3. **예시 시나리오 및 실행 스크립트**:
   - Docker Compose 단일 실행 스크립트 예시 및 사양별 모델 운용(Qwen 3.6-27B, DeepSeek R1 8B, Frontier API 하이브리드) 시나리오 포함.
4. **충돌 섹션**:
   - 무마찰 온보딩(Frictionless Onboarding)으로 인한 대중화 이점 vs 마찰력 상실로 사용자가 하드웨어 한계에 대비하지 못해 생기는 착시 및 이탈 위험 간의 입장을 대조 정리.
5. **관련 노트 연동**:
   - [[Ollama]], [[공개 가중치 모델]], [[오픈소스 LLM 플랫폼]], [[로컬 LLM 연동 에이전트 CLI 설정]], [[에이전트 자율 루프]], [[코딩 에이전트]] 연결 및 향후 생성 예정인 개념 후보 명시.