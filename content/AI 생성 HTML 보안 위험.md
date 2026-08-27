지정하신 소스 문서(`raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md`)를 바탕으로 개념 노트 **`AI 생성 HTML 보안 위험.md`** 작성을 완수하였습니다.

---

### 📝 생성된 위키 노트 개요

- **파일명**: `AI 생성 HTML 보안 위험.md`
- **위치**: `scratch/llm-wiki/wiki/AI 생성 HTML 보안 위험.md`
- **Frontmatter 유형**: `concept` (status: `draft`, core: `false`)
- **연관 위키 링크**: `[[The Unreasonable Effectiveness of HTML]]`, `[[Markdown Source HTML Artifact 패턴]]`, `[[AI Output 포맷 결정 트리]]`, `[[프롬프트 인젝션 보안 방어]]`, `[[기업 AI 보안 및 데이터 사용 정책]]`, `[[HTML 단일 파일 기반 최소 문서화]]`

---

### 🔑 주요 내용 요약

1. **한 줄 정의**: LLM이나 AI 에이전트가 리치 시각화 및 인터랙티브 인터페이스 생성을 위해 출력을 HTML로 전환할 때, 검증되지 않은 동적 JavaScript 코드나 외부 스크립트가 포함됨으로써 발생하는 XSS, 로컬 데이터 유출, 비인가 코드 실행 등 일체의 보안 위협.
2. **핵심 위협 요인**:
   - **XSS & 간접 프롬프트 인젝션**: 수집된 외부 데이터/프롬프트 내 악성 스크립트가 HTML 렌더링 시 자동 실행되는 위험.
   - **로컬 데이터 유출 (Local Data Leakage)**: 로컬 CLI 환경(Claude Code 등)이나 웹 UI에서 `localStorage`, OAuth 토큰, 쿠키 등이 외부 공격자 서버로 탈취될 수 있는 공격 표면 노출 (`raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md`).
   - **비인가 코드 실행**: Fetch API/WebSockets를 통한 Localhost 엔드포인트 공격 리스크.
3. **정량적 오버헤드 지표 인용**: 2,000단어 보고서 기준 Full HTML(+JS) 출력 시 약 14,400 토큰(약 4.8배)으로 급증하여 보안 감수 비용 및 토큰 비용을 수반함 (`raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md`).
4. **보안 대응 가이드라인 및 예시 코드**:
   - **No-JS Constraint**: 스크립트를 전면 제거하고 HTML5 표준 태그(`<details>`, `<summary>`)와 CSS만 활용하는 안전한 HTML 예시 수록.
   - **Review Step & Sanitization**: Python 기반 `sanitize_ai_html_output` 함수 및 CSP(`script-src 'none'`) 적용 사례 제시.
   - **Template-plus-Data & Companion Artifact**: `[[Markdown Source HTML Artifact 패턴]]`과의 수렴 구조 명시.