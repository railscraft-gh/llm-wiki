---
aliases:
- 4 Agentic Design Patterns
- Andrew Ng 4가지 패턴
- AI 에이전트 워크플로우 5대 핵심 패턴
- 에이전트 워크플로우 핵심 패턴
- Andrew-Ng-4-에이전틱-디자인-패턴
core: false
created: 2026-05-16
sources:
- evolution-of-ai-agentic-patterns
- raw/2026년 AI 에이전트 워크플로우 핵심 패턴 분석.md
- https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance/
- raw/클로드 디자인은 과연 디자이너를 대체할까.md
- raw/완벽하게 기계 가독성을 갖춘 디자인 시스템.md
- raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
- raw/2026년 오픈소스 LLM 플랫폼 비교 가이드 - Ollama, OpenRouter, Groq, NVIDIA NIM.md
- raw/파이썬 AI 에이전트 프레임워크 6종 비교 분석.md
- raw/sequoia-ascent-2026-karpathy-ko.md
- raw/AI가 생성한 UI 디자인은 이제 인간 디자이너의 80퍼센트보다 우수하다.md
- raw/ai-era-six-pitfalls-six-prescriptions-matt-pocock.md
- raw/UI 디자인을 위한 최고의 AI 도구 10가지와 워크플로우.md
- raw/Hermes Agent와 Ollama 로컬 설치 초고속 가이드.md
- raw/원시인 모드로 토큰 아끼려다 6만 스타 오픈소스에 PR 보낸 이야기.md
- raw/강화학습-RL-초보자-가이드.md
- raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
- raw/anthropic-boris-cherny-interview.md
- raw/evolution-of-ai-agentic-patterns.md
- raw/느낌 코딩의 시대는 끝났다 - GitHub Spec Kit과 명세 기반 개발.md
- raw/SpaceX의 파격적인 AI 인프라 전략 - 순수 C 언어로 22만 대 GPU를 제어하다.md
- raw/Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요.md
- raw/지루한 업무를 자동화하는 클로드 코워크 프롬프트 7가지.md
- raw/당신의 고양이가 챗GPT보다 세상을 더 잘 이해하는 이유.md
- raw/옵시디언 AI 제2의 뇌는 기억이 아니다.md
- raw/인생의 성공을 결정하는 5가지 핵심 자질.md
- raw/Claude Code와 Obsidian으로 AI 세컨드 브레인 구축하기.md
- raw/Hermes 에이전트와 함께 사용하기 좋은 오픈소스 내부 도구 5가지.md
- raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
status: evergreen
tags:
- llm
- agent
- design-pattern
type: concept
updated: '2026-06-22'
---
# Andrew Ng 4 에이전틱 디자인 패턴

## 한 줄 정의

Andrew Ng의 에이전틱 디자인 패턴은 모델 자체를 변경하지 않고도 이를 감싸는 에이전트 아키텍처(자가 성찰, 도구 사용, ReAct, 계획, 다중 에이전트)를 활용하여 AI 시스템의 신뢰성과 문제 해결력을 극대화하는 실무 설계 프레임워크다.

## 핵심 요지

- **하네스 엔지니어링의 기초**: GPT-3.5에 에이전틱 워크플로우를 씌우면 GPT-4 제로샷 성능을 상회한다는 발견을 시작으로, 모델 외부의 반복(Iteration) 및 검증 루프가 성능을 끌어올리는 주축이 되었다.
- **적응성(Adaptability)과 균형**: 계획이나 다중 에이전트처럼 복잡한 패턴을 맹신하지 않고, 추론과 실행(ReAct)의 매끄러운 결합을 통해 예외 에러 및 상황 변동에 유연하게 대처한다.
- **트레이드오프**: 시스템이 복잡해질수록 조율 및 통신 오버헤드(Coordination Overhead)가 급증하므로, 단발성 작업은 단일 에이전트로 처리하고 복잡성이 높은 기획/개발 협업 등에만 다중 아키텍처를 도입한다.

## 상세

### 5대 에이전틱 워크플로우 패턴

