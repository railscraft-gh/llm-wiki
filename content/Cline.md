---
type: tool
status: draft
core: false
tags:
  - llm
aliases: []
sources:
  - raw/NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
Cline은 VS Code 사이드바 내에서 파일 생성/편집, 터미널 명령어 실행, 오류 디버깅 등 개발 전체 주기를 자율적으로 반복 수행하는 모델 독립적(Model-agnostic) 오픈소스 AI 코딩 에이전트이다.

## 핵심 요지
- Cline은 다운로드 수 500만 건 이상, 깃허브 스타 6만 1천 개 이상을 획득하며 인기를 얻은 개발 에이전트 툴이다 [raw/NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md#L118](file:///Users/railscraft/Obsidian/raw/NVIDIA%20Build%EB%A1%9C%20%EC%9B%94%2020%EB%8B%AC%EB%9F%AC%20%EC%95%84%EB%81%BC%EB%8A%94%20%EB%AC%B4%EB%A3%8C%20AI%20%EB%AA%A8%EB%8D%B8%20%ED%99%9C%EC%9A%A9%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L118).
- 기본 설정에서 무료 AI 모델인 `deepseek-v4-flash`를 자체 옵션으로 제공한다 [raw/NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md#L120](file:///Users/railscraft/Obsidian/raw/NVIDIA%20Build%EB%A1%9C%20%EC%9B%94%2020%EB%8B%AC%EB%9F%AC%20%EC%95%84%EB%81%BC%EB%8A%94%20%EB%AC%B4%EB%A3%8C%20AI%20%EB%AA%A8%EB%8D%B8%20%ED%99%9C%EC%9A%A9%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L120).

## 상세
Cline은 원래 'Claude Dev'라는 이름으로 출시되었으나, 현재는 다양한 대형 언어 모델(LLM)과 연동할 수 있도록 설계되었다. OpenAI Compatible 기능을 통해 사용자는 [[NVIDIA NIM]] 등의 무료 추론 레이어를 베이스 URL로 삼아 에이전트 루프를 저비용(Zero tokens cost)으로 구동할 수 있다 [raw/NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md#L126-L130](file:///Users/railscraft/Obsidian/raw/NVIDIA%20Build%EB%A1%9C%20%EC%9B%94%2020%EB%8B%AC%EB%9F%AC%20%EC%95%84%EB%81%BC%EB%8A%94%20%EB%AC%B4%EB%A3%8C%20AI%20%EB%AA%A8%EB%8D%B8%20%ED%99%9C%EC%9A%A9%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L126-L130).
또한 파일 시스템 접근 및 터미널 명령어 실행, 에러 상태 수집 및 해결에 이르기까지 자율적 에이전트 루프(Agentic loop)를 통해 개발을 수행한다.

## 예시
Cline 설정 창에서 OpenAI Compatible 공급자 및 [[NVIDIA NIM]] 연동을 설정하는 방법 [raw/NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md#L126-L130](file:///Users/railscraft/Obsidian/raw/NVIDIA%20Build%EB%A1%9C%20%EC%9B%94%2020%EB%8B%AC%EB%9F%AC%20%EC%95%84%EB%81%BC%EB%8A%94%20%EB%AC%B4%EB%A3%8C%20AI%20%EB%AA%A8%EB%8D%B8%20%ED%99%9C%EC%9A%A9%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L126-L130):
- Provider: `OpenAI Compatible`
- Base URL: `https://integrate.api.nvidia.com/v1`
- API Key: `nvapi-`로 시작하는 NVIDIA API Key
- Model ID: 카탈로그에서 찾은 ID (예: `moonshotai/kimi-k2.6`)

## 충돌
- Cline의 동작은 LLM의 도구/함수 호출(Function calling) 능력을 바탕으로 하므로, 함수 호출을 지원하지 않는 모델의 경우 에이전트로서 정상 작동하지 못할 수 있다 [raw/NVIDIA Build로 월 20달러 아끼는 무료 AI 모델 활용 가이드.md#L137-L138](file:///Users/railscraft/Obsidian/raw/NVIDIA%20Build%EB%A1%9C%20%EC%9B%94%2020%EB%8B%AC%EB%9F%AC%20%EC%95%84%EB%81%BC%EB%8A%94%20%EB%AC%B4%EB%A3%8C%20AI%20%EB%AA%A8%EB%8D%B8%20%ED%99%9C%EC%9A%A9%20%EA%B0%80%EC%9D%B4%EB%93%9C.md#L137-L138).

## 관련 노트
- [[Vibe Coding과 Agentic Engineering]]
- [[AI 코딩 에이전트 검증 전략]]

