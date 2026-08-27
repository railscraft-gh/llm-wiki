요청하신 개념 **'Figma Model Context Protocol'**에 대한 위키 노트를 작성하여 LLM Wiki 경로(`scratch/llm-wiki/wiki/Figma Model Context Protocol.md`)에 성공적으로 생성/저장하였습니다.

---

### [생성된 위키 노트 개요]

- **문서 위치**: `scratch/llm-wiki/wiki/Figma Model Context Protocol.md`
- **유형(type)**: `tool`
- **Status**: `draft`
- **Frontmatter 메타데이터**:
  - `sources`: `['raw/Agentic AI, design systems & Figma. a practical guide-ko.md']`
  - `created / updated`: `2026-08-28`
  - `tags`: `['llm', 'agent', 'figma', 'mcp', 'ui-ux']`

### 주요 포함 내용
1. **한 줄 정의**: AI 코딩 에이전트(Claude Code 등)가 Figma 호스팅 원격/로컬 서버와 연결하여 디자인 시스템 데이터를 직접 파싱 및 코드 변환을 수행하도록 보장하는 MCP 연동 규격 명시.
2. **핵심 요지 및 상세 분석**:
   - 디자이너가 정제해 둔 컴포넌트, 변수(Variables), 오토레이아웃(Auto Layout $\rightarrow$ Flexbox/Grid 변환), Slots(2026년 3월 5일 오픈 베타) 등의 속성을 에이전트 지시서(Context)로 주입하는 메커니즘.
   - Uber의 `Figma Console MCP` (`https://github.com/southleft/figma-mcp`) 오픈소스 실제 구축 및 정량적 평가 지표(토큰 비용, 생성 속도, 코드 준수율) 제시.
   - 컴포넌트 단순 파싱(Figma MCP)을 코드베이스의 기존 컴포넌트 재사용으로 완성하는 [[Code Connect]]와의 상호보완적 관계 기술.
3. **예시**:
   - Claude Code CLI에서의 Figma MCP HTTP 서버 등록 및 플러그인 설치 스크립트.
   - Figma MCP가 파싱한 Named Slot 기반 React 컴포넌트 조립 스니펫.
4. **기술적 충돌(Conflict)**:
   - Figma Variables와 달리 Figma Styles(타이포그래피, 그라디언트 등)는 자동 CSS 클래스 변환이 되지 않아 Naming Convention 합의 및 Tokens Studio/Style Dictionary 파이프라인이 전제되어야 하는 한계 명시.
   - 코드 통과(Code Test Passed)와 디자이너의 미학적/브랜드 기준(Visual Truth) 간의 검증 루프 갭 문제 분석.
5. **관련 노트 및 출처**:
   - [[Figma MCP]], [[Figma-Claude Code 양방향 연동]], [[Code Connect]], [[Storybook MCP]], [[Atomic Design]], [[Model Context Protocol]] 등 상호 연결 링크 포함.