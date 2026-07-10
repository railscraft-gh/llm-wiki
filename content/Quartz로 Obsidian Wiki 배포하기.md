---
aliases:
  - Quartz 배포
  - Quartz GitHub Pages
core: false
created: 2026-05-08
sources:
  - Quartz-Deploy-Guide
  - Quartz-GitHub-Pages-Complete-Guide
  - 'https://quartz.jzhao.xyz/'
  - 'https://quartz.jzhao.xyz/build'
  - 'https://quartz.jzhao.xyz/hosting'
  - 'https://quartz.jzhao.xyz/configuration'
  - 'https://quartz.jzhao.xyz/features/Obsidian-compatibility'
  - raw/pi-coding-agent-overview.md
  - raw/opencode-masterclass-summary.md
  - raw/Quartz-GitHub-Pages-Complete-Guide.md
  - raw/Infisical_SSH_헤드리스_인증_가이드.md
  - raw/AI 에이전트는 죽었다. 88퍼센트가 프로덕션 도달 전에 실패하는 이유.md
  - raw/5개의 새로운 플러그인으로 옵시디언 워크플로우 재구축하기 (2026년 설정).md
  - raw/Quartz-Deploy-Guide.md
  - raw/GBrain - 에이전트를 위한 오픈소스 장기 기억 및 지식 그래프 인프라.md
  - raw/Hermes, OpenClaw, ChatGPT 에이전트 및 미래 AI 시스템의 실제 작동 원리.md
  - raw/오픈소스 모델로도 충분하다. 필요하지 않은 지능에 비용을 과다하게 지출하지 마라.md
  - raw/16GB Mac mini에서 Qwen 3.5 122B LLM 실행하기 - TurboQuant-MLX를 활용한 MoE 전문가 스트리밍.md
  - raw/마이크로소프트는 엔지니어들에게 AI 사용 중단을 지시했고, 우버는 4개월 만에 연간 AI 예산을 모두 탕진했다. 아무도 말하지 않는 진실.md
  - raw/일주일 동안 지속 실행되는 에이전틱 시스템 구축하기.md
  - raw/AI 디자인 시스템에 윤리, 접근성, 그리고 기억을 부여한 방법.md
  - raw/Hermes 에이전트의 내부 구조 - 자가 개선 에이전트의 작동 원리.md
status: evergreen
tags:
  - wiki
  - obsidian
  - deployment
type: workflow
updated: 2026-07-10
---

# Quartz로 Obsidian Wiki 배포하기

## 한 줄 정의
Quartz로 Obsidian Wiki 배포하기는 `wiki/` 마크다운 노트를 Quartz의 `content/`로 연결하고 GitHub Pages로 정적 사이트를 배포하는 workflow다.

## 핵심 요지
- Quartz는 Markdown과 Obsidian 문법을 웹사이트로 변환하는 static site generator다.
- LLM wiki는 원본 vault를 보존해야 하므로 `content/`에 복사하기보다 symlink나 별도 배포 repo를 정해 단일 원천을 유지한다.
- GitHub Pages 배포는 `npx quartz build`로 `public/`을 만들고 GitHub Actions가 Pages artifact를 배포하는 구조가 기본이다.
- Symlink를 쓰는 경우 GitHub Actions에서 `content`를 실제 파일로 풀어 주는 단계가 필요하며, 워크플로우에 `cp -rL` 단계를 추가하여 해결한다.
- macOS 환경에서는 `fswatch`와 `launchd`를 결합하여 Obsidian 내 변경 사항을 Quartz 배포 저장소에 실시간 반영 및 자동 배포가 가능하다.
- 커스텀 도메인을 연결할 때는 Apex 도메인 A 레코드(4개 IP) 및 CNAME 레코드를 설정하고 `quartz.config.ts`에서 `baseUrl`을 갱신해야 한다.
- Quartz 버전, Node 요구사항, GitHub Pages branch 이름은 변동 가능성이 있어 배포 전 공식 hosting 문서를 재확인한다.
- Quartz의 theme 설정을 통해 lightMode와 darkMode의 colors 테마 맵(light, lightgray, gray, darkgray, dark, secondary, tertiary, highlight, textHighlight 등) 및 typography 폰트를 세밀히 커스터마이징하여 로컬 스타일을 구축할 수 있다. (출처: Quartz-GitHub-Pages-Complete-Guide.md)
- Plugin.Latex({ renderEngine: 'katex' }) 설정을 추가하여 $$LaTeX$$ 형식의 수식 및 물리 기호를 웹 브라우저 상에서 초고속으로 렌더링하고 완벽 호환되도록 제어할 수 있다. (출처: Quartz-Deploy-Guide.md)

