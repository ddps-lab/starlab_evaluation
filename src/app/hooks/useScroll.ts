import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
}

export const useScroll = (): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
  });

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (scrollY !== lastScrollY) {
        setScrollState({
          scrollY,
          scrollDirection: direction,
        });
      }
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  return scrollState;
};

export default useScroll;