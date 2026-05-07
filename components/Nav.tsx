'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const homeHref = pathname === '/' ? '' : '/';
  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href={`${homeHref}#top`} className="nav-logo">
          <Logo color="var(--ink)" />
          <span>creogum</span>
        </a>
        <div className="nav-center">
          <a href="/product">Product</a>
          <a href={`${homeHref}#ritual`}>The Ritual</a>
          <a href={`${homeHref}#reserve`}>Reserve</a>
        </div>
        <a href={`${homeHref}#reserve`} className="nav-pill">
          Reserve
        </a>
      </div>
    </nav>
  );
}
