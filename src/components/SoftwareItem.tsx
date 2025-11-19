import React from 'react';
import { motion } from 'framer-motion';
import { SoftwareData } from '../app/types';

interface SoftwareItemProps {
  software: SoftwareData;
}

const SoftwareItem: React.FC<SoftwareItemProps> = ({ software }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="card group"
    >
      <div className="text-xl font-bold text-secondary-900 flex items-center gap-3 mb-3">
        <a 
          href={software.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-secondary-900 group-hover:text-primary-600 transition-colors flex items-center gap-2"
        >
          {software.title}
        </a>
        <span className="text-base font-semibold text-amber-500 flex items-center gap-1">
          ⭐️ {software.stars}
        </span>
      </div>
      <div className="text-base text-secondary-700 leading-relaxed group-hover:text-secondary-900 transition-colors">
        {software.description}
      </div>
    </motion.div>
  );
};

export default SoftwareItem;