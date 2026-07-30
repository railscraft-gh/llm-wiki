---
type: concept
status: evergreen
core: true
tags:
- agent
- harness
- self-improvement
- workflow
aliases:
- Harness Engineering
- 자가 개선 하네스
- 자가-개선-하네스-엔지니어링-(Harness-Engineering-for-Self-Improvement)
sources:
- raw/Harness Engineering for Self-Improvement.md
created: 2026-07-21
updated: 2026-07-21
---
# 자가 개선 하네스 엔지니어링 ([[Harness Engineering]] for Self-Improvement)

## 한 줄 정의
AI 모델이 작업 수행, 궤적 평가, 메모리 관리 등을 원활히 처리하여 궁극적으로 재귀적 자가 개선(RSI)을 이룰 수 있도록 감싸고 통제하는 런타임 시스템(하네스) 설계 및 메타 최적화 기법.

## 핵심 요지
단순한 프롬프트 템플릿 중심의 에이전트를 넘어, 최신 AI 에이전트 시스템은 파일 시스템 기반의 영구 메모리, 서브 에이전트 병렬화, 워크플로 자동화 등을 아우르는 복합 하네스로 발전하고 있다. 더 나아가, [[LLM]] 자체가 자신의 하네스(코드 기반 컨텍스트, 워크플로 제어 등)를 직접 프로그래밍하고 진화적 탐색으로 최적화하는 단계로 나아가고 있다.

## 상세
- **하네스(Harness)의 역할**: 운영 체제(OS)처럼 [[LLM]] 기본 모델을 둘러싸고 도구 호출, 행동 조율, 상태 관리, 백그라운드 작업을 책임지는 환경.
- **주요 패턴**: 워크플로 자동화, 영구 메모리(파일 시스템) 활용, 서브 에이전트 위임.
- **최적화 단계의 진화**:
  - 컨텍스트 엔지니어링: 단순 프롬프트 덧붙이기에서 벗어나, 큐레이터/리플렉터 구조(ACE, MCE)를 통해 진화하는 플레이북처럼 상태를 유지.
  - 워크플로 자동 설계: ADAS, AFlow처럼 메타 에이전트나 몬테카를로 트리 탐색을 이용해 효율적인 에이전트 워크플로 구조 자체를 자동 발굴.
  - 하네스 자체 개선: [[Meta-Harness]], Self-Harness 등 [[LLM]] [[코딩 에이전트]]가 실패 궤적을 분석해 자신의 제어 흐름과 도구 코드를 스스로 편집, 개선.

## 예시
- **AI Scientist 파이프라인**: 연구 아이디어 제안, 코드 작성, 실험 실행, 결과 분석, 논문 작성, 피어 리뷰에 이르는 전체 워크플로를 자동화한 시스템 설계.
- **Darwin Gödel Machine (DGM)**: [[코딩 에이전트]]가 벤치마크 평가 로그를 분석하고, bash 셸과 편집기를 이용해 자신의 하네스 소스 코드를 수정한 뒤, 우수한 성과를 내는 하네스만 살아남는 진화적 탐색 과정.

## 충돌
- **핵심 지능 vs 하네스 복잡성**: 하네스 최적화가 성과 향상을 이끌어내지만, 기반 모델의 "핵심 지능(Core Intelligence)"이 일정 수준(예: 약한 모델의 경우 오히려 저하 발생)을 넘지 못하면 자가 개선 루프가 붕괴하거나, 평가 지표가 모호한 분야(예: 장기 과학적 발견)에서는 지나친 낙관(p-hacking) 등의 문제 발생.

## 관련 노트
- [[LLM 외부적 환각 (Extrinsic Hallucinations in LLMs)]]
- [[LLM 적대적 공격과 탈옥 (Adversarial Attacks on LLMs)]]

## 출처
- `raw/Harness Engineering for Self-Improvement.md`
