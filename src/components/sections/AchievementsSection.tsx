import React from 'react';
import { motion } from 'framer-motion';
import { ModuleCard } from '../ui/ModuleCard';

interface AchievementsSectionProps {
  achievements: {
    quantitative: string[];
    technical: string[];
    impact: string[];
    humanResources: string[];
  };
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="mb-16">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 section-title"
      >
        1단계 최종 성과 요약 (2022-2025)
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 items-stretch md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-full"
        >
          <ModuleCard
            title="정량적 성과"
            metrics={achievements.quantitative}
            className="h-full"
            icon="level1_1.png"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-full"
        >
          <ModuleCard
            title="기술적 성과"
            metrics={achievements.technical}
            className="h-full"
            icon="level1_2.png"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-full"
        >
          <ModuleCard
            title="인력양성 성과"
            metrics={achievements.humanResources}
            className="h-full"
            icon="level1_3.png"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;