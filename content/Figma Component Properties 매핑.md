요청하신 **'Figma Component Properties 매핑'** 개념에 대한 한국어 LLM Wiki 노트를 지정된 작성 원칙 및 템플릿 구조에 맞춰 자율적으로 생성을 완료하였습니다.

생성된 노트 파일 경로는 다음과 같습니다:
`scratch/llm-wiki/wiki/Figma Component Properties 매핑.md`

---

### [작성 노트 주요 요약]

- **Frontmatter**: `type: workflow`, `status: draft`, `sources: ['raw/Agentic AI, design systems & Figma. a practical guide-ko.md']` 등 지정된 스키마 준수.
- **한 줄 정의 및 핵심 요지**: Figma 컴포넌트의 4가지 속성을 코드 Props 및 Storybook과 1:1 대응하여 AI 에이전트(기계)가 디자인 시스템을 자동 추론 및 조립 가능하도록 구축하는 표준 워크플로우 명세.
- **상세 분석**:
  - Figma의 4가지 Property 타입(Variants, Booleans, Instance swap, Text)과 코드 프로퍼티 간의 1:1 매핑 매트릭스 제시.
  - Component Naming 규칙(PascalCase 준수) 및 Component Description 활용성 기재.
  - 컴포넌트 Detaching을 방지하는 Figma Slots(General/Named Slot) 활용법과 Auto Layout 및 Semantic Tokens 변환 체계 작성.
- **구체적 예시**:
  - `@figma/code-connect` 기반 TSX 매핑 코드 예시 1개.
  - Named Slots 기반 JSX 컴포넌트 구조 1개 포함.
- **충돌 섹션**: Typography Style/Gradient/Effect 등 visual styles의 자동 코드 변환 한계점 및 다차원 Variant 조합 폭발 문제와 해결책 명시.
- **관련 노트 및 출처**: [[Figma MCP]], [[Figma-Claude Code 양방향 연동]], [[Storybook]], [[AI 기반 디자인 워크플로우]], [[Model Context Protocol]] 등 지식 네트워크 연결 및 소스 경로 명시.