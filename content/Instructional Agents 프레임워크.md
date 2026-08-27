`Instructional Agents 프레임워크`에 대한 위키 노트를 성공적으로 작성하여 [Instructional Agents 프레임워크.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Instructional%20Agents%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC.md)에 저장하였습니다.

### 주요 반영 내용

1. **스키마 및 규약 준수**: 
   - 지정된 frontmatter 스키마(`type: concept`, `status: draft`, `sources`, `created`/`updated` 날짜 등)를 완벽하게 준수하였습니다.
   - 소스 문서 내 정량적 지표(API 비용 $0.26, 소요시간 14분, iSpring 이러닝 모듈 시장가 $250~$500, EACL 2026 논문 평가 결과 등)에 소스 경로 `(raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md)`를 정밀하게 명기하였습니다.

2. **개념 고도화 및 용어 정리**:
   - 교육 공학의 ADDIE 프레임워크 및 Bloom's Taxonomy(교육 목표 분류학) 기반 백워드 디자인과 멀티 에이전트 파이프라인 간의 구조적 매핑을 명확히 정의하였습니다.
   - 단일 LLM의 초점 일탈(long-context drift)을 해결하기 위한 독립 컨텍스트 병렬 팬아웃(Parallel Fan-out) 및 안티 슬롭 검토 루프 구조를 기술하였습니다.

3. **구체적 예시 및 코드 수록**:
   - LangGraph, Pydantic, Gemini 모델(`gemini-2.5-pro`, `gemini-2.5-flash`)을 결합한 실제 커리큘럼 설계, `interrupt()` 기반 승인 게이트, `Send` API 기반 병렬 실행 코드 스니펫을 포함하였습니다.

4. **지식 그래프 연동 (Obsidian Links)**:
   - [[LangGraph 멀티 에이전트 커리큘럼 파이프라인]], [[LangGraph 상태 기반 멀티 에이전트 시스템]], [[멀티 에이전트 작업 분해]], [[AI 초안 인간 편집 파이프라인]], [[독립 평가 에이전트 루브릭 재수정 루프]], [[AI 슬롭]], [[에이전트 자율성 스펙트럼]] 등 위키 내 유관 개념 노트들과 상호 연동되도록 바인딩하였습니다.