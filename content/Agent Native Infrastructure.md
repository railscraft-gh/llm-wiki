---aliases:
  - Agent-Native-Infrastructure
- 에이전트 네이티브 인프라
- Agent-native docs
core: true
created: 2026-05-06
sources:
- 안드레_카파시_인터뷰_정리
- 꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!
- sequoia-ascent-2026-karpathy
- API_Key_관리_및_Infisical_도입_가이드
- Quartz-Deploy-Guide
- Quartz-GitHub-Pages-Complete-Guide
- opencode-masterclass-summary
- pi-coding-agent-overview
- arxiv-2603.28052-meta-harness
- 2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가
- Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번
- The Open-Source Agent Toolkit in 2026
- https://infisical.com/docs/documentation/platform/secrets-mgmt/overview
- raw/Quartz-GitHub-Pages-Complete-Guide.md
- raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md
- raw/AI Agent Best Practices. Production-Ready Harness Engineering (2026 Guide)-ko.md
- raw/You’re Using AI to Write Code. You’re Not Using It to Review Code.-ko.md
- raw/Hermes Agent에 구글 연결하는 초보자 매뉴얼.md
- raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
- raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md
- raw/더 빨리 배우고 싶다면 이 노트 정리 방식을 써라.md
- raw/sequoia-ascent-2026-karpathy-ko.md
- raw/Supertonic 3. 99M 파라미터로 31개 언어를 말하는 초경량 TTS 모델.md
- raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md
- raw/Claude-Code-실무활용법-보리스-관점-정리.md
- raw/opencode-masterclass-summary.md
- raw/After Claude Code. 6 Open-Source Tools You Should Know-ko.md
- raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually
  For)-ko.md
- raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md
- raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md
- raw/2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가.md
- raw/AI로_만든_제품이_안_팔리는_이유.md
- raw/Quartz-Deploy-Guide.md
- raw/arxiv-2603.28052-meta-harness.md
- raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md
- raw/안드레_카파시_인터뷰_정리.md
- raw/완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다.md
- raw/99%의 사람보다 더 나은 Harness Engineer를 만드는 법.md
- raw/Agentic AI, design systems & Figma. a practical guide-ko.md
- raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
- raw/How to write a DESIGN.md file Claude can actually use-ko.md
- raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
- raw/Karpathy의 LLM Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다.md
- raw/pi-coding-agent-overview.md
- raw/The Open-Source Agent Toolkit in 2026-ko.md
- raw/Infisical_SSH_헤드리스_인증_가이드.md
- raw/How to Get Into the Top 1% in the Next 12 Months-ko.md
- raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md
- raw/메시징 서버의 스트레스 테스트 노하우와 AI가 덜어 준 부분.md
- raw/API_Key_관리_및_Infisical_도입_가이드.md
- raw/Why senior designers are doing four jobs for one salary in 2026-ko.md
- raw/Hermes Agent Is Cool. Running It Safely 24_7 Is the Real Trick.-ko.md
- raw/GLM-5.1-vs-Kimi-K2.6-Coding-Comparison.md
- raw/보리스_클로드코드_실무_사용법.md
status: evergreen
tags:
- llm
- agent
- infrastructure
type: concept
updated: '2026-06-22'
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

[[Quartz로 Obsidian Wiki 배포하기]]도 같은 관점으로 볼 수 있다. [[Quartz]] 공식 hosting workflow는 GitHub Actions에서 Node `22`, `npm ci`, `npx quartz build`, Pages artifact 업로드를 명령으로 표현한다. 이런 배포 절차는 콘솔 스크린샷보다 agent가 검토하고 수정하기 쉽다.

[[OpenCode]]의 `AGENTS.md`, skill, `opencode.json`도 agent-native 문서 구조다. 프로젝트의 build/test command, permission, MCP 연결을 파일로 남기면 다음 agent session이 사람의 기억 대신 repo의 실행 가능한 맥락을 읽고 시작할 수 있다.
후속 LLM Wiki 구현 raw는 여기서 더 나아가, 같은 패턴을 `AGENTS.md` 하나로 둘지, project skill로 둘지, typed package로 둘지, full app으로 둘지 선택할 수 있음을 보여 준다. 즉 agent-native 인프라는 단일 포맷이 아니라 단계적 구현 스펙트럼이다.

Karpathy의 [[LLM Wiki 운영 패턴]]도 같은 범주다. raw, wiki, schema를 분리하고 index와 log를 유지하면, 지식 정리 작업 자체가 사람이 폴더를 뒤지며 기억을 더듬는 과정이 아니라 에이전트가 읽고 갱신할 수 있는 텍스트 기반 인프라가 된다.

[[Hermes Agent]]의 Google Workspace 연결도 같은 결이다. OAuth client JSON, `setup.py --check`, `--auth-url`, `--auth-code`, `google_api.py calendar list`처럼 클릭 대신 명령과 파일로 외부 서비스를 연결해야 에이전트가 재현 가능한 방식으로 작업을 이어갈 수 있다. 특히 `AUTHENTICATED (partial)`처럼 scope가 빠진 상태를 분리해서 보는 점이 agent-native 문서의 핵심이다.

