---aliases:
  - MCP
  - 모델 컨텍스트 프로토콜
  - Model-Context-Protocol
core: true
created: 2026-06-10
sources:
  - raw/What Is MCP? Build a Custom MCP Server in Python-ko.md
  - raw/Building an MCP Ecosystem at Pinterest-ko.md
  - raw/Skills, MCP, Tool Calling. 에이전트 확장의 세 층.md
  - raw/Structuring Agents, Skills, and MCPs 🤖🧩.md
  - raw/클로드 디자인은 과연 디자이너를 대체할까.md
  - raw/2026년 AI 에이전트 워크플로우 핵심 패턴 분석.md
  - raw/완벽하게 기계 가독성을 갖춘 디자인 시스템.md
  - raw/2026년 오픈소스 LLM 플랫폼 비교 가이드 - Ollama, OpenRouter, Groq, NVIDIA NIM.md
  - raw/파이썬 AI 에이전트 프레임워크 6종 비교 분석.md
  - raw/AI가 생성한 UI 디자인은 이제 인간 디자이너의 80퍼센트보다 우수하다.md
  - raw/UI 디자인을 위한 최고의 AI 도구 10가지와 워크플로우.md
  - raw/Hermes Agent와 Ollama 로컬 설치 초고속 가이드.md
  - raw/원시인 모드로 토큰 아끼려다 6만 스타 오픈소스에 PR 보낸 이야기.md
  - raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md
  - raw/느낌 코딩의 시대는 끝났다 - GitHub Spec Kit과 명세 기반 개발.md
  - raw/SpaceX의 파격적인 AI 인프라 전략 - 순수 C 언어로 22만 대 GPU를 제어하다.md
  - raw/Claude를 사용하기 전에 반드시 이 마크다운 파일을 만드세요.md
  - raw/지루한 업무를 자동화하는 클로드 코워크 프롬프트 7가지.md
  - raw/당신의 고양이가 챗GPT보다 세상을 더 잘 이해하는 이유.md
  - raw/옵시디언 AI 제2의 뇌는 기억이 아니다.md
  - raw/인생의 성공을 결정하는 5가지 핵심 자질.md
  - raw/Claude Code와 Obsidian으로 AI 세컨드 브레인 구축하기.md
  - raw/Hermes 에이전트와 함께 사용하기 좋은 오픈소스 내부 도구 5가지.md
  - raw/DESIGN.md 워크플로 - Google Stitch와 Claude Code가 바꾼 디자인 개발 협업.md
status: evergreen
tags:
  - llm
  - agent
  - mcp
  - workflow
type: concept
updated: 2026-07-10
---
# Model Context Protocol ([[모델 컨텍스트 프로토콜]])

## 한 줄 정의
Model Context Protocol(MCP)은 AI 클라이언트(Claude Code, Cursor, Copilot 등)와 데이터 소스 또는 백엔드 도구 간에 컨텍스트, 리소스, 실행 권한을 주고받기 위한 합의된 오픈소스 통신 표준 프로토콜이다.

## 핵심 요지
- **통합 어댑터 아키텍처**: 각 AI 클라이언트(Anthropic 도구 스키마, Cursor API, OpenAI 함수 호출 스키마 등)가 개별적으로 요구하던 서로 다른 wrapper 규격을 하나의 표준 프로토콜로 통합하여 AI 도구 연동 비용을 획기적으로 낮춘다.
- **클라이언트 주도의 비대칭 구조**: 클라이언트가 서버 구동, 도구 호출, 렌더링 방식의 통제권을 갖고, 서버는 가용 기능(도구, 리소스, 프롬프트)을 나열 및 실행하는 단순 반응형 구조를 취하여 가벼운 프로토콜 스펙을 유지한다.
- **3대 핵심 기능 명세**:
  - **도구(Tools)**: 에이전트가 호출 가능한 실행형 함수 (가장 널리 쓰임).
  - **리소스(Resources)**: 에이전트가 컨텍스트 구축 시 참고하는 읽기 전용 데이터 (데이터베이스 스키마, 파일 등).
  - **프롬프트(Prompts)**: 사용자가 자연어로 실행할 수 있는 슬래시 명령어 형식의 템플릿.
- **로컬 친화적 전송 계층**: 로컬 환경에서는 네트워크 스택 없이 표준 입출력(stdio) 기반의 자식 프로세스 통신을 기본으로 삼아 보안 경계 내에서 유연하게 작동한다.
- **엔터프라이즈 클라우드 호스팅**: 로컬 stdio 형태를 넘어 분산형 소형 특화 서버, 중앙 레지스트리, Envoy 프록시 및 JWT/SPIFFE 보안 인증을 결합한 클라우드 호스팅 생태계로 확장할 수 있다.

## 상세

### 1. 전송 모드와 보안 아키텍처

