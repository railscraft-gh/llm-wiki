요청하신 지식 개념 **'MinHash LSH 기반 중복 제거'** (유형: `workflow`)에 대한 고품질의 위키 노트를 모든 작성 원칙과 템플릿에 맞추어 생성을 완료했습니다.

해당 노트는 기존 위키 보관소 경로인 [/Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/MinHash LSH 기반 중복 제거.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/MinHash%20LSH%20%EA%B8%B0%EB%B0%98%20%EC%A4%91%EB%B3%B5%20%EC%A0%9C%EA%B1%B0.md)에 저장되었습니다.

---

### 작성된 위키 노트 미리보기

```markdown
---
type: workflow
status: draft
core: false
tags:
  - llm
  - rag
  - deduplication
  - data-preprocessing
aliases:
  - MinHash LSH 중복 제거
  - 근사 중복 제거
sources:
  - raw/Building a RAG Pipeline for 10M+ Documents With Near-Zero Hallucination.md
created: '2026-08-28'
updated: '2026-08-28'
---

# MinHash LSH 기반 중복 제거

## 한 줄 정의
MinHash와 Locality-Sensitive Hashing(LSH)을 결합하여 대규모 말뭉치(Corpus) 내 텍스트 간 유사도를 $O(N^2)$ 전수 대조 없이 선형에 가까운 시간 복잡도로 정밀 계산하고, 유사 복사본(Near-duplicate) 문서를 효율적으로 솎아내는 근사 데이터 정제 워크플로우이다.

## 핵심 요지
- **대규모 스케일링의 한계 극복**: 수 천만 건 이상의 대규모 RAG(Retrieval-Augmented Generation) 시스템에서 모든 문서 쌍을 대조하는 전수 비교(Pairwise Comparison) 연산은 $O(N^2)$ 시간 복잡도를 가져 실행이 불가능하다. MinHash LSH는 근사 자카드 유사도(Jaccard Similarity) 추정을 적용해 선형에 가까운 시간 복잡도로 중복을 검출한다. (raw/Building a RAG Pipeline for 10M+ Documents With Near-Zero Hallucination.md)
- **인덱스 연산 및 저장 비용 절감**: 유사도가 매우 높은 중복 단락을 색인 전에 사전 제거함으로써 임베딩 데이터베이스(예: LanceDB, Milvus 등)의 용량 팽창을 억제하고 운영 비용을 절감한다. (raw/Building a RAG Pipeline for 10M+ Documents With Near-Zero Hallucination.md)
- **검색 유효 범위(Retrieval Recall) 및 신뢰성 확보**: 동일하거나 거의 대등한 복사본 문단 여러 개가 검색 결과 상위권(Top-K)을 독점하는 현상을 차단한다. 이를 통해 다양하고 핵심적인 근거 문서가 검색 상위 지면에 노출되도록 유도하여 LLM 환각(Hallucination) 위험을 방지한다. (raw/Building a RAG Pipeline for 10M+ Documents With Near-Zero Hallucination.md)

## 상세
RAG 시스템에서 지식 말뭉치(Corpus)의 규모가 10M(1,000만 건) 이상으로 확대될 때, raw 데이터 텍스트에 포함된 거의 유사한 복사본들은 검색 유효성을 크게 떨어뜨린다. 어휘 기반 BM25나 밀집 벡터(Dense Vector) 검색 모두에서 동일 텍스트 변형들이 상위 K개 슬롯을 점유하면 모델이 정작 필요한 다각도의 정답 근거 문단을 참조하지 못한다.

MinHash LSH 기반 중복 제거 알고리즘은 다음 절차로 수행된다:

1. **Shingling (단어/문자 셰이딩)**: 입력 문장을 N-gram 단어(word shingle) 단위로 쪼개 집합 형태로 변환한다.
2. **MinHashing (시그니처 생성)**: 해시 함수 $k$개를 적용해 텍스트 집합을 고정된 길이의 MinHash 시그니처 벡터로 압축한다. 두 MinHash 시그니처가 일치할 확률은 두 텍스트 집합의 자카드 유사도 $J(A, B) = \frac{|A \cap B|}{|A \cup B|}$와 통계적으로 일치한다.
3. **Locality-Sensitive Hashing (버킷팅)**: MinHash 시그니처를 $b$개의 밴드(band)와 각 밴드당 $r$개의 행(row)으로 분할한다. 하나 이상의 밴드에서 완전히 동일한 해시 값을 가진 문서 쌍만 유사 후보(Candidate) 버킷에 할당하여 검색 대상 범위를 비약적으로 줄인다.
4. **유사 중복 필터링**: 설정된 자카드 유사도 임계값(예: 0.9) 이상인 문서들을 감지하여 단 1개만 인덱스 후보로 남기고 중복 복사본을 솎아낸다.

실제 20,007개의 Wikipedia 문단을 수집한 대규모 실험 파이프라인에서 MinHash LSH(유사도 임계치 0.9, 순열 수 64)를 적용한 결과, 19개의 근사 중복(near-duplicate) 문단과 1개의 파편화된 노이즈 문단을 감지 및 제거하여 최종 19,987개의 알짜배기 문서만을 정제해냈다 (raw/Building a RAG Pipeline for 10M+ Documents With Near-Zero Hallucination.md).

## 예시

Python의 `datasketch` 라이브러리를 활용해 Word Shingle 기반으로 MinHash LSH 유사 중복 제거 워크플로우를 구현한 구체적인 코드 예시는 다음과 같다.

```python
from datasketch import MinHash, MinHashLSH

