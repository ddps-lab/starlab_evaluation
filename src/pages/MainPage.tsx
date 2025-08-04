import React from 'react';
import { ModuleCard } from '../components/ui';
import { PaperItem, SoftwareItem, TrainingItem } from '../components';
import { ProjectHeader, AchievementsSection } from '../components/sections';
import { useSiteData } from '../app/hooks';
import { getAssetUrl } from '../app/utils';
import { ASSET_PATHS, EXTERNAL_LINKS } from '../app/config/constants';

const MainPage: React.FC = () => {
  const { project, achievements, modules, papers, software, training, futureModules } = useSiteData();

  return (
    <div className="container">
      <ProjectHeader project={project} />

      {/* ACE-AI Core Technology Architecture */}
      <img 
        src={getAssetUrl(ASSET_PATHS.images.aceAI)} 
        alt="ACE-AI System Architecture" 
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '12px',
          margin: '32px auto',
          display: 'block',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
        }}
      />

      <AchievementsSection achievements={achievements} />

      {/* Research Development Results */}
      <section id="research-development">
        <h2 className="main-section-title">연구 개발 성과 (2022-2025)</h2>
        
        <div className="summary-card">
          <div className="summary-content">
            <h3>전체 논문 발표 성과 총계</h3>
            <p><strong>총 19편 (해외학회 9편, 국내학회 10편) | SCIE급 1편, 최우수 1편, 우수 4편, 워크샵 2편, 데모 1편</strong></p>
          </div>
        </div>

        <div className="content-section">
          {/* ACE-Train Papers */}
          <div className="research-module-section ace-train">
            <h3 className="research-module-title">ACE-Train: 딥러닝 학습 시간 예측 시스템</h3>
            <div className="research-module-summary">
              <strong>핵심 기술:</strong> 하드웨어 메트릭 기반 딥러닝 학습 시간 예측 알고리즘 (정확도 94.48%)
              <br />
              <strong>외부 임팩트:</strong> GPU 클라우드 환경에서 비용 효율적 학습 환경 구성을 위한 예측 시스템
            </div>
            
            <div className="research-papers-grid">
              {papers.aceTrainPapers.map((paper, index) => (
                <PaperItem key={index} paper={paper} className="ace-train" />
              ))}
            </div>
          </div>

          {/* ACE-Cost Papers */}
          <div className="research-module-section ace-cost">
            <h3 className="research-module-title">ACE-Cost: 스팟 인스턴스 최적화 시스템</h3>
            <div className="research-module-summary">
              <strong>핵심 기술:</strong> 스팟 인스턴스 안정성 예측 및 유휴 클라우드 자원 최적화 (99.99% 안정성)
              <br />
              <strong>외부 임팩트:</strong> SpotLake 데이터 아카이브 서비스 및 멀티클라우드(3개사) 지원 시스템
            </div>
            
            <div className="research-papers-grid">
              {papers.aceCostPapers.map((paper, index) => (
                <PaperItem key={index} paper={paper} className="ace-cost" />
              ))}
            </div>
          </div>

          {/* ACE-Inference Papers */}
          <div className="research-module-section ace-inference">
            <h3 className="research-module-title">ACE-Inference: 서버리스 추론 최적화 시스템</h3>
            <div className="research-module-summary">
              <strong>핵심 기술:</strong> 서버리스 환경에서 딥러닝 모델 추론 성능 예측 및 최적화 (4-5배 성능 향상)
              <br />
              <strong>외부 임팩트:</strong> AWS Lambda 기반 모델 서빙 최적화 도구 및 성능 벤치마킹 플랫폼
            </div>
            
            <div className="research-papers-grid">
              {papers.aceInferencePapers.map((paper, index) => (
                <PaperItem key={index} paper={paper} className="ace-inference" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Callisto Integration Platform */}
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

      {/* Open Source Software Results */}
      <section id="open-software" className="modules-section">
        <h2 className="section-title">공개 SW 성과 (2022-2025)</h2>
        <div className="summary-card">
          <div className="summary-content">
            <h3>전체 공개 SW 성과 총계</h3>
            <p><strong>908개 스타, 9,112개 커밋, 1,012개 이슈, 978개 PR</strong></p>
          </div>
        </div>
        
        <div className="content-section">
          <div className="software-list">
            {software.map((item, index) => (
              <SoftwareItem key={index} software={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Human Resources Training Results */}
      <section id="human-resources">
        <h2 className="main-section-title">인력양성 추진 실적 (2022-2025)</h2>
        
        <div className="content-section">
          <div className="training-timeline">
            {training.map((item, index) => (
              <TrainingItem key={index} training={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Research Modules Status */}
      <section id="core-modules">
        <h2 className="main-section-title">ACE-AI 핵심 모듈별 달성 현황 (2022-2025)</h2>
        
        <div className="content-section">
          <div className="modules-grid modules-grid-3col">
            {modules.map((module, index) => (
              <ModuleCard key={index} {...module} />
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans and Phase 2 Outlook */}
      <section className="modules-section">
        <h2 className="section-title">2단계 연구개발 계획 및 기대효과</h2>
        <div className="modules-grid modules-grid-3col">
          {futureModules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;