#### ① 자가 성찰 (Reflection)
- **개념**: 에이전트가 본인의 출력물(초안, 소스코드 등)을 비판적으로 평가하고 수정 과정을 반복한다.
- **특징**: 같은 모델에 시니어 리뷰어, 보안 전문가 등 서로 다른 페르소나 역할을 얹어 검증을 실행할 때 출력물의 깊이와 안정성이 크게 향상된다.

#### ② 도구 사용 (Tool Use)
- **개념**: 에이전트가 외부 웹 검색, 계산기, API 호출, 코드 실행 샌드박스 등 물리적 도구를 활용하여 언어 모델의 지식 한계를 극복한다.
- **핵심**: 개발자가 도구 실행 시점을 강제하는 전통적 코드와 달리, 에이전트 스스로가 부족한 정보나 정밀 연산이 필요할 때 도구 호출 여부를 자율적으로 결정한다.

#### ③ 추론 및 실행 (ReAct - Reason and Act)
- **개념**: 다음에 무엇을 할지 추론(Reason)하고, 행동(Act)하며, 결과를 관찰(Observation)하는 사이클을 촘촘히 순환한다.
- **3대 가치**:
  1. **방향성 유지**: 추론 단계를 기록해 두어 삼천포로 빠지거나 동일 루프를 도는 현상을 방지한다.
  2. **궤도 수정**: 도구 사용 중 에러나 예상 밖의 결과가 나와도 전략을 비트는 완충재 역할을 한다.
  3. **투명성**: 에이전트의 사고 흐름이 텍스트로 고스란히 기록되므로, 개발자가 디버깅하기에 최적이다.

#### ④ 계획 (Planning)
- **개념**: 목표를 분석하여 하위 과제(Subtask)와 선후 의존 관계(Dependency)로 쪼개어 단계별 로드맵을 작성한다.
- **2026 실무 지침**: 계획을 맹신하는 경직된 방식을 버리고, 진행 상황에 따라 계획을 유동적으로 수정하는 **적응형 계획 수립(Adaptive Planning)**을 동반한다. 선명한 페이즈(Phase)로 구분된 일에 적합하다.

#### ⑤ 다중 에이전트 협업 (Multi-Agent Collaboration)
- **개념**: 단일 일반주의자(Generalist) 에이전트 대신 전문가 에이전트들을 포지셔닝하여 상호 작용하게 한다.
- **주요 역할**:
  - **전문가 에이전트 (Specialist)**: 코딩, 리서치, 통계 등 깊이 있는 특정 업무에 올인한다.
  - **감사/검토 에이전트 (Critic/Reviewer)**: 논리 오류나 팩트를 점검하여 퀄리티 둑 역할을 수행한다.
  - **조율자 에이전트 (Orchestrator)**: 선후 관계 정리 및 최종 산출물 취합을 진두지휘한다.
- **한계**: 에이전트 수 증가에 따른 통신 오버헤드와 디버깅 복잡성 급증을 동반한다.

## 예시

- **ReAct 실무 예시**: 웹 검색으로 계약 정보 단서를 얻고, 로컬 DB에서 세부 조건을 매핑하여, 계산기 도구로 미정산 금액을 추론하여 리포트를 생성하는 일련의 유기적인 Composable 체인 가동.
- **Planning의 오버엔지니어링 극복**: 극도의 불확실성이나 직관적인 단순 선형 업무에는 계획 단계를 생략하여 시간 및 시스템 리소스 낭비를 방지한다.

## 충돌

- **Planning의 취약성과 인간 개입**: Andrew Ng는 초기에 Planning을 핵심 패턴으로 분류했으나, 실제 비즈니스 배포 환경에서는 디테일에 취약하여 계획 단계의 파탄이 잦았다. 2026년 실무에서는 Planning 모드에서 에이전트가 초안을 쪼개면 사람이 이를 직접 승인/수정하고 실행 단계만 자동화하는 [[Plan Mode 기반 AI 작업]]으로 한계를 보완한다.

## 관련 노트

- [[AI 에이전트 아키텍처 완전 가이드]]
- [[Agentic 패턴 진화]]
- [[Harness Engineering]]
- [[Plan Mode 기반 AI 작업]]
- [[병렬 에이전트 세션 운영]]
- [[Claude Code 오케스트레이션]]
- [[OpenAgent Team Mode]]

