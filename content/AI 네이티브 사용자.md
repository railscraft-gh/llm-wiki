---
type: concept
status: evergreen
core: false
tags:
 - llm
 - agent
 - workflow
aliases:
 - AI-native user
 - AI 네이티브 개발자
sources:
 - raw/안드레_카파시_인터뷰_정리.md
 - raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
 - raw/sequoia-ascent-2026-karpathy-ko.md
 - raw/Claude Code 창시자 Boris의 AI 에이전트 셋업. 전부 다 까보자!.md
 - raw/보리스_클로드코드_실무_사용법.md
 - raw/Claude-Code-실무활용법-보리스-관점-정리.md
 - raw/AI 네이티브 엔지니어링 조직 운영하기 - Code w Claude 발표.md
 - raw/anthropic-boris-cherny-interview.md
 - raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md
 - raw/아무도 AI를 배우고 싶어 하지 않는다.md
created: 2026-05-06
updated: 2026-05-24
---

# AI 네이티브 사용자

## 한 줄 정의

AI 네이티브 사용자는 같은 LLM 도구를 쓰더라도 context, command, hook, MCP, 검증 루프를 조합해 도구의 최대치를 끌어내는 사람이다.

## 핵심 요지

- 격차는 도구 접근성보다 도구를 workflow에 통합하는 능력에서 생긴다.
- AI 네이티브 사용자는 긴 프롬프트를 반복하지 않고 slash command, skill, MCP, hook으로 흐름을 고정한다.
- 채용과 평가도 손코딩보다 에이전트와 협업해 큰 시스템을 안전하게 만드는 능력을 봐야 한다.

## 상세

카파시 자료는 같은 ChatGPT나 Claude Code를 써도 사용법에 따라 결과가 크게 갈린다고 설명한다. 예전의 Vim 고수와 메모장 사용자, VS Code 확장과 단축키를 쓰는 사람의 차이가 이제 agent 도구에서도 반복된다는 관점이다.

Sequoia Ascent 2026에서 카파시는 채용 방식의 변화를 제시했다. 전통적인 코딩 퍼즐 대신, 후보자에게 에이전트를 사용해 실질적 프로젝트를 구축·배포·보안하고, 적대적 에이전트들이 그것을 깨려고 시도하게 하는 것이 진짜 스킬을 테스트한다. 테스트 항목으로는 작업 분해, 스펙 작성, 품질 보존, 리뷰, 보안, 에이전트 활용 능력이 포함된다. 예전의 "10배 엔지니어" 개념은 에이전틱 워크플로우를 마스터한 사람들에 의해 훨씬 더 극단적으로 재편될 수 있다.

보리스 자료의 실무 세팅은 AI 네이티브 사용자의 구체 예다. [[Claude.md 운영 원칙]]으로 프로젝트 규칙을 고정하고, [[AI 코딩 에이전트 검증 전략]]으로 결과를 확인하며, 반복 업무는 slash command로 줄이고, 외부 도구는 [[Claude Code 오케스트레이션]]으로 연결한다. `raw/Claude Code + Obsidian으로 AI 기반 세컨드 브레인을 만든 방법.md`는 이를 개발 저장소 밖의 개인 vault에 적용한 사례다. `/sync`, `/connect`, `/graduate`, `/challenge` 같은 command로 지식 정리와 사고 보조를 고정하면, 같은 Claude Code라도 훨씬 더 높은 leverage를 얻는다.

하지만 `AI 네이티브`를 최신 도구를 많이 배운 상태와 혼동하면 [[Competence Debt]]가 생긴다. 진짜 차이는 새 agent framework 이름을 아는가가 아니라, durable skill 위에 도구를 얹어 더 큰 시스템을 안전하게 다룰 수 있는가에 있다.

[[AI 네이티브 엔지니어링 조직]] 관점에서는 개인의 도구 숙련이 팀 규범으로 확장된다. 모든 팀원이 같은 agent workflow를 dogfooding하고, 오래된 회의나 리뷰 절차를 자동화 대상으로 보며, 검증과 제품 판단을 중심으로 책임을 다시 나눈다.

보리스 체르니는 2026-05-16 인터뷰에서 AI 네이티브 사용자의 정점 형태를 보여준다. 휴대폰 Claude 앱에서 [[Loop와 Routines]]를 일급 객체로 운영하며, 동시 5~10개 세션 × 수백~수천 에이전트를 돌린다. 그가 강조한 운영 철학은 "사용자가 도구를 더 잘 쓰는 방법을 고민하게 만드는 것은 제품의 실패" — [[제품 오버행]]이 해소되면 모델이 자연스럽게 [[Loop와 Routines]]를 제안하고 Slack MCP로 결과를 알리는 식으로 사용자 부담이 줄어든다.

소프트웨어 민주화 측면에서 보리스는 15세기 인쇄기 패러럴을 든다. 인쇄기 발명 전 유럽 문해율은 약 10%였고, 인쇄기 출시 후 50년간 이전 1,000년보다 더 많은 책이 출판됐으며, 책 가격은 100배 떨어졌다. 글로벌 문해율은 수백 년에 걸쳐 70%까지 올라갔다. 보리스는 소프트웨어 작성이 이보다 훨씬 빠르게 민주화될 것이며, 회계 소프트웨어를 가장 잘 만들 사람은 엔지니어가 아니라 도메인 지식이 있는 회계사라고 주장한다. 전문 작가가 여전히 있듯 전문 개발자는 남지만, 코딩 자체는 보편 기술이 된다는 전망이다.

## 예시

- `/test` command로 테스트 실행과 실패 원인 요약을 반복한다.
- MCP로 GitHub, Sentry, Obsidian을 연결한다.
- hook으로 build/test/lint를 자동 실행한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Vibe Coding과 Agentic Engineering]]
- [[Claude Code 오케스트레이션]]
- [[병렬 에이전트 세션 운영]]
- [[Claude.md 운영 원칙]]
- [[AI 네이티브 엔지니어링 조직]]
- [[Loop와 Routines]]
- [[제품 오버행]]
- [[바선생]]
- [[소프트웨어 민주화]]
- [[Obsidian vault용 Slash Command 운영]]
- [[Competence Debt]]

