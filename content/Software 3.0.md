---
aliases:
- 소프트웨어 3.0
- Software-3.0
core: true
created: 2026-05-06
sources:
- 안드레_카파시_인터뷰_정리
- 꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!
- sequoia-ascent-2026-karpathy
- AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법
- raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
- raw/안드레_카파시_인터뷰_정리.md
- raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
- raw/sequoia-ascent-2026-karpathy-ko.md
- raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md
- raw/Claude-Code-실무활용법-보리스-관점-정리.md
- raw/보리스_클로드코드_실무_사용법.md
status: evergreen
tags:
- llm
- software
- programming
type: concept
updated: '2026-06-22'
---
# Software 3.0

## 한 줄 정의

Software 3.0은 명시적 코드를 쓰는 대신 prompt와 context window로 신경망의 행동을 구성하는 프로그래밍 패러다임이다.

## 핵심 요지

- Software 1.0은 사람이 명시적 코드를 쓰는 방식이다.
- Software 2.0은 데이터셋과 학습으로 신경망을 만드는 방식이다.
- Software 3.0은 context window에 무엇을 넣느냐가 핵심 레버가 되는 방식이다.

## 상세

카파시 자료의 대표 예시는 [[OpenClaw]] 설치와 MenuGen이다. [[OpenClaw]] 설치에서 예전 방식은 macOS, Ubuntu, Windows 분기를 bash script에 직접 넣는 것이지만, Software 3.0 방식은 설치 설명 텍스트를 에이전트에게 주고 환경 탐색과 디버깅을 맡기는 것이다.

MenuGen 사례는 더 극단적이다. 원래는 메뉴판 사진에서 OCR로 항목을 추출하고 이미지 생성 API로 음식 이미지를 만든 뒤 앱으로 배포해야 했다. 그러나 Software 3.0 관점에서는 메뉴판 이미지를 모델에 주고 음식 이미지를 메뉴 위에 오버레이하라고 지시하는 한 번의 신경망 호출로 해결될 수 있다. 이 경우 기존 앱 전체가 불필요해질 수 있다는 점이 중요하다.

[[Sequoia Ascent 2026]]에서 카파시는 이를 "기존의 소프트웨어 스택은 모델이 이제 직접 수행할 수 있는 변환을 감싸고 있던 비계(scaffolding)에 불과했다"고 표현했다. AI는 단순히 기존 앱을 더 빨리 만드는 방법이 아니라, 어떤 앱들은 앱으로서 존재하는 것을 멈춰야 한다는 함의를 강조했다.

또한 LLM Wiki 패턴을 예시로 들었다. 매번 원시 문서에서 RAG로 답변하는 대신, 에이전트가 원시 소스를 점진적으로 지속적인 마크다운 위키로 편집하는 workflow다. 요약, 개체 페이지, 개념 페이지, 모순점, 교차 링크, 로그, 진화하는 종합을 유지한다. 이는 예전에는 불가능했던 새로운 정보 변환 형태다. 이 vault 관점의 운영 규칙은 [[LLM Wiki 운영 패턴]]으로 따로 분리해 볼 수 있다.

## 예시

새 앱 아이디어를 검토할 때 첫 질문은 "이걸 코드로 만들기 전에 신경망 한 번 호출로 해결되는가?"다. 그렇다면 제품은 앱이 아니라 prompt, context, 검증 workflow가 될 수 있다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Neural Computer]]
- [[Agent Native Infrastructure]]
- [[Thinking과 Understanding 분리]]
- [[Jagged Intelligence]]
- [[강화학습 기초]]
- [[LLM 정렬 기법]]
- [[Reasoning Models]]
- [[Agentic 패턴 진화]]
- [[Harness Engineering]]
- [[소프트웨어 민주화]]
- [[LLM Wiki 운영 패턴]]
- [[AI 엔지니어 필수 논문]]

