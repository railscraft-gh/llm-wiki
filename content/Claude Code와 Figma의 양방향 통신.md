지정해주신 소스 문서(`raw/Claude Code + Figma = 💛.md`) 및 기존 지식 베이스 항목을 종합 분석하여 개념 노트 **`Claude Code와 Figma의 양방향 통신`**을 작성 및 생성하였습니다.

### 주요 반영 사항
1. **Frontmatter 스키마 준수**: `type: concept`, `status: draft`, `sources`, `tags`, `aliases` 등 필수 스키마를 정합하게 정의했습니다.
2. **구체적 기술 사양 및 명령어 명시**: 
   - `claude mcp add --transport http figma https://mcp.figma.com/mcp`
   - `/plugin install figma@claude-plugins-official`
   - OAuth 승인 권한 처리, 세션 재시작 및 CLI 상의 실질 프롬프트 예시를 수록했습니다.
3. **충돌 및 한계 기록**: 소스 문서에 명시된 Figma 내보내기 시 여백(Margin/Padding) 불일치 문제, 다중 계정 사용 시 자격 증명 실패 이슈 등을 `## 충돌` 섹션에 수록했습니다.
4. **위키 네트워크 연결**: [[Figma-Claude Code 양방향 연동]], [[Claude Code]], [[Claude Code 스킬]], [[Figma Model Context Protocol]], [[AI Slop 미학]], [[디자인 및 코드 명명 일치화]] 등 유관 위키 노트 링크를 연동했습니다.

생성된 위키 노트 파일: [Claude Code와 Figma의 양방향 통신.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Claude%20Code%EC%99%80%20Figma%EC%9D%98%20%EC%96%91%EB%B0%A9%ED%96%A5%20%ED%86%B5%EC%8B%A0.md)