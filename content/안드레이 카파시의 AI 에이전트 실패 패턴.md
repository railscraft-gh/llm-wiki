요청하신 소스 문서(`raw/Andrej Karpathy가 AI 코딩 에이전트의 고질병을 고치는 방법. 마크다운 파일 하나.md`)를 분석하여 개념(concept) 위키 노트 **`안드레이 카파시의 AI 에이전트 실패 패턴`**을 자율적으로 완결성 있게 작성했습니다.

작성된 위키 노트의 파일 경로와 주요 요약은 다음과 같습니다.

---

### 📄 작성된 파일 정보
- **위치**: [`/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/안드레이 카파시의 AI 에이전트 실패 패턴.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/%EC%95%88%EB%93%9C%EB%A0%88%EC%9D%B4%20%EC%B9%B4%ED%8C%8C%EC%8B%9C%EC%9D%98%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EC%8B%A4%ED%8C%A8%20%ED%8C%A8%ED%84%B4.md)

### 📋 위키 노트 개요

```yaml
---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - coding-agent
  - karpathy
aliases:
  - Karpathy's AI Agent Failure Patterns
  - AI 코딩 에이전트 고질병
  - 카파시 에이전트 실패 패턴
sources:
  - 'raw/Andrej Karpathy가 AI 코딩 에이전트의 고질병을 고치는 방법. 마크다운 파일 하나.md'
created: '2026-08-28'
updated: '2026-08-28'
---
```

#### 주요 수록 내용
1. **한 줄 정의**: 안드레이 카파시가 80% 에이전트 기반 개발 체제로 전환하며 포착한 3대 고질병(조용한 가정, 과잉 엔지니어링, 부수적 피해)과 이를 통제하기 위한 마크다운(`CLAUDE.md`) 기반 행동 제약 설정 패러다임.
2. **핵심 요지 및 수치 지표 출처 명시**:
   - 80% 에이전트 기반 개발 전환 과정에서의 관찰 (`raw/Andrej Karpathy가 AI 코딩 에이전트의 고질병을 고치는 방법. 마크다운 파일 하나.md`)
   - 100줄 코드로 해결할 문제에 Redis, 미들웨어 등을 추가해 1,000줄로 늘리는 과잉 엔지니어링 지적 (`raw/...`)
   - Forrest Chang의 `CLAUDE.md` 설정 기반 레포지토리 GitHub 30,000+ Star 달성 지표 (`raw/...`)
   - PR 리뷰 시간이 45분에서 3분으로 단축된 empirical 지표 (`raw/...`)
   - otonashi-labs의 Issue #11 기반 6단계 멀티 에이전트 워크플로우 확장 (`raw/...`)
3. **구체적 코드 및 구성 예시**:
   - `CLAUDE.md`에 주입되는 4대 원칙 (Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution) 설정 예시
   - Claude Code CLI 플러그인 명령 및 curl 명령어 설치 가이드
4. **트레이드오프 및 충돌**:
   - 자율 실행 속도 대비 신중함/안정성 간의 트레이드오프 분석
   - RLHF 기반 생성 우위 훈련과 "멈추고 질문하라"는 제약 간의 긴장감 명시
5. **Obsidian 연동 위키링크**:
   - `[[Claude Code]]`, `[[코딩 에이전트]]`, `[[에이전트 기반 개발]]`, `[[RLHF]]`, `[[안드레 카파시의 LLM 기반 위키 워크플로우]]`, `[[AGENTS md]]`, `[[에이전트 가드레일]]` 등 관련 개념 노트와 자연스럽게 연결했습니다.