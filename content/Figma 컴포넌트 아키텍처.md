---
type: concept
status: draft
core: false
tags:
- design-system
- figma
aliases:
- Figma 컴포넌트 구조
- Figma Component Architecture
- Figma-컴포넌트-아키텍처
sources:
- raw/10 Figma Component Structures Used by the World’s Best Design Teams.md
created: 2026-07-18
updated: 2026-07-18
---
# Figma 컴포넌트 아키텍처 (Figma Component Architecture)

## 한 줄 정의
[[디자인 시스템]]의 지속 가능성과 일관성을 극대화하기 위해, Figma 내에서 컴포넌트를 설계하고 관리할 때 적용하는 구조화 및 명명 방식의 베스트 프랙티스 모음이다.

## 핵심 요지
1. **토큰 및 명명 체계 정형화**: 시각적 묘사가 아닌 의미론적(Semantic) 명명 기반 [[디자인 토큰]]을 구축하고, 에셋 탐색을 원활하게 하기 위해 슬래시(`/`) 기반의 계층적 명명 규칙을 적용한다.
2. **배리언트 비대화 방지**: 베이스 컴포넌트(Base Component) 위에 시각적 상태만 배리언트로 결합하고, 켜고 끌 수 있는 하위 요소는 Boolean 등 [[컴포넌트 속성]](Component Properties)으로 제어하여 배리언트 수를 최소화한다.
3. **구조적 견고성과 계층 설계**: 모든 컴포넌트에 Auto Layout을 기본 적용하여 실제 코드처럼 반응형으로 동작하게 하며, 아토믹 디자인 계층(Atoms → Molecules → Organisms)에 따라 컴포넌트를 중첩 구성한다.
4. **엔터프라이즈 모듈성 및 거버넌스**: 라이브러리를 토큰, 기초, 핵심, 패턴 등으로 다중 분할하여 성능을 유지하고, 오픈소스 프로젝트처럼 승인 및 기여 규칙을 두어 변경 사항을 버전 관리한다.

## 상세
### 1. [[토큰 우선 원칙]] (Token-First Foundation)
- 색상, 간격, 타이포그래피 등의 시각 요소를 `gray-100`과 같은 물리적 이름 대신 `color/background/subtle`과 같은 의미론적(Semantic) 이름의 [[디자인 토큰]] 레이어로 분리한다. [raw/10 Figma Component Structures Used by the World’s Best Design Teams.md#L14-L16](file:///Users/railscraft/[[Obsidian]]/raw/10%20Figma%20Component%20Structures%20Used%20by%20the%20World%E2%80%99s%20Best%20Design%20Teams.md#L14-L16)
- 토큰과 시각 결정을 분리하면 테마 변경(예: 다크 모드) 시 개별 컴포넌트를 일일이 수정하지 않고 토큰 레이어만 변경하여 시스템 전체에 자동 반영할 수 있다.

### 2. 베이스 컴포넌트와 배리언트 아키텍처
- 시각적 변형이 생길 때마다 새로운 상위 컴포넌트를 만들면 관리 부채가 커지므로, 하나의 마스터 '베이스 컴포넌트'를 두고 변형은 배리언트(Variant) 시스템으로 관리한다.
- 5개 타입, 3개 크기, 5개 상태로 구성된 버튼이라도 시각적으로 달라지는 최소한의 부분만 배리언트로 두고, 나머지는 Boolean, Text, Instance Swap 등의 [[컴포넌트 속성]]으로 노출하여 컴포넌트의 유연성을 확보하고 배리언트 개수를 60~80% 절감한다. [raw/10 Figma Component Structures Used by the World’s Best Design Teams.md#L118](file:///Users/railscraft/[[Obsidian]]/raw/10%20Figma%20Component%20Structures%20Used%20by%20the%20World%E2%80%99s%20Best%20Design%20Teams.md#L118)

### 3. 반응형 및 아토믹 중첩 구조
- **Auto Layout 필수 적용**: 고정 너비나 높이를 배제하고 Auto Layout을 적용하여, 텍스트 입력값에 맞게 자동으로 조절되는 반응형 컴포넌트를 빌드한다. 이는 개발자의 CSS flexbox 명세와 1대1로 일치하여 핸드오프 리소스를 최소화한다.
- **[[중첩 컴포넌트 아키텍처]]**: Atoms (Icon, Badge) → Molecules (Input Field) → Organisms (Navigation Bar) 구조로 컴포넌트를 중첩 설계하여, 최하위 아톰의 변경사항이 상위 조립물에 자동 전파되도록 한다. [raw/10 Figma Component Structures Used by the World’s Best Design Teams.md#L147](file:///Users/railscraft/[[Obsidian]]/raw/10%20Figma%20Component%20Structures%20Used%20by%20the%20World%E2%80%99s%20Best%20Design%20Teams.md#L147)

### 4. 모듈러 라이브러리 및 거버넌스
- 단일 피그마 파일의 비대화(레이어 1만 개 초과 등)는 도구 성능 저하를 초래하므로 라이브러리를 용도별로 다중 파일(Tokens, Foundations, Core Components, Patterns)로 분할한다. [raw/10 Figma Component Structures Used by the World’s Best Design Teams.md#L166](file:///Users/railscraft/[[Obsidian]]/raw/10%20Figma%20Component%20Structures%20Used%20by%20the%20World%E2%80%99s%20Best%20Design%20Teams.md#L166)
- 제안, 검토, 구축, 테스트, 게시로 이어지는 명확한 거버넌스(기여 프로세스 및 담당자 지정)를 통해 무질서한 임시 컴포넌트 생성과 라이브러리 오염을 원천 차단한다.

## 예시
- **[[슬래시 기반 명명 규칙]]**: 에셋 패널의 탐색 속도를 높이기 위해 다음과 같이 계층적인 형식을 적용한다.
  ```text
  Button / Primary / Default
  Input / Text / Error
  Card / Product / Featured
  ```
- **개발자 코드 매핑 (Developer-Aligned Naming)**: Figma 컴포넌트 이름을 코드베이스 구조와 일치시켜 핸드오프 시 통역 과정을 배제한다.
  - Figma: `Button / Primary`
  - Code: `<Button variant="primary" />`

## 충돌
- **유연성 vs 통제**: [[컴포넌트 속성]]과 베이스 컴포넌트를 결합하면 디자이너가 임의로 구조를 해치는 오버라이드가 불가능해져 제한을 느낄 수 있지만, 이는 제품의 일관성 및 개발 생산성을 30% 이상 향상시키는 강력한 트레이드오프 관계에 있다. [raw/10 Figma Component Structures Used by the World’s Best Design Teams.md#L230](file:///Users/railscraft/[[Obsidian]]/raw/10%20Figma%20Component%20Structures%20Used%20by%20the%20World%E2%80%99s%20Best%20Design%20Teams.md#L230)

## 관련 노트
- [[디자인 시스템 기본값]]
- [[AI 시대 디자인 시스템]]
- [[Figma 에이전트 연동]]
- [[DESIGN.md 워크플로우]]

## 출처
- raw/10 Figma Component Structures Used by the World’s Best Design Teams.md
