import { ModuleCardProps } from '../app/types';

export const modulesData: ModuleCardProps[] = [
  {
    title: "ACE-Train",
    metrics: [
      "예측 정확도 94.48% 달성",
      "하드웨어 메트릭 기반 예측",
      "블랙박스 예측 완료",
      "지원 GPU 5종"
    ],
    className: "ace-train",
    icon: "ACE-Train.png"
  },
  {
    title: "ACE-Inference",
    metrics: [
      "서버리스 환경 분석 완료",
      "API 최적화 4-5배 향상",
      "연산자 융합 연구중",
      "분산 추론 분석 완료"
    ],
    className: "ace-inference",
    icon: "ACE-Inference.png"
  },
  {
    title: "ACE-Cost",
    metrics: [
      "안정성 예측 99.99%",
      "SpotLake 구축 완료",
      "멀티클라우드 지원 3개사",
      "멀티 스팟 안정성 지표 수집"
    ],
    className: "ace-cost",
    icon: "ACE-Cost.png"
  },
];

export const futureModulesData: ModuleCardProps[] = [
  {
    title: "ACE-Train",
    metrics: [
      "GNN 실행시간 예측 알고리즘 개발",
      "양자화 학습 예측",
      "병렬 컴퓨팅 성능 예측 알고리즘",
      "실시간 학습 이관 시스템 개발"
    ],
    className: "ace-train"
  },
  {
    title: "ACE-Inference",
    metrics: [
      "GNN 추론 예측 알고리즘 개발",
      "양자화 추론 예측 8비트",
      "TVM 성능 예측 컴파일러",
      "서버리스 자동 배포 시스템 SW"
    ],
    className: "ace-inference"
  },
  {
    title: "ACE-Cost",
    metrics: [
      "안정성 예측 알고리즘 개발",
      "랭킹 알고리즘 개발",
      "데이터셋 API 서비스 개발",
      "유휴 자원 활용 최적화"
    ],
    className: "ace-cost"
  }
];