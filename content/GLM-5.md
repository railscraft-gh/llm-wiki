지정된 작성 원칙 및 보강 규칙에 따라 개념 **GLM-5** (유형: `tool`)에 대한 한국어 위키 노트 작성을 완수하였습니다.

보강 및 생성된 노트 내용은 `/Users/railscraft/Obsidian/wiki/GLM-5.md` 파일에 업데이트되었습니다.

---

### [작성된 위키 노트 내용]

```markdown
---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
aliases: []
sources:
  - raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md
created: 2026-07-21
updated: 2026-08-27
---

# GLM-5

## 한 줄 정의
GLM-5는 Zhipu AI가 개발한 오픈소스 거대 MoE(Mixture of Experts) 언어 모델로, 리눅스 커널 수준의 복잡한 추론 및 다단계 에이전트(agent) 명령 실행을 고성능 로컬 사양에서 수행하도록 최적화된 도구(tool)이다.

## 핵심 요지
- GLM-5는 총 744B 매개변수 중 40B 매개변수를 활성화하여 작동하며, SWE-bench Verified에서 77.8%, Terminal-Bench 2.0에서 56.2%를 기록하여 Claude Sonnet 4.6 및 Claude Opus/Codex급 성능을 낸다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L115](file:///Users/railscraft/Obsidian/raw/7%20Local%20[[LLM]]%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L115).
- NVIDIA 가속기를 쓰지 않고 화웨이 어센드(Huawei Ascend) 국산 AI 가속 칩을 사용해 학습한 역사적인 플래그십 오픈소스 가중치(open-weights) 모델이며, MIT 라이선스를 준수하여 자유롭게 배포 가능하다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L121](file:///Users/railscraft/Obsidian/raw/7%20Local%20[[LLM]]%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L121).
- Claude Opus 4.6 대비 연산/API 비용이 6배(6x cheaper) 저렴하며, 높은 추론 품질과 함께 가장 낮은 수준의 환각률(hallucination rate)을 보여준다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L129](file:///Users/railscraft/Obsidian/raw/7%20Local%20[[LLM]]%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L129).

## 상세
- **아키텍처 및 요구 제약**: 활성 매개변수가 40B에 달하는 초거대 MoE 구조이기 때문에, 원활한 추론을 위해서는 최소 128GB 이상의 VRAM/RAM 결합 사양이 권장된다 (예: 192GB 통합 메모리를 장착한 Mac Studio 또는 멀티 H100 서버 환경) [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L123-L125](file:///Users/railscraft/Obsidian/raw/7%20Local%20[[LLM]]%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L123-L125).
- **관련 모델 (GLM-4.7)**: 상대적으로 요구 성능이 낮은 대안으로, 총 355B 중 32B 매개변수를 활성화한다. SWE-bench Verified에서 73.8%, Terminal-Bench 2.0에서 41%를 달성하여 64GB Mac 등 듀얼 GPU 사양에서 널리 활용된다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L141](file:///Users/railscraft/Obsidian/raw/7%20Local%20[[LLM]]%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L141).
- **에이전트 워크플로 및 CLI 호환성**: Ollama, llama.cpp, vLLM, SGLang 등의 로컬 추론 프레임워크와 결합 가능하며, Anthropic API 호환 엔드포인트를 통해 [[Claude Code]]나 [[Codex CLI]] 같은 [[에이전트]] 인터페이스에서 백엔드 도구로 손쉽게 전환할 수 있다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L210-L225](file:///Users/railscraft/Obsidian/raw/7%20Local%20[[LLM]]%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L210-L225).

## 예시
GLM-5 및 로컬 [[LLM]] 파이프라인 구성 예시:

1. **울트라/하이 등급 하드웨어 구성** [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L285-L290](file:///Users/railscraft/Obsidian/raw/7%20Local%20[[LLM]]%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L285-L290):
   - Mac Studio M4 Ultra (256GB 메모리) 혹은 듀얼 RTX 4090/5090 / 멀티 H100 환경에서 llama.cpp 또는 vLLM 프레임워크를 기반으로 GLM-5 가중치를 메모리에 상주시켜 활용.

2. **Claude Code 에이전트 CLI 연동 스크립트 예시** [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L210-L225](file:///Users/railscraft/Obsidian/raw/7%20Local%20[[LLM]]%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L210-L225):
```bash
# 1. Ollama 백엔드 서비스 실행
ollama serve

# 2. 로컬 GLM-5 모델 가중치 준비
ollama pull glm-5

# 3. Anthropic 호환 API 환경 변수 설정
export ANTHROPIC_BASE_URL="http://localhost:11434"
export ANTHROPIC_AUTH_TOKEN="ollama"

# 4. 로컬 GLM-5 백엔드로 Claude Code 실행
claude "refactor the authentication module to use JWT tokens and add tests"
```

## 충돌
- **API 연산 성능 제약(다운그레이드) 논란**: 커뮤니티 검증 결과에 따르면, Zhipu AI가 기업공개(IPO)를 고려하여 서버 연산 비용을 조정하기 위해 GLM-5 모델의 실제 API 성능을 의도적으로 미세하게 제약(다운그레이드)했다는 추측과 논란이 존재한다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L161-L165](file:///Users/railscraft/Obsidian/raw/7%20Local%20[[LLM]]%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L161-L165).
- **에이전트 벤치마크 점수 역전**: 1인 개발자의 독립 벤치마크(실제 GitHub 작업 70개 대상 테스트, $3,000 이상 투입) 결과, 양자화된 GLM-4.7(ELO 1572)이 실제 에이전트 코딩 작업에서 GLM-5 및 모든 Qwen 3.5 모델을 오히려 상회하는 기현상이 관찰되었다 [raw/7 Local LLM Families To Replace Claude_Codex (for everyday tasks).md#L161-L165](file:///Users/railscraft/Obsidian/raw/7%20Local%20[[LLM]]%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md#L161-L165).

## 관련 노트
- [[2026년 오픈소스 LLM 플랫폼 비교]]
- [[오픈소스 LLM 경제성과 벤더 종속성 해지]]
- [[MoE 아키텍처]]
- [[Claude Code]]
- [[Codex CLI]]
- [[Huawei Ascend]]

## 출처
- [raw/7 Local [[LLM]] Families To Replace Claude_Codex (for everyday tasks).md](file:///Users/railscraft/Obsidian/raw/7%20Local%20[[LLM]]%20Families%20To%20Replace%20Claude_Codex%20%28for%20everyday%20tasks%29.md)
```