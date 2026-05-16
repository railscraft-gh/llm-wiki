# LLM Wiki Log

## 2026-05-16 (Sync 2 — 전체 wiki 정합성 감사)

### Audit

- 실행 방식: `ctx_execute` 기반 javascript 스크립트로 wiki 전체 46개 노트 frontmatter, wikilink, 고아 페이지, 30일 미갱신 핵심 노트, raw 미참조 점검
- 점검 결과 (1차):
  - 총 노트: 46개
  - 깨진 wikilink: 0개
  - frontmatter 누락: 0개
  - `관련 노트` 2개 미만: 0개
  - 미참조 raw 파일: 0개
  - 고아 페이지: 4개 — [[AI 시대 소프트웨어 펀더멘탈]], [[Graphify]], [[강한 모델로 덜 헤매기]], [[바선생]]
  - 잠재 누락 교차 링크: [[Graphify]] 본문의 "OpenCode" 평문 언급이 wikilink가 아님
  - frontmatter 불일치: [[Agentic 패턴 진화]]가 `core: true`이지만 `status: draft` (규칙상 evergreen 또는 needs-review여야 함)

### 교차 링크 보강

- [[AI 시대 소프트웨어 펀더멘탈]] ← [[Harness Engineering]] (Karpathy 펀더멘탈 원칙과 연결)
- [[Graphify]] ← [[Context Mode]] (둘 다 컨텍스트 윈도우 절감 도구)
- [[강한 모델로 덜 헤매기]] ← [[Plan Mode 기반 AI 작업]] (강한 모델은 plan 단계 가치 큼)
- [[바선생]] ← [[AI 네이티브 사용자]] (6대 기술 차원 진단이 AI 네이티브 역량 측정)
- [[Agentic 패턴 진화]] ← [[Software 3.0]], [[Vibe Coding과 Agentic Engineering]], [[Context Mode]]에 추가 (3개 시대 진화의 메타 허브)
- [[AI 시대 소프트웨어 펀더멘탈]] ← [[Vibe Coding과 Agentic Engineering]], [[AI Slop]]에 추가 (펀더멘탈 실패 시 AI Slop 양산)
- [[제품 오버행]] ← [[Vibe Coding과 Agentic Engineering]]
- [[Andrew Ng 4 에이전틱 디자인 패턴]] ← [[Plan Mode 기반 AI 작업]]
- [[Graphify]] 본문의 평문 "OpenCode" → `[[OpenCode]]` 위키링크로 변환

### 충돌 점검

