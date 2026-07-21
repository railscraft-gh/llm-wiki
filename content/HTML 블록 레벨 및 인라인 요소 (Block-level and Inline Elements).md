---type: concept
status: draft
core: false
tags:
  - html
  - web-standards
  - css
aliases:
  - 블록 레벨 요소
  - 인라인 요소
  - Block-level and Inline Elements
  - HTML-블록-레벨-및-인라인-요소-(Block-level-and-Inline-Elements)
sources:
  - "raw/Block-Level and Inline Elements. The difference between div and span.md"
created: 2026-07-18
updated: 2026-07-18
---
# HTML 블록 레벨 및 인라인 요소 (Block-level and Inline Elements)

## 한 줄 정의
웹 브라우저의 레이아웃과 스타일링 시 적용되는 HTML 요소들의 렌더링 동작 범주와 그 차이점.

## 핵심 요지
HTML의 요소들은 기본적으로 줄바꿈을 유발하고 전체 가로 너비를 차지하는 **블록 레벨(Block-level) 요소**와, 줄바꿈을 유발하지 않고 자기 자신의 콘텐츠 영역만큼만 크기를 차지하는 **인라인(Inline) 요소**로 나뉜다. 대표적인 예로 `<div>`는 블록 레벨 요소, `<span>`은 인라인 요소에 해당한다.

## 상세

### 블록 레벨 요소 (Block-level Elements)
- **동작 방식**: 언제나 새로운 줄(line)에서 시작하며, 부모 요소(혹은 페이지)의 전체 가로 너비(100%)를 차지한다 [raw/Block-Level and Inline Elements. The difference between div and span.md#L17](file:///Users/railscraft/Obsidian/raw/Block-Level%20and%20Inline%20Elements.%20The%20difference%20between%20div%20and%20span.md#L17). 좌우 마진과 패딩을 완전히 지원한다.
- **용도**: 다른 블록 레벨 요소 또는 인라인 요소를 내부에 포함하여 레이아웃의 구획을 짓거나 큰 틀을 구성하는 컨테이너 역할을 한다.
- **예시**:
  - `<div>`: 기본 스타일이나 필수 속성이 없는 일반 그룹화 컨테이너.
  - 제목 태그 (`<h1>` ~ `<h6>`)
  - 목록 태그 (`<ul>`, `<ol>`, `<li>`, `<dl>`)
  - 기타 단락 태그 (`<p>`), 서식 적용 태그 (`<pre>`), 인용구 태그 (`<blockquote>`) 등.

### 인라인 요소 (Inline Elements)
- **동작 방식**: 새로운 줄에서 시작하지 않으며(줄바꿈 없음), 오직 자신의 시작 태그와 종료 태그 사이에 채워진 콘텐츠가 차지하는 공간만큼만 자리를 잡는다. 기본적으로 상하 마진(margin-top, margin-bottom)이 적용되지 않는 특징을 가진다.
- **용도**: 긴 텍스트의 흐름 속에서 특정 부분에 스타일(예: 색상 변경)을 적용하거나 하이퍼링크를 연결하는 등의 보조적인 역할을 한다.
- **예시**:
  - `<span>`: 기본 스타일이나 필수 속성이 없는 텍스트 전용 스타일링 컨테이너.
  - 앵커 태그 (`<a>`)
  - 강조 태그 (`<em>`, `<strong>`)
  - 이미지 태그 (`<img>`)

## 예시
- **텍스트 스타일링**: 문단 태그 `<p>` 안의 특정 텍스트에만 `<span>`을 씌우고 CSS를 통해 글자색을 변경하는 기법.
- **레이아웃 구획**: `<div>` 블록을 여러 개 활용해 웹페이지의 Header, Main Content, Footer 등 물리적 영역을 위아래로 분리하는 레이아웃 배치.

## 충돌
- **인라인 블록(Inline-block)의 존재**: 블록 레벨 요소처럼 가로/세로 크기(width, height) 및 상하 마진을 갖고 싶으나, 줄바꿈을 유발하고 싶지 않을 때 CSS에서 `display: inline-block` 속성을 지정하여 하이브리드 형태로 극복한다.
- **유효성 규칙 충돌**: HTML 명세 상, 인라인 요소(`<span>`, `<a>` 등) 내부에 블록 레벨 요소(`<div>`, `<p>` 등)를 중첩해서 배치하는 것은 시맨틱 웹 표준 규격에 위배되어 렌더링 오작동을 야기할 수 있다. (단, HTML5에서는 `<a>` 태그 내부에 블록 요소를 감싸는 것이 제한적으로 허용된다.)

## 관련 노트
- [[프론트엔드 디자인 스킬]]
- [[프론트엔드 스타일링 패러다임]]

