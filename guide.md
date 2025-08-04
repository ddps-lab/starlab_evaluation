# 2단계 평가를 위한 수정 가이드

## 📋 개요

현재 시스템은 1단계 평가(2022-2025)를 기준으로 구축되어 있습니다. 2단계 평가로 전환하기 위해 다음과 같은 수정이 필요합니다.

## 🎯 수정해야 할 주요 항목

### 1. 프로젝트 기본 정보 업데이트

#### 📁 `src/data/projectData.ts`
```typescript
// 현재 코드
code: "과제번호: RS-2022-00144309 | 수행기관: 한양대학교 산학협력단 | 1단계(2022.04~2025.12)"

// 수정 필요 사항
code: "과제번호: RS-2022-00144309 | 수행기관: 한양대학교 산학협력단 | 2단계(2026.01~2027.12)"
```

### 2. 성과 데이터 구조 변경

#### 📁 `src/data/achievementsData.ts`
새로운 2단계 성과 데이터 구조로 교체:

```typescript
export const achievementsData: AchievementsData = {
  quantitative: [
    { label: "해외 학회 논문", value: "X편" },
    { label: "국내 학회 논문", value: "X편" },
    { label: "SCIE급 논문", value: "X편" },
    { label: "공개 SW", value: "X종" },
    { label: "인력 배출", value: "X명" }
  ],
  technical: [
    { label: "GNN 학습시간 예측 정확도", value: "X%" },
    { label: "양자화 추론 성능 향상", value: "X배" },
    { label: "TVM 컴파일 최적화", value: "X%" },
    { label: "실시간 학습 이관 시스템", value: "구현/개발중" }
  ],
  impact: [
    { label: "산업체 기술 이전", value: "X건" },
    { label: "창업 기업", value: "X개" },
    { label: "국제 표준 기여", value: "X건" },
    { label: "후속 연구 연계", value: "X건" }
  ],
  humanResources: [
    { label: "박사 배출", value: "X명" },
    { label: "석사 배출", value: "X명" },
    { label: "포닥 연구원", value: "X명" },
    { label: "산업체 취업률", value: "X%" }
  ]
};
```

### 3. 모듈 데이터 업데이트

#### 📁 `src/data/modulesData.ts`
현재 `futureModulesData`를 기본 `modulesData`로 변경하고, 새로운 3단계 계획 추가:

```typescript
// 현재 futureModulesData를 modulesData로 교체
export const modulesData: ModuleCardProps[] = [
  // 기존 futureModulesData 내용을 여기로 이동
];

// 새로운 3단계 계획 데이터 추가
export const futureModulesData: ModuleCardProps[] = [
  {
    title: "ACE-Train++",
    description: "차세대 AI 모델 학습 최적화 및 자동화 시스템",
    metrics: [
      { label: "멀티모달 AI 학습", value: "지원" },
      { label: "AutoML 통합", value: "개발" },
      { label: "연합학습 지원", value: "구현" },
      { label: "엣지 컴퓨팅 최적화", value: "연구" }
    ],
    className: "ace-train"
  },
  // 추가 모듈들...
];
```

### 4. 페이지 제목 및 설명 업데이트

#### 📁 `src/components/sections/AchievementsSection.tsx`
```typescript
// 현재
<h2 className="section-title">1단계 최종 성과 요약 (2022-2025)</h2>

// 수정
<h2 className="section-title">2단계 최종 성과 요약 (2026-2027)</h2>
```

#### 📁 `src/pages/MainPage.tsx`
```typescript
// 현재
<h2 className="main-section-title">연구 개발 성과 (2022-2025)</h2>

// 수정
<h2 className="main-section-title">연구 개발 성과 (2026-2027)</h2>

// 현재
<h2 className="section-title">2단계 연구개발 계획 및 기대효과</h2>

// 수정
<h2 className="section-title">3단계 연구개발 계획 및 기대효과</h2>
```

### 5. 논문 데이터 업데이트

#### 📁 `src/data/papersData.ts`
2단계 동안 발표된 새로운 논문들로 전체 교체:

```typescript
export const papersData: PaperItemProps[] = [
  {
    title: "2단계 논문 제목 1",
    authors: "저자명 등",
    venue: "학회명",
    year: 2026,
    type: "international", // 또는 "domestic"
    award: "best-paper", // 수상이 있는 경우
    links: {
      paper: "논문 링크",
      // 기타 링크들
    },
    tags: ["GNN", "양자화", "TVM"],
    impact: "논문의 기여도 및 영향 설명..."
  },
  // 추가 논문들...
];
```

### 6. 소프트웨어 데이터 업데이트

#### 📁 `src/data/softwareData.ts`
2단계에서 개발된 새로운 소프트웨어들로 업데이트

### 7. 인력양성 데이터 업데이트

#### 📁 `src/data/trainingData.ts`
2단계 기간 동안의 인력양성 성과로 업데이트

### 8. 메타데이터 및 설정 업데이트

#### 📁 `public/index.html`
```html
<!-- 현재 -->
<meta name="description" content="ACE-AI 프로젝트 연구개발 단계 평가" />
<meta property="og:description" content="ACE-AI 프로젝트 연구개발 단계 평가" />

<!-- 수정 -->
<meta name="description" content="ACE-AI 프로젝트 2단계 연구개발 성과 평가" />
<meta property="og:description" content="ACE-AI 프로젝트 2단계 연구개발 성과 평가" />
```

#### 📁 `src/app/config/constants.ts`
```typescript
// 현재
description: 'ACE-AI 프로젝트 연구개발 성과 포털',

// 수정
description: 'ACE-AI 프로젝트 2단계 연구개발 성과 포털',
```

## 🔄 단계별 수정 프로세스

### Phase 1: 기본 정보 업데이트
1. 프로젝트 기간 및 단계 정보 수정
2. 페이지 제목 및 메타데이터 업데이트
3. 네비게이션 및 상수 값 조정

### Phase 2: 데이터 구조 업데이트
1. 성과 데이터 (`achievementsData.ts`) 새 데이터로 교체
2. 모듈 데이터 (`modulesData.ts`) 2단계 → 현재, 3단계 → 미래 계획으로 이동
3. 논문, 소프트웨어, 교육 데이터 전면 교체

### Phase 3: 컴포넌트 및 UI 검증
1. 모든 컴포넌트가 새 데이터 구조와 호환되는지 확인
2. 스타일링 및 레이아웃 조정 (필요시)
3. 이미지 및 아이콘 업데이트 (필요시)

## ⚠️ 주의사항

1. **데이터 백업**: 수정 전 현재 1단계 데이터를 별도 파일로 백업
2. **점진적 수정**: 한 번에 모든 파일을 수정하지 말고 단계별로 진행
3. **테스트**: 각 수정 후 페이지 렌더링 및 기능 동작 확인
4. **타입 호환성**: TypeScript 타입 정의와 데이터가 일치하는지 확인


이 가이드를 따라 체계적으로 수정하면 2단계 평가를 위한 시스템 전환이 원활하게 진행될 수 있습니다.