import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="w-full bg-transparent flex items-center justify-between px-8 py-8 absolute top-0 left-0 z-50">
      <div className="text-3xl tracking-[0.15em] font-sans text-primary">SENOA</div>
      
      {/* Language Switcher */}
      <div className="flex items-center gap-2 font-sans text-[10px] tracking-[0.25em] font-semibold text-primary/40">
        <button 
          onClick={() => setLanguage('de')} 
          className={`hover:text-primary transition-colors duration-300 focus:outline-none ${
            language === 'de' ? 'text-primary font-bold underline underline-offset-4 decoration-primary/30' : ''
          }`}
        >
          DE
        </button>
        <span className="text-primary/10">|</span>
        <button 
          onClick={() => setLanguage('en')} 
          className={`hover:text-primary transition-colors duration-300 focus:outline-none ${
            language === 'en' ? 'text-primary font-bold underline underline-offset-4 decoration-primary/30' : ''
          }`}
        >
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
