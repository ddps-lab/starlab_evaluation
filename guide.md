# ACE-AI 프로젝트 단계 전환 가이드

> **현재 상태**: 1단계 평가 (2022.04 ~ 2025.12)
> **목표 상태**: 2단계 평가 (2026.01 ~ 2027.12) → 이후 3단계 계획

## 📋 프로젝트 구조 개요

```
src/
├── data/                          # 데이터 계층
│   ├── projectData.ts             # 프로젝트 기본 정보
│   ├── achievementsData.ts        # 성과 지표 (정량/기술/영향/인력)
│   ├── modulesData.ts             # 핵심 모듈 & 미래 계획
│   ├── papersData.ts              # 학술 논문 (모듈별 분류)
│   ├── softwareData.ts            # 공개 소프트웨어
│   ├── trainingData.ts            # 인력양성 데이터
│   └── index.ts                   # 데이터 export 허브
├── components/
│   ├── sections/                  # 페이지 섹션 컴포넌트
│   │   ├── ProjectHeader.tsx       # 정부 헤더 + 프로젝트 정보
│   │   ├── AchievementsSection.tsx # 성과 요약 (4 카테고리)
│   │   ├── ACEModulesSection.tsx   # 핵심 모듈 & 미래 계획
│   │   ├── ResearchDevelopmentSection.tsx # 논문 섹션
│   │   ├── OpenSourceSection.tsx   # 공개 SW 섹션
│   │   ├── HumanResourcesSection.tsx # 인력양성 섹션
│   │   ├── CallistoSection.tsx     # Callisto 통합 플랫폼
│   │   └── index.ts
│   ├── ui/                        # 재사용 가능한 UI 컴포넌트
│   │   ├── ModuleCard.tsx          # 모듈 카드 (메트릭 표시)
│   │   ├── ActionButton.tsx        # 표준 버튼
│   │   ├── GradeBadge.tsx          # 논문 등급 배지
│   │   └── index.ts
│   └── layout/                    # 레이아웃 컴포넌트
├── pages/
│   └── MainPage.tsx               # 메인 페이지
├── app/
│   ├── types/                     # TypeScript 타입 정의
│   │   └── index.ts
│   ├── config/                    # 설정 & 상수
│   │   ├── constants.ts           # 앱 설정, 네비게이션, 에셋 경로
│   │   ├── breakpoints.ts         # 반응형 브레이크포인트
│   │   └── index.ts
│   ├── utils/
│   ├── hooks/
│   └── services/
└── ...
```

---

## 🎯 수정해야 할 주요 항목

### 1️⃣ 프로젝트 기본 정보 업데이트

#### 📁 `src/data/projectData.ts`

**현재 코드 예시:**
```typescript
export const projectData: ProjectData = {
  title: 'ACE-AI: 자율제어 지능형 시스템을 위한 경량화 AI 기술 개발',
  subtitle: 'Lightweight AI Technologies for ACE Systems',
  code: '과제번호: RS-2022-00144309 | 수행기관: 한양대학교 산학협력단 | 1단계(2022.04~2025.12)',
};
```

**수정 필요 사항:**
```typescript
export const projectData: ProjectData = {
  title: 'ACE-AI: 자율제어 지능형 시스템을 위한 경량화 AI 기술 개발',
  subtitle: 'Lightweight AI Technologies for ACE Systems',
  code: '과제번호: RS-2022-00144309 | 수행기관: 한양대학교 산학협력단 | 2단계(2026.01~2027.12)',
  // 또는 더 명확한 분리를 원하면:
  // phase: '2단계',
  // period: '2026.01~2027.12'
};
```

---

### 2️⃣ 성과 데이터 구조 업데이트

#### 📁 `src/data/achievementsData.ts`

**현재 구조:**
```typescript
export interface MetricItem {
  label: string;
  value: string;
}

export interface AchievementsData {
  quantitative: MetricItem[];  // 정량 성과
  technical: MetricItem[];     // 기술적 성과
  impact: MetricItem[];        // 파급효과
  humanResources: MetricItem[]; // 인력양성 성과
}
```

**수정 예시 (2단계 데이터로 교체):**
```typescript
export const achievementsData: AchievementsData = {
  quantitative: [
    { label: "국제 학술지 논문", value: "12편" },
    { label: "국내 학술지 논문", value: "8편" },
    { label: "SCIE급 논문", value: "5편" },
    { label: "공개 SW", value: "3종" },
  ],
  technical: [
    { label: "GNN 학습시간 예측 정확도", value: "94.2%" },
    { label: "양자화 추론 성능 향상", value: "2.3배" },
    { label: "TVM 컴파일 최적화", value: "35%" },
    { label: "실시간 학습 이관 시스템", value: "구현 완료" },
  ],
  impact: [
    { label: "산업체 기술 이전", value: "2건" },
    { label: "창업 기업", value: "1개" },
    { label: "국제 표준 기여", value: "1건" },
    { label: "후속 연구 연계", value: "3건" },
  ],
  humanResources: [
    { label: "박사 학위 배출", value: "2명" },
    { label: "석사 학위 배출", value: "5명" },
    { label: "포닥 연구원", value: "1명" },
    { label: "산업체 취업률", value: "100%" },
  ],
};
```

