---
type: concept
status: evergreen
core: false
tags:
  - llm
  - data-quality
  - rlhf
aliases: []
sources:
  - raw/Thinking about High-Quality Human Data.md
created: 2026-07-21
updated: 2026-07-21
---

# 고품질 휴먼 데이터와 RLHF (High-Quality Human Data & RLHF)

## 한 줄 정의
최신 딥러닝 모델, 특히 LLM 정렬(alignment) 학습을 위한 RLHF의 핵심 연료인 고품질 사람 주석 데이터를 확보하고 정제하며, 학습 과정에서 노이즈를 걸러내는 방법론.

## 핵심 요지
사람이 직접 라벨링하는 데이터는 태스크 설계와 평가자 관리가 필수적이며, 평가자 간 동의(Rater Agreement) 및 불일치를 다루는 철학에 따라 설명적(Descriptive)과 규범적(Prescriptive) 패러다임으로 나뉜다. 학습 과정에서는 모델의 동역학(Training dynamics)을 활용하여 노이즈가 낀 오답 라벨을 효과적으로 걸러낼 수 있다.

## 상세
데이터 품질을 높이는 접근 방식은 인간의 주석을 수집하는 단계와 수집된 데이터로 모델을 학습시키는 단계로 나눌 수 있다.

1. **휴먼 평가자 관리와 병합 기법**
   - **다수결 투표(Majority Voting)**, **단순 동의율(Raw agreement)**, **코헨의 카파(Cohen's Kappa)** 등 기본적인 통계 지표가 존재한다.
   - 더 정교한 방식으로 확률적 그래프 모델(MACE 등)을 활용해 "스패머"를 식별하고 정답을 추론한다.

2. **평가자 불일치 패러다임**
   - 단일한 정답을 강요할 수 없는 주관적 영역에서는 다수의 해석을 인정하고 포용해야 한다. 
   - **설명적(Descriptive) 패러다임**: 주석 작업자의 주관성을 권장하고 여러 신념을 모두 모델링하려고 시도합니다. 예컨대 폭력·유혈 카테고리는 동의율이 0.96으로 높았으나, 개인적인 토픽에서는 0.25로 극적인 의견 차이를 보였습니다 [raw/Thinking about High-Quality Human Data.md#L61](file:///Users/railscraft/Obsidian/raw/Thinking%20about%20High-Quality%20Human%20Data.md#L61).
   - **규범적(Prescriptive) 패러다임**: 주석 작업자의 주관성을 최대한 배제하고 오직 하나의 신념만 일관되게 적용하려 애씁니다.

3. **학습 모델 동역학을 이용한 품질 필터링**
   - **영향 함수(Influence Functions)**: 특정 데이터를 뺐을 때 파라미터 변화량을 근사하여 해당 샘플의 영향력을 측정, 노이즈를 색출합니다.
   - **데이터 맵(Data Maps)**: 학습 중 모델의 자신감과 가변성을 추적하여 라벨이 틀렸을 확률이 높은 '학습하기 어려운(Hard-to-learn)' 구간을 필터링합니다.
   - **망각(Forget)과 AUM(Area under the Margin)**: 모델이 잊어버리는 샘플이나 일반화 압력에 역행하는 샘플들을 찾아내 노이즈 데이터를 잘라냅니다. AUM의 경우 가짜 라벨을 씌운 임계값 샘플의 AUM 상위 99백분위수를 기준으로 삼아 진짜 노이즈 데이터를 잘라낼 수 있습니다 [raw/Thinking about High-Quality Human Data.md#L93](file:///Users/railscraft/Obsidian/raw/Thinking%20about%20High-Quality%20Human%20Data.md#L93).

## 예시
- **배심원 학습(Jury Learning)**: 평가자들의 인구통계학적 특성 패턴을 학습하여 가상의 배심원단을 구성해 다각적인 판단을 취합하는 추천 시스템 기법.
- 기계 번역에서 전문가와 다수의 비전문가(크라우드소싱)를 조합하여, 비전문가의 2단계 필터링 결과가 전문가 번역과 높은 상관관계를 보인 사례(Callison-Burch, 2009).

## 충돌
단일 진실(Single Ground Truth)을 고집하는 기존의 라벨링 접근과 주관성을 온전히 인정해야 하는 안전·윤리 도메인 간의 가치관 충돌이 존재한다. 시스템 오류는 줄여야 하나, 타당한 불일치는 유용한 정보원으로 삼아야 한다.

## 관련 노트
- [[LLM 정렬 기법]]
- [[AI 코딩 에이전트 검증 전략]]

