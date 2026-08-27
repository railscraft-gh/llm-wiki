요청하신 지정 개념 [`DESIGN.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/DESIGN.md.md)에 대한 고품질의 위키 노트 작성을 자율적으로 완수하였습니다.

### 주요 보강 및 반영 사항 요약

1. **스키마 및 YAML Frontmatter 업데이트**
   - `type: concept`, `status: draft`, `updated: 2026-08-28` 스키마 규격을 충실히 반영하고 신규 소스 `raw/AI로_만든_제품이_안_팔리는_이유.md`를 `sources` 및 `## 출처` 섹션에 병합했습니다.
2. **AI 슬롭(AI Slop) 방지 및 디자인 가치 매핑**
   - AI 코딩 환경에서 코드가 차별점이 되지 못하는 이유, 0.5초~5초 내에 사용자가 알아채는 디자인 느낌 및 [[AI 슬롭.md]](AI Slop) 발생 원인과 해결책으로서의 `DESIGN.md` 단일 진실 공급원(Source of Truth) 역할을 상밀히 서술했습니다.
3. **한국어 타이포그래피 및 리소스 디테일 추가**
   - 한국어 UI 디자인 환경에 최적화된 **원티드 몽타주(Wanted Montage)**, 아이콘 톤앤매너 고정을 위한 **Coolicons**, Pretendard 폰트 설정 시 필수적인 자간(`letter-spacing: -0.02em`) 및 행간(`line-height: 1.5`~`1.6`) 수치 지표와 소스 파일 명시를 체계적으로 결합했습니다.
4. **클론 코딩 기반 5단계 구축 워크플로우 명시**
   - [[Antigravity.md]] (Gemini Pro 3.1 High) 등의 에이전트를 활용한 30분 클론 코딩, 규칙 역추출(Reverse extraction), SML 메뉴판식 단순화, `DESIGN.md` 이식 및 프롬프트 강제화 5단계 파이프라인을 구체적 예시 및 충돌 섹션과 연계하여 보완했습니다.
5. **관련 노트 및 위키 상호 연결**
   - [[CLAUDE md 영구 규칙서 워크플로]], [[Claude Code.md]], [[Antigravity.md]], [[AI 슬롭.md]], [[AI 기반 디자인 워크플로우]], [[AI 시대 디자이너의 고차원적 가치 및 전략적 판단.md]], [[Agent Skills 표준]] 등 교차 참조 위키 링크를 자연스럽게 연동했습니다.