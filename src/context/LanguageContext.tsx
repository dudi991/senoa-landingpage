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
    'hero.slogan': 'Nicht für den Schlaf. Sondern für den Moment davor.',
    'hero.title': 'Feierabend beginnt im Kopf.',
    'hero.desc': 'SENOA ist dein tägliches Abendritual — ein bewusster Übergang aus dem Leistungsmodus in echte Ruhe.\n\nNicht für den Schlaf. Sondern für den Moment davor.',
    'hero.cta': 'TEIL VON SENOA WERDEN',
    'hero.benefit1': 'Mentales Entlasten',
    'hero.benefit2': 'Regeneration',
    'hero.benefit3': 'Innere Stille',

    // BenefitStrip
    'benefits.tag': 'Der innere Wechsel',
    'benefits.title1': 'Abschalten',
    'benefits.text1': 'Den Arbeitstag bewusst hinter dir lassen.',
    'benefits.title2': 'Ankommen',
    'benefits.text2': 'Wieder bei dir statt im nächsten Gedanken.',
    'benefits.title3': 'Loslassen',
    'benefits.text3': 'Weniger müssen. Mehr Ruhe.',
    'benefits.title4': 'Dein Moment',
    'benefits.text4': 'Ein Ritual, das nur dir gehört.',
    'benefits.title5': 'Langsamer werden',
    'benefits.text5': 'Für ruhigere Gedanken und bewusstere Abende.',

    // Philosophy / CustomerStory
    'philosophy.tag': 'Die Philosophie',
    'philosophy.title': 'Der Abend gehört wieder dir.',
    'philosophy.text1': 'Zwischen Meetings, Nachrichten und Gedanken, die nie ganz still werden, verlieren viele Menschen den Moment, an dem der Tag wirklich endet.',
    'philosophy.text2': 'SENOA schafft Raum für genau diesen Übergang — bevor aus Funktionieren wieder Ankommen wird.',

    // EditorialPause
    'pause.line1': 'Weniger funktionieren.',
    'pause.line2': 'Mehr ankommen.',

    // Ritual
    'ritual.tag': 'Das Ritual',
    'ritual.title': 'Ein kleiner Moment. Große Wirkung.',
    'ritual.desc': 'Ein Scoop. Ein ruhiger Moment. Ein bewusstes Signal an dich selbst: Der Tag darf enden.',
    'ritual.step1_tag': 'Ankommen',
    'ritual.step1_text': 'Ein Scoop in dein Glas. Ein erster Moment, der nur dir gehört.',
    'ritual.step2_tag': 'Loslassen',
    'ritual.step2_text': 'Rühren. Atmen. Den Tag langsam aus dem Kopf nehmen.',
    'ritual.step3_tag': 'Ruhiger werden',
    'ritual.step3_text': 'Trink dein Ritual, bevor der Abend in die Nacht übergeht.',
    'ritual.alt': 'SENOA Abendritual Zubereitung Schritt',

    // Ingredients
    'ingredients.tag': 'Rezeptur',
    'ingredients.title': 'Sorgfältig ausgewählt. Für deinen Abend.',
    'ingredients.desc': 'SENOA verbindet ausgewählte Nährstoffe, Pflanzenextrakte und eine warme Geschmackswelt zu einem Ritual, das du jeden Abend wiederholen möchtest.',
    
    // Ingredients descriptions (German)
    'ing.mag_bis': 'Unterstützt Entspannung & Muskelregeneration',
    'ing.mag_thre': 'Unterstützt die kognitive Regeneration',
    'ing.theanine': 'Fördert Ruhe ohne Schläfrigkeit',
    'ing.ashwa': 'Reduziert Stress & unterstützt die Belastbarkeit',
    'ing.saffron': 'Unterstützt Stimmung & emotional Balance',
    'ing.phosph': 'Unterstützt Cortisol-Balance & kognitive Leistung',
    'ing.reishi': 'Unterstützt Immunabwehr & Regeneration',
    'ing.apigenin': 'Fördert Entspannung & Schlafqualität',
    'ing.glycine': 'Unterstützt tiefere Erholung & Schlafqualität',
    'ing.vanilla': 'Bietet natürliches Aroma & wohltuenden Duft',

    // Gallery
    'gallery.tag': 'Evening Culture',
    'gallery.title': 'Moderne Abende brauchen neue Rituale.',
    'gallery.desc': 'SENOA wurde für Menschen entwickelt, die tagsüber viel leisten — und abends bewusst zurück zu Ruhe, Klarheit und echten Momenten finden möchten.',

    // Waitlist
    'waitlist.title': 'Für das, was nach dem Arbeitstag kommt. Dein Abend. Dein Ritual.',
    'waitlist.desc': 'Werde Teil von SENOA.',
    'waitlist.placeholder': 'Deine E-Mail-Adresse',
    'waitlist.submit': 'DABEI SEIN',
    'waitlist.success': 'Du bist Teil von SENOA.',
    'waitlist.benefit1': 'Exklusiver Vorabzugang',
    'waitlist.benefit2': 'Persönliche Updates',
    'waitlist.benefit3': 'Spezielle Angebote',

    // Footer
    'footer.about': 'ÜBER UNS',
    'footer.contact': 'KONTAKT',
    'footer.privacy': 'DATENSCHUTZ',
    'footer.imprint': 'IMPRESSUM'
  },
  en: {
    // Hero
    'hero.slogan': 'Not for sleep. But for the moment before.',
    'hero.title': 'Evening starts in your mind.',
    'hero.desc': 'SENOA is your daily evening ritual — a conscious transition from performance mode into true stillness.\n\nNot for sleep. But for the moment before.',
    'hero.cta': 'BECOME PART OF SENOA',
    'hero.benefit1': 'Mental Unwinding',
    'hero.benefit2': 'Regeneration',
    'hero.benefit3': 'Inner Stillness',

    // BenefitStrip
    'benefits.tag': 'The Inner Transition',
    'benefits.title1': 'Unwind',
    'benefits.text1': 'Consciously leave the workday behind.',
    'benefits.title2': 'Arrive',
    'benefits.text2': 'Returning to yourself instead of the next thought.',
    'benefits.title3': 'Let Go',
    'benefits.text3': 'Fewer demands. More peace.',
    'benefits.title4': 'Your Moment',
    'benefits.text4': 'A ritual that belongs only to you.',
    'benefits.title5': 'Slow Down',
    'benefits.text5': 'For calmer thoughts and more conscious evenings.',

    // Philosophy / CustomerStory
    'philosophy.tag': 'The Philosophy',
    'philosophy.title': 'Reclaim your evening.',
    'philosophy.text1': 'Between meetings, messages, and thoughts that never quite rest, many lose the moment when the day truly ends.',
    'philosophy.text2': 'SENOA creates space for exactly this transition — before functioning becomes arriving again.',

    // EditorialPause
    'pause.line1': 'Less doing.',
    'pause.line2': 'More being.',

    // Ritual
    'ritual.tag': 'The Ritual',
    'ritual.title': 'A small moment. Deep impact.',
    'ritual.desc': 'One scoop. A quiet moment. A conscious signal to yourself: the day is allowed to end.',
    'ritual.step1_tag': 'Arrive',
    'ritual.step1_text': 'One scoop in your glass. A first moment that belongs only to you.',
    'ritual.step2_tag': 'Let Go',
    'ritual.step2_text': 'Stir. Breathe. Slowly letting the day leave your mind.',
    'ritual.step3_tag': 'Slow Down',
    'ritual.step3_text': 'Drink your ritual before evening transitions into the night.',
    'ritual.alt': 'SENOA evening ritual preparation step',

    // Ingredients
    'ingredients.tag': 'Formula',
    'ingredients.title': 'Carefully selected. For your evening.',
    'ingredients.desc': 'SENOA combines selected nutrients, plant extracts, and a warm world of flavor into a ritual you will want to repeat every evening.',
    
    // Ingredients descriptions (English)
    'ing.mag_bis': 'Supports relaxation & muscle recovery',
    'ing.mag_thre': 'Supports cognitive recovery',
    'ing.theanine': 'Promotes calm without drowsiness',
    'ing.ashwa': 'Reduces stress & supports resilience',
    'ing.saffron': 'Supports mood & emotional balance',
    'ing.phosph': 'Supports cortisol balance & cognitive performance',
    'ing.reishi': 'Supports immune health & recovery',
    'ing.apigenin': 'Promotes relaxation & sleep quality',
    'ing.glycine': 'Supports deeper recovery & sleep quality',
    'ing.vanilla': 'Supports natural flavor & aromatic comfort',

    // Gallery
    'gallery.tag': 'Evening Culture',
    'gallery.title': 'Modern evenings require new rituals.',
    'gallery.desc': 'SENOA was developed for people who achieve a lot during the day — and want to consciously return to peace, clarity, and genuine moments in the evening.',

    // Waitlist
    'waitlist.title': 'For what comes after the workday. Your evening. Your ritual.',
    'waitlist.desc': 'Become part of SENOA.',
    'waitlist.placeholder': 'Your email address',
    'waitlist.submit': 'JOIN NOW',
    'waitlist.success': 'You are now part of SENOA.',
    'waitlist.benefit1': 'Exclusive Early Access',
    'waitlist.benefit2': 'Personal Updates',
    'waitlist.benefit3': 'Special Offers',

    // Footer
    'footer.about': 'ABOUT',
    'footer.contact': 'CONTACT',
    'footer.privacy': 'PRIVACY',
    'footer.imprint': 'IMPRINT'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('senoa_lang');
    if (saved === 'de' || saved === 'en') return saved;
    
    // Default to German, but check browser settings
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === 'en' ? 'en' : 'de';
  });

  useEffect(() => {
    localStorage.setItem('senoa_lang', language);
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
