# LLM Wiki Log

## 2026-05-31

### Ingest

- 입력: `raw/거인의 노트.pdf_by_PaddleOCR-VL-1.6.md`, `raw/결국 해내는 사람들의 원칙.pdf_by_PaddleOCR-VL-1.6.md`, `raw/돈의 심리학.pdf_by_PaddleOCR-VL-1.6.md`, `raw/마흔에 읽는 소펜하우어.pdf_by_PaddleOCR-VL-1.6.md`, `raw/미움받을 용기.pdf_by_PaddleOCR-VL-1.6.md`, `raw/부의 추월차선.pdf_by_PaddleOCR-VL-1.6.md`
- 생성: [[기록으로 성장하는 법]], [[목표를 뇌에 입력하기]], [[돈의 심리학]], [[의지와 고통]], [[과제 분리와 용기]], [[추월차선과 서행차선]]
- 수정: 없음
- index 업데이트: 완료
- 남은 검토: 없음

### Lint

- 실행 방식: Python 스크립트로 frontmatter 필수값, 허용된 `type/status`, broken wikilink, `## 관련 노트` 2개 이상, 고아 페이지, core index 등록 여부를 점검
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개
- 관련 노트 2개 미만 문서: 0개
- 고아 페이지: 0개
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 새 evergreen 노트 6개를 추가하고 기존 허브 노트들과 교차 연결함

### 결정 기록

- 결정: 신규 생성
- 대상: [[기록으로 성장하는 법]], [[목표를 뇌에 입력하기]], [[돈의 심리학]], [[의지와 고통]], [[과제 분리와 용기]], [[추월차선과 서행차선]]
- 근거: 여섯 raw는 각각 기록 성장, 목표 주의 설정, 돈의 심리, 쇼펜하우어식 욕망/고통, 아들러식 책임 경계, 부의 가속 경로라는 서로 다른 중심 질문에 답한다. 기존 AI 허브에 억지로 합치기보다 독립 evergreen note로 분리하는 편이 재사용성이 높았다.

## 2026-05-29

### Ingest

- 입력: `raw/UX를 위해 먼저 읽었어야 할 AI 가이드 - 출판형 다듬기.md`, `raw/AI를 UX에 쓰는 법 2: 프롬프트, 프리퍼런스, 설정 - 출판형 다듬기.md`, `raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`, `raw/GraphRAG 대 Vectorless RAG 대 Vector RAG - 2026 고급 Context Engineering 가이드 - 출판형 다듬기.md`, `raw/효과적인 리더십을 위한 전략적 사고를 키우는 법 - 출판형 다듬기.md`
- 생성: [[AI를 UX에 쓰는 법]], [[RAG 아키텍처 선택]], [[전략적 사고]]
- 수정: 없음
- index 업데이트: 완료
- 남은 검토: [[AI를 UX에 쓰는 법]]은 UX workflow note로 안정적이지만, 후속 UX 사례가 더 쌓이면 `AI Experience Architect`와의 경계가 더 선명해질 수 있음. [[RAG 아키텍처 선택]]은 retrieval architecture 용어가 빨리 변하므로 실제 제품 선택 시 최신 구현을 다시 확인해야 함. [[전략적 사고]]는 일반 leadership note라 AI/agent 맥락이 더 쌓이면 역할 정의를 좁힐 수 있음.

### Ingest

- 입력: `raw/AI와 디자인 시스템 - 출판형 다듬기.md`, `raw/하네스를 내 것으로 만들기 - 출판형 다듬기.md`, `raw/아이디어에서 현실 시스템까지 AI 에이전트 구축하기 - 출판형 다듬기.md`, `raw/지금 개발자들이 주목하는 오픈소스 GitHub 프로젝트 15선 - 출판형 다듬기.md`, `raw/AI 에이전트에게 Prompt Engineering은 죽었다. 이제 진짜 중요한 것은 Context Engineering이다.md`, `raw/Skills, MCP, Tool Calling. 에이전트 확장의 세 층.md`, `raw/Structuring Agents, Skills, and MCPs 🤖🧩.md`, `raw/cc101_axwith_ko.html`
- 생성: 없음
- 수정: [[AI 시대 디자인 시스템]], [[Harness Engineering]], [[Agent Harness]], [[AI 오픈소스 작업대]]
- 기존 반영: [[Context Engineering]], [[에이전트 확장 3계층]], [[AI 에이전트 런타임 역할 맵]]
- index 업데이트: 완료
- 남은 검토: `raw/cc101_axwith_ko.html`은 `raw/cc101_axwith_ko.md`의 HTML mirror라 새 노트 없이 중복 원문으로 처리했다. `raw/AI 에이전트에게 Prompt Engineering은 죽었다. 이제 진짜 중요한 것은 Context Engineering이다.md`는 [[Context Engineering]]으로 흡수되어 새 노트가 필요하지 않았다.

### Ingest

- 입력: `raw/산만하고 과자극에 시달리던 내 뇌를 고친 7가지 - 출판형 다듬기.md`, `raw/디자인 팀이 만드는 방식을 다시 짜기 - 출판형 다듬기.md`
- 생성: [[주의력 회복]], [[AI 디자인 팀 운영]]
- 수정: 없음
- index 업데이트: 완료
- 남은 검토: [[주의력 회복]]은 개인 회복과 환경 설계의 교훈으로 안정적이지만, 후속 생산성/주의력 자료가 쌓이면 AI 작업 맥락과의 연결을 더 좁힐 수 있음. [[AI 디자인 팀 운영]]은 [[AI 시대 디자인 시스템]]과 [[AI 디자인 역할 맵]]의 중간층으로 유지하되, 실제 디자인 조직 사례가 늘면 workflow note로 더 세분화할 수 있음.

### 결정 기록

- 결정: 신규 생성
- 대상: [[AI를 UX에 쓰는 법]], [[RAG 아키텍처 선택]], [[전략적 사고]], [[주의력 회복]], [[AI 디자인 팀 운영]]
- 근거: 다섯 raw 묶음은 각각 UX workflow, retrieval architecture, leadership judgment, attention recovery, design team operating model이라는 서로 다른 중심 질문에 답한다. 기존 허브에 억지로 밀어 넣기보다 별도 evergreen note로 분리하는 편이 재사용성이 높았음.

- 결정: 보강
- 대상: [[AI 시대 디자인 시스템]], [[Harness Engineering]], [[Agent Harness]], [[AI 오픈소스 작업대]]
- 근거: 새 raw들은 기존 허브의 빈칸을 메우는 보강 자료였다. 디자인 시스템은 AI-friendly foundation, harness는 memory/compaction ownership, open-source 작업대는 반복되는 작업 표면이라는 관점을 더 명확히 했다.

- 결정: 중복 raw
- 대상: `raw/cc101_axwith_ko.html`
- 근거: 기존 `raw/cc101_axwith_ko.md`의 HTML mirror라 새로운 지식이 아니라 같은 CC101 guide의 렌더링 변주로 처리했다.

### Lint

- 실행 방식: Python 일회성 스크립트로 `raw/` 78개 파일이 `wiki/index.md`/`wiki/log.md`에 모두 반영됐는지 재검증하고, `wiki/*.md`의 broken wikilink, related note 수, source 누락, orphan page를 점검
- 깨진 wikilink: 0개
- 관련 노트 2개 미만 문서: 0개
- 출처 누락: 0개
- 고아 페이지: 0개
- 30일 이상 미갱신 core 노트: 0개
- 조치: 2026-05-29 ingest 분량을 index/log에 반영하고, 새 note와 hub 보강을 함께 완료했음

## 2026-05-28

### Ingest

- 입력: `raw/Bloated AI Slop Labs on X 2059651388901335196 한국어 번역.md`
- 생성: [[AI 하네스 최소화]]
- 수정: [[Harness Engineering]], [[AI Slop]]
- index 업데이트: 완료
- 남은 검토: `[[AI 하네스 최소화]]`는 단일 X thread 기반 주장이라 하네스 설계 원칙으로는 유효하지만, 숫자(4 skills, 4 agents)와 구체 조합은 추가 사례가 더 필요함.

### 결정 기록

- 결정: 신규 생성
- 대상: [[AI 하네스 최소화]]
- 근거: 원문은 "비대한 harness를 줄이고 실제로 쓰는 4개 workflow만 남긴다"는 재사용 가능한 운영 원칙을 제시했다. 기존 [[Harness Engineering]]의 상위 개념을 실제 workflow 단위로 축약한 note가 필요했음.

- 결정: 보강
- 대상: [[Harness Engineering]], [[AI Slop]]
- 근거: 새 raw는 하네스 설계의 핵심을 "더 많은 스킬"이 아니라 "더 적은 수의 반복 가능한 루프"로 요약한다. [[Harness Engineering]]과 [[AI Slop]]에 이 관점을 연결해 허브를 더 선명하게 만들었음.

### Lint

