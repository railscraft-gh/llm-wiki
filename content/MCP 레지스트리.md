지정해주신 소스 문서(`raw/Building an MCP Ecosystem at Pinterest-ko.md`)를 바탕으로 **'MCP 레지스트리'** 개념에 관한 고품질 한국어 위키 노트를 작성 완료했습니다.

### 생성된 노트 파일
- **경로**: [`llm-wiki/wiki/MCP 레지스트리.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/MCP%20%EB%A0%88%EC%A7%80%EC%8A%A4%ED%8A%B8%EB%A6%AC.md)

---

### 주요 작성 내용 요약

1. **Frontmatter 규격 준수**:
   - `type: 'tool'`, `status: 'draft'`, `core: false`, `sources: ['raw/Building an MCP Ecosystem at Pinterest-ko.md']` 등 지정된 스키마 반영.
2. **핵심 정의 및 상세**:
   - **거버넌스 및 중앙 탐색 단일 출처 (Single Source of Truth)**로서의 MCP 레지스트리 역할 정립.
   - **웹 UI / API 이중 인터페이스**: 엔지니어 탐색용 UI와 에이전트/클라이언트 검증용 REST API 및 런타임 보안 관문 구조 설명.
   - **클라우드 호스팅 기반 도메인 특화 소형 서버 분산 아키텍처**: stdio 기반 로컬 아키텍처의 한계를 수용하고 모놀리스 대신 Presto, Spark, Knowledge 서버 등 영역별 독립 서버 분산 운용 구조 설명.
   - **이중 보안 통제 (AuthN/AuthZ)**: Envoy 프록시 JWT 기반 대략적인 제어 + `@authorize_tool` 기반 그룹 데코레이터 미세 인가(Micro-Authorization) + SPIFFE 기반 서비스 메시 인증 구조 서술.
3. **검증 가능한 지표 및 출처 명시**:
   - 2025년 1월 기준 844명의 실사용 개발자가 월간 66,000회의 도구를 호출하여 월 7,000시간 상당의 리소스를 절감하고 있는 실증 데이터 기재 `(raw/Building an MCP Ecosystem at Pinterest-ko.md)`.
4. **구체적 코드 예시 및 활용 시나리오**:
   - Presto, Spark, Knowledge MCP 서버 활용 예시 제공.
   - Envoy `X-Forwarded-Groups` 헤더와 결합하여 특정 부서 그룹(`Ads-eng` 등)에만 툴 실행 권한을 부여하는 Python FastAPI 데코레이터 코드 포함.
5. **충돌 섹션 (Engineering Trade-offs)**:
   - 로컬 stdio 통신 표준 vs 중앙 클라우드 호스팅 충돌 및 해결책.
   - MCP 공식 OAuth 2.0 동의 팝업 스펙 vs 사용자 세션 연동(Piggyback)을 통한 UX 마찰 제거 간의 충돌 서술.
6. **Obsidian 위키링크 연동**:
   - `[[모델 컨텍스트 프로토콜]]`, `[[AI 게이트웨이]]`, `[[동적 도구 범위 지정]]`, `[[컨텍스트 세금]]`, `[[인간의 판단과 AI의 실행 분리]]`, `[[Atlassian MCP 프로젝트 관리 스킬]]` 등 지식 그래프 연동.