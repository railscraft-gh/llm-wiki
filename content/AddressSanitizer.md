---
type: tool
status: draft
core: false
tags:
  - llm
  - security
  - agent
  - C
  - memory-safety
aliases:
  - ASAN
  - ASan
sources:
  - 'raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md'
created: 2026-08-28
updated: 2026-08-28
---

# AddressSanitizer

## 한 줄 정의
AddressSanitizer(ASAN)는 C/C++ 등 메모리 안전성이 보장되지 않는 언어로 작성된 프로그램의 메모리 접근 오류(버퍼 오버플로우, 해제된 메모리 재사용 등)를 동적으로 감지하여 비정상 종료 및 상세 스택 트레이스를 출력하는 메모리 오류 탐지 도구(sanitizer)이다.

## 핵심 요지
- **객관적 실증 판정관 역할**: 에이전트 기반 보안 파이프라인에서 [[LLM]]의 주관적인 추측이나 의견을 대체하여 취약점 존재 여부를 객관적 사실(ground truth)로 판정하는 [[결정론적 오라클]](deterministic oracle) 역할을 수행한다 (raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md).
- **다양한 메모리 오류 감지**: 힙 버퍼 오버플로우(`heap-buffer-overflow`), 스택 버퍼 오버플로우(`stack-buffer-overflow`), 해제 후 재사용(`heap-use-after-free`), 메모리 파라미터 중첩(`memcpy-param-overlap`) 등의 결함을 정확하게 포착한다 (raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md).
- **자동화된 크래시 로그 제공**: 오류 발생 시 비정상 종료 시그널(예: exit code 134)과 함께 `SUMMARY:` 헤더 및 호출 스택 프레임을 출력하여 에이전트가 근본 원인을 파악하고 보안 패치 피드백 루프를 수행할 수 있도록 돕는다 (raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md).

## 상세
AddressSanitizer는 컴파일 옵션(`-fsanitize=address`) 및 런타임 환경변수를 통해 프로그램에 주입된다. 자율형 보안 에이전트 파이프라인(Agentic Security Pipeline)에서 AddressSanitizer는 오탐(False Positive)을 극도로 낮추고 정밀도(precision)를 극대화하는 핵심 장치로 활용된다.

1. **에이전트 판단의 한계와 ASAN 오라클**:
   - 7B 규모의 경량 소형 모델(예: [[Qwen2.5-Coder-7B-Instruct]])이나 적대적 검증관(adversarial verifier) 에이전트는 프롬프트 편향에 의해 실제 물리적 크래시가 발생하는 취약점에 대해서도 95% 신뢰도로 가짜 오류(false positive)라고 오판하는 현상을 보인다 (raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md).
   - AddressSanitizer 환경하에 [[샌드박스(Sandbox)]] 컨테이너에서 개념 증명([[PoC]]) 바이너리를 직접 실행하여 `crashed=True` 조건(ASAN 감지 문구 포함 및 0/1 외의 exit code 반환)을 충족해야만 명확한 증거로 채택함으로써 에이전트의 판단 오차를 완벽히 통제한다.

2. **ASAN 로그 파싱 및 시그니처 요약**:
   - raw ASAN 디버그 로그는 수천 자에 달해 [[Context Window]]를 낭비시킬 수 있다.
   - 파이프라인은 정규식을 통해 `SUMMARY: AddressSanitizer: <crash_type>` 구문과 ASAN 런타임 프레임(`memcpy`, `__asan` 등)을 필터링한 유효 타겟 스택 프레임(`parse_alpha /work/canary.c:14`)을 추출해 단 한 줄의 고유 시그니처 튜플 `('heap-buffer-overflow', 'parse_alpha /work/canary.c:14')`로 요약한다 (raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md).

3. **[[패치 검증 사다리]](Patch Validation Ladder)**:
   - 보안 패치가 작성되었을 때, 기존 크래시를 일으키던 PoC를 재주입하여 AddressSanitizer 반응이 소멸하는지(`t1_poc_stops=True`)를 검증하는 오라클 평가에 사용된다.

## 예시

### 1. Docker 빌드 환경 설정 및 ASAN 주입
C 프로그램 빌드 시 GCC 컴파일 플래그로 AddressSanitizer를 활성화하고, 오류 발생 시 즉시 프로세스를 중단하도록 설정하는 방식이다 (raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md).

```dockerfile
FROM gcc:14
WORKDIR /work
COPY canary.c /work/canary.c
# -fsanitize=address 플래그를 통한 ASAN 주입
RUN gcc -O1 -g -fsanitize=address -fno-omit-frame-pointer -o /work/entry /work/canary.c
# ASAN 런타임 환경변수: 오류 발생 시 abort 및 스택 덤프
ENV ASAN_OPTIONS=abort_on_error=1:detect_leaks=0:halt_on_error=1
```

### 2. Python 샌드박스 오라클의 크래시 판정 및 파싱 코드
[[LLM]]의 텍스트 응답에 의존하지 않고, 샌드박스 실행 결과 생성된 AddressSanitizer 출력을 확인하여 크래시 여부를 판정하는 코드 예시이다 (raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md).

```python
import re

def detonate(container: str, poc_bytes: bytes, repro_cmd: str, poc_path: str = "/tmp/poc.bin", timeout: int = 30) -> dict:
    write_file_in(container, poc_path, poc_bytes)
    rc, so, se = exec_sh(container, repro_cmd, timeout=timeout)
    combined = (so + "\n" + se).strip()
    
    # AddressSanitizer 탐지 로그가 포함되어 있거나 프로세스가 비정상 종료(exit code != 0, 1)한 경우 물리적 크래시로 판정
    return {
        "exit_code": rc,
        "stdout": so,
        "stderr": se,
        "output": combined,
        "crashed": ("AddressSanitizer" in combined) or (rc not in (0, 1))
    }

def asan_excerpt(output: str, max_frames: int = 10) -> str:
    # 수천 줄의 ASAN 로그에서 핵심 요약과 소스코드 위치만 압축 추출
    summary = next((ln for ln in output.splitlines() if "SUMMARY:" in ln), "")
    # 타겟 소스 프레임 추출 로직 수행
    frames = project_frames(output, limit=max_frames)
    return (summary + "\n" + "\n".join(frames)).strip()
```

## 충돌
본 문서와 관련된 기술적 주장 간의 충돌은 존재하지 않음. AddressSanitizer는 결정론적 검증 기준(Ground Truth)으로 동작하며, [[LLM]] 모델의 주관적 추론 오판을 바로잡아주는 통제 오라클로서 일관되게 평가됨.

## 관련 노트
- [[샌드박스(Sandbox)]]
- [[LLM]]
- [[PoC]]
- [[Qwen2.5-Coder-7B-Instruct]]

## 출처
- `raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`