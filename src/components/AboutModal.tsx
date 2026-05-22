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
          SENOA
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
        <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-3 block">
          {language === 'de' ? 'Über uns' : 'About us'}
        </span>
        <div className="w-12 h-[1px] bg-primary/20 mb-8"></div>

        {language === 'de' ? (
          /* German content */
          <div className="space-y-8 text-[15px] text-primary/80 leading-relaxed font-light">
            <p className="text-[17px] lg:text-[19px] text-primary/95 leading-relaxed font-normal">
              SENOA entsteht aus einem einfachen Gedanken: Gute Produkte sollten nicht nur funktionieren — sie sollten einen echten Unterschied im Alltag machen.
            </p>

            <p>
              Wir sind ein kleines Team, das an Themen arbeiten möchte, die uns selbst bewegen: Ruhe, bewusste Routinen, hochwertige Produkte und die Frage, wie moderne Menschen nach einem vollen Tag wieder bei sich ankommen können.
            </p>

            <p>
              Dabei geht es uns nicht darum, möglichst laut zu sein oder möglichst viel zu versprechen. Wir möchten Dinge entwickeln, die sich sinnvoll anfühlen. Mit Menschen, die wir mögen. Für Menschen, die sich nach mehr Ruhe, Klarheit und echten Momenten sehnen.
            </p>

            <p className="pt-6 border-t border-primary/5 font-medium text-primary">
              SENOA ist unser Anfang: ein Abendritual für den Übergang aus dem Leistungsmodus in echte Ruhe.
            </p>
          </div>
        ) : (
          /* English content */
          <div className="space-y-8 text-[15px] text-primary/80 leading-relaxed font-light">
            <p className="text-[17px] lg:text-[19px] text-primary/95 leading-relaxed font-normal">
              SENOA originates from a simple thought: Good products shouldn't just function — they should make a real difference in daily life.
            </p>

            <p>
              We are a small team that wants to work on topics that move us personally: peace, conscious routines, premium products, and the question of how modern people can return to themselves after a full day.
            </p>

            <p>
              For us, it's not about being as loud as possible or promising the most. We want to develop things that feel meaningful. With people we like. For people who long for more peace, clarity, and genuine moments.
            </p>

            <p className="pt-6 border-t border-primary/5 font-medium text-primary">
              SENOA is our beginning: an evening ritual for the transition from performance mode into true stillness.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutModal;
