---
type: tool
status: draft
core: false
tags:
- llm
- macos
aliases:
- Apple Foundation Models CLI
- fm CLI
- fm 명령어
- Apple-Foundation-Models-CLI-(fm)
sources:
- raw/macOS 27 Has a Hidden LLM Inside — 10 (Amazing) Things You Can Do With It.md
created: 2026-07-15
updated: 2026-07-16
---
# Apple Foundation Models CLI (fm)

## 한 줄 정의

macOS 27 버전에 내장된 로컬 인공지능 제어 CLI(커맨드 라인 인터페이스) 도구로, `/usr/bin/fm` 경로에 구현되어 백그라운드 오프라인으로 작동하는 애플 온디바이스 파운데이션 모델(system)을 쉘 스크립트와 통합 제어할 수 있는 도구.

## 핵심 요지

1. **표준 입력 쉘 파이프 연동**: 표준 입력(stdin) 및 파이프 연산(`|`)을 지원하여 `cat notes.txt | fm respond` 또는 클립보드 데이터 `pbpaste | fm respond` 같은 터미널 자동화 스크립트에 바로 결합할 수 있다.
2. **JSON 스키마 데이터 강제 출력**: 비정형 텍스트 데이터를 정해진 JSON 포맷으로 안정적으로 가공해 내는 `fm schema` 및 `fm respond --schema` 기능을 지원하여 배치 처리 파이프라인의 안전성을 보장한다.
3. **OpenAI API 호환 로컬 서버 기동**: `fm serve` 명령어를 통해 OpenAI API 호출 규격 엔드포인트와 호환되는 로컬 웹 서버를 실행한다. 기본 포트는 **1976**이며, `--host 0.0.0.0` 바인딩을 통해 내부망에 공유할 수 있다.

## 상세

### 주요 서브 명령어 및 기능
- `**respond**` : 단발성 질문 응답을 생성하여 반환함.
- `**chat**` : 대화 기록을 `~/.fm/sessions/` 하위에 JSON 스냅샷으로 보관하며, 세션 이탈 시 재개(resume) 명령어 ID를 발급함.
- `**token-count**` : 로컬 온디바이스 모델의 버퍼 한계인 **4,096 토큰** 초과 여부를 오프라인 상태에서 미리 계측함.
- `**serve**` : 유닉스 소켓 또는 TCP 1976 포트에 바인딩하여, OpenAI API SDK 규격의 다른 소프트웨어가 내 로컬 맥북의 하드웨어(system 또는 pcc 모델)를 API 키 없이 무료 호출하게끔 허용함.
- **WebMCP와의 에코시스템 브릿징**: `fm serve`로 기동된 OpenAI API 로컬 엔드포인트를 브라우저의 WebMCP 통신 레이어(예: Chrome의 내장 AI 호환 JS 랩퍼)와 연결하면, 외부 서버 통신이나 API 비용 지불 없이 오직 내 맥북 하드웨어 리소스만으로 웹 브라우저의 클라이언트 도구(JS 함수, 폼 데이터)를 자동 제어하는 완벽한 **오프라인 브라우저 에이전트 루프**를 구축할 수 있다.

### 하드웨어 자동 스케일링 특성
- **M1/M2 칩셋 (메모리 8GB)**: 대략 **3B(30억)** 파라미터 수준의 경량 모델 구동.
- **M3/M4 칩셋 (메모리 12GB 이상)**: 자동으로 인식하여 고체급 **20B(200억)** 파라미터의 고성능 모델로 스케일업 구동.

## 예시

OpenAI Python SDK를 사용해 로컬 `fm serve` 포트(1976)에 요청을 보내는 예시:
```python
from openai import OpenAI

# API 키는 로컬 구동이므로 불필요
client = OpenAI(base_url="http://127.0.0.1:1976/v1", api_key="not-needed")

response = client.chat.completions.create(
    model="system",  # pcc 모델로도 교체 가능
    messages=[{"role": "user", "content": "Reply with exactly: hello from fm"}],
)
print(response.choices[0].message.content)  # -> "Hello from FM."
```

## 관련 노트

- [[로컬 LLM 30분 실전 가이드]]
- [[프라이빗 클라우드 컴퓨팅 (Private Cloud Compute)]]
- [[현대적 CLI 유틸리티 (Modern CLI Utilities)]]

## 출처

- "macOS 27 Has a Hidden LLM Inside — 10 (Amazing) Things You Can Do With It." (Medium, 2026-07-15)
- Apple Developer Documentation - Foundation Models Framework
