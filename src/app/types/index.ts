// Core Types
export interface ProjectData {
  title: string;
  subtitle: string;
  code: string;
  description?: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

// Component Props Types
export interface ModuleCardProps {
  title: string;
  description: string;
  metrics: MetricItem[];
  className?: string;
  icon?: string;
}

// Research & Publications Types
export interface PaperData {
  title: string;
  venue: string;
  grade?: 'SCIE' | 'excellent' | 'good' | 'demo' | 'workshop' | 'poster';
  impact: string;
  image?: string;
  pdfUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  acmUrl?: string;
  ieeeUrl?: string;
}

export interface SoftwareData {
  title: string;
  description: string;
  url: string;
  stars: number;
}

export interface TrainingData {
  title: string;
  description: string;
  participants: string[];
  className?: string;
  icon?: string;
}

// Site Data Structure
export interface SiteData {
  project: ProjectData;
  modules: ModuleCardProps[];
  papers: {
    aceTrainPapers: PaperData[];
    aceCostPapers: PaperData[];
    aceInferencePapers: PaperData[];
  };
  software: SoftwareData[];
  training: TrainingData[];
  achievements: {
    quantitative: MetricItem[];
    technical: MetricItem[];
    impact: MetricItem[];
    humanResources: MetricItem[];
  };
  futureModules: ModuleCardProps[];
}

// Common Component Props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
}