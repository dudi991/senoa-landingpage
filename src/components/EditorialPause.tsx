import { useLanguage } from '../context/LanguageContext';

const EditorialPause = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white relative overflow-hidden py-20 md:py-28 flex justify-center items-center z-10">
      {/* Soft elegant glowing aura representing quiet, warm space */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/3 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-[4.5rem] text-primary leading-[1.3] antialiased tracking-wide font-light">
          {t('pause.line1')}
          <span className="italic text-primary/80 block mt-4 md:mt-6">{t('pause.line2')}</span>
        </h2>
      </div>
    </section>
  );
};

export default EditorialPause;
