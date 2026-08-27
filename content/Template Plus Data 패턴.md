지정해주신 소스 문서(`raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md`)를 바탕으로 **Template Plus Data 패턴**에 대한 고품질 한국어 위키 노트를 작성하여 wiki 경로[`Template Plus Data 패턴.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Template%20Plus%20Data%20%ED%8C%A8%ED%84%B4.md)에 반영했습니다.

---

### 📝 생성된 위키 노트 내용 개요

```markdown
---
type: workflow
status: draft
core: false
tags:
  - llm
  - agent
  - format
  - ui
aliases:
  - Template-Plus-Data Pattern
  - 템플릿 플러스 데이터 패턴
sources:
  - 'raw/Anthropic 엔지니어가 마크다운을 버리라고 말했다. 그 말의 진짜 뜻.md'
created: 2026-08-28
updated: 2026-08-28
---

# Template Plus Data 패턴

## 한 줄 정의
Template Plus Data 패턴은 고정된 시각 레이아웃 및 상호작용 틀(HTML/UI Template)과 동적으로 변화하는 값(JSON Data Payload)을 분리하여 생성하고 전달함으로써, AI 산출물의 리뷰 용이성(Diff Cleanliness)과 보안·성능 오버헤드를 최적화하는 산출물 구조화 워크플로우이다.

... (이하 본문)
```

### 💡 주요 반영 포인트
1. **규정 스키마 준수**: `type: workflow`, `status: draft`, `sources`, `created`/`updated` 날짜 등 지정된 스키마를 엄격히 준수했습니다.
2. **검증 가능한 지표 수치 포함 및 소스 표기**: Markdown 대비 HTML 출력 시 수반되는 토큰 수치(Markdown ~3,000, Lean HTML ~7,200, Full HTML ~14,400 등 약 3~5배 오버헤드)를 명시하고 출처를 기재했습니다.
3. **구체적 예시 구현**: PR 코드 리뷰 리포트를 생성할 때 Agent가 출력하는 Dynamic Data Payload (JSON)와 Static Template (HTML/JS)의 구조화 렌더링 예시 코드를 포함했습니다.
4. **상호작용성 및 충돌 명시**: Team HTML의 자유로운 레이아웃 생성 접근법과 비교해 Template Plus Data 패턴이 가지는 Git Diff 최적화, XSS 방지 보안 장점에 대한 논의 구조를 충돌 섹션에 정제하여 포함했습니다.
5. **Obsidian 위키링크 연동**: `[[AI Output 포맷 결정 트리]]`, `[[AI 생성 HTML 보안 위험]]`, `[[Markdown source HTML artifact 패턴]]`, `[[Git]]` 등 유관 개념들과 상호 연결되도록 구성했습니다.