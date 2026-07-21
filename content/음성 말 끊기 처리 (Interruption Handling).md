---
type: concept
status: draft
core: false
tags:
  - llm
  - voice
  - audio
  - architecture
aliases:
  - Interruption Handling
  - 음성 말 끊기 처리
  - Playback Queue Flush
sources:
  - raw/Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko.md
created: 2026-07-21
updated: 2026-07-21
---
# 음성 말 끊기 처리 (Interruption Handling)

## 한 줄 정의
음성 비서가 답변 오디오를 출력하던 도중 사용자가 말을 끼어들었을 때(Interruption) 이를 실시간 감지하여 원격 생성과 로컬 재생 버퍼(Playback Queue)를 즉각 소각·중단시키는 기술.

## 핵심 요지
- **직렬 파이프라인(STT-LLM-TTS Cascade) 한계 극복**: 직렬 연결 시 로컬 VAD 상태와 원격 LLM 생성 상태가 파편화되어 무시하고 밀어붙이거나(Bulldozer) 헛기침에도 반응하는(Neurotic) 오작동 발생.
- **네이티브 양방향 모델 구조**: Gemini Live처럼 오디오 입출력을 네이티브하게 양방향 전송하는 모델 세션에서 서버 VAD(`automatic_activity_detection`)가 유저 발화를 수신 시 즉시 `server_content.interrupted=True` 전송.
- **클라이언트 큐 플러시(Queue Flush)**: 중단 이벤트를 전송받는 즉시 `speaker_queue` 내 미재생 PCM 버퍼 데이터를 소각하여 오디오 지연 및 겹침을 방지.

## 상세
- **음성 I/O 프로토콜 스펙**:
  - 입력: [16 kHz 모노 16-bit PCM (청크 크기 1024 프레임 / 약 64ms 지연)](file:///Users/railscraft/Obsidian/raw/Build%20a%20Real-Time%20Voice%20Agent%20in%2030%20Minutes%20%28With%20Interruption%20Handling%29-ko.md#L95)
  - 출력: [24 kHz 모노 16-bit PCM](file:///Users/railscraft/Obsidian/raw/Build%20a%20Real-Time%20Voice%20Agent%20in%2030%20Minutes%20%28With%20Interruption%20Handling%29-ko.md#L96)
  - 스레드 안전성: OS 오디오 콜백 스레드와 asyncio 루프 간 `loop.call_soon_threadsafe`를 사용해 메모리 오염 방지.

## 예시
- 에이전트가 내일 날씨를 말하던 도중 사용자가 "아, 오늘 날씨 알려줘"라고 말을 끊으면 [즉시 `[interrupted by user]` 이벤트가 발생하며 오디오 출력을 중단](file:///Users/railscraft/Obsidian/raw/Build%20a%20Real-Time%20Voice%20Agent%20in%2030%20Minutes%20%28With%20Interruption%20Handling%29-ko.md#L362-L370)하고 오늘 날씨로 전환.

## 충돌
- **네트워크 지터 및 정적(Dead Air)**: 도구 호출이 400ms 이상 지연될 경우 통화 정적이 흐르므로 "시간을 버는 추임새(Filler Word)" 비동기 메커니즘을 병행해야 함.

## 관련 노트
- [[멀티모달 경험]]
- [[Model Context Protocol]]

