import React from 'react';
import { PaperData } from '../app/types';

interface PaperItemProps {
  paper: PaperData;
  className?: string;
}

const PaperItem: React.FC<PaperItemProps> = ({ paper, className = '' }) => {
  const getGradeBadgeClass = (grade?: string) => {
    switch (grade) {
      case 'SCIE':
        return 'grade-scie';
      case 'excellent':
        return 'grade-excellent';
      case 'good':
        return 'grade-good';
      case 'demo':
        return 'grade-good';
      case 'workshop':
        return 'grade-good';
      case 'poster':
        return 'grade-good';
      default:
        return '';
    }
  };

  const getGradeText = (grade?: string) => {
    switch (grade) {
      case 'SCIE':
        return 'SCIE';
      case 'excellent':
        return '최우수';
      case 'good':
        return '우수';
      case 'demo':
        return '데모';
      case 'workshop':
        return '워크샵';
      case 'poster':
        return '포스터';
      default:
        return '';
    }
  };

  return (
    <div className={`paper-item ${className}`}>
      <div className="paper-header">
        <div className="paper-title">{paper.title}</div>
        {paper.grade && (
          <span className={`grade-badge ${getGradeBadgeClass(paper.grade)}`}>
            {getGradeText(paper.grade)}
          </span>
        )}
      </div>
      <div className="paper-venue">{paper.venue}</div>
      
      {paper.image && (
        <div className="paper-image">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/${paper.image}`} 
            alt={paper.title}
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '8px',
              margin: '10px 0'
            }}
          />
        </div>
      )}
      
      <div className="paper-impact">
        {paper.impact.split('\\n').map((line, index) => (
          <div key={index}>
            {line.includes(':') ? (
              <>
                <strong>{line.split(':')[0]}:</strong>
                {line.split(':')[1]}
              </>
            ) : (
              line
            )}
            {index < paper.impact.split('\\n').length - 1 && <br />}
          </div>
        ))}
      </div>
      
      <div className="paper-actions">
        {paper.pdfUrl && (
          <a 
            href={paper.pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="paper-btn pdf-btn"
          >
            PDF
          </a>
        )}
        {paper.githubUrl && (
          <a 
            href={paper.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="paper-btn github-btn"
          >
            GitHub
          </a>
        )}
        {paper.websiteUrl && (
          <a 
            href={paper.websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="paper-btn github-btn"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
};

export default PaperItem;