---

### 3️⃣ 모듈 데이터 업데이트

#### 📁 `src/data/modulesData.ts`

**현재 상황:**
- `modulesData`: 1단계 핵심 모듈 3개 (ACE-Train, ACE-Cost, ACE-Inference)
- `futureModulesData`: 2단계 계획 3개

**수정 전략:**

```typescript
// 1단계 데이터 백업 (선택사항)
export const phase1ModulesData: ModuleCardProps[] = [
  // 기존 modulesData 내용 보존
];

// 2단계 데이터를 현재 modulesData로 이동
export const modulesData: ModuleCardProps[] = [
  // 기존 futureModulesData 내용을 여기로 이동
  {
    title: 'ACE-Train+',
    description: '강화된 AI 모델 학습 최적화 및 자동화 시스템',
    metrics: [
      { label: '멀티모달 AI 학습', value: '지원' },
      { label: 'AutoML 통합', value: '개발' },
      { label: '분산학습 지원', value: '구현' },
      { label: '엣지 최적화', value: '연구' },
    ],
    className: 'ace-train',
    icon: '🚀',
  },
  // ... 추가 모듈들
];

// 3단계 계획 데이터로 futureModulesData 교체
export const futureModulesData: ModuleCardProps[] = [
  {
    title: 'ACE-Train++',
    description: '차세대 AI 모델 학습 플랫폼 (3단계 계획)',
    metrics: [
      { label: 'LLM 최적화', value: '계획중' },
      { label: 'AI 자동화', value: '설계' },
      { label: '통합 플랫폼', value: '구상' },
      { label: '클라우드 연동', value: '검토' },
    ],
    className: 'ace-train',
    icon: '🔮',
  },
  // ... 추가 모듈들
];
```

---

### 4️⃣ 페이지 제목 및 설명 업데이트

#### 📁 `src/app/config/constants.ts`

```typescript
export const APP_CONFIG = {
  name: 'ACE-AI Research Platform',
  version: '2.0.0',  // 선택사항: 버전 업그레이드
  description: 'ACE-AI 프로젝트 2단계 연구개발 성과 포털', // 수정
} as const;
```

#### 📁 `src/components/sections/AchievementsSection.tsx`

```typescript
// 현재
<h2 className="section-title">1단계 최종 성과 요약 (2022-2025)</h2>

// 수정
<h2 className="section-title">2단계 최종 성과 요약 (2026-2027)</h2>
```

#### 📁 `src/components/sections/ACEModulesSection.tsx`

```typescript
// 현재 섹션 제목 수정
<h2 className="section-title">2단계 핵심 모듈</h2>
<h2 className="section-title">3단계 연구개발 계획</h2>

// 또는 동적으로 구성
const currentPhase = '2단계';
const futurePhase = '3단계';
```

#### 📁 `public/index.html`

```html
<!-- 메타데이터 업데이트 -->
<meta name="description" content="ACE-AI 프로젝트 2단계 연구개발 성과 평가" />
<meta property="og:description" content="ACE-AI 프로젝트 2단계 연구개발 성과 평가" />
```

---

### 5️⃣ 학술 논문 데이터 업데이트

#### 📁 `src/data/papersData.ts`

**현재 구조:**
```typescript
export interface PaperData {
  title: string;
  venue: string;
  grade: 'scie' | 'excellent' | 'good' | 'demo' | 'workshop' | 'poster';
  impact: string;
  image?: string;
  links: {
    pdf?: string;
    github?: string;
    ieee?: string;
    acm?: string;
  };
}

// 모듈별로 분류된 배열
export const aceTrainPapers: PaperData[] = [ ... ];
export const aceCostPapers: PaperData[] = [ ... ];
export const aceInferencePapers: PaperData[] = [ ... ];
```

**수정 전략:**

