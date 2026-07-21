---
type: concept
status: draft
core: false
tags:
- llm
- ocr
- open-source
- vision
aliases:
- Chandra OCR 2
- Datalab Chandra
- Full-page decoding OCR
- Chandra-OCR-2
sources:
- raw/RIP Commercial OCR. An Open-Source Model Just Topped Every Benchmark..md
created: 2026-07-21
updated: 2026-07-21
---
# Chandra OCR 2

## 한 줄 정의
Datalab이 개발한 4B(40억) 파라미터 경량 모델로, 상용 API(GPT-4o, Gemini 2.5 Flash)를 능가하는 SOTA 벤치마크 성과를 기록한 오픈 가중치 문서 지능(OCR) 모델.

## 핵심 요지
- **Full-page Decoding 방식**: 기존의 블록 쪼개기 파이프라인 대신 페이지 전체 레이아웃 맥락을 한 번에 해독하여 스캔본, 중첩 표, 수학 공식, Mermaid 순서도까지 완벽 변환.
- **상용 API 압도적 벤치마크**:
  - AllenAI olmOCR 벤치마크 [85.9% 기록 (GPT-4o 69.9% 대비 16%p 우위)](file:///Users/railscraft/Obsidian/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md#L30-L31).
  - 90개 다국어 평가 [72.7% (Gemini 2.5 Flash 60.8% 대비 12%p 우위)](file:///Users/railscraft/Obsidian/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md#L47).
  - 43개 핵심 언어 [77.8% (GPT-5 Mini 60.5% 대비 17.3%p 우위)](file:///Users/railscraft/Obsidian/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md#L55).
- **RAG 파이프라인 기반 강화**: 문서 파싱 단계의 깨진 청크(chunk) 및 오인식 오염을 사전 차단하여 RAG 시스템의 환각 및 검색 실패 방지.

## 상세
- **처리 성능 및 배치**:
  - 이전 9B 모델에서 4B로 모델 크기를 절반 이하로 줄이면서 속도는 2배 증가.
  - 단일 NVIDIA H100 GPU 기준 [초당 약 2페이지 처리](file:///Users/railscraft/Obsidian/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md#L79).
  - `pip install chandra-ocr` 단 5줄 명령어로 vLLM/HuggingFace 배치 가능.

## 예시
- 1913년에 작성되어 흐려진 스리니바사 라마누잔의 친필 편지 스캔본 및 111년 전 수학 표기법을 [마크다운/Mermaid 구조화 데이터로 무결하게 해독](file:///Users/railscraft/Obsidian/raw/RIP%20Commercial%20OCR.%20An%20Open-Source%20Model%20Just%20Topped%20Every%20Benchmark..md#L13-L17).

## 충돌
- **상업용 라이선스 제약**: Apache 2.0 소스코드와 달리 가중치는 OpenRAIL-M 라이선스로 연 매출 200만 달러 이상의 대기업 상업 이용 시 별도 라이선스가 요구됨.

## 관련 노트
- [[하이브리드 RAG]]
- [[Vectorless RAG (PageIndex)]]

