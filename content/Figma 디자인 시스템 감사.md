---
type: workflow
status: draft
core: false
tags:
- design
aliases:
- Figma-디자인-시스템-감사
sources:
- raw/AI와 디자인 시스템 - 출판형 다듬기.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
Figma 디자인 시스템 감사(Design System Audit)는 디자인 시스템 내에 존재하는 하드코딩된 원시 값, 중복 컴포넌트, 컴포넌트 결함 등을 정기적으로 걸러내어 AI 에이전트(예: Claude Code)가 거짓되거나 파편화된 규칙을 학습하지 못하게 방어하는 UI 소스 최적화 워크플로이다 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L93-L100](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L93-L100).

## 핵심 요지
- AI는 사용자가 공급한 디자인 파일 정보를 사실상의 불변하는 진실(Source of truth)로 받아들이기 때문에, 파일 속의 사소한 불일치는 출력되는 코드의 일관성을 크게 훼손한다 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L94-L96](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L94-L96).
- 단순히 코딩 스타일 룰을 정하는 것처럼, 컴포넌트별 명세를 정돈하고 스타일 가이드를 사전에 깨끗하게 문서화해 전달하는 선제 감사가 필요하다 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L115-L117](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L115-L117).

## 상세
효과적인 감사와 AI 연동을 위해 다음을 준수한다:
- **감사 가이드라인 수립**: 컴포넌트 용도를 정의할 때, "언제 이 스타일/컴포넌트를 사용해서는 안 되는지(Negative constraints)"의 가드레일 제약을 명문화해둔다 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L129-L130](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L129-L130).
- **에이전트 스킬 활용**: `apply-design-system` 및 `audit-design-system` 같은 전용 Figma MCP 스킬들을 수입하여 화면 컴포넌트 불일치를 기계적으로 실시간 진단하도록 구성한다 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L135-L149](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L135-L149).

## 예시
- **CLAUDE.md의 디자인 원칙 반영**: 감사 완료 후 컴포넌트 기본 용도, 색상 대비율 규격(WCAG AA 확보), progressive disclosure 규칙 등을 마크다운 파일에 인코딩해 공급하여 AI가 실수를 저지르지 않게 가드하는 과정 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L187-L227](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L187-L227).

## 충돌
- Figma 컴포넌트 명세의 스냅샷 동기화를 수시로 트리거하면, 빈번한 변동으로 인한 막대한 컨텍스트 토큰 소모를 야기하므로 일 1회 등의 주기적 통제된 동기화 배치 구조를 취하는 것이 효율적이다 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L235-L236](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L235-L236).

## 관련 노트
- [[AI 시대 디자인 시스템]]
- [[DESIGN.md 운영 원칙]]

