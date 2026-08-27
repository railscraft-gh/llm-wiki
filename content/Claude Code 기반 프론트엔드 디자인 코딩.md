지정하신 소스 문서(`raw/Claude Code + Figma = 💛.md`) 및 스키마 요구사항에 맞춰 **'Claude Code 기반 프론트엔드 디자인 코딩'** (유형: `workflow`) 신규 위키 노트를 성공적으로 작성했습니다.

작성된 위키 노트 파일: [`Claude Code 기반 프론트엔드 디자인 코딩.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Claude%20Code%20%EA%B8%B0%EB%B0%98%20%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%BD%94%EB%94%A9.md)

---

### 📝 생성된 위키 노트 요약

1. **Frontmatter 규격 준수**:
   - `type: workflow`
   - `status: draft`
   - `sources: ['raw/Claude Code + Figma = 💛.md']`
   - `created: 2026-08-28`, `updated: 2026-08-28`
2. **핵심 기능 및 상세 프로세스 정리**:
   - HTTP 기반 원격 Figma MCP 서버 연결 및 `figma@claude-plugins-official` 플러그인을 통한 기반 구축.
   - Claude Code에서 코드 생성 $\rightarrow$ Figma 내보내기 $\rightarrow$ Figma 상에서 시각적 수정 $\rightarrow$ 코드 원복 및 Diff 적용으로 이어지는 4단계 양방향 워크플로우 명시.
3. **구체적 예시 및 명령어 명시**:
   - CLI 명령어 (`claude mcp add --transport http ...`, `/plugin install ...`) 및 실제 SaaS('Roxy') 랜딩 페이지 및 Testimonials 섹션 업데이트 예시 코드/프롬프트 포함.
4. **충돌 및 한계점 정리**:
   - 1차 Figma 이관 시 여백(Margin/Padding) 어긋남 및 요소 미표시 현상과 해결 방안, 빈 Figma 파일 연결 시 발생하는 에러 구문 처리 명시.
5. **Obsidian 위키링크 교차 연결**:
   - [[Claude Code]], [[Figma-Claude Code 양방향 연동]], [[Claude Code Figma MCP 설정 및 인증]], [[Claude Code와 Figma의 양방향 통신]], [[Figma Model Context Protocol]], [[바이브 코딩]] 등 기존 지식베이스 내 관련 개념들과 상호 연동되도록 연결.