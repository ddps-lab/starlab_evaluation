import React from 'react';
import { motion } from 'framer-motion';
import PaperItem from '../PaperItem';
import { PaperData } from '../../app/types';
import { getAssetUrl } from '../../app/utils';
import { ASSET_PATHS } from '../../app/config/constants';

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
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 section-title"
      >
        연구 개발 성과 (2022-2025)
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 border-2 border-primary-200 rounded-2xl p-10 text-center shadow-lg mb-12 transition-all duration-300 hover:shadow-2xl hover:border-primary-300 hover:scale-[1.01]"
      >
        <div>
          <h3 className="mb-5 text-3xl font-extrabold text-primary-800">
            전체 논문 발표 성과 총계
          </h3>
          <p className="text-xl leading-relaxed text-secondary-700">
            <strong className="text-primary-700">총 23편 (해외학회 10편, 국내학회 13편) | SCIE급 1편, 최우수 1편, 우수 4편, 워크샵 2편, 데모 1편, 포스터 1편</strong>
          </p>
        </div>
      </motion.div>

      <div className="mb-16">
        {/* ACE-Train Papers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="flex items-center gap-3 pb-3 mb-8 text-3xl font-bold border-b-4 text-primary-800 border-primary-300">
            <img 
              src={getAssetUrl(ASSET_PATHS.images.aceTrain)} 
              alt="ACE-Train Icon" 
              className="w-12 h-12 object-contain"
            />
            ACE-Train: 딥러닝 학습 시간 예측 시스템
          </h3>
          <div className="p-7 mb-8 text-base leading-relaxed bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl border-l-4 shadow-md border-sky-500 text-secondary-700">
            <strong className="text-sky-800">핵심 기술:</strong> 하드웨어 메트릭 기반 딥러닝 학습 시간 예측 알고리즘 (정확도 94.48%)
            <br />
            <strong className="text-sky-800">외부 임팩트:</strong> GPU 클라우드 환경에서 비용 효율적 학습 환경 구성을 위한 예측 시스템
          </div>

          <div className="grid grid-cols-1 gap-6">
            {papers.aceTrainPapers.map((paper, index) => (
              <PaperItem key={index} paper={paper} className="border-l-4" />
            ))}
          </div>
        </motion.div>

        {/* ACE-Inference Papers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="flex items-center gap-3 pb-3 mb-8 text-3xl font-bold border-b-4 text-primary-800 border-primary-300">
            <img 
              src={getAssetUrl(ASSET_PATHS.images.aceInference)} 
              alt="ACE-Inference Icon" 
              className="w-12 h-12 object-contain"
            />
            ACE-Inference: 서버리스 추론 최적화 시스템
          </h3>
          <div className="p-7 mb-8 text-base leading-relaxed bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border-l-4 border-indigo-600 shadow-md text-secondary-700">
            <strong className="text-indigo-800">핵심 기술:</strong> 서버리스 환경에서 딥러닝 모델 추론 성능 예측 및 최적화 (4-5배 성능 향상)
            <br />
            <strong className="text-indigo-800">외부 임팩트:</strong> AWS Lambda 기반 모델 서빙 최적화 도구 및 성능 벤치마킹 플랫폼
          </div>

          <div className="grid grid-cols-1 gap-6">
            {papers.aceInferencePapers.map((paper, index) => (
              <PaperItem key={index} paper={paper} className="border-l-4" />
            ))}
          </div>
        </motion.div>

        {/* ACE-Cost Papers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="flex items-center gap-3 pb-3 mb-8 text-3xl font-bold border-b-4 text-primary-800 border-primary-300">
            <img 
              src={getAssetUrl(ASSET_PATHS.images.aceCost)} 
              alt="ACE-Cost Icon" 
              className="w-12 h-12 object-contain"
            />
            ACE-Cost: 스팟 인스턴스 최적화 시스템
          </h3>
          <div className="p-7 mb-8 text-base leading-relaxed bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500 shadow-md text-secondary-700">
            <strong className="text-blue-800">핵심 기술:</strong> 스팟 인스턴스 안정성 예측 및 유휴 클라우드 자원 최적화 (99.99% 안정성)
            <br />
            <strong className="text-blue-800">외부 임팩트:</strong> SpotLake 데이터 아카이브 서비스 및 멀티클라우드(3개사) 지원 시스템
          </div>

          <div className="grid grid-cols-1 gap-6">
            {papers.aceCostPapers.map((paper, index) => (
              <PaperItem key={index} paper={paper} className="border-l-4" />
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default ResearchDevelopmentSection;
