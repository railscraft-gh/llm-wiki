요청하신 **'CLAUDE.md 및 /init 명령어'** 개념에 대한 고품질 한국어 위키 노트를 성공적으로 작성하여 Obsidian 지식 베이스에 반영했습니다.

### 📄 생성된 위키 노트 정보
- **파일명/경로**: [`/Users/railscraft/Obsidian/wiki/CLAUDE.md 및 /init 명령어.md`](file:///Users/railscraft/Obsidian/wiki/CLAUDE.md%20%EB%B0%8F%20/init%20%EB%AA%85%EB%A0%B9%EC%96%B4.md)
- **유형(type)**: `workflow`
- **상태(status)**: `draft`
- **태그**: `llm`, `agent`, `claude-code`, `workflow`

---

### 📝 주요 작성 내용 요약

1. **한 줄 정의**:
   - `CLAUDE.md 및 /init 명령어`는 [[Claude Code]] 사용 시 신규 프로젝트의 컨텍스트를 수동으로 세팅하는 번거로움을 제거하고, `/init` 명령어 한 번으로 프로젝트 분석 기반의 `CLAUDE.md` 가이드 문서를 자동 생성하는 프롬프트 오케스트레이션 워크플로우입니다.

2. **핵심 요지 및 수치 검증**:
   - 프로젝트 시작 시 매번 코딩 규약과 기술 스택을 설명하느라 소비되던 45분의 세팅 시간을 단 30초로 단축 (raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md).
   - 프로젝트 요약, 아키텍처 결정 사항, 코딩 규약, 핵심 의존성, 셋업 명령어를 코드베이스 스캔을 통해 즉시 마크다운으로 체계화.
   - 전역 사용자 규칙 파일인 `/memory` 지침과의 결합을 통해 지속적이고 인지 과부하 없는 에이전트 행동 지침 형성.

3. **구체적인 코드 예시 & 워크플로우 시나리오**:
   - `/init` 입력으로 자동 추출되는 `CLAUDE.md` 템플릿 예시 수록 (Project Summary, Architecture Decisions, Coding Conventions, Core Commands 등).
   - 프로젝트 특화 `CLAUDE.md`와 전역 `/memory` 지침(예: "Always suggest tests first", "Prefer composition over inheritance" 등)의 상호작용 예시 제시.

4. **충돌 및 세부 분석**:
   - **수동 작성 vs `/init` 자동 생성**: 수동 작성의 정밀함(45분 소요)과 `/init` 자동 생성의 속도(30초) 간의 트레이드오프 분석 및 `/init` 생성 후 도메인 지침 보강이라는 하이브리드 접근법 권장.
   - **우선순위 지침 설계**: 프로젝트 아키텍처 규칙(`CLAUDE.md`)과 전역 선호 규칙(`/memory`) 간의 우선순위 충돌 방지 전략 기재.

5. **연관 노트 및 출처 연결**:
   - [[Claude Code]], [[Claude Code 세션 운영 명령어]], [[CLAUDE.md 가이드]], [[Claude_Code_MEMORY.md_가이드]] 등 지식 네트워크 연결.
   - `wiki/log.md` 갱신 완료.