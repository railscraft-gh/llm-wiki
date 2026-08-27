요청하신 소스 문서(`raw/AI와 디자인 시스템 - 출판형 다듬기.md`, `raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md`)를 바탕으로 `apply-design-system` 개념에 대한 위키 노트를 작성하여 `llm-wiki/wiki/apply-design-system.md` 파일에 저장했습니다.

---

```markdown
---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - figma
  - design-system
  - claude-code
  - tool
aliases:
  - apply-design-system 스킬
sources:
  - raw/AI와 디자인 시스템 - 출판형 다듬기.md
  - raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md
created: '2026-08-28'
updated: '2026-08-28'
---

# apply-design-system

## 한 줄 정의
EdenSpiekermann 커뮤니티에서 개발한 Figma 전용 AI 커스텀 스킬로, 임의로 생성되거나 커스텀 작성된 기존 Figma UI 레이아웃 프레임을 조직의 공식 공개 [[디자인 시스템]] 컴포넌트 및 [[디자인 토큰]]에 정밀하게 연결(bind)해 주는 연동 도구.

## 핵심 요지
- **디자인 갭(Drift) 제거**: [[Claude Code]]나 기타 에이전트가 생성한 UI 디자인과 실제 프로덕션용 [[디자인 시스템]] 컴포넌트 간의 불일치를 줄이고 시안의 일관성을 보장한다 (raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md).
- **프로덕션 UI 연결**: 빠른 프로토타이핑 도구(Google Stitch, Claude Design 등)가 양산하는 일회성 커스텀 스타일 대신, Figma 파일 내 정립된 표준 컴포넌트 라이브러리와 시안을 상호 매핑한다 (raw/AI와 디자인 시스템 - 출판형 다듬기.md).
- **감사 스킬과의 시너지**: 컴포넌트 미연결 및 연결 불량 상태를 진단하는 [[audit-design-system]] 스킬과 쌍을 이루어, [[디자인 시스템 감사 에이전트]] 및 자가 정렬 루프를 구성한다 (raw/AI와 디자인 시스템 - 출판형 다듬기.md).
- **토큰 및 컴퓨팅 절감**: Claude Design에서 10분이 넘게 걸리고 주간 쿼터의 10% 이상을 소비하던 무거운 재생성 작업 없이, 이미 구축된 Figma DS 자산을 재활용함으로써 [[context window]] 효율과 토큰 비용을 극대화한다 (raw/AI와 디자인 시스템 - 출판형 다듬기.md).

## 상세

### 1. 등장 배경 및 필요성
AI 기반 UI 생성 도구(예: Google Stitch, Claude Design)는 신속한 시제품 제작에 강점이 있으나, 프로덕션 단계에서는 다음과 같은 한계를 드러낸다 (raw/AI와 디자인 시스템 - 출판형 다듬기.md).
1. **제한적인 템플릿 제어**: Google Stitch의 경우 스타일 속성 변경은 자유로우나 고급 컴포넌트 구조나 비즈니스 로직을 통제할 수 없다.
2. **비효율적 내보내기 파이프라인**: Claude Design에서 생성한 미니멀 디자인 시스템은 수정 시 막대한 토큰을 소모하며, Claude Code를 거쳐 Figma로 내보내는 과정에서 잘못된 간격이나 텍스트 서식 문제 등 심각한 레이아웃 결함이 발생한다 (raw/AI와 디자인 시스템 - 출판형 다듬기.md).

따라서 프로덕션 디자인에서는 **Figma에서 완성된 기존 디자인 시스템(예: Simple Design System)을 진실의 원천(Source of Truth)으로 두고**, AI 에이전트([[Claude Code]])가 시안을 구성하거나 보정할 때 `apply-design-system` 스킬을 호출하여 표준 컴포넌트로 연결하는 방식이 권장된다.

### 2. 작동 메커니즘 및 스킬 구성
`apply-design-system`은 Open Source GitHub 저장소(`edenspiekermann/Skills`)를 통해 제공되는 [[Agent Skills 표준]] 형태의 확장 도구이다 (raw/AI와 디자인 시스템 - 출판형 다듬기.md, raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md).

- **작동 방식**: Claude Code가 Figma 파일 내의 레이아웃 요소를 분석하고, 해당 요소와 기능적으로 동일하거나 상응하는 팀 라이브러리의 공개 컴포넌트(예: 커스텀 `<button>` 태그/프레임 $\rightarrow$ 디자인 시스템의 `Button` 표준 컴포넌트)를 찾아 매핑 규칙을 적용한다.
- **연동 스택**: Figma 네이티브 연동을 위한 Model Context Protocol 서버(`figma MCP`) 및 `figma-use`, `figma-generate-design` 스킬과 결합하여 동작한다 (raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md).

### 3. 성공적인 적용을 위한 선결 과제 (디자인 시스템 가드레일)
`apply-design-system` 스킬이 정밀하게 컴포넌트를 연결하려면, 에이전트가 참조할 디자인 시스템 자산이 사전에 정돈되어 있어야 한다 (raw/AI와 디자인 시스템 - 출판형 다듬기.md).
- **디자인 시스템 감사(Audit)**: 하드코딩된 값, 중복 컴포넌트, 올바르지 않은 컴포넌트 예시를 사전에 정제해야 함.
- **컴포넌트 문서화 및 안티패턴 명시**: 언제 특정 컴포넌트를 **사용하지 말아야 하는지**(Anti-patterns)에 대한 가이드라인을 문서화하여 에이전트의 가드레일 역할을 부여함.
- **CLAUDE.md 컨텍스트 구축**: 브랜드 Primary 색상 제한, WCAG AA 대비 보장, `color.error` / `color.warning` 등 semantic token 사용 규칙을 [[CLAUDE.md 기반 디자인 시스템 가이드라인]]에 기술함.

## 예시

### 1. 설치 및 MCP 연동 환경 설정
터미널에서 Figma MCP 및 커뮤니티 스킬을 Claude Code 환경에 설치하는 과정이다 (raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md).

```bash
# 1. Figma MCP 서버 연동
claude mcp add figma

