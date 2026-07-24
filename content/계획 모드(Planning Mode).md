---
type: concept
status: evergreen
core: false
tags:
  - llm
  - agent
  - workflow
aliases:
  - Planning Mode
  - 계획 모드
sources:
  - raw/You don’t need thinking levels in Claude Code. You need Planning and Goal modes..md
created: 2026-07-24
updated: 2026-07-24
---

# 계획 모드(Planning Mode)

## 한 줄 정의

AI 코딩 에이전트가 소스 코드를 직접 편집하기 전에, 코드를 탐색하고 논리적인 작업 순서와 계획안을 수립해 개발자의 사전 승인을 받도록 제한하는 워크플로우 통제 기법이다.

## 핵심 요지

- **성급한 수정 방지**: 코딩 에이전트의 주된 실패 원인인 '성급한 코드 작성'을 예방하기 위해 설계와 구현 단계를 차단벽(Boundary)으로 분리한다.
- **임시 설계 검증**: 실제 코드에 반영하기 전 `/temp` 스테이징 공간 등에 임시 계획 파일을 작성하며, 개발자는 `Ctrl+G` 등의 단축키로 설계 구조를 미리 파악한다.
- **패러다임 전환**: 개발자의 주된 검증 질문을 사후 분석("에이전트가 수정을 똑바로 했는가?")에서 사전 검토("이 계획안의 설계 방향이 타당한가?")로 전환시킨다.
- **비용 최적화 매칭**: 논리가 복잡한 계획 단계에는 추론력이 높은 무거운 모델(Opus)을 주입하고, 확정된 계획의 단순 코딩 구현 단계에는 경량화된 속도 모델(Sonnet)을 동적으로 매칭하는 구조와 결합된다.

## 상세

계획 모드는 에이전트 기반 소프트웨어 개발 수명 주기(Agentic SDLC)에서 필수적인 안정 장치로 간주된다. AI 모델이 임의로 프로젝트 파일을 수정하기 시작하면 복잡한 의존성 관계가 깨지거나 롤백(Rollback) 비용이 급상승한다. 계획 모드는 에이전트의 동작 순서를 아래와 같은 사이클로 강제 규정한다:

$$\text{코드 파악(Inspect)} \rightarrow \text{논리 추론(Reason)} \rightarrow \text{계획안 제안(Propose Plan)} \rightarrow \text{사용자 검토 및 승인 대기(Wait)}$$

이 모드는 특히 복잡한 아키텍처 전환(예: 특정 라이브러리 마이그레이션), 2개 이상의 파일에 걸친 대규모 스펙 추가, 또는 수정 실패 시 뒤집는 비용(Reversal cost)이 큰 과업을 진행할 때 필수적으로 요구된다.

## 예시

### Claude Code에서의 계획 모드 활용 워크플로우 예시
1. **모드 진입**: 터미널에 `/plan` 명령을 입력하여 계획 모드를 활성화한다.
2. **과업 요청**:
   ```
   /effort xhigh
   리포팅 파이프라인의 데이터 프레임 처리를 pandas에서 Polars로 마이그레이션하는 계획안을 제안해 줘.
   ```
3. **계획서 리뷰**: Claude Code가 `/temp/plan_polars.md` 등의 경로에 변경 대상 모듈, 테스트 전략, 발생 가능 리스크를 종합 정리하면, 개발자가 `Ctrl+G`로 검토 후 미비점을 프롬프트로 수정 지시한다.
4. **구현 승인**: 계획이 최종 확정되면, 개발자가 승인(Proceed)하여 구현 단계로 전환하며, 에이전트는 실제 소스 코드 수정에 돌입한다.

## 관련 노트

- [[Claude Code(클로드 코드)]]
- [[Codex(코덱스)]]
- [[10-80-10 법칙(10-80-10 Rule)]]
- [[AI 코딩 에이전트 검증 전략]]

## 출처

- `raw/You don’t need thinking levels in Claude Code. You need Planning and Goal modes..md`
