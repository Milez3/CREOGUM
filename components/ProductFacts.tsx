'use client';

const BADGES = [
  {
    label: 'Sugar-Free',
    sub: 'Zero added sugars',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 24c1.5-3 3-5 6-5s4.5 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="15" r="1.5" fill="currentColor" />
        <circle cx="22" cy="15" r="1.5" fill="currentColor" />
        <line x1="10" y1="10" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Xylitol Inside',
    sub: 'Supports dental health',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 6c-5 0-9 4-9 9 0 3 1.5 5.5 4 7l1 8h8l1-8c2.5-1.5 4-4 4-7 0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="18" y1="15" x2="18" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Gluten-Free',
    sub: 'No wheat, no worry',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 8c0 0-2 3-2 6s2 5 2 5 2-2 2-5-2-6-2-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13 13c0 0-3 2-3 5s2 5 2 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M23 13c0 0 3 2 3 5s-2 5-2 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="19" x2="18" y2="29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="10" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Vegan-Friendly',
    sub: 'Plant-based formula',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 28C18 28 8 22 8 14c0-4 3-7 6-7 1.5 0 3 .7 4 2 1-1.3 2.5-2 4-2 3 0 6 3 6 7 0 8-10 14-10 14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 28V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const FLOATERS = [
  { label: '175', sub: 'mg', x: '12%', y: '8%', rot: '-14deg', delay: '0s' },
  { label: 'MG', sub: 'creatine', x: '72%', y: '4%', rot: '18deg', delay: '.4s' },
  { label: '×3', sub: 'daily', x: '82%', y: '55%', rot: '-8deg', delay: '.8s' },
  { label: '0g', sub: 'sugar', x: '5%', y: '62%', rot: '12deg', delay: '.6s' },
  { label: '0', sub: 'calories', x: '50%', y: '78%', rot: '-6deg', delay: '1s' },
];

export default function ProductFacts() {
  return (
    <section className="pf" id="product">
      <div className="pf-inner">
        <div className="pf-head reveal">
          <div className="eyebrow-c">About the Product</div>
          <h2>
            Clean by
            <br />
            <em>design.</em>
          </h2>
        </div>

        <div className="pf-grid">
          {/* Left: floating gum visual */}
          <div className="pf-visual reveal-scale">
            <div className="pf-stage">
              {FLOATERS.map((f, i) => (
                <div
                  key={i}
                  className="pf-floater"
                  style={{
                    left: f.x,
                    top: f.y,
                    '--rot': f.rot,
                    '--delay': f.delay,
                  } as React.CSSProperties}
                >
                  <span className="pf-floater-main">{f.label}</span>
                  <span className="pf-floater-sub">{f.sub}</span>
                </div>
              ))}
              <div className="pf-center-piece">
                <div className="pf-gum-big">
                  <span>CREOGUM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: supplement facts + badges */}
          <div className="pf-right reveal">
            <div className="pf-facts">
              <div className="pf-facts-head">
                <span className="pf-facts-title">Supplement Facts</span>
                <span className="pf-facts-serving">Serving Size: 1 Piece</span>
              </div>
              <div className="pf-facts-rule thick" />
              <div className="pf-facts-row">
                <span>Calories</span>
                <span>0</span>
              </div>
              <div className="pf-facts-rule" />
              <div className="pf-facts-row">
                <span>Total Carbohydrates</span>
                <span>1g</span>
              </div>
              <div className="pf-facts-rule thin" />
              <div className="pf-facts-row indent">
                <span>Total Sugars</span>
                <span>0g</span>
              </div>
              <div className="pf-facts-rule thin" />
              <div className="pf-facts-row indent">
                <span>Includes 0g Added Sugars</span>
                <span>0%</span>
              </div>
              <div className="pf-facts-rule" />
              <div className="pf-facts-row highlight">
                <span>Creatine</span>
                <span>175mg</span>
              </div>
              <div className="pf-facts-rule thick" />
              <p className="pf-facts-other">
                <b>Other Ingredients:</b> Gum base, Sorbitol, Xylitol, Maltitol,
                Isomalt, Natural flavors, Magnesium stearate, Stevia, Silicon
                dioxide, Glycerin
              </p>
            </div>

            <div className="pf-badges">
              {BADGES.map((b) => (
                <div key={b.label} className="pf-badge">
                  <div className="pf-badge-icon">{b.icon}</div>
                  <div className="pf-badge-label">{b.label}</div>
                  <div className="pf-badge-sub">{b.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
