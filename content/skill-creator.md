지정된 소스 문서(`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`) 분석을 바탕으로, 개념 **`skill-creator`**(유형: `tool`)에 대한 고품질 한국어 위키 노트를 자율적으로 완수하여 생성했습니다.

생성된 위키 노트의 상세 경로 및 내용은 다음과 같습니다.

- **파일 위치**: `/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/skill-creator.md`

---

### [작성된 `skill-creator.md` 내용]

```markdown
---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - claude-code
  - skill-creator
  - prompt-engineering
  - meta-skill
aliases:
  - Skill Creator
  - skill-creator
sources:
  - raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md
created: 2026-08-27
updated: 2026-08-27
---

# skill-creator

## 한 줄 정의
앤트로픽(Anthropic)이 공식 제공하는 메타 스킬(Meta-skill)로, [[Claude Code]] 환경에서 맞춤형 스킬을 정의하는 YAML 프론트매터(Frontmatter)를 구성하고 설명(Description) 필드를 최적화하여 오버헤드 없이 스킬을 생성·관리·정리(Prune)할 수 있도록 지원하는 도구.

## 핵심 요지
- **공식 메타 스킬(Meta-skill)**: 앤트로픽의 공식 `skill-creator`는 [[Claude Code]]에 설치되는 모든 커스텀 스킬을 생성, 정의, 튜닝하기 위한 필수 전제 조건 역할을 수행합니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).
- **YAML 프론트매터 및 트리거 튜닝**: 스킬 호출 여부를 결정짓는 핵심 요소인 YAML 프론트매터의 `description` 필드를 정교하게 튜닝하여, 모델의 미스 트리거(Mis-triggering)나 오동작 없이 정밀한 도구 호출을 유도합니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).
- **설정 감사 및 병합(Consolidation)**: 서로 겹치는 스킬 설명을 감지하거나 약한 트리거를 보완하며, 여러 파편화된 스킬(예: 각기 다른 Git 헬퍼 스킬들)을 하나의 신뢰할 수 있는 스킬로 병합해 [[컨텍스트 세금]]을 최적화합니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).
- **스킬 vs 규칙 분리 감지**: 스킬로 오인되어 컨텍스트 예산을 낭비하는 요소 중 '스킬이 아닌 [[CLAUDE md 영구 규칙서 워크플로|CLAUDE.md]]의 일회성(One-shot) 규칙으로 이전되어야 할 항목'을 포착해 분리합니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).
- **시니어 에이전트 워크플로**: 주니어 개발자가 무분별하게 스킬을 다운로드하는 것과 달리, 시니어 엔지니어는 `skill-creator`를 사용해 프로젝트 특화형 소형 도구를 신속히 제작하고 작업 완료 후 정리(Prune)하는 수명주기 관리를 수행합니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).

## 상세

### 1. `skill-creator`의 역할 및 매커니즘
[[Claude Code]] CLI는 실행 시 `.claude/skills/` 디렉터리를 훑어 설치된 스킬들의 프론트매터 설명(description)을 취합하고, 이를 LLM의 시스템 프롬프트(System Prompt)에 컴파일해 넣습니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`). 모델은 프롬프트를 처리할 때 오직 이 `description` 필드만을 읽고 스킬을 실행할지 여부를 결정합니다.

`skill-creator`는 이러한 스킬 생성을 메타 차원에서 보조합니다:
1. **프론트매터 스키마 자동 생성**: 스킬의 이름(`name`), 설명(`description`), 허용 도구(`allowed-tools`) 등의 YAML 규격을 정확히 작성해 줍니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).
2. **설명(Description) 필드 최적화**: 앤트로픽 가이드라인에 따르면 스킬 설명은 전체 컨텍스트 예산의 1% 한도 및 최대 1,536자 제한을 받습니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`). 설명이 너무 모호하면 모델이 스킬을 무시하고, 너무 넓으면 불필요할 때도 끊임없이 트리거되어 [[컨텍스트 세금]]을 낭비하므로 `skill-creator`를 통한 튜닝이 필수적입니다.
3. **스킬 오남용 진단**: 세 가지 주요 문제를 동시에 감지합니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`):
   - 서로 겹치는(Overlapping) 스킬 설명
   - 예상 프롬프트에서의 약한 트리거(Weak triggering) 현상
   - 복잡한 로직이 아닌 단순 지침으로서 [[CLAUDE md 영구 규칙서 워크플로|CLAUDE.md]]로 들어가야 할 규칙의 감지

