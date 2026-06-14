---
type: concept
status: evergreen
core: true
tags:
  - llm
  - agent
  - harness-engineering
  - ai-coding
aliases:
  - 하네스 엔지니어링
sources:
  - 하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유
  - evolution-of-ai-agentic-patterns
  - andrej-karpathy-skills-CLAUDE-번역
  - 프로덕션 AI 에이전트를 위한 Agent Harness 구축
  - 99%의 사람보다 더 나은 Harness Engineer를 만드는 법
  - 하네스 엔지니어링. 다음 모델보다 더 중요한 조용한 코딩 스킬
  - Bloated AI Slop Labs on X 2059651388901335196 한국어 번역
  - 메시징 서버의 스트레스 테스트 노하우와 AI가 덜어 준 부분
  - 하네스를 내 것으로 만들기 - 출판형 다듬기
  - AI Agent Best Practices. Production-Ready Harness Engineering (2026 Guide)
  - raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
  - https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html
created: 2026-05-13
updated: 2026-06-14
---

# Harness Engineering

## 한 줄 정의
Harness Engineering은 AI 코딩 에이전트를 둘러싼 규칙(Instructions), 검증 도구(Hooks), 커스텀 스킬, 메모리, 관찰 피드백 루프를 시스템적으로 설계하여, 모델 본연의 한계를 외부 제약 환경을 통해 보완하고 정합성 높은 결과물을 얻어내는 에이전트 인프라 구축 기술이다.

## 핵심 요지
- **용어의 기원 (Mitchell Hashimoto)**: 2026년 초 Terraform 창시자인 **Mitchell Hashimoto가 주창한 개념**으로, 에이전트의 오작동 시 매번 채팅 세션 내에서 일회성으로 가이드하는 대신 동일 오류가 다신 재발하지 않도록 모델 바깥의 실행 인프라와 제약 환경(Harness)을 영구적으로 엔지니어링하는 것을 가리킨다.
- **모델은 Commodity, 하네스는 Moat**: 모델 자체의 성능 차이에 매몰되기보다, 에이전트가 실수할 때마다 그 실수가 다신 발생하지 않게 시스템을 엔지니어링하는 하네스 설계에 투자하는 것이 더 높은 ROI와 영구적 자산을 형성한다.
- **Andrej Karpathy의 65줄 기적**: Forrest Chang이 Karpathy의 에이전트 실패 관찰을 토대로 제작한 65줄짜리 `CLAUDE.md` 파일(GitHub 10만 스타 돌파)은 프롬프트나 미들웨어 튜닝보다 저장소 루트에 두는 기계 가독 행동 계약(Behavioral Contract)이 훨씬 강력함을 실증했다.
- **점진적 압축과 자아 비평**: Forrest Chang은 에이전트를 시켜 최초 800줄짜리 규칙 스키마를 작성하게 한 뒤, **에이전트가 자기 자신을 스스로 리뷰하게 만들어** 65줄의 고농도 지침으로 압축했다.
- **매주 금요일 5분 루틴**: 일주일 동안 에이전트가 저지른 실수 패턴을 모아 매주 하네스(규칙, 훅, 스킬)에 한 줄씩 반영하는 정기 튜닝을 통해 시스템이 점진적으로 지능화된다.

## 상세

### 1. Karpathy의 LLM 코딩 3대 실패 패턴과 4대 행동 계약 매핑
| Karpathy의 실패 관찰 | 하네스 제약 솔루션 | 실무 적용 행동 가이드라인 |
| :--- | :--- | :--- |
| **묵시적 가정 (Silent Assumptions)**: 불확실한 지점에서 질문하지 않고 임의로 선택해 코딩 후 돌진함. | **Think Before Coding** | 구현 전 가정을 명시적으로 노출할 것. 여러 대안이 있다면 독단적으로 결정하지 말고 질문해 조율할 것. 헷갈릴 땐 멈출 것. |
| **과도한 엔지니어링 (Overcomplication)**: 불필요한 아키텍처 추상화를 늘리고 100줄짜리를 1,000줄로 비대화함. | **Simplicity First** | 문제를 푸는 최소한의 코드만 작성할 것. 추측성 유연성을 엄격히 배제할 것. "시니어 엔지니어가 과하게 복잡하다 비판할지" 자문할 것. 200줄 코드를 50줄로 압축하도록 리트머스 테스트 수행. |
| **부수적 피해 (Collateral Damage)**: 엉뚱한 기존 코드를 수정/포맷팅하거나 주석을 삭제하여 PR diff를 더럽힘. | **Surgical Changes** | 꼭 필요한 목표 라인만 건드릴 것. 인접 코드 개선/리팩토링 금지. 기존 코드 스타일 준수. 자신의 변경으로 인해 생겨난 고아(Orphan) import/변수만 청소할 것. |
| **자율 루프 부재**: 명령형 지시("잘 돌아가게 버그 고쳐줘")를 주면 자가 루프를 돌지 못함. | **Goal-Driven Execution** | 지시를 선언적 목표로 바꿀 것. "X 검증 추가" -> "잘못된 입력값 테스트 코드를 작성하고 통과시키기". 멀티스텝 작업 시 `[단계] -> [확인]` 템플릿 강제. |

