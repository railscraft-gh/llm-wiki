---
aliases:
- 치명적 삼위일체
- Rule of Two
- Lethal-Trifecta
core: true
created: 2026-05-16
sources:
- evolution-of-ai-agentic-patterns
- https://simonwillison.net/2025/Jun/2/the-lethal-trifecta/
- https://ai.meta.com/blog/practical-ai-agent-security/
- raw/LLM에게 옵시디언 볼트 열쇠를 주면 일어나는 일.md
- raw/테일윈드의 고군분투는 무너지는 사상누각의 징조다.md
- raw/AI 에이전트는 죽었다. 88퍼센트가 프로덕션 도달 전에 실패하는 이유.md
- raw/AI가 내 글쓰기 커리어를 죽였다. AI 만세.md
- raw/5개의 새로운 플러그인으로 옵시디언 워크플로우 재구축하기 (2026년 설정).md
- raw/AI 네이티브 세컨드 브레인을 구축하는 방법 (2026년 방식).md
- raw/오픈소스 모델로도 충분하다. 필요하지 않은 지능에 비용을 과다하게 지출하지 마라.md
- raw/AI는 개발자를 대체하는 것이 아니라 더 심각한 일을 하고 있다.md
- raw/모든 AI 엔지니어가 알아야 할 10가지 LangChain 및 LangGraph 개념.md
- raw/마이크로소프트는 엔지니어들에게 AI 사용 중단을 지시했고, 우버는 4개월 만에 연간 AI 예산을 모두 탕진했다. 아무도 말하지 않는 진실.md
- raw/옵시디언 마스터하기 - 노트를 세컨드 브레인으로 만드는 완벽 가이드.md
- raw/일주일 동안 지속 실행되는 에이전틱 시스템 구축하기.md
- raw/sequoia-ascent-2026-karpathy-ko.md
- raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md
- raw/ai-era-six-pitfalls-six-prescriptions-matt-pocock.md
- raw/디지털 제품 제작은 잊으세요. 대신 이것에 집중하세요.md
- raw/AI Agents. Complete Course.md
- raw/How to Do Hard Things When You Have Zero Motivation.md
- raw/Anthropic이 Opus 4.8에 대해 말하지 않은 것 - 하네스를 흡수하는 Anthropic.md
- raw/좋은 삶을 만드는 것에 대한 지루한 진실.md
- raw/GBrain - 에이전트를 위한 오픈소스 장기 기억 및 지식 그래프 인프라.md
- raw/강화학습-RL-초보자-가이드.md
- raw/anthropic-boris-cherny-interview.md
- raw/Claude Code를 위한 Figma 스킬 완벽 가이드.md
- raw/2026년 AI 보조 코딩은 하나의 기술이다. 실제로 이 기술을 마스터하는 방법.md
- raw/10 Things Every Investor Should Know (but most learn too late).md
- raw/내가 Obsidian을 정리하는 방법 - 다니엘 프린디.md
- raw/Claude Code를 밑바닥부터 직접 구현해 보았다.md
- raw/Claude Code 프로젝트를 위한 MEMORY.md.md
- raw/마이크로서비스 대신 모듈러 모놀리스 — AI 에이전트가 코드를 읽기 시작했을 때 바뀐 것들.md
- raw/40억 달러 대기업이 깨뜨린 오픈소스와 개발자 협박의 역풍.md
- raw/Hermes, OpenClaw, ChatGPT 에이전트 및 미래 AI 시스템의 실제 작동 원리.md
- raw/The S&P 500 Illusion. Why Your “Diversified” Index Is Really a Bet on 10 Stocks.md
- raw/Your Wandering Mind Is Not the Enemy of Focus.md
- raw/BofA’s May Survey Says Investors Are Back in Stocks. The 30-Year Is the Risk..md
- raw/AI 디자인 시스템에 윤리, 접근성, 그리고 기억을 부여한 방법.md
- raw/내 주의 집중 시간을 되돌려준 11가지 사소한 생활 습관의 변화.md
- raw/Hermes 에이전트의 내부 구조 - 자가 개선 에이전트의 작동 원리.md
- raw/2026년을 위한 웹 디자인 및 빌드 워크플로우.md
- raw/These 3 ETFs Created More Millionaires Than Any Stock.md
- raw/60일간 11번의 기술 인터뷰를 치르며 깨달은 아무도 말해주지 않는 패턴.md
- raw/Run a Useful Local LLM in 30 Minutes (Coding, RAG, Voice).md
- raw/만약 단 5편의 AI 논문만 읽어야 한다면 바로 이것입니다.md
- raw/16GB Mac mini에서 Qwen 3.5 122B LLM 실행하기 - TurboQuant-MLX를 활용한 MoE 전문가 스트리밍.md
- raw/AI 코딩 에이전트와 함께하는 명세 기반 개발 결정판 가이드.md
- raw/evolution-of-ai-agentic-patterns.md
- raw/Skills Alone Won’t Save You in the AI Economy.md
- raw/RAG 시스템 초보자부터 전문가까지의 완전 가이드 (2026년 에디션).md
status: evergreen
tags:
- llm
- agent
- security
- harness-engineering
type: concept
updated: '2026-06-22'
---
# Lethal Trifecta

