import { useState } from 'react';
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
import ImprintModal from './components/ImprintModal';
import ContactModal from './components/ContactModal';
import AboutModal from './components/AboutModal';
import PrivacyModal from './components/PrivacyModal';

function App() {
  const [showImprint, setShowImprint] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-primary overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      
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

      <ImprintModal isOpen={showImprint} onClose={() => setShowImprint(false)} />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </div>
  );
}

export default App;
