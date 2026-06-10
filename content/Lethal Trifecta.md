---
type: concept
status: evergreen
core: true
tags:
  - llm
  - agent
  - security
  - harness-engineering
aliases:
  - 치명적 삼위일체
  - Rule of Two
sources:
  - evolution-of-ai-agentic-patterns
  - https://simonwillison.net/2025/Jun/2/the-lethal-trifecta/
  - https://ai.meta.com/blog/practical-ai-agent-security/
created: 2026-05-16
updated: 2026-05-16
---

# Lethal Trifecta

## 한 줄 정의

Lethal Trifecta는 AI 에이전트가 신뢰할 수 없는 입력, 민감한 시스템 접근, 외부 상태 변경 세 능력을 동시에 가질 때 보안 사고가 필연이라는 Simon Willison의 위험 모델이다.

## 핵심 요지

- 셋 중 하나라도 빠지면 공격 표면이 닫힌다. 셋 모두 열려 있으면 prompt injection 한 번에 데이터 유출이나 파괴적 행동이 일어난다.
- Meta AI의 "Rule of Two"는 이 모델을 실천 규칙으로 바꿔 에이전트가 세 능력 중 최대 두 개만 동시에 갖게 한다.
- 세 능력 모두가 필요하면 human-in-the-loop 승인을 의무화해야 한다.
- 이 프레임은 개별 도구 문법보다 상위에서 에이전트 세션 위험을 빠르게 채점하는 기준으로 재사용 가치가 높다.

## 상세

Simon Willison이 2025년 6월에 정리한 "The Lethal Trifecta for AI Agents"는 다음 세 능력이 한 에이전트 세션에 공존할 때 prompt injection 또는 도구 오용 사고가 사실상 막을 수 없게 된다고 본다.

1. **신뢰할 수 없는 입력 처리** — 외부 웹 페이지, 이메일, 사용자가 보낸 PDF, 검색 결과처럼 공격자가 내용을 통제할 수 있는 입력.
2. **민감한 시스템 또는 데이터 접근** — 개인정보, 내부 API, 데이터베이스, 비밀 키, 소스 리포지토리.
3. **외부 상태 변경 능력** — 이메일 발송, 파일 삭제, API 호출, 결제, 코드 푸시, MCP 도구 실행.

Meta AI는 2026년 초 발표한 "Rule of Two"에서 이 위험 모델을 Chromium 보안 정책 스타일로 정리했다. 한 에이전트 컨텍스트 안에 세 능력 중 최대 두 개만 허용한다. 세 능력이 모두 필요한 작업은 반드시 사람 승인을 받는다. 이 규칙은 기능 제약이 아니라 prompt injection이 발생해도 실제 피해로 이어지지 않도록 차단막을 두는 운영 원칙이다.

[[Claude Code 권한 설계]]에서 보던 권한 모드, allow/deny 리스트, MCP 도구 화이트리스트는 이 프레임을 구현하는 방식이다. [[Harness Engineering]]의 가드레일 설계에서도 도구 단위가 아니라 "이 세션이 세 능력 중 몇 개를 동시에 갖는가"로 위험을 채점하면 인지 비용이 줄어든다.

## 판단 기준

- 이 세션이 외부 입력을 읽는가.
- 이 세션이 비밀 정보나 내부 시스템에 접근하는가.
- 이 세션이 파일, API, 결제, 푸시처럼 외부 상태를 바꾸는가.
- 세 가지가 동시에 필요하다면 사람 승인이나 세션 분리가 있는가.

## 예시

- 외부 데이터 읽기(1) + 민감 정보 처리(2) → 외부 상태 변경(3) **차단**. PR 작성, 메일 발송 등은 사람이 승인.
- 외부 데이터 읽기(1) + 상태 변경(3) → 민감 정보 접근(2) **차단**. 샌드박스 컨테이너에서 실행하고 비밀 키 마운트 금지.
- 민감 정보 처리(2) + 상태 변경(3) → 외부 입력(1) **차단**. 내부 데이터만 다루는 cron, routine은 외부 웹 검색 도구 비활성화.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Claude Code 권한 설계]]
- [[Harness Engineering]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Native Infrastructure]]
- [[API Key 관리 원칙]]
- [[병렬 에이전트 세션 운영]]

