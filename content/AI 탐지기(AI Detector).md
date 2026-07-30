---
type: tool
status: draft
core: false
tags:
  - llm
  - tool
aliases:
  - AI 탐지기
sources:
  - raw/I’ll Instantly Know A Writer Used ChatGPT When I See This.md
created: 2026-07-29
updated: 2026-07-29
---

# AI 탐지기(AI Detector)

## 한 줄 정의
제시된 텍스트의 언어적 패턴과 통계적 특성을 분석하여 인공지능이 생성한 결과물인지, 아니면 인간이 직접 창작한 결과물인지 여부를 판별하고 확률(점수)을 측정하는 소프트웨어 도구.

## 핵심 요지
- **패턴 분석**: 문장의 연결 구조, 전환 어구의 분포, 단어 선택 빈도 등의 [[AI 글쓰기 흔적(AI Writing Signatures)]]을 통계적으로 추적하여 AI 여부를 판단한다.
- **불안정한 정확성**: 탐지 알고리즘이 완벽하지 않아 동일한 텍스트에 대해서도 각 탐지기 도구마다 극단적으로 엇갈리는 결과를 내놓는 일이 잦다.
- **인간 작가 오탐**: 정교하게 작성된 고전 문학이나 개성 있는 인간 작가의 원고를 AI로 잘못 인식하는 등 오탐지(False Positive)의 리스크가 상존한다.

## 상세
현재 널리 사용되는 AI 탐지기들은 당혹성(perplexity, 다음 단어 예측 난이도)과 파열성(burstiness, 문장 길이 및 구조의 다양성)을 주로 측정한다. AI가 생성한 글은 통계적으로 균일하고 예측 가능하기 때문에 점수가 높게 나온다.

그러나 문장이 다소 격식 있고 정제된 고전 문서 등은 AI 탐지기에 의해 높은 확률로 오인될 수 있어 지식 검증 과정에서 탐지기만을 맹신해서는 안 된다.

## 예시
- **미국 독립선언서(Declaration of Independence) 탐지 테스트**:
  - **[[ZeroGPT]]**: 해당 문서를 AI가 92.5% 비율로 작성했다고 추정.
  - **[[GPTZero]]**: 동일한 문서에 대해 AI 점수 2%를 판정하여 극단적 불일치 노출.

## 관련 노트
- [[ZeroGPT]]
- [[GPTZero]]
- [[AI 글쓰기 흔적(AI Writing Signatures)]]
- [[진정성(Authenticity)]]

## 출처
- `raw/I’ll Instantly Know A Writer Used ChatGPT When I See This.md`
- [KU CTE: Careful Use of AI Detectors](https://cte.ku.edu/careful-use-ai-detectors)
