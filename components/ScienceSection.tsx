export default function ScienceSection() {
  return (
    <section className="science-sec" id="science">
      <div className="science-inner">
        {/* Visual: animated rings + gum piece */}
        <div className="science-visual reveal-scale">
          <div className="sci-rings">
            <div className="sci-ring sci-ring-1">
              <div className="sci-ring-dot" />
            </div>
            <div className="sci-ring sci-ring-2">
              <div className="sci-ring-dot" />
            </div>
            <div className="sci-ring sci-ring-3">
              <div className="sci-ring-dot" />
            </div>
            <div className="sci-center">
              <span className="num">175</span>
              <span className="unit">mg</span>
            </div>
          </div>
          <div className="sci-tags">
            <div className="sci-tag sci-tag-1">Creatine Mono.</div>
            <div className="sci-tag sci-tag-2">Batch Tested</div>
            <div className="sci-tag sci-tag-3">No Fillers</div>
            <div className="sci-tag sci-tag-4">No Soy</div>
          </div>
        </div>

        {/* Content */}
        <div className="science-content reveal">
          <div className="sci-eyebrow">The Formula</div>
          <h2>
            175mg.<br />
            <em>Nothing hidden.</em>
          </h2>
          <div className="sci-steps">
            <div className="sci-step">
              <div className="sci-step-label">The Gum Matrix</div>
              <p>
                Pharmaceutical-grade creatine monohydrate suspended in a
                functional chewing base. Zero fillers. Zero proprietary blends.
                What you see is what you get.
              </p>
            </div>
            <div className="sci-step">
              <div className="sci-step-label">Why 175mg</div>
              <p>
                3 pieces × 175mg = 525mg per session. Three sessions = 1.575g
                daily. A precision dose that fits a real schedule — not an
                aspirational one.
              </p>
            </div>
            <div className="sci-step">
              <div className="sci-step-label">The Habit Layer</div>
              <p>
                Morning coffee. Lunch. After dinner. Three anchor moments that
                already exist in your day. The ritual creates the consistency.
                Consistency creates the result.
              </p>
            </div>
          </div>
          <a href="#reserve" className="sci-cta">
            Reserve Batch 001 →
          </a>
        </div>
      </div>
    </section>
  );
}
