요청하신 **`span 태그`** 개념에 대해 작성 규칙과 템플릿 표준을 엄격히 준수한 고품질의 위키 노트를 새로 작성하였습니다.

작성된 위키 노트는 아티팩트 메타데이터와 함께 위키 지식 베이스 경로(`scratch/llm-wiki/wiki/span 태그.md`)에 성공적으로 저장되었습니다.

---

# span 태그

## 한 줄 정의
`<span>`은 줄바꿈을 유발하지 않고 자체 레이아웃/외관 변형이 없는 표준 인라인(Inline) HTML 컨테이너 요소이다.

## 핵심 요지
- **인라인(Inline) 성질**: 줄바꿈(새 줄 시작)을 생성하지 않으며, 페이지의 전체 너비를 차지하지 않고 오직 여는 태그와 닫는 태그 사이의 콘텐츠가 차지하는 만큼의 공간만 확보한다 (`raw/Block-Level and Inline Elements. The difference between div and span.md`).
- **무스타일(Unstyled) 컨테이너**: 기본적으로 브라우저 시각 스타일이나 외관 변형이 발생하지 않으며, 필수 속성(Attribute) 또한 요구되지 않는다 (`raw/Block-Level and Inline Elements. The difference between div and span.md`).
- **텍스트/스타일링 단위 그룹화**: 주로 문단(`<p>`)이나 긴 텍스트 흐름 내에서 특정 단어나 구문에 국한하여 CSS 스타일을 적용하거나 JavaScript 이벤트를 바인딩하기 위해 사용된다 (`raw/Block-Level and Inline Elements. The difference between div and span.md`).
- **블록 레벨 요소와의 대비**: 항상 새로운 줄에서 시작하고 좌우 전체 너비를 차지하는 [[div 태그]]나 [[p 태그]] 등 블록 레벨(Block-level) 요소와 명확히 구분된다 (`raw/Block-Level and Inline Elements. The difference between div and span.md`).

## 상세
`<span>` 요소는 HTML 문서 구조와 렌더링 관점에서 대표적인 인라인 컨테이너 역할을 수행한다. 

HTML 요소는 레이아웃과 스타일링 관점에서 크게 **블록 레벨(Block-level)** 요소와 **인라인(Inline)** 요소 두 가지 범주로 나뉜다. `<span>`은 [[a 태그|앵커 태그(<a>)]], [[em 태그|강조 태그(<em>)]], [[img 태그|이미지 태그(<img>)]]와 마찬가지로 인라인 요소 그룹의 대표적 예시이다 (`raw/Block-Level and Inline Elements. The difference between div and span.md`).

### 주요 특징
1. **공간 점유 방식**: 흐름(Flow)을 깨지 않고 문맥 내부(Inline)에 자연스럽게 위치하며, 콘텐츠 크기만큼만 좌우 영역을 점유한다.
2. **시각적 독립성 부재**: 단독 사용 시 어떤 레이아웃 변화나 외관 변형도 일으키지 않는다.
3. **타겟팅 목적**: Class, ID, 또는 inline style 속성을 부여하여 텍스트 일부의 색상, 폰트, 배경 등을 개별 제어하거나 스크립트 이벤트를 연결할 때 핵심적으로 활용된다.

## 예시

### 1. 문단 내 특정 단어 구별 스타일링
HTML 문단(`<p>`) 내부의 특정 단어들에 서로 다른 색상을 입히기 위해 `<span>` 태그를 사용한다 (`raw/Block-Level and Inline Elements. The difference between div and span.md`).

```html
<p>
  문단 태그 내에서 <span style="color: red;">특정 단어</span>에 서로 다른 <span style="color: blue;">색상</span>을 입히기 위해 span을 활용합니다.
</p>
```

### 2. LLM / Agent 웹 UI의 토큰 단위 스트리밍 렌더링
LLM의 응답이나 웹 에이전트의 출력 결과를 웹 UI 상에 실시간 스트리밍할 때, Entity 강조나 토큰 단위 하이라이팅을 수행하기 위해 `<span>` 태그로 래핑하여 표시한다.

```html
<div class="llm-response-container">
  <span>모델 응답: </span>
  <span class="highlight-entity" style="background-color: #fff59d;">Gemini 1.5 Pro</span>가 생성한 결과입니다.
</div>
```

## 충돌
현재 소스 문서 및 기존 지식 베이스와의 논리적/기술적 정보 충돌 사항 없음.

## 관련 노트
- [[div 태그]]: `<span>`과 달리 항상 새로운 줄에서 시작하고 전체 너비를 차지하는 대표적인 블록 레벨(Block-level) 무스타일 컨테이너 노트.
- [[HTML 요소 레이아웃]]: 블록 레벨(Block-level) 요소와 인라인(Inline) 요소의 렌더링 특성 및 DOM 구조적 차이를 정리한 위키 노트.

## 출처
- `raw/Block-Level and Inline Elements. The difference between div and span.md`