지정하신 작성 원칙, frontmatter 스키마 및 템플릿 구조에 맞춰 신규 위키 노트 **`Git Diff 중심 코드 작성.md`** 생성을 성공적으로 완료했습니다.

---

### 작성 내용 요약

- **파일 위치**: [`llm-wiki/wiki/Git Diff 중심 코드 작성.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Git%20Diff%20%EC%A4%91%EC%8B%AC%20%EC%BD%94%EB%93%9C%20%EC%9E%91%EC%84%B1.md)
- **Frontmatter**:
  - `type`: `workflow`
  - `status`: `draft`
  - `core`: `false`
  - `tags`: `['llm', 'agent', 'git', 'code-review', 'workflow']`
  - `sources`: `['raw/7 Coding Patterns I Stole From Senior Engineers.md']`
  - `created` / `updated`: `2026-08-27`
- **핵심 구성**:
  1. **한 줄 정의**: 코드 리뷰어와 [[코딩 에이전트]]의 인지 부하 절감 및 롤백 안전성을 고려한 Git 커밋/PR 단위 최적화 개발 워크플로우 정의.
  2. **핵심 요지 & 상세**: 소스 문서(`raw/7 Coding Patterns I Stole From Senior Engineers.md`)에 기반하여 시니어 엔지니어의 7가지 핵심 의사결정 패턴([[조기 반환 패턴]], [[도메인 언어 기반 명명법]], [[외부 시스템 경계 매핑]], [[불가능한 상태 차단 데이터 모델링]], [[의사결정과 실행 분리 패턴]], [[구조화된 에러 추적 설계]], 세부 PR 분할)과 결합하여 서술.
  3. **구체적 예시**: 단일 대형 PR 대비 Git Diff 중심의 5단계 분할 PR(`PR 1`~`PR 5`) 사례 표기 및 LLM 모델(Claude 3.7 Sonnet) 연동 Git Diff 자동 검증 Shell 스크립트 예시 포함.
  4. **충돌 및 해소**: 단기 타임라인 속도 압박과 리뷰 품질 간의 마찰 분석 및 종합 생산성(리뷰 시간, 롤백 안정성) 관점의 해결 방안 제시.
  5. **관련 위키 노트 연결**: [[PR 크기 및 수량 제어]], [[코드 리뷰 대기열 병목]], [[조기 반환 패턴]], [[도메인 언어 기반 명명법]], [[외부 시스템 경계 매핑]], [[불가능한 상태 차단 데이터 모델링]], [[의사결정과 실행 분리 패턴]], [[구조화된 에러 추적 설계]], [[AI 보조 코딩]], [[코딩 에이전트]], [[Git Worktree 기반 작업 영역 격리]] 등 10개 이상의 유관 위키 노트 연동.