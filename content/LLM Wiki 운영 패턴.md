---
aliases:
- Karpathy의 LLM Wiki
- LLM Wiki
- 파일 캐비닛 아키텍처
- LLM-Wiki-운영-패턴
core: true
created: 2026-05-24
sources:
- AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법
- Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻
- 더 빨리 배우고 싶다면 이 노트 정리 방식을 써라
- 완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다
- Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번
- Karpathy의 LLM Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다
- How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)
- raw/옵시디언 AI 제2의 뇌는 기억이 아니다.md
- raw/클로드 디자인은 과연 디자이너를 대체할까.md
- raw/2026년 AI 에이전트 워크플로우 핵심 패턴 분석.md
- raw/AI Agent Best Practices. Production-Ready Harness Engineering (2026 Guide)-ko.md
- raw/You’re Using AI to Write Code. You’re Not Using It to Review Code.-ko.md
- raw/완벽하게 기계 가독성을 갖춘 디자인 시스템.md
- raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
- raw/2026년 오픈소스 LLM 플랫폼 비교 가이드 - Ollama, OpenRouter, Groq, NVIDIA NIM.md
- raw/파이썬 AI 에이전트 프레임워크 6종 비교 분석.md
- raw/2026년 실제로 나오는 생성형 AI 면접 질문 40선과 답변.md
- raw/더 빨리 배우고 싶다면 이 노트 정리 방식을 써라.md
- raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법.md
- raw/After Claude Code. 6 Open-Source Tools You Should Know-ko.md
- raw/AI가 생성한 UI 디자인은 이제 인간 디자이너의 80퍼센트보다 우수하다.md
- raw/CLAUDE.md 파일 하나가 바이럴을 탔다. 이유는 민망할 정도로 단순하다.md
- raw/Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번.md
- raw/UI 디자인을 위한 최고의 AI 도구 10가지와 워크플로우.md
- raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually
  For)-ko.md
- raw/2026년을 지배하는 AI GitHub 저장소들, 왜 알아둬야 하는가.md
- raw/AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법 - 출판형 다듬기.md
- raw/Hermes Agent와 Ollama 로컬 설치 초고속 가이드.md
- raw/원시인 모드로 토큰 아끼려다 6만 스타 오픈소스에 PR 보낸 이야기.md
- raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
- raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md
- raw/완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다.md
- raw/99%의 사람보다 더 나은 Harness Engineer를 만드는 법.md
- raw/Agentic AI, design systems & Figma. a practical guide-ko.md
- raw/느낌 코딩의 시대는 끝났다 - GitHub Spec Kit과 명세 기반 개발.md
- raw/SpaceX의 파격적인 AI 인프라 전략 - 순수 C 언어로 22만 대 GPU를 제어하다.md
- raw/Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요.md
- raw/How to write a DESIGN.md file Claude can actually use-ko.md
- raw/Karpathy의 LLM Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다.md
- raw/지루한 업무를 자동화하는 클로드 코워크 프롬프트 7가지.md
- raw/당신의 고양이가 챗GPT보다 세상을 더 잘 이해하는 이유.md
- raw/The Open-Source Agent Toolkit in 2026-ko.md
- raw/How to Get Into the Top 1% in the Next 12 Months-ko.md
- raw/I Ran OpenClaw and Hermes on the Same Server. Today I Deleted One of Them.-ko.md
- raw/인생의 성공을 결정하는 5가지 핵심 자질.md
- raw/Why senior designers are doing four jobs for one salary in 2026-ko.md
- raw/Hermes Agent Is Cool. Running It Safely 24_7 Is the Real Trick.-ko.md
- raw/Claude Code와 Obsidian으로 AI 세컨드 브레인 구축하기.md
- raw/Hermes 에이전트와 함께 사용하기 좋은 오픈소스 내부 도구 5가지.md
- raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
status: evergreen
tags:
- llm
- wiki
- obsidian
type: workflow
updated: '2026-06-22'
---
# [[LLM]] Wiki 운영 패턴

