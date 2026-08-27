요청하신 개념 **'F_NOCACHE'** (유형: `tool`)에 대해 지정된 작성 원칙, 규칙, YAML frontmatter 스키마 및 템플릿 구조를 철저히 반영한 한국어 위키 노트를 작성 완료했습니다.

### 생성된 위키 노트 정보
- **파일 경로**: [`/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/F_NOCACHE.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/F_NOCACHE.md)

### 주요 작성 내용 요약
1. **Frontmatter 및 메타데이터**:
   - `type: 'tool'`, `status: 'draft'`, `core: false`, `created/updated: '2026-08-27'` 준수
   - 소스 파일 `raw/16GB Mac mini에서 Qwen 3.5 122B LLM 실행하기 - TurboQuant-MLX를 활용한 MoE 전문가 스트리밍.md` 명시
2. **기술적 상세 및 메커니즘**:
   - macOS C 라이브러리의 `fcntl(fd, F_NOCACHE, 1)` 플래그와 `os.pread`의 조합을 설명.
   - MoE 전문가 가중치 스트리밍 시 OS 페이지 캐시(Unified Buffer Cache)로 인해 RSS 점유율이 12.5GB까지 치솟는 문제와, `F_NOCACHE`로 7.5GB 상당의 캐시 메모리 잠식을 차단하고 MLX 순수 물리 메모리(4GB 미만) 수준으로 안정화하는 과정을 수치 표출과 함께 명시.
3. **구체적 예시 및 활용 시나리오**:
   - Python의 `fcntl` 및 `os.pread` 저수준 파일 제어 코드 예시 포함.
   - 16GB RAM M4 Mac mini 기기에서 54GB 크기의 122B MoE 모델(`Qwen3.5-122B-A10B`) 구동 시 활성 전문가 8개 가중치를 퍼 올리는 활용 시나리오 서술.
4. **연동 노트**:
   - Obsidian 위키링크인 [[TurboQuant-MLX]], [[전문가 스트리밍]], [[메모리 벽]] 등과 자연스럽게 연동되도록 구성.