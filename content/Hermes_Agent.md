---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - hermes
aliases: [Hermes Agent]
sources:
  - raw/Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
[[Hermes Agent]]는 경험을 통해 스스로 학습하고 최적화하는 오픈소스 AI 에이전트 프레임워크입니다.

## 핵심 요지
- **자가 학습 기술(Skill-Learning):** 작업을 반복할수록 효율적인 기술로 저장하고 스스로 개선합니다.
- **3층 메모리 구조:** 단기, 장기, 기술 메모리 및 세션 검색(SQLite/FTS5)을 통해 문맥을 기억합니다.
- **다중 플랫폼 지원:** Telegram, Discord, Slack 등 12개 채널에서 동일한 맥락으로 대화가 가능합니다.
- **로컬 친화적:** Ollama 등과 연동하여 로컬 환경에서 API 비용 없이 구동할 수 있습니다.

## 상세
[[Hermes Agent]]는 기존 에이전트들의 '건망증' 문제를 해결하는 데 집중합니다. 사용자와의 대화 및 작업 수행 과정을 `MEMORY.md`, `USER.md`, `SQLite` 기반 세션 검색을 통해 구조적으로 저장합니다. 특히 작업 단계를 '기술(Skill)'로 자동 변환하고, 실행 과정에서 발생하는 비효율을 스스로 감지하여 수정하는 자기 개선(self-improvement) 루프가 특징입니다.

## 예시
- **기술 학습:** "Docker로 서비스 배포"를 수행하면 Hermes가 단계를 기술로 저장하고 다음번에 더 빠르게 수행합니다.
- **메모리 복구:** "지난주 Nginx 설정 기억나?"라고 물으면 세션 검색을 통해 과거 맥락을 복구하여 답변합니다.

## 관련 노트
- [[2026년 에이전틱 AI 엔지니어 로드맵]]
- [[AI Agent Best Practices. Production-Ready Harness Engineering]]

