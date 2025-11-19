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
    <>
    <div className="flex flex-col gap-24 pb-32 container-custom">
      <div className=''>
        <ProjectHeader project={project} />
        <ACEArchitectureImage />
      </div>
      
      <AchievementsSection achievements={achievements} />
     

      <ResearchDevelopmentSection papers={papers} />

      <CallistoSection />

      <OpenSourceSection software={software} />

      <HumanResourcesSection training={training} />

     
      <div className='text-center'>
        <ACEModulesSection modules={modules} futureModules={futureModules} />
        {/* 한양대학교 분산데이터처리시스템 연구실은 1단계 성과를 기반으로 성공적으로 2단계 연구개발을 진행하겠습니다. */}
      </div>
    </div>
    {/* 퓨터 */}
    <footer className="py-10 w-full text-sm text-center border-t text-secondary-600 border-secondary-100 bg-white/70">
      &copy; {new Date().getFullYear()} 한양대학교 분산데이터처리시스템 연구실 | DDPS Lab
    </footer>
    </>
  );
};

export default MainPage;