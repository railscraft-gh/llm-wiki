---
core: false
created: 2026-05-26
sources:
  - The Complete (Honest) Guide to OpenClaw
  - I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.
  - Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법
  - raw/After Claude Code. 6 Open-Source Tools You Should Know-ko.md
  - raw/The Open-Source Agent Toolkit in 2026-ko.md
  - raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually
  - raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md
  - raw/How to Get Into the Top 1% in the Next 12 Months-ko.md
  - raw/Agentic AI, design systems & Figma. a practical guide-ko.md
  - raw/Code Is Not Cheap. How to Multiply Your AI’s Output With Software Fundamentals.md
  - raw/The most important Design System in 2026 that designers missed was built by
  - raw/AI Agent Best Practices. Production-Ready Harness Engineering (2026 Guide)-ko.md
  - raw/You’re Using AI to Write Code. You’re Not Using It to Review Code.-ko.md
  - raw/Why senior designers are doing four jobs for one salary in 2026-ko.md
  - raw/Good Design Doesn’t Happen By Default.md
  - raw/Hermes Agent Is Cool. Running It Safely 24_7 Is the Real Trick.-ko.md
  - raw/How to write a DESIGN.md file Claude can actually use-ko.md
  - raw/From faster pencil to AI Experience Architect. a designer’s path.md
  - raw/The Complete (Honest) Guide to OpenClaw.md
status: evergreen
tags:
  - agent
  - open-source
  - tool
  - self-hosted
type: tool
updated: 2026-07-10
---

# OpenClaw

## 한 줄 정의
OpenClaw는 여러 메시징 채널과 LLM을 연결해 shell, 파일, 브라우저, API 작업을 실제로 수행하게 하는 self-hosted personal agent runtime이다.

## 핵심 요지
- 핵심은 reasoning demo가 아니라 "내 환경에서 실제 행동을 수행하는 agent"라는 점이다.
- 구조는 surprisingly 단순하다. 단일 Gateway process가 channel 연결, 세션 라우팅, tool 실행, markdown memory를 관리한다.
- 확장 구조는 tool, SKILL.md, plugin 세 층으로 나뉘며, 모델 제공자는 25개+로 바꿔 끼울 수 있다.
- 동시에 보안 표면도 크다. 원문은 skill marketplace, WebSocket 노출, 원격 코드 실행 경로 가능성을 강하게 경고한다.
- Hetzner VM(40GB 디스크) 실무 환경 기준, OpenClaw는 약 2.1GB의 디스크 공간을 점유하며, n8n 및 봇들과 병렬 운용 시 자원 관리가 중요해진다. (출처: raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md)
- 컨텍스트 로스로 불리는 'Clawd's amnesia' 현상으로 인해 인스턴스 리셋 시 대화 맥락이 초기화되는 한계가 존재한다. (출처: raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md)
- 2025년 11월 Peter Steinberger가 'Clawdbot'이라는 주말 프로젝트로 시작하여 5개월 만에 355k+ GitHub Stars, 320만 MAU, 50만+ 인스턴스를 확보하며 2026년 가장 폭발적으로 성장한 오픈소스 에이전트 런타임이다.
- 포트 18789에서 WebSocket 서버를 돌려 모든 채널 연동, 세션 라우팅, 메모리 관리를 단일 TypeScript 프로세스(Gateway)로 수행하는 극도로 단순한 모놀리식 아키텍처를 취한다.
- 공식 Awesome 리스트(awesome-openclaw-skills) 기준 5,400개 이상의 검증된 Skill(SKILL.md) 마켓플레이스를 지니며, NVIDIA NemoClaw(Hardened Sandbox) 및 NEAR AI IronClaw(Rust 재구현) 등 대규모 보완 생태계를 형성하고 있다.

## 상세

원문 기준 OpenClaw는 WhatsApp, Telegram, Slack, Discord 등 50개+ 채널에서 들어온 요청을 하나의 Gateway가 받아 chosen LLM으로 보내고, 다시 tool 실행으로 연결한다. memory는 vector DB보다 markdown file 중심이며, `SOUL.md`가 행동 규칙을, `MEMORY.md`가 장기 맥락을 담당한다. 이 조합은 [[에이전트 확장 3계층]]에서 말하는 tool·skill·외부 연결을 제품 수준에서 묶은 사례다.

