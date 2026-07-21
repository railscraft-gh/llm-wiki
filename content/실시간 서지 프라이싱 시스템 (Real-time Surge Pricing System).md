---type: workflow
status: draft
core: false
tags:
  - infrastructure
  - system-design
aliases:
  - 실시간 서지 프라이싱 시스템
  - 서지 프라이싱
  - 동적 할증 가격 책정
  - 실시간-서지-프라이싱-시스템-(Real-time-Surge-Pricing-System)
sources:
  - raw/I Failed Uber’s System Design Interview Last Month. Here’s Every Question They Asked..md
created: 2026-07-15
updated: 2026-07-15
---
# 실시간 서지 프라이싱 시스템 (Real-time Surge Pricing System)

## 한 줄 정의

도시 전역의 실시간 탑승 수요와 가용 운전자 공급 데이터를 실시간 수집·분석하여, 지리적 영역(그리드)별 할증 배율을 30~60초 주기로 끊임없이 갱신하여 출력하는 초저지연 분산 스트리밍 아키텍처.

## 핵심 요지

1. **스트리밍 파이프라인**: GPS 위치 데이터와 탑승 요청 이벤트를 카프카(Kafka)와 아파치 플링크(Apache Flink)를 결합한 분산 데이터 처리 엔진을 활용해 계산하며, P99 지연 시간 기준 5초 이내의 실시간 처리를 지향한다.
2. **장애 감쇄 및 회복 패턴 (Fallback)**: 스트리밍 연산 노드 장애 시, Redis 캐시의 만료 시간(TTL) 제어와 서킷 브레이커(Circuit Breaker)를 결합하여, 시스템 마비 시 탑승자에게 오래된 할증률을 불합리하게 적용하는 대신 기본 1.0배 요금으로 안전하게 복귀하도록 구성한다.
3. **다중 지역 규제 (Regulatory Mapping)**: 실시간 연산 파이프라인에서 각 구역 ID가 물리적으로 행정 구역 경계나 규제 제한선(예: 특정 도시의 할증률 2.5배 제한 법안)에 걸쳐 있을 때, Flink 단에서 도시별 설정(config) 매핑을 실시간 대조 판별해야 하는 분산 규제 정책 준수 설계의 난관이 존재한다.

## 상세

### 아키텍처 흐름도
```text
[ 운전자 GPS ] ──► [ H3 Hex Mapper ] ──► [ 공급 카운터 (Redis) ]  
                                                    │  
[ 탑승 요청 ]   ──► [ H3 Hex Mapper ] ──► [ 수요 카운터 (Redis) ]  
                                                    │  
                                                    ▼  
                                          [ Flink 스트림 계산기 ]  
                                                    │  
                                                    ▼  
                                          [ 가격 캐시 (Redis) ] ──► [ Pricing Service ]
```

### 장애 복구 아키텍처 설계 (Failure Modes & Mitigation)
- **만료 정책 활용 캐시 보존 (Stale Cache Fallback)**: Flink가 다운되어 최신 배율이 주입되지 않아도 Redis 키의 TTL을 120초로 두어 기존 연산 값을 유지함으로써 짧은 순간의 지연 장애를 사용자에게 숨긴다.
- **서킷 브레이커 패턴**: Flink 서버 다운 타임이 3분을 초과할 경우, Pricing Service 단에서 서지 배율을 강제로 기본값인 1.0배로 롤백시켜 고가 할증이 정체되는 현상을 방지한다.
- **데드 레터 큐 (DLQ)**: 연산 실패한 이벤트를 Kafka의 특정 DLQ 토픽으로 우회시켜 원인 분석을 자동화한다.

## 예시

기본적인 서지 배율 계산 수식:
```python
# target_ratio는 해당 도시의 이상적인 공급/수요 비율
surge_multiplier = max(1.0, demand_count / (supply_count * target_ratio))
```
실무 프로덕션에서는 위 식에 인접 구역 공급량을 보정하는 함수(`kRing`) 및 과거 특정 요일 가중치, 실시간 날씨 데이터 등을 연합하여 최종 배율을 계산한다.

## 관련 노트

- [[빅테크 아키텍처 10대 엔지니어링 논문]]
- [[비동기 메시지 큐 (Asynchronous Message Queue)]]
- [[H3 육각 그리드 시스템 (H3 Hexagonal Grid System)]]

