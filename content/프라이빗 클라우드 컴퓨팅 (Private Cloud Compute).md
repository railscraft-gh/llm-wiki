---
type: concept
status: draft
core: false
tags:
  - llm
  - cloud-security
aliases:
  - Private Cloud Compute
  - PCC
  - 프라이빗 클라우드 컴퓨팅
sources:
  - raw/macOS 27 Has a Hidden LLM Inside — 10 (Amazing) Things You Can Do With It.md
created: 2026-07-15
updated: 2026-07-15
---

# Private Cloud Compute (Private Cloud Compute)

## 한 줄 정의

애플(Apple)에서 설계한 기밀 클라우드 AI 서비스 아키텍처로, 로컬 디바이스의 제한된 연산력 한계를 극복하기 위해 대규모 클라우드 지능을 대여하되 사용자 프롬프트 데이터를 저장하지 않고 답변 반환 즉시 휘발 소멸시키는 무상태(stateless) 보안 컴퓨팅 센터.

## 핵심 요지

1. **무상태(stateless) 프라이버시**: 클라우드로 전달된 모든 개인 데이터나 소스 코드 정보는 오직 추론 연산 목적을 위해서만 사용되며, 답변 도출 즉시 서버 메모리 영역에서 영구히 지워진다. 애플 본사를 포함한 누구도 사용자의 데이터를 들여다보거나 학습시킬 수 없다.
2. **독립적 암호화 검증**: 애플은 PCC 서버 구동 코드와 가상 OS 환경 이미지 자체를 퍼블릭에 공개하여, 독립적인 외부 보안 연구진이 실시간으로 시스템 프라이버시 주장을 암호학적으로 역검증(verify)할 수 있도록 설계했다.
3. **확장된 성능과 32K 컨텍스트**: 로컬 온디바이스 모델(system)의 4,096 토큰 한계를 크게 넘어서는 **32,768 토큰(8배)**의 컨텍스트 윈도우 수용 한계량을 제공한다. 8GB M1과 같은 저사양 Mac 기종에서도 하드웨어 리소스 제약 없이 클라우드 서버의 고속 추론 성능을 고스란히 누릴 수 있다.

## 상세

### PCC의 쿼터 관리
- PCC는 남용 및 리소스 고갈 방지를 위해 사용자 고유의 Apple Account 계정 ID 정보와 연동된 **일일 사용량 제한(쿼터)**을 적용한다.
- 사용자는 `fm quota-usage` 명령어를 통해 실시간 잔여 쿼터 현황을 쉽게 파악할 수 있다. 애플은 향후 이 클라우드 쿼터 한계선을 높이는 유료 대안으로 iCloud+ 멤버십과의 요금제 연동안을 고려하고 있다.

## 예시

`fm CLI` 또는 `fm chat` 대화 모드 내에서 클라우드 PCC 모델로 전환하여 대형 텍스트 분석 작업을 위임하는 CLI 옵션 적용:
```bash
# 단발성 쿼리에 PCC 모델 강제 지정
fm respond --model pcc 'Explain the CAP theorem in two sentences.'

# fm chat 내에서 스위칭
$ fm chat
> /model pcc
[Switched to model 'pcc' - 컨텍스트 한계 32,768 토큰으로 확장 확인]
```

## 관련 노트

- [[Apple Foundation Models CLI (fm)]]
- [[로컬 LLM 30분 실전 가이드]]
- [[오픈소스 LLM 경제성과 벤더 종속성 해지]]

