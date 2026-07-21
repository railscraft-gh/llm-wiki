---
aliases:
  - 헤르메스 에이전트
  - Hermes 에이전트
core: false
created: 2026-06-09
sources:
  - raw/Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko.md
  - raw/Hermes Agent와 Ollama 로컬 설치 초고속 가이드.md
  - raw/Hermes 에이전트와 함께 사용하기 좋은 오픈소스 내부 도구 5가지.md
  - raw/클로드 디자인은 과연 디자이너를 대체할까.md
  - raw/2026년 AI 에이전트 워크플로우 핵심 패턴 분석.md
  - raw/완벽하게 기계 가독성을 갖춘 디자인 시스템.md
  - raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
  - raw/2026년 오픈소스 LLM 플랫폼 비교 가이드 - Ollama, OpenRouter, Groq, NVIDIA NIM.md
  - raw/파이썬 AI 에이전트 프레임워크 6종 비교 분석.md
  - raw/AI가 생성한 UI 디자인은 이제 인간 디자이너의 80퍼센트보다 우수하다.md
  - raw/UI 디자인을 위한 최고의 AI 도구 10가지와 워크플로우.md
  - raw/원시인 모드로 토큰 아끼려다 6만 스타 오픈소스에 PR 보낸 이야기.md
  - raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
  - raw/바이브 코딩의 종말-ko.md
  - raw/느낌 코딩의 시대는 끝났다 - GitHub Spec Kit과 명세 기반 개발.md
  - raw/SpaceX의 파격적인 AI 인프라 전략 - 순수 C 언어로 22만 대 GPU를 제어하다.md
  - raw/Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요.md
  - raw/지루한 업무를 자동화하는 클로드 코워크 프롬프트 7가지.md
  - raw/당신의 고양이가 챗GPT보다 세상을 더 잘 이해하는 이유.md
  - raw/옵시디언 AI 제2의 뇌는 기억이 아니다.md
  - raw/인생의 성공을 결정하는 5가지 핵심 자질.md
  - raw/케이브맨을 써보고 장벽에 부딪혀 결국 65k 스타 저장소에 Pull Request를 보낸 이야기-ko.md
  - raw/Claude Code와 Obsidian으로 AI 세컨드 브레인 구축하기.md
  - raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
  - raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 TurboQuant, 애플 실리콘 상륙.md
  - raw/Hermes 에이전트의 내부 구조 - 자가 개선 에이전트의 작동 원리.md
  - raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md
status: evergreen
tags:
  - llm
  - agent
  - open-source
type: tool
updated: 2026-07-10
---

# Hermes Agent

## 한 줄 정의
Nous Research가 2026년 3월에 개발한, 경험을 바탕으로 기술을 학습하고 진화시킬 수 있는 오픈소스 AI 에이전트 프레임워크이다. (출처: Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko)

## 핵심 요지
- **자동화된 기술 학습(Skill-Learning Automated)**: 수행한 작업 단계를 기술(skill)로 자동 저장하고 스스로 다듬어 재사용한다.
- **3층 구조 메모리**: 단기(대화 맥락), 장기(선호도), 기술(스킬)로 메모리를 관리하며 SQLite FTS5 기반 과거 대화 검색을 지원한다.
- **멀티 플랫폼 공유**: Telegram, Discord, Slack 등 12개 채널을 연동할 수 있고 채널 간 메모리가 통합 공유된다.
- **100% 로컬 구동**: Ollama 로컬 엔드포인트를 지정하여 클라우드 비용이나 API 키 없이 로컬 하드웨어(예: `gpt-oss:20b` 모델)로 실행할 수 있다.
- 100% 로컬 구동: Ollama 로컬 엔드포인트를 지정하여 클라우드 비용이나 API 키 없이 로컬 하드웨어(예: gpt-oss:20b 모델)로 실행할 수 있다.
- Hermes Agent는 closed learning loop 기반의 자가 개선 메모리를 활용해, 수동 리셋 없이도 사용자의 프로젝트, 선호도, 작업 리듬을 점진적으로 학습한다. (출처: raw/I Ran [[OpenClaw]] and Hermes on the Same Server. Today I Deleted One of Them.-ko.md)
- OpenRouter 글로벌 랭킹에서 [[OpenClaw]]를 제치고 활발하게 사용되는 대표적인 오픈소스 AI 에이전트로 부상하였다. (출처: raw/I Ran [[OpenClaw]] and Hermes on the Same Server. Today I Deleted One of Them.-ko.md)

