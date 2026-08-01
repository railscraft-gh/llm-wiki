---
type: tool
status: draft
core: false
tags:
  - ai
  - design
  - moonchild
aliases: []
sources:
  - raw/How I Design UI with Help of AI Tool, Without Ending up With Slop.md
created: 2026-07-30
updated: 2026-08-01
---
## 한 줄 정의
디자인 시스템을 사전에 정의하고 라이브러리 형태로 배포 및 연결하여, 일관성 있는 프로덕션급 UI 및 인터랙티브 프로토타입을 설계할 수 있도록 지원하는 '시스템 우선(System-first)' AI UI 디자인 에이전트 도구.

## 핵심 요지
- **디자인 시스템 우선 (System-first) 설계**: 빈 화면에서 UI 생성을 요청하는 것이 아니라, 먼저 Spacing, Typography, Color 등 디자인 토큰 및 컴포넌트 규격을 선언적으로 정의하여 AI 환각(AI Slop)을 차단한다.
- **개발 워크플로우 통합**: Moonchild에서 설계한 디자인 시스템을 마크다운 파일로 내보내어 Google Antigravity 등 코딩 에이전트에 통째로 주입할 수 있다.
- **AI Slop 극복**: AI 도구가 무작위로 평범한 레이아웃과 색상을 지어내는 대신, 사전에 정해진 규칙에 입각해 결과물을 내도록 강제함으로써 제품 고유의 아이덴티티를 살릴 수 있다.

## 상세
대부분의 AI 도구는 화면을 렌더링할 때 임시적인 얄팍한 시스템을 즉석에서 만들고 잊어버리는 방식을 취해 결과적으로 양산형 결과물([[AI Slop]])을 배출한다. 반면, Moonchild는 시스템을 중심축으로 두고 설계한다. 사용자는 단일 프롬프트를 날리기 전 Moonchild DS(디자인 시스템)에서 레이아웃 뼈대와 규칙을 세워야 하며, 완성된 시스템은 Antigravity IDE 등과 연동되어 일관된 코드로 자동 렌더링된다. 이로써 디자이너는 AI의 결과물을 뒤처리하는 역할에서 벗어나 진정한 '디렉터'의 역할을 수행할 수 있게 된다.

## 예시
- **식당 관리 MVP 구축**: 인도의 식당 포털 프로젝트에서 ChatGPT로 IA 기획 ➡️ Moonchild AI로 DS 및 UI 기획 ➡️ Google Antigravity에 DS 마크다운 주입 후 코딩 변환을 통해 빌드 시간을 1/10로 단축했다.

## 관련 노트
- [[AI Slop]]
- [[UI UX 디자인 AI 워크플로우]]
- [[Antigravity]]

## 출처
- [raw/How I Design UI with Help of AI Tool, Without Ending up With Slop.md](file:///Users/railscraft/Obsidian/raw/How%20I%20Design%20UI%20with%20Help%20of%20AI%20Tool%2C%20Without%20Ending%20up%20With%20Slop.md)