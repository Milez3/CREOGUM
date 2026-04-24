'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          <Logo color="var(--ink)" />
          <span>creogum</span>
        </a>
        <div className="nav-center">
          <a href="#ritual">The Ritual</a>
          <a href="#reserve">Reserve</a>
        </div>
        <a href="#reserve" className="nav-pill">
          Reserve
        </a>
      </div>
    </nav>
  );
}
