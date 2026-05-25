import { useLanguage } from '../context/LanguageContext';

const BenefitStrip = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white pt-24 pb-12 md:pb-20 px-8 lg:px-12 relative z-20">
      <div className="max-w-[1800px] mx-auto">
        {/* Centered Section Header formatted exactly like other sections */}
        <div className="mb-16 lg:mb-24 text-center">
          <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/60 uppercase mb-3 block">
            {t('benefits.tag')}
          </span>
          <div className="flex items-center justify-center gap-2 mt-4 select-none text-primary/50">
            <div className="w-8 h-[1px] bg-primary/25"></div>
            <img 
              src="images/logo1.webp" 
              alt="HESPYRA Hallmark" 
              className="h-[18px] w-auto opacity-70"
            />
            <div className="w-8 h-[1px] bg-primary/25"></div>
          </div>
        </div>

        {/* 3 columns grid with vertical separators, left-aligned column content, centered in an ultra-wide container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-primary/10 max-w-[1500px] mx-auto">
          {[1, 2, 3].map((num) => (
            <div 
              key={num}
              className="px-6 md:px-12 lg:px-16 py-8 md:py-0"
            >
              {/* Centered content wrapper that is internally left-aligned */}
              <div className="flex flex-col items-start text-left w-full max-w-[320px] mx-auto">
                {/* Number - Slightly darker (text-primary/60) and with more vertical distance (mb-10) */}
                <span className="font-sans text-xs tracking-[0.2em] font-semibold text-primary/60 mb-10 block select-none">
                  {String(num).padStart(2, '0')}
                </span>

                {/* Massive Serif Title */}
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary mb-6 md:whitespace-nowrap">
                  {t(`benefits.title${num}`)}
                </h3>
                
                {/* Thin subtle horizontal divider line - Left-aligned */}
                <div className="w-10 h-[1px] bg-primary/20 mb-6"></div>
                
                {/* Description sentence */}
                <p className="font-sans text-base lg:text-[17px] leading-relaxed font-light text-primary/70">
                  {t(`benefits.desc${num}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitStrip;
