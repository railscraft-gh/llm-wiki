---
type: concept
status: evergreen
core: true
tags:
- llm
- hallucination
- RAG
- evaluation
aliases:
- Extrinsic Hallucinations
- LLM 환각
- LLM-외부적-환각-(Extrinsic-Hallucinations-in-LLMs)
sources:
- raw/Extrinsic Hallucinations in LLMs.md
created: 2026-07-21
updated: 2026-07-21
---
# LLM 외부적 환각 (Extrinsic Hallucinations in LLMs)

## 한 줄 정의
LLM이 외부 세계 지식이나 사전 학습 데이터에 기반하지 않은, 사실과 다르거나 꾸며낸 정보를 사실인 것처럼 생성하는 현상.

## 핵심 요지
모델이 새로운 지식을 파인튜닝(Fine-tuning)을 통해 주입받을 때 환각 경향성이 오히려 증가할 수 있다. 외부 환각을 줄이고 모델의 사실성을 높이기 위해 검색 증강 생성(RAG), 다단계 검증(Chain of Verification), 사실성 중심 정렬 튜닝(Factuality tuning)과 같은 기법이 적용된다.

## 상세
- **환각의 원인**: 방대하지만 부정확한 인터넷 사전 학습 데이터의 암기, 그리고 파인튜닝(SFT/RLHF) 단계에서 모델이 기존에 잘 알지 못하는(Unknown) 새로운 지식을 무리하게 학습(fitting)하려 할 때 발생.
- **환각 탐지 및 평가**:
  - 검색 증강 평가: FActScore, SAFE, FacTool 등은 생성된 텍스트를 원자적 사실(atomic facts)로 분해한 뒤, 위키피디아나 구글 검색 같은 외부 출처를 이용해 각 사실의 지지 여부를 검증한다.
  - 샘플링 기반: SelfCheckGPT처럼 여러 번의 생성 샘플 간의 일관성을 측정하여 환각 여부를 판단.
- **완화 기법 (Anti-Hallucination)**:
  - RAG 기반 편집: RARR, FAVA 방식처럼 외부 문서를 검색해 기존 생성물의 오류를 소급해 편집 및 출처 표기.
  - 동작 사슬 (Chain of Actions): CoVe(Chain-of-Verification)를 통해 초안을 생성 후 스스로 검증 질문을 만들어 교차 검증 및 수정 수행.
  - 사실성 튜닝: 생성물의 주장 진실성을 평가한 뒤 이를 보상 모델로 삼아 DPO 등으로 정렬 튜닝(FLAME, Factuality tuning).

## 예시
- **레퍼런스 조작**: 논문이나 책 제목, 저자 등을 꾸며내는 것. 간접 쿼리(해당 논문의 저자가 누구인가?)를 사용하면 직접 쿼리(해당 논문이 존재하는가?)보다 모델이 더 높은 확률로 모순을 일으켜 환각을 탐지하기 쉬움.
- **CoVe (Chain-of-Verification)**: 긴 답변을 생성하기 전에 모델 스스로 "X가 사실인가?"라는 짧고 명확한 질문을 생성해 각각 대답한 후, 결과를 종합해 최종 답변을 내놓는 방식.

## 충돌
- **파인튜닝 지식 주입 vs 환각 증가**: 새로운 지식을 SFT나 RLHF로 가르치면 모델 성능이 오를 것 같지만, [Gekhman et al. 2024]에 따르면 모델이 알지 못하는 지식(Unknown)을 파인튜닝할수록 오히려 환각이 심해진다는 사실이 확인됨.

## 관련 노트
- [[LLM 적대적 공격과 탈옥 (Adversarial Attacks on LLMs)]]
- [[자가 개선 하네스 엔지니어링 (Harness Engineering for Self-Improvement)]]

## 출처
- `raw/Extrinsic Hallucinations in LLMs.md`
