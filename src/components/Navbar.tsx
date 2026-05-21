import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  isCalm: boolean;
  onToggleCalm: () => void;
}

const Navbar = ({ isCalm, onToggleCalm }: NavbarProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="w-full bg-transparent flex items-center justify-between px-8 py-8 absolute top-0 left-0 z-50">
      <div className="text-3xl tracking-[0.15em] font-sans text-primary">SENOA</div>
      
      {/* Controls Container */}
      <div className="flex items-center gap-6 lg:gap-8 font-sans text-[12px] tracking-[0.2em] font-semibold">
        {/* Calm Mode Button */}
        <button 
          onClick={onToggleCalm}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 focus:outline-none cursor-pointer"
          title={isCalm ? "Tagesmodus einschalten" : "Abendmodus aktivieren"}
        >
          {isCalm ? (
            <>
              <Sun className="w-4 h-4 text-accent animate-pulse" strokeWidth={2} />
              <span className="hidden sm:inline text-accent font-bold">TAGESMODUS</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-white/60" strokeWidth={2} />
              <span className="hidden sm:inline text-white/60">ABENDMODUS</span>
            </>
          )}
        </button>

        <span className="text-white/20 hidden sm:inline">|</span>

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