## 한 줄 정의

[[LLM]] Wiki 운영 패턴은 raw 문서를 단순히 보관하는 메모장(Notebook) 단계를 넘어, 에이전트가 점진적으로 정제하고 연결하는 파일 캐비닛(Filing Cabinet) 아키텍처이자, 요약-우선 탐색(Summary-first navigation)과 자동 인덱싱 루프로 구성된 지속형 마크다운 지식 관리 워크플로우다. 이 패턴은 [[GBrain]] 같은 장기 기억/지식 그래프 인프라와 붙을 때 더 강해진다.

## 핵심 요지

- **역할군 분리**: 단순 저장소는 기억이 아니다. 지식 베이스는 텍스트 수집용 **메모장(Notebook)**, 요약본과 관계 지도를 지닌 **파일 캐비닛(Filing Cabinet)**, 대용량 트랜잭션용 **데이터베이스(Database)**로 나뉘며, [[LLM]] Wiki는 100개 문서 이내에서 효율적인 '파일 캐비닛' 아키텍처에 해당한다.
- **3단계 로컬 파이프라인**: 1단계 **수집(Ingest)**(raw 파일 수집) ➡️ 2단계 **편찬(Compile)**(개념/출처 노트 파생 및 백링크 형성) ➡️ 3단계 **질의(Query)**(인덱스 기반 선별 독해)로 순환 작동한다.
- **요약-우선 탐색(Summary-first navigation)**: 모든 지식 노트 상단에 `> [!summary]` 블록을 필수로 기입하고, 질문 처리 시 본문 전체가 아닌 요약 블록과 자동 빌드된 `index.md`만 먼저 읽어 탐색 토큰 및 연산 비용을 획기적으로 차단한다.
- **인덱스 자동 갱신 훅**: 파일 수정 즉시 `PostToolUse` 훅이 발동해 `scripts/rebuild_index.py` 파이썬 코드가 30ms 이내에 `index.md`를 갱신함으로써 에이전트에게 항상 신선한 지도를 제공한다.
- **[[RAG]] 마이그레이션 임계값**: 마크다운 기반 탐색은 **약 100개 문서(약 40만 단어)** 규모에 도달하면 개념 충돌과 토큰 부담이 급증하여 한계에 도달한다. 이 시점에는 ChromaDB/DuckDB 로컬 벡터 DB 레이어를 추가해 하이브리드 투 트랙 탐색 구조로 마이그레이션한다.
- **아키텍처 실패 지점 예방**: 조작된 인용 부호, 요약본의 산화(Summary rot), 무분별한 개념 승급, 데이터 만능주의 등 7가지 약점과 그에 맞는 유효성 검증 체계를 마련해야 한다.

## 상세

### 1. Steph Ango의 Agent Skills (2026년 1월 릴리스)
옵시디언 CEO Steph Ango는 2026년 1월 공식 Agent Skills(2026년 5월 기준 깃허브 스타 33,000개 돌파, 포크 수 2,297개)를 배포했다. 이는 AI 에이전트가 옵시디언의 파일 구조(`obsidian-markdown`, `obsidian-bases`, `json-canvas`, CLI/Defuddle)를 이해하도록 돕는 문법 명세 패키지로, 에이전트가 옵시디언 형식을 읽고 쓰도록 훈련시킨다. [[LLM]] Wiki는 이 기술 명세 레이어 위에 '기억'으로서의 유기적 작동 원칙을 얹은 구조다.