- 실행 방식: 수동 점검
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개
- 관련 노트 2개 미만 문서: 0개
- 고아 페이지: 0개
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 신규 note 1개를 생성하고 허브 2개를 보강했음

### Ingest

- 입력: `raw/Hermes Agent에 구글 연결하는 초보자 매뉴얼.md`, `raw/메시징 서버의 스트레스 테스트 노하우와 AI가 덜어 준 부분.md`
- 생성: [[Hermes Agent Google Workspace 연결]], [[메시징 서버 스트레스 테스트 운영 원칙]]
- 수정: [[Agent Native Infrastructure]], [[Claude Code 오케스트레이션]], [[Harness Engineering]]
- index 업데이트: 완료
- 남은 검토: [[Hermes Agent Google Workspace 연결]]은 Hermes setup script와 Google OAuth scope에 종속되는 실무 절차라 경로/스코프 변경 시 재검토 필요. [[메시징 서버 스트레스 테스트 운영 원칙]]은 메시징 도메인 예시와 수치가 포함된 운영 노트라 후속 도메인 사례가 더 쌓이면 evergreen 유지 여부를 다시 판단할 수 있음.

### 결정 기록

- 결정: 신규 생성
- 대상: [[Hermes Agent Google Workspace 연결]]
- 근거: Google 계정 연결을 CLI와 파일 중심 workflow로 풀어낸 실전 매뉴얼이라, 에이전트 친화적인 외부 서비스 연결 패턴으로 재사용 가치가 있었음.

- 결정: 신규 생성
- 대상: [[메시징 서버 스트레스 테스트 운영 원칙]]
- 근거: 테스트 대상/부하 생성 환경, 계층별 지표 해석, AI 보조의 역할 분리가 명확한 운영 workflow여서 별도 note로 분리하는 편이 적절했음.

### 중복 raw

- `raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법 - 출판형 다듬기.md`
- `raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md`
- `raw/아무도 AI를 배우고 싶어 하지 않는다 - 출판형 다듬기.md`
- `raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`
- 처리: 기존 원문과 동일 주제의 출판형 변주로 확인되어 새 wiki note를 만들지 않았음

## 2026-05-26

### Ingest

- 입력: `raw/Andrej Karpathy가 AI 코딩 에이전트의 고질병을 고치는 방법. 마크다운 파일 하나.md`, `raw/프로덕션 AI 에이전트를 위한 Agent Harness 구축.md`
- 생성: [[Agent Harness]]
- 수정: [[Harness Engineering]], [[Claude.md 운영 원칙]], [[AI 코딩 에이전트 검증 전략]], [[Meta-Harness]], [[에이전트 코딩 4원칙]]
- index 업데이트: 완료
- 남은 검토: `[[Agent Harness]]`는 구성 요소 프레임 자체는 안정적이지만, 벤치마크 수치와 특정 제품 사례는 시점 의존적이다. 후속 raw에서 state management·guardrails·subagent orchestration 쪽을 더 보강할 수 있음.

### 결정 기록

- 결정: 신규 생성
- 대상: [[Agent Harness]]
- 근거: 기존 wiki에 harness engineering 일반론과 meta-harness 연구는 있었지만, loop·tool·memory·context·prompt·parser를 한 장에 묶는 실행 인프라 노트가 없었음. framework와 harness의 차이를 정리하는 허브가 필요했음.

- 결정: 보강
- 대상: [[Harness Engineering]], [[Claude.md 운영 원칙]], [[AI 코딩 에이전트 검증 전략]], [[Meta-Harness]], [[에이전트 코딩 4원칙]]
- 근거: 두 raw는 새 도구 소개보다 기존 허브 노트의 경계를 구체화하는 성격이 강함. 특히 CLAUDE.md를 행동 제약 레이어로, verification을 harness 부품으로, meta-harness를 상위 최적화 루프로 읽는 연결이 명확해졌음.

- 입력: `raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md`, `raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md`, `raw/99%의 사람보다 더 나은 Harness Engineer를 만드는 법.md`
- 생성: [[AI 산출물 포맷 결정 트리]]
- 수정: [[Claude.md 운영 원칙]], [[Harness Engineering]], [[Agent Harness]], [[LLM Wiki 운영 패턴]], [[Agent Native Infrastructure]]
- index 업데이트: 완료
- 남은 검토: `[[AI 산출물 포맷 결정 트리]]`의 기본 원칙은 안정적이지만, HTML token 비용과 보안 trade-off는 도구·모델·배포 방식에 따라 달라질 수 있다. 실제 artifact 생성 사례 raw가 더 들어오면 보강 필요.

### 결정 기록

- 결정: 신규 생성
- 대상: [[AI 산출물 포맷 결정 트리]]
- 근거: HTML vs Markdown 논쟁을 취향이나 진영 싸움이 아니라 독자 기준 결정 트리로 바꾸는 프레임이 재사용 가치가 높았음. 기존 wiki에는 output format을 이런 방식으로 고르는 실무 규칙이 없었음.

- 결정: 보강
- 대상: [[Claude.md 운영 원칙]], [[Harness Engineering]], [[Agent Harness]], [[LLM Wiki 운영 패턴]], [[Agent Native Infrastructure]]
- 근거: 세 raw는 각각 행동 계약, 문서→하네스 진화, 산출물 포맷 선택을 다루지만 모두 "에이전트가 일하는 환경을 어떻게 설계할 것인가"라는 동일 허브로 수렴함. 새 도구 노트보다 기존 허브 보강이 더 적합했음.

- 입력: `raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md`, `raw/Agentic Product Design. 오늘 바로 자동화할 수 있는 5가지 디자인 작업.md`
- 생성: [[디자인 에이전트 5종]]
- 수정: [[DESIGN.md 운영 원칙]], [[AI 시대 디자인 시스템]], [[AI 코딩 에이전트 검증 전략]], [[Claude.md 운영 원칙]]
- index 업데이트: 완료
- 남은 검토: `[[디자인 에이전트 5종]]`은 예시 agent 구성이 범용 템플릿에 가깝다. 실제 조직별 tool stack, artifact 형식, 승인 절차 사례가 더 쌓이면 세분화 가능.

### 결정 기록

- 결정: 신규 생성
- 대상: [[디자인 에이전트 5종]]
- 근거: 원문이 단순 디자인 자동화 일반론이 아니라 연구 정리, 경쟁 인텔리전스, 문제 정의, 아이디어 발산, flow 설계의 다섯 agent를 구조적으로 제시했기 때문. `DESIGN.md`와 역할이 다른 workflow 노트로 분리하는 편이 재사용 가치가 높았음.

- 결정: 보강
- 대상: [[DESIGN.md 운영 원칙]], [[AI 시대 디자인 시스템]], [[AI 코딩 에이전트 검증 전략]], [[Claude.md 운영 원칙]]
- 근거: 첫 raw는 DESIGN.md의 9개 섹션을 실무 체크리스트로 구체화했고, 둘째 raw는 visual consistency 파일과 별개로 upstream design task agent의 필요를 보여 줌. 둘을 분리해 연결하는 편이 허브 구조를 더 선명하게 만듦.

- 입력: `raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md`, `raw/2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가.md`, `raw/더 빨리 배우고 싶다면 이 노트 정리 방식을 써라.md`
- 생성: [[생성형 AI 면접 평가 축]], [[AI 오픈소스 작업대]], [[학습용 노트 외부화 원칙]]
- 수정: [[AI 네이티브 사용자]], [[Competence Debt]], [[LLM Wiki 운영 패턴]], [[Agent Native Infrastructure]]
- index 업데이트: 완료
- 남은 검토: `[[AI 오픈소스 작업대]]`는 저장소·모델 스펙·스타 수가 빠르게 바뀌는 영역이라 `needs-review` 유지가 적절함. `[[생성형 AI 면접 평가 축]]`도 2026 시점 질문 분포를 요약한 것이므로 채용 시장 변화에 따라 재검토 필요.

### 결정 기록

- 결정: 신규 생성
- 대상: [[생성형 AI 면접 평가 축]], [[AI 오픈소스 작업대]], [[학습용 노트 외부화 원칙]]
- 근거: 세 raw 모두 단순 목록이 아니라 반복 질문을 압축하는 프레임이 있었음. 면접 40문항은 평가 축으로, GitHub 저장소 목록은 생태계 작업 표면으로, 손글씨 연구는 학습-위키 이중 단계 원칙으로 승격하는 편이 재사용 가치가 높았음.

- 결정: 보강
- 대상: [[AI 네이티브 사용자]], [[Competence Debt]], [[LLM Wiki 운영 패턴]], [[Agent Native Infrastructure]]
- 근거: 채용·학습·생태계 raw가 기존 허브의 빈칸을 메웠음. 특히 AI 네이티브 숙련의 채용 표면, durable skill을 만드는 노트 방식, agent-native 생태계의 공개 구현체를 연결할 수 있게 됨.

