지정한 개념 **Rule of Two**에 대한 LLM Wiki 노트를 성공적으로 작성했습니다.

작성된 위키 노트 파일: [`Rule of Two.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Rule%20of%20Two.md)

---

### 주요 작성 및 반영 내용 요약

1. **스키마 및 기본 정보 정합성**:
   - `type: claim`, `status: draft`, `core: false`, `created: 2026-08-28`, `updated: 2026-08-28` 스키마 규격을 충족합니다.
   - `sources` 필드 및 본문 내 인용 지표에 `(raw/Building a Week-Long Running Agentic System.md)` 소스 경로를 명시했습니다.

2. **개념 분석 및 정리**:
   - Meta 보안 팀에서 정립된 **Rule of Two**의 3대 고위험 권한(`UNTRUSTED_CONTENT`, `PRIVATE_DATA`, `EXTERNAL_COMMS`) 분석 및 3가지 권한 결합 시 발생하는 프롬프트 주입 기반 데이터 유출 위험 메커니즘을 상술했습니다.
   - 파이프라인 단계에서 단일 세션 권한을 2개 이하로 제한하고, 권한 분사를 통해 복수의 전문 에이전트 세션으로 오케스트레이션하는 설계 원칙을 제시했습니다.

3. **코드 예시 및 실용성**:
   - Python Pydantic 및 Enum 기반의 `check_rule_of_two` 예외 집행 구현 코드 예시와 실효성 있는 사용 시나리오를 포함했습니다.

4. **관련 지식 노드 연동**:
   - `[[에이전트 가드레일]]`, `[[프롬프트 주입 방어]]`, `[[기본 차단 네트워크 송신]]`, `[[에이전트 오케스트레이션]]`, `[[책임 있는 자율성]]` 등의 관련 위키 노트와 백링크를 자연스럽게 연동했습니다.