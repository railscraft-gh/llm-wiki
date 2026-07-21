---
aliases: []
core: false
created: 2026-07-10
sources:
  - raw/Hermes 에이전트의 내부 구조 - 자가 개선 에이전트의 작동 원리.md
status: evergreen
tags:
  - llm
  - agent
  - hermes-agent
  - self-improvement
  - architecture
type: workflow
updated: 2026-07-10
---
# Hermes 에이전트 자가 개선 아키텍처

## 한 줄 정의

Hermes 에이전트 자가 개선 아키텍처는 에이전트가 실무 구동 과정에서 스스로 성공한 워크플로우를 분석하여 재사용 가능한 독립 스킬(Skill) 코드를 자동 생성 및 미세 조정(patch)하며 진화해나가는 자율 학습 시스템 아키텍처이다.

## 핵심 요지
- 정기 넛지(Periodic nudge) 메커니즘을 통해 에이전트 스스로 세션 내 핵심 정보를 선별하여 상주 메모리에 영구 기록한다.
- API 호출 5회 이상, 런타임 에러 자가 복구, 사용자의 오작동 지목 등의 트리거를 충족하면 ~/.hermes/skills/ 하위에 스킬 마크다운을 자율 생성한다.
- 스킬의 자가 개선을 위해 전체 덮어쓰기(edit) 대신 검증된 차이점만 미세 정밀 수술하는 patch 액션을 적극 사용하여 환각을 최소화하고 변동성을 제어한다.
- MEMORY.md/USER.md 상주 메모리(합산 3,575자 제한), SQLite FTS5 에피소드 검색, 온디맨드 스킬 로드, 12개 계층의 Honcho 프로파일링으로 구성된 4단계 입체 메모리 아키텍처를 지닌다.

## 상세

### 1. 자가 학습 루프 (The Learning Loop)
매 세션 하단에서 백그라운드로 작동하며, 메모리 적재 ➡️ 스킬 도출 ➡️ 세션 검색을 연계한다.
- **메모리 큐레이션**: 정기 넛지 메커니즘을 통해 무분별한 텍스트 덤프 대신 가치 있는 지식의 정수만 가려내 기록한다.
- **자율적 스킬 생성**: `agentskills.io` 오픈 표준 스펙을 따르는 스킬 파일을 `~/.hermes/skills/`에 생성한다.
- **자가 개선 API**: `skill_manage` 시스템 도구의 6개 액션(`create`, `patch`, `edit`, `delete`, `write_file`, `remove_file`) 중 `patch`를 적극 사용하여 안전성을 확보한다.

### 2. 4단계 다층식 메모리 아키텍처
- **1단계 (`MEMORY.md`)**: 에이전트 개인 메모.
- **2단계 (`USER.md`)**: 사용자 프로필.
  - 두 상주 메모리는 합산 3,575자 제한을 통해 엄격히 큐레이션되며, 세션 기상 시 디폴트 주입된다. 수정 사항은 다음 세션부터 적용된다.
- **3단계 (절차적 스킬 메모리)**: 스킬명과 요약만 선 로드 후 필요 순간에만 본문을 디스크로부터 로드하는 점진적 맥락 공개(Progressive disclosure)를 통해 컨텍스트 비용을 제어한다.
- **4단계 (혼초/Honcho 레이어)**: 12개 아이덴티티 레이어를 분석해 사용자의 선호도와 톤앤매너, 지식 수준을 패시브 프로파일링하는 선택형 독립 모듈이다.

### 3. 에이전트 루프 및 턴 라이프사이클
`run_agent.py` 오케스트레이션 엔진이 턴별 태스크 ID 발급, 프리플라이트 압축 검사(Pre-flight compression check), Sentinel 프로세스를 통한 에피소드 압축 및 계보(Lineage) 보존, 프롬프트 캐싱(Stable prefix 최상단 배치), API 장애 시 Failover(Fall through)를 조율한다.

### 4. 6대 물리 실행 환경 (Terminal Backends)
에이전트 동작의 격리와 권한을 제어하는 하네스 장치다.
- **Local**: 로컬 쉘 직접 연산.
- **Docker**: read-only 루트 파일시스템 강제 잠금 및 리눅스 capabilities 드롭을 통한 하드닝 샌드박스.
- **SSH**: 원격 서버 보안 접속 제어.
- **Daytona & Modal**: 웜 스타트(Warm start)를 이용한 서버리스 구동 백엔드.
- **Singularity**: HPC(고성능 연산 클러스터)용 특수 격리 옵션.
- **제로 텔레메트리**: 외부 전송 없는 에어갭(Air-gapped) 환경 작동을 물리적으로 보장한다.

## 예시

### 1. Nebius Token Factory 연동
API 인증 키 등록 및 OpenAI 호환 커스텀 엔드포인트를 지정하여 128K 컨텍스트를 지닌 초거대 모델 `NousResearch/Hermes-4-405B`를 두뇌로 매핑한다.
```bash
export NEBIUS_API_KEY=your_key_here
hermes model
# 1. OpenAI-compatible endpoint 선택
# 2. Base URL: https://api.tokenfactory.nebius.com/v1/
# 3. Target Model ID: NousResearch/Hermes-4-405B
```
이후 대화 기록을 데이터 랩(Data Lab)으로 전송해 파인튜닝 데이터셋으로 가공 및 프라이빗 엔드포인트 배포가 가능하다.

## 충돌

## 관련 노트
- [[Hermes Agent]]
- [[AI 에이전트 아키텍처 완전 가이드]]

