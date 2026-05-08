---
type: concept
status: draft
core: false
tags:
  - llm
  - agent
  - infrastructure
aliases:
  - 에이전트 네이티브 인프라
  - Agent-native docs
sources:
  - raw/안드레_카파시_인터뷰_정리.md
  - raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md
  - raw/API_Key_관리_및_Infisical_도입_가이드.md
  - raw/Quartz-Deploy-Guide.md
  - raw/opencode-masterclass-summary.md
  - https://infisical.com/docs/documentation/platform/secrets-mgmt/overview
  - https://quartz.jzhao.xyz/hosting
  - https://opencode.ai/docs/rules/
created: 2026-05-06
updated: 2026-05-08
---

# Agent Native Infrastructure

## 한 줄 정의

Agent Native Infrastructure는 사람이 콘솔을 클릭해 따라 하는 대신 에이전트가 텍스트, CLI, API로 바로 실행할 수 있게 설계된 문서와 인프라다.

## 핵심 요지

- 에이전트 시대의 문서는 사람에게 단계별 지시를 주는 것보다 에이전트가 복사해 실행할 수 있는 형태가 중요해진다.
- 배포, 설정, DNS, 환경 변수처럼 클릭이 많은 workflow는 agent-native 전환의 주요 대상이다.
- [[Claude Code 오케스트레이션]]은 agent-native 인프라가 있을수록 쉬워진다.

## 상세

카파시는 프레임워크 문서가 아직도 사람에게 "이걸 설치하고, 저걸 클릭하고, 환경 변수를 넣으라"고 지시하는 점을 문제로 본다. 이상적인 문서는 에이전트에게 붙여 넣을 수 있는 명령과 맥락을 제공해야 한다.

MenuGen 배포 사례에서는 코드 작성보다 Vercel 배포, 서비스 연결, 설정, DNS 구성, 환경 변수 세팅이 더 번거로운 병목으로 나온다. 이상적인 상태는 "MenuGen을 빌드해서 배포해"라는 한 줄 지시로 인터넷에 올라가는 것이다. 출처: `raw/안드레_카파시_인터뷰_정리.md`, `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md`

Secret 관리도 agent-native 전환의 좋은 예다. [[Infisical 도입 전략]]처럼 CLI, SDK, Kubernetes Operator, CI/CD integration을 제공하는 도구를 쓰면 에이전트가 콘솔 클릭 대신 명령과 권한 범위에 맞춰 배포 workflow를 조립할 수 있다. 출처: `raw/API_Key_관리_및_Infisical_도입_가이드.md`, https://infisical.com/docs/documentation/platform/secrets-mgmt/overview

[[Quartz로 Obsidian Wiki 배포하기]]도 같은 관점으로 볼 수 있다. Quartz 공식 hosting workflow는 GitHub Actions에서 Node `22`, `npm ci`, `npx quartz build`, Pages artifact 업로드를 명령으로 표현한다. 이런 배포 절차는 콘솔 스크린샷보다 agent가 검토하고 수정하기 쉽다. 출처: `raw/Quartz-Deploy-Guide.md`, https://quartz.jzhao.xyz/hosting

[[OpenCode]]의 `AGENTS.md`, skill, `opencode.json`도 agent-native 문서 구조다. 프로젝트의 build/test command, permission, MCP 연결을 파일로 남기면 다음 agent session이 사람의 기억 대신 repo의 실행 가능한 맥락을 읽고 시작할 수 있다. 출처: `raw/opencode-masterclass-summary.md`, https://opencode.ai/docs/rules/

## 예시

- 나쁜 문서: 콘솔 스크린샷을 보며 버튼을 순서대로 누르게 한다.
- 좋은 문서: 필요한 CLI 명령, 환경 변수 목록, 권한 범위, 검증 명령을 한 블록으로 제공한다.
- Secret 관리: `.env`를 직접 복사하게 하지 않고 `infisical run --env=dev -- npm run dev`처럼 실행 가능한 명령으로 제공한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Software 3.0]]
- [[Neural Computer]]
- [[Claude Code 오케스트레이션]]
- [[Infisical 도입 전략]]
- [[API Key 관리 원칙]]
- [[Quartz로 Obsidian Wiki 배포하기]]
- [[OpenCode]]

## 출처

- `raw/안드레_카파시_인터뷰_정리.md`
- `raw/꼭 알아야할 안드레 카파시 30분 인터뷰 완전정리 - AI시대의 필수 인사이트!.md`
- `raw/API_Key_관리_및_Infisical_도입_가이드.md`
- `raw/Quartz-Deploy-Guide.md`
- `raw/opencode-masterclass-summary.md`
- https://infisical.com/docs/documentation/platform/secrets-mgmt/overview
- https://quartz.jzhao.xyz/hosting
- https://opencode.ai/docs/rules/
