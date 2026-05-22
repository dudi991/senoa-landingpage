import { useLanguage } from '../context/LanguageContext';

const CustomerStory = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="w-full bg-white pt-10 lg:pt-14 pb-12 lg:pb-16 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          
          {/* Left Column - Editorial Storytelling Vertically Centered with Category Label pinned to top */}
          <div className="lg:col-span-5 flex flex-col justify-center py-0 relative lg:min-h-[500px]">
            
            {/* Elegant category label - Pinned to the top on desktop */}
            <div className="text-left mb-8 lg:mb-0 lg:absolute lg:top-0 lg:left-0">
              <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-3 block">
                {t('philosophy.tag')}
              </span>
              <div className="flex items-center gap-2 mt-4 select-none text-primary/30">
                <div className="w-8 h-[1px] bg-primary/10"></div>
                <img 
                  src="images/logo1.webp" 
                  alt="SENOA Hallmark" 
                  className="h-3.5 w-auto opacity-40"
                />
                <div className="w-8 h-[1px] bg-primary/10"></div>
              </div>
            </div>
            
            {/* Elegant Grand Typographic Headline */}
            <h2 className="text-4xl lg:text-[3.25rem] leading-[1.15] font-serif text-primary tracking-tight mb-6 lg:mb-8">
              {t('philosophy.title').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t('philosophy.title').split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
            
            {/* Story Paragraphs beautifully coupled with Headline */}
            <div className="space-y-6 text-base lg:text-[17px] text-primary/70 leading-relaxed font-light max-w-md">
              <p>
                {t('philosophy.text1')}
              </p>
              <p>
                {t('philosophy.text2')}
              </p>
            </div>
          </div>

          {/* Right Column - Large Widescreen Editorial Image */}
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[500px] rounded-sm overflow-hidden shadow-sm">
            <img 
              src="images/derAbend.webp" 
              alt={t('philosophy.title')} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomerStory;
