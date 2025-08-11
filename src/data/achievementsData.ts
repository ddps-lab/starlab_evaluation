import { MetricItem } from '../app/types';

export interface AchievementsData {
  quantitative: MetricItem[];
  technical: MetricItem[];
  impact: MetricItem[];
  humanResources: MetricItem[];
}

export const achievementsData: AchievementsData = {
  quantitative: [
    { label: "해외 학회", value: "10편" },
    { label: "국내 학회", value: "11편" },
    { label: "공개 SW", value: "11종" },
    { label: "인력 배출", value: "9명" }
  ],
  technical: [
    { label: "학습시간 예측 정확도", value: "94.48%" },
    { label: "추론시간 예측 정확도", value: "95.09%" },
    { label: "스팟 인스턴스 안정성", value: "99.99%" },
    { label: "스팟 데이터 수집 시스템", value: "구현" }
  ],
  impact: [
    { label: "논문 인용", value: "증가" },
    { label: "기술 이전", value: "추진" },
    { label: "산업체 협력", value: "확대" },
    { label: "후속 연구", value: "연계" }
  ],
  humanResources: [
    { label: "석사 배출", value: "9명" },
    { label: "산업체 취업", value: "3명" },
    { label: "박사과정 진학", value: "3명" },
    { label: "전공분야 취업률", value: "100%" }
  ]
};