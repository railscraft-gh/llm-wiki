---
type: concept
status: draft
core: false
tags:
  - llm
  - pkm
  - wiki
aliases:
  - Karpathy LLM Wiki Architecture
sources:
  - raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md
created: 2026-07-21
updated: 2026-07-21
---

# Karpathy 지식 시스템

## 한 줄 정의
Andrej Karpathy가 제안한 PKM(개인 지식 관리) 패러다임으로, 사람이 노트를 작성하고 연결하던 기존 방식에서 벗어나, raw 원천 자료 수집과 질문만을 담당하고 지식의 요약·연결·컴파일·위키 생성 및 유지보수는 LLM이 수행하는 AI 중심 지식 관리 시스템이다.

## 핵심 요지
- **역할의 반전**: 기존 PKM은 사람을 '지식 연결자'로 다루었으나, Karpathy 지식 시스템은 사람을 '원천 자료 공급자 및 질문자'로, LLM을 '위키 생성 및 관리자'로 명확히 분리한다. [raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md#L31-L39](file:///Users/railscraft/Obsidian/raw/How%20to%20Build%20the%20Knowledge%20System%20Andrej%20Karpathy%20Uses%20%28And%20What%20It%E2%80%99s%20Actually%20For%29-ko.md#L31-L39)
- **Obsidian의 위치 파악**: Obsidian 등 지식 도구를 '노트 생성기(Builder)'가 아닌 '시각화 및 탐색 도구(Reader/IDE Layer)'로 전용한다. [raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md#L59-L62](file:///Users/railscraft/Obsidian/raw/How%20to%20Build%20the%20Knowledge%20System%20Andrej%20Karpathy%20Uses%20%28And%20What%20It%E2%80%99s%20Actually%20For%29-ko.md#L59-L62)
- **지식의 암묵적 모순 및 빈틈 발견**: 수백 편의 자료 간 숨은 지식 연결성, 조용한 모순점, 미착지 연구 질문을 LLM이 통합 추론하여 드러낸다. [raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md#L79-L87](file:///Users/railscraft/Obsidian/raw/How%20to%20Build%20the%20Knowledge%20System%20Andrej%20Karpathy%20Uses%20%28And%20What%20It%E2%80%99s%20Actually%20For%29-ko.md#L79-L87)
- **지식의 복리 효과**: 질의응답 결과나 새로운 요약/시각화 산출물이 다시 위키 디렉터리로 환류되어 베이스 지식을 확장한다. [raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md#L67-L70](file:///Users/railscraft/Obsidian/raw/How%20to%20Build%20the%20Knowledge%20System%20Andrej%20Karpathy%20Uses%20%28And%20What%20It%E2%80%99s%20Actually%20For%29-ko.md#L67-L70)

## 상세

### 6단계 구조화 워크플로우
1. **Raw 디렉터리**: 기사, 논문, 저장소, 이미지를 한곳(`raw/`)에 저장한다. [raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md#L47-L52](file:///Users/railscraft/Obsidian/raw/How%20to%20Build%20the%20Knowledge%20System%20Andrej%20Karpathy%20Uses%20%28And%20What%20It%E2%80%99s%20Actually%20For%29-ko.md#L47-L52)
2. **컴파일 단계**: LLM이 raw 폴더를 읽어 개념을 추출하고, 연결·백링크·markdown 위키 문서를 작성한다. [raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md#L53-L58](file:///Users/railscraft/Obsidian/raw/How%20to%20Build%20the%20Knowledge%20System%20Andrej%20Karpathy%20Uses%20%28And%20What%20It%E2%80%99s%20Actually%20For%29-ko.md#L53-L58)
3. **IDE 레이어**: Obsidian은 생성된 위키 구조를 읽고 그래프 뷰로 탐색하는 읽기 전용 창으로 사용된다. [raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md#L59-L62](file:///Users/railscraft/Obsidian/raw/How%20to%20Build%20the%20Knowledge%20System%20Andrej%20Karpathy%20Uses%20%28And%20What%20It%E2%80%99s%20Actually%20For%29-ko.md#L59-L62)
4. **위키 대상 질의**: 외부 인터넷이 아닌 축적된 지식 위키 문서만을 기반으로 정밀한 환각 없는 요약을 추출한다. [raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md#L63-L66](file:///Users/railscraft/Obsidian/raw/How%20to%20Build%20the%20Knowledge%20System%20Andrej%20Karpathy%20Uses%20%28And%20What%20It%E2%80%99s%20Actually%20For%29-ko.md#L63-L66)
5. **환류(Feedback Loop)**: 질의 결과와 합성 문서를 다시 위키로 환류하여 지식의 복리 확장을 도모한다. [raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md#L67-L70](file:///Users/railscraft/Obsidian/raw/How%20to%20Build%20the%20Knowledge%20System%20Andrej%20Karpathy%20Uses%20%28And%20What%20It%E2%80%99s%20Actually%20For%29-ko.md#L67-L70)
6. **린팅 및 무결성 점검**: LLM이 불일치를 탐지하고 빈틈을 자동 보강하는 린트 과정을 거친다. [raw/How to Build the Knowledge System Andrej Karpathy Uses (And What It’s Actually For)-ko.md#L71-L74](file:///Users/railscraft/Obsidian/raw/How%20to%20Build%20the%20Knowledge%20System%20Andrej%20Karpathy%20Uses%20%28And%20What%20It%E2%80%99s%20Actually%20For%29-ko.md#L71-L74)

## 예시
- 500편의 논문을 보유한 연구자가 논문 간 미묘한 결론 차이나 상충 지점을 LLM 위키 린팅 스크립트로 즉시 추출.
- 클리핑된 기술 문서 30개를 읽어들여 툴/개념별 백링크를 포함한 Wiki 노트로 자동 변환.

## 충돌
- 수동 노트 작성 기반의 [[제텔카스텐]](Zettelkasten) 또는 전통적 Obsidian 사용자들은 사람이 직접 노트를 연결하는 과정에서 사고가 일어난다고 주장하지만, Karpathy 시스템은 대량의 멀티모달 자료 종합 시 사람이 직접 연결하는 방식이 스케일링 한계에 부딪힌다고 반박한다.

## 관련 노트
- [[LLM Wiki 운영 패턴]]
- [[AI 세컨드 브레인]]
- [[Agent Native Infrastructure]]