### 2. 3단계 로컬 파이프라인 규칙
- **1단계: 수집 (Ingest)**: `raw/` 폴더에 날것의 웹 스크랩, 녹취록 등을 보존한다. 에이전트는 처음부터 전체를 다 읽지 않고 초반 500 토큰만 속독하여 주제를 파악한다.
- **2단계: 편찬 (Compile)**: 1:1 출처(Source) 노트와 핵심 개념(Concept) 노트를 파생한다. 
  - *개념 승급 기준*: 특정 개념이 **최소 2개 이상의 서로 다른 소스 파일**에서 교차 포착될 때만 개념 노드로 등극시켜 싱글톤(singleton) 노드의 범람을 막는다.
  - *양방향 백링크*: 개념 노트(`sources: [...]`)와 출처 노트(`concepts: [...]`)의 참조 링크를 상호 촘촘히 엮어 그래프의 선(edge) 역할을 하게 만든다.
- **3단계: 질의 (Query)**: 질문을 받으면 가장 먼저 색인 문서인 `index.md`를 열고 5개 이내의 개념 후보지를 추려 요약 블록만 속독한 뒤, 최종 본문만 선별 정독하여 답변한다. 출처가 없으면 억지로 답변하지 않고 `(지식 보관함에 출처 없음)`을 덧붙여 할루시네이션을 방어한다.
- **4단계: 정기 점검 (Lint pass)**: 고아 노드 플래그 처리, 30일 초과된 stub 합치기, 중복 개념 병합을 정기적으로 수행한다.

