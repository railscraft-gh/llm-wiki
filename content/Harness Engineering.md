---
type: concept
status: evergreen
core: false
tags:
  - llm
  - agent
  - harness-engineering
  - ai-coding
aliases:
  - Harness Engineering
  - 하네스 엔지니어링
sources:
  - raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
  - raw/evolution-of-ai-agentic-patterns.md
  - https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html
created: 2026-05-13
updated: 2026-05-16
---

# Harness Engineering

## 한 줄 정의

Harness Engineering은 AI 코딩 에이전트를 감싸는 규칙, 도구, 스킬, 메모리, 피드백 루프를 설계해 모델 자체보다 환경이 결과를 결정하게 하는 기술이다.

## 핵심 요지

- 모델 성능은 빠르게 수렴 중이므로 GPT-Claude-Gemini 논쟁보다 **시스템 설계**에 투자해야 한다.
- 좋은 CLAUDE.md 하나와 pre-commit 훅이 복잡한 미들웨어보다 큰 ROI를 낼 수 있다.
- 하네스는 팀원이 바뀌거나 모델이 업데이트되어도 리포지토리에 남는 **축적되는 자산**이다.

## 상세

Mitchell Hashimoto(Terraform 창시자)의 정의를 따르면, 하네스 엔지니어링은 "에이전트가 실수할 때마다 그 실수가 다시는 발생하지 않도록 시스템을 엔지니어링하는 것"이다. 모델 가중치를 바꾸는 대신 에이전트가 보는 컨텍스트, 사용하는 도구, 검증 기준, 권한 범위를 설계한다.

**패러다임의 변화:**
- 프롬프트 엔지니어링(2023-2024): "무엇을 물어볼 것인가?"
- 컨텍스트 엔지니어링(2025): "무엇을 보여줄 것인가?"
- 하네스 엔지니어링(2026): "전체 환경을 어떻게 설계할 것인가?"

**CLAUDE.md의 4가지 행동 원칙**은 하네스 엔지니어링의 가장 기본적이고 강력한 구성 요소다. Andrej Karpathy가 지적한 LLM 코딩의 3대 실패 패턴(묵시적 가정, 과도한 엔지니어링, 부수적 피해)을 4가지 원칙으로 매핑했다.

| 원칙 | 핵심 | 하네스 관점 |
|------|------|------------|
| Think Before Coding | 가정하지 마라. 혼란을 숨기지 마라. | 컨텍스트 엔지니어링: 충분한 정보 제공 |
| Simplicity First | 최소한의 코드. 추측성 요소 없이. | 아키텍처 제약: 솔루션 공간 제한 |
| Surgical Changes | 꼭 필요한 것만 건드려라. | 피드백 루프: 변경 범위 최소화 |
| Goal-Driven Execution | 성공 기준을 정의하고 루프를 돌아라. | 목표 기반 검증: 사전 완료 체크리스트 |

**개발자의 역할 변화:**
- 코드 작성 → AI가 코드를 작성하는 환경 설계
- 코드 디버깅 → 에이전트 행동 디버깅
- 코드 리뷰 → 에이전트 출력 + 하네스 효과성 리뷰

**하네스는 rippable해야 한다.** Fowler/Böckeler가 강조한 원칙으로, 모델이 한 세대 좋아지면 하네스의 "smart" 로직 중 일부는 불필요해진다. Claude 5.0이 나오면 4.5용으로 만든 에러 복구 로직 다수가 부채가 될 수 있다. 하네스 설계의 기술은 "무엇을 만들 것인가"만큼 "무엇을 쉽게 제거할 수 있게 만들 것인가"에 있다. [[Agentic 패턴 진화]] 관점에서 하네스는 컨텍스트와 프롬프트를 포함(subsume)하므로, 좋은 하네스는 여전히 좋은 컨텍스트를 요구한다.

**보안 가드레일은 [[Lethal Trifecta]]로 정리한다.** 신뢰 불가 입력 + 민감 시스템 접근 + 상태 변경 세 능력 중 최대 두 개만 동시에 허용한다는 Meta AI의 Rule of Two가 실천 가능한 규칙이다.

**수치 증거:**
- LangChain: 동일 모델에서 하네스만 변경 시 Terminal Bench 2.0 52.8% → 66.5%
- OpenAI Codex 팀: 5개월간 하네스에 코드 제로, 에이전트가 100만 줄+ 생성
- revfactory/harness A/B 테스트: 사전 설정 적용 시 품질 점수 49.5 → 79.3 (+60%)

## 예시

- 시스템 프롬프트: 저장소 루트의 60줄 이하 마크다운 파일(CLAUDE.md / AGENTS.md)
- 검증 루프: pre-commit 훅에 린터 + 테스트 연결
- 스킬 파일: 반복 패턴을 재사용 가능한 에이전트 스킬로 분리
- 권한 설계: 프로덕션 DB 명령 자동 실행 금지, 마이그레이션 파일 수정 금지

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Claude.md 운영 원칙]]
- [[Meta-Harness]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Native Infrastructure]]
- [[Vibe Coding과 Agentic Engineering]]
- [[Agentic 패턴 진화]]
- [[Lethal Trifecta]]
- [[AI 시대 소프트웨어 펀더멘탈]]

