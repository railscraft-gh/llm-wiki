---
type: concept
status: draft
core: false
tags:
  - llm
  - rlhf
  - data-engineering
  - alignment
aliases:
  - 고품질-휴먼-데이터와-RLHF-(High-Quality-Human-Data-&-RLHF)
  - 고품질 휴먼 데이터와 RLHF
  - High-Quality Human Data
sources:
  - raw/Thinking about High-Quality Human Data.md
created: 2026-07-21
updated: 2026-07-21
---

# 고품질 휴먼 데이터와 RLHF (High-Quality Human Data & RLHF)

## 한 줄 정의
LLM 정렬과 분류 파이프라인의 성패를 좌우하는 라벨 수집 운영 관리 및 모델 학습 동역학 기반 노이즈 데이터 정제 체계.

## 핵심 요지
- **군중의 지혜와 평가자 동의 지표**: 크라우드소싱 기반 주석 수집 시 다수결 투표, 코헨의 카파, MACE 확률 모델링 등을 사용하여 스패머를 무력화하고 가중 참값을 복원합니다.
- **설명적 vs 규범적 패러다임**: 유해성이나 주관적 주제에 대해 오직 단 하나의 정답만을 강제(규범적)하기보다는 인구통계적 불일치를 인정하고 주관성을 수용하는 배심원 학습(Jury Learning) 및 멀티-어노테이터 모델의 중요성이 확대되었습니다.
- **학습 동역학 기반 품질 정제**: 모델 학습 과정에서 영향 함수(Influence Functions), Data Maps(Confidence & Variability), AUM(Area under the Margin), 망각(Unforgettable) 지표, NCV(Noisy Cross-Validation) 기법을 활용하여 오답 라벨을 수식적·동역학적으로 필터링합니다.

## 상세
딥러닝 및 LLM 정렬(RLHF) 단계에서 고품질 주석 수집은 정교한 데이터 운영 절차를 요합니다. 1907년 Galton의 [Vox populi 연구](file:///Users/railscraft/Obsidian/raw/Thinking%20about%20High-Quality%20Human%20Data.md#L23) 이후 크라우드소싱 데이터 집계는 다수결이나 카파 지표를 넘어 probabilistic graph model(Zheng et al. 2017의 [17가지 진실 추론 알고리즘 비교](file:///Users/railscraft/Obsidian/raw/Thinking%20about%20High-Quality%20Human%20Data.md#L41)) 등 머신러닝 기반 정제로 발전해 왔습니다.

주관적 NLP 태스크에서는 불일치(Disagreement)가 단순 인적 오류인지 시각 차이인지 구별해야 합니다. Wang et al. (2023)의 안전성 평가 연구에 의하면 폭력·유혈 주제는 T&S 전문가와 일반 평가자 간 동의율이 [0.96](file:///Users/railscraft/Obsidian/raw/Thinking%20about%20High-Quality%20Human%20Data.md#L61)에 달했으나, 개인적 주제에서는 동의율이 [0.25](file:///Users/railscraft/Obsidian/raw/Thinking%20about%20High-Quality%20Human%20Data.md#L61)로 크게 벌어졌습니다. 이를 해결하기 위해 개별 작업자의 일관성을 묶는 Disagreement Deconvolution 및 인구통계적 특성을 조율하는 Jury Learning이 활용됩니다.

또한 라벨링 완료 후 모델의 학습 동역학(Training Dynamics)을 관측해 노이즈 라벨을 식별합니다. 의도적으로 라벨을 [1% 오염](file:///Users/railscraft/Obsidian/raw/Thinking%20about%20High-Quality%20Human%20Data.md#L84)시킬 경우 샘플들이 Data Maps의 저-자신감/고-가변성 구역으로 밀려납니다. AUM 기법은 할당 라벨 로짓과 2순위 로짓 간의 마진(margin) 텐션을 계산하고, 임계값 샘플의 상위 [99백분위수](file:///Users/railscraft/Obsidian/raw/Thinking%20about%20High-Quality%20Human%20Data.md#L93)를 기준으로 진짜 노이즈 라벨을 제거합니다.

## 예시
- **Jury Learning 배심원 구성**: 텍스트 유해성 라벨링 시 LGBTQ, 아프리카계 미국인 등 특정 정체성 요소를 지닌 주석 작업자 집단을 배심원단으로 샘플링하여 DCN(Deep & Cross Network)으로 다각적 예측.
- **AUM 기반 노이즈 정제**: 학습 도중 로짓 차이(Margin)가 지속적으로 음수인 샘플 중 임계값 상위 99백분위 기준 미달 샘플을 데이터셋에서 자동 삭제.

## 충돌
- **모든 불일치를 노이즈로 처리하는 우**: 단순 규범적(Prescriptive) 패러다임으로 라벨을 강제 병합할 경우 사회적·문화적 맥락과 다양성 정보가 손실됩니다.
- **학습 난이도가 높은 샘플 제거의 역효과**: Data Maps에서 자신감과 가변성이 동시에 높은 애매한 샘플을 노이즈로 오인하여 지우면 분포 외 일반화(OOD generalization) 성능이 도리어 하락합니다.

## 관련 노트
- [[LLM 정렬 기법]]
- [[PPO와 정책 최적화]]
- [[GRPO]]
- [[Competence Debt]]