### 3. 인덱스 자동화 훅 아키텍처
에이전트가 파일 쓰기를 완료한 직후 `PostToolUse` 훅이 작동한다. 훅은 수정된 파일이 `Concepts/`나 `Sources/`에 속할 때만 인덱스 최적화 파이썬 스크립트(`scripts/rebuild_index.py`)를 백그라운드로 호출한다.

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit|MultiEdit",
      "hooks": [{
        "type": "command",
        "command": "bash \"$CLAUDE_PROJECT_DIR/.claude/hooks/rebuild_index.sh\""
      }]
    }]
  }
}
```

- **성능 제약**: 프로그래머의 타이핑 흐름을 방해하지 않기 위해 인덱스 갱신 연산은 반드시 100ms 이내(보통 30ms 이내)에 완결되어야 한다.
- **스트림 처리**: 에러로 인해 세션이 중단되는 것을 막기 위해 모든 갱신 로그는 stdout이 아닌 stderr로 리다이렉트한다.

### 4. 아키텍처 실패 지점 및 예방책 (7대 리스크)
1. **조작된 인용 부호**: 에이전트가 존재하지 않는 가상 노트를 위키링크로 첨부하는 현상. 답변 출력 직후 실제 파일 경로와의 일치 여부를 검사하는 유효성 체크 훅으로 방어한다.
2. **요약본의 산화 (Summary rot)**: 본문만 갱신되고 요약창이 방치되는 문제. 린트 시점에 본문 내용과 요약문 간의 의미적 유사도 괴리를 감지하여 경고 플래그를 띄운다.
3. **무분별한 개념 승급**: 승급 허들을 무시하고 고아성 노드가 난립하는 현상. 인바운드 링크가 2개 미만인 노드를 정기적으로 강등시키는 수동 결단 루프가 필요하다.
4. **데이터 만능주의**: 흘러가는 모든 피드를 스크랩하는 현상. `raw/`에 들어온 임시 정보는 90일 만료 시 자동 삭제되도록 스크립트로 정리한다.
5. **보안 사각지대 (MCP leak)**: 사설 MCP 서버로 인해 사적인 데이터 전체가 클라우드로 오염되는 위협. 외부 클라우드 통신을 지양하고 로컬 디스크 파싱 아키텍처를 원칙으로 고수한다.
6. **압축(Compaction) 세션 방해**: 대화 도중 컨텍스트가 압축되어 상태가 뭉뚱그려지는 위협. 디스크에 이미 기록된 데이터 상태(State)가 최종 Source of Truth가 되게 하여 압축 후에도 이어서 작업을 할 수 있게 한다.
7. **[[RAG]] 마이그레이션 지연**: 질문당 평균 토큰 소모량과 `/cost`를 모니터링하여, 일주일 동안 질문당 평균 8K 토큰을 초과할 경우 로컬 벡터 DB(ChromaDB/DuckDB와 bge-m3 모델) 마이그레이션 기준점을 설정하여 성능 저하를 방어한다.

### 5. 아키텍처 빌드 오더 (5단계)
1. **인덱스 파이프라인 구축**: `rebuild_index.py`와 백그라운드 훅 세팅을 최우선으로 완료하여 뼈대를 다진다.
2. **템플릿 문서 규격 확정**: `concept.md` 및 `source.md` 뼈대 규격을 먼저 맞춘다.
3. **핵심 스킬 및 샘플 문서 배치**: 수집 스킬과 질문 스킬을 배치하고, 사람이 직접 쓴 모범 예시(few-shot) 문서 1쌍을 디스크에 상주시켜 에이전트를 교육한다.
4. **첫 수집 및 톤앤매너 튜닝**: `raw/`에 샘플을 던져 넣고 수집 스킬을 가동해 포맷 준수 여부를 확인한다.
5. **전체 인덱스 뷰 모니터링**: 개별 노드의 세부 모양새보다 메인 `index.md`가 에이전트에게 유기적인 지도의 역할을 충실히 하는지 점검한다.

이 패턴은 [[Thinking과 Understanding 분리]]와도 연결된다. raw를 바로 검색해 답만 받으면 thinking은 외주화되지만 이해는 남지 않기 쉽다. 반대로 wiki를 점진적으로 편집하면 사람이 직접 읽고 연결한 구조가 쌓이므로, 에이전트는 정리와 탐색을 맡고 사람은 어떤 개념이 중요한지, 어떤 충돌을 남겨야 하는지, 어떤 기준으로 핵심 노트를 승격할지 이해 중심의 역할을 맡게 된다.

또한 instruction 파일은 단순한 프롬프트가 아니라 wiki maintainer를 만드는 운영 매뉴얼이다. 이 점에서 [[Claude.md 운영 원칙]]은 coding agent용 메모리 파일 일반론이고, [[LLM]] Wiki는 그 원칙을 지식 베이스 운영 도메인에 적용한 구체 사례다.


포맷 관점에서도 이 패턴은 여전히 유효하다. wiki의 source of truth는 수정·diff·wikilink 관리가 쉬운 Markdown이 적합하다. 다만 사람이 읽는 최종 브리프, 시각화된 요약, 배포용 지식 카드까지 같은 포맷으로 고집할 필요는 없다. 이때는 [[AI 산출물 포맷 결정 트리]]처럼 Markdown source 위에 HTML artifact를 얹는 분리가 더 현실적이다.

## 예시

이 vault의 기준으로 보면 `raw/안드레_카파시_인터뷰_정리.md`를 넣고 "ingest"를 실행했을 때 결과가 `[[Software 3.0]]`, `[[Jagged Intelligence]]`, `[[Neural Computer]]`처럼 개념 노트로 분해되는 흐름이 [[LLM]] Wiki 운영 패턴이다. 이후 사용자가 "AI [[코딩 에이전트]] 결과를 언제 신뢰할 수 있나"를 물으면 raw 인터뷰를 다시 훑기보다 `[[AI 코딩 에이전트 검증 전략]]` 같은 wiki 노트를 읽어 답하고, 그 답변이 재사용 가치가 크면 새 노트나 기존 노트 보강으로 승격한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트
- [[Software 3.0]]
- [[Thinking과 Understanding 분리]]
- [[Agent Native Infrastructure]]
- [[Claude.md 운영 원칙]]
- [[AI 코딩 에이전트 검증 전략]]
- [[AI 산출물 포맷 결정 트리]]
- [[학습용 노트 외부화 원칙]]
- [[LLM Wiki 구현 선택지]]
- [[GBrain]]
- [[유기적 개인 지식 시스템]]

## 출처

- AI로 스스로 유지되는 지식 베이스를 Karpathy의 [[LLM]] Wiki로 만든 방법
