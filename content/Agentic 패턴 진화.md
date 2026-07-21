---
aliases:
- Prompt to Context to Harness
- 프롬프트-컨텍스트-하네스 진화
- Agentic Patterns Evolution
- Agentic-패턴-진화
core: true
created: 2026-05-16
sources:
- evolution-of-ai-agentic-patterns
- https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html
- https://www.honeycomb.io/blog/production-is-where-the-rigor-goes
- https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus
- raw/ai-era-six-pitfalls-six-prescriptions-matt-pocock.md
- raw/강화학습-RL-초보자-가이드.md
- raw/anthropic-boris-cherny-interview.md
- raw/evolution-of-ai-agentic-patterns.md
- raw/sequoia-ascent-2026-karpathy-ko.md
status: evergreen
tags:
- llm
- agent
- history
- harness-engineering
- context-engineering
type: concept
updated: '2026-06-22'
---
# Agentic 패턴 진화

## 한 줄 정의

Agentic 패턴 진화는 2022년부터 2026년까지 AI 코딩 개발 패러다임이 Prompt Engineering → [[Context Engineering]] → [[Harness Engineering]]으로 이동하면서 엔지니어링의 엄밀함이 어디로 옮겨갔는지를 추적하는 연대기다.

## 핵심 요지

- 세 시대는 서로 대체하지 않고 포함(subsume) 관계다. 하네스 안에 컨텍스트가, 컨텍스트 안에 프롬프트가 들어 있다.
- 엔지니어링의 엄밀함은 사라지지 않았다. Chad Fowler의 표현대로 "Relocating Rigor" — 프롬프트에서 컨텍스트로, 컨텍스트에서 하네스로 자리를 옮겼을 뿐이다.
- 2026년의 핵심 메트릭은 프롬프트 품질이 아니라 KV-cache hit rate(모델이 이전 계산을 재활용하는 비율)와 하네스 복잡도다.

## 상세

각 시대는 이전 패러다임이 약속을 지키지 못해 다음으로 넘어갔다.

**Prompt Engineering (2022-2024)** — "어떤 말을 해야 하나?" GitHub Copilot이 2022년 6월에 월 10달러로 출시되며 시작됐다. 개발자 88%가 생산성 향상을 체감, 2024년 초 사용자 2,000만 명, 시장 점유율 약 42%. Andrew Ng의 4가지 에이전틱 디자인 패턴([[Andrew Ng 4 에이전틱 디자인 패턴]])이 이 시대의 정점이었지만, 동시에 "모델 바깥 시스템이 중요하다"는 힌트를 남겼다.

**[[Context Engineering]] (2025)** — "어떤 정보를 넣어야 하나?" 2025년 6월 셋째 주, Shopify CEO Tobi Lütke의 X 포스트로 불이 붙었고 일주일 안에 Karpathy, Andrew Ng를 포함한 수백 명이 합류했다. 깨달음은 정보를 많이 넣는 게 아니라 컨텍스트가 "풍부한 상태 시스템 위의 compiled view"라는 것(Google ADK). Manus 팀은 에이전트 프레임워크를 네 번 갈아엎은 뒤 진짜 병목이 컨텍스트 관리, 그 중에서도 **KV-cache hit rate**라는 결론에 도달했다. Claude Sonnet 기준 캐시 히트 시 비용이 1/10로 줄어든다. 프롬프트 접두어 토큰 하나만 바뀌어도 캐시가 무효화된다. 그래서 프롬프트의 "품질"보다 "안정성"이 더 중요해졌다.

**[[Harness Engineering]] (2026)** — "어떤 시스템을 만들어야 하나?" Martin Fowler/Birgitta Böckeler, Philipp Schmid, Ethan Mollick이 2026년 초부터 동시에 같은 용어를 사용했다. 하네스는 에이전트를 감싸는 도구, 권한, 검증 루프, 메모리, 컨텍스트 압축 전체 시스템이다. [[Harness Engineering]]에서 다루듯 좋은 CLAUDE.md 하나와 pre-commit 훅이 복잡한 미들웨어보다 큰 ROI를 낼 수 있다. 핵심 보안 프레임은 [[Lethal Trifecta]]와 Rule of Two다.

세 시대를 한 줄로 정리하면 [Epsilla의 메타포](https://www.epsilla.com/blogs/harness-engineering-evolution-prompt-context-autonomous-agents)가 정확하다. "2022년에는 완벽한 이메일 작성법을 연구했다. 2025년에는 받은편지함 관리를 배웠다. 2026년에는 이메일 시스템 자체를 설계하고 있다."

하네스는 **뜯어낼 수 있어야(rippable)** 한다. 모델이 한 세대 좋아지면 하네스의 "smart" 로직 중 절반은 쓸모없어진다. Claude 5.0이 나오면 4.5용 에러 복구 로직 다수가 부채가 된다. 하네스 설계의 기술은 "무엇을 만들 것인가"만큼 "무엇을 쉽게 제거할 수 있게 만들 것인가"에 달려 있다.

## 예시

- GitHub Copilot 자체가 세 시대 축소판이다. 2022.06 자동완성(프롬프트) → 2023.11 Chat(컨텍스트로 전환 시작) → 2025.02 Agent Mode(멀티파일 편집 + 린트-수정 루프, 하네스) → 2025.05 Coding Agent(Issue 할당부터 PR 생성까지 완전 자율).
- Andrew Ng가 2024년 3월 발표한 "GPT-3.5에 에이전틱 워크플로우를 씌우면 GPT-4 제로샷보다 낫다"는 결과는 [[Harness Engineering]]이 모델 성능을 뛰어넘을 수 있다는 첫 증거였다.

## 충돌

현재 확인된 충돌 없음. 단, 시대 경계 연도(2024 vs 2025)는 정의자마다 다르므로 자료마다 1년 차이가 있을 수 있다.

## 관련 노트

- [[Harness Engineering]]
- [[Software 3.0]]
- [[Vibe Coding과 Agentic Engineering]]
- [[Andrew Ng 4 에이전틱 디자인 패턴]]
- [[Lethal Trifecta]]
- [[Context Mode]]

