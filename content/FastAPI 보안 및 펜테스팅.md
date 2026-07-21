---
type: workflow
status: draft
core: false
tags:
- security
- fastapi
- penetration-testing
- api-security
- backend
sources:
- raw/I Hired a Penetration Tester to Attack My FastAPI App. He Owned Everything in
  45 Minutes.md
created: 2026-07-20
updated: 2026-07-20
aliases:
- FastAPI-보안-및-펜테스팅
---
# FastAPI 보안 및 펜테스팅

## 한 줄 정의

FastAPI 보안 및 펜테스팅은 1인 개발자나 소규모 팀이 저지르기 쉬운 API 허점(IDOR, 커스텀 SQLi, 시크릿 노출, 웹훅 검증 우회)을 모의 침투 테스트로 진단하고 7단계 방어체계로 즉시 보완하는 보안 강화 워크플로우다.

## 핵심 요지

- FastAPI 프레임워크 자체의 기본 기능(Swagger, Pydantic, ORM)만 믿고 방심하면, 방치된 구형 엔드포인트나 임시 디버깅 코드에 의해 시스템 전체가 수십 분 만에 장악될 수 있다.
- 모의 침투 테스터가 스테이징 시스템을 공격해 [단 45분 만에 DB 전체 탈취 및 관리자 권한 승격](file:///Users/railscraft/Obsidian/raw/I%20Hired%20a%20Penetration%20Tester%20to%20Attack%20My%20FastAPI%20App.%20He%20Owned%20Everything%20in%2045%20Minutes.md#L7)을 이뤄낸 실제 펜테스팅 사례가 존재한다.
- 주요 공격 표면은 공개된 API 문서 정보 유출, 객체 수준 권한 검증 누락(IDOR), 커스텀 raw SQL 조합에 따른 인젝션, 대칭키 JWT 시크릿의 퍼블릭 히스토리 노출, 예외 처리 삼킴에 의한 결제 웹훅 위조다.
- 자동 보안 스캐닝(Bandit, Semgrep, Secret Scanning), 비대칭 키 서명(RS256), production 환경 `/docs` 비활성화, 객체 소유권 검증(404 마스킹)을 포함한 체계적인 조치가 필요하다.

## 상세

### 45분 펜테스팅 타임라인 분석

1. **8분 (정찰)**: `/docs` Swagger 문서를 조망하여 OpenAPI 엔드포인트 스키마, Pydantic 데이터 모델, 미사용 관리자 역할 변경 경로(`POST /admin/users/{user_id}/role`) 정보 파악.
2. **14분 (IDOR 익스플로잇, CVSS 8.1)**: 권한 검증이 누락된 구형 엔드포인트 `GET /api/v1/users/{user_id}`의 ID를 변경하여 [관리자 이메일, 비밀번호 해시, API 키 탈취](file:///Users/railscraft/Obsidian/raw/I%20Hired%20a%20Penetration%20Tester%20to%20Attack%20My%20FastAPI%20App.%20He%20Owned%20Everything%20in%2045%20Minutes.md#L60).
3. **22분 (JWT 서명 위조, CVSS 9.1)**: 과거 프론트엔드 GitHub 이슈에 노출되었던 [스테이징 시크릿 키로 관리자 JWT 위조](file:///Users/railscraft/Obsidian/raw/I%20Hired%20a%20Penetration%20Tester%20to%20Attack%20My%20FastAPI%20App.%20He%20Owned%20Everything%20in%2045%20Minutes.md#L75-L80).
4. **31분 (SQL 인젝션, CVSS 9.8)**: f-string 쿼리를 쓰던 커스텀 리포트 엔드포인트 `GET /api/v1/reports/custom?query=`에 `1=1 UNION SELECT ...` 주입으로 [사용자 DB 전량 유출](file:///Users/railscraft/Obsidian/raw/I%20Hired%20a%20Penetration%20Tester%20to%20Attack%20My%20FastAPI%20App.%20He%20Owned%20Everything%20in%2045%20Minutes.md#L102-L106).
5. **38분 (웹훅 우회, CVSS 7.5)**: 예외 처리 삼킴(`try-except`) 구문으로 검증 실패를 무시하던 Stripe 웹훅 엔드포인트 `POST /webhooks/stripe`에 가짜 결제 이벤트를 보내 프리미엄 계정 승격 및 수신 URL 하이재킹.
6. **45분 (최종 진단)**: CVSS 9.8 포함 5페이지 리포트 제출. 스테이징 환경에서 [실서비스용 AWS SES 및 Stripe API 키가 방치](file:///Users/railscraft/Obsidian/raw/I%20Hired%20a%20Penetration%20Tester%20to%20Attack%20My%20FastAPI%20App.%20He%20Owned%20Everything%20in%2045%20Minutes.md#L143)되었음이 확인됨.

### 7단계 보안 강화 워크플로우

1. **미사용 라우트 전량 폐기 및 Auth 의존성 강제**: 모든 라우터에 권한 검증 의존성이 없을 경우 CI/CD 파이프라인에서 빌드가 실패하도록 처리.
2. **비대칭 키 서명(RS256) 전환**: 공유 시크릿 키 대신 공개키/개인키 쌍을 적용해 공개키가 노출되어도 토큰 위조를 차단.
3. **Raw SQL 조합 금지**: ORM 파라미터화 쿼리 및 엄격한 컬럼 허용 목록(allowlist) 적용.
4. **웹훅 서명 검증 예외 복구**: 서명 검증 실패 시 예외를 삼키지 않고 즉시 400 Bad Request 반환.
5. **Production 환경 docs 노출 차단**:
   ```python
   app = FastAPI(
       docs_url=None if os.getenv("ENV") == "production" else "/docs",
       redoc_url=None if os.getenv("ENV") == "production" else "/redoc"
   )
   ```
6. **객체 레벨 권한 검증과 404 마스킹**:
   ```python
   async def get_current_user_item(item_id: int, db: AsyncSession = Depends(get_db), current_user: User = Depends(get_current_user)):
       item = await db.get(Item, item_id)
       if not item or item.owner_id != current_user.id:
           raise HTTPException(status_code=404, detail="Not found") # 403 대신 404로 존재 여부 마스킹
       return item
   ```
7. **CI/CD 자동 보안 파이프라인 구축**: GitHub Actions에 `bandit`, `semgrep` 및 Secret Scanning 연동.

## 예시

Stripe 결제 웹훅 수신 시 서명 검증 실패를 삼키는 임시 디버깅 코드(`try ... except: pass`)를 운영 환경에 방치하면 가짜 payload 전송만으로 시스템 상태 조작이 가능해진다.

## 충돌

IDOR 보안 검증 시 소유권이 없는 사용자의 접근 요청에 대해 `403 Forbidden`을 응답하면, 해당 리소스 ID가 시스템에 존재한다는 유용한 힌트를 공격자에게 제공하게 된다. 따라서 권한 부족 상황에서도 `404 Not Found`를 일관되게 반환하여 ID 열거(enumeration) 공격을 차단해야 한다.

## 관련 노트

- [[API Key 관리 원칙]]
- [[클라이언트 Secret 노출 방지]]
- [[Lethal Trifecta]]
- [[에이전틱 보안 파이프라인]]
- [[백엔드 면접 질문 20선]]

