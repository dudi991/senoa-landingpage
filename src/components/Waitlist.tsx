import React, { useState } from 'react';
import { Star, Mail, Gift } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError('');

    // MailerLite account and form IDs from Vite environment variables (or fallbacks)
    const accountId = import.meta.env.VITE_MAILERLITE_ACCOUNT_ID || '2372265';
    const formId = import.meta.env.VITE_MAILERLITE_FORM_ID || '188201569953514830';

    try {
      const formData = new FormData();
      formData.append('fields[email]', email);
      formData.append('ajax', '1');

      const response = await fetch(`https://assets.mailerlite.com/jsonp/${accountId}/forms/${formId}/subscribe`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      let isSuccess = false;
      try {
        const data = await response.json();
        isSuccess = data && (data.success === true || data.success === 'true');
      } catch (parseError) {
        // Fallback: If JSON parsing fails but HTTP status is 200 OK, treat it as successful
        isSuccess = response.ok;
      }

      if (isSuccess) {
        setSubmitted(true);
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (err) {
      setError(
        language === 'de'
          ? 'Es gab ein Problem beim Eintragen in die Warteliste. Bitte versuche es noch einmal.'
          : 'There was a problem joining the waitlist. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="pt-10 pb-10 lg:pt-12 lg:pb-12 px-8 bg-white relative z-20">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 items-center">
          
          {/* Column 1 - Left: Serif Headline */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl leading-[1.15] font-serif text-primary tracking-tight max-w-xs mx-auto md:mx-0">
              {t('waitlist.title').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t('waitlist.title').split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
          
          {/* Column 2 - Middle: Description & Clean Form */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-primary/70 text-sm md:text-base font-light leading-relaxed max-w-[320px] mx-auto mb-8">
              {t('waitlist.desc').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t('waitlist.desc').split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
            
            {submitted ? (
              <div className="bg-white border border-primary/10 px-8 py-8 rounded-sm w-full max-w-[320px] shadow-sm flex flex-col items-center justify-center">
                <svg className="w-8 h-8 text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-primary text-sm font-light text-center">
                  {t('waitlist.success')}
                </p>
              </div>
            ) : (
              <form 
                className="flex flex-col gap-3 w-full max-w-[320px] mx-auto"
                onSubmit={handleSubmit}
              >
                <input 
                  type="email" 
                  placeholder={t('waitlist.placeholder')} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-white border border-primary/20 text-primary px-6 py-3.5 text-xs focus:outline-none focus:border-primary/50 transition-colors font-light placeholder-primary/40 rounded-sm text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                  autoComplete="off"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary text-white w-full py-4 text-xs font-semibold tracking-widest uppercase hover:bg-opacity-90 transition-opacity rounded-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting 
                    ? (language === 'de' ? 'WIRD GESENDET...' : 'SENDING...') 
                    : t('waitlist.submit')}
                </button>
                {error && (
                  <p className="text-[11px] font-sans text-red-500 mt-1 tracking-wide animate-fade-in text-center leading-normal">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
          
          {/* Column 3 - Right: Three aligned benefit items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 text-center items-start">
            {/* Item 1 */}
            <div className="flex flex-col items-center max-w-[200px] mx-auto">
              <Star className="w-10 h-10 text-primary/60 mb-5" strokeWidth={1} />
              <h4 className="font-sans text-[13px] tracking-[0.15em] font-bold text-primary uppercase mb-2 leading-snug">
                {t('waitlist.benefit1_title')}
              </h4>
              <p className="text-[15px] text-primary/60 leading-snug font-light">
                {t('waitlist.benefit1_desc')}
              </p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center max-w-[200px] mx-auto">
              <Mail className="w-10 h-10 text-primary/60 mb-5" strokeWidth={1} />
              <h4 className="font-sans text-[13px] tracking-[0.15em] font-bold text-primary uppercase mb-2 leading-snug">
                {t('waitlist.benefit2_title')}
              </h4>
              <p className="text-[15px] text-primary/60 leading-snug font-light">
                {t('waitlist.benefit2_desc')}
              </p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center max-w-[200px] mx-auto">
              <Gift className="w-10 h-10 text-primary/60 mb-5" strokeWidth={1} />
              <h4 className="font-sans text-[13px] tracking-[0.15em] font-bold text-primary uppercase mb-2 leading-snug">
                {t('waitlist.benefit3_title')}
              </h4>
              <p className="text-[15px] text-primary/60 leading-snug font-light">
                {t('waitlist.benefit3_desc')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Waitlist;
