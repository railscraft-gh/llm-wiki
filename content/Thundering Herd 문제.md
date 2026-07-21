---
type: concept
status: draft
core: false
tags:
- llm
- architecture
- backend
- performance
aliases:
- Thundering Herd
- Hot Key Problem
- 핫 키 문제
- Thundering-Herd-문제
sources:
- raw/The Day a Google L7 Engineer Tore My System Design to Shreds.md
created: 2026-07-21
updated: 2026-07-21
---
# Thundering Herd 문제

## 한 줄 정의
수많은 동시 요청이나 애플리케이션 노드가 특정 바이럴 이벤트로 인해 캐시/데이터베이스의 단일 핫 키(Hot Key)나 공유 리소스로 일시에 몰려 병목 및 시스템 마비를 일으키는 현상.

## 핵심 요지
- **수평 확장의 무력화**: 노드를 무작정 증설해도 모든 노드가 단 하나의 DB 행이나 핫 키를 동시에 타격하므로 서버 수량이 늘어날수록 병목 지점으로의 충돌 트래픽만 가중됨.
- **주요 원인**: 미디어 바이럴, 인기 할인 상품 오픈, 캐시 만료 직후 대량 동시 접근 등.
- **해결 접근**: 단순히 하드웨어를 늘리지 않고 [[요청 병합]](Request Collapsing), 어댑티브 캐싱(Adaptive Caching), 확률적 캐시 갱신 기법 등을 도입.

## 상세
- **작동 구조**:
  - 통상 상황: 멀티 노드가 균등 분산 처리.
  - Thundering Herd 상황: 노드는 분산되어 있으나 backend shared resource(예: WAL log, DB Single Row Key) 조율 연산에 극심한 Lock 경합 발생.

## 예시
- URL 단축기 서비스에서 대형 슈퍼볼 광고 게시로 특정 링크가 바이럴될 때, [초당 1,000만 건의 동시 접속](file:///Users/railscraft/Obsidian/raw/The%20Day%20a%20Google%20L7%20Engineer%20Tore%20My%20System%20Design%20to%20Shreds.md#L9)이 발생하여 데이터베이스 WAL(Write-Ahead Log) 경합 및 DB 마비 유발.

## 충돌
- **캐시 Stampede와의 연관**: 캐시 서버가 중단되거나 만료될 경우 병목 현상이 백엔드 DB로 직접 전파되는 캐시 스탬피드(Cache Stampede) 현상으로 확장될 수 있음.

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[LLM Wiki 운영 패턴]]

## 출처
- [raw/The Day a Google L7 Engineer Tore My System Design to Shreds.md#L39](file:///Users/railscraft/Obsidian/raw/The%20Day%20a%20Google%20L7%20Engineer%20Tore%20My%20System%20Design%20to%20Shreds.md#L39)
- [raw/The Day a Google L7 Engineer Tore My System Design to Shreds.md#L43](file:///Users/railscraft/Obsidian/raw/The%20Day%20a%20Google%20L7%20Engineer%20Tore%20My%20System%20Design%20to%20Shreds.md#L43)
