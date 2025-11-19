import { ModuleCardProps } from '../app/types';

export const modulesData: ModuleCardProps[] = [
  {
    title: "ACE-Train",
    metrics: [
      "학습 시간 예측 정확도 94.48% 달성",
      "프로파일링 기반 학습 시간 예측",
      "하드웨어 메트릭 기반 예측",
      "블랙박스 기반 최적 GPU 추천 시스템 구현"
    ],
    className: "ace-train",
    icon: "ACE-Train.png"
  },
  {
    title: "ACE-Inference",
    metrics: [
      "추론 시간 예측 정확도 95.09% 달성",
      "서버리스 컴퓨팅 환경 및 모델 최적화",
      "서버리스 환경별 DNN 추론 성능 차이 분석",
      "운영 비용 절감을 위한 LLM 서빙 시스템"
    ],
    className: "ace-inference",
    icon: "ACE-Inference.png"
  },
  {
    title: "ACE-Cost",
    metrics: [
      "유휴 자원 안정성 예측 99.99%",
      "SpotLake 구축 완료",
      "주요 클라우드 제공업체 정보 제공",
      "다중 노드 스팟 가용성 지표 수집",
    ],
    className: "ace-cost",
    icon: "ACE-Cost.png"
  },
];

export const futureModulesData: ModuleCardProps[] = [
  {
    title: "ACE-Train",
    metrics: [
      "딥러닝 학습 실시간 이관 기술 개발",
      "LLM 파인튜닝 시간 예측 알고리즘 개발",
      "QAT 기반 정밀도-ISA 성능 벤치마크 데이터베이스 구축",
      "LLM QAT 시간 예측 알고리즘 개발"
    ],
    className: "ace-train"
  },
  {
    title: "ACE-Inference",
    metrics: [
      "LLM 추론시간 예측 알고리즘 개발",
      "이기종 GPU 인스턴스 활용 LLM 서빙 시스템",
      "스팟 인스턴스 활용 LLM 서빙 시스템",
      "GPU 외 이기종 컴퓨팅을 활용한 분산 서빙 시스템 최적화"
    ],
    className: "ace-inference"
  },
  {
    title: "ACE-Cost",
    metrics: [
      "성능-비용 효율성 점수 계산 알고리즘 구현",
      "인스턴스 타입의 안정성 수치화 알고리즘 구현",
      "랭킹 기반 클러스터 조합 추천 시스템",
      "워크로드 최적화 인스턴스 추천 시스템"
    ],
    className: "ace-cost"
  },
  {
    title: "ACE-Platform",
    metrics: [
      "Callisto 확장 통합 플랫폼 기능 구현",
      "ACE-Cost 통합 및 비용 최적화 구현",
      "ACE-Train/Inference 통합 환경 구현",
    ],
    className: "ace-platform"
  }
];