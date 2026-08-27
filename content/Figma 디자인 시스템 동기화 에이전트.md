요청하신 개념 **'Figma 디자인 시스템 동기화 에이전트'** (type: workflow)에 대한 위키 노트를 성공적으로 작성 완료하였습니다.

### 작성된 파일 정보
- **파일명**: [`Figma 디자인 시스템 동기화 에이전트.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Figma%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EB%8F%99%EA%B8%B0%ED%99%94%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8.md)
- **위치**: `/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Figma 디자인 시스템 동기화 에이전트.md`

---

### 주요 반영 내용 요약

1. **Frontmatter 스키마 준수**:
   - `type`: `workflow`, `status`: `draft`, `core`: `false`, `sources`: `['raw/AI와 디자인 시스템 - 출판형 다듬기.md']`, `created`/`updated`: `2026-08-28` 적용.
2. **검증 가능한 수치 및 출처 명시**:
   - AI 생성 DS의 토큰/시간 비효율성(Claude Design 기준 10분 소요 및 주간 쿼터 10% 소모, 내보내기 레이아웃 결함) 및 배치 동기화 필요성 수치를 출처 표기(`raw/AI와 디자인 시스템 - 출판형 다듬기.md`)와 함께 수록.
3. **구체적인 코드 예시 및 모델/도구 명시**:
   - Figma REST API 연동 및 `CLAUDE.md` / `tokens.json` 자동 갱신 TypeScript 스크립트 코드 수록.
   - Claude Code, Figma API, Google Stitch, Claude Design, GitHub Actions 등 구체적 도구 명시.
4. **상충 분석 (충돌 섹션)**:
   - 실시간 즉시 동기화(Webhook)와 일일 스케줄 배치 동기화(Daily Schedule / Manual Trigger) 간의 토큰 비용, API Rate Limit, UI 일관성 트레이드오프 기재.
5. **관련 위키 노트 연동**:
   - `[[디자인 시스템 감사 에이전트]]`, `[[CLAUDE.md 기반 디자인 시스템 가이드라인]]`, `[[AI 기반 빠른 프로토타이핑 vs 프로덕션 디자인 시스템]]`, `[[Figma-Claude Code 양방향 연동]]`, `[[Figma MCP]]` 상호 연결.