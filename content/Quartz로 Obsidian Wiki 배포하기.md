---
type: workflow
status: needs-review
core: false
tags:
  - wiki
  - obsidian
  - deployment
aliases:
  - Quartz 배포
  - Quartz GitHub Pages
sources:
  - raw/Quartz-Deploy-Guide.md
  - https://quartz.jzhao.xyz/
  - https://quartz.jzhao.xyz/build
  - https://quartz.jzhao.xyz/hosting
  - https://quartz.jzhao.xyz/configuration
  - https://quartz.jzhao.xyz/features/Obsidian-compatibility
created: 2026-05-08
updated: 2026-05-08
---

# Quartz로 Obsidian Wiki 배포하기

## 한 줄 정의

Quartz로 Obsidian Wiki 배포하기는 `wiki/` 마크다운 노트를 Quartz의 `content/`로 연결하고 GitHub Pages로 정적 사이트를 배포하는 workflow다.

## 핵심 요지

- Quartz는 Markdown과 Obsidian 문법을 웹사이트로 변환하는 static site generator다.
- LLM wiki는 원본 vault를 보존해야 하므로 `content/`에 복사하기보다 symlink나 별도 배포 repo를 정해 단일 원천을 유지한다.
- GitHub Pages 배포는 `npx quartz build`로 `public/`을 만들고 GitHub Actions가 Pages artifact를 배포하는 구조가 기본이다.
- Quartz 버전, Node 요구사항, GitHub Pages branch 이름은 변동 가능성이 있어 배포 전 공식 hosting 문서를 재확인한다.

## 상세

Quartz 공식 문서는 2026-05-08 확인 기준 Node v22 이상과 npm v10.9.2 이상을 요구하고, 초기 설치 흐름을 `git clone`, `npm i`, `npx quartz create`로 설명한다. 로컬 미리보기는 `npx quartz build --serve`를 실행한 뒤 `http://localhost:8080/`에서 확인한다. 출처: https://quartz.jzhao.xyz/, https://quartz.jzhao.xyz/build

GitHub Pages 배포는 `.github/workflows/deploy.yml`에서 `actions/setup-node@v4`, Node `22`, `npm ci`, `npx quartz build`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`를 연결한다. Quartz 공식 hosting 문서는 production branch 예시로 `v4`를 쓰지만, 실제 repo의 기본 branch와 다르면 workflow의 branch 조건도 맞춰야 한다. 출처: `raw/Quartz-Deploy-Guide.md`, https://quartz.jzhao.xyz/hosting

Obsidian compatibility는 이 vault의 wikilink 구조를 웹에서 유지하는 핵심 설정이다. Quartz는 기본적으로 ObsidianFlavoredMarkdown, Frontmatter, CrawlLinks 계열 기능을 통해 wikilink, callout, Mermaid, frontmatter를 처리한다. GitHub Pages의 `baseUrl`은 `username.github.io/repository`처럼 protocol 없이 쓰며, custom domain이 있으면 배포 주소에 맞춰 갱신한다. 출처: https://quartz.jzhao.xyz/features/Obsidian-compatibility, https://quartz.jzhao.xyz/configuration

## 예시

1. `wiki/`를 Quartz `content/`로 symlink하거나 별도 배포 repo의 `content/`에 동기화한다.
2. `quartz.config.ts`에서 `pageTitle`, `locale: "ko-KR"`, `baseUrl`, `ignorePatterns`를 설정한다.
3. `npx quartz build --serve`로 wikilink, 검색, 그래프, 모바일 레이아웃을 확인한다.
4. GitHub Pages source를 GitHub Actions로 바꾸고 `deploy.yml`을 push한다.

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[Agent Native Infrastructure]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Software 3.0]]

## 출처

- `raw/Quartz-Deploy-Guide.md`
- https://quartz.jzhao.xyz/
- https://quartz.jzhao.xyz/build
- https://quartz.jzhao.xyz/hosting
- https://quartz.jzhao.xyz/configuration
- https://quartz.jzhao.xyz/features/Obsidian-compatibility
