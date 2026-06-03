import { useState, lazy, Suspense } from 'react';
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
import Preloader from './components/Preloader';

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


  return (
    <div className={`min-h-screen font-sans overflow-x-hidden selection:bg-primary selection:text-white ${isCalm ? 'calm-mode bg-[#0B0D14] text-[#F3F4F6]' : 'bg-white text-primary'}`}>
      <Preloader />
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
