import React from 'react';
import SoftwareItem from '../SoftwareItem';
import { SoftwareData } from '../../app/types';

interface OpenSourceSectionProps {
  software: SoftwareData[];
}

export const OpenSourceSection: React.FC<OpenSourceSectionProps> = ({ software }) => {
  return (
    <section id="open-software" className="modules-section">
      <h2 className="main-section-title">공개 SW 성과 (2022-2025)</h2>
      <div className="summary-card">
        <div className="summary-content">
          <h3>전체 공개 SW 성과 총계</h3>
          <p><strong>908개 스타, 9,112개 커밋, 1,012개 이슈, 978개 PR</strong></p>
        </div>
      </div>

      <div className="content-section">
        <div className="software-list">
          {software.map((item, index) => (
            <SoftwareItem key={index} software={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
