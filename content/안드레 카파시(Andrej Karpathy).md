---
type: person
status: evergreen
core: false
tags:
  - neural-network
  - learning
aliases:
  - Andrej Karpathy
  - 안드레 카파시
sources:
  - raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md
created: 2026-07-29
updated: 2026-07-29
---

# 안드레 카파시([[Andrej Karpathy]])

## 한 줄 정의

OpenAI 공동 창립자이자 전 테슬라 AI 디렉터로, 거대한 프레임워크의 추상화를 걷어내고 밑바닥부터 알고리즘을 직접 구현하는 교육적 프로젝트를 통해 인공지능의 본질을 전파하는 대표적인 AI 엔지니어이자 교육자입니다.

## 역할

- **OpenAI 공동 창립자 및 연구원**: 초기 GPT 모델 및 AI 연구의 기틀을 마련했습니다.
- **테슬라(Tesla) Autopilot AI 디렉터**: 자율주행 신경망 아키텍처 및 비전 시스템 구축을 총괄했습니다.
- **AI 교육자**: 복잡한 딥러닝 개념을 맨땅에서(scratch) 파이썬 코드로 구현하여 설명하는 강의 및 오픈소스 배포 활동을 진행하고 있습니다.

## 대표 주장

- **알고리즘의 극단적 단순화와 본질 추구**: AI 시스템을 구축할 때 PyTorch나 CUDA 커널 같은 거대한 의존성 패키지와 프레임워크는 최적화를 위한 도구일 뿐, 지능의 실체는 README 파일 크기보다 작은 단순한 핵심 알고리즘에 존재함을 강조합니다.
- **밑바닥 구현을 통한 이해**: 라이브러리를 임포트(import)하여 쓰는 것을 넘어, 연쇄 법칙과 위상 정렬 등을 직접 작성해보는 것이 AI 구조를 이해하는 유일한 길이라고 주장합니다.

## 주요 자료

- **[[microGPT]] (2026년 2월 11일 공개)**: 단 243줄의 순수 파이썬 코드로 외부 의존성(os, math, random, argparse 제외) 없이 GPT 학습 및 [[자기회귀적 생성]]을 구현한 교육 프로젝트입니다.
- **nanoGPT**: PyTorch 기반으로 효율적인 GPT 학습 코드를 작성한 미니멀 프로젝트입니다.
- **micrograd**: 딥러닝의 [[자동 미분(autograd)]] 엔진을 약 100줄의 파이썬 코드로 구현한 프로젝트입니다.
- **llm.c**: 외부 프레임워크 없이 순수 C/CUDA로 GPT-2를 학습시키는 최적화 프로젝트입니다.

## 관련 노트

- [[자동 미분(autograd)]]
- [[역전파(backpropagation)]]
- [[트랜스포머 아키텍처]]
- [[Karpathy 지식 시스템]]

## 출처

- `raw/Andrej Karpathy Just Built an Entire GPT in 243 Lines of Python.md`
- [microGPT Gist by Andrej Karpathy](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95)