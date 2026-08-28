---
type: workflow
status: completed
core: false
tags:
  - llm
  - agent
  - context-management
  - claude-code
  - productivity
  - workflow
aliases:
  - /compact
  - 세션 컨텍스트 압축 및 /compact 명령어
  - 세션 컨텍스트 압축
  - 컨텍스트 요약 압축
sources:
  - 'raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md'
created: 2026-08-28
updated: 2026-08-28
---

# 세션 컨텍스트 압축 및 /compact 명령어

## 한 줄 정의
**세션 컨텍스트 압축 및 `/compact` 명령어**는 [[Claude Code]]와 같은 [[LLM]] 코딩 에이전트 CLI 세션에서 대화 메시지 비대화로 발생하는 추론 지연과 맥락 오염을 방지하기 위해, 불필요한 대화 히스토리와 터미널 실행 로그를 정밀 축소하고 핵심 결정 사항과 지식만을 손실 압축(Lossy Compression)하여 작업 기억(Working Memory) 용량과 추론 속도를 회복시키는 대화 세션 최적화 [[워크플로|workflow]]이자 전용 슬래시 명령어이다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).

## 핵심 요지
- **세션 수명 연장 및 추론 지연 해소**: 147개 이상의 메시지가 뒤엉키고 200개 메시지를 초과할 경우 [[LLM 슬라이딩 윈도우 메모리 버퍼|컨텍스트 윈도우]] 한계로 응답 생성이 분 단위로 느려지는 현상을 방지하며, 세션을 파기하지 않고 단 10초 만에 대화를 정밀 요약해 청정 상태로 되돌린다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).
- **생산성 손실 방지 및 몰입 유지**: 세션을 처음부터 새로 시작하는 데 드는 45분의 시간 손실을 단 10초의 `/compact` 실행으로 대체하여 개발자의 몰입 상태(Flow State)를 유지하며, 14가지 명령어 생태계 활용 시 200시간 이상의 개발 시간을 절약할 수 있다 (실제 3개월간 127회 사용 검증) (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).
- **선제적 게이지 모니터링 (`/cost`)**: 토큰 사용량과 남은 컨텍스트 비율(예: `Total cost: $0.08`, `Tokens used: 42k`, `Context remaining: 60%`)을 `/cost` 명령어로 실시간 추적하여 컨텍스트 잔량이 30~40% 이하로 떨어지기 전에 선제적으로 압축을 수행한다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).
- **슬래시 명령어 생태계 유기적 연동**: 대화 히스토리만 비우고 셋업과 tool 권한은 유지하는 `/clear`(재설정 20분 방지), 메인 맥락 오염 없는 옆길 질문용 [[비동기 맥락 질문 및 /btw 명령어|/btw]], 세션 중 추론 엔진을 실시간 교체하는 [[Claude Code 세션 운영 명령어|/model]](Opus/Sonnet/Haiku 전환으로 작업 속도 3~4배 향상)과 조합하여 효율을 극대화한다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).

## 상세

### 1. 세션 컨텍스트 포화와 추론 효율 저하
[[LLM]] 기반 대화형 코딩 에이전트를 사용해 장시간 개발을 진행하면 대화 메시지가 100~200개 이상 누적되면서 다음과 같은 문제점들이 발생한다:
1. **추론 속도 저하**: 30분이면 충분했던 디버깅 작업이 147개 메시지로 뒤엉키며 3시간 이상 소요되고, 토큰 누적으로 인해 [[LLM 슬라이딩 윈도우 메모리 버퍼|컨텍스트 윈도우]] 한계선에 도달하면서 응답 속도가 분 단위로 현저히 지연된다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).
2. **초기 지침 망각 및 원형 회귀(Looping)**: 세션 초기에 전달한 [[CLAUDE.md 및 /init 명령어|CLAUDE.md]]의 아키텍처 규칙이나 코딩 규약이 희석되고 실패한 실행 로그가 누적되어, 에이전트가 동일한 버그나 무의미한 답을 원을 그리듯 반복(Rails를 벗어남)하게 된다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).
3. **작업 흐름 단절**: 터미널과 에디터 탭을 오가며 코드를 복사·붙여넣느라 맥락이 끊기고 인지 과부하가 가중된다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).

