요청하신 개념 **OpenRouter**에 대한 위키 노트를 주어진 규칙과 작성 표준에 맞추어 완전히 자율적으로 생성하였습니다.

작성된 위키 노트 파일: [OpenRouter.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/OpenRouter.md)

---

### 주요 작성 및 보강 내용 요약

1. **정확한 Frontmatter 스키마 적용**:
   - `type`: `tool`
   - `status`: `draft`
   - `core`: `false`
   - `tags`: `['llm', 'agent', 'ai-gateway', 'open-source']`
   - `sources`: `['raw/2026년 오픈소스 LLM 플랫폼 비교 가이드 - Ollama, OpenRouter, Groq, NVIDIA NIM.md']`
   - `created`: `2026-08-27`, `updated`: `2026-08-27`

2. **핵심 분석 및 상세 내용**:
   - **개념 정립**: 50개 이상의 제공업체 및 300개 이상의 모델을 단일 API 키와 OpenAI 호환 규격으로 잇는 대표적 클라우드 AI 게이트웨이로 정의.
   - **지표 및 소스 명시**: 2026년 4월 기준 제공되는 30개 이상의 무료 모델 목록(DeepSeek R1, Llama 3.3 70B, Qwen3 235B, Gemma 4 27B 등) 및 분당 20회(RPM) 제한 수치 등을 소스 경로와 함께 명기.
   - **구체적 코드 예시**: OpenRouter API 기본 호출 구조 및 single API 기반 멀티 모델 A/B 테스트 서비스 코드 구현 포함.

3. **충돌 및 트레이드오프 기재**:
   - 라우팅 수수료(5%) 및 라우터 선택에 따른 제공업체 간 3~7배 가격/지연 시간 편차 vs 복수 API 계약/관리 공수 절감 간의 효율성 논쟁을 `## 충돌` 섹션에 반영.

4. **연관 위키 노트 연동**:
   - [[AI 게이트웨이]], [[오픈소스 LLM 플랫폼]], [[Ollama]], [[공개 가중치 모델]] 등의 위키 노트와 백링크 연동 완료.