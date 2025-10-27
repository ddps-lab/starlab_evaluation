import React from 'react';
import TrainingItem from '../TrainingItem';
import { TrainingData } from '../../app/types';

interface HumanResourcesSectionProps {
  training: TrainingData[];
}

export const HumanResourcesSection: React.FC<HumanResourcesSectionProps> = ({ training }) => {
  return (
    <section id="human-resources">
      <h2 className="main-section-title">인력양성 추진 실적 (2022-2025)</h2>

      <div className="content-section">
        <div className="training-timeline">
          {training.map((item, index) => (
            <TrainingItem key={index} training={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanResourcesSection;
