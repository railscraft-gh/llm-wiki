---
type: concept
status: draft
core: false
tags:
  - llm
  - infra
aliases:
  - 오픈소스 LLM 플랫폼
sources:
  - raw/2026년 오픈소스 LLM 플랫폼 비교 가이드 - Ollama, OpenRouter, Groq, NVIDIA NIM.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
2026년 기준, 오픈소스 LLM을 로컬이나 클라우드에서 비용 효율적으로 구동하기 위한 플랫폼별 특징과 실무적 선택 기준 가이드.

## 핵심 요지
상용 폐쇄형 모델과 대등한 성능을 가진 오픈소스 모델들(Gemma 4, Llama 4, Qwen3 등)을 무료/저비용으로 호출할 수 있는 다양한 인프라 플랫폼이 존재하며, 모든 플랫폼이 OpenAI 호환 API를 지원하므로 코드의 플랫폼 의존성을 최소화하는 설계가 필수적이다.

## 상세
- **Ollama**: 로컬 자체 호스팅 표준. 보안과 오프라인 작업에 최적화.
- **OpenRouter**: API 게이트웨이. API 키 하나로 300+ 모델 활용 가능, 다양한 무료 모델 제공.
- **Groq**: LPU 기반 초고속 추론. 실시간 대화 및 음성 AI 애플리케이션에 필수.
- **[[NVIDIA NIM]]**: 특화 도메인(생물학, 화학 등) 및 NVIDIA 고유 모델군 제공.
- **무료 스택 조합**: Cerebras(일일 100만 토큰), Groq, Google AI Studio 등을 병행하여 하루 300만~400만 토큰 무료 확보 가능 [raw/[[2026년 오픈소스 LLM 플랫폼 비교]] 가이드 - Ollama, OpenRouter, Groq, [[NVIDIA NIM]].md#L399](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%20LLM%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EB%B9%84%EA%B5%90%20%EA%B0%80%EC%9D%B4%EB%93%9C%20-%20Ollama,%20OpenRouter,%20Groq,%20NVIDIA%20NIM.md#L399).

## 예시
플랫폼을 전환해도 소스 코드 수정이 필요 없도록 `.env`로 추상화 설계 [raw/[[2026년 오픈소스 LLM 플랫폼 비교]] 가이드 - Ollama, OpenRouter, Groq, [[NVIDIA NIM]].md#L612](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%20LLM%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EB%B9%84%EA%B5%90%20%EA%B0%80%EC%9D%B4%EB%93%9C%20-%20Ollama,%20OpenRouter,%20Groq,%20NVIDIA%20NIM.md#L612).

## 충돌
플랫폼별 속도/가용량 차이로 인한 로직 오류를 방지하기 위해 공급자 로테이터(Provider Rotator) 구현 필요 [raw/[[2026년 오픈소스 LLM 플랫폼 비교]] 가이드 - Ollama, OpenRouter, Groq, [[NVIDIA NIM]].md#L431](file:///Users/railscraft/Obsidian/raw/2026%EB%85%84%20%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4%20LLM%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EB%B9%84%EA%B5%90%20%EA%B0%80%EC%9D%B4%EB%93%9C%20-%20Ollama,%20OpenRouter,%20Groq,%20NVIDIA%20NIM.md#L431).

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[LLM Wiki 운영 패턴]]

