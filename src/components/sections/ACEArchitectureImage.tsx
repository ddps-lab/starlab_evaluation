import React from 'react';
import { getAssetUrl } from '../../app/utils';
import { ASSET_PATHS } from '../../app/config/constants';

const ACEArchitectureImage: React.FC = () => {
  return (
    <div style={{ width: '100%',
          margin: '32px auto',
          borderRadius: '12px',
          display: 'block',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'}}>
      <img
        src={getAssetUrl(ASSET_PATHS.images.aceAI)}
        alt="ACE-AI System Architecture"
        style={{
          width: '80%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
        }}
      />
    </div>
  );
};

export default ACEArchitectureImage;
