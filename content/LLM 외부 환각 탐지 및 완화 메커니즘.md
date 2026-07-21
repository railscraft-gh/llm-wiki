---
type: concept
status: draft
core: false
tags:
  - llm
  - hallucination
  - evaluation
aliases:
  - Extrinsic Hallucinations in LLMs
sources:
  - raw/Extrinsic Hallucinations in LLMs.md
created: 2026-07-21
updated: 2026-07-21
---
# LLM 외부 환각 탐지 및 완화 메커니즘

## 한 줄 정의
LLM 출력이 제공된 인컨텍스트 소스 및 외부 세상의 사실(Knowledge Base)과 불일치하거나 알지 못하는 지식에 대해 억지로 답을 꾸며내는 외부 환각(Extrinsic Hallucination) 현상을 정량적으로 평가하고 방어하는 기술 체계이다.

## 핵심 요지
- **Fine-tuning 위험성**: 기존 지식 범주(`Known`)를 넘어선 새로운 지식(`Unknown`)을 SFT로 파인튜닝하면 학습 속도가 현저히 느려지며 마침내 정착되었을 때 모델 전체의 환각 경향성이 대폭 증가한다.
- **검색 증강 평가 (Retrieval-Augmented Evaluation)**: FactualityPrompt(NE 오류 및 함의 비율), FActScore(원자적 사실 지수), SAFE(Search-Augmented Factuality Evaluator, 구글 검색 기반 20배 저렴한 인간 평가 대치), FacTool 등의 자동 정밀 측정 도구 활용.
- **검증 프로세스 설계 (Chain of Actions)**: CoVe(Chain-of-Verification)를 통해 팩터화(Factored)된 검증 질문을 독자적으로 수행하게 함으로써 환각 중복 전파 차단.
- **정렬 및 보상 파인튜닝 (Factuality-Aware Alignment)**: FLAME(SFT+DPO), FactTuning을 통해 모델 자체 인지 답변으로 DPO 데이터를 구성하고 캘리브레이션 조정.

## 상세
외부 환각의 발생 원인은 두 가지다. 첫째는 공개 인터넷 사전학습 데이터의 오기·오래된 정보 지식의 로그 우도 최대화 암기이며, 둘째는 소규모 SFT 파인튜닝 시 모델 내부 미학습 영역(`Unknown`)을 강제로 학습시키면서 발생하는 환각 부추김 현상이다 (Gekhman et al. 2024).

이를 평가하기 위한 핵심 프레임워크:
1. **SAFE (Google DeepMind)**: 긴 형식 사실성 지표 $F1 @ K$ 측정. LLM 에이전트가 연쇄 구글 검색을 돌려 72% 인간 일치율 및 다툼 시 인간 대비 76% 승률 기록.
2. **SelfCheckGPT**: 외부 KB 없이 블랙박스 LLM에서 추출한 여러 샘플 간의 문장 일관성(BERTScore, NLI)으로 환각 탐지.
3. **Calibrated Unknown Knowledge**: TruthfulQA(적대적 프롬프트 시 대답 거부 평가), SelfAware(대답 불가능성 2진 분류).

완화(Anti-Hallucination) 기법:
- **RAG & Edits**: RARR(Retrofit Attribution using Research and Revision, 출처 소급 표기 및 레벤슈타인 거리 기반 최소 편집), FAVA, Self-RAG (4종 반추 토큰 `Retrieve`, `IsRel`, `IsSup`, `IsUse` 자동 디코딩).
- **CoVe (Chain-of-Verification)**: 4단계 (Baseline response -> Plan verification -> Execute verifications [Factored/2-step] -> Final output).
- **Sampling**: Factual-nucleus sampling, ITI (Inference-Time Intervention - 주의집중 헤드 활성화 이동).

## 예시
- **SAFE 평가 성능 수치**: SAFE는 인간 평가자보다 20배 저렴한 비용으로 72% 일치율과 76% 승률 달성.
- **TruthfulQA 적대적 벤치마크**: 인간 정확도 94% 대비 최고 성능 LLM 58% 기록. 모델 규모가 커질수록 인간 오해를 학습하여 적대적 질문에 대해 진실성이 떨어지는 경향 관찰.
- **CoVe 분리 검증**: "통합형" 질문 작성 시 초기 환각 응답이 컨텍스트에 남아 환각이 반복되는 반면, "팩터화 분리형(Factored)"으로 검증 질문을 하나씩 독립 처리하면 사실 정확도 대폭 상승.

## 충돌
- **SFT 지식 업데이트 vs RAG 지식 주입**: 파인튜닝을 통해 모델 내부에 직접 새 사실을 새기려 하면 환각률이 올라간다. 지식 업데이트는 RAG로 컨텍스트 주입하고, 파인튜닝은 사실성 태도/정렬(Alignment)에만 한정해야 한다.
- **RLHF 피드백과 사실성 상충**: 인간 피드백(RLHF)은 더 길고 장황한 답변을 선호하므로, 정밀 검증 없이 RLHF를 적용하면 답변 길이에 비례해 오히려 환각 정밀도가 하락한다.

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[LLM Wiki 운영 패턴]]

