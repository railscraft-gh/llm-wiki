요청하신 **HTML 태그 속성**에 대한 고품질 한국어 위키 노트를 성공적으로 생성하여 저장했습니다.

작성된 위키 노트는 사용자 규칙 및 지침(No-Ask Policy, YAML frontmatter 표준, Obsidian 위키링크, 출처 인용, 구체적인 코드 예시 및 LLM 시나리오 포함)을 정확히 준수하여 작성되었습니다.

---

### [작성된 위키 노트 미리보기]

**파일 위치**: [`llm-wiki/wiki/HTML 태그 속성.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/HTML%20%ED%83%9C%EA%B7%B8%20%EC%86%8D%EC%84%B1.md)

```markdown
---
type: glossary
status: draft
core: false
tags:
  - html
  - web
  - frontend
  - llm
aliases:
  - HTML Attributes
  - HTML 속성
  - 태그 속성
sources:
  - raw/Block-Level and Inline Elements. The difference between div and span.md
created: 2026-08-28
updated: 2026-08-28
---

# HTML 태그 속성

## 한 줄 정의
HTML 요소에 부가적인 정보(메타데이터, 동작 방식, 수식 스타일 등)를 제공하거나 태그의 식별·연동·서식을 지정하기 위해 여는 태그(Opening tag) 내부에서 `name="value"` 형태로 선언되는 키-값 쌍(Key-Value pair).

## 핵심 요지
- **태그 동작 및 스타일 정의**: [[HTML]] 태그 자체는 요소의 시맨틱 유형을 결정하며, 속성(Attribute)은 해당 요소의 세부 메타데이터나 동작 방식, 리소스 경로 등을 보완하여 정의합니다 (raw/Block-Level and Inline Elements. The difference between div and span.md).
- **필수 속성 여부의 차이**: `<div>`나 `<span>` 요소처럼 기본 스타일이나 필수 속성(Required Attributes)을 요구하지 않는 무스타일(unstyled) 태그가 있는 반면, 앵커 태그(`<a>`의 `href`)나 이미지 태그(`<img>`의 `src`, `alt`)처럼 고유 동작을 위해 필수 속성이 요구되는 태그도 존재합니다 (raw/Block-Level and Inline Elements. The difference between div and span.md).
- **글로벌 속성과 전용 속성**: `id`, `class`, `style`, `title` 등 모든 HTML 태그에 공통 적용할 수 있는 글로벌 속성(Global Attributes)과 특정 태그에서만 유효한 엘리먼트 전용 속성이 구분됩니다.
- **LLM 및 AI 에이전트에서의 중요성**: GPT-4o, Claude 3.5 Sonnet 등의 LLM이 웹 컴포넌트나 [[Generative UI]]를 생성할 때, HTML 태그 속성을 정확하게 구성해야 접근성(a11y), 이벤트 바인딩, 브라우저 DOM 렌더링이 정상 작동합니다.

... (중략) ...
```

### 주요 연동 위키 노트
- [[HTML 블록 레벨 요소]]
- [[HTML 인라인 요소]]
- [[컴포넌트 속성]]
- [[CSS 사용자 정의 속성 기반 이중 레이어 토큰]]
- [[Generative UI]]
- [[AI 생성 HTML 보안 위험]]