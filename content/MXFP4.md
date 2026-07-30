---
type: tool
status: draft
core: false
tags:
  - llm
  - quantization
  - hardware
aliases: []
sources: ['raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md']
created: 2026-07-30
updated: 2026-07-30
---

# MXFP4

## 한 줄 정의
MXFP4는 대형 언어 모델([[공개 가중치 모델]])의 학습 과정에 직접 내장되어 변환 노이즈와 사후 압축 손실을 최소화하도록 설계된 4비트 가중치 포맷이다.

## 핵심 요지
- **학습 내장형 4비트 양자화**: 일반적인 사후 양자화(PTQ)와 달리, 모델의 사전 학습 및 배포 단계에 내장되어 사후 가중치 압축으로 인한 정보 손실과 연산 왜곡을 대폭 완화한다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`).
- **초대형 모델의 압축 규격**: 매개변수가 2.8조 개에 달하는 초거대 MoE 모델인 문샷(Moonshot)의 Kimi K3에 기본 지원 포맷으로 탑재되어 배포 용량을 획기적으로 줄여준다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`).
- **물리적 메모리 격차 완화**: FP16 정밀도 기준 5.6TB에 이르는 모델 가중치를 MXFP4를 통해 약 1.4TB 수준으로 줄여주어, 초대형 모델을 구동하기 위한 인프라 비용 부담을 경감시킨다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`).
- **그럼에도 불구하고 여전히 높은 로컬 구동 한계**: 4비트 압축을 거친 1.4TB의 용량조차 RTX 4090(VRAM 24GB)이나 Mac Studio(통합 메모리 최대 256GB) 등 소비자용 하드웨어의 한계를 크게 넘어서며, 실질적인 구동에는 멀티노드 클러스터와 텐서 병렬 처리가 필수적이다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`).

## 상세
### 1. 4비트 포맷의 필요성과 라우팅 왜곡 방지
대규모 언어 모델(LLM)의 매개변수가 조 단위로 팽창함에 따라 하드웨어의 메모리 용량 및 대역폭 한계인 [[메모리 벽]]을 극복하는 것이 최우선 과제가 되었다. 기존의 양자화 기법은 이미 학습이 완료된 모델 가중치를 FP16 혹은 BF16에서 INT4, INT2 등으로 변환하는 사후 양자화(PTQ) 방식이 주를 이루었다.

그러나 이러한 사후 변환 방식은 모델의 크기가 커지고 특히 희소(Sparse)한 [[전문가 혼합 아키텍처]](MoE) 구조를 가질 경우, 양자화 노이즈가 라우터 로짓(router logits) 값을 흩뜨려 엉뚱한 전문가에게 토큰을 전송하거나 특정 전문가 네트워크를 아예 호출하지 않는 '먹통(go silent)' 상태를 유발하게 된다. 이는 결국 모델이 추론 과정을 생략하고 그럴듯하지만 틀린 코드를 내놓는 환각(Hallucination) 현상을 부른다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`).

MXFP4는 OCP(Open Compute Project)의 마이크로스케일링(Microscaling Formats, MX) 규격에 기반을 둔 압축 기술로서, 모델의 학습(Training) 과정에 이를 직접 내장하거나 조율하여 변환 시 생기는 양자화 노이즈를 근본적으로 억제함으로써 지능 저하를 효과적으로 완화한다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`).

### 2. Kimi K3 적용 양상과 인프라 요구 사양
실제로 문샷의 Kimi K3 모델(매개변수 2.8조 개)은 MXFP4 포맷을 기본 지원하도록 릴리스되었다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`). 이 압축을 적용하면 가중치의 물리적 크기는 5.6TB에서 1.4TB로 줄어들지만, 1.4TB라는 용량은 여전히 개인이 통제 가능한 홈 서버 수준을 한참 뛰어넘는다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`). 

정상적인 추론 구동과 100만 토큰 컨텍스트 창 및 KV 캐시를 온전히 확보하려면 80GB 메모리를 갖춘 H100 GPU 최소 12대 이상(혹은 8대로 이루어진 서버 노드 2~3개)과 NVLink/InfiniBand를 결합한 분산 텐서 병렬 처리(Tensor Parallelism) 인프라 시스템이 강제된다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`).

## 예시
### 1. MXFP4를 활용한 모델 크기 및 필요한 최소 H100 Node 개수 계산 공식 예시
MXFP4 4비트 포맷 하에서 모델 매개변수 수에 따른 최소 요구 VRAM 및 GPU 인프라 규모를 계산하는 예시이다.
- **매개변수 규모 (N)**: $2.8 \times 10^{12}$ (2.8조 개)
- **MXFP4 정밀도**: 4비트 (바이트당 0.5 바이트)
- **기본 가중치 크기 계산**:
  $$\text{가중치 용량 (GB)} = \frac{N \times 0.5 \text{ Bytes}}{1024^3} \approx 1,304 \text{ GiB} \approx 1.4 \text{ TB}$$
- **컨텍스트 및 KV 캐시 마진을 고려한 추론 요구 VRAM**:
  통상 안정적인 추론 및 100만 토큰 컨텍스트 지원을 위해 가중치 크기의 1.25배 가량의 총 VRAM 용량이 권장된다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`).
  $$\text{요구 VRAM} = 1,400 \text{ GB} \times 1.25 = 1,750 \text{ GB}$$
