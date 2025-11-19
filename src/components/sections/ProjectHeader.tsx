import React from 'react';
import { motion } from 'framer-motion';
import { ProjectData } from '../../app/types';
import { getAssetUrl } from '../../app/utils';
import { ASSET_PATHS } from '../../app/config/constants';

interface ProjectHeaderProps {
  project: ProjectData;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mt-[120px] mb-12 text-center"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <div className="flex gap-4 items-center">
          <div className="flex gap-5 justify-center items-center">
            <img 
              src={getAssetUrl(ASSET_PATHS.images.logos)} 
              alt="" 
              className="object-contain h-16 drop-shadow-lg" 
            />
          </div>
        </div>
      </motion.div>
      <div className="max-w-[1000px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4 text-3xl font-extrabold tracking-tight leading-tight md:text-4xl text-secondary-900"
        >
          {project.title}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 text-2xl font-bold md:text-3xl text-primary-600"
        >
          {project.subtitle}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-block px-6 py-3 text-lg font-medium rounded-full border shadow-sm backdrop-blur-sm text-secondary-600 bg-white/50 border-secondary-200/50"
        >
          {project.code}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default ProjectHeader;