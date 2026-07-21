---
type: concept
status: draft
core: false
tags:
  - llm
  - writing
  - context
  - prompt
aliases:
  - Voice Profile (.md)
  - 글쓰기 어조 프로필
  - AI 페르소나 프로필
sources:
  - raw/The Best Way to Make AI Write Like You-ko.md
created: 2026-07-21
updated: 2026-07-21
---
# AI 페르소나 컨텍스트 프로필 (.md)

## 한 줄 정의
AI가 뻔하고 평균적인 텍스트(AI Slop)를 출력하는 대신 개인 고유의 문체, 거부 단어, 구조적 선호도를 정확히 모방하여 초안을 생성하도록 돕는 단일 마크다운 컨텍스트 규격.

## 핵심 요지
- **거부(Reject) 목록의 핵심성**: 단순히 좋아하는 스타일을 나열하기보다 기피 단어, 세미콜론 남용 금지, 대학 리포트 톤 금지 등 "절대 피할 것(Never)" 지침을 명시할 때 AI 모방 정확도가 대폭 상승.
- **인터뷰 추출 방식**: 50~100개 심층 질문(신념, 글쓰기 습관, 미적 결함, 어조, 플랫폼별 차이)을 받아쓰기 등으로 수집해 `.md` 파일로 구조화.
- **컨텍스트 자동 동기화 (Claude Cowork)**: Claude Cowork나 에이전트 작업 공간 내 `context/voice_profile.md`에 배치하여 매 세션마다 프롬프트 재입력 없이 자동 로드.

## 상세
- **구조적 구성 항목**:
  1. 핵심 정체성 (Core Identity)
  2. 퀵 레퍼런스 카드 (Always / Never / Signature Phrases)
  3. 활용법 및 과적합 방지 지침 (HARD RULE vs STRONG TENDENCY)
  4. 클로드 전용 활용 지침 (Instructions for Claude)

## 예시
- 30~60분의 인터뷰를 거쳐 [50~100개 질문에 기반한 voice_profile.md 구축 후 Claude Cowork 폴더 연동](file:///Users/railscraft/Obsidian/raw/The%20Best%20Way%20to%20Make%20AI%20Write%20Like%20You-ko.md#L106-L140), "AI가 초안을 잡고 인간이 다듬는" 양질의 워크플로 정립.

## 충돌
- **기계적 과적합(Overfitting)**: 프로필 내 규칙을 억지로 100% 강제하면 맥락에 맞지 않는 어색한 모방 텍스트가 만들어지므로 플랫폼 및 주제에 따라 유연성을 부여해야 함.

## 관련 노트
- [[한글 AI 번역투 탐지 및 윤문 워크플로]]
- [[Claude Cowork]]

