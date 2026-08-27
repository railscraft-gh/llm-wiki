요청하신 **'mdls 메타데이터 조회'**(유형: `workflow`) 개념에 대한 위키 노트를 작성 규칙 및 템플릿에 맞추어 새로 작성하여 등록했습니다.

생성된 노트는 [mdls 메타데이터 조회.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/mdls%20%EB%A9%94%ED%83%80%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%A1%B0%ED%9A%8C.md) 파일에서 확인하실 수 있습니다.

---

### 주요 구현 요약

1. **Frontmatter 스키마 설정**:
   - `type`: `workflow`
   - `status`: `draft`
   - `sources`: `['raw/17 macOS Terminal Commands I Actually Use Every Week.md']`
   - `created` / `updated`: `2026-08-27`
2. **소개 및 상세 분석**:
   - macOS Spotlight 색인 엔진 기반 메타데이터(`kMDItem` 키-값 쌍) 출력 원리 정리
   - 원본 다운로드 URL(`kMDItemWhereFroms`), 이미지 해상도, 문서 작성자 등의 확장 메타데이터 검출 워크플로우 명시
   - `-name` 옵션을 통한 특정 메타데이터 선택 조회 기능 설명
3. **구체적 사용 예시 및 에이전트 연동 시나리오**:
   - 전체 메타데이터 속성 분석 (`mdls /path/to/file`)
   - 웹 다운로드 출처 URL 핀포인트 추적 (`mdls -name kMDItemWhereFroms ...`)
   - LLM/[[agent]]의 [[context window]] 확장을 위한 자동 출처 파싱 셸 스크립트 시나리오 제공
4. **위키 네트워크 연결**:
   - [[mdfind 명령어]], [[DNS 캐시 플러시]], [[caffeinate 명령어]], [[agent]], [[context window]] 등 관련 지식 개념 위키링크 상호 연결