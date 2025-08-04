import { SiteData } from '../types';
import { 
  projectData, 
  achievementsData, 
  modulesData, 
  futureModulesData, 
  papersData, 
  softwareData, 
  trainingData 
} from '../../data';

/**
 * Data Service Layer
 * Provides an abstraction layer for data access
 */
export class DataService {
  private static instance: DataService;
  private data: SiteData;

  private constructor() {
    this.data = {
      project: projectData,
      achievements: achievementsData,
      modules: modulesData,
      futureModules: futureModulesData,
      papers: papersData,
      software: softwareData,
      training: trainingData
    };
  }

  public static getInstance(): DataService {
    if (!DataService.instance) {
      DataService.instance = new DataService();
    }
    return DataService.instance;
  }

  /**
   * Get all site data
   */
  public getSiteData(): SiteData {
    return this.data;
  }

  /**
   * Get project information
   */
  public getProject() {
    return this.data.project;
  }

  /**
   * Get achievements data
   */
  public getAchievements() {
    return this.data.achievements;
  }

  /**
   * Get modules data
   */
  public getModules() {
    return this.data.modules;
  }

  /**
   * Get papers data
   */
  public getPapers() {
    return this.data.papers;
  }

  /**
   * Get all papers in a flat array
   */
  public getAllPapers() {
    return [
      ...this.data.papers.aceTrainPapers,
      ...this.data.papers.aceCostPapers,
      ...this.data.papers.aceInferencePapers,
    ];
  }

  /**
   * Get software data
   */
  public getSoftware() {
    return this.data.software;
  }

  /**
   * Get training data
   */
  public getTraining() {
    return this.data.training;
  }

  /**
   * Get future modules data
   */
  public getFutureModules() {
    return this.data.futureModules;
  }

  /**
   * Search papers by title or venue
   */
  public searchPapers(query: string) {
    const allPapers = this.getAllPapers();
    return allPapers.filter(
      paper =>
        paper.title.toLowerCase().includes(query.toLowerCase()) ||
        paper.venue.toLowerCase().includes(query.toLowerCase())
    );
  }

  /**
   * Get papers by grade
   */
  public getPapersByGrade(grade: string) {
    const allPapers = this.getAllPapers();
    return allPapers.filter(paper => paper.grade === grade);
  }
}

// Export singleton instance
export const dataService = DataService.getInstance();