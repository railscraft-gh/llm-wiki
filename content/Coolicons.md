요청하신 **Coolicons**에 대한 고품질 한국어 위키 노트를 성공적으로 작성하여 위키 저장소([Coolicons.md](file:///Users/railscraft/.gemini/antigravity-cli/scratch/llm-wiki/wiki/Coolicons.md))에 저장하였습니다.

---

### 작성된 위키 노트 내용

```markdown
---
type: tool
status: draft
core: false
tags:
  - llm
  - ui
  - design-system
  - icon-library
aliases:
  - 쿨아이콘즈
sources:
  - raw/AI로_만든_제품이_안_팔리는_이유.md
created: 2026-08-28
updated: 2026-08-28
---

# Coolicons

## 한 줄 정의
단일 디자이너의 일관된 조형 규칙 하에 제작되어, [[AI 슬롭]] UI 특유의 양산형 느낌을 탈피하고 서비스 고유의 깔끔하고 통일된 Visual Identity를 유지하도록 돕는 오픈소스 아이콘 라이브러리.

## 핵심 요지
- **AI 슬롭(AI Slop) 탈피**: 바이브 코딩 및 AI 기반 생성 UI 환경에서 무분별하게 기본 채택되는 Lucide React 등의 범용 아이콘 대신 독자적이고 정돈된 브랜드 느낌을 연출한다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`).
- **다양한 스타일 및 정교한 굵기 제어**: Line, Duotone, Duo Color의 3가지 스타일과 얇음/보통/굵음의 3단계 stroke weight 조절 옵션을 제공하며, 부드러운 코너 라운딩(Corner Rounding) 처리가 특징이다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`).
- **디자인 시스템 완성도 향상**: 다양한 출처의 무료 아이콘 혼용으로 인한 비주얼 파편화를 방지하며, 핵심 아이콘 30여 개를 선별하여 하드 폴더로 관리할 경우 인터페이스 전반의 톤앤매너를 가다듬을 수 있다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`).

## 상세

### AI 코딩 시대의 아이콘 선택 중요성
Claude Code, Antigravity Gemini 3.1 Pro High 등 AI 코딩 도구의 발달로 앱 프로토타이핑 및 개발 속도는 10초~1시간 단위로 비약적으로 단축되었다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`). 하지만 AI 모델은 학습 데이터의 평균치로 귀결되는 특성을 보여, 명확한 가이드라인 없이 생성된 결과물은 대부분 어디서 본 듯한 비주얼인 '[[AI 슬롭]]' 현상을 드러낸다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`).

아이콘은 UI 사용자 경험에서 0.5초~5초 내에 완성도를 직관적으로 판단하게 만드는 핵심 디테일 요소이다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`). 여러 사이트에서 무작위로 수집한 무료 아이콘을 혼용하면 스트로크 두께, 캡/조인 처리, 라운딩 값 등의 정합성이 깨져 전체 제품이 저렴해 보이는 원인이 된다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`).

### Coolicons의 기술적 및 디자인적 특징
1. **단일 디자이너 체계의 일관성**: 한 명의 디자이너가 통일된 그리드 및 스타일 원칙으로 제작하여 라이브러리 전반의 visual harmony가 극대화되어 있다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`).
2. **3가지 스타일 팩**:
   - **Line**: 명확한 선 중심의 깔끔한 그래픽.
   - **Duotone**: 명암 및 투명도 대비를 이용한 트렌디한 2톤 렌더링.
   - **Duo Color**: 두 가지 엑센트 컬러 조합을 통한 시각적 강조.
3. **3단계 굵기 및 코너 라운딩**: 얇은 굵기, 보통 굵기, 굵은 굵기의 3가지 Weight 옵션과 부드럽게 연마된 코너 라운딩으로 정교한 타이포그래피 및 레이아웃 조화를 지원한다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`).

### 디자인 시스템 및 AI 워크플로우 내 활용 전략
[[미니 디자인 시스템]] 구축 5단계 중 4단계에 해당하는 파이프라인 전략은 다음과 같다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`):
- 서비스 개발 시 Coolicons에서 사용할 핵심 아이콘 30개 정도를 엄선한다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`).
- 선택한 아이콘 자산을 프로젝트 내 하드 폴더(예: `src/assets/icons/` 또는 `public/icons/`)에 배치해 둔다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`).
- AI 작업 시 마크다운 형태의 표준 디자인 지침서인 [[Design.md]]에 해당 자산 경로 및 사용 규칙을 기재하여 프롬프트로 전달함으로써, AI가 임의의 3rd-party 패키지를 불러오거나 스타일을 왜곡하지 않도록 강제한다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`).

## 예시

### 1. React/Next.js 기반 아이콘 래퍼 컴포넌트 예시
Coolicons 자산을 하드 폴더 구조에 배치하고, 디자인 시스템 규칙에 맞추어 사용하는 캡슐화 컴포넌트 예시:

```tsx
// src/components/ui/CoolIcon.tsx
import React from 'react';

export type CoolIconStyle = 'line' | 'duotone' | 'duo-color';
export type CoolIconWeight = 'thin' | 'regular' | 'bold';

interface CoolIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string; // 예: 'user', 'settings', 'home'
  styleType?: CoolIconStyle;
  weight?: CoolIconWeight;
  size?: number;
}

/**
 * Coolicons 전용 표준 UI 컴포넌트.
 * 외부 패키지 무단 노출을 막고 30개의 선별된 프로젝트 아이콘 자산만을 일관되게 호출한다.
 */
export const CoolIcon: React.FC<CoolIconProps> = ({
  name,
  styleType = 'line',
  weight = 'regular',
  size = 24,
  className = '',
  ...props
}) => {
  const iconSrc = `/icons/coolicons/${styleType}/${weight}/${name}.svg`;

  return (
    <img
      src={iconSrc}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      {...props}
    />
  );
};
```

### 2. Design.md 가이드라인 작성 시나리오
AI 코딩 도구(Claude Code, Antigravity 등)가 외부 아이콘 라이브러리를 임의로 사용하는 것을 막기 위해 `Design.md`에 기술하는 규칙 예시:

```yaml
# Design.md (AI 에이전트 읽기용 규칙)
design_system:
  name: "Product Design Rules"
  icon_guidelines:
    library: "Coolicons"
    storage_path: "./public/icons/coolicons"
    preselected_count: 30
    rules:
      - "Do NOT install or import lucide-react, react-icons, or fontawesome."
      - "Use <CoolIcon name='...' styleType='line' weight='regular' /> from components/ui/CoolIcon."
```

## 충돌
- **범용 패키지 사용 편의성과의 충돌**: Lucide React 등의 라이브러리는 NPM 패키지로 즉시 설치가 가능하고 커버리지 범위가 넓어 빠른 개발에 유용하다. 하지만 대부분의 AI 프로토타이핑 도구에서 범용 기본값으로 채택되어 제품 특유의 개성을 저해하고 [[AI 슬롭]] 느낌을 주는 부작용이 있다. 반면, Coolicons는 30여 개의 전용 자산을 직접 선별·하드폴더화하는 초기 공수가 요구되나, 브랜드만의 정체성과 일관된 톤앤매너를 지켜주는 장점이 크다 (`raw/AI로_만든_제품이_안_팔리는_이유.md`).

## 관련 노트
- [[AI 슬롭]]
- [[원티드 몽타주]]
- [[미니 디자인 시스템]]
- [[Design.md]]
- [[UI 슬롭]]

## 출처
- `raw/AI로_만든_제품이_안_팔리는_이유.md`
```