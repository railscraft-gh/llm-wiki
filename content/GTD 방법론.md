---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - productivity
aliases:
  - Getting Things Done
  - GTD
sources:
  - raw/How to use your mornings like the most productive 1%.md
created: 2026-07-30
updated: 2026-07-30
---

# GTD 방법론

## 한 줄 정의
데이비드 알렌(David Allen)이 제안한 생산성 관리 프레임워크로, 머릿속의 모든 작업과 아이디어를 신뢰할 수 있는 외부 시스템에 기록·정리하여 뇌의 인지 부하를 최소화하고 실행에 몰입할 수 있도록 돕는 작업 관리 방법론.

## 핵심 요지
- **외부 시스템에 작업 아웃소싱**: 모든 과업과 잡념을 외부 보관소로 밀어내는 [[브레인덤프(Braindump)]] 과정을 통해 인지 능력(cognitive capacity) 및 [[주의력 배터리]] 소모를 방지한다. (raw/How to use your mornings like the most productive 1%.md)
- **5단계 워크플로우**: 수집(Capture) -> 명료화(Clarify) -> 정리(Organize) -> 반영(Reflect) -> 실행(Engage)의 5단계 프로세스를 통해 작업 흐름을 구조화한다.
- **의지력 고갈 차단**: 매 결정의 순간마다 생기는 의사결정 피로를 차단하고, [[주의력 배터리]]가 최고조인 최적의 에너지 시간대(예: 새벽이나 아침 식사 전)에 핵심 과업에 몰두하도록 유도한다. (raw/How to use your mornings like the most productive 1%.md)

## 상세
GTD(Getting Things Done)는 현대인의 집중력을 잠식하는 복잡한 작업을 체계적으로 정돈하는 강력한 도구다. (raw/How to use your mornings like the most productive 1%.md)

1. **뇌의 인덱싱 부담 완화**
   인간의 작업 기억 공간은 극히 한정되어 있다. 머릿속으로 '다음에 해야 할 일'을 계속 웅얼거리는 상태는 뇌의 인지 리소스를 끊임없이 갉아먹는다. 이는 마치 메모리가 부족한 상태에서 여러 프로세스를 돌리는 것과 같아, 심리학자 로이 바우마이스터가 입증한 [[자아 고갈 이론]]처럼 행동 통제력과 의지력을 빠르게 고갈시켜 평균 20분 버틸 수 있는 끈기를 단 8분으로 주저앉히는 결과를 초래한다. (raw/How to use your mornings like the most productive 1%.md) GTD는 할 일들을 외부의 신뢰할 수 있는 수집함(Inbox)에 버림으로써 뇌를 순수한 연산 및 창의성 발휘 도구로 되돌려 놓는다.

2. **GTD 5단계 워크플로우**
   - **수집 (Capture)**: 해야 할 일, 떠오른 생각, 약속 등 모든 입력 정보를 머릿속에서 비워내어 단일한 외부 수집함(Inbox)으로 모은다. (이 과정은 [[브레인덤프]]와 일맥상통한다.)
   - **명료화 (Clarify)**: 수집함에 있는 항목들이 구체적으로 무엇인지, 즉시 실행 가능한 행동(Next Action)인지 분석한다. 만약 2분 이내에 끝낼 수 있는 간단한 작업이라면 그 자리에서 즉시 실행한다.
   - **정리 (Organize)**: 명료화한 항목들을 성격과 컨텍스트(Context)에 따라 분류한다. (예: 프로젝트, 대기 중, 특정 장소/도구, 캘린더 등)
   - **반영 (Reflect/Review)**: 주기적으로(매일 또는 매주) 자신의 시스템을 검토하고 업데이트하여 신뢰성을 유지하고 전체적인 우선순위를 점검한다.
   - **실행 (Engage)**: 현재 가용한 시간, 에너지 수준([[에너지 기반 일정 설계]]), 그리고 주어진 상황(Context)에 가장 적합한 행동을 선택하여 몰입한다.

3. **[[LLM]] 및 AI 에이전트로의 적용**
   이 방법론은 단지 인간의 시간 관리뿐만 아니라, 자율적 AI 에이전트([[인공지능 에이전트]])의 컨텍스트 윈도우 관리 및 멀티 태스크 수행 능력 극대화에 활용된다. 예컨대 `Gemini 1.5 Pro`나 `GPT-4o` 기반의 에이전트가 단일 컨텍스트 안에서 끊임없이 외부 도구를 호출하고 코드를 실행(Re-act)하는 루프를 돌 때, 처리되지 않은 중간 연산 결과와 과거 기록이 누적되어 지시 사항 준수(Instruction Following)율이 급격히 떨어지는 현상이 일어난다.
   이때 GTD 패턴을 적용한 에이전트는, 들어오는 입력 및 미완료 과업을 우선 `Agent Inbox` 데이터베이스에 수집(Capture)한 뒤, 이를 별도의 쪼개진 태스크로 분류(Clarify & Organize)하고, 최종적으로 컨텍스트를 깨끗하게 비운 상태에서 타겟 액션만을 전송하여 연산을 수행하는 구조를 갖춘다.

