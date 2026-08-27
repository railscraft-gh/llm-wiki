요청하신 **양자 원클래스 SVM** 개념 노트 작성을 완료하였습니다.

작성된 위키 노트 파일 위치:
`scratch/llm-wiki/wiki/양자 원클래스 SVM.md`

### 요약 및 주요 수록 내용
1. **Frontmatter 및 메타데이터**:
   - `type: tool`, `status: draft`, `sources: ['raw/Building an Agentic Quantum Computing System.md']` 및 필수 스키마 규칙을 완벽하게 준수하여 작성되었습니다.
2. **핵심 정의 및 수학적 구조**:
   - 사전 계산 커널(`kernel="precomputed"`) 형태의 양자 피적합 커널(Fidelity Kernel) 그람 행렬 수신 구조와 마이너스 부호 반전 이상 점수 수식($s(x) = -f(x)$)을 정밀하게 명시했습니다.
3. **벤치마크 지표 및 검증 데이터**:
   - KDD 네트워크 침입 탐지 벤치마크 (ROC-AUC **0.9916**, AP **0.9562** 대 클래식 RBF OCSVM **0.9580** / AP **0.5726**) 및 CNOT 게이트 얽힘 제거 시 성능 하강(-0.285) 수치를 소스 경로(`raw/Building an Agentic Quantum Computing System.md`) 표기와 함께 서술했습니다.
4. **구체적인 코드 예시 및 상호 연동**:
   - `consumes = "kernel"` 사양을 충족하는 `QuantumOCSVM` 클래스 구현체 및 샘플 단위 검출 실사 데이터를 포함하였으며, Obsidian 연동용 위키링크(`[[양자 커널]]`, `[[피적합 커널]]`, `[[양자 얽힘]]`, `[[AI 에이전트 제어 루프]]`, `[[LLM 도구 호출]]`)를 설정했습니다.