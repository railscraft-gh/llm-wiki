---
type: concept
status: draft
core: false
tags:
  - system-architecture
  - caching
  - database
aliases:
  - 원자적 캐시 교체 패턴
sources:
  - raw/korean-public-holiday-feature-guide.md
created: 2026-07-21
updated: 2026-07-21
---
# 외부 API 캐시 원자적 교체 패턴

## 한 줄 정의
외부 REST API 데이터를 영속 캐시(DB)에 동기화할 때, 선검증 및 Fencing Token 기반 분산 락(Lease)을 활용해 트랜잭션 내에서 데이터를 원자적(All-or-Nothing)으로 교체하는 아키텍처 패턴이다.

## 핵심 요지
- **사용자 요청 경로 격리**: 사용자 화면 조회 시 외부 API를 직접 호출하지 않고 영속 캐시된 DB만 조회하여 N+1 문제 및 외부 장애 전파를 방지한다.
- **전 연도 선검증(Pre-validation)**: 대상 기간(예: -1년~+4년) 전체 데이터를 메모리상에서 완전성 검증 후 트랜잭션을 실행함으로써 불완전 데이터의 부분 반영을 차단한다.
- **원자적 일괄 교체 및 Fencing Token**: 공유 Generation UUID와 Fencing Token 기반 Lease로 동시성 경합을 막고 트랜잭션 내에서 기존 캐시를 원자적으로 교체한다.
- **예외적 데이터 발행 수용**: 아직 공식 발표되지 않은 미래 연도의 빈 결과(`allow_empty: true`)를 유연하게 정상 수용하여 전체 동기화 차단을 방지한다.

## 상세
외부 API 연동 시 가장 큰 위험은 외부 API 서버의 지연, 타임아웃, 429/5xx 오류, 비성공 resultCode 반환 등이 웹 서비스의 사용자 요청 처리 스레드로 전파되는 것이다. 이를 막기 위해 본 패턴은 백그라운드 재귀 스케줄러(Solid Queue, 매일 03:00 KST)에서 외부 API 연동을 전담하고, 사용자는 영속 DB 테이블(`korean_public_holidays`)만 조회하게 한다.

캐시 갱신 시에는 동시 실행에 의한 경쟁 조건을 차단하기 위해 `korean_public_holiday_sync_leases` 테이블을 통한 단일 실행권을 확보한다. 만료된 Lease를 다른 프로세스가 가져갈 때 Fencing Token을 1씩 증가시켜, 뒤늦게 동작한 지연 프로세스가 DB를 덮어쓰려 할 때 소유권 검증 단계에서 탈락시킨다.

동기화 프로세스는 다음 순서로 원자성을 보장한다:
1. 동기화 대상 연도 확정 (예: 2026년 기준 2025~2030년)
2. 원천 시스템 Lease 획득 및 갱신
3. 모든 대상 연도 API 응답의 완전성(페이지수, 건수, ResultCode, JSON Envelope) 사전 검증
4. 공유 `generation` (UUID) 발급 및 단일 트랜잭션 시작
5. 기존 대상 연도 캐시 데이터 일괄 삭제 및 새 검증 데이터 Bulk Insert
6. 연도별 성공 상태(`korean_public_holiday_sync_states`) 기록 및 Lease 해제

## 예시
- **미발행 미래 연도 예외 처리 코드**:
  `client.fetch_year(year, allow_empty: year > Time.zone.today.year)` 형태로 호출하여, KASI에서 아직 2029년, 2030년 공휴일을 미발행해 0건이 반환되더라도 롤백하지 않고 정상 처리한다.
- **2026년 실 프로덕션 구축 수치**:
  2025년(19행), 2026년(22행), 2027년(24행), 2028년(18행), 2029년(0행), 2030년(0행)의 총 83행을 단일 generation UUID (`1551e297-c56f-4af8-9844-054ea9aa7d3a`)로 일괄 삽입 완료.

## 충돌
- **전체 갱신 vs 순차 갱신**: 일부 연도만 부분 갱신(In-place Update)할 경우 연도 간 `generation` 유일성이 깨져 파편화가 발생할 수 있다. 본 패턴은 전 연도 검증 후 일괄 원자 교체를 강제한다.
- **엄격 검증 vs 유연성**: 모든 빈 응답을 에러 처리하면 미발행 미래 연도 때문에 전체 동기화가 차단되므로, 과거/현재 연도의 빈 응답만 에러로 간주하고 미래 연도는 허용하는 조건부 규칙이 필수적이다.

## 관련 노트
- [[AI 에이전트 런타임 역할 맵]]
- [[API Key 관리 원칙]]

