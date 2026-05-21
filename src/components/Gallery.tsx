import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const images = [
    "images/gallery1.png",
    "images/gallery2.png",
    "images/gallery3.png",
    "images/gallery4.png"
  ];

  return (
    <section className="w-full bg-white pt-10 lg:pt-16 pb-3 lg:pb-4 overflow-hidden">
      {/* Header Container (remains centered and bounded) */}
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12 mb-16 lg:mb-20">
        <div className="text-center">
          <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-3 block">
            {t('gallery.tag')}
          </span>
          <div className="w-12 h-[1px] bg-midnight/80 mx-auto mb-6"></div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-primary leading-[1.25] max-w-4xl mx-auto font-light mb-6">
            {t('gallery.title').split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t('gallery.title').split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-primary/70 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {t('gallery.desc')}
          </p>
        </div>
      </div>

      {/* Smooth Manual Swipe Gallery */}
      <div className="w-full bg-primary/5 transition-colors duration-700">
        <div className="flex w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide group">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="w-[85vw] sm:w-[50vw] md:w-[33.333vw] lg:w-[25vw] aspect-[16/10] relative flex-shrink-0 cursor-pointer overflow-hidden border-r-[6px] border-white snap-start transition-opacity duration-700 group-hover:opacity-40 hover:!opacity-100"
            >
              <img 
                src={src} 
                alt={`Lifestyle ${index + 1}`} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
