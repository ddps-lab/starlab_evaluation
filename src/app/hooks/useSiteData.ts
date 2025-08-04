import { useMemo } from 'react';
import { dataService } from '../services/dataService';

export const useSiteData = () => {
  const siteData = useMemo(() => dataService.getSiteData(), []);
  
  const project = useMemo(() => dataService.getProject(), []);
  const achievements = useMemo(() => dataService.getAchievements(), []);
  const modules = useMemo(() => dataService.getModules(), []);
  const papers = useMemo(() => dataService.getPapers(), []);
  const software = useMemo(() => dataService.getSoftware(), []);
  const training = useMemo(() => dataService.getTraining(), []);
  const futureModules = useMemo(() => dataService.getFutureModules(), []);
  
  return {
    siteData,
    project,
    achievements,
    modules,
    papers,
    software,
    training,
    futureModules,
    // Utility methods
    getAllPapers: () => dataService.getAllPapers(),
    searchPapers: (query: string) => dataService.searchPapers(query),
    getPapersByGrade: (grade: string) => dataService.getPapersByGrade(grade),
  };
};

export default useSiteData;