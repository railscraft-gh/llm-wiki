제시해주신 소스 문서(`raw/Agentic AI, design systems & Figma. a practical guide-ko.md`)를 바탕으로 지정된 규칙과 템플릿 표준을 준수한 **Storybook MCP** 위키 노트를 작성하였습니다.

생성된 위키 노트 파일 경로: [/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Storybook MCP.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Storybook%20MCP.md)

---

```markdown
---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - design-system
  - mcp
  - storybook
aliases:
  - 스토리북 MCP
sources:
  - 'raw/Agentic AI, design systems & Figma. a practical guide-ko.md'
created: 2026-08-28
updated: 2026-08-28
---

# Storybook MCP

## 한 줄 정의
**Storybook MCP**는 [[Model Context Protocol]](MCP)을 통해 [[Storybook]]에 축적된 컴포넌트 스토리(Story)와 행동 맥락(Behavioral Context)을 [[AI 에이전트]]에게 제공하여, 이미 존재하는 디자인 시스템 구성요소를 기반으로 새로운 UI 컴포넌트를 정확하게 조립(Assembling)하고 코드를 자동 생성하도록 돕는 도구 인터페이스이다.

## 핵심 요지
- **행동 맥락(Behavioral Context) 제공**: [[Figma MCP]]가 정적 시각 디자인 맥락(Design Context)을 제공한다면, Storybook MCP는 실제로 동작하고 테스트 가능한 코드 레벨의 스토리(Story) 정보를 제공한다.
- **발명이 아닌 조립(Assembling, not creating)**: AI 에이전트는 환각(Hallucination)을 일으켜 컴포넌트를 임의로 새로 발명(Inventing)하는 대신, 스토리북에 정의된 Props와 State(Hover, Focus, Disabled, Error, Loading 등)를 엄격히 따라 컴포넌트를 조립한다.
- **디자인 시스템 품질의 정량화**: 디자인 시스템의 구조화 수준이 정교할수록 AI 에이전트의 코드 생성 정확도, 작업 처리 속도, [[Context Window]] 토큰 비용(Token Cost)이 획기적으로 개선된다 (raw/Agentic AI, design systems & Figma. a practical guide-ko.md).

## 상세

### 1. 작동 원리 및 역할
Storybook MCP는 Storybook 개발팀(Chromatic)의 Kyle 등이 참여한 `Agentic Design Systems in 2026` 라이브 세션을 통해 공개된 개념 및 연동 규격이다. 

- **Story의 코드적 위상**: Storybook의 스토리(Story)는 Figma 캔버스의 베리언트(Variant)에 대응하는 살아있는 코드 버전이다. 컴포넌트의 특정 상태(State)가 브라우저에서 실제 렌더링되고 프로퍼티(Props)가 명시된 형태이다.
- **Figma MCP와의 상호보완성**: Figma MCP는 레이어 구조, 토큰, 시각적 레이아웃 정보를 에이전트에 넘겨주지만, 인터랙션이나 동적 상태 변화는 스토리북 스토리를 통해 파악한다. 두 MCP가 연결될 때 에이전트는 완전한 UI 생성 능력을 갖춘다.

### 2. State 보장의 중요성
에이전트는 제공된 데이터 공간 내에서만 정확히 판단한다.
- 만약 `Star` 컴포넌트에 기본(Default) 스토리만 존재한다면, 에이전트는 빈 별(Empty), 오류 상태(Error), 마우스 호버(Hover) 등이 존재하지 않는다고 판단하여 불완전한 UI를 합성하게 된다.
- 따라서 `hover`, `focus`, `active`, `disabled`, `error`, `empty`, `loading`, `skeleton` 등 사용 가능한 모든 State를 스토리로 작성해 두어야 에이전트가 완성도 높은 UI와 유닛 테스트 코드를 동시에 생성해낸다.

### 3. 정량적 가치 및 파이프라인
Storybook 데모(1:01 부근)에 따르면 디자인 시스템 퀄리티가 고도화될수록 속도, 토큰 비용, 코드 순응도(Code Conformity)에서 측정 가능한 지표 상승이 확인된다 (raw/Agentic AI, design systems & Figma. a practical guide-ko.md). 디자인 시스템 투자(ROI)를 에이전트 수행 능력 지표로 입증할 수 있게 된 것이다.

## 예시

### 1. 에이전트 조립 시나리오 (Customer Reviews Component)
사용자가 AI 에이전트(예: [[Claude 3.5 Sonnet]] 또는 [[GPT-4o]])에게 다음과 같이 요청하는 상황이다.

> **프롬프트**: "고객 리뷰(Customer Reviews) 컴포넌트를 새로 합성해 줘."

이때 Figma 프레임이나 Jira 티켓이 새로 작성되지 않은 상태라 하더라도, 에이전트는 Storybook MCP를 통해 기존 스토리북에 등록된 `StarRating`, `Typography`, `Avatar` 컴포넌트의 스토리 및 Props 규격을 탐색한다. 이후 아래와 같이 기 존재하는 자산을 조합한 코드를 작성한다.

```tsx
// Storybook MCP로 조회한 스토리 규격을 기반으로 생성된 고객 리뷰 컴포넌트
import React from 'react';
import { Avatar } from './Avatar';
import { StarRating } from './StarRating';
import { Typography } from './Typography';

interface ReviewCardProps {
  authorName: string;
  avatarUrl: string;
  rating: number; // 0 ~ 5
  reviewText: string;
  createdAt: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  authorName,
  avatarUrl,
  rating,
  reviewText,
  createdAt,
}) => {
  return (
    <div className="review-card p-4 border rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <Avatar src={avatarUrl} alt={authorName} size="medium" />
        <div>
          <Typography variant="subtitle2" weight="bold">{authorName}</Typography>
          <Typography variant="caption" color="subtle">{createdAt}</Typography>
        </div>
      </div>
      <StarRating value={rating} isInteractive={false} size="small" />
      <Typography variant="body1" className="mt-2">{reviewText}</Typography>
    </div>
  );
};
```

### 2. Storybook MCP 서버 응답 데이터 예시 (JSON-RPC)
Storybook MCP가 에이전트에게 제공하는 스토리 메타데이터의 예시 규격이다.

```json
{
  "jsonrpc": "2.0",
  "result": {
    "component": "StarRating",
    "stories": [
      {
        "name": "Filled",
        "args": { "value": 5, "size": "medium", "disabled": false }
      },
      {
        "name": "Half",
        "args": { "value": 3.5, "size": "medium", "disabled": false }
      },
      {
        "name": "Empty",
        "args": { "value": 0, "size": "medium", "disabled": false }
      }
    ],
    "argTypes": {
      "value": { "control": "number", "description": "0~5 사이의 평점 수치" },
      "size": { "control": "select", "options": ["small", "medium", "large"] },
      "isInteractive": { "control": "boolean", "description": "사용자 입력 가능 여부" }
    }
  },
  "id": 1
}
```

## 충돌
현재 문서 소스 기준 기존 내용과의 직접적인 충돌은 관찰되지 않음. 단, 정적 시각 구조만 다루는 [[Figma MCP]]와 실제 실행 및 행동 맥락을 다루는 Storybook MCP 간의 상호 매핑이나 단일 진실 고치(Single Source of Truth) 설정 시 우선순위에 대한 팀별 해석 차이가 존재할 수 있음.

## 관련 노트
- [[Model Context Protocol]]
- [[Figma MCP]]
- [[디자인 시스템]]
- [[Code Connect]]
- [[Atomic Design]]

## 출처
- `raw/Agentic AI, design systems & Figma. a practical guide-ko.md`
```