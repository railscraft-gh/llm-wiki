---
type: workflow
status: draft
core: false
tags:
  - llm
  - design
  - tool
  - workflow
aliases:
  - UIUX 디자인 AI 도구 체인
  - UI 디자인 AI 도구 체인
sources:
  - raw/UI 디자인을 위한 최고의 AI 도구 10선. 내 UI_UX 워크플로우를 10배 개선한 방법-ko.md
created: 2026-06-09
updated: 2026-06-09
---

# UI UX 디자인 AI 워크플로우

## 한 줄 정의

UI UX 디자인 AI 워크플로우는 기획안 리서치, 가설 검증, 유저 흐름 설계, UI 디자인, 프로토타이핑, 코드 개발 및 최종 사용자 테스트까지의 전 과정을 AI 도구 체인으로 연결해 생산성을 10배 개선하는 단계별 제품 개발 워크플로우다 [UI 디자인을 위한 최고의 AI 도구 10선. 내 UI_UX 워크플로우를 10배 개선한 방법-ko.md](file:///Users/railscraft/Obsidian/raw/UI%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20AI%20%EB%8F%84%EA%B5%AC%2010%EC%84%A0.%20%EB%82%B4%20UI_UX%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%EB%A5%BC%2010%EB%B0%B0%20%EA%B0%9C%EC%84%A0%ED%95%9C%20%EB%B0%A9%EB%B2%95-ko.md).

## 핵심 요지

- **도구 체인(Tool Chain)의 정렬**: 단일 AI 도구의 파편화된 사용에 의존하지 않고, 리서치·기획(상류 작업)부터 화면 구현 및 행동 분석(하류 작업)까지 단계별로 매끄럽게 연결되는 워크플로우 파이프라인을 구축한다.
- **오토 레이아웃의 보존**: Flowstep AI를 활용하면 기존의 Figma Make이나 Google Stitch 대비 UI 품질 및 코드 구조가 명확하며, "Export to Figma" 시 오토 레이아웃 구조가 손상 없이 유지되어 디자이너의 편집 공수를 획기적으로 낮춘다.
- **실증 데이터 기반 캘리브레이션**: 정적 프로토타입 피드백에만 의존하지 않고, 배포된 실기기 라이브 앱에 Microsoft Clarity 등의 추적 코드를 연동해 실제 유저의 행동 히트맵과 세션 녹화본을 분석하여 마찰 지점을 보정한다 [UI 디자인을 위한 최고의 AI 도구 10선. 내 UI_UX 워크플로우를 10배 개선한 방법-ko.md](file:///Users/railscraft/Obsidian/raw/UI%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20AI%20%EB%8F%84%EA%B5%AC%2010%EC%84%A0.%20%EB%82%B4%20UI_UX%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%EB%A5%BC%2010%EB%B0%B0%20%EA%B0%9C%EC%84%A0%ED%95%9C%20%EB%B0%A9%EB%B2%95-ko.md).

## 상세

### 10대 AI 도구 체인 및 역할 매핑
1. **Claude**: 리서치 브레인스토밍 파트너. 기획안의 허점을 진단하고 핵심 기능의 우선순위 설정.
2. **Notion AI**: 중앙 저장소 아카이빙. 흩어진 인터뷰와 기획안을 구조화하고 요약.
3. **ChatGPT + FigJam 커넥터**: 유저 여정(User Flow) 및 정보 구조(IA)를 시각화하여 논리적 구멍 사전 예방 [UI 디자인을 위한 최고의 AI 도구 10선. 내 UI_UX 워크플로우를 10배 개선한 방법-ko.md](file:///Users/railscraft/Obsidian/raw/UI%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20AI%20%EB%8F%84%EA%B5%AC%2010%EC%84%A0.%20%EB%82%B4%20UI_UX%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%EB%A5%BC%2010%EB%B0%B0%20%EA%B0%9C%EC%84%A0%ED%95%9C%20%EB%B0%A9%EB%B2%95-ko.md).
4. **Flowstep**: 레이아웃 뼈대 생성. 조화로운 시각 방향성과 뛰어난 코드 품질을 제공하며 Figma로 깔끔하게 전환.
5. **Figma AI**: 디자인 편집 고도화. 레이어 일괄 정리(Rename layers), 카피 다듬기(Rewrite this), 에셋 생성, 번역 및 콘텐츠 교체 등 편집 자동화.
6. **Gemini**: 시각 에셋 다량 생성. 이미지 생성 한도가 넉넉하여 로고 베리에이션 등 대량 시안 제작에 적합.
7. **Jitter AI**: 모션 디자인. 로딩 애니메이션, 스플래시 등 가벼운 인터랙션 모션을 수 초 만에 제작.
8. **Figma Make**: 신속한 프로토타이핑. 컴포넌트 유실 없이 화면을 바로 연결하여 초기 작동 모델 검증.
9. **Antigravity**: 메인 개발 에이전트. 넉넉한 유료 한도를 활용해 리서치 통찰, UI 시안, 명세서를 주입하여 GitHub 및 Vercel로 라이브 빌드 생성.
10. **Microsoft Clarity**: 유저 세션 분석. 히트맵, 클릭 및 스크롤 추적을 통해 마찰 지점을 정량적으로 판단 [UI 디자인을 위한 최고의 AI 도구 10선. 내 UI_UX 워크플로우를 10배 개선한 방법-ko.md](file:///Users/railscraft/Obsidian/raw/UI%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20AI%20%EB%8F%84%EA%B5%AC%2010%EC%84%A0.%20%EB%82%B4%20UI_UX%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%EB%A5%BC%2010%EB%B0%B0%20%EA%B0%9C%EC%84%A0%ED%95%9C%20%EB%B0%A9%EB%B2%95-ko.md).

## 예시

### 캠퍼스 도서 직거래/대여 플랫폼 구축 실무 예시
1. **리서치 및 IA 설계**: Claude와 비정형 인터뷰 설계를 논의해 기능 목록을 뽑고, Notion AI에 문서화함. FigJam 커넥터로 유저 흐름과 정보 구조를 명확히 조감함 [UI 디자인을 위한 최고의 AI 도구 10선. 내 UI_UX 워크플로우를 10배 개선한 방법-ko.md](file:///Users/railscraft/Obsidian/raw/UI%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20AI%20%EB%8F%84%EA%B5%AC%2010%EC%84%A0.%20%EB%82%B4%20UI_UX%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%EB%A5%BC%2010%EB%B0%B0%20%EA%B0%9C%EC%84%A0%ED%95%9C%20%EB%B0%A9%EB%B2%95-ko.md).
2. **시각화 및 자산 제작**: Flowstep으로 생성된 UI 화면을 오토 레이아웃 상태로 Figma에 내보낸 후 Figma AI로 다듬음. Gemini로 다양한 브랜드 로고 시안을 뽑고, Jitter AI로 로딩 화면에 입힐 스플래시 애니메이션을 적용함.
3. **프로토타이핑 및 1차 검증**: Figma Make으로 임시 연결 사이트(`ngbook.figma.site`)를 개설해 타겟 사용자 2명과 인터랙션을 간이 테스트함.
4. **개발 및 행동 데이터 교차 검증**: Antigravity를 활용하여 소스 코드를 생성한 후 GitHub과 Vercel을 연동해 라이브 사이트 배포. Microsoft Clarity에서 새 프로젝트를 만들고 Settings의 Setup 메뉴에서 수동 설치 추적 코드를 복사하여 `index.html` 내 `<head>`에 삽입. 배포 후 유저들의 세션 녹화와 클릭 마찰을 분석하여 UI 배치를 최종 보정함 [UI 디자인을 위한 최고의 AI 도구 10선. 내 UI_UX 워크플로우를 10배 개선한 방법-ko.md](file:///Users/railscraft/Obsidian/raw/UI%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20AI%20%EB%8F%84%EA%B5%AC%2010%EC%84%A0.%20%EB%82%B4%20UI_UX%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%EB%A5%BC%2010%EB%B0%B0%20%EA%B0%9C%EC%84%A0%ED%95%9C%20%EB%B0%A9%EB%B2%95-ko.md).

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[디자인 에이전트 5종]]
- [[프론트엔드 디자인 스킬]]

