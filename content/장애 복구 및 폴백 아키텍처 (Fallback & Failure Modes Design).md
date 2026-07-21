---
type: workflow
status: draft
core: false
tags:
  - infrastructure
  - system-design
aliases:
  - 장애-복구-및-폴백-아키텍처-(Fallback-&-Failure-Modes-Design)
  - 장애 복구 및 폴백 아키텍처
  - 폴백 설계
  - Fallback & Failure Modes Design
sources:
  - raw/I Failed Uber’s System Design Interview Last Month. Here’s Every Question They Asked..md
created: 2026-07-15
updated: 2026-07-15
---

# 장애 복구 및 폴백 아키텍처 (Fallback & Failure Modes Design)

## 한 줄 정의

분산 컴퓨팅 및 스트리밍 시스템에서 예기치 못한 하드웨어 장애나 네트워크 타임아웃이 발생했을 때, 전체 서비스 마비나 연쇄 붕괴(Cascading Failure)를 방지하고 시스템을 안전하고 점진적으로 수준 저하(Graceful Degradation)시켜 작동 불능을 피하는 안전장치 설계 방법론.

## 핵심 요지

1. **만료 유예 캐싱 (Stale Cache Pattern)**: 실시간 연산 파이프라인(예: Flink 스트리밍)이 다운되어 최신 값이 주입되지 않더라도, 캐시(Redis 등)의 TTL(Time-To-Live)을 여유 있게 관리하거나 과거의 마지막 정상 상태(Stale state) 데이터를 일정 임계값(예: 120초) 동안 계속 반환하여 장애를 감춘다.
2. **서킷 브레이커 (Circuit Breaker) 롤백**: 종속 서비스가 지속적으로 에러를 반환하면 네트워크 호출을 즉시 차단(Open)하고 미리 하드코딩해 둔 기본 안전값(예: 기본 배율 1.0배 요금 적용)으로 대체하여 시스템을 안전하게 롤백시킨다.
3. **데드 레터 큐 (Dead Letter Queue, DLQ) 격리**: 형식 에러나 데이터 유실 등으로 인해 연산에 실패한 특정 이벤트 스트림을 버리지 않고 전용 카프카(Kafka) 토픽이나 큐로 격리시켜 본진 파이프라인 정체를 방지하고, 사후에 재시도(Retry) 및 디버깅을 진행할 수 있도록 설계한다.

## 상세

### 주요 장애 복구 메커니즘 3대 조합

```text
  [ 실시간 데이터 스트림 ] ──► [ 메인 프로세서 (Flink) ] ──► [ Redis 캐시 (정상 작동) ]
                                    │ (장애 발생)
                                    ▼ (서킷 브레이커 작동)
                             [ Fallback 모드 전환 ]
                                    │
                                    ├──► 1단계: Stale Cache 사용 (120초 미만)
                                    └──► 2단계: 기본 안전값(Default 1.0x) 강제 주입 (3분 초과 시)
```

- **Graceful Degradation (우아한 수준 저하)**: 실시간 할증 가격 책정이 실패했을 때, 전체 앱이 멈추는 대신 가격 할증을 일시적으로 중단하고 정가를 반환해 탑승자들이 호출 자체는 가능하도록 시스템 가용성(Availability)을 일관되게 보장한다.
- **Backpressure(배압) 관리**: 큐에 병목이 차올라 서버가 죽는 현상을 방지하기 위해 스트리밍 소비 속도를 소스 데이터 방출 측에 피드백 루프로 알리고 유입 속도를 조율한다.

## 예시

파이썬 기반의 데코레이터를 이용한 서킷 브레이커 및 폴백 메소드 구현 예시:
```python
from pybreaker import CircuitBreaker

# 5회 연속 실패 시 서킷 브레이커 발동 (Open)
db_breaker = CircuitBreaker(fail_max=5, timeout_duration=60)

@db_breaker
def calculate_realtime_price(user_id, grid_id):
    # Flink 혹은 원격 서비스 호출 (장애 지점)
    return call_flink_pricing_engine(user_id, grid_id)

def get_price_with_fallback(user_id, grid_id):
    try:
        return calculate_realtime_price(user_id, grid_id)
    except Exception as e:
        # 서킷 브레이커 발동 시 Stale 캐시 혹은 기본값(1.0) 반환
        stale_price = get_from_redis_cache(grid_id)
        if stale_price:
            return stale_price
        return 1.0  # 안전 롤백 기본 배율
```

## 관련 노트

- [[실시간 서지 프라이싱 시스템 (Real-time Surge Pricing System)]]
- [[비동기 메시지 큐 (Asynchronous Message Queue)]]
- [[에이전트 복리 실패의 수학]]

