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
sources:
  - AI로 스스로 유지되는 지식 베이스를 Karpathy의 LLM Wiki로 만든 방법
  - Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻
  - 더 빨리 배우고 싶다면 이 노트 정리 방식을 써라
  - 완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다
  - Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번
  - Karpathy의 LLM Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다
  - How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)
  - raw/Claude Code와 Obsidian으로 AI 세컨드 브레인 구축하기.md
created: 2026-05-24
updated: 2026-06-10
---

# LLM Wiki 운영 패턴

## 한 줄 정의

LLM Wiki 운영 패턴은 raw 문서를 일회성 질의 대상으로 두지 않고, 에이전트가 점진적으로 편집하는 지속형 markdown wiki로 전환하는 지식 베이스 workflow다.

## 핵심 요지

- 핵심 분리는 `raw/`는 읽기 전용 원천 자료, `wiki/`는 에이전트가 관리하는 재사용 지식이라는 역할 구분이다.
- ingest, query, lint를 분리하면 문서 수집, 질문 응답, 품질 점검이 서로 다른 운영 루프로 안정된다.
- index와 log는 단순 부록이 아니라 에이전트가 어디를 읽고 무엇을 갱신할지 찾게 만드는 탐색 장치다.
- 이 패턴의 목적은 답변 자동화보다 이해의 누적이다. 같은 질문을 반복할 때마다 raw를 다시 읽는 대신 wiki 자체가 더 좋아진다.

## 상세

Karpathy의 LLM Wiki 아이디어는 RAG처럼 매번 raw 파일 묶음을 다시 훑어 답을 만드는 방식 대신, 에이전트가 raw를 읽고 개념 페이지, 요약 페이지, 비교 페이지, glossary, index, log를 계속 편집하는 구조를 제안한다. 핵심 산출물은 답변 자체가 아니라 시간이 갈수록 조밀해지는 markdown wiki다.

`raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md`는 이 패턴의 진짜 목적을 더 짧게 정리한다. 지식 시스템은 사실을 더 많이 저장하는 상자가 아니라, 생각을 외부화하고 다시 읽으면서 사고의 구조를 바꾸는 장치다. 그래서 raw를 그대로 쌓는 것보다, wiki로 승격해 연결과 충돌을 남기는 편이 훨씬 중요하다.

운영 단위는 세 레이어로 나뉜다. `raw/`는 PDF, 인터뷰 정리, 기사, 녹취록 같은 원천 자료를 보존하는 층이고, `wiki/`는 개념과 판단 기준을 재구성하는 층이며, schema나 instruction 파일은 에이전트가 어떤 형식과 절차로 움직일지 규정하는 층이다. 이 분리는 [[Agent Native Infrastructure]]의 관점에서 중요하다. 클릭과 기억 대신 파일 구조, 문서 규칙, 로그가 에이전트의 작업 인터페이스가 되기 때문이다.

workflow도 세 갈래다. ingest는 새 raw를 읽고 기존 노트를 보강하거나 새 노트를 만들고, index와 log를 갱신하는 루프다. query는 raw가 아니라 wiki를 우선 읽고 답하게 해, 일회성 답변을 영구 노트로 승격할 기회를 만든다. lint는 깨진 wikilink, 출처 누락, 고아 페이지, 오래된 핵심 노트를 점검해 wiki가 시간이 갈수록 무너지지 않게 한다.


다만 학습의 1차 현장까지 모두 wiki로 대체할 필요는 없다. [[학습용 노트 외부화 원칙]]이 말하듯, 손글씨나 느린 재구성 노트는 understanding을 만드는 층이고, wiki는 그 이해를 장기 재사용 가능한 구조로 바꾸는 층이다. 즉 LLM Wiki는 입력 단계의 학습을 대체하기보다, 학습 후 승격 레이어로 쓰는 편이 더 강하다.

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

