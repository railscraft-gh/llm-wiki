---
type: concept
status: draft
core: false
tags:
- llm
aliases:
- 코드로 생각하기
- Think-in-Code
sources:
- raw/context-mode-README-정리.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
Think in Code는 AI [[코딩 에이전트]]가 대량의 원시 파일들을 직접 문자열로 여러 차례 읽는(Read) 대신, 분석 스크립트를 작성·실행하여 샌드박스 내부에서 데이터를 처리하고 핵심 결과값만 반환받는 컨텍스트 최적화 패러다임이다.

## 핵심 요지
- 거대한 데이터를 AI의 컨텍스트 윈도우에 그대로 밀어 넣으면 토큰을 순식간에 채워 세션 연속성이 망가지는 [[컨텍스트 부패]]를 유발한다 [raw/context-mode-README-정리.md#L21-L24](file:///Users/railscraft/[[Obsidian]]/raw/context-mode-README-%EC%A0%95%EB%A6%AC.md#L21-L24).
- [[LLM]]을 단순 문자열 파싱이나 데이터 집계기(processor)가 아닌 고부가가치의 '코드 생성기(code generator)'로 올바르게 포지셔닝하여 연산 가치를 높인다 [raw/context-mode-README-정리.md#L32-L34](file:///Users/railscraft/[[Obsidian]]/raw/context-mode-README-%EC%A0%95%EB%A6%AC.md#L32-L34).

## 상세
- **샌드박스 실행 효율**: 예컨대 디렉터리 내 50개의 개별 파일을 열고 닫으며 특정 함수 빈도를 세는 식의 단순 Read 루프 대신, 단 한 번의 `ctx_execute`를 사용해 Node.js나 Python 셸 스크립트를 밀어 넣고 `console.log()`의 통계 수치만 반환받는다 [raw/context-mode-README-정리.md#L34](file:///Users/railscraft/[[Obsidian]]/raw/context-mode-README-%EC%A0%95%EB%A6%AC.md#L34).
- **데이터 축소량**: 이러한 샌드박스 지능형 처리를 통해 raw 읽기 작업 대비 700KB에 달하는 툴 출력을 단 3.6KB 수준으로 99% 이상 절감하는 효과를 달성할 수 있다 [raw/context-mode-README-정리.md#L35-L36](file:///Users/railscraft/[[Obsidian]]/raw/context-mode-README-%EC%A0%95%EB%A6%AC.md#L35-L36).

## 예시
- **ctx_execute 도구 사용**: JavaScript 혹은 Python으로 분석할 파일들을 로컬 배열로 잡고 반복 연산하는 단일 실행 구문을 생성하여 그 실행 stdout 콘솔 덤프만 획득하는 예시 [raw/context-mode-README-정리.md#L35-L36](file:///Users/railscraft/[[Obsidian]]/raw/context-mode-README-%EC%A0%95%EB%A6%AC.md#L35-L36).

## 충돌
- 샌드박스 코딩 패러다임은 로컬 디바이스에 적합한 인터프리터 런타임(Node.js 18+ 또는 Python)과 better-sqlite3 같은 네이티브 의존성 라이브러리가 안정적으로 컴파일 및 구축되어 작동 가능한 서버 샌드박스가 마련되어 있을 때에만 실행이 담보되는 한계가 있다 [raw/context-mode-README-정리.md#L253-L254](file:///Users/railscraft/[[Obsidian]]/raw/context-mode-README-%EC%A0%95%EB%A6%AC.md#L253-L254).

## 관련 노트
- [[Context Mode]]
- [[Context Engineering]]

## 출처
- [raw/context-mode-README-정리.md](file:///Users/railscraft/[[Obsidian]]/raw/context-mode-README-%EC%A0%95%EB%A6%AC.md)