- 입력: `raw/Karpathy의 LLM Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다.md`, `raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md`, `raw/완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다.md`
- 생성: [[LLM Wiki 구현 선택지]]
- 수정: [[LLM Wiki 운영 패턴]], [[Agent Native Infrastructure]], [[Claude.md 운영 원칙]]
- index 업데이트: 완료
- 남은 검토: 세 raw는 같은 LLM Wiki 계열의 구현 변주라 기존 허브 보강 중심으로 처리함. `AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md`는 이미 ingest된 원문의 중복 표현본으로 별도 노트 생성 없이 보류.

### 결정 기록

- 결정: 신규 생성
- 대상: [[LLM Wiki 구현 선택지]]
- 근거: 기존 [[LLM Wiki 운영 패턴]]은 운영 철학과 루프를 설명했지만, app/package/skill/단일 instruction file 사이 구현 수준 trade-off를 설명하진 않았음. 후속 raw가 이 차이를 반복적으로 보여 줘 별도 노트 분리 가치가 생김.

- 결정: 보강
- 대상: [[LLM Wiki 운영 패턴]], [[Agent Native Infrastructure]], [[Claude.md 운영 원칙]]
- 근거: purpose.md, 2단계 ingest, review item, skill vs app 구분은 기존 위키 운영 철학을 더 실무적으로 만든다. 새 제품 소개보다 유지 습관을 추출하는 편이 vault 규칙에 맞음.

- 입력: `raw/하네스 엔지니어링. 다음 모델보다 더 중요한 조용한 코딩 스킬.md`, `raw/Supertonic 3. 99M 파라미터로 31개 언어를 말하는 초경량 TTS 모델.md`
- 생성: [[온디바이스 TTS]]
- 수정: [[Harness Engineering]], [[Agent Harness]], [[AI 오픈소스 작업대]], [[Agent Native Infrastructure]]
- index 업데이트: 완료
- 남은 검토: `[[온디바이스 TTS]]`는 모델 스펙·benchmark·라이선스가 변동성이 큰 영역이므로 `needs-review`로 시작. harness raw는 기존 허브를 더 생활형·운영형 언어로 보강하는 성격이 강해 신규 노트 대신 허브 보강으로 흡수함.

### 결정 기록

- 결정: 신규 생성
- 대상: [[온디바이스 TTS]]
- 근거: speech/TTS는 기존 wiki에서 비어 있던 축이지만, raw의 핵심은 개별 모델 리뷰보다 로컬 실행·비용·지연·프라이버시 trade-off였음. open-weight local AI 흐름과 연결되는 tool note로 승격 가치가 있었음.

- 결정: 보강
- 대상: [[Harness Engineering]], [[Agent Harness]], [[AI 오픈소스 작업대]], [[Agent Native Infrastructure]]
- 근거: harness raw는 "반복 실수를 영구 수정으로 바꾸는 습관"과 sensor 개념을 명료하게 보여 줬다. 기존 허브의 운영 감각을 더 선명하게 만드는 쪽이 적절했음.

- 입력: `raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md`
- 생성: 없음
- 수정: 없음
- index 업데이트: 완료
- 남은 검토: 2026-05-24에 ingest한 원문의 출판형 중복본으로 확인했다. raw는 보존하고, 별도 노트 생성 없이 기존 [[LLM Wiki 운영 패턴]] 계열 결과를 재사용했다.

### 결정 기록

- 결정: 중복 raw로 분류
- 대상: `raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md`
- 근거: 같은 주제의 원문 `raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md`가 이미 ingest되어 있고, 출판형 다듬기본은 표현과 구성만 다듬은 변주라 새 노트를 만들면 같은 개념을 반복 생성하게 된다.

- 결정: core 승격
- 대상: [[Claude.md 운영 원칙]], [[AI 네이티브 사용자]]
- 근거: 두 노트 모두 서로 다른 raw 다수에서 반복 확인되었고, 각각 coding agent 운영 규칙 허브와 agent 시대 역량 모델 허브 역할을 수행한다. [[Claude.md 운영 원칙]]은 여러 도구 노트와 검증/권한/하네스를 묶는 공통 인터페이스이고, [[AI 네이티브 사용자]]는 개인 숙련·면접·조직 운영 노트를 연결하는 상위 개념이라 핵심 노트 기준을 충족한다.

### Lint

- 실행 방식: Python 일회성 스크립트로 `wiki/*.md` 64개 노트의 frontmatter 필수값, 허용된 `type/status/core`, broken wikilink, 관련 노트 수, 고아 페이지, core 노트 index 등록 여부를 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: 중복 raw 색인 반영과 core 승격 2건 이후에도 구조 정합성을 재확인함

### 결정 기록

- 결정: core 승격
- 대상: [[Plan Mode 기반 AI 작업]], [[LLM Wiki 운영 패턴]]
- 근거: [[Plan Mode 기반 AI 작업]]은 보리스·카파시·OpenCode·Pi·Ralph Loop 자료를 가로지르며 구현 전 스펙/파일/테스트/권한 경계를 고정하는 공통 절차로 반복된다. [[LLM Wiki 운영 패턴]]은 여러 LLM Wiki raw를 묶고 이 vault의 ingest/query/lint 구조를 설명하는 운영 허브라 다른 노트 다수의 상위 워크플로 역할을 수행한다.

### Lint

- 실행 방식: Python 일회성 스크립트로 `wiki/*.md` 64개 노트의 frontmatter 필수값, 허용된 `type/status/core`, broken wikilink, 관련 노트 수, 고아 페이지, core 노트 index 등록 여부를 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: core 승격 2건과 index 승격 후보 정리 이후에도 구조 정합성을 재확인함

### 결정 기록

- 결정: core 승격
- 대상: [[병렬 에이전트 세션 운영]], [[Agent Harness]]
- 근거: [[병렬 에이전트 세션 운영]]은 Boris/OpenCode/Pi/Ralph Loop/CC101 자료를 가로지르며 역할 분리, write scope, 검증 경계라는 공통 운영 원칙으로 반복된다. [[Agent Harness]]는 production harness raw와 후속 harness raw를 묶어 loop, memory, tool, parsing, verification을 설명하는 실행 인프라 허브이며, [[Harness Engineering]], [[AI 코딩 에이전트 검증 전략]], [[Claude.md 운영 원칙]]을 잇는 중간 층 역할을 수행한다.

### Lint

- 실행 방식: Python 일회성 스크립트로 `wiki/*.md` 64개 노트의 frontmatter 필수값, 허용된 `type/status/core`, broken wikilink, 관련 노트 수, 고아 페이지, core 노트 index 등록 여부를 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: core 승격 2건과 후보 표 정리 이후에도 구조 정합성을 재확인함

### Lint

- 실행 방식: Python 일회성 스크립트로 `wiki/*.md` 64개 노트의 frontmatter 필수값, 허용된 `type/status`, broken wikilink, 관련 노트 수, 고아 페이지를 수동 점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: 신규 노트 2개와 보강 노트 5개 모두 index/log/역링크까지 확인함

### Ingest

- 입력: `raw/Code Is Not Cheap. How to Multiply Your AI’s Output With Software Fundamentals.md`, `raw/From faster pencil to AI Experience Architect. a designer’s path.md`, `raw/Good Design Doesn’t Happen By Default.md`, `raw/Structuring Agents, Skills, and MCPs 🤖🧩.md`, `raw/The Complete (Honest) Guide to OpenClaw.md`, `raw/The most important Design System in 2026 that designers missed was built by a developer..md`
- 생성: [[AI Experience Architect]], [[디자인 시스템 기본값]], [[OpenClaw]], [[shadcn-ui]]
- 수정: [[AI 시대 소프트웨어 펀더멘탈]], [[AI 시대 디자인 시스템]], [[에이전트 확장 3계층]], [[AI 오픈소스 작업대]]
- index 업데이트: 완료
- 남은 검토: [[OpenClaw]], [[shadcn-ui]]는 수치·생태계 변화가 빠른 tool note라 `needs-review` 유지가 적절함. [[AI Experience Architect]]는 역할 정의가 조직 구조에 따라 달라질 수 있어 후속 사례 축적이 필요함.

### 결정 기록

- 결정: 신규 생성
- 대상: [[AI Experience Architect]]
- 근거: 기존 wiki에는 디자인 시스템과 디자인 agent는 있었지만, 디자이너 역할이 화면 제작자에서 workflow·권한·조직 경계 설계자로 이동하는 변화를 독립 개념으로 설명하는 노트가 없었음.

- 결정: 신규 생성
- 대상: [[디자인 시스템 기본값]]
- 근거: [[AI 시대 디자인 시스템]]은 agent-readable design context를 다루지만, spacing·typography·token·component behavior를 왜 기본값으로 못 박아야 하는지를 설명하는 미시 개념 노트가 없었음.

