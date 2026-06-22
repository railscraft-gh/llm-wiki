---
aliases: []
core: false
created: 2026-06-07
sources:
- raw/Building an MCP Ecosystem at Pinterest-ko.md
- raw/I Sat in Engineering Meetings for Two Years Without Understanding What a Branch
  Was-ko.md
- raw/How We Built an AI Second Brain for 60K Knowledge Workers-ko.md
- raw/im-not-ai.md
- raw/I Cancelled ChatGPT, Cursor, and Midjourney This Week — My MacBook Pro M5 Max
  Quietly Replaced All Three-ko.md
- raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
- raw/Why senior UX designers are struggling in 2026-ko.md
- raw/Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko.md
- raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
- raw/The Best Way to Make AI Write Like You-ko.md
- raw/Give Your AI Agent 36 Superpowers. Long‑Term Memory in Minutes with GBrain (Open
  Source)-ko.md
status: evergreen
tags:
- mcp
- infrastructure
- security
type: workflow
updated: '2026-06-22'
---# Pinterest MCP

## 한 줄 정의
Pinterest MCP는 핀터레스트가 자율 AI 에이전트의 안전한 사내 자원 연동과 제어를 위해 구축한 클라우드 호스팅 기반의 모델 컨텍스트 프로토콜(MCP) 서버 아키텍처 및 보안 거버넌스 프레임워크다.

## 핵심 요지
- **클라우드 호스팅 및 표준 경로(Paved Path)**: 표준 입출력(stdio) 기반의 로컬 실행 방식을 배제하고, 모든 MCP 서버를 사내 클라우드에 호스팅하여 중앙 레지스트리를 통해 인프라 배포와 스케일링을 관리한다.
- **도메인별 특화 분산 서버**: 거대한 단일 모놀리스 대신 Presto, Spark, Knowledge, Airflow 등 업무 도메인 단위로 나뉜 소형 MCP 서버들을 독립 운영함으로써 컨텍스트 윈도우 과부하를 방지하고 권한 통제 단위를 세밀화했다.
- **OAuth 및 JWT 기반 미세 권한 통제 (Fine-grained AuthZ)**: 클라이언트에서 로그인한 최종 사용자의 JWT를 레지스트리 및 MCP 서버로 전달하고, 코드 수준에서 `@authorize_tool` 데코레이터를 이용해 도구 호출 권한을 부서/그룹 단위로 차단한다. (출처: 출처)
- **Envoy 및 SPIFFE 기반 서비스 인증**: 사람의 개입이 없는 읽기 전용 서비스 간 연동에는 SPIFFE(서비스 메시 ID)를 활용하여 보안 경계를 구축한다.

## 상세
### 미세 권한 인가 예시
핀터레스트의 Presto MCP 서버는 사내의 대규모 데이터 조회를 담당하지만, 아무나 극비 정보를 열람할 수 없도록 이중 보안을 둔다.
1. **Envoy Proxy 레벨 검증**: JWT 서명을 해석해 광고 수익 조회 등 민감 API의 진입 자격을 1차 체크한다.
2. **코드 레벨의 `@authorize_tool` 데코레이터 검증**: 
   ```python
   @authorize_tool(policy="Ads-eng-only")
   def get_revenue_metrics(campaign_id: str):
       # 광고 엔지니어링 그룹에 속한 사용자만 실행 가능
       ...
   ```
   이러한 방식을 통해, MCP 서버 자체가 사내 전체 클라이언트에 노출되어 있더라도 광고나 재무 부서의 검증된 사용자만이 민감 비즈니스 도구를 호출할 수 있다.

### MCP 레지스트리 거버넌스
중앙 MCP 레지스트리는 각 MCP 서버의 소유 팀, 지원 채널, 가동 여부, 가용 도구를 시각적으로 매핑하는 웹 UI와, AI 에이전트/IDE 플러그인 등이 런타임에 동적으로 API 자격을 체크하고 도구를 바인딩할 수 있도록 돕는 API 게이트웨이를 동시에 제공한다. 보안, 법무, AI 안전성 심사를 완료한 승인된 서버만 레지스트리에 등재되어 에이전트와 결합할 수 있다.

## 관련 노트
- [[Agent Native Infrastructure]]
- [[API Key 관리 원칙]]
- [[Model Context Protocol]]

