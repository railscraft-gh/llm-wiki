제공해주신 소스 문서(`raw/API_Key_관리_및_Infisical_도입_가이드.md`)를 분석하여, 요청하신 프론트매터 스키마 및 위키 템플릿 규칙을 준수하여 **API Key 관리** 위키 노트를 성공적으로 생성했습니다.

[노트 위치](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/API%20Key%20%EA%B4%80%EB%A6%AC.md): `/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/API Key 관리.md`

---

### 작성 결과 요약

- **Frontmatter**: 요청된 `type: workflow`, `status: draft`, `sources`, `created`, `updated` 등 필수 메타데이터 스키마를 완벽히 준수했습니다.
- **핵심 정리 및 상세 내용**: API Key 관리의 4대 원칙(Need-to-Know, Defense in Depth, Zero Trust, Rotate Early/Rotate Often)과 12-Factor App 환경 변수 분리 정책, E2EE 기반 오픈소스 솔루션(Infisical) 도입 방안을 체계적으로 도출했습니다.
- **검증 가능한 출처 표기**: 저장 방식별 보안 등급, 검사 패턴 수치(700+ 패턴 스캔) 등 수치 및 검증 가능 지표에 소스 파일 경로(`raw/API_Key_관리_및_Infisical_도입_가이드.md`)를 명시했습니다.
- **구체적 예시 포함**:
  1. Python 기반 `.env` 환경 변수 검증 패턴 코드
  2. Node.js/TypeScript 기반 Infisical SDK 런타임 Secret 주입 코드
  3. TruffleHog CLI 사전 검사 명령어
- **위키 연동**: [[기업 AI 보안 및 데이터 사용 정책]], [[프롬프트 인젝션 보안 방어]], [[SubagentStop 라이프사이클 훅]], [[에이전트 가드레일]] 등 지식 베이스 내 타 개념들과 연결을 완료했습니다.