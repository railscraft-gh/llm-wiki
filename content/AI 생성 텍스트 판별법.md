---
type: concept
status: draft
core: false
tags:
- llm
- ai-writing
aliases:
- AI 글쓰기 탐지
- AI 생성 글 판별
- AI-생성-텍스트-판별법
sources:
- raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md
created: 2026-07-21
updated: 2026-07-21
---
# AI 생성 텍스트 판별법 (AI Text Detection)

## 한 줄 정의
AI 생성 텍스트 판별법은 미사여구나 구두점 같은 스타일 분석의 한계를 극복하고, 물리적인 한계를 넘어서는 생산량 및 대화식 사후 검증(Accountability)을 통해 작성자가 생성형 AI를 과도하게 의존했는지를 식별하는 체계이다.

## 핵심 요지
- **텍스트 스타일 분석의 한계**: 구두점, 미사여구, 매끄러운 템포 등은 인류가 수 세기 동안 다듬어 온 보편적인 글쓰기 도구이므로 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L17](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L17), 단순히 글의 미학적 구조나 문장 장식을 근거로 AI 사용 여부를 가려내는 것은 오해를 낳기 쉽다 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L29](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L29).
- **생산량 기반 판별 (물리적 한계)**: 인간 창작자가 감당할 수 있는 생산 범위를 비현실적으로 초과하는 경우(예: 주당 10만 단어 이상 발행 등) AI의 도움을 받았을 확률이 가장 크다 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L43](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L43).
- **실시간 소통을 통한 검증**: 텍스트 밖으로 대화가 확장되었을 때, 자신의 글에 담긴 논리나 구체적인 사료에 관해 겉돌거나 설명하지 못하는 현상은 가장 강력한 AI 탐지의 단서가 된다 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L57](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L57).

## 상세
### 비현실적 생산량의 수학적 분석
- 일반적인 전업 온라인 작가가 머리에 과부하 없이 하루에 집중해 쓸 수 있는 분량은 상태가 좋은 날 기준 약 2,000단어 내외이다 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L31](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L31). 
- 그러나 직장 등의 본업을 병행하면서 매일 2,500단어의 뉴스레터를 5개씩 소화하거나 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L35](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L35) 일주일 만에 약 10만 단어(책 한 권 분량)를 혼자서 발행해 올리는 경우 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L43](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L43), 이는 물리적 시간의 제약을 뛰어넘는 것이므로 생성형 AI 사용을 가리키는 유력한 간접 정황이다 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L49](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L49).

### 대화와 질문을 통한 사후 신뢰성 증명
- 텍스트 분석에만 매달리는 대신 독자 채팅방, 라이브 질의응답, 팟캐스트 등 직접 소통 채널을 구성하는 것이 신뢰성 증명에 효과적이다 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L67](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L67).
- 대충 엮어낸 AI 글은 질의응답 시 구체성 결여와 횡설수설 등으로 밑천이 쉽게 드러나기 때문에 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L71](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L71), 사후 책임을 지게 하는 소통 시스템 자체가 AI 남용의 억제 장치로 작동한다.

## 예시
- **역사 작가의 말실수 사례**: 책 자체는 설득력 있고 자료조사가 훌륭했지만, 질의응답 시 6장의 구체적 사례를 설명해달라는 요청에 책의 내용과 유리된 채 겉도는 대답만 일관해 AI 대필 의혹을 샀다 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L55-L57](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L55-L57).

## 충돌
- **미학적 완성도 vs AI 의심**: 글을 정돈하여 매끄럽게 잘 쓸수록(F. Scott Fitzgerald가 1936년에 쓴 *The Crack-Up*의 문장과 같이 높은 지성을 닮을수록 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L23](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L23)), AI가 학습한 대다수의 정형 패턴과 겹치게 되어 오히려 독자들에게 AI 글로 몰아세워지는 기이한 역풍을 겪게 된다 [raw/AI로 몰래 쓴 글을 가려내는 명백한 방법들.md#L29](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md#L29).

## 관련 노트
- [[가짜 지성의 징후와 자기 정당화]]
- [[한글 AI 번역투 탐지 및 윤문 워크플로]]
- [[AI 경제에서 스킬만으로는 부족하다]]

## 출처
- [AI로 몰래 쓴 글을 가려내는 명백한 방법들](file:///Users/railscraft/Obsidian/raw/AI%EB%A1%9C%20%EB%AA%B0%EB%9E%98%20%EC%93%B4%20%EA%B8%80%EC%9D%84%20%EA%B0%80%EB%A0%A4%EB%82%B4%EB%8A%94%20%EB%AA%85%EB%B0%B1%ED%95%9C%20%EB%B0%A9%EB%B2%95%EB%93%A4.md)