- 실행 방식: javascript 스크립트로 wiki 본문 전체에서 모델 버전(Opus/Sonnet/Haiku/Claude/GPT/GLM/Kimi/DeepSeek), 연도, 날짜 패턴을 추출하고 노트 간 일관성 비교
- 결과: **확인된 사실 충돌 없음**. Cloud Code 런칭/Anthropic Labs 합류 시점, Opus 4 출시일(2025-05), 보리스의 "10월~11월부터 100% 자동 작성"은 [[제품 오버행]], [[AI 네이티브 엔지니어링 조직]]에서 일관됨. Claude 5.0 언급은 [[Harness Engineering]]과 [[Agentic 패턴 진화]] 모두 가상 미래 모델(rippable 원칙 예시)로 동일하게 사용. GLM 5.1/Kimi K2.6/GPT-5.4는 [[강한 모델로 덜 헤매기]]에서만 다루며 다른 노트와 비교 불가.
- 미확정 영역: 보리스 영상 수치(100% 자동 작성, 하루 150 PR, 수천 에이전트 야간 운영)는 외부 검증 자료 없이 1인 발언이므로 [[index#점검 대기]]에 needs-review 항목으로 유지.

### frontmatter 정정

- [[Agentic 패턴 진화]]: `status: draft` → `status: evergreen` (core 노트 규칙 준수)

### 최종 Lint (2차)

- 총 노트: 46개, 링크 검증: 252개
- 깨진 wikilink: 0개
- 중복 제목: 0개
- frontmatter 누락/유효성: 0개
- `관련 노트` 2개 미만: 0개
- 고아 페이지: **0개** (4 → 0 해소)
- 30일 이상 미갱신 핵심 노트: 0개. [[AI 시대 디자인 시스템]] updated 2026-05-07은 D-9로 다음 주기 점검.
- 핵심 노트 status: 6개 모두 `evergreen`

### 결정 기록

- 결정: 보강 (인바운드 링크만 추가, 본문 결론 변경 없음)
- 대상: [[Harness Engineering]], [[Context Mode]], [[Plan Mode 기반 AI 작업]], [[AI 네이티브 사용자]], [[Software 3.0]], [[Vibe Coding과 Agentic Engineering]], [[AI Slop]], [[Graphify]]
- 근거: 고아 페이지 해소와 허브 노트 간 교차 링크 강화가 목적. 본문 주장은 그대로 두고 `## 관련 노트` 섹션과 필요 시 본문 평문을 wikilink로만 변경. raw 결론과 충돌 없음.

- 결정: frontmatter 정정
- 대상: [[Agentic 패턴 진화]]
- 근거: core: true인 노트는 status를 `evergreen` 또는 `needs-review`로 두는 규칙. 직전 생성 시점에 draft였으나 검증 후 evergreen으로 승급.

---

## 2026-05-16

### Ingest

- 입력: `raw/anthropic-boris-cherny-interview.md`, `raw/evolution-of-ai-agentic-patterns.md`
- 생성: [[Lethal Trifecta]], [[Agentic 패턴 진화]] (core: true), [[Loop와 Routines]], [[Andrew Ng 4 에이전틱 디자인 패턴]], [[제품 오버행]]
- 수정: [[Harness Engineering]] (rippable 원칙, Lethal Trifecta 연결, evolution 출처 추가), [[병렬 에이전트 세션 운영]] (보리스 모바일 + Loop 운영 섹션 추가), [[AI 네이티브 엔지니어링 조직]] (Anthropic 내부 사례 섹션 추가), [[AI 네이티브 사용자]] (보리스 모바일 운영과 소프트웨어 민주화 인쇄기 패러럴 추가)
- index 업데이트: 완료. [[Agentic 패턴 진화]]를 핵심 노트에 추가. 승격 후보에 [[Lethal Trifecta]], [[Loop와 Routines]] 추가. 점검 대기에 보리스 영상 수치와 evolution 자료 변동 항목 등록.
- 남은 검토: 보리스 인터뷰의 "Cloud Code 코드베이스 100% 자동 작성", "하루 150개 PR", "수천 에이전트 야간 운영"은 1인 영상 발언으로 외부 검증 부족. evolution 자료의 Copilot 사용자/점유율, KV-cache 비용 1/10은 2025-2026 시점 자료로 변동성 있음.

### Lint

- 실행 방식: 수동 점검 + 신규 노트 frontmatter/관련 노트/출처 셀프 체크
- 깨진 wikilink: 0개. 새 노트가 참조하는 [[Claude Code 권한 설계]], [[Harness Engineering]], [[Ralph Loop]], [[Software 3.0]] 등은 모두 기존 노트.
- 중복 제목: 0개. [[Loop와 Routines]]는 [[Ralph Loop]]와 개념적으로 다름 — Ralph Loop는 self-referential 단일 작업 완료 루프, Loop와 Routines는 cron 기반 반복 예약 작업.
- 출처 없는 수치 문장: 0개로 판단. 보리스의 "100% 코드 자동 작성, 하루 150 PR, 5~10 세션 × 수백~수천 에이전트"는 raw 출처와 점검 대기 항목으로 함께 표시. evolution의 "Copilot 88% 생산성, 2,000만 사용자, 점유율 42%, KV-cache 비용 1/10"은 raw 및 외부 링크(Manus, Honeycomb, deeplearning.ai)와 함께 표기.
- 관련 노트 2개 미만 문서: 0개. 새 노트 5개 모두 4~6개의 관련 노트 링크 보유.
- 고아 페이지: 0개. 5개 신규 노트는 index의 핵심/승격 후보/점검 대기 또는 보강 노트의 관련 노트에서 모두 연결됨.
- 30일 이상 미갱신 핵심 노트: 0개. 핵심 노트 [[AI 시대 디자인 시스템]] updated 2026-05-07은 다음 주기 점검 대상으로 유지.
- 조치: 보강 4개 노트의 frontmatter `updated`를 2026-05-16으로 갱신, `sources` 목록에 새 raw 파일 경로를 추가함. [[Agentic 패턴 진화]] core: true 설정 후 index `## 핵심 노트` 섹션에 등록.

### 결정 기록

- 결정: 신규 생성
- 대상: `raw/evolution-of-ai-agentic-patterns.md`에서 [[Lethal Trifecta]] 분리
- 근거: Simon Willison의 위험 모델 + Meta의 Rule of Two는 [[Claude Code 권한 설계]], [[Harness Engineering]] 모두에서 참조될 수 있는 독립 보안 프레임이라 별도 노트로 분리.

- 결정: 신규 생성 + core 승격
- 대상: `raw/evolution-of-ai-agentic-patterns.md`에서 [[Agentic 패턴 진화]] 분리
- 근거: 핵심 노트 기준 2개 이상 충족 — (1) 여러 raw(evolution, harness, sequoia, vibe coding)에서 반복되는 메타 프레임, (2) [[Harness Engineering]], [[Software 3.0]], [[Vibe Coding과 Agentic Engineering]], [[Andrew Ng 4 에이전틱 디자인 패턴]]의 상위 허브 역할, (3) 실무 의사결정 기준(엄밀함이 어디에 있는지) 제공.

- 결정: 신규 생성
- 대상: `raw/anthropic-boris-cherny-interview.md`에서 [[Loop와 Routines]] 분리
- 근거: [[Ralph Loop]]와 개념이 다른 cron 기반 반복 예약 작업으로, 보리스가 "미래"라고 강조한 일급 객체. [[병렬 에이전트 세션 운영]]에 흡수하지 않고 분리하되 양쪽에서 상호 링크.

- 결정: 신규 생성
- 대상: `raw/evolution-of-ai-agentic-patterns.md`에서 [[Andrew Ng 4 에이전틱 디자인 패턴]] 분리
- 근거: Reflection/Tool Use/Planning/Multi-Agent는 [[Harness Engineering]] 이전 시대를 정의한 명확한 프레임. [[병렬 에이전트 세션 운영]], [[Plan Mode 기반 AI 작업]] 등과 출처 추적이 필요해 독립 노트로 둠.

- 결정: 신규 생성
- 대상: `raw/anthropic-boris-cherny-interview.md`에서 [[제품 오버행]] 분리
- 근거: 짧지만 명확히 정의된 개념(product overhang)으로, [[AI 네이티브 사용자]], [[Vibe Coding과 Agentic Engineering]], [[Harness Engineering]]을 잇는 판단 기준이 됨.

- 결정: 보강
- 대상: [[Harness Engineering]], [[병렬 에이전트 세션 운영]], [[AI 네이티브 엔지니어링 조직]], [[AI 네이티브 사용자]]
- 근거: 보리스 인터뷰와 evolution 자료가 기존 노트의 결론을 강화하면서 새 사례(rippable 원칙, 모바일 운영, Anthropic 내부 사례, 소프트웨어 민주화)를 추가하므로 보강이 적합. 결론 충돌이나 폐기 요소 없음.

## 2026-05-14

### Ingest

- 입력: `raw/AI 네이티브 엔지니어링 조직 운영하기 - Code w Claude 발표.md`, `raw/GStack - Claude Code 가상 엔지니어링 팀 도구.md`, `raw/Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md`
- 생성: [[AI 네이티브 엔지니어링 조직]], [[GStack]], [[Ralph Loop]]
- 수정: [[AI 네이티브 사용자]] (조직 운영 관점 보강), [[Plan Mode 기반 AI 작업]] (Spectrum Development 연결), [[병렬 에이전트 세션 운영]] (Ralph Loop 연결), [[Claude Code 오케스트레이션]] (headless phase queue 연결), [[매퍼코 3스킬 워크플로우]] (GStack/Ralph Loop 관련 노트 추가)
- index 업데이트: 완료
- 남은 검토: [[GStack]]의 command 목록, host 지원, 설치 방식은 빠르게 변하므로 공식 GitHub 저장소 확인 필요. [[Ralph Loop]]의 context 50% 기준, 100개 이상 headless 세션, 사람 개입 0%는 영상 데모 주장이라 실제 repo 적용 전 검증 필요. [[AI 네이티브 엔지니어링 조직]]은 Code w/ Claude 발표 단일 사례이므로 추가 조직 사례 ingest 후 core 승격 검토.

### Lint

- 실행 방식: `python3` 간이 스크립트로 frontmatter key, 허용 값, wikilink, 관련 노트, 출처 섹션, orphan, core index 등록, 중복 H1 점검. 결과: `PASS wiki files=43 notes=41 links_checked=510`
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개로 판단. 새 노트의 23개 specialist, 8개 power tool, 50% context 기준, 10개 이상 phase, 50명 미팅 사례는 raw 또는 공식 GitHub 출처와 점검 대기 항목을 함께 둠.
- 관련 노트 2개 미만 문서: 0개. 새 노트 3개 모두 2개 이상 관련 노트 링크 보유.
- 고아 페이지: 0개. 생성 노트는 index와 관련 노트에서 연결됨.
- 30일 이상 미갱신 핵심 노트: 0개.
- 조치: 전체 lint 중 발견된 기존 문서의 frontmatter `sources`와 `## 출처` 불일치 17건을 정리하고, 해당 문서의 `updated`와 핵심 노트 index 날짜를 2026-05-14로 갱신함.

### 결정 기록

- 결정: 신규 생성
- 대상: `raw/AI 네이티브 엔지니어링 조직 운영하기 - Code w Claude 발표.md`
- 근거: 개인의 AI-native 사용법을 넘어 팀 규범, 프로세스 폐기, 코드 리뷰, 조직 구조를 다루는 운영 프레임이라 [[AI 네이티브 엔지니어링 조직]]으로 분리함.

- 결정: 신규 생성
- 대상: `raw/GStack - Claude Code 가상 엔지니어링 팀 도구.md`
- 근거: 기존 [[매퍼코 3스킬 워크플로우]]에서 보조적으로 언급되던 GStack이 독립 tool note로 관리할 만큼 command, 역할, 검증 workflow가 구체화되어 [[GStack]]으로 분리함.

- 결정: 신규 생성
- 대상: `raw/Ralph Loop - AI 코딩 자율 워크플로우 Spectrum Development 통합.md`
- 근거: GStack, GSD, SuperPower를 phase queue와 headless 세션으로 연결하는 오케스트레이션 패턴이므로 기존 병렬 세션 노트에 흡수하지 않고 [[Ralph Loop]]로 분리함.

- 결정: 메타데이터 정리
- 대상: wiki/ 전체
- 근거: lint에서 일부 기존 문서의 frontmatter `sources`가 `## 출처`에 누락된 것을 발견해 출처 목록을 맞춤. 본문 주장 변경은 하지 않고 출처 정합성만 보정함.

## 2026-05-13

### Cleanup

- 작업: 본문 inline 출처 제거
- 대상: wiki/ 전체 노트 (28개 파일)
- 제거 수: 108개 inline citation (18개 괄호 형식 + 90개 출처: 형식)
- 근거: raw/ 파일 경로는 접속 불가능한 로컬 경로이므로 본문 내 inline citation은 가독성만 해침. 출처 정보는 frontmatter `sources`와 `## 출처` 섹션으로 충분히 관리됨.
- 남은 검토: 향후 ingest 시 inline 출처 패턴 자동 제거 규칙 필요

### Ingest

- 입력: `raw/arxiv-2603.28052-meta-harness.md`, `raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md`, `raw/GLM-5.1-vs-Kimi-K2.6-Coding-Comparison.md`, `raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md`
- 생성: [[Meta-Harness]], [[Harness Engineering]], [[RuboCop]]
- 수정: [[강한 모델로 덜 헤매기]] (GLM 5.1 vs Kimi K2.6 비교표 및 선택 가이드 추가), [[Claude.md 운영 원칙]] (Harness Engineering 연결 및 Karpathy 원칙 보강), [[Agent Native Infrastructure]] (Meta-Harness 관련 링크 추가), [[AI 코딩 에이전트 검증 전략]] (RuboCop 검증 도구 링크 추가)
- index 업데이트: 완료
- 남은 검토: [[Meta-Harness]]는 Stanford/MIT/KRAFTON 공동 연구의 단일 논문 기준이므로 추가 실험 검증 필요. [[Harness Engineering]]은 개념 노트로 정립되었으나 core 승격은 추가 raw 반복 확인 후 검토. [[RuboCop]]은 Ruby 특화 도구로 범용성은 제한적. [[강한 모델로 덜 헤매기]]의 GLM/Kimi 가격과 벤치마크는 변동성이 높음.

### Lint

- 실행 방식: 수동
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개로 판단. GLM 5.1/Kimi K2.6 벤치마크 점수와 가격, RuboCop 버전/스타 수, Meta-Harness 실험 결과에는 raw 출처를 붙임.
- 관련 노트 2개 미만 문서: 0개. 새 노트 3개 모두 2개 이상 관련 노트 링크 보유.
- 고아 페이지: 0개. 생성 노트는 index와 관련 노트에서 연결됨.
- 30일 이상 미갱신 핵심 노트: 0개.
- 조치: 생성 노트의 frontmatter 필수 키(type, status, core, tags, sources, created, updated) 모두 확인 완료.

### 결정 기록

- 결정: 신규 생성
- 대상: `raw/arxiv-2603.28052-meta-harness.md`
- 근거: Meta-Harness는 하네스 엔지니어링의 자동화 접근법으로, 파일시스템 기반 전체 이력 접근이라는 독특한 메커니즘을 가진다. 3가지 도메인에서 검증된 결과를 포함해 별도 개념 노트로 정리함.

- 결정: 신규 생성
- 대상: `raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md`
- 근거: 하네스 엔지니어링은 기존 [[Claude.md 운영 원칙]]의 상위 개념 프레임으로, 패러다임 변화와 개발자 역할 변화를 설명한다. Claude.md는 실행 팁 중심, Harness Engineering은 개념/패러다임 중심으로 분리함.

- 결정: 신규 생성
- 대상: `raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md`
- 근거: Ruby 생태계의 표준 검증 도구로, [[AI 코딩 에이전트 검증 전략]]에서 참조할 수 있는具體적인 tool note가 필요함.

- 결정: 보강
- 대상: `raw/GLM-5.1-vs-Kimi-K2.6-Coding-Comparison.md`
- 근거: 모델 비교 정보는 변동성이 높아 별도 노트 생성보다 기존 [[강한 모델로 덜 헤매기]]에 비교표와 선택 가이드를 추가하는 방식으로 처리함.

## 2026-05-11

### Ingest

- 입력: `raw/oh-my-openagent-team-mode.md`
- 생성: [[OpenAgent Team Mode]]
- 수정: [[병렬 에이전트 세션 운영]] (관련 노트 추가)
- index 업데이트: 완료
- 남은 검토: Team Mode는 활성화 후 opencode 재시작이 필요하며, tmux_visualization 설정은 선택 사항임. 내장 스킬(hyperplan, security-research)은 별도 설정 없이 사용 가능하나 실제 검증 필요.

### Ingest

- 입력: `raw/sequoia-ascent-2026-karpathy-ko.md`
- 생성: 없음 (기존 노트 보강)
- 수정: [[Software 3.0]], [[Jagged Intelligence]], [[Vibe Coding과 Agentic Engineering]], [[Agent Native Infrastructure]], [[Thinking과 Understanding 분리]], [[LLM을 동물 지능처럼 다루지 않기]], [[AI 네이티브 사용자]]
- index 업데이트: 완료
- 남은 검토: Sequoia Ascent 2026은 기존 카파시 인터뷰 raw와 중복되는 개념이 많아 보강만 진행함. 새로 추가된 내용: MenuGen 소프트웨어 소멸 예시, LLM Wiki 패턴, 검증 가능성×훈련 집중도 공식, 에이전틱 엔지니어링 채용 기준 변화, 센서/액추에이터 프레이밍, "유령이지 동물이 아니다" mental model.

### Ingest

- 입력: `raw/매퍼코-3스킬-조합-워크플로우-해강.md`
- 생성: [[매퍼코 3스킬 워크플로우]]
- 수정: [[AI 코딩 에이전트 검증 전략]], [[Plan Mode 기반 AI 작업]] (관련 노트 추가)
- index 업데이트: 완료
- 남은 검토: 맥퍼커/G스텍/슈퍼파워즈의 정확한 영문 명칭은 추가 검증 필요. 해강의 워크플로우는 2~3시간 소요되며 실제 적용 시 단축/조정 가능.

### Ingest

- 입력: `raw/뿌리강의-4-웹-서버와-배포.md`
- 생성: [[웹 서버와 배포 기초]]
- 수정: [[Agent Native Infrastructure]] (관련 노트 추가)
- index 업데이트: 완료
- 남은 검토: 뿌리강의는 바이브 코딩 입문자 대상이므로 기술적 깊이는 얕음. Nginx 설정, Docker 최적화, CI/CD 고급 패턴은 별도 자료 필요.

### Ingest

- 입력: `raw/강화학습-RL-초보자-가이드.md`
- 생성: [[강화학습 기초]], [[PPO와 정책 최적화]], [[LLM 정렬 기법]]
- 수정: [[Software 3.0]], [[Jagged Intelligence]] (관련 노트 추가)
- index 업데이트: 완료
- 남은 검토: RL 초보자 가이드는 직관과 큰 흐름에 집중한 자료로 수학적 세부사항은 생략됨. 심화 학습을 위해서는 OpenAI Spinning Up이나 Sutton & Barto 교재 권장. GRPO는 DeepSeek-R1 논문 기준이며 이후 변화 가능.

### Lint

- 실행 방식: 수동
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개로 판단. PPO 클리핑 범위 ε=0.2, Nginx 2004년 출시, Docker 2013년 출시, Let's Encrypt 2015년 출시 등 수치 문장에는 raw 출처를 붙임.
- 관련 노트 2개 미만 문서: 0개. 새 노트 6개 모두 2개 이상 관련 노트 링크 보유.
- 고아 페이지: 0개. 생성 노트는 index와 관련 노트에서 연결됨.
- 30일 이상 미갱신 핵심 노트: 0개. Software 3.0, Jagged Intelligence, Vibe Coding과 Agentic Engineering 등 핵심 노트는 2026-05-11로 갱신됨.
- 조치: 생성 노트의 frontmatter 필수 키(type, status, core, tags, sources, created, updated) 모두 확인 완료. Sequoia Ascent raw에서 추가된 내용은 기존 노트의 상세 섹션에 보강하고 출처를 명시함.

### 결정 기록

- 결정: 분할
- 대상: `raw/매퍼코-3스킬-조합-워크플로우-해강.md`
- 근거: 도메인 맵핑(맥퍼커), 스펙 브레인스토밍(G스텍), 서브 에이전트 구현(슈퍼파워즈)이 하나의 워크플로우로 연결되므로 [[매퍼코 3스킬 워크플로우]]로 통합함. 단일 스킬 노트로 쪼개지 않고 실무 적용 관점에서 통합 workflow note로 정리함.

- 결정: 분할
- 대상: `raw/강화학습-RL-초보자-가이드.md`
- 근거: RL 기초 개념(MDP, Policy, Value Function), 알고리즘 상세(PPO, DQN 등), LLM 정렬 기법(RLHF, DPO, GRPO)의 유지보수 주기와 독자층이 달라 [[강화학습 기초]], [[PPO와 정책 최적화]], [[LLM 정렬 기법]]으로 분할함.

- 결정: 병합 및 보강
- 대상: `raw/sequoia-ascent-2026-karpathy-ko.md`
- 근거: 기존 카파시 인터뷰 raw와 중복되는 개념(Software 3.0, Jagged Intelligence, Agentic Engineering 등)이 많아 기존 노트 보강만 진행함. 새로운 내용(MenuGen 소멸, LLM Wiki 패턴, 센서/액추에이터, 채용 변화 등)은 해당 노트의 상세 섹션에 추가하고 출처를 명시함.

- 결정: 분할
- 대상: `raw/뿌리강의-4-웹-서버와-배포.md`
- 근거: 웹 서버 역사, 배포 기술, DNS/HTTPS, 스케일링 등이 하나의 연속된 흐름으로 재사용 가능해 [[웹 서버와 배포 기초]]로 통합함. 에이전트 네이티브 관점에서 headless 환경, 컨테이너화, CLI 기반 Secret 주입을 강조함.

## 2026-05-09

### Ingest

- 입력: `raw/cc101_axwith_ko.md`
- 생성: 없음 (기존 노트 보강)
- 수정: [[Claude Code 권한 설계]], [[Claude.md 운영 원칙]], [[병렬 에이전트 세션 운영]], [[Claude Code 오케스트레이션]], [[Plan Mode 기반 AI 작업]], [[AI 코딩 에이전트 검증 전략]]
- index 업데이트: 완료
- 남은 검토: CC101은 기존 wiki 노트들과 중복되는 내용이 많아 보강만 진행함. 권한 모드 3가지, CLAUDE.md 템플릿 3종, pipe scripting, Headless 모드, Plan Mode 사용법, 디버깅 3단계, slopsquatting 경고 등이 추가됨.

### Ingest

- 입력: `raw/ai-era-six-pitfalls-six-prescriptions-matt-pocock.md`
- 생성: [[AI 시대 소프트웨어 펀더멘탈]]
- 수정: 없음
- index 업데이트: 완료
- 남은 검토: Matt Pocock의 주장은 단일 발표자료 기준이며 추가 출처 검증 필요. Grill Me 스킬의 GitHub star 수와 Ubiquitous Language 도입 효과는 개인 경험 기반임.

### Lint

- 실행 방식: 자동 스크립트 (wiki/ 29개 노트 파일 대상)
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개
- 관련 노트 2개 미만 문서: 0개
- 고아 페이지: 0개
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 수정 필요 없음. 모든 항목 PASS.

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
