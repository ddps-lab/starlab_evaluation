import React from 'react';
import {
  ProjectHeader,
  AchievementsSection,
  ResearchDevelopmentSection,
  CallistoSection,
  OpenSourceSection,
  HumanResourcesSection,
  ACEModulesSection,
  ACEArchitectureImage
} from '../components/sections';
import { useSiteData } from '../app/hooks';

const MainPage: React.FC = () => {
  const { project, achievements, modules, papers, software, training, futureModules } = useSiteData();

  return (
    <div className="container">
      <ProjectHeader project={project} />

      <ACEArchitectureImage />

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