---
aliases:
- CLAUDE.md
- Claude.md
- AGENTS.md
- Claude.md-운영-원칙
core: true
created: 2026-05-06
sources:
- Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!
- 보리스_클로드코드_실무_사용법
- Claude-Code-실무활용법-보리스-관점-정리
- AI로_만든_제품이_안_팔리는_이유
- opencode-masterclass-summary
- pi-coding-agent-overview
- cc101_axwith_ko
- 하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유
- Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법
- andrej-karpathy-skills-CLAUDE-번역
- Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어
- Andrej Karpathy가 AI 코딩 에이전트의 고질병을 고치는 방법. 마크다운 파일 하나
- 99%의 사람보다 더 나은 Harness Engineer를 만드는 법
- CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다
- AI가 당신처럼 글을 쓰게 만드는 가장 좋은 방법
- Claude 900달러 컨설턴트를 대체하는 10가지 프롬프트
- raw/Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요.md
- raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md
- https://opencode.ai/docs/rules/
- https://pi.dev/docs/latest/usage
status: evergreen
tags:
- llm
- agent
- claude-code
type: workflow
updated: 2026-07-18
---
# Claude.md 운영 원칙

## 한 줄 정의
Claude.md는 [[Claude Code]], [[OpenCode]] 또는 Claude 데스크톱 앱의 Cowork 모드 같은 에이전트에게 프로젝트 구조, 제약 조건, 거부 기준을 명시하여 반복되는 온보딩 과정 없이 답변 품질을 극대화하는 AI 행동 계약(Behavioral Contract) 문서다.

## 핵심 요지
- **행동 계약(Behavioral Contract)으로서의 본질**: 설정 파일이라기보다 새 팀원에게 주는 업무 매뉴얼에 가깝다. 복잡한 추상화 레이어를 겹겹이 쌓는 대신, 저장소 루트의 평범한 영어 문장만으로 에이전트가 묵시적 가정이나 과잉 엔지니어링을 피하도록 강제할 수 있다.
- **Forrest Chang의 바이럴 레포지토리**: [[Andrej Karpathy]]의 에이전트 행동 관찰을 바탕으로 정리된 단 한 장의 마크다운 파일(`CLAUDE.md`)이 GitHub에서 스타 9만 1천 개를 받으며 주목받았다. 이는 도구 자체보다 '행동 가드레일 공유'라는 본질적인 문제를 해결하려는 개발자들의 요구를 방증한다.
- **거부하는 것(Reject) 중심 설계**: 모호한 긍정적 지침("전문적으로 써줘") 대신 싫어하는 문체, 쓰지 않을 단어, 피해야 할 결과물 등 "Hard Nos" 가드레일을 촘촘하게 규정할 때 최상의 답변이 나온다.
- **Cowork 기능과의 연동**: 데스크톱 앱의 Cowork 탭을 통해 프로젝트 폴더 권한을 부여하면, 매 대화 세션마다 .md 파일을 복사/붙여넣기 할 필요 없이 에이전트가 폴더 내 마크다운 규칙을 자동으로 파악한다.
- **인터뷰 기반 DNA 추출**: 맨땅에서 작성을 시작하는 대신 에이전트에게 40~50개의 질문을 하나씩 던지게 하는 인터뷰 방식을 통해 사용자의 구체적 사례가 반영된 맞춤형 .md 프로필을 자동으로 도출한다.
- Forrest Chang이 [[Andrej Karpathy]]의 관찰을 토대로 만든 65줄의 `CLAUDE.md`는 GitHub에서 스타 9만 개 이상을 기록하며 바이럴을 탔다.
- 이 바이럴은 도구의 성공이라기보다 에이전트 코딩의 3대 고질병인 '조용한 가정', '과도한 복잡성', '범위 확장(Scope creep)'이라는 근본 문제에 대한 개발자들의 투표다.
- [[CLAUDE.md]]는 행동 맥락(Behavioral Context)이지 계약이 아니므로 특정 행동을 보장하지 않고 분포를 개선할 뿐이며, 프로젝트 고유 규칙을 대체하지 않는 메뉴(Base)로 사용해야 한다.
- 컨텍스트 윈도우 낭비와 인지 부하를 줄이기 위해 [[CLAUDE.md]]의 파일 크기는 약 2,500 토큰 이내의 슬림한 분량으로 유지해야 하며, 너무 길어지면 오히려 지침 준수율이 저하되는 역효과가 난다. (출처: raw/Claude-Code-실무활용법-보리스-관점-정리.md)
- 스마트 에이전트 프로필을 고도화할 때는 에이전트가 40~50개의 질문을 순차적으로 던지는 인터뷰식 프롬프트를 가동하고, 사용자가 절대 수용하지 않을 부정 가드레일('Reject' 타겟)을 정의하는 것이 핵심이다. (출처: raw/Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요.md)
- 에이전트가 코드를 완성하는 것보다, 구현된 코드가 제대로 런타임에 작동하는지 검증하는 루프(Verification Loop)를 가동시키는 구조가 실무 성패를 결정한다. (출처: 보리스_클로드코드_실무_사용법.md)
- 안전을 위해 Yolo Permission 자동 실행 모드를 금지하고, 린터/포매터를 최종 안전지대로서 결합하여 에이전트의 구문 스타일 결함을 자동 해결하도록 세팅해야 한다.

## 상세

### 1. 전역 메모리와 로컬 instructions의 결합 및 두 마크다운의 구성
- **프로젝트 루트 (`CLAUDE.md`)**: 기술 스택, 빌드/테스트 명령, 프로젝트 구조, 코딩 규칙을 규정한다. context window 낭비를 줄이기 위해 60줄 이하의 핵심 지침 위주로 조립하는 것이 권장된다.
- **전역 설정 (`~/.claude.json` / `/memory` 명령어)**: 프로젝트 범위를 넘어 전역적으로 적용할 규칙을 설정한다.
- **`.claudeignore`**: `.gitignore`처럼 에이전트가 탐색하거나 읽지 않아야 할 파일(보안 비밀 키, 빌드 로그 등)을 지정한다.