- 결정: 신규 생성
- 대상: [[OpenClaw]], [[shadcn-ui]]
- 근거: 두 raw는 단순 제품 소개보다 2026년 agent runtime과 AI 생성 UI의 사실상 기본 foundation을 설명하는 반복 참조 가능한 tool note 성격이 강했음. 각각 self-hosted personal agent runtime과 code-first default design system 축을 대표함.

- 결정: 보강
- 대상: [[AI 시대 소프트웨어 펀더멘탈]], [[AI 시대 디자인 시스템]], [[에이전트 확장 3계층]], [[AI 오픈소스 작업대]]
- 근거: 새 raw들은 완전히 별개 주제라기보다 기존 허브에 더 정확한 사례와 경계를 추가하는 성격이 강했음. fundamentals에는 배수기 비유와 최신 사례를, design system 허브에는 기본값·shadcn·역할 이동을, 확장 3계층에는 tiered isolation과 centralized MCP를, 오픈소스 허브에는 OpenClaw를 보강하는 편이 구조적으로 적절했음.

### Lint

- 실행 방식: Python 일회성 스크립트로 신규/수정 8개 노트의 frontmatter, sources, 관련 노트 수, wikilink 존재 여부를 점검하고 `wiki/index.md`/`wiki/log.md` 반영 후 전체 링크 정합성을 재확인
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개
- 관련 노트 2개 미만 문서: 0개
- 고아 페이지: 0개
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 신규 노트 4개를 기존 핵심 허브와 상호 연결하고, 변동성이 큰 tool note는 `needs-review`로 표시함

### Ingest

- 입력: 동일 6개 raw에 대한 후속 구조화 보강
- 생성: [[AI 디자인 역할 맵]]
- 수정: [[AI 시대 디자인 시스템]], [[AI Experience Architect]], [[디자인 에이전트 5종]], [[OpenClaw]], [[shadcn-ui]], `wiki/index.md`
- index 업데이트: 완료
- 남은 검토: [[AI 디자인 역할 맵]]은 반복 raw가 더 쌓이면 core 승격 후보가 될 수 있음. [[OpenClaw]], [[shadcn-ui]]는 여전히 변동성이 높아 `needs-review` 유지.

### 결정 기록

- 결정: 신규 생성
- 대상: [[AI 디자인 역할 맵]]
- 근거: 디자인 시스템, DESIGN.md, task agent, AI Experience Architect가 각각 따로 존재해 관계를 한눈에 보기 어려웠음. 네 층을 한 장의 운영 계층으로 묶는 허브가 필요했음.

- 결정: 보강
- 대상: [[AI 시대 디자인 시스템]], [[AI Experience Architect]], [[디자인 에이전트 5종]], [[OpenClaw]], [[shadcn-ui]]
- 근거: 디자인 쪽 노트는 상하위 관계를 명시해 검색성과 재사용성을 높였고, tool note는 “언제 읽어야 하는가”와 인접 노트와의 차이를 적어 참조 비용을 줄였음.

### Lint

- 실행 방식: Python 일회성 스크립트로 전체 wiki frontmatter, status/type, related notes, wikilink, orphan 여부를 재점검
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개
- 관련 노트 2개 미만 문서: 0개
- 고아 페이지: 0개
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 신규 허브 1개와 보강 노트 5개를 index/log까지 연결하고 상태 정합성을 재확인함

### Ingest

- 입력: 동일 6개 raw와 후속 허브 정리 작업
- 생성: [[AI 기본값 구현체]]
- 수정: [[AI 디자인 역할 맵]] (core 승격), [[AI 시대 디자인 시스템]], [[AI 오픈소스 작업대]], [[OpenClaw]], [[shadcn-ui]], `wiki/index.md`
- index 업데이트: 완료
- 남은 검토: [[AI 기본값 구현체]]는 시기별 구조 해석 성격이 있어 후속 도구 사례가 더 쌓이면 evergreen 검토가 가능함.

### 결정 기록

- 결정: core 승격
- 대상: [[AI 디자인 역할 맵]]
- 근거: 4개 raw를 묶고, [[AI 시대 디자인 시스템]], [[디자인 시스템 기본값]], [[DESIGN.md 운영 원칙]], [[디자인 에이전트 5종]], [[AI Experience Architect]]를 이해하는 허브 역할을 수행해 핵심 노트 기준을 충족함.

- 결정: 신규 생성
- 대상: [[AI 기본값 구현체]]
- 근거: [[shadcn-ui]]와 [[OpenClaw]]를 개별 제품 노트로만 두면 "왜 이런 도구가 사실상 기본값이 되는가"를 설명하기 어려웠음. 기본 구현체가 생태계 분포와 프로토콜 통합으로 굳어지는 패턴을 비교 허브로 분리할 가치가 있었음.

### Lint

- 실행 방식: Python 일회성 스크립트로 전체 wiki frontmatter, related notes, wikilink, core note index 등록 여부를 재점검
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개
- 관련 노트 2개 미만 문서: 0개
- 고아 페이지: 0개
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: core 승격 1건과 비교 허브 1건 추가 후 구조 정합성을 재확인함

### Ingest

- 입력: 동일 6개 raw와 후속 runtime 구조화 작업
- 생성: [[AI 에이전트 런타임 역할 맵]]
- 수정: [[Agent Native Infrastructure]] (core 승격), [[에이전트 확장 3계층]], [[Agent Harness]], [[AI 오픈소스 작업대]], [[OpenClaw]], [[Claude Code 오케스트레이션]], `wiki/index.md`
- index 업데이트: 완료
- 남은 검토: [[에이전트 확장 3계층]]은 개념 허브로서 강하지만 제품 경계 변화가 빨라 추가 runtime raw 축적 후 core 검토가 적절함.

### 결정 기록

- 결정: core 승격
- 대상: [[Agent Native Infrastructure]]
- 근거: 여러 raw에서 반복 확인됐고, CLI·API·schema·문서·권한을 agent가 직접 실행 가능한 형태로 바꾸는 상위 개념으로 다수 노트를 연결한다. 인바운드 링크와 허브 역할 모두 core 기준을 충족함.

- 결정: 신규 생성
- 대상: [[AI 에이전트 런타임 역할 맵]]
- 근거: [[에이전트 확장 3계층]], [[Agent Harness]], [[Agent Native Infrastructure]], [[AI 오픈소스 작업대]], [[OpenClaw]], [[Claude Code 오케스트레이션]]가 모두 중요하지만 각각 다른 층을 설명해 한눈에 관계를 보기 어려웠음. 런타임 전체를 계층으로 묶는 운영 허브가 필요했음.

### Lint

- 실행 방식: Python 일회성 스크립트로 전체 wiki frontmatter, related notes, wikilink, core note index 등록 여부를 재점검
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개
- 관련 노트 2개 미만 문서: 0개
- 고아 페이지: 0개
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: runtime 허브 1개와 core 승격 1건 반영 후 전체 정합성을 재확인함

### Ingest

- 입력: 동일 raw에 대한 상위 허브 정리 작업
- 생성: [[AI 네이티브 작업 시스템]]
- 수정: [[에이전트 확장 3계층]] (evergreen 승격), [[AI 네이티브 사용자]], [[AI 디자인 역할 맵]], [[AI 에이전트 런타임 역할 맵]], [[AI 코딩 에이전트 검증 전략]], `wiki/index.md`
- index 업데이트: 완료
- 남은 검토: [[AI Experience Architect]]는 여전히 시기 해석 성격이 강해 `needs-review` 유지가 적절함. [[OpenClaw]], [[shadcn-ui]]도 제품 변화가 빨라 그대로 유지함.

### 결정 기록

- 결정: 신규 생성
- 대상: [[AI 네이티브 작업 시스템]]
- 근거: 사용자 숙련 허브, 디자인 허브, 런타임 허브, 검증 허브가 모두 생겨 상위 묶음이 가능해졌음. 이들을 한 장으로 묶는 최상위 작업 시스템 노트가 생기면 검색성과 재사용성이 크게 좋아짐.

- 결정: 상태 조정
- 대상: [[에이전트 확장 3계층]]
- 근거: 제품 경계 변화는 빠르지만, Skill·MCP·Tool Calling의 책임 분리는 여러 raw에서 반복 확인된 안정적 개념이라 `evergreen`으로 올릴 수 있었음. 다만 core 승격은 추가 사례 누적 뒤 재검토가 적절함.

### Lint

- 실행 방식: Python 일회성 스크립트로 전체 wiki frontmatter, status/type, related notes, wikilink, core note index 등록 여부를 재점검
- 깨진 wikilink: 0개
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개
- 관련 노트 2개 미만 문서: 0개
- 고아 페이지: 0개
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 상위 허브 1개와 상태 조정 1건 반영 후 전체 정합성을 재확인함

### 결정 기록

