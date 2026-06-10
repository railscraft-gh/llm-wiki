---
type: workflow
status: draft
core: false
tags:
  - llm
  - design-system
  - ai-coding
  - workflow
aliases:
  - DESIGN.md workflow
sources:
  - DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법
  - raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
created: 2026-06-09
updated: 2026-06-10
---

# DESIGN.md 워크플로우

## 한 줄 정의

DESIGN.md 워크플로우는 Google Stitch 캔버스에서 도출된 `DESIGN.md` 명세 파일을 프로젝트 루트 폴더에 배치하고, Claude Code와 Stitch MCP를 연동하여 시각 일관성을 유지하면서 개발 완료까지의 루프를 단축하는 실무 워크플로우다.

## 핵심 요지

- **단일 기준점(Source of Truth) 확립**: `DESIGN.md`는 프로젝트 루트에 생성하는 단일 마크다운 파일로, 색상 팔레트, 타이포그래피, 여백, 컴포넌트 패턴 등의 디자인 규격을 텍스트로 정의하여 다양한 AI 에이전트(Stitch, Claude Code, Cursor, v0 등)가 일관된 UI를 유지하게 하는 계약서 역할을 한다.
- **Git을 통한 버전 관리**: 복잡한 디자인 토큰 스키마와 달리 인간과 AI 모두 직관적으로 읽을 수 있고, 일반 소스 코드처럼 Git을 통해 PR, 코드 리뷰, 변경 이력 추적 등의 형상 관리가 가능하다.
- **양방향 실시간 동기화**: Google Stitch 캔버스 환경에서는 `DESIGN.md` 텍스트 수정으로 전체 화면을 재렌더링하는 하향식(Top-down) 방식과, 자연어 프롬프트 편집 결과가 `DESIGN.md`에 자동 갱신되는 상향식(Bottom-up) 방식을 모두 지원한다 (출처: DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법).

## 상세

### 실무 10단계 워크플로우
1. **Google Stitch 접속**: 구글 계정으로 로그인하여 AI 디자인 캔버스(`stitch.withgoogle.com`)를 연다.
2. **초기 디자인 생성**: 하단 프롬프트 창에 대상 사용자, 기능 목록, 시각적 톤앤매너 제약 조건을 상세히 전달하여 화면을 생성한다.
3. **DESIGN.md 자동 생성 확인**: 디자인 시스템 패널을 열어 캔버스 구조 분석을 통해 생성된 `DESIGN.md` 규격을 확인한다.
4. **양방향 디자인 조율**: 캔버스 프롬프트를 통한 상향식 수정이나, `DESIGN.md` 텍스트 수정을 통한 하향식 조율을 반복해 규격을 완성한다.
5. **프로젝트 코드베이스 적용**: 완성된 `DESIGN.md` 마크다운 텍스트를 복사하여 개발 중인 프로젝트 루트 경로에 생성하고 Git 커밋을 진행한다.
6. **Stitch MCP 연동**: Stitch API 키를 생성한 후 프로젝트 터미널에서 `claude mcp add stitch`를 실행하고 API 키를 등록한다 (출처: DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법).
7. **Claude Code 지시 전달**: "프로젝트 루트의 `DESIGN.md`를 엄격히 준수하고, Stitch MCP를 통해 특정 화면의 레이아웃을 가져와 컴포넌트를 빌드하라"고 지시한다.
8. **구현 전 계획 검토**: 코드가 작성되기 전, 에이전트가 `DESIGN.md` 규칙을 반영해 설계한 테마 파일(예: `theme.ts`) 구조 및 아키텍처를 선행 확인 및 보정한다.
9. **화면 구현 및 픽셀 조율**: 생성된 화면의 디테일(여백 오류, 누락된 구분선 등)을 대조하여 픽셀 단위 캘리브레이션을 진행한다.
10. **실기기 교차 검증**: 모바일/웹 실기기 구동 환경에서 확인한 마감 문제를 피드백하여 즉시 교정한다 (피드백 순환 주기가 약 30초 내로 단축됨).

### 흔히 범하는 5가지 실수
1. **캔버스 개별 수정 집착**: 전역 디자인 규칙을 변경해야 할 때, 설정 파일(`DESIGN.md`) 대신 캔버스를 수동 수정하여 동기화를 깨는 것.
2. **일회성 취급**: `DESIGN.md`를 초기 빌드용 일회성 문서로 취급하고 방치하여 향후 디자인 일관성을 유실하는 것.
3. **Stitch MCP 연동 생략**: 연동이 번거롭다는 이유로 스크린샷만 건네는 방식. 구조적 데이터(레이아웃 계층, 정확한 여백 경계)가 유실되어 완성도가 크게 저하된다 (출처: DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법).
4. **모호한 프롬프트 지시**: 에이전트에게 `DESIGN.md` 명세를 구체적으로 참조하라고 지시하지 않고 단순히 "보기 좋게 만들어줘"라고 요청하는 것.
5. **정합성 붕괴 방치**: 실제 생성된 코드가 `DESIGN.md`와 모순된 값을 가지는데도 방치하는 것. 즉각 롤백하거나 문서를 갱신해야 한다.

## 예시

### Cadence 습관 추적 앱 실무 연동
1. **프롬프트 입력**: "차분하고 미니멀한 습관 추적 앱 Cadence를 디자인해줘. 따뜻한 오프화이트 배경(#FAF7F2), 세이지 악센트(#8AA890) 사용."
2. **DESIGN.md 캘리브레이션**: 자동 작성된 `DESIGN.md`에서 본문 행간을 24에서 22로 직접 수정하고, 악센트 컬러를 클레이 색상(`#B5715F`)으로 변경하여 캔버스 화면 자동 동기화 업데이트.
3. **코드 프로젝트 연동**: React Native Expo 프로젝트 루트에 `DESIGN.md` 붙여넣기 및 `claude mcp add stitch` 연동 완료.
4. **검토 및 빌드**: Claude Code가 `DESIGN.md`를 파싱해 공통 테마 `theme.ts`를 제안하고, 개발자의 검토 후 Stitch MCP의 Home 화면 레이아웃 매핑 정보를 읽어 `HomeScreen.tsx` 완성. 피드백 30초 내 교정 루프 가동 (출처: DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법)

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[DESIGN.md 운영 원칙]]
- [[AI 시대 디자인 시스템]]

