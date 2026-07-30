---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - code-analysis
  - parser
aliases:
  - tree-sitter
  - 트리시터
sources: ['raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md']
created: 2026-07-30
updated: 2026-07-30
---

# tree-sitter

## 한 줄 정의
소스 코드 파일을 파싱하여 들여쓰기나 단순 텍스트 매칭의 한계를 넘어 구문 단위의 정확한 추상 구문 트리(AST)를 신속하게 빌드하고, 코드 간 논리적 의존 관계를 규명하는 오픈소스 다국어 증분 구문 분석 라이브러리이다.

## 핵심 요지
- **구문 기반의 정확성**: 정규식이나 어림짐작 대신 정밀한 구문 트리 파싱을 통해 함수의 실제 경계, 호출 범위, 상속 구조를 정확히 짚어낸다.
- **SQLite 저장소와의 조합**: 파싱을 통해 추출된 심볼(Node)과 관계(Edge)를 로컬 SQLite 데이터베이스에 정적 컴파일함으로써 질의 속도를 극대화한다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).
- **다국어 및 점진적 분석 지원**: 다수의 프로그래밍 언어를 단일 인터페이스로 분석 가능하며, 변경된 코드 영역만 점진적으로 파싱하여 연산 리소스를 아낀다.
- **전처리기 매크로 분석의 한계**: C 언어 등 매크로가 과도하게 사용된 코드베이스에서는 전처리 과정을 완벽하게 시뮬레이션하지 못해 파싱 오류나 정보 누락이 생길 수 있다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).

## 상세
`tree-sitter`는 현대적인 에이전틱 코딩 도구([[codegraph]], [[code-review-graph]] 등)의 핵심 엔진으로 활용된다. 텍스트를 단순한 행(line)들의 집합으로 다루는 `grep`과 달리, 소스 코드를 구조화된 의미체(Semantic Entities)로 파악하게 돕는다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).

1. **에이전틱 지식 컴파일에서의 역할**:
   - **AST 파싱을 통한 그래프 노드 추출**: 파일 내의 함수 정의, 클래스 구조, 임포트 모듈을 구별하여 그래프 상의 노드(Node)로 정의한다.
   - **의존 관계 엣지 생성**: `tree-sitter`가 분석한 AST를 순회하며 함수 호출문이나 상속 관계를 추적해 SQLite에 연결선(Edge)으로 보존한다.
   - **[[코딩 에이전트]]의 context 윈도우 최적화**: 에이전트가 특정 파일의 전체 텍스트를 파싱하는 대신 `tree-sitter` 그래프를 활용해 연관 심볼만 조회하므로, OmniRoute 실험 기준 context 전송 용량을 98.7% 줄여 비용을 절감한다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).

2. **C 언어 매크로 파싱 충돌**:
   - C/C++ 프로젝트는 전처리기 매크로(#define, #ifdef 등)를 넓게 사용한다.
   - 학술 벤치마크에 따르면 `tree-sitter`는 매크로 치환 전의 소스 코드를 직접 파싱하므로, 복잡한 전처리기 매크로가 난무하는 구역에서는 AST 해석 실패나 누락을 노출하는 한계를 지닌다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`).

## 예시
### Python `tree_sitter` 라이브러리를 활용한 AST 기반 함수 호출 분석 시나리오
아래의 Python 코드는 `tree-sitter` 파서를 이용해 소스 코드 내에서 함수 정의 노드를 정밀 식별하는 구현 모델이다.

```python
from tree_sitter import Language, Parser

# 1. 지원 언어 바인딩 로드 (예: Python 언어 명세 로드)
# Language.build_library('build/my-languages.so', ['vendor/tree-sitter-python'])
PY_LANGUAGE = Language('build/my-languages.so', 'python')

parser = Parser()
parser.set_language(PY_LANGUAGE)

# 2. 분석 대상 소스 코드 정의
source_code = bytes("""
def classifyRoute(route_info):
    if route_info.is_valid:
        runAuthzPipeline(route_info)
        return True
    return False
""", "utf8")

# 3. tree-sitter 구문 분석 및 AST 빌드
tree = parser.parse(source_code)
root_node = tree.root_node

# 4. AST 노드를 순회하며 함수 정의(function_definition) 검출
def find_function_definitions(node):
    if node.type == 'function_definition':
        # 함수명 노드 추출
        name_node = node.child_by_field_name('name')
        if name_node:
            func_name = source_code[name_node.start_byte:name_node.end_byte].decode('utf8')
            print(f"검출된 함수 정의: {func_name} (라인 {node.start_point[0] + 1})")
            
    for child in node.children:
        find_function_definitions(child)

find_function_definitions(root_node)
# 출력 결과: 검출된 함수 정의: classifyRoute (라인 2)
```

## 충돌
- **텍스트 기반 탐색(Grep) vs AST 기반 분석(tree-sitter)**: Grep은 구문에 무관하게 매칭을 찾아내어 정확도가 떨어지는 반면, tree-sitter는 구문 구조를 파악하므로 호출 흐름을 정확히 짚어낸다 (`raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`). 단, tree-sitter는 빌드 타임이 필요하며, 편집 도중 파일 해시 충돌이나 매크로 전처리 실패로 분석 공백이 발생할 경우 일부 누락이 생겨 grep의 텍스트 보장성과 충돌할 수. 이에 따라 에이전트 프레임워크에서는 AST 분석 그래프를 1차 필터로 삼고 누락 위험을 보정하기 위한 제한적인 grep 검색을 결합하여 교차 보완하는 기법이 선호된다.

## 관련 노트
- [[codegraph]]: tree-sitter로 파싱된 소스 구조를 SQLite에 매핑해 빠른 영향 범위 탐색을 돕는 범용 도구.
- [[code-review-graph]]: tree-sitter 분석 결과를 기반으로 PR 단계에서 가중치 위험 점수 산정 및 테스트 맵핑을 지원하는 리뷰 특화 도구.
- [[코드 변경 영향 범위 분석]]: tree-sitter 그래프 데이터베이스 조회를 통해 변경 파급도를 정밀 분석하는 워크플로우.
- [[코드 위키]]: tree-sitter 등을 활용해 코드베이스를 구조화된 지식 노드로 컴파일하는 사상.

## 출처
- `raw/Andrej Karpathy’s Fix for LLM Memory Works on Code Too.md`