- 결정: 상태 조정
- 대상: [[디자인 시스템 기본값]], [[AI Experience Architect]], [[OpenClaw]], [[shadcn-ui]]
- 근거: [[디자인 시스템 기본값]]은 특정 제품 버전보다 오래가는 설계 원칙을 다뤄 `evergreen`으로 올릴 수 있었다. 반면 [[AI Experience Architect]]는 조직 구조와 채용 해석이 섞인 개념이라 `needs-review`가 적절했고, [[OpenClaw]], [[shadcn-ui]]는 제품·생태계 변화가 빨라 계속 `needs-review`로 두는 편이 안전했다.


## 2026-05-24

### Ingest

- 입력: `raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md`
- 생성: [[LLM Wiki 운영 패턴]]
- 수정: [[Software 3.0]], [[Thinking과 Understanding 분리]], [[Agent Native Infrastructure]], [[Claude.md 운영 원칙]]
- index 업데이트: 완료
- 남은 검토: `AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md`는 동일 주제의 중복 raw이므로 별도 ingest하지 않고 후속 중복 정리 기준만 검토. 원문에 나온 Cursor/Obsidian 자동 설정 예시는 도구 시점 정보라 본문에서는 운영 패턴 위주로 추출함.

### Lint

- 실행 방식: 수동 점검
- 깨진 wikilink: 0개 예상. 신규 노트의 관련 링크와 기존 노트의 역링크를 함께 추가함.
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개. 신규 노트에는 수치 문장을 두지 않음.
- 관련 노트 2개 미만 문서: 0개. 신규 노트는 5개 관련 노트를 연결함.
- 고아 페이지: 0개 예상. 신규 노트는 index와 4개 기존 노트에서 연결됨.
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 신규 노트를 workflow로 분리하고, `[[Software 3.0]]`의 예시 문단은 개념 설명 수준으로 유지함.

### 결정 기록

- 결정: 신규 생성
- 대상: [[LLM Wiki 운영 패턴]]
- 근거: 기존 [[Software 3.0]]에는 LLM Wiki가 예시 한 문단으로만 있어 재사용성이 낮았음. ingest/query/lint와 raw/wiki/schema 분리를 독립 workflow 노트로 분리하는 편이 vault 운영 규칙과 더 잘 맞음.

- 결정: 보강
- 대상: [[Software 3.0]], [[Thinking과 Understanding 분리]], [[Agent Native Infrastructure]], [[Claude.md 운영 원칙]]
- 근거: Karpathy의 LLM Wiki 글은 새 제품이나 도구 자체보다 기존 결론을 구체 사례로 강화하는 성격이 강함. 충돌 없이 cross-link와 설명 문단만 보강함.

- 입력: `raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md`
- 생성: [[Obsidian vault용 Slash Command 운영]]
- 수정: [[Claude Code 오케스트레이션]], [[AI 네이티브 사용자]], [[Claude.md 운영 원칙]]
- index 업데이트: 완료
- 남은 검토: 동일 제목의 `- 출판형 다듬기.md`는 중복 raw로 보류. `/ghost`처럼 "내 목소리"를 흉내 내는 command는 재사용성보다 개인 화자 의존성이 크므로 별도 핵심 노트로 승격하지 않음.

### Lint

- 실행 방식: 수동 점검
- 깨진 wikilink: 0개 예상. 신규 노트와 보강 노트 사이에 상호 링크 추가.
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개. 신규 노트는 구조와 command 예시 위주로 서술.
- 관련 노트 2개 미만 문서: 0개. 신규 노트는 5개 관련 노트를 연결함.
- 고아 페이지: 0개 예상. 신규 노트는 index와 3개 기존 노트에서 연결됨.
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 개인화 성격이 강한 `/ghost` 자체보다 slash command 설계와 vault 운영 인터페이스를 공통 workflow로 추출함.

### 결정 기록

- 결정: 신규 생성
- 대상: [[Obsidian vault용 Slash Command 운영]]
- 근거: 기존 wiki에는 slash command 일반론과 오케스트레이션은 있었지만, Obsidian vault를 대상으로 `/sync`, `/connect`, `/graduate`, `/challenge`를 묶어 설명하는 재사용 가능한 workflow 노트가 없었음.

- 결정: 보강
- 대상: [[Claude Code 오케스트레이션]], [[AI 네이티브 사용자]], [[Claude.md 운영 원칙]]
- 근거: 이 raw는 새 도구보다 기존 개념의 적용 사례로 읽히므로, 개인 지식 관리에서의 leverage 사례만 선택적으로 추가함.

- 입력: `raw/andrej-karpathy-skills-CLAUDE-번역.md`
- 생성: [[에이전트 코딩 4원칙]]
- 수정: [[Harness Engineering]], [[Claude.md 운영 원칙]], [[AI 코딩 에이전트 검증 전략]]
- index 업데이트: 완료
- 남은 검토: 원문은 짧은 행동 지침이라 수치나 버전 정보는 없지만, 실제 도구 문서라기보다 규범 문서다. 이후 유사 원칙이 다른 raw에서도 반복되는지 확인해 core 후보 여부를 검토할 수 있음.

### Lint

- 실행 방식: 수동 점검
- 깨진 wikilink: 0개 예상. 신규 노트와 3개 보강 노트 사이에 상호 링크 추가.
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개. 신규 노트는 행동 원칙과 예시만 포함.
- 관련 노트 2개 미만 문서: 0개. 신규 노트는 5개 관련 노트를 연결함.
- 고아 페이지: 0개 예상. 신규 노트는 index와 기존 노트들에서 연결됨.
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 기존 [[Harness Engineering]] 안의 4원칙 표를 독립적인 재사용 노트로 분리하고, 검증 원칙 연결을 [[AI 코딩 에이전트 검증 전략]]에 반영함.

### 결정 기록

- 결정: 신규 생성
- 대상: [[에이전트 코딩 4원칙]]
- 근거: 기존 [[Harness Engineering]]에는 4원칙이 표 수준으로만 포함되어 있었고, [[Claude.md 운영 원칙]]과 [[AI 코딩 에이전트 검증 전략]]에서 재사용하기 어려웠음. 규범 문서를 독립 workflow 노트로 분리하는 편이 더 검색 가능하고 연결 가치가 높음.

- 결정: 보강
- 대상: [[Harness Engineering]], [[Claude.md 운영 원칙]], [[AI 코딩 에이전트 검증 전략]]
- 근거: 이 raw의 내용은 새로운 도구보다 하네스의 최소 행동 규칙과 검증 기준을 명료화하는 데 적합함. 충돌 없이 기존 결론을 단단하게 보강함.

- 입력: `raw/아무도 AI를 배우고 싶어 하지 않는다.md`
- 생성: [[Competence Debt]]
- 수정: [[AI 네이티브 사용자]], [[Thinking과 Understanding 분리]], [[AI 시대 소프트웨어 펀더멘탈]]
- index 업데이트: 완료
- 남은 검토: MOOC 수료율 10% 미만, 3%, scrap learning 45%, framework 지식 반감기 2~3년은 검증 가능한 수치지만 현재 노트에는 직접 인용하지 않았다. 후속으로 교육/커리어 경제 관점 raw가 쌓이면 [[Competence Debt]]를 더 강한 종합 노트로 확장 가능.

### Lint

- 실행 방식: 수동 점검
- 깨진 wikilink: 0개 예상. 신규 노트와 3개 보강 노트 사이에 상호 링크 추가.
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개. 수치가 포함된 원문 문장은 이번 노트에서 직접 단정 문장으로 옮기지 않음.
- 관련 노트 2개 미만 문서: 0개. 신규 노트는 5개 관련 노트를 연결함.
- 고아 페이지: 0개 예상. 신규 노트는 index와 기존 노트들에서 연결됨.
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 커리어 불안 서사를 직접 반복하기보다 durable/perishable skill 구분과 competence debt 개념만 추출해 evergreen 노트로 압축함.

### 결정 기록

- 결정: 신규 생성
- 대상: [[Competence Debt]]
- 근거: 기존 wiki에는 AI 학습 압박을 커리어 불안, 최신성 신호, durable skill 상실의 관점에서 설명하는 노트가 없었음. `Thinking vs Understanding`과 `AI 펀더멘탈`을 잇는 중간 개념으로 재사용 가치가 높음.

- 결정: 보강
- 대상: [[AI 네이티브 사용자]], [[Thinking과 Understanding 분리]], [[AI 시대 소프트웨어 펀더멘탈]]
- 근거: 이 raw는 새 도구 소개보다 학습 동기와 역량 축적 구조를 비판하는 글이므로, 기존 노트들의 메타 해석을 강화하는 방향이 적절함.

- 입력: `raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어.md`
- 생성: [[Claude Code 세션 운영 명령어]]
- 수정: [[Claude Code 오케스트레이션]], [[AI 코딩 에이전트 검증 전략]], [[AI 네이티브 사용자]], [[Claude.md 운영 원칙]]
- index 업데이트: 완료
- 남은 검토: `/compact` 사용 횟수 127회, 절약 시간 200시간, `/model` 전환 시 3~4배 속도 향상 등은 작성자 개인 경험치라 본문에서는 정량 주장보다 운영 패턴 중심으로만 반영함.

