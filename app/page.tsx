import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import ProductFacts from '@/components/ProductFacts';
import RitualDial from '@/components/RitualDial';
import Reserve from '@/components/Reserve';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import RevealObserver from '@/components/RevealObserver';

export default function HomePage() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Hero />
      <Ticker />
      <ProductFacts />
      <RitualDial />
      <Reserve />
      <Footer />
      <StickyCTA />
    </>
  );
}
