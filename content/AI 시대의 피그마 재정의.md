---
type: concept
status: draft
core: false
tags:
  - figma
  - design
  - ai
  - workflow
aliases:
  - AI 시대의 피그마 재정의
  - Rethinking Figma in an AI World
sources:
  - raw/Rethinking Figma in an AI world.md
created: 2026-07-20
updated: 2026-07-20
---

# AI 시대의 피그마 재정의

## 한 줄 정의
AI 시대의 피그마 재정의는 코드 네이티브 프로토타이핑과 AI 에이전트의 등장으로 캔버스 중심의 단순 모형(Mockup) 제작 위상이 흔들림에 따라, Figma가 픽셀 편집 도구를 넘어 제품 전체의 설계 의도를 관리하는 '디자인 운영 레이어(Operating Layer)'로 진화하는 패러다임 전환이다.

## 핵심 요지
- **좌석 기반(Seat-based) 과금 모델의 위기**: 과거에는 PM, 개발자, 마케터가 캔버스를 열람하려고 계정(Seats)을 결제했으나, AI가 코드 에디터 내에서 UI를 바로 생성함에 따라 정적 모형 열람용 좌석의 필용성이 약화되었다.
- **코드 네이티브 에이전트의 위협**: Anthropic의 Claude Code 및 Claude Design 생태계처럼 프롬프트에서 실제 실구동 코드 프로토타입으로 직접 전환하는 워크플로우가 확산되며 디자인 핸드오프(Handoff) 단계 자체가 단축·패싱되고 있다.
- **기준 정보원(Source of Truth)의 이동**: `.figma` 독점 파일 형태에서 벗어나, 코드 저장소, 재사용 가능한 디자인 토큰(CSS, JSON, React), 도구 무관 메타데이터가 제품 설계의 진짜 기준 정보원으로 부상한다.
- **의도의 설계학(Architecture of Intent)**: Figma의 유효성은 캔버스 위 도형 그리기 기능이 아니라, 에디터, 브라우저, AI 에이전트를 가로지르며 제품의 맥락과 설계 의도를 일관되게 전달하는 운영 레이어 역할에서 창출된다.

## 상세

### Config 2026 발표와 캔버스 확장 승부수
Figma는 Config 2026을 통해 AI 에이전트 및 코드 네이티브 환경의 압박에 맞서 캔버스 영역을 대폭 확장했다 [raw/Rethinking Figma in an AI world.md#L16-L19]:
- **Code Layers**: 코드를 캔버스 내부로 직접 끌어와 실시간 비주얼 편집을 지원.
- **Figma Motion & Shaders**: 애니메이션 타임라인과 WebGPU 셰이더 시각 효과를 파일 내 포함.
- **MCP & Local Code Connect**: Model Context Protocol 서버 연동 및 Figma Make를 통한 로컬 코드 수정 및 PR 자동화 [raw/Rethinking Figma in an AI world.md#L30-L32].

### Claude Design vs Figma Canvas
Anthropic의 Claude Code와 Claude Design의 결합은 캔버스 의도를 라이브 코드 실행으로 즉시 연결하여 개발팀이 Figma 캔버스를 건너뛸 수 있는 환경을 제공한다 [raw/Rethinking Figma in an AI world.md#L55-L58]. 정적 픽셀 모형은 거쳐가야 할 필수 단계가 아닌 번거로움으로 전락할 수 있으며, 이는 Figma의 근본적인 사용 이유를 묻게 만든다.

### 독점 포맷의 중력 상실
과거 Photoshop에서 Sketch, 다시 Figma로 이어진 도구 대이동의 교훈은 독점 파일 포맷의 편의성은 데이터 호환성과 범용성이 요구되기 전까지만 유효하다는 점이다 [raw/Rethinking Figma in an AI world.md#L60-L64]. 미래의 디자인 자산은 시각화된 `.figma` 상자가 아니라, 가독성 높은 메타데이터와 코드 네이티브 토큰을 중심으로 운용된다.

## 예시
- **Figma Make의 로컬 코드 편집**: Figma 캔버스 내에서의 변경 사항이 MCP 및 Code Connect를 거쳐 온-디바이스 로컬 개발 환경의 코드베이스로 직접 반영되고 Git PR까지 자동 생성되는 형태 [raw/Rethinking Figma in an AI world.md#L30-L32].

## 충돌
- **캔버스 유효성 굳건함 vs 캔버스 소멸 시각**: Figma 고유의 멀티플레이어 협업 문화와 비전문가 조율 능력은 대체 불가능하다는 입장과 [raw/Rethinking Figma in an AI world.md#L76-L77], 에이전트 중심 개발로 인해 캔버스는 가끔 조력할 뿐 소프트웨어 개발의 중심 축이 코드로 완전히 옮겨갈 것이라는 시각이 대립함.

## 관련 노트
- [[Figma 에이전트 연동]]
- [[Claude Code 오케스트레이션]]
- [[AI 시대 디자인 시스템]]
- [[Model Context Protocol]]

