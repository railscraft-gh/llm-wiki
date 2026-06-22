---
aliases: []
core: false
created: 2026-06-07
sources:
- raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max
  Quietly Replaced All Three-ko.md
- raw/I Sat in Engineering Meetings for Two Years Without Understanding What a Branch
  Was-ko.md
- raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md
- raw/im-not-ai.md
- raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
- raw/Why senior UX designers are struggling in 2026-ko.md
- raw/Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko.md
- raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
- raw/The Best Way to Make AI Write Like You-ko.md
- raw/Building an MCP Ecosystem at Pinterest-ko.md
- raw/Give Your AI Agent 36 Superpowers. Long‑Term Memory in Minutes with GBrain (Open
  Source)-ko.md
status: evergreen
tags:
- inference
- agent
- local
type: tool
updated: '2026-06-22'
---# oMLX

## 한 줄 정의
oMLX는 Apple Silicon(M 시리즈 칩셋) 맥 환경에 맞춤 설계된 고성능 로컬 대규모 언어 모델(LLM) 추론 엔진으로, 에이전트 구동에 필요한 대규모 콘텍스트의 캐싱 및 병렬 서빙에 최적화된 도구다.

## 핵심 요지
- **2단계 KV 캐시 (Two-tier KV Cache)**: RAM의 핫 캐시와 SSD의 콜드 캐시를 유기적으로 맞물려 대규모 프로젝트 컨텍스트나 반복되는 시스템 프롬프트를 디바이스 수준에서 캐싱한다.
- **TTFT(첫 토큰 생성 시간) 획기적 단축**: `oMLX`를 통해 코딩 에이전트(예: Claude Code)를 구동할 시, 첫 토큰 생성 시간(TTFT)을 기존 30~90초에서 단 1~3초 수준으로 단축한다. (출처: 출처)
- **통합 서빙 아키텍처**: LLM(대형 언어 모델), VLM(시각 멀티모달 모델), 텍스트 임베딩(Embedding), 리랭커(Reranker) 모델을 단 하나의 프로세스에서 리소스 낭비 없이 병렬로 서빙한다.
- **Apple Silicon 최적화**: 컨티뉴어스 배칭(Continuous batching), 페이지드 프리픽스 공유(Paged prefix sharing) 등을 완전 제공하여 맥의 GPU Metal 및 Neural Engine 성능을 최고조로 끌어올린다.

## 상세
### 로컬 AI 워크스테이션의Sweet Spot (36GB M5 Max)
외장 GPU 노트북에서 MoE 모델(예: 4비트 양자화 Qwen 3.6-35B-A3B)을 구동하기 위해서는 최소 VRAM 24GB의 RTX 4090 수준의 모바일 하드웨어가 요구된다. 반면 애플의 통합 메모리 아키텍처(Unified Memory)는 CPU와 GPU, Neural Engine이 물리적으로 하나의 메모리 풀을 공유하므로, 불필요한 PCIe 버스 대역폭 병목 없이 로컬 디바이스(36GB RAM 이상)에서 MoE 에이전트 모델과 ComfyUI 등을 오프라인 환경에서 상시 구동할 수 있도록 돕는다. 

### API 규격의 상호 교환성
oMLX는 OpenAI API 표준 규격(`http://localhost:8000/v1`)뿐만 아니라, Claude Code와 같이 프록시 설정이 필요한 특수 터미널 에이전트들을 위한 Anthropic 메시지 API 규격(`/v1/messages`)도 네이티브로 지원하여, 상용 클라우드 모델 결제를 완벽히 대체할 수 있는 로컬 에이전트 환경의 중추 역할을 담당한다.

## 관련 노트
- [[Agent Native Infrastructure]]
- [[Harness Engineering]]
- [[Model Context Protocol]]

