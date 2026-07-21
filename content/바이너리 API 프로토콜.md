---
type: concept
status: draft
core: false
tags:
- api
- backend
- binary-protocol
- performance
- system-design
sources:
- raw/Text vs Binary. How Dropping JSON Squeezed 5x More Throughput From Our APIs.md
created: 2026-07-20
updated: 2026-07-20
aliases:
- 바이너리-API-프로토콜
---
# 바이너리 API 프로토콜

## 한 줄 정의

바이너리 API 프로토콜은 텍스트 기반 JSON 직렬화/역직렬화 오버헤드를 극복하기 위해 데이터를 이진 버퍼 구조로 인코딩하여 전송하는 머신 간 고속 통신 규격이다.

## 핵심 요지

- JSON은 텍스트 파싱 가독성은 높으나 프로덕션 환경에서 대용량 데이터를 문자열로 변환하고 파싱할 때 심각한 CPU 및 메모리 병목을 유발한다.
- 대표적인 바이너리 포맷으로 Protobuf, MessagePack, Apache Avro, FlatBuffers 등이 있으며 각각의 아키텍처 특성과 사용 목적이 명확히 구별된다.
- 실측 벤치마크상 바이너리 교체를 통해 전송 용량 축소 및 직렬화/역직렬화 속도 개선을 달성하여 최대 5배 수준의 처리량(Throughput) 향상이 가능하다.
- 클라이언트-게이트웨이 대외 구간에는 가독성과 디버깅 편의성을 위해 JSON을 유지하고, 내부 마이크로서비스·웹소켓·캐시·스트리밍 구간에는 바이너리 프로토콜을 사용하는 이원화 아키텍처가 권장된다.

## 상세

### JSON 직렬화의 물리적 한계

JSON 직렬화는 메모리의 정형 구조를 ASCII/UTF-8 문자열로 변환하고 수신 측에서 해당 문자열을 파싱해 다시 객체로 구성한다. 필드명 문자열 반복 노출과 숫자 값의 텍스트 변환 과정에서 용량 부풀림과 CPU 연산 낭비가 누적된다.

