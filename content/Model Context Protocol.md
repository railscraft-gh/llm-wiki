---
type: concept
status: evergreen
core: true
tags:
  - llm
  - agent
  - mcp
  - workflow
aliases:
  - MCP
  - 모델 컨텍스트 프로토콜
sources:
  - What Is MCP? Build a Custom MCP Server in Python
  - Building an MCP Ecosystem at Pinterest
created: 2026-06-10
updated: 2026-06-10
---

# Model Context Protocol (모델 컨텍스트 프로토콜)

## 한 줄 정의

Model Context Protocol(MCP)은 AI 클라이언트(Claude Code, Cursor, Copilot 등)와 데이터 소스 또는 백엔드 도구 간에 컨텍스트, 리소스, 실행 권한을 주고받기 위한 합의된 오픈소스 통신 표준 프로토콜이다.

## 핵심 요지

- **통합 어댑터 아키텍처**: 각 AI 클라이언트(Anthropic 도구 스키마, Cursor API, OpenAI 함수 호출 스키마 등)가 개별적으로 요구하던 서로 다른 wrapper 규격을 하나의 표준 프로토콜로 통합하여 AI 도구 연동 비용을 획기적으로 낮춘다.
- **클라이언트 주도의 비대칭 구조**: 클라이언트가 서버 구동, 도구 호출, 렌더링 방식의 통제권을 갖고, 서버는 가용 기능(도구, 리소스, 프롬프트)을 나열 및 실행하는 단순 반응형 구조를 취하여 가벼운 프로토콜 스펙을 유지한다.
- **3대 핵심 기능 명세**:
  - **도구(Tools)**: 에이전트가 호출 가능한 실행형 함수 (가장 널리 쓰임).
  - **리소스(Resources)**: 에이전트가 컨텍스트 구축 시 참고하는 읽기 전용 데이터 (데이터베이스 스키마, 파일 등).
  - **프롬프트(Prompts)**: 사용자가 자연어로 실행할 수 있는 슬래시 명령어 형식의 템플릿.
- **로컬 친화적 전송 계층**: 로컬 환경에서는 네트워크 스택 없이 포트/TLS/인증이 필요 없는 표준 입출력(stdio) 기반의 자식 프로세스 통신을 기본으로 삼아 보안 경계 내에서 유연하게 작동한다.

## 상세

### 1. 전송 모드와 보안
- **stdio 모드 (권한 경계 내 작동)**: 호스트 애플리케이션이 MCP 서버 스크립트를 자식 프로세스로 직접 실행하여 stdin/stdout을 통해 JSON-RPC 메시지를 교환한다. 포트 개방과 네트워크 인증이 생략되므로 로컬 파일이나 로컬 git 제어 등에 가장 안전하고 합리적이다.
- **Streamable HTTP 모드 (원격 및 다중 호스트)**: 네트워크 통신을 통해 상태를 유지하거나 외부 호스트와 연동할 때 사용한다. 이 경우 dynamic client registration 기반의 OAuth 2.1 인증 레이어가 필수로 수반되어야 한다. (기존 SSE 방식은 2025년 3월 스펙 업데이트 이후 권장되지 않는다.)

### 2. 로컬 개발 및 디버깅 루프
- **인스펙터(Inspector) 활용**: AI 클라이언트는 챗 인터페이스의 중단을 방지하기 위해 스키마 불일치나 기능 오류가 발생해도 예외를 내부적으로 숨기므로, 직접 클라이언트에 물려 디버깅해서는 안 된다. 공식 `@modelcontextprotocol/inspector` 브라우저 UI 대시보드를 띄워 JSON-RPC 교환 명세를 모니터링하고 도구를 직접 트리거하는 격리된 검증 단계를 거쳐야 한다.
- **표준 출력 오염(Standard-output pollution) 주의**: stdio 통신을 사용하는 특성상 서버 코드 내에 `print()` 구문을 남기면 JSON-RPC 스트림이 망가져 에러를 유발한다. 디버깅 및 분석용 로그를 찍을 때는 반드시 파이썬 `logging` 등을 활용해 표준 에러(stderr) 채널로 흘려보내야 한다.

### 3. MCP 도입의 제한점
- **지연 시간(Latency) 오버헤드**: JSON-RPC 직렬화 및 프로세스 간 IPC로 인한 지연이 발생하므로, 1밀리초 미만(sub-millisecond)의 실행 속도가 요구되는 궤적 루프 내부에는 적합하지 않다.
- **스트리밍 미지원**: 도구의 출력을 실시간 스트림으로 조각 내어 반환하는 것은 스펙상 불가능하다. (2026년 로드맵 반영 대기)
- **화면 제어의 격리**: 데이터와 프레젠테이션 레이어를 격리하므로 대화형 그래프나 커스텀 UI 화면 컴포넌트 자체를 서버에서 클라이언트로 내려 보낼 수 없다.

## 예시

### Python FastMCP 도구 및 리소스 구현
`FastMCP` 패키지를 설치한 후 단 하나의 파이썬 파일로 스탠드업 요약 도우미를 구현하는 예시다.

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

## 충돌

현재 확인된 충돌 없음.

## 관련 노트
- [[Context Mode]]
- [[Pinterest MCP]]
- [[oMLX]]
- [[Agent Harness]]
- [[GBrain]]

