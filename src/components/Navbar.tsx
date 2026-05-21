import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  isCalm: boolean;
  onToggleCalm: () => void;
}

const Navbar = ({ isCalm, onToggleCalm }: NavbarProps) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="w-full bg-transparent flex items-center justify-between px-8 py-8 absolute top-0 left-0 z-50">
      <div className="text-3xl tracking-[0.15em] font-sans text-primary">SENOA</div>
      
      {/* Controls Container */}
      <div className="flex items-center gap-6 lg:gap-8 font-sans text-[14px] tracking-[0.2em] font-semibold">
        {/* Calm Mode Button */}
        <button 
          onClick={onToggleCalm}
          className="text-white hover:text-white/80 transition-colors duration-300 focus:outline-none cursor-pointer"
          title={isCalm ? (language === 'de' ? "Tagesmodus einschalten" : "Switch to Day Mode") : (language === 'de' ? "Abendmodus aktivieren" : "Activate Evening Mode")}
        >
          {isCalm ? t('navbar.calm_active') : t('navbar.calm_inactive')}
        </button>

        <span className="text-white/20">|</span>

        {/* Language Switcher */}
        <div className="flex items-center gap-2 text-white/80">
          <button 
            onClick={() => setLanguage('de')} 
            className={`hover:text-white transition-colors duration-300 focus:outline-none cursor-pointer ${
              language === 'de' ? 'text-white font-bold underline underline-offset-4 decoration-white/50' : ''
            }`}
          >
            DE
          </button>
          <span className="text-white/30">|</span>
          <button 
            onClick={() => setLanguage('en')} 
            className={`hover:text-white transition-colors duration-300 focus:outline-none cursor-pointer ${
              language === 'en' ? 'text-white font-bold underline underline-offset-4 decoration-white/50' : ''
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
