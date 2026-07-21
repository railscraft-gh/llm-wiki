---
type: tool
status: draft
core: false
tags:
- llm
- agent
- context-engineering
aliases:
- 헤드룸
sources:
- raw/Headroom. The Netflix Tool That Makes AI Agents 10x Cheaper.md
created: 2026-07-18
updated: 2026-07-18
---
# Headroom

## 한 줄 정의
에이전트와 LLM 사이에서 작동하여 가역적 압축(CCR)과 출력 제어를 통해 토큰 낭비를 절감하고 비용을 절약하는 넷플릭스 오픈소스 컨텍스트 압축(Context Compression) 레이어 도구이다.

## 핵심 요지
- **높은 토큰 절감률**: 실제 워크로드 테스트 결과 SRE 장애 디버깅에서 92% 토큰 절감, GitHub 이슈 분류에서 73% 절감, 코드 검색에서 92% 절감을 달성했다 [raw/Headroom. The Netflix Tool That Makes AI Agents 10x Cheaper.md#L13](file:///Users/railscraft/Obsidian/raw/Headroom.%20The%20Netflix%20Tool%20That%20Makes%20AI%20Agents%2010x%20Cheaper.md#L13).
- **가역적 압축 (CCR, Cache-Compress-Retrieve)**: 정보를 요약·압축하되 원본은 로컬 캐시에 저장하여, LLM이 세부 정보가 필요할 때 `headroom_retrieve` 툴을 호출해 다시 복원할 수 있도록 지원한다.
- **출력 토큰 절감**: 입력 토큰 압축뿐만 아니라 장황도 제어(Verbosity Steering) 및 연산 노력 라우팅(Effort Routing)을 통해 Opus급 모델 기준 입력 대비 5배 단가에 달하는 출력 토큰 낭비를 차단한다 [raw/Headroom. The Netflix Tool That Makes AI Agents 10x Cheaper.md#L38](file:///Users/railscraft/Obsidian/raw/Headroom.%20The%20Netflix%20Tool%20That%20Makes%20AI%20Agents%2010x%20Cheaper.md#L38).
- **자가 피드백 시스템 (`headroom learn`)**: 실패한 세션을 스스로 분석하여 `CLAUDE.md`, `AGENTS.md` 등의 파일에 개선사항을 직접 기록하고 사용자의 선호 장황도 레벨을 파악한다.

## 상세

### 1. 처리 파이프라인 (Pipeline)
Headroom은 다음과 같은 구조로 유입 콘텐츠를 필터링하고 압축한다:
1. **CacheAligner**: 프롬프트 접두사(prefix)를 안정화해 LLM의 KV cache 히트율을 극대화한다.
2. **ContentRouter**: 콘텐츠의 유형(JSON, 코드, 일반 텍스트 등)에 따라 최적의 압축 모듈을 라우팅한다.
   - **SmartCrusher**: JSON 배열 및 중첩 객체 압축
   - **CodeCompressor**: AST(추상 구문 트리) 파싱을 적용하여 소스 코드 압축
   - **Kompress-base**: 자체 Hugging Face 모델을 사용하여 일반 텍스트 및 에이전트 실행 로그 압축
3. **CCR (Cache-Compress-Retrieve)**: 로컬 캐시와 검색(Retrieve) 툴을 결합하여 정보 손실 리스크가 없는 안전한 압축을 수행한다.

### 2. 출력 조절 기능과 대조군(Control Group) 설정
출력 단가가 높은 Opus급 모델의 낭비를 막기 위해, Headroom은 두 가지 메커니즘을 지원한다:
- **Verbosity steering**: KV 캐시를 해치지 않는 선에서 불필요한 맥락 복기나 장황한 서두를 제거하도록 시스템 프롬프트 끝에 짧은 지시사항을 삽입한다.
- **Effort routing**: 에이전트가 도구 실행 결과를 받아 단순 재개(Resume)하는 상황을 감지하면 추론 강도(thinking effort)를 줄여 토큰 낭비를 막는다.
- **Holdout 대조군 검증**: `HEADROOM_OUTPUT_HOLDOUT=0.1` 옵션 설정 시 대화의 10%를 대조군으로 분리해 단순 예측치(estimated)가 아닌 실제 정밀 측정치(measured) 절감율을 대시보드에 제공한다 [raw/Headroom. The Netflix Tool That Makes AI Agents 10x Cheaper.md#L59](file:///Users/railscraft/Obsidian/raw/Headroom.%20The%20Netflix%20Tool%20That%20Makes%20AI%20Agents%2010x%20Cheaper.md#L59).

### 3. 정확도 및 성능 유지
평가 지표 결과, 수학 평가에서는 성능 저하가 발생하지 않았으며 도구 호출(tool-calling) 정확도는 97%로 높게 유지되었다 [raw/Headroom. The Netflix Tool That Makes AI Agents 10x Cheaper.md#L67](file:///Users/railscraft/Obsidian/raw/Headroom.%20The%20Netflix%20Tool%20That%20Makes%20AI%20Agents%2010x%20Cheaper.md#L67). 

## 예시
- **CLI 도구 설치 및 래퍼 구동**:
  ```bash
  pip install "headroom-ai[all]"
  npm install headroom-ai
  
  headroom wrap claude # 기존 코딩 에이전트를 한 번에 감싸서 연동
  headroom proxy --port 8787 # 코드 수정 없이 프록시 서버 형태로 사용
  ```
- **성능 측정 명령어**:
  ```bash
  headroom perf # 60초 만에 성능 및 절감률 확인 [raw/Headroom. The Netflix Tool That Makes AI Agents 10x Cheaper.md#L117](file:///Users/railscraft/Obsidian/raw/Headroom.%20The%20Netflix%20Tool%20That%20Makes%20AI%20Agents%2010x%20Cheaper.md#L117)
  ```

## 충돌
- **전체 맥락 전송 vs 선택적 지연 검색**: 모델에게 모든 정보를 전달하여 추론 정확도를 단번에 확보하려는 방식과, 우선 최소 정보만 전달하고 필요 시 `headroom_retrieve`로 호출하는 지연 방식의 충돌이다. Headroom의 벤치마크 결과 도구 호출 정확도가 97% 이상으로 유지되어 지연 검색 방식의 타당성이 검증되었다 [raw/Headroom. The Netflix Tool That Makes AI Agents 10x Cheaper.md#L67](file:///Users/railscraft/Obsidian/raw/Headroom.%20The%20Netflix%20Tool%20That%20Makes%20AI%20Agents%2010x%20Cheaper.md#L67).

## 관련 노트
- [[Context Engineering]]
- [[Agent Harness]]
- [[Harness Engineering]]
- [[LLM 메모리 시스템 아키텍처]]

## 출처
- raw/Headroom. The Netflix Tool That Makes AI Agents 10x Cheaper.md
