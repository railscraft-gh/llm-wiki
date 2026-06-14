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
  - 프로토타입 우선 디자인
  - 피그마 프리 워크플로우
sources:
  - "raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md"
  - "raw/2026년을 위한 웹 디자인 및 빌드 워크플로우.md"
  - "raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md"
  - "raw/DESIGN.md 워크플로우. Google Stitch와 Claude Code가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko.md"
  - "raw/우리가 피그마 없이 제품을 배포하는 방법.md"
created: 2026-06-09
updated: 2026-06-14
---

# DESIGN.md 워크플로우

## 한 줄 정의

DESIGN.md 워크플로우는 Figma/Google Stitch 캔버스 또는 실코드 프로토타입에서 도출된 시각 토큰과 레이아웃 명세를 `DESIGN.md` 파일로 고정하고, AI 에이전트 오케스트레이션을 통해 디자인-코드 간 핸드오프 마찰과 일탈(Drift)을 완전히 제거하는 에이전틱 개발 프로세스다.

## 핵심 요지

- **단일 기준점(Source of Truth) 확립**: 프로젝트 루트의 `DESIGN.md` 평문 마크다운 파일에 색상, 타이포그래피, 여백, 컴포넌트 규칙을 명세화하여 Stitch, Claude Code, Cursor, v0 등 상이한 AI 에이전트들이 일관된 UI를 유지하도록 강제한다.
- **DESIGN.md의 3대 강점**:
  1. *이식성*: 구글 오픈소스 규격을 준수하여 Stitch 외에도 Claude Code, Cursor, v0 등 타 클라이언트와 호환.
  2. *직관성*: 복잡한 Figma 토큰/JSON 대비 인간과 AI 모두 쉽게 판독할 수 있는 마크다운 포맷.
  3. *버전 관리*: Git을 통한 Pull Request, 코드 리뷰 및 변경 추적이 용이하여 엔지니어링 자산화가 가능.
