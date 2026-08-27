요청하신 지정 개념 **'희소 MoE 디스크 대역폭 병목'**에 관한 고품질의 한국어 위키 노트를 모든 작성 원칙과 스키마 구조에 맞춰 작성하였습니다.

생성된 노트는 지정된 경로 [`/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/희소 MoE 디스크 대역폭 병목.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/%ED%9D%AC%EC%86%8C%20MoE%20%EB%94%94%EC%8A%A4%ED%81%AC%20%EB%8C%80%EC%97%AD%ED%8F%AD%20%EB%B3%91%EB%AA%A9.md)에 저장 완료되었습니다.

---

### 작업 결과 요약

1. **Frontmatter 스키마 적용**:
   - `type: claim`, `status: draft`, `core: false`, 관련 태그(`llm`, `moe`, `hardware`, `apple-silicon`, `memory`, `storage`), 소스 경로(`raw/16GB Mac mini에서 Qwen 3.5 122B LLM 실행하기 - TurboQuant-MLX를 활용한 MoE 전문가 스트리밍.md`) 및 날짜(`2026-08-27`) 명시.

2. **개념 분석 및 내용 구조화**:
   - **한 줄 정의**: 희소 MoE 추론 시 전문가 가중치 스트리밍 적용에 따라 시스템 구동 제약 조건이 [[메모리 벽]](RAM 용량)에서 저장 장치의 읽기 속도(디스크 대역폭)로 이동하는 현상 명확화.
   - **핵심 요지 및 상세 메커니즘**:
     - 개별 전문가 디스크 스트리밍(Per-expert disk streaming)을 통한 메모리 격리(Decoupling).
     - mmap 지연 로딩의 함정 및 `F_NOCACHE` / `os.pread` 시스템 콜을 통한 OS 페이지 캐시 제어.
     - 실질 하드웨어 한계선인 GPU 와이어드 메모리 제한([[Metal Wired Memory]])과 최적의 4GB 캐시 예산 지점 도출.
   - **구체적 실증 예시 및 코드 수록**:
     - 16GB Mac mini 환경에서의 Qwen3.6-35B-A3B 및 Qwen3.5-122B-A10B 벤치마크 데이터 비교 표 수록.
     - `turboquant_mlx.stream.loader` 기반의 실제 파이썬 코드 예시 및 ASCII 아키텍처 다이어그램 포함.
   - **상호 연동 위키 링크 구립**:
     - [[메모리 벽]], [[TurboQuant-MLX]], [[F_NOCACHE]], [[Metal Wired Memory]], [[공개 가중치 모델]] 등의 위키 링크 연동.
   - **검증 가능한 지표 및 출처 표기**:
     - 수치, 벤치마크, 파라미터 규격 언급 시 출처 소스 파일 표기 (`raw/16GB Mac mini에서 Qwen 3.5 122B LLM 실행하기 - TurboQuant-MLX를 활용한 MoE 전문가 스트리밍.md`).