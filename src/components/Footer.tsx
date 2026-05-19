import { Camera, Link as LinkIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-white border-t border-primary/10 py-8 lg:py-6 relative z-20">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-0">
          
          {/* Left Column: Brand Logo */}
          <div className="flex justify-center lg:justify-start">
            <span className="font-sans text-xl tracking-[0.15em] font-semibold text-primary">
              SENOA
            </span>
          </div>

          {/* Center Column: Legal Links (German translations of ELYS links) */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-6 lg:gap-8">
            <a 
              href="#" 
              className="text-[10px] uppercase tracking-widest text-primary/60 hover:text-primary transition-colors duration-200 font-semibold"
            >
              {t('footer.about')}
            </a>
            <a 
              href="#" 
              className="text-[10px] uppercase tracking-widest text-primary/60 hover:text-primary transition-colors duration-200 font-semibold"
            >
              {t('footer.contact')}
            </a>
            <a 
              href="#" 
              className="text-[10px] uppercase tracking-widest text-primary/60 hover:text-primary transition-colors duration-200 font-semibold"
            >
              {t('footer.privacy')}
            </a>
            <a 
              href="#" 
              className="text-[10px] uppercase tracking-widest text-primary/60 hover:text-primary transition-colors duration-200 font-semibold"
            >
              {t('footer.imprint')}
            </a>
          </div>

          {/* Right Column: Social / Share Icons */}
          <div className="flex flex-row justify-center lg:justify-end items-center gap-4">
            <a 
              href="#" 
              aria-label="Instagram"
              className="text-primary/60 hover:text-primary transition-colors duration-200"
            >
              <Camera className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a 
              href="#" 
              aria-label="Share"
              className="text-primary/60 hover:text-primary transition-colors duration-200"
            >
              <LinkIcon className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