### Lint

- 실행 방식: 수동 점검
- 깨진 wikilink: 0개 예상. 신규 노트와 4개 보강 노트 사이에 상호 링크 추가.
- 중복 제목: 0개
- 출처 없는 수치 문장: 0개. 개인 경험 수치는 직접 단정 문장으로 옮기지 않음.
- 관련 노트 2개 미만 문서: 0개. 신규 노트는 6개 관련 노트를 연결함.
- 고아 페이지: 0개 예상. 신규 노트는 index와 기존 노트들에서 연결됨.
- 30일 이상 미갱신 핵심 노트: 0개
- 조치: 개별 명령어를 나열하는 대신 세션 설정, 유지, 실행, 복구라는 네 계층으로 재구성해 evergreen workflow로 압축함.

### 결정 기록

- 결정: 신규 생성
- 대상: [[Claude Code 세션 운영 명령어]]
- 근거: 기존 wiki에는 Claude Code의 slash command를 제품/세션 운영 관점에서 체계화한 노트가 없었음. Obsidian용 command 노트와는 달리 범용 개발 세션 운영 패턴으로 분리 가치가 큼.

- 결정: 보강
- 대상: [[Claude Code 오케스트레이션]], [[AI 코딩 에이전트 검증 전략]], [[AI 네이티브 사용자]], [[Claude.md 운영 원칙]]
- 근거: 이 raw는 새로운 모델이나 도구보다 "command literacy가 생산성 격차를 만든다"는 실무 사례에 가깝다. 기존 결론을 충돌 없이 보강함.

- 입력: `raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법 - 출판형 다듬기.md`, `raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`, `raw/아무도 AI를 배우고 싶어 하지 않는다 - 출판형 다듬기.md`
- 생성: 없음
- 수정: 없음
- index 업데이트: 완료
- 남은 검토: 세 파일은 이미 ingest한 원문의 출판형 중복본이다. 원문 보존 원칙에 따라 raw는 유지하고, 추가 노트 생성 없이 기존 결과 재사용으로 처리함.

### 결정 기록

- 결정: 중복 raw로 분류
- 대상: `raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법 - 출판형 다듬기.md`, `raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`, `raw/아무도 AI를 배우고 싶어 하지 않는다 - 출판형 다듬기.md`
- 근거: 각각 이미 ingest된 원문의 표현만 다듬은 중복본으로, 별도 노트를 만들면 같은 개념을 반복 생성하게 됨. 색인과 로그에만 처리 사실을 남겨 미처리 raw 목록에서 제외하는 편이 적절함.

### Lint

- 실행 방식: Ruby 일회성 스크립트로 `wiki/*.md` 51개 노트의 frontmatter, 허용된 `type/status/core`, broken wikilink, 관련 노트 수, 고아 페이지, 핵심 노트 index 등록, 30일 이상 미갱신 핵심 노트 여부 점검
- 1차 결과: 오류 3개
- 오류 1: [[Andrew Ng 4 에이전틱 디자인 패턴]]의 `type: pattern`이 허용값 밖이어서 `type: concept`으로 정정
- 오류 2: [[Claude.md 운영 원칙]]의 예시 문자열 `wikilinks`가 broken wikilink로 잡혀 plain text 설명으로 수정
- 오류 3: [[Obsidian vault용 Slash Command 운영]]의 예시 문자열 `wikilinks`가 broken wikilink로 잡혀 plain text 설명으로 수정
- 재실행 결과: 오류 0개, 경고 0개, 고아 페이지 0개, 30일 이상 미갱신 핵심 노트 0개
- 조치: lint 중 수정된 노트의 내용과 메타데이터를 즉시 보정하고 재검증까지 완료함

### Lint

- 실행 방식: Ruby 일회성 스크립트로 `wiki/*.md` 54개 노트의 frontmatter, 허용된 `type/status/core`, broken wikilink, 관련 노트 수, 고아 페이지, 핵심 노트 index 등록, 30일 이상 미갱신 핵심 노트 여부 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개, 30일 이상 미갱신 핵심 노트 0개
- 조치: `Claude Code 세션 운영 명령어`, `Competence Debt`, `에이전트 코딩 4원칙` 추가 이후에도 구조 정합성 유지 확인

## 2026-05-17 (Sync 3 — raw 재감사, 상태 정합성, core 승격)

### Audit

- 실행 방식: `ctx_execute` JavaScript로 wiki 49개 노트(+index, log) frontmatter, 인바운드/아웃바운드 wikilink, 상태 분포, raw 재참조 점검
- raw 자료: 31개 모두 ingest 완료 (Sync 2에서 0개 미참조 확인됨)
- 1차 결과:
  - 총 노트: 49개 (Sync 2 대비 +3 — Sync 2에서 누락 집계된 [[Reasoning Models]], [[소프트웨어 민주화]], [[검증 가능한 도메인]])
  - 깨진 wikilink: 0개
  - 핵심 노트 6개 모두 evergreen
  - status 분포 불균형 — `draft: 35`개로 다수 노트가 검증 완료 후에도 draft로 남아 있음
  - 미로깅: [[Reasoning Models]], [[소프트웨어 민주화]], [[검증 가능한 도메인]] 3개가 2026-05-16에 생성되었으나 [[index]]의 ingest 행과 [[log]]의 2026-05-16 entry에 누락됨

### 상태 정합성 정정

- 35개 draft 노트를 검증 가능성과 변동성 기준으로 재분류
- **draft → evergreen** (22개): [[AI Slop]], [[AI 네이티브 사용자]], [[AI 네이티브 엔지니어링 조직]], [[Andrew Ng 4 에이전틱 디자인 패턴]], [[Agent Native Infrastructure]], [[Claude Code 권한 설계]], [[Claude Code 오케스트레이션]], [[Claude.md 운영 원칙]], [[Harness Engineering]], [[Lethal Trifecta]], [[LLM을 동물 지능처럼 다루지 않기]], [[LLM 정렬 기법]], [[Plan Mode 기반 AI 작업]], [[PPO와 정책 최적화]], [[Reasoning Models]], [[Thinking과 Understanding 분리]], [[강화학습 기초]], [[검증 가능한 도메인]], [[소프트웨어 민주화]], [[병렬 에이전트 세션 운영]], [[클라이언트 Secret 노출 방지]], [[웹 서버와 배포 기초]]
- **draft → needs-review** (13개): [[Loop와 Routines]], [[Meta-Harness]], [[Ralph Loop]], [[제품 오버행]], [[AI 시대 소프트웨어 펀더멘탈]], [[OpenAgent Team Mode]], [[Context Mode]], [[Graphify]], [[바선생]], [[RuboCop]], [[Neural Computer]], [[강한 모델로 덜 헤매기]], [[매퍼코 3스킬 워크플로우]]
- 정정 후 분포: `evergreen: 29` (6 core 포함), `needs-review: 20`, `draft: 0`

### 핵심 노트 승격

- [[Harness Engineering]] core: false → core: true
- 근거: 핵심 노트 기준 3개 충족
  - 다수 raw 반복: arxiv-2603.28052-meta-harness, 하네스 엔지니어링 65줄 CLAUDE.md, evolution-of-ai-agentic-patterns, anthropic-boris-cherny-interview, sequoia-ascent-2026-karpathy-ko 등 5개 이상 raw에서 시대 명칭으로 정착
  - 허브 역할: [[Claude.md 운영 원칙]], [[Meta-Harness]], [[Lethal Trifecta]], [[Andrew Ng 4 에이전틱 디자인 패턴]], [[Software 3.0]], [[Agentic 패턴 진화]] 등 10개 노트의 인바운드 hub
  - 실무 의사결정 기준: rippability 원칙, 65줄 CLAUDE.md 미니멀리즘, harness 구성 요소 정의

### Index 정정

- 2026-05-16 ingest 행에 누락된 [[Reasoning Models]], [[소프트웨어 민주화]], [[검증 가능한 도메인]] 추가
- 2026-05-16 ingest 행에 누락된 raw 자료(`sequoia-ascent-2026-karpathy-ko.md`, `강화학습-RL-초보자-가이드.md`, `ai-era-six-pitfalls-six-prescriptions-matt-pocock.md`) 추가 — 세 노트는 기존 raw들의 후속 분리/추출이므로 출처 정합성을 위해 명시
- 핵심 노트 표에 [[Harness Engineering]] (evergreen, 2026-05-17) 추가
- 승격 후보에서 [[Harness Engineering]] 제거. 추가로 [[Claude.md 운영 원칙]], [[병렬 에이전트 세션 운영]]을 core 후보로 명시
- 점검 대기 표에 신규 needs-review 8개([[AI 시대 소프트웨어 펀더멘탈]], [[Context Mode]], [[Graphify]], [[Meta-Harness]], [[OpenAgent Team Mode]], [[RuboCop]], [[바선생]], [[매퍼코 3스킬 워크플로우]]) 항목 추가

