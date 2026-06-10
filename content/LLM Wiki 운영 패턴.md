---
type: workflow
status: evergreen
core: true
tags:
  - llm
  - wiki
  - obsidian
aliases:
  - Karpathy의 LLM Wiki
  - LLM Wiki
  - 파일 캐비닛 아키텍처
sources:
  - AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법
  - Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻
  - 더 빨리 배우고 싶다면 이 노트 정리 방식을 써라
  - 완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다
  - Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번
  - Karpathy의 LLM Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다
  - How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)
  - raw/옵시디언 AI 제2의 뇌는 기억이 아니다.md
created: 2026-05-24
updated: 2026-06-10
---

# LLM Wiki 운영 패턴

## 한 줄 정의

LLM Wiki 운영 패턴은 raw 문서를 단순히 보관하는 메모장(Notebook) 단계를 넘어, 에이전트가 점진적으로 정제하고 연결하는 파일 캐비닛(Filing Cabinet) 아키텍처이자, 요약-우선 탐색(Summary-first navigation)과 자동 인덱싱 루프로 구성된 지속형 마크다운 지식 관리 워크플로우다.

## 핵심 요지

- **역할군 분리**: 단순 저장소는 기억이 아니다. 지식 베이스는 텍스트 수집용 **메모장(Notebook)**, 요약본과 관계 지도를 지닌 **파일 캐비닛(Filing Cabinet)**, 대용량 트랜잭션용 **데이터베이스(Database)**로 나뉘며, LLM Wiki는 100개 문서 이내에서 효율적인 '파일 캐비닛' 아키텍처에 해당한다.
- **3단계 로컬 파이프라인**: 1단계 **수집(Ingest)**(raw 파일 수집) ➡️ 2단계 **편찬(Compile)**(개념/출처 노트 파생 및 백링크 형성) ➡️ 3단계 **질의(Query)**(인덱스 기반 선별 독해)로 순환 작동한다.
- **요약-우선 탐색(Summary-first navigation)**: 모든 지식 노트 상단에 `> [!summary]` 블록을 필수로 기입하고, 질문 처리 시 본문 전체가 아닌 요약 블록과 자동 빌드된 `index.md`만 먼저 읽어 탐색 토큰 및 연산 비용을 획기적으로 차단한다.
- **인덱스 자동 갱신 훅**: 파일 수정 즉시 `PostToolUse` 훅이 발동해 `scripts/rebuild_index.py` 파이썬 코드가 30ms 이내에 `index.md`를 갱신함으로써 에이전트에게 항상 신선한 지도를 제공한다.
- **RAG 마이그레이션 임계값**: 마크다운 기반 탐색은 **약 100개 문서(약 40만 단어)** 규모에 도달하면 개념 충돌과 토큰 부담이 급증하여 한계에 도달한다. 이 시점에는 ChromaDB/DuckDB 로컬 벡터 DB 레이어를 추가해 하이브리드 투 트랙 탐색 구조로 마이그레이션한다.
- **아키텍처 실패 지점 예방**: 조작된 인용 부호, 요약본의 산화(Summary rot), 무분별한 개념 승급, 데이터 만능주의 등 7가지 약점과 그에 맞는 유효성 검증 체계를 마련해야 한다.

## 상세


이 패턴은 [[Thinking과 Understanding 분리]]와도 연결된다. raw를 바로 검색해 답만 받으면 thinking은 외주화되지만 이해는 남지 않기 쉽다. 반대로 wiki를 점진적으로 편집하면 사람이 직접 읽고 연결한 구조가 쌓이므로, 에이전트는 정리와 탐색을 맡고 사람은 어떤 개념이 중요한지, 어떤 충돌을 남겨야 하는지, 어떤 기준으로 핵심 노트를 승격할지 이해 중심의 역할을 맡게 된다.

또한 instruction 파일은 단순한 프롬프트가 아니라 wiki maintainer를 만드는 운영 매뉴얼이다. 이 점에서 [[Claude.md 운영 원칙]]은 coding agent용 메모리 파일 일반론이고, LLM Wiki는 그 원칙을 지식 베이스 운영 도메인에 적용한 구체 사례다.


포맷 관점에서도 이 패턴은 여전히 유효하다. wiki의 source of truth는 수정·diff·wikilink 관리가 쉬운 Markdown이 적합하다. 다만 사람이 읽는 최종 브리프, 시각화된 요약, 배포용 지식 카드까지 같은 포맷으로 고집할 필요는 없다. 이때는 [[AI 산출물 포맷 결정 트리]]처럼 Markdown source 위에 HTML artifact를 얹는 분리가 더 현실적이다.

## 예시

이 vault의 기준으로 보면 `raw/안드레_카파시_인터뷰_정리.md`를 넣고 "ingest"를 실행했을 때 결과가 `[[Software 3.0]]`, `[[Jagged Intelligence]]`, `[[Neural Computer]]`처럼 개념 노트로 분해되는 흐름이 LLM Wiki 운영 패턴이다. 이후 사용자가 "AI 코딩 에이전트 결과를 언제 신뢰할 수 있나"를 물으면 raw 인터뷰를 다시 훑기보다 `[[AI 코딩 에이전트 검증 전략]]` 같은 wiki 노트를 읽어 답하고, 그 답변이 재사용 가치가 크면 새 노트나 기존 노트 보강으로 승격한다.

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