```typescript
// 1단계 데이터 백업 (선택사항)
export const phase1AceTrainPapers: PaperData[] = [
  // 기존 aceTrainPapers 내용 보존
];

// 2단계 데이터로 교체
export const aceTrainPapers: PaperData[] = [
  {
    title: '2024년 GNN 학습 최적화 연구',
    venue: 'ICML 2026',
    grade: 'scie',
    impact: '신경망 학습시간 30% 단축 기술...',
    links: {
      pdf: 'https://example.com/paper1.pdf',
      github: 'https://github.com/example/repo1',
    },
  },
  // ... 추가 논문들
];

export const aceCostPapers: PaperData[] = [
  // 2단계 ACE-Cost 관련 논문들
];

export const aceInferencePapers: PaperData[] = [
  // 2단계 ACE-Inference 관련 논문들
];
```

---

### 6️⃣ 공개 소프트웨어 데이터 업데이트

#### 📁 `src/data/softwareData.ts`

**현재 구조:**
```typescript
export interface SoftwareData {
  title: string;
  description: string;
  url: string;
  stars?: number;  // GitHub 스타 수
}
```

**수정 예시:**

```typescript
// 1단계 데이터 백업 (선택사항)
export const phase1SoftwareData: SoftwareData[] = [
  // 기존 softwareData 내용 보존
];

// 2단계 소프트웨어로 교체
export const softwareData: SoftwareData[] = [
  {
    title: 'ACE-Train-v2',
    description: '2단계 강화된 AI 학습 프레임워크',
    url: 'https://github.com/ddps-lab/ACE-Train-v2',
    stars: 450,
  },
  {
    title: 'Callisto-Platform',
    description: '통합 AI 개발 플랫폼',
    url: 'https://github.com/ddps-lab/Callisto',
    stars: 820,
  },
  // ... 추가 소프트웨어들
];
```

---

### 7️⃣ 인력양성 데이터 업데이트

#### 📁 `src/data/trainingData.ts`

**현재 구조:**
```typescript
export interface TrainingData {
  title: string;
  description: string;
  participants: string[];  // 참가자 목록
  className: string;       // CSS 클래스명
  icon: string;           // 아이콘 (이모지 또는 경로)
}
```

**수정 예시:**

```typescript
export const trainingData: TrainingData[] = [
  {
    title: 'AWS Reinvent 2026 참여',
    description: '글로벌 클라우드 기술 세미나',
    participants: ['박사 1명', '석사 2명'],
    className: 'reinvent-white',
    icon: 'aws-icon',
  },
  {
    title: 'ACE-AI 기술 워크숍',
    description: '2단계 기술 성과 공유 및 교육',
    participants: ['학부생 30명', '산업체 인력 20명'],
    className: 'ace-workshop',
    icon: '📚',
  },
  // ... 추가 교육/양성 프로그램들
];
```

---

### 8️⃣ 메타데이터 및 설정 최종 확인

#### 📁 `src/app/config/constants.ts` (종합)

```typescript
// App Configuration Constants
export const APP_CONFIG = {
  name: 'ACE-AI Research Platform',
  version: '2.0.0',  // 버전 업그레이드
  description: 'ACE-AI 프로젝트 2단계 연구개발 성과 포털',  // ✅ 수정
} as const;

// Navigation Configuration
export const NAV_ITEMS = [
  { id: 'achievements', label: '성과 요약', href: '#achievements' },
  { id: 'research-development', label: '연구개발 성과', href: '#research-development' },
  { id: 'open-software', label: '공개 SW', href: '#open-software' },
  { id: 'human-resources', label: '인력 양성', href: '#human-resources' },
  { id: 'core-modules', label: '핵심 모듈', href: '#core-modules' },
] as const;

// 추가: 단계 정보 (선택사항)
export const PHASE_CONFIG = {
  current: '2단계',
  currentPeriod: '2026.01~2027.12',
  previous: '1단계',
  previousPeriod: '2022.04~2025.12',
  future: '3단계',
  futurePeriod: '2028~',
} as const;
```

---

## 🔄 단계별 수정 프로세스

### Phase 1: 기본 설정 업데이트 (30분)
```
✅ projectData.ts - 단계 및 기간 변경
✅ constants.ts - APP_CONFIG, PHASE_CONFIG 업데이트
✅ public/index.html - 메타데이터 수정
⏱️ 예상 시간: 5분, 빌드 테스트: 1분
```

### Phase 2: 성과 데이터 업데이트 (1시간)
```
✅ achievementsData.ts - 새로운 성과 지표로 교체
✅ AchievementsSection.tsx - 제목 업데이트
⏱️ 예상 시간: 20분 + 테스트: 10분
```

### Phase 3: 모듈 및 계획 업데이트 (1.5시간)
```
✅ modulesData.ts - futureModules → modulesData 이동 & 새 future 계획 추가
✅ ACEModulesSection.tsx - 제목 수정
⏱️ 예상 시간: 30분 + 테스트: 15분
```

