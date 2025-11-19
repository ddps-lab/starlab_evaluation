import React from 'react';
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
    <section id="achievements">
      <h2 className="main-section-title">1단계 최종 성과 요약 (2022-2025)</h2>
      <div className="modules-grid modules-grid-3col">
        <ModuleCard
          title="📊 정량적 성과"
          metrics={achievements.quantitative}
          className="ace-train"
        />
        <ModuleCard
          title="🔬 기술적 성과"
          metrics={achievements.technical}
          className="ace-cost"
        />
        <ModuleCard
          title="🎓 인력양성 성과"
          metrics={achievements.humanResources}
          className="ace-blue"
        />
      </div>
    </section>
  );
};

export default AchievementsSection;