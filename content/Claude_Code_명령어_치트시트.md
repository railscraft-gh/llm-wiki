---
type: concept
status: draft
core: false
tags:
- ai
- tools
- productivity
aliases:
- Claude Code 명령어
sources:
- raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
[[Claude Code]] 활용 생산성을 극대화하기 위한 14가지 필수 명령어 생태계 및 [[워크플로]]우 가이드입니다.

## 핵심 요지
- 에이전트와 대화할 때 컨텍스트 오염을 방지하고 작업 흐름(Flow State)을 유지하는 것이 가장 중요합니다.
- 단순 코딩을 넘어 에이전트를 시스템 관리자처럼 활용(인프라 진단, 권한 설정, 다중 모델 전환)해야 합니다.
- 환경 셋업, 일상적 제어, 비상 복구의 3단계로 명령어를 분류하여 익히는 것이 효율적입니다.

## 상세
[raw/[[Claude Code]]를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20Code%EB%A5%BC%206%EA%B0%9C%EC%9B%94%20%EB%8F%99%EC%95%88%20%EC%9E%98%EB%AA%BB%20%EC%8D%BC%EB%8B%A4.%20%EB%AA%A8%EB%93%A0%20%EA%B1%B8%20%EB%B0%94%EA%BE%BC%2014%EA%B0%80%EC%A7%80%20%EB%AA%5B%EB%A0%B9%EC%96%B4.md)에서 제시하는 핵심은 명령어 활용이 인지 과부하를 줄이고 에이전트를 진정한 파트너로 만든다는 점입니다. 특히 `/compact`를 통한 대화 압축과 `!`를 이용한 터미널 통합은 탭 전환을 최소화하여 작업 몰입도를 높입니다.

## 명령어 치트시트
| 분류 | 명령어 | 역할 |
|---|---|---|
| **설정** | `/init` | 프로젝트 `CLAUDE.md` 자동 생성 |
| **설정** | `/memory` | 전역 코딩 규칙 및 취향 영구 설정 |
| **흐름** | `/btw` | 현재 작업 흐름을 유지하며 추가 질문 |
| **흐름** | `/compact` | 대화 요약 및 컨텍스트 정리 |
| **실행** | `!cmd` | 채팅방 내에서 셸 명령어 실행 |
| **고급** | `/model` | 모델 전환 (Opus/Sonnet/Haiku) |
| **비상** | `/clear` | 대화 초기화 (설정 유지) |
| **비상** | `/doctor` | 환경 설정 진단 |

## 관련 노트
- [[검증_루프]]
- [[하네스_엔지니어링]]

## 출처
- [raw/[[Claude Code]]를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20Code%EB%A5%BC%206%EA%B0%9C%EC%9B%94%20%EB%8F%99%EC%95%88%20%EC%9E%98%EB%AA%BB%20%EC%8D%BC%EB%8B%A4.%20%EB%AA%A8%EB%93%A0%20%EA%B1%B8%20%EB%B0%94%EA%BE%BC%2014%EA%B0%80%EC%A7%80%20%EB%AA%5B%EB%A0%B9%EC%96%B4.md)
