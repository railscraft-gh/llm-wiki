---
type: concept
status: draft
core: false
tags:
  - ai-coding
  - software-engineering
  - fundamentals
  - tdd
  - ddd
aliases: []
sources:
  - raw/ai-era-six-pitfalls-six-prescriptions-matt-pocock.md
created: 2026-05-09
updated: 2026-05-09
---

# AI 시대 소프트웨어 펀더멘탈

## 한 줄 정의

AI 시대일수록 좋은 설계와 공통 이해를 바탕으로 한 소프트웨어 펀더멘탈이 더 중요해진다는 주장.

## 핵심 요지

AI 엔지니어링 업계에서는 "AI가 코드를 다 짜주니 코드는 더 이상 비싼 자원이 아니다"라는 인식이 있다. 그러나 Matt Pocock은 이에 정면으로 반박한다.

> 코드는 싸지 않다. 오히려 나쁜 코드는 그 어느 때보다 비싸다.

좋은 코드베이스에서 AI가 진짜 빛을 발하지만, 변경하기 어려운 코드베이스는 AI도 살리지 못한다. 스펙-투-코드(spec-to-code) 운동의 함정은 소프트웨어 엔트로피(The Pragmatic Programmer)를 야기한다. 부분만 고치고 전체 설계를 보지 않으면 시스템은 점점 물른다.

Pocock의 핵심 명제는 다음과 같다:

> AI 시대일수록 펀더멘탈(fundamentals)이 더 중요해진다.

## 상세

### 1. AI가 내 머릿속 그림과 다르게 만든다

**원인**: Frederick P. Brooks가 말한 Design Concept(설계 개념)이다. 두 사람이 함께 무언가를 만들 때 둘 사이에 보이지 않는 "이걸 만들고 있다"는 감각이 있다. 이것은 마크다운에 적을 수 없으며, 사람과 AI 사이에서는 결코 공유되지 않는다.

**처방**: Grill Me 스킬

```
Interview me relentlessly about every aspect of this plan until we reach a shared understanding.
Walk down each branch of the design tree, resolving dependencies between decisions one by one.
```

이 스킬을 사용하면 AI가 40개에서 100개까지 질문을 던진다. 공동 이해(shared understanding)에 도달하는 것이 먼저다. GitHub에서 13,000 이상의 별을 받았다.

### 2. AI가 너무 장황해진다

**원인**: 도메인 전문가와의 용어 불일치이다. 마이크로칩 회사 클라이언트와 일할 때 전문 용어가 맞지 않으면 코드가 어긋나는 것처럼, AI와 나 사이에서도 똑같은 일이 벌어진다. 같은 언어를 쓰고 있지 않다.

**처방**: Ubiquitous Language(유비쿼터스 언어)

Domain-Driven Design(DDD)의 개념을 AI에 적용한다. 코드베이스를 스캔하여 용어들을 추출하고 마크다운 사전을 만든다. 이것은 사람도 보고 AI도 보는 공통 단어집이다. 도입 후 AI가 덜 장황해졌다고 한다. 같은 단어를 써야 같은 결과가 나온다.

### 3. 코드가 의도대로 짜였는데 안 돌아간다

**원인**: Outrunning Your Headlights(헤드라이트보다 빠르게 달리기)이다. 한 번에 너무 많은 코드를 만들어놓고 그제서야 타입 체크나 테스트를 본다. 이미 망가진 다음에 보는 것이다.

**처방**: TDD(테스트 주도 개발)

피드백의 속도가 곧 속도 제한이다. 테스트를 먼저 쓰면 AI가 강제로 작은 단위로 움직이게 된다. 헤드라이트 안쪽으로만 움직이게 되는 것이다.

### 4. TDD하려니 테스트 자체가 어렵다

**원인**: Shallow Module의 미로이다. AI는 작은 모듈을 잔뜩 만들고 인터페이스도 복잡하게 만든다. 다음에 AI가 그 코드를 다시 읽으면 자기가 만든 미로에서 자기가 길을 잃는다.

**처방**: Deep Module + Philosophy of Software Design

John Ousterhout의 개념이다. Deep Module은 큰 기능을 단순한 인터페이스 뒤에 숨겨놓은 것이다. 입구는 간단한데 안쪽이 깊다. AI의 디폴트가 Shallow Module이므로 사람이 설계하여 Deep Module로 변환해야 한다.

| 구분 | Shallow Module | Deep Module |
|------|----------------|-------------|
| 기능량 | 적음 | 많음 |
| 인터페이스 | 복잡함 | 단순함 |
| 탐색 난이도 | 미로 같음 | 입구 간단, 안쪽 깊음 |
| 생성 편향 | AI가 자주 만듦 | 사람이 설계해야 함 |

### 5. 코드 양이 폭증하는데 사람 머리가 못 따라간다

**처방**: Grey-box(회색 상자) 전략

Deep Module을 회색 상자로 취급한다. 인터페이스는 사람이 직접 설계하고, 안쪽 구현은 AI에 통째로 위임한다. 사람은 인터페이스 단위로만 검증한다. 금융 등 크리티컬한 모듈은 예외이며 일반 비즈니스 로직은 Grey-box로 충분하다.

> 인터페이스를 설계필라. 구현은 위임핼라.

### 6. 관통하는 한 줄

> 매일 시스템 설계에 투자핼라. (Kent Beck)

스펙-투-코드는 설계에서 디스인베스트(disinvest)하는 것이므로 망한다.

## 예시

- **Grill Me**: 40~100개 질문으로 공동 이해에 도달. GitHub 13,000+ stars.
- **Ubiquitous Language**: 코드베이스 스캔 후 마크다운 사전 생성. 사람과 AI가 공유하는 용어집.
- **Grey-box**: 금융 등 크리티컬한 모듈은 예외로 두고, 일반 비즈니스 로직은 인터페이스 설계만 하고 구현은 위임.

## 충돌

(없음)

## 관련 노트

- [[AI 코딩 에이전트 검증 전략]]
- [[Vibe Coding과 Agentic Engineering]]
- [[TDD의 실전 적용]]
- [[Domain-Driven Design]]
- [[AI Slop]]

