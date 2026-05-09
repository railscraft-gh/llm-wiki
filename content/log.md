# LLM Wiki Log

## 2026-05-09

### Ingest

- 입력: `raw/vibe_sunsang_정리.md`
- 생성: [[바선생]]
- 수정: 없음
- index 업데이트: 완료
- 남은 검토: 바선생은 Claude Code 플러그인으로 설치 방식과 명령어 인터페이스가 빠르게 바뀔 수 있어 실사용 전 공식 GitHub README 확인 필요. 6축 분석과 레벨 판정 기준은 저장소 기준임.

### Ingest

- 입력: `raw/graphify_정리.md`
- 생성: [[Graphify]]
- 수정: 없음
- index 업데이트: 완료
- 남은 검토: Graphify는 15개 이상 플랫폼 지원과 빠르게 바뀌는 CLI 옵션을 다루므로 실사용 전 공식 GitHub/README 확인 필요. 71.5배 토큰 절감 수치는 저장소 내 `worked/karpathy-repos/` 실측 데이터 기준임.

### Ingest

- 입력: `raw/context-mode-README-정리.md`
- 생성: [[Context Mode]]
- 수정: 없음
- index 업데이트: 완료
- 남은 검토: Context Mode는 14개 플랫폼 지원과 빠르게 바뀌는 API(Hook 메커니즘, 플랫폼별 설정)를 다루므로 실사용 전 공식 GitHub/docs 확인 필요. HN #1, Microsoft/Google/Meta/Amazon/NVIDIA 사용 여부는 GitHub README 기준임.

## 2026-05-08

### Ingest

- 입력: `raw/Quartz-Deploy-Guide.md`, `raw/opencode-masterclass-summary.md`, `raw/Infisical_SSH_헤드리스_인증_가이드.md`
- 생성: [[Quartz로 Obsidian Wiki 배포하기]], [[OpenCode]], [[Infisical 헤드리스 인증]]
- 수정: [[Plan Mode 기반 AI 작업]], [[병렬 에이전트 세션 운영]], [[Claude.md 운영 원칙]], [[AI 코딩 에이전트 검증 전략]], [[Infisical 도입 전략]], [[Agent Native Infrastructure]]
- index 업데이트: 완료
- 남은 검토: [[Quartz로 Obsidian Wiki 배포하기]]는 실제 배포 repo branch와 `baseUrl` 확정 필요. [[OpenCode]]는 provider, skill path, agent 설정이 빠르게 바뀌므로 실사용 전 공식 docs 확인 필요. [[Infisical 헤드리스 인증]]은 Service Token deprecation 상태와 Universal Auth 운영 옵션을 적용 전 재확인 필요.

### Ingest

- 입력: `raw/pi-coding-agent-overview.md`, `raw/Quartz-GitHub-Pages-Complete-Guide.md`
- 생성: [[Pi Coding Agent]]
- 수정: [[Quartz로 Obsidian Wiki 배포하기]], [[Agent Native Infrastructure]], [[Claude.md 운영 원칙]], [[Plan Mode 기반 AI 작업]], [[병렬 에이전트 세션 운영]], [[Claude Code 권한 설계]], [[OpenCode]]
- index 업데이트: 완료
- 남은 검토: [[Pi Coding Agent]]는 raw의 `@earendil-works/*` 패키지명과 공식 docs의 `@mariozechner/pi-coding-agent` 설치명이 달라 `## 충돌`에 기록함. [[Quartz로 Obsidian Wiki 배포하기]]는 symlink 해소, GitHub Pages environment 처리, `baseUrl`을 실제 배포 repo에서 재확인해야 함.

### Lint

