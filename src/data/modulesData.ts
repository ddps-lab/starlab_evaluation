import { ModuleCardProps } from '../app/types';

export const modulesData: ModuleCardProps[] = [
  {
    title: "ACE-Train",
    description: "딥러닝 모델 학습 시간 예측을 통한 클라우드 기반 최적 환경 구성 및 추천 시스템",
    metrics: [
      { label: "예측 정확도", value: "94.48%" },
      { label: "하드웨어 메트릭 기반", value: "예측" },
      { label: "블랙박스 예측", value: "완료" },
      { label: "지원 GPU", value: "5종" }
    ],
    className: "ace-train",
    icon: "ACE-Train.png"
  },
  {
    title: "ACE-Cost",
    description: "유휴 클라우드 자원의 비용 최적화 및 안정성 예측을 통한 스팟 인스턴스 활용 최적화 모듈",
    metrics: [
      { label: "안정성 예측", value: "99.99%" },
      { label: "SpotLake 구축", value: "완료" },
      { label: "멀티클라우드 지원", value: "3개사" },
      { label: "멀티 스팟 안정성 지표", value: "수집" }
    ],
    className: "ace-cost",
    icon: "ACE-Cost.png"
  },
  {
    title: "ACE-Inference",
    description: "딥러닝 모델 추론 성능 예측 및 서버리스 컴퓨팅 환경에서의 최적 배포 시스템",
    metrics: [
      { label: "서버리스 환경 분석", value: "완료" },
      { label: "API 최적화", value: "4-5배 향상" },
      { label: "연산자 융합", value: "연구중" },
      { label: "분산 추론 분석", value: "완료" }
    ],
    className: "ace-inference",
    icon: "ACE-Inference.png"
  }
];

export const futureModulesData: ModuleCardProps[] = [
  {
    title: "ACE-Train",
    description: "GNN 모델 학습, 양자화 적용, 병렬 컴퓨팅 환경에서의 성능 예측 및 실시간 학습 이관 시스템",
    metrics: [
      { label: "GNN 실행시간 예측", value: "알고리즘 개발" },
      { label: "양자화 학습 예측", value: "32/16비트" },
      { label: "병렬 컴퓨팅 예측", value: "성능 알고리즘" },
      { label: "실시간 학습 이관", value: "시스템 개발" }
    ],
    className: "ace-train"
  },
  {
    title: "ACE-Cost",
    description: "유휴 자원의 안정성 및 랭킹 알고리즘 개발, API 서비스 구축",
    metrics: [
      { label: "안정성 예측 알고리즘", value: "개발" },
      { label: "랭킹 알고리즘", value: "개발" },
      { label: "데이터셋 API", value: "서비스 개발" },
      { label: "유휴 자원 활용", value: "최적화" }
    ],
    className: "ace-cost"
  },
  {
    title: "ACE-Inference",
    description: "GNN 모델 추론, 양자화 추론, TVM 컴파일러 최적화 및 서버리스 자동 배포 시스템",
    metrics: [
      { label: "GNN 추론 예측", value: "알고리즘 개발" },
      { label: "양자화 추론 예측", value: "8비트" },
      { label: "TVM 성능 예측", value: "컴파일러 기법" },
      { label: "서버리스 자동 배포", value: "시스템 SW" }
    ],
    className: "ace-inference"
  }
];