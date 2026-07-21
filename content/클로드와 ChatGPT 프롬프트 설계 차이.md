---
aliases:
  - 클로드와-ChatGPT-프롬프트-설계-차이
core: false
created: 2026-07-10
sources:
  - raw/내가 매주 쓰는 클로드와 챗GPT 프롬프트 10선 (즉시 복사하여 사용 가능).md
status: evergreen
tags:
  - llm
  - prompting
  - productivity
type: concept
updated: 2026-07-10
---
# 클로드와 ChatGPT 프롬프트 설계 차이

## 한 줄 정의

클로드와 ChatGPT 프롬프트 설계 차이는 각 모델의 명령 추종 능력과 인지 편향에 맞춤화하여, 클로드에는 엄격한 페르소나와 부정적 금지 조건을 부여하고 ChatGPT에는 단계별 추론(CoT) 및 상세 불릿 결과 템플릿을 명시해 AI 슬롭을 예방하는 최적화 기법이다.

## 핵심 요지
- 클로드(Claude)는 주어진 역할(Persona)과 제약 조건에 대한 밀착 준수력이 뛰어나며, 'never hypey' 등 강력한 제약 묘사에 정밀하게 반응한다.
- ChatGPT는 'Think step-by-step' 같은 명시적 추론 트리거와 금지어 블랙리스트를 제공했을 때 출력의 무개성성(Slop)을 효과적으로 걷어낸다.

## 상세

### 1. 두 모델의 아키텍처적 대응 방식 차이

- **Claude (제약과 정체성)**: 클로드는 페르소나에 깊이 동화되어 주어진 틀을 깨뜨리지 않는다. 따라서 역할 부여 시 단순히 전문가가 아닌 '리뷰 제안을 10,000번 수행한 파트너급 VC' 등의 구체적 타이틀을 박아 넣고, 'Don't be nice. Be right' 같은 직설적 룰을 지정했을 때 칭찬 범벅을 거치지 않은 알짜배기 비평을 반환한다.
- **ChatGPT (추론과 포맷)**: ChatGPT는 단일 지시 하에서 지름길을 가려 드는 경향이 있어, 'Think step-by-step'을 명시적으로 붙여 추론 징검다리를 뇌이징해야 최종 답변의 논리적 붕괴가 최소화된다. 제외할 단어 목록("game-changer", "revolutionary" 등)을 블랙리스트로 명시할 때 효과적으로 AI 특유의 엠대시(—)나 미사여구를 덜어낸다.

### 2. 프롬프트 설계를 관통하는 4대 기본 법칙
1. **구체적인 역할 부여 (Role Specificity)**: 일반 명사보다 고유하고 현실적인 직급 및 상황 묘사를 명시한다.
2. **금지 조건의 명문화 (Negative Constraints)**: 해야 할 일보다 하지 말아야 할 언어 습관과 어조를 알려주는 것이 효율적이다.
3. **출력 구조의 규격화 (Structural Constraint)**: 불릿 포인트, 최종 판정 등 규격화된 형태로 출력을 엄격히 묶는다.
4. **피드백 루프 작동 (Iterative Refinement)**: 첫 답변을 데모로 여기고 2차 프롬프팅에서 뉘앙스를 보정한다.

## 예시

### 실전 활용 프롬프트 템플릿

#### ① 광고 느낌 없는 세일즈 카피 (Claude)
```markdown
Rewrite this [product/description] into high-converting sales copy using AIDA. Make it emotional and benefit-focused but never hypey. Target [audience]. Include a strong headline, bullet points of benefits, and a clear CTA.
```

#### ② 안티 AI 글쓰기 규칙 템플릿 (ChatGPT)
```markdown
Write like a human, not an AI. Analyze these samples: [paste 2–4]. Match my tone, rhythm, and quirks. Rewrite this: [paste text].
Rules: contractions, varied sentence length, no em-dash overuse, no generic transitions ("at the end of the day"), no "in the realm of" or "it's important to note." Flag anything still AI-like.
```

## 충돌

## 관련 노트
- [[LLM을 동물 지능처럼 다루지 않기]]
- [[Claude.md 운영 원칙]]