실제 [10,000건의 사용자 레코드 페이로드](file:///Users/railscraft/Obsidian/raw/Text%20vs%20Binary.%20How%20Dropping%20JSON%20Squeezed%205x%20More%20Throughput%20From%20Our%20APIs.md#L29)를 기준으로 테스트했을 때, JSON은 **2.3 MB** 용량에 직렬화 시간만 **약 180ms**가 소요된 반면, 바이너리 포맷 전송 시 용량은 **620 KB**로 감소하고 소요 시간은 **약 34ms**로 줄어 약 5배 빠른 처리 성능을 보였다.

### 4대 바이너리 포맷 비교

1. **Protocol Buffers (Protobuf)**
   - 스키마 기반인 `.proto` 파일에 필드 태그 번호(1, 2, 3)를 지정한다. 필드 이름 문자열 대신 단순 1바이트 식별자 태그로 전달하므로 페이로드가 크게 감축된다. gRPC 및 내부 MSA 통신에 적합하다.
2. **MessagePack**
   - 별도 스키마 정의 없이 키-값 구조를 유지하되 정수, 불리언, 식별자를 바이너리로 압축 인코딩한다. 웹소켓 및 Redis 캐시 포맷 전환 시 비즈니스 로직 변경 없이 [용량이 약 38% 감소](file:///Users/railscraft/Obsidian/raw/Text%20vs%20Binary.%20How%20Dropping%20JSON%20Squeezed%205x%20More%20Throughput%20From%20Our%20APIs.md#L74)하는 효과를 낸다.
3. **Apache Avro**
   - 스키마 정보를 데이터와 함께 전달·관리하여 스키마 진화(evolution) 및 상하위 버전 호환성이 우수하다. 이벤트 스트리밍 버스를 Avro로 전환 후 카프카 컨슈머 지연 시간(lag)이 [피크타임 기준 40초에서 4초 미만으로 단축](file:///Users/railscraft/Obsidian/raw/Text%20vs%20Binary.%20How%20Dropping%20JSON%20Squeezed%205x%20More%20Throughput%20From%20Our%20APIs.md#L136)된 사례가 존재한다.
4. **FlatBuffers**
   - 수신 측 역직렬화 단계(deserialization)가 존재하지 않는 Zero Copy 구조다. 버퍼 바이트의 주소를 직접 참조하므로 초저지연 실시간 시세 피드나 게임 서버, 임베디드 장비에 최적화되어 있다.

### 벤치마크 수치 비교

Node.js 20 환경에서 5,000건 샘플 레코드(각 8개 필드) 기준 측정 결과:

- **JSON**: [크기 1.8 MB | 직렬화 142 ms | 역직렬화 98 ms](file:///Users/railscraft/Obsidian/raw/Text%20vs%20Binary.%20How%20Dropping%20JSON%20Squeezed%205x%20More%20Throughput%20From%20Our%20APIs.md#L179)
- **MessagePack**: [크기 1.1 MB | 직렬화 61 ms | 역직렬화 44 ms](file:///Users/railscraft/Obsidian/raw/Text%20vs%20Binary.%20How%20Dropping%20JSON%20Squeezed%205x%20More%20Throughput%20From%20Our%20APIs.md#L180)
- **Protobuf**: [크기 680 KB | 직렬화 38 ms | 역직렬화 29 ms](file:///Users/railscraft/Obsidian/raw/Text%20vs%20Binary.%20How%20Dropping%20JSON%20Squeezed%205x%20More%20Throughput%20From%20Our%20APIs.md#L181)
- **Avro**: [크기 590 KB | 직렬화 35 ms | 역직렬화 31 ms](file:///Users/railscraft/Obsidian/raw/Text%20vs%20Binary.%20How%20Dropping%20JSON%20Squeezed%205x%20More%20Throughput%20From%20Our%20APIs.md#L182)
- **FlatBuffers**: [크기 720 KB | 직렬화 28 ms | 역직렬화 ~2 ms (Zero Copy)](file:///Users/railscraft/Obsidian/raw/Text%20vs%20Binary.%20How%20Dropping%20JSON%20Squeezed%205x%20More%20Throughput%20From%20Our%20APIs.md#L183)

## 예시

```javascript
// Protobuf 인코딩/디코딩 예시 (Node.js)
const protobuf = require('protobufjs');
async function run() {
  const root = await protobuf.load('user.proto');
  const User = root.lookupType('User');
  const msg = User.create({ id: 1, name: 'Arjun', email: 'a@dev.io' });
  const buf = User.encode(msg).finish(); // 바이너리 버퍼 생성
  const decoded = User.decode(buf);      // 역직렬화
}
```

## 충돌

모든 시스템 인터페이스를 바이너리로 통일할 경우, 운영 중 알 수 없는 장애나 네트워크 덤프 발생 시 개발자가 텍스트 로그로 원인을 즉시 파악하기 힘들어 디버깅 오버헤드가 크게 증가한다. 따라서 외부 API 및 설정 파일 영역에는 JSON의 가독성을 보존하는 편이 유리하다.

## 관련 노트

- [[시스템 디자인 핵심 개념]]
- [[백엔드 면접 질문 20선]]
- [[모듈러 모놀리스]]
- [[웹 서버와 배포 기초]]
- [[비동기 메시지 큐 (Asynchronous Message Queue)]]

## 출처

- [Text vs Binary. How Dropping JSON Squeezed 5x More Throughput From Our APIs.md](file:///Users/railscraft/Obsidian/raw/Text%20vs%20Binary.%20How%20Dropping%20JSON%20Squeezed%205x%20More%20Throughput%20From%20Our%20APIs.md)
