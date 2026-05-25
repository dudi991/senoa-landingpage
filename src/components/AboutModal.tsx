import { X } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  const { language } = useLanguage();

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto overflow-x-hidden animate-fade-in">
      {/* Top Navigation / Close Bar */}
      <div className="w-full px-6 sm:px-8 py-6 sm:py-8 flex justify-between items-center fixed top-0 left-0 bg-white/95 backdrop-blur-sm z-[10000] border-b border-primary/5">
        <span className="font-sans text-xl tracking-[0.15em] font-bold text-primary">
          HESPYRA
        </span>
        <button 
          onClick={onClose}
          className="flex items-center gap-2 font-sans text-[12px] tracking-[0.2em] font-bold text-primary/60 hover:text-primary transition-colors focus:outline-none cursor-pointer"
        >
          {language === 'de' ? 'SCHLIESSEN' : 'CLOSE'}
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>

      {/* Content Container */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8 pt-28 sm:pt-32 pb-16 sm:pb-24 font-sans text-primary break-words">
        <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/60 uppercase mb-3 block">
          {language === 'de' ? 'Über uns' : 'About us'}
        </span>
        <div className="w-12 h-[1px] bg-primary/20 mb-8"></div>

        {language === 'de' ? (
          /* German content */
          <div className="space-y-6 text-[16px] lg:text-[17px] text-primary/80 leading-relaxed font-light">
            <p>
              HESPYRA entstand aus der Beobachtung, dass der Tag oft äußerlich endet, bevor er innerlich wirklich vorbei ist.
            </p>

            <p>
              Der letzte Termin ist vorüber. Der Laptop ist geschlossen. Die Wohnung wird stiller. Und doch läuft etwas weiter: Gedanken, Entscheidungen, Gespräche, ein Rest von Tempo.
            </p>

            <p>
              Wir wollten diesem Moment mehr Aufmerksamkeit schenken.
            </p>

            <p>
              Nicht, weil der Abend optimiert werden muss.<br />
              Sondern weil er einen bewussten Anfang verdient.
            </p>

            <p>
              HESPYRA ist eine moderne Evening Ritual Brand aus Deutschland. Wir entwickeln Produkte für den Übergang vom Tag in echte Ruhe — ruhig, sinnlich und ohne laute Versprechen.
            </p>

            <p>
              Unser erstes Ritual ist eine trinkbare Komposition für den Abend: ausgewählte Mineralien, Pflanzenextrakte und warme Geschmacksnoten, verbunden mit einer einfachen Handlung. Ein Scoop. Ein Glas. Ein Moment, in dem der Tag leiser werden darf.
            </p>

            <div className="pl-4 border-l border-primary/20 py-1 space-y-2">
              <p>Wir glauben an Produkte, die nicht drängen.</p>
              <p>An Rituale statt Routinen.</p>
              <p>An Ruhe statt Optimierung.</p>
              <p>An Qualität, die nicht laut werden muss.</p>
            </div>

            <p className="pt-6 border-t border-primary/10">
              HESPYRA ist unser Anfang.<br />
              Für den Moment, in dem der Abend wirklich beginnt.
            </p>
          </div>
        ) : (
          /* English content */
          <div className="space-y-6 text-[16px] lg:text-[17px] text-primary/80 leading-relaxed font-light">
            <p>
              HESPYRA was born from the observation that the day often ends outwardly before it is truly over inwardly.
            </p>

            <p>
              The last appointment is done. The laptop is closed. The apartment grows quieter. And yet, something continues to run: thoughts, decisions, conversations, a residue of pace.
            </p>

            <p>
              We wanted to give this moment more attention.
            </p>

            <p>
              Not because the evening needs to be optimized.<br />
              But because it deserves a conscious beginning.
            </p>

            <p>
              HESPYRA is a modern evening ritual brand from Germany. We develop products for the transition from the day into true stillness — quiet, sensory, and without loud promises.
            </p>

            <p>
              Our first ritual is a drinkable composition for the evening: selected minerals, plant extracts, and warm flavor notes, combined with a simple action. A scoop. A glass. A moment in which the day is allowed to grow quieter.
            </p>

            <div className="pl-4 border-l border-primary/20 py-1 space-y-2">
              <p>We believe in products that do not rush.</p>
              <p>In rituals instead of routines.</p>
              <p>In stillness instead of optimization.</p>
              <p>In quality that does not need to get loud.</p>
            </div>

            <p className="pt-6 border-t border-primary/10">
              HESPYRA is our beginning.<br />
              For the moment when the evening truly starts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutModal;
