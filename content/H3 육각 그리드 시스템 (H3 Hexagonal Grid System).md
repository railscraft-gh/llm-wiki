---
type: concept
status: draft
core: false
tags:
- infrastructure
- space-intelligence
aliases:
- H3 육각 그리드 시스템
- H3
- 육각 그리드
- H3-육각-그리드-시스템-(H3-Hexagonal-Grid-System)
sources:
- raw/I Failed Uber’s System Design Interview Last Month. Here’s Every Question They
  Asked..md
created: 2026-07-15
updated: 2026-07-15
---
# H3 육각 그리드 시스템 (H3 Hexagonal Grid System)

## 한 줄 정의

우버(Uber)에서 오픈소스로 공개한 64비트 정수 ID 기반의 계층형 지리 공간 인덱싱 시스템으로, 지구 표면을 균일한 육각형 격자(hexagonal cells)로 나누어 공간 연산 및 확산 처리를 최적화하는 아키텍처.

## 핵심 요지

1. **기하학적 등거리 장점**: 사각형 그리드는 대각선 방향 이웃과의 거리가 직각 방향보다 멀어 연산의 왜곡이 생긴다. 반면 육각형 그리드는 인접한 6개 이웃 육각형의 중심 거리가 **모두 완벽하게 동일**하여 공간 확산 및 주변 공급 상태 보정 연산에 매우 유리하다.
2. **H3 인덱스 변환**: 경위도 좌표(latitude, longitude) 값을 64비트 고유 ID로 빠르게 변환한다. 문자열 포맷의 지리 정보보다 연산 비용이 매우 적어 인 메모리 데이터베이스(Redis 등)에서 키-값 검색 속도가 극대화된다.
3. **인접 구역 보정 (`kRing` 연산)**: 특정 구역의 로컬 데이터를 계산할 때 경계면의 급격한 변동(예: 강 건너 바로 옆 구역에 운전자가 풍부함에도 내 구역에 없다는 이유로 서지 프라이싱 배율이 폭등함)을 막기 위해 H3 라이브러리의 `kRing(hex_id, k)` 함수로 인접한 `k` 단계 이웃 그리드들의 상태를 합성 보정한다.

## 상세

### H3 격자 해상도 (H3 Resolution 7 예시)
- **H3 해상도 7(resolution 7)** 기준, 육각형 1개의 면적은 대략 **5km²**이다. 도시 내부의 동적 요금제나 배달 매칭 등 로컬 공급/수요를 추적하는 마이크로 영역 단위로 자주 활용된다.

```text
       / \
      /   \
     |  B  |
    / \   / \
   /   \ /   \
  |  C  |  A  | ──► 중심 거리 (A-B, A-C, B-C)가 모두 균일하게 동일함
   \   / \   /
    \ /   \ /
     |  D  |
      \   /
       \ /
```

## 예시

파이썬 환경에서 H3 라이브러리를 활용해 좌표를 64비트 구역 ID로 매핑하고, 인접한 1단계 이웃 구역(총 7개 셀) 목록을 가져오는 코드:
```python
import h3

# 1. 특정 위도, 경도 좌표를 해상도 7 그리드로 매핑
lat, lng = 40.7128, -74.0060  # 뉴욕시 중심
resolution = 7
hex_id = h3.geo_to_h3(lat, lng, resolution)
print(f"H3 ID: {hex_id}")  # -> '872a100d2c7ffff' 같은 64비트 문자 표현 반환

# 2. kRing 함수로 인접 1단계 이웃 구역들 추출
neighbors = h3.k_ring(hex_id, 1)
print(f"인접 구역 목록 (본인 포함 7개): {neighbors}")
```

## 관련 노트

- [[실시간 서지 프라이싱 시스템 (Real-time Surge Pricing System)]]
- [[공간 지능]]

