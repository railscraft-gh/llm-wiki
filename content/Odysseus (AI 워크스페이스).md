---
type: tool
status: draft
core: false
tags:
  - ai
  - self-hosting
  - local-llm
aliases:
  - Odysseus
sources:
  - raw/A YouTuber Just Did More for Self-Hosted AI Than a Decade of Open Source.md
created: 2026-08-01
updated: 2026-08-01
---
# Odysseus (AI 워크스페이스)

## 한 줄 정의
유튜버 PewDiePie(Felix Kjellberg)가 개발하여 2025년 5월에 공개한 올인원 셀프 호스팅 AI 워크스페이스 오픈소스 프로젝트.

## 핵심 요지
- 기술적 혁신보다는 흩어져 있던 오픈소스 컴포넌트들을 하나로 묶는 패키징(Packaging)의 혁신을 이뤄냈다.
- 도커 명령어 한 줄로 로컬 및 클라우드 모델 인터페이스, 심층 연구 에이전트, AI 에디터, 이메일, 노트, 캘린더 동기화 등 다양한 기능을 통합 환경으로 제공한다.
- 하드웨어 사양을 분석해 실행 가능한 모델을 알려주는 '[[모델 쿡북]](Model cookbook)' 기능으로 진입 장벽을 대폭 낮췄다.
- 출시 48시간 만에 GitHub 3만 별, 이후 7만 8천 별을 돌파하며 로컬 AI의 대중화를 이끌었다.

## 상세
Odysseus는 로컬 [[LLM]]을 구동하기 위한 [[Ollama]], 정보를 검색하기 위한 [[워크플로]]우 엔진([[n8n]] 등), 다양한 도구를 연결하는 [[Model Context Protocol]] (MCP) 등 기존 생태계의 요소들을 영리하게 조립하여 완성된 '제품' 형태로 제공한다. 

과거 수작업으로 구축해야 했던 복잡한 시스템을 '로컬 퍼스트(Local-first)' 및 '노 원격 진단 데이터(No Telemetry)' 기조 아래 1-click 설치로 구현해 냈다. 이는 셀프 호스팅 AI가 비전공자도 접근할 수 있을 만큼 직관적이고 쉬워졌음을 뜻하며, 소비자용 하드웨어 및 로컬 모델 발전의 강력한 수요 동력이 되고 있다.

## 관련 노트
- [[로컬 LLM 메모리 대역폭]]
- [[MCP]]
- [[Ollama]]

## 출처
- raw/A YouTuber Just Did More for Self-Hosted AI Than a Decade of Open Source.md
