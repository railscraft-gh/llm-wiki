---
type: workflow
status: evergreen
core: true
tags:
 - llm
 - agent
 - claude-code
aliases:
 - CLAUDE.md
 - Claude.md
 - AGENTS.md
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
 - https://opencode.ai/docs/rules/
 - https://pi.dev/docs/latest/usage
created: 2026-05-06
updated: 2026-06-04
---

# Claude.md 운영 원칙

## 한 줄 정의

Claude.md는 Claude Code나 OpenCode 같은 coding agent에게 프로젝트의 구조, 금지 사항, 검증 기준을 알려 주는 AI용 온보딩 문서이자 행동 계약(Behavioral Contract)이다.

## 핵심 요지

- Claude.md는 설정 파일이라기보다 새 팀원에게 주는 업무 매뉴얼에 가깝다.
- 가장 중요한 항목은 잘해야 할 일보다 "절대 하면 안 되는 일(Hard Nos)"이다.
- 너무 길면 context window를 낭비하고 실제 작업 중 참조성이 떨어지므로 60줄 이하의 핵심 지침 위주로 조립한다.
- **문체/사고 프로필의 분리**: 글쓰기나 특정 전문 컨설팅처럼 미학이나 취향이 강하게 작용하는 영역은 프로젝트 전반의 `CLAUDE.md`와 별개로, 에이전트의 비서 필터를 걷어내는 **적대적 프레이밍(Adversarial Framing)** 및 개인의 목소리를 정의한 **문체 프로필(Voice Profile) .md** 파일로 분리하여 주입한다 (출처: AI가 당신처럼 글을 쓰게 만드는 가장 좋은 방법).

## 상세

보리스 자료에서는 Claude.md에 프로젝트 구조, 기술 스택, 코드 스타일, 자주 발생하는 실수, 금지 작업, 작업 전후 검증 방법을 담으라고 설명한다. 예를 들어 "마이그레이션 파일은 사용자 승인 없이 수정하지 않는다", "프로덕션 DB 관련 명령은 자동 실행하지 않는다" 같은 문장은 [[Claude Code 권한 설계]]와 직접 연결된다.

보리스가 자신의 Claude.md를 약 2,500 tokens 수준으로 유지한다고 언급한 점은 길이 기준으로 쓸 수 있다. 단, 이 숫자는 보편 규칙이 아니라 "핵심만 담는 편이 좋다"는 운영 감각으로 해석하는 편이 안전하다. 긴 참고 문서는 Claude.md에 모두 붙이지 말고 별도 문서, skill, command로 분리한다.

UI 작업에서는 Claude.md에 모든 색상과 spacing을 넣기보다 [[DESIGN.md 운영 원칙]]처럼 디자인 전용 파일로 분리하는 편이 낫다. Claude.md는 "UI 변경 전 DESIGN.md를 읽는다", "임의 색상 token을 만들지 않는다" 같은 연결 규칙을 담고, 상세 token과 rationale은 DESIGN.md가 맡는다.

[[OpenCode]] 공식 문서는 project root의 `AGENTS.md`를 custom instructions 파일로 설명한다. `/init`은 repo의 build, lint, test command, architecture, convention, operational gotcha를 요약해 `AGENTS.md`를 만들거나 갱신한다. 따라서 도구 이름은 달라도 원칙은 같다. agent memory file에는 "계속 참조해야 하는 운영 제약"만 넣고, 긴 배경 자료는 skill, docs, command로 분리한다.

[[Pi Coding Agent]]도 시작 시 `AGENTS.md` 또는 `CLAUDE.md`를 읽는다. 공식 문서 기준으로 전역 `~/.pi/agent/AGENTS.md`, 현재 작업 디렉터리와 상위 디렉터리의 context file을 로드하며, 깨끗한 실행이 필요할 때는 `--no-context-files` 또는 `-nc`로 끈다. 이는 agent memory file이 편의 기능이 아니라 실행 환경의 일부라는 점을 보여준다.

Karpathy가 제안한 [[LLM Wiki 운영 패턴]]은 이 원칙을 지식 베이스 운영으로 확장한 사례다. instruction 파일은 에이전트가 raw를 어떻게 읽고 wiki를 어떻게 갱신할지 규정하며, index/log 갱신 규칙까지 포함할 때 비로소 "문서를 읽는 모델"이 아니라 "위키를 유지하는 agent"가 된다.

`raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md`는 더 개인적인 예시를 준다. PARA 기반 vault라면 `CLAUDE.md`에 폴더 구조, Tasks query 문법, Obsidian식 내부 링크 규칙, 주간 노트 위치를 적어 두고, 그 위에 [[Obsidian vault용 Slash Command 운영]]처럼 slash command를 얹어 inbox 정리, 연결 탐색, 아이디어 승격을 수행할 수 있다.

[[Harness Engineering]] 관점에서 CLAUDE.md는 하네스의 5가지 레버 중 **시스템 프롬프트**에 해당한다. Karpathy가 지적한 LLM 코딩의 3대 실패 패턴(묵시적 가정, 과도한 엔지니어링, 부수적 피해)을 예방하는 가장 기본적이고 강력한 구성 요소다. Anthropic 공식 문서에 따를 200줄을 넘으면 에이전트 준수율이 눈에 띄게 떨어지므로, **60줄 이하로 유지**하고 범용 지침만 포함하는 것이 권장된다.

