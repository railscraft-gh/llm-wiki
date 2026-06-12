# LLM Wiki Index

## 핵심 노트

| 노트 | 역할 | 상태 | updated |
| --- | --- | --- | --- |
| [[AI 코딩 에이전트 검증 전략]] | 에이전트 결과물을 신뢰하기 위한 테스트, 린트, UI 확인, 사람 감독 기준을 정리한다. | evergreen | 2026-05-24 |
| [[Software 3.0]] | prompt와 context window가 프로그래밍 레버가 되는 패러다임을 설명한다. | evergreen | 2026-05-24 |
| [[Jagged Intelligence]] | LLM이 검증 가능한 영역에서 강하고 그 외 영역에서 들쭉날쭉한 이유를 설명한다. | evergreen | 2026-05-14 |
| [[Vibe Coding과 Agentic Engineering]] | AI로 빨리 만드는 경험과 책임 있는 엔지니어링을 구분한다. | evergreen | 2026-05-14 |
| [[AI 시대 디자인 시스템]] | AI 생성 UI가 평균적인 결과물로 수렴하지 않게 하는 디자인 맥락과 검증 기준을 정리한다. | evergreen | 2026-06-11 |
| [[완전히 기계 읽기 가능한 디자인 시스템]] | 대규모 AI 에이전트 개발을 위한 6개 지식 레이어 구성 및 점진적 맥락 공개 아키텍처를 정리한다. | evergreen | 2026-06-09 |
| [[DESIGN.md 워크플로우]] | Figma의 디자인 토큰 명세를 DESIGN.md로 고정하고 v0, Stitch, Claude Code를 체인화해 UI 격차 없이 구현하는 파이프라인을 다룬다. | evergreen | 2026-06-12 |
| [[세계 모델]] | 물리 세계 예측 및 탐색이 지능의 본체라는 얀 르쿤의 관점과 JEPA, 공간 지능, 모라벡의 역설 등을 다룬다. | needs-review | 2026-06-09 |
| [[Agentic 패턴 진화]] | Prompt → Context → Harness 엔지니어링으로 이동한 4년 연대기와 엄밀함의 이동 경로를 정리한다. | evergreen | 2026-05-16 |
| [[Harness Engineering]] | LLM의 비결정성을 흡수하는 외부 구조(컨텍스트, 도구, 검증, rippability) 설계로 패러다임을 정의한다. | evergreen | 2026-05-26 |
| [[Claude.md 운영 원칙]] | coding agent가 프로젝트 규칙·금지 사항·검증 루프를 지속적으로 참조하게 만드는 운영 문서 원칙을 정리한다. | evergreen | 2026-06-10 |
| [[AI 네이티브 사용자]] | 같은 도구를 써도 context, command, hook, 검증 루프로 leverage를 키우는 사용자 역량 모델을 정리한다. | evergreen | 2026-05-26 |
| [[Plan Mode 기반 AI 작업]] | 구현 전에 파일 범위, 테스트, 위험, 승인 경계를 먼저 고정하는 agent 작업 절차를 정리한다. | evergreen | 2026-05-26 |
| [[LLM Wiki 운영 패턴]] | raw 보존, wiki 승격, index/log/lint 분리로 지식 베이스를 지속 운영하는 workflow를 정리한다. | evergreen | 2026-05-26 |
| [[병렬 에이전트 세션 운영]] | 역할 분리, 파일 범위, 검증 경계를 기준으로 multi-agent 세션을 안전하게 병렬화하는 절차를 정리한다. | evergreen | 2026-06-04 |
| [[Agent Harness]] | orchestration loop, tool, memory, context, parsing, verification을 묶는 실행 인프라의 구성 요소를 정리한다. | evergreen | 2026-06-11 |
| [[Agent Native Infrastructure]] | agent가 바로 실행할 수 있는 CLI·API·문서·권한 구조를 설계하는 인프라 관점을 정리한다. | evergreen | 2026-05-26 |
| [[AI 에이전트 런타임 역할 맵]] | 확장 층, 하네스, 인프라, 오픈소스 작업대, 제품 구현체를 한 장의 런타임 계층으로 묶는다. | evergreen | 2026-05-26 |
| [[AI 네이티브 작업 시스템]] | 사용자 숙련, 디자인 계층, 런타임 계층, 검증 루프를 하나의 작업 체계로 묶는다. | evergreen | 2026-05-26 |
| [[AI 디자인 역할 맵]] | 기본값, DESIGN.md, task agent, AI Experience Architect를 한 장의 디자인 운영 계층으로 묶는다. | evergreen | 2026-05-26 |
| [[AI Experience Architect]] | 화면 제작을 넘어 에이전트 위임 경계, 검토 게이트, 신뢰 모델 등 상류 디자인 전략을 설계하는 역할을 정의한다. | evergreen | 2026-06-07 |
| [[AI 세컨드 브레인]] | PARA 구조와 점진적 맥락 공개(CLAUDE.md)로 6만 명의 대화 맥락을 유지한 지식 시스템 구축 사례를 정리한다. | evergreen | 2026-06-07 |
| [[GBrain]] | 마크다운 노트를 지식 그래프로 자동 구축하고 MCP로 에이전트 메모리를 제공하는 장기 기억 인프라를 정리한다. | evergreen | 2026-06-11 |
| [[AI 기본값 수용과 오버라이드 전략]] | AI가 밀어 넣는 foundation을 어디까지 수용하고 어디서 override할지 정하는 상위 의사결정 프레임이다. | evergreen | 2026-05-26 |
| [[API Key 관리 원칙]] | secret을 코드에서 분리하고 생성·로테이션·폐기·감사까지 생명주기로 다루는 보안 체크리스트다. | evergreen | 2026-05-07 |
| [[Context Engineering]] | agent 단계 사이에 필요한 정보만 필요한 형식으로 넘기는 handoff 설계 원칙을 정리한다. | evergreen | 2026-05-26 |
| [[프론트엔드 디자인 스킬]] | AI가 만든 UI slop을 거부하기 위해 Anthropic 엔지니어가 배포한 30줄 미학 스킬의 영향력과 한계를 정리한다. | evergreen | 2026-06-04 |
| [[디자인 에이전트 5종]] | upstream design work to research·define·ideate·flow 단계 of agent workflow로 분해하는 상위 task map이다. | evergreen | 2026-05-26 |
| [[Lethal Trifecta]] | 신뢰 불가 입력·민감 시스템 접근·상태 변경의 동시 보유를 금지하는 에이전트 보안 위험 모델을 정리한다. | evergreen | 2026-06-11 |
| [[Model Context Protocol]] | AI 클라이언트와 데이터 소스/도구 간에 컨텍스트와 실행 권한을 주고받기 위한 통신 표준 프로토콜을 다룬다. | evergreen | 2026-06-10 |
| [[에이전트 복리 실패의 수학]] | 비결정론적 실패의 누적 수식 및 Google Antigravity 드라이브 포맷, Replit DB 삭제 등의 실제 물리 파괴 사고 사례 분석을 다룬다. | evergreen | 2026-06-11 |
| [[오픈소스 LLM 경제성과 벤더 종속성 해지]] | NIST CAISI DeepSeek 평가 격차, 우버/MS의 실제 클로드 코드 예산 소모 등 오픈소스 도입의 실질적 비용과 3단계 추론 프레임워크를 다룬다. | evergreen | 2026-06-11 |
| [[모듈러 모놀리스]] | AI 에이전트의 컨텍스트 경제학을 위해 패키지 수준의 도메인 경계를 강제하는 아키텍처를 정리한다. | evergreen | 2026-06-12 |
| [[MEMORY.md 운영 원칙]] | 에이전트의 장기 세션 지식을 기록·보존하는 인덱스 템플릿과 운영 수칙을 정리한다. | evergreen | 2026-06-12 |
| [[사양 기반 개발 (Spec Driven Development)]] | 바이브 코딩에서 탈피해 살아있는 자연어 명세서와 테스트를 중심으로 빌드하는 6단계 순환 주기를 정리한다. | evergreen | 2026-06-12 |

