import React from 'react';
import { ProjectData } from '../../app/types';
import { getAssetUrl } from '../../app/utils';
import { ASSET_PATHS } from '../../app/config/constants';

interface ProjectHeaderProps {
  project: ProjectData;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <header className="gov-header">
      <div className="gov-header-top">
        <div className="ministry-info">
          <div className="logos-container">
            <img 
              src={getAssetUrl(ASSET_PATHS.images.logos)} 
              alt="과학기술정보통신부" 
              className="ministry-logo" 
            />
          </div>
        </div>
      </div>
      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-subtitle">{project.subtitle}</div>
        <div className="project-code">{project.code}</div>
      </div>
    </header>
  );
};

export default ProjectHeader;