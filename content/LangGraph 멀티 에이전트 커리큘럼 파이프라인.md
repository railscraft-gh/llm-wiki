지정하신 개념 **'LangGraph 멀티 에이전트 커리큘럼 파이프라인'**에 대한 위키 노트를 작성하여 LLM Wiki 보관소([LangGraph 멀티 에이전트 커리큘럼 파이프라인.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/LangGraph%20%EB%A9%8B%ED%8B%B0%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EC%BB%A4%EB%A6%AC%ED%80%90%EB%9F%BC%20%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8.md))에 성공적으로 저장하였습니다.

아래는 생성된 위키 노트의 전체 전문입니다.

---

```markdown
---
type: workflow
status: draft
core: false
tags:
  - llm
  - agent
  - langgraph
  - multi-agent
  - workflow
aliases: []
sources:
  - raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
created: 2026-08-28
updated: 2026-08-28
---

# LangGraph 멀티 에이전트 커리큘럼 파이프라인

## 한 줄 정의
한 줄의 프롬프트(주제 및 대상)를 기반으로 커리큘럼 기획, 실라버스 검토, 병렬 강의 스크립트 작성, 안티 슬롭 검증, 평가 설계, Marp CLI 기반 슬라이드 PDF 제작까지 전 과정을 조율하는 [[LangGraph 오케스트레이션]] 기반 4+1 멀티 에이전트 워크플로우.

## 핵심 요지
- **단일 컨텍스트 프롬프팅 한계 극복**: 거대 단일 프롬프트로 긴 코스를 생성할 때 발생하는 초점 일탈(long-context drift) 및 콘텐츠 간 모순을 [[LangGraph 상태 기반 멀티 에이전트 시스템]]의 작업 분할 및 격리된 상태 전달을 통해 근본적으로 해결함.
- **교수 설계 프레임워크 결합**: 오랜 교육 공학 프레임워크인 [[ADDIE 프레임워크]] 및 [[블룸의 교육 목표 분류학]]을 시스템 프롬프트 및 데이터 구조(Pydantic 스키마)에 포함하여 품질 검증(Quality Matters Rubric) 표준을 기계적으로 준수함.
- **동적 병렬 팬아웃(Parallel Fan-Out)**: `Send()` 지시어를 사용하여 12개 이상의 강의 스크립트를 단일 실행 단계(superstep)에서 병렬 분기 처리함으로써 기존 순차 생성 방식 대비 작성 시간을 약 15분에서 약 90초로 10배 이상 단축함 (raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md).
- **안티 슬롭(Anti-Slop) 검토 레이어**: 상투어구 및 알맹이 없는 표류 문구([[AI 슬롭]])를 사전 정규식(Regex) 검사와 경량 모델(`gemini-2.5-flash`)의 구조화된 검토 판정(`ReviewVerdict`)으로 엄격하게 걸러냄.
- **확정적(Deterministic) 슬라이드 프로덕션**: 텍스트 레이아웃 붕괴를 방지하기 위해 LLM 대신 마크다운 파싱 및 Marp CLI (`marp --pdf`) 기반의 확정적 파이썬 렌더링을 조합함.

## 상세

### 1. 파이프라인 아키텍처 및 에이전트 역할 분담
시스템은 4개의 전용 에이전트, 1개의 검토기, 1개의 휴먼 승인 게이트(Human Approval Gate)로 구성됨:
1. **커리큘럼 에이전트 (Curriculum Architect)**: `gemini-2.5-pro` 모델을 사용하며, 역구상(Backwards design) 방식을 채택하여 측정 가능한 학습 목표(Learning Objectives)를 먼저 도출함. 모듈 3개, 전체 강의 10~15개로 엄격한 상한선(Hard caps)을 두어 품질 저하를 방지함 (raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md). 실라버스 완성 시 `interrupt()` 함수를 호출해 파이프라인을 일시 정지하고 휴먼 승인을 요청함.
2. **콘텐츠 에이전트 (Content Agent)**: `fan_out_to_content_agents`를 통해 개별 강의별 소형 딕셔너리 페이로드만 격리된 채 전달받아 병렬 수퍼스텝으로 스크립트를 작성함 (`gemini-2.5-pro`). 각 강의 간 상호 간섭이 차단되어 일관된 품질을 유지하며, 결과를 커스텀 딕셔너리 리듀서(`merge_dicts`)로 덮어써 상태 데이터 중복을 예방함.
3. **안티 슬롭 검토기 (Anti-Slop Reviewer)**: `gemini-2.5-flash` 모델을 기반으로 하며, 정규식 매칭을 거쳐 상투적 유행어나 모호한 결론을 검출함. 미통과 시 교정 지시문과 함께 최대 2회(`MAX_REWRITES = 2`) 재작성을 요청함 (raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md).
4. **평가 에이전트 (Assessment Agent)**: `gemini-2.5-pro` 모델을 기반으로 블룸 난이도 비중(기억 20%, 적용 40%, 분석 30%, 평가 10%)을 반영한 10문항 퀴즈와 구체적 채점 기준표(Rubric)가 포함된 다단계 실습 과제를 출력함 (raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md).
5. **프로덕션 에이전트 (Production Agent)**: 파이썬 정규식 파서로 각 강의 마크다운에서 Hook, Summary, Checklist를 추출한 후 Marp CLI를 실행하여 최종 `course.pdf` 슬라이드를 생성함 (raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md).

### 2. 비용·생산성 지표 및 학술적 정당성
- **생산성 및 경제성**: 12개 강의 분량의 기본 전체 과정 생성을 위해 투입된 API 비용은 약 0.26달러, 총 실행 소요 시간은 14분임 (raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md). 완성 콘텐츠 1시간 분량당 250~500달러가 소요되는 전통적 이러닝 모듈 제작 비용(iSpring 2026년 가격 가이드 기준) 대비 압도적인 초기 초고 작성 효율을 입증함 (raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md).
- **인간-에이전트 협업 검증**: EACL 2026에 발표된 애리조나 주립대학교 연구진(Yao et al.)의 *Instructional Agents* 논문에 따르면, 컴퓨터 과학 과목들 대상 평가에서 완전 자율 생성보다 인간 전문가가 참여하는 'Full Co-Pilot' 모드가 우수한 성능과 일관성을 보임 (raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md). 본 파이프라인의 실라버스 인터랙티브 승인 게이트는 이러한 연구 결론을 반영함.

## 예시

### Pydantic 상태 스키마 및 동적 병렬 팬아웃 코드 예시
```python
from typing import Annotated, Literal, TypedDict
from pydantic import BaseModel, Field
from langgraph.types import Send, Command, interrupt
from langchain_google_genai import ChatGoogleGenerativeAI

