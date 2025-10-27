import React from 'react';
import {
  ProjectHeader,
  AchievementsSection,
  ResearchDevelopmentSection,
  CallistoSection,
  OpenSourceSection,
  HumanResourcesSection,
  ACEModulesSection
} from '../components/sections';
import { useSiteData } from '../app/hooks';
import { getAssetUrl } from '../app/utils';
import { ASSET_PATHS } from '../app/config/constants';

const MainPage: React.FC = () => {
  const { project, achievements, modules, papers, software, training, futureModules } = useSiteData();

  return (
    <div className="container">
      <ProjectHeader project={project} />

      {/* ACE-AI Core Technology Architecture */}
      <img 
        src={getAssetUrl(ASSET_PATHS.images.aceAI)} 
        alt="ACE-AI System Architecture" 
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '12px',
          margin: '32px auto',
          display: 'block',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
        }}
      />

      <AchievementsSection achievements={achievements} />

      <ResearchDevelopmentSection papers={papers} />

      <CallistoSection />

      <OpenSourceSection software={software} />

      <HumanResourcesSection training={training} />

      <ACEModulesSection modules={modules} futureModules={futureModules} />
    </div>
  );
};

export default MainPage;