`raw/andrej-karpathy-skills-CLAUDE-번역.md`는 그 범용 지침의 최소 버전을 보여 준다. 핵심은 [[에이전트 코딩 4원칙]]이다. 구현 전에 가정과 불확실성을 드러내고, 최소한의 코드만 쓰고, 변경 범위를 요청과 직접 연결된 부분으로 제한하고, 작업을 검증 가능한 목표로 다시 쓰는 방식이다.

---

## 전문 영역에서의 프레이밍 고도화

### 1. 문체 프로필 (Voice Profile) .md 구축
단순 비서 어조의 "AI Slop"을 방지하고 사용자의 고유한 작문 톤을 이끌어내기 위해 `voice_profile.md`를 주입한다 (출처: AI가 당신처럼 글을 쓰게 만드는 가장 좋은 방법).
- **인터뷰 기반 DNA 추출**: 40~100개 가량의 집요한 인터뷰 프롬프트로 에이전트가 사용자를 취조하게 해 개성 있는 스타일 스키마를 축적하고 이를 .md 파일에 저장해 Cowork/에이전트 세션의 상시 context로 로드한다 (출처: AI가 당신처럼 글을 쓰게 만드는 가장 좋은 방법).

### 2. 적대적 프레이밍 (Adversarial Framing)
모델의 공손하고 안전한 '중간 지대 기본값' 필터를 걷어내고, 시간당 900달러짜리 최고급 컨설턴트 수준의 날카롭고 고밀도인 사고를 끌어내기 위한 프롬프트 기법이다 (출처: Claude 900달러 컨설턴트를 대체하는 10가지 프롬프트):
- **역할의 극적 구체성**: "CFO처럼 행동해라"가 아닌 "스타트업 재무 모델 200개를 검토해 봤고 회사를 무너뜨릴 가정을 단번에 찾아내는 CFO"처럼 페르소나의 범위를 극도로 좁혀 설정한다.
- **적대적 비평 강제**: "PR 리뷰에서 가차 없이 뜯어보고 거절하라", "격려나 미사여구는 빼라" 등의 지시어를 주입하여 에이전트가 본인의 결과물 또는 대상 코드를 철저히 의심하게 만든다 (출처: Claude 900달러 컨설턴트를 대체하는 10가지 프롬프트).
- **명시적 출력 구조화**: 모호한 형식이 아닌 3가지 지뢰 조항, 5가지 취약점 등 번호 매겨진 목록과 스키마를 강제한다.

---

## 예시

```markdown
## 금지 사항 (Hard Nos)
- 사용자의 승인 없이 마이그레이션 파일을 수정하지 않는다.
- 프로덕션 DB 명령은 실행하지 않는다.

## 검증
- 변경 후 관련 테스트를 실행한다.
- UI 변경은 스크린샷으로 모바일/데스크톱을 확인한다.
```

## CC101 보강: CLAUDE.md 템플릿 3종

CC101 가이드는 목적별 CLAUDE.md 템플릿 3종을 제공한다.

### 템플릿 A — 리서치 워크스페이스
- 원문 자료는 `sources/` 폴터에 저장, 파일명: `YYYY-MM-DD_출처_제목.md`
- 모든 주장에 출처 붙이기 (A/B/C 신뢰도 구분)
- 결과물 구조: 5줄 요약 → 핵심 인사이트 5개 → 반대 근거/리스크 3개 → 다음 액션 3개

### 템플릿 B — 콘텐츠 제작 워크스페이스
- 브랜드 톤: 친근하지만 과장 금지 ("완벽/혁명/무조건" 금지). `voice_profile.md`를 우선 참고하여 작성자 목소리 이식.
- 채널별 포맷: 블로그(제목 3안 → 본문 → 체크리스트 → CTA), 인스타(7~9장 카드뉴스), 뉴스레터(3줄 요약 → 600~900자)
- 파일 출력 규칙: 초안은 `drafts/`, 최종본은 `final/` 폴터에 버전/검수자/발행일 메타데이터 표기

### 템플릿 C — 비즈니스 운영 워크스페이스
- 회사/제품 맥락과 자주 쓰는 용어 정의 누적
- 커뮤니케이션 스타일: 이메일/메시지(3문단 구조), 고객 불만 응대(공감 → 사실 확인 → 해결 옵션)
- 보안: 개인정보/결제정보 마스킹, 외부 공유 전 "대외비 문구/고객명" 자동 점검

## CC101 보강: 전역 메모리와 실무 팁

### `/memory` 명령어

세션 중 CLAUDE.md를 직접 편집하고 싶다면 `/memory` 명령으로 파일 선택기를 열어 바로 편집할 수 있다.

### `.claudeignore` 파일

`.gitignore`처럼 Claude가 읽지 않아야 할 파일/폴터를 지정할 수 있다. 민감한 설정 파일이나 불필요한 로그 파일을 제외하는 데 유용하다.

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
- [[AI 산출물 포맷 결정 트리]]
- [[디자인 에이전트 5종]]
- [[LLM Wiki 구현 선택지]]

