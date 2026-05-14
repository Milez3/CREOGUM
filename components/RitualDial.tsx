import { DOSES } from '@/lib/content';

export default function RitualDial() {
  return (
    <section className="moments" id="ritual">
      <div className="moments-inner">
        <div className="moments-head reveal">
          <h2>
            Three pieces.<br />
            <em>Three moments.</em>
          </h2>
          <div className="moments-kicker">
            A rhythm, not a regimen. Built for everyday consistency —
            not &ldquo;workout days&rdquo; only.
          </div>
        </div>

        <div className="moments-grid">
          {DOSES.map((d, i) => (
            <div
              key={i}
              className="moment-card reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="moment-num">{d.n}</div>
              <div className="moment-time">{d.time}</div>
              <div className="moment-name">
                {d.t}<em>.</em>
              </div>
              <div className="moment-quip">
                {d.quip} — one piece, no water needed. Chew for 30 seconds and you&apos;re done.
              </div>
              <div className="moment-dose">
                <div>
                  <div className="mg">175</div>
                  <div className="mg-unit">mg creatine</div>
                </div>
                <div className="cum">
                  <div className="cum-n">{175 * (i + 1)}mg</div>
                  <div className="cum-l">cumulative</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
