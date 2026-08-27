요청해주신 개념 **'프로덕션 RAG 가드레일'** (유형: `workflow`)에 대한 신규 지식 위키 노트를 모든 작성 원칙과 스키마 규격에 맞춰 성공적으로 작성했습니다.

작성된 위키 노트 파일 위치: [/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/프로덕션 RAG 가드레일.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/%ED%94%84%EB%A1%9C%EB%8D%95%EC%85%98%20RAG%20%EA%B0%80%EB%93%9C%EB%A0%88%EC%9D%BC.md)

---

### 📝 생성된 위키 노트 주요 내용 요약

1. **Frontmatter 및 메타데이터**:
   - `type: workflow`, `status: draft`, `sources: ['raw/5단계 난이도로 알아보는 RAG 시스템 구축 및 구현 가이드.md']` 등 지정된 스키마 준수.
2. **핵심 분석 및 상세 내용**:
   - **신뢰도 스코어 기반 차단 (`min_score`)**: 검색 유사도/리랭킹 스코어가 임계치 미만일 때 오답 작성을 가로채고 거부/재질의 메시지를 반환.
   - **메타데이터 & 시점 검증**: 구버전 정책과 신버전 정책의 혼재 시 최신 문서 우선 반영 및 주의사항 플래그 첨부.
   - **Strict Grounding 시스템 프롬프트**: 컨텍스트 외 추론 금지 조항 주입.
   - **회고적 평가 파이프라인 (Evaluation Benchmark)**: 50개 이상의 Ground Truth 질의-답변 세트를 기반으로 검색 정밀도 및 답변 정확도 자동화 추적.
3. **구체적 예시 파이썬 코드 및 테스트 세트 구현**:
   - `guarded_rag` 함수 예시 코드와 `test_cases` 평가 데이터 세트 포함.
4. **검증 지표 출처 표기**:
   - 수치, 에어캐나다 사례 등 인용 구문에 출처 문서를 명확히 기재 (`raw/5단계 난이도로 알아보는 RAG 시스템 구축 및 구현 가이드.md`).
5. **Obsidian 위키링크 연동**:
   - `[[RAG]]`, `[[Naive RAG]]`, `[[스마트 청킹]]`, `[[하이브리드 검색]]`, `[[리랭킹]]`, `[[AI 환각 현상]]`, `[[출처 근거 제시]]` 등 7개 연관 위키 노트 연동.