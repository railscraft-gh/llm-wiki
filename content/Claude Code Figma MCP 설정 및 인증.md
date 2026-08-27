---
type: workflow
status: draft
core: false
tags:
  - llm
  - agent
  - mcp
  - figma
  - claude-code
aliases:
  - Claude Code Figma MCP 연결
  - Figma MCP 인증 설정
sources:
  - 'raw/Claude Code + Figma = 💛.md'
created: 2026-08-28
updated: 2026-08-28
---

# Claude Code Figma MCP 설정 및 인증

## 한 줄 정의
[[Claude Code]] CLI 환경에서 원격 [[Figma MCP]](Model Context Protocol) 서버를 추가하고 OAuth 계정 인증 및 공식 전용 플러그인을 설치하여, AI 모델과 Figma 캔버스 간 양방향 UI/코드 연동 체계를 구축하는 초기 바인딩 워크플로우.

## 핵심 요지
- **원격 MCP 엔드포인트 등록**: `claude mcp add --transport http figma https://mcp.figma.com/mcp` 명령을 실행하여 Claude Code가 Figma 원격 HTTP MCP 서버에 접근 가능하도록 등록합니다 (`raw/Claude Code + Figma = 💛.md`).
- **세션 재시작 및 인증 절차**: 구성을 적용하기 위해 `/exit` 후 `claude` 세션을 재시작하고, 내장 명령 `/mcp` 목록의 *Authenticate* 항목을 통해 웹 브라우저 기반 Figma 계정 OAuth 승인을 완료합니다 (`raw/Claude Code + Figma = 💛.md`).
- **다중 계정 주의 및 권한 검증**: 다중 계정 사용 시 올바른 이메일 계정에 접근 권한이 부여되었는지 확인해야 하며, 엉뚱한 계정 인증 시 Figma 접근 권한 오류가 발생해 초기 절차를 재수행해야 합니다 (`raw/Claude Code + Figma = 💛.md`).
- **공식 확장 플러그인 필수 바인딩**: 인증 성공 메시지("Authentication successful") 수령 후 `/plugin install figma@claude-plugins-official` 명령으로 양방향 디자인-코드 변환용 플러그인을 로드합니다 (`raw/Claude Code + Figma = 💛.md`).

## 상세

### 1. 설정 및 인증 단계별 아키텍처

Figma MCP 연결 구축 절차는 4가지 핵심 세부 단계로 이뤄집니다 (`raw/Claude Code + Figma = 💛.md`).

1. **Figma HTTP MCP 추가**:
   터미널에서 `claude`를 실행하여 CLI 세션에 진입한 후, Figma가 호스팅하는 원격 엔드포인트를 등록합니다 (`raw/Claude Code + Figma = 💛.md`).
   ```bash
   claude mcp add --transport http figma https://mcp.figma.com/mcp
   ```

2. **환경 반영을 위한 세션 리셋**:
   등록된 MCP 서버 구성을 Claude Code 인스턴스에 완전히 반영하기 위해 현재 세션을 종료하고 재접속합니다 (`raw/Claude Code + Figma = 💛.md`).
   ```bash
   /exit
   claude
   ```

3. **인터랙티브 인증(OAuth Web Flow)**:
   새 세션에서 `/mcp` 슬래시 명령을 입력하면 MCP 서버 목록이 출력됩니다. 목록에서 `figma` 선택 후 *Authenticate* 메뉴를 지정하면 브라우저 창이 오픈됩니다 (`raw/Claude Code + Figma = 💛.md`).
   - 브라우저 안내 창에서 현재 소유/사용 중인 작업용 Figma 이메일 주소를 반드시 대조 확인합니다 (`raw/Claude Code + Figma = 💛.md`).
   - 잘못된 계정이 선택된 경우 "Switch accounts" 버튼을 눌러 올바른 워크스페이스 계정으로 전환하여 권한 승인을 완료합니다 (`raw/Claude Code + Figma = 💛.md`).
   - 성공 시 터미널 화면에 `"Authentication successful"` 메시지가 반환됩니다 (`raw/Claude Code + Figma = 💛.md`).

