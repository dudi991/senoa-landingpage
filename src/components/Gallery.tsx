import { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // State for desktop click-and-drag horizontal scroll
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const images = [
    "images/abend_lesen.webp",
    "images/abendMeer.webp",
    "images/abendcouch.webp",
    "images/abendterasse.webp",
    "images/abendDraußen.webp",
    "images/abend4.webp",
    "images/HESPYRA_candle.webp"
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed modifier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full bg-white pt-10 lg:pt-16 pb-3 lg:pb-4 overflow-hidden">
      {/* Header Container (remains centered and bounded) */}
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12 mb-16 lg:mb-20">
        <div className="text-center">
          <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/60 uppercase mb-3 block">
            {t('gallery.tag')}
          </span>
          <div className="flex items-center justify-center gap-2 mt-4 mb-6 select-none text-primary/50">
            <div className="w-8 h-[1px] bg-primary/25"></div>
            <img 
              src="images/logo1.webp" 
              alt="HESPYRA Hallmark" 
              className="h-[18px] w-auto opacity-70"
            />
            <div className="w-8 h-[1px] bg-primary/25"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-primary leading-[1.25] max-w-4xl mx-auto font-light mb-6">
            {t('gallery.title').split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t('gallery.title').split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-primary/70 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {t('gallery.desc').split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t('gallery.desc').split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Smooth Click-and-Drag horizontal scroll gallery for both mobile and desktop */}
      <div className="w-full bg-primary/5 transition-colors duration-700">
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex w-full overflow-x-auto overflow-y-hidden scrollbar-hide group transition-all select-none ${
            isDown 
              ? 'cursor-grabbing snap-none' 
              : 'cursor-grab snap-x snap-mandatory'
          }`}
        >
          {images.map((src, index) => (
            <div 
              key={index} 
              className="w-[85vw] sm:w-[50vw] md:w-[33.333vw] lg:w-[25vw] aspect-[16/10] relative flex-shrink-0 cursor-pointer overflow-hidden border-r-[6px] border-white snap-start transition-opacity duration-700 group-hover:opacity-40 hover:!opacity-100 analog-wrapper analog-grain"
            >
              <img 
                src={src} 
                alt={`Lifestyle ${index + 1}`} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.15] hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out analog-image"
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
