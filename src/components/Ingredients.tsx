import { useLanguage } from '../context/LanguageContext';

const groups = [
  {
    key: "ruhe",
    tagKey: "ing.group_ruhe_tag",
    titleKey: "ing.group_ruhe_title",
    descKey: "ing.group_ruhe_desc",
    ingredients: [
      { nameKey: "ing.name_mag_bis", key: "mag_bis" },
      { nameKey: "ing.name_theanine", key: "theanine" },
      { nameKey: "ing.name_apigenin", key: "apigenin" }
    ]
  },
  {
    key: "balance",
    tagKey: "ing.group_balance_tag",
    titleKey: "ing.group_balance_title",
    descKey: "ing.group_balance_desc",
    ingredients: [
      { nameKey: "ing.name_ashwa", key: "ashwa" },
      { nameKey: "ing.name_saffron", key: "saffron" },
      { nameKey: "ing.name_phosph", key: "phosph" }
    ]
  },
  {
    key: "ritual",
    tagKey: "ing.group_ritual_tag",
    titleKey: "ing.group_ritual_title",
    descKey: "ing.group_ritual_desc",
    ingredients: [
      { nameKey: "ing.name_reishi", key: "reishi" },
      { nameKey: "ing.name_glycine", key: "glycine" },
      { nameKey: "ing.name_vanilla", key: "vanilla" }
    ]
  }
];

const Ingredients = () => {
  const { t } = useLanguage();

  return (
    <section id="ingredients" className="bg-white pt-4 md:pt-16 pb-16 md:pb-20 px-8 lg:px-12 relative z-20">
      <div className="max-w-[1800px] mx-auto">
        {/* Centered Section Header formatted exactly like other sections */}
        <div className="mb-12 md:mb-16 lg:mb-24 text-center">
          <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/60 uppercase mb-3 block">
            {t('ingredients.tag')}
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

        {/* MOBILE VIEWPORT LAYOUT: Stacked chapters (Chapter 1 + ingredients, Chapter 2 + ingredients, etc.) */}
        <div className="md:hidden flex flex-col space-y-16 divide-y divide-primary/10">
          {groups.map((group, idx) => {
            const num = idx + 1;
            return (
              <div 
                key={`mobile-${group.key}`}
                className="pt-12 first:pt-0 flex flex-col items-start text-left w-full max-w-[320px] mx-auto"
              >
                {/* Number */}
                <span className="font-sans text-xs tracking-[0.2em] font-semibold text-primary/60 mb-6 block select-none">
                  {String(num).padStart(2, '0')}
                </span>

                {/* Massive Serif Title */}
                <h3 className="font-serif text-5xl tracking-tight text-primary mb-4 whitespace-nowrap">
                  {t(group.titleKey)}
                </h3>
                
                {/* Thin subtle horizontal divider line */}
                <div className="w-10 h-[1px] bg-primary/20 mb-4"></div>
                
                {/* Description sentence */}
                <p className="font-sans text-base leading-relaxed font-light text-primary/70 mb-8">
                  {t(group.descKey)}
                </p>

                {/* Ingredients List */}
                <div className="space-y-8 w-full mt-2">
                  {group.ingredients.map((ing, iIdx) => (
                    <div key={iIdx} className="flex flex-col items-start text-left">
                      <h4 className="font-sans text-[16px] font-semibold tracking-wide text-primary mb-1.5">
                        {t(ing.nameKey)}
                      </h4>
                      <p className="font-sans text-base leading-relaxed font-light text-primary/70">
                        {t(`ing.${ing.key}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP VIEWPORT LAYOUT: Pure Grid Rows to guarantee perfect horizontal alignment across columns */}
        <div className="hidden md:grid grid-cols-3 max-w-[1500px] mx-auto">
          {/* Row 1: Chapters Headers & Descriptions */}
          {groups.map((group, idx) => {
            const num = idx + 1;
            return (
              <div 
                key={`desktop-head-${group.key}`}
                className={`px-6 md:px-12 lg:px-16 pb-12 flex justify-center ${idx < 2 ? 'border-r border-primary/10' : ''}`}
              >
                <div className="flex flex-col items-start text-left w-full max-w-[280px]">
                  {/* Number */}
                  <span className="font-sans text-xs tracking-[0.2em] font-semibold text-primary/60 mb-10 block select-none">
                    {String(num).padStart(2, '0')}
                  </span>

                  {/* Massive Serif Title */}
                  <h3 className="font-serif text-5xl lg:text-6xl tracking-tight text-primary mb-6 whitespace-nowrap">
                    {t(group.titleKey)}
                  </h3>
                  
                  {/* Thin subtle horizontal divider line */}
                  <div className="w-10 h-[1px] bg-primary/20 mb-6"></div>
                  
                  {/* Description sentence */}
                  <p className="font-sans text-base lg:text-[17px] leading-relaxed font-light text-primary/70">
                    {t(group.descKey)}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Row 2: First Ingredients */}
          {groups.map((group, idx) => {
            const ing = group.ingredients[0];
            return (
              <div 
                key={`desktop-ing-0-${group.key}`}
                className={`px-6 md:px-12 lg:px-16 py-8 flex justify-center ${idx < 2 ? 'border-r border-primary/10' : ''}`}
              >
                <div className="flex flex-col items-start text-left w-full max-w-[280px]">
                  <h4 className="font-sans text-[16px] lg:text-[17px] font-semibold tracking-wide text-primary mb-1.5">
                    {t(ing.nameKey)}
                  </h4>
                  <p className="font-sans text-base lg:text-[17px] leading-relaxed font-light text-primary/70">
                    {t(`ing.${ing.key}`)}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Row 3: Second Ingredients */}
          {groups.map((group, idx) => {
            const ing = group.ingredients[1];
            return (
              <div 
                key={`desktop-ing-1-${group.key}`}
                className={`px-6 md:px-12 lg:px-16 py-8 flex justify-center ${idx < 2 ? 'border-r border-primary/10' : ''}`}
              >
                <div className="flex flex-col items-start text-left w-full max-w-[280px]">
                  <h4 className="font-sans text-[16px] lg:text-[17px] font-semibold tracking-wide text-primary mb-1.5">
                    {t(ing.nameKey)}
                  </h4>
                  <p className="font-sans text-base lg:text-[17px] leading-relaxed font-light text-primary/70">
                    {t(`ing.${ing.key}`)}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Row 4: Third Ingredients */}
          {groups.map((group, idx) => {
            const ing = group.ingredients[2];
            return (
              <div 
                key={`desktop-ing-2-${group.key}`}
                className={`px-6 md:px-12 lg:px-16 pt-8 pb-4 flex justify-center ${idx < 2 ? 'border-r border-primary/10' : ''}`}
              >
                <div className="flex flex-col items-start text-left w-full max-w-[280px]">
                  <h4 className="font-sans text-[16px] lg:text-[17px] font-semibold tracking-wide text-primary mb-1.5">
                    {t(ing.nameKey)}
                  </h4>
                  <p className="font-sans text-base lg:text-[17px] leading-relaxed font-light text-primary/70">
                    {t(`ing.${ing.key}`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
