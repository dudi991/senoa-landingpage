import { X } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ImprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImprintModal = ({ isOpen, onClose }: ImprintModalProps) => {
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
          {language === 'de' ? 'Rechtliches' : 'Legal'}
        </span>
        <div className="w-12 h-[1px] bg-primary/20 mb-8"></div>
        
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-primary mb-12">
          {language === 'de' ? 'Impressum' : 'Imprint'}
        </h1>

        {language === 'de' ? (
          /* German Imprint */
          <div className="space-y-8 text-[15px] text-primary/80 leading-relaxed font-light">
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-1">
                HESPYRA<br />
                Dominik Schwab<br />
                Einzelunternehmen
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                Anschrift
              </h2>
              <p className="mt-1">
                Wegäcker 11<br />
                91301 Forchheim<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                Kontakt
              </h2>
              <p className="mt-1">
                siehe Kontaktformular
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                Umsatzsteuer-ID
              </h2>
              <p className="mt-1">
                Eine Umsatzsteuer-Identifikationsnummer wurde noch nicht erteilt.
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                Handelsregister
              </h2>
              <p className="mt-1">
                Das Unternehmen ist nicht im Handelsregister eingetragen.
              </p>
            </div>

            <div className="pt-4 border-t border-primary/5">
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-1">
                Dominik Schwab<br />
                Wegäcker 11<br />
                91301 Forchheim<br />
                Deutschland
              </p>
            </div>
          </div>
        ) : (
          /* English Imprint */
          <div className="space-y-8 text-[15px] text-primary/80 leading-relaxed font-light">
            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                Information according to § 5 DDG
              </h2>
              <p className="mt-1">
                HESPYRA<br />
                Dominik Schwab<br />
                Sole Proprietorship
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                Address
              </h2>
              <p className="mt-1">
                Wegäcker 11<br />
                91301 Forchheim<br />
                Germany
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                Contact
              </h2>
              <p className="mt-1">
                Please use the contact form on this website
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                VAT ID
              </h2>
              <p className="mt-1">
                A VAT identification number has not yet been assigned.
              </p>
            </div>

            <div>
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                Commercial Register
              </h2>
              <p className="mt-1">
                The company is not registered in the commercial register.
              </p>
            </div>

            <div className="pt-4 border-t border-primary/5">
              <h2 className="font-sans text-[13px] tracking-[0.15em] font-bold uppercase text-primary mb-3">
                Responsible for Content according to § 18 para. 2 MStV
              </h2>
              <p className="mt-1">
                Dominik Schwab<br />
                Wegäcker 11<br />
                91301 Forchheim<br />
                Germany
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImprintModal;
