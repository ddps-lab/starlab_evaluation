import { TrainingData } from '../app/types';

export const trainingData: TrainingData[] = [
  {
    title: "AWS re:Invent 참석 (2022-2023)",
    description: "클라우드 컴퓨팅 분야 최신 기술이 가장 많이 발표되는 re:Invent 참석하여 최신 연구 및 개발 결과 학습",
    participants: ["2022년: 3명", "2023년: 1명"],
    className: "ace-train",
    icon: "reinvent-white.png"
  },
  {
    title: "AWS Summit 참석 (2023-2024)",
    description: "AWS 최신 서비스 및 기술 동향 학습, 2024년에는 AWS Gameday에서 2위 입상",
    participants: ["2023년: 3명", "2024년: 4명 (Gameday 2위)"],
    className: "ace-cost",
    icon: "aws_summit.png"
  },
  {
    title: "SageMaker Immersion Day (2022)",
    description: "클라우드 분야 선두업체인 AWS의 지원으로 SageMaker Immersion Day 참석",
    participants: ["참석인원: 5명"],
    className: "ace-inference",
    icon: "Immersion_day.png"
  },
  {
    title: "우수논문상 수상 (2023, 2025)",
    description: "한국정보과학회 주관 학술 대회에서 우수논문상 수상",
    participants: ["2023년: 김경환", "2025년: 송무현"],
    className: "ace-blue",
    icon: "KIISE_logo.png"
  }
];