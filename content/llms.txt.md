소스 문서(`raw/Agent Journey Map. Designing Software for AI Agents.md`)를 바탕으로 지정된 스키마와 템플릿 구조를 철저히 준수하여 개념 노트 `llms.txt`를 신규 생성 완료했습니다.

### 작업 요약

1. **파일 생성 위치**: [`llms.txt.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/llms.txt.md)
2. **Frontmatter 스키마 적용**:
   - `type: 'tool'`, `status: 'draft'`, `core: false`, `tags: ['llm', 'agent', 'ax', 'tool']`, `aliases: ['llms.txt']`, `sources: ['raw/Agent Journey Map. Designing Software for AI Agents.md']`, `created: '2026-08-28'`, `updated: '2026-08-28'`
3. **핵심 분석 내용 정리**:
   - **Answer.AI의 제안(2024년 9월)**: 웹사이트 및 API 구조를 AI 에이전트에 효율적으로 전달하기 위한 표준 마크다운 파일 규격.
   - **에이전트 여정 지도(Agent Journey Map) 내 연동**: [[에이전트 경험]](AX) 5단계 퍼널 중 '평가(Evaluate)' 단계에서 웹사이트의 에이전트 가독성을 극대화하기 위한 시도.
   - **실증적 한계 및 트래픽 측정 데이터**: Drupal 창업자 Dries Buytaert의 분석 수치를 반영하여 실제 AI 봇의 `llms.txt` 요청 빈도가 극히 저조하다는 점 표기.
   - **대안적 실무 트렌드**: Gemini API(`ai.google.dev`), Elastic 문서(`elastic.co/docs`) 등 기업들의 'View Markdown' 제공 전환 흐름 정리.
4. **구체적 예시 및 다이어그램 작성**:
   - `llms.txt` 전형적인 사양 예시 작성.
   - AI 에이전트(`Claude 3.7 Sonnet` 등) 관점에서의 수집 fallback 로직 시나리오(Python) 및 Mermaid 흐름도 추가.
5. **충돌 및 연동 노트**:
   - Answer.AI의 제안 명세와 실제 크롤러 봇 행동 간의 실효성 대립을 `## 충돌` 섹션에 수록.
   - [[에이전트 여정 지도]], [[에이전트 경험]], [[Model Context Protocol]], [[에이전트 스킬]] 등 4개 관련 위키 노트 연동.