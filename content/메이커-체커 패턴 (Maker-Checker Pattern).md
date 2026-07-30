---
type: concept
status: draft
core: false
tags:
- llm
- agentic
aliases:
- 메이커-체커 패턴
- Maker-Checker Pattern
- Maker & Checker
- 메이커-체커-패턴-(Maker-Checker-Pattern)
sources:
- raw/Testing 17 Agentic Loop Engineering Techniques for Reliable AI Agents.md
created: 2026-07-11
updated: 2026-07-11
---
# 메이커-체커 패턴 (Maker-Checker Pattern)

## 한 줄 정의
작업을 생성하는 주체(Maker)와 생성된 결과물을 평가하는 주체(Checker)의 역할과 책임을 분리하고, Checker가 독자적인 런타임 테스트 스위트를 조립 및 실행해 최종 통과 여부를 결정하도록 설계하는 에이전트 협업 아키텍처 패턴이다.

## 핵심 요지
1. **인지 편향(Cognitive Bias) 극복**: 단일 에이전트에게 스스로 코드를 작성하고 검토(Self-assess)하도록 요구하면, 자신이 설계한 함정에 스스로 사로잡혀 오답을 정답이라고 고집하는 자기 정당화가 발생한다. (실험 데이터에 따르면 자가 검토의 오탐율은 76.9%에 달한다.)
2. **독립적 테스트 스위트 생성**: Checker는 Maker가 구현한 코드나 중간 산출물을 미리 훔쳐보지 않고, 오직 원본 요구사항 명세(Prompt)만 보고 독자적인 어설션(assert) 테스트 코드를 먼저 코딩한다. 이로써 Maker의 설계적 오판이 Checker의 검증 단계로 전이되어 오염되는 현상을 예방한다.
3. **런타임 동적 실행**: 단순히 텍스트 레벨에서 정성적으로 눈대중 검토를 수행하는 챗 기반 [[LLM]] Judge(오탐율 53.8%) 대신, Maker가 넘겨준 코드를 로컬 환경에서 테스트 스위트와 함께 실제로 구동하여 예외 없이 정상 컴파일/실행 통과 시에만 최종 승인(Accept)하는 방식을 취한다.

## 상세
실제 에이전트 벤치마크(MBPP+) 실험에서 검증 프로토콜에 따른 정밀도와 오류 검출 지표는 다음과 같이 극명한 차이를 보인다.

| 검증 프로토콜 종류 | 오탐율 (False-accept) | 최종 승인 코드 정밀도 |
| :--- | :--- | :--- |
| **무조건 신뢰 (Trust all)** | 100% | 78.3% |
| **작성기 자체 검토 (Self-assess)** | 76.9% | 82.5% |
| **리뷰용 [[LLM]] 정성 평가 ([[LLM]] judge)** | 53.8% | 84.8% |
| **자가 테스트 실행형 (Self-test run)** | **30.8%** | **88.6%** |

자가 테스트 실행형 Checker의 상세 작동 절차:
1. **테스트 구현**: Checker가 명세서만을 토대로 "함수를 구현하지 말고 오직 검증용 assert 구문 4~6개만 출력하라"는 가이드에 맞춰 테스트 코드를 생산한다.
2. **실행 병합**: Maker 에이전트가 완성한 코드 뒤에 Checker의 테스트 코드를 붙여 `run_program` 런타임 모듈로 넘긴다.
3. **엄격한 변별**: 실행 시 발생하는 표준 에러(stderr), 어설션 에러, 무한 루프(타임아웃 처리)를 수집하여, 하나라도 통과하지 못하면 반려하고 통과 시에만 머지(Merge) 게이트를 통과시킨다.

## 예시
Checker 에이전트가 Maker의 로직을 독립 테스트로 검출하는 가상 아키텍처 구조 예시:

```python
# Checker가 독립적으로 테스트 케이스를 생성하는 단계
def gen_self_tests(llm, problem):
    prompt = (
        "Write 4 to 6 assert statements that any correct solution must satisfy. "
        "Use the exact function name. Do not implement the function, only the asserts.\n\n"
        + problem.prompt
    )
    g = llm.complete(prompt, system="Test Generator Persona", temperature=0.0)
    return extract_code(g.text)

# 실행 및 채점 단계
def selftest_verify(llm, problem, maker_code):
    checker_asserts = gen_self_tests(llm, problem)
    # Maker의 코드 뒤에 Checker가 생산한 assert 스위트를 붙여 로컬에서 실행
    run_result = execute_sandbox(maker_code + "\n\n" + checker_asserts)
    
    n_asserts = count_assert_statements(checker_asserts)
    n_passing = count_passing_asserts(run_result)
    
    # 생성된 모든 assert가 오차 없이 무결점으로 통과하는 경우에만 승인
    return n_passing == n_asserts
```

## 충돌
- **리소스 최적화 및 단일 샷 옹호론**: 두 개의 에이전트를 가동하고 런타임 샌드박스를 연동하는 작업은 추가적인 API 비용, 시간 지연, 환경 구성의 오버헤드를 유발하므로, 단일 고성능 프론티어 모델의 프롬프트 튜닝이나 퓨샷 제어로 해결하는 것이 경제적이라는 주장.
- **메이커-체커 분리론**: 인공지능 역시 자기가 기술한 잘못된 논리를 되풀이하는 자승자박(Self-confirmation bias) 편향을 완전히 피할 수 없다. 성능을 실질적으로 확보하려면 독립된 Checker를 활용해 물리적 런타임에서 강제로 굴려보는 객관적인 변별 신호(Verifier Discrimination)에 바인딩하는 방법이 유일한 해결책이라는 반론.

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[Harness Engineering]]
- [[에이전틱 AI 엔지니어 실무 로드맵]]

## 출처
- `raw/Testing 17 Agentic Loop Engineering Techniques for Reliable AI Agents.md`