### 2. `/compact` 명령어의 내부 작동 메커니즘
`/compact`는 [[Claude Code]] 세션 버퍼를 약 10초 만에 재구성하는 핵심 요약 전략이다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`). 반응형(Reactive) [[Compaction 전략]]에 해당한다:
- **노이즈 제거**: 단순 오타 수정, 일회성 터미널 명령어 실행 결과(`! command`), 탐색적 대화 등 불필요한 메타데이터와 중복 로그를 걷어낸다.
- **핵심 맥락 구조화 요약**: 주요 아키텍처 결정 사항, 확정된 코드 스니펫, 해결된 문제 및 향후 미해결 과제와 다음 목표를 추출하여 구조화된 요약본(Context Summary)으로 압축한다.
- **환경 셋업 보존**: 연결된 Tool 설정, 권한 승인 상태, 로컬 세션 구성 요소는 유지한 채 대화 버퍼(Working Memory) 공간만 깨끗이 비워준다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).

### 3. 세션 운용 표준 수칙 및 주변 명령어 연동
- **적정 압축 타이밍 감지**: `/cost` 명령어로 확인한 잔여 컨텍스트 비중이 30~40% 이하로 떨어지거나 응답 생성이 느려질 때 즉시 `/compact`를 실행한다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).
- **`/btw`를 통한 사전 방지**: 작업 흐름을 끊는 외부 부가 질문(예: JWT vs Session Cookie)은 [[비동기 맥락 질문 및 /btw 명령어|/btw]]를 사용해 메인 버퍼 포화를 사전에 예방한다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).
- **`/clear`와의 차이점**: `/clear`는 대화 맥락을 완전히 지우고 셋업만 남기는 소프트 리셋(재설정 20분 절약)인 반면, `/compact`는 작업 맥락을 요약 보존하며 토큰 공간만 확보하는 손실 압축 기법이다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).
- **자가 진단 및 터미널 연동**: 터미널 연동 불량이나 이상 동작 발생 시 `/doctor` 명령어로 API 키, Node 18+ 지원, 권한 설정을 10초 만에 자가 진단하고, `/terminal-setup`을 통해 shell integration을 복구한다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).

### 4. 실시간 모델 교체와의 시너지 (`/model`)
세션 진행 중 `/model` 명령어(Opus, Sonnet, Haiku)를 활용하면 대화 맥락을 손실 없이 유지한 채 추론 모델을 자유롭게 전환할 수 있다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`). 복잡한 DB migration이나 아키텍처 구상은 Opus로 수행하고, `/compact`로 버퍼를 축소한 후 Haiku로 속도감 있게 코드를 생성하며 Sonnet으로 `/review`를 받는 오케스트레이션을 통해 작업 속도를 3~4배 향상시킬 수 있다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).

## 예시

### 1. 실무 CLI 세션 운용 및 압축 시나리오
```bash
# 1. 현재 세션의 토큰 사용량 및 잔여 컨텍스트 확인
> /cost
Total cost: $0.08
Tokens used: 42k
Context remaining: 35%

# 2. 컨텍스트 잔량 저하 시 10초 만에 대화 압축 실행 (처음부터 다시 세팅하는 45분 손실 예방)
> /compact
✔ Reduced 147 messages into 1 Context Summary.
✔ Context space restored! (Context remaining: 85%)

# 3. 메인 대화 맥락을 유지한 채 옆길 부가 질문 실행
> /btw refresh token은 클라이언트에서 어떻게 처리하는 게 제일 좋아?

# 4. 빠른 코딩을 위한 모델 전환 및 터미널 Direct 실행 (작업 속도 3~4배 향상)
> /model haiku
> ! npm run test
> /review
```

