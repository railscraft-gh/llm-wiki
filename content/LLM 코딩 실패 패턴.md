지정한 소스 문서(`raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md`)를 바탕으로, Obsidian 위키의 규격과 규칙을 철저히 반영하여 **`LLM 코딩 실패 패턴`** 개념(concept) 위키 노트를 성공적으로 작성 완료했습니다.

---

### 📄 생성된 위키 노트 파일 정보
- **위치**: [`/Users/railscraft/Obsidian/wiki/LLM 코딩 실패 패턴.md`](file:///Users/railscraft/Obsidian/wiki/LLM%20%EC%BD%94%EB%94%A9%20%EC%8B%A4%ED%8C%A8%20%ED%8C%A8%ED%84%B4.md)

---

### 📋 위키 노트 주요 수록 내용 요약

1. **Frontmatter 구성**:
   - `type: concept`, `status: draft`, `core: false`, `tags: [llm, agent, coding-agent]`
   - `sources`: `['raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md']`
   - `created: 2026-08-28`, `updated: 2026-08-28`

2. **한 줄 정의**:
   - [[LLM]] [[코딩 에이전트]]가 자율 개발 작업을 수행할 때 명시적 요청 범위를 벗어나 기본 동작(Default Behavior)으로 보여주는 3대 고질적 장애 패턴(조용한 가정, 과도한 복잡성, 범위 확장).

3. **핵심 요지 및 상세 설명**:
   - **조용한 가정 (Silent Assumption)**: 질문을 통해 모호함을 해소하지 않고 독단적 선택으로 무단 진행.
   - **과도한 복잡성 (Over-complexity / Over-engineering)**: 세 줄이면 될 캐시 구현에 인터페이스, 8개 메서드 헬퍼 클래스, Dependency Injection 패턴을 남발.
   - **범위 확장 (Scope Creep / Diff Pollution)**: 버그 수정 시 무관한 코드 포맷팅, 스타일 변경, 타입 힌트 추가 등 '외과적 수정' 원칙 위반.
   - **행동 계약(Behavioral Contract) 해결 방식**: 65줄 문장의 마크다운 규칙 파일(`CLAUDE.md`)이 행동 분포를 개선하며 GitHub 9만 1천 개(91,000 Star) 추천으로 현장의 집단적 공감을 이끌어냄 (`raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md`).

4. **구체적 예시**:
   - Polars 파이프라인 캐싱 시 과도한 추상화 코드 vs 3줄 최소 구현 코드 비교 시나리오 수록.
   - 날짜 파싱 버그 수정 시 주변 코드 무단 수정 사례 명시.

5. **충돌 및 유의점**:
   - 규칙 기반 행동 분포 개선이 100% 이행을 보장하는 결정론적 제약(Deterministic Contract)이 아니라는 지점 명시.

6. **연동된 위키 노트 (Wikilinks)**:
   - [[LLM 코딩 에이전트 행동 지침 (CLAUDE.md 원칙)]]
   - [[안드레이 카파시의 AI 에이전트 실패 패턴]]
   - [[AI 코딩 도구의 시스템 경계 설정 필요성]]
   - [[AI 코딩 에이전트 검증 전략]]
   - [[코딩 에이전트]]
백그라운드에서 실행 중이던 위키 자동 링크(`wiki-autolink`) 작업이 성공적으로 종료되었습니다. 
방금 생성된 `LLM 코딩 실패 패턴.md`를 포함한 전체 위키 노트 간의 위키링크 참조가 자동으로 업데이트되었습니다.