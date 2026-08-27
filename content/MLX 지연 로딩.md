요청하신 지식 개념 **'MLX 지연 로딩'**(유형: `concept`)에 대한 위키 노트를 작성 완료하였습니다.

생성된 노트는 지정된 템플릿 구조와 작성 원칙(Obsidian 위키링크 연동, frontmatter 스키마 준수, 출처 표기, 구체적 코드 예시 및 메커니즘 수치 포함)을 엄격히 준수하여 구축되었습니다.

### 📝 생성된 문서 위치
- **파일명**: [MLX 지연 로딩.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/MLX%20%EC%A7%80%EC%97%B0%20%EB%A1%9C%EB%94%A9.md)

---

### 📌 주요 작성 내용 요약

1. **한 줄 정의 및 핵심 요지**:
   - `load(..., lazy=True)`를 통해 모델 가중치 오픈 시 즉시 물리 RAM에 올리지 않고 `mmap` 상태로 지연 평가하는 MLX의 동작 방식 정의.
   - 최초 순방향 연산(Forward Pass) 시 텐서 실체화(Materialization)로 인해 전체 전문가 텐서 `(256, ...)`가 메탈 GPU 메모리로 일괄 적재되는 치명적 한계 명시.
2. **기술적 상세 및 메커니즘**:
   - 단순 지연 로딩 대 저수준 수동 통제를 적용하는 [[전문가 스트리밍]] 및 [[F_NOCACHE]], [[Metal Wired Memory]] Cap과의 상호작용 및 차이점 상세 분석.
3. **구체적 예시**:
   - 지연 로딩 사용 시 OOM이 발생하는 실패 시나리오 코드 및 이를 우회하여 16GB Mac mini에서 122B 모델 구동을 성립시키는 성공 시나리오 코드 포함.
4. **연관 위키 노와의 상호연결**:
   - [[전문가 스트리밍]], [[TurboQuant-MLX]], [[F_NOCACHE]], [[Metal Wired Memory]], [[전문가 혼합 아키텍처]] 등 기존 위키 개념들과 정교하게 상호 연결됨.