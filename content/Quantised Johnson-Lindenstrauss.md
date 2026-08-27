지정된 개념 **Quantised Johnson-Lindenstrauss (QJL)**에 대한 고품질 한국어 위키 노트를 작성 완료하여 `llm-wiki/wiki/Quantised Johnson-Lindenstrauss.md` 경로에 저장하였습니다.

### 작성된 노도의 주요 내용 요약
- **문서 위치**: [Quantised Johnson-Lindenstrauss.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Quantised%20Johnson-Lindenstrauss.md)
- **Frontmatter**: 요청된 스키마 규격(`type: concept`, `status: draft`, `sources`, `created`, `updated`, `aliases`, `tags`) 준수.
- **핵심 요지 및 상세**:
  - 구글 리서치가 발표한 [[TurboQuant]] 알고리이너의 2단계 잔차 보정 알고리즘으로서의 QJL 정의.
  - 1단계 [[PolarQuant]] 양자화 후 남아있는 미세 잔차(residual error)를 차원당 1비트 무작위 투영 및 부호 양자화(Sign Quantization)로 추출/보정하는 연산 기법 설명.
  - Softmax 연산 직전 어텐션 내적 오차를 정정하여 2.5~3.5비트 수준의 극저비트 양자화 환경에서도 FP16 베이스라인 정밀도를 유지하게 하는 역할 명시.
- **구체적 예시 및 코드**:
  - PyTorch 기반 QJL 잔차 벡터 계산, JL 무작위 행렬 투영, 1비트 부호 양자화 및 내적 오차 보정 프로세스를 시뮬레이션한 파이썬 코드 제공.
  - Apple Silicon MLX 환경에서 `sharpner/turboquant-mlx` 및 `TurboQuantKVCacheV2(use_qjl=True)`를 적용하는 실무 활용 코드 포함.
- **검증 지표 및 소스 출처 표기**: 헤드 차원($D=128$ vs $D=256$)에 따른 보정 효율 차이, Gemma 3 4B에서 펄플렉시티 1.1% 개선 수치, 벤치마크 및 소스 문서 경로(`raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 TurboQuant, 애플 실리콘 상륙.md`) 명시.
- **관련 위키 노트 연동**: [[TurboQuant-MLX]], [[KV 캐시 압축]] 등과의 Obsidian 링크 연결.