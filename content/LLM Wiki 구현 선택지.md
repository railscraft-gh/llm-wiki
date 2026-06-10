---
type: workflow
status: evergreen
core: false
tags:
  - llm
  - wiki
  - workflow
  - agent
aliases:
  - LLM Wiki app vs skill
  - purpose.md 운영
sources:
  - Karpathy의 LLM Wiki로 스스로 유지되는 개인 지식 베이스를 30분 만에 만들었다
  - Karpathy의 LLM Wiki를 두 번 만들었다. 코드로 한 번, 단일 .md로 한 번
  - 완성형 LLM Wiki 앱을 찾고 나서 내가 실제로 필요했던 더 작은 것을 만들었다
  - How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)
created: 2026-05-26
updated: 2026-06-03
---

# LLM Wiki 구현 선택지

## 한 줄 정의

LLM Wiki 구현 선택지는 같은 위키 유지 패턴을 app, package, skill, 단일 `AGENTS.md` 중 어느 수준으로 굳힐지 corpus 규모와 운영 요구에 따라 고르는 기준이다.

## 핵심 요지

- 작은 개인 위키는 `AGENTS.md`나 skill만으로도 충분히 강하게 굴릴 수 있다.
- corpus가 크고 재현성, audit trail, downstream automation이 중요해질수록 package나 app 쪽이 유리하다.
- 구현 수준이 달라도 공통으로 필요한 습관은 `purpose.md`, 2단계 ingest, review item, source summary, index/log 갱신이다.

## 상세

세 raw를 함께 보면 LLM Wiki는 하나의 제품이 아니라 여러 구현 수준을 가질 수 있는 패턴으로 읽힌다. 가장 가벼운 형태는 `raw/`, `wiki/`, `AGENTS.md`만으로 돌아가는 유지형 markdown wiki다. 이 수준에서는 Codex나 Claude Code가 wiki maintainer처럼 행동하도록 instruction을 주고, 사람이 source를 넣고 질문하며, agent가 정리와 filing을 맡는다.

`raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md`는 그 패턴이 결국 사고의 외부화라는 점을 분명히 한다. wiki의 가치는 저장소 크기가 아니라, 읽고 연결하고 다시 쓰는 동안 생각이 어떻게 바뀌는지에 있다.

좀 더 무거운 형태는 programmatic package다. typed contract, deterministic ID, structured pipeline, batch run, audit trail, markdown processing layer를 붙여 결과 재현성과 자동화를 높인다. corpus가 크고 wiki가 또 다른 시스템의 입력이 될수록 이쪽 이점이 커진다. 가장 무거운 형태는 full app이다. document import, graph, search, clipping, review queue, background ingest job까지 포함해 non-technical user도 다룰 수 있게 만든다.

하지만 구현 수준과 별개로 반복 등장하는 유지 습관이 있다. 첫째, **`purpose.md`**다. wiki가 왜 존재하는지 써 두면 source를 읽을 때 "무엇을 보존할 가치가 있는가"가 선명해진다. 둘째, **2단계 ingest**다. 바로 page를 쓰지 말고 먼저 entity, claim, contradiction, destination을 분석한 뒤 생성하면 오래된 문서나 draft 문서를 확정 사실처럼 오염시키는 일을 줄일 수 있다. 셋째, **review item**이다. KPI owner, 충돌하는 정의, 외부 검증 필요 claim처럼 판단이 필요한 항목을 별도로 남겨 비동기 human review로 넘긴다.

즉 이 노트의 요점은 "앱이 더 낫다"가 아니다. 현재 작업장에 가장 가까운 구현 수준을 고르되, `purpose.md`, staged ingest, review queue 같은 좋은 유지 습관은 작은 시스템에도 바로 이식하라는 것이다.

## 예시

- 개인 연구 위키: `AGENTS.md` + `purpose.md` + `index/log` + source summary
- 팀 위키: project skill + review page + synthesis page + scheduled lint
- 대규모 corpus: typed pipeline + deterministic ID + markdown processing layer

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[LLM Wiki 운영 패턴]]
- [[Claude.md 운영 원칙]]
- [[Agent Native Infrastructure]]
- [[AI 산출물 포맷 결정 트리]]
- [[학습용 노트 외부화 원칙]]

