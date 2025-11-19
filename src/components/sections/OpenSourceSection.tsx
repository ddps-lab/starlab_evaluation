import React from 'react';
import { motion } from 'framer-motion';
import SoftwareItem from '../SoftwareItem';
import { SoftwareData } from '../../app/types';

interface OpenSourceSectionProps {
  software: SoftwareData[];
}

export const OpenSourceSection: React.FC<OpenSourceSectionProps> = ({ software }) => {
  return (
    <section id="open-software" className="mb-16">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title mb-10"
      >
        공개 SW 성과 (2022-2025)
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-10 text-center shadow-xl shadow-primary-900/5 mb-12 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] group"
      >
        <div>
          <h3 className="text-3xl font-extrabold text-secondary-900 mb-5 group-hover:text-primary-700 transition-colors">
            전체 공개 SW 성과 총계
          </h3>
          <p className="text-xl text-secondary-700 leading-relaxed">
            <strong className="text-primary-700">837개 스타, 8,142개 커밋, 1,443개 이슈, 1106개 PR</strong>
          </p>
        </div>
      </motion.div>

      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {software.map((item, index) => (
            <SoftwareItem key={index} software={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