## 한 줄 정의

Lethal Trifecta는 AI 에이전트가 신뢰할 수 없는 입력, 민감한 시스템 접근, 외부 상태 변경 세 능력을 동시에 가질 때 보안 사고가 필연이라는 Simon Willison의 위험 모델이다.

## 핵심 요지

- 셋 중 하나라도 빠지면 공격 표면이 닫힌다. 셋 모두 열려 있으면 prompt injection 한 번에 데이터 유출이나 파괴적 행동이 일어난다.
- Meta AI의 "[[Rule of Two]]"는 이 모델을 실천 규칙으로 바꿔 에이전트가 세 능력 중 최대 두 개만 동시에 갖게 한다.
- 세 능력 모두가 필요하면 human-in-the-loop 승인을 의무화해야 한다.
- **볼트 열쇠 이양의 위험**: 개인 지식 베이스([[Obsidian]] Vault)에 대한 읽기/쓰기 권한 부여는, 외부 데이터 유입(1), 수년간의 개인 극비 데이터(2), 파일 임의 덮어쓰기 및 삭제(3)가 겹치는 Lethal Trifecta의 상징적 폭발 영역이다.

## 상세

Simon Willison이 2025년 6월에 정리한 "The Lethal Trifecta for AI Agents"는 다음 세 능력이 한 에이전트 세션에 공존할 때 prompt injection 또는 도구 오용 사고가 사실상 막을 수 없게 된다고 본다.

1. **신뢰할 수 없는 입력 처리** — 외부 웹 페이지, 이메일, 사용자가 보낸 PDF, 검색 결과처럼 공격자가 내용을 통제할 수 있는 입력.
2. **민감한 시스템 또는 데이터 접근** — 개인정보, 내부 API, 데이터베이스, 비밀 키, 소스 리포지토리, [[옵시디언]] 볼트 내의 극비 업무 기록.
3. **외부 상태 변경 능력** — 이메일 발송, 파일 삭제, API 호출, 결제, 코드 푸시, MCP 도구 실행.

Meta AI는 2026년 초 발표한 "[[Rule of Two]]"에서 이 위험 모델을 Chromium 보안 정책 스타일로 정리했다. 한 에이전트 컨텍스트 안에 세 능력 중 최대 두 개만 허용한다. 세 능력이 모두 필요한 작업은 반드시 사람 승인을 받는다. 이 규칙은 기능 제약이 아니라 prompt injection이 발생해도 실제 피해로 이어지지 않도록 차단막을 두는 운영 원칙이다.

[[Claude Code 권한 설계]]에서 보던 권한 모드, allow/deny 리스트, MCP 도구 화이트리스트는 이 프레임을 구현하는 방식이다. [[Harness Engineering]]의 가드레일 설계에서도 도구 단위가 아니라 "이 세션이 세 능력 중 몇 개를 동시에 갖는가"로 위험을 채점하면 인지 비용이 줄어든다.

