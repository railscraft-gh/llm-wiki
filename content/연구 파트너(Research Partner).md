작업이 성공적으로 완료되었습니다. `raw/20 Things NotebookLM Can Do That Most People Never Try.md` 문서에서 핵심 개념을 추출하여 LLM Wiki에 Evergreen 지식 노트를 생성 및 반영하고 자동 배포까지 마쳤습니다.

### 1. 지식 노트 생성 및 수정
* **개념 노트 생성**: [연구 파트너 (Research Partner)](file:///Users/railscraft/Obsidian/wiki/연구%20파트너%20(Research%20Partner).md)
  * 도구에서 능동적인 파트너로의 패러다임 전환 요지 및 20가지 실무 중심의 심층 탐색 프롬프트(오해 검증, 회의주의 시선, 핵심 전제 파악 등)를 체계화했습니다.
  * 지식의 실무적 적용을 위한 교차 문서 분석(Cross-Reference) 및 핑퐁식 반복 피드백 원칙을 포함했습니다.
* **기존 노트 보강**: [NotebookLM](file:///Users/railscraft/Obsidian/wiki/NotebookLM.md)
  * 새로 정립한 `연구 파트너 (Research Partner)` 개념 노트로의 참조 링크를 걸고, 깨져 있던 기존 `[[RAG]]` 링크를 실존하는 [RAG 아키텍처 선택](file:///Users/railscraft/Obsidian/wiki/RAG%20아키텍처%20선택.md) 문서로 교체하여 무결성을 확보했습니다.

### 2. 색인 및 로그 반영
* **색인 갱신**: [index.md](file:///Users/railscraft/Obsidian/wiki/index.md)
  * `## Ingest 현황` 에 2026-07-29 날짜로 Ingest 이력을 추가하고, `## 기타 지식 노트` 리스트에 `[[연구 파트너 (Research Partner)]]`를 등록했습니다.
* **로그 기록**: [log.md](file:///Users/railscraft/Obsidian/wiki/log.md)
  * 2026-07-29 Ingest 항목(생성 및 수정 파일)과 `scripts/wiki-lint.py`를 활용한 린트 수행 결과를 기록했습니다 (검증 에러 0건).

### 3. Quartz 배포 완료
* [sync_quartz.sh](file:///Users/railscraft/Obsidian/scripts/sync_quartz.sh) 스크립트를 최종 실행하여 Quartz `content/` 폴더 동기화 및 GitHub v5 브랜치로의 자동 배포 푸시(Push)가 에러 없이 성공적으로 수행되었습니다.