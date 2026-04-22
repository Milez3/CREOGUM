import { nav } from "@/content/site";

export function StickyCta() {
  return (
    <div className="cg-sticky-cta" aria-live="polite">
      <a href="#order" className="cg-btn-pill cg-btn-pill--dark">
        {nav.reserveCta}
      </a>
    </div>
  );
}
