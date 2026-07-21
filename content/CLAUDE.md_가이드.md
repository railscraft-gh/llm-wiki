---
type: concept
status: draft
core: true
tags:
  - ai
  - llm
  - best-practices
aliases:
  - CLAUDE.md
sources:
  - raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
프로젝트의 행동 원칙과 제약 사항을 명시하여 AI 코딩 에이전트의 실패 패턴을 구조적으로 방지하는 핵심 시스템 프롬프트 파일입니다.

## 핵심 요지
- 에이전트는 무결한 논리체가 아닌 '잘못된 가정을 가진 채 달리는 모델'이므로, 행동 지침이 담긴 명시적 문서(`CLAUDE.md`)가 필수적입니다.
- **CLAUDE.md의 4대 원칙**: 
  1. **Think Before Coding**: 가정 없이 멈추고 질문하기
  2. **Simplicity First**: 최소한의 코드 작성
  3. **Surgical Changes**: 요청된 부분만 수정하고 기존 스타일 준수
  4. **Goal-Driven Execution**: 선언적 목표와 검증 루프 사용

## 상세
[raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md](file:///Users/railscraft/Obsidian/raw/%ED%95%98%EB%84%A4%EC%8A%A4%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81%20-%2065%EC%A4%84%20CLAUDE.md%EA%B0%80%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20%EC%8A%A4%ED%82%AC%EC%9D%B8%20%EC%9D%B4%EC%9C%A0.md)에 따르면, 이 파일은 Karpathy가 지적한 '묵시적 가정', '과도한 엔지니어링', '부수적 피해'라는 3대 실패 패턴을 해결하기 위해 개발되었습니다. 60줄 이하로 유지하여 컨텍스트 포화도를 낮추는 것이 핵심입니다.

## 적용 전략
- **프로젝트 루트에 배치**: 저장소 루트에 두어 세션 시작 시 컨텍스트에 자동 주입되게 합니다.
- **선언적 목표 작성**: "기능을 구현해"가 아니라 "작성한 테스트를 통과시켜"와 같은 선언형 목표를 주입해야 모델이 루프를 스스로 돕니다.
- **지속적 개선**: 매주 금요일 실수를 리뷰하고 해당 내용을 CLAUDE.md에 규칙으로 반영하여 시스템을 강화합니다.

## 관련 노트
- [[하네스_엔지니어링]]
- [[Claude_Code_명령어_치트시트]]

