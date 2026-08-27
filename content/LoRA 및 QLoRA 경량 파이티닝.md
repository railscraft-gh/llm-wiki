요청하신 개념 **'LoRA 및 QLoRA 경량 파이티닝'**에 관한 고품질 위키 노트를 주어진 작성 원칙, 규칙 및 템플릿에 맞추어 생성하였습니다.

노트는 지식 베이스 경로인 [`scratch/llm-wiki/wiki/LoRA 및 QLoRA 경량 파이티닝.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/LoRA%20%EB%B0%8F%20QLoRA%20%EA%B2%BD%EB%9F%89%20%ED%8C%8C%EC%9D%B4%ED%8B%B0%EB%8B%9D.md)에 저장되었습니다.

---

### 📝 생성된 위키 노트 요약

1. **Frontmatter 스키마 준수**: `type: concept`, `status: draft`, `sources`, `tags`, `aliases`, 생성/수정 일자(`2026-08-27`) 명시.
2. **핵심 정의 및 수학적/기술적 메커니즘**:
   - **LoRA**: 원본 가중치 $W_0$ 동결 후 저차원 분해 행렬($B \cdot A$)만 파라미터 99% 절감 방식으로 학습하는 아키텍처.
   - **QLoRA**: Base Model의 4-bit NormalFloat(NF4) 양자화, 이중 양자화(Double Quantization), Paged Optimizers 조합으로 단일 소비자 GPU 메모리 한계 극복.
3. **실무적 유연성 & 코드 예시**:
   - RAG와 Fine-Tuning의 의사결정 트레이드오프 정리.
   - PyTorch 및 Hugging Face `peft`, `bitsandbytes` 기반 QLoRA 실전 파인튜닝 코드 포함.
4. **위키 연동성 및 출처 검증**:
   - [[공개 가중치 모델]], [[하이브리드 검색]], [[LLM 아키텍처 Lost in the Middle 현상]], [[지식 증류]] 등 기존 개념 노트와 연결.
   - 출처 인용 경로 (`raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`) 표기 완료.