## Ingest 현황

| 날짜 | raw 자료 | 생성/수정 노트 | 상태 | 로그 |
| --- | --- | --- | --- | --- |
| 2026-06-12 | `raw/모든 AI 엔지니어가 알아야 할 10가지 LangChain 및 LangGraph 개념.md`<br>`raw/내 주의 집중 시간을 되돌려준 11가지 사소한 생활 습관의 변화.md`<br>`raw/40억 달러 대기업이 깨뜨린 오픈소스와 개발자 협박의 역풍.md`<br>`raw/AI는 개발자를 대체하는 것이 아니라 더 심각한 일을 하고 있다.md`<br>`raw/AI가 내 글쓰기 커리어를 죽였다. AI 만세.md`<br>`raw/2026년 AI 보조 코딩은 하나의 기술이다. 실제로 이 기술을 마스터하는 방법.md`<br>`raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md`<br>`raw/디지털 제품 제작은 잊으세요. 대신 이것에 집중하세요.md`<br>`raw/내가 Obsidian을 정리하는 방법 - 다니엘 프린디.md`<br>`raw/AI 네이티브 세컨드 브레인을 구축하는 방법 (2026년 방식).md`<br>`raw/60일간 11번의 기술 인터뷰를 치르며 깨달은 아무도 말해주지 않는 패턴.md`<br>`raw/Claude Code를 밑바닥부터 직접 구현해 보았다.md`<br>`raw/만약 단 5편의 AI 논문만 읽어야 한다면 바로 이것입니다.md`<br>`raw/Claude Code 프로젝트를 위한 MEMORY.md.md`<br>`raw/옵시디언 마스터하기 - 노트를 세컨드 브레인으로 만드는 완벽 가이드.md`<br>`raw/마이크로서비스 대신 모듈러 모놀리스 — AI 에이전트가 코드를 읽기 시작했을 때 바뀐 것들.md`<br>`raw/2026년을 위한 웹 디자인 및 빌드 워크플로우.md`<br>`raw/RAG 시스템 초보자부터 전문가까지의 완전 가이드 (2026년 에디션).md`<br>`raw/AI 코딩 에이전트와 함께하는 명세 기반 개발 결정판 가이드.md`<br>`raw/테일윈드의 고군분투는 무너지는 사상누각의 징조다.md`<br>`raw/좋은 삶을 만드는 것에 대한 지루한 진실.md`<br>`raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md`<br>`raw/Anthropic이 Opus 4.8에 대해 말하지 않은 것 - 하네스를 흡수하는 Anthropic.md`<br>`raw/LLM에게 옵시디언 볼트 열쇠를 주면 일어나는 일.md` | [[모듈러 모놀리스]] (신규/핵심), [[MEMORY.md 운영 원칙]] (신규/핵심), [[사양 기반 개발 (Spec Driven Development)]] (보강/핵심 승격), [[AI 엔지니어 필수 논문]] (신규), [[Figma 에이전트 연동]] (신규), [[오픈소스 라이선스 갈등과 커뮤니티 역풍]] (신규), [[프론트엔드 스타일링 패러다임]] (신규), [[AI 세컨드 브레인]] (보강/핵심), [[AI 코딩 에이전트 검증 전략]] (보강/핵심), [[Agent Harness]] (보강/핵심), [[DESIGN.md 워크플로우]] (보강/핵심), [[Lethal Trifecta]] (보강/핵심), [[생성형 AI 면접 평가 축]] (보강), [[RAG 아키텍처 선택]] (보강), [[한글 AI 번역투 탐지 및 윤문 워크플로]] (보강) | done | [[log#2026-06-12]] |
| 2026-06-11 | `raw/Hermes, OpenClaw, ChatGPT 에이전트 및 미래 AI 시스템의 실제 작동 원리.md`<br>`raw/5개의 새로운 플러그인으로 옵시디언 워크플로우 재구축하기 (2026년 설정).md`<br>`raw/마이크로소프트는 엔지니어들에게 AI 사용 중단을 지시했고, 우버는 4개월 만에 연간 AI 예산을 모두 탕진했다. 아무도 말하지 않는 진실.md`<br>`raw/AI 에이전트는 죽었다. 88퍼센트가 프로덕션 도달 전에 실패하는 이유.md`<br>`raw/오픈소스 모델로도 충분하다. 필요하지 않은 지능에 비용을 과다하게 지출하지 마라.md`<br>`raw/16GB Mac mini에서 Qwen 3.5 122B LLM 실행하기 - TurboQuant-MLX를 활용한 MoE 전문가 스트리밍.md`.md`<br>`raw/Hermes 에이전트의 내부 구조 - 자가 개선 에이전트의 작동 원리.md`<br>`raw/AI 디자인 시스템에 윤리, 접근성, 그리고 기억을 부여한 방법.md`<br>`raw/GBrain - 에이전트를 위한 오픈소스 장기 기억 및 지식 그래프 인프라.md`<br>`raw/일주일 동안 지속 실행되는 에이전틱 시스템 구축하기.md` | [[에이전트 복리 실패의 수학]] (신규/핵심), [[오픈소스 LLM 경제성과 벤더 종속성 해지]] (신규/핵심), [[유기적 개인 지식 시스템]] (신규), [[Vibe Coding과 Agentic Engineering]] (보강), [[Agent Harness]] (보강/핵심), [[Lethal Trifecta]] (보강/핵심), [[AI 시대 디자인 시스템]] (보강/핵심), [[Quartz로 Obsidian Wiki 배포하기]] (보강), [[공간 지능]] (보강), [[AMI Labs]] (보강), [[모라벡의 역설]] (보강), [[성장 마인드셋]] (보강), [[세계 모델]] (보강), [[성공을 결정하는 5가지 핵심 자질]] (보강), [[학습된 낙관주의]] (보강), [[JEPA]] (보강), [[약한 연결의 힘]] (보강), [[Claude Design]] (보강), [[Spec Kit]] (보강), [[의도적 연습]] (보강), [[지연된 만족]] (보강), [[Claude Cowork]] (보강), [[쓰라린 교훈]] (보강), [[케이브맨]] (보강) | done | [[log#2026-06-11]] |
| 2026-06-10 | `raw/What Is MCP? Build a Custom MCP Server in Python-ko.md`<br>`raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md`<br>`raw/Claude Code와 Obsidian으로 AI 세컨드 브레인을 만든 방법.md`<br>`raw/Hermes Agent와 Ollama 로컬 설치 초고속 가이드.md`<br>`raw/파이썬 AI 에이전트 프레임워크 6종 비교 분석.md`<br>`raw/Hermes 에이전트와 함께 사용하기 좋은 오픈소스 내부 도구 5가지.md`<br>`raw/AI가 생성한 UI 디자인은 이제 인간 디자이너의 80퍼센트보다 우수하다.md`<br>`raw/Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요.md`<br>`raw/인생의 성공을 결정하는 5가지 핵심 자질.md`<br>`raw/느낌 코딩의 시대는 끝났다 - GitHub Spec Kit과 명세 기반 개발.md`<br>`raw/원시인 모드로 토큰 아끼려다 6만 스타 오픈소스에 PR 보낸 이야기.md`<br>raw/옵시디언 AI 제2의 뇌는 기억이 아니다.md<br>raw/SpaceX의 파격적인 AI 인프라 전략 - 순수 C 언어로 22만 대 GPU를 제어하다.md<br>`raw/당신의 고양이가 챗GPT보다 세상을 더 잘 이해하는 이유.md`<br>`raw/완벽하게 기계 가독성을 갖춘 디자인 시스템.md`<br>`raw/지루한 업무라고 자동화하는 클로드 코워크 프롬프트 7가지.md`<br>`raw/클로드 디자인은 과연 디자이너를 대체할까.md`<br>`raw/2026년 AI 에이전트 워크플로우 핵심 패턴 분석.md`<br>`raw/2026년 오픈소스 LLM 플랫폼 비교 가이드 - Ollama, OpenRouter, Groq, NVIDIA NIM.md`<br>`raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md`<br>`raw/UI 디자인을 위한 최고의 AI 도구 10가지와 워크플로우.md` | [[Model Context Protocol]] (신규/핵심), [[멀티 에이전트 코스 빌더]] (신규), [[파이썬 AI 에이전트 프레임워크 6종 비교 분석]] (신규), [[Hermes Agent와 오픈소스 내부 도구 연동]] (신규), [[LLM Wiki 운영 패턴]] (보강), [[Hermes Agent]] (보강), [[AI 오픈소스 작업대]] (보강), [[Claude Design]] (보강), [[UI UX 디자인 AI 워크플로우]] (보강), [[Claude.md 운영 원칙]] (보강), [[케이브맨]] (보강), [[SpaceX C 언어 기반 AI 인프라 전략]] (신규), [[성공을 결정하는 5가지 핵심 자질]] (신규), [[학습된 낙관주의]] (신규), [[성장 마인드셋]] (신규), [[지연된 만족]] (신규), [[의도적 연습]] (신규), [[약한 연결의 힘]] (신규), [[Spec Kit]] (보강), [[사양 기반 개발 (Spec Driven Development)]] (보강), [[Vibe Coding과 Agentic Engineering]] (보강), [[세계 모델]] (보강), [[완전히 기계 읽기 가능한 디자인 시스템]] (보강), [[Claude Cowork]] (보강), [[2026년 오픈소스 LLM 플랫폼 비교]] (신규), [[Andrew Ng 4 에이전틱 디자인 패턴]] (보강), [[DESIGN.md 워크플로우]] (보강), [[UI UX 디자인 AI 워크플로우]] (보강) | done | [[log#2026-06-10]] |
| 2026-06-09 | `raw/Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko.md`<br>`raw/케이브맨을 써보고 장벽에 부딪혀 결국 65k 스타 저장소에 Pull Request를 보낸 이야기-ko.md`<br>`raw/바이브 코딩의 종말-ko.md` | [[Hermes Agent]] (신규), [[케이브맨]] (신규), [[사양 기반 개발 (Spec Driven Development)]] (신규), [[Spec Kit]] (신규), [[Vibe Coding과 Agentic Engineering]] (보강), [[OpenClaw]] (보강) | done | [[log#2026-06-09]] |
| 2026-06-09 | `raw/UI 디자인을 위한 최고의 AI 도구 10선. 내 UI_UX 워크플로우를 10배 개선한 방법-ko.md`<br>`raw/완전히 기계 읽기 가능한 디자인 시스템-ko.md`<br>`raw/DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko.md`<br>`raw/우리가 수백 개의 Claude 협업 프롬프트를 테스트해 봤다. 지루한 작업을 자동화하는 7가지 프롬프트-ko.md`<br>`raw/Claude Design이 디자이너를 대체할 것인가-ko.md`<br>`raw/ChatGPT보다 세상을 더 잘 이해하는 당신의 고양이, 그리고 이것 때문에 메타를 그만둔 AI 대부 중 한 명-ko.md` | [[완전히 기계 읽기 가능한 디자인 시스템]] (신규/핵심), [[DESIGN.md 워크플로우]] (신규), [[UI UX 디자인 AI 워크플로우]] (신규), [[DESIGN.md 운영 원칙]] (보강), [[AI 시대 디자인 시스템]] (보강), [[Claude Design]] (신규), [[세계 모델]] (신규/핵심), [[JEPA]] (신규), [[쓰라린 교훈]] (신규), [[공간 지능]] (신규), [[모라벡의 역설]] (신규), [[AMI Labs]] (신규), [[Claude Cowork]] (신규) | done | [[log#2026-06-09]] |
| 2026-06-07 | `raw/im-not-ai.md`<br>`raw/Give Your AI Agent 36 Superpowers. Long‑Term Memory in Minutes with GBrain (Open Source)-ko.md`<br>`raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md`<br>`raw/Building an MCP Ecosystem at Pinterest-ko.md`<br>`raw/Why senior UX designers are struggling in 2026-ko.md`<br>`raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max Quietly Replaced All Three-ko.md`<br>`raw/The Best Way to Make AI Write Like You-ko.md`<br>`raw/What Is MCP? Build a Custom MCP Server in Python-ko.md`<br>`raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md`<br>`raw/I Sat in Engineering Meetings for Two Years Without Understanding What a Branch Was-ko.md`<br>`raw/Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko.md` | [[한글 AI 번역투 탐지 및 윤문 워크플로]] (신규/보강), [[GBrain]] (신규), [[oMLX]] (신규), [[Pinterest MCP]] (신규), [[AI 세컨드 브레인]] (신규/핵심), [[AI Experience Architect]] (보강/핵심), [[Agent Harness]] (보강/핵심), [[AI 네이티브 엔지니어링 조직]] (보강) | done | [[log#2026-06-07]] |
| 2026-06-04 | `raw/gajae-code_AI_코딩_하네스_분석.md`, `raw/frontend-design-skill.md`, `raw/AI 겨울이 시작됐다-ko.md`, `raw/2026년에 가장 많이 설치된 디자인 문서. 단 30줄짜리였다. Anthropic 엔지니어 두 명이 썼다. 디자이너들은 아직 읽지 않았다-ko.md`, `raw/2026년의 AI 에이전트 실전 가이드-ko.md`, `raw/AI가 당신처럼 글을 쓰게 만드는 가장 좋은 방법-ko.md`, `raw/Claude 900달러 컨설턴트를 대체하는 10가지 프롬프트-ko.md`, `raw/UX는 죽지 않았다. 그저 화면에 대한 이야기를 멈췄을 뿐이다-ko.md`, `raw/거의 모든 나쁜 결정을 멈추는 단 하나의 질문-ko.md`, `raw/한 문장을 500달러짜리 온라인 코스로 바꾸는 멀티 에이전트 시스템 구축하기-ko.md` | [[Gajae-Code]] (신규), [[프론트엔드 디자인 스킬]] (보강/핵심 승격), [[AI Slop]] (보강), [[AI 기본값 구현체]] (보강), [[AI 겨울과 경제적 조정]] (신규), [[Agent Harness]] (보강), [[Claude.md 운영 원칙]] (보강), [[AI Experience Architect]] (보강/핵심 승격), [[전략적 사고]] (보강), [[병렬 에이전트 세션 운영]] (보강) | done | [[log#2026-06-04]] |
| 2026-06-03 | `raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md`, `raw/Agentic AI, design systems & Figma. a practical guide-ko.md`, `raw/Why senior designers are doing four jobs for one salary in 2026-ko.md`, `raw/Hermes Agent Is Cool. Running It Safely 24_7 Is the Real Trick.-ko.md`, `raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md`, `raw/You’re Using AI to Write Code. You’re Not Using It to Review Code.-ko.md`, `raw/AI Agent Best Practices. Production-Ready Harness Engineering (2026 Guide)-ko.md`, `raw/After Claude Code. 6 Open-Source Tools You Should Know-ko.md`, `raw/The Open-Source Agent Toolkit in 2026-ko.md`, `raw/How to Get Into the Top 1% in the Next 12 Months-ko.md`, `raw/How to write a DESIGN.md file Claude can actually use-ko.md` | [[AI 시대 디자인 시스템]] (보강), [[AI 디자인 역할 맵]] (보강), [[AI 코딩 에이전트 검증 전략]] (보강), [[Harness Engineering]] (보강), [[AI 오픈소스 작업대]] (보강), [[LLM Wiki 운영 패턴]] (보강), [[LLM Wiki 구현 선택지]] (보강), [[Agent Native Infrastructure]] (보강), [[OpenClaw]] (보강), [[기록으로 성장하는 법]] (보강), [[Hermes Agent 24-7 운영]] (신규), [[늦게 나타나는 지표]] (신규), [[DESIGN.md 운영 원칙]] (보강) | done | [[log#2026-06-03]] |
| 2026-05-29 | `raw/산만하고 과자극에 시달리던 내 뇌를 고친 7가지 - 출판형 다듬기.md`, `raw/디자인 팀이 만드는 방식을 다시 짜기 - 출판형 다듬기.md` | [[주의력 회복]] (신규), [[AI 디자인 팀 운영]] (신규) | done | [[log#2026-05-29]] |
| 2026-05-29 | `raw/UX를 위해 먼저 읽었어야 할 AI 가이드 - 출판형 다듬기.md`, `raw/AI를 UX에 쓰는 법 2: 프롬프트, 프리퍼런스, 설정 - 출판형 다듬기.md`, `raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`, `raw/GraphRAG 대 Vectorless RAG 대 Vector RAG - 2026 고급 Context Engineering 가이드 - 출판형 다듬기.md`, `raw/효과적인 리더십을 위한 전략적 사고를 키우는 법 - 출판형 다듬기.md` | [[AI를 UX에 쓰는 법]] (신규), [[RAG 아키텍처 선택]] (신규), [[전략적 사고]] (신규) | done | [[log#2026-05-29]] |
| 2026-05-29 | `raw/AI와 디자인 시스템 - 출판형 다듬기.md`, `raw/하네스를 내 것으로 만들기 - 출판형 다듬기.md`, `raw/아이디어에서 현실 시스템까지 AI 에이전트 구축하기 - 출판형 다듬기.md`, `raw/지금 개발자들이 주목하는 오픈소스 GitHub 프로젝트 15선 - 출판형 다듬기.md`, `raw/AI 에이전트에게 Prompt Engineering은 죽었다. 이제 진짜 중요한 것은 Context Engineering이다.md`, `raw/Skills, MCP, Tool Calling. 에이전트 확장의 세 층.md`, `raw/Structuring Agents, Skills, and MCPs 🤖🧩.md`, `raw/cc101_axwith_ko.html` | [[AI 시대 디자인 시스템]] (보강), [[Harness Engineering]] (보강), [[Agent Harness]] (보강), [[AI 오픈소스 작업대]] (보강), [[Context Engineering]] (보강), [[에이전트 확장 3계층]] (보강), [[AI 에이전트 런타임 역할 맵]] (보강), `raw/cc101_axwith_ko.html`은 `raw/cc101_axwith_ko.md`의 HTML 중복본 | done | [[log#2026-05-29]] |
| 2026-05-28 | `raw/Bloated AI Slop Labs on X 2059651388901335196 한국어 번역.md` | [[AI 하네스 최소화]] (신규), [[Harness Engineering]] (보강), [[AI Slop]] (보강) | done | [[log#2026-05-28]] |
| 2026-05-28 | `raw/Hermes Agent에 구글 연결하는 초보자 매뉴얼.md`, `raw/메시징 서버의 스트레스 테스트 노하우와 AI가 덜어 준 부분.md` | [[Hermes Agent Google Workspace 연결]] (신규), [[메시징 서버 스트레스 테스트 운영 원칙]] (신규), [[Agent Native Infrastructure]] (보강), [[Claude Code 오케스트레이션]] (보강), [[Harness Engineering]] (보강) | done | [[log#2026-05-28]] |
| 2026-05-26 | `raw/Andrej Karpathy가 AI 코딩 에이전트의 고질병을 고치는 방법. 마크다운 파일 하나.md`, `raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md` | [[Agent Harness]], [[Harness Engineering]] (보강), [[Claude.md 운영 원칙]] (보강), [[AI 코딩 에이전트 검증 전략]] (보강), [[Meta-Harness]] (보강), [[에이전트 코딩 4원칙]] (보강) | done | [[log#2026-05-26]] |
| 2026-05-26 | `raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md`, `raw/Anthropic 엔지니어어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md`, `raw/99%의 사람보다 더 나은 Harness Engineer를 만드는 법.md` | [[AI 산출물 포맷 결정 트리]] (신규), [[Claude.md 운영 원칙]] (보강), [[Harness Engineering]] (보강), [[Agent Harness]] (보강), [[LLM Wiki 운영 패턴]] (보강), [[Agent Native Infrastructure]] (보강) | done | [[log#2026-05-26]] |
| 2026-05-26 | `raw/Code Is Not Cheap. How to Multiply Your AI’s Output With Software Fundamentals.md`, `raw/From faster pencil to AI Experience Architect. a designer’s path.md`, `raw/Good Design Doesn’t Happen By Default.md`, `raw/The Complete (Honest) Guide to OpenClaw.md`, `raw/The most important Design System in 2026 that designers missed was built by a developer..md` | [[AI Experience Architect]] (신규), [[디자인 시스템 기본값]] (신규), [[OpenClaw]] (신규), [[shadcn-ui]] (신규), [[AI 디자인 역할 맵]] (신규), [[AI 기본값 구현체]] (신규), [[AI 에이전트 런타임 역할 맵]] (신규), [[AI 네이티브 작업 시스템]] (신규), [[AI 시대 소프트웨어 펀더멘탈]] (보강), [[AI 시대 디자인 시스템]] (보강), [[에이전트 확장 3계층]] (보강), [[AI 오픈소스 작업대]] (보강) | done | [[log#2026-05-26]] |
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
| [[OpenCode]] | Claude Code 계열 workflow와 provider/model 선택을 연결하는 도구 허브다. | 추가 실사용 자료 ingest 후 tool note 보강 |

## 점검 대기

### 도구·spec 변동성

| 항목 | 사유 | 처리 방향 |
| --- | --- | --- |
| [[Hermes Agent 24-7 운영]] | Hermes runtime, skill, sandbox, curator 조합은 구현 경로가 빠르게 바뀌는 tool note다. | 실제 repo 상태와 최신 문서 확인 |
| [[Context Mode]] | MCP/sandbox/FTS5 도구로 인덱스·검색·sandbox 명세가 빠르게 변동한다. | 실사용 전 공식 docs 확인 |
| [[GStack]] | command 목록, host 지원, 설치 방식이 빠르게 바뀌는 tool note다. | 실사용 전 공식 GitHub 저장소 확인 |
| [[AMI Labs]] | 얀 르쿤의 세계 모델 스타트업이며 사업 및 연구 로드맵의 변동성이 존재한다. | 공식 채널 및 연구 발표 추적 |
| [[Infisical 도입 전략]] | 가격과 enterprise 기능 범위가 변동되며 raw와 공식 출처 간 충돌이 있다. | 도입 전 공식 pricing/license 재확인 |
| [[Infisical 헤드리스 인증]] | Universal Auth와 Service Token 권장 상태가 변동될 수 있다. | 운영 적용 전 공식 Infisical docs 확인 |
| [[OpenAgent Team Mode]] | opencode 재시작 요구와 tmux_visualization 옵션이 버전 영향 받는다. | 실사용 후 evergreen 검토 |
| [[OpenClaw]] | 활성 사용자 수, 배포 비율, 보안 advisories는 빠르게 바뀌며 실제 권한 모델 검증이 필요하다. | 도입 전 공식 docs·release note·security advisory 재확인 |
| [[OpenCode]] | agent, skill, MCP, provider 설정이 빠르게 바뀌는 도구 문서다. | 실사용 전 공식 OpenCode docs 확인 |
| [[Pi Coding Agent]] | 설치 패키지명, provider, extension/package API가 빠르게 바뀌는 도구 문서다. | 실사용 전 공식 Pi docs 확인 |
| [[shadcn-ui]] | GitHub star, MCP 지원 범위, 도구별 scaffold 기본값은 빠르게 변한다. | 실제 도입 전 공식 docs와 사용하는 생성 도구의 기본 scaffold 정책 확인 |
| [[바선생]] | Claude Code 대화 분석 도구의 6대 차원 가중치와 게이트 조건은 raw 시점 기준이다. | 공식 README 업데이트 시 재검토 |
| [[온디바이스 TTS]] | 모델 스펙, benchmark, 라이선스와 배포 가이드는 빠르게 변동한다. | 도입 전 공식 모델 카드/README 재확인 |
| [[한글 AI 번역투 탐지 및 윤문 워크플로]] | im-not-ai 스킬 및 에이전트의 CLI/환경 의존적인 동작 방식은 버전에 영향을 받는다. | 실사용 및 추가 검증 후 evergreen 검토 |

### 단일 출처·외부 검증 부족

| 항목 | 사유 | 처리 방향 |
| --- | --- | --- |
| [[Meta-Harness]] | Stanford/MIT/KRAFTON 공동 연구의 단일 논문 기준이며 3개 도메인 실험은 후속 재현 자료가 더 필요하다. | 후속 실험 자료 ingest 시 evergreen 검토 |
| [[Neural Computer]] | 전망 성격이 강해 추가 출처가 필요하다. | 관련 카파시 원문 또는 후속 자료 검증 |
| [[AI 하네스 최소화]] | 단일 X thread에서 나온 4 skills / 4 agents 주장이라 범용화 전 추가 사례 검증이 필요하다. | 후속 harness workflow 사례 ingest 시 재검토 |
| [[Ralph Loop]] | context 50% 기준, 100개 이상 headless 세션, 사람 개입 0%는 영상 데모 주장이다. | 실제 repo 적용 시 실패율, 충돌률, review 비용 검증 |
| [[매퍼코 3스킬 워크플로우]] | 정확한 영문 명칭과 워크플로우 단계 시간은 검증 대기다. | 실제 적용 사례 ingest 시 evergreen 검토 |
| [[생성형 AI 면접 평가 축]] | 2026년 시점 질문 분포와 평가 축 정리라 채용 시장 변화 영향을 크게 받는다. | 후속 채용 자료 ingest 시 재검토 |
| [[SpaceX C 언어 기반 AI 인프라 전략]] | 일론 머스크의 트윗 및 단일 분석 글 기준이며, 22만 대 대규모 C 기반 스택의 구체 성능 지표 및 구현 세부는 지속 검증이 필요하다. | 추가 인프라 구축 사례 및 xAI/SpaceX 공식 기술 블로그 발표 추적 후 evergreen 검토 |

### 모델·가격·시장 변동성

| 항목 | 사유 | 처리 방향 |
| --- | --- | --- |
| [[강한 모델로 덜 헤매기]] | 특정 모델명, 벤치마크 점수, 가격 비교는 빠르게 변동한다. | 최신 모델/가격 자료 ingest 시 재검토 |

### evergreen 유지 중인 시점 주의 노트

| 항목 | 사유 | 처리 방향 |
| --- | --- | --- |
| [[Agentic 패턴 진화]] | KV-cache 비용, Copilot 점유율, Manus 사례 등 일부 숫자는 시점 의존적이다. | 모델/벤치마크/가격 변동 시 보강 |
| [[AI 시대 소프트웨어 펀더멘탈]] | 개념 프레임은 안정적이지만 일부 사례와 수치는 발표 시점 의존적이다. | 수치보다 판단 프레임 중심으로 유지, 후속 fundamentals raw 누적 시 보강 |

## 현재 점검 상태

- 111개 파일은 모두 wiki/에 반영되어 raw 미반영 0개다.
- 현재 상태 분포는 evergreen 78개, needs-review 19개, draft 1개다.
- broken wikilink와 orphan page는 0개로 확인됐다.
- `status: needs-review` 노트 19개는 모두 `## 충돌` 섹션을 갖추도록 정리됐다.

## 후속 ingest 대기 묶음

| 묶음 | 대상 노트 | 필요한 raw 유형 | 목표 |
| --- | --- | --- | --- |
| 조직 운영 검증 | [[AI 네이티브 엔지니어링 조직]], [[Ralph Loop]], [[제품 오버행]] | 비 Anthropic 조직 사례, 실패 사례, 운영 지표, 검증/승인 구조 자료 | 조직/자동화 주장 검증 및 core 재판단 |
| 도구·spec 업데이트 | [[Context Mode]], [[GStack]], [[Graphify]], [[OpenAgent Team Mode]], [[OpenCode]], [[Pi Coding Agent]], [[shadcn-ui]], [[OpenClaw]], [[온디바이스 TTS]] | 공식 docs, release note, README, 설치/배포 가이드 | 버전 변동 흡수 및 needs-review 유지/해제 판단 |
| 도구·spec 업데이트 | [[Gajae-Code]] | 저장소 스냅샷 기준 workflow, state path, package metadata가 빠르게 바뀌는 하네스 분석 노트 | 다음 snapshot 또는 upstream release 때 재검토 |
| 보안·비밀관리 | [[Infisical 도입 전략]], [[Infisical 헤드리스 인증]], [[API Key 관리 원칙]] | pricing/license 변경, auth 권장 방식, 실제 운영 사고/대응 사례 | 도구 노트 최신화와 보안 체크리스트 보강 |
| 연구·전망 검증 | [[Meta-Harness]], [[Neural Computer]], [[생성형 AI 면접 평가 축]], [[강한 모델로 덜 헤매기]] | 후속 논문, 재현 자료, 시장/모델 업데이트, 채용 자료 | 단일 출처/시점 의존 주장 보강 |
| 디자인 작업 체계 | [[디자인 시스템 기본값]], [[AI 기본값 수용과 오버라이드 전략]], [[AI Experience Architect]] | 추가 디자인 조직 사례, 운영 문서 예시, override/approval 사례 | design core 축 보강 및 상위 허브 안정화 |