### 2. 에이전트 하네스 내부 `/compact` 처리 파이썬 핸들러 예시
```python
from typing import List, Dict, Any

class SessionContextCompressor:
    """LLM 에이전트 세션의 /compact 슬래시 명령어 및 컨텍스트 요약 핸들러"""
    
    def __init__(self, token_limit: int = 200_000):
        self.messages: List[Dict[str, Any]] = []
        self.token_limit = token_limit

    def estimate_tokens(self) -> int:
        """대화 버퍼 내 대략적 토큰 수 계산"""
        total_chars = sum(len(str(m.get("content", ""))) for m in self.messages)
        return total_chars // 4

    def execute_compact(self, llm_client) -> str:
        """/compact 명령어 실행: 메시지 버퍼를 정밀 요약본 1개로 축소"""
        if not self.messages:
            return "압축할 세션 메시지가 없습니다."
        
        print(f"[Compact] 압축 전 메시지 수: {len(self.messages)}, 추정 토큰: {self.estimate_tokens()}")

        summary_prompt = (
            "다음 개발 세션 히스토리를 요약 압축하십시오.\n"
            "보존해야 할 필수 항목:\n"
            "1. 결정된 프로젝트 아키텍처 및 핵심 설정을 보존할 것\n"
            "2. 생성 및 수정된 코드 파일 경로 목록\n"
            "3. 현재 잔여 버그 및 다음 구현 과제\n"
            "단순 오타 수정, 중복 실행 로그, 잡담은 제외하십시오."
        )

        history_text = "\n".join([f"{m['role']}: {m['content']}" for m in self.messages])
        summary_result = llm_client.generate(system=summary_prompt, prompt=history_text[:40000])

        # 이전 수십~수백 개의 메시지를 단일 시스템 요약본으로 전면 대체
        self.messages = [
            {
                "role": "system",
                "content": f"[Compact Context Summary]\n{summary_result}"
            },
            {
                "role": "assistant",
                "content": "세션 컨텍스트 압축이 완료되었습니다. 작업을 계속해서 진행합니다."
            }
        ]

        print(f"[Compact] 압축 후 메시지 수: {len(self.messages)}, 추정 토큰: {self.estimate_tokens()}")
        return "컨텍스트 압축 성공."
```

## 충돌
- **완전 재시작(Fresh Start) vs. 손실 압축(Lossy Compression)의 세부 맥락 누락**:
  - 세션을 완전히 종료하고 새로 시작하는 방식을 사용하면 대화 맥락 오염을 100% 방지할 수 있지만, 프로젝트 환경 재설정과 맥락 주입에 약 45분이 소비된다 (`raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`).
  - 반면 `/compact`를 통한 요약 압축은 10초 만에 세션을 깨끗하게 되돌려 연속적인 몰입 상태를 유지해주지만, 매우 세부적인 변수명이나 임시 로그 수준의 상세 정보가 요약 과정에서 손실될 위험이 있다. 따라서 손실되면 안 되는 핵심 프로젝트 규칙이나 개별 개발 취향은 [[Claude_Code_MEMORY.md_가이드|MEMORY.md]] 파일이나 [[CLAUDE.md 및 /init 명령어|CLAUDE.md]]에 영구히 저장해 두는 보완 전략이 요구된다.

## 관련 노트
- [[Compaction 전략]]
- [[3단계 컨텍스트 압축]]
- [[5단계 압축 파이프라인]]
- [[비동기 맥락 질문 및 /btw 명령어]]
- [[CLAUDE.md 및 /init 명령어]]
- [[Claude_Code_MEMORY.md_가이드]]
- [[Claude Code 세션 운영 명령어]]
- [[LLM 슬라이딩 윈도우 메모리 버퍼]]
- [[휘발성 컨텍스트]]
- [[Claude Code]]

## 출처
- `raw/Claude Code를 6개월 동안 잘못 썼다. 모든 걸 바꾼 14가지 명령어 - 출판형 다듬기.md`
