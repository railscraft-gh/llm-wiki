---
type: concept
status: draft
core: false
tags:
- macos
- terminal
- productivity
- workflow
aliases:
- 맥 터미널 팁
sources:
- raw/17 macOS Terminal Commands I Actually Use Every Week.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
macOS의 유료 유틸리티 앱들을 대체하거나, 복잡한 설정 과정을 단 한 줄의 터미널 명령어로 해결하여 시스템 생산성을 극대화하는 실용적인 명령어 모음입니다.

## 핵심 요지
- **caffeinate:** 시스템 잠자기 모드를 일시적으로 방지.
- **pbcopy/pbpaste:** 터미널 출력값을 클립보드에 바로 복사하거나 붙여넣기(생산성 필수).
- **시스템 관리:** DNS 캐시 초기화(`dscacheutil`), 배터리 사이클 확인, 업타임 확인 등 시스템 진단.
- **파일/설정 제어:** 스크린샷 위치 변경, 폴더 정렬 최적화, 대화 상자 영구 확장.
- **검색 및 메타데이터:** `mdfind`(커맨드 라인 Spotlight), `mdls`(파일 메타데이터 상세 분석).

## 상세
macOS의 기본 시스템 설정 메뉴는 사용 편의성을 위해 많은 기능을 감추거나 복잡한 경로를 거쳐야 합니다. 터미널 명령어는 이러한 제약에서 벗어나 시스템을 더 정밀하게 제어하게 해주며, 특히 클립보드 연동(`pbcopy`)이나 잠자기 방지(`caffeinate`) 같은 명령어는 작업 흐름을 끊지 않고 생산성을 유지하는 데 핵심적인 역할을 합니다.

## 관련 노트
- [[Bash_Productivity_Scripts]]
- [[Claude_Code_Skills]]

## 출처
- [raw/17 macOS Terminal Commands I Actually Use Every Week.md](file:///Users/railscraft/[[Obsidian]]/raw/17%20macOS%20Terminal%20Commands%20I%20Actually%20Use%20Every%20Week.md)
