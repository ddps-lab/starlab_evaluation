import { PaperData } from '../app/types';

export interface PapersData {
  aceTrainPapers: PaperData[];
  aceCostPapers: PaperData[];
  aceInferencePapers: PaperData[];
}

export const papersData: PapersData = {
  aceTrainPapers: [
    {
      title: "PROFET: PROFiling-based CNN Training Latency ProphET for GPU Cloud Instances",
      venue: "IEEE International Conference on Big Data 2022",
      grade: "good",
      impact: `본 논문은 클라우드 환경에서 CNN 학습 지연시간을 정확히 예측하는 시스템 PROFET 을 제안하였음.
      PROFET 은 CNN 모델의 아키텍처 세부 정보 없이도 다양한 GPU 에서의 학습 시간 예측이 가능하며, 기존 방법보다 높은 예측 정확도를 보임.
      이를 통해 비용 효율적이고 실용적인 클라우드 학습 환경 구성을 지원하며, 공개된 데모 서비스로 적용 가능성도 입증하였음.`,
      image: "profet-system.png",
      pdfUrl: "https://leeky.me/publications/profet.pdf",
      githubUrl: "https://github.com/ddps-lab/profet"
    },
    {
      title: "CNN Training Latency Prediction Using Hardware Metrics on Cloud GPUs",
      venue: "The 24th IEEE/ACM International Symposium on Cluster, Cloud and Internet Computing (CCGRID)",
      grade: "good",
      impact: `본 논문은 모델 내부 정보를 사용하지 않고, GPU 학습 중 수집된 하드웨어 메트릭만으로 학습 지연시간을 예측하는 휴리스틱 기반 방법을 제안하였음.
      제안 시스템은 에폭 구간 탐지와 스택 회귀기를 활용해 평균 예측 오차 15.14%의 높은 정확도를 달성함.
      이는 모델 구조에 의존하지 않으며, 차세대 클라우드 환경에서도 활용 가능성이 높은 접근법임을 실험을 통해 입증하였음.`,
      image: "cnn-hw-metric-prediction-archi.png",
      pdfUrl: "https://leeky.me/publications/cnn-hw-metric-prediction.pdf",
      githubUrl: "https://github.com/ddps-lab/cloud-hw-trainpred"
    }
  ],
  aceCostPapers: [
    {
      title: "Dense or Sparse: Elastic SPMM Implementation for Optimal Big-Data Processing",
      venue: "IEEE Transactions on Big Data",
      grade: "SCIE",
      impact: `본 논문은 Compressed Sparse Column(CSC) 형식의 희소 행렬을 유지한 Sparse Matrix-Matrix Multiplication(SPMM) 방식과 DNN 기반 지연시간 예측 모델을 결합한 DoS(Dense or Sparse) 시스템을 제안하였음.
      DoS는 최적의 SPMM 구현 방식을 자동 추천하며, 기존 Spark 대비 최대 2.2배 성능 향상을 달성하였음.`,
      image: "DoS-implementation-architecture.png",
      pdfUrl: "https://leeky.me/publications/dos.pdf",
      githubUrl: "https://github.com/ddps-lab/dos"
    },
    {
      title: "SpotLake: Diverse Spot Instance Dataset Archive Service",
      venue: "IEEE International Symposium on Workload Characterization (IISWC) 2022",
      grade: "good",
      impact: `본 논문은 스팟 인스턴스 관련 데이터셋의 활용 한계를 분석하고, 이를 극복하기 위해 이력 기반 데이터 아카이브 서비스인 SpotLake 를 제안하였음.
      SpotLake 는 스팟 가격, 가용성, 중단 비율 등의 정보를 수집·제공하며, 제한된 질의 인터페이스와 데이터 부족 문제를 해결함.
      실제 실험을 통해 활용 가능성을 입증하였으며, 클라우드 시스템 연구와 스팟 인스턴스 활용 최적화에 기여하였음.`,
      image: "spotlake.png",
      pdfUrl: "https://leeky.me/publications/spotlake.pdf",
      websiteUrl: "https://spotlake.ddps.cloud/"
    },
    {
      title: "Public Spot Instance Dataset Archive Service",
      venue: "ACM The Web Conference 2023, WWW (Demo)",
      grade: "demo",
      impact: `본 논문은 분산되고 활용이 어려운 스팟 인스턴스 관련 데이터셋 문제를 해결하기 위해, 멀티클라우드 환경에서 통합적으로 스팟 데이터를 제공하는 공개 서비스를 제안하였음.
      사용자는 이를 통해 절감률, 중단률, 즉시 가용성 정보를 비교·활용할 수 있으며, 비용 효율적이고 안정적인 클라우드 환경 구축 및 시스템 연구의 가속화에 기여하였음.`,
      image: "pubilc-spot-data-collector-architecture.png",
      pdfUrl: "https://leeky.me/publications/spot-datasets.pdf"
    },
    {
      title: "Making Cloud Spot Instance Interruption Events Visible",
      venue: "ACM The Web Conference 2024, WWW",
      grade: "excellent",
      impact: `본 논문은 스팟 인스턴스 중단 가능성 예측의 타당성을 분석하고, 이를 위한 다양한 공개 데이터셋의 정량적 평가 및 현실 실험을 수행하였음.
      AWS, Azure, Google Cloud를 대상으로 실험을 진행한 결과, 중단 가능성을 효과적으로 줄일 수 있는 데이터 활용 방법을 제시하며, 스팟 인스턴스의 신뢰성 있는 사용을 위한 실질적 가이드라인을 제공하였음.`,
      pdfUrl: "https://leeky.me/publications/spot-interrupt-visible.pdf"
    },
    {
      title: "Workload-Aware Live Migratable Cloud Instance Detector",
      venue: "The 24th IEEE/ACM International Symposium on Cluster, Cloud and Internet Computing (CCGRID)",
      grade: "good",
      impact: `본 논문은 스팟 인스턴스 환경에서 신뢰성과 비용 효율성을 높이기 위한 라이브 마이그레이션 지원 기술로서, 워크로드 기반 마이그레이션 가능 인스턴스 탐지기를 제안하였음.
      제안된 방식은 실제 사용된 명령어 기반으로 CPU 기능 호환성을 분석하여 기존 CRIU 대비 5배 높은 탐지 recall 과 100% 정확도를 달성하였으며, 실험 결과 비용을 16% 절감하고 중단 비율을 15% 낮추는 효과를 입증하였음.`,
      image: "pygration-migration-detector.png",
      pdfUrl: "https://leeky.me/publications/workload-aware-migrate-detector.pdf",
      githubUrl: "https://github.com/ddps-lab/LiveMigrate-Detector"
    },
    {
      title: "Multi-Node Spot Instances Availability Score Collection System",
      venue: "The 34th ACM International Symposium on High-Performance Parallel and Distributed Computing (HPDC)",
      grade: "poster",
      impact: `본 논문은 클라우드 스팟 인스턴스의 기존 싱글 노드 가용성 데이터가 멀티 노드 환경에서 부정확함을 실험으로 입증함.
      이를 해결하기 위해 멀티 노드 가용성 데이터를 수집하는 시스템을 구축하고, 17개 지역 844개 인스턴스 타입 데이터를 분석함.
      기존 Spotlake 플랫폼을 확장하여 멀티 노드 가용성 점수를 웹 서비스로 공개 제공함.`,
      pdfUrl: "",
    }
  ],
  aceInferencePapers: [
    {
      title: "All-You-Can-Inference: Serverless DNN Model Inference Suite",
      venue: "Eighth International Workshop on Serverless Computing held with ACM/IFIP Middleware 2022",
      grade: "workshop",
      impact: `본 논문은 서버리스 환경에서 딥러닝 추론 성능 최적화를 지원하는 AYCI(All-You-Can-Inference) 시스템을 제안하였음.
      다양한 클라우드 구성 옵션 속에서 최적의 DNN 서빙 환경을 자동 탐색할 수 있도록 돕고, 완전관리형 클라우드 기반 오픈소스 서비스로 구현하였음.
      초기 실험을 통해 DNN 추론 성능 편차가 크고 최적 구성 탐색이 필수적임을 입증하였음.`,
      image: "all-you-can-inference-architecture.png",
      pdfUrl: "https://leeky.me/publications/ayci.pdf",
      githubUrl: "https://github.com/ddps-lab/lambda-optimize-serving"
    },
    {
      title: "When Serverless Computing Meets Different Degrees of Customization for DNN Inference",
      venue: "Nineth International Workshop on Serverless Computing held with ACM/IFIP Middleware 2023",
      grade: "workshop",
      impact: `본 논문은 서버리스 컴퓨팅 환경에서 실행 환경 설정의 사용자 정의 가능성(customizability)을 기준으로 일반 목적 FaaS(GPF), DNN 추론을 위한 특수 목적 FaaS(SPF), 서버리스 컨테이너 서비스(SCS) 를 비교 분석하였음.
      인터랙티브한 DNN 추론 애플리케이션을 대상으로 실험한 결과, 사용자 정의가 가능한 환경일수록 성능 향상 여지가 크며, 이러한 환경이 서버리스 플랫폼에 적합함을 입증하였음.`,
      pdfUrl: "https://leeky.me/publications/serverless-customization-dnn.pdf",
      githubUrl: "https://github.com/ddps-lab/serverless-container-performance-comparison"
    },
  ]
};