import React from 'react';
import { TrainingData } from '../app/types';

interface TrainingItemProps {
  training: TrainingData;
}

const TrainingItem: React.FC<TrainingItemProps> = ({ training }) => {
  const getIconStyle = () => {
    if (training.icon) {
      if (training.icon === 'aws_summit.png') {
        return {
          background: 'linear-gradient(135deg, #3498db, #8e44ad)'
        };
      } else {
        return {
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${training.icon})`
        };
      }
    }
    return {
      background: 'linear-gradient(135deg, #1e40af, #3b82f6)'
    };
  };

  return (
    <div className={`card group flex flex-col gap-4 ${training.className || ''}`}>
      <div 
        className={`w-16 h-16 rounded-lg bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden shadow-sm border border-secondary-200 group-hover:scale-105 transition-transform duration-300 ${training.icon?.replace('.png', '') || ''}`}
        style={getIconStyle()}
      >
        {training.icon === 'aws_summit.png' && (
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/${training.icon}`} 
            alt="AWS Summit" 
            className="object-contain p-2 max-w-full max-h-full" 
          />
        )}
        {training.icon === 'Immersion_day.png' && (
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/${training.icon}`} 
            alt="SageMaker Immersion Day" 
            className="object-contain p-2 max-w-full max-h-full" 
          />
        )}
        {training.icon === 'KIISE_logo.png' && (
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/${training.icon}`} 
            alt="한국정보과학회" 
            className="object-contain p-2 max-w-full max-h-full" 
          />
        )}
      </div>
      <div className="flex flex-col flex-grow">
        <h4 className="mb-2 text-xl font-bold text-primary-900">{training.title}</h4>
        <p className="mb-4 text-base leading-relaxed text-secondary-600">{training.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {training.participants.map((participant, index) => (
            <span key={index} className="bg-secondary-100 text-secondary-600 text-sm font-semibold px-2.5 py-1 rounded-full border border-secondary-200">
              {participant}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingItem;