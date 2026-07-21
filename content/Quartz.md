---
type: concept
status: draft
core: false
tags:
  - web
  - ssg
  - markdown
  - obsidian
aliases: []
sources:
  - "raw/Quartz-GitHub-Pages-Complete-Guide.md"
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의

로컬에 저장된 마크다운(Markdown) 문서(주로 Obsidian 볼트)를 정적 웹사이트로 변환하여 퍼블리싱해 주는 오픈소스 정적 사이트 생성기(SSG).

## 핵심 요지

- Obsidian의 위키링크(`[[ ]]`), 태그, 백링크, 그래프 뷰 등을 웹상에서 네이티브하게 구현해 준다.
- Node.js 환경에서 구동되며, 심볼릭 링크(Symlink)나 파일 복사를 통해 원본 문서와 손쉽게 동기화할 수 있다.
- GitHub Pages와 GitHub Actions를 결합하면 커밋 한 번으로 완벽하게 호스팅되는 무료 블로그/위키 시스템을 구축할 수 있다.

## 상세

[Quartz](file:///Users/railscraft/Obsidian/raw/Quartz-GitHub-Pages-Complete-Guide.md#L68)는 Andrej Karpathy의 'LLM Wiki' 패턴처럼 지식 베이스를 대중(또는 팀)에게 배포할 때 가장 선호되는 도구 중 하나다. 
복잡한 데이터베이스 설정 없이 마크다운 파일만으로 빠르고 가벼운 웹사이트를 만든다. `quartz.config.ts`와 `quartz.layout.ts` 두 개의 설정 파일만 조작하면 사이트의 폰트, 색상, 다크모드, 컴포넌트 배치를 커스텀할 수 있다. 프론트매터(Frontmatter)를 분석하여 메타데이터를 활용하고, 페이지 이동 시 지연 없는 SPA(Single Page Application) 경험을 제공한다.

## 예시

```bash
# 초기화
npx quartz create

# Obsidian 볼트를 Quartz의 content 디렉토리로 연결
ln -s /Users/railscraft/Obsidian/wiki content

# 로컬에서 서버 실행
npx quartz build --serve
```
GitHub Actions 워크플로우를 `.github/workflows/deploy.yml`에 작성해 두면, 마크다운 파일이 푸시될 때마다 자동으로 HTML이 렌더링되어 GitHub Pages에 배포된다.

## 충돌

- **심볼릭 링크(Symlink) 이슈**: 로컬에서는 볼트를 Symlink로 편하게 연결할 수 있지만, CI/CD(GitHub Actions) 환경에서는 Symlink를 실제 파일로 풀어내지 않으면 배포 에러가 나거나 콘텐츠가 비어 있는 현상이 흔히 발생한다.
- **플러그인 제약**: Obsidian 안에서 사용하는 Dataview, Excalidraw 등의 화려한 써드파티 플러그인 결과물은 Quartz의 기본 마크다운 파서가 완벽하게 변환하지 못할 수 있다.

## 관련 노트

- [[옵시디언 마스터하기 - 노트를 세컨드 브레인으로 만드는 완벽 가이드]]
- [[LLM Wiki]]

