// App Configuration Constants
export const APP_CONFIG = {
  name: 'ACE-AI Research Platform',
  version: '1.0.0',
  description: 'ACE-AI 프로젝트 연구개발 성과 포털',
} as const;

// Navigation Configuration
export const NAV_ITEMS = [
  { id: 'research-development', label: '연구개발 성과', href: '#research-development' },
  { id: 'open-software', label: '공개 SW', href: '#open-software' },
  { id: 'human-resources', label: '인력 양성', href: '#human-resources' },
  { id: 'core-modules', label: '핵심 모듈', href: '#core-modules' },
] as const;

// Asset Paths
export const ASSET_PATHS = {
  images: {
    logos: '/assets/images/logos.png',
    aceAI: '/assets/images/ACE-AI.png',
    aceCallisto: '/assets/images/ACE-Callisto.png',
    githubIcon: '/assets/images/GitHub_Invertocat_Dark.png',
    iitpLogo: '/assets/images/IITP_logo.png',
    ictLogo: '/assets/images/ICT_logo.png',
    starlabLogo: '/assets/images/Starlab_logo.png',
    ddpsLogo: '/assets/images/DDPS_logo.png',
  },
} as const;

// External Links
export const EXTERNAL_LINKS = {
  github: {
    callisto: 'https://github.com/ddps-lab/Callisto',
  },
} as const;

// Component Class Names
export const CLASS_NAMES = {
  modules: {
    aceTrain: 'ace-train',
    aceCost: 'ace-cost',
    aceInference: 'ace-inference',
    aceBlue: 'ace-blue',
  },
} as const;