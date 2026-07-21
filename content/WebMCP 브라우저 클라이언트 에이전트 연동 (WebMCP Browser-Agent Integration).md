---type: concept
status: evergreen
core: true
tags:
  - llm
  - webmcp
  - design
aliases:
  - WebMCP 브라우저 클라이언트 에이전트 연동
  - WebMCP 브라우저 연동
  - WebMCP Browser-Agent Integration
  - WebMCP-브라우저-클라이언트-에이전트-연동-(WebMCP-Browser-Agent-Integration)
sources:
  - raw/39 principles for designing human-AI interaction.md
  - raw/macOS 27 Has a Hidden LLM Inside — 10 (Amazing) Things You Can Do With It.md
  - WebMCP Guides (modern-web-guidance-plugin)
created: 2026-07-15
updated: 2026-07-15
---
# WebMCP 브라우저 클라이언트 에이전트 연동 (WebMCP Browser-Agent Integration)

## 한 줄 정의

웹 애플리케이션의 클라이언트 사이드 기능과 DOM 상태를 브라우저 내장 혹은 외부 AI 에이전트에게 [[Model Context Protocol]](MCP) 규격의 도구(Tools)로 안전하고 간결하게 노출하고 실행하기 위한 브라우저 표준 설계 아키텍처.

## 핵심 요지

1. **선언적 선언 API (Declarative Forms)**: 복잡한 JavaScript 툴 명세를 새로 짤 필요 없이, 표준 HTML `<form>` 요소에 `toolname`, `tooldescription` 등의 어트리뷰트(attributes)를 주입하는 것만으로 브라우저가 AI 에이전트가 호출 가능한 도구 명세를 자동으로 컴파일 및 생성하도록 지원한다.
2. **명령형 제어 API (Imperative JavaScript Tools)**: Single Page Application(SPA) 환경이나 유동적 라우팅 환경에서 `document.modelContext.registerTool()`을 사용해 필요한 순간에만 비즈니스 로직(예: 인 메모리 스토어 데이터 정제, API 즉시 호출)을 에이전트 도구로 등록하고 소멸시킬 수 있다.
3. **자율 제출 통제 (`toolautosubmit`)**: AI 에이전트가 폼 데이터를 채운 뒤 사람의 확인 리뷰 없이 백그라운드에서 바로 전송(submit)할 수 있는 안전 경계를 정의한다.

## 상세

### 1. Declarative Form-Associated Attributes (선언적 마크업)
HTML5 표준 폼 요소에 직접 attributes를 부여해 에이전트에 바인딩한다:
- `**toolname**`: 에이전트가 호출할 함수 ID 명칭.
- `**tooldescription**`: 이 도구를 언제, 왜 사용해야 하는지 에이전트가 인식하는 텍스트 맥락 정의.
- `**toolautosubmit**`: 이 값이 있으면 에이전트가 값을 채우고 즉시 자동 제출을 수행한다.

#### toolautosubmit 탑재 의사결정 기준 (중요도 높음)
- **탑재 허용 (Autosubmit=True)**: 검색(Read-Only), 필터링, 장바구니에 임시 담기 등 가역적이고 파급 위험이 극도로 낮은 조작 영역.
- **탑재 금지 (Autosubmit 생략)**: 금융 결제, 계정 패스워드 변경, 데이터베이스 삭제, 외부 타인 이메일 발송 등 승인이 반드시 필요한 파괴적이거나 트랜잭션적인 연산 영역.

### 2. Imperative Lifecycle Management (명령형 생명주기 관리)
WebMCP는 `unregisterTool()`을 명시 지원하지 않는다. 컴포넌트가 마운트 해제(unmount)되거나 페이지 이탈 시 등록된 툴이 유실되지 않도록 **`AbortController`**의 `signal` 객체를 바인딩하여 툴의 생명주기를 엄격히 차단 관리해야 한다.

```javascript
// 컴포넌트 생명주기 내 툴 등록 예시
const controller = new AbortController();

if (document.modelContext && 'registerTool' in document.modelContext) {
  await document.modelContext.registerTool({
    name: "fetch_client_logs",
    description: "Read in-memory application console logs.",
    inputSchema: { type: "object", properties: {} },
    execute() {
      return getSystemLogsInMemory();
    },
    annotations: { readOnlyHint: true }
  }, { signal: controller.signal });
}

// unmount 시점
// controller.abort();
```

## 예시

### 선언적 마크업을 통한 에이전트용 검색 도구 설계
```html
<!-- toolautosubmit를 포함하여 검색 연산을 자동화 -->
<form toolname="search_product" 
      tooldescription="Search catalog products by keywords" 
      toolautosubmit>
  <label for="keyword">Keyword:</label>
  <input type="text" id="keyword" name="keyword" required />
  <button type="submit">Search</button>
</form>
```

### 브라우저 CSS 피드백 연동
에이전트가 연동 폼을 제어하거나 제출 승인을 기다릴 때, 사용자에게 진행 상태를 시각적으로 보여주기 위해 `:tool-form-active` 및 `:tool-submit-active` 의사 클래스(pseudo-classes)를 제공하여 투명성을 올린다.
```css
/* 에이전트가 현재 데이터를 조작하고 있는 폼 강조 */
form:tool-form-active {
  outline: 2px dashed #0066cc;
  background-color: rgba(0, 102, 204, 0.05);
}
```

## 관련 노트

- [[인간-AI 상호작용 설계 원칙 (Human-AI Interaction Design Principles)]]
- [[Apple Foundation Models CLI (fm)]]
- [[Model Context Protocol]]

