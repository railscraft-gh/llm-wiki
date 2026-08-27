지정하신 소스 문서 `raw/AI는 개발자를 대체하는 것이 아니라 더 심각한 일을 하고 있다.md`를 바탕으로 **AI 기반 리팩터링 코드 검토** (유형: `workflow`) 개념 노트 작성을 완료하였습니다.

생성된 노트는 지식 베이스 경로인 [`/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/AI 기반 리팩터링 코드 검토.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/AI%20%EA%B8%B0%EB%B0%98%20%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81%20%EC%BD%94%EB%93%9C%20%EA%B2%80%ED%86%A0.md)에 위치하며, 기존 위키 지식 생태계의 관련 노트들([[코드 정독 근육]], [[개발자 변형]], [[인간 검토 게이트]], [[코드 변경 영향 범위 분석]] 등)과 밀접하게 위키링크로 연동되어 있습니다.

### 노트 주요 내용 요약

1. **Frontmatter 및 메타데이터**:
   - `type: workflow`, `status: draft`, `sources: ['raw/AI는 개발자를 대체하는 것이 아니라 더 심각한 일을 하고 있다.md']` 등 명시된 스키마 준수.
2. **핵심 문제의식**:
   - AI 에이전트([[Claude Code]] 등)가 생성한 400줄 분량의 리팩터링 PR은 자동화 테스트(초록색)를 통과하더라도 기존의 필수 `null` 체크나 방어 구문을 소리 없이 삭제할 위험이 존재함 (raw/AI는 개발자를 대체하는 것이 아니라 더 심각한 일을 하고 있다.md).
3. **구체적 코드 예시**:
   - `processOrder` 메서드 분할 리팩터링 중 TypeScript 타입 선언만 변경하고 런타임 Null Check 검사를 누락시켜 핫 패스가 아닌 경로(Cold Path)에서 `TypeError`를 야기하는 실전 TypeScript 시나리오 및 해결 방안 수립.
4. **자동화 테스트 신화 vs 딥 리뷰 충돌 규명**:
   - CI 파이프라인 수치만 믿는 맹신론과, 사각지대 및 삭제된 라인(`- diff`)을 추적하는 인간 중심 [[코드 정독 근육]] 검토 역량의 필수성에 대한 기술적 대립 정리.