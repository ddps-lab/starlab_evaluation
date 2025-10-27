import React from 'react';
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
        <h2 className="main-section-title">ACE-AI 핵심 모듈별 달성 현황 (2022-2025)</h2>

        <div className="content-section">
          <div className="modules-grid modules-grid-3col">
            {modules.map((module, index) => (
              <ModuleCard key={index} {...module} />
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans and Phase 2 Outlook */}
      <section className="modules-section">
        <h2 className="section-title">2단계 연구개발 계획 및 기대효과</h2>
        <div className="modules-grid modules-grid-3col">
          {futureModules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ACEModulesSection;