## 상세

### 1. 자동화된 기술 학습 (Skill-Learning Automated)
인간이 수동으로 기술을 작성해야 하는 [[OpenClaw]]와 달리, Hermes Agent는 작업을 수행하면서 이를 기술로 저장하고 실행 과정에서 비효율적이거나 낡은 부분을 스스로 수정(Self-improvement)해 나간다. 예를 들어, 사용자가 "Docker를 사용하여 서비스를 배포해줘"라고 요청하면, 배포 과정을 한 번 수행한 후 그 절차를 재사용 가능한 기술 파일로 저장하여 차후 동종 작업에서 속도와 정확도를 향상시킨다.

### 2. 메모리 3층 구조와 세션 검색
AI의 고질적인 문맥 유실(건망증)을 해결하기 위해 세 가지 레이어로 정보를 축적한다.
- **`MEMORY.md`**: 프로젝트 환경, 선호도 등을 저장하는 에이전트의 개인 메모이다.
- **`USER.md`**: 이름, 시간대, 대화 스타일 등 사용자 프로필 정보이다.
- **세션 검색 (Session Search)**: 과거의 모든 대화 세션을 SQLite 데이터베이스에 기록하고, FTS5(Full-Text Search)를 사용해 수주일 전 나눈 대화 맥락까지 호출해낸다.

### 3. 로컬 셋업 및 Ollama 연동
- **설치**: `curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash` 명령어로 설치 마법사를 시작한다.
- **마이그레이션**: Nous Research의 이전 에이전트 툴인 [[OpenClaw]] 데이터(`~/.openclaw`)를 자동으로 마이그레이션할 수 있다. 필요 시 `openclaw-migration` 기술을 수동 구동한다.
- **Ollama 연동**: Base URL을 `http://localhost:11434/v1`로 지정하여 Custom OpenAI-compatible endpoint를 구축하고, API 인증 없이 Microsoft의 200억 매개변수(20B) 모델인 `gpt-oss:20b` 같은 로컬 모델로 추론을 구성한다. 컨텍스트 길이는 자동 감지를 위해 비워둔다.
- **모델 재설정**: 설정이 꼬이거나 다른 로컬 모델로 교체하고 싶을 경우 터미널에서 `hermes model`을 실행하여 로컬 엔드포인트를 수정한다.
- **로컬 구동 성능**: 로컬 단독 하드웨어 자원만 사용할 때 컨텍스트 제한 13.1만 토큰 중 약 9.23K 토큰을 사용하는 상태에서 단 2초 안팎의 응답 속도를 보여 쾌적한 추론 속도를 실감할 수 있다.

