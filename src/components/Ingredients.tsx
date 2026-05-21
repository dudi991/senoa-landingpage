import { Moon, Shield, Leaf, Atom, Sprout, Flower2, Sun, Layers, Heart, Sparkle, Sparkles, Brain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const groups = [
  {
    key: "ruhe",
    tagKey: "ing.group_ruhe_tag",
    titleKey: "ing.group_ruhe_title",
    descKey: "ing.group_ruhe_desc",
    icon: Moon,
    ingredients: [
      { name: "Magnesium Bisglycinat & L-Threonat", icon: Atom, key: "mag_combined" },
      { name: "L-Theanin", icon: Sprout, key: "theanine" },
      { name: "Apigenin", icon: Flower2, key: "apigenin" }
    ]
  },
  {
    key: "balance",
    tagKey: "ing.group_balance_tag",
    titleKey: "ing.group_balance_title",
    descKey: "ing.group_balance_desc",
    icon: Shield,
    ingredients: [
      { name: "Ashwagandha (Shoden®)", icon: Shield, key: "ashwa" },
      { name: "Safran", icon: Sun, key: "saffron" },
      { name: "Phosphatidylserin", icon: Layers, key: "phosph" }
    ]
  },
  {
    key: "ritual",
    tagKey: "ing.group_ritual_tag",
    titleKey: "ing.group_ritual_title",
    descKey: "ing.group_ritual_desc",
    icon: Leaf,
    ingredients: [
      { name: "Reishi", icon: Heart, key: "reishi" },
      { name: "Glycin", icon: Moon, key: "glycine" },
      { name: "Vanilla & Tonka Bean", icon: Sparkle, key: "vanilla" }
    ]
  }
];

const trustItems = [
  {
    titleKey: "ing.trust1_title",
    descKey: "ing.trust1_desc",
    icon: Leaf
  },
  {
    titleKey: "ing.trust2_title",
    descKey: "ing.trust2_desc",
    icon: Shield
  },
  {
    titleKey: "ing.trust3_title",
    descKey: "ing.trust3_desc",
    icon: Sparkles
  },
  {
    titleKey: "ing.trust4_title",
    descKey: "ing.trust4_desc",
    icon: Brain
  }
];

const Ingredients = () => {
  const { t } = useLanguage();

  return (
    <section id="ingredients" className="pt-6 pb-4 lg:pt-8 lg:pb-6 bg-white relative z-20">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
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

        {/* Curated Groups */}
        <div className="space-y-4 lg:space-y-5">
          {groups.map((group, gIdx) => {
            const GroupIcon = group.icon;
            return (
              <div 
                key={gIdx} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 ${
                  gIdx < groups.length - 1 ? 'pb-4 lg:pb-5' : ''
                }`}
              >
                {/* Left Column: Group Hero Card */}
                <div className="lg:col-span-3 bg-[#FAF9F6] border border-primary/10 rounded-sm p-5 lg:p-6 flex flex-col items-center text-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-primary/10 bg-white flex items-center justify-center text-primary/70 mb-3 shadow-sm">
                    <GroupIcon className="w-6 h-6" strokeWidth={1} />
                  </div>
                  <span className="font-sans text-[10px] tracking-[0.25em] font-bold text-primary/40 uppercase mb-2">
                    {t(group.tagKey)}
                  </span>
                  <h3 className="font-serif text-3xl lg:text-[2.25rem] text-primary font-light mb-2 leading-tight">
                    {t(group.titleKey)}
                  </h3>
                  <p className="font-sans text-sm text-primary/60 leading-snug font-light max-w-[220px]">
                    {t(group.descKey)}
                  </p>
                </div>

                {/* Right Column: Ingredients Grid */}
                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-start">
                  {group.ingredients.map((ing, iIdx) => {
                    const IngIcon = ing.icon;
                    return (
                      <div 
                        key={iIdx} 
                        className={`flex flex-col items-center text-center px-4 md:px-6 xl:px-8 ${
                          iIdx < 2 ? 'md:border-r border-primary/10' : ''
                        }`}
                      >
                        <div className="w-16 h-16 flex items-center justify-center text-primary/60 mb-2">
                          <IngIcon className="w-9 h-9" strokeWidth={1} />
                        </div>
                        <h4 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-2 min-h-[40px] flex items-center justify-center">
                          {ing.name}
                        </h4>
                        <p className="text-[15px] text-primary/60 leading-snug font-light max-w-[240px]">
                          {t(`ing.${ing.key}`)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-8 lg:mt-10 bg-[#FAF9F6] border border-primary/10 rounded-sm p-5 lg:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y md:divide-y-0 md:divide-x divide-primary/10">
            {trustItems.map((item, idx) => {
              const TrustIcon = item.icon;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col items-center text-center px-4 ${
                    idx > 0 ? 'pt-6 md:pt-0 md:pl-6' : ''
                  }`}
                >
                  <div className="text-primary/70 mb-2">
                    <TrustIcon className="w-8 h-8" strokeWidth={1} />
                  </div>
                  <h5 className="font-sans text-[12px] tracking-[0.15em] font-bold uppercase text-primary mb-2">
                    {t(item.titleKey)}
                  </h5>
                  <p className="text-[13px] text-primary/60 leading-snug font-light max-w-[200px]">
                    {t(item.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ingredients;
