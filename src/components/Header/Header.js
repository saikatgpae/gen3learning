import React, { useState, useEffect, useCallback } from 'react';
import logo from '../../images/logo.png';
import Mobile from '../Mobile/Mobile';
import Desktop from '../Desktop/Desktop';
import './Header.css';

export default function Header() {
  const [page, setPage] = useState(false);

  // Check the screen size
  const useMediaQuery = (width) => {
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setPage(true);
        window.location.reload();
      } else {
        setPage(false);
        window.location.reload();
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener('change', updateTarget);
      if (media.matches) {
        setPage(true);
      }
      return () => media.removeEventListener('change', updateTarget);
    }, []);
    return page;
  };

  // confirm the breakpoint of the screen
  const isBreakpoint = useMediaQuery(768);

  return (
    <div className="header" style={{ backgroundColor: '#105b50' }}>
      <img className="logo" style={{ width: '229px', height: '59px' }} src={logo} alt="Logo" />
      { isBreakpoint ? (<Mobile />) : (<Desktop />)}
    </div>
  );
}
