import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import DietaryBanner from '@/components/DietaryBanner';
import Ticker from '@/components/Ticker';
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
      <DietaryBanner />
      <Ticker />
      <RitualDial />
      <Reserve />
      <Footer />
      <StickyCTA />
    </>
  );
}
