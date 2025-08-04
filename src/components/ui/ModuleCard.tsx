import React from 'react';
import { ModuleCardProps } from '../../app/types';
import { cn, getAssetUrl } from '../../app/utils';

export const ModuleCard: React.FC<ModuleCardProps> = ({ 
  title, 
  description, 
  metrics, 
  className = '', 
  icon 
}) => {
  return (
    <div className={cn('module-card', className)}>
      <div className="module-header">
        {icon && (
          <div 
            className="module-icon" 
            style={{ backgroundImage: `url(${getAssetUrl(`/assets/images/${icon}`)})` }}
          />
        )}
        <div className="module-title">{title}</div>
      </div>
      <div className="module-description">{description}</div>
      <div className="module-metrics">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-item">
            <div className="metric-label">{metric.label}</div>
            <div className="metric-value">{metric.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleCard;