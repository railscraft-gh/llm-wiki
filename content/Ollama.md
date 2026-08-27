제공해주신 5개 소스 문서들을 바탕으로 지정된 스키마와 작성 가이드를 준수하여 **`Ollama`** 위키 노트를 새로 작성했습니다.

작성된 위키 노트 파일 위치: [`llm-wiki/wiki/Ollama.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Ollama.md)

---

### [작성 노트 주요 요약]

- **기본 스키마 준수**: `type: tool`, `status: draft`, `sources` 5개 파일 명시, `created/updated: 2026-08-27` 적용.
- **핵심 요지 & 상세 분석**:
  - 로컬 런타임 표준으로서의 역할과 OpenAI SDK 규격 호환 REST API 엔드포인트(`http://localhost:11434/v1`) 노출 메커니즘 정해.
  - 하드웨어 메모리 대역폭(Memory Bandwidth)과 VRAM/RAM 용량 간의 기술적 관계(16GB RAM CPU 50~70 GB/s, Apple Silicon M Pro/Max 200~400 GB/s, 24GB+ VRAM 등) 정리.
  - Odysseus, Open WebUI, Enchanted 모바일 앱 등 생태계 셀프 호스팅 아키텍처 연동 구조 반영.
- **코드 예시 & 실무 시나리오**:
  - 기본 CLI 명령 및 PHP/Laravel OpenAI SDK 호환 연동 예시.
  - VS Code Cline 에이전트 연동을 위한 대용량 컨텍스트 튜닝 `Modelfile` (num_ctx 65536) 예시.
  - NumPy + Ollama `nomic-embed-text` 기반 60줄 로컬 RAG 파이프라인 스크립트 예시.
- **충돌 및 한계점**:
  - 하드웨어 메모리 대역폭 한계로 인한 70B 밀집 모델 실사용 속도 저하(초당 4토큰 미만) 갭 명시.
  - 기본 `num_ctx`(40K 토큰) 초과 시 무경고 프롬프트 조용한 잘림(Silent Truncation) 현상 및 환각 유발 제약 기재.
- **관련 노트 및 수치 출처**: `[[Open WebUI]]`, `[[AI 게이트웨이]]`, `[[AI 보조 코딩]]`, `[[AI 환각 현상]]` 등 옵시디언 위키링크 연동 및 본문 내 정확한 소스 파일 괄호 표기 적용.