- **번역 레이어의 혁신적 제거**: 디자이너와 개발자 사이의 Figma 시안 핸드오프 과정에서 발생하는 소통 비용과 데이터 유실을 없앤다. Kony 연구에 따르면 디자이너-개발자 간 소통 오류로 프로젝트의 **50%**가 승인을 받지 못하고 실패/지연된다 [출처](file:///Users/railscraft/Obsidian/raw/%EC%9A%B0%EB%A6%AC%EA%B0%80%20%ED%94%BC%EA%B7%B8%EB%A7%88%20%EC%9D%B8%20%ED%94%BC%EA%B7%B8%EB%A7%88%20%EC%97%86%EC%9D%B4%20%EC%A0%9C%ED%92%88%EC%9D%8C%20%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95.md). ONSIGHT Report에 따르면 전문가 **65%**가 제품 수명 주기 내에서 핸드오프를 가장 큰 마찰 지점으로 지목했다.
- **프로토타입 우선 디자인(Prototype-First Design)**: 디자이너가 HTML/CSS로 작동하는 프로토타입을 직접 작성해 GitHub에 공유하면, 상용화 시 AI 에이전트가 이를 컨텍스트로 읽어 100% 일치도의 프로덕션 코드로 빌드하는 '피그마 프리' 모델이다. Gartner는 2026년 말까지 개발자의 **75%**가 코드를 직접 작성하는 대신 오케스트레이션(조율)하게 될 것이라 전망했다.

## 상세

### 1. 두 가지 협업 경로 (Stitch 경로 vs Figma-Free 경로)

#### 경로 A: Google Stitch & Figma 연동 경로 (시각 캔버스 중심)
1. **Google Stitch 캔버스 구동**: `stitch.withgoogle.com`에서 Gemini 기반의 대화형 에이전트, 에이전트 매니저(Agent Manager)를 사용하여 자연어, 스크린샷 등으로 다채로운 화면 UI를 생성.
2. **양방향 동기화**: 캔버스를 분석해 생성된 `DESIGN.md` 문서를 하향식(텍스트 편집) 혹은 상향식(프롬프트 조율)으로 수정하여 캔버스와 DESIGN.md를 일치시킴.
3. **코드베이스 적용 및 MCP 연동**: `DESIGN.md`를 프로젝트 루트에 복사하고, `claude mcp add stitch` 명령으로 Stitch API를 Claude Code에 활성화.
4. **에이전트 구현**: Claude Code가 `DESIGN.md` 규격과 Stitch MCP를 결합하여 공통 테마 파일 (`theme.ts`) 및 개별 React Native 컴포넌트를 빌드.

#### 경로 B: Figma-Free 프로토타이핑 경로 (코드 직접 설계 중심)
1. **코드 프로토타이핑**: 디자이너가 VS Code에서 AI와 페어 프로그래밍을 진행하여 HTML, CSS, 실제 인터랙션 및 상태가 내장된 경량 코드를 구현. 웹 환경 블루프린트 그리드 표준인 `64 x 32 x 12` 구조를 적용하여 기본 계층과 비율을 맞춘다.
2. **저장소 업로드 및 호스팅**: 코드를 GitHub 저장소에 올리고 GitHub Pages 등으로 라이브 URL을 호스팅해 공유.
3. **상용화 코드 생성**: 프로덕션 배포 단계에서 AI 에이전트가 이 프로토타입 코드를 컨텍스트로 읽어, 일관된 디자인 시스템 규격에 맞춰 재사용 가능한 프로덕션 리액트 컴포넌트를 100% 일치하게 자동 빌드.

---

### 2. 10단계 핵심 워크플로우 (Stitch 경로 기준)
1. **Google Stitch 열기** (`stitch.withgoogle.com`)
2. **초기 디자인 생성 또는 가져오기** (자연어 프롬프트, 스크린샷 활용)
3. **Stitch가 캔버스를 분석해 DESIGN.md 자동 생성**
4. **디자인 반복 수정** (색상 팔레트, 서체, 컴포넌트 조율)
5. **DESIGN.md가 실시간으로 업데이트되는 것 확인**
6. **DESIGN.md 파일을 코드 프로젝트의 루트 디렉토리에 복사**
7. **Claude Code에서 Stitch MCP 설정** (`claude mcp add stitch` 연동)
8. **특정 화면 작업을 Claude Code에 전달**
9. **Claude Code가 DESIGN.md를 읽고 화면 레이아웃 구현**
10. **검토, 다듬기 및 배포** (실기기 Expo 테스트 등을 활용한 최종 튜닝)

---

### 3. Claude Code와 Figma MCP 스킬 활용 가이드
Claude Code가 실제 Figma 환경과 실시간 동기화하여 검증하기 위해서는 다음 스킬셋과 명령어를 정렬해 사용해야 한다.
- **MCP 연결 명령어**: 터미널에서 `claude mcp add figma`를 실행하여 플러그인을 활성화한다.
- **플러그인 및 MCP 상태 검증**: `/plugin` 명령어를 실행하여 *Figma Plugin*(Enabled)과 *Figma MCP*(Connected 및 Authenticated) 상태가 올바르게 잡혔는지 확인한다.
- **Figma 기본 스킬 활용**:
  *   `figma-use`: Figma 파일 내에서 레이아웃을 가져오거나 디자인을 수정할 때 사용하는 범용 스킬.
  *   `figma-generate-design`: 에이전트에게 뼈대를 넘겨주고 디자인을 생성할 때 사용. 템플릿: `[빌드할 내용 설명] figma.com/design/new?node-id-%`
  *   `figma-use-figjam`: FigJam 보드에서 스티커, 계획 보드, SWOT 다이어그램 등을 생성 및 편집. 예: `/figma-use-figjam create a SWOT for OpenAI https://www.figma.com/board/new?node-id=%`
  *   `figma-generate-diagram`: 소스 코드 및 사양을 시퀀스/ER/상태/플로우차트 다이어그램으로 변환.
  *   `figma-use-slides`: 다이어그램 등의 정보를 분석해 Figma Slides 덱으로 내보낼 때 사용. 예: `/figma-use-slides turn this information into slides and post it here https://www.figma.com/slides/%link%`
  *   `figma-code-connect`: Figma 디자인 컴포넌트와 실제 프로덕션 코드 컴포넌트를 연결 (Dev Mode 지원).
- **커뮤니티 제작 스킬**:
  *   `apply-design-system`: Figma 시안과 빌드 구현 결과물 사이의 격차(Implementation Gap)를 최소화하기 위해 컴포넌트를 직접 연결함.
  *   `audit-design-system`: 로컬 덮어쓰기나 연결 끊긴 토큰 등 디자인 시스템의 일탈(Style Drift) 현상을 감사함.
  *   `create-voice`: 컴포넌트를 말로 설명하면 마크다운(`DESIGN.md` 등) 명세를 생성한 후, 이를 Figma 주석 프레임으로 자동 렌더링.

---

### 4. 적용 체크리스트 (흔히 범하기 쉬운 실수 방지)
- [ ] **전역 디자인 변경 규칙 준수**: 다수 화면에 공통 적용할 속성은 캔버스가 아닌 `DESIGN.md` 파일 자체를 직접 열어 수정하는가?
- [ ] **살아있는 문서 취급**: DESIGN.md를 일회성 내보내기용이 아닌, 모든 디자인 의사결정이 모여 흐르는 영구 소스로 취급하는가?
- [ ] **Figma 및 Stitch MCP 연동 필터링**: 번거롭다는 이유로 MCP 설정을 생략하고 스크린샷에만 의존해 구조적 데이터를 유실하고 있지 않은가?
- [ ] **구체적인 프롬프트 지시**: Claude Code에게 단순히 "보기 좋게 만들어달라"고 모호하게 요청하는 대신 `DESIGN.md`를 엄격하게 참조하라고 명시했는가?
- [ ] **정합성 유지**: `DESIGN.md` 명세와 실제 구현 코드 간의 싱크가 어긋나지 않도록 정합성을 상시 맞추고 있는가?

## 예시

### 1. Cadence 습관 추적 앱 실무 연동 (경로 A 사례)
*   **Stitch 프롬프트**: "차분하고 미니멀한 모바일 습관 추적 앱 Cadence를 디자인해줘. warm minimal 톤, #FAF7F2 오프화이트 배경, 1개의 세이지 악센트, soft serif 헤딩, no gradients, no confetti. Things 3 혹은 Linear의 미학과 가깝게 디자인해줘."
*   **Stitch 조율**: 생성된 결과물에서 포인트 컬러를 클레이 색상(`#B5715F`)으로 바꾸고 빈 화면(Empty State)을 차분하게 격려하는 문구로 캔버스-문서 양방향 조율.
*   **Claude Code 최종 빌드**: React Native 프로젝트 루트에 `DESIGN.md`를 커밋하고 아래의 프롬프트로 Claude Code를 구동:
    ```text
    Read DESIGN.md at the project root. This is the source of truth for all visual decisions. Honor it strictly.
    Then, using the Stitch MCP, fetch the layout of the "Home" screen from my Cadence Stitch project and build it as a React Native component at app/screens/HomeScreen.tsx.
    Use Expo's StyleSheet API. Pull all design tokens from DESIGN.md into a shared theme file at app/theme.ts so they can be reused.
    Before writing code, show me the file structure and the theme.ts contents to review.
    ```
    이 '코드 구현 전 계획 검토(Plan before code)' 단계를 거쳐 `theme.ts`와 `HomeScreen.tsx`를 30초 피드백 루프 안에서 픽셀 단위로 완벽하게 빌드함 [출처](file:///Users/railscraft/Obsidian/raw/DESIGN.md%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.%20Google%20Stitch%EC%99%80%20Claude%20Code%EA%B0%80%20%EB%94%94%EC%9E%90%EC%9D%B8-%EC%BD%94%EB%93%9C%20%ED%95%B8%EB%93%9C%EC%98%A4%ED%94%84%EB%A5%BC%20%EC%A1%B0%EC%9A%A9%ED%9E%88%20%EB%B0%94%EA%BE%BC%20%EB%B0%A9%EB%B2%95-ko.md).

### 2. Hazelcast 2인 팀의 협업 모델 (경로 B 사례)
*   **구조**: 디자이너가 HTML/CSS로 완벽히 동작하는 마이크로 프로토타입을 빌드해 리포지토리에 푸시.
*   **엔지니어링**: 프론트엔드 개발자는 픽셀 단위를 재구현하는 낭비 없이, AI 에이전트가 프로토타입으로부터 안전하게 생성해낸 100% 시각 일치도의 컴포넌트를 넘겨받아 아키텍처 결합, 상태 관리 통합, 서버 사이드 렌더링 최적화 등 딥 엔지니어링에만 집중 [출처](file:///Users/railscraft/Obsidian/raw/%EC%9A%B0%EB%A6%AC%EA%B0%80%20%ED%94%BC%EA%B7%B8%EB%A7%88%20%EC%97%86%EC%9D%B4%20%EC%A0%9C%ED%92%88%EC%9D%8C%20%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95.md).

## 관련 노트

- [[DESIGN.md 운영 원칙]]
- [[AI 시대 디자인 시스템]]
- [[Figma 에이전트 연동]]
- [[Model Context Protocol]]
- [[디자인 시스템 기본값]]
- [[AI 네이티브 작업 시스템]]
- [[UI UX 디자인 AI 워크플로우]]

