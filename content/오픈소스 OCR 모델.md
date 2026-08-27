---
type: tool
status: draft
core: false
tags:
- ocr
- open-source
- ai-model
- document-processing
- rag
sources:
- raw/RIP Commercial OCR. An Open-Source Model Just Topped Every Benchmark..md
created: 2026-07-20
updated: 2026-07-20
aliases:
- 오픈소스-OCR-모델
---
# 오픈소스 OCR 모델

## 한 줄 정의

오픈소스 OCR 모델은 대규모 상용 클라우드 API에 의존하지 않고 문서 레이아웃, 표, 수학 표기법, 손글씨, 다이어그램을 원본 맥락 그대로 해독해 구조화된 마크다운/HTML/JSON으로 변환해 주는 로컬 구동형 신경망 도구다.

## 핵심 요지

- 브루클린의 AI 스타트업 Datalab(창업자 Vik Paruchuri)이 공개한 **[[Chandra OCR 2]]**는 4B(40억) 파라미터 기반 multimodal 엔드투엔드 모델이다.
- AllenAI의 독립 olmOCR 벤치마크에서 **85.9%** 점수로 빅테크 상용 모델을 제치고 SOTA(업계 최고 성능)를 달성했다. (참고: GPT-4o 69.9%).
- 90개 언어 다국어 벤치마크 및 남아시아 문자 인식률에서도 고성능을 발휘하며, 단일 H100 GPU 기준 초당 약 2페이지 처리 속도를 보여준다.
- 문서 청킹 및 파싱 실패로 인한 [[RAG]] 시스템의 환각 현상을 사전 차단하는 상류 데이터 가공 도구로 활용된다.

## 상세

### 주요 모델 및 기술적 궤적

문서 처리 도구 Marker와 Surya의 개발자인 깃허브 오픈소스 5만 스타 보유자 빅 파루추리(Vik Paruchuri)가 집대성한 모델이다. 기존 파이프라인 방식(블록 단위 쪼개기 및 병합)과 달리, 페이지 전체의 레이아웃 맥락을 한눈에 해독하는 **Full-page decoding** 기법을 적용했다.

1913년에 작성된 라마누잔의 친필 편지처럼 잉크가 흐려지고 수학 표기법이 빽빽한 111년 전 원고를 정확히 복원해 냈다.

### 벤치마크 성능 수치

- **olmOCR 벤치마크 (AllenAI 독립 측정)**: [[Chandra OCR 2]]는 [85.9% 점수를 받아 GPT-4o (69.9%)를 16%p 차이로 앞섰다](file:///Users/railscraft/[[Obsidian]]/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md#L31-L32).
- **90개 언어 다국어 벤치마크**: [[Chandra OCR 2]]는 [72.7% 점수를 기록해 Gemini 2.5 Flash (60.8%)를 12%p 차이로 앞섰다](file:///Users/railscraft/[[Obsidian]]/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md#L47).
- **주요 43개 언어 벤치마크**: [[Chandra OCR 2]]는 [77.8%를 기록해 GPT-5 Mini (60.5%)를 앞섰다](file:///Users/railscraft/[[Obsidian]]/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md#L55).
- **이전 Chandra 1(9B) 대비 향상 수치**: 4B로 모델 크기를 절반 이하로 줄였음에도 처리 속도가 2배 늘어났으며, [칸나다어 +42.6%p, 말라얄람어 +46.2%p, 텔루구어 +39.1%p 성능이 향상](file:///Users/railscraft/[[Obsidian]]/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md#L55)되었다.
- **처리 속도**: 단일 NVIDIA H100 GPU 기준 [초당 약 2페이지를 처리](file:///Users/railscraft/[[Obsidian]]/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md#L79)한다.

### 확장 기능 및 라이선스 정책

- **기능**: 중첩 헤더 표 구조 보존, 체크박스 인식, 순서도를 Mermaid 다이어그램 포맷 코드로 변환 출력.
- **라이선스**: 소스코드는 Apache 2.0 오픈소스이나, 모델 가중치는 OpenRAIL-M 라이선스를 취한다. [연구·개인 및 연 매출 200만 달러 미만 스타트업에는 무료](file:///Users/railscraft/[[Obsidian]]/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md#L107)이나, 대기업 상용화 시 별도 라이선스가 요구된다.

## 예시

```bash
# HuggingFace 로컬 구동 예시
pip install chandra-ocr[hf]
chandra input.pdf ./output --method hf

# vLLM 서버 구성 예시
pip install chandra-ocr
chandra_vllm
chandra input.pdf ./output
```

## 충돌

독립 벤치마크인 olmOCR에서는 압도적 성능을 보였으나, 다국어 벤치마크는 개발사 자체 제작 데이터셋을 활용해 검증했으므로 객관적 교차 평가가 추가로 요구된다. 또한 손글씨 단순 메모(90.8%) 대비 손글씨 복잡 양식(form) 서식 해독률은 약 50.4% 수준으로 하락하는 한계가 존재한다.

## 관련 노트

- [[RAG 아키텍처 선택]]
- [[오픈소스 LLM 경제성과 벤더 종속성 해지]]
- [[2026년 오픈소스 LLM 플랫폼 비교]]
- [[AI 오픈소스 작업대]]

## 출처

- [RIP Commercial OCR. An Open-Source Model Just Topped Every Benchmark..md](file:///Users/railscraft/[[Obsidian]]/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md)