[[Pi Coding Agent]]는 agent-native 인프라를 "프리미티브를 조립하는 하네스" 방향으로 밀어붙인다. `AGENTS.md`/`CLAUDE.md` context file, JSON/RPC mode, extension, skill, Pi package를 통해 사람이 클릭하는 UI 대신 파일과 프로토콜로 agent workflow를 정의한다. 다만 package와 extension은 시스템 접근 권한으로 실행될 수 있으므로 신뢰 경계를 문서화해야 한다.
이 레이어 구분은 [[에이전트 확장 3계층]]으로 다시 읽을 수 있다.

`raw/The Open-Source Agent Toolkit in 2026-ko.md`는 이 레이어 구분을 더 실전적인 선택지로 풀어 준다. orchestration/runtime control, memory/state, protocols/tools, browsers/computer use, coding agents/sandboxes, evals/observability, models/inference라는 7개 층은 "어떤 도구를 넣을까"가 아니라 "어느 층이 비어 있나"를 먼저 묻게 만든다. 이 관점이 있어야 agent-native 문서, CLI, API, sandbox, 브라우저 제어가 한 묶음으로 보인다.

[[Sequoia Ascent 2026]]에서 카파시는 이를 **센서(sensor)와 액추에이터(actuator)**의 관점으로 재프레이밍했다. 센서는 세계의 상태를 디지털 정보로 변환하고, 액추에이터는 에이전트가 무언가를 변경할 수 있게 한다. 미래의 스택은 사람과 조직을 대표하여 센서와 액추에이터를 사용하는 에이전트들이 네트워킹된 구조다.
에이전트가 작동하기 편리한 **에이전트 네이티브 표면(Agent-native Surfaces)의 10대 요구사항**은 다음과 같다.
1. **마크다운 문서 (Markdown docs)**: 복사해 즉시 이식 가능한 텍스트 지침.
2. **CLI**: 에이전트가 바로 쉘을 통해 트리거 가능한 명령줄.
3. **API**: 클릭이 배제된 직접 호출 인터페이스.
4. **MCP 서버 ([[Model Context Protocol]])**: 에이전트에 로컬 디스크 및 컨텍스트를 서빙하는 표준 통신 스펙.
5. **구조화된 로그 (Structured logs)**: 에러 분석이 쉬운 JSON 기반 로그 출력.
6. **기계 판독 가능 스키마 (Machine-readable schemas)**: Pydantic 등 규격화된 타입 보장 계약.
7. **복사-붙여넣기 가능한 에이전트 명령어**: 에이전트에 입력하기 쉬운 단발성 매크로 코드 조각.
8. **안전한 권한 부여 (Secure auth)**: API 키 수동 타이핑 대신 헤드리스 환경용 위임 인증.
9. **감사 가능한 액션 (Auditable actions)**: 에이전트의 파괴적 행위를 로깅하고 롤백할 수 있는 감시 체계.
10. **헤드리스 설정 플로우 (Headless setup flows)**: UI 렌더링이 필요 없는 오프라인 인스톨 환경.

이러한 인프라가 갖춰질 때 소프트웨어 자체의 본질적인 전도(전통적 소프트웨어 스택의 소멸)가 일어난다. 카파시가 제시한 **MenuGen 사례**가 대표적이다. 전통적인 웹 앱은 프론트엔드, API, 이미지 생성기, 배포, 결제 모듈이 겹겹이 얽힌 복잡한 비계(Scaffolding)였으나, 소프트웨어 3.0에서는 신경망(LLM)이 메뉴 사진이라는 입력 미디어를 요리 사진이라는 출력 미디어로 직접 변환(Pixel-to-pixel)해 버린다. 즉, **인프라가 에이전트 네이티브화될수록 전통적 소프트웨어 앱의 상당 부분은 존재하지 않아도 무방해진다.**

이에 따라 **희소성의 패러다임이 이동**한다.
- *덜 희소해지는 것 (Commodity)*: 코드 생성, API 명세 암기, 보일러플레이트 작성, 반복적 설정, 단순 데이터 변환.
- *더 희소해지는 것 (Moat)*: 시스템에 대한 깊은 이해, 아키텍처적 취향(Taste), 평가 및 검증 설계, 보안 경계 관리, 에이전트 오케스트레이션, 도메인 특화 피드백 루프 정의.


후속 GitHub raw는 이 인프라가 어떤 공개 작업 표면으로 구현되는지도 보여 준다. local model runtime, self-hosted UI, RAG platform, workflow builder, terminal assistant가 각각 agent-native 인프라의 다른 면을 담당한다. 이를 묶은 허브가 [[AI 오픈소스 작업대]]다.

## 예시

- 나쁜 문서: 콘솔 스크린샷을 보며 버튼을 순서대로 누르게 한다.
- 좋은 문서: 필요한 CLI 명령, 환경 변수 목록, 권한 범위, 검증 명령을 한 블록으로 제공한다.
- Secret 관리: `.env`를 직접 복사하게 하지 않고 `infisical run --env=dev -- npm run dev`처럼 실행 가능한 명령으로 제공한다.
- Agent harness: `pi --mode rpc`나 `pi --mode json`처럼 외부 프로세스가 읽을 수 있는 프로토콜로 에이전트 실행을 연결한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[로컬 LLM 30분 실전 가이드]]
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

