---
type: concept
status: evergreen
core: true
tags:
 - llm
 - agent
 - infrastructure
aliases:
 - 에이전트 네이티브 인프라
 - Agent-native docs
sources:
 - raw/안드레_카파시_인터뷰_정리.md
 - raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
 - raw/sequoia-ascent-2026-karpathy-ko.md
 - raw/API_Key_관리_및_Infisical_도입_가이드.md
 - raw/Quartz-Deploy-Guide.md
 - raw/Quartz-GitHub-Pages-Complete-Guide.md
 - raw/opencode-masterclass-summary.md
 - raw/pi-coding-agent-overview.md
 - raw/arxiv-2603.28052-meta-harness.md
 - raw/2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가.md
 - raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md
 - https://infisical.com/docs/documentation/platform/secrets-mgmt/overview
created: 2026-05-06
updated: 2026-05-28
---

# Agent Native Infrastructure

## 한 줄 정의

Agent Native Infrastructure는 사람이 콘솔을 클릭해 따라 하는 대신 에이전트가 텍스트, CLI, API로 바로 실행할 수 있게 설계된 문서와 인프라다.

## 핵심 요지

- 에이전트 시대의 문서는 사람에게 단계별 지시를 주는 것보다 에이전트가 복사해 실행할 수 있는 형태가 중요해진다.
- 배포, 설정, DNS, 환경 변수처럼 클릭이 많은 workflow는 agent-native 전환의 주요 대상이다.
- [[Claude Code 오케스트레이션]]은 agent-native 인프라가 있을수록 쉬워진다.

## 상세

카파시는 프레임워크 문서가 아직도 사람에게 "이걸 설치하고, 저걸 클릭하고, 환경 변수를 넣으라"고 지시하는 점을 문제로 본다. 이상적인 문서는 에이전트에게 붙여 넣을 수 있는 명령과 맥락을 제공해야 한다.

MenuGen 배포 사례에서는 코드 작성보다 Vercel 배포, 서비스 연결, 설정, DNS 구성, 환경 변수 세팅이 더 번거로운 병목으로 나온다. 이상적인 상태는 "MenuGen을 빌드해서 배포해"라는 한 줄 지시로 인터넷에 올라가는 것이다.

Secret 관리도 agent-native 전환의 좋은 예다. [[Infisical 도입 전략]]처럼 CLI, SDK, Kubernetes Operator, CI/CD integration을 제공하는 도구를 쓰면 에이전트가 콘솔 클릭 대신 명령과 권한 범위에 맞춰 배포 workflow를 조립할 수 있다.

[[Quartz로 Obsidian Wiki 배포하기]]도 같은 관점으로 볼 수 있다. Quartz 공식 hosting workflow는 GitHub Actions에서 Node `22`, `npm ci`, `npx quartz build`, Pages artifact 업로드를 명령으로 표현한다. 이런 배포 절차는 콘솔 스크린샷보다 agent가 검토하고 수정하기 쉽다.

[[OpenCode]]의 `AGENTS.md`, skill, `opencode.json`도 agent-native 문서 구조다. 프로젝트의 build/test command, permission, MCP 연결을 파일로 남기면 다음 agent session이 사람의 기억 대신 repo의 실행 가능한 맥락을 읽고 시작할 수 있다.
후속 LLM Wiki 구현 raw는 여기서 더 나아가, 같은 패턴을 `AGENTS.md` 하나로 둘지, project skill로 둘지, typed package로 둘지, full app으로 둘지 선택할 수 있음을 보여 준다. 즉 agent-native 인프라는 단일 포맷이 아니라 단계적 구현 스펙트럼이다.

Karpathy의 [[LLM Wiki 운영 패턴]]도 같은 범주다. raw, wiki, schema를 분리하고 index와 log를 유지하면, 지식 정리 작업 자체가 사람이 폴더를 뒤지며 기억을 더듬는 과정이 아니라 에이전트가 읽고 갱신할 수 있는 텍스트 기반 인프라가 된다.

Hermes Agent의 Google Workspace 연결도 같은 결이다. OAuth client JSON, `setup.py --check`, `--auth-url`, `--auth-code`, `google_api.py calendar list`처럼 클릭 대신 명령과 파일로 외부 서비스를 연결해야 에이전트가 재현 가능한 방식으로 작업을 이어갈 수 있다. 특히 `AUTHENTICATED (partial)`처럼 scope가 빠진 상태를 분리해서 보는 점이 agent-native 문서의 핵심이다.

[[Pi Coding Agent]]는 agent-native 인프라를 "프리미티브를 조립하는 하네스" 방향으로 밀어붙인다. `AGENTS.md`/`CLAUDE.md` context file, JSON/RPC mode, extension, skill, Pi package를 통해 사람이 클릭하는 UI 대신 파일과 프로토콜로 agent workflow를 정의한다. 다만 package와 extension은 시스템 접근 권한으로 실행될 수 있으므로 신뢰 경계를 문서화해야 한다.
이 레이어 구분은 [[에이전트 확장 3계층]]으로 다시 읽을 수 있다.

Sequoia Ascent 2026에서 카파시는 이를 **센서(sensor)와 액추에이터(actuator)**의 관점으로 재프레이밍했다. 센서는 세계의 상태를 디지털 정보로 변환하고, 액추에이터는 에이전트가 무언가를 변경할 수 있게 한다. 미래의 스택은 사람과 조직을 대신해 센서와 액추에이터를 사용하는 에이전트들이다. 구체적인 에이전트 네이티브 인프라 요소로 마크다운 문서, CLI, API, MCP 서버, 구조화된 로그, 기계 판독 가능 스키마, 복사-붙여넣기 가능한 에이전트 명령어, 안전한 권한 부여, 감사 가능한 액션, 헤드리스 설정 플로우를 제시했다.


후속 GitHub raw는 이 인프라가 어떤 공개 작업 표면으로 구현되는지도 보여 준다. local model runtime, self-hosted UI, RAG platform, workflow builder, terminal assistant가 각각 agent-native 인프라의 다른 면을 담당한다. 이를 묶은 허브가 [[AI 오픈소스 작업대]]다.

## 예시

- 나쁜 문서: 콘솔 스크린샷을 보며 버튼을 순서대로 누르게 한다.
- 좋은 문서: 필요한 CLI 명령, 환경 변수 목록, 권한 범위, 검증 명령을 한 블록으로 제공한다.
- Secret 관리: `.env`를 직접 복사하게 하지 않고 `infisical run --env=dev -- npm run dev`처럼 실행 가능한 명령으로 제공한다.
- Agent harness: `pi --mode rpc`나 `pi --mode json`처럼 외부 프로세스가 읽을 수 있는 프로토콜로 에이전트 실행을 연결한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Software 3.0]]
- [[Neural Computer]]
- [[Claude Code 오케스트레이션]]
- [[Infisical 도입 전략]]
- [[API Key 관리 원칙]]
- [[Quartz로 Obsidian Wiki 배포하기]]
- [[OpenCode]]
- [[Pi Coding Agent]]
- [[웹 서버와 배포 기초]]
- [[Meta-Harness]]
- [[LLM Wiki 운영 패턴]]
- [[Context Engineering]]
- [[에이전트 확장 3계층]]
- [[AI 산출물 포맷 결정 트리]]
- [[AI 오픈소스 작업대]]
- [[LLM Wiki 구현 선택지]]
- [[온디바이스 TTS]]
- [[AI 에이전트 런타임 역할 맵]]
- [[Hermes Agent Google Workspace 연결]]

