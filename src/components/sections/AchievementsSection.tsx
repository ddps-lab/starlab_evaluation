import React from 'react';
import { ModuleCard } from '../ui/ModuleCard';
import { MetricItem } from '../../app/types';

interface AchievementsSectionProps {
  achievements: {
    quantitative: MetricItem[];
    technical: MetricItem[];
    impact: MetricItem[];
    humanResources: MetricItem[];
  };
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  return (
    <section className="modules-section">
      <h2 className="section-title">1단계 최종 성과 요약 (2022-2025)</h2>
      <div className="modules-grid">
        <ModuleCard
          title="📊 정량적 성과"
          description="논문, 특허, 공개SW, 인력양성 등 정량적 연구개발 성과 달성 현황"
          metrics={achievements.quantitative}
          className="ace-train"
        />
        <ModuleCard
          title="🔬 기술적 성과"
          description="핵심 알고리즘 개발 완료 및 기술적 혁신성 달성 현황"
          metrics={achievements.technical}
          className="ace-cost"
        />
        <ModuleCard
          title="🌍 파급 효과"
          description="연구성과의 활용 및 사회적 파급효과, 국내 기술 경쟁력 확보 기여도"
          metrics={achievements.impact}
          className="ace-inference"
        />
        <ModuleCard
          title="🎓 인력양성 성과"
          description="배출인력 현황 및 진로"
          metrics={achievements.humanResources}
          className="ace-blue"
        />
      </div>
    </section>
  );
};

export default AchievementsSection;