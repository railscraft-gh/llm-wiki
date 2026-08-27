지정해주신 소스 문서(`raw/Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko.md`)를 분석하여 **'Gemini Live API'** 위키 노트를 성공적으로 작성했습니다.

작성된 위키 노트는 `scratch/llm-wiki/wiki/Gemini Live API.md` 경로에 저장되었으며 주요 요약은 다음과 같습니다:

1. **지정 Frontmatter 스키마 준수**:
   - `type: tool`, `status: draft`, `core: false`, 태그 및 소스 파일 경로(`raw/Build a Real-Time Voice Agent in 30 Minutes (With Interruption Handling)-ko.md`), 생성/수정일(`2026-08-28`)이 정확하게 입력되었습니다.
2. **핵심 구조 및 내용 구성**:
   - **한 줄 정의**: 서버 측 VAD 및 양방향 스트리밍 기반 실시간 음성 상호작용 API로서의 정의 명시.
   - **핵심 요지**: 기존 STT-LLM-TTS 직렬 연결 파이프라인의 한계와 네이티브 양방향 오디오 모델(`gemini-3.1-flash-live-preview`), 서버 측 VAD 기반 음성 중단(Interruption) 처리 및 오디오 규격 정리.
   - **상세 분석**: 불도저형/과민반응형 오류 분석, 16kHz/24kHz PCM 규격 및 비동기 `asyncio` 오디오 I/O 처리, 세션 타임아웃(15분) 및 복원, 지터 버퍼, 400ms 이내 도구 처리 권장 사항 등 기술적 한계/고려사항 기재.
   - **구체적 코드 예시**: `google-genai` SDK, `sounddevice`, `LangChain` 도구를 활용한 오디오 입출력 및 음성 중단 버퍼 비우기(`speaker_queue` flush) 구현체 수록.
   - **출처 표기 및 관련 노트 연동**: 주요 수치 및 지표에 대해 원본 출처 파일 경로를 명시하고 기존 위키 노트([[LLM 도구 호출]], [[구조화된 출력 및 도구 호출]], [[에이전트 자율 루프]])와 Obsidian 위키링크로 연동.