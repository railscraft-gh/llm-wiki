---
aliases:
- 메타 하네스
core: false
created: 2026-05-13
sources:
- arxiv-2603.28052-meta-harness
- 프로덕션 AI 에이전트를 위한 Agent Harness 구축
- raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md
- raw/arxiv-2603.28052-meta-harness.md
- raw/Andrej Karpathy가 AI 코딩 에이전트의 고질병을 고치는 방법. 마크다운 파일 하나.md
- raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
- raw/GLM-5.1-vs-Kimi-K2.6-Coding-Comparison.md
- raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md
status: needs-review
tags:
- llm
- agent
- harness-engineering
- meta-learning
type: concept
updated: '2026-06-22'
---# Meta-Harness

## 한 줄 정의

Meta-Harness는 대규모 언어 모델 주변의 하네스 코드를 end-to-end로 검색하고 최적화하는 외부 루프 시스템으로, 파일시스템을 통해 모든 이전 후보의 소스 코드와 실행 추적에 접근하는 에이전트 제안자를 사용한다.

## 핵심 요지

- 기존 텍스트 최적화기는 피드백을 짧은 요약이나 스칼라 점수로 압축해 하네스 엔지니어링에 부적합하다.
- Meta-Harness는 **무손실 파일시스템 접근**을 제공해 제안자가 `grep`과 `cat`으로 이전 실패의 원인을 직접 추론할 수 있게 한다.
- 단일 평가가 최대 1,000만 토큰의 진단 정보를 생성할 수 있으며, 이는 기존 텍스트 최적화 설정의 최대 피드백 예산보다 약 1,000배 크다.

## 상세

하네스 엔지니어링은 모델 가중치를 바꾸지 않고 모델이 보는 정보를 결정하는 코드(프롬프트 구성, 검색, 메모리, 오케스트레이션)를 개선하는 작업이다. 기존에는 인간 엔지니어가 실패를 검사하고 휴리스틱을 조정하는 수작업이었으나, Meta-Harness는 이 과정을 코딩 에이전트 제안자에게 위임한다.

후속 raw 기준으로 보면 Meta-Harness는 [[Agent Harness]] 자체를 다시 탐색하는 상위 루프다. 즉 개별 agent의 orchestration loop, memory, context management, verification 구조를 사람이 직접 손보는 대신, 다른 agent가 하네스 후보를 생성하고 평가하는 셈이다.

제안자(Claude Code 기반)는 파일시스템을 통해 이전 하네스의 소스 코드, 평가 점수, 실행 추적(프롬프트, 도구 호출, 모델 출력, 상태 업데이트)을 선택적으로 검사한다. 반복당 중간값 82개 파일을 읽으며, 하네스 소스 코드(41%)와 실행 추적(40%)에 거의 균등하게 접근한다. 이 비마코비안(non-Markovian) 접근이 압축된 피드백 최적화기와의 핵심 차이다.

**검색 루프:**
1. 제안자가 파일시스템을 읽고 이전 후보를 검사
2. 새로운 하네스를 제안
3. 평가 작업에서 평가
4. 모든 로그를 새 디렉토리에 저장하고 반복

제안자는 템플릿 채우기가 아니라 알고리즘 구조 수준에서 하네스를 수정할 수 있다. 실제로 Terminus-KIRA 같은 강력한 사전 하네스에서 시작하기도 하지만, 창발적 전략(environment bootstrapping, draft-verification 분류 등)을 발견하기도 한다.

## 실험 결과

| 도메인 | 결과 | 비고 |
|--------|------|------|
| 온라인 텍스트 분류 | ACE 대비 **+7.7pts**, **4배 적은 컨텍스트 토큰** | 48.6% 정확도, 4회 평가로 기존 최종 성능 도달 |
| 검색 증강 수학 추론 | 200개 IMO 수준 문제 평균 **+4.7pts** | 5개 홀드아웃 모델 전반에서 일관된 향상 |
| TerminalBench-2 | Haiku 4.5 에이전트 중 **#1**, Opus 4.6 중 #2 | 자동 발견 하네스가 수작업 기준선 Terminus-KIRA를 능가 |

어블레이션 결과, 실행 추적에 대한 전체 접근이 점수만(34.6%)이나 점수+요약(34.9%) 조건을 50.0%로 실질적으로 능가했다. 요약은 오히려 진단적으로 유용한 세부사항을 압축해 해가 될 수 있다.

## 예시

- 발견된 텍스트 분류 하네스: Label-Primed Query 앵커드 분류 — 유효 레이블 목록, 클래스별 대표 예제, 로컬 대조 쌍을 포함한 단일 프롬프트 구성
- 발견된 수학 검색 하네스: 4-경로 BM25 프로그램 — 어휘 라우터가 쿼리를 조합론/기하/정수론/기본 경로에 할당
- 발견된 TerminalBench-2 하네스: 환경 부트스트래핑 — 에이전트 루프 시작 전 샌드박스 환경 스냅샷을 수집해 초기 프롬프트에 주입

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Harness Engineering]]
- [[Agent Native Infrastructure]]
- [[Software 3.0]]
- [[Jagged Intelligence]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Harness]]

