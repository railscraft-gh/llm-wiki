---
type: tool
status: draft
core: false
tags:
- llm
- RAG
aliases:
- PageIndex
- 구조형 RAG
- 계층형 트리 RAG
- PageIndex-(구조형-RAG-탐색)
sources:
- raw/I Threw Out My Vector Database. RAG Got Way Better With PageIndex.md
created: 2026-07-15
updated: 2026-07-15
---
# PageIndex (구조형 [[RAG]] 탐색)

## 한 줄 정의

VectifyAI 팀이 개발한 오픈소스 도구로, 문서 텍스트를 청킹(chunking)하여 벡터 데이터베이스에 저장하는 대신 문서 고유의 계층 구조를 트리 인덱스로 빌드하여 [[LLM]]의 추론 능력으로 이를 탐색·검색하는 아키텍처.

## 핵심 요지

1. **유사도와 관련성의 괴리 극복**: 일반적인 벡터 [[RAG]]는 의미론적 [[임베딩]] 거리(코사인 유사도 등)에 의존하므로 언어적으로 가깝지만 문맥이 엉뚱한 단락(예: 의약품 효능 대 위험 요인)을 반환하는 한계가 있다. PageIndex는 구조적 인덱싱을 통해 실제 답변이 들어 있는 정확한 위치를 찾아낸다.
2. **청킹으로 인한 맥락 훼손 방지**: 문서를 수백 토큰 단위로 잘라 [[임베딩]]하는 과정에서 발생하는 맥락 소실을 예방한다. 원본 문서를 원형 그대로 보관한 채 구조 정보만 인덱스 트리로 생성한다.
3. **추론 기반 트리 탐색 및 투명성**: 최상위 노드부터 최하위 노드까지 [[LLM]]이 추론을 거쳐 필요한 페이지의 섹션 전체를 컨텍스트로 확보한다. 이로써 AI가 어떤 경로를 거쳐 해당 페이지에 도달했는지 투명하게 역추적(traceability)할 수 있다.

## 상세

### 2단계 작동 메커니즘
1. **인덱스 빌드**: 문서 전체의 구조(섹션, 서브섹션, 헤더, 논리적 그룹)를 분석하여 기계 판독 가능한 계층형 트리 인덱스 JSON을 구성한다. 각 노드는 요약본, 예상 질문 풀, 상호 참조 정보 등을 포함한다.
2. **트리 탐색**: 사용자가 질문하면 쿼리를 [[임베딩]]하여 유사도를 찾지 않고, [[LLM]]이 최상위 노드부터 차례로 경로를 추론해 내려간다. 최종 섹션에 도달하면 쪼개지지 않은 섹션 전체를 맥락으로 주입하여 답변을 도출한다.

### 금융 도메인 성능 지표
PageIndex는 정보의 계층과 상호 참조가 복잡한 금융 연간 보고서(Annual Report) 벤치마크 테스트에서 **98.7%의 검색 및 답변 정확도**를 달성했다. (출처: [VectifyAI PageIndex GitHub](https://github.com/VectifyAI/PageIndex))

## 예시

로컬 환경 빌드 및 PDF 문서 인덱싱 CLI 실행 예시:
```bash
# 리포지토리 복제 및 세팅
git clone https://github.com/VectifyAI/PageIndex.git  
cd PageIndex  
pip3 install --upgrade -r requirements.txt

# .env API 키 설정 후 PDF 인덱싱 구동
python3 run_pageindex.py --pdf_path /path/to/annual_report.pdf
```

## 관련 노트

- [[RAG 아키텍처 선택]]
- [[하이브리드 검색 인덱스]]
- [[RAG 퓨전]]

## 출처

- VectifyAI PageIndex GitHub Repository: [GitHub - VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)
- "I Threw Out My Vector Database. [[RAG]] Got Way Better With PageIndex." (Medium, 2026-07-15)