### 2. 시니어 vs 주니어 개발자의 스킬 운용 패턴

| 구분 | 주니어 패턴 | 시니어 패턴 (`skill-creator` 활용) |
| :--- | :--- | :--- |
| **스킬 도입 방식** | 소셜 미디어나 블로그 포스트 추천을 보고 30여 개 이상 무작정 설치 | `skill-creator`로 저장소/프로젝트에 꼭 맞춘 작고 고도로 구체적인 도구 직접 작성 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`) |
| **스킬 유지/관리** | 설치 후 걷어내지 않고 방치하여 [[컨텍스트 세금]] 대량 지불 | 프로젝트 완료 후 불필요해진 커스텀 스킬을 즉시 정리(Prune) (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`) |
| **파편화 대응** | 비슷비슷한 여러 스킬(예: 3개의 Git 헬퍼)을 중복 방치 | `skill-creator`를 사용해 파편화된 스킬들을 신뢰할 수 있는 단일 프롬프트/스킬로 통합 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`) |

## 예시

### 1. `skill-creator`로 작성 및 튜닝된 스킬 프론트매터 예시
`skill-creator`를 사용해 PR 리뷰 용도로 정교하게 제약 조건과 허용 도구를 정의한 스킬 구성 예시입니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).

```yaml
---
name: review-pr
description: Review the current PR diff and flag risks. Use before commit.
allowed-tools: Bash(git diff *) Bash(gh pr *)
---
```

### 2. 커스텀 스킬 생성 및 감사를 위한 CLI 설치 및 활용 예시
`skill-creator`는 앤트로픽의 공식 스킬 리포지토리에서 설치하거나 커뮤니티 플러그인 세트로 배포받아 활용할 수 있습니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).

```bash
# 앤트로픽 공식 스킬 리포지토리 클론 및 skill-creator 설치
git clone https://github.com/anthropics/skills.git /tmp/anthropic-skills
mkdir -p ~/.claude/skills
cp -r /tmp/anthropic-skills/skills/skill-creator ~/.claude/skills/
rm -rf /tmp/anthropic-skills

# 설치 확인 (Claude Code 세션 실행 후)
# "What skills are available?" 질의 시 skill-creator가 활성화되어 나타남
```

### 3. 파편화된 Git 스킬들의 병합(Consolidation) 시나리오
개발자가 `git-commit-helper`, `git-diff-checker`, `pr-reviewer` 등 3개의 조잡한 스킬을 개별 탑재하고 있던 상황에서, `skill-creator`를 사용하여 1,536자 이내의 단일 고성능 스킬인 `git-workflow` 스킬로 압축·병합함으로써 [[컨텍스트 세금]]을 대폭 절감하고 트리거 정확도를 극대화할 수 있습니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).

## 충돌
- **자동화된 메타 생성 vs 인간 튜닝의 필요성**: `skill-creator`가 YAML 사양과 설명 튜닝을 보조하더라도, 최종 트리거 문구와 문맥 충돌 여부는 개발자의 프로젝트 도메인 이해에 의존하므로 완전 자동 생성이 프롬프트 오동작을 100% 예방하지는 못할 수 있습니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).
- **도구 전용화 vs 일반화의 상충**: 프로젝트 맞춤형으로 극도로 세분화된 스킬을 생성할 경우, 다른 프로젝트나 범용 태스크에서의 재사용성이 떨어져 매 프로젝트마다 새로운 스킬 생성을 반복해야 하는 오버헤드가 발생할 수 있습니다 (`raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`).

## 관련 노트
- [[스킬 감사 프레임워크]]
- [[컨텍스트 세금]]
- [[Claude Code]]
- [[Claude Code 스킬]]
- [[CLAUDE md 영구 규칙서 워크플로]]
- [[에이전트 워크플로우 패턴]]
- [[도구 사용 패턴]]

## 출처
- `raw/2026년 Claude Code 설정에 꼭 필요한 8가지 핵심 스킬.md`
```