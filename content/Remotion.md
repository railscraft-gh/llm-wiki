제공해주신 소스 문서(`raw/100개 이상의 Claude Code 스킬 중 가장 유용한 베스트 추천 목록.md`) 및 지침 스키마에 따라 **Remotion** (type: tool) 개념에 대한 위키 노트를 성공적으로 생성 완료하였습니다.

### 작업 요약
- **생성된 파일 경로**: [Remotion.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Remotion.md)
- **Frontmatter 규격**: `type: tool`, `status: draft`, `sources`, `tags`, `created`, `updated` 등 지정된 스키마 완벽 반영
- **인터링크 및 출처 명시**: Obsidian 위키링크(`[[Claude Code]]`, `[[Claude Code 스킬]]`, `[[Frontend Slides]]` 등) 연결 및 언급된 명령어/정보 문단별 소스 파일 출처 괄호 표기 (`(raw/100개 이상의 Claude Code 스킬 중 가장 유용한 베스트 추천 목록.md)`)
- **구체적 예시 포함**: 스킬 CLI 설치 명령어(`npx skills add remotion/agent-skills`) 및 실제 프롬프트/파이프라인 예시 작성

---

### 작성된 위키 노트 미리보기

```markdown
---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - claude-code
  - video-generation
aliases:
  - Remotion Skill
  - Remotion 에이전트 스킬
sources:
  - raw/100개 이상의 Claude Code 스킬 중 가장 유용한 베스트 추천 목록.md
created: 2026-08-27
updated: 2026-08-27
---

# Remotion

## 한 줄 정의
**Remotion**은 [[Claude Code]] 환경을 벗어나지 않고도 React 코드 기반 프레임워크를 활용해 제품 기능 설명 등의 동적 비디오 콘텐츠를 자동으로 생성할 수 있도록 지원하는 [[Claude Code 스킬]]이자 비디오 프레임워크 도구이다.

## 핵심 요지
- **AI 기반 비디오 생성 단순화**: 기존의 전문 비디오 편집 소프트웨어(많은 시간과 높은 비용 소요)를 대체하여 에이전트 인터페이스 내에서 손쉽게 시각 자료를 제작할 수 있게 돕는다.
- **간편한 에이전트 스킬 설치**: `npx skills add remotion/agent-skills` CLI 명령어를 통해 [[Claude Code]] 또는 에이전트 환경에 빠르게 설치 및 연동할 수 있다.
- **프로덕트 매니지먼트 및 프론트엔드 연동**: 정적 문서보다 정보 전달력이 뛰어난 비디오를 프런트엔드 프로토타이핑 과정에서 프로덕트 기능 설명용으로 즉시 생성할 수 있다.

## 상세
비디오는 정적인 텍스트 문서보다 정보 전달 효율이 현저히 높지만, 종래에는 고가의 편집 도구와 숙련된 편집 기술 및 비용이 요구되었다. 

Remotion 스킬은 [[Claude Code]] 터미널 프롬프트 상에서 자연어 지시를 바탕으로 제품 기능 데모나 비디오 렌더링 작업을 프로그램 방식으로 처리한다 (raw/100개 이상의 Claude Code 스킬 중 가장 유용한 베스트 추천 목록.md). 

이를 통해 개발자나 디자이너는 정적 UI에 그치지 않고 동적인 튜토리얼 및 제품 안내 비디오를 비디오 편집 프로그램 없이 에이전트를 통해 자동화할 수 있다.

### 스킬 설치 방법
Remotion 스킬은 다음과 같이 명령어를 실행하여 에이전트 스킬 모듈로 추가할 수 있다 (raw/100개 이상의 Claude Code 스킬 중 가장 유용한 베스트 추천 목록.md):

```bash
npx skills add remotion/agent-skills
```

또는 GitHub 리포지토리(`https://github.com/remotion-dev/skills`)에서 스킬 정의 파일을 직접 다운로드하여 사용할 수 있다 (raw/100개 이상의 Claude Code 스킬 중 가장 유용한 베스트 추천 목록.md).

## 예시

### 1. Claude Code CLI에서 비디오 생성 프롬프트 예시
```bash
# Remotion 스킬을 설치한 후 Claude Code 터미널에서 실행
npx skills add remotion/agent-skills

# 제품 기능 설명용 동영상 제작 요청 예시
/remotion "Create a 15-second product demo animation highlighting our new dark mode toggle feature."
```

### 2. Remotion 스킬 동작 흐름 예시
```
[사용자 요청] -> [Claude Code] -> [Remotion 스킬 실행] -> [React 기반 코드/컴포지션 구성] -> [비디오 렌더링 및 결과 파일 출력]
```

## 충돌
현재 소스 문서에서는 충돌되는 주장이나 기술적 의견 대립이 발견되지 않았다.

## 관련 노트
- [[Claude Code 스킬]]: Claude Code의 기능을 확장하는 프리셋 지시사항 스킬 컬렉션.
- [[Claude Code]]: 터미널 기반 AI 코딩 에이전트 인터페이스.
- [[Frontend Slides]]: 프론트엔드 HTML 슬라이드를 생성해 주는 시각적 프레젠테이션 스킬.
- [[Figma-Claude Code 양방향 연동]]: 디자인 UI를 코드화하고 시각화하는 디자인 연동 기법.

## 출처
- raw/100개 이상의 Claude Code 스킬 중 가장 유용한 베스트 추천 목록.md
```