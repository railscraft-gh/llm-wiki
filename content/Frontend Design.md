요청하신 **`Frontend Design`** 도구(tool)에 대한 한국어 LLM Wiki 노트를 생성하고 검증을 완료하였습니다.

작성된 위키 노트의 저장 위치는 [Frontend Design.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Frontend%20Design.md)입니다.

### 노트 주요 내용 요약

1. **Frontmatter 규격 준수**:
   - `type: tool`, `status: draft`, `core: false`, `created: 2026-08-27`, `updated: 2026-08-27` 적용
   - `sources`: `['raw/100개 이상의 Claude Code 스킬 중 가장 유용한 베스트 추천 목록.md']`
2. **개념 정의 및 핵심 요지**:
   - 백엔드 코드 작성에 강점을 보이는 [[Claude Code]]가 프론트엔드 UI 생성 시 흔히 출력하는 정형화되고 질 낮은 결과물("AI Slop")을 예방하고 프로덕션 수준의 웹 인터페이스를 자동 생성해 주는 전용 [[Claude Code 스킬]]로 정의.
   - 프론트엔드 요청 시 자동 실행 및 감지되는 메커니즘 표기.
3. **상세 및 구체적 예시**:
   - `npx skills add anthropics/claude-code - skill frontend-design` 명령어를 이용한 CLI 설치 및 등록 예시 추가.
   - SaaS 대시보드 컴포넌트 생성 요청 시 `frontend-design` 스킬이 자동으로 트리거되어 작동하는 활용 시나리오 명시.
4. **연관 위키 링크 연동**:
   - [[Claude Code 스킬]], [[Claude Code]], [[디자인 시스템 우선 접근 방식]], [[미니 디자인 시스템]], [[디자인 및 코드 명명 일치화]], [[Figma-Claude Code 양방향 연동]] 등 지식 네트워크 연결.