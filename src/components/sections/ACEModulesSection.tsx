import React from 'react';
import { motion } from 'framer-motion';
import { ModuleCard } from '../ui';
import { ModuleCardProps } from '../../app/types';

interface ACEModulesSectionProps {
  modules: ModuleCardProps[];
  futureModules: ModuleCardProps[];
}

export const ACEModulesSection: React.FC<ACEModulesSectionProps> = ({ modules, futureModules }) => {
  return (
    <>
      {/* Core Research Modules Status */}
      <section id="core-modules">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 section-title"
        >
          ACE-AI 핵심 모듈별 달성 현황 (2022-2025)
        </motion.h2>

        <div className="mb-16">
          <div className="grid grid-cols-1 gap-8 items-stretch md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <ModuleCard {...module} className="h-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans and Phase 2 Outlook */}
      <section id="future-plans" className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 section-title"
        >
          2단계 연구개발 계획 및 기대효과
        </motion.h2>
        {/* ACE-AI 2.0 Architecture Diagram */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="block p-8 mx-auto my-10 w-full card hover:shadow-2xl"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ACE-AI-v2.png`}
            alt="ACE-AI 2.0 Architecture"
            className="w-[80%] h-auto block mx-auto object-contain rounded-lg"
          />
        </motion.div>
        <div className="grid grid-cols-1 gap-8 items-stretch md:grid-cols-2 lg:grid-cols-3">
          {futureModules.map((module, index) => {
             const isLast = index === futureModules.length - 1;
             let className = "h-full";
             
             if (isLast) {
                // lg 화면에서 3열 중 마지막 1개가 남으므로 전체 너비 사용
                className += " lg:col-span-3";
                
                // 카드 내부 콘텐츠 가운데 정렬 (헤더)
                // [&>div:first-child]: 헤더 (아이콘+제목)
                className += " lg:[&>div:first-child]:justify-center";
             }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={className}
              >
                <ModuleCard {...module} className="h-full" />
              </motion.div>
            );
          })}
        </div>


      </section>
    </>
  );
};

export default ACEModulesSection;
