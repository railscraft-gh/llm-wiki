---
type: tool
status: draft
core: false
tags:
  - obsidian
  - wiki
  - tool
aliases: []
sources: ["raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md"]
created: 2026-07-29
updated: 2026-07-29
---

# [[옵시디언]]([[Obsidian]])

## 한 줄 정의

로컬 마크다운(.md) 파일들을 기반으로 지식을 유기적으로 연결하고 시각화하는 개인 지식 관리(PKM, Personal Knowledge Management) 도구이자, AI 에이전트의 작업 공간을 제공하는 로컬 우선(Local-First) 인터페이스입니다.

## 핵심 요지

- **파일 기반 데이터 소유권**: 데이터베이스나 서버 없이 로컬 환경에 일반 텍스트 `.md` 파일 형태로 저장되므로 데이터의 독립성과 완전한 소유권을 보장합니다.
- **AI 에이전트 연동 아키텍처([[COG]])**: 인지(Cognition), [[옵시디언]]([[Obsidian]]), 깃(Git)의 시너지를 통해 에이전트가 마크다운 지침을 스스로 읽고 실행하는 작업 영역을 구성합니다.
- **[[성찰 루프]] 대행**: 에이전트를 통해 일일 브리핑, 주간 리뷰, 월간 데이터 통합 같은 지식 정리 노동을 자동화하여 노트 시스템의 관리 부담을 해소합니다.
- **경량 워커 에이전트 위임**: 복잡하고 무거운 I/O 처리를 경량 [[워커 에이전트(Worker Agent)]]들에 이관하고 메인 맥락(Context)을 아낌으로써 에이전트 구동 비용을 대폭 축소합니다.

## 설치/실행 및 동기화

### 1. 동기화 및 롤백
- **iCloud 동기화**: 애플 기기(iPhone, iPad, Mac) 간 보관소(Vault)를 무결하게 동기화합니다.
- **Git 버전 관리**: 구조 개편 오류나 실수로 소중한 메모를 삭제했을 때 이전 상태로 복구할 수 있는 안정적인 롤백 환경을 제공합니다.
- **데이터 비손상 업데이트**: 시스템 프레임워크 스크립트와 사용자 데이터 계층이 완전 분리되어 있어, 아래 스크립트를 통해 안전하게 업데이트를 수행합니다.
  ```bash
  ./cog-update.sh            # 대화형 업데이트 진행
  ./cog-update.sh --check    # 업데이트 시 변경 사항 미리 조회
  ./cog-update.sh --dry-run  # 실제 수정 없이 시뮬레이션
  ```

### 2. 협업 도구 및 MCP 통합
- GitHub, Linear, Slack, PostHog 등과의 데이터 협업 연동 시 GitHub CLI(`gh`) 및 [[Model Context Protocol]](MCP) 통합 서비스를 활용합니다.

## 핵심 명령 및 [[워크플로]]우

[[COG]] 시스템을 [[옵시디언]] 보관소에 얹은 후 에이전트에게 내릴 수 있는 대표적인 자연어 명령과 [[워크플로]]우는 다음과 같습니다:

### 1. [[브레인덤프]] (Braindump)
- **명령**: `I need to braindump`
- **프로세스**: 정돈되지 않은 날것의 아이디어를 쏟아부으면 에이전트가 주제별로 분류하여 적절한 폴더 경로에 일반 노트로 자동 분할 및 저장합니다.
- **할 일 변환**: 수행해야 할 태스크는 [[옵시디언]] 태스크([[Obsidian]] Tasks)의 이모지 포맷(`📅 YYYY-MM-DD`)으로 생성되어 대시보드와 유기적으로 연계됩니다.

### 2. [[성찰 루프]] (Reflection Loop)
- **일일 브리핑**: `Give me my daily brief` 명령을 통해 사용자의 관심사에 맞는 소식을 요약합니다. 출처 링크와 7일 이내 최신성, 신뢰도 등급을 엄격히 명시합니다.
- **주간 리뷰**: `Weekly review` 명령으로 일주일 동안 기록된 노트를 교차 상호 참조하여 유기적인 패턴과 통찰을 건져 올립니다.
- **월간 통합**: `Consolidate my knowledge` 명령을 실행해 파편화된 메모들을 실용적인 지식 프레임워크로 승격시킵니다.

### 3. [[워커 에이전트(Worker Agent)]] 아키텍처
- **역할 분담**: 추론과 의사결정은 고성능 [[헤드 에이전트(Head Agent)]]가 전담하고, 기계적인 파일 정리나 데이터 추출은 저렴한 경량 워커 에이전트들이 수행합니다.
- **컨텍스트 최적화**: 워커의 처리 결과물은 임시 폴더 `/tmp/`에 기록하고 그 요약 주소만 헤드 에이전트에 보고하여 비싼 대화형 토큰 낭비를 원천 방지합니다.

## 한계

- **수동 기록 습관 의존**: AI 가중치를 직접 튜닝하거나 독자적 파라미터 학습을 하는 것이 아니므로, 지속해서 일상 메모를 [[브레인덤프]]하는 사용자 습관과 피드백 루프에 의존합니다.
- **Heuristic 한계**: 일일 브리핑 생성 시 7일 이내의 정보만을 수집하도록 가이드라인을 세우나 Heuristic 특성상 이전 소식이 섞일 수 있으므로 사용자의 교차 검증이 요구됩니다.

## 관련 노트

- [[옵시디언_세컨드_브레인]]
- [[옵시디언 폴더 구조와 제텔카스텐 정리 규칙]]
- [[Obsidian vault용 Slash Command 운영]]
- [[Quartz로 Obsidian Wiki 배포하기]]
- [[Model Context Protocol]]
- [[COG(huytieu-COG-second-brain)]]

## 출처

- `raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md`
- [huytieu/[[COG]]-second-brain GitHub Repository](https://github.com/huytieu/[[COG]]-second-brain)