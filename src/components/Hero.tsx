import { Brain, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] lg:h-[85vh] flex items-center overflow-hidden bg-white py-24 lg:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="images/hero.png" 
          alt="SENOA Night Reset Background" 
          className="w-full h-full object-cover object-bottom origin-bottom opacity-85 saturate-[1.12] contrast-[1.04] brightness-[0.93]"
          style={{ transform: `translateY(${scrollY * 0.35}px) scale(1.15)`, willChange: 'transform' }}
        />
        {/* Subtle gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/30 to-transparent lg:from-white/50" />
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
      <div className="relative z-10 w-full px-8 pt-32 lg:pt-24 pb-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col justify-center max-w-2xl">
            {/* 1. Slogan (Hook at Top) */}
            <span className="font-serif italic text-lg lg:text-xl text-primary/60 mb-4 block">
              {t('hero.slogan')}
            </span>
            
            {/* 2. Headline H1 */}
            <h1 className="text-5xl lg:text-[4.75rem] leading-[1.1] mb-16 font-serif text-primary">
              {t('hero.title').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t('hero.title').split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* 4. Description */}
            <p className="text-primary/80 text-base lg:text-lg mb-10 max-w-md leading-relaxed font-light">
              {t('hero.desc')}
            </p>

            {/* 5. Icons */}
            <div className="flex flex-wrap gap-x-16 lg:gap-x-20 gap-y-6 mb-12">
              <div className="flex flex-col items-start">
                <Brain className="w-8 h-8 mb-4 text-primary" strokeWidth={1} />
                <span className="text-[10px] tracking-widest font-semibold uppercase leading-tight">
                  {t('hero.benefit1').split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <Sun className="w-8 h-8 mb-4 text-primary" strokeWidth={1} />
                <span className="text-[10px] tracking-widest font-semibold uppercase leading-tight">
                  {t('hero.benefit3').split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </span>
              </div>
            </div>

            {/* 6. CTA */}
            <div>
              <a href="#waitlist" className="inline-block text-center bg-accent px-12 w-full max-w-[320px] py-4 text-xs tracking-widest font-semibold uppercase mb-4 text-white hover:bg-opacity-80 transition-opacity">
                {t('hero.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
