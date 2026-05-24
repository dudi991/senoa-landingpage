import { Camera, Link as LinkIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onShowImprint?: () => void;
  onShowContact?: () => void;
  onShowAbout?: () => void;
  onShowPrivacy?: () => void;
}

const Footer = ({ onShowImprint, onShowContact, onShowAbout, onShowPrivacy }: FooterProps) => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-white border-t border-primary/10 py-8 lg:py-6 relative z-20">
      <div className="w-full px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0">
          
          {/* Left Column: Brand Logo & Celestial Hallmark */}
          <div className="flex justify-center lg:justify-start items-center">
            <span className="font-sans text-[26px] tracking-[0.2em] font-bold text-primary flex items-center select-none">
              <span>HESPYRA</span>
              <img 
                src="images/logo1.webp" 
                alt="HESPYRA Celestial Mark" 
                className="h-5 w-auto ml-2.5 transition-all duration-[2.5s] ease-in-out hover:rotate-[360deg] cursor-pointer"
              />
            </span>
          </div>

          {/* Center Column: Legal Links */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-6 lg:gap-8">
            <button 
              onClick={(e) => {
                e.preventDefault();
                onShowAbout?.();
              }}
              className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary/60 hover:text-primary transition-colors duration-200 focus:outline-none cursor-pointer"
            >
              {t('footer.about')}
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onShowContact?.();
              }}
              className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary/60 hover:text-primary transition-colors duration-200 focus:outline-none cursor-pointer"
            >
              {t('footer.contact')}
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onShowPrivacy?.();
              }}
              className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary/60 hover:text-primary transition-colors duration-200 focus:outline-none cursor-pointer"
            >
              {t('footer.privacy')}
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onShowImprint?.();
              }}
              className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary/60 hover:text-primary transition-colors duration-200 focus:outline-none cursor-pointer"
            >
              {t('footer.imprint')}
            </button>
          </div>

          {/* Right Column: Social / Share Icons */}
          <div className="flex flex-row justify-center lg:justify-end items-center gap-6">
            <a 
              href="#" 
              aria-label="Instagram"
              className="text-primary/60 hover:text-primary transition-colors duration-200"
            >
              <Camera className="w-10 h-10" strokeWidth={1} />
            </a>
            <a 
              href="#" 
              aria-label="Share"
              className="text-primary/60 hover:text-primary transition-colors duration-200"
            >
              <LinkIcon className="w-10 h-10" strokeWidth={1} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
