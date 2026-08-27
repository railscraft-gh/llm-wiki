지정된 개념 **`DNS 캐시 플러시`** (유형: `workflow`)에 대한 신규 위키 노트를 규칙과 템플릿에 맞추어 완벽히 작성 및 등록하였습니다.

---

### 📝 생성된 위키 노트 요약 (`wiki/DNS 캐시 플러시.md`)

- **파일 위치**: `llm-wiki/wiki/DNS 캐시 플러시.md`
- **Frontmatter 규격**: `type: workflow`, `status: draft`, `sources: ['raw/17 macOS Terminal Commands I Actually Use Every Week.md']`, `created: 2026-08-27`, `updated: 2026-08-27` 적용
- **주요 내용**:
  - **한 줄 정의**: macOS 환경에서 로컬 호스트명-IP 주소 매핑 캐시를 강제 초기화하여 도메인 해결 장애 및 네트워크 통신 문제를 해결하는 턴키 워크플로우.
  - **핵심 메커니즘**: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` 명령을 통한 Directory Services 캐시 비우기 및 `mDNSResponder` 데몬 재시작 과정 명시.
  - **진단 도구 연동**: Wi-Fi RSSI 신호 측정 명령(`sudo wdutil info`) 및 공인 IP 검증(`curl ifconfig.me`, `dig +short myip.opendns.com @resolver1.opendns.com`) 출처 인용 포함.
  - **구체적 사용 예시**: LLM 에이전트 환경(Claude Code, Antigravity 등)에서 도메인 해결 실패(`DNS resolution failed`) 시 자율적으로 복구 조치를 취하는 자동화 Bash 스크립트 시나리오 작성.
  - **Obsidian 지식 연동**: [[caffeinate 명령어]], [[pbcopy 및 pbpaste 클립보드 연동]], [[LRU 전문가 캐시]], [[시스템 현황 일괄 요약 스크립트]], [[독립형 배시 스크립트와 셸 함수의 상태 반영 차이]] 등 기존 5개 이상 관련 노트와 상호 연결.