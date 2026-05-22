import { useState, useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BenefitStrip from './components/BenefitStrip';
import CustomerStory from './components/CustomerStory';
import EditorialPause from './components/EditorialPause';
import Ritual from './components/Ritual';
import Ingredients from './components/Ingredients';
import Gallery from './components/Gallery';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

// Lazy load heavy components (Modals) to dramatically reduce initial JS bundle size
const ImprintModal = lazy(() => import('./components/ImprintModal'));
const ContactModal = lazy(() => import('./components/ContactModal'));
const AboutModal = lazy(() => import('./components/AboutModal'));
const PrivacyModal = lazy(() => import('./components/PrivacyModal'));

function App() {
  const [showImprint, setShowImprint] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [isCalm, setIsCalm] = useState(false);

  // Lenis Smooth Scroll Initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Bind link clicks to Lenis smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl as HTMLElement);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden selection:bg-primary selection:text-white ${isCalm ? 'calm-mode bg-[#0B0D14] text-[#F3F4F6]' : 'bg-white text-primary'}`}>
      <Navbar isCalm={isCalm} onToggleCalm={() => setIsCalm(!isCalm)} />
      <Hero isCalm={isCalm} />
      
      <ScrollReveal>
        <BenefitStrip />
      </ScrollReveal>
      
      <ScrollReveal>
        <CustomerStory />
      </ScrollReveal>
      
      <ScrollReveal>
        <EditorialPause />
      </ScrollReveal>
      
      <ScrollReveal>
        <Ritual />
      </ScrollReveal>
      
      <ScrollReveal>
        <Ingredients />
      </ScrollReveal>
      
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
      
      <ScrollReveal>
        <Waitlist />
      </ScrollReveal>
      
      <Footer 
        onShowImprint={() => setShowImprint(true)} 
        onShowContact={() => setShowContact(true)} 
        onShowAbout={() => setShowAbout(true)} 
        onShowPrivacy={() => setShowPrivacy(true)} 
      />

      {showImprint && (
        <Suspense fallback={null}>
          <ImprintModal isOpen={showImprint} onClose={() => setShowImprint(false)} />
        </Suspense>
      )}
      {showContact && (
        <Suspense fallback={null}>
          <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
        </Suspense>
      )}
      {showAbout && (
        <Suspense fallback={null}>
          <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
        </Suspense>
      )}
      {showPrivacy && (
        <Suspense fallback={null}>
          <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
