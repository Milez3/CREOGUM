import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import RevealObserver from '@/components/RevealObserver';

const FACTS = {
  servingSize: '1 piece',
  servingsPerContainer: '60',
  rows: [
    { label: 'Calories', amount: '0', dv: '' },
    { label: 'Total Carbohydrates', amount: '1g', dv: '0%' },
    { label: 'Total Sugars', amount: '0g', dv: '' },
    { label: 'Includes 0g Added Sugars', amount: '', dv: '0%' },
    { label: 'Creatine', amount: '175mg', dv: '†' },
  ],
  footnotes: [
    '* Percent Daily Values are based on a 2,000-calorie diet.',
    '† Daily Value not established.',
  ],
  otherIngredients:
    'Gum base, Sorbitol, Xylitol, Maltitol, Isomalt, Natural flavors, Magnesium stearate, Stevia, Silicon dioxide, Glycerin.',
};

export default function ProductPage() {
  return (
    <>
      <RevealObserver />
      <Nav />

      <main className="product">
        <section className="product-hero" id="top">
          <div className="product-hero-inner">
            <div className="product-eyebrow mono">About the product</div>
            <h1 className="product-h1 serif">
              Dietary creatine.
              <br />
              <em>In gum form.</em>
            </h1>
            <p className="product-sub">
              Sugar-free, vegan-friendly, and built around a simple daily ritual:
              three pieces, spaced through the day.
            </p>

            <div className="product-badges">
              <span className="pbadge">Sugar-free</span>
              <span className="pbadge">Xylitol</span>
              <span className="pbadge">Gluten-free</span>
              <span className="pbadge">Vegan-friendly</span>
            </div>
          </div>
        </section>

        <section className="facts">
          <div className="facts-inner">
            <div className="facts-visual" aria-hidden="true">
              <div className="burst">
                <div className="gum-piece b1">CRE</div>
                <div className="gum-piece b2">175</div>
                <div className="gum-piece b3">MG</div>
                <div className="gum-piece b4">GUM</div>
                <div className="gum-piece b5">0G</div>
                <div className="gum-piece b6">SUGAR</div>
              </div>
            </div>

            <div className="facts-card">
              <div className="facts-title">Supplement Facts</div>
              <div className="facts-meta">
                <div>
                  <b>Serving size:</b> {FACTS.servingSize}
                </div>
                <div>
                  <b>Servings per container:</b> {FACTS.servingsPerContainer}
                </div>
              </div>

              <div className="facts-head">
                <div />
                <div className="facts-h2">Amount Per Serving</div>
                <div className="facts-h2">%DV*</div>
              </div>

              <div className="facts-rows">
                {FACTS.rows.map((r) => (
                  <div
                    key={r.label}
                    className={`facts-row${r.label.startsWith('Includes') ? ' indent' : ''}`}
                  >
                    <div className="facts-label">{r.label}</div>
                    <div className="facts-amt">{r.amount}</div>
                    <div className="facts-dv">{r.dv}</div>
                  </div>
                ))}
              </div>

              <div className="facts-foot">
                {FACTS.footnotes.map((t) => (
                  <div key={t} className="facts-note">
                    {t}
                  </div>
                ))}
              </div>

              <div className="facts-ingredients">
                <b>Other ingredients:</b> {FACTS.otherIngredients}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </>
  );
}

