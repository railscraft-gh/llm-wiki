---
type: concept
status: draft
core: false
tags:
  - engineering
  - infrastructure
aliases:
  - Serverless Architecture
  - 서버리스 아키텍처
  - 서버리스
sources:
  - raw/I Built a Full SaaS App on AWS for $1.50_month — Here’s the Architecture.md
created: 2026-07-24
updated: 2026-07-24
---

# 서버리스 아키텍처(Serverless Architecture)

## 한 줄 정의
개발자가 가상 서버를 직접 프로비저닝하거나 관리할 필요 없이, 요청이나 이벤트 발생 시점에 클라우드 제공업체가 동적으로 리소스를 할당하고 실제 사용한 만큼만 비용을 과금하는 인프라 실행 패러다임.

## 핵심 요지
- **온디맨드 과금(On-demand Pricing)**: 미리 정해진 서버 고정 월세(예: EC2, RDS 기본 요금)를 내지 않고, 실제 API가 호출되어 연산이 수행된 시간(Pay-as-you-go) 및 DB에 읽기/쓰기를 진행한 횟수만큼만 비용을 낸다. 유휴 상태(Idle)일 때는 비용이 0원이다.
- **자동 스케일링(Auto-scaling)**: 단 1건의 요청부터 초당 수천 건의 트래픽 급증 상황까지, 인프라의 용량을 사전에 계산(Capacity Planning)할 필요 없이 클라우드 서비스가 자동으로 리소스를 확장 및 축소한다.
- **운영 오버헤드(Operational Overhead) 제거**: 운영체제(OS) 패치 관리, 하드웨어 장애 대처, 로드 밸런서 설정 등의 인프라 관리 업무가 추상화되어 개발자는 비즈니스 로직 개발에만 오롯이 집중할 수 있다.
- **서버리스 퍼스트(Serverless-first) 권장**: 서비스 초기 단계나 트래픽 굴곡이 심한 상황에서는 EC2나 관계형 DB(RDS) 결제창을 열기 전에 무조건 서버리스 환경으로 설계를 구상하는 것이 가격과 유지보수 면에서 압도적인 가치를 지닌다.

## 상세
### 핵심 구성 요소 (AWS 스택 예시)
교과서처럼 쓰이는 정석 서버리스 SaaS 아키텍처는 다음과 같은 레이어로 구성된다.

1. **실행 환경 (FaaS)**: 
   - **AWS Lambda**: 특정 이벤트(HTTP 요청, DB 변경, S3 파일 업로드 등)가 수신되면 동작 코드를 컨테이너 기반으로 깨워 실행하는 이벤트 기반 서버리스 컴퓨팅 서비스.
2. **API 엔트리게이트**: 
   - **Amazon API Gateway**: HTTP/REST 엔드포인트를 제공하고 람다 함수와 매핑해 주는 현관문 역할을 한다. API 키 인증 및 속도 제한(Throttling)을 관리한다.
3. **데이터 레이어 (Serverless DB)**: 
   - **Amazon DynamoDB**: 무한 확장이 보장되는 완전관리형 NoSQL 데이터베이스. 온디맨드 용량 모드를 활성화하면 요청량에 따라 100% 비례해 과금된다.
4. **정적 리소스 및 배포**:
   - **Amazon S3 & CloudFront**: 정적 HTML/CSS 및 미디어 리소스를 S3 객체 스토리지에 보관하고, CloudFront CDN을 통해 전 세계 전송 지연을 최소화한다. HTTPS 인증도 여기서 수행한다.

### 인프라 운영 한계 및 고려 사항
- **콜드 스타트(Cold Start)**: 람다 함수가 장시간 호출되지 않아 동면(Hibernate)에 들어가면, 새로운 요청이 왔을 때 컨테이너 환경을 새로 부트스트랩하는 웜 스타트(Warm start) 지연이 수 초간 발생할 수 있다.
- **벤더 종속성(Vendor Lock-in)**: AWS Lambda, DynamoDB 등 특정 벤더의 네이티브 SDK와 특화 기능에 강하게 엮이면, 타 클라우드(GCP, Azure)로 이전하기 위한 마이그레이션 장벽이 높아진다.

## 예시
### 한 달에 1.5달러(약 2,000원)로 구동되는 URL 단축 서비스의 서버리스 아키텍처
AWS 프리 티어 혜택과 서버리스 과금 요소를 조합해 프로덕션 수준의 SaaS를 극도로 저렴하게 구축하는 아키텍처 설계 예시이다.

- **URL 단축 생성 스크립트 (Lambda + Boto3)**:
  사용자가 긴 URL을 `POST /url`로 전송하면 람다 함수가 `nanoid`로 고유한 8자리 문자열 키를 발급하고, DynamoDB에 매핑 값을 저장한 뒤 301 리디렉션 주소를 반환한다.
- **과금 계산 시뮬레이션**:
  - API Gateway 1,000,000회 요청 $\approx$ 1달러 미만
  - DynamoDB 온디맨드 1,000,000회 읽기/쓰기 $\approx$ 0.35달러
  - AWS Lambda 실행 시간(1초 미만 연산 기준) $\approx$ 프리 티어 내 무상 처리 범위
  - **합계**: 월 수백만 건 단위의 요청을 안정적으로 소화하면서 청구 요금은 고작 1.5달러 선에 고정된다.

## 충돌
- **서버리스 vs 모놀리스 컨테이너(Docker/K8s)**: 트래픽의 기초 대역폭이 항상 높고 일정한 대규모 프로덕션에서는 서버리스의 호출당 과금(Pay-per-request) 단가가 전용 가상 머신(EC2)을 상시 띄워두는 것보다 오히려 기하급수적으로 비싸지는 "서버리스 청구서 폭탄" 현상이 일어난다. 따라서 일정한 대규모 트래픽 하에서는 모놀리스나 컨테이너 오케스트레이션(Kubernetes)으로 이전해야 한다는 반론이 상시 대치한다.

## 관련 노트
- [[API Key 관리 원칙]]
- [[Agent Native Infrastructure]]
- [[오픈소스 LLM 경제성과 벤더 종속성 해지]]

## 출처
- `raw/I Built a Full SaaS App on AWS for $1.50_month — Here’s the Architecture.md`
