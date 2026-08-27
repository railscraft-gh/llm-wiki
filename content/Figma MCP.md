요청하신 개념 **'Figma MCP'**에 대한 위키 노트를 성공적으로 작성 완료하였습니다.

작성된 위키 노트는 지정된 스키마, 템플릿 구조, Obsidian 위키링크(`[[개념명]]`), 수치 및 출처 표기 규칙을 완벽하게 준수하여 작성되었습니다.

---

### 📄 작성된 파일 정보
- **파일명**: [Figma MCP.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Figma%20MCP.md)
- **위치**: `/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Figma MCP.md`

### 💡 주요 작성 내용 요약
1. **Frontmatter**: 스키마 요구사항(`type: tool`, `status: draft`, `sources`, `created/updated` 등) 반영
2. **한 줄 정의 & 핵심 요지**:
   - Claude Code 등 AI 코딩 에이전트와 Figma 간의 HTTP 원격 [[Model Context Protocol]](MCP) 기반 양방향 동기화 연동 인터페이스로 정의.
   - 원격 HTTP 엔드포인트(`https://mcp.figma.com/mcp`) 등록 및 OAuth 인증 구조 설명.
   - 대용량 에셋(200+ 개 등) 일괄 정리를 수행하는 '디자인 시스템 관리인(Janitor)' 역할 서술.
3. **상세 및 예시**:
   - CLI 명령어 시퀀스 (`claude mcp add`, `/mcp`, `/plugin install figma@claude-plugins-official`) 명시.
   - Code $\rightarrow$ Figma $\rightarrow$ Code 양방향 이터레이션 실전 프롬프트 및 사용 시나리오 작성.
4. **충돌 섹션**:
   - 코드-Figma 초기 내보내기 시 여백/서식 왜곡 문제 및 에이전트의 후속 속성 보정 필요성 명시.
   - 규칙 기반 실행(에이전트)과 가버넌스/전략(인간 판단) 간 역할 분담 기술.
5. **관련 노트 및 출처**:
   - [[Figma-Claude Code 양방향 연동]], [[Claude Code]], [[Claude Code 스킬]], [[AI 기반 디자인 워크플로우]], [[Model Context Protocol]] 연동.