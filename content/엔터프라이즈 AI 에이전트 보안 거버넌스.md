'엔터프라이즈 AI 에이전트 보안 거버넌스'에 대한 위키 노트를 성공적으로 작성했습니다.

### 생성된 노트 정보
- **노트 파일 경로**: [`엔터프라이즈 AI 에이전트 보안 거버넌스.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/%EC%97%94%ED%84%B0%ED%94%84%EB%9D%BC%EC%9D%B4%EC%A6%88%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EB%B3%B4%EC%95%88%20%EA%B1%B0%EB%B2%84%EB%84%8C%EC%8A%A4.md)
- **노트 유형**: `concept`
- **소유 출처**: `raw/Building an MCP Ecosystem at Pinterest-ko.md`

---

### 주요 작성 내용 요약

1. **한 줄 정의 및 핵심 요지**:
   - 최소 권한 원칙(Least Privilege)과 명확한 책임 소재(Attribution) 하에 인증·인가, 승인 레지스트리, 인라인 프록시, 인간 개입(Human-in-the-Loop) 및 관측 가능성을 체계화한 엔터프라이즈 거버넌스 관리 체계.
   - JWT 기반 사용자 흐름과 SPIFFE 기반 서비스 메시 흐름의 2단계 보안 결합.
   - 월 66,000회 도구 호출 및 월 7,000시간 절감 실증 지표 인용 (`raw/Building an MCP Ecosystem at Pinterest-ko.md`).

2. **상세 및 구체적 예시**:
   - Presto MCP 서버를 활용한 `Ads-eng` 조직 대상 매출 데이터 접근 제어(Gating) 시나리오 제시.
   - Envoy 프록시 헤더 (`X-Forwarded-User`, `X-Forwarded-Groups`) 기반의 Python 미세 인가 데코레이터(`@authorize_tool`) 상세 코드 포함.

3. **충돌 분석**:
   - 공식 오픈소스 MCP OAuth 2.0 표준 사양(서버별 동의 팝업)과 엔터프라이즈 사내 SSO 토큰 활용(Piggybacking을 통한 UX 마찰 제거 및 인프라 통합 보안)의 차이점 및 접근법 비교 기재.

4. **지식 연동 (`[[Obsidian Wiki Link]]`)**:
   - [[MCP 레지스트리]], [[클라우드 호스팅 MCP 배포 아키텍처]], [[Zero Trust 보안 모델]], [[기업 AI 보안 및 데이터 사용 정책]], [[AI 게이트웨이]] 등 사내 위키 노트들과 연동 설정 완료.