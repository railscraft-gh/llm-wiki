---
type: tool
status: draft
core: false
tags:
  - llm
  - agentic
aliases:
  - NVIDIA Build
  - NVIDIA NIM
sources:
  - "raw/Stop Paying $20month. Use NVIDIA Build. 80+ Free AI Models.md"
created: 2026-07-11
updated: 2026-07-11
---

# NVIDIA Build (무료 AI 추론 플랫폼)

## 한 줄 정의
NVIDIA가 자체 DGX Cloud 인프라를 활용하여 다양한 오픈소스 및 상용 AI 모델을 무상으로 테스트하고 연동할 수 있도록 지원하는 고성능 추론 API 플랫폼이다.

## 핵심 요지
1. **풍부한 카탈로그**: MiniMax, Kimi, DeepSeek, GLM, Gemma 등 100여 개 이상의 풍부한 최신 LLM 및 비전 모델을 무료로 제공한다.
2. **OpenAI 규격 호환**: 모든 모델이 표준 OpenAI API 형식을 지원하므로, 설정 파일의 엔드포인트 URL(`https://integrate.api.nvidia.com/v1`)과 API 키 수정만으로 기존 시스템에 즉시 대치할 수 있다.
3. **진입 장벽 완화**: 신용카드 등록 없이 이메일/번호 인증만으로 계정을 생성하여 1,000~5,000회의 무료 추론 크레딧을 즉시 얻을 수 있다. (분당 요청 횟수 40회 제한)

## 상세
- **NVIDIA NIM (NVIDIA Inference Microservice)**: NVIDIA의 고성능 추론 서비스 스택을 기반으로 백엔드가 최적화되어 동작한다.
- **개발 환경(IDE/에이전트) 연동 및 한계**:
  - **Cursor**: 무료 요금제에서는 커스텀 모델 설정 자체가 제한(`Auto` 모델만 사용 허용)되며, 유료(Pro) 요금제에서도 콤포저(Composer), 인라인 자동완성 등 핵심 기능은 커스텀 엔드포인트를 거치지 못하고 사이드바 채팅 창에서만 모델을 쓸 수 있는 구조적 한계가 있다.
  - **Cline**: VS Code의 대표적인 오픈소스 코딩 에이전트로, 공급자 설정을 `OpenAI Compatible`로 맞춘 뒤 NVIDIA의 엔드포인트와 `nvapi-` 키를 주입하면, 파일 생성, 코드 수정, 터미널 실행, 버그 트래깅 등 전체 자율 루프(Agentic Loop)의 추론 서버로 NVIDIA Build 모델을 완벽하게 활용할 수 있다.
- **도구 사용(Tool Use / Function Calling) 주의점**: 에이전트의 워크플로우 제어를 위해서는 모델이 함수 호출을 올바르게 수행해야 한다. 카탈로그의 모든 모델이 이를 지원하는 것은 아니므로 모델 카드를 확인해야 하며, 일부 모델은 한국어 요청에 대해 도중 중국어로 변환되거나 탈락하는 언어 정렬의 일시적 한계가 발생할 수 있다.

## 예시
- **Cline 에이전트 연동 설정 예시**:
  - Provider: `OpenAI Compatible`
  - Base URL: `https://integrate.api.nvidia.com/v1`
  - API Key: `nvapi-xxxxxxxxxxxxxxxx`
  - Model ID: `moonshotai/kimi-k2.6` 또는 `google/gemma-3n-e4b-it`

## 충돌
- **상용 유료 API 지향론**: 에이전트의 안정성과 다국어 출력 일관성을 보장하려면 월 $20 결제나 Anthropic Claude 공식 API 같은 검증된 상용 서비스를 쓰는 것이 옳으며, 횡설수설이나 언어 번복이 잦은 무료 모델은 실무 에이전트 구동용으로 부족하다는 견해가 있다.
- **NVIDIA Build 지향론**: 초기 아이디어 구상 및 시제품(Prototype) 단계에서 비용 부담 없이 다양한 모델을 교환 적용해 보며, 특히 OpenAI 규격을 완벽 지원하므로 비즈니스 로직 수정 없이 모델을 다이나믹하게 테스트할 수 있어 개발의 경제성을 대폭 증진시킨다는 반론이 있다.

## 관련 노트
- [[2026년 오픈소스 LLM 플랫폼 비교]]
- [[Model Context Protocol]]
- [[AI 오픈소스 작업대]]

