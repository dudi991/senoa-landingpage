import { X, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

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

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitted(false);
      setIsSubmitting(false);
      setError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isFormValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '' && email.includes('@');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/webjoker@gmx.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Nachricht: message,
          _subject: `Neue Nachricht von ${name} über SENOA Landingpage`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setError('Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es noch einmal.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto animate-fade-in">
      {/* Top Navigation / Close Bar */}
      <div className="w-full px-8 py-8 flex justify-between items-center fixed top-0 left-0 bg-white/95 backdrop-blur-sm z-[10000] border-b border-primary/5">
        <span className="font-sans text-xl tracking-[0.15em] font-bold text-primary">
          SENOA
        </span>
        <button 
          onClick={onClose}
          className="flex items-center gap-2 font-sans text-[12px] tracking-[0.2em] font-bold text-primary/60 hover:text-primary transition-colors focus:outline-none cursor-pointer"
        >
          SCHLIESSEN
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>

      {/* Content Container */}
      <div className="max-w-2xl mx-auto px-8 pt-32 pb-24 font-sans text-primary">
        <span className="font-sans text-[11px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-3 block">
          Kontakt
        </span>
        <div className="w-12 h-[1px] bg-primary/20 mb-8"></div>
        
        <p className="text-primary/70 text-lg font-light leading-relaxed mb-12">
          Wir würden uns freuen, von dir zu hören – wir antworten so schnell wie möglich.
        </p>

        {isSubmitted ? (
          <div className="bg-primary/[0.02] border border-primary/10 p-8 text-center animate-fade-in">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-6 h-6" strokeWidth={2} />
            </div>
            <h3 className="font-serif text-2xl text-primary mb-3">Vielen Dank.</h3>
            <p className="text-primary/60 font-light text-[15px] max-w-md mx-auto leading-relaxed">
              Deine Nachricht wurde erfolgreich übermittelt. Wir lesen jede Nachricht aufmerksam und melden uns so schnell wie möglich bei dir.
            </p>
            <button
              onClick={onClose}
              className="mt-8 font-sans text-[11px] tracking-[0.15em] font-bold uppercase py-3 px-6 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Fenster schließen
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-sans text-[11px] tracking-[0.15em] font-bold uppercase text-primary/60 mb-2">
                Dein Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dominik Schwab"
                className="w-full border-b border-primary/20 bg-transparent py-3 focus:border-primary focus:outline-none transition-colors duration-300 font-light text-[15px] placeholder-primary/20"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-sans text-[11px] tracking-[0.15em] font-bold uppercase text-primary/60 mb-2">
                Deine Emailadresse
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dominik@example.com"
                className="w-full border-b border-primary/20 bg-transparent py-3 focus:border-primary focus:outline-none transition-colors duration-300 font-light text-[15px] placeholder-primary/20"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-sans text-[11px] tracking-[0.15em] font-bold uppercase text-primary/60 mb-2">
                Deine Nachricht
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Schreibe hier deine Nachricht an uns..."
                className="w-full border-b border-primary/20 bg-transparent py-3 focus:border-primary focus:outline-none transition-colors duration-300 font-light text-[15px] placeholder-primary/20 resize-none leading-relaxed"
              />
            </div>

            {error && (
              <p className="text-red-500 font-light text-[14px] bg-red-50 border border-red-100 p-4 rounded-sm">
                {error}
              </p>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full font-sans text-[13px] tracking-[0.15em] font-bold uppercase py-4 px-8 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? 'WIRD GESENDET...' : 'NACHRICHT SENDEN'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
