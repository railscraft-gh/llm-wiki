요청하신 **'LRU 전문가 캐시'** (유형: `workflow`) 개념 노트 작성을 성공적으로 완료하였습니다.

생성된 노트 파일: [`LRU 전문가 캐시.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/LRU%20%EC%A0%84%EB%AC%B8%EA%B0%80%20%EC%BA%90%EC%8B%9C.md)

---

### [작성 요약]

1. **템플릿 및 Frontmatter 준수**
   - `type: workflow`, `status: draft`, `core: false`, `sources`, `created/updated` 등 지정된 스키마 규격을 엄격하게 반영했습니다.
2. **검증 가능한 지표 및 출처 표기**
   - Qwen3.6-35B-A3B 및 Qwen3.5-122B-A10B 모델에 대한 LRU 캐시 예산별 전문가 히트율, 토큰 생성 속도(tok/s), 디스크 전송량, Peak RSS 메모리 수치 등에 소스 출처 경로 `(raw/16GB Mac mini에서 Qwen 3.5 122B LLM 실행하기 - TurboQuant-MLX를 활용한 MoE 전문가 스트리밍.md)`를 명시했습니다.
3. **구체적 실습/코드 예시 및 활용 시나리오**
   - CLI 실행 스크립트(`turboquant_mlx.stream.stream_generate`) 및 파이썬 API 연동 예시(`load_streaming`, `cache.stats()`)를 모두 기재했습니다.
   - Metal Wired Memory 임계치와 기본 적재량 및 LRU 캐시 예산 간의 역학 수식을 상세 설명에 구성했습니다.
4. **위키 네트워크 연동 및 충돌 항목 정리**
   - `[[전문가 스트리밍]]`, `[[전문가 혼합 아키텍처]]`, `[[TurboQuant-MLX]]`, `[[Metal Wired Memory]]`, `[[F_NOCACHE]]`, `[[MLX 지연 로딩]]`, `[[메모리 벽]]` 등 관련 개념 노트들과 위키링크로 연동되도록 작성하였습니다.