### 교차 링크 보강

- [[Software 3.0]] 관련 노트에 [[Reasoning Models]], [[소프트웨어 민주화]] 추가 (test-time compute 흐름과 민주화 패러럴 연결)
- [[바선생]] 관련 노트에 [[AI 네이티브 사용자]], [[Plan Mode 기반 AI 작업]], [[Claude Code 오케스트레이션]], [[매퍼코 3스킬 워크플로우]] 추가 — 인바운드 3 → 6개로 보강

### 충돌 점검

- 신규 raw 없음. Sync 2에서 확인된 충돌 없음 상태 유지.
- 보리스 1인 영상 발언(100% 자동 코드 작성, 하루 150 PR, 수천 에이전트 야간 운영)은 [[Loop와 Routines]], [[제품 오버행]]에서 외부 검증 자료 부재로 needs-review 유지
- evolution 자료의 KV-cache 비용 1/10, Copilot 사용자/점유율, Manus 사례는 2025-2026 시점 자료로 모델/벤치마크 변동 시 needs-review 갱신 필요

### 최종 Lint

- 총 노트: 49개 (+ index, log)
- 깨진 wikilink: 0개
- 중복 제목: 0개
- frontmatter 누락/유효성: 0개
- `관련 노트` 2개 미만: 0개
- 고아 페이지: 0개
- draft 상태: 0개 (목표 달성)
- 핵심 노트 status: 7개 모두 `evergreen` ([[Harness Engineering]] 추가)
- 30일 이상 미갱신 핵심 노트: 0개. [[AI 시대 디자인 시스템]] (updated 2026-05-07, D-10) 다음 주기 점검 대상

### 결정 기록

- 결정: 메타데이터 정정 (status 정합성)
- 대상: 35개 draft 노트
- 근거: 다수 노트가 ingest 후 검증되었음에도 status가 draft로 남아 lint·검색 신호를 흐림. 검증 가능성/변동성 기준으로 evergreen 또는 needs-review로 일괄 정정. 본문 결론은 변경하지 않고 frontmatter만 갱신.

- 결정: core 승격
- 대상: [[Harness Engineering]]
- 근거: 5개 이상 raw에서 시대 명칭으로 반복 정착, 10개 노트의 hub, 실무 의사결정 기준 제공. Sync 2에서 승격 후보로 등록 후 후속 raw에서 일관되게 강화됨.

- 결정: index ingest 행 정정
- 대상: 2026-05-16 ingest 행
- 근거: Sync 2 직전 작업으로 생성된 [[Reasoning Models]], [[소프트웨어 민주화]], [[검증 가능한 도메인]] 3개 노트가 ingest 행과 log entry에 누락됨. 노트 자체는 frontmatter/관련 노트/출처 모두 정상이지만 색인 누락으로 검색·추적이 약화됨. 정정 후 일관성 회복.

- 결정: 교차 링크 보강 (인바운드 추가만)
- 대상: [[Software 3.0]], [[바선생]]
- 근거: 인바운드 5 이하 노트의 hub 연결 강화. 본문 주장 변경 없이 `## 관련 노트` 섹션에만 wikilink 추가.

- 결정: schema/ 디렉터리 초기 템플릿 작성
- 대상: `schema/note-template.md`, `schema/frontmatter.md`, `schema/tags.md`
- 근거: AGENTS.md가 schema/에 frontmatter schema, note template, 태그 규칙을 두라고 명시하지만 디렉터리가 비어 있음. Sync 3에서 운영 규칙을 코드화해 다음 ingest의 일관성을 높임.

---

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

### Ingest

- 입력: 동일 6개 raw 및 기존 fundamentals raw에 대한 후속 상태 조정
- 생성: 없음
- 수정: [[AI 기본값 구현체]], [[AI 시대 소프트웨어 펀더멘탈]], [[AI Experience Architect]], `wiki/index.md`
- index 업데이트: 완료
- 남은 검토: [[AI Experience Architect]]는 역할 정의가 조직 구조와 규제 맥락에 따라 달라져 `needs-review` 유지. [[OpenClaw]], [[shadcn-ui]]도 변동성 높은 tool note로 계속 점검 대상 유지.

### 결정 기록

- 결정: 상태 승격
- 대상: [[AI 기본값 구현체]], [[AI 시대 소프트웨어 펀더멘탈]]
- 근거: 두 노트 모두 특정 제품 추천보다 반복되는 판단 프레임을 설명하는 개념 노트로 굳어졌다. 예시는 시점 의존적일 수 있지만, "기본값 구현체를 어떻게 읽을 것인가"와 "AI 시대에 왜 fundamentals가 더 중요해지는가"라는 핵심 구조는 여러 raw와 기존 허브에 안정적으로 연결된다.

- 결정: 보강
- 대상: [[AI Experience Architect]]
- 근거: 즉시 승격보다는 역할 필요성을 판별하는 질문을 추가해 재사용성을 높이는 편이 적절했다. 아직은 조직·규제 사례가 더 쌓여야 evergreen 승격 판단이 쉬워진다.

### Lint

- 실행 방식: Python 일회성 스크립트로 상태 변경 노트와 `wiki/index.md`를 수정한 뒤 전체 frontmatter, broken wikilink, 관련 노트 수, core index 등록 여부를 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: 승격 후보 표에서 [[AI 기본값 구현체]]를 제거하고, 점검 대기 사유를 수치/사례와 개념 프레임으로 분리해 정리함

### Ingest

- 입력: 동일 6개 raw에 대한 후속 비교 프레임 정리
- 생성: [[AI 기본값 수용과 오버라이드 전략]]
- 수정: [[OpenClaw]], [[shadcn-ui]], [[AI 기본값 구현체]], [[AI Experience Architect]], `wiki/index.md`
- index 업데이트: 완료
- 남은 검토: [[OpenClaw]], [[shadcn-ui]]는 여전히 제품·생태계 변화가 빨라 `needs-review` 유지. 다만 둘을 채택/override 프레임으로 읽는 상위 노트가 생겨 도구 노트 자체의 변동성을 흡수하기 쉬워졌다.

### 결정 기록

- 결정: 신규 생성
- 대상: [[AI 기본값 수용과 오버라이드 전략]]
- 근거: [[AI 기본값 구현체]]가 "무엇이 기본값처럼 굳는가"를 설명했다면, 실무에는 그 다음 단계인 "무엇을 그대로 받고 무엇을 다시 설계할까"가 필요했다. shadcn-ui와 OpenClaw를 한 프레임으로 비교하는 운영 노트가 재사용 가치가 높다.

- 결정: 보강
- 대상: [[OpenClaw]], [[shadcn-ui]], [[AI Experience Architect]]
- 근거: 세 노트 모두 정의만으로는 읽는 사람이 바로 적용하기 어려웠다. 채택 전 질문과 override 관점을 넣어, 개념 노트에서 실무 판단 노트로 한 단계 올렸다.

### Lint

- 실행 방식: Python 일회성 스크립트로 신규 노트 1개와 수정 노트 4개, `wiki/index.md` 반영 후 전체 frontmatter, broken wikilink, 관련 노트 수, 고아 페이지를 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: 변동성 높은 tool note를 직접 승격하지 않고, 상위 비교 프레임을 추가해 구조 안정성을 높임

### Ingest

- 입력: `raw/From faster pencil to AI Experience Architect. a designer’s path.md`의 후속 구조화 보강
- 생성: 없음
- 수정: [[AI Experience Architect]], `wiki/index.md`, `wiki/log.md`
- index 업데이트: 완료
- 남은 검토: 직함 명칭과 조직 배치는 계속 달라질 수 있으나, 노트의 핵심을 직함 유행이 아니라 위임 경계·review gate·책임 구조 설계 프레임으로 고정해 변동성을 낮춤.

### 결정 기록

- 결정: 상태 승격
- 대상: [[AI Experience Architect]]
- 근거: 이 노트는 더 이상 특정 2026년 역할 트렌드 소개에 머물지 않고, 디자인 조직이 AI를 도입할 때 반복해서 마주치는 승인 경계·권한 정책·fallback·audit trail 설계 문제를 묶는 개념 노트로 안정화됐다. 조직 이름은 달라도 질문 구조는 [[AI 디자인 역할 맵]], [[AI 코딩 에이전트 검증 전략]], [[AI 네이티브 작업 시스템]]과 함께 지속 재사용 가능하다.

### Lint

- 실행 방식: Python 일회성 스크립트로 상태 변경 노트와 `wiki/index.md` 수정 후 전체 frontmatter, broken wikilink, 관련 노트 수, 점검 대기 정합성을 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: [[AI Experience Architect]]를 승격 후보/점검 대기에서 제거하고 evergreen 노트로 유지함

