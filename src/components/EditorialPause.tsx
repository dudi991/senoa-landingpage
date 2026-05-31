import { useLanguage } from '../context/LanguageContext';

const EditorialPause = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white relative overflow-hidden py-24 md:py-36 flex justify-center items-center z-10">
      {/* Soft elegant glowing aura representing quiet, warm space */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/3 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 px-6 flex flex-col items-center">
        {/* Subtle, feines Punkt-Ornament über dem Zitat für Zitat-Charakter */}
        <div className="w-[3.5px] h-[3.5px] rounded-full bg-primary/30 mb-6 md:mb-8 select-none"></div>

        {/* Semantischer Zitatblock statt Überschrift H2, perfekt skaliert für Mobilgeräte */}
        <blockquote className="font-serif text-3xl md:text-5xl lg:text-[4.25rem] text-primary leading-[1.4] antialiased tracking-wide font-light max-w-3xl mx-auto">
          {t('pause.line1')}
          <span className="italic text-primary/80 block mt-3 md:mt-5">{t('pause.line2')}</span>
        </blockquote>
      </div>
    </section>
  );
};

export default EditorialPause;
