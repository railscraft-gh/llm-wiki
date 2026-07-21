---
type: concept
status: draft
core: false
tags:
  - ruby
  - tooling
aliases:
  - RuboCop
sources:
  - raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md
created: 2026-07-21
updated: 2026-07-21
---

## 한 줄 정의
Ruby 프로젝트를 위한 사실상 표준(de facto standard) 정적 코드 분석기 및 포매터.

## 핵심 요지
RuboCop은 커뮤니티 주도의 Ruby Style Guide를 기반으로 580개 이상의 규칙(Cop)을 통해 코드 스타일, 레이아웃, 보안, 성능 등을 자동 검사하고 수정(autocorrect)한다.

## 상세
- **구조**: 모든 검사 규칙을 'Cop'이라 부르며, Style, Layout, Lint, Metrics 등 8개 부서로 분류됨 [raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md#L61](file:///Users/railscraft/Obsidian/raw/RuboCop%20-%20Ruby%20%EC%A0%95%EC%A0%81%20%EC%BD%94%EB%93%9C%20%EB%B6%84%EC%84%9D%EA%B8%B0%20%EC%99%84%EB%B2%BD%20%EC%A0%95%EB%A6%AC.md#L61).
- **자동 수정**: `-a`(Safe, 안전한 수정)와 `-A`(All, 모든 수정) 모드를 통해 코드 리뷰의 반복 작업을 자동화 가능 [raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md#L159](file:///Users/railscraft/Obsidian/raw/RuboCop%20-%20Ruby%20%EC%A0%95%EC%A0%81%20%EC%BD%94%EB%93%9C%20%EB%B6%84%EC%84%9D%EA%B8%B0%20%EC%99%84%EB%B2%BD%20%EC%A0%95%EB%A6%AC.md#L159).
- **점진적 도입**: 기존 프로젝트에는 `--auto-gen-config`를 사용하여 기존 위반 사항을 TODO로 처리하고 점진적으로 해결 가능 [raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md#L262](file:///Users/railscraft/Obsidian/raw/RuboCop%20-%20Ruby%20%EC%A0%95%EC%A0%81%20%EC%BD%94%EB%93%9C%20%EB%B6%84%EC%84%9D%EA%B8%B0%20%EC%99%84%EB%B2%BD%20%EC%A0%95%EB%A6%AC.md#L262).

## 예시
프로젝트 루트의 `.rubocop.yml`을 통해 프로젝트별 스타일 규칙을 제어 [raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md#L112](file:///Users/railscraft/Obsidian/raw/RuboCop%20-%20Ruby%20%EC%A0%95%EC%A0%81%20%EC%BD%94%EB%93%9C%20%EB%B6%84%EC%84%9D%EA%B8%B0%20%EC%99%84%EB%B2%BD%20%EC%A0%95%EB%A6%AC.md#L112).

## 충돌
`-A` 옵션은 코드의 의미를 바꿀 수 있으므로 주의하여 사용해야 함 [raw/RuboCop - Ruby 정적 코드 분석기 완벽 정리.md#L284](file:///Users/railscraft/Obsidian/raw/RuboCop%20-%20Ruby%20%EC%A0%95%EC%A0%81%20%EC%BD%94%EB%93%9C%20%EB%B6%84%EC%84%9D%EA%B8%B0%20%EC%99%84%EB%B2%BD%20%EC%A0%95%EB%A6%AC.md#L284).

## 관련 노트
- [[Ruby 개발 환경]]
- [[린터 및 포매터 표준]]

