---
type: tool
status: evergreen
core: true
tags:
  - llm
  - architecture
aliases:
  - Kimi K3
  - 키미 K3
sources:
  - raw/Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md
created: 2026-07-30
updated: 2026-07-30
---

# Kimi K3

## 한 줄 정의
Kimi K3는 중국 Moonshot AI가 공개한 오픈소스 역사상 최대 파라미터 규모를 가진 초거대 전문가 혼합(MoE) 언어 모델로, 압도적인 지능 대비 일반 로컬 하드웨어(GPU) 환경에서의 구동 진입 장벽과 [[메모리 대역폭 한계]]를 동시에 시사하는 2026년 기준 프런티어급 모델이다.

## 핵심 요지
* **역대 최고 규모의 오픈 가중치 모델**: 독점적 빅테크 모델에 대항하여 가중치가 완전히 일반에 공개되었으나, 활성화 파라미터가 아닌 총 파라미터가 수천억 개에 달해 압도적인 VRAM 크기를 요구한다.
* **전문가 혼합(MoE) 설계**: 연산 비용을 효율화하기 위해 라우팅 아키텍처를 도입했으나, 분산 연산 환경 하에서 '[[희소 모델 라우팅 실패]](Sparse Routing Failure)'나 메모리 병목 현상을 유발하기 쉽다.
* **로컬 모델의  VRAM 스필오버**: 양자화(Quantization) 기술을 거치더라도 VRAM 대역폭 한계로 인해 공유 메모리나 VRAM 스필오버(System RAM으로 연산이 넘어가 처리 속도가 폭락하는 현상)가 발생하는 일반 로컬 유저들의 진입 한계를 보여준다.

## 상세
Kimi K3는 거대 AI 오픈소스 생태계에 강력한 지능의 이정표를 제시했다. 하지만 수천억 개의 파라미터를 메모리에 얹어야 하는 특성상, 일반적인 단일 H100 또는 로컬 RTX 4090 수준의 인프라로는 FP8 구동조차 불가능하다.

이 모델은 2026년 기준 '로컬 인프라의 [[메모리 벽]](Memory Wall)'을 입증하는 가장 확실한 사례다. 모델 구동을 위해 다중 [[텐서 병렬 처리]](Tensor Parallelism) 및 [[MXFP4]] 같은 신규 데이터 포맷을 조합해야 하며, 이는 인공지능 기술의 범용 상품화(Commoditization) 추세 속에서도 컴퓨팅 하드웨어 자원의 격차가 지능 독점의 새로운 경계선으로 작동하고 있음을 보여준다.

## 예시
* **양자화 대조**: FP16 포맷 기준 약 1TB가 넘는 메모리가 요구되어, 일반 개발자는 [[MXFP4]]나 OLLAMA 4비트 양자화 모델을 Cloud GPU 인프라(Vast.ai 등)에 다중 노드로 분산 분산 로드하여 구동해야만 추론 결과를 획득할 수 있다.

## 관련 노트
* [[트랜스포머]]
* [[전문가 혼합 아키텍처]]
* [[메모리 벽]]

## 출처
- [Kimi K3 Is the Biggest Open Source Model Ever. Almost No One Can Run It..md](file:///Users/railscraft/[[Obsidian]]/raw/Kimi%20K3%20Is%20the%20Biggest%20Open%20Source%20Model%20Ever.%20Almost%20No%20One%20Can%20Run%20It..md)