class Deduper:
    """word shingle 기준 MinHash LSH 방식으로 유사 복사본 문서를 찾아 제거합니다."""

    def __init__(self, threshold: float = 0.9, num_perm: int = 64):
        self.threshold, self.num_perm = threshold, num_perm

    def _mh(self, text: str) -> MinHash:
        m = MinHash(num_perm=self.num_perm)
        words = text.split()
        for w in words:
            m.update(w.encode("utf-8"))
        return m

    def fit_transform(self, passages: list[dict]):
        lsh = MinHashLSH(threshold=self.threshold, num_perm=self.num_perm)
        kept, dropped = [], 0
        for p in passages:
            m = self._mh(p["text"])
            if lsh.query(m):              # 유사한 문서가 이미 필터에 걸려 유지되고 있는 경우
                dropped += 1
                continue
            lsh.insert(p["id"], m)
            kept.append(p)
        return kept, {"kept": len(kept), "dropped_near_dup": dropped}
```

## 충돌
현재 소스 문서 및 기존 지식 노드 간의 상충되는 주장은 발견되지 않았다. 다만 exact match 기반 해시 중복 제거([[해시 체크섬 기반 중복 파일 검사 및 제거]]) 방식은 완전 일치 파일만 잡는 반면, MinHash LSH는 문장 부호 차이나 오타·띄어쓰기 변형이 포함된 유사 문장(Near-duplicate)까지 정확하게 걸러낸다는 점에서 보완 관계를 형성한다.

## 관련 노트
- [[해시 체크섬 기반 중복 파일 검사 및 제거]]
- [[하이브리드 검색]]
- [[검색 증강 생성]]
- [[스마트 청킹]]
- [[Corrective RAG]]

## 출처
- raw/Building a RAG Pipeline for 10M+ Documents With Near-Zero Hallucination.md
```

### 주요 작업 사항 요약
1. **Frontmatter 규격 수용**: 지정된 YAML schema(`type`, `status`, `core`, `tags`, `aliases`, `sources`, `created`, `updated`)를 준수하여 작성했습니다.
2. **검증 가능한 지표 및 출처 표기**: 20,007개 문서 정제 수치 및 19개 중복 솎아냄에 대한 실증적 벤치마크 데이터를 소스 경로와 함께 명시했습니다.
3. **구체적인 코드 구현 추가**: 파이프라인에서 실제 동작 가능한 MinHash LSH 중복 제거 클래스 구현 예시를 포함했습니다.
4. **위키 네트워크 연동**: 기존 지식 보관소 내 [[해시 체크섬 기반 중복 파일 검사 및 제거]], [[하이브리드 검색]], [[검색 증강 생성]], [[스마트 청킹]], [[Corrective RAG]] 노드들과 연결을 맺었습니다.