---
type: concept
status: evergreen
core: true
tags:
  - llm
  - software
  - programming
aliases:
  - 소프트웨어 3.0
sources:
  - raw/안드레_카파시_인터뷰_정리.md
  - raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
created: 2026-05-06
updated: 2026-05-06
---

# Software 3.0

## 한 줄 정의

Software 3.0은 명시적 코드를 쓰는 대신 prompt와 context window로 신경망의 행동을 구성하는 프로그래밍 패러다임이다.

## 핵심 요지

- Software 1.0은 사람이 명시적 코드를 쓰는 방식이다. 출처: `raw/안드레_카파시_인터뷰_정리.md`
- Software 2.0은 데이터셋과 학습으로 신경망을 만드는 방식이다. 출처: `raw/안드레_카파시_인터뷰_정리.md`
- Software 3.0은 context window에 무엇을 넣느냐가 핵심 레버가 되는 방식이다. 출처: `raw/안드레_카파시_인터뷰_정리.md`

## 상세

카파시 자료의 대표 예시는 OpenClaw 설치와 MenuGen이다. OpenClaw 설치에서 예전 방식은 macOS, Ubuntu, Windows 분기를 bash script에 직접 넣는 것이지만, Software 3.0 방식은 설치 설명 텍스트를 에이전트에게 주고 환경 탐색과 디버깅을 맡기는 것이다. 출처: `raw/안드레_카파시_인터뷰_정리.md`, `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md`

MenuGen 사례는 더 극단적이다. 원래는 메뉴판 사진에서 OCR로 항목을 추출하고 이미지 생성 API로 음식 이미지를 만든 뒤 앱으로 배포해야 했다. 그러나 Software 3.0 관점에서는 메뉴판 이미지를 모델에 주고 음식 이미지를 메뉴 위에 오버레이하라고 지시하는 한 번의 신경망 호출로 해결될 수 있다. 이 경우 기존 앱 전체가 불필요해질 수 있다는 점이 중요하다. 출처: `raw/안드레_카파시_인터뷰_정리.md`, `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md`

## 예시

새 앱 아이디어를 검토할 때 첫 질문은 "이걸 코드로 만들기 전에 신경망 한 번 호출로 해결되는가?"다. 그렇다면 제품은 앱이 아니라 prompt, context, 검증 workflow가 될 수 있다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Neural Computer]]
- [[Agent Native Infrastructure]]
- [[Thinking과 Understanding 분리]]
- [[Jagged Intelligence]]

## 출처

- `raw/안드레_카파시_인터뷰_정리.md`
- `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md`
