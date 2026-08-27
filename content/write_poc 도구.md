제시해주신 소스 문서(`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`)를 바탕으로 **`write_poc 도구`** 개념에 대한 고품질 한국어 LLM Wiki 노트를 자율적이고 완전하게 작성 완료하였습니다.

작성된 위키 노트는 `llm-wiki/wiki/write_poc 도구.md` 경로에 저장되었으며, 모든 작성 원칙과 프론트매터 스키마를 철저히 엄수하였습니다.

---

### 📄 생성된 위키 노트 미리보기

```markdown
---
type: tool
status: draft
core: false
tags:
  - llm
  - agent
  - security
  - tool
aliases: []
sources:
  - raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md
created: '2026-08-28'
updated: '2026-08-28'
---

# write_poc 도구

## 한 줄 정의
`write_poc` 도구는 7B급 소형 언어 모델(SLM)이 이진 바이너리 데이터(Raw Binary Bytes)나 제어 문자를 직접 인코딩할 때 발생하는 정확도 한계를 극복하기 위해, 바이트 조각(Segment) 리스트를 정형 형식으로 명시하면 호스트 샌드박스가 이를 실제 개념 증명(PoC) 바이너리 파일로 안전하게 조립해 주는 에이전트 추상화 도구이다.

## 핵심 요지
- **소형 모델 한계 우회**: 7B 크기의 경량 모델은 임의의 이진 바이너리 데이터를 Base64 문자열로 오류 없이 인코딩하거나 텍스트 버퍼 오버플로우 페이로드 제어 문자를 오차 없이 직접 생성하기 어렵다 (`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`).
- **구조화된 조각 명세**: 바이트 값을 ASCII 텍스트 조각(`{"text": "..."}`) 또는 반복 바이트 조각(`{"value": 0-255, "count": N}`) 리스트로 추상화하여 모델이 직관적이고 안정적으로 바이너리 구조를 표현할 수 있게 돕는다 (`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`).
- **물리적 재현 증적 확보**: 호스트 환경에서 조립된 바이너리 파일(예: `/tmp/poc.bin`)을 AddressSanitizer(ASAN) 오라클 환경에서 직접 실행하여 `crashed=True` 상태 및 물리적 크래시 로그를 이끌어내는 핵심 매개체로 동작한다 (`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`).

## 상세
자율 보안 에이전트 파이프라인에서 탐색 에이전트(Discovery Agent)는 소스 코드의 취약성 위치를 파악할 뿐만 아니라 실제로 대상 바이너리를 비정상 종료(Crash)시키는 개념 증명(PoC) 페이로드를 생성해야 한다 (`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`).

### 도입 배경 및 작동 방식
1. **문제점**: 소형 모델(예: Qwen2.5-Coder-7B-Instruct)에 단순 `write_file` 도구만 부여하면, 이진 페이로드 조립 시 Base64 인코딩 오차나 바이트 오버플로우 길이 계산 미스로 인해 재현 가능한 PoC를 생성하지 못하고 환각(Hallucination)에 빠지기 쉽다 (`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`).
2. **해결책 (`write_poc`)**: 호스트 레벨에서 세그먼트 배열을 해석해 실제 바이너리를 만드는 도구를 제공한다. 에이전트는 "문자 A를 배치한 뒤, 65번 바이트(0x41)를 200번 반복하라"와 같은 정형화된 JSON 입력 구조만 전달하면 된다 (`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`).
3. **샌드박스 연동**: 조립된 바이너리는 격리된 도커(Docker) 컨테이너 내의 가상 임시 디렉터리(`/tmp/poc.bin`)에 기록되며, 이후 `detonate()` 오라클 검사기를 통해 정밀하게 검증된다 (`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`).

### 파이프라인 내 6대 에이전트 도구 인터페이스
에이전트가 호출할 수 있는 도구 세트는 6가지로 엄격히 제한되며, `write_poc`는 이 중 특수 페이로드 조립을 전담한다 (`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`).
- `list_dir`: 샌드박스 내 파일 구조 확인
- `read_file`: UTF-8 소스 파일 읽기
- `grep`: 정규식 코드 검색
- `write_file`: 일반 파일 기록 (base64)
- `run_in_sandbox`: 샌드박스 셸 명령어 실행
- `write_poc`: 정형화된 바이너리 구조 조각 기반 파일 작성

## 예시
### 1. 도구 구현 코드 예시 (Python)
```python
def tool_write_poc(container: str, segments: list, path: str = "/tmp/poc.bin") -> str:
    # 각 세그먼트는 ASCII 데이터 {"text": "ABC"} 또는 N번 반복되는 특정 바이트 값 {"value": 0-255, "count": N}으로 기술한다.
    # 이는 소형 7B 모델이 비교적 정확하고 일관되게 생성할 수 있는 형태다.
    data = bytearray()
    try:
        for seg in segments:
            if "text" in seg:
                data += str(seg["text"]).encode("latin-1", "replace")
            else:
                data += bytes([int(seg["value"]) & 0xFF]) * int(seg.get("count", 1))
    except (TypeError, ValueError, KeyError) as e:
        return f"실패: 잘못된 구조 표현 ({e})"
    write_file_in(container, path, bytes(data))
    return f"총 {len(data)} 바이트가 {path} 경로에 작성되었습니다. 헤더(16진수): {bytes(data[:16]).hex()}"
