지정해주신 원칙과 기존 위키 내용, 그리고 새로 제공된 4개의 소스 문서들을 철저히 분석하여 **NVIDIA NIM** 위키 노트를 고품질로 보강 및 작성 완료하였습니다.

작성된 노트 파일: [`/Users/railscraft/Obsidian/wiki/NVIDIA NIM.md`](file:///Users/railscraft/Obsidian/wiki/NVIDIA%20NIM.md)

---

### 주요 보강 내용 요약
1. **Frontmatter 스키마 준수**:
   - `type: tool`, `status: draft`, `core: false`, `created: 2026-07-21` (기존 유지), `updated: 2026-08-27`, 지정된 4개 소스 파일 목록 명시.
2. **도메인 특화 모델 생태계 상세화**:
   - 범용 LLM(Llama 4, Qwen3, Nemotron 등) 외에도 생물/화학(단백질 구조 예측/신약 개발), 안전성(NeMo Guardrails), 고성능 임베딩(`nv-embedqa-e5-v5`), 비전, 음성 등 91개 이상의 무료 엔드포인트 및 카탈로그 수치 출처 표기.
3. **구체적 예시 추가**:
   - OpenAI SDK 및 PHP 규격을 활용한 NVIDIA NIM 호출 및 임베딩 생성 코드 예시와 Kimi JSON 페이로드 예시 추가.
4. **IDE 호환성 및 한계/충돌 정리**:
   - Cursor IDE의 외부 커스텀 모델 차단 및 에이전트 기능 락인(Lock-in) 제약, Cline을 활용한 자율 에이전트 루프 연동 방식 정리.
   - Kimi 모델의 멀티턴/긴 컨텍스트 수행 시 중국어/노이즈 텍스트 환각 현상 및 Groq/Cerebras 대비 엄격한 RPM(40회) 한도 명시.
5. **Obsidian 위키링크 연동**:
   - `[[NVIDIA Build (무료 AI 추론 플랫폼)]]`, `[[Ollama]]`, `[[오픈소스 LLM 경제성과 벤더 종속성 해지]]`, `[[코딩 에이전트]]` 등 기존/신규 개념 노트와 자연스럽게 연결.