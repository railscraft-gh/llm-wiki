# LLM Wiki Index

## 핵심 노트

| 노트 | 역할 | 상태 | updated |
| --- | --- | --- | --- |
| [[AI 코딩 에이전트 검증 전략]] | 에이전트 결과물을 신뢰하기 위한 테스트, 린트, UI 확인, 사람 감독 기준을 정리한다. | evergreen | 2026-05-24 |
| [[Software 3.0]] | prompt와 context window가 프로그래밍 레버가 되는 패러다임을 설명한다. | evergreen | 2026-05-24 |
| [[Jagged Intelligence]] | LLM이 검증 가능한 영역에서 강하고 그 외 영역에서 들쭉날쭉한 이유를 설명한다. | evergreen | 2026-05-14 |
| [[Vibe Coding과 Agentic Engineering]] | AI로 빨리 만드는 경험과 책임 있는 엔지니어링을 구분한다. | evergreen | 2026-05-14 |
| [[AI 시대 디자인 시스템]] | AI 생성 UI가 평균적인 결과물로 수렴하지 않게 하는 디자인 맥락과 검증 기준을 정리한다. | evergreen | 2026-05-07 |
| [[Agentic 패턴 진화]] | Prompt → Context → Harness 엔지니어링으로 이동한 4년 연대기와 엄밀함의 이동 경로를 정리한다. | evergreen | 2026-05-16 |
| [[Harness Engineering]] | LLM의 비결정성을 흡수하는 외부 구조(컨텍스트, 도구, 검증, rippability) 설계로 패러다임을 정의한다. | evergreen | 2026-05-26 |
| [[Claude.md 운영 원칙]] | coding agent가 프로젝트 규칙·금지 사항·검증 루프를 지속적으로 참조하게 만드는 운영 문서 원칙을 정리한다. | evergreen | 2026-05-26 |
| [[AI 네이티브 사용자]] | 같은 도구를 써도 context, command, hook, 검증 루프로 leverage를 키우는 사용자 역량 모델을 정리한다. | evergreen | 2026-05-26 |
| [[Plan Mode 기반 AI 작업]] | 구현 전에 파일 범위, 테스트, 위험, 승인 경계를 먼저 고정하는 agent 작업 절차를 정리한다. | evergreen | 2026-05-26 |
| [[LLM Wiki 운영 패턴]] | raw 보존, wiki 승격, index/log/lint 분리로 지식 베이스를 지속 운영하는 workflow를 정리한다. | evergreen | 2026-05-26 |
| [[병렬 에이전트 세션 운영]] | 역할 분리, 파일 범위, 검증 경계를 기준으로 multi-agent 세션을 안전하게 병렬화하는 절차를 정리한다. | evergreen | 2026-05-26 |
| [[Agent Harness]] | orchestration loop, tool, memory, context, parsing, verification을 묶는 실행 인프라의 구성 요소를 정리한다. | evergreen | 2026-05-26 |
| [[Agent Native Infrastructure]] | agent가 바로 실행할 수 있는 CLI·API·문서·권한 구조를 설계하는 인프라 관점을 정리한다. | evergreen | 2026-05-26 |
| [[AI 에이전트 런타임 역할 맵]] | 확장 층, 하네스, 인프라, 오픈소스 작업대, 제품 구현체를 한 장의 런타임 계층으로 묶는다. | evergreen | 2026-05-26 |
| [[AI 네이티브 작업 시스템]] | 사용자 숙련, 디자인 계층, 런타임 계층, 검증 루프를 하나의 작업 체계로 묶는다. | evergreen | 2026-05-26 |
| [[AI 디자인 역할 맵]] | 기본값, DESIGN.md, task agent, AI Experience Architect를 한 장의 디자인 운영 계층으로 묶는다. | evergreen | 2026-05-26 |
| [[AI 기본값 수용과 오버라이드 전략]] | AI가 밀어 넣는 foundation을 어디까지 수용하고 어디서 override할지 정하는 상위 의사결정 프레임이다. | evergreen | 2026-05-26 |
| [[API Key 관리 원칙]] | secret을 코드에서 분리하고 생성·로테이션·폐기·감사까지 생명주기로 다루는 보안 체크리스트다. | evergreen | 2026-05-07 |
| [[Context Engineering]] | agent 단계 사이에 필요한 정보만 필요한 형식으로 넘기는 handoff 설계 원칙을 정리한다. | evergreen | 2026-05-26 |
| [[디자인 에이전트 5종]] | upstream design work를 research·define·ideate·flow 단계의 agent workflow로 분해하는 상위 task map이다. | evergreen | 2026-05-26 |
| [[Lethal Trifecta]] | 신뢰 불가 입력·민감 시스템 접근·상태 변경의 동시 보유를 금지하는 에이전트 보안 위험 모델을 정리한다. | evergreen | 2026-05-16 |

