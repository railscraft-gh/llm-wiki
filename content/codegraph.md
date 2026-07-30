---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - codegen
  - code-analysis
aliases:
  - colbymchenry/codegraph
sources: ['raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md']
created: 2026-07-30
updated: 2026-07-30
---

# codegraph

## 한 줄 정의
[[코딩 에이전트]]가 대규모 코드베이스의 구조와 의존성을 빠르게 분석할 수 있도록, 소스 코드를 SQLite 기반의 그래프 구조로 컴파일하여 제공하는 로컬 우선(local-first)의 범용 코드 분석 도구이다.

## 핵심 요지
- **[[안드레이 카파시의 지식 컴파일]] 구현**: 질문할 때마다 전체 파일들을 매번 새로 검색하고 분석하는 기존 [[RAG]] 방식의 한계를 극복하고, 사전에 컴파일된 지식 구조에 직접 쿼리를 날릴 수 있도록 돕는다.
- **[[tree-sitter]] 기반 정적 분석**: 코드를 단순 텍스트로 보지 않고 구문 분석기([[tree-sitter]])를 사용해 정확한 심볼(Node)과 호출·임포트·상속 관계(Edge)를 정밀 포착한다.
- **MCP([[Model Context Protocol]]) 지원**: 로컬에 생성된 SQLite 기반의 그래프 데이터를 MCP 서버를 통해 [[LLM]] 에이전트와 연동하여, 매 세션마다 불필요하게 소스 코드를 전부 읽는 [[인지적 비용]]을 절감한다.
- **고효율 및 비용 절감**: 단순 키워드 검색(grep)이 탐색하지 못하는 간접적 의존 관계를 완벽히 찾아내며, 검색 결과 용량을 대폭 축소하여 API 토큰 소비를 방지한다.

## 상세
`codegraph`는 코드베이스 파악 작업에 특화되어 있으며, GitHub 스타 6만 개 이상을 획득한 인기 오픈소스 프로젝트이다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`). 이 도구는 [[코드 위키]] 아키텍처를 실질적으로 구현하며 다음과 같은 특징과 동작 원리를 가진다.

1. **로컬 우선(Local-first) 보안 및 비용 장점**:
   모든 연산 및 인덱스 저장이 사용자 로컬 환경의 SQLite 단일 파일로 이루어지므로, 네트워크 전송이나 외부 API 요금이 발생하지 않으며 코드가 외부로 유출될 염려가 없다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).
2. **효율적인 인덱싱 성능**:
   8,000개가 넘는 파일을 가진 오픈소스 프로젝트 OmniRoute를 기준으로 인덱싱 생성에 단 34초가 소요되며, 디스크 공간은 약 325MB(원본 리포지토리 233MB 대비 약간 큰 수준)를 차지하여 리소스 소모가 적다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).
3. **간접 의존성 추적**:
   두 파일이 동일한 어휘를 공유하지 않더라도 구문 분석을 통해 논리적 관계선 꼼꼼하게 기록하므로, 여러 단계를 거치는 간접적인 호출 경로도 무리 없이 추적한다.

## 예시
### 1. 설치 및 연동
시스템 터미널에서 다음 명령어를 통해 `codegraph`를 설치하고 에이전트에 MCP 서버로 연결하여 인덱스를 빌드할 수 있다.
```bash
# 설치 스크립트 실행
curl -fsSL https://raw.githubusercontent.com/colbymchenry/codegraph/main/install.sh | sh

# LLM 에이전트와 연동 설치
codegraph install

# 코드베이스 루트 디렉토리에서 인덱스 생성
codegraph init
```

### 2. 코드 수정 영향 범위 분석 시나리오
대규모 프로젝트 OmniRoute에서 라우팅 검사를 수행하는 핵심 인증 함수인 `classifyRoute`를 수정하고자 하는 시나리오이다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).

* **기존 [[RAG]]/Grep 방식의 문제**:
  grep을 통해 "classifyRoute" 키워드를 검색하면 3개 파일에서 17개의 매칭 결과를 찾지만, 해당 함수를 직접 호출하지 않는 `proxy.ts`는 탐지하지 못한다. `proxy.ts`는 중간 매개 함수인 `runAuthzPipeline`을 통해 간접적으로 연결되어 있기 때문이다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).
* **codegraph 활용 결과**:
  에이전트가 다음 명령어를 실행하여 영향 범위를 조회한다.
  ```bash
  codegraph impact classifyRoute
  ```
  이 쿼리는 단 344바이트 크기의 요약된 결과를 반환하며, `classifyRoute` 자체와 직접 호출 함수, 그리고 2단계 거쳐 있는 `proxy.ts`까지 간접 의존성을 완벽하게 포착한다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`). 이 결과 용량은 전체 매칭 파일을 일일이 에이전트에게 전송해 분석을 유도하는 방식보다 무려 **98.7%** 적어 컨텍스트 윈도우 비용을 대폭 축소시킨다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).

## 충돌
- **자동 동기화 및 실시간 업데이트 오작동**: 코드를 수정하고 저장할 때 이전 해시 기준으로 인덱싱되는 자동 동기화 오류가 보고되었다. 또한 파일명 변경 시 이전 노드가 삭제되지 않거나 새 노드가 쿼리에서 누락되는 일도 발생할 수 있어, 중대한 결정을 내리기 전에는 인덱스를 재구축(`codegraph init` 등)하는 편이 안전하다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).
- **매크로 기반 프로그래밍 언어의 파싱 오류**: C 언어와 같이 전처리기 매크로 사용 빈도가 높은 프로젝트에서는 `tree-sitter` 구문 분석기가 매크로를 정확히 해석하지 못해 의존성 그래프에 누락이나 공백이 발생할 수 있다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).

## 관련 노트
- [[코드 위키]]: `codegraph`가 속한 상위 지식 구조화 기술이자, 코드 도메인 전용의 지식 관리 아키텍처에 대한 노트.
- [[안드레이 카파시의 지식 컴파일]]: 지식을 매번 검색하는 대신 사전에 단 한 번 구조적으로 컴파일하여 쿼리하는 상위 설계 철학.
- [[코딩 에이전트]]: `codegraph` 및 MCP 연동 환경을 적극 활용하여 생산성을 고양시키는 [[LLM]] 기반 에이전트.
- [[code-review-graph]]: 동일한 코드 컴파일 철학을 공유하며, PR(Pull Request) 리뷰 단계와 상세한 테스트 보장 범위 및 위험도 점수 계산에 특화된 도구로 상호 비교 대상이 된다.

## 출처
- `raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`
