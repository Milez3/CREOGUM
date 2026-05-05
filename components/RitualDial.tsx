'use client';

import { useEffect, useState } from 'react';
import { DOSES } from '@/lib/content';

export default function RitualDial({ auto = true }: { auto?: boolean }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setActive((a) => (a + 1) % 3), 2200);
    return () => clearInterval(id);
  }, [auto]);

  const R = 210;
  const cx = 260, cy = 260;
  const progressPct = (active + 1) / 3;
  const circ = 2 * Math.PI * R;

  return (
    <div className="ritual" id="ritual">
      <div className="ritual-inner">
        <div className="ritual-head reveal">
          <h2>
            Three pieces.
            <br />
            <em>Three moments.</em>
          </h2>
          <div className="kicker">
            Morning, midday, evening — your day already has these anchors. We
            just gave each one a dose.
          </div>
        </div>

        <div className="dial-wrap">
          <div className="dial reveal-scale">
            <svg viewBox="0 0 520 520">
              <circle className="dial-arc" cx={cx} cy={cy} r={R} />
              {Array.from({ length: 48 }).map((_, i) => {
                const a = (i / 48) * Math.PI * 2;
                const r1 = R - 4;
                const r2 = R + (i % 4 === 0 ? 12 : 6);
                return (
                  <line
                    key={i}
                    className={`dial-tick${i % 12 === 0 ? ' hi' : ''}`}
                    x1={cx + Math.cos(a) * r1}
                    y1={cy + Math.sin(a) * r1}
                    x2={cx + Math.cos(a) * r2}
                    y2={cy + Math.sin(a) * r2}
                  />
                );
              })}
              <circle
                className="dial-progress"
                cx={cx}
                cy={cy}
                r={R}
                style={{
                  strokeDasharray: circ,
                  strokeDashoffset: circ * (1 - progressPct),
                  transform: 'rotate(-90deg)',
                  transformOrigin: `${cx}px ${cy}px`,
                }}
              />
              <circle className="dial-hub" cx={cx} cy={cy} r="110" />
              <circle
                cx={cx}
                cy={cy}
                r="80"
                fill="none"
                stroke="rgba(192,221,151,.15)"
                strokeWidth=".5"
              />
            </svg>

            {DOSES.map((d, i) => {
              const rad = (d.angle * Math.PI) / 180;
              const x = 50 + Math.cos(rad) * 40;
              const y = 50 + Math.sin(rad) * 40;
              return (
                <div
                  key={i}
                  className={`dial-dose-pill${i === active ? ' active' : ''}`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  onMouseEnter={() => setActive(i)}
                >
                  <div className="n">{d.n}</div>
                  <div className="t">{d.t.toUpperCase()}</div>
                </div>
              );
            })}

            <div className="dial-center">
              <div className="label">{DOSES[active].t}</div>
              <div className="num">{175 * (active + 1)}</div>
              <div className="unit">mg · cumulative</div>
              <div className="sep" />
              <div className="meta">
                {DOSES[active].time} · {DOSES[active].quip}
              </div>
            </div>
          </div>

          <div className="dose-info">
            {DOSES.map((d, i) => (
              <div
                key={i}
                className={`dose-row${i === active ? ' active' : ''}`}
                onMouseEnter={() => setActive(i)}
              >
                <div className="idx">{d.n}</div>
                <div>
                  <div className="t">
                    {d.t}
                    <em>.</em>
                    <small>{d.quip}</small>
                  </div>
                </div>
                <div className="time">{d.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
