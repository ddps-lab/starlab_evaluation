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
    <div className={cn('card group', className)}>
      <div className="flex gap-4 items-center mb-6">
        {icon && (
          <img
            src={getAssetUrl(`/assets/images/${icon}`)}
            alt={title}
            className="flex justify-center items-center w-16 h-16 text-2xl rounded-full shadow-lg transition-transform duration-300 shadow-primary-500/20 group-hover:scale-110"
          />
        )}
        <div className="text-xl font-bold transition-colors text-secondary-900 group-hover:text-primary-600">{title}</div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        {metrics.map((metric, index) => (
          <div 
            key={index} 
            className="w-full bg-secondary-50/50 backdrop-blur-sm px-5 py-3.5 rounded-xl text-left text-base font-medium text-secondary-600 flex items-center justify-start gap-3 border border-secondary-100 transition-all duration-300 group-hover:bg-primary-50/50 group-hover:border-primary-100 group-hover:text-primary-700"
          >
            {metric}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleCard;