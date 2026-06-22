---
core: false
created: 2026-05-13
sources:
- RuboCop - Ruby 정적 코드 분석기 완벽 정리
- raw/하네스 엔지니어링 - 65줄 CLAUDE.md가 최고의 스킬인 이유.md
- raw/GLM-5.1-vs-Kimi-K2.6-Coding-Comparison.md
- raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md
- raw/arxiv-2603.28052-meta-harness.md
status: evergreen
tags:
- ruby
- linter
- formatter
- ci
- verification
type: tool
updated: '2026-06-22'
---

# RuboCop

## 한 줄 정의

RuboCop은 Ruby 생태계에서 널리 쓰이는 정적 코드 분석기 겸 포매터로, 여러 Cop으로 스타일·레이아웃·잠재적 버그·보안 취약점·복잡도를 검사하고 자동 수정한다.

## 핵심 요지

- 정적 분석 대상을 실행하지 않고 AST 기반으로 검사하며, 안전한 수정(`-a`)과 전체 수정(`-A`)을 구분한다.
- `.rubocop.yml`로 거의 모든 Cop의 동작을 세밀하게 제어할 수 있으며, 계층적 설정 병합을 지원한다.
- `--auto-gen-config`로 기존 코드베이스에도 점진적 도입이 가능해 CI 통합이 용이하다.

## 상세

RuboCop의 모든 검사 단위는 **Cop**이라고 부른다. Ruby 파서로 AST를 생성한 뒤 등록된 Cop들이 순회하며 위반(offense)을 감지한다. Cop은 8개 부서(Style, Layout, Lint, Metrics, Naming, Security, Bundler, Gemspec)로 분류된다.

**설치와 기본 실행:**
```bash
gem install rubocop
rubocop -a       # 안전한 자동 수정만
rubocop -A       # 모든 자동 수정(비안전 포함)
rubocop --auto-gen-config  # 현재 offenses 기반 TODO 설정 생성
rubocop -P       # 병렬 실행
```

**설정의 핵심 요소:**
- `inherit_from`: 다른 `.yml` 파일 상속
- `AllCops`: 전역 설정(TargetRubyVersion, Exclude, NewCops 등)
- `plugins`: 공식 확장(rubocop-performance, rubocop-rails, rubocop-rspec 등) 로드
- Safe vs Unsafe Autocorrect: `-a`는 동작을 절대 바꾸지 않으며, `-A`는 동작 변경 가능성이 있는 수정도 포함

**점진적 도입 워크플로우:**
1. `rubocop --auto-gen-config`로 현재 offenses를 TODO 파일로 생성
2. `.rubocop.yml`에 `inherit_from: .rubocop_todo.yml` 추가
3. CI에서 새 코드만 검사하고 주기적으로 TODO 갱신

## 예시

Rails 프로젝트의 `.rubocop.yml` 구성:
```yaml
plugins:
  - rubocop-performance
  - rubocop-rails
  - rubocop-rspec

AllCops:
  TargetRubyVersion: 3.2
  NewCops: enable

Metrics/MethodLength:
  Max: 15
  Exclude:
    - 'db/migrate/**/*'
```

GitHub Actions 통합:
```yaml
- name: RuboCop
  run: bundle exec rubocop --parallel
```

## 충돌

현재 확인된 충돌 없음.

## 관련 노트

- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Native Infrastructure]]
- [[Claude.md 운영 원칙]]