중요한 점은 capability만이 아니다. 보안이 같이 따라온다. 원문은 악성 skill, 과도한 권한, localhost가 아닌 공개 바인딩, prompt injection 내성 부족을 핵심 리스크로 본다. 따라서 OpenClaw는 강력한 runtime이지만, "항상 켜져 있고 실제 권한을 가진 agent"를 어떻게 격리할지 함께 설계해야 한다는 교훈을 준다.

비교 raw를 보면 이 판단은 더 선명해진다. OpenClaw와 Hermes를 같은 서버에 올려 두고도 결국 하나를 지운 이유는 기능 수보다 24/7 운영의 안전성과 부담이 더 중요했기 때문이다. 재미있는 데모보다 오래 켜 둘 수 있는 runtime이 먼저라는 결론이다.

[[Hermes Agent]]와 비교할 때, OpenClaw는 다중 에이전트 조정(Fleet 지휘관)이나 더 많은 플러그인, 브라우저 자동화 측면에서 우위에 있으며 300k+ 스타의 대규모 생태계를 자랑한다. 반면, Hermes Agent는 개인 동반자(Personal Advisor)로서의 자동화된 기술 학습, 3층 구조의 정교한 메모리, 가벼운 실행 리소스(20MB 대 200MB+) 면에서 유리하다 (출처: Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법). 두 도구는 각각의 특성에 맞춰 상호 공존하며 플릿 지휘관(OpenClaw)과 개인 고문(Hermes)의 역할을 분담할 수 있다.

### 실무 환경 리소스 및 제약 (Hetzner VM 40GB)
- **디스크 공간**: 기본 self-hosted 설치 시 약 2.1GB의 디스크를 사용하므로, 40GB VPS처럼 린(lean)한 환경에서는 타 서비스(n8n, 봇 등)와의 자원 분배가 필요함.
- **컨텍스트 건망증 (Clawd's Amnesia)**: OpenClaw는 잦은 리셋 시 이전 맥락을 기억하지 못하고 처음부터 다시 설정해야 하는 컨텍스트 로스 현상이 발생함.

### OpenClaw 아키텍처와 세 계층 확장 시스템

OpenClaw의 아키텍처는 복잡한 Planner Tree나 Agent Hierarchy를 명시적으로 거부하고, 단일 TypeScript Gateway 프로세스(Port 18789)로 WebSocket 요청을 관리하는 심플한 설계를 지향한다.

- **Gateway**: WebSocket 연결, 채널 메시지 수신, 세션 라우팅, 도구 실행을 하나의 프로세스에서 전부 처리한다.
- **세 계층 확장 시스템**:
  - **Tools**: 파일 읽기/쓰기, 쉘 명령어 실행, 브라우저 스크래핑 등 저수준의 동작을 수행하는 TypeScript 함수들이다.
  - **Skills**: JSON/Python 대신 마크다운 문서 `SKILL.md`를 통해 에이전트의 트리거 조건(예: `cron 0 7 * * *`)과 단계적 행동 지침을 정의하는 선언형 계층이다. LLM이 마크다운 문서를 직접 해석하여 실행한다.
  - **Plugins**: npm 패키지 형태로 복잡한 전역 상태, 외부 종속성, 무거운 로직을 처리하는 공유 라이브러리다.
- **메모리(Memory) 구조**: 복잡한 Vector DB나 임베딩 없이, 로컬 Plain Text 마크다운 파일로만 대화 기록을 관리한다 (`~/.openclaw/workspace/memory/YYYY-MM-DD.md` 및 장기 기억인 `MEMORY.md` 활용).
- **설정 파일**: 에이전트 성격과 경계를 정의하는 `SOUL.md`(버전 제어 권장)와 대화 흐름상 장기 맥락을 수집하는 `MEMORY.md` 두 가지로 핵심 성격과 지식을 구분한다.

### 생태계 및 학술 연구 성과
- **OpenClaw-RL**: 프린스턴 연구팀의 RL 프레임워크(arXiv 2603.10165)로, Hindsight-Guided On-Policy Distillation을 적용해 대화 8~36회만에 에이전트 개인화 점수를 0.17에서 0.76으로 끌어올렸다.
- **Lobster**: 복잡한 에이전트 파이프라인 매크로 작성을 위해 제작된 공식 로컬 지향 워크플로우 쉘 스크립트 언어다.
- **사회적 행동 연구**: Moltbook(에이전트 전용 네트워크)에서 인간 개입 없이 AI 에이전트끼리 자치(emergent governance)를 발전시켰을 때, 댓글 Gini 계수가 인간 네트워크와 유사한 0.889에 도달함이 관측되었다 (arXiv 2602.18832).

### 보안 취약점과 권장 가이드라인
- **보안 검증 (arXiv 2603.10387)**: 47가지 적대적 공격 시나리오(adversarial scenarios) 테스트 결과 기본 방어율이 17%에 불과했다. 즉, 83%의 공격이 sandbox 외부로 우회할 수 있었다.
- **CVE-2026-25253 (ClawJacked, CVSS 8.8)**: 외부 웹사이트가 로컬 WebSocket 스트림을 탈취해 시스템 원격 코드 실행(RCE)이 가능한 취약점이 존재했으나 v2026.2.25 버전에서 수정되었다. 그럼에도 SecurityScorecard 조사 기준 여전히 노출된 인스턴스 4만 개 중 35.4%가 취약 가능성 상태에 놓여 있다.
- **Cisco 공급망 분석**: ClawHub 마켓플레이스에 업로드된 44,000+개 Skill 중 약 17%가 잠재적 악성 코드를 담고 있어 공급망 보안 리스크가 매우 크다.
- **배포 가이드라인**: 반드시 localhost 루프백으로 바인딩하며, `openclaw security audit --deep` 명령어 기반의 정기 감사, 격리된 가상 환경(NVIDIA NemoClaw 등) 또는 전용 Mac Mini M4 하드웨어(대기전력 4~8W) 단독 배포를 강력 권고한다.

### 실무 환경 리소스 및 제약 (Hetzner VM 40GB)
- **디스크 공간**: 기본 self-hosted 설치 시 약 2.1GB의 디스크를 사용하므로, 40GB VPS처럼 린(lean)한 환경에서는 타 서비스(n8n, 봇 등)와의 자원 분배가 필요함.
- **컨텍스트 건망증 (Clawd's Amnesia)**: OpenClaw는 잦은 리셋 시 이전 맥락을 기억하지 못하고 처음부터 다시 설정해야 하는 컨텍스트 로스 현상이 발생함.

### OpenClaw 아키텍처와 세 계층 확장 시스템

OpenClaw의 아키텍처는 복잡한 Planner Tree나 Agent Hierarchy를 명시적으로 거부하고, 단일 TypeScript Gateway 프로세스(Port 18789)로 WebSocket 요청을 관리하는 심플한 설계를 지향한다.

- **Gateway**: WebSocket 연결, 채널 메시지 수신, 세션 라우팅, 도구 실행을 하나의 프로세스에서 전부 처리한다.
- **세 계층 확장 시스템**:
  - **Tools**: 파일 읽기/쓰기, 쉘 명령어 실행, 브라우저 스크래핑 등 저수준의 동작을 수행하는 TypeScript 함수들이다.
  - **Skills**: JSON/Python 대신 마크다운 문서 `SKILL.md`를 통해 에이전트의 트리거 조건(예: `cron 0 7 * * *`)과 단계적 행동 지침을 정의하는 선언형 계층이다. LLM이 마크다운 문서를 직접 해석하여 실행한다.
  - **Plugins**: npm 패키지 형태로 복잡한 전역 상태, 외부 종속성, 무거운 로직을 처리하는 공유 라이브러리다.
- **메모리(Memory) 구조**: 복잡한 Vector DB나 임베딩 없이, 로컬 Plain Text 마크다운 파일로만 대화 기록을 관리한다 (`~/.openclaw/workspace/memory/YYYY-MM-DD.md` 및 장기 기억인 `MEMORY.md` 활용).
- **설정 파일**: 에이전트 성격과 경계를 정의하는 `SOUL.md`(버전 제어 권장)와 대화 흐름상 장기 맥락을 수집하는 `MEMORY.md` 두 가지로 핵심 성격과 지식을 구분한다.

### 생태계 및 학술 연구 성과
- **OpenClaw-RL**: 프린스턴 연구팀의 RL 프레임워크(arXiv 2603.10165)로, Hindsight-Guided On-Policy Distillation을 적용해 대화 8~36회만에 에이전트 개인화 점수를 0.17에서 0.76으로 끌어올렸다.
- **Lobster**: 복잡한 에이전트 파이프라인 매크로 작성을 위해 제작된 공식 로컬 지향 워크플로우 쉘 스크립트 언어다.
- **사회적 행동 연구**: Moltbook(에이전트 전용 네트워크)에서 인간 개입 없이 AI 에이전트끼리 자치(emergent governance)를 발전시켰을 때, 댓글 Gini 계수가 인간 네트워크와 유사한 0.889에 도달함이 관측되었다 (arXiv 2602.18832).

### 보안 취약점과 권장 가이드라인
- **보안 검증 (arXiv 2603.10387)**: 47가지 적대적 공격 시나리오(adversarial scenarios) 테스트 결과 기본 방어율이 17%에 불과했다. 즉, 83%의 공격이 sandbox 외부로 우회할 수 있었다.
- **CVE-2026-25253 (ClawJacked, CVSS 8.8)**: 외부 웹사이트가 로컬 WebSocket 스트림을 탈취해 시스템 원격 코드 실행(RCE)이 가능한 취약점이 존재했으나 v2026.2.25 버전에서 수정되었다. 그럼에도 SecurityScorecard 조사 기준 여전히 노출된 인스턴스 4만 개 중 35.4%가 취약 가능성 상태에 놓여 있다.
- **Cisco 공급망 분석**: ClawHub 마켓플레이스에 업로드된 44,000+개 Skill 중 약 17%가 잠재적 악성 코드를 담고 있어 공급망 보안 리스크가 매우 크다.
- **배포 가이드라인**: 반드시 localhost 루프백으로 바인딩하며, `openclaw security audit --deep` 명령어 기반의 정기 감사, 격리된 가상 환경(NVIDIA NemoClaw 등) 또는 전용 Mac Mini M4 하드웨어(대기전력 4~8W) 단독 배포를 강력 권고한다.

### 실무 환경 리소스 및 제약 (Hetzner VM 40GB)
- **디스크 공간**: 기본 self-hosted 설치 시 약 2.1GB의 디스크를 사용하므로, 40GB VPS처럼 린(lean)한 환경에서는 타 서비스(n8n, 봇 등)와의 자원 분배가 필요함.
- **컨텍스트 건망증 (Clawd's Amnesia)**: OpenClaw는 잦은 리셋 시 이전 맥락을 기억하지 못하고 처음부터 다시 설정해야 하는 컨텍스트 로스 현상이 발생함.

### OpenClaw 아키텍처와 세 계층 확장 시스템

OpenClaw의 아키텍처는 복잡한 Planner Tree나 Agent Hierarchy를 명시적으로 거부하고, 단일 TypeScript Gateway 프로세스(Port 18789)로 WebSocket 요청을 관리하는 심플한 설계를 지향한다.

- **Gateway**: WebSocket 연결, 채널 메시지 수신, 세션 라우팅, 도구 실행을 하나의 프로세스에서 전부 처리한다.
- **세 계층 확장 시스템**:
  - **Tools**: 파일 읽기/쓰기, 쉘 명령어 실행, 브라우저 스크래핑 등 저수준의 동작을 수행하는 TypeScript 함수들이다.
  - **Skills**: JSON/Python 대신 마크다운 문서 `SKILL.md`를 통해 에이전트의 트리거 조건(예: `cron 0 7 * * *`)과 단계적 행동 지침을 정의하는 선언형 계층이다. LLM이 마크다운 문서를 직접 해석하여 실행한다.
  - **Plugins**: npm 패키지 형태로 복잡한 전역 상태, 외부 종속성, 무거운 로직을 처리하는 공유 라이브러리다.
- **메모리(Memory) 구조**: 복잡한 Vector DB나 임베딩 없이, 로컬 Plain Text 마크다운 파일로만 대화 기록을 관리한다 (`~/.openclaw/workspace/memory/YYYY-MM-DD.md` 및 장기 기억인 `MEMORY.md` 활용).
- **설정 파일**: 에이전트 성격과 경계를 정의하는 `SOUL.md`(버전 제어 권장)와 대화 흐름상 장기 맥락을 수집하는 `MEMORY.md` 두 가지로 핵심 성격과 지식을 구분한다.

### 생태계 및 학술 연구 성과
- **OpenClaw-RL**: 프린스턴 연구팀의 RL 프레임워크(arXiv 2603.10165)로, Hindsight-Guided On-Policy Distillation을 적용해 대화 8~36회만에 에이전트 개인화 점수를 0.17에서 0.76으로 끌어올렸다.
- **Lobster**: 복잡한 에이전트 파이프라인 매크로 작성을 위해 제작된 공식 로컬 지향 워크플로우 쉘 스크립트 언어다.
- **사회적 행동 연구**: Moltbook(에이전트 전용 네트워크)에서 인간 개입 없이 AI 에이전트끼리 자치(emergent governance)를 발전시켰을 때, 댓글 Gini 계수가 인간 네트워크와 유사한 0.889에 도달함이 관측되었다 (arXiv 2602.18832).

### 보안 취약점과 권장 가이드라인
- **보안 검증 (arXiv 2603.10387)**: 47가지 적대적 공격 시나리오(adversarial scenarios) 테스트 결과 기본 방어율이 17%에 불과했다. 즉, 83%의 공격이 sandbox 외부로 우회할 수 있었다.
- **CVE-2026-25253 (ClawJacked, CVSS 8.8)**: 외부 웹사이트가 로컬 WebSocket 스트림을 탈취해 시스템 원격 코드 실행(RCE)이 가능한 취약점이 존재했으나 v2026.2.25 버전에서 수정되었다. 그럼에도 SecurityScorecard 조사 기준 여전히 노출된 인스턴스 4만 개 중 35.4%가 취약 가능성 상태에 놓여 있다.
- **Cisco 공급망 분석**: ClawHub 마켓플레이스에 업로드된 44,000+개 Skill 중 약 17%가 잠재적 악성 코드를 담고 있어 공급망 보안 리스크가 매우 크다.
- **배포 가이드라인**: 반드시 localhost 루프백으로 바인딩하며, `openclaw security audit --deep` 명령어 기반의 정기 감사, 격리된 가상 환경(NVIDIA NemoClaw 등) 또는 전용 Mac Mini M4 하드웨어(대기전력 4~8W) 단독 배포를 강력 권고한다.

## 예시

- 아침 7시에 unread email, calendar conflict, GitHub PR, 날씨를 확인해 Telegram으로 요약을 보낸다.
- WhatsApp으로 보낸 요청이 내 Mac Mini의 shell command 실행이나 브라우저 작업으로 이어진다.
- `SOUL.md`에 "~/projects/ 밖 system file 수정 금지" 같은 행동 경계를 넣어 실행 범위를 제한한다.


## 이 노트를 읽어야 하는 상황

- terminal/CLI agent보다 더 넓게, 메시징 채널과 background automation까지 붙은 personal agent runtime을 찾을 때
- [[에이전트 확장 3계층]]을 실제 제품 수준 구현체로 보고 싶을 때
- self-hosted agent의 capability와 security trade-off를 함께 이해해야 할 때

## 비슷한 노트와의 차이

- [[AI 오픈소스 작업대]]가 생태계 지도라면, 이 노트는 OpenClaw 하나의 구조와 위험 표면에 집중한다.
- [[에이전트 확장 3계층]]이 개념 프레임이라면, 이 노트는 tool·skill·runtime이 한 제품에서 어떻게 결합되는지 보여주는 사례다.


## 채택 전에 볼 질문

- 이 runtime이 실제로 가져가는 권한 범위는 어디까지인가.
- 메시징 채널, shell, 브라우저, 파일 접근 중 무엇을 항상 켜 둘 것인가.
- `SOUL.md` 같은 행동 규칙만으로 막기 어려운 보안 경계는 무엇인가.
- 개인 assistant 실험인지, 팀/조직 운영용 runtime인지에 따라 review gate를 어떻게 둘 것인가.

이 질문에 답하지 못한 상태라면, OpenClaw는 "재미있는 데모"를 넘어 "과한 권한을 가진 자동화"가 될 수 있다.

### 커뮤니티 운용 동향 (Reddit 분석)
- **Hermes 마이그레이션**: 커뮤니티 분석 결과 약 25%의 사용자가 더 안정적이고 메모리 학습이 뛰어난 Hermes Agent로 마이그레이션함.
- **하이브리드 병렬 운용**: 약 25%의 사용자는 OpenClaw(인프라 연동 및 라우팅 전담)와 Hermes Agent(실행 및 메모리 관리 전담)를 한 서버에 띄워 병렬 운영하는 하이브리드 패턴을 채택함.

- **설치 및 대몬 기동**:
  ```bash
  npm install -g openclaw@latest && openclaw onboard --install-daemon
  ```
  위 명령어로 8MB 크기의 경량 코어를 설치하고, macOS(launchd) 또는 Linux(systemd) 대몬으로 등록하여 포트 18789에서 상시 가동한다.

### 커뮤니티 운용 동향 (Reddit 분석)
- **Hermes 마이그레이션**: 커뮤니티 분석 결과 약 25%의 사용자가 더 안정적이고 메모리 학습이 뛰어난 Hermes Agent로 마이그레이션함.
- **하이브리드 병렬 운용**: 약 25%의 사용자는 OpenClaw(인프라 연동 및 라우팅 전담)와 Hermes Agent(실행 및 메모리 관리 전담)를 한 서버에 띄워 병렬 운영하는 하이브리드 패턴을 채택함.

- **설치 및 대몬 기동**:
  ```bash
  npm install -g openclaw@latest && openclaw onboard --install-daemon
  ```
  위 명령어로 8MB 크기의 경량 코어를 설치하고, macOS(launchd) 또는 Linux(systemd) 대몬으로 등록하여 포트 18789에서 상시 가동한다.

### 커뮤니티 운용 동향 (Reddit 분석)
- **Hermes 마이그레이션**: 커뮤니티 분석 결과 약 25%의 사용자가 더 안정적이고 메모리 학습이 뛰어난 Hermes Agent로 마이그레이션함.
- **하이브리드 병렬 운용**: 약 25%의 사용자는 OpenClaw(인프라 연동 및 라우팅 전담)와 Hermes Agent(실행 및 메모리 관리 전담)를 한 서버에 띄워 병렬 운영하는 하이브리드 패턴을 채택함.

- **설치 및 대몬 기동**:
  ```bash
  npm install -g openclaw@latest && openclaw onboard --install-daemon
  ```
  위 명령어로 8MB 크기의 경량 코어를 설치하고, macOS(launchd) 또는 Linux(systemd) 대몬으로 등록하여 포트 18789에서 상시 가동한다.

## 충돌
- 2026-05-26 확인: 스타 수, 활성 사용자 수, 보안 advisories, 배포 비율은 변동성이 큰 시점 정보다. 실제 도입 전 공식 docs와 최신 보안 공지를 다시 확인해야 한다.

## 관련 노트
- [[AI 오픈소스 작업대]]
- [[에이전트 확장 3계층]]
- [[Agent Native Infrastructure]]
- [[AI 코딩 에이전트 검증 전략]]
- [[AI 기본값 구현체]]
- [[AI 기본값 수용과 오버라이드 전략]]
- [[AI 에이전트 런타임 역할 맵]]
- [[Hermes Agent]]
- [[Hermes Agent 24-7 운영]]
- [[Model Context Protocol]]
- [[Agent Harness]]

