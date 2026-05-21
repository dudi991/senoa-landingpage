import { useState } from 'react';
import { Atom, Brain, Sprout, Shield, Sun, Layers, Heart, Flower2, Moon, Sparkle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ingredients = [
  { 
    name: "Magnesium Bisglycinat", 
    icon: Atom,
    key: "mag_bis"
  },
  { 
    name: "Magnesium L-Threonat (Magtein®)", 
    icon: Brain,
    key: "mag_thre"
  },
  { 
    name: "Suntheanine® L-Theanine", 
    icon: Sprout,
    key: "theanine"
  },
  { 
    name: "Shoden® Ashwagandha", 
    icon: Shield,
    key: "ashwa"
  },
  { 
    name: "Affron® Safran Extrakt", 
    icon: Sun,
    key: "saffron"
  },
  { 
    name: "Phosphatidylserin", 
    icon: Layers,
    key: "phosph"
  },
  { 
    name: "Reishi Dual Extract", 
    icon: Heart,
    key: "reishi"
  },
  { 
    name: "Apigenin", 
    icon: Flower2,
    key: "apigenin"
  },
  { 
    name: "Glycin", 
    icon: Moon,
    key: "glycine"
  },
  { 
    name: "Madagascar Vanilla & Tonka Bean", 
    icon: Sparkle,
    key: "vanilla"
  }
];

const Ingredients = () => {
  const [activeIngredient, setActiveIngredient] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="ingredients" className="pt-6 pb-14 lg:pt-8 lg:pb-16 px-8 bg-white relative z-20">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-[10px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-3 block">
            {t('ingredients.tag')}
          </span>
          <div className="w-12 h-[1px] bg-midnight/80 mx-auto mb-8"></div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-primary leading-[1.25] max-w-4xl mx-auto font-light mb-4">
            {t('ingredients.title').split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t('ingredients.title').split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-primary/70 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {t('ingredients.desc')}
          </p>
        </div>

        {/* 10-Ingredient Grid (5 Columns on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-12 lg:gap-y-16">
          {ingredients.map((ing, idx) => {
            const Icon = ing.icon;
            // Border classes matching BenefitStrip but adapted for 10-item grid
            const borderClass = `${
              idx % 2 === 0 ? 'border-r border-primary/10' : 'border-r-0'
            } ${
              idx % 5 !== 4 ? 'lg:border-r lg:border-primary/10' : 'lg:border-r-0'
            } px-4 md:px-8 xl:px-12`;
            
            return (
              <div 
                key={idx}
                onClick={() => setActiveIngredient(idx)}
                className={`flex flex-col items-center text-center group cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ${borderClass}`}
              >
                {/* Icon Container with fixed height for perfect alignment */}
                <div className="h-20 w-full flex items-center justify-center mb-6 text-primary/70 group-hover:text-primary transition-colors duration-300">
                  <Icon size={48} strokeWidth={1} />
                </div>
                
                {/* Title */}
                <div className="min-h-12 flex items-start justify-center">
                  <h3 className="font-sans text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-primary/80 group-hover:text-primary transition-colors duration-300 leading-relaxed max-w-[160px] font-bold">
                    {ing.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modern, elegant modal overlay with signature Dimming Effect */}
      {activeIngredient !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-lg transition-all duration-700 ease-in-out"
          onClick={() => setActiveIngredient(null)}
        >
          <div 
            className="bg-white border border-primary/10 max-w-md w-full p-10 md:p-12 relative rounded-sm shadow-xl flex flex-col items-center text-center gap-6 transition-all duration-500 transform scale-100 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveIngredient(null)}
              className="absolute top-6 right-6 text-primary/40 hover:text-primary transition-colors focus:outline-none"
            >
              <X size={16} strokeWidth={1.5} />
            </button>

            {/* Icon */}
            <div className="text-primary/70 mb-2">
              {(() => {
                const Icon = ingredients[activeIngredient].icon;
                return <Icon size={48} strokeWidth={1} />;
              })()}
            </div>

            {/* Name */}
            <h4 className="font-sans text-[11px] tracking-[0.25em] uppercase font-bold text-primary">
              {ingredients[activeIngredient].name}
            </h4>

            {/* Line */}
            <div className="w-8 h-[1px] bg-midnight/80"></div>

            {/* Description */}
            <p className="font-serif text-xl lg:text-2xl text-primary leading-relaxed max-w-sm italic">
              {t(`ing.${ingredients[activeIngredient].key}`)}
            </p>

            {/* Footnote */}
            <span className="text-[8px] tracking-[0.25em] font-semibold uppercase text-primary/30 mt-4">
              SENOA NIGHT RITUAL
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Ingredients;
