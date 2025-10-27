import React from 'react';
import { NAV_ITEMS } from '../app/config/constants';

const StickyNav: React.FC = () => {

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
    <nav className="sticky-nav">
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