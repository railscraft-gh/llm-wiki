---
type: workflow
status: draft
core: false
tags:
  - llm
  - agent
  - software-engineering
  - productivity
aliases:
  - PR 제어
  - Pull Request Size Control
sources: ['raw/My Best Senior Engineer Quit Last Month. Her Exit Interview Was Scheduled for Forty Minutes. The Last Five Changed How I Run My Team..md']
created: 2026-07-30
updated: 2026-07-30
---

# PR 크기 및 수량 제어

## 한 줄 정의
AI 에이전트의 고속 코드 생산으로 인해 발생하는 [[코드 리뷰 대기열 병목]]과 시니어 엔지니어의 번아웃을 방지하기 위해, 개별 Pull Request(PR)의 라인 수(크기)를 제한하고 처리 중인 PR의 총량(수량)을 통제하는 개발 프로세스 제어 전략이다.

## 핵심 요지
* **리뷰 하중의 [[인지적 비용]]**: 코드 리뷰는 개발 주기 전체에서 [[인지적 비용]]이 가장 막대하게 드는 고강도 노동이다 (raw/My Best Senior Engineer Quit Last Month. Her Exit Interview Was Scheduled for Forty Minutes. The Last Five Changed How I Run My Team..md). AI 코딩 도구를 전면 도입한 이후 코드 리뷰에 소요되는 시간은 200%가량 증가했다 (raw/My Best Senior Engineer Quit Last Month. Her Exit Interview Was Scheduled for Forty Minutes. The Last Five Changed How I Run My Team..md).
* **피상적 리뷰(면죄부 발행) 방지**: 지친 시니어 엔지니어가 시간에 쫓겨 11분 만에 훑어보고 넘기는 대량의 에이전트 코드는 정상적인 리뷰가 아니다 (raw/My Best Senior Engineer Quit Last Month. Her Exit Interview Was Scheduled for Forty Minutes. The Last Five Changed How I Run My Team..md). 이는 잠재적 장애 요인에 미리 승인 도장을 찍어주는 면죄부 발행에 불과하다 (raw/My Best Senior Engineer Quit Last Month. Her Exit Interview Was Scheduled for Forty Minutes. The Last Five Changed How I Run My Team..md).
* **속도와 안정성의 균형**: PR의 크기를 더 작게, 총 개수를 더 적게 조정하면 개발 지표상의 속도(Velocity)는 다소 무뎌질 수 있으나, 보이지 않는 조직의 회복 탄력성과 프로덕션 안정성은 단단해진다 (raw/My Best Senior Engineer Quit Last Month. Her Exit Interview Was Scheduled for Forty Minutes. The Last Five Changed How I Run My Team..md).
* **리뷰 하중(Review Load)의 균등 분산**: 리뷰를 자연스레 해결되는 공짜 작업으로 간주하지 않고, 리뷰 하중을 정량적 지표로 관리하여 특정 시니어의 책상에만 부하가 집중되지 않도록 의무 분산한다 (raw/My Best Senior Engineer Quit Last Month. Her Exit Interview Was Scheduled for Forty Minutes. The Last Five Changed How I Run My Team..md).

## 상세
### 1. PR 크기(Size) 제어
AI 에이전트는 피로를 모르고 수백~수천 라인의 코드를 한 번에 쏟아낼 수 있는 반면, 인간 검증자의 인지 능력과 [[주의력 배터리]]는 한계가 있다. 단일 PR의 변경 범위가 너무 넓어지면 검증의 엄밀함이 떨어져 버그나 아키텍처적 결함이 그대로 통과된다.
따라서, 개별 PR의 변경 라인 수(Lines of Code)에 엄격한 상한선(예: 200라인 이하)을 부여함으로써, 인간 시니어 엔지니어가 한 번에 깊이 있게 몰입하여 엣지 케이스를 잡아낼 수 있는 인지적 환경을 보장한다.

### 2. PR 수량(WIP) 제어
리뷰 대기열(Review Queue)에 쌓이는 active PR의 개수를 제한하지 않으면 병목이 발생하여 전체 사이클 타임이 지연된다.
개발자 또는 에이전트가 동시에 열어둘 수 있는 진행 중인 작업(WIP, Work In Progress)의 PR 개수를 제한함으로써, 코드 리뷰가 병목의 출구에서 웅덩이를 만들지 않고 지속적으로 순환되도록 제어한다.

### 3. 직무 설계와 1대1 피드백 루프 구축
시니어 엔지니어의 핵심 가치는 에이전트가 유발하는 대형 장애를 막는 것뿐만 아니라, 시스템 전체의 아키텍처를 설계하는 창작(Building) 활동에 있다 (raw/My Best Senior Engineer Quit Last Month. Her Exit Interview Was Scheduled for Forty Minutes. The Last Five Changed How I Run My Team..md). PR 제어를 통해 여유를 확보하고, 시니어들에게 창의적인 아키텍처 구현 업무를 재할당해야 한다.
또한, 매니저는 일대일 미팅을 통해 시니어가 단순 [[검증 레이어]]로 전락하여 느끼는 근원적인 무력감을 사전에 조기 진단해야 한다 (raw/My Best Senior Engineer Quit Last Month. Her Exit Interview Was Scheduled for Forty Minutes. The Last Five Changed How I Run My Team..md).

