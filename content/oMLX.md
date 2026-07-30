---
type: concept
status: draft
core: false
tags:
- mlx
- local-llm
- omlx
- apple-silicon
- qwen
aliases:
- oMLX
- 2단계 KV 캐시
sources:
- raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max
  Quietly Replaced All Three-ko.md
created: 2026-07-21
updated: 2026-07-21
---
# oMLX

## 한 줄 정의
Apple Silicon 전용으로 설계되어 2단계 KV 캐시(RAM 핫 캐시 + SSD 콜드 캐시)와 Anthropic/OpenAI API 호환성을 갖춘 고성능 네이티브 [[LLM]]/VLM/임베딩 서빙 엔진.

## 핵심 요지
- **2단계 KV 캐시(Two-tier KV Cache)**: RAM과 SSD를 연동하여 반복되는 프롬프트와 컨텍스트를 디스크 캐시에서 신속히 복구함으로써, 에이전트 첫 토큰 생성 시간(TTFT)을 기존 [30~90초에서 1~3초](file:///Users/railscraft/Obsidian/raw/I%20Cancelled%20ChatGPT,%20Cursor,%20and%20Midjourney%20This%20Week%20%E2%80%94%20My%20MacBook%20Pro%20M5%20Max%20Quietly%20Replaced%20All%20Three-ko.md#L78) 수준으로 단축합니다.
- **다중 프레임워크 지원 및 멀티 엔드포인트**: OpenAI 규격(`:8000/v1`)뿐만 아니라 Claude Code용 Anthropic 규격(`/v1/messages`)을 에뮬레이션하여 Claude Code가 로컬 Qwen 모델로 자율 코딩을 수행하게 유도할 수 있습니다.
- **Apple Silicon 통합 메모리 효율성**: M5 Max(36GB 통합 메모리) 기반에서 Qwen 3.6-35B-A3B(4비트 양자화, [약 19~22GB 점유](file:///Users/railscraft/Obsidian/raw/I%20Cancelled%20ChatGPT,%20Cursor,%20and%20Midjourney%20This%20Week%20%E2%80%94%20My%20MacBook%20Pro%20M5%20Max%20Quietly%20Replaced%20All%20Three-ko.md#L35))와 임베딩/리랭커 모델(bge-m3 등)을 하나의 인스턴스에서 동시 서빙합니다.

## 상세
Apple Silicon의 Unified Memory는 CPU, GPU, Neural Engine이 동종 메모리 풀을 직접 참조하여 PCIe 대역폭 손실이 없습니다. oMLX는 이 지점을 극대화하여 초당 [90~130 토큰](file:///Users/railscraft/Obsidian/raw/I%20Cancelled%20ChatGPT,%20Cursor,%20and%20Midjourney%20This%20Week%20%E2%80%94%20My%20MacBook%20Pro%20M5%20Max%20Quietly%20Replaced%20All%20Three-ko.md#L233) 디코딩 속도를 보여줍니다.

클라우드 구독료 소모와 기업 보안 Egress 우려를 완전 오프라인 서빙으로 대체할 수 있으며, PyTorch 메모리 관리 시 `export PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0` 지침을 적용하여 ComfyUI Desktop(Flux, Z-Image-Turbo)과의 통합 메모리 경쟁을 차단합니다.

## 예시
- **Claude Code 로컬 스택 위장 연동**: `export ANTHROPIC_BASE_URL=http://localhost:8000` 환경변수를 부여하고 Claude Code를 실행하여, 로컬 oMLX Qwen 서버에 자율 깃 리포지토리 리팩토링 위임.
- **[[RAG]] 백엔드 오프라인 통합**: oMLX 내에 메인 에이전트 모델과 `bge-m3` 임베딩, `bge-reranker-v2-m3` 모델을 병렬 기동하여 외부 통신이 차단된 로컬 [[RAG]] 파이프라인 형성.

## 충돌
- **Anthropic API 도구 호출 스키마 차이**: Qwen 3.6은 OpenAI 스타일의 `function_call`을 사용하므로, 하네스([[Cline]], OpenHands)가 중간 어댑팅을 지원하거나 oMLX의 엔드포인트 에뮬레이션을 매칭시켜야 합니다.
- **36GB 메모리 초과 시 VRAM 경합**: 35B 풀 모델과 오리지널 24GB Precision Flux 모델을 동시에 적재하면 메모리 경합이 일어나므로 이미지 생성 시에는 [[LLM]] 인스턴스를 잠시 언로드하는 전략이 필요합니다.

## 관련 노트
- [[로컬 LLM 30분 실전 가이드]]
- [[NVIDIA NIM]]
- [[Mac mini 17가지 실무 활용법]]
- [[오픈소스 LLM 경제성과 벤더 종속성 해지]]

## 출처
- [raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max Quietly Replaced All Three-ko.md](file:///Users/railscraft/Obsidian/raw/I%20Cancelled%20ChatGPT,%20Cursor,%20and%20Midjourney%20This%20Week%20%E2%80%94%20My%20MacBook%20Pro%20M5%20Max%20Quietly%20Replaced%20All%20Three-ko.md)
