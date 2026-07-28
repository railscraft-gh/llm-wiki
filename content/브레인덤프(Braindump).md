---
type: workflow
status: draft
core: false
tags:
  - llm
  - agent
  - workflow
aliases:
  - Braindump
  - 브레인덤프 워크플로우
sources:
  - raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md
created: 2026-07-29
updated: 2026-07-29
---

# 브레인덤프 (Braindump)

## 한 줄 정의
개인의 머릿속에 있는 가공되지 않은 생각, 프로젝트 아이디어, 할 일 등을 AI 에이전트(Agent)에게 여과 없이 쏟아내면, 에이전트가 이를 분석 및 분류하여 세컨드 브레인(Second Brain)의 적절한 위치에 마크다운(`.md`) 파일로 자동 저장하고 태스크(Task, 작업)를 추출하는 자율형 지식 수집(Capture) 워크플로우입니다.

## 핵심 요지
- **텍스트 기반 자연어 수집**: 정리되지 않은 채 무질서하게 쏟아낸 생각이나 회의 피드백, 웹 링크 등을 자연어로 입력하면 에이전트가 알아서 분류를 처리한다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L68](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L68).
- **수동 정리 노동의 완화**: 기존 개인 지식 관리(PKM) 시스템 유지의 주된 실패 원인이었던 수동 분류(Manual Categorization)의 부담을 에이전트가 전담하여 제거한다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L70](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L70).
- **자동 태스크 추출**: 브레인덤프 텍스트 중 실행 가능한 항목은 옵시디언 태스크(Obsidian Tasks) 이모지 포맷(`📅 YYYY-MM-DD`)을 준수하는 태스크 카드로 분리되어 생성된다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L68](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L68).
- **자가 진화적 지식 주기(Self-evolving Loop)**: 일차적으로 수집된 파편화된 브레인덤프 메모들은 일일 브리핑(Daily Brief)과 주간 리뷰(Weekly Review), 그리고 월간 데이터 통합(Consolidation)을 거쳐 쓸모 있는 프레임워크로 승격된다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L90](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L90).
- **경량 워커 에이전트(Worker Agent) 분할 처리**: 대용량 로우 데이터(Raw Data) 가공 및 파일 시스템 I/O와 같은 무거운 기계적 정리 업무는 중소형의 저렴한 6개 경량 워커 에이전트(Sonnet 등)에 위임하여 헤드 에이전트(Opus 등)의 컨텍스트 윈도우(Context Window, 문맥 창) 한계와 API 비용 낭비를 절감한다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L120](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L120).

## 절차
COG(Cognition, Obsidian, Git) 아키텍처 환경에서 브레인덤프가 수행되는 5단계 핵심 워크플로우는 다음과 같다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L60-L70](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L60-L70).

1. **브레인덤프 모드 개시**
   - 사용자가 에이전트와의 대화창에 `I need to braindump` 명령을 입력한다.
2. **원시 생각 입력(Capture)**
   - 머릿속을 맴도는 프로젝트 아이디어, 미팅 피드백, 메모하고 싶은 웹 링크, 나중에 해야 할 일 등을 정돈되지 않은 텍스트로 자유롭게 쏟아낸다.
3. **분류 및 파싱**
   - 에이전트(또는 위임된 워커 에이전트)가 자연어 입력을 스캔하여 일반 노트 내용과 실행 가능성(Actionable)이 있는 태스크를 분리한다.
4. **마크다운 파일 생성 및 기록**
   - 일반 생각은 `00-inbox`를 포함한 설정된 도메인별 폴더에 저장하고, 태스크는 마감일 등의 속성을 분석하여 옵시디언 태스크 형식의 할 일 목록으로 파편화해 최적의 위치에 쓴다.
5. **안전한 버전 관리 및 동기화**
   - 동기화 및 롤백이 가능하도록 Git과 iCloud를 통해 작성 이력을 커밋하고 개인 장치 간에 문서를 공유한다 [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md#L102](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md#L102).

## 예시
### 에이전트 분석 예시 시나리오
* **사용자 입력 (Raw Input)**:
  > "다음 주 화요일까지 신규 프로젝트 런칭 계획안 피드백을 전달해야 해. 그리고 마케팅 전략 관련해서 https://example.com/marketing-strategy 이 아티클 읽어보고 참고 자료로 저장해둬."
* **에이전트 처리 결과**:
  1. 신규 할 일 추출 및 태스크 파일(`00-inbox/tasks.md`)에 저장:
     ```markdown
     - [ ] 신규 프로젝트 런칭 계획안 피드백 전달 📅 2026-08-04
     ```
  2. 스크랩 링크 정보가 포함된 신규 메모 파일(`00-inbox/2026-07-29-마케팅-전략-참고.md`) 자동 생성:
     ```markdown
     # 마케팅 전략 참고
     - 스크랩 링크: https://example.com/marketing-strategy
     ```

## 관련 노트
- [[AI 세컨드 브레인]]
- [[옵시디언_세컨드_브레인]]
- [[Claude.md 운영 원칙]]
- [[MEMORY.md 운영 원칙]]

## 출처
- [raw/Build a Second Brain in 15 Minutes. Just Markdown, Git, and an AI Agent.md](file:///Users/railscraft/Obsidian/raw/Build%20a%20Second%20Brain%20in%2015%20Minutes.%20Just%20Markdown,%20Git,%20and%20an%20AI%20Agent.md)