- 실행 방식: `python3` 간이 스크립트로 frontmatter key, 허용 값, wikilink, 관련 노트, 출처 섹션, orphan, core index 등록, 중복 H1 점검
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개로 판단. Node `22`, npm `10.9.2`, GitHub Actions version, OpenCode/Infisical command, Pi의 `15+`/`20개 이상` provider 차이와 패키지명 충돌에는 raw 또는 공식 URL을 붙임.
- 관련 노트 2개 미만 문서: 0개
- 고아 페이지: 0개
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: wikilink 예시가 실제 깨진 링크로 잡히지 않도록 [[Quartz로 Obsidian Wiki 배포하기]]의 문장을 일반 설명으로 바꿈. 추가 ingest 후 같은 간이 스크립트로 재점검했고 오류 0개를 확인함.

### 결정 기록

- 결정: 분할
- 대상: `raw/Quartz-Deploy-Guide.md`
- 근거: Quartz 설치, Obsidian compatibility, GitHub Pages 배포, 운영 체크리스트가 하나의 반복 workflow로 재사용 가능해 [[Quartz로 Obsidian Wiki 배포하기]]로 정리함.

- 결정: 병합 및 보강
- 대상: `raw/opencode-masterclass-summary.md`
- 근거: OpenCode 자체는 tool note인 [[OpenCode]]로 만들고, Plan/Build 분리, subagent 병렬화, AGENTS.md, MCP 검증은 기존 [[Plan Mode 기반 AI 작업]], [[병렬 에이전트 세션 운영]], [[Claude.md 운영 원칙]], [[AI 코딩 에이전트 검증 전략]]에 보강함.

- 결정: 분할
- 대상: `raw/Infisical_SSH_헤드리스_인증_가이드.md`
- 근거: Infisical 전체 도입 전략과 달리 SSH, CI/CD, systemd에서 브라우저 없이 인증하는 절차는 별도 workflow라 [[Infisical 헤드리스 인증]]으로 분리함.

- 결정: 충돌 기록
- 대상: [[OpenCode]], [[Infisical 헤드리스 인증]]
- 근거: OpenCode raw의 `.agents/skills/` 중심 설명은 공식 docs의 다중 skill path와 범위가 다르고, Infisical raw의 Service Token 설명은 CLI docs의 deprecated 표시와 운영 권장 상태가 다르므로 각 노트의 `## 충돌`에 기록함.

- 결정: 분할
- 대상: `raw/pi-coding-agent-overview.md`
- 근거: Pi는 OpenCode나 Claude Code의 하위 사례가 아니라 minimal harness, extension, package, JSON/RPC mode를 중심으로 한 별도 coding agent 도구라 [[Pi Coding Agent]]로 분리함. Plan mode, subagent, permission popup을 내장하지 않는 철학은 기존 workflow 노트에 보강함.

- 결정: 병합 및 충돌 기록
- 대상: `raw/Quartz-GitHub-Pages-Complete-Guide.md`
- 근거: Quartz 설치, GitHub Actions, symlink, GitHub Pages 설정은 기존 [[Quartz로 Obsidian Wiki 배포하기]]의 같은 workflow라 새 노트를 만들지 않고 병합함. GitHub Pages environment 처리 방식은 raw와 공식 hosting 문서의 권장 설명이 달라 `## 충돌`에 기록함.

## 2026-05-07

### Ingest

- 입력: `raw/API_Key_관리_및_Infisical_도입_가이드.md`, `raw/AI로_만든_제품이_안_팔리는_이유.md`
- 생성: [[API Key 관리 원칙]], [[클라이언트 Secret 노출 방지]], [[Infisical 도입 전략]], [[AI Slop]], [[DESIGN.md 운영 원칙]], [[AI 시대 디자인 시스템]]
- 수정: [[AI 코딩 에이전트 검증 전략]], [[Vibe Coding과 Agentic Engineering]], [[Claude.md 운영 원칙]], [[Agent Native Infrastructure]], [[Claude Code 권한 설계]]
- index 업데이트: 완료
- 남은 검토: [[Infisical 도입 전략]]은 raw의 가격/라이선스 설명과 공식 출처가 달라 `## 충돌`에 기록함. [[DESIGN.md 운영 원칙]]은 Google Labs spec이 alpha라 `needs-review`로 관리함.

### Lint