#### ① stdio 모드 (로컬 개발)
- 호스트 애플리케이션이 MCP 서버 스크립트를 자식 프로세스로 직접 실행하여 stdin/stdout을 통해 JSON-RPC 메시지를 교환한다. 
- 포트 개방, TLS, 네트워크 인증이 불필요하므로 로컬 파일 제어나 git 정보 검색 등에 가장 안전하고 성능상 유리하다.

#### ② Streamable HTTP 모드 (네트워크 연동)
- 여러 요청 간 서버 상태 유지 및 이기종 클라우드 환경 연동 시 사용한다. 
- 2025년 3월 스펙 업데이트로 SSE(Server-Sent Events) 방식은 deprecated 되었으며, Streamable HTTP 전송 방식을 사용해야 한다.
- 외부망 노출에 대비하여 Dynamic Client Registration 기반의 OAuth 2.1 인증 레이어가 필수적이다.

#### ③ 엔터프라이즈 클라우드 분산 아키텍처 (Pinterest 사례)
- **도메인별 특화 소형 서버 분산**: 거대한 모놀리식 서버 대신 Presto, Spark, Airflow, Knowledge 등 도메인별 소형 특화 서버로 분산시켜 모델의 컨텍스트 오버헤드를 줄이고 개별 보안 권한을 세밀하게 제어한다.
- **중앙 레지스트리(Registry)**: 웹 UI 및 API를 통해 정식 승인된 서버들의 목록과 지원 부서, 보안 수준, 노출 도구를 규정하는 단일 소스(Source of Truth) 역할을 한다.
- **2단계 보안 장벽 (AuthN/AuthZ)**:
  1. *최종 사용자 흐름*: 클라이언트가 백그라운드에서 사용자 세션과 OAuth 흐름을 연동(piggyback)해 JWT를 획득하고, Envoy 프록시가 JWT 서명을 검증해 `X-Forwarded-User`, `X-Forwarded-Groups` 헤더를 삽입한다. 
  2. *서버 코드 미세 인가*: 서버 코드 내에서 `@authorize_tool(policy="...")` 형태의 데코레이터를 이용해 광고 수익 조회 등의 민감 도구를 특정 그룹(예: `Ads-eng`)에만 노출되도록 제약한다.
  3. *서비스 전용 흐름*: 사용자가 직접 관여하지 않는 읽기 전용 인프라 작업에서는 SPIFFE(서비스 메시 ID)를 기반으로 인가를 마친다.
- **인간 개입 (Human-in-the-loop)**: 고비용 연산이나 데이터 덮어쓰기(Overwrite) 같은 민감한 인프라 제어 도구는 모델이 실행 계획을 제시한 뒤 엔지니어의 수동 승인을 받도록 설계하며, 표준 스펙의 응답 유도(elicitation) 경고창을 활용한다.

---

### 2. 로컬 개발 및 디버깅 루프

- **인스펙터(Inspector) 활용**: AI 클라이언트는 챗 UI가 끊기지 않도록 스키마 불일치나 오류를 무시하거나 사과 수준에서 챗을 이어가므로, 직접 연동 테스트를 하면 버그를 발견하기 어렵다. 공식 `@modelcontextprotocol/inspector` 브라우저 UI 대시보드(`npx @modelcontextprotocol/inspector python <filename>.py`)를 띄워 JSON-RPC 교환 명세 및 도구를 격리 환경에서 실측해야 한다.
- **표준 출력 오염(Standard-output pollution) 주의**: stdio 통신 경로 상에서 `print()` 함수를 사용하면 JSON-RPC 스트림이 파괴되어 통신 오류를 유발한다. 디버깅 로그는 반드시 파이썬 `logging` 모듈을 활용하여 표준 에러(stderr) 채널로 출력해야 한다.
- **3대 에러 모드**:
  1. 스키마 불일치(Schema Mismatch): 타입 힌트와 어긋난 데이터 반환 시 발생.
  2. 기능 누락(Missing Capability): 서버가 명세하지 않은 도구를 외부에서 호출할 때 발생.
  3. 표준 출력 오염: `print()` 등 stdout 채널의 불필요한 출력으로 인한 RPC 파괴.
- **핫 리로딩(Hot-Reloading)**: FastMCP는 코드 변경을 감지하면 자동으로 서버 프로세스를 재시작하는 개발 모드를 지원한다.

---

