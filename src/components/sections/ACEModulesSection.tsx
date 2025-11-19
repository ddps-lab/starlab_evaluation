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
        <h2 className="main-section-title">2단계 연구개발 계획 및 기대효과</h2>
                    {/* ACE-AI 2.0 Architecture Diagram */}
        <div style={{
          width: '100%',
          margin: '32px auto',
          borderRadius: '12px',
          display: 'block',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
        }}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ACE-AI-v2.png`}
            alt="ACE-AI 2.0 Architecture"
            style={{
              width: '80%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </div>
        <div className="modules-grid modules-grid-4col">
          {futureModules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>


      </section>
    </>
  );
};

export default ACEModulesSection;
