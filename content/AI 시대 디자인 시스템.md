---
type: concept
status: evergreen
core: true
tags:
 - llm
 - design-system
 - product
aliases:
 - AI-native design system
 - AI 디자인 시스템
 - 에이전트용 디자인 시스템
sources:
 - raw/AI로_만든_제품이_안_팔리는_이유.md
 - raw/Agentic Product Design. 오늘 바로 자동화할 수 있는 5가지 디자인 작업.md
 - raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md
 - raw/Good Design Doesn’t Happen By Default.md
 - raw/From faster pencil to AI Experience Architect. a designer’s path.md
 - raw/The most important Design System in 2026 that designers missed was built by a developer..md
  - raw/AI와 디자인 시스템 - 출판형 다듬기.md
 - https://github.com/google-labs-code/design.md
 - https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/
created: 2026-05-07
updated: 2026-05-29
---

# AI 시대 디자인 시스템

## 한 줄 정의

AI 시대 디자인 시스템은 사람이 화면을 일일이 그리는 규칙집을 넘어, AI가 반복 생성해도 제품의 시각 언어와 사용감을 유지하게 하는 실행 가능한 맥락이다.

## 핵심 요지

- AI가 코드를 빠르게 만들수록 제품 차별점은 구현 속도보다 시각 언어, 사용자 흐름, 판단 기준으로 이동한다.
- 디자인 시스템은 색상, 타이포그래피, spacing, icon style, component state를 정해 [[AI Slop]]을 줄인다.
- [[DESIGN.md 운영 원칙]]처럼 agent-readable 형식으로 저장하면 AI가 디자인 의도를 매번 새로 추측하지 않아도 된다.
- 디자이너의 역할은 픽셀 생산자에서 시스템 설계자, workflow 설계자, 품질 판단자로 이동한다.
- AI가 많이 쓰는 기본 컴포넌트 층(shadcn/ui 같은 code-first foundation)을 이해하지 못하면, 디자인 시스템 논의가 Figma 안에만 갇히기 쉽다.

## 상세

raw 문서는 AI가 평균적인 UI를 빠르게 만들수록 디자인 시스템이 더 중요해진다고 주장한다. "코드는 흔해졌지만 시스템은 흔해지지 않았다"는 관점이다. 초기에 필요한 값은 거대하지 않다. raw의 권장 출발점은 색상 5-6개, font size 6단계, spacing 8단계, 일관된 icon set, 그리고 이 규칙을 DESIGN.md로 옮기는 것이다.

Google Stitch는 2026-03-18 공식 글에서 DESIGN.md를 design rules를 export/import하는 agent-friendly markdown file로 소개했다. Google Labs의 `design.md` repository도 YAML token과 Markdown rationale을 결합해 coding agent에게 visual identity를 제공하는 형식으로 설명한다.


후속 raw는 왜 이 파일이 필요한지 더 명확하게 설명한다. agent는 디자인을 "못하는" 것이 아니라, 세션을 넘는 디자인 기억을 유지하지 못한다. 그래서 Bootstrap Default, Color Roulette, Style Drift가 반복된다. DESIGN.md의 9개 섹션은 바로 이 세 failure mode를 막기 위한 지속 제약 조건으로 읽을 수 있다.

또한 디자인 automation은 visual token만으로 끝나지 않는다. [[디자인 에이전트 5종]]처럼 리서치 정리, 문제 정의, 아이디어 발산, flow 설계도 agent화할 수 있지만, 그 산출물이 일관된 시각 언어로 내려오게 하려면 결국 DESIGN.md 같은 지속 맥락 파일이 필요하다.

`raw/Good Design Doesn’t Happen By Default.md`는 이 논리를 더 미시적으로 설명한다. 좋은 제품 감각은 취향보다도 spacing, typography, interaction pattern, component behavior의 기본값을 명시해 둔 결과라는 것이다. 즉 디자인 시스템은 component gallery 이전에 [[디자인 시스템 기본값]]을 고정하는 보이지 않는 아키텍처다.

`raw/The most important Design System in 2026 that designers missed was built by a developer..md`는 한 걸음 더 나아가, 많은 AI 생성 UI가 이미 [[shadcn-ui]] 형태로 수렴하고 있다고 본다. 이제 질문은 디자인 시스템이 필요한가가 아니라, AI가 가져오는 기본 foundation을 어디까지 받아들이고 어디를 override할 것인가에 가깝다.

`raw/AI와 디자인 시스템 - 출판형 다듬기.md`는 이 논리를 Claude Code와 Figma의 접점으로 옮겨 놓는다. 새 시스템을 처음부터 만들기보다, 기존 design system을 AI가 읽기 쉬운 형태로 정리하고, limited component control보다 프로덕션용 foundation을 유지하는 쪽이 낫다는 점을 다시 확인시킨다.

역할 면에서도 변화가 있다. `raw/From faster pencil to AI Experience Architect. a designer’s path.md`는 디자이너가 더 빠른 Figma 작업자에 머무르지 않고 [[AI Experience Architect]]처럼 workflow, 권한, fallback, review gate까지 설계하는 방향으로 이동한다고 설명한다. 이를 한 장으로 정리한 운영 프레임이 [[AI 디자인 역할 맵]]이다.

## 예시

- SaaS dashboard: 표, 필터, toast, modal의 spacing과 density를 먼저 정하고, AI에게 새 화면을 만들 때 같은 token을 쓰게 한다.
- 한국어 서비스: Pretendard 같은 한글 본문 font, line-height, 긴 버튼 label의 줄바꿈 규칙을 DESIGN.md에 적어 버튼 깨짐을 줄인다.
- AI 작업 검증: 결과물에서 token 밖 색상, 임의 radius, 다른 icon style이 생기면 디자인 시스템 위반으로 수정한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI Slop]]
- [[DESIGN.md 운영 원칙]]
- [[Vibe Coding과 Agentic Engineering]]
- [[AI 코딩 에이전트 검증 전략]]
- [[AI 네이티브 사용자]]
- [[디자인 에이전트 5종]]
- [[디자인 시스템 기본값]]
- [[shadcn-ui]]
- [[AI Experience Architect]]
- [[AI 디자인 역할 맵]]
- [[AI 디자인 팀 운영]]
- [[AI 기본값 구현체]]

