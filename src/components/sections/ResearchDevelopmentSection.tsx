import React from 'react';
import PaperItem from '../PaperItem';
import { PaperData } from '../../app/types';

interface ResearchDevelopmentSectionProps {
  papers: {
    aceTrainPapers: PaperData[];
    aceCostPapers: PaperData[];
    aceInferencePapers: PaperData[];
  };
}

export const ResearchDevelopmentSection: React.FC<ResearchDevelopmentSectionProps> = ({ papers }) => {
  return (
    <section id="research-development">
      <h2 className="main-section-title">연구 개발 성과 (2022-2025)</h2>

      <div className="summary-card">
        <div className="summary-content">
          <h3>전체 논문 발표 성과 총계</h3>
          <p><strong>총 21편 (해외학회 10편, 국내학회 11편) | SCIE급 1편, 최우수 1편, 우수 4편, 워크샵 2편, 데모 1편, 포스터 1편</strong></p>
        </div>
      </div>

      <div className="content-section">
        {/* ACE-Train Papers */}
        <div className="research-module-section ace-train">
          <h3 className="research-module-title">ACE-Train: 딥러닝 학습 시간 예측 시스템</h3>
          <div className="research-module-summary">
            <strong>핵심 기술:</strong> 하드웨어 메트릭 기반 딥러닝 학습 시간 예측 알고리즘 (정확도 94.48%)
            <br />
            <strong>외부 임팩트:</strong> GPU 클라우드 환경에서 비용 효율적 학습 환경 구성을 위한 예측 시스템
          </div>

          <div className="research-papers-grid">
            {papers.aceTrainPapers.map((paper, index) => (
              <PaperItem key={index} paper={paper} className="ace-train" />
            ))}
          </div>
        </div>

        {/* ACE-Cost Papers */}
        <div className="research-module-section ace-cost">
          <h3 className="research-module-title">ACE-Cost: 스팟 인스턴스 최적화 시스템</h3>
          <div className="research-module-summary">
            <strong>핵심 기술:</strong> 스팟 인스턴스 안정성 예측 및 유휴 클라우드 자원 최적화 (99.99% 안정성)
            <br />
            <strong>외부 임팩트:</strong> SpotLake 데이터 아카이브 서비스 및 멀티클라우드(3개사) 지원 시스템
          </div>

          <div className="research-papers-grid">
            {papers.aceCostPapers.map((paper, index) => (
              <PaperItem key={index} paper={paper} className="ace-cost" />
            ))}
          </div>
        </div>

        {/* ACE-Inference Papers */}
        <div className="research-module-section ace-inference">
          <h3 className="research-module-title">ACE-Inference: 서버리스 추론 최적화 시스템</h3>
          <div className="research-module-summary">
            <strong>핵심 기술:</strong> 서버리스 환경에서 딥러닝 모델 추론 성능 예측 및 최적화 (4-5배 성능 향상)
            <br />
            <strong>외부 임팩트:</strong> AWS Lambda 기반 모델 서빙 최적화 도구 및 성능 벤치마킹 플랫폼
          </div>

          <div className="research-papers-grid">
            {papers.aceInferencePapers.map((paper, index) => (
              <PaperItem key={index} paper={paper} className="ace-inference" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchDevelopmentSection;