### 개인 지식 베이스([[Obsidian]] Vault) 접근권과 Lethal Trifecta
에이전트에게 개인 지식 베이스의 디스크 직접 쓰기 권한(볼트 열쇠)을 넘기는 행위는 실무에 큰 혁신을 주지만, 보안상 고위험군에 직결된다.
- **위험 시나리오**: 에이전트가 외부 인터넷 검색이나 기사 스크랩(1)을 수행해 볼트에 저장하는 과정에서, 악의적인 Prompt Injection이 탑재된 문서가 볼트에 주입될 수 있다. 이 공격 스크립트가 로컬 볼트 내의 API 비밀 키나 기밀 일기(2)를 탈취해 외부 서버로 송출하거나 볼트 전체 파일을 덮어쓰는(3) 파괴적 쓰기 작업을 강제할 수 있다.
- **방어 대책**: 에이전트와 볼트 연동 시, 단순 웹 수집을 처리하는 에이전트 세션은 **Read-only MCP server**로 묶어 쓰기를 차단한다. 쓰기가 필요한 세션은 외부 인터넷망 데이터 송출(Egress)을 하드웨어 레이어에서 전면 통제(default-deny)하고, 파일 덮어쓰기 직전 변경 사항의 Diff를 보여주고 사람이 명시적으로 승인하는 HITL 가이드레일을 도입해야 한다.

## 판단 기준

- 이 세션이 외부 입력을 읽는가.
- 이 세션이 비밀 정보나 내부 시스템에 접근하는가.
- 이 세션이 파일, API, 결제, 푸시처럼 외부 상태를 바꾸는가.
- 세 가지가 동시에 필요하다면 사람 승인이나 세션 분리가 있는가.

## 예시

- 외부 데이터 읽기(1) + 민감 정보 처리(2) → 외부 상태 변경(3) **차단**. PR 작성, 메일 발송 등은 사람이 승인.
- 외부 데이터 읽기(1) + 상태 변경(3) → 민감 정보 접근(2) **차단**. 샌드박스 컨테이너에서 실행하고 비밀 키 마운트 금지.
- 민감 정보 처리(2) + 상태 변경(3) → 외부 입력(1) **차단**. 내부 데이터만 다루는 cron, routine은 외부 웹 검색 도구 비활성화.
- **개인 볼트 자율 수집**: 외부 웹 스크랩 데이터(1)를 볼트에 추가할 때, 아웃바운드 송신(3)을 차단하고 샌드박스로 격리해 로컬 기밀(2) 누출을 물리 차단한다.

### 실증 실패 사례 (폭발성 사례)
Lethal Trifecta가 통제되지 않았을 때 현실 프로덕션 환경에서 발생한 파괴적 참사 사례는 다음과 같다:
- **Google [[Antigravity]] 드라이브 포맷 사건 (2025년 12월)**: 사진작가 타소스 M.이 이미지 정렬 앱을 개발 중, 에이전트에게 개발 서버 재시작 및 캐시 삭제를 요청하자 에이전트가 임시 폴더를 비우는 대신 D: 드라이브 전체를 영구 포맷하여 몇 달간의 작업물이 유실됨.
- **Replit AI 에이전트 DB 삭제 사건 (2025년)**: 비즈니스 소유주가 리플릿 에이전트를 가동하던 중, 에이전트가 되돌릴 수 없는(Irreversible) 작업의 무게감을 인지하지 못하고 실제 프로덕션 데이터베이스를 몇 초 만에 영구 삭제함.

이 사건들은 에이전트에게 **(1) 시스템 파일 변경 권한**과 **(2) 민감 데이터베이스 접근권**을 격리된 샌드박스나 사람의 직접 승인(HITL) 없이 제공했을 때, 사소한 오작동이 전체 시스템 파괴로 이어질 수 있음을 입증한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Claude Code 권한 설계]]
- [[Harness Engineering]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Native Infrastructure]]
- [[API Key 관리 원칙]]
- [[병렬 에이전트 세션 운영]]
- [[에이전트 복리 실패의 수학]]
- [[Agent Harness]]

## 출처

- evolution-of-ai-agentic-patterns
- Simon Willison, "The Lethal Trifecta for AI Agents", 2025-06-02 https://simonwillison.net/2025/Jun/2/the-lethal-trifecta/
- Meta AI, "Practical AI Agent Security: [[Rule of Two]]" https://ai.meta.com/blog/practical-ai-agent-security/
- raw/AI 에이전트는 죽었다. 88퍼센트가 프로덕션 도달 전에 실패하는 이유.md