- 실행 방식: 수동
- 깨진 wikilink: 0개
- 중복 제목: 0개로 판단
- 출처 없는 수치 문장: 0개로 판단. Infisical 가격과 DESIGN.md/spacing 관련 수치에는 raw 또는 공식 URL을 붙임.
- 관련 노트 2개 미만 문서: 0개
- 고아 페이지: 0개. 생성 노트는 index와 관련 노트에서 연결됨.
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: [[AI 시대 디자인 시스템]]을 핵심 노트로 추가하고, 보안/디자인 raw를 재사용 가능한 workflow와 concept note로 분리함.

### 결정 기록

- 결정: 분할
- 대상: `raw/API_Key_관리_및_Infisical_도입_가이드.md`
- 근거: API Key 일반 원칙, 클라이언트 노출 방지, Infisical 도입은 각각 중심 질문과 유지보수 주기가 달라 [[API Key 관리 원칙]], [[클라이언트 Secret 노출 방지]], [[Infisical 도입 전략]]으로 분리함.

- 결정: 분할
- 대상: `raw/AI로_만든_제품이_안_팔리는_이유.md`
- 근거: 제품 차별화 주장, AI Slop 개념, DESIGN.md workflow, 디자인 시스템 허브 역할이 달라 [[AI Slop]], [[DESIGN.md 운영 원칙]], [[AI 시대 디자인 시스템]]으로 분리함.

- 결정: 충돌 기록
- 대상: [[Infisical 도입 전략]]
- 근거: 2026-05-07 기준 공식 GitHub는 MIT expat license 예외로 `ee` directory의 enterprise license를 언급하고, 공식 pricing page는 Pro를 `$18/mo`로 표시해 raw의 "완전 오픈소스", `$5/인/월` 설명과 다름.

## 2026-05-06

### Ingest

- 입력: `raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md`, `raw/보리스_클로드코드_실무_사용법.md`, `raw/Claude-Code-실무활용법-보리스-관점-정리.md`, `raw/안드레_카파시_인터뷰_정리.md`, `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md`
- 생성: [[AI 코딩 에이전트 검증 전략]], [[Claude.md 운영 원칙]], [[Claude Code 권한 설계]], [[Plan Mode 기반 AI 작업]], [[병렬 에이전트 세션 운영]], [[Claude Code 오케스트레이션]], [[강한 모델로 덜 헤매기]], [[Software 3.0]], [[Neural Computer]], [[Jagged Intelligence]], [[Vibe Coding과 Agentic Engineering]], [[AI 네이티브 사용자]], [[Agent Native Infrastructure]], [[Thinking과 Understanding 분리]], [[LLM을 동물 지능처럼 다루지 않기]]
- 수정: 없음
- index 업데이트: 완료
- 남은 검토: [[Neural Computer]]는 전망성 주장이라 추가 출처 검증 필요. [[강한 모델로 덜 헤매기]]는 모델명/가격 변동 자료가 들어오면 갱신 필요.

### Lint

- 실행 방식: 수동
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개로 판단. 수치가 포함된 핵심 문장은 raw 출처가 있는 노트에 배치함.
- 관련 노트 2개 미만 문서: 0개
- 고아 페이지: 0개. 모든 생성 노트는 [[index]]와 관련 노트에서 연결됨.
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 첫 ingest라 `wiki/index.md`와 `wiki/log.md`를 생성하고 핵심 노트 4개를 등록함.

### 결정 기록

- 결정: 병합
- 대상: 보리스 Claude Code raw 3개
- 근거: 같은 영상/주장의 전사, 요약, 관점 정리로 중복이 커서 개별 source 노트 대신 검증, 권한, 계획, 병렬, 오케스트레이션 단위로 분리함.

- 결정: 병합
- 대상: 카파시 인터뷰 raw 2개
- 근거: 같은 인터뷰의 요약과 전사 묶음으로 중복이 커서 [[Software 3.0]], [[Jagged Intelligence]], [[Thinking과 Understanding 분리]] 등 개념 단위로 분리함.
