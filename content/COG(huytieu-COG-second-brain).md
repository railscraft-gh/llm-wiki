---
type: tool
status: needs-review
core: false
tags:
  - tool
  - obsidian
  - agent
aliases:
  - COG
  - COG 세컨드 브레인
sources:
  - raw/Build a Second Brain in 15 Minutes Just Markdown, Git, and an AI Agent.md
created: 2026-07-24
updated: 2026-07-24
---

# COG(huytieu-COG-second-brain)

## 한 줄 정의

Git, Obsidian, 그리고 AI 에이전트 환경을 기반으로 동작하는 오프라인 친화적 마크다운 세컨드 브레인(Second Brain) 자동 구축 도구다.

## 핵심 요지

- **3대 핵심 기둥**: **C**ognition(AI 인지), **O**bsidian(마크다운 노트), **G**it(버전 제어 및 롤백)을 융합하여 동작한다.
- **마크다운 기반**: 별도의 서버나 데이터베이스 없이 순수 마크다운(`.md`) 파일로 지식을 영구 보관한다.
- **비용 최적화 (Multi-Agent)**: 무거운 추론은 고가의 메인 모델(예: Claude Opus)이 처리하고, 파일 입출력 및 단순 파싱은 하위 작업자 에이전트(Worker agent, 예: Claude Sonnet)에 위임하여 컨텍스트 토큰 비용을 최소화한다.
- **성찰 루프(Reflection Loop)**: 브레인덤프 수집, 주간 분석, 월간 지식 통합의 순환 피드백 루프를 시스템적으로 지원한다.

## 설치/실행

### 1. 저장소 클론
```bash
git clone https://github.com/huytieu/COG-second-brain.git
cd COG-second-brain
```
또는 Node/npx 환경에서 간단히 추가할 수 있다:
```bash
npx skills add huytieu/COG-second-brain
```

### 2. 초기 온보딩
에이전트의 터미널 환경에 맞는 초기 설정 명령어를 입력하면 엔지니어, PM, 디자이너 등 직무 역할에 맞는 프로필 설정과 스킬이 구성된다.

### 3. Git 및 iCloud 백업 설정
iCloud 폴더에 연동하여 모바일(iOS) 기기 간 동기화를 보장하고, 변경 이력 추적 및 롤백 안정을 위해 Git 원격 저장소 커밋 규칙을 도입하는 것을 강력히 권장한다.

## 핵심 명령

- `I need to braindump`: 머릿속 생각을 가감 없이 쏟아내는 수집 기능. 해야 할 일은 Obsidian Tasks 플러그인 호환 이모지(`📅 YYYY-MM-DD`)를 자동 생성하여 정돈한다.
- `Give me my daily brief`: 개인 관심사에 맞게 7일 이내의 최신 뉴스를 출처 및 신뢰 등급(Confidence level)과 함께 매일 아침 브리핑해 준다.
- `Weekly review`: 주간 브레인덤프를 상호 참조하여 도메인 간의 연결 고리와 패턴을 분석해 주는 성찰 명령이다.
- `./cog-update.sh`: 사용자 생성 노트를 유지하면서 COG 엔진의 스크립트와 규칙만 충돌 없이 시뮬레이션 및 업데이트하는 유틸리티다.

## 한계

- **성찰 루프의 의존성**: COG가 자체 가중치나 지각을 학습하는 것은 아니며, 본질적으로 에이전트의 규칙(Skill.md) 기반 주입 연산에 의존하므로 사용자의 적극적인 검토와 성찰 없이는 단순 파일 방치로 이어질 수 있다.
- **의존성 도구 요구**: 팀 브리핑 등 고급 스킬을 백프로 활용하려면 깃허브 CLI(`gh`), 리니어(Linear), 슬랙(Slack) 등의 API 연동과 MCP(Model Context Protocol) 세팅이 선행되어야 한다.

## 관련 노트

- [[옵시디언 폴더 구조와 제텔카스텐 정리 규칙]]
- [[옵시디언_세컨드_브레인]]
- [[Claude Code(클로드 코드)]]

## 출처

- `raw/Build a Second Brain in 15 Minutes Just Markdown, Git, and an AI Agent.md`
