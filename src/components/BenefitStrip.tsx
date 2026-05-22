import { Sunset, Anchor, Feather, Sparkles, Waves } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const benefits = [
  { icon: Sunset, key: "1" },
  { icon: Anchor, key: "2" },
  { icon: Feather, key: "3" },
  { icon: Sparkles, key: "4" },
  { icon: Waves, key: "5" }
];

const BenefitStrip = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white pt-20 pb-4 px-8 relative z-20">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-3 block">
            {t('benefits.tag')}
          </span>
          <div className="flex items-center justify-center gap-2 mt-4 mb-8 select-none text-primary/30">
            <div className="w-8 h-[1px] bg-primary/10"></div>
            <img 
              src="images/logo1.webp" 
              alt="SENOA Hallmark" 
              className="h-3.5 w-auto opacity-40"
            />
            <div className="w-8 h-[1px] bg-primary/10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-12 lg:gap-y-0">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className={`flex flex-col items-center text-center px-6 lg:px-8 xl:px-12 ${
                  index !== benefits.length - 1 ? 'lg:border-r border-primary/10' : ''
                }`}
              >
                <div className="h-16 flex items-center justify-center mb-6 text-primary/70">
                  <Icon size={48} strokeWidth={1} />
                </div>
                <h3 className="font-sans text-[14px] tracking-[0.2em] uppercase text-primary mb-4 font-bold">
                  {t(`benefits.title${benefit.key}`)}
                </h3>
                <p className="text-primary/70 text-[15px] leading-relaxed font-light max-w-[260px]">
                  {t(`benefits.text${benefit.key}`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitStrip;
