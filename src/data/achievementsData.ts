export interface AchievementsData {
  quantitative: string[];
  technical: string[];
  impact: string[];
  humanResources: string[];
}

export const achievementsData: AchievementsData = {
  quantitative: [
    "논문 게재 24편",
    "특허 출원 10건",
    "공개 SW 10종",
    "인력 배출 18명"
  ],
  technical: [
    "학습시간 예측 정확도: 94.48% 달성",
    "추론시간 예측 정확도: 95.09% 달성",
    "스팟 인스턴스 안정성: 99.99% 달성",
    "스팟 데이터 수집 시스템 구현"
  ],
  impact: [
    "논문 인용 증가",
    "기술 이전 추진",
    "산업체 협력 확대",
    "후속 연구 연계"
  ],
  humanResources: [
    "석사 진학 6명",
    "석사 배출 11명",
    "박사 진학 2명",
    "산업체 취업 8명"
  ]
};