---
type: concept
status: evergreen
core: false
tags:
- generative-ai
- diffusion
- video-generation
aliases:
- Video Diffusion Models
- 비디오-생성-확산-모델-(Diffusion-Models-for-Video-Generation)
sources:
- raw/Diffusion Models for Video Generation.md
created: 2026-07-21
updated: 2026-07-21
---
# 비디오 생성 확산 모델 (Diffusion Models for Video Generation)

## 한 줄 정의
이미지 생성 확산 모델에 시간(temporal) 차원과 일관성 유지 메커니즘을 추가하여 고품질의 비디오 프레임을 합성하는 모델 아키텍처.

## 핵심 요지
비디오 생성은 시간적 일관성을 요구하며 대규모 고품질 데이터를 구하기 어렵다는 특징이 있다. 이를 해결하기 위해 3D U-Net, Diffusion Transformer(DiT) 같은 구조가 활용되며, 기존 이미지 생성 모델에 시간축(Temporal) 레이어를 덧붙여 파인튜닝(Make-A-Video, Video LDM 등)하거나 훈련 없이 적용(Text2Video-Zero)하는 방식이 널리 쓰인다.

## 상세
- **기본 파라미터화**: $\epsilon$-파라미터화의 색상 편이(color shift) 문제를 해결하기 위해 $v$-prediction 파라미터화가 주로 쓰인다.
- **아키텍처 확장**: 
  - 3D U-Net 기반: 공간(Spatial) 레이어와 시간(Temporal) 레이어를 번갈아 배치하여 시공간 정보를 분리 처리.
  - DiT 기반: 비디오 데이터를 시공간 패치(spacetime patches) 시퀀스로 다뤄 트랜스포머에 입력 (예: OpenAI Sora).
- **이미지 모델의 확장 (Inflation)**:
  - 텍스트-이미지 생성 능력을 유지한 채 비디오 생성을 위해 공간 레이어 사이에 템포럴 어텐션/합성곱을 추가하고 비디오 데이터로 추가 파인튜닝.

## 예시
- **Imagen Video**: 7개의 확산 모델(베이스 + 시공간 초해상도 캐스케이드)을 결합하여 고품질 비디오를 합성.
- **Sora**: 3D U-Net 대신 Diffusion Transformer(DiT)를 사용하여 비디오 생성을 시공간 패치 토큰 예측으로 해결.
- **Text2Video-Zero**: 이미지 확산 모델에 어떠한 비디오 학습 데이터 없이, 프레임 간 어텐션(Cross-frame attention) 및 모션 워핑 조작만으로 일관성 있는 비디오를 제로샷 생성.

## 충돌
- **템포럴 일관성 확보 방식**: 비디오 클립 단위로 먼저 생성 후 초해상도(TSR)로 확장하는 방식(Video LDM, SVD)과 시간과 공간 차원을 동시에 한 번에 처리하여 전체 일관성을 높이는 방식(Lumiere의 STUNet) 간의 아키텍처 접근 방식 차이 존재.

## 관련 노트
- [[LLM 외부적 환각 (Extrinsic Hallucinations in LLMs)]]
- [[자가 개선 하네스 엔지니어링 (Harness Engineering for Self-Improvement)]]

## 출처
- `raw/Diffusion Models for Video Generation.md`
