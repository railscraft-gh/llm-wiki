---
type: tool
status: draft
core: false
tags:
  - hardware
  - nvidia
  - llm
aliases: []
sources:
  - "raw/I Was Ready to Return My DGX Spark. Then NVIDIA’s January Update Changed Everything..md"
created: 2026-08-01
updated: 2026-08-01
---
# DGX Spark

## 한 줄 정의
DGX Spark는 NVIDIA가 출시한 약 4,000달러 가격의 개인용 소형 AI 슈퍼컴퓨터 장비로, 로컬 환경에서 대용량 AI 모델을 128GB의 통합 메모리에 올려 구동할 수 있도록 설계되었다.

## 핵심 요지
- 일반 소비자용 GPU로는 메모리가 부족해 구동할 수 없는 70B~120B 이상의 파라미터 모델을 로컬 환경(책상 위)에서 구동할 수 있다.
- 초당 토큰 생성 속도(처리량)를 극대화하는 용도가 아니라 모델을 메모리에 온전히 올려두는 용량(Capacity)에 중점을 둔 장비다.
- ConnectX-7 NIC를 통해 두 대의 DGX Spark를 연결하면 200Gbps RDMA를 통해 256GB 메모리 풀을 생성할 수 있다.
- 2026년 1월 소프트웨어 업데이트와 플레이북 공개를 통해 단순한 하드웨어가 아닌 엔터프라이즈 AI 개발 플랫폼으로 자리 잡았다.

## 상세
존 카맥(John Carmack)은 초기에 발열 문제와 광고된 성능 미달을 지적하며 비판했으나, 1월 업데이트로 NVFP4 양자화 적용, Eagle3 투기적 해독, 하이브리드 라우팅 및 NVIDIA AI Enterprise 지원이 추가되면서 평가가 반전되었다. 273 GB/s의 메모리 대역폭 한계로 챗봇 형태의 단순 추론 속도는 M3 Pro Mac 등과 비슷하지만, CUDA 생태계와 128GB 메모리를 활용한 RAG, 멀티 에이전트 시스템, 대형 모델 분산 미세 조정 등 프라이버시가 중요한 로컬 엔터프라이즈 작업에 최적화되어 있다. 

## 예시
- **두 대의 Spark 연결**: 200Gbps RDMA를 통해 통합 256GB 메모리 풀을 생성, Llama 3.1 405B를 로컬에서 실행.
- **Mac과의 워크플로우 결합**: Mac이 인터페이스를 담당하고 Spark가 무거운 연산(예: ComfyUI 4K 비디오 생성)을 처리하도록 역할을 분담.

## 관련 노트
- [[로컬 LLM 30분 실전 가이드]]
- [[LLM]]

## 출처
- raw/I Was Ready to Return My DGX Spark. Then NVIDIA’s January Update Changed Everything..md
