---
aliases:
- On-device TTS
- 로컬 TTS
- Supertonic 3
core: false
created: 2026-05-26
sources:
- Supertonic 3. 99M 파라미터로 31개 언어를 말하는 초경량 TTS 모델
- raw/Supertonic 3. 99M 파라미터로 31개 언어를 말하는 초경량 TTS 모델.md
status: needs-review
tags:
- ai
- speech
- tts
- on-device
type: tool
updated: '2026-06-22'
---

# 온디바이스 TTS

## 한 줄 정의

온디바이스 TTS는 음성 합성을 클라우드 API가 아니라 로컬 기기에서 직접 실행해 비용, 지연, 프라이버시 제약을 줄이려는 접근이다.

## 핵심 요지

- 작은 open-weight TTS 모델이 커다란 cloud TTS를 일부 실용 구간에서 대체할 수 있다는 신호가 강해지고 있다.
- 핵심 가치는 expressive speech 자체보다 정확한 읽기, 낮은 latency, 로컬 실행, 비용 예측 가능성에 있다.
- 이 영역은 모델 크기보다 architecture와 deployment surface가 더 중요해지는 흐름을 보여 준다.

## 상세

원문은 Supertonic 3를 예로 들어, TTS에서도 "큰 모델이 곧 품질"이라는 통념이 흔들리고 있다고 설명한다. 중요한 포인트는 단순히 99M 파라미터가 작다는 사실이 아니라, 이 정도 크기로도 31개 언어를 다루고 ONNX weight로 로컬 실행이 가능하며, 일부 benchmark에서 훨씬 큰 모델과 격차가 생각보다 작다는 점이다.

이 노트에서 더 중요한 재사용 프레임은 deployment 관점이다. cloud TTS는 character billing, network latency, provider 의존성, 데이터 외부 전송이라는 비용 구조를 갖는다. 반대로 온디바이스 TTS는 앱 번들 크기, 기기 성능, 로컬 privacy 보장, offline 사용성 쪽이 핵심 trade-off가 된다. 즉 선택 기준은 "최고 expressive 품질" 하나가 아니라, 정확한 읽기·비용·지연·프라이버시의 균형이다.

이 흐름은 [[AI 오픈소스 작업대]]와도 연결된다. local model runtime, self-hosted UI, open-weight 생태계가 텍스트 생성뿐 아니라 speech layer까지 내려오고 있다는 뜻이기 때문이다. 또한 [[Agent Native Infrastructure]] 관점에서는 오디오 응답도 외부 API 호출이 아니라 로컬 capability로 편입될 수 있는지를 묻는 사례로 읽을 수 있다.

## 예시

- accessibility reader: 민감한 문서를 외부 API 없이 기기에서 바로 읽는다.
- 사내 도구: character billing 없이 반복적인 TTS를 붙인다.
- offline 앱: e-reader나 현장용 앱에서 airplane mode로 음성을 제공한다.

## 충돌

- 2026-05-26 확인: 모델 스펙, benchmark, 지원 언어 수, 라이선스 조건은 빠르게 바뀔 수 있다. 실제 도입 전에는 공식 저장소와 라이선스를 재확인해야 한다.

## 관련 노트

- [[AI 오픈소스 작업대]]
- [[Agent Native Infrastructure]]
- [[Software 3.0]]
- [[AI 산출물 포맷 결정 트리]]
- [[강한 모델로 덜 헤매기]]