### Phase 4: 학술 자료 업데이트 (2시간)
```
✅ papersData.ts - 2단계 논문 데이터로 완전 교체
✅ ResearchDevelopmentSection.tsx - 필요시 레이아웃 조정
⏱️ 예상 시간: 1시간 + 테스트: 20분
```

### Phase 5: 추가 데이터 업데이트 (1시간)
```
✅ softwareData.ts - 새로운 SW로 업데이트
✅ trainingData.ts - 2단계 교육 프로그램으로 업데이트
⏱️ 예상 시간: 30분 + 테스트: 15분
```

### Phase 6: 최종 검증 (30분)
```
✅ 전체 빌드 성공 확인
✅ 반응형 디자인 테스트 (Desktop/Tablet/Phone)
✅ 모든 링크 및 데이터 검증
✅ 배포 준비
⏱️ 예상 시간: 30분
```

**전체 예상 시간: 약 6시간 (포함: 테스트 & 검증)**

---

## 📊 데이터 마이그레이션 패턴

### 1단계 → 2단계 → 3단계 순환 구조

```typescript
// 선택사항: 버전별 데이터 보존
export const phase1Data = { /* 1단계 데이터 */ };
export const phase2Data = { /* 2단계 데이터 */ };  // 현재
export const phase3Data = { /* 3단계 계획 */ };    // 미래

// 실제 사용 데이터
export const modulesData = phase2Data.modules;     // 현재 표시
export const futureModulesData = phase3Data.modules; // 미래 표시
```

---

## ✅ 체크리스트

### 데이터 업데이트
- [ ] `projectData.ts` - 단계/기간 수정 ✓
- [ ] `achievementsData.ts` - 새 성과 지표 입력 ✓
- [ ] `modulesData.ts` - 2단계 모듈 설정, 3단계 계획 추가 ✓
- [ ] `papersData.ts` - 2단계 논문 교체 ✓
- [ ] `softwareData.ts` - 새 소프트웨어 추가 ✓
- [ ] `trainingData.ts` - 2단계 교육 프로그램 추가 ✓

### 컴포넌트 업데이트
- [ ] 모든 섹션 제목 수정 ✓
- [ ] 페이지 메타데이터 업데이트 ✓
- [ ] 설정(constants.ts) 업데이트 ✓

### 테스트 및 검증
- [ ] 전체 빌드 성공 확인 ✓
- [ ] Desktop 반응형 테스트 ✓
- [ ] Tablet 반응형 테스트 (800px ~ 1279px) ✓
- [ ] Phone 반응형 테스트 (~ 799px) ✓
- [ ] 모든 링크 및 이미지 로드 확인 ✓
- [ ] 성능 테스트 (빌드 시간, 번들 크기) ✓

### 배포 준비
- [ ] CI/CD 파이프라인 확인 ✓
- [ ] 배포 환경 테스트 ✓
- [ ] SEO/메타데이터 최종 확인 ✓

---

## 🔧 개발 도구 및 명령어

```bash
# 개발 환경 시작
npm start

# 빌드 (배포 전)
npm run build

# 타입 검사
npm run type-check

# 린트 검사
npm run lint

# 단위 테스트
npm run test
```

---

## 📚 참고 자료

### 타입 정의
👉 `src/app/types/index.ts` - 모든 인터페이스 정의

### 설정
👉 `src/app/config/constants.ts` - 앱 설정 및 상수
👉 `src/app/config/breakpoints.ts` - 반응형 브레이크포인트 (Figma 기준)
- Desktop: 1280px+
- Tablet: 800px ~ 1279px
- Phone: 1px ~ 799px

### 컴포넌트 가이드
👉 `src/components/` - 섹션별 컴포넌트 구조 확인

---

## ⚠️ 주의사항

1. **데이터 백업**: 수정 전 현재 1단계 데이터를 별도 파일로 백업
   ```bash
   cp src/data/achievementsData.ts src/data/achievementsData.phase1.backup.ts
   ```

2. **점진적 수정**: 한 번에 모든 파일을 수정하지 말고 단계별로 진행
   - Phase별로 완료 후 `npm start`로 즉시 테스트

3. **타입 호환성**: TypeScript 타입 오류 없이 빌드 완료 확인
   ```bash
   npm run build  # 배포 전 필수
   ```

4. **통합 테스트**: 각 섹션이 새 데이터와 올바르게 렌더링되는지 확인

5. **SEO & 메타데이터**: 최종 배포 전 모든 메타데이터 검증

---

## 🎓 추가 학습 자료

- **React Best Practices**: https://react.dev/learn
- **TypeScript Handbook**: https://www.typescriptlang.org/docs
- **CSS Media Queries**: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries

---

**마지막 수정**: 2024년 10월 27일
**작성자**: Claude Code
**상태**: 완성 ✅
