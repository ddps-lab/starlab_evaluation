import React from 'react';
import { ModuleCardProps } from '../../app/types';
import { cn, getAssetUrl } from '../../app/utils';

export const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
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
      <div className="module-metrics">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-item">
            {metric}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleCard;