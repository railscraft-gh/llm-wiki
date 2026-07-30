---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - codegen
  - code-analysis
  - code-review
aliases:
  - tirth8205/code-review-graph
  - Code Review Graph
sources: ['raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md']
created: 2026-07-30
updated: 2026-07-30
---

# code-review-graph

## 한 줄 정의
[[코딩 에이전트]]가 변경 작업을 완료하고 풀 리퀘스트(PR)를 제출하기 전, 정적 분석([[tree-sitter]]) 및 가중치 기반 위험 점수(Risk Score) 계산을 통해 변경 영향 범위(Blast Radius)와 테스트 보장 상태를 정밀 진단하는 풀 리퀘스트 리뷰 특화형 코드 그래프 분석 도구이다.

## 핵심 요지
- **PR 단계에서의 영향 범위(Blast Radius) 정밀 진단**: 변경된 코드의 파급 효과를 단순 파일 수준이 아니라 소스 코드 라인 번호와 연관된 개별 테스트 케이스 단위의 구체성(Granularity)을 가지고 추적한다.
- **[[tree-sitter]] 파싱 및 SQLite 기반 로컬 작동**: 코드를 [[tree-sitter]]로 파싱하여 로컬의 SQLite 파일에 노드와 에지로 기록하며, 별도의 클라우드 통신이나 API 비용이 발생하지 않는다.
- **가중치 기반 위험 점수(Risk Score) 산정**: 호출 빈도, 테스트 커버리지 유무, 보안 키워드 일치 여부 등 6개 요인의 가중치를 합산 및 상한선 적용하여 위험도 점수를 도출하고, 이를 바탕으로 PR 병합을 차단(Gate)하는 기능을 지원한다.
- **상세 분석의 리소스 성능 교환(Trade-off)**: 범용 도구인 [[codegraph]]에 비해 인덱싱 속도가 약 4배 느리고 저장 용량도 4배 이상 차지하지만(OmniRoute 기준 2분 25초 빌드, 1.4GB 디스크 사용), 훨씬 고도로 정밀한 테스트 수준의 분석 정보를 획득할 수 있다.

## 상세
`code-review-graph`는 일상적인 코딩 탐색을 위한 [[codegraph]]와 달리, 병합(Merge) 직전의 코드 검토 단계에 초점을 맞추어 설계된 도구이다. GitHub 스타 25,000개 이상을 확보하며 개발 프로세스의 안전장치로 자리 잡았다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).

1. **상세 분석 및 테스트 보장 점검**:
   `code-review-graph`는 특정 함수의 영향 범위를 조회할 때, 단순히 관련 파일 목록만 요약하는 수준을 넘어선다. 해당 함수를 실제로 구동하여 정합성을 보장하는 구체적인 테스트 케이스들의 명칭과 소스 코드 상의 정확한 라인 번호까지 맵핑하여 출력한다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`). 이는 리뷰어가 변경 사항의 안정성을 확보하고, 누락된 테스트 검증 영역이 있는지를 파악하는 데 결정적인 도움을 준다.

2. **위험 점수(Risk Score) 산정 알고리즘**:
   수정한 코드의 잠재적 오류 전파 가능성을 계량화하여 평가한다. 이 위험도 점수는 다음과 같이 가중치가 부여된 6가지 요인을 합산하고 일정한 상한선(limit)을 적용하여 정해진다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`):
   - 해당 코드 영역의 전역 호출 빈도 (호출 노드가 많을수록 높은 위험 가중치 부여)
   - 변경된 코드에 대한 유효 테스트 커버리지 존재 여부
   - 보안 취약성이 높은 예약 키워드(예: Auth, Credentials, SSL 등)와의 일치 여부
   - (기타 수정한 영역의 가중치 요인 등 총 6가지 요소의 합산 및 상한선 적용)
   이 점수를 활용해 특정 기준치를 초과할 경우 풀 리퀘스트 병합을 제어(Gate)하는 자동화 파이프라인을 구축할 수 있다. 단, 이 위험도 점수는 실제 과거 장애 데이터나 AI 예측 모델 기반의 절대적 기준은 아니므로, '추가 검토가 필요한 위험 영역'을 알려주는 힌트로 해석해야 한다.

3. **로컬 우선(Local-first) 보안성**:
   분석 작업 전체가 로컬 PC의 SQLite 파일 하나에서 처리되므로 외부 유출 우려가 없고 쿼리 수행 비용 또한 전혀 없다. MCP([[Model Context Protocol]]) 서버 인터페이스를 제공하여 [[코딩 에이전트]]가 데이터베이스에 직접 정적 구조 쿼리를 호출할 수 있도록 돕는다.

## 예시
### 1. 설치 및 빌드
시스템에 `pip`가 설치되어 있지 않다면 가상 환경을 구축하고 다음 명령어를 실행하여 설치 및 연동을 마칠 수 있다.
```bash
# pip 패키지 설치
pip install code-review-graph

# LLM 에이전트와 연동
code-review-graph install

# 코드베이스 분석 및 SQLite 인덱스 빌드
code-review-graph build
```

### 2. 빌드 성능 및 데이터 용량 비교 (OmniRoute 기준)
8,000개가 넘는 소스 파일을 지닌 오픈소스 프로젝트 OmniRoute를 대상으로 두 도구의 인덱싱 성능을 측정한 수치는 다음과 같다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`):
- **[[codegraph]]**: 인덱스 생성 34초, 디스크 용량 325MB (원본 리포지토리 233MB 대비 약간 큰 편)
- **`code-review-graph`**: 인덱스 생성 **2분 25초** (약 4배 느림), 디스크 용량 **1.4GB** (약 4배 큼)
이러한 리소스 소모량 증가는 테스트 케이스 맵핑 및 구체적인 라인 단위 의존 관계를 전부 추적하여 로컬 DB에 수록하기 위해 발생한 리소스 트레이드오프이다.

### 3. classifyRoute 영향 범위 분석 시나리오
OmniRoute 내의 사용자 권한 부여 파이프라인과 엮인 핵심 인증 함수인 `classifyRoute`를 수정하고 `code-review-graph`를 통해 의존성을 진단하였다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).
- **분석 결과**: `codegraph`가 간접 의존 경로 상에 있는 `proxy.ts`만 식별한 데 반해, `code-review-graph`는 `classifyRoute`를 실행하여 정합성을 보증하는 **구체적인 테스트 케이스 4개**의 정확한 명칭과 코드 내 시작/끝 라인 번호까지 정밀하게 포착하여 제공하였다.
- **광범위 쿼리 시 유의점**: 단일 함수 단위를 넘어 파일 전체의 파급 범위(blast radius)와 같은 넓은 범위의 조회를 실행하면 결과 출력 용량이 대폭 증가한다. 실제 테스트 결과 596KB에 달하는 방대한 텍스트 출력이 유발되었으며, 분석 대상인 영향받은 노드 5,264개 중 **500개만 표시되고 나머지는 누락**되는 현상이 확인되었다. 따라서 평소에는 쿼리 범위를 좁혀 효율적으로 활용하고, 광범위 쿼리는 전체 맥락 파악이 극히 요구되는 경우에만 사용을 한정해야 한다.

## 충돌
- **자동 실시간 동기화 오작동**: 코드 수정 후 저장 시점에 자동 업데이트가 적용되면서 해시 불일치로 인해 이전 노드가 잔존하거나 신규 노드가 누락되는 동기화 지연 문제가 GitHub 저장소에 다수 접수되었다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`). 중대한 의사결정 전에는 수동으로 `code-review-graph build`를 실행해 인덱스를 완전 갱신하는 것이 안전하다.
- **매크로 사용 코드베이스 파싱 제한**: 전처리기 매크로 사용량이 많은 C 언어 등에서는 구문 파서([[tree-sitter]])가 코드를 오분석하여 분석 정보에 결손이 발생할 수 있음이 학술 벤치마크를 통해 검증되었다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).
- **영향 범위 탐색의 허위 탐지(False Positive)**: `code-review-graph`가 의존성 영향 하에 있다고 판정한 노드 10개 중 4개(40%)는 실제 동작이나 코드 흐름 상 아무런 영향이 없는 잘못된 매칭이었다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`). 그러므로 이 도구가 생성한 보고서를 최종 진실로 취급해서는 안 되며, 1차 의존성 필터링 도구로 사용하고 실제 수정 영향에 대해서는 개발자의 검증이 수반되어야 한다.

## 관련 노트
- [[codegraph]]: 로컬 SQLite 및 [[tree-sitter]] 정적 분석 기반의 코드 그래프 컴파일 철학을 공유하는 범용 자매 도구.
- [[코드 위키]]: 코드베이스의 정적 구조를 컴파일하여 지식 저장소로 활용하는 상위 아키텍처.
- [[안드레이 카파시의 지식 컴파일]]: 매번 같은 문서를 일일이 검색하는 대신 지식을 단 한 번 컴파일하여 쿼리한다는 [[RAG]] 극복용 설계 사상.
- [[코드 리뷰 대기열 병목]]: PR 직전에 수정 코드의 영향 범위를 정밀히 검토하고 불필요한 오류 전파를 사전 예방하여 리뷰 병목을 해소하는 연관 시나리오.
- [[코딩 에이전트]]: [[코드 위키]]의 정보 조회를 통해 [[인지적 비용]]을 절감하며 자율적으로 수정 작업을 완수하는 [[LLM]] 기반 시스템.

## 출처
- `raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`
