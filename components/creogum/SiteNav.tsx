import { brand, nav } from "@/content/site";
import Link from "next/link";

import { LogoMark } from "./LogoMark";

export function SiteNav() {
  return (
    <header className="cg-nav">
      <Link href="/" className="cg-logo" aria-label={`${brand.name} home`}>
        <LogoMark />
        <span className="cg-logo-text">creogum</span>
      </Link>
      <p className="cg-nav-tagline">{brand.tagline}</p>
      <Link href="/#order" className="cg-btn-pill cg-btn-pill--dark">
        {nav.reserveCta}
      </Link>
    </header>
  );
}
