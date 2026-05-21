import { useState } from 'react';
import { Droplet, RefreshCw, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const stepImages = [
  "images/kleinerMoment.png",
  "images/ritual.png",
  "images/derAbend.png"
];

const Ritual = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useLanguage();

  return (
    <section id="ritual" className="w-full bg-white pt-10 pb-12 lg:pt-12 lg:pb-14">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        {/* items-stretch ensures the middle column (image) and columns share the exact same height on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          
          {/* Left Column - Clean, full-height alignment */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-1">
            {/* Top block */}
            <div className="text-left">
              <span className="text-[10px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-4 block">
                {t('ritual.tag')}
              </span>
              <div className="w-12 h-[1px] bg-midnight/80"></div>
            </div>

            {/* Middle block (vertically centered next to the image, grouped with description) */}
            <div className="text-left py-6 lg:py-0 my-auto flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl leading-[1.15] font-serif text-primary tracking-tight">
                {t('ritual.title').split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < t('ritual.title').split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className="text-base lg:text-lg text-primary/70 leading-relaxed font-light max-w-sm mt-6 lg:mt-8">
                {t('ritual.desc').split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < t('ritual.desc').split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            {/* Bottom spacer to guarantee perfect mathematical vertical centering of the middle block */}
            <div className="hidden lg:block h-6"></div>
          </div>




          {/* Middle Column - Clean Square Image with Apple-style fluid crossfade */}
          <div className="lg:col-span-4 aspect-square bg-primary/5 overflow-hidden rounded-sm shadow-sm relative">
            {stepImages.map((src, idx) => (
              <img 
                key={idx}
                src={src} 
                alt={`${t('ritual.alt')} ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
                  activeStep === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
          </div>

          {/* Right Column - Typographic Steps with Left Icons spanning the full height of the middle image */}
          <div className="lg:col-span-4 flex flex-col gap-10 lg:gap-0 lg:justify-between lg:h-full lg:pl-8 py-1">
            
            {/* Step I */}
            <div 
              className={`flex flex-row items-start gap-6 cursor-pointer transition-all duration-500 ${
                activeStep === 0 ? 'opacity-100 translate-x-1' : 'opacity-40 hover:opacity-75'
              }`}
              onMouseEnter={() => setActiveStep(0)}
              onClick={() => setActiveStep(0)}
            >
              <div className="text-primary mt-1 flex-shrink-0">
                <Droplet className="w-10 h-10" strokeWidth={1} />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-sans font-normal text-primary/30 tracking-widest">I.</span>
                  <h4 className="font-sans text-[13px] tracking-[0.2em] font-bold uppercase leading-none text-primary">
                    {t('ritual.step1_tag')}
                  </h4>
                </div>
                <p className="text-base lg:text-lg text-primary/70 leading-relaxed font-light max-w-sm">
                  {t('ritual.step1_text')}
                </p>
              </div>
            </div>

            {/* Step II */}
            <div 
              className={`flex flex-row items-start gap-6 cursor-pointer transition-all duration-500 ${
                activeStep === 1 ? 'opacity-100 translate-x-1' : 'opacity-40 hover:opacity-75'
              }`}
              onMouseEnter={() => setActiveStep(1)}
              onClick={() => setActiveStep(1)}
            >
              <div className="text-primary mt-1 flex-shrink-0">
                <RefreshCw className="w-10 h-10" strokeWidth={1} />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-sans font-normal text-primary/30 tracking-widest">II.</span>
                  <h4 className="font-sans text-[13px] tracking-[0.2em] font-bold uppercase leading-none text-primary">
                    {t('ritual.step2_tag')}
                  </h4>
                </div>
                <p className="text-base lg:text-lg text-primary/70 leading-relaxed font-light max-w-sm">
                  {t('ritual.step2_text')}
                </p>
              </div>
            </div>

            {/* Step III */}
            <div 
              className={`flex flex-row items-start gap-6 cursor-pointer transition-all duration-500 ${
                activeStep === 2 ? 'opacity-100 translate-x-1' : 'opacity-40 hover:opacity-75'
              }`}
              onMouseEnter={() => setActiveStep(2)}
              onClick={() => setActiveStep(2)}
            >
              <div className="text-primary mt-1 flex-shrink-0">
                <Moon className="w-10 h-10" strokeWidth={1} />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-sans font-normal text-primary/30 tracking-widest">III.</span>
                  <h4 className="font-sans text-[13px] tracking-[0.2em] font-bold uppercase leading-none text-primary">
                    {t('ritual.step3_tag')}
                  </h4>
                </div>
                <p className="text-base lg:text-lg text-primary/70 leading-relaxed font-light max-w-sm">
                  {t('ritual.step3_text')}
                </p>
              </div>
            </div>

          </div>




        </div>
      </div>
    </section>
  );
};

export default Ritual;

