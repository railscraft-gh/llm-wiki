---
type: tool
status: draft
core: false
tags:
  - design
aliases:
  - Google-Stitch
  - 구글 스티치
sources:
  - raw/AI와 디자인 시스템 - 출판형 다듬기.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
Google Stitch는 웹 및 제품 프로토타이핑 단계를 가속화하기 위해 사용자의 프롬프트 지시에 따라 실시간 변경이 가능한 시각적 스타일 템플릿(임시 디자인 시스템)을 자동 생성하는 AI 디자인 도구이다.

## 핵심 요지
- 사용자가 도구에 직접 디자인 명령을 발송하면, 배경색, 서체, 둥글기 등의 기본 스타일 규칙들을 포함하는 템플릿 레이아웃을 제공한다 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L29-L31](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L29-L31).
- 그러나 이는 프로덕션 빌드용 컴포넌트나 엄격한 인터랙션을 정밀 통제할 수 없어 실제 고도화된 디자인 시스템과는 구별된다 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L39](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L39).

## 상세
- **프로토타이핑 한계**: Google Stitch를 사용하면 스타일을 마우스 드래그나 단순 지시로 바꾼 결과가 레이아웃에 즉시 머징되는 편리함을 누린다. 하지만 복잡한 반응형 그리드, 접근성 규격, 다이나믹 상태 제어 같은 견고한 요구조건은 처리해주지 못하므로 빠른 아이디어 가시화 템플릿 수준으로 활용해야 한다 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L39](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L39).

## 예시
- **Stitch 스타일 생성 루프**: 프롬프트 창을 통해 "SaaS용 대시보드 스타일의 심플한 오렌지 톤 템플릿 생성"을 요청하고, 실시간 반응 렌더러를 모니터링하며 디자인 시안을 가볍게 선별하는 방식 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L35](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L35).

## 충돌
- [[Claude Design]] 등 타 AI 프로토타이핑 도구와 비슷하게, 템플릿 가중치를 Figma 등으로 내보내거나 커스텀 다듬기를 진행할 때 상당량의 사용량 쿼터나 토큰 낭비를 유발하며, 서식 오류가 잦아 Figma에서 수동으로 처음부터 만드는 것보다 시간 손실이 더 생길 수 있다 [raw/AI와 디자인 시스템 - 출판형 다듬기.md#L51-L56](file:///Users/railscraft/Obsidian/raw/AI%EC%99%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20-%20%EC%B6%9C%ED%8C%90%ED%98%95%20%EB%8B%A4%EB%93%AC%EA%B8%B0.md#L51-L56).

## 관련 노트
- [[AI 시대 디자인 시스템]]
- [[DESIGN.md 워크플로우]]

