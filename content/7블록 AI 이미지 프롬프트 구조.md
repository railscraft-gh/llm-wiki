---
type: concept
status: draft
core: false
tags:
  - ai
  - prompt
aliases: []
sources:
  - raw/12 Copy-Paste AI Image Prompts That Make Your Product Look Like It Has a $5,000 Design Team.md
created: 2026-08-01
updated: 2026-08-01
---
# 7블록 AI 이미지 프롬프트 구조

## 한 줄 정의
AI 이미지 생성 시 일관되고 브랜드에 맞는 고품질 결과물을 얻기 위해 사용하는 7가지 블록 기반의 체계적인 프롬프트 작성 구조.

## 핵심 요지
- 대부분의 AI 이미지 생성 실패는 형식, 역할(목표), 규칙의 부재에서 온다.
- 프롬프트를 FORMAT, BUSINESS, PRODUCT, BUYER, GOAL, SCENE, COMPOSITION, STYLE, TEXT, BRAND INPUTS, IMAGE RULES, OUTPUT 등의 블록으로 구조화하면 실제 브랜드 화보 같은 결과물을 얻을 수 있다.
- 가장 중요한 블록은 **GOAL(목표)**과 **IMAGE RULES(이미지 규칙)**이다.

## 상세
- **FORMAT (형식)**: 게재할 플랫폼과 화면 비율 (예: 인스타그램 4:5).
- **BUSINESS (비즈니스)**: 브랜드 또는 비즈니스의 간단한 설명.
- **PRODUCT/SERVICE (제품)**: 이미지에 들어갈 구체적인 판매 대상.
- **BUYER (구매자)**: 타겟 고객층.
- **GOAL (목표)**: 이미지가 수행할 단 하나의 역할 (판매, 설명, 장식 중 택 1).
- **SCENE (장면)**: 배경과 소품 등 시각적 환경.
- **COMPOSITION (구도)**: 피사체의 배치와 텍스트를 위한 여백.
- **STYLE (스타일)**: 미적 감각 및 Hex 컬러 팔레트 (보통 3가지 색상 이내).
- **TEXT (텍스트)**: 이미지에 들어갈 정확한 문구 지정.
- **BRAND INPUTS (브랜드 정보)**: 실제 로고 및 제품의 디테일 보존 지시.
- **IMAGE RULES (이미지 규칙)**: 가짜 로고, 가짜 리뷰, 과장 광고 등 생성하면 안 되는 요소 명시.
- **OUTPUT (출력)**: 최종 해상도와 목적.

자주 하는 실수로는 한 이미지에 여러 목표를 욱여넣는 것, 이미지 내 텍스트를 AI에게 알아서 쓰게 방치하는 것, 플랫폼 특성(UI에 가려지는 영역)을 고려하지 않아 안전 여백을 무시하는 것이 있다. 디자인 감각보다 제대로 된 지시서(브리프)를 작성하는 능력이 훨씬 중요하다.

## 예시
인스타그램 피드용 제품 사진 생성:
`FORMAT: 인스타그램 4:5 제품 게시물`
`BUSINESS: Purple Cola...`
`STYLE: 따뜻한 에디토리얼 디자인, 점토색 #9B4E3C...`
`IMAGE RULES: 가짜 로고, 가짜 리뷰 금지...`

## 관련 노트
- [[Prompt Engineering]]
- [[Claude Design]]

## 출처
- raw/12 Copy-Paste AI Image Prompts That Make Your Product Look Like It Has a $5,000 Design Team.md
