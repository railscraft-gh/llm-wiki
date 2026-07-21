---
type: workflow
status: draft
core: false
tags:
- llm
- design
- claude-code
sources:
- raw/Claude Code를 활용한 브랜드 로고 디자인 가이드.md
created: 2026-06-22
updated: 2026-06-22
aliases:
- Claude-Code-브랜드-로고-디자인-워크플로우
---
# Claude Code 브랜드 로고 디자인 워크플로우

## 한 줄 정의
Claude Code 브랜드 로고 디자인 워크플로우는 브랜드 브리프와 기술 명세를 사전에 구조화된 텍스트 코드로 컴파일한 후, Claude Code(Opus 4.8 xhigh 노정) 환경에서 SVG 벡터 코드로 로고 콘셉트 및 라이트/다크 대응 HTML 프리뷰를 한 번에 빌드하는 디자인 프로토타이핑 워크플로우다.

## 핵심 요지
- **코드로 다루는 디자인**: 로고를 모호한 이미지 생성 프롬프트 대신, 수정이 간편하고 해상도 제약이 없는 SVG(Scalable Vector Graphics) 코드로 취급함으로써 프로덕션 환경에 바로 투입 가능한 형태의 벡터 에셋을 생성한다.
- **브랜드 브리프 구조화 (`BRAND.md`)**: 제품명, 타깃 고객, 브랜드 개성(Personality), 시각적 참조(Visual references), 전용 컬러 HEX 값, 타이포그래피(CSS 폰트 스택), 금지 규격(Avoid)을 사전에 마크다운 파일로 작성하여 에이전트 가드레일로 제공한다.
- **2레이어 가드레일 차단**: 겉보기에 빽빽하고 정형화된 평범한 시안([[AI Slop]]) 생성을 막기 위해 `@BRAND.md` 파일 내 가드레일 설정과 실제 실행 프롬프트의 회피 사항(Avoid) 지정을 통한 2중 가드레일(2-Layer Guardrails)을 강제 적용한다.
- **Opus 4.8 Extra High Effort 활용**: 1차 결과물의 시각적 결함과 복잡한 벡터 연산을 제어하기 위해 추론 노력이 매우 높은 Opus 4.8 xhigh 환경에서 12분 이상의 연산과 일일 쿼터의 약 20%를 투입해 정밀하게 렌더링한다.

## 상세

### 1. 브랜드 가이드라인 구조화 (`BRAND.md`)
Claude Code가 브랜드의 세밀한 뉘앙스를 인식하게 돕기 위해 프로젝트 루트에 `BRAND.md` 파일을 아래 필수 섹션으로 채워 미리 보관한다.
- **Product Name & Audience**: 제품 한 줄 설명 및 타깃 고객 페르소나 리스트.
- **Personality**: 브랜드 톤앤매너를 규정할 3~5가지 형용사 지정 (예: warm, friendly, simple, crafted 등).
- **Colors**: 브랜드 기본 컬러 및 보조 컬러의 정확한 HEX 코드와 명세표 제공.
- **Typography Direction**: 매칭할 브랜드 서체 이름과 구체적인 CSS 폰트 스택 지정.
- **Things to Avoid**: 생성되지 말아야 할 시각적 클리셰(예: 커피숍 로고에서의 단순 커피잔 기호, 빛번짐 효과, 그라데이션 등)를 명시하여 1차 가드레일 역할 수행.

### 2. SVG 로고 제너레이션 프롬프트 엔지니어링
프롬프트 구조는 1. 명확한 첫 명령어(첫 문장에 작업 선언), 2. `@BRAND.md`를 포함한 컨텍스트 제공, 3. 금지 가드레일 명시, 4. 태스크 상세(Tasks)의 4단계로 구성된다.

```text
Create 3 distinct SVG logo concepts for [PRODUCT NAME]

Context:
- Product: [간략한 제품 소개]
- Audience: [대상 고객군]
- Brand personality: [브랜드 개성 3~5가지 형용사]
- Visual direction: [요구하는 시각 스타일 및 톤]
- Styleguide: @BRAND.md (브랜드 브리프 파일 태깅)
- Typography direction: [폰트 및 타이포그래피 지침]
- Avoid: [피해야 할 시각적 클리셰 및 복잡한 효과]

Tasks:
1. Create 3 distinct SVG logo concepts.
2. Each concept should be built from simple vector shapes only.
3. Create icon-only, wordmark, and horizontal lockup versions.
4. Create an HTML preview page showing every concept on light and dark backgrounds.
5. Test each logo at 16px, 32px, 64px, and 512px.
6. Add a short design rationale under each concept.
7. Rank the top 3 options and explain why.
8. Keep everything editable and production-ready.
```

### 3. 기술적 결과물 검증
- **SVG 포맷 품질**: 코드로 제어되는 SVG이기 때문에 스케일링이 자유롭고 즉시 코드로 퍼블리싱 가능하다.
- **품질 루프(Quality Loop)와 한계**: Opus 4.8 xhigh 수준에서도 자잘한 시각적 불일치나 미세 결함이 나타날 수 있으므로 디자이너의 수동 편집(Fine-Tuning)이 필요하다.
- **디자인 근거(Rationale) 및 순위 평가**: Claude가 생성한 순위 평가(Ranking) 테이블과 의사결정 기록은 의사결정의 궤적(Decision Trail)을 남기는 데 기여한다.

## 예시
- **커피 체인점 Izzy 브랜드 로고 프로토타이핑**:
  - `BRAND.md`에 주조색 `#C08552`(Izzy Caramel), 다크 텍스트 `#2A1810`(Espresso)과 폰트 스택 `font-family: "IBM Courier", "Courier New", Courier, monospace;`를 설정.
  - 회피 사항(Avoid)으로 커피 잔 기호와 인공적인 반짝임(sparkles)을 명시.
  - 결과물로 3가지 콘셉트(키캡, 커피 링, 지그재그 구조)의 SVG 로고 및 16px/32px/64px/512px 크기별 프리뷰를 담은 HTML 페이지를 약 12분 만에 자동 생성하여 브랜드 정체성 1차 시안 확보.

## 충돌
- **이미지 생성 프롬프트(Midjourney/DALL-E) vs SVG 코드 제어**: 래스터 이미지 생성 도구는 해상도가 고정되어 있고 텍스트 일치율이 떨어져 즉각적인 브랜드 에셋 변환이 어렵지만, Claude Code를 통한 직접적인 SVG 생성은 프론트엔드 코드에 drop-in 복사할 수 있어 워크플로우 마찰이 훨씬 적다.

## 관련 노트
- [[UI UX 디자인 AI 워크플로우]]
- [[Claude Design]]
- [[Claude Code 스킬 관리]]
- [[Figma 에이전트 연동]]

## 출처
- raw/Claude Code를 활용한 브랜드 로고 디자인 가이드.md
