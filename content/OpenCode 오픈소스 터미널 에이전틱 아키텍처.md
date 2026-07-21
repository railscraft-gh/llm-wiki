---
type: concept
status: draft
core: false
tags:
  - open-source
  - coding-agent
  - terminal-cli
aliases:
  - OpenCode Terminal Agent Architecture
sources:
  - raw/opencode-masterclass-summary.md
created: 2026-07-21
updated: 2026-07-21
---
# OpenCode 오픈소스 터미널 에이전틱 아키텍처

## 한 줄 정의
Cloud Code나 Cursor의 대안으로, 100% 오픈소스 기반 터미널 환경에서 스킬(Skills), 메모리 파일(`agents.md`), Plan/Bold 모드 이원화, 서브에이전트 병렬 위임 및 Playwright MCP 서버를 융합한 에이전틱 코딩 툴킷이다.

## 핵심 요지
- **컨텍스트 윈도우 보호를 위한 서브에이전트 위임**: 메인 에이전트는 코디네이터(조정자) 역할만 담당하고, 기능 구현은 독립적인 백그라운드 서브에이전트에 병렬 위임하여 메인 대화 세션의 컨텍스트 열화를 차단한다.
- **Plan/Bold 모드 분리 (Shift+Tab)**: 설계 단계(Plan 모드)와 실제 구현 단계(Bold 모드)를 분리하고, 모드별로 고성능 모델(예: GPT-5.5)과 저렴한 실천 모델을 다르게 할당하여 비용 및 추론 효율을 극대화한다.
- **프로젝트 규격 메모리 파이프라인**: 프로젝트 루트에 `agents.md`와 `design.md`를 배치하여 간결성, 서브에이전트 위임, 계획의 파일 저장(`.agents/plans/`), UI 디자인 시스템 준수를 강제한다.
- **Playwright MCP 기반 자율 e2e 테스트**: `opencode.json`을 통해 Playwright MCP 서버를 연결함으로써 에이전트가 브라우저를 직접 열어 UI 필드 입력, 클릭 테스트 및 문제 수정을 자동 수행한다.

## 상세
OpenCode는 터미널 `curl` 한 줄로 설치되는 100% 오픈소스 개발도구다.

핵심 아키텍처 및 설정 구조:
1. **프로바이더 연동 (`/connect`)**:
   - OpenCode Zen: 오픈소스 무료 모델 게이트웨이 제공 (BigPikko, HY3, Minimax 2.5, Nvidia NemoTron3Super).
   - 유료 프로바이더: OpenAI, Anthropic, Gemini, OpenRouter 등 API Key 또는 구독 연동.
   - `/models` 및 `/variants` 명령어로 추론 노력(reasoning effort: medium -> high) 제어.
2. **에이전트 스킬 확장 (`skills.sh`)**:
   - `.agents/skills/` 폴더에 Frontend Design, Next.js (Vercel Labs), AI SDK, shadcn 스킬 등을 내려받아 에이전트에 기술 특화 지침 주입.
3. **`agents.md` 시스템 프롬프트 작성 규칙**:
   - **간결성**: 대화 최소화 및 핵심 중심 답변.
   - **Bold 모드 서브에이전트 필수화**: 대화 세션의 토큰 사용량이 50%를 넘기면 품질이 급격히 저하되므로, 메인 에이전트는 직접 코드를 작성하지 않고 백그라운드 서브에이전트에 위임 후 최종 결과만 리턴받음.
   - **계획 영속화**: `.agents/plans/` 폴더에 구현 계획 파일 수동 저장 후 세션 초기화(`/new`)를 거쳐 구현 진행.
4. **Playwright MCP 브라우저 조작**:
   - UI 개편 후 Playwright MCP 툴을 통해 브라우저를 열어 자동 e2e 입력/클릭 테스트 및 비주얼 버그 자율 수정.

## 예시
- **Bold 모드 컨텍스트 보호 패턴**: `agents.md`에 "기능 구현은 메인 에이전트가 직접 하지 않고 항상 서브에이전트를 사용한다" 규칙을 지정하고, 메인 에이전트가 계획을 독립 서브작업으로 쪼개 백그라운드에서 병렬 돌린 후 `Ctrl+X -> 아래 방향키`로 현황 관찰.
- **계획 영속화 워크플로우**: Plan 모드에서 아키텍처 질문에 답변하여 완성된 계획을 `.agents/plans/`에 파일로 저장한 다음, `/new`로 컨텍스트 노이즈를 완전 제거하고 새 세션에서 코딩 시작.

## 충돌
- **메인 에이전트 직접 구현 vs 서브에이전트 위임**: 메인 에이전트가 파일 수정과 리팩터링을 직접 수행하면 5~10턴 만에 컨텍스트 창이 채워져 품질이 저하된다. 반드시 코디네이터 역할에 한정하고 구현은 서브에이전트에게 찢어서 맡겨야 한다.

## 관련 노트
- [[Claude Code 세션 운영 명령어]]
- [[Claude Code 오케스트레이션]]