### 2. 하네스 엔지니어링 진화 패러다임
```
프롬프트 엔지니어링 (2023-2024: "무엇을 물어볼 것인가?")
  → 컨텍스트 엔지니어링 (2025: "무엇을 보여줄 것인가?")
    → 하네스 엔지니어링 (2026: "전체 환경을 어떻게 설계할 것인가?")
```

### 3. 하네스 구축의 핵심 철학 및 규칙
1. **Rippable (탈착 가능성)**: 하네스에 복잡한 복구 로직을 직접 짜 넣지 않는다. 다음 세대 모델(예: Claude 5.0)이 출시되면 기존 에러 복구 로직은 기술 부채로 전락한다. 불필요해진 하네스 계층을 쉽게 도려낼(Rip) 수 있게 설계해야 한다.
2. **CLAUDE.md는 200줄 이하로**: Anthropic 공식 문서에 따르면 지침이 200줄을 초과하는 순간부터 에이전트의 규칙 준수율(Compliance)이 급락한다. 범용 행동 계약은 60줄 이하로 `CLAUDE.md`에 두고, 복잡한 템플릿과 세부 사실 정보는 `~/.claude/projects/<project>/memory/MEMORY.md`로 격리 운영한다.
3. **가드레일과 강제성**: `CLAUDE.md`는 에이전트에게 보내는 '권고'일 뿐이다. 절대 타협 불가능한 린터, 포매팅, 보안 검사는 pre-commit hook이나 샌드박스로 강제 설계(Enforce)해야 한다.
4. **보안 가드레일 (Lethal Trifecta 예방)**: 
   신뢰 불가 외부 입력 수용, 민감 내부 시스템 접근, 상태(State)의 물리적 변경이라는 세 가지 능력 중 최대 두 개까지만 하나의 에이전트 노드에 허용한다.

## 예시
### CLAUDE.md 행동 가이드라인을 프로젝트에 추가하는 3대 실무 방법

- **방법 1 (Claude Code CLI 플러그인 활용)**:
  ```bash
  # 모든 세션에 전역 플러그인 형태로 Karpathy Skills를 서빙
  /plugin marketplace add forrestchang/andrej-karpathy-skills
  /plugin install andrej-karpathy-skills@karpathy-skills
  ```
- **방법 2 (curl 명령어로 프로젝트 루트에 결합)**:
  ```bash
  # 기존 CLAUDE.md가 없다면 바로 다운로드
  curl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md
  
  # 기존 CLAUDE.md 파일이 있다면 하단에 병합
  curl https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md >> CLAUDE.md
  ```
- **방법 3 (Cursor IDE 적용)**:
  `.cursor/rules/karpathy-guidelines.mdc` 파일을 프로젝트 내에 생성하여 커서 에이전트 행동 가이드라인으로 활용한다.

## 충돌
- **규칙의 명세화 vs 에이전트 우회**: 
  에이전트는 프롬프트 계약을 약 80% 확률로만 준수한다. 따라서 오타 수정이나 단순 1줄 코드 변경처럼 가벼운 작업에까지 65줄 행동 가이드라인을 기계적으로 대입하면 컨텍스트 로딩과 지연 속도만 낭비된다. 주니어처럼 돌진하는 상황을 제어할 때만 룰을 타이트하게 활성화하고, 단순 작업 시에는 에이전트의 기본 판단(Vibe coding)과 절충해야 한다.

## 관련 노트
- [[Claude.md 운영 원칙]]
- [[Meta-Harness]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Native Infrastructure]]
- [[Vibe Coding과 Agentic Engineering]]
- [[Agentic 패턴 진화]]
- [[Lethal Trifecta]]
- [[AI 시대 소프트웨어 펀더멘탈]]
- [[에이전트 코딩 4원칙]]
- [[Context Engineering]]
- [[Agent Harness]]
- [[AI 하네스 최소화]]
- [[메시징 서버 스트레스 테스트 운영 원칙]]
- [[AI 산출물 포맷 결정 트리]]
- [[Claude Code 스킬 관리]]
- [[MEMORY.md 운영 원칙]]