### Ingest

- 입력: `raw/AI로_만든_제품이_안_팔리는_이유.md`, `raw/모든 DESIGN.md에 꼭 들어가야 할 9가지 섹션.md`, `raw/2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가.md`의 후속 구조화 보강
- 생성: 없음
- 수정: [[DESIGN.md 운영 원칙]], [[AI 오픈소스 작업대]], `wiki/index.md`, `wiki/log.md`
- index 업데이트: 완료
- 남은 검토: [[OpenClaw]], [[shadcn-ui]]처럼 개별 제품/spec가 빠르게 변하는 노트는 계속 `needs-review` 유지. 대신 상위 허브는 안정 프레임 중심으로 재정리해 승격함.

### 결정 기록

- 결정: 상태 승격
- 대상: [[DESIGN.md 운영 원칙]], [[AI 오픈소스 작업대]]
- 근거: 두 노트 모두 원래는 spec/저장소 변동성 때문에 `needs-review`였지만, 이번 보강으로 핵심을 개별 CLI·스타 수가 아니라 안정적인 운영 프레임에 두었다. DESIGN.md는 "token + rationale를 agent-readable하게 유지한다"는 원칙, AI 오픈소스 작업대는 "어떤 작업 표면이 공개 구현체로 표준화되는가"라는 생태계 허브로 읽을 수 있어 evergreen 유지가 가능하다.

### Lint

- 실행 방식: Python 일회성 스크립트로 상태 변경 노트 2개와 `wiki/index.md` 수정 후 전체 frontmatter, broken wikilink, 관련 노트 수, 고아 페이지를 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: [[DESIGN.md 운영 원칙]]을 점검 대기에서 제거하고, 개별 제품 변동성과 상위 프레임을 분리해 정리함

### Lint

- 실행 방식: 남은 `needs-review` 노트 전체를 수동 분류해 `wiki/index.md`의 점검 대기 표를 재작성하고, Python 일회성 스크립트로 전체 frontmatter, broken wikilink, 관련 노트 수, 고아 페이지를 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: 중복된 [[강한 모델로 덜 헤매기]] 항목을 통합하고, 누락돼 있던 [[생성형 AI 면접 평가 축]], [[온디바이스 TTS]]를 점검 대기에 반영했다. 또한 남은 `needs-review`를 도구·spec 변동성 / 단일 출처 / 모델·가격 변동성으로 재분류했다.

### 결정 기록

- 결정: 분류 정리
- 대상: `wiki/index.md`의 `## 승격 후보`, `## 점검 대기`
- 근거: 기존 표는 승격 후보와 변동성 이유가 섞여 있어, 왜 어떤 노트가 아직 `needs-review`인지 한눈에 파악하기 어려웠다. 남은 위험을 유형별로 묶고 core 우선 후보를 별도 분리해 다음 ingest 우선순위를 더 명확하게 만들었다.

### 결정 기록

- 결정: core 승격
- 대상: [[AI 기본값 수용과 오버라이드 전략]], [[API Key 관리 원칙]]
- 근거: [[AI 기본값 수용과 오버라이드 전략]]은 3개 raw를 가로질러 디자인 계층과 런타임 계층을 함께 읽게 하는 의사결정 프레임으로 굳었다. [[API Key 관리 원칙]]은 특정 도구 소개가 아니라 secret lifecycle 전체를 다루는 보안 체크리스트이며, [[Infisical 도입 전략]], [[클라이언트 Secret 노출 방지]], [[Claude Code 권한 설계]], [[Lethal Trifecta]]를 잇는 상위 허브 역할이 분명하다.

### Lint

- 실행 방식: core 승격 2건과 `wiki/index.md` 갱신 후 Python 일회성 스크립트로 전체 frontmatter, core 노트 index 등록 여부, broken wikilink, 관련 노트 수, 고아 페이지를 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: 승격 후보 표에서 두 노트를 제거하고 핵심 노트 표에 추가함

### 결정 기록

- 결정: core 승격
- 대상: [[Context Engineering]], [[디자인 에이전트 5종]]
- 근거: [[Context Engineering]]은 [[Harness Engineering]], [[Agent Harness]], [[Context Mode]], [[AI 에이전트 런타임 역할 맵]]을 잇는 공통 handoff 원칙으로 자리 잡았고, agent workflow를 읽는 데 필요한 상위 개념 역할이 분명하다. [[디자인 에이전트 5종]]은 [[AI 디자인 역할 맵]]의 task layer를 대표하며, upstream design work를 어떤 단위로 agent화할지 정하는 반복 질문에 답하는 허브가 되었다.

### Lint

- 실행 방식: core 승격 2건과 `wiki/index.md` 갱신 후 Python 일회성 스크립트로 전체 frontmatter, core 노트 index 등록 여부, broken wikilink, 관련 노트 수, 고아 페이지를 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: 승격 후보 표에서 두 노트를 제거하고 핵심 노트 표에 추가함

### 결정 기록

- 결정: core 승격
- 대상: [[Lethal Trifecta]]
- 근거: 이 노트는 특정 제품 기능이 아니라 에이전트 보안 위험을 세 가지 능력 조합으로 판별하는 상위 모델이다. [[Claude Code 권한 설계]], [[API Key 관리 원칙]], [[Harness Engineering]], [[병렬 에이전트 세션 운영]]을 읽을 때 공통 판단 기준을 제공하므로 핵심 노트 기준을 충족한다.

- 결정: 보강 유지
- 대상: [[AI 네이티브 엔지니어링 조직]]
- 근거: 조직 운영 프레임 자체는 중요하지만, 현재 서술에는 특정 발표와 인터뷰 기반의 강한 사례가 많이 섞여 있다. 이번에는 점검 질문과 충돌 메모를 보강하고, 추가 외부 사례가 쌓일 때 core 승격을 재검토하기로 했다.

### Lint

- 실행 방식: core 승격 1건과 보강 1건, `wiki/index.md` 갱신 후 Python 일회성 스크립트로 전체 frontmatter, core 노트 index 등록 여부, broken wikilink, 관련 노트 수, 고아 페이지를 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: [[Lethal Trifecta]]를 핵심 노트 표에 추가하고, [[AI 네이티브 엔지니어링 조직]]은 승격 후보로 유지하되 외부 검증 필요성을 명시함

### 결정 기록

- 결정: 후속 ingest 대기 묶음 추가
- 대상: `wiki/index.md`, [[AI 네이티브 엔지니어링 조직]]
- 근거: 남은 `needs-review`를 개별 노트 단위로만 보면 어떤 raw를 더 모아야 하는지 운영 우선순위가 흐려진다. 조직 운영 검증 / 도구·spec 업데이트 / 보안·비밀관리 / 연구·전망 검증 / 디자인 작업 체계의 다섯 묶음으로 정리해, 다음 ingest를 질문 단위가 아니라 증거 수집 단위로 진행할 수 있게 했다.

### Lint

- 실행 방식: `wiki/index.md`, [[AI 네이티브 엔지니어링 조직]], `wiki/log.md` 갱신 후 Python 일회성 스크립트로 전체 frontmatter, broken wikilink, 관련 노트 수, 고아 페이지, core 노트 index 등록 여부를 재점검
- 결과: 오류 0개, 경고 0개, 고아 페이지 0개
- 조치: `AI 네이티브 엔지니어링 조직`의 core 승격 조건을 명시적 증거 목록으로 바꾸고, 후속 ingest 우선순위를 index에 구조화했다.

## 2026-05-28 (Sync 5 — raw/wiki 정합성 재확인)

### Audit

- 실행 방식: raw/의 66개 파일명과 wiki/ 전체 노트 본문을 다시 대조하고, broken wikilink / orphan page / raw 미반영 여부를 재점검
- 결과: raw 미반영 0개, broken wikilink 0개, orphan page 0개
- 조치: 현재 raw ↔ wiki 매핑은 clean 상태로 확인됨

## 2026-05-28 (Sync 6 — needs-review triage)

### Audit

- 실행 방식: `status: needs-review` 노트 24개를 다시 훑어 `## 충돌` 유무를 점검하고, 빠져 있던 `[[매퍼코 3스킬 워크플로우]]`에 충돌 섹션을 보강
- 결과: needs-review 노트의 충돌 섹션 누락 0개
- 조치: 변동성/단일 출처/도구 의존 노트를 다음 검토 전에 스코프·가정·치환 가능성까지 명시하도록 정리함

## 2026-05-28 (Sync 7 — needs-review normalization)

### Audit

- 실행 방식: `status: needs-review` 노트 24개가 모두 `## 충돌`을 갖추었는지 재확인하고, index의 현재 점검 상태에 반영
- 결과: needs-review 충돌 섹션 누락 0개
- 조치: 검토 대기 노트의 스코프/가정/치환 가능성 메타데이터가 모두 기록된 상태로 정규화됨
