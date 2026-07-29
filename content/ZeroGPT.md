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

# ZeroGPT

## 한 줄 정의
입력된 문장들을 형태학적, 통계적으로 대조하여 AI 봇이나 인간에 의해 작성되었는지 검사하고 그 탐지 보고서를 제공하는 대중적인 웹 기반 AI 감지 툴.

## 핵심 요지
- **높은 오탐률**: 언어적 특성의 다양성을 분석하는 데 한계가 있어 고전적이고 전통적인 학술 문서 등을 AI 텍스트로 높게 오판하는 단점이 있다.
- **편차 지적**: 경쟁 도구인 [[GPTZero]]와 비교 시 동일 텍스트에서 극단적으로 다른 수치를 반환하여 서비스 신뢰성에 많은 의문이 제기되기도 한다.

## 상세
ZeroGPT는 사용자가 텍스트를 붙여넣으면 문장의 패턴을 바탕으로 기계가 썼을 법한 영역을 형광펜으로 하이라이트하고 확률 점수를 계산해 주는 편리한 구조를 갖고 있다. 그러나 통계적 분포 분석에 지나치게 쏠려 있어 인간이 직접 작성한 오리지널 에세이조차 AI 작성으로 낙인찍기 쉬워 작가들 사이에서 논란이 되고 있다.

## 예시
- **미국 독립선언서 분석 실패**:
  - 작성 시점 상 AI가 전혀 개입할 수 없는 1776년의 미국 독립선언서 전문에 대해 ZeroGPT는 **AI 작성률 92.5%**를 출력하는 치명적인 오탐 결과를 노출했다.

## 관련 노트
- [[AI 탐지기(AI Detector)]]
- [[GPTZero]]
- [[AI 글쓰기 흔적(AI Writing Signatures)]]

## 출처
- `raw/I’ll Instantly Know A Writer Used ChatGPT When I See This.md`
- [ZeroGPT 공식 웹사이트](https://www.zerogpt.com/)
