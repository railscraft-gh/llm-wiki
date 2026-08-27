지정하신 소스 문서(`raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md`)를 바탕으로 **`Markdown Source HTML Artifact 패턴`**에 관한 고품질 위키 노트를 작성하여 LLM 위키 시스템에 반영하였습니다.

[Markdown Source HTML Artifact 패턴 위키 노트](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Markdown%20Source%20HTML%20Artifact%20%ED%8C%A8%ED%84%B4.md)

---

### 위키 노트 핵심 작성 요약

1. **스키마 및 규격 준수**:
   - `type: workflow`, `status: draft`, `sources` 등 지정된 frontmatter 스키마를 완벽히 준수하였습니다.
   - 소스 인용 표현 방식(`(raw/...)`)을 지키고 관련 Obsidian 위키링크(`[[Markdown Protocol Layer 승진론]]`, `[[The Unreasonable Effectiveness of HTML]]` 등)를 연결하였습니다.

2. **개념 고도화 및 정량 지표 명시**:
   - **Protocol Layer vs Display Layer**의 개념적 이원화 분리를 명확히 정리했습니다.
   - 2,000단어 보고서 기준 토큰 소비량 정량 비교 지표(Markdown ~3,000, Lean HTML ~7,200, Full HTML ~14,400)를 수록하여 토큰 오버헤드와 인간 주의력 비용 절감 간의 트레이드오프 분석을 제시했습니다.

3. **실전 예시 구현**:
   - Python 기반으로 Git 추적용 `security_audit.md` (Markdown Source)와 브라우저 탐색용 `security_audit.html` (Lean HTML Artifact)을 동시 렌더링하는 워크플로우 아키텍처 코드를 포함했습니다.

4. **충돌 관점 정리**:
   - 순수 Markdown 파, 순수 HTML 파, 그리고 이중화 아티팩트 워크플로우 파 간의 동기화 오버헤드 및 단일 포맷 대립 구도를 `## 충돌` 섹션에 명확히 기록했습니다.