---
type: concept
status: draft
core: false
tags:
  - llm
  - neural-network
  - software
aliases:
  - 뉴럴 컴퓨터
  - 신경 컴퓨터
sources:
  - raw/안드레_카파시_인터뷰_정리.md
  - raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
created: 2026-05-06
updated: 2026-05-06
---

# Neural Computer

## 한 줄 정의

Neural Computer는 CPU 위에서 신경망을 호출하는 현재 구조를 넘어, 신경망이 주 프로세스가 되고 결정론적 계산만 CPU에 맡기는 미래 컴퓨팅 관점이다.

## 핵심 요지

- 현재는 CPU 기반 컴퓨터 위에서 신경망이 실행된다.
- 카파시는 장기적으로 신경망이 host process가 되고 CPU가 coprocessor처럼 쓰일 수 있다고 본다.
- 이 관점에서는 UI도 미리 짜인 화면이 아니라 매 순간 신경망이 렌더링하는 결과가 될 수 있다.

## 상세

카파시 자료는 1990년대 웹사이트, 2010년대 모바일 앱, 클라우드 시대 SaaS처럼 앞으로 당연해질 새 카테고리로 Neural Computer를 제시한다. 극단적 그림은 원시 비디오와 오디오를 신경망에 넣고, 매 순간 고유한 UI를 diffusion으로 렌더링하는 장치다. 출처: `raw/안드레_카파시_인터뷰_정리.md`, `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md`

자료에서는 코드의 상당 부분이 5년에서 10년 안에 신경망으로 흡수될 수 있다는 전망도 나온다. 이 기간은 예측이므로 확정 사실이 아니라 방향성 가설로 기록한다. 출처: `raw/안드레_카파시_인터뷰_정리.md`, `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md`

## 예시

오늘의 앱은 "버튼을 누르면 코드가 실행되고 결과 UI를 그린다"에 가깝다. Neural Computer에서는 사용자의 현재 맥락을 신경망이 직접 해석하고, 필요한 계산만 CPU/API에 요청한 뒤 UI 자체도 생성할 수 있다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Software 3.0]]
- [[Agent Native Infrastructure]]
- [[Jagged Intelligence]]

