---
type: concept
status: draft
core: false
tags:
  - llm
  - workflow
  - knowledge-graph
aliases:
  - Summary-first rule
  - 선 요약 원칙
sources:
  - raw/How to Use lat.md. Turn Any Folder Into a Validated Knowledge Graph.md
created: 2026-07-24
updated: 2026-07-24
---

# 선 요약 강제 원칙(Summary-first rule)

## 한 줄 정의

지식 문서가 항상 짧은 요약(Summary)으로 시작하도록 강제함으로써, AI 에이전트와 인간 협업자의 정보 탐색 속도를 극대화하고 프로젝트 지도의 품질을 유지하는 지식 관리 규칙이다.

## 핵심 요지

- **AI 탐색 최적화**: AI 에이전트가 지식 지도(Knowledge Graph)를 스캔할 때 문서 전체를 분석할 필요 없이 상단의 요약만으로 빠르고 저비용으로 관련성을 판별할 수 있도록 돕는다.
- **문서 품질 유지 및 방치 방지**: 문서 작성 시 필수적으로 요약을 규정함으로써 지식 데이터가 낡아지거나 불완전한 형태로 방치되는 것을 예방한다.
- **정적 검증(Static Validation) 연계**: [[lat.md(Agent Lattice)]]와 같은 도구와 결합하여 요약이 누락된 문서를 빌드 및 커밋 단계에서 탐지하고 차단한다.
- **컨텍스트 윈도우 절약**: 불필요한 전체 텍스트 주입을 방지하여 LLM의 제한된 컨텍스트 공간과 토큰 사용 비용(Token Usage)을 아낀다.

## 상세

AI 에이전트 기반 개발(Agentic Workflow)에서는 프로젝트가 대규모화되면서 발생하는 방대한 양의 텍스트가 심각한 정보 노이즈로 작용한다. AI 모델에게 프로젝트 전체 파일을 원형 그대로 계속 주입하는 방식은 토큰의 낭비뿐만 아니라 모델의 주의력 흩어짐(Lost in the Middle) 현상을 유발한다.

`선 요약 강제 원칙`은 이를 해결하기 위해 문서를 원자적인 마이크로 노트(Micro-notes) 형태로 잘게 쪼개고, 각 문서의 헤더나 시작 부분에 핵심 요지를 한눈에 파악할 수 있는 요약을 필수 명시하도록 유도한다. 이는 단순히 읽기 좋은 문서를 만드는 미적인 관점을 넘어선다. AI 에이전트가 전체 구조(Lattice) 상에서 특정 노드를 방문하여 탐색 경로를 결정할 때, 이 요약 정보만을 사전 필터링용 메타데이터로써 가볍게 읽어 들일 수 있기 때문에 쿼리 처리 성능이 대폭 상승한다.

도구 측면에서는, 요약이 비어 있는 문서 섹션이 존재할 경우 빌드 파이프라인에서 정적 검사를 통해 예외를 발생시킨다. 이는 문서 관리를 일반적인 코드 검사(Linting)나 테스트처럼 빌드 프로세스의 일부로 강제화하는 역할을 한다.

## 예시

`lat.md` 지식 베이스를 구축할 때, 유저 로그인 로직을 기술한 `wiki/user-login.md` 문서의 예시는 다음과 같다.

```markdown
---
title: User Login Process
tags: [auth, api]
---
# User Login Process

> [!IMPORTANT]
> **Summary**: 이 문서는 OAuth 2.0 프로토콜을 사용한 소셜 로그인 처리 절차 및 `src/auth/jwt.py` 내의 세션 발급 방식을 정의한다.

## 상세 구현 사항
1. 클라이언트가 `/api/auth/login`으로 인가 코드를 전달한다.
2. `jwt.py` 모듈이 공급자 API 서버와 통신해 토큰을 발급받는다.
...
```

이 상태에서 `lat.md check` 명령어를 구동하면, 도구는 문서 상단에 요약 블록(`Summary` 키워드 포함)이 정상적으로 기술되었는지 검증한다. 만약 요약이 유실되었다면 다음과 같은 오류를 출력하며 코드 저장을 중단시킨다.

```bash
$ lat.md check
[ERROR] wiki/user-login.md: Missing required 'Summary-first' block. Commit rejected.
```

## 관련 노트

- [[lat.md(Agent Lattice)]]
- [[에이전트 중심의 개발 수명 주기(Agentic SDLC)]]

## 출처

- `raw/How to Use lat.md. Turn Any Folder Into a Validated Knowledge Graph.md`
