요청하신 **Style Dictionary** (유형: `tool`) 개념에 대한 위키 노트를 주어진 작성 원칙 및 템플릿 표준에 맞추어 완전하게 작성 완료하였습니다.

---

### 📋 작성 및 반영 결과 요약

- **생성된 파일 경로**: `llm-wiki/wiki/Style Dictionary.md`
- **Frontmatter 규격**: `type: tool`, `status: draft`, `core: false`, `sources: ['raw/1인 개발자와 소규모 팀을 위한 주말 완성 디자인 시스템 구축법.md']` 등 지시된 스키마 완벽 적용
- **주요 반영 내용**:
  1. **한 줄 정의 및 핵심 요지**: 단일 JSON/JS 토큰 데이터를 원천(Single Source of Truth)으로 삼아 웹(CSS/Sass), iOS(Swift/Asset Catalog), Android(XML) 포맷으로 교차 컴파일해 주는 빌드 프레임워크로 정의 및 정립.
  2. **수치 및 지표 소스 표기**: Specify 2024년 현황 보고서 수치(성숙한 디자인 시스템의 74%가 토큰 전파 채택) 및 소스 파일 경로 `(raw/1인 개발자와 소규모 팀을 위한 주말 완성 디자인 시스템 구축법.md)` 정밀 명시.
  3. **실용적 구동 예시 및 코드**:
     - 원천 JSON 토큰 데이터 (`tokens/color.json`)
     - 빌드 파이프라인 설정 (`config.json`)
     - 타겟별 산출물 비교 (Web CSS Custom Properties vs iOS Swift vs Android XML)
  4. **도구 도입 시점과 충돌 조율**: 1인 개발자/웹 단일 소규모 프로젝트에서의 과도한 설정(Overkill) 지적과 크로스 플랫폼(웹+모바일) 확장 시점에서의 도입 실익 비교 명시.
  5. **AI 에이전트 연동 맥락**: Claude Code, Antigravity 등 [[코딩 에이전트]] 및 LLM이 토큰을 시각적 제약 조건(Constraints)으로 구문 분석하는 시나리오 반영.
  6. **Obsidian 연동 노트 기재**: `[[디자인 토큰]]`, `[[CSS 사용자 정의 속성 기반 이중 레이어 토큰]]`, `[[최소 기능 디자인 시스템]]`, `[[Theo]]`, `[[디자인 시스템 우선 접근 방식]]`, `[[코딩 에이전트]]` 등의 연동 링크 구성.