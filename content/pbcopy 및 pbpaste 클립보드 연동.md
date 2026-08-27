요청하신 **'pbcopy 및 pbpaste 클립보드 연동'** (유형: `workflow`)에 관한 고품질 한국어 위키 노트를 성공적으로 생성하였습니다.

### 작성된 위키 노트 개요
- **파일 경로**: [`pbcopy 및 pbpaste 클립보드 연동.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/pbcopy%20%EB%B0%8F%20pbpaste%20%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C%20%EC%97%B0%EB%8F%99.md)
- **Frontmatter 규격**: `type: workflow`, `status: draft`, `core: false`, 작성/수정일자 `2026-08-27`, 소스 출처 준수
- **주요 내용**:
  - macOS 터미널 표준 입출력(stdin/stdout)과 시스템 Pasteboard 간 연동 메커니즘 분석
  - `pwd | pbcopy`, `cat ~/.zshrc | pbcopy`, `pbpaste | wc -w`, `urandom` 비밀번호 생성 및 즉시 복사 등 주요 실전 패턴 명시
  - LLM/Agent 개발 환경(대용량 소스 파일 주입, JSON 파이프라인 파싱, 프롬프트 템플릿 결합)에서의 응용 시나리오 및 코드 예시 포함
  - 출처 인용 표기(`raw/17 macOS Terminal Commands I Actually Use Every Week.md`) 및 Obsidian 위키링크(`[[caffeinate 명령어]]`, `[[독립형 배시 스크립트와 셸 함수의 상태 반영 차이]]`, `[[구조화된 프롬프트 작성법]]`) 연동 완료