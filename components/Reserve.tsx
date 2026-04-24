'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { BATCH } from '@/lib/content';

export default function Reserve() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const pct = (BATCH.claimed / BATCH.total) * 100;

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire to Klaviyo / Mailchimp / Route Handler here:
    // await fetch('/api/reserve', { method: 'POST', body: JSON.stringify({ email }) });
    setSent(true);
  };

  return (
    <section className="reserve" id="reserve" ref={ref}>
      <div className="reserve-inner">
        <div className="reserve-head reveal">
          <div className="eyebrow-c">Section 02 · Reserve Your Batch</div>
          <h2>
            Two ways in.
            <br />
            <em>One price</em> never comes back.
          </h2>
        </div>

        <div className="spot-card reveal d1">
          <div className="spot-row">
            <div className="l">
              <b>●</b> Batch 001 · Live
            </div>
            <div className="v">
              {BATCH.claimed} <span>/ {BATCH.total.toLocaleString()}</span>
            </div>
          </div>
          <div className="spot-bar">
            <div
              className="spot-fill"
              style={{ width: visible ? `${pct}%` : '0%' }}
            >
              <div className="spot-dot" />
            </div>
          </div>
          <div
            className="spot-row"
            style={{ marginTop: '1rem', marginBottom: 0 }}
          >
            <div className="l">Opened · April 2026</div>
            <div className="l">Ships · Mid-July</div>
          </div>
        </div>

        <div className="price-grid">
          <div className="price-card featured reveal d2">
            <div className="price-badge dark">Founding</div>
            <h3>Founding Member</h3>
            <div className="tag">Locked · Forever</div>
            <div className="price-num">
              $16.99<span className="per">/ pouch</span>
            </div>
            <ul className="price-feats">
              <li>
                <span className="chk" />
                <span>Price locked as long as you subscribe</span>
              </li>
              <li>
                <span className="chk" />
                <span>Priority ship · Batch 001</span>
              </li>
              <li>
                <span className="chk" />
                <span>Founder-numbered pouch</span>
              </li>
              <li>
                <span className="chk" />
                <span>Early access to future flavors</span>
              </li>
            </ul>
            <a href="#reserve" className="price-btn primary">
              Reserve Founding →
            </a>
          </div>
          <div className="price-card reveal d3">
            <div className="price-badge sage">The Trial</div>
            <h3>The Trial</h3>
            <div className="tag">One-time · No commitment</div>
            <div className="price-num">
              $18.99<span className="per">/ pouch</span>
            </div>
            <ul className="price-feats">
              <li>
                <span className="chk" />
                <span>Single pouch · 60 pieces</span>
              </li>
              <li>
                <span className="chk" />
                <span>Same Mid-July ship</span>
              </li>
              <li>
                <span className="chk" />
                <span>No auto-renew</span>
              </li>
              <li>
                <span className="chk" />
                <span>Upgrade anytime before batch closes</span>
              </li>
            </ul>
            <a href="#reserve" className="price-btn ghost">
              Reserve Trial →
            </a>
          </div>
        </div>

        {!sent ? (
          <form className="quick-form reveal d4" onSubmit={submit}>
            <input
              type="email"
              placeholder="your@email.com · hold the price"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Hold My Spot →</button>
          </form>
        ) : (
          <div className="quick-success">
            <span className="dot">✓</span>
            <span>You&apos;re in · Check your inbox</span>
          </div>
        )}
        <div className="quick-note">
          No payment today · $4.99 shipping at checkout
        </div>
      </div>
    </section>
  );
}