### 4. [[TurboQuant]]를 통한 로컬 M4 맥 성능 비약
Hermes 에이전트 로컬 구동 시 핵심 병목인 KV 캐시의 메모리 사용량을 해결하기 위해 구글 리서치(ICLR 2026 채택, arXiv:2504.19874)의 **[[TurboQuant]]** 캐시 압축 기술을 백엔드에 장착할 수 있다.
- **작동 원리**: 아웃라이어 이상치를 가우시안으로 고르게 펴주는 폴라퀀트(PolarQuant) 1단계 압축과 잔차 오차를 차원당 1비트로 보정하는 QJL(Quantised Johnson-Lindenstrauss) 2단계 결합 구조로 캐시 정밀도를 무손실 유지한다.
- **정량적 메모리 효과**: 48GB Unified Memory를 갖춘 M4 Pro 기기에서 `arozanov/turboquant-mlx` 모듈을 연동해 Qwen2.5-32B-Instruct-4bit로 16K 컨텍스트를 돌릴 때, KV 캐시 공간이 4.2GB에서 897MB로 **4.6배** 급감한다. M4 Max 64GB 기기에서 Gemma 4 31B 128K 구동 시 KV 캐시를 13.3GB에서 4.9GB로 줄이며 피크 메모리를 75.2GB에서 65.8GB로 낮춘다.
- **통합 생태계**: `mlx-vlm` v0.4.3에서 Gemma 4 출시 당일(day-zero) 지원과 [[TurboQuant]] 통합을 완료했으며, SwiftLM 라이브러리를 통해 네이티브 iOS 연동 및 Swift LLM 서버로도 활용된다.

### 5. 주요 설정 지표 (Agent Settings)
- `max iterations`: 도구 호출 최대 반복 횟수 (기본값: 60)
- `Tool Progress Display`: 실시간 수행 작업 시각화 정책 ('all')
- `Context Compression`: 메모리 한계 절반(0.5) 도달 시 이전 대화 자동 요약
- `Session Reset Policy`: 비활성 1440분(24시간) 또는 오전 4시 도달 시 세션 리셋 (대화 중 `/reset` 명령어로 즉시 초기화 가능)
- **도구 및 브라우저**: DuckDuckGo 내장 검색, Edge TTS, Chromium Local Browser를 탑재한다.

### 6. [[OpenClaw]]와의 비교
- **Hermes Agent 강점**: 개인 동반자(Personal Advisor) 특화, 자동 기술 자가 학습(자가 개선), 음성 지원(기본 Microsoft Edge TTS), 가벼운 리소스 점유(20MB 대 200MB 이상).
- **[[OpenClaw]] 강점**: 멀티 에이전트 조정 및 채널 관리(Fleet 지휘관), 브라우저 자동화, 풍부한 플러그인 생태계와 대규모 커뮤니티의 검증된 실적(깃허브 스타 수 30.7만 개 대 Hermes Agent 6천 개 남짓).

### 7. 오픈소스 내부 도구 플랫폼과의 연동
Hermes Agent는 NocoBase, Appsmith, Budibase, Directus, Baserow와 같은 5대 로우코드/노코드 플랫폼과 긴밀하게 연동된다. 자연어 지시를 통해 DB 스키마, UI 기획, 절차 프로세스를 구축하고 권한을 설정할 수 있으며, 이 노하우를 '스킬'로 저장해 재사용한다. 구체적인 동작 방식은 [[Hermes Agent와 오픈소스 내부 도구 연동]]을 참조한다.

### 8. 자가 개선 및 세부 아키텍처
Hermes Agent는 경험을 코드로 자산화하여 영구 스킬로 등록하고 미세 패치(`patch`) 방식으로 진화하는 독자적인 자가 학습 피드백 루프를 핵심 엔진으로 지닌다. 상세 아키텍처는 [[Hermes 에이전트 자가 개선 아키텍처]]를 참조한다.

### 자가 개선 및 실무 운용
- **[[Closed Learning Loop]]**: Hermes Agent(Lollie 등)는 작업 완료 시마다 단계를 스스로 분석하여 재사용 가능한 패턴을 추출하므로, 인스턴스가 리셋되더라도 사용자의 작업 흐름과 선호도를 안정적으로 유지함.
- **OpenRouter 글로벌 랭킹**: 오픈소스 모델 허브인 OpenRouter 글로벌 랭킹에서 기존 [[OpenClaw]]를 제치고 가장 활발히 쓰이는 오픈소스 에이전트로 기록됨.

