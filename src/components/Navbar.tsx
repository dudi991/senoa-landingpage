import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="w-full bg-transparent flex items-center justify-between px-8 py-8 absolute top-0 left-0 z-50">
      <div className="text-3xl tracking-[0.15em] font-sans text-primary">SENOA</div>
      
      {/* Language Switcher */}
      <div className="flex items-center gap-2 font-sans text-[12px] tracking-[0.2em] font-semibold text-white/80">
        <button 
          onClick={() => setLanguage('de')} 
          className={`hover:text-white transition-colors duration-300 focus:outline-none ${
            language === 'de' ? 'text-white font-bold underline underline-offset-4 decoration-white/50' : ''
          }`}
        >
          DE
        </button>
        <span className="text-white/30">|</span>
        <button 
          onClick={() => setLanguage('en')} 
          className={`hover:text-white transition-colors duration-300 focus:outline-none ${
            language === 'en' ? 'text-white font-bold underline underline-offset-4 decoration-white/50' : ''
          }`}
        >
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
