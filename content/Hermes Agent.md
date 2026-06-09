---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - open-source
aliases:
  - 헤르메스 에이전트
  - Hermes 에이전트
sources:
  - raw/Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko.md
created: 2026-06-09
updated: 2026-06-09
---

# Hermes Agent

## 한 줄 정의

Nous Research가 2026년 3월에 개발한, 경험을 바탕으로 기술을 학습하고 진화시킬 수 있는 오픈소스 AI 에이전트 프레임워크이다. [Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko.md](../raw/Hermes%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20+%20Ollama.%20%EB%A1%9C%EC%BB%AC%EC%97%90%20%EC%84%A4%EC%B9%98%ED%95%98%EB%8A%94%20%EA%B0%80%EC%9E%A5%20%EB%B9%A0%EB%A5%B8%20%EB%B0%A9%EB%B2%95-ko.md)

## 핵심 요지

- **자동화된 기술 학습(Skill-Learning Automated)**: 수행한 작업 단계를 기술(skill)로 자동 저장하고 스스로 다듬어 재사용한다.
- **3층 구조 메모리**: 단기(대화 맥락), 장기(선호도), 기술(스킬)로 메모리를 관리하며 SQLite FTS5 기반 과거 대화 검색을 지원한다.
- **멀티 플랫폼 공유**: Telegram, Discord, Slack 등 12개 채널을 연동할 수 있고 채널 간 메모리가 통합 공유된다.
- **100% 로컬 구동**: Ollama 로컬 엔드포인트를 지정하여 클라우드 비용이나 API 키 없이 로컬 하드웨어(예: `gpt-oss:20b` 모델)로 실행할 수 its다.

## 상세

### 1. 자동화된 기술 학습 (Skill-Learning Automated)
인간이 수동으로 기술을 작성해야 하는 [[OpenClaw]]와 달리, Hermes Agent는 작업을 수행하면서 이를 기술로 저장하고 실행 과정에서 비효율적이거나 낡은 부분을 스스로 수정(Self-improvement)해 나간다.

### 2. 메모리 3층 구조와 세션 검색
AI의 고질적인 문맥 유실(건망증)을 해결하기 위해 세 가지 레이어로 정보를 축적한다.
- **`MEMORY.md`**: 프로젝트 환경, 선호도 등을 저장하는 에이전트의 개인 메모이다.
- **`USER.md`**: 이름, 시간대, 대화 스타일 등 사용자 프로필 정보이다.
- **세션 검색 (Session Search)**: 과거의 모든 대화 세션을 SQLite 데이터베이스에 기록하고, FTS5(Full-Text Search)를 사용해 수주일 전 나눈 대화 맥락까지 호출해낸다.

### 3. 로컬 셋업 및 Ollama 연동
- **설치**: `curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash` 명령어로 설치 마법사를 시작한다.
- **마이그레이션**: Nous Research의 이전 에이전트 툴인 OpenClaw 데이터(`~/.openclaw`)를 자동으로 마이그레이션할 수 있다.
- **Ollama 연동**: Base URL을 `http://localhost:11434/v1`로 지정하여 Custom OpenAI-compatible endpoint를 구축하고, API 인증 없이 `gpt-oss:20b` 같은 로컬 모델로 추론을 구성한다.
- **주요 설정 지표**:
  - `max iterations`: 도구 호출 최대 반복 횟수 (기본값: 60)
  - `Tool Progress Display`: 실시간 수행 작업 시각화 정책 ('all')
  - `Context Compression`: 메모리 한계 절반(0.5) 도달 시 이전 대화 요약
  - `Session Reset Policy`: 비활성 1440분(24시간) 또는 오전 4시 도달 시 세션 리셋

### 4. OpenClaw와의 비교
- **Hermes Agent 강점**: 개인 동반자(Personal Advisor) 특화, 자동 기술 자가 학습, 음성 지원(기본 Microsoft Edge TTS), 가벼운 리소스 점유(20MB 대 200MB+).
- **OpenClaw 강점**: 멀티 에이전트 조정 및 채널 관리(Fleet 지휘관), 브라우저 자동화, 풍부한 플러그인 생태계와 검증된 실적(307k 스타 대 6k 스타).

## 예시

- 사용자로부터 "Docker를 사용해 백엔드 서비스를 배포해줘"라는 명령을 받으면, 빌드 및 배포 명령과 설정을 실행한 후 해당 성공 흐름을 내부 `skills/` 디렉토리에 하나의 기술 코드로 저장한다. 이후 유사 요청 시 이를 로드해 활용한다.

## 충돌

- **버전 미성숙에 따른 한계**: v0.2.0 기준 메모리 정확도가 완벽하지 않고 의도치 않은 기술 생성이 일어날 수 있어, 운영 중 실시간 수동 검증이 필요할 수 있다. [Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko.md](../raw/Hermes%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20+%20Ollama.%20%EB%A1%9C%EC%BB%AC%EC%97%90%20%EC%84%A4%EC%B9%98%ED%95%98%EB%8A%94%20%EA%B0%80%EC%9E%A5%20%EB%B9%A0%EB%A5%B8%20%EB%B0%A9%EB%B2%95-ko.md)

## 관련 노트

- [[OpenClaw]]
- [[Hermes Agent 24-7 운영]]
- [[Hermes Agent Google Workspace 연결]]
- [[Agent Native Infrastructure]]

