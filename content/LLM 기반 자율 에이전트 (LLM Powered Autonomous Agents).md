---
type: concept
status: evergreen
core: true
tags:
- llm
- agent
- planning
- memory
aliases:
- LLM-기반-자율-에이전트-(LLM-Powered-Autonomous-Agents)
sources:
- raw/LLM Powered Autonomous Agents.md
created: 2026-07-21
updated: 2026-07-21
---
# LLM 기반 자율 에이전트 (LLM Powered Autonomous Agents)

## 한 줄 정의
LLM을 두뇌(핵심 컨트롤러)로 삼아 계획(Planning), 기억(Memory), 도구 사용(Tool use)을 결합해 복잡한 문제를 해결하는 자율 시스템.

## 핵심 요지
자율 에이전트는 LLM의 범용적인 문제 해결 능력을 극대화하기 위해 작업을 쪼개고 반성하는 Planning, 컨텍스트와 외부 지식을 저장/조회하는 Memory, 한계를 극복하기 위해 외부 API를 호출하는 Tool use의 세 가지 핵심 요소로 구성된다.

## 상세
LLM 기반 자율 에이전트 시스템은 다음의 세 가지 주요 컴포넌트로 나뉜다.
1. **계획 (Planning)**:
   - **작업 분해 (Task Decomposition)**: 복잡한 작업을 관리 가능한 하위 목표로 분해한다. CoT(Chain of Thought), Tree of Thoughts 등 프롬프트 기법을 활용한다.
   - **자기 반성 (Self-Reflection)**: ReAct, Reflexion, Chain of Hindsight와 같은 프레임워크를 통해 과거의 행동을 비판하고 실수를 개선하여 시행착오를 극복한다.
2. **기억 (Memory)**:
   - **단기 기억**: 인컨텍스트 학습(In-context learning)을 통한 트랜스포머 모델의 컨텍스트 윈도우.
   - **장기 기억**: 외부 벡터 저장소와 빠른 검색 시스템(MIPS - LSH, FAISS 등)을 활용해 무한에 가까운 정보를 장기간 보존하고 필요할 때 조회한다.
3. **도구 사용 (Tool use)**:
   - 모델의 가중치에 포함되지 않은 최신 정보나 계산 능력을 보완하기 위해 외부 API, 코드 인터프리터, 기호 모듈 등을 호출한다. MRKL, TALM, Toolformer, HuggingGPT 등이 대표적이다.

## 예시
- **ChemCrow**: 화학 전문가 수준의 성능을 내기 위해 13개의 외부 도구를 장착한 특화 LLM 에이전트.
- **Generative Agents**: 샌드박스 환경에서 25개의 에이전트가 기억, 계획, 반성을 활용해 상호작용하는 시뮬레이션 환경.
- **AutoGPT / GPT-Engineer**: 자연어로 된 작업 명세를 바탕으로 자율적으로 코드를 생성하고 실행하는 개념 증명(PoC) 에이전트.

## 충돌
- **에이전트 한계점**: 유한한 컨텍스트 길이로 인한 정보 대역폭 부족 문제, 예기치 않은 오류에 직면했을 때 장기 계획을 동적으로 조정하기 어려운 한계가 지적된다. (추정, 검증 필요)

## 관련 노트
- [[프롬프트 엔지니어링 핵심 기법 (Prompt Engineering Core Techniques)]]
- [[강화학습 보상 해킹 (Reward Hacking in Reinforcement Learning)]]

## 출처
- [Weng, Lilian. (Jun 2023). “LLM-powered Autonomous Agents”. Lil’Log.](https://lilianweng.github.io/posts/2023-06-23-agent/)
