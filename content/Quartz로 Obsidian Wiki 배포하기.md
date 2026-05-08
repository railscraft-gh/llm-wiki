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
  - raw/Quartz-GitHub-Pages-Complete-Guide.md
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
- Symlink를 쓰는 경우 GitHub Actions에서 `content`를 실제 파일로 풀어 주는 단계가 필요할 수 있다.
- Quartz 버전, Node 요구사항, GitHub Pages branch 이름은 변동 가능성이 있어 배포 전 공식 hosting 문서를 재확인한다.

## 상세

Quartz 공식 문서는 2026-05-08 확인 기준 Node v22 이상과 npm v10.9.2 이상을 요구하고, 초기 설치 흐름을 `git clone`, `npm i`, `npx quartz create`로 설명한다. 로컬 미리보기는 `npx quartz build --serve`를 실행한 뒤 `http://localhost:8080/`에서 확인한다. 출처: https://quartz.jzhao.xyz/, https://quartz.jzhao.xyz/build

GitHub Pages 배포는 `.github/workflows/deploy.yml`에서 `actions/setup-node@v4`, Node `22`, `npm ci`, `npx quartz build`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`를 연결한다. Quartz 공식 hosting 문서는 production branch 예시로 `v4`를 쓰지만, 실제 repo의 기본 branch와 다르면 workflow의 branch 조건도 맞춰야 한다. 출처: `raw/Quartz-Deploy-Guide.md`, https://quartz.jzhao.xyz/hosting

Obsidian compatibility는 이 vault의 wikilink 구조를 웹에서 유지하는 핵심 설정이다. Quartz는 기본적으로 ObsidianFlavoredMarkdown, Frontmatter, CrawlLinks 계열 기능을 통해 wikilink, callout, Mermaid, frontmatter를 처리한다. GitHub Pages의 `baseUrl`은 `username.github.io/repository`처럼 protocol 없이 쓰며, custom domain이 있으면 배포 주소에 맞춰 갱신한다. 출처: https://quartz.jzhao.xyz/features/Obsidian-compatibility, https://quartz.jzhao.xyz/configuration

`raw/Quartz-GitHub-Pages-Complete-Guide.md`는 `wiki/`를 Quartz `content/`에 연결하는 방법으로 symlink와 파일 복사를 비교한다. Symlink는 원본 수정이 바로 반영되지만 GitHub Actions에서 외부 경로를 따라가지 못할 수 있으므로, workflow 안에서 `cp -rL content content-real`처럼 symlink를 실제 파일로 해소하거나 배포 repo에는 복사본만 유지하는 선택이 필요하다. 출처: `raw/Quartz-GitHub-Pages-Complete-Guide.md`

자동 배포 스크립트가 `## 출처` 이하를 잘라 public site에서 숨기는 방식은 배포 repo에서만 조심스럽게 다뤄야 한다. 이 vault의 `wiki/` 원본 노트는 출처가 품질 조건이므로, 원본에서 출처 섹션을 제거하지 않는다. 출처: `raw/Quartz-GitHub-Pages-Complete-Guide.md`

## 예시

1. `wiki/`를 Quartz `content/`로 symlink하거나 별도 배포 repo의 `content/`에 동기화한다.
2. `quartz.config.ts`에서 `pageTitle`, `locale: "ko-KR"`, `baseUrl`, `ignorePatterns`를 설정한다.
3. `npx quartz build --serve`로 wikilink, 검색, 그래프, 모바일 레이아웃을 확인한다.
4. GitHub Pages source를 GitHub Actions로 바꾸고 `deploy.yml`을 push한다.
5. symlink 방식이면 Actions에서 symlink 해소 단계가 실제로 `public/` 산출물에 반영되는지 확인한다.

## 충돌

- 2026-05-08 확인: raw complete guide는 GitHub Pages environment protection에서 `v4` branch를 추가하라고 안내하지만, Quartz 공식 hosting 문서는 기존 `github-pages` environment를 삭제하면 다음 sync 때 action이 올바르게 재생성한다고 안내한다. 현재 노트는 "repo 설정과 오류 메시지에 맞춰 Pages source와 environment를 확인한다"는 운영 원칙으로 기록한다. 출처: `raw/Quartz-GitHub-Pages-Complete-Guide.md`, https://quartz.jzhao.xyz/hosting

## 관련 노트

- [[Agent Native Infrastructure]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Software 3.0]]

