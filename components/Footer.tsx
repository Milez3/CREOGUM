import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <Logo color="var(--cream)" />
          <span>creogum</span>
        </div>
        <div className="footer-mantra">&ldquo;Consistency is the dose.&rdquo;</div>
        <div className="footer-meta">© 2026 · Toronto · Hello@creogum.com</div>
      </div>
    </footer>
  );
}
