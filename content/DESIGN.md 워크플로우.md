---
type: workflow
status: evergreen
core: true
tags:
  - llm
  - design-system
  - ai-coding
  - workflow
aliases:
  - DESIGN.md workflow
  - 디자인 핸드오프 워크플로우
sources:
  - "raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md"
  - "raw/2026년을 위한 웹 디자인 및 빌드 워크플로우.md"
  - "raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md"
created: 2026-06-09
updated: 2026-06-12
---

# DESIGN.md 워크플로우

## 한 줄 정의
DESIGN.md 워크플로우는 Figma 및 Google Stitch 캔버스에서 정의된 시각적 컴포넌트 토큰과 레이아웃 속성을 `DESIGN.md` 텍스트 명세서로 고정하고, v0, Figma MCP, Claude Code 등을 유기적으로 조합하여 디자인-코드 간의 격차(Drift) 없이 최종 UI 결과물을 고속 구현하는 실무 핸드오프 워크플로우다.

## 핵심 요지
- **단일 기준점(Source of Truth) 확립**: `DESIGN.md`는 프로젝트 루트에 생성하는 단일 마크다운 파일로, 색상 팔레트, 타이포그래피, 여백, 컴포넌트 패턴 등의 디자인 규격을 텍스트로 정의하여 다양한 AI 에이전트(Stitch, Claude Code, Cursor, v0 등)가 일관된 UI를 유지하게 하는 계약서 역할을 한다.
- **Git을 통한 버전 관리**: 복잡한 디자인 토큰 스키마와 달리 인간과 AI 모두 직관적으로 읽을 수 있고, 일반 소스 코드처럼 Git을 통해 PR, 코드 리뷰, 변경 이력 추적 등의 형상 관리가 가능하다.
- **2026 에이전틱 디자인-개발 조율 파이프라인**: Figma(디자인 시스템), v0(컴포넌트 스캐폴딩), Google Stitch(양방향 레이아웃 캘리브레이션), Claude Code(최종 구현 및 검증)를 유기적으로 체인화하여 개발 시간을 획기적으로 줄인다.

## 상세

### 1. 현대 에이전틱 웹 디자인 및 빌드 파이프라인 (2026 방식)
1. **Figma 디자인 시스템 구축**: Figma 내에 타이포그래피, 컬러, 스페이싱 등 BADS(Beautiful, Accessible, Durable Design System) 규칙을 규정한다.
2. **DESIGN.md 추출 및 배치**: `audit-design-system` 및 `create-voice` 스킬을 사용하여 Figma 디자인 가이드라인을 마크다운 포맷의 `DESIGN.md`로 변환하여 코드 리포지토리 루트에 배치한다.
3. **v0 컴포넌트 스캐폴딩 (v0 Generation)**: Vercel v0에 `DESIGN.md` 텍스트 명세를 컨텍스트로 제공하고 시안 프롬프트를 입력해, 디자인 토큰이 올바르게 적용된 초안 React 컴포넌트 소스코드(Tailwind/Vanilla CSS 기반)를 초고속 렌더링한다.
4. **Stitch를 통한 양방향 캘리브레이션**: 복잡한 인터랙티브 페이지는 `stitch.withgoogle.com` 캔버스와 `DESIGN.md` 간의 하향식/상향식 동기화를 통해 세부 그리드 배치를 확정한다.
5. **Claude Code 최종 빌드 및 Figma MCP 검증**:
   - `claude mcp add figma` 및 `claude mcp add stitch` 연동을 활성화한다.
   - Claude Code에게 v0 초안 코드와 `DESIGN.md`를 입력하여 프로젝트 아키텍처 테마(예: `theme.ts`)에 결합시킨다.
   - `apply-design-system` 스킬을 통해 생성된 코드가 Figma 원본 디자인 컴포넌트의 가이드라인(State, Responsive mobile, Contrast AAA)을 일탈(drift)하지 않았는지 최종 교차 검증하고 배포한다.

### 2. 실무 10단계 워크플로우
1. **Google Stitch 접속**: 구글 계정으로 로그인하여 AI 디자인 캔버스(`stitch.withgoogle.com`)를 연다.
2. **초기 디자인 생성**: 하단 프롬프트 창에 대상 사용자, 기능 목록, 시각적 톤앤매너 제약 조건을 상세히 전달하여 화면을 생성한다.
3. **DESIGN.md 자동 생성 확인**: 디자인 시스템 패널을 열어 캔버스 구조 분석을 통해 생성된 `DESIGN.md` 규격을 확인한다.
4. **양방향 디자인 조율**: 캔버스 프롬프트를 통한 상향식 수정이나, `DESIGN.md` 텍스트 수정을 통한 하향식 조율을 반복해 규격을 완성한다.
5. **프로젝트 코드베이스 적용**: 완성된 `DESIGN.md` 마크다운 텍스트를 복사하여 개발 중인 프로젝트 루트 경로에 생성하고 Git 커밋을 진행한다.
6. **Stitch MCP 연동**: Stitch API 키를 생성한 후 프로젝트 터미널에서 `claude mcp add stitch`를 실행하고 API 키를 등록한다.
7. **Claude Code 지시 전달**: "프로젝트 루트의 `DESIGN.md`를 엄격히 준수하고, Stitch MCP를 통해 특정 화면의 레이아웃을 가져와 컴포넌트를 빌드하라"고 지시한다.
8. **구현 전 계획 검토**: 코드가 작성되기 전, 에이전트가 `DESIGN.md` 규칙을 반영해 설계한 테마 파일 구조 및 아키텍처를 선행 확인 및 보정한다.
9. **화면 구현 및 픽셀 조율**: 생성된 화면의 디테일(여백 오류, 누락된 구분선 등)을 대조하여 픽셀 단위 캘리브레이션을 진행한다.
10. **실기기 교차 검증**: 모바일/웹 실기기 구동 환경에서 확인한 마감 문제를 피드백하여 즉시 교정한다 (피드백 순환 주기가 약 30초 내로 단축됨).

## 예시

### Cadence 습관 추적 앱 실무 연동
1. **프롬프트 입력**: "차분하고 미니멀한 습관 추적 앱 Cadence를 디자인해줘. 따뜻한 오프화이트 배경(#FAF7F2), 세이지 악센트(#8AA890) 사용."
2. **DESIGN.md 캘리브레이션**: 자동 작성된 `DESIGN.md`에서 본문 행간을 24에서 22로 직접 수정하고, 악센트 컬러를 클레이 색상(`#B5715F`)으로 변경하여 캔버스 화면 자동 동기화 업데이트.
3. **코드 프로젝트 연동**: React Native Expo 프로젝트 루트에 `DESIGN.md` 붙여넣기 및 `claude mcp add stitch` 연동 완료.
4. **검토 및 빌드**: Claude Code가 `DESIGN.md`를 파싱해 공통 테마 `theme.ts`를 제안하고, 개발자의 검토 후 Stitch MCP의 Home 화면 레이아웃 매핑 정보를 읽어 `HomeScreen.tsx` 완성. 피드백 30초 내 교정 루프 가동 (출처: DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법)

## 관련 노트
- [[DESIGN.md 운영 원칙]]
- [[AI 시대 디자인 시스템]]
- [[Figma 에이전트 연동]]
- [[Model Context Protocol]]
- [[디자인 시스템 기본값]]
- [[프론트엔드 스타일링 패러다임]]

