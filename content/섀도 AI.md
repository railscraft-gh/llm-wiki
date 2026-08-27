지정하신 개념 **'섀도 AI' (type: glossary)** 에 대해 작성 완료된 위키 노트의 전문입니다. 해당 내용은 기존 노트를 기반으로 보존 및 보강되어 [`llm-wiki/wiki/섀도 AI.md`](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/%EC%84%80%EB%8F%84%20AI.md) 파일에 반영 완료되었습니다.

---

```markdown
---
type: glossary
status: draft
core: false
tags:
  - llm
  - enterprise-ai
  - shadow-ai
  - governance
aliases:
  - Shadow AI
  - 섀도 AI 경제
  - shadow AI economy
sources:
  - raw/AI 겨울이 시작됐다-ko.md
created: 2026-08-27
updated: 2026-08-27
---

# 섀도 AI

## 한 줄 정의
기업 IT 부서의 정식 인가나 승인을 거치지 않고, 임직원들이 사비나 개인 계정을 이용해 임의로 업무에 활용하는 외부 [[생성형 AI]] 서비스 및 모델 현상.

## 핵심 요지
- **제품 경험 격차**: 회사가 고비용으로 구축·배포한 엔터프라이즈 AI 시스템보다 사적 소비자용 모델([[ChatGPT]], [[Claude Pro]] 등)의 성능과 사용자 경험이 뛰어날 때 발생한다 (raw/AI 겨울이 시작됐다-ko.md).
- **기업 파일럿 잔혹사와의 연관성**: 2025년 MIT NANDA 프로젝트 조사에 따르면, 기업 생성형 AI 파일럿의 95%가 측정 가능한 ROI를 생성하지 못했으며, 이는 직원들이 사내 승인 도구를 외면하고 섀도 AI를 선택하는 제품 실패 문제와 직접 연결되어 있다 (raw/AI 겨울이 시작됐다-ko.md).
- **데이터 보안 및 가시성 부재**: 보안 정책 외부에서 데이터가 전송되므로 사내 핵심 기술, 고객 개인정보, 독점 영업 암묵지 등이 외부 LLM 인프라로 유출될 위험을 초래한다.
- **[[AI 게이트웨이]] 및 사내 커스텀의 필요성**: 단순 통제나 금지만으로는 해결하기 어려우며, 사내 워크플로우에 최적화된 높은 수준의 UX 제공 및 승인된 프록시/게이트웨이를 통한 모니터링 체계 구축이 필수적이다.

## 상세
섀도 AI(Shadow AI)는 과거 기업 IT 분야에서 거론되던 '섀도 IT(Shadow IT)'의 생성형 AI 버전으로, 기술의 발전 속도가 기업 내부 인프라 도입 및 보안 검토 속도를 크게 앞지를 때 나타나는 전형적인 상전이(Phase Transition) 현상이다.

2025년 8월 21일 발표된 MIT NANDA 프로젝트의 *The GenAI Divide: State of AI in Business 2025* 연구에 따르면, 52명의 경영진 인터뷰, 153명의 리더 설문, 300개 공개 AI 배포 분석 결과 기업용 생성형 AI 배포의 95%가 실제 손익(P&L)에 의미 있는 영향을 주지 못했다 (raw/AI 겨울이 시작됐다-ko.md). IT 부서가 8만 달러 상당의 사내 솔루션을 도입했음에도 불구하고, 실제 현장 직원들은 이를 외면하고 개인 돈으로 소비자용 [[ChatGPT]]나 [[Cursor Pro]] 라이선스를 구매하여 업무에 활용하는 '섀도 AI 경제(shadow AI economy)'가 팽창했다 (raw/AI 겨울이 시작됐다-ko.md).

이 현상은 크게 세 가지 주요 동인에서 기인한다:

1. **엔터프라이즈 도구와 일반 제품 간의 성능 차이**: 과도한 샌드박싱이나 보안 절차로 인해 사내 AI 솔루션이 최신 퍼블릭 LLM에 비해 속도, 프롬프트 컨텍스트 윈도우(context window), 에이전틱 기능 면에서 성능이 현저히 떨어진다.
2. **기업 내부 개발 중심(In-house Build)의 한계**: 전문 벤더 도구를 활용하기보다 무리하게 인하우스 구축에 의존하면서 워크플로우와의 부적합이 발생한다 (raw/AI 겨울이 시작됐다-ko.md).
3. **ROI 지표의 왜곡**: 기업 예산이 실제 ROI 창출이 어려운 부서에 왜곡 투입되거나 파일럿 단계에서 사장되면서, 현장 실무자가 직접 생산성 확보를 위해 개별 도구를 찾아 쓰는 현상이 고착화된다.

섀도 AI를 차단하려는 시도는 직원들의 생산성 욕구와 충돌하므로, 기업은 단순 접근 금지가 아닌 [[AI 게이트웨이]] 도입, 사내 데이터 마스킹 자동화, 사내 모델의 UX 개선을 통해 정식 통합 채널로의 흡수를 도모해야 한다.

## 예시

### 1. 실무 시나리오: 개발팀의 개인 도구 우회 사용
- **상황**: A사는 사내 통합 인공지능 정책에 따라 자체 호스팅된 구형 LLM 기반 코딩 보조 시스템을 구축하고 전 사원에 배포함.
- **현상**: 그러나 속도가 늦고 복잡한 리팩토링 능력이 떨어지자, 백엔드 개발자 B씨는 개인 신용카드로 [[Cursor Pro]] 및 개인 OpenAI API 키를 결제함.
- **결과**: B씨는 사내 비공개 소스코드를 개인 계정 프록시로 전송하여 개발 속도를 3배 이상 올렸으나, 소스코드의 사외 유출 및 사내 공식 AI 프로젝트의 ROI 지표는 0%에 그치는 결과를 낳음 (raw/AI 겨울이 시작됐다-ko.md).

### 2. 코드 예시: 섀도 AI 미인가 요청 감지 및 트래픽 게이트웨이 파이프라인
기업 네트워크 트래픽 내에서 사비로 구매한 개인 API 키나 미인가 외부 LLM 엔드포인트 요청을 감지하여 [[AI 게이트웨이]]로 우회시키는 모니터링 스크립트 예시이다.

```python
import re
import requests

