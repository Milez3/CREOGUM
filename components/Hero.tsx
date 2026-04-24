'use client';

import { useEffect, useRef } from 'react';
import Pouch from './Pouch';

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onS = () => {
      const y = window.scrollY;
      if (orb1.current) orb1.current.style.transform = `translateY(${y * 0.15}px)`;
      if (orb2.current) orb2.current.style.transform = `translateY(${y * -0.1}px)`;
    };
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);
  return (
    <section className="hero" id="top">
      <div
        className="orb"
        ref={orb1}
        style={{
          top: '-15vw',
          right: '-20vw',
          width: '70vw',
          height: '70vw',
          background:
            'radial-gradient(circle, rgba(192,221,151,.4) 0%, rgba(192,221,151,0) 60%)',
        }}
      />
      <div
        className="orb"
        ref={orb2}
        style={{
          bottom: '-25vw',
          left: '-18vw',
          width: '50vw',
          height: '50vw',
          background:
            'radial-gradient(circle, rgba(59,107,16,.28) 0%, rgba(59,107,16,0) 65%)',
          animationDelay: '2s',
        }}
      />
      <div
        className="orb"
        style={{
          top: '35%',
          right: '18%',
          width: '22vw',
          height: '22vw',
          background:
            'radial-gradient(circle, rgba(234,243,222,.6) 0%, rgba(234,243,222,0) 65%)',
          animationDelay: '4s',
        }}
      />

      <div className="hero-inner">
        <div className="hero-eyebrow fu fu-1">
          <span className="live-dot" />
          <span>Batch 001 · Pre-Sale Live</span>
          <span className="live-dot" />
        </div>

        <h1 className="hero-h1">
          <span className="w fu fu-2">The&nbsp;</span>
          <span className="w fu fu-3">habit</span>
          <br />
          <span className="w fu fu-4">that&nbsp;</span>
          <em className="fu fu-4">actually</em>
          <span className="w fu fu-5">&nbsp;sticks.</span>
        </h1>

        <div className="hero-left fu fu-5">
          <div>
            <div className="meta-label">Per Piece</div>
            <div className="meta-value">
              175<em>mg</em>
            </div>
          </div>
          <div>
            <div className="meta-label">Daily Dose</div>
            <div className="meta-value">
              4 <em>pieces</em>
            </div>
          </div>
        </div>

        <div className="hero-pouch fu fu-4">
          <div className="orbit">
            <div className="gum-piece p1">175</div>
            <div className="gum-piece p2">MG</div>
            <div className="gum-piece p3">×4</div>
            <div className="gum-piece p4">700</div>
          </div>
          <Pouch />
        </div>

        <div className="hero-right fu fu-5">
          <div>
            <div className="meta-label">Batch Size</div>
            <div className="meta-value">
              7,<em>000</em>
            </div>
          </div>
          <div>
            <div className="meta-label">Ships</div>
            <div className="meta-value">
              Jul <em>&apos;26</em>
            </div>
          </div>
        </div>

        <div className="hero-cta fu fu-6">
          <a href="#reserve" className="btn-big">
            Reserve — $16.99 <span className="arrow">→</span>
          </a>
          <div className="btn-note">
            Founding price · <b>Locked forever</b>
          </div>
        </div>
      </div>
    </section>
  );
}
