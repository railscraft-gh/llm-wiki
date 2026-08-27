요청하신 개념 **'SubagentStop 라이프사이클 훅'**에 대한 위키 노트를 작성 규칙 및 템플릿 표준에 맞추어 새로 생성하여 배치하였습니다.

생성된 파일: [SubagentStop 라이프사이클 훅.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/SubagentStop%20%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4%20%ED%9B%85.md)

---

### 주요 작성 내용 요약

1. **Frontmatter 및 메타데이터 준수**
   - `type: tool`, `status: draft`, `sources: ['raw/0xMorty_Loop_Design.md']`, `created/updated: 2026-08-27` 적용.
2. **핵심 정의 및 요지**
   - 다중 에이전트 스웜 아키텍처에서 서브 에이전트 종료 시 자동 발동되는 품질 검증 게이트웨이(Gateway) 역할 명시 (`raw/0xMorty_Loop_Design.md`).
3. **기술 상세 및 시각화**
   - 서브 에이전트 작업 완료 신호 → SubagentStop 훅 실행 → 리드 에이전트 컨텍스트 및 머지 큐 진입 흐름을 Mermaid 시퀀스/플로우 차트로 구성.
   - 단위 테스트, 린트, 정적 분석, 보안 시크릿 스캔 등 비타협적 품질 기준(Non-negotiable conditions) 메커니즘 상세화.
4. **구체적 예시 및 모델 활용**
   - Claude 3.7 Sonnet / Claude 3.5 Sonnet 프론티어 모델 기반 코딩 에이전트 환경용 `SubagentStop` JSON 설정 파일 및 `verify_subagent_output.sh` Bash 스크립트 작성.
   - Swagger API 타입 마이그레이션 예시 시나리오 포함.
5. **충돌 및 한계 분석**
   - 무한 재시도 루프(Infinite Retry Loop) 위험성 및 Fast-Feedback vs Heavy-Validation 실행 오버헤드 간 트레이드오프 분석 기재.
6. **Obsidian 지식 연동 (관련 노트)**
   - [[실전형 9단계 스웜 루프]], [[리드 에이전트 오케스트레이션]], [[Git Worktree 기반 작업 영역 격리]], [[루프 디자인 5단계]] 등 유관 노트와 상호 연결.