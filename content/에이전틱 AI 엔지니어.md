지정한 소스 문서들을 바탕으로 **'에이전틱 AI 엔지니어'** 지식 개념에 대한 고품질 한국어 위키 노트를 성공적으로 업데이트하고 보강을 완료했습니다.

---

### 📝 생성/수정된 위키 노트 요약

**문서 경로**: [wiki/에이전틱 AI 엔지니어.md](file:///Users/railscraft/Obsidian/wiki/%EC%97%90%EC%9D%B4%EC%A0%84%ED%8B%B1%20AI%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4.md)

- **Frontmatter 구성**: `type: concept`, `status: draft`, `sources` 2종 포함, 최초 생성일(`2026-07-11`) 및 최종 갱신일(`2026-08-27`) 명시.
- **핵심 요지 및 상세 내용**:
  - 에이전트의 3대 오작동 양상(Agentic Laziness, Self-Preferential Bias, Goal Drift)과 결정론적 검증기 및 메이커-체커 분리(Maker-Checker Split) 아키텍처를 이용한 차단 전략.
  - 과시용 27개 기술 요구사항 대신 4개 계층(기초, LLM, 에이전트, 프로덕션)으로 정립된 10대 핵심 스택(Python async, Pydantic, LLM API/비용 관리, [[LangGraph]], [[Model Context Protocol|MCP]], E2B 샌드박스 등).
  - 3단계 검증 체계(결정론적 테스트 → LLM-as-judge → 사람 승인 게이트) 및 반영 성공률(Accepted-change rate) 70% 이상 관리 기준.
  - 외부 비신뢰 데이터 유입 시 간접 프롬프트 주입(Indirect Prompt Injection) 대비 **Rule of Two** 격리 모델 및 30일 주기 권한 재감사.
- **검증 가능한 수치 표기**: 모델 명칭(Opus 4.8, Sonnet 4.6, Haiku 4.5, Gemini 3.1 Flash, GPT-5.5 등), 10만 토큰의 75,000단어 환산, 70% 반영률 지표, 30일 감사 주기 등 수치성 지표에 소스 파일 경로(`raw/...`) 괄호 표기 준수.
- **실전 예시 구현**: Sonnet(작성)과 Opus(검증)의 컨텍스트를 분리하는 `LangGraph` 기반 파이썬 코드 예시 및 2026년 표준 역량 배포 시나리오 수록.
- **충돌 정리**: 신규 프레임워크 유목민 현상 대 파이썬 수준 예외 처리(429 백오프, 비동기 스레드 제어)의 중요성 및 4가지 건너뛰어야 할 레거시 패러다임(기본 프롬프트 엔지니어링, 벡터 DB 쇼핑, 레거시 LangChain AgentExecutor, 로우 트랜스포머 수학) 명시.
- **상호 연동**: [[LangGraph]], [[Model Context Protocol]], [[RAG]], [[에이전틱 AI 엔지니어 실무 로드맵]], [[Vibe Coding과 Agentic Engineering]] 등 최소 2개 이상의 관련 노트 링크 연동.

---

### ⚙️ 시스템 이력 및 배포 반영
1. [wiki/log.md](file:///Users/railscraft/Obsidian/wiki/log.md)에 2026-08-27 Ingest 및 문서 수정 기록 업데이트 완료.
2. `sync_quartz.sh` 스크립트를 실행하여 Quartz 빌드 및 GitHub Pages (`v5` 브랜치) 자동 배포 파이프라인 동기화 완료.