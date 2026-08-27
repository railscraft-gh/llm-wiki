지정해주신 소스 문서(`raw/AI makes you way less productive unless.md`) 및 지식 베이스의 요구사항을 철저히 반영하여, **'로컬 AI 모델'**에 대한 한국어 위키 노트를 성공적으로 작성했습니다.

작성된 위키 노트 파일 경로:
[로컬 AI 모델.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/%EB%A1%9C%EC%BB%AC%20AI%20%EB%AA%A8%EB%8D%B8.md)

---

### 📝 작성 내용 요약

1. **Frontmatter 규격 준수**:
   - `type: tool`, `status: draft`, `core: false`, `tags: ['llm', 'agent', 'local-llm', 'hardware', 'privacy']`, `sources: ['raw/AI makes you way less productive unless.md']` 등 필수 스키마 항목 및 생성/수정일(`2026-08-27`) 명시.
2. **검증 가능한 지표 및 출처 표기**:
   - 액센츄어의 코파일럿 유료 계정 구매 규모(`740,000명`) 및 상용 AI 대규모 도입 기업의 ROI 달성 비율(`27%`) 등 검증 가능한 지표에 대해 소스 파일 경로 `(raw/AI makes you way less productive unless.md)` 인용 명시.
3. **구체적 예시 및 모델 스펙 제시**:
   - `Ollama` 서빙 런타임 기반으로 `Qwen3.5:27b` 로컬 AI 모델을 다운로드하고 API 엔드포인트를 우회 지정하여 `Claude Code` 개발 에이전트와 오프라인으로 연동하는 Bash CLI 스크립트 작성.
   - `Qwen 3.5`, `GLM-4.7 / GLM-5`, `GPT-OSS` 등 실제 오픈소스 로컬 AI 모델 패밀리 예시 명시.
4. **위키 네트워크 연동 (`[[개념명]]`)**:
   - 기존 위키 지식 체계와 자연스럽게 이어지도록 `[[오픈소스 로컬 모델의 프론티어 상용 모델 대체]]`, `[[로컬 AI 패키징]]`, `[[로컬 LLM 롱 컨텍스트 추론 병목]]`, `[[로컬 LLM 연동 에이전트 CLI 설정]]`, `[[Ollama]]`, `[[Claude Code]]`, `[[Aider]]` 등에 대한 백링크 연동 구성.