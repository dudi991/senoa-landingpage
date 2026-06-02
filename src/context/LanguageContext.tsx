import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  de: {
    // Hero
    'hero.slogan': 'NICHT FÜR DEN SCHLAF.\nFÜR DEN MOMENT DAVOR.',
    'hero.title': 'Feierabend beginnt im Kopf.',
    'hero.desc': 'HESPYRA ist ein trinkbares Abendritual.\nFür den Moment, in dem der Tag leiser werden darf.',
    'hero.cta': 'EINLADUNG ERHALTEN',
    'hero.benefit1': 'Mentales Entlasten',
    'hero.benefit2': 'Regeneration',
    'hero.benefit3': 'Innere Stille',

    // BenefitStrip - Variant B
    'benefits.tag': 'Der Abend beginnt nicht plötzlich.',
    'benefits.title1': 'Lösen',
    'benefits.desc1': 'Der Tag darf sich lösen.',
    'benefits.title2': 'Sammeln',
    'benefits.desc2': 'Aufmerksamkeit kehrt zurück.',
    'benefits.title3': 'Ankommen',
    'benefits.desc3': 'Der Abend wird spürbar.',

    // Philosophy / CustomerStory
    'philosophy.tag': 'Die Philosophie',
    'philosophy.title': 'Der Abend gehört wieder dir.',
    'philosophy.text1': 'Zwischen Gesprächen, Entscheidungen und Gedanken, die noch nachlaufen, geht oft jener Moment verloren, in dem der Tag innerlich endet.',
    'philosophy.text2': 'HESPYRA gibt diesem Übergang eine Form: ein stilles Abendritual für den Moment, in dem der Tag zurücktreten darf.',

    // EditorialPause
    'pause.line1': 'Nicht alles muss mit',
    'pause.line2': 'in den Abend.',

    // Ritual
    'ritual.tag': 'Das Ritual',
    'ritual.title': 'Ein kleiner Moment.',
    'ritual.desc': 'Genug, um den Abend zu beginnen.\n\nWarm. Weich. Zurückhaltend.\nVanille, Tonka und eine ruhige Tiefe.\nNicht süß. Nicht schwer. Nicht laut.\n\nEin Löffel. Ein Glas.\nEin leiser Schnitt im Tag.\n\nNicht nebenbei.\nSondern als Anfang.',
    'ritual.clarity_line1': 'Ein trinkbares Ritual in Pulverform.',
    'ritual.clarity_line2': 'Für den Moment, in dem der Tag zurücktreten darf.',
    'ritual.step1_tag': 'Lösen',
    'ritual.step1_text': 'Ein Löffel ins Glas. Der Tag darf leiser werden.',
    'ritual.step2_tag': 'Sammeln',
    'ritual.step2_text': 'Rühren. Atmen. Aufmerksamkeit kehrt zurück.',
    'ritual.step3_tag': 'Ankommen',
    'ritual.step3_text': 'Trink dein Ritual, bevor der Abend in die Nacht übergeht.',
    'ritual.alt': 'HESPYRA Abendritual Zubereitung Schritt',

    // Ingredients
    'ingredients.tag': 'Rezeptur',
    'ingredients.title': 'Eine ruhige Komposition für den Abend.',
    'ingredients.desc': 'Mineralstoffe, Pflanzenextrakte, Aminosäuren und warme Geschmacksnoten — ausgewählt für ein Ritual, das nicht laut wirken muss.',
    
    // Ingredients Groups (German)
    'ing.group_ruhe_tag': 'Mineralstoffe',
    'ing.group_ruhe_title': 'Lösen',
    'ing.group_ruhe_desc': 'Eine mineralische Basis für den Moment, in dem der Tag nachlassen darf.',
    
    'ing.group_balance_tag': 'Pflanzenextrakte',
    'ing.group_balance_title': 'Sammeln',
    'ing.group_balance_desc': 'Ausgewählte Pflanzenextrakte und Aminosäuren für mehr innere Sammlung.',
    
    'ing.group_ritual_tag': 'Geschmack & Ritual',
    'ing.group_ritual_title': 'Ankommen',
    'ing.group_ritual_desc': 'Warme Noten und vertraute Zutaten, die aus Zubereitung einen stillen Moment des Ankommens machen.',

    // Ingredients descriptions (German)
    'ing.mag_bis': 'Eine mineralische Basis für den Abend.',
    'ing.theanine': 'Aus grünem Tee. Klar, mild, unaufgeregt.',
    'ing.apigenin': 'Ein Pflanzenstoff aus der Kamille. Leise, vertraut, abendlich.',
    'ing.ashwa': 'Eine Wurzel mit langer Tradition — ruhig, erdig, zurückhaltend.',
    'ing.saffron': 'Ein Extrakt mit warmer Tiefe und feiner Präsenz.',
    'ing.phosph': 'Aus pflanzlichen Lecithinen gewonnen. Ein klarer Bestandteil der Komposition.',
    'ing.reishi': 'Ein Pilz mit Tiefe. Traditionell geschätzt, warm im Charakter.',
    'ing.glycine': 'Sanft, leicht süßlich, rund.',
    'ing.vanilla': 'Warm, weich, ritualhaft.',

    // Ingredients Names (German)
    'ing.name_mag_bis': 'Magnesium Bisglycinat & L-Threonat',
    'ing.name_theanine': 'L-Theanin',
    'ing.name_apigenin': 'Apigenin',
    'ing.name_ashwa': 'Ashwagandha',
    'ing.name_saffron': 'Safran',
    'ing.name_phosph': 'Phosphatidylserin',
    'ing.name_reishi': 'Reishi',
    'ing.name_glycine': 'Glycin',
    'ing.name_vanilla': 'Vanille & Tonka',

    // Trust elements (German)
    'ing.trust1_title': 'HOCHWERTIGE ROHSTOFFE',
    'ing.trust1_desc': 'Sorgfältig ausgewählt.',
    'ing.trust2_title': 'OHNE UNNÖTIGE ZUSÄTZE',
    'ing.trust2_desc': 'Frei von künstlichen Aromen, Farbstoffen & Süßstoffen.',
    'ing.trust3_title': 'PERFEKT KOMBINIERT',
    'ing.trust3_desc': 'Durchdachte Synergien für dein Abendritual.',
    'ing.trust4_title': 'MIT EXPERTISE ENTWICKELT',
    'ing.trust4_desc': 'Entwickelt von Experten für dein Wohlbefinden.',

    // Gallery
    'gallery.tag': 'Abendkultur',
    'gallery.title': 'Abendkultur, neu gedacht.',
    'gallery.desc': 'Nicht als Rückzug.\nSondern als bewusster Übergang in einen Abend,\nder wieder dir gehört.',

    // Waitlist
    'waitlist.title': 'Die erste Edition von HESPYRA.',
    'waitlist.desc': 'Wir öffnen HESPYRA in kleinen Schritten.\nTrage dich ein, wenn du den ersten Schritt begleiten möchtest.',
    'waitlist.placeholder': 'E-Mail-Adresse',
    'waitlist.submit': 'Einladung erhalten',
    'waitlist.success': 'Danke. Wir melden uns leise.',
    'waitlist.benefit1_title': 'Erste Edition',
    'waitlist.benefit1_desc': 'Zugang zum ersten Launch.',
    'waitlist.benefit2_title': 'Abendnotizen',
    'waitlist.benefit2_desc': 'Gedanken und Bilder aus der Welt von HESPYRA.',
    'waitlist.benefit3_title': 'Ritual Preview',
    'waitlist.benefit3_desc': 'Ein früher Blick auf Produkt und Komposition.',

    // Footer
    'footer.about': 'ÜBER UNS',
    'footer.contact': 'KONTAKT',
    'footer.privacy': 'DATENSCHUTZ',
    'footer.imprint': 'IMPRESSUM',
    'navbar.calm_active': 'TAGESMODUS',
    'navbar.calm_inactive': 'ABENDMODUS',
    'preloader.subtitle': 'Der Tag darf leiser werden.'
  },
  en: {
    // Hero
    'hero.slogan': 'NOT FOR SLEEP.\nFOR THE MOMENT BEFORE.',
    'hero.title': 'Evening starts in your mind.',
    'hero.desc': 'HESPYRA is a drinkable evening ritual.\nFor the moment when the day is allowed to become quieter.',
    'hero.cta': 'RECEIVE INVITATION',
    'hero.benefit1': 'Mental Unwinding',
    'hero.benefit2': 'Regeneration',
    'hero.benefit3': 'Inner Stillness',

    // BenefitStrip - Variant B
    'benefits.tag': 'The evening does not begin suddenly.',
    'benefits.title1': 'Release',
    'benefits.desc1': 'The day is allowed to dissolve.',
    'benefits.title2': 'Gather',
    'benefits.desc2': 'Attention returns.',
    'benefits.title3': 'Arrive',
    'benefits.desc3': 'The evening becomes tangible.',

    // Philosophy / CustomerStory
    'philosophy.tag': 'The Philosophy',
    'philosophy.title': 'Reclaim your evening.',
    'philosophy.text1': 'Between conversations, decisions, and thoughts that still linger, the moment in which the day ends internally is often lost.',
    'philosophy.text2': 'HESPYRA gives this transition a form: a quiet evening ritual for the moment in which the day is allowed to step back.',

    // EditorialPause
    'pause.line1': 'Not everything has to come',
    'pause.line2': 'into the evening.',

    // Ritual
    'ritual.tag': 'The Ritual',
    'ritual.title': 'A small moment.',
    'ritual.desc': 'Enough to begin the evening.\n\nWarm. Soft. Reserved.\nVanilla, tonka, and a quiet depth.\nNot sweet. Not heavy. Not loud.\n\nOne spoon. One glass.\nA quiet break in the day.\n\nNot in passing.\nBut as a beginning.',
    'ritual.clarity_line1': 'A drinkable ritual in powder form.',
    'ritual.clarity_line2': 'For the moment when the day is allowed to step back.',
    'ritual.step1_tag': 'Release',
    'ritual.step1_text': 'One spoon in your glass. The day is allowed to become quieter.',
    'ritual.step2_tag': 'Gather',
    'ritual.step2_text': 'Stir. Breathe. Attention returns.',
    'ritual.step3_tag': 'Arrive',
    'ritual.step3_text': 'Drink your ritual before evening transitions into the night.',
    'ritual.alt': 'HESPYRA evening ritual preparation step',

    // Ingredients
    'ingredients.tag': 'Formula',
    'ingredients.title': 'A quiet composition for the evening.',
    'ingredients.desc': 'Minerals, plant extracts, amino acids, and warm flavor notes — selected for a ritual that does not need to seem loud.',
    
    // Ingredients Groups (English)
    'ing.group_ruhe_tag': 'Minerals',
    'ing.group_ruhe_title': 'Release',
    'ing.group_ruhe_desc': 'A mineral base for the moment when the day is allowed to wind down.',
    
    'ing.group_balance_tag': 'Plant Extracts',
    'ing.group_balance_title': 'Gather',
    'ing.group_balance_desc': 'Selected plant extracts and amino acids for greater inner focus.',
    
    'ing.group_ritual_tag': 'Flavor & Ritual',
    'ing.group_ritual_title': 'Arrive',
    'ing.group_ritual_desc': 'Warm notes and familiar ingredients that turn preparation into a quiet moment of arrival.',

    // Ingredients descriptions (English)
    'ing.mag_bis': 'A mineral base for the evening.',
    'ing.theanine': 'From green tea. Clear, mild, calm.',
    'ing.apigenin': 'A botanical compound from chamomile. Quiet, familiar, evening-like.',
    'ing.ashwa': 'A root with a long tradition — quiet, earthy, reserved.',
    'ing.saffron': 'An extract with warm depth and a delicate presence.',
    'ing.phosph': 'Sourced from plant lecithins. A clear component of the composition.',
    'ing.reishi': 'A mushroom with depth. Traditionally valued, warm in character.',
    'ing.glycine': 'Gentle, subtly sweet, well-rounded.',
    'ing.vanilla': 'Warm, soft, ritualistic.',

    // Ingredients Names (English)
    'ing.name_mag_bis': 'Magnesium Bisglycinate & L-Threonate',
    'ing.name_theanine': 'L-Theanine',
    'ing.name_apigenin': 'Apigenin',
    'ing.name_ashwa': 'Ashwagandha',
    'ing.name_saffron': 'Saffron',
    'ing.name_phosph': 'Phosphatidylserine',
    'ing.name_reishi': 'Reishi',
    'ing.name_glycine': 'Glycine',
    'ing.name_vanilla': 'Vanilla & Tonka',

    // Trust elements (English)
    'ing.trust1_title': 'HIGH-QUALITY INGREDIENTS',
    'ing.trust1_desc': 'Carefully selected.',
    'ing.trust2_title': 'NO UNNECESSARY ADDITIVES',
    'ing.trust2_desc': 'Free from artificial flavors, colorants & sweeteners.',
    'ing.trust3_title': 'PERFECTLY COMBINED',
    'ing.trust3_desc': 'Thoughtful synergies for your evening ritual.',
    'ing.trust4_title': 'DEVELOPED WITH EXPERTISE',
    'ing.trust4_desc': 'Developed by experts for your well-being.',

    // Gallery
    'gallery.tag': 'Evening Culture',
    'gallery.title': 'Evening culture, reimagined.',
    'gallery.desc': 'Not as a retreat.\nBut as a conscious transition into an evening\nthat belongs to you again.',

    // Waitlist
    'waitlist.title': 'The first edition of HESPYRA.',
    'waitlist.desc': 'We open HESPYRA in small steps.\nSign up if you would like to accompany the first step.',
    'waitlist.placeholder': 'Email address',
    'waitlist.submit': 'Receive invitation',
    'waitlist.success': 'Thank you. We will reach out quietly.',
    'waitlist.benefit1_title': 'First Edition',
    'waitlist.benefit1_desc': 'Access to the first launch.',
    'waitlist.benefit2_title': 'Evening Notes',
    'waitlist.benefit2_desc': 'Thoughts and images from the world of HESPYRA.',
    'waitlist.benefit3_title': 'Ritual Preview',
    'waitlist.benefit3_desc': 'An early glance at the product and composition.',

    // Footer
    'footer.about': 'ABOUT',
    'footer.contact': 'CONTACT',
    'footer.privacy': 'PRIVACY',
    'footer.imprint': 'IMPRINT',
    'navbar.calm_active': 'DAY MODE',
    'navbar.calm_inactive': 'EVENING MODE',
    'preloader.subtitle': 'May the day become quieter.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('hespyra_lang');
    if (saved === 'de' || saved === 'en') return saved;
    
    // Default to German, but check browser settings
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === 'en' ? 'en' : 'de';
  });

  useEffect(() => {
    localStorage.setItem('hespyra_lang', language);
    // Update HTML lang attribute dynamically for SEO and accessibility
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
