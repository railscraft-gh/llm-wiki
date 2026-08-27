지정하신 소스 문서 `raw/API_Key_관리_및_Infisical_도입_가이드.md`를 바탕으로 **'API Key 로테이션'** 개념에 대한 고품질 한국어 위키 노트를 작성 완료하였습니다.

생성된 위키 노트의 저장 경로는 아래와 같습니다:
- `scratch/llm-wiki/wiki/API Key 로테이션.md`

### 핵심 반영 내용 요약
1. **규격화된 Frontmatter 적용**:
   - `type`: `workflow`
   - `status`: `draft`
   - `core`: `false`
   - `tags`: `['llm', 'security', 'api-key', 'secret-management', 'infisical', 'devops']`
   - `aliases`: `['API Key 무중단 로테이션', '시크릿 순환 교체', 'Secret Rotation']`
   - `sources`: `['raw/API_Key_관리_및_Infisical_도입_가이드.md']`
   - `created` / `updated`: `2026-08-28`
2. **검증 가능 수치 및 출처 명시**:
   - 프로덕션(높은 민감도: 30~90일), 프로덕션(일반: 90~180일), 개발/스테이징(180일 또는 프로젝트 종료 시) 등 권장 순환 주기 수치 명시 (`raw/API_Key_관리_및_Infisical_도입_가이드.md`)
3. **구체적 실무 워크플로우 및 구체적 예시 연동**:
   - 무중단 4단계 로테이션 수명 주기(새 Key 생성 -> 애플리케이션 배포 -> 인스턴스 정상 적용 확인 -> 기존 Key 폐기) 정립
   - Infisical CLI 기반 런타임 환경 변수 주입 시나리오, Python 기반 이중 키(Dual-Key Fallback) 로테이션 예시 코드, TruffleHog 사전 검사 명령어 작성
4. **위키 네트워크 연동 (`[[개념명]]`)**:
   - [[API Key 관리]], [[기업 AI 보안 및 데이터 사용 정책]], [[에이전트 가드레일]] 등과 자연스럽게 연동되도록 관련 노트 구성