### 3. MCP 도입의 제한점 및 경계선
- **지연 시간(Latency) 오버헤드**: JSON-RPC 직렬화 및 IPC/네트워크 프로세스 왕복 통신으로 인해 오버헤드가 수반되므로, 1밀리초 미만(sub-millisecond)의 반응 속도를 요구하는 루프 크리티컬 경로에는 적합하지 않다.
- **스트리밍 미지원**: 도구의 반환 결과를 실시간 청크로 쪼개어 스트리밍하는 구조는 현재 스펙에서 지원하지 않는다 (향후 로드맵 대기).
- **인터랙티브 UI 격리**: 데이터와 렌더링 프레젠테이션 레이어를 격리하므로, 커스텀 UI 화면이나 동형 인터랙션 뷰 자체를 서버에서 클라이언트로 내려 보낼 수 없다.
- **다이렉트 연동의 효율성**: 클라이언트와 백엔드를 모두 단일 팀이 통제하고 향후 플랫폼 확장 계획이 없다면, 굳이 MCP 레이어를 끼워 넣는 것보다 다이렉트 연동이 유지보수 측면에서 나을 수 있다.

---

### 4. 성공 메트릭 및 관측 가능성 (Observability)
- 엔터프라이즈 환경에서는 공용 텔레메트리 라이브러리를 통해 호출량, 입출력 로그, 장애를 모니터링한다.
- **북극성 지표 (절약된 시간 - Time Saved)**: 핀터레스트의 경우 월간 66,000회의 도구 호출을 수행하는 844명의 실사용 개발자군을 기반으로, 도구 사용당 절약 시간을 실측하여 월 7,000시간에 상응하는 리소스 절약 메트릭을 달성했다.

### MCP 아키텍처 도입 시 4대 제약 조건 (쓰지 말아야 할 때)
1. **초저지연(Sub-millisecond) 요구 경로**: JSON-RPC 직렬화 오버헤드와 IPC/네트워크 프로세스 통신 비용이 발생하므로, 반응 속도가 생명인 기계 제어 등 루프 경로에는 다이렉트 SDK가 적합하다.
2. **실시간 스트리밍(Streaming) 요건**: 서버에서 반환되는 데이터를 청크로 분할하여 클라이언트에 실시간 전달하는 스트리밍 구조를 아직 스펙 상 지원하지 않는다.
3. **인터랙티브 UI 및 프레젠테이션 결합**: 데이터와 표현 레이어를 물리적으로 차단하므로, 서버가 자체 화면(화면 제어 뷰)을 클라이언트에 주입할 수 없다.
4. **단일 오너십의 인하우스 결합**: AI 클라이언트와 데이터 소스 시스템이 단일 개발 팀의 통제 하에 있고 외부 확장 계획이 없다면, 중간 MCP 레이어 추가는 불필요한 엔트로피만 더할 수 있다.

### MCP 아키텍처 도입 시 4대 제약 조건 (쓰지 말아야 할 때)
1. **초저지연(Sub-millisecond) 요구 경로**: JSON-RPC 직렬화 오버헤드와 IPC/네트워크 프로세스 통신 비용이 발생하므로, 반응 속도가 생명인 기계 제어 등 루프 경로에는 다이렉트 SDK가 적합하다.
2. **실시간 스트리밍(Streaming) 요건**: 서버에서 반환되는 데이터를 청크로 분할하여 클라이언트에 실시간 전달하는 스트리밍 구조를 아직 스펙 상 지원하지 않는다.
3. **인터랙티브 UI 및 프레젠테이션 결합**: 데이터와 표현 레이어를 물리적으로 차단하므로, 서버가 자체 화면(화면 제어 뷰)을 클라이언트에 주입할 수 없다.
4. **단일 오너십의 인하우스 결합**: AI 클라이언트와 데이터 소스 시스템이 단일 개발 팀의 통제 하에 있고 외부 확장 계획이 없다면, 중간 MCP 레이어 추가는 불필요한 엔트로피만 더할 수 있다.

### MCP 아키텍처 도입 시 4대 제약 조건 (쓰지 말아야 할 때)
1. **초저지연(Sub-millisecond) 요구 경로**: JSON-RPC 직렬화 오버헤드와 IPC/네트워크 프로세스 통신 비용이 발생하므로, 반응 속도가 생명인 기계 제어 등 루프 경로에는 다이렉트 SDK가 적합하다.
2. **실시간 스트리밍(Streaming) 요건**: 서버에서 반환되는 데이터를 청크로 분할하여 클라이언트에 실시간 전달하는 스트리밍 구조를 아직 스펙 상 지원하지 않는다.
3. **인터랙티브 UI 및 프레젠테이션 결합**: 데이터와 표현 레이어를 물리적으로 차단하므로, 서버가 자체 화면(화면 제어 뷰)을 클라이언트에 주입할 수 없다.
4. **단일 오너십의 인하우스 결합**: AI 클라이언트와 데이터 소스 시스템이 단일 개발 팀의 통제 하에 있고 외부 확장 계획이 없다면, 중간 MCP 레이어 추가는 불필요한 엔트로피만 더할 수 있다.

## 예시

### Python FastMCP 도구 및 리소스 구현
`FastMCP` 패키지를 사용해 git 로그 및 스탠드업 요약을 지원하는 단일 파일 구현 예시다.