```
(`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`)

### 2. 에이전트 활용 시나리오 (Qwen2.5-Coder-7B-Instruct 사용)
`parse_alpha` 파서의 힙 버퍼 오버플로우(heap-buffer-overflow) 취약점을 재현하기 위해 에이전트가 `write_poc`를 호출하는 예시:

- **에이전트 요청 (JSON Action)**:
  ```json
  {
    "thought": "parse_alpha 파서는 첫 바이트로 'A'를 받고, 두 번째 바이트(claimed 크기)로 255(0xff)를 지정한 후 8바이트 버퍼를 초과하는 페이로드를 전달해야 힙 오버플로우가 발생한다.",
    "action": "write_poc",
    "args": {
      "path": "/tmp/poc.bin",
      "segments": [
        {"text": "A\xff"},
        {"value": 0, "count": 40}
      ]
    }
  }
  ```
- **호스트 물리 검증 결과**:
  `detonate()` 함수가 조립된 `/tmp/poc.bin`을 주입하여 실행한 결과, `exit_code=134`, `crashed=True`, `AddressSanitizer: heap-buffer-overflow` 로그를 수집하여 크래시 입증에 성공한다 (`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`).

## 충돌
- **모델의 자율 생성 방식 vs 추상화 도구 래핑**: 소형 모델에 바이너리 직접 생성 권한(Raw Byte Output/Base64)을 부여하는 것이 에이전트의 자율성을 높일 것으로 기대되었으나, 실제 실험에서는 포맷 오차 및 문법 파괴로 인해 취약점 재현 성공률이 급격히 저하되었다. 따라서 도구 차원에서 세그먼트 기반 추상화를 제공하는 것이 성능과 신뢰도를 확보하는 핵심 경로임이 입증되었다 (`raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`).

## 관련 노트
- [[AI 에이전트 제어 루프]]
- [[LLM 도구 호출]]
- [[AI 에이전트 행동 제약 4원칙]]
- [[샌드박스 격리 실행 환경]]

## 출처
- `raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md`
```

---

### 주요 반영 사항 요약
1. **Frontmatter**: 요청하신 YAML frontmatter 구조(`type: tool`, `status: draft`, `sources`, `created`, `updated` 등)를 정확하게 반영하였습니다.
2. **출처 명시**: 본문 내 명확한 지표, 수치, 구현 논리가 언급된 위치마다 `(raw/Building an Agentic Security Pipeline That Finds, Proves, and Patches Vulnerabilities.md)` 형태의 인용을 포함시켰습니다.
3. **구체적 예시**: Python 도구 구현 코드(`tool_write_poc`), Qwen2.5-Coder-7B-Instruct 사용 모델명, 그리고 JSON 액션 요청 및 ASAN 물리 검증 결과(`exit_code=134`, `crashed=True`) 시나리오를 포함했습니다.
4. **위키링크 연동**: 기존 위키 지식 체계와 연결될 수 있도록 [[AI 에이전트 제어 루프]], [[LLM 도구 호출]], [[AI 에이전트 행동 제약 4원칙]], [[샌드박스 격리 실행 환경]] 등의 Obsidian 링크를 배치했습니다.