### 자가 개선 및 실무 운용
- **[[Closed Learning Loop]]**: Hermes Agent(Lollie 등)는 작업 완료 시마다 단계를 스스로 분석하여 재사용 가능한 패턴을 추출하므로, 인스턴스가 리셋되더라도 사용자의 작업 흐름과 선호도를 안정적으로 유지함.
- **OpenRouter 글로벌 랭킹**: 오픈소스 모델 허브인 OpenRouter 글로벌 랭킹에서 기존 [[OpenClaw]]를 제치고 가장 활발히 쓰이는 오픈소스 에이전트로 기록됨.

### 자가 개선 및 실무 운용
- **[[Closed Learning Loop]]**: Hermes Agent(Lollie 등)는 작업 완료 시마다 단계를 스스로 분석하여 재사용 가능한 패턴을 추출하므로, 인스턴스가 리셋되더라도 사용자의 작업 흐름과 선호도를 안정적으로 유지함.
- **OpenRouter 글로벌 랭킹**: 오픈소스 모델 허브인 OpenRouter 글로벌 랭킹에서 기존 [[OpenClaw]]를 제치고 가장 활발히 쓰이는 오픈소스 에이전트로 기록됨.

## 예시

- 사용자로부터 "Docker를 사용해 백엔드 서비스를 배포해줘"라는 명령을 받으면, 빌드 및 배포 명령과 설정을 실행한 후 해당 성공 흐름을 내부 `skills/` 디렉토리에 하나의 기술 코드로 저장한다. 이후 유사 요청 시 이를 로드해 활용한다.

### 커뮤니티 마이그레이션 비율
- **단독 이전**: [[OpenClaw]] Reddit 커뮤니티의 25% 사용자가 Hermes Agent로 전향하였으며, 주된 이유는 더 나은 메모리와 손쉬운 셋업임.
- **하이브리드 셋업**: 25% 사용자는 [[OpenClaw]]를 메신저/인프라 라우팅 게이트웨이로 쓰고, 실제 실행(execution) 및 메모리 관리는 Hermes Agent에게 위임하는 셋업을 취함.

### 커뮤니티 마이그레이션 비율
- **단독 이전**: [[OpenClaw]] Reddit 커뮤니티의 25% 사용자가 Hermes Agent로 전향하였으며, 주된 이유는 더 나은 메모리와 손쉬운 셋업임.
- **하이브리드 셋업**: 25% 사용자는 [[OpenClaw]]를 메신저/인프라 라우팅 게이트웨이로 쓰고, 실제 실행(execution) 및 메모리 관리는 Hermes Agent에게 위임하는 셋업을 취함.

### 커뮤니티 마이그레이션 비율
- **단독 이전**: [[OpenClaw]] Reddit 커뮤니티의 25% 사용자가 Hermes Agent로 전향하였으며, 주된 이유는 더 나은 메모리와 손쉬운 셋업임.
- **하이브리드 셋업**: 25% 사용자는 [[OpenClaw]]를 메신저/인프라 라우팅 게이트웨이로 쓰고, 실제 실행(execution) 및 메모리 관리는 Hermes Agent에게 위임하는 셋업을 취함.

## 충돌
- **버전 미성숙에 따른 한계**: v0.2.0 기준 메모리 정확도가 완벽하지 않고 의도치 않은 기술 생성이 일어날 수 있어, 운영 중 실시간 수동 검증이 필요할 수 있다. (출처: Hermes 에이전트 + Ollama. 로컬에 설치하는 가장 빠른 방법-ko)

## 관련 노트
- [[OpenClaw]]
- [[Hermes Agent 24-7 운영]]
- [[Hermes Agent Google Workspace 연결]]
- [[Agent Native Infrastructure]]
- [[Hermes Agent와 오픈소스 내부 도구 연동]]
- [[2026년 오픈소스 LLM 플랫폼 비교]]
- [[GBrain]]
- [[Hermes 에이전트 자가 개선 아키텍처]]