4. **공식 Figma 양방향 플러그인 로드**:
   단순 읽기를 넘어 캔버스 프레임 생성 및 역반영을 지원하기 위해 공식 플러그인을 활성화합니다 (`raw/Claude Code + Figma = 💛.md`).
   ```bash
   /plugin install figma@claude-plugins-official
   ```

### 2. 기술적 배경 및 작동 이점

- **[[Model Context Protocol|MCP(Model Context Protocol)]] 역할**: AI 모델이 Figma의 3사 호스팅 서비스 파일 구조, 노드 데이터, 컨텍스트를 프로토콜 표준에 맞춰 읽고 쓰거나 함수를 실행할 수 있게 연결합니다 (`raw/Claude Code + Figma = 💛.md`).
- **양방향 파이프라인의 기반 확보**: 단순 Figma $\rightarrow$ 코드 변환(단방향)에 그치지 않고, 프롬프트 기반으로 생성된 코드 UI를 Figma 프레임 에셋으로 내보내는 기능과 Figma에서 편집된 시각 요소를 코드 `div` 및 Diff 요약으로 동기화하는 기틀을 완성합니다 (`raw/Claude Code + Figma = 💛.md`).

## 예시

### 터미널 명령어 순서 스크립트
```bash
# Step 1: Claude Code CLI 실행
claude

# Step 2: 원격 Figma MCP 서버 추가
claude mcp add --transport http figma https://mcp.figma.com/mcp

# Step 3: 세션 종료 및 재시작 (설정 동기화)
/exit
claude

# Step 4: 대화형 MCP 메뉴 진입 및 Figma 인증 수행
/mcp
# > 목록에서 'figma' 선택 -> 'Authenticate' 클릭 -> 브라우저 OAuth 승인

# Step 5: 공식 Figma 플러그인 설치
/plugin install figma@claude-plugins-official
```

### 인증 검증 시나리오
- 브라우저 팝업에 `user@company.com` 이메일이 올바르게 표시되었는지 확인 후 승인합니다 (`raw/Claude Code + Figma = 💛.md`).
- 인증 완료 후 터미널 출력: `Authentication successful` (`raw/Claude Code + Figma = 💛.md`).
- 플러그인 설치 확인: `/plugin` 목록에 `figma@claude-plugins-official` 활성화 확인 (`raw/Claude Code + Figma = 💛.md`).

## 충돌

- **계정 미치 불일치로 인한 권한 거부**: 다중 Figma 계정 사용자의 경우 브라우저 기본 로그인 계정이 실제 Figma 파일 소유 계정과 다를 때 OAuth 인증은 승인되었으나 파일 접근 시 `"You currently have nothing selected"` 또는 접근 권한 없음 에러가 발생할 수 있습니다 (`raw/Claude Code + Figma = 💛.md`). 이 경우 계정을 전환하여 다시 인증을 진행해야 합니다.
- **세션 미재시작으로 인한 MCP 미인식**: `claude mcp add` 명령 수행 후 `/exit` 및 재시작 없이 즉시 `/mcp`를 호출할 경우 추가된 Figma MCP가 목록에 즉각 반영되지 않는 동기화 지연 현상이 지적됩니다 (`raw/Claude Code + Figma = 💛.md`).

## 관련 노트
- [[Claude Code와 Figma의 양방향 통신]]
- [[Figma-Claude Code 양방향 연동]]
- [[Claude Code]]
- [[Claude Code 스킬]]

## 출처
- `raw/Claude Code + Figma = 💛.md`
```

### 작업 요약
- `raw/Claude Code + Figma = 💛.md` 문서에 기반하여 **`Claude Code Figma MCP 설정 및 인증`** 워크플로우 위키 노트를 신규 작성하였습니다.
- 생성된 노드는 지정된 위키 디렉터리(`llm-wiki/wiki/Claude Code Figma MCP 설정 및 인증.md`)에 성공적으로 반영 저장되었습니다.