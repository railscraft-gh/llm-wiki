지정해주신 개념 **'LLM 가드레일 계층 구축'** (유형: `workflow`)에 대한 신규 위키 노트를 성공적으로 작성하여 지식 베이스에 추가했습니다.

### 📄 작성된 노출 및 경로
- **노트 위치**: [`LLM 가드레일 계층 구축.md`](file:///Users/railscraft/Obsidian/wiki/LLM%20%EA%B0%80%EB%93%9C%EB%A0%88%EC%9D%BC%20%EA%B3%84%EC%B8%B5%20%EA%B5%AC%EC%B6%95.md)

---

### 📝 주요 포함 내용 요약
1. **Frontmatter 및 메타데이터 준수**: `type: workflow`, `status: draft`, `sources`, 태그 및 날짜 정보를 완벽히 설정했습니다.
2. **2중 방어선 구조 설계**:
   - **입력 가드레일 (Input Guardrail)**: [[프롬프트 인젝션 보안 방어|Prompt Injection Detector]], Topic Classifier (Off-topic 차단), PII (개인식별정보) 마스킹.
   - **출력 가드레일 (Output Guardrail)**: [[LLM 외부 환각 탐지 및 완화 메커니즘|Hallucination Detector]], Format Validator (Pydantic/JSON 스키마 검증), Toxicity Filter.
3. **구체적 실무 예시 및 모델 명시**:
   - `Meta-Llama-Guard-3-8B`, `DeBERTa-v3-base-injection`, Microsoft Presidio 등의 검증 모델 명시.
   - 파이썬 기반 `LLMGuardrailPipeline` 구현 예시 코드 및 엔터프라이즈 금융 RAG 시스템 활용 시나리오 수록.
4. **지연 시간(Latency) 및 안전성 충돌 분석**:
   - 직렬 가드레일 검증 시 발생하는 latency 지연 이슈와 이에 대응하기 위한 경량 모델 활용 및 비동기/스트리밍 검증 트레이드오프 기재.
5. **소스 출처 표기 및 관련 노트 연동**:
   - 본문 수치 및 지표에 `(raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md)` 표기.
   - [[프롬프트 인젝션 보안 방어]], [[LLM 외부 환각 탐지 및 완화 메커니즘]], [[에이전틱 보안 파이프라인]], [[RAG 아키텍처 선택]], [[장애 복구 및 폴백 아키텍처 (Fallback & Failure Modes Design)]] 등 유관 개념 링크 연결 완료.