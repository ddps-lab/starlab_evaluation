import React from 'react';
import { getAssetUrl } from '../../app/utils';
import { ASSET_PATHS, EXTERNAL_LINKS } from '../../app/config/constants';

export const CallistoSection: React.FC = () => {
  return (
    <section className="modules-section callisto-platform-section">
      <div className="platform-intro-section">
        <h2>
          Callisto: ACE-AI 모듈 통합 서비스
          <a href={EXTERNAL_LINKS.github.callisto} target="_blank" rel="noopener noreferrer">
            <img
              src={getAssetUrl(ASSET_PATHS.images.githubIcon)}
              alt="GitHub Icon"
              style={{
                height: '1.8rem',
                verticalAlign: 'middle',
                marginLeft: '10px',
                marginBottom: '7px'
              }}
            />
          </a>
        </h2>
        <img
          src={getAssetUrl(ASSET_PATHS.images.aceCallisto)}
          alt="ACE Callisto"
          style={{
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
            margin: '20px auto',
            display: 'block',
            borderRadius: '16px'
          }}
        />

        <div className="callisto-unified-grid">
          <div className="callisto-item">
            <h4>비용 효율성</h4>
            <div className="callisto-stat">~77%</div>
            <p>상용 플랫폼 대비 비용 절감으로 입증된 경제성</p>
          </div>
          <div className="callisto-item">
            <h4>오픈소스 생태계</h4>
            <div className="callisto-stat">GitHub 공개</div>
            <p>커뮤니티 기반 지속적 발전 및 투명성 확보</p>
          </div>
          <div className="callisto-item">
            <h4>혁신적 기술 융합</h4>
            <div className="callisto-stat">통합 시스템</div>
            <p>서버리스 컴퓨팅과 스팟 인스턴스의 최적 결합</p>
          </div>
          <div className="callisto-item">
            <h4>우수성 입증</h4>
            <div className="callisto-stat">KCC 2025</div>
            <p>한국정보과학회 주관 학술 대회에서 우수논문상 수상</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallistoSection;
