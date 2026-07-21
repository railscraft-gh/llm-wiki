---type: concept
status: draft
core: false
tags:
  - llm
  - agentic
aliases:
  - 의사결정 경계선
  - Decision Boundaries
  - 의사결정-경계선-(Decision-Boundaries)
sources:
  - "raw/I Work With AI Agents Every Day — Here Are 5 Lessons Nobody Tells You.md"
created: 2026-07-11
updated: 2026-07-11
---
# 의사결정 경계선 (Decision Boundaries)

## 한 줄 정의
AI 에이전트와의 협업 시, 에이전트가 독자적으로 수행할 수 있는 자율 영역과 인간 개발자의 명시적 승인 및 검토가 필요한 영역을 구분하여 사전에 정의하는 안전 통제 기준이다.

## 핵심 요지
1. **자율성과 리스크의 균형**: AI 에이전트에게 할 일만 무작정 던져주는 방식은 예기치 못한 파괴적 결정을 초래하므로, 에이전트가 움직일 수 있는 안전한 '의사결정 공간'을 선언적으로 규정해야 한다.
2. **역할 분류**: 작업을 승인 없이 가능한 것(가역적이고 안전한 작업), 승인이 필수적인 것(아키텍처 변경, 스키마 변경, 과금 유발), 명시적 지시가 없으면 절대 불가한 것(데이터 삭제, 시크릿 커밋)으로 구분한다.
3. **선언적 거버넌스 파일**: 일회성 프롬프트 튜닝보다 `decision-boundaries.yml`과 같은 정적인 규칙 파일을 에이전트 환경에 연동하여 장기적인 행동 반경을 지속 통제한다.

## 상세
의사결정 경계선은 일반적으로 세 가지 영역으로 구성된다.

- **자율 허용 영역 (`allowed_without_approval`)**:
  - 코드 포맷 정리, 단순 린트 경고 해결.
  - 로컬 변수명 변경 및 주석 보강.
  - 가역적인(Reversible) 파일 생성, 단위 테스트 추가.
- **승인 필수 영역 (`requires_approval`)**:
  - 프로젝트 폴더 구조 및 전역 아키텍처 변경.
  - 데이터베이스 스키마 수정 및 마이그레이션 실행.
  - 외부 연동 API 규격(Contract) 및 응답 구조 변경.
  - 인증/인가 로직, 토큰/쿠키 처리 등 보안 영역 수정.
  - 외부 이메일/메시지 발송 및 유료 API 호출로 비용을 유발하는 행위.
- **명시적 지시 없이는 절대 금지되는 영역 (`never_do_without_explicit_instruction`)**:
  - 프로덕션 데이터 삭제, API 키 등 시크릿 정보의 코드 및 로그 노출.
  - 메인 브랜치 직접 머지 및 강제 푸시(Force Push).

## 예시
프로젝트 루트 폴더에 다음과 같은 `decision-boundaries.yml`을 두어 에이전트의 작동 모드를 제약한다.

```yaml
version: 1.0
default_rule: stop_and_ask
agent_mode:
  autonomy_level: limited
  require_human_review_before_merge: true
  require_tests_before_completion: true

allowed_without_approval:
  - code_reformat
  - add_unit_tests
  - fix_lint_errors

requires_approval:
  - db_migration
  - api_contract_change
  - security_logic_modification
  - external_cost_generation
```

## 충돌
- **완전 자율성 옹호론**: 복잡한 제약이나 경계선 설정이 에이전트의 작업 속도를 떨어뜨리고, 에이전트가 가질 수 있는 문제 해결력과 생산성의 한계를 오히려 좁힌다는 견해가 있다.
- **의사결정 경계선론의 반론**: 상용 프로젝트 환경에서는 단 한 번의 오작동(예: 마이그레이션 도중 테이블 드롭, 클라우드 과금 폭탄)이 전체 시스템의 비가역적인 피해로 이어지기 때문에, 인지 불가능한 상태에서 자율성을 통제할 안전벨트로서의 경계선이 무조건 선행되어야 한다.

## 관련 노트
- [[Agent Harness]]
- [[Harness Engineering]]
- [[Claude.md 운영 원칙]]

