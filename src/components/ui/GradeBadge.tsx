import React from 'react';

type GradeType = 'SCIE' | 'excellent' | 'good' | 'demo' | 'workshop' | 'poster';

interface GradeBadgeProps {
  grade: GradeType;
  className?: string;
}

const GradeBadge: React.FC<GradeBadgeProps> = ({ grade, className = '' }) => {
  const gradeConfig: Record<GradeType, { text: string; class: string }> = {
    SCIE: { 
      text: 'SCIE', 
      class: 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30' 
    },
    excellent: { 
      text: '최우수', 
      class: 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30' 
    },
    good: { 
      text: '우수', 
      class: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30' 
    },
    demo: { 
      text: '데모', 
      class: 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md shadow-green-500/20' 
    },
    workshop: { 
      text: '워크샵', 
      class: 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20' 
    },
    poster: { 
      text: '포스터', 
      class: 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md shadow-pink-500/20' 
    },
  };

  const config = gradeConfig[grade];
  if (!config) return null;

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 ${config.class} ${className}`}>
      {config.text}
    </span>
  );
};

export default GradeBadge;
