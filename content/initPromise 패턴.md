---
type: concept
status: draft
core: false
tags:
- llm
aliases:
- initPromise Pattern
- initPromise-패턴
sources:
- raw/context-mode-README-정리.md
created: 2026-07-21
updated: 2026-07-21
---
## 한 줄 정의
initPromise 패턴은 비동기 register 런타임을 대기시키지 않는 에이전트 게이트웨이 플랫폼에서, 동기 함수 내에 비동기 초기화(async config) 프로미스를 감싸고 개별 훅 수신 시 이 프로미스의 해결(resolve)을 명시적으로 await하여 실행 순서를 제어하는 개발 디자인 패턴이다.

## 핵심 요지
- [[OpenClaw]] 등과 같은 에이전트 확장 플랫폼은 초기화 함수인 `register(api)`의 비동기 반환값을 처리하지 못하므로, async 키워드를 직접 붙여 등록하면 뒤이은 훅들이 동기화 타이밍 문제로 손실된다 [raw/context-mode-README-정리.md#L159-L160](file:///Users/railscraft/Obsidian/raw/context-mode-README-%EC%A0%95%EB%A6%AC.md#L159-L160).
- 따라서 동기 함수로 진입점을 유지하되 내부에서 비동기 프로미스를 미리 선언해 두고, 실제 훅 핸들러 내부에서 이를 첫 머리에 대기시키는 우회 구조를 취한다 [raw/context-mode-README-정리.md#L150-L157](file:///Users/railscraft/Obsidian/raw/context-mode-README-%EC%A0%95%EB%A6%AC.md#L150-L157).

## 상세
구체적인 구현 템플릿은 다음과 같다 [raw/context-mode-README-정리.md#L150-L158](file:///Users/railscraft/Obsidian/raw/context-mode-README-%EC%A0%95%EB%A6%AC.md#L150-L158):
```typescript
register(api): void {
  const initPromise = (async () => { 
    /* 비동기 셋업 작업 진행 */ 
  })();

  api.on("after_tool_call", async (e) => {
    await initPromise;  // 선행 초기화가 완전히 끝날 때까지 대기
    // 실제 훅 비즈니스 로직 실행
  });
}
```

## 예시
- **[[OpenClaw]] 어댑터 플러그인 로드**: better-sqlite3 DB와의 연결 설정 및 스키마 검증 비동기 루프를 동기 `register()` 내부의 initPromise로 처리하고, `before_tool_call` 등의 런타임 이벤트가 도달했을 때 비로소 DB 접근을 시도하도록 훅 순서를 맞추는 구현 [raw/context-mode-README-정리.md#L187-L192](file:///Users/railscraft/Obsidian/raw/context-mode-README-%EC%A0%95%EB%A6%AC.md#L187-L192).

## 충돌
- 만약 초기화 프로미스 내부의 비동기 연산 중 하나가 영구히 해결되지 못해 먹통이 될 경우, 어댑터가 도달하는 모든 훅 요청을 영구 대기 상태에 빠뜨려 전체 플랫폼 에이전트 세션의 데드락을 유발하므로 타임아웃 방어 코드가 함께 탑재되어야 한다.

## 관련 노트
- [[Context Mode]]
- [[Model Context Protocol]]

