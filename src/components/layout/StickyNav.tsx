import React, { useState, useEffect, useCallback } from 'react';
import { NAV_ITEMS } from '../../app/config/constants';
import { scrollToElement, debounce, cn } from '../../app/utils';

export const StickyNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = useCallback(() => {
    const debouncedScroll = debounce(() => {
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
    }, 10);
    
    debouncedScroll();
  }, [lastScrollTop, isScrollingDown]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToElement(targetId.substring(1)); // Remove the # prefix
  };

  return (
    <nav className={cn('sticky-nav', { hidden: !isVisible })}>
      <div className="nav-container">
        <div className="nav-brand">
          <a href="https://ddps.cloud" target="_blank" rel="noopener noreferrer">
            DDPS Lab
          </a>
        </div>
        <ul className="nav-menu">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a 
                href={item.href} 
                className="nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default StickyNav;