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
    
    // Ingredients Groups (German)
    'ing.group_ruhe_tag': 'FÜR INNERE STILLE',
    'ing.group_ruhe_title': 'Ruhe',
    'ing.group_ruhe_desc': 'Ausgewählte Nährstoffe für den Moment, in dem der Tag leiser werden darf.',
    
    'ing.group_balance_tag': 'FÜR EMOTIONALE AUSGEGLICHENHEIT',
    'ing.group_balance_title': 'Balance',
    'ing.group_balance_desc': 'Pflanzenextrakte und Mikronährstoffe für einen Abend, der sich ausgeglichener anfühlt.',
    
    'ing.group_ritual_tag': 'FÜR GESCHMACK & MOMENT',
    'ing.group_ritual_title': 'Ritual',
    'ing.group_ritual_desc': 'Sorgfältig ausgewählte Aromen und Essenzen für ein sinnliches Geschmackserlebnis und einen bewussten Moment des Ankommens.',

    // Ingredients descriptions (German)
    'ing.mag_combined': 'Zwei Premium-Magnesiumformen, die deinen Körper am Abend sanft auf Entlastung und Regeneration einstimmen.',
    'ing.theanine': 'Eine feine Aminosäure aus grünem Tee, die hilft, kreisende Gedanken sanft zur Ruhe fließen zu lassen.',
    'ing.apigenin': 'Das wertvolle Herzstück der Kamille, traditionell geschätzt für ein Gefühl von tiefer, warmer Gelassenheit.',
    'ing.ashwa': 'Ein bewährtes Adaptogen, das dem überreizten Geist hilft, sanft zurück in seine natürliche Mitte zu finden.',
    'ing.saffron': 'Kostbarer Safranextrakt, der am Abend eine warme, harmonische Gestimmtheit fördert.',
    'ing.phosph': 'Ein natürlicher Baustein der Zellmembranen, der den Kopf leise auf die nächtliche Regeneration vorbereitet.',
    'ing.reishi': 'Der legendäre Pilz des friedvollen Geistes, geschätzt für seine erdende und ausgleichende Natur.',
    'ing.glycine': 'Eine sanfte Aminosäure, die den biologischen Übergang in die abendliche Ruhephase natürlich begleitet.',
    'ing.vanilla': 'Warme, echte Bourbon-Vanille und Tonkabohne für ein tiefes, wohlig-harmonisches Geschmackserlebnis.',

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
    'gallery.title': 'Moderne Abende brauchen neue Rituale.',
    'gallery.desc': 'Wir leben in Tagen voller Reize, Termine und Entscheidungen. SENOA steht für den bewussten Gegenpol: weniger Funktionieren, mehr Ankommen. Weniger Optimierung, mehr echter Abend.',

    // Waitlist
    'waitlist.title': 'Werde Teil von SENOA.',
    'waitlist.desc': 'Für ruhigere Abende. Für bewusstere Rituale. Für das, was nach dem Arbeitstag kommt.',
    'waitlist.placeholder': 'Deine E-Mail-Adresse',
    'waitlist.submit': 'DABEI SEIN',
    'waitlist.success': 'Du bist Teil von SENOA.',
    'waitlist.benefit1_title': 'Früher Zugang',
    'waitlist.benefit1_desc': 'Als Erste:r erfahren, wenn SENOA startet.',
    'waitlist.benefit2_title': 'Ritual-Impulse',
    'waitlist.benefit2_desc': 'Gedanken, Bilder und kleine Abendmomente.',
    'waitlist.benefit3_title': 'Launch-Vorteile',
    'waitlist.benefit3_desc': 'Exklusive Vorteile zum Start.',

    // Footer
    'footer.about': 'ÜBER UNS',
    'footer.contact': 'KONTAKT',
    'footer.privacy': 'DATENSCHUTZ',
    'footer.imprint': 'IMPRESSUM',
    'navbar.calm_active': 'TAGESMODUS',
    'navbar.calm_inactive': 'ABENDMODUS'
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
    
    // Ingredients Groups (English)
    'ing.group_ruhe_tag': 'FOR INNER STILLNESS',
    'ing.group_ruhe_title': 'Stillness',
    'ing.group_ruhe_desc': 'Selected nutrients for the moment when the day is allowed to grow quiet.',
    
    'ing.group_balance_tag': 'FOR EMOTIONAL BALANCE',
    'ing.group_balance_title': 'Balance',
    'ing.group_balance_desc': 'Botanicals and micronutrients for an evening that feels more centered and balanced.',
    
    'ing.group_ritual_tag': 'FOR TASTE & MOMENT',
    'ing.group_ritual_title': 'Ritual',
    'ing.group_ritual_desc': 'Carefully selected aromas and essences for a sensory taste experience and a conscious moment of arriving.',

    // Ingredients descriptions (English)
    'ing.mag_combined': 'Two premium magnesium forms that gently prepare your body for ease and recovery.',
    'ing.theanine': 'A delicate amino acid from green tea that helps busy thoughts flow into quiet stillness.',
    'ing.apigenin': 'The precious essence of chamomile, traditionally cherished for a feeling of warm, deep serenity.',
    'ing.ashwa': 'A time-honored adaptogen that helps an overstimulated mind gently return to its natural center.',
    'ing.saffron': 'Precious saffron extract, traditionally valued for fostering a warm, harmonious evening mood.',
    'ing.phosph': 'A natural building block of cell membranes, quietly preparing the mind for nightly regeneration.',
    'ing.reishi': 'The legendary mushroom of peace, revered for its grounding and balancing nature.',
    'ing.glycine': 'A gentle amino acid that naturally accompanies your body\'s transition into evening rest.',
    'ing.vanilla': 'Warm, authentic Bourbon vanilla and tonka bean for a comforting, harmonious taste experience.',

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
    'gallery.title': 'Modern evenings require new rituals.',
    'gallery.desc': 'We live in days full of stimuli, deadlines and decisions. SENOA stands for the conscious antipode: less functioning, more arriving. Less optimization, more genuine evening.',

    // Waitlist
    'waitlist.title': 'Become part of SENOA.',
    'waitlist.desc': 'For calmer evenings. For more conscious rituals. For what comes after the workday.',
    'waitlist.placeholder': 'Your email address',
    'waitlist.submit': 'JOIN NOW',
    'waitlist.success': 'You are now part of SENOA.',
    'waitlist.benefit1_title': 'Early Access',
    'waitlist.benefit1_desc': 'Be the first to know when SENOA launches.',
    'waitlist.benefit2_title': 'Ritual Impulses',
    'waitlist.benefit2_desc': 'Thoughts, imagery, and quiet evening moments.',
    'waitlist.benefit3_title': 'Launch Benefits',
    'waitlist.benefit3_desc': 'Exclusive benefits when we launch.',

    // Footer
    'footer.about': 'ABOUT',
    'footer.contact': 'CONTACT',
    'footer.privacy': 'PRIVACY',
    'footer.imprint': 'IMPRINT',
    'navbar.calm_active': 'DAY MODE',
    'navbar.calm_inactive': 'EVENING MODE'
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