## 상세

### 1. Quartz 설치 및 로컬 빌드
Quartz 공식 문서는 Node v22 이상과 npm v10.9.2 이상을 요구한다. 초기 설치 및 클론은 다음과 같다:
```bash
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
```
`create` 실행 시 `Create new Quartz from scratch`를 선택하고, 폴더 이름(예: `my-llm-wiki`)을 설정하면 `content/` 폴더가 생성된다. 로컬 미리보기는 `npx quartz build --serve` 실행 후 `http://localhost:8080/`에서 확인하며, 실시간 감시는 `--watch` 플래그를 추가한다.

### 2. LLM Wiki 콘텐츠 연결 (Symlink vs 복사)
- **Symlink 방식 (권장)**:
  ```bash
  mv content content-backup
  ln -s /Users/railscraft/Obsidian/wiki content
  ```
  로컬 변경사항이 즉시 반영되지만, GitHub Actions 빌드 시 심볼릭 링크를 파일로 해소하지 않으면 빈 페이지가 배포된다.
- **파일 복사 방식**:
  ```bash
  cp -r /Users/railscraft/Obsidian/wiki/* content/
  ```
  매번 수동 동기화가 필요한 단점이 있다.

### 3. Quartz 설정 파일 구성
- **`quartz.config.ts`**:
  `baseUrl`은 `username.github.io/reponame` 또는 커스텀 도메인으로 설정하고, `locale`은 `"ko-KR"`, 한국어 폰트는 Noto Sans KR을 적용한다. `Plugin.FrontMatter()`, `Plugin.ObsidianFlavoredMarkdown()`, `Plugin.CrawlLinks({ markdownLinkResolution: "shortest" })`를 통해 Obsidian wikilink 문법을 유지한다. `ignorePatterns`에 `private`, `_archive`, `.obsidian` 등을 지정하여 노출을 제한한다.
- **`quartz.layout.ts`**:
  `Component.Graph()` 및 `Component.Backlinks()`를 추가하여 Obsidian의 핵심인 그래프 뷰와 백링크를 활성화한다.

### 4. GitHub Actions 배포 및 Symlink 해소
`.github/workflows/deploy.yml` 파일에서 Node.js 22 버전을 타겟팅하며, symlink를 사용하는 경우 아래와 같이 빌드 전에 해소 스텝을 반드시 포함해야 한다:
```yaml
      - name: Resolve content symlink
        run: |
          if [ -L content ]; then
            cp -rL content content-real
            rm content
            mv content-real content
          fi
```

### 5. macOS 실시간 감시 및 자동 배포 파이프라인
macOS 환경에서 `fswatch`와 `launchd`를 활용하여 Obsidian `wiki/` 폴더의 변경을 실시간 감시하고 자동 배포할 수 있다.
- **배포 스크립트 (`deploy.sh`)**:
  ```bash
  #!/bin/bash
  set -e
  QUARTZ_DIR="/Users/railscraft/quartz"
  WIKI_DIR="/Users/railscraft/Obsidian/wiki"
  BRANCH="v4"
  cd "$QUARTZ_DIR"
  rm -rf content
  cp -r "$WIKI_DIR" content
  # 배포용으로 출처 섹션 제거 자동화 시 (선택 사항)
  # find content -name "*.md" -type f | while read -r file; do sed -i '' '/^## 출처/,$d' "$file"; done
  git add -A
  if git diff --cached --quiet; then
      echo "변경사항 없음."
  else
      git commit -m "Auto-deploy: sync wiki content $(date '+%Y-%m-%d %H:%M')"
      git push origin "$BRANCH"
  fi
  ```
- **launchd Agent (`com.user.llmwiki.deploy.plist`)**:
  `~/Library/LaunchAgents`에 등록하여 시스템 시작 시 백그라운드에서 `fswatch`를 통해 `deploy.sh`가 주기적으로 트리거되도록 설정한다.

