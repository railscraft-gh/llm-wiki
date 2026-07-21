---type: concept
status: draft
core: false
tags:
  - ux
  - ai-tools
  - product-design
aliases:
  - UX AI 3-Layer Taxonomy
  - UX-실무자를-위한-3단계-AI-도구-레이어
sources:
  - raw/UX를 위해 먼저 읽었어야 할 AI 가이드 - 출판형 다듬기.md
created: 2026-07-21
updated: 2026-07-21
---# UX 실무자를 위한 3단계 AI 도구 레이어

## 한 줄 정의
NN/g가 예견한 'UX Reckoning (2025/2026)' 시대에 대응하여, UX 실무자가 활용해야 할 AI 도구를 채팅 인터페이스, 특화 UX 도구, CLI/에이전틱 도구의 3개 범주로 체계화하고 구현 격차를 해소하는 실전 가이드 프레임워크이다.

## 핵심 요지
- **LLM의 본질은 패턴 완성 엔진**: 사실 저장 DB가 아니라 맥락 기반 패턴 예측기이므로, 맥락 주입과 비판적 검토(Curated taste)가 디자이너의 핵심 경쟁력이 된다.
- **AI 도구 3대 레이어 구분**:
  1. **대화형 레이어 (Chat)**: ChatGPT, Claude, Gemini. 유연한 아이데이션 및 카피 작성.
  2. **특화 레이어 (Specialized UX)**: Dovetail, Looppanel, Figma Make, [[Claude Design]]. 전사, 분석 및 디자인 시스템 프로토타이핑.
  3. **파워 레이어 (CLI/Agentic)**: Claude Code, Cursor, GitHub Copilot. 실제 동작하는 프로토타입 작성 및 코드베이스 UX/접근성 직접 감사.
- **CLI 파워 레이어의 기회**: 디자이너와 구현 사이의 중간자를 제거하고 터미널에서 동작하는 인터랙티브 웹 프로토타입 생성 및 접근성 자동 수정을 가능하게 함.

## 상세
NN/g의 2025/2026년 리포트에 따르면 AI 시대의 UX 담당자는 도구 자체가 아닌 실사용자 가치 중심 역량을 키워야 한다.

3대 도구 레이어 상세 breakdown:
1. **Chat Layer**: 무제한 맥락을 바탕으로 한 브레인스토밍 및 리서치 계획 작성.
2. **Specialized Layer**: Anthropic의 [[Claude Design]]처럼 디자인 토큰 및 기존 코드베이스를 통합하여 대화형으로 와이어프레임과 피치덱을 실시간 렌더링.
3. **CLI & Agentic Layer**: 개발 영역으로 여겨지던 터미널 AI가 코드베이스 읽기, 접근성 수정, 200개 에셋 이름 일괄 변경 등을 수행.
   - 2026년 3월 기준 공개 GitHub 커밋의 약 4%를 Claude Code가 작성하는 등 소프트웨어 개발 방식이 에이전틱 터미널로 완전히 이행함.

도입 로드맵 (4단계):
- 1주차: 대화형 도구 1개로 프롬프트 근육 단련
- 2~3주차: System Prompt / Custom Instructions 설정
- 4~6주차: Dovetail / Figma Make 등 특화 도구 1개 결합
- 2~3개월차: Claude Code 터미널 접속 및 접근성 감사 실행

## 예시
- **Claude Code 기반 실시간 접근성 감사**: Patrick Neeman (Workday UX Director)의 사례처럼 터미널에서 `Claude Code`를 열어 "터치 타깃이 44px보다 작은 모든 상호작용 요소를 찾아 수정하라"고 지시하면, 도구가 실제 프로젝트 파일들을 스캔하고 코드 수정을 직관적으로 완료함.
- **GitHub 커밋 수치**: 2026년 3월 공개 GitHub 커밋 중 4%가 Claude Code 단일 도구로 작성됨.

## 충돌
- **Figma 모형 테스트 vs 실코드 프로토타입**: Figma의 단순 클릭 모형은 사용성 테스트 시 한계가 명확하다. CLI 도구를 활용해 실제 폼 검증과 에러 상태가 들어간 웹 프로토타입을 만들어 테스트해야 피드백의 질이 비약적으로 향상된다.

## 관련 노트
- [[AI 디자인 역할 맵]]
- [[Claude Code 바이브코딩]]

