import React, { useState } from 'react';
import { Star, Mail, Gift } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="waitlist" className="pt-10 pb-10 lg:pt-12 lg:pb-12 px-8 bg-white relative z-20">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 items-center">
          
          {/* Column 1 - Left: Serif Headline */}
          <div className="text-left">
            <h2 className="text-4xl lg:text-5xl leading-[1.15] font-serif text-primary tracking-tight max-w-xs">
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
            <p className="text-primary/70 text-sm md:text-base font-light leading-relaxed max-w-[280px] mx-auto mb-8">
              {t('waitlist.desc')}
            </p>
            
            {submitted ? (
              <div className="bg-white border border-primary/10 px-8 py-8 rounded-sm w-full max-w-[320px] shadow-sm flex flex-col items-center justify-center">
                <svg className="w-8 h-8 text-midnight mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase text-center">
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
                  className="w-full bg-white border border-primary/20 text-primary px-6 py-3.5 text-xs focus:outline-none focus:border-primary/50 transition-colors font-light placeholder-primary/40 rounded-sm text-center"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-primary text-white w-full py-4 text-xs font-semibold tracking-widest uppercase hover:bg-opacity-90 transition-opacity rounded-sm"
                >
                  {t('waitlist.submit')}
                </button>
              </form>
            )}
          </div>
          
          {/* Column 3 - Right: Three aligned benefit items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 text-center items-start">
            {/* Item 1 */}
            <div className="flex flex-col items-center max-w-[200px] mx-auto">
              <Star className="w-10 h-10 text-primary/40 mb-5" strokeWidth={1} />
              <h4 className="font-sans text-[13px] tracking-[0.15em] font-bold text-primary uppercase mb-2 leading-snug">
                {t('waitlist.benefit1_title')}
              </h4>
              <p className="text-[15px] text-primary/60 leading-snug font-light">
                {t('waitlist.benefit1_desc')}
              </p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center max-w-[200px] mx-auto">
              <Mail className="w-10 h-10 text-primary/40 mb-5" strokeWidth={1} />
              <h4 className="font-sans text-[13px] tracking-[0.15em] font-bold text-primary uppercase mb-2 leading-snug">
                {t('waitlist.benefit2_title')}
              </h4>
              <p className="text-[15px] text-primary/60 leading-snug font-light">
                {t('waitlist.benefit2_desc')}
              </p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center max-w-[200px] mx-auto">
              <Gift className="w-10 h-10 text-primary/40 mb-5" strokeWidth={1} />
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
