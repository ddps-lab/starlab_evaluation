import React, { useState } from 'react';
import { NAV_ITEMS, ASSET_PATHS } from '../../app/config/constants';
import { scrollToElement, cn, getAssetUrl } from '../../app/utils';

export const StickyNav: React.FC = () => {
  // Always visible
  const isVisible = true;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    scrollToElement(targetId.substring(1)); // Remove the # prefix
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={cn(
      'flex fixed top-0 right-0 left-0 z-50 items-center border-b shadow-sm backdrop-blur-md transition-all duration-500 ease-in-out bg-white/80 border-secondary-200/60 h-[70px]',
      { 'opacity-100 translate-y-0': isVisible, 'opacity-0 -translate-y-full': !isVisible }
    )}>
      <div className="w-full max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://ddps.cloud" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img 
              src={getAssetUrl(ASSET_PATHS.images.ddpsLogo)} 
              alt="DDPS Lab" 
              className="object-contain w-auto h-10 transition-opacity hover:opacity-80"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 list-none md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a 
                href={item.href} 
                className="text-secondary-600 font-medium text-base py-2 relative hover:text-primary-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-secondary-600 hover:text-primary-600 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={cn(
        'overflow-hidden absolute right-0 left-0 border-b shadow-lg backdrop-blur-xl transition-all duration-300 ease-in-out top-[70px] bg-white/95 border-secondary-200/60 md:hidden',
        { 'opacity-100 max-h-[400px]': isMobileMenuOpen, 'max-h-0 opacity-0': !isMobileMenuOpen }
      )}>
        <ul className="flex flex-col gap-4 px-6 py-4 list-none">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a 
                href={item.href} 
                className="block py-2 text-lg font-medium border-b transition-colors text-secondary-700 border-secondary-100 hover:text-primary-600 hover:border-primary-200"
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