# 2. Claude Code 내 플러그인 상태 확인 (/plugin 입력)
# Figma Plugin: Enabled / Figma MCP: Connected 및 Authenticated 상태 확인

# 3. edenspiekermann 스킬 저장소 복사 및 apply-design-system 스킬 업로드
git clone https://github.com/edenspiekermann/Skills.git
# 로컬 스킬 목록에서 apply-design-system 및 audit-design-system 스킬을 Claude Code에 로드
```

### 2. Claude Code 프롬프트 실행 및 시안 연결 시나리오
Figma 파일 상의 신규 생성 시안 프레임 URL을 제시하고, `apply-design-system`을 통해 조직의 표준 컴포넌트 라이브러리로 변환 연결을 요청하는 시나리오이다.

```markdown
# 사용자 프롬프트 예시
/apply-design-system
다음 Figma 화면의 버튼과 입력 필드 요소를 검토하고, 팀 라이브러리의 공개 컴포넌트에 매핑해줘:
https://www.figma.com/design/ABC123XYZ/SaaS-Dashboard-Draft?node-id=402-1580

# 에이전트 수행 절차
1. figma-use / figma MCP를 사용해 node-id=402-1580 프레임 내부 레이아웃 및 스타일 속성 파악.
2. 로컬 커스텀 입력 상자를 표준 `Input` 컴포넌트(Primary variant)로 교체 연결.
3. WCAG AA 대비 기준 및 semantic token (`color.error`, `color.warning`) 준수 여부 검증.
```

### 3. CLAUDE.md 내 디자인 시스템 컴포넌트 가이드라인 연동 예시
`apply-design-system` 스킬이 바인딩 작업을 수행할 때 가드레일로 참조하는 `CLAUDE.md` 명세 조각이다 (raw/AI와 디자인 시스템 - 출판형 다듬기.md).

```markdown
## 컴포넌트 연결 규칙 (apply-design-system 전용)
- 새 컴포넌트를 임의로 생성하지 않고, **기존 디자인 시스템 컴포넌트**를 우선 바인딩한다.
- 표준 컴포넌트 매핑 기준:
  - `Button` → 모든 primary/secondary 액션 요소
  - `Input` → 모든 텍스트 입력 필드(커스텀 input 프레임 금지)
  - `Modal` → 차단 결정이나 중요한 작업 흐름
- semantic token 적용:
  - 에러 메시지: `color.error`
  - 경고 알림: `color.warning`
  - 성공 알림: `color.success`
```

## 충돌
본 문서의 소스 자료 간 별도의 상충되는 주장은 발견되지 않았다. 다만 AI 도구를 통한 디자인 시스템 생성 접근법에 대해 다음과 같은 견해 차이가 존재한다 (raw/AI와 디자인 시스템 - 출판형 다듬기.md).
- **AI 직접 생성파**: Google Stitch, Claude Design 등 AI 도구가 초기 디자인 시스템 스타일 및 컴포넌트를 즉석에서 자동 생성해 주는 방식이 프로토타이핑 속도 향상에 유리하다고 보는 시각.
- **Figma DS 재활용파(본 노트의 관점)**: AI가 자동 생성한 디자인 시스템은 서식 오류, 레이아웃 깨짐, 토큰 소모(10분 이상 소요, 주간 쿼터 10% 소비) 문제가 심각하므로, 기존 Figma 디자인 시스템을 진실의 원천으로 유지하고 `apply-design-system` 스킬로 바인딩하는 것이 비용과 프로덕션 품질 측면에서 압도적으로 우수하다는 결론.

## 관련 노트
- [[audit-design-system]] (디자인 시스템과의 괴리를 감사하는 쌍둥이 스킬)
- [[디자인 시스템 감사 에이전트]] (Figma DS 변경 사항과 에이전트 출력을 동기화하고 정렬 상태를 감시하는 에이전트)
- [[디자인 시스템 기반 AI 코드 생성 최적화]] (Figma DS를 활용해 Claude Code 출력 일관성을 높이는 최적화 파이프라인)
- [[CLAUDE.md 기반 디자인 시스템 가이드라인]] (AI 에이전트에 디자인 토큰 및 컴포넌트 지침을 주입하는 가이드라인)
- [[AI 기반 빠른 프로토타이핑 vs 프로덕션 디자인 시스템]] (즉흥적 프로토타이핑 도구와 프로덕션 DS의 차이 비교)
- [[디자인 토큰]] (디자인 의사결정을 유기적으로 연결하는 추출 단위)
- [[Agent Skills 표준]] (Claude Code 및 AI 에이전트용 스킬 확장 규격)

## 출처
- raw/AI와 디자인 시스템 - 출판형 다듬기.md
- raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md
```