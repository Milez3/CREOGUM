'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-scale');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