## 예시
아래 코드는 대규모 언어 모델을 활용하여 사용자의 무작위 생각과 태스크를 분석하고, GTD 방법론에 따라 실행 가능한 행동(Next Action) 및 보관용 메모리로 분류·정리하는 파이썬(Python) 기반 AI GTD 에이전트의 핵심 모듈 예시다.

```python
import os
import json
from typing import Dict, Any, List
from google import genai
from google.genai import types

class GTDAgent:
    def __init__(self, model_name: str = "gemini-1.5-flash"):
        self.model_name = model_name
        # API 키는 환경 변수로부터 로드
        self.client = genai.Client()
        self.inbox: List[str] = []
        self.processed_tasks: List[Dict[str, Any]] = []

    def collect(self, raw_input: str) -> None:
        """1단계: 수집(Capture) - 날것의 입력을 인박스에 저장"""
        self.inbox.append(raw_input)

    def clarify_and_organize(self) -> List[Dict[str, Any]]:
        """2~3단계: 명료화(Clarify) 및 정리(Organize)"""
        results = []
        
        system_instruction = (
            "당신은 GTD(Getting Things Done) 전문가 에이전트입니다. "
            "입력된 raw text를 분석하여 다음 JSON 스키마 형식으로 출력하세요:\n"
            "{\n"
            "  \"is_actionable\": boolean,\n"
            "  \"next_action\": string (실행 가능할 경우, 동사형 구체적 첫 단계 작성),\n"
            "  \"category\": 'project' | 'calendar' | 'reference' | 'trash',\n"
            "  \"estimated_time_minutes\": integer,\n"
            "  \"context\": string (예: 'computer', 'phone', 'errand', 'home' 등)\n"
            "}"
        )

        for item in self.inbox:
            response = self.client.models.generate_content(
                model=self.model_name,
                contents=f"입력값: {item}",
                config=types.GenerateContentConfig(
                    system_instruction=system_instruction,
                    response_mime_type="application/json",
                    temperature=0.1
                )
            )
            
            try:
                parsed = json.loads(response.text)
                parsed["raw_input"] = item
                results.append(parsed)
            except json.JSONDecodeError:
                # 폴백 처리
                results.append({
                    "raw_input": item,
                    "is_actionable": False,
                    "category": "reference",
                    "next_action": "파싱 에러 항목 검토 필요",
                    "estimated_time_minutes": 0,
                    "context": "unknown"
                })
                
        self.processed_tasks.extend(results)
        self.inbox.clear()  # 처리 완료 후 인박스 비우기
        return results

# 사용 시나리오
if __name__ == "__main__":
    gtd = GTDAgent()
    
    # 1. 브레인덤프 형태로 아이디어 및 잡다한 할 일을 수집
    gtd.collect("다음 주 화요일 오후 3시 고객 미팅 예약 잡기")
    gtd.collect("인공지능 에이전트 컨텍스트 윈도우 관리에 대한 좋은 블로그 글을 읽음. 주소: https://example.com/ai-context")
    gtd.collect("우유 사기")
    
    # 2. LLM을 통한 분석 및 분류 자동화
    organized_tasks = gtd.clarify_and_organize()
    print(json.dumps(organized_tasks, indent=2, ensure_ascii=False))
```

## 충돌
- **시간 소모성 논란 (GTD Overhead)**: GTD 방법론을 엄격하게 유지하려다 보면 시스템을 정리하고(Organize) 검토(Reflect)하는 것 자체가 또 하나의 인지적 부담과 시간 낭비가 된다는 주장이 있다. 이로 인해 단순하고 유연하게 할 일을 관리하는 [[결과물 중심 생산성 스택]]이나 단순 메모 중심의 [[제텔카스텐]]과 결합하거나, 혹은 핵심 에너지를 가장 중요한 한 가지에 집중 투입하는 단일 집중법과 대조된다.

## 관련 노트
- [[주의력 배터리]]
- [[자아 고갈 이론]]
- [[에너지 기반 일정 설계]]
- [[브레인덤프(Braindump)]]
- [[제텔카스텐]]
- [[결과물 중심 생산성 스택]]

## 출처
- `raw/How to use your mornings like the most productive 1%.md`
- Allen, D. (2001). 《Getting Things Done: The Art of Stress-Free Productivity》. Viking.
