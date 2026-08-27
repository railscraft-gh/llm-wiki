요청하신 'TextAttack' 개념(유형: tool)에 대해 소스 문서(`raw/Adversarial Attacks on LLMs.md`) 및 위키 지식 베이스의 작성 표준 규격을 준수하여 한국어 위키 노트를 성공적으로 작성했습니다.

작성된 파일 위치: [TextAttack.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/TextAttack.md)

---

### 주요 반영 사항 요약

1. **Frontmatter 및 메타데이터**:
   - `type: tool`, `status: draft`, `core: false`, `created: 2026-08-28`, `updated: 2026-08-28` 스키마 적용.
   - `sources: ['raw/Adversarial Attacks on LLMs.md']` 명시.
2. **Obsidian 위키링크 연동**:
   - [[LLM 적대적 공격]], [[대규모 언어 모델]], [[모델 레드팀 공격]], [[프롬프트 인젝션 보안 방어]], [[LLM 적대적 공격|Jailbreak]] 등 유관 지식 노트와 자연스럽게 연결되도록 구성.
3. **근거 명시 및 인용 출처**:
   - 수치, 개념 정의 및 수식에 대해 `(raw/Adversarial Attacks on LLMs.md)` 출처 표기 적용.
4. **구체적 예시 파트 작성**:
   - TextAttack의 4대 구성 컴포넌트(`Goal Function`, `Transformation`, `Constraints`, `Search Method`) 및 HuggingFace 연동 파이썬 API 예시 코드를 포함.
   - TextFooler 적대적 단어 변환(예: `terrible` $\to$ `dreadful`) 전후 입출력 사례 수록.
5. **충돌 및 관련 노트 정리**:
   - 단순 토큰 교체 기반 공격 기법(TextAttack)이 최근 대규모 생성형 LLM 및 Jailbreak/GCG 공격 환경으로 변화함에 따른 연구적 한계 및 트레이드오프 기재.