## 예시
### 1. GitHub Actions를 이용한 PR 크기 자동 통제 예시
아래 코드는 PR이 생성되거나 업데이트될 때 변경된 라인 수(LOC)를 검사하여 설정한 기준(200라인)을 초과할 경우 PR 빌드를 실패 처리하고 에이전트나 개발자에게 분할 제출을 강제하는 자동화 워크플로우의 예시이다.

```yaml
name: "PR Size Gatekeeper"
on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  enforce-pr-limit:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Calculate Changed Lines
        id: calculate_diff
        run: |
          # 대상 브랜치와의 diff를 구해 추가/수정된 라인 수 측정
          CHANGED_LINES=$(git diff --numstat origin/${{ github.base_ref }} | awk '{add += $1; subs += $2} END {print add + subs}')
          echo "Total lines changed: $CHANGED_LINES"
          
          # 200라인 상한선 초과 여부 확인
          if [ "$CHANGED_LINES" -gt 200 ]; then
            echo "::error::PR 크기 상한선(200 LOC)을 초과했습니다 (현재: $CHANGED_LINES LOC)."
            echo "::error::AI 에이전트는 코드의 안정성과 검증성을 위해 PR을 더 작은 단위로 분할하여 다시 제출하십시오."
            exit 1
          fi
```

### 2. 활용 시나리오
결제 시스템 고도화 프로젝트에서 AI 에이전트(예: `Claude 3.5 Sonnet` 기반 에이전트)를 도입한 B사 개발팀은 하루에도 수십 개의 대형 PR이 쏟아져 나오는 상황을 겪었다. 유일한 아키텍트인 시니어 엔지니어 최 씨의 책상에 코드 리뷰가 몰렸고, 최 씨는 에이전트가 은밀하게 누락한 보안 검증 로직이나 커넥션 풀 누수 결함을 잡는 일에 치여 인지적 고갈에 도달했다.
이를 방지하기 위해 매니저는 **PR 크기 및 수량 제어** 전략을 도입했다:
1. 에이전트가 생성하는 모든 PR은 최대 200라인을 넘지 못하도록 CI 파이프라인에서 게이팅(Gating)했다.
2. 각 엔지니어와 에이전트가 동시에 Open할 수 있는 PR 수량을 2개 이하로 제한했다.
3. 리뷰 하중 지표를 시각화하여 최 씨의 과도한 리뷰 몫을 타 팀원들에게 교대로 균등 배분했다.
이로 인해 일 평균 배포 속도는 소폭 감소했으나, 최 씨가 하나의 PR을 평균 30분 이상 꼼꼼히 점검할 수 있는 시간이 생겨 실제 운영 환경에서의 결제 누락 장애를 미리 방지할 수 있었다.

## 충돌
### AI 상호 리뷰 자동화와의 정면 충돌
* **AI 상호 리뷰 옹호론**: 시니어 엔지니어의 리뷰 부하를 덜어주기 위해 "AI 에이전트가 작성한 코드를 또 다른 AI 모델이 검토(Cross-Review)하고 승인하도록 자동화하자"는 주장이 제기된다.
* **실무적 실패와 반론**: 소스 문서의 실제 시도 사례에 따르면, AI 상호 리뷰 파이프라인은 빌드 테스트와 피상적인 코드 스타일 준수 검사는 무사 통과시켰으나, 실제 운영 서버에 배포되었을 때 전체 시스템을 다운시킬 수 있는 비즈니스 로직 상의 결정적 결함이나 아키텍처적 불일치를 전혀 포착하지 못했다 (raw/My Best Senior Engineer Quit Last Month. Her Exit Interview Was Scheduled for Forty Minutes. The Last Five Changed How I Run My Team..md). AI 간의 피상적 검증은 시스템에 오류 면죄부를 남발할 뿐이므로, 궁극적으로는 **PR 크기 및 수량 제어**를 적용해 인간 시니어 엔지니어가 직접 검토할 수 있는 시간적 마진을 확보해 주는 것이 실제 안전을 보장하는 유일한 길이다.

## 관련 노트
* [[코드 리뷰 대기열 병목]]: 이 제어 워크플로우를 도입하게 된 근본 원인이자 배경이 되는 인지 과부하 병목 현상이다.
* [[주의력 배터리]]: PR 크기를 작게 유지함으로써 시니어 검증자의 집중력 저하와 에너지 소모를 예방한다.
* [[생산성 지렛대로서의 책임과 긴장감]]: 단순히 처리량(Throughput)만을 늘리는 것보다, 검증 단계에서의 명확한 책임과 긴장감을 조율함으로써 지속 가능한 개발 속도를 이끌어내는 개념적 원리를 제공한다.
* [[우선순위 기반 업무 단순화 워크플로우]]: 업무의 전체 WIP를 제한하고 단순화하는 관점에서 PR 수량 제어 전략과 궤를 같이 한다.

## 출처
* `raw/My Best Senior Engineer Quit Last Month. Her Exit Interview Was Scheduled for Forty Minutes. The Last Five Changed How I Run My Team..md`
