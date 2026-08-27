---
type: concept
status: draft
core: false
tags:
- quartz
- obsidian
- github-pages
- llm-wiki
- static-site-generator
aliases:
- Quartz로 Obsidian Wiki 배포하기
- Quartz GitHub Pages 배포 가이드
- Quartz로-Obsidian-Wiki-배포하기
sources:
- raw/Quartz-GitHub-Pages-Complete-Guide.md
created: 2026-07-21
updated: 2026-07-21
---
# [[Quartz]]로 [[Obsidian]] Wiki 배포하기

## 한 줄 정의
Karpathy의 [[LLM]] Wiki 패턴으로 축적된 [[Obsidian]] 마크다운 지식베이스를 [[Quartz]] SSG와 GitHub Pages CI/CD 파이프라인을 통해 정적 웹사이트로 무료 게시하는 배포 아키텍처.

## 핵심 요지
- **요구 환경**: Node.js [v22 이상](file:///Users/railscraft/[[Obsidian]]/raw/[[Quartz]]-GitHub-Pages-Complete-Guide.md#L16), npm [v10.9.2+](file:///Users/railscraft/[[Obsidian]]/raw/[[Quartz]]-GitHub-Pages-Complete-Guide.md#L17) 및 GitHub Actions 배포 권한.
- **Content 연동 규격**: [[Obsidian]] Vault의 `wiki/` 폴더를 [[Quartz]]의 `content/` 폴더와 Symlink(`ln -s`), 파일 복사(`cp -r`), 또는 Git 서브모듈로 결합.
- **GitHub Actions 자동 빌드**: `v4` 브랜치에 코드 푸시 시 ubuntu-22.04 러너에서 Symlink 해제(`Resolve content symlink`) 및 `npx quartz build`를 거쳐 GitHub Pages 아티팩트로 전송.
- **실시간 로컬 감시 및 자동 배포**: macOS `fswatch`와 `launchd` 데몬 서비스를 활용해 [[Obsidian]] 파일 변경 시 `deploy.sh`를 자동 트리거.

## 상세
[[Quartz]]는 위키링크(`노트`), 다크모드, [[백링크]](Backlinks), 인터랙티브 그래프 뷰(Graph View), LaTeX 수학식을 기본 지원하는 정적 사이트 생성기입니다. [2025년 5월 v4.5.2 기준](file:///Users/railscraft/[[Obsidian]]/raw/[[Quartz]]-GitHub-Pages-Complete-Guide.md#L759) `v4` 브랜치를 기본 메인 브랜치로 사양화하고 있습니다.

배포 시 `quartz.config.ts`에서 `baseUrl`과 `ignorePatterns`(`.obsidian`, `private`, `templates` 등)를 지정하고, `quartz.layout.ts`로 뷰 구조를 정렬합니다. 로컬 테스트는 [8080 포트](file:///Users/railscraft/[[Obsidian]]/raw/[[Quartz]]-GitHub-Pages-Complete-Guide.md#L305)(`npx quartz build --serve`)에서 수행됩니다.

Symlink 방식으로 연결할 경우 GitHub Actions가 심볼릭 링크를 인지하지 못해 발생하던 문제점은 `.github/workflows/deploy.yml` 스크립트 내 `cp -rL content content-real` 사전 조치 단계로 해결합니다.

## 예시
- **fswatch 기반 로컬 감시 스크립트**: [[Obsidian]] `wiki/` 내 파일 수정을 감지하여 출처 섹션을 정제(sed)하고 자동 commit & push를 수행하는 `launchd` 데몬 설치.
- **커스텀 도메인 DNS 바인딩**: Apex 도메인용 IP(`185.199.108.153` 등 4개) 및 CNAME 설정으로 `wiki.yourdomain.com` 바인딩.

## 충돌
- **Symlink 미해제 빌드 에러**: GitHub Actions 러너에서 Symlink를 풀지 않고 바로 빌드하면 empty content 오류가 발생하므로 [[워크플로]]우 내 해제 스텝이나 서브모듈 방식 전환이 필요합니다.
- **`v4` 브랜치 환경 보호 규칙 에러**: GitHub Pages 배포 시 Settings -> Environments -> `github-pages`에 `v4` 브랜치를 explicit 등록하지 않으면 `Branch v4 is not allowed` 권한 오류가 발생합니다.

## 관련 노트
- [[Quartz]]
- [[LLM Wiki 구현 선택지]]
- [[Obsidian vault용 Slash Command 운영]]
- [[LLM Wiki 핵심 4대 파일]]

## 출처
- [raw/[[Quartz]]-GitHub-Pages-Complete-Guide.md](file:///Users/railscraft/[[Obsidian]]/raw/[[Quartz]]-GitHub-Pages-Complete-Guide.md)
