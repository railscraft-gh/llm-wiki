---
type: tool
status: draft
core: false
tags:
  - llm
  - tool
aliases: []
sources:
  - raw/I’ll Instantly Know A Writer Used ChatGPT When I See This.md
created: 2026-07-29
updated: 2026-07-29
---

# GPTZero

## 한 줄 정의
프린스턴 대학교 학생에 의해 개발된 AI 감지 소프트웨어로, 텍스트의 당혹성(Perplexity)과 문장 구조의 무작위 변동성(Burstiness)을 정밀 분석해 AI 생성물 여부를 구별하는 도구.

## 핵심 요지
- **고도화된 측정**: 단순히 특정 어구의 빈도뿐만 아니라 문장과 문단 사이의 리듬, 예측 불가능성(파열성)을 고정 지표로 활용해 상대적으로 균형 잡힌 정확도를 지향한다.
- **상대적 안정성**: ZeroGPT와 비교 테스트 시 비교적 더 합리적이고 정상적인 판단 결과를 출력하는 모습을 보여주지만, 이 역시 100% 완전무결하지는 않다.

## 상세
GPTZero는 인공지능이 생성한 텍스트의 특징 중 하나인 "글쓰기의 통계적 단조로움"을 포착하는 데 특화되어 있다. 문장 길이가 매번 똑같거나 단어 예측 확률 분포가 너무 매끄러우면 Perplexity가 낮다고 보고 기계 텍스트로 의심한다.

그럼에도 불구하고 여전히 세심하게 튜닝되거나 사람이 수정한 AI 하이브리드 글에 대해서는 변별력이 떨어진다.

## 예시
- **미국 독립선언서 분석 비교**:
  - ZeroGPT가 92.5%의 극단적 오판을 할 때, GPTZero는 동일 텍스트에 대해 **AI 점수 2%**를 도출하여 역사적 사실에 부합하는 안정적 탐지 성공에 가까운 결과를 보여주었다.

## 관련 노트
- [[AI 탐지기(AI Detector)]]
- [[ZeroGPT]]
- [[AI 글쓰기 흔적(AI Writing Signatures)]]

## 출처
- `raw/I’ll Instantly Know A Writer Used ChatGPT When I See This.md`
- [GPTZero 공식 웹사이트](https://app.gptzero.me/)
