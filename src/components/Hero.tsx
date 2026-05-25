import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  isCalm: boolean;
}

const Hero = ({ isCalm }: HeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[80vh] lg:h-[90vh] flex items-center overflow-hidden bg-white py-24 lg:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="images/HESPYRA_HERO.webp" 
          alt="HESPYRA Night Reset Background" 
          className="w-full h-full object-cover object-center opacity-85 saturate-[1.12] contrast-[1.04] brightness-[0.93] animate-ken-burns"
        />
        
        {/* --- Hero Gradient Overlays (Horizontal) --- */}
        {/* Day Mode Horizontal Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/75 lg:bg-gradient-to-r lg:from-white/75 lg:via-white/35 lg:to-transparent lg:from-white/55 transition-opacity duration-[2500ms] ease-in-out ${isCalm ? 'opacity-0' : 'opacity-100'}`} />
        {/* Calm Mode Horizontal Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b from-[#0B0D14]/90 via-[#0B0D14]/65 to-[#0B0D14]/85 lg:bg-gradient-to-r lg:from-[#0B0D14]/94 lg:via-[#0B0D14]/60 lg:to-transparent lg:from-[#0B0D14]/94 transition-opacity duration-[2500ms] ease-in-out ${isCalm ? 'opacity-100' : 'opacity-0'}`} />

        {/* --- Top Navbar Gradient Overlays (Vertical) --- */}
        {/* Day Mode Top Navbar Overlay */}
        <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 via-white/30 to-transparent transition-opacity duration-[2500ms] ease-in-out ${isCalm ? 'opacity-0' : 'opacity-100'}`} />
        {/* Calm Mode Top Navbar Overlay */}
        <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B0D14]/85 via-[#0B0D14]/30 to-transparent transition-opacity duration-[2500ms] ease-in-out ${isCalm ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Lunar Monogram Watermark (Signature Element) */}
      <div className="absolute -right-32 lg:-right-48 top-1/4 lg:top-1/2 lg:-translate-y-1/2 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] z-0 opacity-[0.04] pointer-events-none text-midnight">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_120s_linear_infinite]">
          {/* Outer perfect circle */}
          <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.15" />
          {/* Inner partial arcs to make the ultra-slow rotation visible */}
          <path d="M50 4 A46 46 0 0 1 96 50" fill="none" stroke="currentColor" strokeWidth="0.4" />
          <path d="M50 96 A46 46 0 0 1 4 50" fill="none" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="50" cy="4" r="0.8" fill="currentColor" />
          <circle cx="50" cy="96" r="0.8" fill="currentColor" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-8 pt-24 xs:pt-28 sm:pt-32 lg:pt-24 pb-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col justify-center max-w-2xl">
            {/* Elegant Sub-headline/Slogan Tag */}
            <span className="font-sans text-[11px] sm:text-[14px] tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-primary/60 uppercase mb-6 sm:mb-8 block whitespace-pre-line leading-relaxed">{t('hero.slogan')}</span>

            {/* 2. Headline H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5.25rem] leading-[1.12] sm:leading-[1.08] mb-10 sm:mb-16 font-serif text-primary">{t('hero.title').split('\n').map((line, i) => (<span key={i}>{line}{i < t('hero.title').split('\n').length - 1 && <br />}</span>))}</h1>

            {/* 4. Description */}
            <p className="text-primary/80 text-base sm:text-lg lg:text-xl mb-12 sm:mb-24 max-w-lg leading-relaxed font-light whitespace-pre-line">{t('hero.desc')}</p>

            {/* 6. CTA */}
            <div>
              <a href="#waitlist" className="inline-block text-center bg-accent px-12 w-full max-w-[320px] py-4 text-xs tracking-widest font-semibold uppercase mb-4 text-white hover:bg-opacity-80 transition-opacity">{t('hero.cta')}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
