---
aliases:
- Pi
- 라즈베리 파이 에이전트 하네스
- Pi-Coding-Agent
core: false
created: 2026-05-08
sources:
- pi-coding-agent-overview
- raw/노트북을 망가뜨리지 않으려고 라즈베리 파이에서 AI 에이전트 하네스를 구동한 후기.md
- https://pi.dev/
- https://pi.dev/docs/latest
- https://pi.dev/docs/latest/quickstart
- https://pi.dev/docs/latest/usage
- https://pi.dev/docs/latest/providers
- https://pi.dev/docs/latest/packages
- raw/Quartz-GitHub-Pages-Complete-Guide.md
- raw/지난번 이런 일이 있었을 때, 수많은 평범한 사람들이 백만장자가 되었다.md
- raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md
- raw/지식 그래프, 진정한 게임 체인저... 그러나 구축과 유지가 극도로 어려운 이유.md
- 'raw/밑바닥부터 만드는 LLM 메모리 #3. 벡터 메모리.md'
- 'raw/밑바닥부터 만드는 LLM 메모리 #5. 계층형 자체 관리 메모리.md'
- 'raw/밑바닥부터 만드는 LLM 메모리 #4. 지식 그래프 메모리.md'
- raw/Claude Code 프로젝트 효율을 극대화하는 MEMORY.md 가이드.md
- raw/AI와 오픈소스로 300개 이상의 팟캐스트를 RPG 게임으로 만든 이야기 - LennyRPG 8시간 개발기.md
- raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md
- raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md
- raw/AI 개발자가 반드시 알아야 할 9가지 RAG 아키텍처 - 실무 예제로 배우는 완전 가이드.md
- raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 TurboQuant, 애플 실리콘 상륙.md
- raw/1인 개발자와 소규모 팀을 위한 주말 완성 디자인 시스템 구축법.md
- 'raw/애플 실리콘을 위한 로컬 AI 스택: 한 차원 진화한 성능과 최적의 구축 가이드.md'
- raw/How to write a DESIGN.md file Claude can actually use-ko.md
- raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
- 'raw/밑바닥부터 만드는 LLM 메모리 #1. 슬라이딩 윈도우 버퍼.md'
- raw/pi-coding-agent-overview.md
- raw/우리가 피그마 없이 제품을 배포하는 방법.md
- raw/2026년에 실제로 효과가 있는 나의 AI 디자인 워크플로우.md
- raw/DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko.md
- raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md
- raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
- 'raw/밑바닥부터 만드는 LLM 메모리 #2. 자동 요약 버퍼.md'
status: evergreen
tags:
- llm
- agent
- ai-coding
- raspberry-pi
- sandbox
type: tool
updated: 2026-07-10
---
# Pi Coding Agent

## 한 줄 정의
Pi Coding Agent 및 라즈베리 파이 기반 에이전트 하네스는 호스트 환경의 파괴적 훼손을 방지하기 위해, 저전력 항시 켜져 있는 라즈베리 파이를 물리적 샌드박스로 삼아 Claude Code, [[OpenClaw]], Hermes 등 에이전트 CLI를 격리 구동하는 하드웨어-에이전트 조율 인프라다.

## 핵심 요지
- **물리적 격리(Isolation)의 필요성**: 자율 에이전트에 터미널 액세스, 브라우저 자동화, 파일 제어권 등을 주면 잘못된 명령을 초고속으로 연쇄 실행하는 리스크가 생긴다. 맥 미니나 개인용 노트북 대신 라즈베리 파이를 단독 샌드박스로 격리 구동하면 리스크를 물리적으로 분리할 수 있다.
- **Obsidian 볼트와 Claude CLI의 결합**: 마크다운 파일들의 묶음인 옵시디언(Obsidian) 폴더 구조를 에이전트에 연동해, 광범위한 자율 권한 부여 없이 지식 베이스를 안전하게 탐색, 정리, 요약하는 '세컨드 브레인 오케스트레이션' 환경을 구축한다.
- **에이전트 런타임 비교**:
  - *Claude Code*: 단순하고 이해하기 쉬운 CLI 작동 및 컨텍스트 제어가 강점이다.
  - *[[OpenClaw]]*: 네트워크 셋업은 쉽지만 하트비트/크론 구성 등 장기 운영 시 일관성 유지가 어렵고, 오동작의 연쇄적 파급을 막기 위해 옵시디언 파일로 운영 프로세스를 제한해야 하는 등 까다롭다.
  - *[[Hermes Agent]]*: [[OpenClaw]] 대비 훨씬 성숙하고 장기 실행(24/7)에서 안정적인 디지털 비서 대안이다.

