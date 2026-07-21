---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - memory
  - hermes
aliases:
  - Closed-Learning-Loop
  - Closed Learning Loop
  - 자가 학습 피드백 루프
sources:
  - raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md
created: 2026-07-21
updated: 2026-07-21
---
# Closed Learning Loop

## 한 줄 정의
에이전트가 작업 완료 후 자신의 수행 과정과 결과를 스스로 분석하여 재사용 가능한 패턴을 축적하고 다음 실행에 자발적으로 반영하는 자가 진화형 기억 및 피드백 구조.

## 핵심 요지
- **파일 기반 투명 기억과의 차이**: 수동 설정 파일(File-based amnesia)이나 재시작 시 초기화되는 메모리와 달리 작업 리듬, 유저 선호도, 실행 패턴을 지속적 학습 루프 안에서 체화.
- **유지보수 오버헤드 감소**: 사람이 인위적으로 재설정(reconfigure)하거나 기억 단절(amnesia)을 복구할 필요 없이 자율적으로 사용자 맞춤형 워크플로를 고도화.
- **안정성 중심 실무 인프라**: 디버깅과 리셋 손실이 잦은 오픈소스 에이전트 구조 대비, 조용하고 일관된 자동화 성능 보장.

## 상세
- **[[Hermes Agent]] 구현 특성**:
  - Closed Learning Loop 적용으로 사용자의 작업 성향, 코드 스타일, 협업 패턴을 자연스럽게 내재화.
  - Multi-agent 구성 시 리드 에이전트가 서브 에이전트 팀원들에게 패턴 축적 정보를 전파.

## 예시
- 40GB Hetzner VM에서 [Hermes Agent가 5개 에이전트 팀의 자율 오케스트레이션과 메모리 학습을 조용하게 완수](file:///Users/railscraft/Obsidian/raw/I%20Ran%20[[OpenClaw]]%20and%20Hermes%20on%20the%20Same%20Server.%20Today%20I%20Deleted%20One%20of%20Them.-ko.md#L39-L43)하여 [[OpenClaw]]를 대체함.

## 충돌
- **투명성 감소**: 파일 기반 메모리에 비해 에이전트 내부에서 학습한 내용의 개별 노드를 사람이 육안으로 즉시 감사(Audit)하거나 부분 삭제하기 상대적으로 까다로움.

## 관련 노트
- [[Hermes Agent]]
- [[OpenClaw]]