# 승인되지 않은 외부 LLM 엔드포인트 및 미인가 API 키 패턴 감지
UNAUTHORIZED_ENDPOINTS = [
    "https://api.openai.com/v1/chat/completions",
    "https://api.anthropic.com/v1/messages"
]

CORPORATE_GATEWAY_URL = "https://ai-gateway.internal.corp/v1/chat/completions"

def inspect_and_route_request(outgoing_request):
    """
    임직원 워크스테이션에서 발생하는 외부 LLM 트래픽을 검사하여
    섀도 AI 활용을 감지하고 정식 사내 AI 게이트웨이로 가이드/라우팅한다.
    """
    target_url = outgoing_request.get("url")
    headers = outgoing_request.get("headers", {})
    payload = outgoing_request.get("json", {})

    # 1. 개인 API 키 사용 또는 미인가 엔드포인트 직접 호출 감지 (섀도 AI)
    if target_url in UNAUTHORIZED_ENDPOINTS:
        print(f"[SHADOW AI DETECTED] Unauthorized direct LLM call to: {target_url}")
        
        # 2. 민감 정보 마스킹 및 사내 게이트웨이로 자동 라우팅
        sanitized_payload = sanitize_sensitive_data(payload)
        headers["X-Corporate-Dept"] = outgoing_request.get("user_dept", "Unknown")
        
        # 사내 승인된 AI 게이트웨이로 요청 경유
        response = requests.post(CORPORATE_GATEWAY_URL, json=sanitized_payload, headers=headers)
        return response.json()
        
    return requests.post(target_url, json=payload, headers=headers).json()

def sanitize_sensitive_data(payload):
    # 사내 민감 데이터(주민번호, API Secret 등) 마스킹 처리
    content = str(payload)
    content = re.sub(r'\b\d{6}-[1-4]\d{6}\b', '[REDACTED_SSN]', content)
    return {"prompt": content}
```

## 충돌
- **생산성 대 보안성의 갈등**: 보안 및 합리적 관리 부서는 섀도 AI를 심각한 데이터 유출 위험으로 규정하고 완전 차단을 주장하는 반면, 현장 지식 노동자는 사내 인프라의 낮은 ROI와 성능 저하로 인해 섀도 AI 없이는 목표 생산성을 달성할 수 없다고 반론한다.
- **파일럿 투자 실패 원인론의 충돌**: 경영진은 기술 적용의 성숙도 부족이나 6개월이라는 짧은 ROI 평가 기간을 원인으로 꼽지만, 현장에서는 무료 소비자용 도구가 사내 솔루션을 압도하는 '섀도 AI 경제'가 근본 원인임을 지적한다 (raw/AI 겨울이 시작됐다-ko.md).

## 관련 노트
- [[AI 겨울]]: 기업 AI 파일럿 95%의 ROI 부재 및 섀도 AI 경제 팽창이 AI 산업 전반의 투자 거품 조정(AI Winter)으로 연결되는 맥락을 다룸.
- [[AI 게이트웨이]]: 섀도 AI 현상을 흡수하고 보안 통제와 모니터링을 가능케 하는 기술적 대안 인프라.
- [[AI 훈련용 사내 업무 데이터 수집]]: 사내 승인되지 않은 외부 LLM 이용 시 발생하는 무단 데이터 수집 및 암묵지 유출 관련 노트.
- [[AI 보조 코딩]]: 개발자들이 개인 비용으로 Cursor나 Copilot을 구독하여 섀도 AI 형태로 사용하는 대표적 활용 영역.

## 출처
- `raw/AI 겨울이 시작됐다-ko.md`
```