```python
# standup_server.py
import subprocess
from typing import TypedDict
from fastmcp import FastMCP

mcp = FastMCP("standup-helper")

class StandupSummary(TypedDict):
    branch: str
    since: str
    commit_count: int
    commits: list[str]

# 1. 실행 가능한 도구 (Tool) 정의
@mcp.tool()
def summarize_standup(branch: str = "main", since: str = "yesterday") -> StandupSummary:
    """Summarize recent git activity for a standup.
    
    Reads the local git log on the given branch since the given time window.
    Returns commit count and one-line subjects.
    """
    try:
        result = subprocess.run(
            ["git", "log", f"--since={since}", "--pretty=format:%h %s", branch],
            capture_output=True,
            text=True,
            timeout=5, # 무한 대기 방지용 타임아웃
            check=True
        )
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as exc:
        return {
            "branch": branch,
            "since": since,
            "commit_count": 0,
            "commits": [f"git error: {exc}"]
        }

    lines = [line for line in result.stdout.splitlines() if line]
    return {
        "branch": branch,
        "since": since,
        "commit_count": len(lines),
        "commits": lines
    }

# 2. 읽기 전용 리소스 (Resource) 정의
@mcp.resource("recent_commits://main")
def recent_commits_main() -> str:
    """Last 10 commits on the main branch, plain text."""
    result = subprocess.run(
        ["git", "log", "-n", "10", "--pretty=format:%h %ad %s", "--date=short", "main"],
        capture_output=True,
        text=True,
        timeout=5
    )
    return result.stdout or "(no commits found)"

# 3. 사용자 프롬프트 템플릿 (Prompt) 정의
@mcp.prompt("standup_template")
def standup_template(focus: str = "shipping work") -> str:
    """Reusable standup question prompt template."""
    return (
        f"Summarize what I worked on yesterday, focusing on {focus}. "
        f"Use the summarize_standup tool to get the git log, then write a one-paragraph standup note."
    )

if __name__ == "__main__":
    mcp.run() # 기본값 stdio 구동
```

### AI 클라이언트 설정 (`mcpServers` 연동)
동일한 stdio 설정 스펙을 이용해 Claude Code, Cursor, Claude Desktop 등에 단 한 줄의 어댑터 없이 연결할 수 있다.

```json
{
  "mcpServers": {
    "standup-helper": {
      "command": "python3",
      "args": ["/Users/railscraft/code/standup_server.py"]
    }
  }
}
```

### MCP 개발 루프의 표준 출력 오염 방지
- stdio 통신을 사용하는 로컬 MCP 서버는 `print()` 함수를 통한 stdout 출력이 JSON-RPC 프로토콜 스트림을 깨뜨리므로, 디버깅 기록은 반드시 `sys.stderr` 채널이나 파이썬 `logging` 모듈로 우회 배출해야 한다.
- **인스펙터 검증**: AI 클라이언트가 스키마 에러를 묵인하는 성질이 있으므로, `npx @modelcontextprotocol/inspector python <server.py>` 명령어를 사용해 격리된 브라우저 대시보드에서 JSON-RPC Handshake를 실측 검증한다.

### MCP 개발 루프의 표준 출력 오염 방지
- stdio 통신을 사용하는 로컬 MCP 서버는 `print()` 함수를 통한 stdout 출력이 JSON-RPC 프로토콜 스트림을 깨뜨리므로, 디버깅 기록은 반드시 `sys.stderr` 채널이나 파이썬 `logging` 모듈로 우회 배출해야 한다.
- **인스펙터 검증**: AI 클라이언트가 스키마 에러를 묵인하는 성질이 있으므로, `npx @modelcontextprotocol/inspector python <server.py>` 명령어를 사용해 격리된 브라우저 대시보드에서 JSON-RPC Handshake를 실측 검증한다.

### MCP 개발 루프의 표준 출력 오염 방지
- stdio 통신을 사용하는 로컬 MCP 서버는 `print()` 함수를 통한 stdout 출력이 JSON-RPC 프로토콜 스트림을 깨뜨리므로, 디버깅 기록은 반드시 `sys.stderr` 채널이나 파이썬 `logging` 모듈로 우회 배출해야 한다.
- **인스펙터 검증**: AI 클라이언트가 스키마 에러를 묵인하는 성질이 있으므로, `npx @modelcontextprotocol/inspector python <server.py>` 명령어를 사용해 격리된 브라우저 대시보드에서 JSON-RPC Handshake를 실측 검증한다.

## 충돌
현재 확인된 충돌 없음.

## 관련 노트
- [[로컬 LLM 30분 실전 가이드]]
- [[Context Mode]]
- [[Pinterest MCP]]
- [[oMLX]]
- [[Agent Harness]]
- [[GBrain]]

