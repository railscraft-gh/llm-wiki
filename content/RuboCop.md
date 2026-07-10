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
updated: 2026-07-10
---

# RuboCop

## 한 줄 정의
RuboCop은 Ruby 생태계에서 널리 쓰이는 정적 코드 분석기 겸 포매터로, 여러 Cop으로 스타일·레이아웃·잠재적 버그·보안 취약점·복잡도를 검사하고 자동 수정한다.

## 핵심 요지
- 정적 분석 대상을 실행하지 않고 AST 기반으로 검사하며, 안전한 수정(`-a`)과 전체 수정(`-A`)을 구분한다.
- `.rubocop.yml`로 거의 모든 Cop의 동작을 세밀하게 제어할 수 있으며, 계층적 설정 병합을 지원한다.
- `--auto-gen-config`로 기존 코드베이스에도 점진적 도입이 가능해 CI 통합이 용이하다.
- 2026-02-26 기준 최신 릴리스 버전은 v1.85.0이며, GitHub Star 12.8k+ 이상 및 누적 다운로드 수 6.4억 회 이상을 기록하는 Ruby 생태계의 업계 표준(Industry Standard) 도구다. (출처: RuboCop - Ruby 정적 코드 분석기 완벽 정리.md)
- CI/CD 파이프라인 통과 시간 단축을 위해 -P 또는 --parallel 플러그를 지원하여 다중 CPU 코어 상에서 정적 분석 프로세스를 병렬 실행할 수 있다. (출처: RuboCop - Ruby 정적 코드 분석기 완벽 정리.md)
- 공식 핵심 개발진은 Bozhidar Batsov, Jonas Arvidsson 등이며, MIT 라이선스를 따른다. (출처: RuboCop - Ruby 정적 코드 분석기 완벽 정리.md)

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

### 4. RuboCop 에코시스템 지표 및 병렬 처리 최적화
- **버전 및 생태계 데이터**: v1.85.0 최신 버전(2026-02-26 릴리스) 기준으로 누적 다운로드 6억 4천만 회를 돌파했다. 개발을 주도하는 Bozhidar Batsov와 Jonas Arvidsson 등의 커뮤니티 핵심 기여자를 필두로 강력한 규칙 일치 생태계를 유지하고 있다.
- **병렬 가속 (Parallel Execution)**: 대형 모놀리스 Ruby 프로젝트에서 루보캅 검출 속도를 높이기 위해, CLI 실행 시 `-P` 또는 `--parallel` 플래그를 추가한다. 이는 로컬 환경 및 CI 가상 머신의 다중 스레드 하드웨어 대역폭을 모두 활용하여 분석 병목을 해소한다. (출처: RuboCop - Ruby 정적 코드 분석기 완벽 정리.md)

### 4. RuboCop 에코시스템 지표 및 병렬 처리 최적화
- **버전 및 생태계 데이터**: v1.85.0 최신 버전(2026-02-26 릴리스) 기준으로 누적 다운로드 6억 4천만 회를 돌파했다. 개발을 주도하는 Bozhidar Batsov와 Jonas Arvidsson 등의 커뮤니티 핵심 기여자를 필두로 강력한 규칙 일치 생태계를 유지하고 있다.
- **병렬 가속 (Parallel Execution)**: 대형 모놀리스 Ruby 프로젝트에서 루보캅 검출 속도를 높이기 위해, CLI 실행 시 `-P` 또는 `--parallel` 플래그를 추가한다. 이는 로컬 환경 및 CI 가상 머신의 다중 스레드 하드웨어 대역폭을 모두 활용하여 분석 병목을 해소한다. (출처: RuboCop - Ruby 정적 코드 분석기 완벽 정리.md)

### 4. RuboCop 에코시스템 지표 및 병렬 처리 최적화
- **버전 및 생태계 데이터**: v1.85.0 최신 버전(2026-02-26 릴리스) 기준으로 누적 다운로드 6억 4천만 회를 돌파했다. 개발을 주도하는 Bozhidar Batsov와 Jonas Arvidsson 등의 커뮤니티 핵심 기여자를 필두로 강력한 규칙 일치 생태계를 유지하고 있다.
- **병렬 가속 (Parallel Execution)**: 대형 모놀리스 Ruby 프로젝트에서 루보캅 검출 속도를 높이기 위해, CLI 실행 시 `-P` 또는 `--parallel` 플래그를 추가한다. 이는 로컬 환경 및 CI 가상 머신의 다중 스레드 하드웨어 대역폭을 모두 활용하여 분석 병목을 해소한다. (출처: RuboCop - Ruby 정적 코드 분석기 완벽 정리.md)

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

### rubocop 병렬 가속 및 자동 수정 명령어 패턴
```bash
# 1. 멀티 코어로 루보캅 정적 검사 실행
bundle exec rubocop --parallel

# 2. 안전한 오펜스(Safe offenses)만 자동 포맷팅
bundle exec rubocop -a --parallel

# 3. 비안전 항목을 포함한 전수 자동 정정 실행
bundle exec rubocop -A --parallel
```
(출처: RuboCop - Ruby 정적 코드 분석기 완벽 정리.md)

### rubocop 병렬 가속 및 자동 수정 명령어 패턴
```bash
# 1. 멀티 코어로 루보캅 정적 검사 실행
bundle exec rubocop --parallel

# 2. 안전한 오펜스(Safe offenses)만 자동 포맷팅
bundle exec rubocop -a --parallel

# 3. 비안전 항목을 포함한 전수 자동 정정 실행
bundle exec rubocop -A --parallel
```
(출처: RuboCop - Ruby 정적 코드 분석기 완벽 정리.md)

### rubocop 병렬 가속 및 자동 수정 명령어 패턴
```bash
# 1. 멀티 코어로 루보캅 정적 검사 실행
bundle exec rubocop --parallel

# 2. 안전한 오펜스(Safe offenses)만 자동 포맷팅
bundle exec rubocop -a --parallel

# 3. 비안전 항목을 포함한 전수 자동 정정 실행
bundle exec rubocop -A --parallel
```
(출처: RuboCop - Ruby 정적 코드 분석기 완벽 정리.md)

## 충돌
현재 확인된 충돌 없음.

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[Agent Native Infrastructure]]
- [[Claude.md 운영 원칙]]

