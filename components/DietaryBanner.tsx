'use client';

const ITEMS = [
  { k: 'sugar', title: 'Sugar-free', sub: '0g added sugar' },
  { k: 'xylitol', title: 'Xylitol', sub: 'Dental-friendly' },
  { k: 'gluten', title: 'Gluten-free', sub: 'No gluten ingredients' },
  { k: 'vegan', title: 'Vegan-friendly', sub: 'Plant-based' },
] as const;

function Icon({ kind }: { kind: (typeof ITEMS)[number]['k'] }) {
  return (
    <span className={`db-icon ${kind}`} aria-hidden="true">
      <span className="db-i" />
    </span>
  );
}

export default function DietaryBanner() {
  return (
    <section className="db" aria-label="Dietary highlights">
      <div className="db-inner">
        {ITEMS.map((it) => (
          <div key={it.k} className="db-item">
            <Icon kind={it.k} />
            <div className="db-text">
              <div className="db-title">{it.title}</div>
              <div className="db-sub">{it.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

