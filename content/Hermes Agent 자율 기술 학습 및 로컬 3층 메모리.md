---
type: concept
status: draft
core: false
tags:
- agentic-ai
- llm
- local-ai
- memory
aliases:
- Hermes Agent Autonomous Skill Learning & 3-Layer Memory
- Hermes-Agent-자율-기술-학습-및-로컬-3층-메모리
sources:
- raw/Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko.md
created: 2026-07-21
updated: 2026-07-21
---
# [[Hermes Agent]] 자율 기술 학습 및 로컬 3층 메모리

## 한 줄 정의
Nous Research가 개발한 오픈소스 에이전트 프레임워크로, 인간의 수동 개입 없이 수행한 작업 단계를 재사용 가능한 스킬(Skill)로 자동 저장·진화시키고, 3층 구조 메모리(`MEMORY.md`, `USER.md`, FTS5 세션 검색)를 통해 지속적 개인화를 구현하는 기술 아키텍처이다.

## 핵심 요지
- **자동화된 기술 학습 (Skill-Learning Automated)**: 에이전트가 작업을 실행한 후 그 프로세스를 스킬로 자동 저장하며, 실행 중 오래된 단계를 발견하면 스스로 코드를 수정하여 진화함 ([[OpenClaw]]의 수동 스킬 관리와 차별화).
- **메모리의 3층 구조**:
  1. **단기/프로젝트 메모리 (`MEMORY.md`)**: 환경, 프로젝트 맥락, 작업 선호도 기록.
  2. **사용자 프로필 (`USER.md`)**: 사용자 이름, 시간대, 커뮤니케이션 스타일 보존.
  3. **장기 세션 검색 (FTS5 SQLite)**: 과거 모든 대화 내역을 인덱싱하여 "지난주 Nginx 설정 대화"를 정밀 검색.
- **멀티 플랫폼 통합 및 공유 메모리**: Telegram, Discord, Slack, WhatsApp, Signal 등 12개 메신저 및 CLI 채널에서 단일 메모리 상태 공유.
- **경량화 및 로컬 엔드포인트 연동**: [[OpenClaw]] 대비 1/10 수준의 런타임 메모리(20MB 대 200MB+)로 동작하며 Ollama `http://localhost:11434/v1` 로컬 모델과 직접 결합.

## 상세
[[Hermes Agent]](v0.2.0 기준)는 AI 챗봇의 고질적 한계인 '맥락 단절(disconnection of context)'을 해결한다.

1. **설정 마법사 및 파라미터 조절**:
   - `max_iterations = 60`: 작업당 최대 도구 호출 횟수 지정.
   - `context_compression = 0.5`: 메모리 예산의 50% 도달 시 이전 메시지 자동 요약.
   - `session_reset_policy`: 1440분(24시간) 비활성 또는 매일 오전 4시 자동 세션 정제.
2. **[[OpenClaw]]와의 비교**:
   - [[OpenClaw]]: 멀티 에이전트 조정(Fleet), 브라우저 자동화, 대규모 커뮤니티 플러그인에 우위.
   - [[Hermes Agent]]: 개인 고문(Personal Advisor), 반복 작업 자율 스킬 학습, 경량 런타임에 우위.

## 예시
- **Docker 배포 스킬 자율 생성**: Hermes에게 "Docker를 사용해 서비스 배포해 줘"라고 지시하면, 실행 후 해당 절차를 내부 스킬로 자동 저장하여 다음번 유사 요청 시 재사용 및 성능 개선.
- **로컬 Ollama 연동 수치**: M시리즈 맥에서 Ollama Base URL `http://localhost:11434/v1`에 `gpt-oss:20b` 모델을 물려 131K 토큰 중 9.23K 토큰을 사용하면서도 API 비용 0원에 2초 대답 속도 달성.

## 충돌
- **인간 작성 스킬 vs AI 자율 기술 학습**: 사람의 정교한 매뉴얼 검증이 필요한 엔터프라이즈 환경에서는 오버라이드 위험이 있으나, 에이전트의 자기 개선(Self-improvement) 및 개인화 측면에서는 자율 스킬 작성이 압도적 유연성을 제공한다.

## 관련 노트
- [[2026년 프로덕션 AI 에이전트 4대 설계 조건]]
- [[LLM 자동 요약 메모리 버퍼]]

## 출처
- Hermes 3대 특징 및 기술 학습: [raw/Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko.md#L15-L45](file:///Users/railscraft/Obsidian/raw/Hermes%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20+%20Ollama.%20%EB%A1%9C%EC%BB%AC%EC%97%90%20%EC%84%A4%EC%B9%98%ED%95%98%EB%8A%94%20%EA%B0%80%EC%9E%A5%20%EB%B9%A0%EB%A5%B8%20%EB%B0%A9%EB%B2%95-ko.md#L15-L45)
- 메모리 3층 구조 및 20MB 대 200MB+ 수치: [raw/Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko.md#L27-L65](file:///Users/railscraft/Obsidian/raw/Hermes%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20+%20Ollama.%20%EB%A1%9C%EC%BB%AC%EC%97%90%20%EC%84%A4%EC%B9%98%ED%95%98%EB%8A%94%20%EA%B0%80%EC%9D%B4%EB%93%9C-ko.md#L27-L65)
- Ollama 11434 엔드포인트 및 60 iterations/0.5 압축 설정: [raw/Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko.md#L114-L132](file:///Users/railscraft/Obsidian/raw/Hermes%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20+%20Ollama.%20%EB%A1%9C%EC%BB%AC%EC%97%90%20%EC%84%A4%EC%B9%98%ED%95%98%EB%8A%94%20%EA%B0%80%EC%9E%A5%20%EB%B9%A0%EB%A5%B8%20%EB%B0%A9%EB%B2%95-ko.md#L114-L132)
- 131K 토큰 및 2초 대답 수치: [raw/Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko.md#L165-L172](file:///Users/railscraft/Obsidian/raw/Hermes%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20+%20Ollama.%20%EB%A1%9C%EC%BB%AC%EC%97%90%20%EC%84%A4%EC%B9%98%ED%95%98%EB%8A%94%20%EA%B0%80%EC%9D%B4%EB%93%9C-ko.md#L165-L172)
