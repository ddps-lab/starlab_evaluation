import React, { useState, useEffect } from 'react';

const StickyNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScroll > 300) {
        if (currentScroll > lastScrollTop && !isScrollingDown) {
          // Scrolling down
          setIsVisible(true);
          setIsScrollingDown(true);
        } else if (currentScroll < lastScrollTop && isScrollingDown) {
          // Scrolling up
          setIsScrollingDown(false);
        }
      } else {
        // Hide nav when near top
        setIsVisible(false);
        setIsScrollingDown(false);
      }
      
      setLastScrollTop(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop, isScrollingDown]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`sticky-nav ${!isVisible ? 'hidden' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <a href="https://ddps.cloud" target="_blank" rel="noopener noreferrer">
            DDPS Lab
          </a>
        </div>
        <ul className="nav-menu">
          <li>
            <a 
              href="#research-development" 
              className="nav-link"
              onClick={(e) => handleNavClick(e, '#research-development')}
            >
              연구 개발
            </a>
          </li>
          <li>
            <a 
              href="#open-software" 
              className="nav-link"
              onClick={(e) => handleNavClick(e, '#open-software')}
            >
              공개 SW
            </a>
          </li>
          <li>
            <a 
              href="#human-resources" 
              className="nav-link"
              onClick={(e) => handleNavClick(e, '#human-resources')}
            >
              인력양성
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default StickyNav;