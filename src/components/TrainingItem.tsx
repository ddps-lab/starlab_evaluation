import React from 'react';
import { TrainingData } from '../app/types';

interface TrainingItemProps {
  training: TrainingData;
}

const TrainingItem: React.FC<TrainingItemProps> = ({ training }) => {
  const getIconStyle = () => {
    if (training.icon) {
      if (training.icon === 'reinvent-white.png') {
        return {
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${training.icon})`,
          backgroundColor: '#232f3e'
        };
      } else if (training.icon === 'aws_summit.png') {
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
    <div className={`training-item ${training.className || ''}`}>
      <div 
        className={`training-icon ${training.icon?.replace('.png', '') || ''}`}
        style={getIconStyle()}
      >
        {training.icon === 'aws_summit.png' && (
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/${training.icon}`} 
            alt="AWS Summit" 
            className="summit-logo" 
          />
        )}
        {training.icon === 'Immersion_day.png' && (
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/${training.icon}`} 
            alt="SageMaker Immersion Day" 
            className="immersion-logo" 
          />
        )}
        {training.icon === 'KIISE_logo.png' && (
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/${training.icon}`} 
            alt="한국정보과학회" 
            className="kiise-logo" 
          />
        )}
      </div>
      <div className="training-content">
        <h4>{training.title}</h4>
        <p>{training.description}</p>
        <div className="participation-details">
          {training.participants.map((participant, index) => (
            <span key={index} className="participant-count">
              {participant}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingItem;