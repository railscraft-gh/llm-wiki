---
type: concept
status: draft
core: false
tags:
  - llm
  - apple-silicon
  - memory-optimization
  - kv-cache
  - turboquant
aliases: [KV 캐시 압축, TurboQuant]
sources:
  - raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 TurboQuant, 애플 실리콘 상륙.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
구글 리서치가 개발한 KV 캐시 압축 알고리즘으로, 애플 실리콘 맥 환경에서 재학습 없이 KV 캐시 메모리 사용량을 4~6배 절감하여 대규모 모델과 긴 컨텍스트 처리를 가능하게 하는 기술입니다.

## 핵심 요지
- **KV 캐시 병목:** 긴 컨텍스트 처리 시 가중치보다 KV 캐시가 메모리 대부분을 점유하는 것이 로컬 LLM의 주된 병목임 [raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 [[TurboQuant]], 애플 실리콘 상륙.md#L9](file:///Users/railscraft/Obsidian/raw/5%EB%B0%B0%20%EC%A0%81%EC%9D%80%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A1%9C%20%EB%A7%A5%EC%97%90%EC%84%9C%2032B%20%EB%AA%A8%EB%8D%B8%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20%EA%B5%AC%EA%B8%80%20[[TurboQuant]],%20%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%83%81%EB%A5%99.md#L9).
- **[[TurboQuant]] 구성:** 
    - **PolarQuant:** 무작위 회전을 통해 데이터를 정규분포 형태로 정렬하고 극좌표계로 분해하여 압축 [raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 [[TurboQuant]], 애플 실리콘 상륙.md#L31](file:///Users/railscraft/Obsidian/raw/5%EB%B0%B0%20%EC%A0%81%EC%9D%80%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A1%9C%20%EB%A7%A5%EC%97%90%EC%84%9C%2032B%20%EB%AA%A8%EB%8D%B8%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20%EA%B5%AC%EA%B8%80%20[[TurboQuant]],%20%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%83%81%EB%A5%99.md#L31).
    - **QJL:** 잔차 오차를 1비트 부호값으로 보정하여 정밀도 손실을 최소화 [raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 [[TurboQuant]], 애플 실리콘 상륙.md#L43](file:///Users/railscraft/Obsidian/raw/5%EB%B0%B0%20%EC%A0%81%EC%9D%80%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A1%9C%20%EB%A7%A5%EC%97%90%EC%84%9C%2032B%20%EB%AA%A8%EB%8D%B8%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20%EA%B5%AC%EA%B8%80%20[[TurboQuant]],%20%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%83%81%EB%A5%99.md#L43).
- **맥 최적화:** `mlx` 프레임워크를 기반으로 한 퓨즈드 메탈 커널 구현을 통해 원본 모델 속도에 근접한 압축 성능을 달성 [raw/5배 적은 메모리로 맥에서 32B 모델 실행하기 - 구글 [[TurboQuant]], 애플 실리콘 상륙.md#L83](file:///Users/railscraft/Obsidian/raw/5%EB%B0%B0%20%EC%A0%81%EC%9D%80%20%EB%A9%94%EB%AA%A8%EB%A6%AC%EB%A1%9C%20%EB%A7%A5%EC%97%90%EC%84%9C%2032B%20%EB%AA%A8%EB%8D%B8%20%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%20-%20%EA%B5%AC%EA%B8%80%20[[TurboQuant]],%20%EC%95%A0%ED%94%8C%20%EC%8B%A4%EB%A6%AC%EC%BD%98%20%EC%83%81%EB%A5%99.md#L83).

## 상세
로컬 LLM 추론 시 발생하는 KV 캐시 메모리 부족 문제는 단순 하드웨어 사양 향상으로 해결하기 어렵습니다. [[TurboQuant]]는 벡터 양자화 이론을 바탕으로 모델 가중치에만 치중하던 압축 기법을 KV 캐시 영역으로 확장하여, 실질적인 로컬 하드웨어(애플 실리콘 맥)에서 긴 컨텍스트 처리를 가능케 하는 혁신적인 아키텍처입니다.

## 관련 노트
- [[Apple_Silicon_Local_AI_Stack]]
- [[KV_Cache_Optimization]]

