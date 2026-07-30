---
type: concept
status: draft
core: false
tags:
- design-md
- anthropic
- frontend-design
- ai-slop
- design-systems
aliases:
- DESIGN.md 운영 원칙
- Anthropic frontend-design SKILL.md
- DESIGN.md-운영-원칙
sources:
- raw/2026년에 가장 많이 설치된 디자인 문서. 단 30줄짜리였다. Anthropic 엔지니어 두 명이 썼다. 디자이너들은 아직 읽지 않았다-ko.md
created: 2026-07-21
updated: 2026-07-21
---
# DESIGN.md 운영 원칙

## 한 줄 정의
Anthropic 엔지니어 2인이 작성한 30줄짜리 마크다운 사양이 [[AI Slop]] 미학을 저지하며 4개월 만에 277,000+ 설치를 달성해, 대규모 PDF 디자인 시스템을 대체하고 [[LLM]] 취향을 직접 구속하는 기계 읽기 가능한 디자인 선언문 아키텍처.

## 핵심 요지
- **30줄 취향 문서의 파괴력**: 4.34KB, [전체 42줄 중 30줄 지시문](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%EC%97%90%20%EA%B0%80%EC%9E%A5%20%EB%A7%8E%EC%9D%B4%20%EC%84%A4%EC%B9%98%EB%90%9C%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%AC%B8%EC%84%9C.%20%EB%8B%A8%2030%EC%A4%84%EC%A7%9C%EB%A6%AC%EC%98%80%EB%8B%A4.%20Anthropic%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%20%EB%91%90%20%EB%AA%85%EC%9D%B4%20%EC%8D%BC%EB%8B%A4.%20%EB%94%94%EC%9E%90%EC%9D%BHR%EB%93%94%EB%8A%94%20%EC%95%84%EC%A7%81%20%EC%9D%BD%EC%A7%80%20%EC%95%8A%EC%95%98%EB%8B%A4-ko.md#L15)에 불과하지만 [4개월 만에 277,000번 설치](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%EC%97%90%20%EA%B0%80%EC%9E%A5%20%EB%A7%8E%EC%9D%B4%20%EC%84%A4%EC%B9%98%EB%90%9C%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%AC%B8%EC%84%9C.%20%EB%8B%A8%2030%EC%A4%84%EC%A7%9C%EB%A6%AC%EC%98%80%EB%8B%A4.%20Anthropic%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%20%EB%91%90%20%EB%AA%85%EC%9D%B4%20%EC%8D%BC%EB%8B%A4.%20%EB%94%94%EC%9E%90%EC%9D%BHR%EB%93%94%EB%8A%94%20%EC%95%84%EC%A7%81%20%EC%9D%BD%EC%A7%80%20%EC%95%8A%EC%95%98%EB%8B%A4-ko.md#L1)되며 Claude Code, Copilot, Cursor 등 AI 코딩 도구의 프론트엔드 출력을 주도했습니다.
- **[[AI Slop]]의 자발적 시인과 금지 명시**: 모델의 평균값 수렴(Inter, Roboto, 흰 배경 보라색 그라데이션)을 "[[AI Slop]]"이라 칭하고, 특정 서체와 색상을 명확한 이름(explicit prohibition)으로 짚어 금지 조치했습니다.
- **개발자 주도의 디자인 기본값 형성**: GitHub 커뮤니티 특성상 개발자들이 스킬로 설치해 사용하는 사이, 기존 디자인 분야(Figma, PDF 브랜드 가이드 등)가 간극을 보이며 [[shadcn-ui]]의 유행과 유사한 엔지니어링 주도 취향 선점이 재현되었습니다.
- **상호운용 가능한 마크다운 사양**: 복잡한 UI 콤포넌트 백과사전 대신, [[LLM]]이 읽어들일 수 있는 `DESIGN.md` 및 `SKILL.md` 포맷으로 취향을 프롬프트에 직접 정맥 주입하는 턴을 형성했습니다.

## 상세
Anthropic 엔지니어 Prithvi Rajasekaran과 Alexander Bricken이 [2025년 10월 16일 Agent Skills 출시](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%EC%97%90%20%EA%B0%80%EC%9E%A5%20%EB%A7%8E%EC%9D%B4%20%EC%84%A4%EC%B9%98%EB%90%9C%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%AC%B8%EC%84%9C.%20%EB%8B%A8%2030%EC%A4%84%EC%A7%9C%EB%A6%AC%EC%98%80%EB%8B%A4.%20Anthropic%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%20%EB%91%90%20%EB%AA%85%EC%9D%B4%20%EC%8D%BC%EB%8B%A4.%20%EB%94%94%EC%9E%90%EC%9D%BHR%EB%93%94%EB%8A%94%20%EC%95%84%EC%A7%81%20%EC%9D%BD%EC%A7%80%20%EC%95%8A%EC%95%98%EB%8B%A4-ko.md#L47) 당시 포함시킨 `frontend-design` 스킬은 생산성 효율화가 아닌 '취향(Taste)의 제약'을 골자로 합니다.

대부분의 기존 디자인 가이드라인이 긍정형 제안("이렇게 만들어라") 위주인 것과 달리, 이 스킬은 부정형 금지목록(Inter, Roboto, Arial, 흰 배경 위 보라색 그라데이션)을 수식 명시하고, 모델의 평균값 수렴(NEVER converge on common choices like Space Grotesk)을 본질적으로 거부하도록 강제합니다.

기존 100페이지 브랜드 가이드나 500개 Storybook 컴포넌트가 AI 에이전트 생성 과정에서 파싱되지 못하던 한계를, 단 30줄의 마크다운 사양이 완벽히 대체함을 입증해 주었습니다.

## 예시
- **`DESIGN.md` 배포**: 사내 코드 저장소에 30줄 분량의 DESIGN.md를 포함시켜 Claude Code나 Cursor가 프론트엔드 컴포넌트를 빌드할 때 Inter 폰트 사용을 원천 금지하고 브루탈리스트/에디토리얼 톤을 강제 적용.
- **수렴 거부(Anti-Convergence) 지시문**: 프롬프트 상단에 "세대를 거치며 평균적인 시각 선택지로 절대 수렴하지 마라"는 헌장을 주입하여 다크/라이트 테마와 서체를 매번 개성 있게 변화.

## 충돌
- **다양성 지시와 단일 파일 배포의 역설**: 파일 자체는 "어떤 디자인도 동일해서는 안 된다"고 명시하지만, 27만 명의 개발자가 완전히 동일한 30줄 지시문을 읽음으로써 줄기 레벨에서의 수렴을 초래한다는 모순이 존재합니다.
- **Production-grade와 Brutalist/Maximalist 톤의 긴장관계**: 소매 금융이나 의료 대시보드처럼 보수적 엔터프라이즈 환경에 maximalist chaos나 brutalist/raw 톤 지침을 무작정 적용할 경우 실무 프로덕션 등급 안전성과 충돌할 수 있습니다.

## 관련 노트
- [[완전히 기계 읽기 가능한 디자인 시스템]]
- [[프론트엔드 디자인 스킬]]
- [[AI Slop]]
- [[DESIGN.md 워크플로우]]

## 출처
- [raw/2026년에 가장 많이 설치된 디자인 문서. 단 30줄짜리였다. Anthropic 엔지니어 두 명이 썼다. 디자이너들은 아직 읽지 않았다-ko.md](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%EC%97%90%20%EA%B0%80%EC%9E%A5%20%EB%A7%8E%EC%9D%B4%20%EC%84%A4%EC%B9%98%EB%90%9C%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%AC%B8%EC%84%9C.%20%EB%8B%A8%2030%EC%A4%84%EC%A7%9C%EB%A6%AC%EC%98%80%EB%8B%A4.%20Anthropic%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%20%EB%91%90%20%EB%AA%85%EC%9D%B4%20%EC%8D%BC%EB%8B%A4.%20%EB%94%94%EC%9E%90%EC%9D%BHR%EB%93%94%EB%8A%94%20%EC%95%84%EC%A7%81%20%EC%9D%BD%EC%A7%80%20%EC%95%8A%EC%95%98%EB%8B%A4-ko.md)
