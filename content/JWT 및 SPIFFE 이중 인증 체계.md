지정된 소스 문서(`raw/Building an MCP Ecosystem at Pinterest-ko.md`)를 분석하여 **'JWT 및 SPIFFE 이중 인증 체계'** 위키 노트를 신규 생성하였습니다.

작성된 위키 노트는 `/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/JWT 및 SPIFFE 이중 인증 체계.md` 경로에 저장되었으며, 주요 내용은 아래와 같습니다.

---

### [JWT 및 SPIFFE 이중 인증 체계] 노트 요약

```markdown
---
type: workflow
status: draft
core: false
tags:
  - llm
  - security
  - mcp
  - authentication
aliases:
  - 핀터레스트 MCP 이중 인증
  - JWT-SPIFFE 이중 보안 관문
sources:
  - raw/Building an MCP Ecosystem at Pinterest-ko.md
created: 2026-08-28
updated: 2026-08-28
---

# JWT 및 SPIFFE 이중 인증 체계

## 한 줄 정의
AI 에이전트 및 사용자 클라이언트가 MCP(Model Context Protocol) 서버의 도구를 안전하게 호출할 수 있도록 최종 사용자 권한(JWT)과 서비스 메시 식별 정보(SPIFFE)를 2단계 보안 장벽으로 결합한 클라우드 호스팅 기반 인증·인가 워크플로우이다.

...
```

#### 주요 특징 및 포함 내용:
1. **2단계 보안 아키텍처**:
   - **사용자 전용 흐름 (JWT)**: OAuth 기반 JWT 서명 검증(Envoy 프록시) + 서버 데코레이터(`@authorize_tool`)를 이용한 비즈니스 그룹 기반 미세 인가(Fine-grained authorization).
   - **서비스 전용 흐름 (SPIFFE)**: 읽기 전용 작업 및 자동화 백그라운드 작업 시 메시 ID(SPIFFE)에만 의존하여 영향 반경(Blast Radius)을 최소화.
   - **백그라운드 OAuth 토큰 공유**: 공식 MCP OAuth 스펙의 팝업/동의 창 대신 사내 채팅/IDE 세션을 활용(piggyback)하여 사용자 경험 유지.
2. **실제 코드 예시 및 활용 시나리오**:
   - Python 데코레이터를 활용한 `X-Forwarded-Groups` 헤더 검증 및 Presto MCP 서버 쿼리 접근 제어 코드 구현.
   - 광고팀 엔지니어와 일반 부서 엔지니어 간 권한 분등 제어 시나리오 명시.
3. **수치 검증 및 출처 명시**:
   - 월 66,000회 도구 호출, 844명 개발자 실사용, 월 7,000시간 리소스 절감 수치 표기 `(raw/Building an MCP Ecosystem at Pinterest-ko.md)`.
4. **위키 네트워크 연결**:
   - `[[MCP 레지스트리]]`, `[[클라우드 호스팅 MCP 배포 아키텍처]]`, `[[Zero Trust 보안 모델]]`, `[[AI 게이트웨이]]`, `[[기업 AI 보안 및 데이터 사용 정책]]` 링크 연결.