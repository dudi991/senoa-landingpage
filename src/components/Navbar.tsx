import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  isCalm: boolean;
  onToggleCalm: () => void;
}

const Navbar = ({ isCalm, onToggleCalm }: NavbarProps) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="w-full bg-transparent flex items-start justify-between px-4 sm:px-8 py-4 sm:py-8 absolute top-0 left-0 z-50">
      {/* Brand Logo */}
      <div className={`text-2xl sm:text-3xl tracking-[0.15em] font-sans leading-none ${isCalm ? 'text-white' : 'text-primary'}`}>
        SENOA
      </div>
      
      {/* Controls Container */}
      <div className="flex items-center gap-3 sm:gap-6 lg:gap-8 font-sans text-[11px] sm:text-[13px] md:text-[14px] tracking-[0.12em] sm:tracking-[0.2em] font-semibold leading-none">
        {/* Calm Mode Button */}
        <button 
          onClick={onToggleCalm}
          className={`transition-colors duration-300 focus:outline-none cursor-pointer ${
            isCalm ? 'text-white hover:text-white/80' : 'text-primary hover:text-primary/80'
          }`}
          title={isCalm ? (language === 'de' ? "Tagesmodus einschalten" : "Switch to Day Mode") : (language === 'de' ? "Abendmodus aktivieren" : "Activate Evening Mode")}
        >
          {isCalm ? t('navbar.calm_active') : t('navbar.calm_inactive')}
        </button>

        <span className={isCalm ? 'text-white/20' : 'text-primary/20'}>|</span>

        {/* Language Switcher */}
        <div className={`flex items-center gap-1.5 sm:gap-2 ${isCalm ? 'text-white/80' : 'text-primary/80'}`}>
          <button 
            onClick={() => setLanguage('de')} 
            className={`transition-colors duration-300 focus:outline-none cursor-pointer ${
              isCalm ? 'hover:text-white' : 'hover:text-primary'
            } ${
              language === 'de' 
                ? (isCalm ? 'text-white font-bold underline underline-offset-4 decoration-white/50' : 'text-primary font-bold underline underline-offset-4 decoration-primary/50') 
                : ''
            }`}
          >
            DE
          </button>
          <span className={isCalm ? 'text-white/30' : 'text-primary/30'}>|</span>
          <button 
            onClick={() => setLanguage('en')} 
            className={`transition-colors duration-300 focus:outline-none cursor-pointer ${
              isCalm ? 'hover:text-white' : 'hover:text-primary'
            } ${
              language === 'en' 
                ? (isCalm ? 'text-white font-bold underline underline-offset-4 decoration-white/50' : 'text-primary font-bold underline underline-offset-4 decoration-primary/50') 
                : ''
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
