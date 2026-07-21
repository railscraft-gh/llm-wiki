---
aliases:
- Hermes 내부 도구 연동
- 에이전트 내부 도구 활용
core: false
created: 2026-06-10
sources:
- raw/Hermes 에이전트와 함께 사용하기 좋은 오픈소스 내부 도구 5가지.md
- raw/클로드 디자인은 과연 디자이너를 대체할까.md
- raw/2026년 AI 에이전트 워크플로우 핵심 패턴 분석.md
- raw/완벽하게 기계 가독성을 갖춘 디자인 시스템.md
- raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
- raw/2026년 오픈소스 LLM 플랫폼 비교 가이드 - Ollama, OpenRouter, Groq, NVIDIA NIM.md
- raw/파이썬 AI 에이전트 프레임워크 6종 비교 분석.md
- raw/AI가 생성한 UI 디자인은 이제 인간 디자이너의 80퍼센트보다 우수하다.md
- raw/UI 디자인을 위한 최고의 AI 도구 10가지와 워크플로우.md
- raw/Hermes Agent와 Ollama 로컬 설치 초고속 가이드.md
- raw/원시인 모드로 토큰 아끼려다 6만 스타 오픈소스에 PR 보낸 이야기.md
- raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
- raw/느낌 코딩의 시대는 끝났다 - GitHub Spec Kit과 명세 기반 개발.md
- raw/SpaceX의 파격적인 AI 인프라 전략 - 순수 C 언어로 22만 대 GPU를 제어하다.md
- raw/Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요.md
- raw/지루한 업무를 자동화하는 클로드 코워크 프롬프트 7가지.md
- raw/당신의 고양이가 챗GPT보다 세상을 더 잘 이해하는 이유.md
- raw/옵시디언 AI 제2의 뇌는 기억이 아니다.md
- raw/인생의 성공을 결정하는 5가지 핵심 자질.md
- raw/Claude Code와 Obsidian으로 AI 세컨드 브레인 구축하기.md
- raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
status: draft
tags:
- llm
- agent
- workflow
type: workflow
updated: '2026-06-22'
---

# [[Hermes Agent]]와 오픈소스 내부 도구 연동

## 한 줄 정의

[[Hermes Agent]]와 오픈소스 내부 도구 연동은 셀프 호스팅이 가능하고 플러그인 확장성이 높은 5대 로우코드/노코드 플랫폼을 에이전트와 연결하여, 자연어로 비즈니스 모듈 설계, 스키마 정의, 워크플로우 승인 및 데이터 가공 규칙을 설정하고 이를 스킬(Skill) 형태로 자산화하는 협업 워크플로우다.

## 핵심 요지

- **셀프 호스팅(Self-hosted)과 보안**: 기밀 데이터(고객 명부, 재무 실적 등) 유출을 방지하기 위해 로컬 또는 온프레미스로 구동할 수 있는 시스템 뼈대를 확보하고 독립형 에이전트와 결합한다.
- **자동화된 스킬(Skill) 자산화**: Hermes 에이전트는 한 번 수행한 설정 규칙, 쿼리 조건, 테이블 스키마 매핑 등의 작업을 '스킬'로 저장하여 향후 유사 모듈 구축 시 재사용한다.
- **도구별 역할 분담**: 대화면 UI 기획(Appsmith), 프로세스/결재 승인(Budibase), 비즈니스 모듈 및 권한 제어(NocoBase), 원천 DB/API 관리(Directus), 스프레드시트식 데이터 가공(Baserow) 등 플랫폼의 강점에 맞춰 에이전트를 다르게 결합한다.
- **가볍고 실속 있는 오버헤드**: Reddit 사용자가 [[OpenClaw]], Nanobot, Nanoclaw 등 다수의 에이전트 툴을 교차 벤치마크한 결과, 불필요한 오버헤드 없이 로컬 구동, 셀프 호스팅 관리, SSH 및 Telegram 연동 등 가벼운 통제력 면에서 Hermes 에이전트가 최적의 선택으로 평가받았다 (출처: [Reddit LocalLLaMA 스레드](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/comment/obgsyod/)).

## 상세

### 1. 5대 내부 도구 플랫폼과의 연동 시나리오

#### ① NocoBase (기업용 비즈니스 시스템 및 백엔드)
- **연동 방식**: NocoBase가 제공하는 AI Skills, CLI, MCP([[Model Context Protocol]]) 규격을 활용한다. (GitHub Stars: 22.6k)
- **협업 시나리오**: 자연어로 데이터 모델(고객 정보, 계약 만료일 등) 및 권한 규칙("영업 담당자는 본인 고객만 조회")을 설명하면, Hermes가 이를 구체적인 권한 및 결재 흐름으로 치환하고 NocoBase CLI 명령어를 실행하여 모듈을 자동 생성한다.

