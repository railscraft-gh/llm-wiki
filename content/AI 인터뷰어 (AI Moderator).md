제공해주신 소스 문서를 바탕으로 요청하신 작성 규칙, frontmatter 스키마, 수치/지표 인용 표기, Obsidian 위키링크(`[[개념명]]`), 활용 시나리오/코드 예시 포함 규칙을 철저히 준수하여 **`AI 인터뷰어 (AI Moderator)`** 위키 노트를 작성 완료했습니다.

해당 노트는 아래 아티팩트 및 위키 디렉토리에 저장되었습니다:
- **아티팩트 경로**: [AI 인터뷰어 (AI Moderator).md](file:///Users/railscraft/.gemini/antigravity-cli/brain/59b8aca0-aefe-440f-abfb-011b8755caa1/AI%20%EC%9D%B8%ED%84%B0%EB%B7%B0%EC%96%B4%20%28AI%20Moderator%29.md)
- **위키 디렉토리 경로**: `/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/AI 인터뷰어 (AI Moderator).md`

---

### [작성된 위키 노트 내용]

```markdown
---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - ux-research
  - user-interview
aliases:
  - AI Moderator
  - AI 모더레이터
sources:
  - 'raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md'
created: 2026-08-28
updated: 2026-08-28
---

# AI 인터뷰어 (AI Moderator)

## 한 줄 정의
**AI 인터뷰어(AI Moderator)**는 사용자 경험([[UX]]) 리서치 과정에서 인터뷰 가이드 및 구조화된 질문 체계를 바탕으로 사용자와 1:1 대화를 진행하고 데이터를 수집하는 자동화된 대화형 [[agent|AI 에이전트]] 도구이다.

## 핵심 요지
- **기능 및 역할**: 전담 리서처가 부족한 환경에서도 구조화된 사용자 인터뷰(Structured Interview)를 자동 조정(AI moderation)하여 대규모 수집을 가능하게 한다 (`raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`).
- **한계점 (2026년 기준)**: 비언어적 신호(뉘앙스, 멈춤, 표정 변화) 포착 및 꼬리 질문(probing), 라포(rapport) 형성, 맥락적 추적이 핵심인 **반구조화 인터뷰(Semi-structured Interview)**는 완전히 수행하지 못하며 인간 리서처의 대체가 불가능하다 (`raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`).
- **인간-AI 분업 구조**: 인터뷰 자체의 무리한 완전 자동화보다는, 인터뷰 전 가이드의 편향 검사(Adversarial Audit), 실시간 텍스트 전사(Transcription, 정확도 95~98%), 테마 추출(전문가 인간 코더와 80~85% 일치) 등 인터뷰 외곽 업무의 보조 도구로 활용할 때 가장 높은 효율을 발휘한다 (`raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`).

## 상세

### 1. 주요 도구 및 시장 현황
대표적인 AI 인터뷰어 상용 솔루션으로는 **Marvin**, **UserFlix**, **Outset** 등이 있다 (`raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`). 이 도구들은 참가자에게 사전 정의된 흐름에 따라 질문을 던지고 응답 데이터를 자동으로 모으는 역할을 수행한다.

### 2. 기술적 정밀도 및 벤치마크 지표
- **전사 정확도**: 2026년 기준 AI 기반 음성-텍스트 전사(Transcription) 도구는 **95~98%**의 정확도를 기록한다 (`raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`).
- **테마 코딩 일치율**: 코퍼스 분석 및 테마 추출에서 전문가 인간 코더(Expert Human Coders)와의 일치도는 **80~85%** 수준이다 (`raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`).
- **오류율 관리**: 15~20%의 미스매치 및 왜곡 가능성이 존재하므로, 추출된 테마 및 인용구(Quote)는 반드시 인간 리서처의 교정 및 감사(Audit) 패스를 거쳐야 한다 (`raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`).

### 3. 인터뷰 워크플로우 내 활용 전략
1. **인터뷰 전 (가이드 검증)**: [[역질문 인터뷰 프롬프팅]] 및 적대적 감사(Adversarial Audit) 프롬프트를 사용하여 유도 질문(Leading question), 확증 편향, 미래 행동 예측 요구 등의 오류를 사전 제거한다 (`raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`).
2. **인터뷰 중 (원시 데이터 수집)**: 세션 중 실시간 요약을 켜지 않고 전사(Transcription) 원본만 캡처하여 데이터의 뉘앙스 평평화 및 정보 손실을 방지한다 (`raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`).
3. **인터뷰 후 (단계적 통합)**: `Transcript 정규화 ➔ 단일 Transcript 태깅(Confidence score 부여) ➔ 전체 Corpus 클러스터링` 순으로 다중 패스 분석을 진행한다 (`raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`).

## 예시

### AI 인터뷰 보조/분석을 위한 Python 백엔드 구현 예시
아래 예시는 [[LLM]] API(예: OpenAI `gpt-4o`, Google `gemini-1.5-pro` 등)를 활용하여 사용자의 음성/문자 인터뷰 전사본을 정규화하고, 신뢰도 노트를 포함한 1차 테마 코딩을 자동 수행하는 파이프라인의 구체적인 구현 예시이다.

```python
import os
import json
import openai

# 사용자 인터뷰 Transcript 테마 추출 파이프라인
def analyze_interview_transcript(raw_transcript: str) -> dict:
    """
    AI 인터뷰어 보조 시스템: 
    Raw Transcript를 정규화하고 1차 테마 태깅 및 Confidence score를 추출합니다.
    """
    client = openai.OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
    
    system_prompt = """
    당신은 전문 UX 리서치 AI 모더레이터 보조 분석기입니다.
    제공된 인터뷰 전사본(Transcript)을 읽고 다음 지침을 엄격히 따라 분석하십시오.
    
    1. 발화자 표기를 M: (Moderator) / P: (Participant)로 정규화하십시오.
    2. 참가자(P)의 주요 언급을 바탕으로 distinct topic, frustration, workaround, stated need를 추출하십시오.
    3. 각 항목마다 다음 필드를 포함하는 JSON 객체 리스트를 생성하십시오:
       - tag: 3~5단어 내외의 핵심 요약 태그
       - quote: transcript의 정확한 원문 인용 (의역 금지)
       - confidence: 'high' (명확히 언급), 'medium' (암시됨), 'low' (추론이며 인간 검토 필요)
    """

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"[Raw Transcript]\n{raw_transcript}"}
        ],
        response_format={"type": "json_object"},
        temperature=0.2
    ]

    return response.choices[0].message.content

