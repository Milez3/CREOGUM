import Logo from './Logo';

const LINKS = {
  Product: [
    { l: 'The Gum', h: '/product' },
    { l: 'Ingredients', h: '/product#ingredients' },
    { l: 'The Ritual', h: '/#ritual' },
    { l: 'Reserve Batch 001', h: '/#reserve' },
  ],
  Science: [
    { l: 'Why Creatine', h: '/#science' },
    { l: 'Our Formula', h: '/#science' },
    { l: 'Dosing Protocol', h: '/#ritual' },
  ],
  About: [
    { l: 'Story', h: '#' },
    { l: 'Made in Toronto', h: '#' },
    { l: 'Sustainability', h: '#' },
  ],
  Connect: [
    { l: 'Instagram', h: '#' },
    { l: 'hello@creogum.com', h: 'mailto:hello@creogum.com' },
    { l: 'Press', h: '#' },
  ],
} as const;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo-row">
            <Logo color="var(--cream)" />
            <span>creogum</span>
          </div>
          <div className="mantra">&ldquo;Consistency is the dose.&rdquo;</div>
          <div className="tagline">Made in Toronto · Since 2026</div>
        </div>

        {(Object.entries(LINKS) as [string, readonly { l: string; h: string }[]][]).map(([col, items]) => (
          <div key={col} className="footer-col">
            <h4>{col}</h4>
            {items.map((it) => (
              <a key={it.l} href={it.h}>{it.l}</a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="copy">© 2026 Creogum Inc. · Toronto, ON</div>
        <div className="copy">No payment today · Ships July 2026</div>
      </div>
    </footer>
  );
}
