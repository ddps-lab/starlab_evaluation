import React from 'react';

type GradeType = 'SCIE' | 'excellent' | 'good' | 'demo' | 'workshop' | 'poster';

interface GradeBadgeProps {
  grade: GradeType;
  className?: string;
}

const GradeBadge: React.FC<GradeBadgeProps> = ({ grade, className = '' }) => {
  const gradeConfig: Record<GradeType, { text: string; class: string }> = {
    SCIE: { text: 'SCIE', class: 'grade-badge--scie' },
    excellent: { text: '최우수', class: 'grade-badge--excellent' },
    good: { text: '우수', class: 'grade-badge--good' },
    demo: { text: '데모', class: 'grade-badge--demo' },
    workshop: { text: '워크샵', class: 'grade-badge--workshop' },
    poster: { text: '포스터', class: 'grade-badge--poster' },
  };

  const config = gradeConfig[grade];
  if (!config) return null;

  return (
    <span className={`grade-badge ${config.class} ${className}`}>
      {config.text}
    </span>
  );
};

export default GradeBadge;