## 상세

### 1. 라즈베리 파이 물리 샌드박스 셋업
개인용 노트북이나 고비용 맥 미니를 대체하여 저비용, 저전력, 24시간 상시 가동 가능한 라즈베리 파이 4를 격리 샌드박스로 사용한다.
- **유지관리 최적화**: 프로젝트마다 개별 microSD 카드를 생성하고 라즈비안(OS) 설치 후 `sudo apt update && sudo apt upgrade`를 거친 뒤 쉘 스크립트 한 줄로 하네스 셋업을 완료한다. 
- **리셋 가치**: 에이전트가 파일 시스템을 심각하게 망가뜨리거나 잘못된 코드를 다량 배포하더라도, SD 카드 포맷만으로 즉각 물리 복구가 가능하다.

### 2. 세컨드 브레인(Obsidian)과의 로컬 통합
- 셸 액세스 및 MCP([[Model Context Protocol]]) 통합을 지원하는 Claude CLI를 통해 옵시디언 마크다운 볼트 폴더를 에이전트에 연동한다.
- `CLAUDE.md` 지침 또는 로컬 스킬을 사용하면, 에이전트가 전체 하드웨어 제어 권한을 획득하지 않고도 볼트 디렉터리 바운더리 내에서 사고를 정리하고 연결하는 것이 가능해져 보안 리스크를 통제할 수 있다.

### 3. [[OpenClaw]] 대 Hermes 하네스 비교
- **[[OpenClaw]]**: 며칠 이상 장기 실행(Long-horizon tasks)할 경우, 하트비트(Heartbeat) 데몬 작동과 크론 스케줄링 간의 불일치로 인하여 동작 일관성이 쉽게 파손된다.
- **Hermes (Nous Research)**: [[OpenClaw]]가 주던 장기 런타임 오류 및 혼란을 극복하고, 라즈베리 파이에서 구동 시 사이버 보안 검사 보고 등 장기 배치 작업을 안정적으로 수행한다.

### 1. 단축키 및 에디터 인터랙션
- **파일 및 경로 참조**: 에디터창에서 `@`를 입력하면 프로젝트 파일의 퍼지 검색이 실행되며, `Tab` 키로 경로를 자동완성한다.
- **셸 명령 실행**: 에디터 내에서 `!command`는 출력을 모델에 전송하고, `!!command`는 모델 전송 없이 셸에서만 백그라운드로 실행한다.
- **모델 순환 및 레벨 제어**: Ctrl+L로 전체 모델 선택기를 열고, Ctrl+P로 설정된 스코프 모델들을 순환한다. Shift+Tab으로 thinking 레벨(off, minimal, low, medium, high, xhigh)을 실시간 토글한다.
- **메시지 큐(Message Queue)**: 에이전트가 연산 중일 때 `Enter`를 누르면 현재 턴 종료 후 전달될 steering 메시지가, `Alt+Enter`를 누르면 작업이 완전히 종료된 후 전달될 follow-up 메시지가 적재된다.

## 예시

- **RPi SD 카드 초기화 및 CLI 샌드박스 환경 기동**:
  ```bash
  # SD 카드 포맷 후 초기 OS 셋업 완료 상태에서
  sudo apt-get update && sudo apt-get upgrade -y
  
  # 에이전트 패키지 설치
  npm install -g @earendil-works/pi-coding-agent
  
  # 환경변수 로드 후 읽기 전용으로 가볍게 시작
  pi --tools read,grep,find,ls --no-context-files -p "옵시디언 /sources 폴더 내 지식 파일 요약 요청"
  ```
- **Hermes 에이전트 백엔드 오프라인 백그라운드 기동**:
  라즈베리 파이 내에서 `tmux`를 사용하여 Hermes CLI를 분리 구동하고, 백그라운드 24시간 사이버 보안 스캔 모니터링을 위임한다.

### 2. 패키지 관리 및 CLI 실행 예시
Pi는 확장성 보장을 위해 npm이나 git 소스 기반의 패키지 설치 및 업데이트를 지원한다.
```bash
# Pi 패키지 관리
pi install npm:@foo/pi-tools
pi update --self

# 도구를 제한하고 context 파일 로드를 생략해 기동
pi --tools read,grep,find,ls --no-context-files
```

## 충돌
- **설치 네임스페이스 혼선**:
  개발자 Mario Zechner가 프로젝트를 주도하였으나, 공식 배포처 및 NPM 패키지 네임스페이스는 Earendil Works 조직 명의인 `@earendil-works/pi-coding-agent`이다. 개인 개발자명인 `@mariozechner/*`로 설치를 시도하면 패키지를 찾을 수 없으므로 주의해야 한다.
- **에이전트 권한 격리 수준**: 
  클라우드 환경이나 로컬 Docker 격리도 유효하지만, 저전력 무소음 하드웨어 격리를 원하는 사용자는 Raspberry Pi 하드웨어 샌드박스 구성이 클라우드 API 호출 요금 절감과 오프라인 프라이버시 유지 측면에서 이상적인 결합임을 실험을 통해 실증하였다.

## 관련 노트
- [[OpenCode]]
- [[Claude.md 운영 원칙]]
- [[Plan Mode 기반 AI 작업]]
- [[병렬 에이전트 세션 운영]]
- [[Claude Code 권한 설계]]
- [[Agent Native Infrastructure]]
- [[Hermes Agent]]
- [[OpenClaw]]

## 출처
- pi-coding-agent-overview
- raw/노트북을 망가뜨리지 않으려고 라즈베리 파이에서 AI 에이전트 하네스를 구동한 후기.md
- https://pi.dev/docs/latest
- https://docs.openclaw.ai/gateway/heartbeat
- https://hermes-agent.nousresearch.com/docs
- [quickstart](file:///Users/railscraft/Obsidian/raw/quickstart)
- [usage](file:///Users/railscraft/Obsidian/raw/usage)
- [providers](file:///Users/railscraft/Obsidian/raw/providers)
- [packages](file:///Users/railscraft/Obsidian/raw/packages)
- [Quartz-GitHub-Pages-Complete-Guide](file:///Users/railscraft/Obsidian/raw/[[Quartz]]-GitHub-Pages-Complete-Guide.md)
- [지난번 이런 일이 있었을 때, 수많은 평범한 사람들이 백만장자가 되었다](file:///Users/railscraft/Obsidian/raw/%EC%A7%80%EB%82%9C%EB%B2%88%20%EC%9D%B4%EB%9F%B0%20%EC%9D%BC%EC%9D%B4%20%EC%9E%88%EC%97%88%EC%9D%84%20%EB%95%8C%2C%20%EC%88%98%EB%A7%8E%EC%9D%80%20%ED%8F%89%EB%B2%94%ED%95%9C%20%EC%82%AC%EB%9E%8C%EB%93%A4%EC%9D%B4%20%EB%B0%B1%EB%A7%8C%EC%9E%A5%EC%9E%90%EA%B0%80%20%EB%90%98%EC%97%88%EB%8B%A4.md)
- [2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%20Claude%20Code%20%EC%84%A4%EC%A0%95%EC%97%90%20%EA%BC%AD%20%ED%95%84%EC%9A%94%ED%95%9C%208%EA%B0%80%EC%A7%80%20%ED%95%B5%EC%8B%AC%20%EC%8A%A4%ED%82%AC.md)
- [지식 그래프, 진정한 게임 체인저... 그러나 구축과 유지가 극도로 어려운 이유](file:///Users/railscraft/Obsidian/raw/%EC%A7%80%EC%8B%9D%20%EA%B7%B8%EB%9E%98%ED%94%84%2C%20%EC%A7%84%EC%A0%95%ED%95%9C%20%EA%B2%8C%EC%9E%84%20%EC%B2%B4%EC%9D%B8%EC%A0%80...%20%EA%B7%B8%EB%9F%AC%EB%82%98%20%EA%B5%AC%EC%B6%95%EA%B3%BC%20%EC%9C%A0%EC%A7%80%EA%B0%80%20%EA%B7%B9%EB%8F%84%EB%A1%9C%20%EC%96%B4%EB%A0%A4%EC%9A%B4%20%EC%9D%B4%EC%9C%A0.md)
- [밑바닥부터 만드는 LLM 메모리 #3. 벡터 메모리](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20LLM%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%233.%20%EB%B2%A1%ED%84%B0%20%EB%A9%94%EB%AA%A8%EB%A6%AC.md)
- [밑바닥부터 만드는 LLM 메모리 #5. 계층형 자체 관리 메모리](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20LLM%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%235.%20%EA%B3%84%EC%B8%B5%ED%98%95%20%EC%9E%90%EC%B2%B4%20%EA%B4%80%EB%A6%AC%20%EB%A9%94%EB%AA%A8%EB%A6%AC.md)
- [밑바닥부터 만드는 LLM 메모리 #4. 지식 그래프 메모리](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20LLM%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%234.%20%EC%A7%80%EC%8B%9D%20%EA%B7%B8%EB%9E%98%ED%94%84%20%EB%A9%94%EB%AA%A8%EB%A6%AC.md)
- [Claude Code 프로젝트 효율을 극대화하는 MEMORY.md 가이드](file:///Users/railscraft/Obsidian/raw/Claude%20Code%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%9A%A8%EC%9C%A8%EC%9D%84%20%EA%B7%B9%EB%8C%80%ED%99%94%ED%95%98%EB%8A%94%20MEMORY.md%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [AI와 오픈소스로 300개 이상의 팟캐스트를 RPG 게임으로 만든 이야기 - LennyRPG 8시간 개발기](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%EB%A1%9C%20300%EA%B0%9C%20%EC%9D%B4%EC%83%81%EC%9D%98%20%ED%8C%9F%EC%BA%90%EC%8A%A4%ED%8A%B8%EB%A5%BC%20RPG%20%EA%B2%8C%EC%9E%84%EC%9C%BC%EB%A1%9C%20%EB%A7%8C%EB%93%A0%20%EC%9D%B4%EC%95%BC%EA%B8%B0%20-%20LennyRPG%208%EC%8B%9C%EA%B0%84%20%EA%B0%9C%EB%B0%9C%EA%B8%B0.md)
- [CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다](file:///Users/railscraft/Obsidian/raw/CLAUDE.md%20%ED%8C%8C%EC%9D%BC%20%ED%95%98%EB%82%98%EA%B0%80%20%EB%B0%94%EC%9D%B4%EB%9F%B4%EC%9D%84%20%ED%83%94%EB%8B%A4.%20%EC%9D%B4%EC%9C%A0%EB%8A%94%20%EB%AF%BC%EB%A7%9D%ED%95%A0%20%EC%A0%95%EB%8F%84%EB%A1%9C%20%EB%8B%A8%EC%88%9C%ED%95%98%EB%8B%A4.md)
- [Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번](file:///Users/railscraft/Obsidian/raw/Karpathy%EC%9D%98%20LLM%20Wiki%EB%A5%BC%20%EB%91%90%20%EB%B2%88%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.%20%EC%BD%94%EB%93%9C%EB%A1%9C%20%ED%95%9C%20%EB%B2%88%2C%20%EB%8B%A8%EC%9D%BC%20.md%EB%A1%9C%20%ED%95%9C%20%EB%B2%88.md)
- [AI 개발자가 반드시 알아야 할 9가지 RAG 아키텍처 - 실무 예제로 배우는 완전 가이드](file:///Users/railscraft/Obsidian/raw/AI%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80%20%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20RAG%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20-%20%EC%8B%A4%EB%AC%B4%20%EC%98%88%EC%A0%9C%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 [[TurboQuant]], 애플 실리콘 상륙](file:///Users/railscraft/Obsidian/raw/5%EB%B0%B0%20%EC%A0%81%EC%9D%80%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A1%9C%20%EB%A7%A5%EC%97%90%EC%84%9C%2032B%20%EB%AA%A8%EB%8D%B8%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20%EA%B5%AC%EA%B8%80%20[[TurboQuant]]%2C%20%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%83%81%EB%A5%99.md)
- [1인 개발자와 소규모 팀을 위한 주말 완성 디자인 시스템 구축법](file:///Users/railscraft/Obsidian/raw/1%EC%9D%B8%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%99%80%20%EC%86%8C%EA%B7%9C%EB%AA%A8%20%ED%8C%80%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%A3%BC%EB%A7%90%20%EC%99%84%EC%84%B1%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%EB%B2%95.md)
- [애플 실리콘을 위한 로컬 AI 스택: 한 차원 진화한 성능과 최적의 구축 가이드](file:///Users/railscraft/Obsidian/raw/%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EB%A1%9C%EC%BB%AC%20AI%20%EC%8A%A4%ED%83%9D%3A%20%ED%95%9C%20%EC%B0%A8%EC%9B%90%20%EC%A7%84%ED%99%94%ED%95%9C%20%EC%84%B1%EB%8A%A5%EA%B3%BC%20%EC%B5%9C%EC%A0%81%EC%9D%98%20%EA%B5%AC%EC%B6%95%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [How to write a DESIGN.md file Claude can actually use-ko](file:///Users/railscraft/Obsidian/raw/How%20to%20write%20a%20DESIGN.md%20file%20Claude%20can%20actually%20use-ko.md)
- [하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유](file:///Users/railscraft/Obsidian/raw/%ED%95%98%EB%84%A4%EC%8A%A4%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20-%2065%EC%A4%84%20CLAUDE.md%EA%B0%80%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20%EC%8A%A4%ED%82%AC%EC%9D%B8%20%EC%9D%B4%EC%9C%A0.md)
- [밑바닥부터 만드는 LLM 메모리 #1. 슬라이딩 윈도우 버퍼](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20LLM%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%231.%20%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%94%A9%20%EC%9C%88%EB%8F%84%EC%9A%B0%20%EB%B2%84%ED%8D%BC.md)
- [우리가 피그마 없이 제품을 배포하는 방법](file:///Users/railscraft/Obsidian/raw/%EC%9A%B0%EB%A6%AC%EA%B0%80%20%ED%94%BC%EA%B7%B8%EB%A7%88%20%EC%97%86%EC%9D%B4%20%EC%A0%9C%ED%92%88%EC%9D%84%20%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95.md)
- [2026년에 실제로 효과가 있는 나의 AI 디자인 워크플로우](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%EC%97%90%20%EC%8B%A4%EC%A0%9C%EB%A1%9C%20%ED%9A%A8%EA%B3%BC%EA%B0%80%20%EC%9E%88%EB%8A%94%20%EB%82%98%EC%9D%98%20AI%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.md)
- [DESIGN.md 워크플로우. [[Google Stitch]]와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko](file:///Users/railscraft/Obsidian/raw/DESIGN.md%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.%20Google%20Stitch%EC%99%80%20Claude%20Code%EA%B0%80%20%EB%94%94%EC%9E%90%EC%9D%B8-%EC%BD%94%EB%93%9C%20%ED%95%B8%EB%93%9C%EC%98%A4%ED%94%84%EB%A5%BC%20%EC%A1%B0%EC%9A%A9%ED%9E%88%20%EB%B0%94%EA%BE%BC%20%EB%B0%A9%EB%B2%95-ko.md)
- [모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션](file:///Users/railscraft/Obsidian/raw/%EB%AA%A8%EB%93%A0%20DESIGN.md%EC%97%90%20%EA%BC%AD%20%EB%93%A4%EC%96%B4%EA%B0%80%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20%EC%84%B9%EC%85%98.md)
- [DESIGN.md 워크플로 - [[Google Stitch]]와 Claude Code가 바꾼 디자인 개발 협업](file:///Users/railscraft/Obsidian/raw/DESIGN.md%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%20-%20Google%20Stitch%EC%99%80%20Claude%20Code%EA%B0%80%20%EB%B0%94%EA%BE%BC%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EA%B0%9C%EB%B0%9C%20%ED%98%91%EC%97%85.md)
- [밑바닥부터 만드는 LLM 메모리 #2. 자동 요약 버퍼](file:///Users/railscraft/Obsidian/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20LLM%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%232.%20%EC%9E%90%EB%8F%99%20%EC%9A%94%EC%95%BD%20%EB%B2%84%ED%8D%BC.md)

