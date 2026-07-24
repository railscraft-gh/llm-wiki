---
type: tool
status: needs-review
core: false
tags:
  - tool
  - ai-coding
aliases:
  - Codex
  - 코덱스
sources:
  - raw/You don’t need thinking levels in Claude Code. You need Planning and Goal modes..md
created: 2026-07-24
updated: 2026-07-24
---

# Codex(코덱스)

## 한 줄 정의

추론 노력 조절, 계획 모드 및 영구 목표 루프를 제공하여 개발 환경 통제 인터페이스를 일관성 있게 구현하는 OpenAI 생태계의 대표적인 코딩 에이전트 도구다.

## 핵심 요지

- **사고 제어**: `model_reasoning_effort` 설정을 통해 minimal, low, medium, high, xhigh 범위로 추론 깊이를 조정한다.
- **계획화 특화**: `/plan` 명령어로 계획 모드에 진입하며, 특히 계획 수립 단계의 사고 노력을 독립 제어하는 `plan_mode_reasoning_effort` 키를 제공한다.
- **목표 지향 루프**: `/goal` 명령어를 바탕으로 장기 실행 목표(Persistent objectives)를 세팅하여 자동화 정량 평가 루프를 작동한다 (v0.133.0+).
- **도구 인터페이스 수렴**: 추론 제어 레버, 계획의 분리, 목표 기반 자동 검증 체계가 차세대 AI 코딩 어시스턴트의 표준 스펙으로 자리 잡고 있음을 증명한다.

## 설치/실행

### 1. 환경 설정 매핑
Codex의 `Configuration Reference`에 정의된 핵심 제어 변수를 설정한다:
- `model_reasoning_effort`: minimal / low / medium / high / xhigh
- `plan_mode_reasoning_effort`: 계획 모드 전용 추론 수준 제어

### 2. 터미널 슬래시 명령
- `/plan`: 코드를 즉시 변경하지 않고 설계 가이드를 생성하는 계획 모드 진입.
- `/goal`: 정의된 완료 조건에 도달할 때까지 연속적으로 구현을 진행하는 목적 지향 루프.

## 한계

- **목표 명확성 요구**: OpenAI Codex 쿡북에 따르면, 검증 불가한 주관적 목표(예: "코드 품질 개선")를 전달할 시 자체 평가기가 도달점을 채점할 수 없어 무제한적인 자원 소모를 야기한다.
- **버전 종속성**: 영구 목표 루프 기능은 CLI v0.133.0(2026년 5월 21일 릴리스) 이상에서만 정상적으로 동작한다.

## 관련 노트

- [[Claude Code(클로드 코드)]]
- [[계획 모드(Planning Mode)]]
- [[AI 코딩 에이전트 검증 전략]]

## 출처

- `raw/You don’t need thinking levels in Claude Code. You need Planning and Goal modes..md`
