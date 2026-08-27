지정해 주신 작성 원칙 및 규칙, frontmatter 스키마, 기존 노트 보강 규칙을 모두 준수하여 **`Model Context Protocol`**에 대한 고품질의 위키 노트를 작성 완료하였습니다.

작성된 위키 노트는 아티팩트 파일로 생성되었습니다:
- [Model Context Protocol.md](file:///Users/railscraft/.gemini/antigravity-cli/brain/44b63804-2185-4d6d-941f-77552782ea1f/Model%20Context%20Protocol.md)

### 주요 보강 및 결합 내용 요약
1. **Frontmatter 및 메타데이터**:
   - `type: 'tool'`, `status: 'draft'`, `core: false`, `created: '2026-06-10'` (기존 최초 생성일 보존), `updated: '2026-08-27'`을 준수하였습니다.
   - 요청된 15개 소스 문서와 기존 24개 소스 문서 목록을 정확히 통합 수록하였습니다.

2. **신규 소스 문서 결합 및 구체적 기술 사례 반영**:
   - **에이전틱 아키텍처 및 컨텍스트 엔지니어링**: MCP 기반 툴 지연 로딩(Tool Lazy Loading)이 컨텍스트 토큰 소모를 최대 95% 절감하고 적시 컨텍스트 로딩(Just-in-Time Context Loading) 패러다임의 기틀이 됨을 출처 명시와 함께 기술하였습니다 (`raw/AI Agents Don’t Need Vector Search Anymore. Inside the Agentic Search Stack Replacing RAG in 2026.md`).
   - **서드파티 도구 및 디자인/UI 연동 시나리오**: Claude Code에서 Figma 원격 HTTP MCP 서버(`https://mcp.figma.com/mcp`)를 연동해 디자인과 코드를 양방향으로 동기화하는 실제 워크플로 및 CLI 명령어를 본문 예시에 추가하였습니다 (`raw/Claude Code + Figma = 💛.md`).
   - **생태계 및 오픈 표준화**: MCP가 Linux Foundation 에이전틱 AI 재단에 기증되어 오픈 생태계의 기틀이 되었음을 반영하였습니다 (`raw/Agent Journey Map. Designing Software for AI Agents.md`).

3. **'## 충돌' 섹션 정리**:
   - MCP가 오픈 에이전트 도구 표준으로 자리잡은 반면, LLM의 기본 CLI 추론 능력을 직접 활용하여 별도 직렬화 프로토콜 없이 CLI와 마크다운 문서만 제공하는 접근법이 에이전트 오버헤드 축소 측면에서 더 우수하다는 기술적 상충 주장을 명확히 정리하였습니다 (`raw/Why CLIs Beat MCP for AI Agents — And How to Build Your Own CLI Army. The Guy With 190K GitHub Stars Just Proved Me Right..md`, `raw/Agent Journey Map. Designing Software for AI Agents.md`).