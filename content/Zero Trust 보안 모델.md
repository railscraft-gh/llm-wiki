요청해주신 **Zero Trust 보안 모델** 개념 노트 작성을 완료하였습니다.

생성된 노트는 지식 베이스 경로 [`Zero Trust 보안 모델.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Zero%20Trust%20%EB%B3%B4%EC%95%88%20%EB%AA%A8%EB%8D%B8.md)에 지정된 템플릿과 메타데이터 스키마 규격을 충실히 반영하여 작성되었습니다.

---

### 주요 반영 및 작성 내용 요약

1. **Frontmatter 메타데이터**:
   - `type: concept`, `status: draft`, `core: false`
   - tags: `security`, `zero-trust`, `api-key`, `secret-management`, `infrastructure`
   - sources: `raw/API_Key_관리_및_Infisical_도입_가이드.md`
   - created/updated: `2026-08-28`

2. **구체적 지표 및 출처 표기**:
   - 정기 로테이션 주기(프로덕션 30~90일, 일반 90~180일), Zero-Knowledge E2EE, Need-to-Know 및 Defense in Depth 수치 및 원칙 언급 시 소스 파일 경로(`raw/API_Key_관리_및_Infisical_도입_가이드.md`) 명시.

3. **구체적 실사례 및 코드 예시**:
   - Infisical CLI 기반 런타임 환경 변수 동적 주입 시나리오(`infisical run --env=prod ...`)
   - Node.js/TypeScript SDK를 활용한 Zero-Knowledge 기반 런타임 시크릿 조회 코드
   - 최소 권한(Least Privilege)을 강제하는 AWS IAM JSON Policy 설정 예시

4. **연관 위키 노트 상호 연결**:
   - [[API Key 관리]]
   - [[기업 AI 보안 및 데이터 사용 정책]]
   - [[프롬프트 인젝션 보안 방어]]
   - [[에이전트 가드레일]]