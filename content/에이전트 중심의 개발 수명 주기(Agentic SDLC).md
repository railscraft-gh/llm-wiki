---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - workflow
  - software-engineering
aliases:
  - Agentic SDLC
  - 에이전트 중심 SDLC
  - 에이전트 중심의 개발 수명 주기
sources:
  - raw/How to Use lat.md. Turn Any Folder Into a Validated Knowledge Graph.md
created: 2026-07-24
updated: 2026-07-24
---

# 에이전트 중심의 개발 수명 주기(Agentic SDLC)

## 한 줄 정의

AI 에이전트가 개발의 능동적인 파트너 또는 자율적인 실행 주체로 참여하여, 코드 구현과 기술 문서의 일치성을 지속적으로 교차 검증하고 정밀한 컨텍스트 통제를 통해 소프트웨어를 점진적으로 발전시키는 개발 수명 주기 모델이다.

## 핵심 요지

- **AI-인간 협업 수명 주기**: 인간은 고차원 설계와 비판적 검증에 집중하고, AI 에이전트는 코드 작성, 정적 검사, 지식 베이스의 점진적 컴파일 등 귀찮은 수작업 개발을 주도한다.
- **문서화와 빌드 파이프라인의 연계**: 기술 문서를 작성·보관하는 것을 소프트웨어 빌드/커밋 과정과 통합하여, 코드가 변경될 때 정합성 검사를 자동으로 강제한다.
- **참조 무결성(Referential Integrity) 보장**: 문서에 작성된 요구 조건이나 규칙 설명이 실제 밑바닥 코드 구현체(클래스, 함수 등)와 다를 경우 오류를 발생시키고 배포/커밋을 통제한다.
- **토큰 효율 극대화**: 에이전트가 전체 소스 코드를 기계적으로 읽는 비효율을 방지하기 위해 구조화된 지식 지도를 사전 탐색하게 하여 필요한 소스만 선택적으로 읽도록 조율한다.

## 상세

### 기존 SDLC의 한계와 요구사항
전통적인 소프트웨어 개발 수명 주기(SDLC) 환경에서는 프로젝트 규모가 확장되고 다수의 참여자가 생겨나면 코드와 문서의 괴리가 발생한다. 아무도 읽지 않고 방치되어 낡아진 기술 문서(Outdated documentation)는 신규 개발자와 AI 에이전트 모두에게 숲을 보지 못하고 잘못된 맥락(Context)을 학습하게 만드는 주범이 된다.

또한 대규모 코드베이스에 모든 파일을 [[LLM]] 컨텍스트 윈도우에 그대로 밀어 넣는 방식은 불필요한 토큰의 낭비와 모델의 맥락 오해 현상을 낳는다.

### Agentic SDLC의 작동 메커니즘
에이전트 중심 SDLC는 이러한 문제를 해결하기 위해 **검증 가능한 지식 지도(Validated Knowledge Graph)**를 구축하고 이를 개발 파이프라인과 직결한다.

1. **지식의 원자화와 직결**: 기술 가이드, 시스템 설계 규칙 등을 원자적인 마이크로 문서 조각으로 쪼개고 이를 코드의 특정 함수/클래스와 주석 등으로 직접 링크(Link)한다.
2. **자동 정적 검증(Latching)**: 코드를 로컬에 저장하거나 깃 커밋(Git Commit)할 때마다 [[lat.md(Agent Lattice)]]와 같은 도구가 참조 고리들의 유효성을 전수 조사한다.
3. **코드 저장 차단**: 문맥의 정합성이 훼손되었거나(예: 코드 내 함수명이 바뀌었으나 기술 문서에는 이전 명칭이 유지된 경우) 설명이 누락된 기능이 감지되면 빌드 또는 커밋을 즉시 차단하여, 낡거나 잘못된 정보가 코드 저장소에 영구 병합되는 것을 원천 방지한다.
4. **에이전틱 AI 거버넌스(Agentic AI Governance) 확립**: 에이전트의 작동 범위를 규제하여 무분별한 수정(바이브 코딩의 단점)을 방지하고, 에이전트 스스로의 치유(Self-healing)와 계획 지침 내 수정을 강제한다.

## 예시

`lat.md`를 도입하여 Agentic SDLC를 구축한 실무 워크플로우 예시:

1. **코드 변경**: 개발자(또는 서브 에이전트)가 `src/auth/jwt.py` 내의 토큰 검증 함수명을 `verify_auth_token`에서 `verify_jwt_token`으로 리팩토링한다.
2. **문서 불일치**: `wiki/security.md` 문서에는 구버전 명칭인 `verify_auth_token`에 대한 규칙이 기재되어 있다.
3. **자동 정적 검사**: 개발자가 코드를 커밋하기 위해 git commit을 호출할 때 pre-commit hook으로 `lat.md check`가 기동한다.
4. **경고 및 차단**:
   ```bash
   $ git commit -m "refactor: rename jwt verification function"
   [lat.md Check] Scanning codebase and wiki links...
   [ERROR] Reference Integrity Mismatch in wiki/security.md:
           The concept points to 'verify_auth_token', but 'verify_jwt_token' is found in src/auth/jwt.py.
   [ERROR] Validation failed. Git commit rejected.
   ```
5. **자가 치유**: AI 에이전트가 경고 메시지를 받아 `wiki/security.md` 내의 함수명을 신규 명칭으로 자동 업데이트한 뒤 다시 커밋을 처리하여 정상 통과시킨다.

## 관련 노트

- [[lat.md(Agent Lattice)]]
- [[선 요약 강제 원칙(Summary-first rule)]]
- [[AI 코딩 에이전트 검증 전략]]

## 출처

- `raw/How to Use lat.md. Turn Any Folder Into a Validated Knowledge Graph.md`