#### ② Appsmith (관리자 화면 및 분석 대시보드)
- **연동 방식**: 정밀한 화면 레이아웃과 데이터 처리 인터페이스는 Appsmith가 담당하고, Hermes는 기획안 및 연동 논리를 구성한다. (GitHub Stars: 39.9k)
- **협업 시나리오**: "비정상 주문 모니터링 판"에 들어갈 데이터 필드, 필터 조건, 담당자 일괄 지정 등 비즈니스 규칙을 Hermes가 명확한 SQL 쿼리 조건 및 레이아웃 구조로 설계해 주어 실물 UI 제작 속도를 단축시킨다.

#### ③ Budibase (프로세스 및 신청/결재 양식 자동화)
- **연동 방식**: 절차 지향적인 양식 라우팅 및 상태 전이 규칙 설계에 결합한다. (GitHub Stars: 28k)
- **협업 시나리오**: 사내 비품 대여 신청서의 중간 결재 단계("직원 신청 -> 팀장 승인 -> 관리자 집행 -> 대여 중 업데이트")를 Hermes가 체계적으로 설계하고, 변경되는 사내 규정을 지속해서 스킬화하여 대응한다.

#### ④ Directus (SQL DB 시각화 및 실시간 API 백엔드)
- **연동 방식**: Directus MCP를 기본 활용하여 에이전트가 데이터베이스 정보를 직접 읽고 수정하며, RBAC(역할 기반 권한 제어)를 작동시켜 보안을 유지한다. (GitHub Stars: 35.9k)
- **협업 시나리오**: 비IT 부서 사용자가 복잡한 외래키(FK) 관계를 맺고 있는 레거시 DB 구조를 이해할 수 있도록 Hermes가 인간의 비즈니스 용어로 해석해 주며, 자연어 입력을 SQL 데이터 쿼리로 번역하여 정비 대상 목록을 추출한다.

#### ⑤ Baserow (스프레드시트 기반 소형 앱 빌더)
- **연동 방식**: Airtable의 오픈소스 대체제로서, 정형 데이터 정비 및 카테고리 속성 매핑을 수행한다. (GitHub Stars: 4.9k)
- **협업 시나리오**: 고객 명부나 거래처 관리 시트의 컬럼 항목(제휴 상황, 정산 상태 등)을 조율하고, 특정 업무 분류("검수 대기", "계약 만료 임박")를 위한 최적의 필터 및 보기(View) 조건을 정립한다.

### 2. 셀프 호스팅 독자 에이전트 도입의 당위성
기업의 내부 도구는 재무 실적, 계약 합의안 등 외부 유출 시 치명적인 정보를 다룬다. 따라서 내장 AI의 단일 작업을 넘어, 독자적인 셀프 호스팅 환경을 갖추고 오랜 시간 사내 업무 규칙을 장기 기억(Long-term Memory)할 수 있는 [[Hermes Agent]] 같은 가볍고 통제하기 쉬운 솔루션을 도입하여 데이터 유출 위험을 원천 차단한다.

## 예시

### NocoBase를 활용한 계약 갱신 모듈 설계 지시
사용자가 다음과 같이 자연어로 모듈 설계를 요청하면, [[Hermes Agent]]는 데이터 스키마와 결재 조건 규칙을 분석하여 모듈 개발용 '스킬' 파일로 아카이빙한다.
```text
> NocoBase에서 고객 계약 갱신 관리 모듈을 새로 만들어 줘.
> - 영업 직원은 본인 담당 고객만 조회, 재무 담당자는 금액 및 납부 상태만 열람 가능하게 해 줘.
> - 계약 만료 30일 전에 자동 알림을 보내고, 갱신 금액이 10만 위안을 초과하면 영업팀장과 재무담당자 결재를 거치도록 해 줘.
> - 이 빌드 과정을 재사용 가능한 '스킬(Skill)'로 저장해서 다음 프로젝트 관리 모듈에도 활용해 줘.
```

## 충돌

- **자체 AI 내장 기능과의 충돌**: 각 플랫폼(NocoBase, Appsmith 등)이 자체 Kuma AI 어시스턴트나 내장 AI 기능을 확장하는 중이지만, 이들은 단일 작업(화면 생성, SQL 작성 등)에 특화되어 있다. 반면 [[Hermes Agent]]는 다중 세션을 넘나드는 장기 기억(Memory)과 시스템 전반의 작업 흐름 자산화(스킬 축적)를 목표로 하므로 중복되기보다 상호보완적으로 활용해야 한다.

## 관련 노트

- [[Hermes Agent]]
- [[AI 오픈소스 작업대]]
- [[Model Context Protocol]]
- [[Agent Native Infrastructure]]

