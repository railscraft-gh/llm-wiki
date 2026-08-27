지정하신 소스 문서 `raw/Building a Week-Long Running Agentic System.md`를 철저히 분석하고 작성 지침 및 스키마를 준수하여 **Temporal**에 관한 위키 노트를 성공적으로 작성 완료하였습니다.

생성된 위키 노트 파일 위치: [/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Temporal.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Temporal.md)

---

### [작성 내용 요약]

- **Frontmatter & 스키마**: `type: tool`, `status: draft`, `sources: ['raw/Building a Week-Long Running Agentic System.md']`, `created: 2026-08-28`, `updated: 2026-08-28` 등 지정된 스키마를 완벽히 준수하였습니다.
- **한 줄 정의**: 결정적 워크플로우와 비결정적 액티비티로 실행 흐름을 분리하여 저널링 및 리플레이(replay) 기반의 자율 복구와 지속성(durability)을 제공하는 오케스트레이션 프레임워크이자 제어 플랫폼으로 정의하였습니다.
- **핵심 요지**: 엔지니어링 기반 지속성 확보 원칙, 스케줄러-액티비티 분리, 자원 무부하 대기(durable sleep) 및 `Continue-As-New` 패턴, 대용량 로그 포화 방지를 위한 `Claim-Check` 코덱 최적화, 사가(Saga) 패턴 등을 도출해 구성하였습니다.
- **상세 및 검증 지표**: 호스트 재부팅 및 서버 다운 상황에서 631개 이벤트 저널링 기준 **0개 토큰 재소비**, **0개 중복 커밋**으로 복구된 실측 지표 및 32 KiB 임계치 Claim-Check 코덱 구조를 소스 경로(`raw/Building a Week-Long Running Agentic System.md`)와 함께 명시하였습니다.
- **구체적인 코드 예시**: 파이썬 `temporalio` SDK 기반의 결정적 워크플로우 클래스(`MissionWorkflow`), 지수 백오프 재시도 정책(`RetryPolicy`), 멱등적 액티비티 호출, `Continue-As-New` 패턴 구현 코드를 수록하였습니다.
- **관련 노트 및 상호 연동**: Obsidian 위키링크(`[[...]]`) 형태로 [[AI 에이전트 제어 루프]], [[Git]], [[결정적 검증기]], [[비용 가버너]] 등을 자연스럽게 연결하였습니다.