- **필요한 H100 80GB GPU 대수**:
  $$\text{필요 GPU 수} = \frac{1,750 \text{ GB}}{80 \text{ GB}} \approx 21.875 \text{ 대}$$
  따라서 H100 80GB 8대로 구성된 서버 노드가 최소 3개(총 24대)가 확보되어야 텐서 병렬 처리(Tensor Parallelism)를 통해 원활히 서빙할 수 있음을 의미한다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost One Can Run It..md`).

### 2. PyTorch에서 가상으로 MXFP4 형식 변환 결과를 시뮬레이션 및 양자화 에러 측정(MSE)하는 검증 코드
FP16 텐서를 MXFP4 형태(4비트 표현 및 미세한 스케일 팩터 적용)로 모사하여 모의 변환하고 변환 오차를 테스트하는 파이썬 스크립트 예시다.
```python
import torch
import numpy as np

def simulate_mxfp4_quantization(tensor: torch.Tensor):
    """
    입력 FP16/FP32 텐서를 MXFP4 형식(스케일 팩터가 있는 4비트 양자화)으로 모사 변환하여
    MSE(Mean Squared Error) 왜곡 값을 측정합니다.
    MXFP4는 채널별/블록별 마이크로 스케일링을 지원하여 4비트임에도 노이즈가 적습니다.
    """
    # 텐서 복사
    original = tensor.clone().detach().float()
    
    # 마이크로스케일링 블록 크기 정의 (예: 32개 원소당 1개의 스케일 팩터 공유)
    block_size = 32
    flat_tensor = original.view(-1)
    num_elements = flat_tensor.numel()
    
    # 블록 크기 배수가 되도록 패딩 처리
    padding_size = (block_size - (num_elements % block_size)) % block_size
    if padding_size > 0:
        flat_tensor = torch.cat([flat_tensor, torch.zeros(padding_size)])
        
    # 블록 형태로 리셰이프
    blocks = flat_tensor.view(-1, block_size)
    
    # 블록별 최댓값(스케일) 구하기
    scales, _ = torch.max(torch.abs(blocks), dim=1, keepdim=True)
    # 0으로 나누기 방지
    scales = torch.clamp(scales, min=1e-5)
    
    # 블록 가중치를 스케일로 정규화
    normalized_blocks = blocks / scales
    
    # 4비트 대칭 양자화 범위로 매핑 (-8에서 +7 범위)
    # MXFP4 표현에 따라 4비트 정수로 반올림
    quantized_blocks = torch.round(normalized_blocks * 7.0)
    quantized_blocks = torch.clamp(quantized_blocks, min=-8.0, max=7.0)
    
    # 역양자화 (De-quantization)
    dequantized_blocks = (quantized_blocks / 7.0) * scales
    
    # 패딩 복구 및 리셰이프
    reconstructed = dequantized_blocks.view(-1)
    if padding_size > 0:
        reconstructed = reconstructed[:-padding_size]
    reconstructed = reconstructed.view_as(tensor)
    
    # MSE 계산
    mse = torch.mean((tensor - reconstructed) ** 2).item()
    print(f"MXFP4 시뮬레이션 MSE 에러율: {mse:.8f}")
    return reconstructed, mse

# 가상의 FP16 가중치 텐서 생성 (1024 x 1024 크기)
weights = torch.randn(1024, 1024) * 0.02
reconstructed_weights, mse_val = simulate_mxfp4_quantization(weights)
```

## 충돌
- **압축 효율성과 로컬 구동 가능 여부의 모순**:
  문샷(Moonshot)이 Kimi K3를 배포할 때 MXFP4를 기본 지원함으로써 "학습 내장 압축을 통해 누구나 로컬에서 실행할 수 있을 것 같은 '오픈 가중치' 이미지"를 부각시켰다. 하지만 실제 압축본조차 1.4TB에 달해 소비자용 하드웨어의 VRAM 격차를 좁히지 못하는 모순이 존재한다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`). 결국 개인 개발자에게 이 '오픈' 가중치는 빌려 써야 하는 비싸고 느린 API에 지나지 않는다는 실질적 장벽과의 충돌이 나타난다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`).
- **초대형 MoE 모델의 양자화 노이즈 왜곡 취약성**:
  기존 연구에서는 가중치를 최대한 2비트까지 깎아 저사양 장비에 올릴 수 있다고 주장하지만, MoE 모델에서는 양자화 노이즈가 라우터의 올바른 전문가 탐색(Routing Logits)을 망쳐 결과적으로 모델의 논리적 지능을 심각하게 무너뜨린다는 연구 상충점이 소스 문서에서 강하게 지적된다 (`raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`).

## 관련 노트
- [[공개 가중치 모델]]: 대규모 매개변수 가중치가 개방되더라도 메모리 벽 때문에 개인용 하드웨어에서 로컬 구동할 수 없고, 결국 데이터 센터의 API 대여로 수렴하는 양극화 한계를 다룬다.
- [[메모리 벽]]: 하드웨어 한계로 인해 가중치를 압축해도 로컬 실행이 불가능함을 설명하며, MXFP4와 같은 압축 포맷이 도입되는 배경적 문제를 보여준다.
- [[전문가 혼합 아키텍처]]: MoE의 희소 활성화 메커니즘과 라우팅 방식을 설명하며, 양자화 노이즈에 특히 취약한 구조적 특징을 다룬다.

## 출처
- `raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md`
