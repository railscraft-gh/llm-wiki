지정하신 스키마와 작성 원칙에 따라 `Search-R1` 개념에 대한 고품질 한국어 위키 노트를 작성하여 생성하였습니다.

### [생성된 노트 정보]
- **파일 경로**: [`Search-R1.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Search-R1.md)
- **개념**: `Search-R1` (유형: `tool`, 상태: `draft`)
- **주요 포함 요소**:
  1. **규격화된 Frontmatter**: `type`, `status`, `tags`, `sources`, `created`, `updated` 스키마 완전 준수.
  2. **핵심 분석 및 지표**:
     - Qwen2.5-7B 기준 7개 QA 데이터셋 평균 EM `0.431` 달성 및 기존 RAG 베이스라인(`0.304`) 대비 **24% 성능 향상** 수치 명시 및 소스 경로 명기 `(raw/AI Agents Don’t Need Vector Search Anymore. Inside the Agentic Search Stack Replacing RAG in 2026.md)`.
     - veRL/RAGEN 기반 PPO·GRPO 강화 학습 매커니즘 및 훈련 손실 마스킹(Loss Masking) 상세 기술.
     - CoSearch, Agentic-RAG-R1 등 후속 연구로의 확장 및 3B 파라미터 20% 향상 지표 포함.
  3. **구체적 실전 예시**:
     - 추론 흐름 시나리오 (`<search>` 토큰 생성 및 마스킹된 검색 결과 반영 CoT).
     - PyTorch/Policy Gradient 기반 강화 학습 Loss 계산 및 검색 마스킹 의사코드(pseudo-code).
  4. **위키 연동 및 관련 노트**: `[[RAG]]`, `[[에이전트 주도 검색]]`, `[[검색자로서의 에이전트]]`, `[[적시 컨텍스트 로딩]]`, `[[하이브리드 검색]]`, `[[모델 컨텍스트 프로토콜]]`, `[[Claude Code]]` 등 타 지식 개념과의 자연스러운 Obsidian 링크 연동.