# 커스텀 딕셔너리 리듀서: 재작성 시 중복 생성을 막고 lesson_id 기반 덮어쓰기 수행
def merge_dicts(left: dict, right: dict) -> dict:
    return {**left, **right}

class Lecture(BaseModel):
    lesson_id: str
    title: str
    body_markdown: str
    checklist: list[str]
    rewrite_count: int = 0

class CourseState(TypedDict, total=False):
    topic: str
    audience: str
    syllabus: dict
    lectures: Annotated[dict[str, Lecture], merge_dicts]
    verdicts: Annotated[dict, merge_dicts]

# 동적 병렬 팬아웃 조건부 에지 함수
def fan_out_to_content_agents(state: CourseState) -> list[Send]:
    syllabus = state["syllabus"]
    objectives_by_id = {o["id"]: o for o in syllabus["objectives"]}

    return [
        Send(
            "content",
            {
                "lesson": lesson,
                "objectives": [
                    objectives_by_id[oid]
                    for oid in lesson["objectives"]
                    if oid in objectives_by_id
                ],
                "topic": state["topic"],
            },
        )
        for lesson in syllabus["lessons"]
    ]

# 안티 슬롭 검토 노드 예시
def reviewer_node(state: dict) -> Command:
    llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.0)
    # 알려진 상투어구 정규식 사전 검사 및 LLM 판정 수행 후 Command(goto=...)로 제어 흐름 전달
    ...
```

## 충돌
단일 거대 프롬프트 기반 자율 생성 방식과 비교할 때, 멀티 에이전트 아키텍처는 분할 및 인간 승인 게이트가 필수적이라는 점에서 대립함. 소스 문서에 언급된 EACL 2026 학술 논문(*Instructional Agents*)은 완전 자동화된 에이전트 독립 생성 파이프라인이 학습 목표 연계성 및 어조 일관성 면에서 한계를 드러냄을 증명하였음 (raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md).

## 관련 노트
- [[LangGraph 상태 기반 멀티 에이전트 시스템]]
- [[LangGraph 오케스트레이션]]
- [[AI 슬롭]]
- [[ADDIE 프레임워크]]
- [[블룸의 교육 목표 분류학]]
- [[휴먼 승인 게이트]]

## 출처
- raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
```