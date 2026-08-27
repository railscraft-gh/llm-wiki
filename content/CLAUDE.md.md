제시해주신 소스 문서들을 바탕으로 `CLAUDE.md` 위키 노트를 고품질로 종합 작성 및 보강하여 생성하였습니다.

작성된 위키 노트 파일 위치: [/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/CLAUDE.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/CLAUDE.md)

---

### 주요 반영 내용 및 특징 요약

1. **Frontmatter 메타데이터 준수**
   - 스키마 규칙에 맞춰 `type: tool`, `status: draft`, `core: false`, 지정된 7개 소스 목록, 및 날짜 정보를 완벽히 반영하였습니다.

2. **종합적 개념 및 기능 정립**
   - `CLAUDE.md`를 단순 설정 파일이 아닌 [[Claude Code]] 세션 시 자동 온보딩되는 **운영 매뉴얼(Operating Manual)**로 규정했습니다.
   - 프로젝트 경로별 로딩 우선순위(`CLAUDE.local.md` > `./CLAUDE.md` > `~/.claude/CLAUDE.md`) 및 자동 생성 명령어(`/init`, `/memory`)를 명시했습니다.

3. **관련 마크다운 파일과의 역할 비교 체계화**
   - **`CLAUDE.md` (운영 매뉴얼/HOW)** vs **`DESIGN.md` (디자인 단일 진실 공급원/WHAT)** vs **`MEMORY.md` (역사적 지식 보존/WHY)** 의 명확한 역할 차이를 비교 표와 함께 구성했습니다.

4. **Andrej Karpathy 4대 행동 가드레일 분석**
   - AI 에이전트의 실패 패턴(조용한 가정, 과잉 엔지니어링, 부수적 소음)을 교정하는 Karpathy의 4대 규칙(생각하기, 단순함, 외과적 수정, 목표 중심 실행)의 핵심 원칙을 종합했습니다.

5. **실무 작성 예시 및 조건부 호출 패턴**
   - 기술 스택, Commands, Architecture, Implementation Rules, Karpathy 4대 규칙을 결합한 종합 코드 예시를 포함했습니다.
   - `@DESIGN.md` 직접 임포트로 인한 컨텍스트 낭비(안티패턴)를 방지하는 조건부 문구 설정 예시를 제공했습니다.

6. **검증 가능한 지표 및 출처 표기 / 충돌 섹션**
   - 소스 문서 내 언급된 Boris Cherny의 2,500 토큰 권장 기준, Karpathy 레포 바이럴 수치(GitHub Star 9만 1천 개 vs 3만 개 이상) 등의 지표를 괄호 출처와 함께 반영했습니다.
   - GitHub Star 수치 차이 및 `@path` 직접 임포트 vs 온디맨드 읽기 전략 간의 트레이드오프를 `## 충돌` 섹션에 수록했습니다.