지정하신 규칙과 템플릿 표준에 맞추어 **wdutil 명령어** (유형: `tool`)에 대한 고품질 한국어 위키 노트를 성공적으로 생성하고 LLM 지식 베이스에 추가했습니다.

### 생성된 노트 정보
- **노트 경로**: [wdutil 명령어.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/wdutil%20%EB%AA%85%EB%A0%B9%EC%96%B4.md)
- **Frontmatter**:
  - `type`: `tool`
  - `status`: `draft`
  - `core`: `false`
  - `tags`: `['macos', 'terminal', 'cli', 'wifi', 'networking', 'troubleshooting']`
  - `sources`: `['raw/17 macOS Terminal Commands I Actually Use Every Week.md']`
  - `created` / `updated`: `2026-08-27`

---

### 주요 작성 내용 요약

1. **한 줄 정의**: macOS 소노마(Sonoma) OS 이후 삭제된 구형 `airport` 유틸리티를 대체하여 Wi-Fi 네트워크의 SSID, 채널, RSSI, 잡음 수치 등을 커맨드라인 환경에서 진단할 수 있는 macOS 내장 무선 진단 CLI 유틸리티.
2. **핵심 요지 및 수치 지표**:
   - `sudo wdutil info` 명령어를 통한 세부 네트워크 메타데이터 일괄 수집.
   - 무선 신호 강도(RSSI) 정량 지표 명시: 0 dBm에 가까울수록 강력하며, **−70 dBm 이하** 시 네트워크 속도 저하, **−80 dBm 미만** 하락 시 연결 끊김 발생 (`raw/17 macOS Terminal Commands I Actually Use Every Week.md`).
3. **구체적 시나리오 및 예시**:
   - `sudo wdutil info` 기본 진단 명령어.
   - LLM 에이전트 자율 진단 및 네트워크 장애 복구 파이프라인 (Python/Bash) 시나리오.
   - [[pbcopy 및 pbpaste 클립보드 연동]] 유틸리티를 활용한 RSSI 지표 클립보드 추출 명령.
4. **관련 노트 연동**: [[DNS 캐시 플러시]], [[pbcopy 및 pbpaste 클립보드 연동]], [[caffeinate 명령어]], [[macOS 잠자기 방지 프로세스 추적]] 등과 연동.