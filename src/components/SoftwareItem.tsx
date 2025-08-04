import React from 'react';
import { SoftwareData } from '../app/types';

interface SoftwareItemProps {
  software: SoftwareData;
}

const SoftwareItem: React.FC<SoftwareItemProps> = ({ software }) => {
  return (
    <div className="software-item">
      <div className="software-title">
        <a href={software.url} target="_blank" rel="noopener noreferrer">
          {software.title}
        </a>
        {' ⭐️ ' + software.stars}
      </div>
      <div className="software-desc">{software.description}</div>
    </div>
  );
};

export default SoftwareItem;