## Ingest 현황

| 날짜 | raw 자료 | 생성/수정 노트 | 상태 | 로그 |
| --- | --- | --- | --- | --- |
| 2026-05-28 | `raw/Bloated AI Slop Labs on X 2059651388901335196 한국어 번역.md` | [[AI 하네스 최소화]] (신규), [[Harness Engineering]] (보강), [[AI Slop]] (보강) | done | [[log#2026-05-28]] |
| 2026-05-26 | `raw/Andrej Karpathy가 AI 코딩 에이전트의 고질병을 고치는 방법. 마크다운 파일 하나.md`, `raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md` | [[Agent Harness]], [[Harness Engineering]] (보강), [[Claude.md 운영 원칙]] (보강), [[AI 코딩 에이전트 검증 전략]] (보강), [[Meta-Harness]] (보강), [[에이전트 코딩 4원칙]] (보강) | done | [[log#2026-05-26]] |

| 2026-05-26 | `raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md`, `raw/Agentic Product Design. 오늘 바로 자동화할 수 있는 5가지 디자인 작업.md` | [[디자인 에이전트 5종]], [[DESIGN.md 운영 원칙]] (보강), [[AI 시대 디자인 시스템]] (보강), [[AI 코딩 에이전트 검증 전략]] (보강), [[Claude.md 운영 원칙]] (관련 링크 보강) | done | [[log#2026-05-26]] |
| 2026-05-26 | `raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`, `raw/2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가.md`, `raw/더 빨리 배우고 싶다면 이 노트 정리 방식을 써라.md` | [[생성형 AI 면접 평가 축]], [[AI 오픈소스 작업대]], [[학습용 노트 외부화 원칙]], [[AI 네이티브 사용자]] (보강), [[Competence Debt]] (보강), [[LLM Wiki 운영 패턴]] (보강), [[Agent Native Infrastructure]] (보강) | done | [[log#2026-05-26]] |
| 2026-05-26 | `raw/Karpathy의 LLM Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다.md`, `raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md`, `raw/완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다.md` | [[LLM Wiki 구현 선택지]], [[LLM Wiki 운영 패턴]] (보강), [[Agent Native Infrastructure]] (보강), [[Claude.md 운영 원칙]] (관련 링크 보강) | done | [[log#2026-05-26]] |
| 2026-05-26 | `raw/하네스 엔지니어링. 다음 모델보다 더 중요한 조용한 코딩 스킬.md` | [[Harness Engineering]] (보강), [[Agent Harness]] (보강) | done | [[log#2026-05-26]] |
| 2026-05-26 | `raw/Supertonic 3. 99M 파라미터로 31개 언어를 말하는 초경량 TTS 모델.md` | [[온디바이스 TTS]], [[AI 오픈소스 작업대]] (보강), [[Agent Native Infrastructure]] (관련 링크 보강) | done | [[log#2026-05-26]] |
| 2026-05-26 | `raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md` | 기존 [[LLM Wiki 운영 패턴]] ingest 결과 재사용, 중복 raw로 분류 | done | [[log#2026-05-26]] |
| 2026-05-24 | `raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md` | [[LLM Wiki 운영 패턴]], [[Software 3.0]] (보강), [[Thinking과 Understanding 분리]] (보강), [[Agent Native Infrastructure]] (보강), [[Claude.md 운영 원칙]] (보강) | done | [[log#2026-05-24]] |
| 2026-05-17 | (Sync 3 — raw 재감사, 상태 정합성 갱신) | [[Harness Engineering]] (core 승격), [[Software 3.0]] (Reasoning Models 링크), [[바선생]] (cross-link 보강), 35개 draft 노트 → 22 evergreen / 13 needs-review로 상태 정정 | done | [[log#2026-05-17 (Sync 3 — raw 재감사, 상태 정합성)]] |
| 2026-05-24 | `raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md` | [[Obsidian vault용 Slash Command 운영]], [[Claude Code 오케스트레이션]] (보강), [[AI 네이티브 사용자]] (보강), [[Claude.md 운영 원칙]] (보강) | done | [[log#2026-05-24]] |
| 2026-05-24 | `raw/andrej-karpathy-skills-CLAUDE-번역.md` | [[에이전트 코딩 4원칙]], [[Harness Engineering]] (보강), [[Claude.md 운영 원칙]] (보강), [[AI 코딩 에이전트 검증 전략]] (보강) | done | [[log#2026-05-24]] |
| 2026-05-24 | `raw/아무도 AI를 배우고 싶어 하지 않는다.md` | [[Competence Debt]], [[AI 네이티브 사용자]] (보강), [[Thinking과 Understanding 분리]] (보강), [[AI 시대 소프트웨어 펀더멘탈]] (보강) | done | [[log#2026-05-24]] |
| 2026-05-24 | `raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어.md` | [[Claude Code 세션 운영 명령어]], [[Claude Code 오케스트레이션]] (보강), [[AI 코딩 에이전트 검증 전략]] (보강), [[AI 네이티브 사용자]] (보강), [[Claude.md 운영 원칙]] (보강) | done | [[log#2026-05-24]] |
| 2026-05-24 | `raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법 - 출판형 다듬기.md`, `raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`, `raw/아무도 AI를 배우고 싶어 하지 않는다 - 출판형 다듬기.md` | 기존 ingest 결과 재사용, 중복 raw로 분류 | done | [[log#2026-05-24]] |
| 2026-05-16 | `raw/anthropic-boris-cherny-interview.md`, `raw/evolution-of-ai-agentic-patterns.md`, `raw/sequoia-ascent-2026-karpathy-ko.md`, `raw/강화학습-RL-초보자-가이드.md`, `raw/ai-era-six-pitfalls-six-prescriptions-matt-pocock.md` | [[Lethal Trifecta]], [[Agentic 패턴 진화]], [[Loop와 Routines]], [[Andrew Ng 4 에이전틱 디자인 패턴]], [[제품 오버행]], [[Reasoning Models]], [[소프트웨어 민주화]], [[검증 가능한 도메인]], [[Harness Engineering]] (보강), [[병렬 에이전트 세션 운영]] (보강), [[AI 네이티브 엔지니어링 조직]] (보강), [[AI 네이티브 사용자]] (보강) | done | [[log#2026-05-16]] |
| 2026-05-14 | `raw/AI 네이티브 엔지니어링 조직 운영하기 - Code w Claude 발표.md`, `raw/GStack - Claude Code 가상 엔지니어링 팀 도구.md`, `raw/Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md` | [[AI 네이티브 엔지니어링 조직]], [[GStack]], [[Ralph Loop]], [[AI 네이티브 사용자]] (보강), [[Plan Mode 기반 AI 작업]] (보강), [[병렬 에이전트 세션 운영]] (보강), [[Claude Code 오케스트레이션]] (보강), [[매퍼코 3스킬 워크플로우]] (보강) | done | [[log#2026-05-14]] |
| 2026-05-13 | `raw/arxiv-2603.28052-meta-harness.md`, `raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md`, `raw/GLM-5.1-vs-Kimi-K2.6-Coding-Comparison.md`, `raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md` | [[Meta-Harness]], [[Harness Engineering]], [[RuboCop]], [[강한 모델로 덜 헤매기]] (보강), [[Claude.md 운영 원칙]] (보강), [[Agent Native Infrastructure]] (보강), [[AI 코딩 에이전트 검증 전략]] (보강) | done | [[log#2026-05-13]] |
| 2026-05-11 | `raw/oh-my-openagent-team-mode.md` | [[OpenAgent Team Mode]] | done | [[log#2026-05-11]] |
| 2026-05-11 | `raw/sequoia-ascent-2026-karpathy-ko.md` | [[Software 3.0]], [[Jagged Intelligence]], [[Vibe Coding과 Agentic Engineering]], [[Agent Native Infrastructure]], [[Thinking과 Understanding 분리]], [[LLM을 동물 지능처럼 다루지 않기]], [[AI 네이티브 사용자]] | done | [[log#2026-05-11]] |
| 2026-05-11 | `raw/매퍼코-3스킬-조합-워크플로우-해강.md` | [[매퍼코 3스킬 워크플로우]] | done | [[log#2026-05-11]] |
| 2026-05-11 | `raw/뿌리강의-4-웹-서버와-배포.md` | [[웹 서버와 배포 기초]] | done | [[log#2026-05-11]] |
| 2026-05-11 | `raw/강화학습-RL-초보자-가이드.md` | [[강화학습 기초]], [[PPO와 정책 최적화]], [[LLM 정렬 기법]] | done | [[log#2026-05-11]] |
| 2026-05-09 | `raw/cc101_axwith_ko.md` | [[Claude Code 권한 설계]], [[Claude.md 운영 원칙]], [[병렬 에이전트 세션 운영]], [[Claude Code 오케스트레이션]], [[Plan Mode 기반 AI 작업]], [[AI 코딩 에이전트 검증 전략]] | done | [[log#2026-05-09]] |
| 2026-05-09 | `raw/vibe_sunsang_정리.md` | [[바선생]] | done | [[log#2026-05-09]] |
| 2026-05-09 | `raw/graphify_정리.md` | [[Graphify]] | done | [[log#2026-05-09]] |
| 2026-05-09 | `raw/context-mode-README-정리.md` | [[Context Mode]] | done | [[log#2026-05-09]] |
| 2026-05-09 | `raw/ai-era-six-pitfalls-six-prescriptions-matt-pocock.md` | [[AI 시대 소프트웨어 펀더멘탈]] | done | [[log#2026-05-09]] |
| 2026-05-08 | `raw/pi-coding-agent-overview.md`, `raw/Quartz-GitHub-Pages-Complete-Guide.md` | [[Pi Coding Agent]], [[Quartz로 Obsidian Wiki 배포하기]], [[Agent Native Infrastructure]], [[Claude.md 운영 원칙]], [[Plan Mode 기반 AI 작업]], [[병렬 에이전트 세션 운영]], [[Claude Code 권한 설계]], [[OpenCode]] | done | [[log#2026-05-08]] |
| 2026-05-08 | `raw/Quartz-Deploy-Guide.md`, `raw/opencode-masterclass-summary.md`, `raw/Infisical_SSH_헤드리스_인증_가이드.md` | [[Quartz로 Obsidian Wiki 배포하기]], [[OpenCode]], [[Infisical 헤드리스 인증]], [[Plan Mode 기반 AI 작업]], [[병렬 에이전트 세션 운영]], [[Claude.md 운영 원칙]], [[AI 코딩 에이전트 검증 전략]], [[Infisical 도입 전략]], [[Agent Native Infrastructure]] | done | [[log#2026-05-08]] |
| 2026-05-07 | `raw/API_Key_관리_및_Infisical_도입_가이드.md`, `raw/AI로_만든_제품이_안_팔리는_이유.md` | [[API Key 관리 원칙]], [[클라이언트 Secret 노출 방지]], [[Infisical 도입 전략]], [[AI Slop]], [[DESIGN.md 운영 원칙]], [[AI 시대 디자인 시스템]], [[AI 코딩 에이전트 검증 전략]], [[Vibe Coding과 Agentic Engineering]], [[Claude.md 운영 원칙]], [[Agent Native Infrastructure]], [[Claude Code 권한 설계]] | done | [[log#2026-05-07]] |
| 2026-05-06 | `raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md`, `raw/보리스_클로드코드_실무_사용법.md`, `raw/Claude-Code-실무활용법-보리스-관점-정리.md`, `raw/안드레_카파시_인터뷰_정리.md`, `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md` | [[AI 코딩 에이전트 검증 전략]], [[Claude.md 운영 원칙]], [[Claude Code 권한 설계]], [[Plan Mode 기반 AI 작업]], [[병렬 에이전트 세션 운영]], [[Claude Code 오케스트레이션]], [[강한 모델로 덜 헤매기]], [[Software 3.0]], [[Neural Computer]], [[Jagged Intelligence]], [[Vibe Coding과 Agentic Engineering]], [[AI 네이티브 사용자]], [[Agent Native Infrastructure]], [[Thinking과 Understanding 분리]], [[LLM을 동물 지능처럼 다루지 않기]] | done | [[log#2026-05-06]] |


## 승격 후보

### core 우선 후보

| 후보 | 근거 | 다음 작업 |
| --- | --- | --- |
| [[AI 네이티브 엔지니어링 조직]] | 개인 agent 숙련을 팀 규범, 프로세스 폐기, 검증 책임으로 확장하는 운영 프레임이다. | `후속 ingest 대기 묶음/조직 운영 검증` 자료 누적 후 core 재검토 |

### 구조 보강 후보

| 후보 | 근거 | 다음 작업 |
| --- | --- | --- |
| [[AI 산출물 포맷 결정 트리]] | Markdown source와 HTML artifact를 독자 기준으로 나누는 실무 규칙이다. | 실제 배포/리포트 사례 raw 추가 후 core 검토 여부 재판단 |
| [[디자인 시스템 기본값]] | AI 생성 UI drift를 막는 spacing·token·component default의 실무 규칙이다. | [[AI 시대 디자인 시스템]] 하위 허브로 유지, 반복 raw 누적 시 core 검토 |
| [[Quartz로 Obsidian Wiki 배포하기]] | vault 운영과 웹 배포를 연결하는 반복 workflow다. | 실제 배포 repo 구조 확정 후 evergreen 검토 |
| [[OpenCode]] | Claude Code 계열 workflow와 provider/model 선택을 연결하는 도구 허브다. | 추가 실사용 자료 ingest 후 tool note 보강 |
| [[Loop와 Routines]] | cron 기반 자동화 운영이 [[Ralph Loop]], [[Claude Code 오케스트레이션]]과 연결된다. | 실제 운영 사례 추가 ingest 후 evergreen 검토 |


## 점검 대기

### 도구·spec 변동성

| 항목 | 사유 | 처리 방향 |
| --- | --- | --- |
| [[Context Mode]] | MCP/sandbox/FTS5 도구로 인덱스·검색·sandbox 명세가 빠르게 변동한다. | 실사용 전 공식 docs 확인 |
| [[GStack]] | command 목록, host 지원, 설치 방식이 빠르게 바뀌는 tool note다. | 실사용 전 공식 GitHub 저장소 확인 |
| [[Graphify]] | 지식 그래프 도구로 schema와 추출 알고리즘이 빠르게 변동한다. | 실사용 전 공식 README 확인 |
| [[Infisical 도입 전략]] | 가격과 enterprise 기능 범위가 변동되며 raw와 공식 출처 간 충돌이 있다. | 도입 전 공식 pricing/license 재확인 |
| [[Infisical 헤드리스 인증]] | Universal Auth와 Service Token 권장 상태가 변동될 수 있다. | 운영 적용 전 공식 Infisical docs 확인 |
| [[OpenAgent Team Mode]] | opencode 재시작 요구와 tmux_visualization 옵션이 버전 영향 받는다. | 실사용 후 evergreen 검토 |
| [[OpenClaw]] | 활성 사용자 수, 배포 비율, 보안 advisories는 빠르게 바뀌며 실제 권한 모델 검증이 필요하다. | 도입 전 공식 docs·release note·security advisory 재확인 |
| [[OpenCode]] | agent, skill, MCP, provider 설정이 빠르게 바뀌는 도구 문서다. | 실사용 전 공식 OpenCode docs 확인 |
| [[Pi Coding Agent]] | 설치 패키지명, provider, extension/package API가 빠르게 바뀌는 도구 문서다. | 실사용 전 공식 Pi docs 확인 |
| [[Quartz로 Obsidian Wiki 배포하기]] | Quartz Node 요구사항, hosting workflow, GitHub Pages 설정은 버전 영향을 받는다. | 배포 전 공식 Quartz docs와 실제 branch 확인 |
| [[RuboCop]] | Ruby 생태계 표준 도구이지만 cop 이름/플래그가 메이저 버전마다 변동된다. | 메이저 RuboCop 릴리스 시 needs-review |
| [[shadcn-ui]] | GitHub star, MCP 지원 범위, 도구별 scaffold 기본값은 빠르게 변한다. | 실제 도입 전 공식 docs와 사용하는 생성 도구의 기본 scaffold 정책 확인 |
| [[바선생]] | Claude Code 대화 분석 도구의 6대 차원 가중치와 게이트 조건은 raw 시점 기준이다. | 공식 README 업데이트 시 재검토 |
| [[온디바이스 TTS]] | 모델 스펙, benchmark, 라이선스와 배포 가이드는 빠르게 변동한다. | 도입 전 공식 모델 카드/README 재확인 |

### 단일 출처·외부 검증 부족

| 항목 | 사유 | 처리 방향 |
| --- | --- | --- |
| [[Loop와 Routines]] | "코드베이스 100% 자동 작성", "하루 150개 PR", "수천 에이전트 야간 운영"은 1인 영상 발언으로 외부 검증이 부족하다. | Anthropic 외부 사례 또는 공식 도구 문서 ingest 시 재검토 |
| [[Meta-Harness]] | Stanford/MIT/KRAFTON 공동 연구의 단일 논문 기준이며 3개 도메인 실험은 후속 재현 자료가 더 필요하다. | 후속 실험 자료 ingest 시 evergreen 검토 |
| [[Neural Computer]] | 전망 성격이 강해 추가 출처가 필요하다. | 관련 카파시 원문 또는 후속 자료 검증 |
| [[AI 하네스 최소화]] | 단일 X thread에서 나온 4 skills / 4 agents 주장이라 범용화 전 추가 사례 검증이 필요하다. | 후속 harness workflow 사례 ingest 시 재검토 |
| [[Ralph Loop]] | context 50% 기준, 100개 이상 headless 세션, 사람 개입 0%는 영상 데모 주장이다. | 실제 repo 적용 시 실패율, 충돌률, review 비용 검증 |
| [[매퍼코 3스킬 워크플로우]] | 정확한 영문 명칭과 워크플로우 단계 시간은 검증 대기다. | 실제 적용 사례 ingest 시 evergreen 검토 |
| [[생성형 AI 면접 평가 축]] | 2026년 시점 질문 분포와 평가 축 정리라 채용 시장 변화 영향을 크게 받는다. | 후속 채용 자료 ingest 시 재검토 |
| [[제품 오버행]] | 일부 핵심 예시가 영상 발언 중심이라 외부 검증이 더 필요하다. | 동일 주제의 추가 원문 확보 후 재판단 |

### 모델·가격·시장 변동성

| 항목 | 사유 | 처리 방향 |
| --- | --- | --- |
| [[강한 모델로 덜 헤매기]] | 특정 모델명, 벤치마크 점수, 가격 비교는 빠르게 변동한다. | 최신 모델/가격 자료 ingest 시 재검토 |

### evergreen 유지 중인 시점 주의 노트

| 항목 | 사유 | 처리 방향 |
| --- | --- | --- |
| [[Agentic 패턴 진화]] | KV-cache 비용, Copilot 점유율, Manus 사례 등 일부 숫자는 시점 의존적이다. | 모델/벤치마크/가격 변동 시 보강 |
| [[AI 시대 소프트웨어 펀더멘탈]] | 개념 프레임은 안정적이지만 일부 사례와 수치는 발표 시점 의존적이다. | 수치보다 판단 프레임 중심으로 유지, 후속 fundamentals raw 누적 시 보강 |

## 후속 ingest 대기 묶음

| 묶음 | 대상 노트 | 필요한 raw 유형 | 목표 |
| --- | --- | --- | --- |
| 조직 운영 검증 | [[AI 네이티브 엔지니어링 조직]], [[Loop와 Routines]], [[Ralph Loop]], [[제품 오버행]] | 비 Anthropic 조직 사례, 실패 사례, 운영 지표, 검증/승인 구조 자료 | 조직/자동화 주장 검증 및 core 재판단 |
| 도구·spec 업데이트 | [[Context Mode]], [[GStack]], [[Graphify]], [[OpenAgent Team Mode]], [[OpenCode]], [[Pi Coding Agent]], [[RuboCop]], [[shadcn-ui]], [[OpenClaw]], [[Quartz로 Obsidian Wiki 배포하기]], [[온디바이스 TTS]] | 공식 docs, release note, README, 설치/배포 가이드 | 버전 변동 흡수 및 needs-review 유지/해제 판단 |
| 보안·비밀관리 | [[Infisical 도입 전략]], [[Infisical 헤드리스 인증]], [[API Key 관리 원칙]] | pricing/license 변경, auth 권장 방식, 실제 운영 사고/대응 사례 | 도구 노트 최신화와 보안 체크리스트 보강 |
| 연구·전망 검증 | [[Meta-Harness]], [[Neural Computer]], [[생성형 AI 면접 평가 축]], [[강한 모델로 덜 헤매기]] | 후속 논문, 재현 자료, 시장/모델 업데이트, 채용 자료 | 단일 출처/시점 의존 주장 보강 |
| 디자인 작업 체계 | [[디자인 시스템 기본값]], [[AI 기본값 수용과 오버라이드 전략]], [[AI Experience Architect]] | 추가 디자인 조직 사례, 운영 문서 예시, override/approval 사례 | design core 축 보강 및 상위 허브 안정화 |
