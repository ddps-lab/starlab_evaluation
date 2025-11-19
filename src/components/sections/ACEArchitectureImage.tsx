import React from 'react';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../../app/utils';
import { ASSET_PATHS } from '../../app/config/constants';

const ACEArchitectureImage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full p-4 mx-auto block card hover:shadow-xl transition-all duration-300"
    >
      <img
        src={getAssetUrl(ASSET_PATHS.images.aceAI)}
        alt="ACE-AI System Architecture"
        className="w-[90%] md:w-[80%] h-auto block mx-auto object-contain rounded-lg"
      />
    </motion.div>
  );
};

export default ACEArchitectureImage;
