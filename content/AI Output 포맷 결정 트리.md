소스 문서(`raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md`)를 바탕으로 **'AI Output 포맷 결정 트리'**에 대한 위키 노트를 성공적으로 생성하였습니다.

### 생성된 위키 노트 정보
- **파일명**: [`AI Output 포맷 결정 트리.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/AI%20Output%20%ED%8F%AC%EB%A7%B7%20%EA%B2%B0%EC%A0%95%20%ED%8A%B8%EB%A6%AC.md)
- **노트 유형**: `workflow` (Status: `draft`)

---

### 주요 내용 요약

1. **한 줄 정의 및 핵심 요지**:
   - AI Output 포맷 결정 트리는 AI 출력물을 소비하는 최종 독자(사람, 다운스트림 에이전트, 혹은 둘 다)와 활용 용도에 따라 **HTML**, **Markdown**, 또는 **Markdown Source + HTML Artifact** 중 최적의 포맷을 분기하는 프레임워크입니다.
   - 컨텍스트 윈도우 확장(8K → 1M 토큰)과 사용자 인터랙션 요구 증가에 따라 전통적인 Markdown 고집 전제가 깨지고 있음을 명시했습니다.

2. **포맷별 수치 및 비용 분석**:
   - 2,000단어 보고서 기준 토큰 비교(Markdown ~3,000 tokens / Lean HTML ~7,200 tokens / Full HTML ~14,400 tokens) 수치 포함 및 소스 표기 완료.

3. **독자 기준 결정 트리 시각화**:
   - Mermaid flowchart를 활용하여 소비 형태별(사람, 에이전트, 하이브리드) 포맷 분기 프로세스를 구성했습니다.

4. **구체적 예시 및 모델 활용**:
   - Python 기반의 `AudienceType` / `OutputFormat` 라우팅 오케스트레이터 코드 예시 포함.
   - Claude Code, Claude 3.7 Sonnet, ChatGPT 등 실제 모델 환경에서의 프롬프트 시스템 메시지 적용 시나리오 포함.

5. **충돌 및 한계점 정리**:
   - AI 생성 HTML의 JavaScript 보안 위험(XSS), 토큰 비용 증가와 API 공급자 인센티브, HTML diff 소음(Noise) 문제를 다루는 충돌 섹션 포함.

6. **지식 연동**:
   - `[[The Unreasonable Effectiveness of HTML]]`, `[[HTML 단일 파일 기반 최소 문서화]]`, `[[에이전트 예산 제약]]`, `[[에이전트 가드레일]]` 등 관련 위키 노트와 백링크를 구성했습니다.