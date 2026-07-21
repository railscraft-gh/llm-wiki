---
type: concept
status: draft
core: false
tags:
- ruby
- tooling
- static-analysis
- linter
aliases:
- RuboCop
sources:
- raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
RuboCop은 Ruby Style Guide를 기반으로 코드를 정적 분석하고 포매팅하며 자동 수정까지 지원하는 Ruby 생태계의 사실상 표준 린터/포매터입니다.

## 핵심 요지
- **기능:** 580개 이상의 규칙(Cop)을 통해 스타일, 레이아웃, 버그 가능성, 보안 취약점, 복잡도 등을 정적 분석합니다.
- **자동화:** `-a`(안전한 수정)와 `-A`(모든 수정) 옵션을 통해 코드 리뷰의 상당 부분을 자동화할 수 있습니다.
- **유연성:** `.rubocop.yml`을 통해 모든 설정을 세밀하게 튜닝할 수 있으며, 기존 프로젝트에도 점진적으로 도입하기 쉽습니다.
- **생태계:** `rubocop-performance`, `rubocop-rails`, `rubocop-rspec` 등 도메인별 공식 확장 플러그인을 지원합니다.

## 상세
RuboCop은 Ruby 코드의 일관성을 유지하고 잠재적 버그와 보안 취약점을 사전 예방하는 데 필수적인 도구입니다. 8개의 부서(Style, Layout, Lint, Metrics 등)로 나뉜 580+ 개의 검사 항목을 통해 프로젝트의 복잡도를 관리합니다. 대규모 프로젝트에서도 병렬 실행(`-P`)을 통해 빠르게 검사할 수 있으며, `--auto-gen-config`를 사용하여 기존 코드베이스에 영향 없이 신규 코드부터 단계적으로 적용 가능합니다.

## 관련 노트
- [[AI 코딩 에이전트 검증 전략]]
- [[LLM Wiki 운영 패턴]]