# 실행 시나리오 예시
if __name__ == "__main__":
    sample_transcript = """
    인터뷰어: 새로 변경된 대시보드에서 위젯 설정할 때 어떠셨나요?
    참가자: 음... 처음 들어왔을 때 어디서 데이터를 가져오는지 몰라서 한참 찾았어요. 결국 세팅 안 하고 그냥 창 닫아버렸습니다.
    """
    result = analyze_interview_transcript(sample_transcript)
    print(result)
```

## 충돌
현재 소스 문서 간 직접적인 결론 충돌은 발견되지 않았다.

## 관련 노트
- [[AI 기반 UX 디스커버리 워크플로우]] - AI 인터뷰어를 포함한 전체 UX 디스커버리 단계(계획, 인터뷰, 통합, 전달)에 대한 방법론 노트
- [[역질문 인터뷰 프롬프팅]] - 인터뷰 가이드 작성 시 AI를 활용해 질문의 편향과 가정을 검증하는 프롬프팅 기법
- [[agent]] - 자율적으로 과업을 수행하고 사용자와 대화하는 기본 에이전트 개념
- [[UX]] - 사용자 경험 설계 및 리서치 전반에 관한 지식 노트

## 출처
- `raw/AI를 UX에 쓰는 법 3: 리서치와 디스커버리 - 출판형 다듬기.md`
```