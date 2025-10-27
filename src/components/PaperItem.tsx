import React from 'react';
import { PaperData } from '../app/types';
import ActionButton from './ui/ActionButton';
import GradeBadge from './ui/GradeBadge';

interface PaperItemProps {
  paper: PaperData;
  className?: string;
}

const PaperItem: React.FC<PaperItemProps> = ({ paper, className = '' }) => {

  return (
    <div className={`paper-item ${className}`}>
      <div className="paper-header">
        <div className="paper-title">{paper.title}</div>
        {paper.grade && (
          <GradeBadge grade={paper.grade as any} />
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
          <ActionButton
            label="PDF"
            url={paper.pdfUrl}
            variant="primary"
            className="paper-action-btn"
          />
        )}
        {paper.acmUrl && (
          <ActionButton
            label="ACM"
            url={paper.acmUrl}
            variant="secondary"
            className="paper-action-btn"
          />
        )}
        {paper.ieeeUrl && (
          <ActionButton
            label="IEEE"
            url={paper.ieeeUrl}
            variant="secondary"
            className="paper-action-btn"
          />
        )}
        
        {paper.githubUrl && (
          <ActionButton
            label="GitHub"
            url={paper.githubUrl}
            variant="secondary"
            className="paper-action-btn"
          />
        )}
        {paper.websiteUrl && (
          <ActionButton
            label="Website"
            url={paper.websiteUrl}
            variant="secondary"
            className="paper-action-btn"
          />
        )}
      </div>
    </div>
  );
};

export default PaperItem;