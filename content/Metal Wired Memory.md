요청하신 개념 **`Metal Wired Memory`**에 대한 고품질 한국어 위키 노트를 성공적으로 생성하여 지식 베이스에 반영했습니다.

### 작성된 위키 노트 정보
- **노트 경로**: `/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Metal Wired Memory.md`
- **개념 유형**: `concept`
- **frontmatter 구성**: 스키마 요구사항(type, status, core, tags, aliases, sources, created, updated) 준수
- **포함 내용**:
  1. **한 줄 정의**: Metal Wired Memory의 기술적 개념 요약
  2. **핵심 요지**: 고속 GPU 연산 고정, 물리 RAM과의 제한 상한선 차이, LLM 추론 시의 실질적 메모리 천장 역할
  3. **상세 분석**:
     - macOS GPU 커널 상한선(16GB Mac mini 기준 약 10.5GB) 및 `[METAL] Command buffer execution failed: Insufficient Memory` OOM 에러 분석
     - 전문가 스트리밍(Expert Streaming) 환경에서의 피크 메모리 지배 방정식 ($\text{Peak Memory} \approx \text{백본 적재량} + \text{캐시 예산}$)
     - `sysctl` 커널 제한 조정 트레이드오프 및 투 트랙 적재(Two-track loading) 우회 설계 방향
     - OS 페이지 캐시 생리 제어를 위한 `F_NOCACHE` 및 `os.pread` 기법 결합
  4. **구체적 예시**: `TurboQuant-MLX` 기반 Qwen3.5-122B 모델 구동 시 4GB 캐시 설정 코드 및 동작 검증 데이터 예시
  5. **관련 노트 연동**: `[[TurboQuant-MLX]]`, `[[F_NOCACHE]]`, `[[MXFP4]]`, `[[Apple Silicon]]` 등 Obsidian 위키링크 포함
  6. **출처 명시**: 소스 파일 괄호 표기 준수