'use client';

import { useEffect, useState } from 'react';

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onS = () => {
      const heroEnd = window.innerHeight * 0.7;
      const form = document.getElementById('reserve');
      const formTop = form
        ? form.getBoundingClientRect().top + window.scrollY - 100
        : Infinity;
      const y = window.scrollY;
      setShow(y > heroEnd && y < formTop);
    };
    window.addEventListener('scroll', onS, { passive: true });
    onS();
    return () => window.removeEventListener('scroll', onS);
  }, []);
  return (
    <a href="#reserve" className={`sticky-cta${show ? ' show' : ''}`}>
      <span className="sdot" />
      Reserve · $16.99
    </a>
  );
}
