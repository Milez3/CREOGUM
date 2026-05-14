'use client';

import { useEffect, useRef } from 'react';
import Pouch from './Pouch';

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (orbRef.current) {
        orbRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="top">
      <div
        className="orb"
        ref={orbRef}
        style={{
          top: '-10vw', right: '-18vw',
          width: '55vw', height: '55vw',
          background: 'radial-gradient(circle, rgba(59,107,16,.35) 0%, rgba(59,107,16,0) 65%)',
        }}
      />
      <div
        className="orb"
        style={{
          bottom: '-18vw', left: '-12vw',
          width: '45vw', height: '45vw',
          background: 'radial-gradient(circle, rgba(192,221,151,.18) 0%, rgba(192,221,151,0) 65%)',
          animationDelay: '3s',
        }}
      />

      <div className="hero-inner">
        {/* Left: text content */}
        <div className="hero-text">
          <div className="hero-eyebrow fu fu-1">
            <span className="live-dot" />
            <span>Batch 001 · Pre-Sale Live</span>
          </div>

          <h1 className="hero-h1 fu fu-2">
            The habit<br />
            that <em>actually</em><br />
            sticks.
          </h1>

          <p className="hero-sub fu fu-3">
            175mg creatine per piece. Three pieces daily.
            No mixing. No measuring. Just chew it.
          </p>

          <div className="hero-ctas fu fu-4">
            <a href="#reserve" className="btn-big">
              Reserve — $16.99 <span className="arrow">→</span>
            </a>
            <a href="#science" className="btn-ghost">
              See the science
            </a>
          </div>

          <div className="hero-stats fu fu-5">
            <div className="stat-item">
              <span className="stat-n">175<sup>mg</sup></span>
              <span className="stat-l">Per piece</span>
            </div>
            <div className="stat-sep" />
            <div className="stat-item">
              <span className="stat-n">525<sup>mg</sup></span>
              <span className="stat-l">Daily dose</span>
            </div>
            <div className="stat-sep" />
            <div className="stat-item">
              <span className="stat-n">Jul</span>
              <span className="stat-l">Ships 2026</span>
            </div>
          </div>
        </div>

        {/* Right: product visual */}
        <div className="hero-visual fu fu-3">
          <div className="orbit">
            <div className="gum-piece p1">175</div>
            <div className="gum-piece p2">MG</div>
            <div className="gum-piece p3">CRE</div>
            <div className="gum-piece p4">GUM</div>
          </div>
          <Pouch />
        </div>
      </div>
    </section>
  );
}
