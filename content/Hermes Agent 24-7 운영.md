---
aliases:
- Hermes Agent 24/7 운영
- Hermes 24/7 운영
- Hermes Agent 운영
- Hermes safe runtime
core: false
created: 2026-06-03
sources:
- Hermes Agent Is Cool. Running It Safely 24_7 Is the Real Trick.
- I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.
- raw/After Claude Code. 6 Open-Source Tools You Should Know-ko.md
- raw/The Open-Source Agent Toolkit in 2026-ko.md
- raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually
  For)-ko.md
- raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md
- raw/How to Get Into the Top 1% in the Next 12 Months-ko.md
- raw/Agentic AI, design systems & Figma. a practical guide-ko.md
- raw/AI Agent Best Practices. Production-Ready Harness Engineering (2026 Guide)-ko.md
- raw/You’re Using AI to Write Code. You’re Not Using It to Review Code.-ko.md
- raw/Why senior designers are doing four jobs for one salary in 2026-ko.md
- raw/Hermes Agent Is Cool. Running It Safely 24_7 Is the Real Trick.-ko.md
- raw/How to write a DESIGN.md file Claude can actually use-ko.md
status: needs-review
tags:
- agent
- runtime
- infrastructure
- security
type: workflow
updated: '2026-06-22'
---# Hermes Agent 24-7 운영

## 한 줄 정의

Hermes Agent 24/7 운영은 에이전트를 늘 켜 둔 상태로 두되, sandbox, skills, curator, memory, 권한 경계로 안전성을 확보하는 장기 실행 workflow다.

## 핵심 요지

- 24/7로 돌릴수록 "좋아 보이는 데모"보다 안전한 운영 경계가 중요해진다.
- 모든 작업을 sandbox 안에 넣고, 파일·명령·권한의 바깥쪽을 먼저 잠가야 한다.
- skills 시스템은 반복 작업을 작은 재사용 단위로 나누는 핵심 레버다.
- Curator는 새로 들어온 작업과 정리되지 않은 상황을 구조화해 주는 운영 도구로 읽을 수 있다.

## 상세

이 노트의 핵심은 Hermes를 "한 번 실행해 보는 에이전트"가 아니라 "항상 켜 두는 runtime"으로 본다는 점이다. 그렇게 되면 기억 문제, 안전 문제, 실행 누수 문제가 전부 전면으로 올라온다. 노트북 한 대에 올려 두는 것보다 Mac mini나 VPS처럼 장시간 동작을 전제로 한 환경이 더 맞는 이유도 여기 있다.

### 1. Skills 시스템이 핵심이다

에이전트가 매번 같은 설명을 다시 듣게 두지 말고, 반복되는 행동을 skills로 분리한다. 이렇게 하면 실행 규칙이 대화창보다 파일로 남고, 장기 운영에서 컨텍스트 소모를 줄일 수 있다.

### 2. Curator

Curator는 긴 실행 흐름에서 들어오는 작업을 정리하고, 무엇을 다음 행동으로 넘길지 가르는 층이다. 이 층이 없으면 24/7 runtime은 곧 잡무 수집기처럼 된다.

### 3. 시작하는 실전 경로

처음부터 큰 자동화를 붙이기보다, sandbox를 먼저 걸고, 읽기 전용 작업부터 시작하고, 그다음 점진적으로 쓰기 권한을 늘리는 편이 안전하다. 운영 초점은 속도가 아니라 반복 가능성이다.

### 4. 어디까지는 안 되는가

이 구조도 모든 기억 문제를 해결하지는 못한다. 장기 메모리를 잘못 설계하면 까먹어야 할 것을 붙잡고, 감춰야 할 것을 노출한다. 그래서 24/7 runtime은 모델 성능보다 운영 규율을 더 강하게 요구한다.

### 5. 이것이 실제로 바꾸는 것

Hermes를 안전하게 오래 돌릴 수 있으면, 에이전트는 더 이상 "대화형 도구"에 머물지 않는다. 실제로는 백그라운드에서 작업을 받아 처리하는 개인 인프라가 된다. 이 변화는 [[Agent Native Infrastructure]]와 [[AI 에이전트 런타임 역할 맵]]이 설명하는 방향과 맞닿아 있다.

## 예시

- 모든 파일 수정 작업을 sandbox 안에서만 수행한다.
- 시작 시에는 읽기 전용 명령부터 허용하고, 쓰기 권한은 점진적으로 추가한다.
- skills를 커맨드 대신 파일로 관리해 반복 작업을 재사용 가능하게 만든다.
- Curator를 통해 장기 작업의 우선순위를 정리한다.

## 비슷한 노트와의 차이

- [[OpenClaw]]가 메시징 채널과 다양한 tool을 한 runtime에 붙인 self-hosted personal agent 사례라면, 이 노트는 그런 runtime을 24/7로 안전하게 돌리기 위한 운영 패턴에 더 가깝다.
- [[AI 에이전트 런타임 역할 맵]]이 runtime 계층 전체를 그린다면, 이 노트는 그중 장기 실행·sandbox·skills·curator라는 운영면에 집중한다.

## 충돌

- 2026-06-03 확인: Hermes의 설치 경로, skill 이름, sandbox 설정은 빠르게 바뀔 수 있다. 운영 패턴은 재사용 가능하지만, 실제 적용 전에는 최신 문서와 저장소 상태를 다시 확인해야 한다.

## 관련 노트

- [[Agent Native Infrastructure]]
- [[AI 에이전트 런타임 역할 맵]]
- [[OpenClaw]]
- [[Harness Engineering]]
- [[Hermes Agent Google Workspace 연결]]
- [[AI 오픈소스 작업대]]

