---
type: concept
status: draft
core: false
tags:
- llm
- agentic
aliases:
- 비동기 메시지 큐
- Asynchronous Message Queue
- 메시지 큐
- 비동기-메시지-큐-(Asynchronous-Message-Queue)
sources:
- raw/System Design Interview. How Would You Send 1 Million Notifications Without
  Overwhelming Your Servers.md
created: 2026-07-11
updated: 2026-07-11
---
# 비동기 메시지 큐 (Asynchronous Message Queue)

## 한 줄 정의
요청을 생성하는 API 서버와 이를 실제 처리하는 워커 프로세스를 디커플링(분리)하여, 대량의 작업을 대기열에 임시 보관하고 백그라운드에서 순차적이고 안정적으로 처리할 수 있게 하는 분리형 아키텍처 소프트웨어다.

## 핵심 요지
1. **서버-워커 디커플링**: 동기 방식의 호출로 인해 스레드가 차단(Blocking)되거나 메모리가 급증하는 현상을 막기 위해, 요청을 메시지 큐에 넣는 즉시 응답을 반환하고 실제 발송/계산은 독립된 워커가 비동기로 소화한다.
2. **트래픽 완충(Buffering)**: 순간적인 트래픽 폭주(예: 100만 건 알림 발송) 상황에서 외부 다운스트림 API나 내부 데이터베이스에 즉각 부하가 가지 않도록 대기열(Backlog)로 부하를 완화하는 방어선 역할을 한다.
3. **독립적 확장 및 속도 조절**: 대기열의 크기에 따라 백그라운드 워커를 유동적으로 오토스케일링할 수 있고, 외부 서버의 속도 제한(Rate Limit)에 맞추어 워커의 발송 속도를 직접 통제할 수 있다.

## 상세
비동기 메시지 큐를 통한 대규모 처리를 위해 다음의 안전 장치를 함께 설계한다.
- **멱등성(Idempotence) 보장**: 네트워크 지연 등으로 동일한 큐 메시지가 다시 전송될 때 중복 처리가 일어나지 않도록, 각 작업에 고유 ID(예: `NOTIF-1001`)를 부여하고 고유 제약 조건(Unique Constraint) 테이블에 기록한 후 연산이 성공할 때만 작업을 진행한다.
- **데드 레터 큐 (Dead Letter Queue, DLQ)**: 존재하지 않는 이메일 주소나 잘못된 토큰 등으로 인해 지속해서 실패하는 메시지는 지수 백오프(Exponential Backoff) 등으로 재시도한 뒤, 한도를 초과하면 DLQ로 격리하여 시스템 전체 병목을 막는다.
- **일괄 배치 처리 (Batching)**: 1건씩 API를 호출하는 대신 묶음 처리(예: 500개 묶음 전송)를 통해 네트워크 오버헤드와 API 호출 횟수를 대폭 절감한다.
- **작업 점진 생성**: 마케팅 대상이 1억 명 수준일 때, 1억 개의 이벤트를 즉시 큐에 퍼붓는 대신 생성기(Generator)가 리소스 여유량에 맞게 단계별로 쪼개어 적재하도록 설계해 메시지 브로커 자체의 마비를 예방한다.

## 예시
- **마케팅 알림 아키텍처 흐름**:
  1. API 서버가 요청을 받음 -> 고유 알림 ID 생성 및 메시지 큐(Kafka, RabbitMQ 등) 적재 -> 즉각 API 응답 완료.
  2. 오토스케일링 그룹 내 백그라운드 워커들이 메시지를 가져옴.
  3. `INSERT INTO processed_notifications (notification_id) VALUES ('NOTIF-1001')` 실행 후 중복 여부 체크.
  4. 외부 푸시 제공업체(FCM 등)의 Rate Limit 임계치 내에서 배치 API로 전송.
  5. 실패 시 백오프 후 DLQ로 격리.

## 충돌
- **동기식 및 언어 레벨 스레드 풀 옹호론**: 외부 큐 플랫폼(Kafka 등)의 도입은 메시지 직렬화, 추가 네트워크 홉, 분산 상태의 일관성 보증 등 인프라 비용과 관리 복잡도를 지나치게 가중시키므로, 단순 스레드 풀이나 동기 루프로 충분히 제어할 수 있다는 의견.
- **비동기 메시지 큐 옹호론**: 동기 방식은 외부 플랫폼 장애나 지연 발생 시 전체 스레드와 컨텍스트가 고갈되어 시스템 연쇄 붕괴로 이어지기 때문에, 대용량 트래픽 급증을 흡수하고 시스템 간 결합도를 격리하여 신뢰성을 확보하는 버퍼로서의 큐 브로커 도입은 필수 불가결하다는 의견.

## 관련 노트
- [[메시징 서버 스트레스 테스트 운영 원칙]]
- [[결과물 중심 생산성 스택]]
- [[AI 에이전트 아키텍처 완전 가이드]]

## 출처
- `raw/System Design Interview. How Would You Send 1 Million Notifications Without Overwhelming Your Servers.md`
