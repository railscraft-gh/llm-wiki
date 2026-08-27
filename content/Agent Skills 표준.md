지정해주신 소스 문서들(`raw/AI Agent Best Practices. Production-Ready Harness Engineering (2026 Guide)-ko.md`, `raw/pi-coding-agent-overview.md`)과 기존 LLM Wiki의 스키마 및 연관 개념 노트들([[에이전트 스킬]], [[하네스 엔지니어링]] 등)을 정교하게 분석하여 **`Agent Skills 표준.md`** 개념(concept) 위키 노트를 새로 작성 완료했습니다.

### 주요 반영 사항

1. **Frontmatter 스키마 준수**:
   - `type: concept`, `status: draft`, `core: false`, `sources`, `created`, `updated` 등 지정된 모든 표준 필드 포함.
2. **검증 가능한 출처 표기**:
   - 디렉토리 규격(`SKILL.md`, `references/`, `scripts/`), `agents-best-practices`의 4단계 프롬프트 캐싱 계층구조(Layer 0~3), `Pi Coding Agent` 패키지 구성 및 슬래시 커맨드 바인딩 등 소스 문서의 구체적 지표와 정보에 문장별 출처(`raw/...`) 명시.
3. **구체적인 기술 예시 포함**:
   - `agents-best-practices` 기반의 canonical agentic loop 의사코드 (예산 및 권한 매트릭스 결합형)
   - `Pi Coding Agent` 확장 패키지에서의 `package.json` 스킬 번들링 및 CLI 명령어 예시
4. **의견 충돌 섹션 작성 (`## 충돌`)**:
   - **내장 기능(Batteries-Included) 대 미니멀 하네스 기반 스킬 분리** 대립
   - **스킬 지침 보안 대 하네스 런타임 강제 보안** 관점 차이
5. **위키 네트워크 연동 (`## 관련 노트`)**:
   - 기존 노트([[에이전트 스킬]], [[하네스 엔지니어링]], [[Claude Code]]) 및 상호 보완 노트([[에이전트 하네스 엔지니어링]], [[Pi Coding Agent]], [[프롬프트 캐싱]]) 6개 이상을 백링크(`[[노트명]]`)로 연결.

생성된 노트 파일 경로는 다음과 같습니다:
`file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Agent%20Skills%20%ED%91%9C%EC%A4%80.md`