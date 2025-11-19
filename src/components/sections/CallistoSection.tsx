import React from 'react';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../../app/utils';
import { ASSET_PATHS, EXTERNAL_LINKS } from '../../app/config/constants';

export const CallistoSection: React.FC = () => {
  return (
    <section className="mb-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden relative p-12 rounded-3xl border shadow-2xl backdrop-blur-md transition-all duration-300 bg-white/90 border-white/50 hover:shadow-2xl"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-3 justify-center items-center mb-10 text-center section-title"
        >
          Callisto: ACE-AI 모듈 통합 서비스
          <a 
            href={EXTERNAL_LINKS.github.callisto} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img
              src={getAssetUrl(ASSET_PATHS.images.githubIcon)}
              alt="GitHub Icon"
              className="h-[2rem] align-middle mb-1.5 drop-shadow-lg"
            />
          </a>
        </motion.h2>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          src={getAssetUrl(ASSET_PATHS.images.aceCallisto)}
          alt="ACE Callisto"
          className="w-full max-w-[550px] h-auto mx-auto my-10 block drop-shadow-xl rounded-lg"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: '비용 효율성', value: '~77%', description: '상용 플랫폼 대비 비용 절감으로 입증된 경제성', color: 'from-blue-500 to-blue-600' },
            { title: '오픈소스 생태계', value: '깃허브 공개', description: '커뮤니티 기반 지속적 발전 및 투명성 확보', color: 'from-indigo-500 to-indigo-600' },
            { title: '혁신적 기술 융합', value: '플랫폼 통합', description: '서버리스 컴퓨팅과 스팟 인스턴스의 최적 결합', color: 'from-purple-500 to-purple-600' },
            { title: '우수성 입증', value: 'KCC 2025', description: '한국정보과학회 주관 학술 대회에서 우수논문상 수상', color: 'from-pink-500 to-pink-600' }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="text-center card group"
            >
              <h4 className="mb-3 text-lg font-semibold transition-colors text-secondary-700 group-hover:text-primary-700">{card.title}</h4>
              <div className={`text-4xl font-extrabold bg-gradient-to-r ${card.color} bg-clip-text text-transparent mb-4 drop-shadow-sm`}>{card.value}</div>
              <p className="text-sm leading-relaxed transition-colors text-secondary-600 group-hover:text-secondary-800">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CallistoSection;
