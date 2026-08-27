지정된 작성 원칙 및 규칙과 템플릿에 맞추어 **`caffeinate 명령어`**에 대한 고품질 한국어 위키 노트를 작성 완료하였습니다.

### 작업 요약
- **생성 위치**: [`scratch/llm-wiki/wiki/caffeinate 명령어.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/caffeinate%20%EB%AA%85%EB%A0%B9%EC%96%B4.md)
- **Frontmatter 규격**: `type: tool`, `status: draft`, `sources`, `created: 2026-08-27`, `updated: 2026-08-27` 등 지정된 스키마 준수
- **소스 출처 상기**: 40GB 다운로드, 8K 렌더링, 3600초 타임아웃(`-t`), 디스플레이 디밍 방지(`-d`), 단축어(`alias _cf_='caffeinate -d -t 3600'`), `pmset -g assertions`를 활용한 PreventSystemSleep 어설션 검증 등의 명확한 수치 및 기술적 내용을 소스 경로 (`raw/17 macOS Terminal Commands I Actually Use Every Week.md`) 표기와 함께 본문에 반영
- **코드 및 시나리오 예시**: LLM 파인튜닝/대용량 다운로드 백그라운드 수행 시나리오 및 특정 PID 추적(`-w`) + `say` 완료 음성 알림 연동 코드 작성
- **관련 위키 노트 연결**: [[시스템 현황 일괄 요약 스크립트]], [[독립형 배시 스크립트와 셸 함수의 상태 반영 차이]] 링크 포함