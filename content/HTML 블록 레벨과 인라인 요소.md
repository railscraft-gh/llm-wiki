---
type: concept
status: draft
core: false
tags:
- html
- css
- web
- frontend
aliases:
- Block vs Inline
- div vs span
- HTML-블록-레벨과-인라인-요소
sources:
- raw/Block-Level and Inline Elements. The difference between div and span.md
created: 2026-07-21
updated: 2026-07-21
---
# HTML 블록 레벨과 인라인 요소

## 한 줄 정의
HTML 웹 문서 레이아웃의 두 가지 기본 박스 모델 범주로, 새 줄을 생성하고 전체 너비를 occupy하는 블록 레벨(Block-level, 예: `<div>`) 요소와, 줄바꿈 없이 콘텐츠 크기만큼만 공간을 차지하는 인라인(Inline, 예: `<span>`) 요소의 구분을 말한다.

## 핵심 요지
- **줄바꿈 및 너비 점유 차이**: 블록 레벨 요소는 앞뒤로 자동 줄바꿈을 일으키며 부모 요소 너비의 100%를 차지하는 반면, 인라인 요소는 줄바꿈 없이 내부 콘텐츠 영역 크기만큼만 스페이스를 차지한다. [raw/Block-Level and Inline Elements. The difference between div and span.md#L9-L18](file:///Users/railscraft/[[Obsidian]]/raw/Block-Level%20and%20Inline%20Elements.%20The%20difference%20between%20div%20and%20span.md#L9-L18)
- **컨테이너 용도 분리**: `<div>`는 기본 스타일이 없이 다른 HTML 구성을 그룹화하고 영역을 분리하는 구조적 컨테이너로 쓰이고, `<span>`은 긴 문장/텍스트 흐름 내부에서 국소적 스타일을 입히기 위한 인라인 컨테이너로 쓰인다. [raw/Block-Level and Inline Elements. The difference between div and span.md#L33-L40](file:///Users/railscraft/[[Obsidian]]/raw/Block-Level%20and%20Inline%20Elements.%20The%20difference%20between%20div%20and%20span.md#L33-L40)

## 상세

### 1. 대표적 요소 종류
- **블록 레벨 요소**: `<div>`, `<h1>`~`<h6>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<pre>`, `<blockquote>`, `<section>`, `<article>` 등.
- **인라인 요소**: `<span>`, `<a>`, `<em>`, `<strong>`, `<img>`, `<code>`, `<input>` 등.

### 2. 박스 모델 시맨틱과 CSS display 속성
- HTML 기본 표기 외에도 CSS `display: block`, `display: inline`, `display: inline-block` 속성을 통해 브라우저가 화면을 렌더링하는 시각적 동작 방식을 다이내믹하게 재정의할 수 있다.

## 예시
```html
<!-- 블록 요소 예시: 각 div는 새로운 줄에 100% 너비로 배치됨 -->
<div>첫 번째 구역</div>
<div>두 번째 구역</div>

<!-- 인라인 요소 예시: 한 문장 안에서 줄바꿈 없이 텍스트 일부만 강조 -->
<p>이것은 <span style="color: red;">빨간색</span> 단어입니다.</p>
```

## 충돌
- 모던 시맨틱 HTML5 및 웹 표준 관점에서는 무분별한 `<div>`와 `<span>` 래핑(div-soup, span-soup)을 지양하고, `<article>`, `<nav>`, `header`, `<mark>` 등 의미가 명확한 시맨틱 태그 사용을 권장한다.

## 관련 노트
- [[프론트엔드 스타일링 패러다임]]
- [[AI 시대를 위한 웹 표준 플레이북 (Web Standards Playbook for the AI Moment)]]
- [[shadcn-ui]]

## 출처
- [raw/Block-Level and Inline Elements. The difference between div and span.md](file:///Users/railscraft/[[Obsidian]]/raw/Block-Level%20and%20Inline%20Elements.%20The%20difference%20between%20div%20and%20span.md)
