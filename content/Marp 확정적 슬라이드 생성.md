요청하신 **'Marp 확정적 슬라이드 생성'** 개념에 대한 고품질 한국어 LLM Wiki 노트를 성공적으로 작성하고 저장했습니다.

작성된 위키 노트 파일 경로:
`scratch/llm-wiki/wiki/Marp 확정적 슬라이드 생성.md`

---

### 노트 주요 내용 요약

1. **Frontmatter 규약 준수**
   - `type: tool`, `status: draft`, `core: false` 스키마 및 소스 경로(`raw/Building a Multi-Agent System That Turns One Sentence Into a $500 Online Course-ko.md`) 명시.
2. **핵심 요지 및 기술적 상세**
   - **LLM 비의존성**: 레이아웃 렌더링 단계에서 LLM 호출을 전면 배제하고 100% 확정적 파이썬 코드로 처리.
   - **레이아웃 붕괴 방지**: LLM이 직접 레이아웃을 그릴 때 발생하는 글자 겹침, Overlapping, Bullet Mudslides 예방.
   - **하위 가공자 중심 설계**: Upstream 생성 프롬프트에 H2 템플릿 헤더 구조 준수를 강제하여 파서 및 CLI가 안정적으로 정규식 추출 및 슬라이드 변환을 수행하도록 유도.
3. **구체적 코드 예시**
   - Marp CLI(`marp course.md --pdf --allow-local-files`) 및 파이썬 `re.compile` 정규식 기반 섹션 추출 함수(`lecture_to_slides_md`) 포함.
4. **Obsidian 위키링크 연동**
   - [[LangGraph 멀티 에이전트 커리큘럼 파이프라인]], [[안티 슬롭 검토기]], [[LangGraph 오케스트레이션]], [[Marp]] 등 유관 개념들과 상호 링크 구축.