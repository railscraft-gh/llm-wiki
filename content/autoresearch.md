---
type: tool
status: evergreen
core: true
tags:
  - agent
  - framework
aliases:
  - autoresearch
  - 자율 연구 에이전트
sources:
  - raw/Getting Started with Andrej Karpathy’s “autoresearch” — Full Guide.md
created: 2026-07-30
updated: 2026-07-30
---

# autoresearch

## 한 줄 정의
autoresearch는 안드레이 카파시([[Andrej Karpathy]])가 공개한 오픈소스 단일 GPU 자율 연구 하네스 에이전트로, AI 에이전트에게 실제 [[LLM]] 학습 코드와 터미널 실행 권한을 부여하여 신경망 아키텍처 및 하이퍼파라미터를 스스로 개선하고 최적의 학습 가중치를 찾아내도록 설계된 연구 자동화 에이전트 툴이다.

## 핵심 요지
* **시간 고정 실험 루프**: 하드웨어 가속도 차이로 인한 변수를 통제하기 위해 각 학습 실험의 실행 시간을 대략 5분으로 한정(Hard-capped)하여 순수한 모델 성능 변이율을 대조한다.
* **통제된 에이전트 환경**: 에이전트는 오직 `train.py` 모델 코드만 수정 권한을 가지며, 학습 데이터를 전처리하는 `prepare.py`는 고정되어 환경의 일관성을 유지한다.
* **bits-per-byte 지표 평가**: 실험이 끝날 때마다 에이전트가 검증 손실 지표(bpb)를 평가하여, 성능이 개선되었을 때에만 Git 커밋을 기록하고 실패 시 롤백하는 메커니즘을 밟는다.

## 상세
과거의 딥러닝 연구원들은 최적의 인공신경망 조합을 찾기 위해 밤새 수작업으로 파라미터를 고치며 결과를 기다려야 했다. 카파시의 'autoresearch'는 인간 개발자를 지휘 및 감시(Oversight) 역할로 격상시키고, 에이전트에게 샌드박스 제어권과 실제 모델 코딩을 위임했다.

에이전트는 인간이 Markdown으로 작성한 메타-프로그램 지침(`program.md`)을 읽고, `train.py` 내의 최적화 알고리즘(예: AdamW와 Muon 옵티마이저의 배합비) 또는 레이어 정합 구조를 수정하여 5분간 학습을 돌린다. 결과가 이전 최고 수치(bpb)보다 개선되면 스스로 Git 커밋을 기록해 히스토리를 쌓고, 실패 시 이전 버전으로 되돌리는 등 완벽히 자동화된 연구 사이클을 자율 이행한다.

## 예시
* **작동 디렉터리 구성**:
  1. `prepare.py` (토크나이저 및 데이터 가공 - 수정 불가 고정 환경)
  2. `train.py` (약 630줄짜리 GPT 아키텍처 및 학습 루프 소스 - 에이전트 수정 영역)
  3. `program.md` (인간이 작성한 연구 가이드라인 지침서)

## 관련 노트
* [[트랜스포머]]
* [[의도 기반 디자인]]
* [[그래프 엔지니어링]]

## 출처
- [Getting Started with [[Andrej Karpathy]]’s “autoresearch” — Full Guide.md](file:///Users/railscraft/[[Obsidian]]/raw/Getting%20Started%20with%20Andrej%20Karpathy%E2%80%99s%20%E2%80%9Cautoresearch%E2%80%9D%20%E2%80%94%20Full%20Guide.md)
