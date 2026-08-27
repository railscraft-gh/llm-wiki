지정하신 작성 원칙, YAML frontmatter 스키마, 수치/지표의 출처 표기 규칙, 구체적인 코드 예시 및 시나리오 포함 규칙, 그리고 Obsidian 위키링크(`[[개념명]]`) 연동 지침을 엄격히 반영하여 `codegraph` 위키 노트를 보강 및 업데이트하였습니다.

### 주요 수정 내용
1. **Frontmatter 스키마 준수 및 보존**:
   - `type: tool`, `status: draft`, `core: false`
   - 최초 생성일(`created: 2026-07-30`)을 보존하고 업데이트 날짜(`updated: 2026-08-28`)를 최신화했습니다.
   - 소스 문서 경로 `raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md` 및 관련 태그/알리아스를 설정했습니다.
2. **Obsidian 위키링크 촘촘한 연동**:
   - `[[코딩 에이전트]]`, `[[안드레이 카파시의 지식 컴파일]]`, `[[tree-sitter]]`, `[[MCP]]`, `[[LLM]]`, `[[RAG]]`, `[[코드 위키]]`, `[[code-review-graph]]`, `[[코드 변경 영향 범위 분석]]` 등 상위 철학 및 연관 도구 개념들과 교차 링크를 완성했습니다.
3. **실증 데이터 및 출처 명시**:
   - OmniRoute 8,000+개 파일 인덱싱 소요 시간(34초), DB 용량(325MB), 영향 범위 분석 토큰 절감률(**98.7%**) 및 쿼리 응답 용량(344B) 등 수치에 소스 파일 표기를 준수했습니다.
4. **구체적 예시 및 시나리오**:
   - CLI 설치/초기화 명령어 코드 블록과 `classifyRoute` 함수 수정 시의 간접 의존성 추적 사례를 수록했습니다.
5. **충돌 및 한계점 정리**:
   - 파일 저장/이름 변경 시 자동 동기화 오작동 이슈 및 C 언어 매크로 구문 분석 실패 가능성을 '## 충돌' 섹션에 명시했습니다.

업데이트된 위키 노트는 [llm-wiki/wiki/codegraph.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/codegraph.md) 파일에 저장되었습니다.