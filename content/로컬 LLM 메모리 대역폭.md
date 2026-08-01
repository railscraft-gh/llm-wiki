---
type: concept
status: draft
core: false
tags:
  - hardware
  - local-llm
aliases:
  - 메모리 대역폭
  - Memory Bandwidth
sources:
  - raw/A YouTuber Just Did More for Self-Hosted AI Than a Decade of Open Source.md
created: 2026-08-01
updated: 2026-08-01
---
# 로컬 LLM 메모리 대역폭

## 한 줄 정의
로컬 환경에서 LLM(대형 언어 모델)을 구동할 때, 단순히 모델을 메모리에 적재할 수 있는 용량이 아니라, 텍스트(토큰)를 실시간으로 생성해 내는 속도를 결정하는 핵심 하드웨어 스펙.

## 핵심 요지
- 모델을 메모리에 '올리는 것(용량)'과 실사용 가능한 속도로 '돌리는 것(대역폭)'은 완전히 다른 문제다.
- VRAM 용량이 크더라도 메모리 대역폭이 좁으면 초당 토큰 생성 속도(tokens/sec)가 떨어져 실사용이 불가능해진다.
- "크면 클수록 좋다"는 착각에 빠져 대용량 밀집 모델(Dense model, 예: 70B)을 무리하게 구동하면, 사용자는 모델이 느리게 글을 뱉어내는 것을 그저 지켜만 봐야 한다.

## 상세
초보자들이 셀프 호스팅 AI 스택(예: Odysseus)을 접할 때 가장 흔히 겪는 병목이자 함정이 바로 메모리 대역폭이다. 시스템 메모리가 64GB, 128GB에 달하더라도 대역폭 수치가 받쳐주지 않으면, 70B 파라미터 모델을 겨우 초당 4토큰 정도의 느린 속도로 실행하게 된다.

따라서 자신의 하드웨어 대역폭 한계 내에서 쾌적한 반응 속도를 유지하는 중간 크기의 모델(예: 27B 등)을 선택하는 것이 현실적이며, 아주 까다로운 작업은 여전히 클라우드 기반 API를 활용하는 하이브리드 전략이 권장된다.

## 관련 노트
- [[Odysseus (AI 워크스페이스)]]
- [[로컬 LLM]]

## 출처
- raw/A YouTuber Just Did More for Self-Hosted AI Than a Decade of Open Source.md