### 6. 커스텀 도메인(Custom Domain) 연결
- **DNS 레코드 설정**:
  Apex 도메인(`yourdomain.com`)은 GitHub Pages IP인 `185.199.108.153` ~ `185.199.111.153` (총 4개)로 A 레코드를 설정하고, www는 `username.github.io`로 CNAME 레코드를 지정한다.
- **GitHub 저장소 설정**:
  Settings -> Pages의 Custom domain 필드에 도메인을 입력하고, `quartz.config.ts`의 `baseUrl`을 `wiki.yourdomain.com` 형식으로 일치시킨다.

### 7. Quartz 테마 색상 및 텍스트 렌더링 커스터마이징
- **테마 구조 및 폰트 변경**: `quartz.config.ts` 파일의 `theme` 블록에서 `typography` 요소를 사용해 header/body 폰트를 구글 폰트(`Noto Sans KR` 등)로 맵핑하고, code 폰트를 `IBM Plex Mono` 등으로 매핑하여 렌더링 완성도를 높인다.
- **수식 렌더링 플러그인**: LLM 개념 및 수리 벤치마크 데이터를 브라우저에 표시하기 위해 `Plugin.Latex({ renderEngine: "katex" })`를 `transformers` 플러그인 리스트에 배치한다. 이를 통해 별도 마크업 없이도 `$$ 수식 $$` 블록이 KaTeX 엔진을 거쳐 HTML 수식으로 자동 변환된다. (출처: Quartz-Deploy-Guide.md)

## 예시

1. `quartz.config.ts`에서 로케일을 `"ko-KR"`로 맞추고 Noto Sans KR 폰트를 지정한다.
2. `.github/workflows/deploy.yml`을 작성하여 GitHub Actions 배포 방식을 설정한다.
3. GitHub 저장소의 `Settings` -> `Environments` -> `github-pages`에 배포 브랜치 `v4`를 추가한다.
4. 로컬에서 `chmod +x deploy.sh` 실행 후 `launchctl load`를 통해 실시간 감시 데몬을 구동한다.
5. `npx quartz sync`를 수동 실행하여 로컬 커밋 및 푸시의 정상 작동 여부를 검증한다.

## 충돌 및 해결 (FAQ)

- **GitHub Pages v4 branch 배포 거부 오류**:
  GitHub 저장소 `Settings -> Environments -> github-pages`에서 Deployment branches 제한 설정에 `v4` 브랜치 패턴이 정상 등록되었는지 확인한다. (공식 문서와 가이드의 sync 방식 차이로 생기는 환경 보호 에러 해결책).
- **Git Push 시 Permission denied (publickey) 에러**:
  SSH 키 인증 오류 시 `eval "$(ssh-agent -s)"`와 `ssh-add`를 사용해 키를 등록하거나 HTTPS origin URL(`https://github.com/...`)로 원격을 변경하여 대처한다.
- **index.html 미생성 오류**:
  Quartz 빌드 에러의 주원인으로, `content/` 폴더 내에 반드시 홈 화면 역할을 할 `index.md` 파일이 존재해야 한다.

### quartz.config.ts의 테마 색상 매핑 구조 예시
```typescript
theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Noto Sans KR",
    body: "Noto Sans KR",
    code: "IBM Plex Mono",
  },
  colors: {
    lightMode: {
      light: "#faf8f8",
      lightgray: "#e5e5e5",
      gray: "#b8b8b8",
      darkgray: "#4e4e4e",
      dark: "#2b2b2b",
      secondary: "#284b63",
      tertiary: "#84a59d",
      highlight: "rgba(143, 159, 169, 0.15)",
      textHighlight: "#fff23688",
    },
    darkMode: {
      light: "#161618",
      lightgray: "#393639",
      gray: "#646464",
      darkgray: "#d4d4d4",
      dark: "#ebebec",
      secondary: "#7b97aa",
      tertiary: "#84a59d",
      highlight: "rgba(143, 159, 169, 0.15)",
      textHighlight: "#b3aa0288",
    },
  },
}
```
(출처: Quartz-GitHub-Pages-Complete-Guide.md)

## 충돌

## 관련 노트
- [[Agent Native Infrastructure]]
- [[AI 코딩 에이전트 검증 전략]]
- [[Software 3.0]]
- [[LLM Wiki 구현 선택지]]
- [[LLM Wiki 운영 패턴]]

