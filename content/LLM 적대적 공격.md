소스 문서 `raw/Adversarial Attacks on LLMs.md`를 바탕으로 지정된 개념 **[[LLM 적대적 공격]]**에 대한 고품질 한국어 위키 노트를 작성 완료하였습니다.

작성된 위키 노트 경로: [`/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/LLM 적대적 공격.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/LLM%20%EC%A0%81%EB%8C%80%EC%A0%81%20%EA%B3%B5%EA%B2%A9.md)

---

### 주요 포함 내용 요약

1. **Frontmatter 및 메타데이터**:
   - `type: concept`, `status: draft`, `core: false`
   - `tags: ['llm', 'security', 'adversarial-attack']`
   - `sources: ['raw/Adversarial Attacks on LLMs.md']`
   - 생성/수정일 `2026-08-28` 지정 스키마 준수

2. **구조 및 본문**:
   - **한 줄 정의 & 핵심 요지**: 추론 시점 가중치 고정 조건 하에 이산적 토큰 공간에서의 공격 특성과 전이성(Transferability)을 명료하게 요약.
   - **상세 분석**:
     1. 위협 모델 (분류 vs 생성, 화이트박스 vs 블랙박스)
     2. 5대 공격 유형:
        - 토큰 조작 (SEARs, TextFooler, BERT-Attack)
        - 기울기 기반 공격 (GBDA, HotFlip, UAT/UAT-LM/UTSC, GCG, ARCA)
        - 탈옥 프롬프트 (상충하는 목표, 불일치 일반화)
        - 인간 개입 레드팀 (BAD, Anthropic Red Team, 현저성 강조 UI)
        - 모델 기반 레드팀 (Explore-Establish-Exploit, FLIRT)
     3. 방어/완화 기술 (안장점 최적화 문제, Self-Reminder, PPL 검사, 적대적 학습)
   - **검증 가능한 지표/출처 표기**: 퍼플렉서티 수치($10^7$, $10^4$, $160$), 데이터셋 규모(BAD 2,500개, Anthropic 40,000개), 모델명(`Vicuna-7b`, `Vicuna-13b`, `GPT-3.5-turbo`, `GPT-4`, `GPT-2`, `GPT-J`)과 소스 출처 `(raw/Adversarial Attacks on LLMs.md)` 명시.
   - **실전 예시**: TextFooler/BERT-Attack 단어 중요도 점수($I_{w_i}$) 산출 파이썬/PyTorch 코드 예시 및 GCG 접미사 주입 공격 시나리오 구현.
   - **연관 노트 매핑**: `[[프롬프트 주입 방어]]`, `[[프롬프트 인젝션 보안 방어]]`, `[[AI 톤앤매너 가드레일 설정]]`, `[[LLM 아키텍처 Lost in the Middle 현상]]`과 상호 연결.