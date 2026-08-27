요청하신 소스 문서(`raw/AI와 디자인 시스템 - 출판형 다듬기.md`, `raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md`)를 바탕으로 지정된 스키마 및 가이드라인을 완벽히 준수한 **`audit-design-system`** 위키 노트를 작성 완료했습니다.

해당 노트는 [`audit-design-system.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/audit-design-system.md) 파일로 저장되었습니다.

---

### 주요 작성 내용 요약

1. **Frontmatter 스키마 준수**:
   - `type: tool`, `status: draft`, `core: false` 지정
   - `tags`, `aliases`, `sources`, `created`, `updated` 기준 완벽 적용
2. **구체성 및 실전 지표 포함**:
   - Google Stitch 및 Claude Design의 생성 한계(토큰 소모량 10분/주간 쿼터 10%, Figma 내보내기 시 레이아웃 결함 발생 수치 등) 명시 및 출처 표기 `(raw/AI와 디자인 시스템 - 출판형 다듬기.md)`
   - 설치 CLI 명령어(`claude mcp add figma`, 스킬 추가), 프롬프트 예시, 자동 감사 에이전트 YAML 파이프라인 명세 포함
3. **충돌 및 대조 섹션 정립**:
   - AI 제너레이티브 무분별 생성 접근법 vs Figma 기존 DS 기반 스킬 감사/바인딩 접근법 간 차이점 명시
4. **Obsidian 위키링크 교차 연결**:
   - [[apply-design-system]], [[디자인 시스템 감사 에이전트]], [[디자인 시스템 기반 AI 코드 생성 최적화]], [[CLAUDE.md 기반 디자인 시스템 가이드라인]], [[AI 기반 빠른 프로토타이핑 vs 프로덕션 디자인 시스템]], [[디자인 토큰]], [[Agent Skills 표준]] 등 7개 이상의 관련 위키 개념 연동