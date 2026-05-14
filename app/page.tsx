import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import DietaryBanner from '@/components/DietaryBanner';
import Ticker from '@/components/Ticker';
import ScienceSection from '@/components/ScienceSection';
import RitualDial from '@/components/RitualDial';
import SocialProof from '@/components/SocialProof';
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
      <ScienceSection />
      <RitualDial />
      <SocialProof />
      <Reserve />
      <Footer />
      <StickyCTA />
    </>
  );
}