### 2. [[CLAUDE.md]]에 넣어야 할 6가지 핵심 구성 요소
웹/모바일 프로젝트 시 `CLAUDE.md`는 아래 내용을 60줄 내외로 함축하여 기재해야 한다[raw/[[CLAUDE.md]] vs [[DESIGN.md]]. What to Put in Each for [[Claude Code]].md](file:///Users/railscraft/[[Obsidian]]/raw/[[CLAUDE.md]] vs [[DESIGN.md]]. What to Put in Each for [[Claude Code]].md):
1. **프로젝트 개요 (Project overview)**: Next.js, TS 등 기술 스택과 어플리케이션의 본질에 대한 짧은 요약.
2. **명령어 (Commands)**: `dev`, `typecheck`, `lint`, `test`, `build` 등 앤트로픽이 적극 권장하는 빌드/검증 스크립트 모음.
3. **아키텍처 및 주요 파일 경로 (Architecture)**: 에이전트가 변경할 파일이 들어갈 라우트, 컴포넌트, 공유 타입 등의 디렉토리 구조 맵.
4. **구현 규칙 (Implementation rules)**: TypeScript 필수 적용, 자동 생성된 파일 수정 금지 등 핵심 코딩 가이드 5~10가지.
5. **[[워크플로]]우 및 검증 (Workflow and verification)**: 변경 사항 적용 순서(기존 패턴 검토 $\rightarrow$ 최소 수정 $\rightarrow$ 로컬 테스트/타입 체크)에 따른 [[검증 루프]] 지침.
6. **디자인 관련 운영 지침 (UI and design instructions)**: UI 작업 착수 시 `DESIGN.md`를 [[단일 진실 공급원]]으로 읽게 하는 가이드.

### 3. [[DESIGN.md]] 임포트 방식과 조건부 연동 전략
`CLAUDE.md` 내에 `@DESIGN.md`를 상시 기입하여 직접 로드하는 방식은 프로젝트 성격에 따라 비효율을 초래할 수 있다[raw/[[CLAUDE.md]] vs [[DESIGN.md]]. What to Put in Each for [[Claude Code]].md](file:///Users/railscraft/[[Obsidian]]/raw/[[CLAUDE.md]] vs [[DESIGN.md]]. What to Put in Each for [[Claude Code]].md).

#### ① 무조건적인 `@DESIGN.md` 임포트
- **사용 시점**: 프로젝트가 주로 프론트엔드 작업이나 디자인 프로토타입 위주이며 `DESIGN.md` 파일 크기가 매우 작을 때.
- **단점**: 백엔드 로직 수정이나 단위 테스트를 실행할 때도 항상 [[디자인 시스템]] 토큰과 가이드를 컨텍스트에 불러오므로, 무관한 정보로 토큰 윈도우가 낭비된다.

#### ② 조건부 지침 연동 (권장)
- **사용 시점**: `DESIGN.md`가 매우 상세하고 길 때, 백엔드 코드가 상당량 존재할 때, 대다수 세션에서 디자인 컨텍스트가 불필요할 때.
- **예시 지침 구조**:
  ```markdown
  ## Design system
  UI, 스타일링, 인터랙션, 웹 접근성, 혹은 반응형 레이아웃을 수정하는 모든 작업의 경우:
  1. 구현에 앞서 `DESIGN.md`를 먼저 읽는다.
  2. 이 문서를 단일 진실 공급원으로 취급한다.
  3. 새 컴포넌트를 짜기 전에 기존 컴포넌트 유무를 먼저 확인한다.
  ```

### 4. Forrest Chang의 4가지 행동 원칙 ([[Andrej Karpathy]]의 관찰 기반)
에이전트가 기본적으로 보일러플레이트를 과도하게 생성하거나 무작정 파일 전체를 포맷팅하는 실패 동작을 방지하기 위한 핵심 규칙이다.

1. **코딩하기 전에 먼저 생각하라 (Think before coding)**:
   - 추론 도중 가정을 소리 내어 말하고, 요청이 모호하면 즉시 질문하여 확인한다.
   - 헷갈릴 때 자의적으로 해석하여 잘못된 방향으로 코드를 전개하지 않고, 어떤 지점이 불분명한지 구체화하여 제시한다.
2. **단순함을 먼저 택하라 (Choose simplicity first)**:
   - 문제를 해결하는 최소한의 코드만 작성한다.
   - 향후 발생할지 모르는 요구사항에 대비한 추측성 추상화나 불필요한 아키텍처적 유연성을 일절 배제한다. 항상 "시니어 엔지니어가 이 코드를 보고 과하게 복잡하다고 비판할 것인가?"를 자문하도록 강제한다.
3. **외과적으로 수정하라 (Make surgical edits)**:
   - 요청받은 기능 수정 영역만 정밀하게 건드린다.
   - 주변 코드 스타일을 임의로 고치거나, 정상 작동하는 무관한 함수를 리팩토링하거나, 전체 파일에 포맷터/타입 힌트를 붙이는 범위 확장(Scope creep)을 엄격하게 금지한다.
4. **목표 중심으로 실행하라 (Act target-oriented)**:
   - 코드 작성을 시작하기 전에 모호한 비즈니스 요청을 검증 가능한 기술적 목표로 전환한다.
   - 예컨대 "검증 로직 추가"라는 태스크는 "잘못된 입력값에 대응하는 테스트 케이스를 우선 작성하고 통과시키기"로 구체화되어야 한다.

### 3. 전문 영역별 5대 프로필 유형
취향과 미학, 혹은 도메인 지식의 엄밀성이 강하게 작동하는 워크스페이스는 아래의 특화 프로필(`.md`)로 나누어 Cowork 폴더에 보관한다.

#### ① 비즈니스 맥락 프로필 (Business Context)
- 비즈니스 가치, 실제 제품 어조, 팀 구조, 주기적 난제, 선호하는 이메일 스타일, 재무/정산 지표, 타협할 수 없는 비즈니스 금기 사항을 정의한다.

#### ② 고유한 글쓰기 문체 프로필 (Writer's Voice)
- 작문 장르, 가장 만족스러운 대표 문단 예시, 시그니처 단어, AI 번역투 등 혐오 단어 목록, 동경하는 작가의 필살기, 줄글/불릿 레이아웃 선호도를 포함한다.

#### ③ 클라이언트 업무 및 프로젝트 관리 (Client & Project Work)
- 온보딩 필수 자료, 인도물 완료(Done) 판정 기준, 고객 소통 톤앤매너, 프로젝트 범위 초과(Scope Creep) 시 대처 공식, 최우선 의사결정 지침을 명시한다.

#### ④ 크리에이터 아이덴티티 프로필 (Content Creator)
- 채널 정보, 실 활성 타겟 오디언스 프로필, 핵심 콘텐츠 기둥(Content Fillers), 킬러 콘텐츠 및 실패한 콘텐츠 원인 분석, 모방 금지 트렌드를 규정한다.

#### ⑤ 데이터 분석 및 연구원 프로필 (Analyst & Researcher)
- 최종 독자층 및 핵심 의문점, 목소리 대신 숫자를 신뢰하는 통계적 유의성, 신뢰도 및 출처 명시 기준, 가독성 높은 표 서식, 피해야 할 모호한 해석(자의적 주장)을 포함한다.

### 4. 적대적 프레이밍 (Adversarial Framing)
- 모델의 지나치게 공손하고 안전한 '기본 필터'를 해제하고 900달러 상당의 고급 컨설턴트급 사고력을 끌어내기 위한 프롬프트 전략이다.
- 페르소나의 범위를 극도로 좁히고("스타트업 재무 모델 200개를 검토해 본 CFO"), "PR 리뷰에서 가차 없이 뜯어보고 거절하라"는 등의 적대적 비평을 강제한다.

## 실무 템플릿 3종 (CC101 가이드)

### 템플릿 A — 리서치 워크스페이스
- 원문 자료는 `sources/` 폴더에 저장, 파일명: `YYYY-MM-DD_출처_제목.md`
- 모든 수치 및 주장에는 출처 및 신뢰도 구분(A/B/C) 표기
- 결과물 구조: 5줄 요약 → 핵심 인사이트 5개 → 반대 근거/리스크 3개 → 다음 액션 3개

### 템플릿 B — 콘텐츠 제작 워크스페이스
- 브랜드 톤: `voice_profile.md`를 우선 참고하며, 과장 금지 ("완벽/혁명/무조건" 등 금지 단어 지정)
- 채널별 포맷: 블로그(제목 3안 → 본문 → 체크리스트 → CTA), 뉴스레터(3줄 요약 → 600~900자 본문)
- 파일 출력 규칙: 초안은 `drafts/`, 최종본은 `final/` 폴더에 버전/검수자/발행일 메타데이터 표기

### 템플릿 C — 비즈니스 운영 워크스페이스
- 회사/제품 맥락과 자주 쓰는 용어 정의 누적
- 커뮤니케이션 스타일: 이메일(3문단 구조), 고객 불만 응대(공감 → 사실 확인 → 해결 옵션)
- 보안: 개인정보/결제정보 마스킹, 외부 공유 전 "대외비 문구/고객명" 자동 점검

### Forrest Chang 바이럴 레포의 의의

단 65줄의 마크다운 파일 하나가 바이럴을 탄 이유는, 복잡한 파이프라인이나 파인튜닝을 설계하는 대신 에이전트가 묵시적 가정이나 과잉 엔지니어링을 피하도록 강제하는 '행동 계약'으로서의 실용성 때문이다. 저장소 루트에 위치하여 에이전트가 세션 시작 시 자동으로 로드하고 일관성 있게 규율을 따르도록 만든다.

### 적정 크기 제한 및 준수율 관리
- 프로젝트 루트 규칙 문서가 200줄 또는 2,500 토큰을 넘어가면 에이전트의 지침 준수 능력이 떨어집니다.
- 이를 방지하기 위해 일반 프로젝트 룰은 60줄 이하로 압축하고, 구체적인 도메인 규칙이나 문체 가이드라인은 `voice_profile.md` 등의 특화 프로필 파일로 분리하여 필요한 경우에만 참조(Refer)하도록 레이어드 아키텍처를 취합니다.

### 오래 걸리는 비동기식 작업의 3대 검증 관리 체계

1. **자기 검증용 테스트 (Self-Verification)**:
   - 에이전트에게 단순 기능 추가 외에 '테스트 코드 병행 작성'과 '테스트 실행 결과를 직접 모니터링하여 오류를 스스로 분석 및 복구할 것'을 지시에 포함하여 에이전트가 테스트 통과까지 계속 수정하는 루프를 구성한다 [raw/보리스_클로드코드_실무_사용법.md#L35](file:///Users/railscraft/[[Obsidian]]/raw/%EB%B3%B4%EB%A6%AC%EC%8A%A4_%ED%81%B4%EB%A1%9C%EB%93%9C%EC%BD%94%EB%93%9C_%EC%8B%A4%EB%AC%B4_%EC%82%AC%EC%9A%A9%EB%B2%95.md#L35).

2. **자동 스톱훅 (Stop Hook)**:
   - 에이전트가 파일 작성을 완료하고 쉘 출력을 멈추는 분기점마다 빌드 및 타입 린트 스크립트(`npm run build && npm test && npm run lint` 등)를 강제 발동하여 드리프트를 사전에 필터링하는 구조를 결합한다.

3. **실시간 UI 검증**:
   - 웹 어플리케이션 개발 시 에이전트가 생성한 화면을 직접 시각화 검증할 수 있도록 스크린샷 렌더러 또는 Chrome DevTools MCP 등의 브라우저 자동화 도구를 바인딩하여 뷰 테스트를 확인하도록 안내한다.

## 예시

### 문체 프로필 연동 후 지시 예시
사용자 전용 폴더에 `voice_profile.md`를 넣어두고 Cowork를 켠 상태로 아래와 같이 짧게 작업만 지시한다.
```text
뉴스레터 Prosper 다음 호 초안을 작성해 줘.
​
(이 작업을 수행하기 전에 먼저 동일 폴더 안의 voice_profile.md 파일을 꼼꼼히 정독하고 지침을 엄격하게 적용해 줘.)
```

### [[CLAUDE.md]]의 4대 고질병 방어 가이드라인

- **코딩 전 생각**: 헷갈릴 때 임의 해석하여 잘못된 코드를 전개하지 말고, 어떤 지점이 불분명한지 질문을 던질 것.
- **단순함 선택**: '시니어 엔지니어가 이 코드를 보고 과하게 복잡하다고 비판할 것인가?'를 자문할 것.
- **외과적 수정**: 요청 영역만 정밀하게 건드리고 주변 무관 파일 리팩토링이나 포맷터 실행을 엄격히 금지할 것.
- **목표 중심 실행**: '검증 추가'를 '실패하는 테스트를 먼저 쓰고 통과시키기'로 구체화할 것.

- **인터뷰 기반 DNA 추출 프롬프트**:
  에이전트에게 빈 화면에서 [[CLAUDE.md]]를 직접 설계하라고 지시하기보다, `AskUserQuestion` 등을 통해 사용자의 실제 사례와 거부 항목을 수집하는 40~50문항의 인터뷰 프롬프트를 실행해 작성합니다.

### 린터/포매터 최종 파이프라인 결합 예제

에이전트가 스타일 오류나 미세한 신택스 문제로 빌드 실패(CI)를 초래하지 않도록 `.claude.json` 또는 슬래시 명령어에 포매터 명령어를 내장하여 동작 완료 시 강제 처리한다 [raw/보리스_클로드코드_실무_사용법.md#L216](file:///Users/railscraft/[[Obsidian]]/raw/%EB%B3%B4%EB%A6%AC%EC%8A%A4_%ED%81%B4%EB%A1%9C%EB%93%9C%EC%BD%94%EB%93%9C_%EC%8B%A4%EB%AC%B4_%EC%82%AC%EC%9A%A9%EB%B2%95.md#L216).

```bash
# JavaScript/TypeScript 환경의 강제 교정 가드
npx prettier --write . && npx eslint --fix .

# Python 환경의 코드 스타일 가드
black . && ruff check --fix .
```

### 권한 세분화 규칙 설정 스키마
- **테스트 및 검사**: `Approval: None` (항상 허용)
- **패키지 설치 및 Git 커밋**: `Approval: Ask` (승인 확인 요청)
- **위험 파일 삭제 및 하드웨어 구성 변경**: `Approval: Deny` (자동 방어 차단)

## 충돌
- **프로젝트 규칙의 비대화에 따른 준수율 저하**: Anthropic의 공식 연구에 따르면 에이전트 지침이 200줄을 넘어가면 준수율이 급격히 저하된다. 따라서 범용 프로젝트 룰은 60줄 이하로 `CLAUDE.md`에 유지하고, 상세 가이드라인과 템플릿 양식은 하위 폴더의 개별 프로필 마크다운(예: `voice_profile.md`)로 분리해 필요한 상황에서만 참조(Refer)하도록 레이어드 구조로 운영해야 한다.

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[Claude Code 권한 설계]]
- [[Plan Mode 기반 AI 작업]]
- [[DESIGN.md 운영 원칙]]
- [[OpenCode]]
- [[Pi Coding Agent]]
- [[Harness Engineering]]
- [[LLM Wiki 운영 패턴]]
- [[Obsidian vault용 Slash Command 운영]]
- [[에이전트 코딩 4원칙]]
- [[Claude Code 세션 운영 명령어]]
- [[Agent Harness]]
- [[Claude Cowork]]
- [[Claude Code 스킬 관리]]

## 출처
- [[Claude Code]] 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!
- 보리스_클로드코드_실무_사용법
- Claude-Code-실무활용법-보리스-관점-정리
- AI로_만든_제품이_안_팔리는_이유
- opencode-masterclass-summary
- pi-coding-agent-overview
- cc101_axwith_ko
- [[하네스 엔지니어링]] - 65줄 [[CLAUDE.md]]가 최고의 스킬인 이유
- [[Claude Code]] + [[Obsidian]]으로 AI 기반 세컨드 브레인을 만든 방법
- andrej-karpathy-skills-CLAUDE-번역
- [[Claude Code]]를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어
- [[Andrej Karpathy]]가 AI [[코딩 에이전트]]의 고질병을 고치는 방법. 마크다운 파일 하나
- 99%의 사람보다 더 나은 Harness Engineer를 만드는 법
- raw/[[CLAUDE.md]] 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md
- raw/Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요.md
- https://opencode.ai/docs/rules/
- https://pi.dev/docs/latest/usage
- [AI가 당신처럼 글을 쓰게 만드는 가장 좋은 방법](file:///Users/railscraft/[[Obsidian]]/raw/AI%EA%B0%80%20%EB%8B%B9%EC%8B%A0%EC%B2%98%EB%9F%BC%20%EA%B8%80%EC%9D%84%20%EC%93%B0%EA%B2%8C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EA%B0%80%EC%9E%A5%20%EC%A2%8B%EC%9D%80%20%EB%B0%A9%EB%B2%95)
- [Claude 900달러 컨설턴트를 대체하는 10가지 프롬프트](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20900%EB%8B%AC%EB%9F%AC%20%EC%BB%A8%EC%84%A4%ED%84%B4%ED%8A%B8%EB%A5%BC%20%EB%8C%80%EC%B2%B4%ED%95%98%EB%8A%94%2010%EA%B0%80%EC%A7%80%20%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8)
- [2026년 AI 에이전트 [[워크플로]]우 핵심 패턴 분석](file:///Users/railscraft/[[Obsidian]]/raw/2026%EB%85%84%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%20%ED%95%B5%EC%8B%AC%20%ED%8C%A8%ED%84%B4%20%EB%B6%84%EC%84%9D.md)
- [RuboCop - Ruby 정적 코드 분석기 완벽 정리](file:///Users/railscraft/[[Obsidian]]/raw/[[RuboCop]]%20-%20Ruby%20%EC%A0%95%EC%A0%81%20%EC%BD%94%EB%93%9C%20%EB%B6%84%EC%84%9D%EA%B8%B0%20%EC%99%84%EB%B2%BD%20%EC%A0%95%EB%A6%AC.md)
- [완벽하게 기계 가독성을 갖춘 디자인 시스템](file:///Users/railscraft/[[Obsidian]]/raw/%EC%99%84%EB%B2%BD%ED%95%98%EA%B2%8C%20%EA%B8%B0%EA%B3%84%20%EA%B0%80%EB%8F%85%EC%84%B1%EC%9D%84%20%EA%B0%96%EC%B6%98%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C.md)
- [2026년 오픈소스 [[LLM]] 플랫폼 비교 가이드 - [[Ollama]], [[OpenRouter]], Groq, NVIDIA NIM](file:///Users/railscraft/[[Obsidian]]/raw/2026%EB%85%84%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%20[[LLM]]%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EB%B9%84%EA%B5%90%20%EA%B0%80%EC%9D%B4%EB%93%9C%20-%20[[Ollama]]%2C%20[[OpenRouter]]%2C%20Groq%2C%20NVIDIA%20NIM.md)
- [Claude Code 프로젝트 효율을 극대화하는 MEMORY.md 가이드](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20Code%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%ED%9A%A8%EC%9C%A8%EC%9D%84%20%EA%B7%B9%EB%8C%80%ED%99%94%ED%95%98%EB%8A%94%20MEMORY.md%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [AI가 생성한 UI 디자인은 이제 인간 디자이너의 80퍼센트보다 우수하다](file:///Users/railscraft/[[Obsidian]]/raw/AI%EA%B0%80%20%EC%83%9D%EC%84%B1%ED%95%9C%20UI%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%80%20%EC%9D%B4%EC%A0%9C%20%EC%9D%B8%EA%B0%84%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EC%9D%98%2080%ED%8D%BC%EC%84%BC%ED%8A%B8%EB%B3%B4%EB%8B%A4%20%EC%9A%B0%EC%88%98%ED%95%98%EB%8B%A4.md)
- [arxiv-2603.28052-meta-harness](file:///Users/railscraft/[[Obsidian]]/raw/arxiv-2603.28052-meta-harness.md)
- [느낌 코딩의 시대는 끝났다 - GitHub [[Spec Kit]]과 명세 기반 개발](file:///Users/railscraft/[[Obsidian]]/raw/%EB%8A%90%EB%82%8C%20%EC%BD%94%EB%94%A9%EC%9D%98%20%EC%8B%9C%EB%8C%80%EB%8A%94%20%EB%81%9D%EB%82%AC%EB%8B%A4%20-%20GitHub%20Spec%20Kit%EA%B3%BC%20%EB%AA%85%EC%84%B8%20%EA%B8%B0%EB%B0%98%20%EA%B0%9C%EB%B0%9C.md)
- [SpaceX의 파격적인 AI 인프라 전략 - 순수 C 언어로 22만 대 GPU를 제어하다](file:///Users/railscraft/[[Obsidian]]/raw/SpaceX%EC%9D%98%20%ED%8C%8C%EA%B2%A9%EC%A0%81%EC%9D%B8%20AI%20%EC%9D%B8%ED%94%84%EB%9D%BC%20%EC%A0%84%EB%9E%B5%20-%20%EC%88%9C%EC%88%98%20C%20%EC%96%B8%EC%96%B4%EB%A1%9C%2022%EB%A7%8C%20%EB%8C%80%20GPU%EB%A5%BC%20%EC%A0%9C%EC%96%B4%ED%95%98%EB%8B%A4.md)
- [AI 겨울이 시작됐다-ko](file:///Users/railscraft/[[Obsidian]]/raw/AI%20%EA%B2%A8%EC%9A%B8%EC%9D%B4%20%EC%8B%9C%EC%9E%91%EB%90%90%EB%8B%A4-ko.md)
- [우리가 피그마 없이 제품을 배포하는 방법](file:///Users/railscraft/[[Obsidian]]/raw/%EC%9A%B0%EB%A6%AC%EA%B0%80%20%ED%94%BC%EA%B7%B8%EB%A7%88%20%EC%97%86%EC%9D%B4%20%EC%A0%9C%ED%92%88%EC%9D%84%20%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95.md)
- [Infisical_SSH_헤드리스_인증_가이드](file:///Users/railscraft/[[Obsidian]]/raw/[[Infisical]]_SSH_%ED%97%A4%EB%93%9C%EB%A6%AC%EC%8A%A4_%EC%9D%B8%EC%A6%9D_%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [모든 [[DESIGN.md]]에 꼭 들어가야 할 9가지 섹션](file:///Users/railscraft/[[Obsidian]]/raw/%EB%AA%A8%EB%93%A0%20[[DESIGN.md]]%EC%97%90%20%EA%BC%AD%20%EB%93%A4%EC%96%B4%EA%B0%80%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20%EC%84%B9%EC%85%98.md)
- [DESIGN.md [[워크플로]] - [[Google Stitch]]와 [[Claude Code]]가 바꾼 디자인 개발 협업](file:///Users/railscraft/[[Obsidian]]/raw/[[DESIGN.md]]%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%20-%20Google%20Stitch%EC%99%80%20Claude%20Code%EA%B0%80%20%EB%B0%94%EA%BE%BC%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EA%B0%9C%EB%B0%9C%20%ED%98%91%EC%97%85.md)
- [노트북을 망가뜨리지 않으려고 라즈베리 파이에서 AI 에이전트 하네스를 구동한 후기](file:///Users/railscraft/[[Obsidian]]/raw/%EB%85%B8%ED%8A%B8%EB%B6%81%EC%9D%84%20%EB%A7%9D%EA%B0%80%EB%9C%A8%EB%A6%AC%EC%A7%80%20%EC%95%8A%EC%9C%BC%EB%A0%A4%EA%B3%A0%20%EB%9D%BC%EC%A6%88%EB%B2%A0%EB%A6%AC%20%ED%8C%8C%EC%9D%B4%EC%97%90%EC%84%9C%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%ED%95%98%EB%84%A4%EC%8A%A4%EB%A5%BC%20%EA%B5%AC%EB%8F%99%ED%95%9C%20%ED%9B%84%EA%B8%B0.md)
- [클로드 디자인은 과연 디자이너를 대체할까](file:///Users/railscraft/[[Obsidian]]/raw/%ED%81%B4%EB%A1%9C%EB%93%9C%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%80%20%EA%B3%BC%EC%97%B0%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EB%A5%BC%20%EB%8C%80%EC%B2%B4%ED%95%A0%EA%B9%8C.md)
- [파이썬 AI 에이전트 프레임워크 6종 비교 분석](file:///Users/railscraft/[[Obsidian]]/raw/%ED%8C%8C%EC%9D%B4%EC%8D%AC%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC%206%EC%A2%85%20%EB%B9%84%EA%B5%90%20%EB%B6%84%EC%84%9D.md)
- [한 문장을 500달러짜리 온라인 코스로 바꾸는 멀티 에이전트 시스템 구축하기-ko](file:///Users/railscraft/[[Obsidian]]/raw/%ED%95%9C%20%EB%AC%B8%EC%9E%A5%EC%9D%84%20500%EB%8B%AC%EB%9F%AC%EC%A7%9C%EB%A6%AC%20%EC%98%A8%EB%9D%BC%EC%9D%B8%20%EC%BD%94%EC%8A%A4%EB%A1%9C%20%EB%B0%94%EA%BE%B8%EB%8A%94%20%EB%A9%80%ED%8B%B0%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-ko.md)
- [프로덕션 AI 에이전트를 위한 [[Agent Harness]] 구축](file:///Users/railscraft/[[Obsidian]]/raw/%ED%94%84%EB%A1%9C%EB%8D%95%EC%85%98%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EB%A5%BC%20%EC%9C%84%ED%95%9C%20Agent%20Harness%20%EA%B5%AC%EC%B6%95.md)
- [frontend-design-skill](file:///Users/railscraft/[[Obsidian]]/raw/frontend-design-skill.md)
- [Hermes Agent와 [[Ollama]] 로컬 설치 초고속 가이드](file:///Users/railscraft/[[Obsidian]]/raw/Hermes%20Agent%EC%99%80%20[[Ollama]]%20%EB%A1%9C%EC%BB%AC%20%EC%84%A4%EC%B9%98%20%EC%B4%88%EA%B3%A0%EC%86%8D%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [원시인 모드로 토큰 아끼려다 6만 스타 오픈소스에 PR 보낸 이야기](file:///Users/railscraft/[[Obsidian]]/raw/%EC%9B%90%EC%8B%9C%EC%9D%B8%20%EB%AA%A8%EB%93%9C%EB%A1%9C%20%ED%86%A0%ED%81%B0%20%EC%95%84%EB%81%BC%EB%A0%A4%EB%8B%A4%206%EB%A7%8C%20%EC%8A%A4%ED%83%80%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%EC%97%90%20PR%20%EB%B3%B4%EB%82%B8%20%EC%9D%B4%EC%95%BC%EA%B8%B0.md)
- [Quartz-Deploy-Guide](file:///Users/railscraft/[[Obsidian]]/raw/[[Quartz]]-Deploy-Guide.md)
- [안드레_카파시_인터뷰_정리](file:///Users/railscraft/[[Obsidian]]/raw/%EC%95%88%EB%93%9C%EB%A0%88_%EC%B9%B4%ED%8C%8C%EC%8B%9C_%EC%9D%B8%ED%84%B0%EB%B7%B0_%EC%A0%95%EB%A6%AC.md)
- [How to write a [[DESIGN.md]] file Claude can actually use-ko](file:///Users/railscraft/[[Obsidian]]/raw/How%20to%20write%20a%20[[DESIGN.md]]%20file%20Claude%20can%20actually%20use-ko.md)
- [AI가 당신처럼 글을 쓰게 만드는 가장 좋은 방법-ko](file:///Users/railscraft/[[Obsidian]]/raw/AI%EA%B0%80%20%EB%8B%B9%EC%8B%A0%EC%B2%98%EB%9F%BC%20%EA%B8%80%EC%9D%84%20%EC%93%B0%EA%B2%8C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EA%B0%80%EC%9E%A5%20%EC%A2%8B%EC%9D%80%20%EB%B0%A9%EB%B2%95-ko.md)
- [API_Key_관리_및_[[Infisical]]_도입_가이드](file:///Users/railscraft/[[Obsidian]]/raw/API_Key_%EA%B4%80%EB%A6%AC_%EB%B0%8F_[[Infisical]]_%EB%8F%84%EC%9E%85_%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [밑바닥부터 만드는 [[LLM]] 메모리 #2. 자동 요약 버퍼](file:///Users/railscraft/[[Obsidian]]/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%232.%20%EC%9E%90%EB%8F%99%20%EC%9A%94%EC%95%BD%20%EB%B2%84%ED%8D%BC.md)
- [Quartz-GitHub-Pages-Complete-Guide](file:///Users/railscraft/[[Obsidian]]/raw/[[Quartz]]-GitHub-Pages-Complete-Guide.md)
- [지난번 이런 일이 있었을 때, 수많은 평범한 사람들이 백만장자가 되었다](file:///Users/railscraft/[[Obsidian]]/raw/%EC%A7%80%EB%82%9C%EB%B2%88%20%EC%9D%B4%EB%9F%B0%20%EC%9D%BC%EC%9D%B4%20%EC%9E%88%EC%97%88%EC%9D%84%20%EB%95%8C%2C%20%EC%88%98%EB%A7%8E%EC%9D%80%20%ED%8F%89%EB%B2%94%ED%95%9C%20%EC%82%AC%EB%9E%8C%EB%93%A4%EC%9D%B4%20%EB%B0%B1%EB%A7%8C%EC%9E%A5%EC%9E%90%EA%B0%80%20%EB%90%98%EC%97%88%EB%8B%A4.md)
- [2026년 [[Claude Code]] 설정에 꼭 필요한 8가지 핵심 스킬](file:///Users/railscraft/[[Obsidian]]/raw/2026%EB%85%84%20Claude%20Code%20%EC%84%A4%EC%A0%95%EC%97%90%20%EA%BC%AD%20%ED%95%84%EC%9A%94%ED%95%9C%208%EA%B0%80%EC%A7%80%20%ED%95%B5%EC%8B%AC%20%EC%8A%A4%ED%82%AC.md)
- [밑바닥부터 만드는 [[LLM]] 메모리 #5. 계층형 자체 관리 메모리](file:///Users/railscraft/[[Obsidian]]/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%235.%20%EA%B3%84%EC%B8%B5%ED%98%95%20%EC%9E%90%EC%B2%B4%20%EA%B4%80%EB%A6%AC%20%EB%A9%94%EB%AA%A8%EB%A6%AC.md)
- [밑바닥부터 만드는 [[LLM]] 메모리 #4. 지식 그래프 메모리](file:///Users/railscraft/[[Obsidian]]/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%234.%20%EC%A7%80%EC%8B%9D%20%EA%B7%B8%EB%9E%98%ED%94%84%20%EB%A9%94%EB%AA%A8%EB%A6%AC.md)
- [AI와 오픈소스로 300개 이상의 팟캐스트를 RPG 게임으로 만든 이야기 - LennyRPG 8시간 개발기](file:///Users/railscraft/[[Obsidian]]/raw/AI%EC%99%80%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%EB%A1%9C%20300%EA%B0%9C%20%EC%9D%B4%EC%83%81%EC%9D%98%20%ED%8C%9F%EC%BA%90%EC%8A%A4%ED%8A%B8%EB%A5%BC%20RPG%20%EA%B2%8C%EC%9E%84%EC%9C%BC%EB%A1%9C%20%EB%A7%8C%EB%93%A0%20%EC%9D%B4%EC%95%BC%EA%B8%B0%20-%20LennyRPG%208%EC%8B%9C%EA%B0%84%20%EA%B0%9C%EB%B0%9C%EA%B8%B0.md)
- [Karpathy의 [[LLM]] Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번](file:///Users/railscraft/[[Obsidian]]/raw/Karpathy%EC%9D%98%20[[LLM]]%20Wiki%EB%A5%BC%20%EB%91%90%20%EB%B2%88%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.%20%EC%BD%94%EB%93%9C%EB%A1%9C%20%ED%95%9C%20%EB%B2%88%2C%20%EB%8B%A8%EC%9D%BC%20.md%EB%A1%9C%20%ED%95%9C%20%EB%B2%88.md)
- [Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko](file:///Users/railscraft/[[Obsidian]]/raw/Building%20a%20Multi-Agent%20System%20That%20Turns%20One%20Sentence%20Into%20a%20%24500%20Online%20Course-ko.md)
- [AI 개발자가 반드시 알아야 할 9가지 [[RAG]] 아키텍처 - 실무 예제로 배우는 완전 가이드](file:///Users/railscraft/[[Obsidian]]/raw/AI%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80%20%EB%B0%98%EB%93%9C%EC%8B%9C%20%EC%95%8C%EC%95%84%EC%95%BC%20%ED%95%A0%209%EA%B0%80%EC%A7%80%20[[RAG]]%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20-%20%EC%8B%A4%EB%AC%B4%20%EC%98%88%EC%A0%9C%EB%A1%9C%20%EB%B0%B0%EC%9A%B0%EB%8A%94%20%EC%99%84%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [Agentic Product Design. 오늘 바로 자동화할 수 있는 5가지 디자인 작업](file:///Users/railscraft/[[Obsidian]]/raw/Agentic%20Product%20Design.%20%EC%98%A4%EB%8A%98%20%EB%B0%94%EB%A1%9C%20%EC%9E%90%EB%8F%99%ED%99%94%ED%95%A0%20%EC%88%98%20%EC%9E%88%EB%8A%94%205%EA%B0%80%EC%A7%80%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%9E%91%EC%97%85.md)
- [완성형 [[LLM]] Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다](file:///Users/railscraft/[[Obsidian]]/raw/%EC%99%84%EC%84%B1%ED%98%95%20[[LLM]]%20Wiki%20%EC%95%B1%EC%9D%84%20%EC%B0%BE%EA%B3%A0%20%EB%82%98%EC%84%9C%20%EB%82%B4%EA%B0%80%20%EC%8B%A4%EC%A0%9C%EB%A1%9C%20%ED%95%84%EC%9A%94%ED%96%88%EB%8D%98%20%EB%8D%94%20%EC%9E%91%EC%9D%80%20%EA%B2%83%EC%9D%84%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.md)
- [5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 [[TurboQuant]], 애플 실리콘 상륙](file:///Users/railscraft/[[Obsidian]]/raw/5%EB%B0%B0%20%EC%A0%81%EC%9D%80%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A1%9C%20%EB%A7%A5%EC%97%90%EC%84%9C%2032B%20%EB%AA%A8%EB%8D%B8%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20%EA%B5%AC%EA%B8%80%20[[TurboQuant]]%2C%20%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%83%81%EB%A5%99.md)
- [애플 실리콘을 위한 로컬 AI 스택: 한 차원 진화한 성능과 최적의 구축 가이드](file:///Users/railscraft/[[Obsidian]]/raw/%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EB%A1%9C%EC%BB%AC%20AI%20%EC%8A%A4%ED%83%9D%3A%20%ED%95%9C%20%EC%B0%A8%EC%9B%90%20%EC%A7%84%ED%99%94%ED%95%9C%20%EC%84%B1%EB%8A%A5%EA%B3%BC%20%EC%B5%9C%EC%A0%81%EC%9D%98%20%EA%B5%AC%EC%B6%95%20%EA%B0%80%EC%9D%B4%EB%93%9C.md)
- [밑바닥부터 만드는 [[LLM]] 메모리 #1. 슬라이딩 윈도우 버퍼](file:///Users/railscraft/[[Obsidian]]/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%231.%20%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%94%A9%20%EC%9C%88%EB%8F%84%EC%9A%B0%20%EB%B2%84%ED%8D%BC.md)
- [DESIGN.md [[워크플로]]우. [[Google Stitch]]와 [[Claude Code]]가 디자인-코드 핸드오프를 조용히 바꾼 방법-ko](file:///Users/railscraft/[[Obsidian]]/raw/[[DESIGN.md]]%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.%20Google%20Stitch%EC%99%80%20Claude%20Code%EA%B0%80%20%EB%94%94%EC%9E%90%EC%9D%B8-%EC%BD%94%EB%93%9C%20%ED%95%B8%EB%93%9C%EC%98%A4%ED%94%84%EB%A5%BC%20%EC%A1%B0%EC%9A%A9%ED%9E%88%20%EB%B0%94%EA%BE%BC%20%EB%B0%A9%EB%B2%95-ko.md)
- [인생의 성공을 결정하는 5가지 핵심 자질](file:///Users/railscraft/[[Obsidian]]/raw/%EC%9D%B8%EC%83%9D%EC%9D%98%20%EC%84%B1%EA%B3%B5%EC%9D%84%20%EA%B2%B0%EC%A0%95%ED%95%98%EB%8A%94%205%EA%B0%80%EC%A7%80%20%ED%95%B5%EC%8B%AC%20%EC%9E%90%EC%A7%88.md)
- [gajae-code_AI_코딩_하네스_분석](file:///Users/railscraft/[[Obsidian]]/raw/gajae-code_AI_%EC%BD%94%EB%94%A9_%ED%95%98%EB%84%A4%EC%8A%A4_%EB%B6%84%EC%84%9D.md)
- [Claude Code와 [[Obsidian]]으로 [[AI 세컨드 브레인]] 구축하기](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20Code%EC%99%80%20[[Obsidian]]%EC%9C%BC%EB%A1%9C%20AI%20%EC%84%B8%EC%BB%A8%EB%93%9C%20%EB%B8%8C%EB%A0%88%EC%9D%B8%20%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0.md)
- [Hermes 에이전트와 함께 사용하기 좋은 오픈소스 내부 도구 5가지](file:///Users/railscraft/[[Obsidian]]/raw/Hermes%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EC%99%80%20%ED%95%A8%EA%BB%98%20%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0%20%EC%A2%8B%EC%9D%80%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%20%EB%82%B4%EB%B6%80%20%EB%8F%84%EA%B5%AC%205%EA%B0%80%EC%A7%80.md)
- [2026년에 가장 많이 설치된 디자인 문서. 단 30줄짜리였다. Anthropic 엔지니어 두 명이 썼다. 디자이너들은 아직 읽지 않았다-ko](file:///Users/railscraft/[[Obsidian]]/raw/2026%EB%85%84%EC%97%90%20%EA%B0%80%EC%9E%A5%20%EB%A7%8E%EC%9D%B4%20%EC%84%A4%EC%B9%98%EB%90%9C%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EB%AC%B8%EC%84%9C.%20%EB%8B%A8%2030%EC%A4%84%EC%A7%9C%EB%A6%AC%EC%98%80%EB%8B%A4.%20Anthropic%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%20%EB%91%90%20%EB%AA%85%EC%9D%B4%20%EC%8D%BC%EB%8B%A4.%20%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EB%93%A4%EC%9D%80%20%EC%95%84%EC%A7%81%20%EC%9D%BD%EC%A7%80%20%EC%95%8A%EC%95%98%EB%8B%A4-ko.md)
- [지식 그래프, 진정한 게임 체인저... 그러나 구축과 유지가 극도로 어려운 이유](file:///Users/railscraft/[[Obsidian]]/raw/%EC%A7%80%EC%8B%9D%20%EA%B7%B8%EB%9E%98%ED%94%84%2C%20%EC%A7%84%EC%A0%95%ED%95%9C%20%EA%B2%8C%EC%9E%84%20%EC%B2%B4%EC%9D%B8%EC%A0%80...%20%EA%B7%B8%EB%9F%AC%EB%82%98%20%EA%B5%AC%EC%B6%95%EA%B3%BC%20%EC%9C%A0%EC%A7%80%EA%B0%80%20%EA%B7%B9%EB%8F%84%EB%A1%9C%20%EC%96%B4%EB%A0%A4%EC%9A%B4%20%EC%9D%B4%EC%9C%A0.md)
- [밑바닥부터 만드는 [[LLM]] 메모리 #3. 벡터 메모리](file:///Users/railscraft/[[Obsidian]]/raw/%EB%B0%91%EB%B0%94%EB%8B%A5%EB%B6%80%ED%84%B0%20%EB%A7%8C%EB%93%9C%EB%8A%94%20[[LLM]]%20%EB%A9%94%EB%AA%A8%EB%A6%AC%20%233.%20%EB%B2%A1%ED%84%B0%20%EB%A9%94%EB%AA%A8%EB%A6%AC.md)
- [꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!](file:///Users/railscraft/[[Obsidian]]/raw/%EA%BC%AD%20%EC%95%8C%EC%95%84%EC%95%BC%ED%95%A0%20%EC%95%88%EB%93%9C%EB%A0%88%20%EC%B9%B4%ED%8C%8C%EC%8B%9C%2030%EB%B6%84%20%EC%9D%B8%ED%84%B0%EB%B7%B0%20%EC%99%84%EC%A0%84%EC%A0%95%EB%A6%AC%20-%20AI%EC%8B%9C%EB%8C%80%EC%9D%98%20%ED%95%84%EC%88%98%20%EC%9D%B8%EC%82%AC%EC%9D%B4%ED%8A%B8%21.md)
- [What Is MCP? Build a Custom MCP Server in Python-ko](file:///Users/railscraft/[[Obsidian]]/raw/What%20Is%20MCP%3F%20Build%20a%20Custom%20MCP%20Server%20in%20Python-ko.md)
- [AI로 스스로 유지되는 지식 베이스를 Karpathy의 [[LLM]] Wiki로 만든 방법](file:///Users/railscraft/[[Obsidian]]/raw/AI%EB%A1%9C%20%EC%8A%A4%EC%8A%A4%EB%A1%9C%20%EC%9C%A0%EC%A7%80%EB%90%98%EB%8A%94%20%EC%A7%80%EC%8B%9D%20%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A5%BC%20Karpathy%EC%9D%98%20[[LLM]]%20Wiki%EB%A1%9C%20%EB%A7%8C%EB%93%A0%20%EB%B0%A9%EB%B2%95.md)
- [UI 디자인을 위한 최고의 AI 도구 10가지와 [[워크플로]]우](file:///Users/railscraft/[[Obsidian]]/raw/UI%20%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%B5%9C%EA%B3%A0%EC%9D%98%20AI%20%EB%8F%84%EA%B5%AC%2010%EA%B0%80%EC%A7%80%EC%99%80%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.md)
- [Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻](file:///Users/railscraft/[[Obsidian]]/raw/Anthropic%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EA%B0%80%20%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4%EC%9D%84%20%EB%B2%84%EB%A6%AC%EB%9D%BC%EA%B3%A0%20%EB%A7%90%ED%96%88%EB%8B%A4.%20%EA%B7%B8%20%EB%A7%90%EC%9D%98%20%EC%A7%84%EC%A7%9C%20%EB%9C%BB.md)
- [UX는 죽지 않았다. 그저 화면에 대한 이야기를 멈췄을 뿐이다-ko](file:///Users/railscraft/[[Obsidian]]/raw/UX%EB%8A%94%20%EC%A3%BD%EC%A7%80%20%EC%95%8A%EC%95%98%EB%8B%A4.%20%EA%B7%B8%EC%A0%80%20%ED%99%94%EB%A9%B4%EC%97%90%20%EB%8C%80%ED%95%9C%20%EC%9D%B4%EC%95%BC%EA%B8%B0%EB%A5%BC%20%EB%A9%88%EC%B7%84%EC%9D%84%20%EB%BF%90%EC%9D%B4%EB%8B%A4-ko.md)
- [Claude 900달러 컨설턴트를 대체하는 10가지 프롬프트-ko](file:///Users/railscraft/[[Obsidian]]/raw/Claude%20900%EB%8B%AC%EB%9F%AC%20%EC%BB%A8%EC%84%A4%ED%84%B4%ED%8A%B8%EB%A5%BC%20%EB%8C%80%EC%B2%B4%ED%95%98%EB%8A%94%2010%EA%B0%80%EC%A7%80%20%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8-ko.md)
- [1인 개발자와 소규모 팀을 위한 주말 완성 [[디자인 시스템]] 구축법](file:///Users/railscraft/[[Obsidian]]/raw/1%EC%9D%B8%20%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%99%80%20%EC%86%8C%EA%B7%9C%EB%AA%A8%20%ED%8C%80%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%A3%BC%EB%A7%90%20%EC%99%84%EC%84%B1%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%EB%B2%95.md)
- [2026년의 AI 에이전트 실전 가이드-ko](file:///Users/railscraft/[[Obsidian]]/raw/2026%EB%85%84%EC%9D%98%20AI%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EC%8B%A4%EC%A0%84%20%EA%B0%80%EC%9D%B4%EB%93%9C-ko.md)
- [Karpathy의 [[LLM]] Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다](file:///Users/railscraft/[[Obsidian]]/raw/Karpathy%EC%9D%98%20[[LLM]]%20Wiki%EB%A1%9C%20%EC%8A%A4%EC%8A%A4%EB%A1%9C%20%EC%9C%A0%EC%A7%80%EB%90%98%EB%8A%94%20%EA%B0%9C%EC%9D%B8%20%EC%A7%80%EC%8B%9D%20%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A5%BC%2030%EB%B6%84%20%EB%A7%8C%EC%97%90%20%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4.md)
- [지루한 업무를 자동화하는 [[클로드 코워크]] 프롬프트 7가지](file:///Users/railscraft/[[Obsidian]]/raw/%EC%A7%80%EB%A3%A8%ED%95%9C%20%EC%97%85%EB%AC%B4%EB%A5%BC%20%EC%9E%90%EB%8F%99%ED%99%94%ED%95%98%EB%8A%94%20%ED%81%B4%EB%A1%9C%EB%93%9C%20%EC%BD%94%EC%9B%8C%ED%81%AC%20%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%207%EA%B0%80%EC%A7%80.md)
- [당신의 고양이가 챗GPT보다 세상을 더 잘 이해하는 이유](file:///Users/railscraft/[[Obsidian]]/raw/%EB%8B%B9%EC%8B%A0%EC%9D%98%20%EA%B3%A0%EC%96%91%EC%9D%B4%EA%B0%80%20%EC%B1%97GPT%EB%B3%B4%EB%8B%A4%20%EC%84%B8%EC%83%81%EC%9D%84%20%EB%8D%94%20%EC%9E%98%20%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94%20%EC%9D%B4%EC%9C%A0.md)
- [옵시디언 AI 제2의 뇌는 기억이 아니다](file:///Users/railscraft/[[Obsidian]]/raw/%EC%98%B5%EC%8B%9C%EB%94%94%EC%96%B8%20AI%20%EC%A0%9C2%EC%9D%98%20%EB%87%8C%EB%8A%94%20%EA%B8%B0%EC%96%B5%EC%9D%B4%20%EC%95%84%EB%8B%88%EB%8B%A4.md)
- [거의 모든 나쁜 결정을 멈추는 단 하나의 질문-ko](file:///Users/railscraft/[[Obsidian]]/raw/%EA%B1%B0%EC%9D%98%20%EB%AA%A8%EB%93%A0%20%EB%82%98%EC%81%9C%20%EA%B2%B0%EC%A0%95%EC%9D%84%20%EB%A9%88%EC%B6%94%EB%8A%94%20%EB%8B%A8%20%ED%95%98%EB%82%98%EC%9D%98%20%EC%A7%88%EB%AC%B8-ko.md)
- [2026년에 실제로 효과가 있는 나의 AI 디자인 [[워크플로]]우](file:///Users/railscraft/[[Obsidian]]/raw/2026%EB%85%84%EC%97%90%20%EC%8B%A4%EC%A0%9C%EB%A1%9C%20%ED%9A%A8%EA%B3%BC%EA%B0%80%20%EC%9E%88%EB%8A%94%20%EB%82%98%EC%9D%98%20AI%20%EB%94%94%EC%9E%90%EC%9D%B8%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0.md)
- [GLM-5.1-vs-Kimi-K2.6-Coding-Comparison](file:///Users/railscraft/[[Obsidian]]/raw/[[GLM-5]].1-vs-Kimi-K2.6-Coding-Comparison.md)

