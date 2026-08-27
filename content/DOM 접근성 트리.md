요청하신 **'DOM 접근성 트리'** (유형: `glossary`) 개념에 대한 위키 노트를 주어진 작성 원칙과 템플릿 구조에 맞춰 작성하였습니다.

생성된 노트는 지정된 위키 디렉터리 경로(`llm-wiki/wiki/DOM 접근성 트리.md`)에 반영되었습니다.

---

### [작성된 위키 노트 내용]

```markdown
---
type: glossary
status: draft
core: false
tags:
  - llm
  - agent
  - claude-code
  - accessibility
  - testing
aliases:
  - Accessibility Tree
  - DOM Accessibility Tree
sources:
  - 'raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md'
created: 2026-08-27
updated: 2026-08-27
---

# DOM 접근성 트리

## 한 줄 정의
웹 페이지의 DOM(Document Object Model) 구조를 스크린 리더나 자율 웹 에이전트가 이해할 수 있도록 접근성 속성(역할, 이름, 상태, 값 등) 중심의 계층적 구조화 맵으로 재구성한 데이터 모델.

## 핵심 요지
- **에이전트 시각/상호작용 검증의 핵심**: 자율 AI 코딩 에이전트(예: [[Claude Code]])가 로컬 헤드리스 브라우저 세션을 오케스트레이션하여 UI 테스트를 수행할 때, 단순 스크린샷 픽셀 분석을 넘어 실제 엘리먼트의 클릭 가능 여부 및 상호작용 가능성을 판별하는 비전-구조 검증 파이프라인의 핵심 데이터로 활용됩니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).
- **상호작용 장애 자동 감지 및 셀프 힐링**: UI 요소가 렌더링되었더라도 다른 투명 div 레이어나 z-index 문제로 인해 시각적으로 가려져 클릭할 수 없는 정황을 DOM 접근성 트리를 읽어 명확히 포착하고, 에이전트 스스로 CSS 수정(z-index 재작성 등)을 수행할 수 있도록 도웁니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).
- **`webapp-testing` 스킬과의 결합**: 앤트로픽의 공식 [[Claude Code 스킬]] 중 하나인 `webapp-testing` 스킬은 브라우저 자동화 도구인 Playwright를 구동하여 폼 제출, 버튼 클릭 등을 실행한 뒤 DOM 접근성 트리를 추출하여 에이전트의 컨텍스트 윈도우로 다시 피드백합니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).

## 상세

### 1. 기술적 작동 원리
웹 브라우저는 표준 DOM 트리를 생성함과 동시에 보조 공학(Assistive Technologies) 및 자동화 엔진을 위한 접근성 트리(Accessibility Tree)를 구축합니다. 이 트리는 불필요한 스타일링 정보나 단순 장식용 DOM 노드를 제거하고, `role`, `name` (label), `state` (disabled, expanded 등), `value` 등 상호작용에 필수적인 정보만을 캡슐화합니다.

AI [[코딩 에이전트]] 생태계에서는 이 접근성 트리를 파싱하여 컨텍스트 윈도우에 제공함으로써, 모델이 이미지 픽셀만 보고 추론할 때 발생할 수 있는 환각을 줄이고 엘리먼트 식별 정확도를 높입니다.

### 2. Claude Code 검증 워크플로우 내 역할
1. **헤드리스 브라우저 오케스트레이션**: `webapp-testing` 스킬을 통해 명령줄에서 헤드리스 브라우저(Playwright) 세션을 실행합니다.
2. **페이지 상호작용 및 스크린샷 획득**: 지정된 URL로 이동하여 UI 폼 작성, 버튼 클릭, 스크린샷 캡처를 수행합니다.
3. **DOM 접근성 트리 추출 및 컨텍스트 피드백**: 스크린 리더가 파싱하는 페이지의 구조적 accessibility tree를 추출하여 Claude Code의 컨텍스트 윈도우로 반환합니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).
4. **자동 교정(Self-Correction)**: 제출 버튼이 클릭 불가능(non-clickable) 상태이거나 상위 요소에 가려진 현상이 감지되면, DOM 트리의 렌더링 노드 정보를 분석해 CSS z-index 또는 레이아웃 속성을 자동으로 수정합니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).

## 예시

### Playwright 및 webapp-testing 스킬 기반 UI 검증 시나리오
Claude Code 세션에서 `webapp-testing` 슬래시 명령어를 실행하여 로컬 서버의 로그인 플로우를 검증하는 예시입니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).

```bash
# webapp-testing 스킬 설치
/plugin install webapp-testing@anthropic-agent-skills

# 로컬 브라우저 세션을 실행하여 로그인 플로우 및 대시보드 렌더링 검증
/webapp-testing http://localhost:3000 "verify login flow and dashboard render"
```

추출된 DOM 접근성 트리의 개념적 JSON 표현 형태:
```json
{
  "role": "WebArea",
  "name": "Login Page",
  "children": [
    {
      "role": "form",
      "name": "User Login",
      "children": [
        { "role": "textbox", "name": "Email Address", "focused": true },
        { "role": "textbox", "name": "Password", "protected": true },
        { 
          "role": "button", 
          "name": "Submit", 
          "disabled": false,
          "clickable": false, // 투명 overlay div에 가려져 클릭 불가능함이 감지됨
          "error": "Element obscured by div.overlay (z-index issue)"
        }
      ]
    }
  ]
}
```
*에이전트는 위 트리를 피드백 받아 제출 버튼을 덮고 있는 `.overlay` 클래스의 `z-index` 또는 `pointer-events` 속성을 재작성하여 문제를 해결합니다.*

## 충돌
본 소스 문서에서는 DOM 접근성 트리를 통한 UI 상호작용 검증이 수동 스크린샷 테스트 및 클릭 테스트를 완벽히 대체하는 유효한 검증 수단으로 기술되어 있으나 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`), 복잡한 WebGL/Canvas 기반 UI나 섀도 DOM(Shadow DOM) 구조, 혹은 고도로 dynamic한 애니메이션이 포함된 앱에서는 접근성 트리에 노드가 제대로 노출되지 않아 에이전트가 잘못된 판단을 내릴 수 있는 기술적 한계 및 고려사항과의 잠재적 충돌 요소가 존재합니다.

## 관련 노트
- [[Claude Code]]
- [[Claude Code 스킬]]
- [[코딩 에이전트]]
- [[스킬 감사 프레임워크]]
- [[agent-sandbox]]

## 출처
- `raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`
```