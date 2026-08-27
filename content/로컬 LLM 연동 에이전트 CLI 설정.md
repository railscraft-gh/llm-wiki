`로컬 LLM 연동 에이전트 CLI 설정` 지식 개념에 대한 위키 노트를 성공적으로 작성하여 위키 데이터베이스에 추가했습니다.

### 생성된 노트 정보
- **파일명**: [로컬 LLM 연동 에이전트 CLI 설정.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/%EB%A1%9C%EC%BB%AC%20LLM%20%EC%97%B0%EB%8F%99%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20CLI%20%EC%84%A4%EC%A0%95.md)
- **유형**: `workflow` (Status: `draft`)
- **주요 내용**:
  1. **한 줄 정의 및 핵심 요지**: [[Ollama]] 등 로컬 추론 엔진을 백엔드로 연동하여 [[Claude Code]], Codex CLI, [[Aider]], [[OpenCode]] 등 AI 개발 에이전트 CLI가 로컬 LLM과 통신하도록 환경 변수 및 호환 레이어를 설정하는 워크플로우.
  2. **상세 및 하드웨어 등급 가이드**: Qwen 3.5, GLM-4.7/5, MiniMax M2.5, GPT-OSS 등 2026년 기준 오픈소스 모델 패밀리의 에이전트 코딩 벤치마크 지표(SWE-bench, Terminal-Bench) 및 VRAM/RAM 등급별(8GB, 16~24GB, 64GB+, 128GB+) 권장 모델과 컨텍스트 윈도우/VRAM 오프로딩/무한 루프 리스크 분석 명시.
  3. **구체적 코드 예시**: Ollama 백엔드를 통한 Claude Code (`ANTHROPIC_BASE_URL`) 및 OpenAI Codex CLI (`--oss`, `OPENAI_BASE_URL`) 실행 CLI 명령어 포함.
  4. **충돌 및 한계점**: GLM-4.7 대 GLM-5 간의 공식 벤치마크 대 실전 에이전트 코딩 ELO 점수 충돌 사례 및 Qwen3.5 MoE 구동 시 Ollama 무한 루프 보고 및 해결 대안 포함.
  5. **관련 노트 연동**: [[Ollama]], [[Claude Code]], [[AI 에이전트 제어 루프]], [[에이전트 스웜]], [[하이브리드 로컬 AI 하드웨어 셋업]], [[로컬 LLM 롱 컨텍스트 추론 병목]] 등과 상호 연결.