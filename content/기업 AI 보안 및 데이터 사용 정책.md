지정된 소스 문서(`raw/AI를 UX에 쓰는 법 2: 프롬프트, 프리퍼런스, 설정 - 출판형 다듬기.md`)를 분석하고, 작성 지침과 규칙을 모두 준수하여 **기업 AI 보안 및 데이터 사용 정책** 위키 노트를 성공적으로 작성했습니다.

### 생성된 노트 정보
- **파일명**: [기업 AI 보안 및 데이터 사용 정책.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/%EA%B8%B0%EC%97%85%20AI%20%EB%B3%B4%EC%95%88%20%EB%B0%8F%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%82%AC%EC%9A%A9%20%EC%A0%95%EC%B1%85.md)
- **Frontmatter**: `type: workflow`, `status: draft`, `sources`, `tags`, `created/updated` 등 표준 스키마 준수

### 핵심 반영 내용
1. **사전 검토 및 계약 확인**: AI 도구 입력 전 기업용 프라이버시 계약(Enterprise Privacy Agreement) 검토 필수성 명시.
2. **데이터 비식별화 패턴(Placeholder Pattern)**: 불확실한 도구 사용 시 마스킹 스크립트 및 자리표시자(`[Company_A]`)를 적용한 템플릿 방식 가이드라인 작성.
3. **구체적 실전 예시 포함**:
   - PII 및 사내 브랜드명을 마스킹하는 **Python 전처리 스크립트 코드**
   - 마스킹된 데이터 기반의 **LLM 안심 프롬프트 템플릿** 및 모델명(`Claude 3.5 Sonnet`, `ChatGPT Enterprise`, `Gemini 1.5 Pro`) 명시.
4. **Obsidian 지식 연동**: `[[시스템 프롬프트 지속 설정]]`, `[[AI 사용자 리서치 데이터 종합]]`, `[[AI 게이트웨이]]`, `[[AI 기반 UX 디스커버리 워크플로우]]` 등의 기존 위키 노트와 시멘틱 연결 구축.
5. **출처 인용**: 원본 문서 인용 구절 및 출처 표기 명시.