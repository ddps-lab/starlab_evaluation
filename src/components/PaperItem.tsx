import React from 'react';
import { motion } from 'framer-motion';
import { PaperData } from '../app/types';
import ActionButton from './ui/ActionButton';
import GradeBadge from './ui/GradeBadge';

interface PaperItemProps {
  paper: PaperData;
  className?: string;
}

const PaperItem: React.FC<PaperItemProps> = ({ paper, className = '' }) => {

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`card group ${className}`}
    >
      <div className="flex gap-8 justify-between items-start mb-3">
        <div className="text-xl font-bold leading-tight transition-colors text-secondary-900 group-hover:text-primary-600">
          {paper.title}
        </div>
        {paper.grade && (
          <GradeBadge grade={paper.grade as any} />
        )}
      </div>
      <div className="text-sm font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3 py-1.5 rounded-lg inline-block self-start">
        {paper.venue}
      </div>
      
      {paper.image && (
        <div className="my-2">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/${paper.image}`} 
            alt={paper.title}
            className="w-full max-w-[450px] h-auto rounded-xl hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      )}
      
      <div className="text-base leading-relaxed text-secondary-700">
        {paper.impact.split('\\n').map((line, index) => (
          <div key={index}>
            {line.includes(':') ? (
              <>
                <strong className="text-secondary-900">{line.split(':')[0]}:</strong>
                {line.split(':')[1]}
              </>
            ) : (
              line
            )}
            {index < paper.impact.split('\\n').length - 1 && <br />}
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-3 items-center mt-2">
        {paper.pdfUrl && (
          <ActionButton
            label="PDF"
            url={paper.pdfUrl}
            variant="primary"
            className="px-4 py-2 text-sm font-semibold"
          />
        )}
        {paper.acmUrl && (
          <ActionButton
            label="ACM"
            url={paper.acmUrl}
            variant="secondary"
            className="px-4 py-2 text-sm font-semibold"
          />
        )}
        {paper.ieeeUrl && (
          <ActionButton
            label="IEEE"
            url={paper.ieeeUrl}
            variant="secondary"
            className="px-4 py-2 text-sm font-semibold"
          />
        )}
        
        {paper.githubUrl && (
          <ActionButton
            label="GitHub"
            url={paper.githubUrl}
            variant="secondary"
            className="px-4 py-2 text-sm font-semibold"
          />
        )}
        {paper.websiteUrl && (
          <ActionButton
            label="Website"
            url={paper.websiteUrl}
            variant="secondary"
            className="px-4 py-2 text-sm font-semibold"
          />
        )}
      </div>
    </motion.div>
  );
};

export default PaperItem;