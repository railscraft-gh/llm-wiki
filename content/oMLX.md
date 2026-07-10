---
aliases: []
core: false
created: 2026-06-07
sources:
  - raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max
  - raw/I Sat in Engineering Meetings for Two Years Without Understanding What a Branch
  - raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md
  - raw/im-not-ai.md
  - raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
  - raw/Why senior UX designers are struggling in 2026-ko.md
  - raw/Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko.md
  - raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
  - raw/The Best Way to Make AI Write Like You-ko.md
  - raw/Building an MCP Ecosystem at Pinterest-ko.md
  - raw/Give Your AI Agent 36 Superpowers. Long‑Term Memory in Minutes with GBrain (Open
  - raw/맥북 로컬 AI 에이전트 구동을 위한 oMLX 벤치마크 및 활용기.md
status: evergreen
tags:
  - inference
  - agent
  - local
type: tool
updated: 2026-07-10
---

# oMLX

## 한 줄 정의
oMLX는 Apple Silicon(M 시리즈 칩셋) 맥 환경에 맞춤 설계된 고성능 로컬 대규모 언어 모델(LLM) 추론 엔진으로, 에이전트 구동에 필요한 대규모 콘텍스트의 캐싱 및 병렬 서빙에 최적화된 도구다.

## 핵심 요지
- **2단계 KV 캐시 (Two-tier KV Cache)**: RAM의 핫 캐시와 SSD의 콜드 캐시를 유기적으로 맞물려 대규모 프로젝트 컨텍스트나 반복되는 시스템 프롬프트를 디바이스 수준에서 캐싱한다.
- **TTFT(첫 토큰 생성 시간) 획기적 단축**: `oMLX`를 통해 코딩 에이전트(예: Claude Code)를 구동할 시, 첫 토큰 생성 시간(TTFT)을 기존 30~90초에서 단 1~3초 수준으로 단축한다. (출처: 출처)
- **통합 서빙 아키텍처**: LLM(대형 언어 모델), VLM(시각 멀티모달 모델), 텍스트 임베딩(Embedding), 리랭커(Reranker) 모델을 단 하나의 프로세스에서 리소스 낭비 없이 병렬로 서빙한다.
- **Apple Silicon 최적화**: 컨티뉴어스 배칭(Continuous batching), 페이지드 프리픽스 공유(Paged prefix sharing) 등을 완전 제공하여 맥의 GPU Metal 및 Neural Engine 성능을 최고조로 끌어올린다.
- 프리필(Prefill) 병목 제거: oMLX는 순수 MLX 백엔드 대비 컨텍스트 프리필 처리 속도를 M1 Max에서 5.1배(초당 2,975토큰), M4 Max에서 5.7배(초당 8,664토큰) 향상시킨다.
- 계층형 캐싱: RAM(Hot)과 SSD(Cold)로 나누어진 2단계 KV 캐시 아키텍처를 도입해, 로컬 에이전트 실행 시 첫 토큰 생성 시간(TTFT)을 1~3초대로 혁신적으로 단축한다.

## 상세

### 로컬 AI 워크스테이션의Sweet Spot (36GB M5 Max)
외장 GPU 노트북에서 MoE 모델(예: 4비트 양자화 Qwen 3.6-35B-A3B)을 구동하기 위해서는 최소 VRAM 24GB의 RTX 4090 수준의 모바일 하드웨어가 요구된다. 반면 애플의 통합 메모리 아키텍처(Unified Memory)는 CPU와 GPU, Neural Engine이 물리적으로 하나의 메모리 풀을 공유하므로, 불필요한 PCIe 버스 대역폭 병목 없이 로컬 디바이스(36GB RAM 이상)에서 MoE 에이전트 모델과 ComfyUI 등을 오프라인 환경에서 상시 구동할 수 있도록 돕는다. 

### API 규격의 상호 교환성
oMLX는 OpenAI API 표준 규격(`http://localhost:8000/v1`)뿐만 아니라, Claude Code와 같이 프록시 설정이 필요한 특수 터미널 에이전트들을 위한 Anthropic 메시지 API 규격(`/v1/messages`)도 네이티브로 지원하여, 상용 클라우드 모델 결제를 완벽히 대체할 수 있는 로컬 에이전트 환경의 중추 역할을 담당한다.

### Apple Silicon 환경 oMLX 성능 벤치마크 실증
M1 Max 및 M4 Max (64GB Unified Memory) 맥북에서 MoE 모델(Qwen3.6-35B-A3B-UD-MLX-4bit, 21GB)을 사용해 수행한 8,700토큰 분량의 프리필(Prefill) 벤치마크 데이터가 확보되었습니다.
- **프리필(Prefill) 처리 지연 시간 비교**:
  - **M1 Max**: 순수 MLX의 경우 20.35초(초당 579토큰)가 소요되었으나, oMLX 사용 시 **2.95초(초당 2,975토큰, 약 5.1배 가속)**로 단축되었습니다.
  - **M4 Max**: 순수 MLX의 경우 5.75초(초당 1,520토큰)가 소요되었으나, oMLX 사용 시 **1.01초(초당 8,664토큰, 약 5.7배 가속)**로 단축되어 실시간에 가까운 응답성을 달성하였습니다.
- **출력 생성 속도**:
  - 생성 단계는 MLX 코어 효율을 유지하여 M1 Max에서 초당 42토큰, M4 Max에서 초당 95토큰을 기록하였습니다.
- **RAM/SSD 하이브리드 KV 캐시 적용 효과**:
  - 첫 요청 이후 8,700토큰의 캐시 데이터가 RAM(Hot)과 SSD(Cold) 계층에 적재되어, 후속 지시 시 프리필 단계를 완전히 스킵하므로 즉각적인 피드백 피드를 완성합니다.

*(37라인 출처 명시 보정)* oMLX를 통해 코딩 에이전트를 구동할 시, 첫 토큰 생성 시간(TTFT)을 기존 30~90초에서 단 1~3초 수준으로 단축한다 (출처: [맥북 로컬 AI 에이전트 구동을 위한 oMLX 벤치마크 및 활용기.md](file:///Users/railscraft/Obsidian/raw/%EB%A7%A5%EB%B6%81%20%EB%A1%9C%EC%BB%AC%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EA%B5%AC%EB%8F%99%EC%9D%84%20%EC%9C%84%ED%95%9C%20oMLX%20%EB%B2%A4%EC%B9%98%EB%A7%88%ED%81%AC%20%EB%B0%8F%20%ED%99%9C%EC%9A%A9%EA%B8%B0.md)).

## 예시

## 충돌

## 관련 노트
- [[Agent Native Infrastructure]]
- [[Harness Engineering]]
- [[Model Context Protocol]]

