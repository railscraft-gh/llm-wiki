---
type: concept
status: draft
core: false
tags:
  - llm
  - apple-silicon
  - mlx
  - local-ai
aliases: []
sources:
  - "raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max Quietly Replaced All Three-ko.md"
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의

Apple Silicon 전용으로 설계된 네이티브 macOS LLM 추론 엔진으로, 2단계 KV 캐시(Two-tier KV Cache) 설계를 통해 초기 구동 시간을 획기적으로 단축시키는 도구.

## 핵심 요지

- RAM의 핫 캐시와 SSD의 콜드 캐시를 유기적으로 맞물려 대규모 컨텍스트를 디스크에서 즉시 복구한다.
- 이 캐싱 시스템 덕분에 에이전트 환경(예: Claude Code)에서 첫 토큰 생성 시간(TTFT)을 30~90초 수준에서 단 1~3초로 단축한다.
- LLM, VLM, 임베딩, 리랭커 모델을 단일 프로세스 내에서 병렬로 서빙하는 능력을 갖췄다.

## 상세

oMLX는 M 시리즈 칩(특히 M5 Max 등)의 통합 메모리 아키텍처(Unified Memory)와 GPU Neural Accelerator를 최대한 활용하기 위해 만들어졌다. 일반적인 로컬 LLM 서빙 도구(예: LM Studio, Ollama)와 달리, oMLX의 킬러 기능은 2단계 KV 캐시(Two-tier KV Cache)이다. 
반복되는 시스템 프롬프트나 거대한 프로젝트 컨텍스트를 SSD 콜드 캐시에 백업해 두었다가, 필요 시 RAM으로 즉시 로드하므로 매번 새롭게 프롬프트를 연산하는 낭비를 막아준다. 또한 Anthropic 규격(`/v1/messages`)을 에뮬레이션하여 Claude Code 등 다양한 에이전트를 기업 데이터 유출 걱정 없이 완벽하게 속여 로컬 모델(예: Qwen 3.6)과 통신하게 할 수 있다.

## 예시

```bash
# 설치 및 백그라운드 서비스 구동
brew install jundot/tap/omlx
brew services start omlx
```
설치 후 `http://localhost:8000/admin` 웹 관리 페이지에서 원하는 모델(Qwen3.6-35B-A3B-4bit 등)을 검색하여 원클릭으로 다운로드 및 서빙할 수 있다. 

## 충돌

- **초기 진입 장벽**: LM Studio처럼 클릭 한 번으로 모든 것이 끝나는 GUI 환경보다는 설정이 조금 더 필요하며, 백그라운드 서비스와 셸 환경 변수(`ANTHROPIC_BASE_URL` 등)에 대한 이해가 요구된다. 파워 유저용 필살기에 가깝다.
- **VRAM 의존성**: SSD 캐시로 TTFT를 줄이지만, 모델을 실제로 구동하고 추론하기 위해서는 기본적으로 36GB 이상의 통합 메모리를 가진 고사양 Mac이 전제되어야 제대로 된 성능(에이전트 구동)을 체감할 수 있다.

## 관련 노트

- [[Apple Silicon AI 워크스테이션]]
- [[Claude Code]]
- [[Qwen 3.6-35B-A3B]]

